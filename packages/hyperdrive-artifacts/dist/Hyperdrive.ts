export const Hyperdrive = 
{
  "abi": [
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnexpectedSuccess",
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
          "name": "vaultSharePrice",
          "type": "uint256"
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
          "name": "vaultSharePrice",
          "type": "uint256"
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
          "type": "uint256"
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
          "name": "vaultSharePrice",
          "type": "uint256"
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
          "type": "uint256"
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
          "name": "vaultSharePrice",
          "type": "uint256"
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
    },
    {
      "stateMutability": "nonpayable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "DOMAIN_SEPARATOR",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PERMIT_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "name": "batchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "checkpoint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "closeLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "closeShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "collectGovernanceFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "initialize",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "openLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "openShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "permitForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "redeemWithdrawalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "setApproval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "setApprovalBridge",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "setGovernance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "name": "setPauser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target0",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target1",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target2",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target3",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target4",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "transferFromBridge",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
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
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "PERMIT_TYPEHASH()": "30adf81f",
    "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
    "collectGovernanceFee((address,bool,bytes))": "3e691db9",
    "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
    "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
    "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
    "pause(bool)": "02329a29",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
    "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "target0()": "21b57d53",
    "target1()": "eac3e799",
    "target2()": "a6e8a859",
    "target3()": "d899e112",
    "target4()": "f3f70707",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"collectGovernanceFee((address,bool,bytes))\":{\"returns\":{\"_0\":\"proceeds The amount of base collected.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the pool.\",\"_target0\":\"The target0 address.\",\"_target1\":\"The target1 address.\",\"_target2\":\"The target2 address.\",\"_target3\":\"The target3 address.\",\"_target4\":\"The target4 address.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}}},\"title\":\"Hyperdrive\",\"version\":1},\"userdoc\":{\"errors\":{\"UnexpectedSuccess()\":[{\"notice\":\"Thrown when a read-only call succeeds. The proxy architecture         uses a force-revert delegatecall pattern to ensure that calls         that are intended to be read-only are actually read-only.\"}]},\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates a Hyperdrive pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains         stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains         stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains         stateful functions.\"},\"target4()\":{\"notice\":\"The target4 address. This is a logic contract that contains all         some stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"______  __                           _________      _____      ___  / / /____  ___________________________  /_________(_)__   ______      __  /_/ /__  / / /__  __ \\\\  _ \\\\_  ___/  __  /__  ___/_  /__ | / /  _ \\\\      _  __  / _  /_/ /__  /_/ /  __/  /   / /_/ / _  /   _  / __ |/ //  __/      /_/ /_/  _\\\\__, / _   ___/\\\\___//_/    \\\\__,_/  /_/    /_/  _____/ \\\\___/               /____/   /_/                     XXX          ++          ++          XXX     ############   XXXXX        ++0+        +0++        XXXXX   ###########   ##////////////########       ++00++      ++00++       ########///////////##  ##////////////##########      ++000++    ++000++      ##########///////////##  ##%%%%%%/////      ######     ++0000+    +0000++     ######     /////%%%%%%##    %%%%%%%%&&             ##   ++0000+    +0000++   ##           &&%%%%%%%%%         %&&&                ##  +o000+    +000o+  ##              &&&%                              ## ++00+-    -+00++ ##                               #% ++0+      +0++ %#                               ###-:Oo.++++.oO:-###                                ##: 00++++++00 :##                    #S###########* 0++00+++00++0 *##########S#                  #S               % $ 0+++0 $ %              S#                #S   ----------   %+++++:#:+++++%-----------    S#              #S   ------------- %++++: ### :++++%------------    S#             S    ---------------%++++*\\\\ | /*++++%-------------     S           #S     --------------- %++++ ~W~ ++++%666--o UUUU o-      S#         #S?      ---------------  %+++++~+++++%&&&8 o  \\\\  /  o       ?S#        ?*????**+++;::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::;+++**????*?      #?+////////////////////////////////////////////////////////////////+?#    #;;;;;//////////////////////////////////////////////////////////////;;;;;#  S;;;;;;;;;//////////////////////////////////////////////////////////;;;;;;;;;S /;;;;;;;;;;;///////////////////////////////////////////////////////;;;;;;;;;;;;\\\\ |||OOOOOOOO||OOOOOOOO=========== __  ___        ===========OOOOOOOO||OOOOOOOO||| |||OOOOOOOO||OOOOOOOO===========|  \\\\[__ |   \\\\  /===========OOOOOOOO||OOOOOOOO||| |||OOOOOOOO||OOOOOOOO===========|__/[___|___ \\\\/ ===========OOOOOOOO||OOOOOOOO||| |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| |||////////000000000000\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|:::::::::::::::|////////00000000000\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\||| SSS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\000000000000////////|:::::0x666:::::|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\00000000000//////////SSS SSS|||||||||||||||||||||||||||||:::::::::::::::||||||||||||||||||||||||||||||SSS SSSSSSSS|_______________|______________||_______________|______________|SSSSSSSS SSSSSSSS                                                                SSSSSSSS SSSSSSSS                                                                SSSSSSSSA fixed-rate AMM that mints bonds on demand for longs and shorts.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/external/Hyperdrive.sol\":\"Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0xf13876323d6ec88f8d677f9e97a41e38527266af0a73dbf53ac5c51e6cbe8bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://be3e4a1d83c4f02b81d38002f7862d817b543702a6e90245eeabe4a1ae1f5051\",\"dweb:/ipfs/QmfYCQ8oTCo3UkdWZ4easGZoAYRrSiZGtbi7SsR8oP2PDJ\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x0977333fa78572cbd52deafbd01876e232a75170bcbb729cde37bfae8904a611\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1d7ad748953d0e16b4b3a287fa7fe9cdada42a1feebf0db4fe9b4deff2c079fb\",\"dweb:/ipfs/QmNsbYuGteVv9op5AfpQheqNTjA6C1GKdCEwCiFmX1Tnje\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0xb03ab9d883c7eb223ea4d05d5d22cb30834b5589958459ff70236c0e1f571e7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0f33134385373cb53eed027b88befe223e70ebe77ecf19dea6ce3f2a677458d1\",\"dweb:/ipfs/QmWGrRr12zS1ccFzMx82zwWoJfHDZf6bdYivNF4FA3Ggd3\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x85425352d87169445470983b3ba518d759f022bdbaec6dad3bdd606a96f9b826\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://453da96e4ddc453cace00c54c3bef55ab1b7f7d23c86c33e5aa09c395ee54496\",\"dweb:/ipfs/QmXkvqn4mEq8sw4ofFW4jKR3QCmPJTxGmKh6YWpKp5sU3w\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e\",\"dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x90ef3178580af58520b7517024b091b7d67cc6e6e93cb46e061ba2fd7366b972\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5841dbfb9498e283d26855ca25caebfb080c8893474858acfde43ba60c0cb2ae\",\"dweb:/ipfs/QmRYGcn4qmjt7eYsr4oMANBignijf6oz4UFmRA679zt9YD\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x7213875367ce751a20f5371d79880a2b6105bf3e20fab65044ecb9f921d17deb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://179935e894ba8c1a634b3ab16d1b3914c60218fa5dbf61e58ce54df06ac6d75e\",\"dweb:/ipfs/QmRif44MTY2U9b5TFAiEStZYu2TiUQUANi5VQKDvQezeKy\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0xa1d8f02c9a470eb0e1fd2ff6195546fe414485cd3c86b9f0ff0734db27699ab6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://54324a6775bbd1cfc643504cb9b0e53fd843f5a4d9d7c38c07526d6b3e44299d\",\"dweb:/ipfs/QmREvG68YXkt1EoWZL131BpnB4fWjvK6GXJpzi6msL1VzB\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x960457a35b1ac18fa27eb3524d29f8ae14cbdbad70a20c46aab62a20330eadb0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e1f791d322e18bada00890b63c13de0d4db9e37b5583d005e44e4516b0f6eb71\",\"dweb:/ipfs/Qmd8Tcer76uSNah2eKA5g9MTSVGwch9HXZUYfMN7YEWeZ7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
          "inputs": [],
          "type": "error",
          "name": "UnexpectedSuccess"
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
              "type": "uint256",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
              "type": "uint256",
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
              "name": "vaultSharePrice",
              "type": "uint256",
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
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "fallback"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "PERMIT_TYPEHASH",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "addLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "batchTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "checkpoint"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "closeLong",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "closeShort",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "collectGovernanceFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "initialize",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "openLong",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "openShort",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "pause"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_approved",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "permitForAll"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeemWithdrawalShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApproval"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalBridge"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setGovernance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setPauser"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "target0",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "target1",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "target2",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "target3",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "target4",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFromBridge"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "collectGovernanceFee((address,bool,bytes))": {
            "returns": {
              "_0": "proceeds The amount of base collected."
            }
          },
          "constructor": {
            "params": {
              "_config": "The configuration of the pool.",
              "_target0": "The target0 address.",
              "_target1": "The target1 address.",
              "_target2": "The target2 address.",
              "_target3": "The target3 address.",
              "_target4": "The target4 address."
            }
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "details": "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.",
            "params": {
              "_approved": "A boolean of the approval status to set to.",
              "deadline": "The timestamp which the signature must be submitted by        to be valid.",
              "owner": "The owner of the account which is having the new approval set.",
              "r": "The r component of the ECDSA signature.",
              "s": "The s component of the ECDSA signature.",
              "spender": "The address which will be allowed to spend owner's tokens.",
              "v": "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "DOMAIN_SEPARATOR()": {
            "notice": "This contract's EIP712 domain separator."
          },
          "PERMIT_TYPEHASH()": {
            "notice": "The typehash used to calculate the EIP712 hash for `permitForAll`."
          },
          "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows LPs to supply liquidity for LP shares."
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "notice": "Transfers several assets from one account to another"
          },
          "checkpoint(uint256)": {
            "notice": "Allows anyone to mint a new checkpoint."
          },
          "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Closes a long position with a specified maturity time."
          },
          "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Closes a short position with a specified maturity time."
          },
          "collectGovernanceFee((address,bool,bytes))": {
            "notice": "This function collects the governance fees accrued by the pool."
          },
          "constructor": {
            "notice": "Instantiates a Hyperdrive pool."
          },
          "initialize(uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows the first LP to initialize the market with a target APR."
          },
          "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Opens a long position."
          },
          "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Opens a short position."
          },
          "pause(bool)": {
            "notice": "Allows an authorized address to pause this contract."
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "notice": "Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature."
          },
          "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
            "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."
          },
          "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows an LP to burn shares and withdraw from the pool."
          },
          "setApproval(uint256,address,uint256)": {
            "notice": "Allows a user to set an approval for an individual asset with         specific amount."
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "notice": "Allows the compatibility linking contract to forward calls to         set asset approvals."
          },
          "setApprovalForAll(address,bool)": {
            "notice": "Allows a user to approve an operator to use all of their assets."
          },
          "setGovernance(address)": {
            "notice": "Allows governance to change governance."
          },
          "setPauser(address,bool)": {
            "notice": "Allows governance to change the pauser status of an address."
          },
          "target0()": {
            "notice": "The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions."
          },
          "target1()": {
            "notice": "The target1 address. This is a logic contract that contains         stateful functions."
          },
          "target2()": {
            "notice": "The target2 address. This is a logic contract that contains         stateful functions."
          },
          "target3()": {
            "notice": "The target3 address. This is a logic contract that contains         stateful functions."
          },
          "target4()": {
            "notice": "The target4 address. This is a logic contract that contains all         some stateful functions."
          },
          "transferFrom(uint256,address,address,uint256)": {
            "notice": "Transfers an amount of assets from the source to the destination."
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "notice": "Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge."
          }
        },
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
        "contracts/src/external/Hyperdrive.sol": "Hyperdrive"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/external/Hyperdrive.sol": {
        "keccak256": "0xf13876323d6ec88f8d677f9e97a41e38527266af0a73dbf53ac5c51e6cbe8bf8",
        "urls": [
          "bzz-raw://be3e4a1d83c4f02b81d38002f7862d817b543702a6e90245eeabe4a1ae1f5051",
          "dweb:/ipfs/QmfYCQ8oTCo3UkdWZ4easGZoAYRrSiZGtbi7SsR8oP2PDJ"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/external/HyperdriveTarget0.sol": {
        "keccak256": "0x0977333fa78572cbd52deafbd01876e232a75170bcbb729cde37bfae8904a611",
        "urls": [
          "bzz-raw://1d7ad748953d0e16b4b3a287fa7fe9cdada42a1feebf0db4fe9b4deff2c079fb",
          "dweb:/ipfs/QmNsbYuGteVv9op5AfpQheqNTjA6C1GKdCEwCiFmX1Tnje"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3",
        "urls": [
          "bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398",
          "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16",
        "urls": [
          "bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240",
          "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97",
        "urls": [
          "bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1",
          "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveEvents.sol": {
        "keccak256": "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd",
        "urls": [
          "bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f",
          "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597",
        "urls": [
          "bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477",
          "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"
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
        "keccak256": "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a",
        "urls": [
          "bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3",
          "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenEvents.sol": {
        "keccak256": "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002",
        "urls": [
          "bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3",
          "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191",
        "urls": [
          "bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd",
          "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868",
        "urls": [
          "bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb",
          "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveAdmin.sol": {
        "keccak256": "0xb03ab9d883c7eb223ea4d05d5d22cb30834b5589958459ff70236c0e1f571e7e",
        "urls": [
          "bzz-raw://0f33134385373cb53eed027b88befe223e70ebe77ecf19dea6ce3f2a677458d1",
          "dweb:/ipfs/QmWGrRr12zS1ccFzMx82zwWoJfHDZf6bdYivNF4FA3Ggd3"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0x85425352d87169445470983b3ba518d759f022bdbaec6dad3bdd606a96f9b826",
        "urls": [
          "bzz-raw://453da96e4ddc453cace00c54c3bef55ab1b7f7d23c86c33e5aa09c395ee54496",
          "dweb:/ipfs/QmXkvqn4mEq8sw4ofFW4jKR3QCmPJTxGmKh6YWpKp5sU3w"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveCheckpoint.sol": {
        "keccak256": "0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582",
        "urls": [
          "bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e",
          "dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLP.sol": {
        "keccak256": "0x90ef3178580af58520b7517024b091b7d67cc6e6e93cb46e061ba2fd7366b972",
        "urls": [
          "bzz-raw://5841dbfb9498e283d26855ca25caebfb080c8893474858acfde43ba60c0cb2ae",
          "dweb:/ipfs/QmRYGcn4qmjt7eYsr4oMANBignijf6oz4UFmRA679zt9YD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLong.sol": {
        "keccak256": "0x7213875367ce751a20f5371d79880a2b6105bf3e20fab65044ecb9f921d17deb",
        "urls": [
          "bzz-raw://179935e894ba8c1a634b3ab16d1b3914c60218fa5dbf61e58ce54df06ac6d75e",
          "dweb:/ipfs/QmRif44MTY2U9b5TFAiEStZYu2TiUQUANi5VQKDvQezeKy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveMultiToken.sol": {
        "keccak256": "0xa1d8f02c9a470eb0e1fd2ff6195546fe414485cd3c86b9f0ff0734db27699ab6",
        "urls": [
          "bzz-raw://54324a6775bbd1cfc643504cb9b0e53fd843f5a4d9d7c38c07526d6b3e44299d",
          "dweb:/ipfs/QmREvG68YXkt1EoWZL131BpnB4fWjvK6GXJpzi6msL1VzB"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveShort.sol": {
        "keccak256": "0x960457a35b1ac18fa27eb3524d29f8ae14cbdbad70a20c46aab62a20330eadb0",
        "urls": [
          "bzz-raw://e1f791d322e18bada00890b63c13de0d4db9e37b5583d005e44e4516b0f6eb71",
          "dweb:/ipfs/Qmd8Tcer76uSNah2eKA5g9MTSVGwch9HXZUYfMN7YEWeZ7"
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
        "keccak256": "0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2",
        "urls": [
          "bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b",
          "dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst"
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
        "keccak256": "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf",
        "urls": [
          "bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d",
          "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744",
        "urls": [
          "bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a",
          "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/LPMath.sol": {
        "keccak256": "0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266",
        "urls": [
          "bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244",
          "dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b",
        "urls": [
          "bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1",
          "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346",
        "urls": [
          "bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6",
          "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"
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
    "absolutePath": "contracts/src/external/Hyperdrive.sol",
    "id": 2382,
    "exportedSymbols": {
      "Hyperdrive": [
        2381
      ],
      "HyperdriveAdmin": [
        8595
      ],
      "HyperdriveBase": [
        9507
      ],
      "HyperdriveCheckpoint": [
        9965
      ],
      "HyperdriveLP": [
        10802
      ],
      "HyperdriveLong": [
        11646
      ],
      "HyperdriveShort": [
        12979
      ],
      "HyperdriveStorage": [
        13187
      ],
      "HyperdriveTarget0": [
        3128
      ],
      "IHyperdrive": [
        7411
      ],
      "IHyperdriveCore": [
        7571
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:15323:15",
    "nodes": [
      {
        "id": 1808,
        "nodeType": "PragmaDirective",
        "src": "39:23:15",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 1810,
        "nodeType": "ImportDirective",
        "src": "64:70:15",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
        "file": "../external/HyperdriveTarget0.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2382,
        "sourceUnit": 3129,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1809,
              "name": "HyperdriveTarget0",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3128,
              "src": "73:17:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1812,
        "nodeType": "ImportDirective",
        "src": "135:60:15",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2382,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1811,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "144:11:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1814,
        "nodeType": "ImportDirective",
        "src": "196:68:15",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveCore.sol",
        "file": "../interfaces/IHyperdriveCore.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2382,
        "sourceUnit": 7572,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1813,
              "name": "IHyperdriveCore",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7571,
              "src": "205:15:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1816,
        "nodeType": "ImportDirective",
        "src": "265:66:15",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveAdmin.sol",
        "file": "../internal/HyperdriveAdmin.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2382,
        "sourceUnit": 8596,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1815,
              "name": "HyperdriveAdmin",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8595,
              "src": "274:15:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1818,
        "nodeType": "ImportDirective",
        "src": "332:64:15",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
        "file": "../internal/HyperdriveBase.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2382,
        "sourceUnit": 9508,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1817,
              "name": "HyperdriveBase",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9507,
              "src": "341:14:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1820,
        "nodeType": "ImportDirective",
        "src": "397:76:15",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveCheckpoint.sol",
        "file": "../internal/HyperdriveCheckpoint.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2382,
        "sourceUnit": 9966,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1819,
              "name": "HyperdriveCheckpoint",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9965,
              "src": "406:20:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1822,
        "nodeType": "ImportDirective",
        "src": "474:64:15",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
        "file": "../internal/HyperdriveLong.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2382,
        "sourceUnit": 11647,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1821,
              "name": "HyperdriveLong",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11646,
              "src": "483:14:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1824,
        "nodeType": "ImportDirective",
        "src": "539:60:15",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
        "file": "../internal/HyperdriveLP.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2382,
        "sourceUnit": 10803,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1823,
              "name": "HyperdriveLP",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10802,
              "src": "548:12:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1826,
        "nodeType": "ImportDirective",
        "src": "600:66:15",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveShort.sol",
        "file": "../internal/HyperdriveShort.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2382,
        "sourceUnit": 12980,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1825,
              "name": "HyperdriveShort",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 12979,
              "src": "609:15:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1828,
        "nodeType": "ImportDirective",
        "src": "667:70:15",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
        "file": "../internal/HyperdriveStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2382,
        "sourceUnit": 13188,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1827,
              "name": "HyperdriveStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13187,
              "src": "676:17:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2381,
        "nodeType": "ContractDefinition",
        "src": "4029:11332:15",
        "nodes": [
          {
            "id": 1844,
            "nodeType": "VariableDeclaration",
            "src": "4380:32:15",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1842,
              "nodeType": "StructuredDocumentation",
              "src": "4193:182:15",
              "text": "@notice The target0 address. This is a logic contract that contains all\n         of the getters for the Hyperdrive pool as well as some stateful\n         functions."
            },
            "functionSelector": "21b57d53",
            "mutability": "immutable",
            "name": "target0",
            "nameLocation": "4405:7:15",
            "scope": 2381,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1843,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "4380:7:15",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1847,
            "nodeType": "VariableDeclaration",
            "src": "4531:32:15",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1845,
              "nodeType": "StructuredDocumentation",
              "src": "4419:107:15",
              "text": "@notice The target1 address. This is a logic contract that contains\n         stateful functions."
            },
            "functionSelector": "eac3e799",
            "mutability": "immutable",
            "name": "target1",
            "nameLocation": "4556:7:15",
            "scope": 2381,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1846,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "4531:7:15",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1850,
            "nodeType": "VariableDeclaration",
            "src": "4682:32:15",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1848,
              "nodeType": "StructuredDocumentation",
              "src": "4570:107:15",
              "text": "@notice The target2 address. This is a logic contract that contains\n         stateful functions."
            },
            "functionSelector": "a6e8a859",
            "mutability": "immutable",
            "name": "target2",
            "nameLocation": "4707:7:15",
            "scope": 2381,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1849,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "4682:7:15",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1853,
            "nodeType": "VariableDeclaration",
            "src": "4833:32:15",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1851,
              "nodeType": "StructuredDocumentation",
              "src": "4721:107:15",
              "text": "@notice The target3 address. This is a logic contract that contains\n         stateful functions."
            },
            "functionSelector": "d899e112",
            "mutability": "immutable",
            "name": "target3",
            "nameLocation": "4858:7:15",
            "scope": 2381,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1852,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "4833:7:15",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1856,
            "nodeType": "VariableDeclaration",
            "src": "4993:32:15",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1854,
              "nodeType": "StructuredDocumentation",
              "src": "4872:116:15",
              "text": "@notice The target4 address. This is a logic contract that contains all\n         some stateful functions."
            },
            "functionSelector": "f3f70707",
            "mutability": "immutable",
            "name": "target4",
            "nameLocation": "5018:7:15",
            "scope": 2381,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1855,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "4993:7:15",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1862,
            "nodeType": "VariableDeclaration",
            "src": "5115:174:15",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 1857,
              "nodeType": "StructuredDocumentation",
              "src": "5032:78:15",
              "text": "@notice The typehash used to calculate the EIP712 hash for `permitForAll`."
            },
            "functionSelector": "30adf81f",
            "mutability": "constant",
            "name": "PERMIT_TYPEHASH",
            "nameLocation": "5139:15:15",
            "scope": 2381,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 1858,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "5115:7:15",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "5065726d6974466f72416c6c2861646472657373206f776e65722c61646472657373207370656e6465722c626f6f6c205f617070726f7665642c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529",
                  "id": 1860,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "5188:91:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673",
                    "typeString": "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\""
                  },
                  "value": "PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673",
                    "typeString": "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\""
                  }
                ],
                "id": 1859,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "5165:9:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 1861,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "5165:124:15",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1865,
            "nodeType": "VariableDeclaration",
            "src": "5353:41:15",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 1863,
              "nodeType": "StructuredDocumentation",
              "src": "5296:52:15",
              "text": "@notice This contract's EIP712 domain separator."
            },
            "functionSelector": "3644e515",
            "mutability": "immutable",
            "name": "DOMAIN_SEPARATOR",
            "nameLocation": "5378:16:15",
            "scope": 2381,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 1864,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "5353:7:15",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "id": 1929,
            "nodeType": "FunctionDefinition",
            "src": "5771:1074:15",
            "nodes": [],
            "body": {
              "id": 1928,
              "nodeType": "Block",
              "src": "5993:852:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 1887,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1885,
                      "name": "target0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1844,
                      "src": "6047:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1886,
                      "name": "_target0",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1871,
                      "src": "6057:8:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6047:18:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1888,
                  "nodeType": "ExpressionStatement",
                  "src": "6047:18:15"
                },
                {
                  "expression": {
                    "id": 1891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1889,
                      "name": "target1",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1847,
                      "src": "6075:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1890,
                      "name": "_target1",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1873,
                      "src": "6085:8:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6075:18:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1892,
                  "nodeType": "ExpressionStatement",
                  "src": "6075:18:15"
                },
                {
                  "expression": {
                    "id": 1895,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1893,
                      "name": "target2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1850,
                      "src": "6103:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1894,
                      "name": "_target2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1875,
                      "src": "6113:8:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6103:18:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1896,
                  "nodeType": "ExpressionStatement",
                  "src": "6103:18:15"
                },
                {
                  "expression": {
                    "id": 1899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1897,
                      "name": "target3",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1853,
                      "src": "6131:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1898,
                      "name": "_target3",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1877,
                      "src": "6141:8:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6131:18:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1900,
                  "nodeType": "ExpressionStatement",
                  "src": "6131:18:15"
                },
                {
                  "expression": {
                    "id": 1903,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1901,
                      "name": "target4",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1856,
                      "src": "6159:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1902,
                      "name": "_target4",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1879,
                      "src": "6169:8:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6159:18:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1904,
                  "nodeType": "ExpressionStatement",
                  "src": "6159:18:15"
                },
                {
                  "expression": {
                    "id": 1926,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1905,
                      "name": "DOMAIN_SEPARATOR",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1865,
                      "src": "6522:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "454950373132446f6d61696e28737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                                  "id": 1910,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6623:72:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd",
                                    "typeString": "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\""
                                  },
                                  "value": "EIP712Domain(string version,uint256 chainId,address verifyingContract)"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd",
                                    "typeString": "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\""
                                  }
                                ],
                                "id": 1909,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "6592:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 1911,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6592:121:15",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "31",
                                      "id": 1915,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "6747:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                        "typeString": "literal_string \"1\""
                                      },
                                      "value": "1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                        "typeString": "literal_string \"1\""
                                      }
                                    ],
                                    "id": 1914,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6741:5:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                      "typeString": "type(bytes storage pointer)"
                                    },
                                    "typeName": {
                                      "id": 1913,
                                      "name": "bytes",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6741:5:15",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 1916,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6741:10:15",
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
                                "id": 1912,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -8,
                                "src": "6731:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                              },
                              "id": 1917,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6731:21:15",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "expression": {
                                "id": 1918,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -4,
                                "src": "6770:5:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 1919,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6776:7:15",
                              "memberName": "chainid",
                              "nodeType": "MemberAccess",
                              "src": "6770:13:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 1922,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "6809:4:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Hyperdrive_$2381",
                                    "typeString": "contract Hyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Hyperdrive_$2381",
                                    "typeString": "contract Hyperdrive"
                                  }
                                ],
                                "id": 1921,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6801:7:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 1920,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6801:7:15",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 1923,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6801:13:15",
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
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "id": 1907,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "6564:3:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 1908,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "6568:6:15",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "6564:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 1924,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6564:264:15",
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
                        "id": 1906,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "6541:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 1925,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6541:297:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "6522:316:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 1927,
                  "nodeType": "ExpressionStatement",
                  "src": "6522:316:15"
                }
              ]
            },
            "documentation": {
              "id": 1866,
              "nodeType": "StructuredDocumentation",
              "src": "5444:322:15",
              "text": "@notice Instantiates a Hyperdrive pool.\n @param _config The configuration of the pool.\n @param _target0 The target0 address.\n @param _target1 The target1 address.\n @param _target2 The target2 address.\n @param _target3 The target3 address.\n @param _target4 The target4 address."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 1882,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1869,
                    "src": "5984:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 1883,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 1881,
                  "name": "HyperdriveStorage",
                  "nameLocations": [
                    "5966:17:15"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 13187,
                  "src": "5966:17:15"
                },
                "nodeType": "ModifierInvocation",
                "src": "5966:26:15"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 1880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1869,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "5822:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 1929,
                  "src": "5792:37:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 1868,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1867,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "5792:11:15",
                        "5804:10:15"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "5792:22:15"
                    },
                    "referencedDeclaration": 7215,
                    "src": "5792:22:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1871,
                  "mutability": "mutable",
                  "name": "_target0",
                  "nameLocation": "5847:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 1929,
                  "src": "5839:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1870,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5839:7:15",
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
                  "id": 1873,
                  "mutability": "mutable",
                  "name": "_target1",
                  "nameLocation": "5873:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 1929,
                  "src": "5865:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1872,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5865:7:15",
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
                  "id": 1875,
                  "mutability": "mutable",
                  "name": "_target2",
                  "nameLocation": "5899:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 1929,
                  "src": "5891:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1874,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5891:7:15",
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
                  "id": 1877,
                  "mutability": "mutable",
                  "name": "_target3",
                  "nameLocation": "5925:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 1929,
                  "src": "5917:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5917:7:15",
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
                  "id": 1879,
                  "mutability": "mutable",
                  "name": "_target4",
                  "nameLocation": "5951:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 1929,
                  "src": "5943:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1878,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5943:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5782:183:15"
            },
            "returnParameters": {
              "id": 1884,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5993:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1983,
            "nodeType": "FunctionDefinition",
            "src": "7179:940:15",
            "nodes": [],
            "body": {
              "id": 1982,
              "nodeType": "Block",
              "src": "7242:877:15",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    1938,
                    1940
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1938,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "7387:7:15",
                      "nodeType": "VariableDeclaration",
                      "scope": 1982,
                      "src": "7382:12:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1937,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "7382:4:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1940,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "7409:10:15",
                      "nodeType": "VariableDeclaration",
                      "scope": 1982,
                      "src": "7396:23:15",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1939,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "7396:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1945,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1943,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1932,
                        "src": "7444:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "expression": {
                        "id": 1941,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "7423:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1942,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7431:12:15",
                      "memberName": "delegatecall",
                      "nodeType": "MemberAccess",
                      "src": "7423:20:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) returns (bool,bytes memory)"
                      }
                    },
                    "id": 1944,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7423:27:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7381:69:15"
                },
                {
                  "condition": {
                    "id": 1946,
                    "name": "success",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1938,
                    "src": "7464:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1953,
                  "nodeType": "IfStatement",
                  "src": "7460:76:15",
                  "trueBody": {
                    "id": 1952,
                    "nodeType": "Block",
                    "src": "7473:63:15",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 1947,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7411,
                              "src": "7494:11:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 1949,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7506:17:15",
                            "memberName": "UnexpectedSuccess",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7372,
                            "src": "7494:29:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 1950,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7494:31:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1951,
                        "nodeType": "RevertStatement",
                        "src": "7487:38:15"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    1955
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1955,
                      "mutability": "mutable",
                      "name": "selector",
                      "nameLocation": "7552:8:15",
                      "nodeType": "VariableDeclaration",
                      "scope": 1982,
                      "src": "7545:15:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 1954,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "7545:6:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1960,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1958,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1940,
                        "src": "7570:10:15",
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
                      "id": 1957,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "7563:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": {
                        "id": 1956,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "7563:6:15",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 1959,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7563:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7545:36:15"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 1965,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1961,
                      "name": "selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1955,
                      "src": "7595:8:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 1962,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7411,
                          "src": "7607:11:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 1963,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7619:10:15",
                        "memberName": "ReturnData",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7360,
                        "src": "7607:22:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                          "typeString": "function (bytes memory) pure"
                        }
                      },
                      "id": 1964,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7630:8:15",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "7607:31:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "7595:43:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1968,
                  "nodeType": "IfStatement",
                  "src": "7591:160:15",
                  "trueBody": {
                    "id": 1967,
                    "nodeType": "Block",
                    "src": "7640:111:15",
                    "statements": [
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "7663:78:15",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "returndata",
                                        "nodeType": "YulIdentifier",
                                        "src": "7692:10:15"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "7704:2:15",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "7688:3:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "7688:19:15"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "returndata",
                                        "nodeType": "YulIdentifier",
                                        "src": "7715:10:15"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "7709:5:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "7709:17:15"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "7681:6:15"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "7681:46:15"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "7681:46:15"
                            }
                          ]
                        },
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 1940,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7692:10:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 1940,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "7715:10:15",
                            "valueSize": 1
                          }
                        ],
                        "id": 1966,
                        "nodeType": "InlineAssembly",
                        "src": "7654:87:15"
                      }
                    ]
                  }
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "7905:126:15",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "returndata",
                                  "nodeType": "YulIdentifier",
                                  "src": "7930:10:15"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7942:3:15",
                                  "type": "",
                                  "value": "0x4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7926:3:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7926:20:15"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "returndata",
                                      "nodeType": "YulIdentifier",
                                      "src": "7958:10:15"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "7952:5:15"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "7952:17:15"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7971:1:15",
                                  "type": "",
                                  "value": "4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "7948:3:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7948:25:15"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7919:6:15"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7919:55:15"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7919:55:15"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7987:34:15",
                        "value": {
                          "arguments": [
                            {
                              "name": "returndata",
                              "nodeType": "YulIdentifier",
                              "src": "8005:10:15"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8017:3:15",
                              "type": "",
                              "value": "0x4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8001:3:15"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8001:20:15"
                        },
                        "variableNames": [
                          {
                            "name": "returndata",
                            "nodeType": "YulIdentifier",
                            "src": "7987:10:15"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 1940,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7930:10:15",
                      "valueSize": 1
                    },
                    {
                      "declaration": 1940,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7958:10:15",
                      "valueSize": 1
                    },
                    {
                      "declaration": 1940,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7987:10:15",
                      "valueSize": 1
                    },
                    {
                      "declaration": 1940,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8005:10:15",
                      "valueSize": 1
                    }
                  ],
                  "id": 1969,
                  "nodeType": "InlineAssembly",
                  "src": "7896:135:15"
                },
                {
                  "expression": {
                    "id": 1978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1970,
                      "name": "returndata",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1940,
                      "src": "8040:10:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 1973,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1940,
                          "src": "8064:10:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        {
                          "components": [
                            {
                              "id": 1975,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8077:5:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 1974,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "8077:5:15",
                                "typeDescriptions": {}
                              }
                            }
                          ],
                          "id": 1976,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "8076:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          },
                          {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          }
                        ],
                        "expression": {
                          "id": 1971,
                          "name": "abi",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -1,
                          "src": "8053:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_abi",
                            "typeString": "abi"
                          }
                        },
                        "id": 1972,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "8057:6:15",
                        "memberName": "decode",
                        "nodeType": "MemberAccess",
                        "src": "8053:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 1977,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8053:31:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "src": "8040:44:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 1979,
                  "nodeType": "ExpressionStatement",
                  "src": "8040:44:15"
                },
                {
                  "expression": {
                    "id": 1980,
                    "name": "returndata",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1940,
                    "src": "8102:10:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1936,
                  "id": 1981,
                  "nodeType": "Return",
                  "src": "8095:17:15"
                }
              ]
            },
            "documentation": {
              "id": 1930,
              "nodeType": "StructuredDocumentation",
              "src": "6851:323:15",
              "text": "@notice If we get to the fallback function, we make a read-only\n         delegatecall to the target0 contract. This target contains all\n         of the getters for the Hyperdrive pool.\n @param _data The data to be passed to the data provider.\n @return The return data from the data provider."
            },
            "implemented": true,
            "kind": "fallback",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 1933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1932,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "7203:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 1983,
                  "src": "7188:20:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1931,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7188:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7187:22:15"
            },
            "returnParameters": {
              "id": 1936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1935,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1983,
                  "src": "7228:12:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1934,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7228:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7227:14:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2005,
            "nodeType": "FunctionDefinition",
            "src": "8183:192:15",
            "nodes": [],
            "body": {
              "id": 2004,
              "nodeType": "Block",
              "src": "8340:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2001,
                        "name": "target3",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1853,
                        "src": "8360:7:15",
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
                      "id": 2000,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "8350:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2002,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8350:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2003,
                  "nodeType": "ExpressionStatement",
                  "src": "8350:18:15"
                }
              ]
            },
            "baseFunctions": [
              7436
            ],
            "documentation": {
              "id": 1984,
              "nodeType": "StructuredDocumentation",
              "src": "8144:34:15",
              "text": "@notice Opens a long position."
            },
            "functionSelector": "cba2e58d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "openLong",
            "nameLocation": "8192:8:15",
            "parameters": {
              "id": 1994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1986,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2005,
                  "src": "8210:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1985,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8210:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1988,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2005,
                  "src": "8227:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1987,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8227:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1990,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2005,
                  "src": "8244:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1989,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8244:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1993,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2005,
                  "src": "8261:28:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1992,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1991,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "8261:11:15",
                        "8273:7:15"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "8261:19:15"
                    },
                    "referencedDeclaration": 7271,
                    "src": "8261:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8200:95:15"
            },
            "returnParameters": {
              "id": 1999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1996,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2005,
                  "src": "8322:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1995,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8322:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1998,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2005,
                  "src": "8331:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8331:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8321:18:15"
            },
            "scope": 2381,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2025,
            "nodeType": "FunctionDefinition",
            "src": "8452:176:15",
            "nodes": [],
            "body": {
              "id": 2024,
              "nodeType": "Block",
              "src": "8593:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2021,
                        "name": "target2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1850,
                        "src": "8613:7:15",
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
                      "id": 2020,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "8603:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2022,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8603:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2023,
                  "nodeType": "ExpressionStatement",
                  "src": "8603:18:15"
                }
              ]
            },
            "baseFunctions": [
              7450
            ],
            "documentation": {
              "id": 2006,
              "nodeType": "StructuredDocumentation",
              "src": "8381:66:15",
              "text": "@notice Closes a long position with a specified maturity time."
            },
            "functionSelector": "ded06231",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "closeLong",
            "nameLocation": "8461:9:15",
            "parameters": {
              "id": 2016,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2008,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2025,
                  "src": "8480:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2007,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8480:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2010,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2025,
                  "src": "8497:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8497:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2012,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2025,
                  "src": "8514:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2011,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8514:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2015,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2025,
                  "src": "8531:28:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2014,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2013,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "8531:11:15",
                        "8543:7:15"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "8531:19:15"
                    },
                    "referencedDeclaration": 7271,
                    "src": "8531:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8470:95:15"
            },
            "returnParameters": {
              "id": 2019,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2018,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2025,
                  "src": "8584:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2017,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8584:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8583:9:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2047,
            "nodeType": "FunctionDefinition",
            "src": "8694:193:15",
            "nodes": [],
            "body": {
              "id": 2046,
              "nodeType": "Block",
              "src": "8852:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2043,
                        "name": "target4",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1856,
                        "src": "8872:7:15",
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
                      "id": 2042,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "8862:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8862:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2045,
                  "nodeType": "ExpressionStatement",
                  "src": "8862:18:15"
                }
              ]
            },
            "baseFunctions": [
              7467
            ],
            "documentation": {
              "id": 2026,
              "nodeType": "StructuredDocumentation",
              "src": "8654:35:15",
              "text": "@notice Opens a short position."
            },
            "functionSelector": "dbbe8070",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "openShort",
            "nameLocation": "8703:9:15",
            "parameters": {
              "id": 2036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2028,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2047,
                  "src": "8722:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2027,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8722:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2030,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2047,
                  "src": "8739:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2029,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8739:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2032,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2047,
                  "src": "8756:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2031,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8756:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2035,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2047,
                  "src": "8773:28:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2034,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2033,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "8773:11:15",
                        "8785:7:15"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "8773:19:15"
                    },
                    "referencedDeclaration": 7271,
                    "src": "8773:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8712:95:15"
            },
            "returnParameters": {
              "id": 2041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2038,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2047,
                  "src": "8834:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2037,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8834:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2040,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2047,
                  "src": "8843:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2039,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8843:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8833:18:15"
            },
            "scope": 2381,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2067,
            "nodeType": "FunctionDefinition",
            "src": "8965:177:15",
            "nodes": [],
            "body": {
              "id": 2066,
              "nodeType": "Block",
              "src": "9107:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2063,
                        "name": "target2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1850,
                        "src": "9127:7:15",
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
                      "id": 2062,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "9117:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9117:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2065,
                  "nodeType": "ExpressionStatement",
                  "src": "9117:18:15"
                }
              ]
            },
            "baseFunctions": [
              7481
            ],
            "documentation": {
              "id": 2048,
              "nodeType": "StructuredDocumentation",
              "src": "8893:67:15",
              "text": "@notice Closes a short position with a specified maturity time."
            },
            "functionSelector": "29b23fc1",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "closeShort",
            "nameLocation": "8974:10:15",
            "parameters": {
              "id": 2058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2050,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2067,
                  "src": "8994:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2049,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8994:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2052,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2067,
                  "src": "9011:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2051,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9011:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2054,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2067,
                  "src": "9028:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2053,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9028:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2057,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2067,
                  "src": "9045:28:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2056,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2055,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "9045:11:15",
                        "9057:7:15"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "9045:19:15"
                    },
                    "referencedDeclaration": 7271,
                    "src": "9045:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8984:95:15"
            },
            "returnParameters": {
              "id": 2061,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2060,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2067,
                  "src": "9098:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2059,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9098:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9097:9:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2085,
            "nodeType": "FunctionDefinition",
            "src": "9245:168:15",
            "nodes": [],
            "body": {
              "id": 2084,
              "nodeType": "Block",
              "src": "9378:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2081,
                        "name": "target1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1847,
                        "src": "9398:7:15",
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
                      "id": 2080,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "9388:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2082,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9388:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2083,
                  "nodeType": "ExpressionStatement",
                  "src": "9388:18:15"
                }
              ]
            },
            "baseFunctions": [
              7494
            ],
            "documentation": {
              "id": 2068,
              "nodeType": "StructuredDocumentation",
              "src": "9165:75:15",
              "text": "@notice Allows the first LP to initialize the market with a target APR."
            },
            "functionSelector": "77d05ff4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "initialize",
            "nameLocation": "9254:10:15",
            "parameters": {
              "id": 2076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2070,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2085,
                  "src": "9274:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2069,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9274:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2072,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2085,
                  "src": "9291:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2071,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9291:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2075,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2085,
                  "src": "9308:28:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2074,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2073,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "9308:11:15",
                        "9320:7:15"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "9308:19:15"
                    },
                    "referencedDeclaration": 7271,
                    "src": "9308:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9264:78:15"
            },
            "returnParameters": {
              "id": 2079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2078,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2085,
                  "src": "9369:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9369:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9368:9:15"
            },
            "scope": 2381,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2107,
            "nodeType": "FunctionDefinition",
            "src": "9481:204:15",
            "nodes": [],
            "body": {
              "id": 2106,
              "nodeType": "Block",
              "src": "9650:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2103,
                        "name": "target1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1847,
                        "src": "9670:7:15",
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
                      "id": 2102,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "9660:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9660:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2105,
                  "nodeType": "ExpressionStatement",
                  "src": "9660:18:15"
                }
              ]
            },
            "baseFunctions": [
              7510
            ],
            "documentation": {
              "id": 2086,
              "nodeType": "StructuredDocumentation",
              "src": "9419:57:15",
              "text": "@notice Allows LPs to supply liquidity for LP shares."
            },
            "functionSelector": "4c2ac1d9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addLiquidity",
            "nameLocation": "9490:12:15",
            "parameters": {
              "id": 2098,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2088,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2107,
                  "src": "9512:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9512:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2090,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2107,
                  "src": "9529:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2089,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9529:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2092,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2107,
                  "src": "9546:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2091,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9546:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2094,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2107,
                  "src": "9563:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2093,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9563:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2097,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2107,
                  "src": "9580:28:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2096,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2095,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "9580:11:15",
                        "9592:7:15"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "9580:19:15"
                    },
                    "referencedDeclaration": 7271,
                    "src": "9580:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9502:112:15"
            },
            "returnParameters": {
              "id": 2101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2100,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2107,
                  "src": "9641:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2099,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9641:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9640:9:15"
            },
            "scope": 2381,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2127,
            "nodeType": "FunctionDefinition",
            "src": "9763:174:15",
            "nodes": [],
            "body": {
              "id": 2126,
              "nodeType": "Block",
              "src": "9902:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2123,
                        "name": "target1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1847,
                        "src": "9922:7:15",
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
                      "id": 2122,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "9912:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9912:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2125,
                  "nodeType": "ExpressionStatement",
                  "src": "9912:18:15"
                }
              ]
            },
            "baseFunctions": [
              7524
            ],
            "documentation": {
              "id": 2108,
              "nodeType": "StructuredDocumentation",
              "src": "9691:67:15",
              "text": "@notice Allows an LP to burn shares and withdraw from the pool."
            },
            "functionSelector": "cbc13434",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "removeLiquidity",
            "nameLocation": "9772:15:15",
            "parameters": {
              "id": 2116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2110,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2127,
                  "src": "9797:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2109,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9797:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2112,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2127,
                  "src": "9814:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2111,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9814:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2115,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2127,
                  "src": "9831:28:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2114,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2113,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "9831:11:15",
                        "9843:7:15"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "9831:19:15"
                    },
                    "referencedDeclaration": 7271,
                    "src": "9831:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9787:78:15"
            },
            "returnParameters": {
              "id": 2121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2118,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2127,
                  "src": "9884:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9884:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2120,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2127,
                  "src": "9893:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2119,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9893:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9883:18:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2147,
            "nodeType": "FunctionDefinition",
            "src": "10236:181:15",
            "nodes": [],
            "body": {
              "id": 2146,
              "nodeType": "Block",
              "src": "10382:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2143,
                        "name": "target1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1847,
                        "src": "10402:7:15",
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
                      "id": 2142,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "10392:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10392:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2145,
                  "nodeType": "ExpressionStatement",
                  "src": "10392:18:15"
                }
              ]
            },
            "baseFunctions": [
              7538
            ],
            "documentation": {
              "id": 2128,
              "nodeType": "StructuredDocumentation",
              "src": "9943:288:15",
              "text": "@notice Redeems withdrawal shares by giving the LP a pro-rata amount of\n         the withdrawal pool's proceeds. This function redeems the\n         maximum amount of the specified withdrawal shares given the\n         amount of withdrawal shares ready to withdraw."
            },
            "functionSelector": "074a6de9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redeemWithdrawalShares",
            "nameLocation": "10245:22:15",
            "parameters": {
              "id": 2136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2130,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2147,
                  "src": "10277:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2129,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10277:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2132,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2147,
                  "src": "10294:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2131,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10294:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2135,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2147,
                  "src": "10311:28:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2134,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2133,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "10311:11:15",
                        "10323:7:15"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "10311:19:15"
                    },
                    "referencedDeclaration": 7271,
                    "src": "10311:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10267:78:15"
            },
            "returnParameters": {
              "id": 2141,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2138,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2147,
                  "src": "10364:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2137,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10364:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2140,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2147,
                  "src": "10373:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2139,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10373:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10363:18:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2158,
            "nodeType": "FunctionDefinition",
            "src": "10504:73:15",
            "nodes": [],
            "body": {
              "id": 2157,
              "nodeType": "Block",
              "src": "10542:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2154,
                        "name": "target2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1850,
                        "src": "10562:7:15",
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
                      "id": 2153,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "10552:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10552:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2156,
                  "nodeType": "ExpressionStatement",
                  "src": "10552:18:15"
                }
              ]
            },
            "baseFunctions": [
              7544
            ],
            "documentation": {
              "id": 2148,
              "nodeType": "StructuredDocumentation",
              "src": "10448:51:15",
              "text": "@notice Allows anyone to mint a new checkpoint."
            },
            "functionSelector": "ed64bab2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checkpoint",
            "nameLocation": "10513:10:15",
            "parameters": {
              "id": 2151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2150,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2158,
                  "src": "10524:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2149,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10524:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10523:9:15"
            },
            "returnParameters": {
              "id": 2152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10542:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2172,
            "nodeType": "FunctionDefinition",
            "src": "10737:136:15",
            "nodes": [],
            "body": {
              "id": 2171,
              "nodeType": "Block",
              "src": "10838:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2168,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "10858:7:15",
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
                      "id": 2167,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "10848:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10848:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2170,
                  "nodeType": "ExpressionStatement",
                  "src": "10848:18:15"
                }
              ]
            },
            "baseFunctions": [
              7553
            ],
            "documentation": {
              "id": 2159,
              "nodeType": "StructuredDocumentation",
              "src": "10602:130:15",
              "text": "@notice This function collects the governance fees accrued by the pool.\n @return proceeds The amount of base collected."
            },
            "functionSelector": "3e691db9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "collectGovernanceFee",
            "nameLocation": "10746:20:15",
            "parameters": {
              "id": 2163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2162,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2172,
                  "src": "10776:28:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2161,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2160,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "10776:11:15",
                        "10788:7:15"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "10776:19:15"
                    },
                    "referencedDeclaration": 7271,
                    "src": "10776:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10766:44:15"
            },
            "returnParameters": {
              "id": 2166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2165,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2172,
                  "src": "10829:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2164,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10829:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10828:9:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2183,
            "nodeType": "FunctionDefinition",
            "src": "10948:65:15",
            "nodes": [],
            "body": {
              "id": 2182,
              "nodeType": "Block",
              "src": "10978:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2179,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "10998:7:15",
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
                      "id": 2178,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "10988:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10988:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2181,
                  "nodeType": "ExpressionStatement",
                  "src": "10988:18:15"
                }
              ]
            },
            "baseFunctions": [
              7558
            ],
            "documentation": {
              "id": 2173,
              "nodeType": "StructuredDocumentation",
              "src": "10879:64:15",
              "text": "@notice Allows an authorized address to pause this contract."
            },
            "functionSelector": "02329a29",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pause",
            "nameLocation": "10957:5:15",
            "parameters": {
              "id": 2176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2175,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2183,
                  "src": "10963:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2174,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10963:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10962:6:15"
            },
            "returnParameters": {
              "id": 2177,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10978:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2194,
            "nodeType": "FunctionDefinition",
            "src": "11075:76:15",
            "nodes": [],
            "body": {
              "id": 2193,
              "nodeType": "Block",
              "src": "11116:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2190,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "11136:7:15",
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
                      "id": 2189,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "11126:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11126:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2192,
                  "nodeType": "ExpressionStatement",
                  "src": "11126:18:15"
                }
              ]
            },
            "baseFunctions": [
              7563
            ],
            "documentation": {
              "id": 2184,
              "nodeType": "StructuredDocumentation",
              "src": "11019:51:15",
              "text": "@notice Allows governance to change governance."
            },
            "functionSelector": "ab033ea9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setGovernance",
            "nameLocation": "11084:13:15",
            "parameters": {
              "id": 2187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2186,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2194,
                  "src": "11098:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11098:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11097:9:15"
            },
            "returnParameters": {
              "id": 2188,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11116:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2207,
            "nodeType": "FunctionDefinition",
            "src": "11234:78:15",
            "nodes": [],
            "body": {
              "id": 2206,
              "nodeType": "Block",
              "src": "11277:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2203,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "11297:7:15",
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
                      "id": 2202,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "11287:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11287:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2205,
                  "nodeType": "ExpressionStatement",
                  "src": "11287:18:15"
                }
              ]
            },
            "baseFunctions": [
              7570
            ],
            "documentation": {
              "id": 2195,
              "nodeType": "StructuredDocumentation",
              "src": "11157:72:15",
              "text": "@notice Allows governance to change the pauser status of an address."
            },
            "functionSelector": "7180c8ca",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setPauser",
            "nameLocation": "11243:9:15",
            "parameters": {
              "id": 2200,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2197,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2207,
                  "src": "11253:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2196,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11253:7:15",
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
                  "id": 2199,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2207,
                  "src": "11262:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2198,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11262:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11252:15:15"
            },
            "returnParameters": {
              "id": 2201,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11277:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2224,
            "nodeType": "FunctionDefinition",
            "src": "11419:102:15",
            "nodes": [],
            "body": {
              "id": 2223,
              "nodeType": "Block",
              "src": "11486:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2220,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "11506:7:15",
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
                      "id": 2219,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "11496:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11496:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2222,
                  "nodeType": "ExpressionStatement",
                  "src": "11496:18:15"
                }
              ]
            },
            "baseFunctions": [
              8202
            ],
            "documentation": {
              "id": 2208,
              "nodeType": "StructuredDocumentation",
              "src": "11337:77:15",
              "text": "@notice Transfers an amount of assets from the source to the destination."
            },
            "functionSelector": "1c0f12b6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "11428:12:15",
            "parameters": {
              "id": 2217,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2210,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2224,
                  "src": "11441:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2209,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11441:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2212,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2224,
                  "src": "11450:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2211,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11450:7:15",
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
                  "id": 2214,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2224,
                  "src": "11459:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2213,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11459:7:15",
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
                  "id": 2216,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2224,
                  "src": "11468:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2215,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11468:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11440:36:15"
            },
            "returnParameters": {
              "id": 2218,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11486:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2243,
            "nodeType": "FunctionDefinition",
            "src": "11650:163:15",
            "nodes": [],
            "body": {
              "id": 2242,
              "nodeType": "Block",
              "src": "11778:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2239,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "11798:7:15",
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
                      "id": 2238,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "11788:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2240,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11788:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2241,
                  "nodeType": "ExpressionStatement",
                  "src": "11788:18:15"
                }
              ]
            },
            "baseFunctions": [
              8215
            ],
            "documentation": {
              "id": 2225,
              "nodeType": "StructuredDocumentation",
              "src": "11527:118:15",
              "text": "@notice Permissioned transfer for the bridge to access, only callable by\n         the ERC20 linking bridge."
            },
            "functionSelector": "e44808bc",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFromBridge",
            "nameLocation": "11659:18:15",
            "parameters": {
              "id": 2236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2227,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2243,
                  "src": "11687:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2226,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11687:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2229,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2243,
                  "src": "11704:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2228,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11704:7:15",
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
                  "id": 2231,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2243,
                  "src": "11721:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2230,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11721:7:15",
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
                  "id": 2233,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2243,
                  "src": "11738:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2232,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11738:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2235,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2243,
                  "src": "11755:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2234,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11755:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11677:91:15"
            },
            "returnParameters": {
              "id": 2237,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11778:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2260,
            "nodeType": "FunctionDefinition",
            "src": "11934:107:15",
            "nodes": [],
            "body": {
              "id": 2259,
              "nodeType": "Block",
              "src": "12006:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2256,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "12026:7:15",
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
                      "id": 2255,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "12016:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12016:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2258,
                  "nodeType": "ExpressionStatement",
                  "src": "12016:18:15"
                }
              ]
            },
            "baseFunctions": [
              8235
            ],
            "documentation": {
              "id": 2244,
              "nodeType": "StructuredDocumentation",
              "src": "11819:110:15",
              "text": "@notice Allows the compatibility linking contract to forward calls to\n         set asset approvals."
            },
            "functionSelector": "4ed2d6ac",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalBridge",
            "nameLocation": "11943:17:15",
            "parameters": {
              "id": 2253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2246,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2260,
                  "src": "11961:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2245,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11961:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2248,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2260,
                  "src": "11970:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2247,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11970:7:15",
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
                  "id": 2250,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2260,
                  "src": "11979:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2249,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11979:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2252,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2260,
                  "src": "11988:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2251,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11988:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11960:36:15"
            },
            "returnParameters": {
              "id": 2254,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12006:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2273,
            "nodeType": "FunctionDefinition",
            "src": "12128:86:15",
            "nodes": [],
            "body": {
              "id": 2272,
              "nodeType": "Block",
              "src": "12179:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2269,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "12199:7:15",
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
                      "id": 2268,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "12189:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12189:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2271,
                  "nodeType": "ExpressionStatement",
                  "src": "12189:18:15"
                }
              ]
            },
            "baseFunctions": [
              8242
            ],
            "documentation": {
              "id": 2261,
              "nodeType": "StructuredDocumentation",
              "src": "12047:76:15",
              "text": "@notice Allows a user to approve an operator to use all of their assets."
            },
            "functionSelector": "a22cb465",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "12137:17:15",
            "parameters": {
              "id": 2266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2263,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2273,
                  "src": "12155:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2262,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12155:7:15",
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
                  "id": 2265,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2273,
                  "src": "12164:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2264,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12164:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12154:15:15"
            },
            "returnParameters": {
              "id": 2267,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12179:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2288,
            "nodeType": "FunctionDefinition",
            "src": "12331:92:15",
            "nodes": [],
            "body": {
              "id": 2287,
              "nodeType": "Block",
              "src": "12388:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2284,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "12408:7:15",
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
                      "id": 2283,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "12398:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12398:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2286,
                  "nodeType": "ExpressionStatement",
                  "src": "12398:18:15"
                }
              ]
            },
            "baseFunctions": [
              8224
            ],
            "documentation": {
              "id": 2274,
              "nodeType": "StructuredDocumentation",
              "src": "12220:106:15",
              "text": "@notice Allows a user to set an approval for an individual asset with\n         specific amount."
            },
            "functionSelector": "9cd241af",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setApproval",
            "nameLocation": "12340:11:15",
            "parameters": {
              "id": 2281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2276,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2288,
                  "src": "12352:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2275,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12352:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2278,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2288,
                  "src": "12361:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2277,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12361:7:15",
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
                  "id": 2280,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2288,
                  "src": "12370:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2279,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12370:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12351:27:15"
            },
            "returnParameters": {
              "id": 2282,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12388:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2307,
            "nodeType": "FunctionDefinition",
            "src": "12498:167:15",
            "nodes": [],
            "body": {
              "id": 2306,
              "nodeType": "Block",
              "src": "12630:35:15",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2303,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "12650:7:15",
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
                      "id": 2302,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2380,
                      "src": "12640:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12640:18:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2305,
                  "nodeType": "ExpressionStatement",
                  "src": "12640:18:15"
                }
              ]
            },
            "baseFunctions": [
              8255
            ],
            "documentation": {
              "id": 2289,
              "nodeType": "StructuredDocumentation",
              "src": "12429:64:15",
              "text": "@notice Transfers several assets from one account to another"
            },
            "functionSelector": "17fad7fc",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "batchTransferFrom",
            "nameLocation": "12507:17:15",
            "parameters": {
              "id": 2300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2291,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2307,
                  "src": "12534:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2290,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12534:7:15",
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
                  "id": 2293,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2307,
                  "src": "12551:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2292,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12551:7:15",
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
                  "id": 2296,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2307,
                  "src": "12568:18:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2294,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "12568:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2295,
                    "nodeType": "ArrayTypeName",
                    "src": "12568:9:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2299,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2307,
                  "src": "12596:18:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2297,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "12596:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2298,
                    "nodeType": "ArrayTypeName",
                    "src": "12596:9:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12524:96:15"
            },
            "returnParameters": {
              "id": 2301,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12630:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2355,
            "nodeType": "FunctionDefinition",
            "src": "13854:868:15",
            "nodes": [],
            "body": {
              "id": 2354,
              "nodeType": "Block",
              "src": "14044:678:15",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    2326,
                    2328
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2326,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "14060:7:15",
                      "nodeType": "VariableDeclaration",
                      "scope": 2354,
                      "src": "14055:12:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 2325,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "14055:4:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 2328,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "14082:6:15",
                      "nodeType": "VariableDeclaration",
                      "scope": 2354,
                      "src": "14069:19:15",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 2327,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "14069:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2347,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 2333,
                              "name": "HyperdriveTarget0",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3128,
                              "src": "14158:17:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_HyperdriveTarget0_$3128_$",
                                "typeString": "type(contract HyperdriveTarget0)"
                              }
                            },
                            "id": 2334,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "14176:12:15",
                            "memberName": "permitForAll",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2658,
                            "src": "14158:30:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                              "typeString": "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 2335,
                                "name": "DOMAIN_SEPARATOR",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1865,
                                "src": "14228:16:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 2336,
                                "name": "PERMIT_TYPEHASH",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1862,
                                "src": "14266:15:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 2337,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2310,
                                "src": "14303:5:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 2338,
                                "name": "spender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2312,
                                "src": "14330:7:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 2339,
                                "name": "_approved",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2314,
                                "src": "14359:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              {
                                "id": 2340,
                                "name": "deadline",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2316,
                                "src": "14390:8:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 2341,
                                "name": "v",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2318,
                                "src": "14420:1:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              {
                                "id": 2342,
                                "name": "r",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2320,
                                "src": "14443:1:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 2343,
                                "name": "s",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2322,
                                "src": "14466:1:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "id": 2344,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "14206:279:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$",
                              "typeString": "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                              "typeString": "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$",
                              "typeString": "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)"
                            }
                          ],
                          "expression": {
                            "id": 2331,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "14126:3:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 2332,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "14130:10:15",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "14126:14:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 2345,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14126:373:15",
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
                      "expression": {
                        "id": 2329,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1844,
                        "src": "14092:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 2330,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14100:12:15",
                      "memberName": "delegatecall",
                      "nodeType": "MemberAccess",
                      "src": "14092:20:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) returns (bool,bytes memory)"
                      }
                    },
                    "id": 2346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14092:417:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14054:455:15"
                },
                {
                  "condition": {
                    "id": 2349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "14523:8:15",
                    "subExpression": {
                      "id": 2348,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2326,
                      "src": "14524:7:15",
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
                  "id": 2352,
                  "nodeType": "IfStatement",
                  "src": "14519:117:15",
                  "trueBody": {
                    "id": 2351,
                    "nodeType": "Block",
                    "src": "14533:103:15",
                    "statements": [
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "14556:70:15",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "14585:6:15"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "14593:2:15",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "14581:3:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "14581:15:15"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "14604:6:15"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "14598:5:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "14598:13:15"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "14574:6:15"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "14574:38:15"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "14574:38:15"
                            }
                          ]
                        },
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 2328,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "14585:6:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 2328,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "14604:6:15",
                            "valueSize": 1
                          }
                        ],
                        "id": 2350,
                        "nodeType": "InlineAssembly",
                        "src": "14547:79:15"
                      }
                    ]
                  }
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "14654:62:15",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "result",
                                  "nodeType": "YulIdentifier",
                                  "src": "14679:6:15"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14687:2:15",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "14675:3:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14675:15:15"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "result",
                                  "nodeType": "YulIdentifier",
                                  "src": "14698:6:15"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "14692:5:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14692:13:15"
                            }
                          ],
                          "functionName": {
                            "name": "return",
                            "nodeType": "YulIdentifier",
                            "src": "14668:6:15"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14668:38:15"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14668:38:15"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 2328,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14679:6:15",
                      "valueSize": 1
                    },
                    {
                      "declaration": 2328,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14698:6:15",
                      "valueSize": 1
                    }
                  ],
                  "id": 2353,
                  "nodeType": "InlineAssembly",
                  "src": "14645:71:15"
                }
              ]
            },
            "baseFunctions": [
              8272
            ],
            "documentation": {
              "id": 2308,
              "nodeType": "StructuredDocumentation",
              "src": "12695:1154:15",
              "text": "@notice Allows a caller who is not the owner of an account to execute the\n      functionality of 'approve' for all assets with the owners signature.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported."
            },
            "functionSelector": "9032c726",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "permitForAll",
            "nameLocation": "13863:12:15",
            "parameters": {
              "id": 2323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2310,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "13893:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2355,
                  "src": "13885:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2309,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13885:7:15",
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
                  "id": 2312,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "13916:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2355,
                  "src": "13908:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2311,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13908:7:15",
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
                  "id": 2314,
                  "mutability": "mutable",
                  "name": "_approved",
                  "nameLocation": "13938:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2355,
                  "src": "13933:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2313,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "13933:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2316,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "13965:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2355,
                  "src": "13957:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2315,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13957:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2318,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "13989:1:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2355,
                  "src": "13983:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 2317,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "13983:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2320,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "14008:1:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2355,
                  "src": "14000:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2319,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "14000:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2322,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "14027:1:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2355,
                  "src": "14019:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2321,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "14019:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13875:159:15"
            },
            "returnParameters": {
              "id": 2324,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14044:0:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2380,
            "nodeType": "FunctionDefinition",
            "src": "15000:359:15",
            "nodes": [],
            "body": {
              "id": 2379,
              "nodeType": "Block",
              "src": "15068:291:15",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    2364,
                    2366
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2364,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "15084:7:15",
                      "nodeType": "VariableDeclaration",
                      "scope": 2379,
                      "src": "15079:12:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 2363,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "15079:4:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 2366,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "15106:6:15",
                      "nodeType": "VariableDeclaration",
                      "scope": 2379,
                      "src": "15093:19:15",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 2365,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "15093:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2372,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 2369,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "15137:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2370,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "15141:4:15",
                        "memberName": "data",
                        "nodeType": "MemberAccess",
                        "src": "15137:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "expression": {
                        "id": 2367,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2358,
                        "src": "15116:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 2368,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "15124:12:15",
                      "memberName": "delegatecall",
                      "nodeType": "MemberAccess",
                      "src": "15116:20:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) returns (bool,bytes memory)"
                      }
                    },
                    "id": 2371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15116:30:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "15078:68:15"
                },
                {
                  "condition": {
                    "id": 2374,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "15160:8:15",
                    "subExpression": {
                      "id": 2373,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2364,
                      "src": "15161:7:15",
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
                  "id": 2377,
                  "nodeType": "IfStatement",
                  "src": "15156:117:15",
                  "trueBody": {
                    "id": 2376,
                    "nodeType": "Block",
                    "src": "15170:103:15",
                    "statements": [
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "15193:70:15",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "15222:6:15"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "15230:2:15",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "15218:3:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "15218:15:15"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "result",
                                        "nodeType": "YulIdentifier",
                                        "src": "15241:6:15"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "15235:5:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "15235:13:15"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "15211:6:15"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "15211:38:15"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "15211:38:15"
                            }
                          ]
                        },
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 2366,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "15222:6:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 2366,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "15241:6:15",
                            "valueSize": 1
                          }
                        ],
                        "id": 2375,
                        "nodeType": "InlineAssembly",
                        "src": "15184:79:15"
                      }
                    ]
                  }
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "15291:62:15",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "result",
                                  "nodeType": "YulIdentifier",
                                  "src": "15316:6:15"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "15324:2:15",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "15312:3:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15312:15:15"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "result",
                                  "nodeType": "YulIdentifier",
                                  "src": "15335:6:15"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "15329:5:15"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15329:13:15"
                            }
                          ],
                          "functionName": {
                            "name": "return",
                            "nodeType": "YulIdentifier",
                            "src": "15305:6:15"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15305:38:15"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15305:38:15"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 2366,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15316:6:15",
                      "valueSize": 1
                    },
                    {
                      "declaration": 2366,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15335:6:15",
                      "valueSize": 1
                    }
                  ],
                  "id": 2378,
                  "nodeType": "InlineAssembly",
                  "src": "15282:71:15"
                }
              ]
            },
            "documentation": {
              "id": 2356,
              "nodeType": "StructuredDocumentation",
              "src": "14749:246:15",
              "text": "@dev Makes a delegatecall to the extras contract with the provided\n      calldata. This will revert if the call is unsuccessful.\n @param _target The target of the delegatecall.\n @return The returndata of the delegatecall."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_delegate",
            "nameLocation": "15009:9:15",
            "parameters": {
              "id": 2359,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2358,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "15027:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2380,
                  "src": "15019:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2357,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15019:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15018:17:15"
            },
            "returnParameters": {
              "id": 2362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2361,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2380,
                  "src": "15054:12:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2360,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15054:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15053:14:15"
            },
            "scope": 2381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 1830,
              "name": "IHyperdriveCore",
              "nameLocations": [
                "4065:15:15"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7571,
              "src": "4065:15:15"
            },
            "id": 1831,
            "nodeType": "InheritanceSpecifier",
            "src": "4065:15:15"
          },
          {
            "baseName": {
              "id": 1832,
              "name": "HyperdriveAdmin",
              "nameLocations": [
                "4086:15:15"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8595,
              "src": "4086:15:15"
            },
            "id": 1833,
            "nodeType": "InheritanceSpecifier",
            "src": "4086:15:15"
          },
          {
            "baseName": {
              "id": 1834,
              "name": "HyperdriveLP",
              "nameLocations": [
                "4107:12:15"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10802,
              "src": "4107:12:15"
            },
            "id": 1835,
            "nodeType": "InheritanceSpecifier",
            "src": "4107:12:15"
          },
          {
            "baseName": {
              "id": 1836,
              "name": "HyperdriveLong",
              "nameLocations": [
                "4125:14:15"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11646,
              "src": "4125:14:15"
            },
            "id": 1837,
            "nodeType": "InheritanceSpecifier",
            "src": "4125:14:15"
          },
          {
            "baseName": {
              "id": 1838,
              "name": "HyperdriveShort",
              "nameLocations": [
                "4145:15:15"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 12979,
              "src": "4145:15:15"
            },
            "id": 1839,
            "nodeType": "InheritanceSpecifier",
            "src": "4145:15:15"
          },
          {
            "baseName": {
              "id": 1840,
              "name": "HyperdriveCheckpoint",
              "nameLocations": [
                "4166:20:15"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9965,
              "src": "4166:20:15"
            },
            "id": 1841,
            "nodeType": "InheritanceSpecifier",
            "src": "4166:20:15"
          }
        ],
        "canonicalName": "Hyperdrive",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 1829,
          "nodeType": "StructuredDocumentation",
          "src": "739:3290:15",
          "text": "______  __                           _________      _____\n      ___  / / /____  ___________________________  /_________(_)__   ______\n      __  /_/ /__  / / /__  __ \\  _ \\_  ___/  __  /__  ___/_  /__ | / /  _ \\\n      _  __  / _  /_/ /__  /_/ /  __/  /   / /_/ / _  /   _  / __ |/ //  __/\n      /_/ /_/  _\\__, / _   ___/\\___//_/    \\__,_/  /_/    /_/  _____/ \\___/\n               /____/   /_/\n                     XXX          ++          ++          XXX\n     ############   XXXXX        ++0+        +0++        XXXXX   ###########\n   ##////////////########       ++00++      ++00++       ########///////////##\n  ##////////////##########      ++000++    ++000++      ##########///////////##\n  ##%%%%%%/////      ######     ++0000+    +0000++     ######     /////%%%%%%##\n    %%%%%%%%&&             ##   ++0000+    +0000++   ##           &&%%%%%%%%%\n         %&&&                ##  +o000+    +000o+  ##              &&&%\n                              ## ++00+-    -+00++ ##\n                               #% ++0+      +0++ %#\n                               ###-:Oo.++++.oO:-###\n                                ##: 00++++++00 :##\n                    #S###########* 0++00+++00++0 *##########S#\n                  #S               % $ 0+++0 $ %              S#\n                #S   ----------   %+++++:#:+++++%-----------    S#\n              #S   ------------- %++++: ### :++++%------------    S#\n             S    ---------------%++++*\\ | /*++++%-------------     S\n           #S     --------------- %++++ ~W~ ++++%666--o UUUU o-      S#\n         #S?      ---------------  %+++++~+++++%&&&8 o  \\  /  o       ?S#\n        ?*????**+++;::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::;+++**????*?\n      #?+////////////////////////////////////////////////////////////////+?#\n    #;;;;;//////////////////////////////////////////////////////////////;;;;;#\n  S;;;;;;;;;//////////////////////////////////////////////////////////;;;;;;;;;S\n /;;;;;;;;;;;///////////////////////////////////////////////////////;;;;;;;;;;;;\\\n |||OOOOOOOO||OOOOOOOO=========== __  ___        ===========OOOOOOOO||OOOOOOOO|||\n |||OOOOOOOO||OOOOOOOO===========|  \\[__ |   \\  /===========OOOOOOOO||OOOOOOOO|||\n |||OOOOOOOO||OOOOOOOO===========|__/[___|___ \\/ ===========OOOOOOOO||OOOOOOOO|||\n ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n |||////////000000000000\\\\\\\\\\\\\\\\|:::::::::::::::|////////00000000000\\\\\\\\\\\\\\\\\\\\|||\n SSS\\\\\\\\\\\\\\\\000000000000////////|:::::0x666:::::|\\\\\\\\\\\\\\\\00000000000//////////SSS\n SSS|||||||||||||||||||||||||||||:::::::::::::::||||||||||||||||||||||||||||||SSS\n SSSSSSSS|_______________|______________||_______________|______________|SSSSSSSS\n SSSSSSSS                                                                SSSSSSSS\n SSSSSSSS                                                                SSSSSSSS\n @author DELV\n @title Hyperdrive\n @notice A fixed-rate AMM that mints bonds on demand for longs and shorts.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          2381,
          9965,
          12979,
          11646,
          10802,
          12127,
          8595,
          9507,
          13187,
          67106,
          7814,
          8304,
          7571,
          8273
        ],
        "name": "Hyperdrive",
        "nameLocation": "4047:10:15",
        "scope": 2382,
        "usedErrors": [
          7372,
          67051
        ],
        "usedEvents": [
          7691,
          7703,
          7717,
          7727,
          7741,
          7755,
          7769,
          7783,
          7795,
          7801,
          7805,
          7809,
          7813,
          8287,
          8295,
          8303
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 15
} as const;
