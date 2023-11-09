export const HyperdriveBase = 
{
  "abi": [
    {
      "inputs": [],
      "name": "BatchInputLengthMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpiredDeadline",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidERC20Bridge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeAmounts",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeDestination",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinimumShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPositionDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidSignature",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RestrictedZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Unauthorized",
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
          "name": "sharePrice",
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
          "name": "sharePrice",
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
          "name": "sharePrice",
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
          "name": "baseFees",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
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
          "name": "sharePrice",
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
          "name": "sharePrice",
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
          "name": "sharePrice",
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
          "name": "sharePrice",
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
          "name": "sharePrice",
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
          "name": "sharePrice",
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
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minApr",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxApr",
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
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lpShares",
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
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
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
          "name": "_checkpointTime",
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
          "name": "_maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
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
          "name": "_options",
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
          "name": "_maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
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
          "name": "_options",
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
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "collectGovernanceFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "proceeds",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dataProvider",
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
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_apr",
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
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "initialize",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lpShares",
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
          "name": "_baseAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minSharePrice",
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
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "openLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bondProceeds",
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
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxDeposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minSharePrice",
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
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "openShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "traderDeposit",
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
          "name": "_status",
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
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
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
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "redeemWithdrawalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "proceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sharesRedeemed",
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
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
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
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "baseProceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "withdrawalShares",
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
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
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
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
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
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
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
          "name": "_who",
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
          "name": "who",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "setPauser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
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
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
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
    "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": "9aa68462",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
    "collectGovernanceFee((address,bool,bytes))": "3e691db9",
    "dataProvider()": "b334ed86",
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
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"dataProvider\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account\",\"ids\":\"The array of token ids of the asset to transfer\",\"to\":\"the destination account\",\"values\":\"The amount of each token to transfer\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\",\"_dataProvider\":\"The address of the data provider.\",\"_linkerCodeHash\":\"The hash of the ERC20 linker contract's        constructor code.\",\"_linkerFactory\":\"The address of the factory which is used to deploy        the ERC20 linker contracts.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.\",\"params\":{\"_approved\":\"a boolean of the approval status to set to\",\"deadline\":\"the timestamp which the signature must be submitted by to be valid\",\"owner\":\"the owner of the account which is having the new approval set\",\"r\":\"The r component of the ECDSA signature\",\"s\":\"The s component of the ECDSA signature\",\"spender\":\"the address which will be allowed to spend owner's tokens\",\"v\":\"Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"caller\":\"The eth address which called the linking contract\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval\",\"operator\":\"The eth address which can access the caller's assets\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move\",\"caller\":\"The msg.sender from the bridge\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}}},\"title\":\"HyperdriveBase\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}]},\"events\":{\"PauserUpdated(address)\":{\"notice\":\"Pause ///\"}},\"kind\":\"user\",\"methods\":{\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes a Hyperdrive pool.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to set asset approvals\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge\"}},\"notice\":\"The base contract of the Hyperdrive inheritance hierarchy.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/HyperdriveBase.sol\":\"HyperdriveBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b\",\"dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0xd8b673eb52f74ac18cd75bcc4a9a4ba56bb952eb31600d522b6046c25e8d4c32\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17a8b842f8538181e5a56fd3a904b7aa1bde2eb2c3d5e7fc55bbf5aea084ffbd\",\"dweb:/ipfs/QmVFB1ysPMXo6DPRdc3bAfMpWY8VCPwS3xhxmUFDRY4Zgu\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "BatchInputLengthMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpiredDeadline"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidERC20Bridge"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeAmounts"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeDestination"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinimumShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPositionDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidSignature"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "RestrictedZeroAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
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
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "name": "baseFees",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "name": "sharePrice",
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
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minApr",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxApr",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
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
              "name": "lpShares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
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
              "name": "_checkpointTime",
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
              "name": "_maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
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
              "name": "_maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
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
              "name": "_options",
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
              "name": "proceeds",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "dataProvider",
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
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_apr",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
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
              "name": "lpShares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_baseAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
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
              "name": "maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bondProceeds",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxDeposit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
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
              "name": "maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "traderDeposit",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "_status",
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
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
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
              "name": "proceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharesRedeemed",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
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
              "name": "baseProceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
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
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "caller",
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
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
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
              "name": "_who",
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
              "name": "who",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setPauser"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
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
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "caller",
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
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "params": {
              "from": "the source account",
              "ids": "The array of token ids of the asset to transfer",
              "to": "the destination account",
              "values": "The amount of each token to transfer"
            }
          },
          "collectGovernanceFee((address,bool,bytes))": {
            "params": {
              "_options": "The options that configure how the fees are settled."
            },
            "returns": {
              "proceeds": "The amount of base collected."
            }
          },
          "constructor": {
            "params": {
              "_config": "The configuration of the Hyperdrive pool.",
              "_dataProvider": "The address of the data provider.",
              "_linkerCodeHash": "The hash of the ERC20 linker contract's        constructor code.",
              "_linkerFactory": "The address of the factory which is used to deploy        the ERC20 linker contracts."
            }
          },
          "pause(bool)": {
            "params": {
              "_status": "True to pause all deposits and false to unpause them."
            }
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "details": "The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.",
            "params": {
              "_approved": "a boolean of the approval status to set to",
              "deadline": "the timestamp which the signature must be submitted by to be valid",
              "owner": "the owner of the account which is having the new approval set",
              "r": "The r component of the ECDSA signature",
              "s": "The s component of the ECDSA signature",
              "spender": "the address which will be allowed to spend owner's tokens",
              "v": "Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28"
            }
          },
          "setApproval(uint256,address,uint256)": {
            "params": {
              "amount": "The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]",
              "operator": "The address who will be able to use the tokens",
              "tokenID": "The asset to approve the use of"
            }
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "params": {
              "amount": "The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]",
              "caller": "The eth address which called the linking contract",
              "operator": "The address who will be able to use the tokens",
              "tokenID": "The asset to approve the use of"
            }
          },
          "setApprovalForAll(address,bool)": {
            "params": {
              "approved": "True to approve, false to remove approval",
              "operator": "The eth address which can access the caller's assets"
            }
          },
          "setGovernance(address)": {
            "params": {
              "_who": "The new governance address."
            }
          },
          "setPauser(address,bool)": {
            "params": {
              "status": "The new pauser status.",
              "who": "The address to change."
            }
          },
          "transferFrom(uint256,address,address,uint256)": {
            "params": {
              "amount": "The amount of token to move",
              "from": "The address who's balance will be reduced",
              "to": "The address who's balance will be increased",
              "tokenID": "The token identifier"
            }
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "params": {
              "amount": "The amount of token to move",
              "caller": "The msg.sender from the bridge",
              "from": "The address who's balance will be reduced",
              "to": "The address who's balance will be increased",
              "tokenID": "The token identifier"
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "notice": "Transfers several assets from one account to another"
          },
          "collectGovernanceFee((address,bool,bytes))": {
            "notice": "This function collects the governance fees accrued by the pool."
          },
          "constructor": {
            "notice": "Initializes a Hyperdrive pool."
          },
          "pause(bool)": {
            "notice": "Allows an authorized address to pause this contract."
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "notice": "Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature."
          },
          "setApproval(uint256,address,uint256)": {
            "notice": "Allows a user to set an approval for an individual asset with specific amount."
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "notice": "Allows the compatibility linking contract to forward calls to set asset approvals"
          },
          "setApprovalForAll(address,bool)": {
            "notice": "Allows a user to approve an operator to use all of their assets"
          },
          "setGovernance(address)": {
            "notice": "Allows governance to change governance."
          },
          "setPauser(address,bool)": {
            "notice": "Allows governance to change the pauser status of an address."
          },
          "transferFrom(uint256,address,address,uint256)": {
            "notice": "Transfers an amount of assets from the source to the destination"
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "notice": "Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge"
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/HyperdriveBase.sol": "HyperdriveBase"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/DataProvider.sol": {
        "keccak256": "0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6",
        "urls": [
          "bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b",
          "dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveBase.sol": {
        "keccak256": "0xd8b673eb52f74ac18cd75bcc4a9a4ba56bb952eb31600d522b6046c25e8d4c32",
        "urls": [
          "bzz-raw://17a8b842f8538181e5a56fd3a904b7aa1bde2eb2c3d5e7fc55bbf5aea084ffbd",
          "dweb:/ipfs/QmVFB1ysPMXo6DPRdc3bAfMpWY8VCPwS3xhxmUFDRY4Zgu"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveStorage.sol": {
        "keccak256": "0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc",
        "urls": [
          "bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a",
          "dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IDataProvider.sol": {
        "keccak256": "0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843",
        "urls": [
          "bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15",
          "dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc",
        "urls": [
          "bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206",
          "dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a",
        "urls": [
          "bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a",
          "dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        "urls": [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed",
        "urls": [
          "bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6",
          "dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        "urls": [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f",
        "urls": [
          "bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe",
          "dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiToken.sol": {
        "keccak256": "0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19",
        "urls": [
          "bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98",
          "dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiTokenStorage.sol": {
        "keccak256": "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        "urls": [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/HyperdriveBase.sol",
    "id": 1466,
    "exportedSymbols": {
      "AssetId": [
        8311
      ],
      "FixedPointMath": [
        9066
      ],
      "HyperdriveBase": [
        1465
      ],
      "HyperdriveMath": [
        9918
      ],
      "HyperdriveStorage": [
        5167
      ],
      "IERC20": [
        6731
      ],
      "IHyperdrive": [
        7431
      ],
      "IHyperdriveWrite": [
        7668
      ],
      "MultiToken": [
        12262
      ],
      "SafeCast": [
        9994
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:21462:2",
    "nodes": [
      {
        "id": 551,
        "nodeType": "PragmaDirective",
        "src": "39:23:2",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 553,
        "nodeType": "ImportDirective",
        "src": "64:60:2",
        "nodes": [],
        "absolutePath": "contracts/src/HyperdriveStorage.sol",
        "file": "./HyperdriveStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1466,
        "sourceUnit": 5168,
        "symbolAliases": [
          {
            "foreign": {
              "id": 552,
              "name": "HyperdriveStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 5167,
              "src": "73:17:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 555,
        "nodeType": "ImportDirective",
        "src": "125:49:2",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "./interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1466,
        "sourceUnit": 6732,
        "symbolAliases": [
          {
            "foreign": {
              "id": 554,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6731,
              "src": "134:6:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 557,
        "nodeType": "ImportDirective",
        "src": "175:59:2",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "./interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1466,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 556,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "184:11:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 559,
        "nodeType": "ImportDirective",
        "src": "235:69:2",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveWrite.sol",
        "file": "./interfaces/IHyperdriveWrite.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1466,
        "sourceUnit": 7669,
        "symbolAliases": [
          {
            "foreign": {
              "id": 558,
              "name": "IHyperdriveWrite",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7668,
              "src": "244:16:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 561,
        "nodeType": "ImportDirective",
        "src": "305:50:2",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "./libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1466,
        "sourceUnit": 8312,
        "symbolAliases": [
          {
            "foreign": {
              "id": 560,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8311,
              "src": "314:7:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 563,
        "nodeType": "ImportDirective",
        "src": "356:64:2",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1466,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 562,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "365:14:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 565,
        "nodeType": "ImportDirective",
        "src": "421:64:2",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "./libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1466,
        "sourceUnit": 9919,
        "symbolAliases": [
          {
            "foreign": {
              "id": 564,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9918,
              "src": "430:14:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 567,
        "nodeType": "ImportDirective",
        "src": "486:52:2",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "./libraries/SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1466,
        "sourceUnit": 9995,
        "symbolAliases": [
          {
            "foreign": {
              "id": 566,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9994,
              "src": "495:8:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 569,
        "nodeType": "ImportDirective",
        "src": "539:52:2",
        "nodes": [],
        "absolutePath": "contracts/src/token/MultiToken.sol",
        "file": "./token/MultiToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1466,
        "sourceUnit": 12263,
        "symbolAliases": [
          {
            "foreign": {
              "id": 568,
              "name": "MultiToken",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 12262,
              "src": "548:10:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1465,
        "nodeType": "ContractDefinition",
        "src": "931:20569:2",
        "nodes": [
          {
            "id": 579,
            "nodeType": "UsingForDirective",
            "src": "1033:33:2",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 577,
              "name": "FixedPointMath",
              "nameLocations": [
                "1039:14:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "1039:14:2"
            },
            "typeName": {
              "id": 578,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1058:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 582,
            "nodeType": "UsingForDirective",
            "src": "1071:32:2",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 580,
              "name": "FixedPointMath",
              "nameLocations": [
                "1077:14:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "1077:14:2"
            },
            "typeName": {
              "id": 581,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1096:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 585,
            "nodeType": "UsingForDirective",
            "src": "1108:27:2",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 583,
              "name": "SafeCast",
              "nameLocations": [
                "1114:8:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9994,
              "src": "1114:8:2"
            },
            "typeName": {
              "id": 584,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1127:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 588,
            "nodeType": "UsingForDirective",
            "src": "1140:26:2",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 586,
              "name": "SafeCast",
              "nameLocations": [
                "1146:8:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9994,
              "src": "1146:8:2"
            },
            "typeName": {
              "id": 587,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1159:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 600,
            "nodeType": "EventDefinition",
            "src": "1172:160:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "d93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff44231",
            "name": "Initialize",
            "nameLocation": "1178:10:2",
            "parameters": {
              "id": 599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 590,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1214:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 600,
                  "src": "1198:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 589,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1198:7:2",
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
                  "id": 592,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "1240:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 600,
                  "src": "1232:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 591,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1232:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 594,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1266:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 600,
                  "src": "1258:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 593,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1258:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 596,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1294:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 600,
                  "src": "1286:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 598,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "1322:3:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 600,
                  "src": "1314:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 597,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1314:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1188:143:2"
            }
          },
          {
            "id": 612,
            "nodeType": "EventDefinition",
            "src": "1338:171:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "d92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e50239609",
            "name": "AddLiquidity",
            "nameLocation": "1344:12:2",
            "parameters": {
              "id": 611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 602,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1382:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 612,
                  "src": "1366:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 601,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1366:7:2",
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
                  "id": 604,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "1408:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 612,
                  "src": "1400:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 603,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1400:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 606,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1434:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 612,
                  "src": "1426:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 605,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1426:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 608,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1462:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 612,
                  "src": "1454:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 607,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1454:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 610,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "1490:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 612,
                  "src": "1482:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 609,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1482:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1356:152:2"
            }
          },
          {
            "id": 626,
            "nodeType": "EventDefinition",
            "src": "1515:213:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "ae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be8",
            "name": "RemoveLiquidity",
            "nameLocation": "1521:15:2",
            "parameters": {
              "id": 625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 614,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1562:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 626,
                  "src": "1546:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 613,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1546:7:2",
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
                  "id": 616,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "1588:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 626,
                  "src": "1580:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 615,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1580:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 618,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1614:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 626,
                  "src": "1606:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 617,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1606:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 620,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1642:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 626,
                  "src": "1634:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 619,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1634:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 622,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "1670:21:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 626,
                  "src": "1662:29:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 621,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1662:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 624,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "1709:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 626,
                  "src": "1701:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 623,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1701:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1536:191:2"
            }
          },
          {
            "id": 636,
            "nodeType": "EventDefinition",
            "src": "1734:164:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f754",
            "name": "RedeemWithdrawalShares",
            "nameLocation": "1740:22:2",
            "parameters": {
              "id": 635,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 628,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1788:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 636,
                  "src": "1772:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 627,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1772:7:2",
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
                  "id": 630,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "1814:21:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 636,
                  "src": "1806:29:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 629,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1806:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 632,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1853:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 636,
                  "src": "1845:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 631,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1845:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 634,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1881:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 636,
                  "src": "1873:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 633,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1873:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1762:135:2"
            }
          },
          {
            "id": 650,
            "nodeType": "EventDefinition",
            "src": "1904:200:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda686",
            "name": "OpenLong",
            "nameLocation": "1910:8:2",
            "parameters": {
              "id": 649,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 638,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1944:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 650,
                  "src": "1928:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 637,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1928:7:2",
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
                  "id": 640,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1976:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 650,
                  "src": "1960:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 639,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1960:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 642,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "2001:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 650,
                  "src": "1993:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 641,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1993:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 644,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2031:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 650,
                  "src": "2023:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 643,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2023:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 646,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2059:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 650,
                  "src": "2051:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 645,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2051:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 648,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2087:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 650,
                  "src": "2079:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 647,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2079:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1918:185:2"
            }
          },
          {
            "id": 664,
            "nodeType": "EventDefinition",
            "src": "2110:201:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95",
            "name": "OpenShort",
            "nameLocation": "2116:9:2",
            "parameters": {
              "id": 663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 652,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "2151:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 664,
                  "src": "2135:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 651,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2135:7:2",
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
                  "id": 654,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "2183:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 664,
                  "src": "2167:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 653,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2167:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 656,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "2208:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 664,
                  "src": "2200:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 655,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2200:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 658,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2238:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 664,
                  "src": "2230:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 657,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2230:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 660,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2266:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 664,
                  "src": "2258:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 659,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2258:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 662,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2294:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 664,
                  "src": "2286:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 661,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2286:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2125:185:2"
            }
          },
          {
            "id": 678,
            "nodeType": "EventDefinition",
            "src": "2317:201:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca0",
            "name": "CloseLong",
            "nameLocation": "2323:9:2",
            "parameters": {
              "id": 677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 666,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "2358:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 678,
                  "src": "2342:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 665,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2342:7:2",
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
                  "id": 668,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "2390:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 678,
                  "src": "2374:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 667,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2374:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 670,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "2415:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 678,
                  "src": "2407:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 669,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2407:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 672,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2445:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 678,
                  "src": "2437:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 671,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2437:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 674,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2473:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 678,
                  "src": "2465:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2465:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 676,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2501:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 678,
                  "src": "2493:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2493:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2332:185:2"
            }
          },
          {
            "id": 692,
            "nodeType": "EventDefinition",
            "src": "2524:202:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd67",
            "name": "CloseShort",
            "nameLocation": "2530:10:2",
            "parameters": {
              "id": 691,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 680,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "2566:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 692,
                  "src": "2550:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 679,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2550:7:2",
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
                  "id": 682,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "2598:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 692,
                  "src": "2582:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 681,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2582:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 684,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "2623:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 692,
                  "src": "2615:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 683,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2615:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 686,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2653:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 692,
                  "src": "2645:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 685,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2645:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 688,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2681:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 692,
                  "src": "2673:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 687,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2673:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 690,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2709:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 692,
                  "src": "2701:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 689,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2701:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2540:185:2"
            }
          },
          {
            "id": 704,
            "nodeType": "EventDefinition",
            "src": "2732:188:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd1551",
            "name": "CreateCheckpoint",
            "nameLocation": "2738:16:2",
            "parameters": {
              "id": 703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 694,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "checkpointTime",
                  "nameLocation": "2780:14:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 704,
                  "src": "2764:30:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 693,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2764:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 696,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2812:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 704,
                  "src": "2804:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 695,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2804:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 698,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturedShorts",
                  "nameLocation": "2840:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 704,
                  "src": "2832:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2832:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 700,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturedLongs",
                  "nameLocation": "2871:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 704,
                  "src": "2863:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 699,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2863:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 702,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "2901:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 704,
                  "src": "2893:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 701,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2893:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2754:165:2"
            }
          },
          {
            "id": 712,
            "nodeType": "EventDefinition",
            "src": "2926:122:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee",
            "name": "CollectGovernanceFee",
            "nameLocation": "2932:20:2",
            "parameters": {
              "id": 711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 706,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "collector",
                  "nameLocation": "2978:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 712,
                  "src": "2962:25:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 705,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2962:7:2",
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
                  "id": 708,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseFees",
                  "nameLocation": "3005:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 712,
                  "src": "2997:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 707,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2997:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 710,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "3031:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 712,
                  "src": "3023:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 709,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3023:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2952:95:2"
            }
          },
          {
            "id": 761,
            "nodeType": "FunctionDefinition",
            "src": "3457:499:2",
            "nodes": [],
            "body": {
              "id": 760,
              "nodeType": "Block",
              "src": "3724:232:2",
              "nodes": [],
              "statements": [
                {
                  "body": {
                    "id": 758,
                    "nodeType": "Block",
                    "src": "3814:136:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "expression": {
                                        "id": 747,
                                        "name": "block",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -4,
                                        "src": "3859:5:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_block",
                                          "typeString": "block"
                                        }
                                      },
                                      "id": 748,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "3865:9:2",
                                      "memberName": "timestamp",
                                      "nodeType": "MemberAccess",
                                      "src": "3859:15:2",
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
                                    "id": 746,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3852:6:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint32_$",
                                      "typeString": "type(uint32)"
                                    },
                                    "typeName": {
                                      "id": 745,
                                      "name": "uint32",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3852:6:2",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 749,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3852:23:2",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint32",
                                    "typeString": "uint32"
                                  }
                                },
                                {
                                  "hexValue": "30",
                                  "id": 750,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3877:1:2",
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
                                    "typeIdentifier": "t_uint32",
                                    "typeString": "uint32"
                                  },
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 744,
                                "name": "OracleData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4872,
                                "src": "3841:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_struct$_OracleData_$4872_storage_ptr_$",
                                  "typeString": "type(struct HyperdriveStorage.OracleData storage pointer)"
                                }
                              },
                              "id": 751,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "structConstructorCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3841:38:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                                "typeString": "struct HyperdriveStorage.OracleData memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                                "typeString": "struct HyperdriveStorage.OracleData memory"
                              }
                            ],
                            "expression": {
                              "id": 741,
                              "name": "_buffer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4877,
                              "src": "3828:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_OracleData_$4872_storage_$dyn_storage",
                                "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                              }
                            },
                            "id": 743,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3836:4:2",
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "src": "3828:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_OracleData_$4872_storage_$dyn_storage_ptr_$_t_struct$_OracleData_$4872_storage_$returns$__$attached_to$_t_array$_t_struct$_OracleData_$4872_storage_$dyn_storage_ptr_$",
                              "typeString": "function (struct HyperdriveStorage.OracleData storage ref[] storage pointer,struct HyperdriveStorage.OracleData storage ref)"
                            }
                          },
                          "id": 752,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3828:52:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 753,
                        "nodeType": "ExpressionStatement",
                        "src": "3828:52:2"
                      },
                      {
                        "id": 757,
                        "nodeType": "UncheckedBlock",
                        "src": "3894:46:2",
                        "statements": [
                          {
                            "expression": {
                              "id": 755,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": true,
                              "src": "3922:3:2",
                              "subExpression": {
                                "id": 754,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 734,
                                "src": "3924:1:2",
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
                            "id": 756,
                            "nodeType": "ExpressionStatement",
                            "src": "3922:3:2"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 740,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 737,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 734,
                      "src": "3788:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 738,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 716,
                        "src": "3792:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 739,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3800:10:2",
                      "memberName": "oracleSize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7241,
                      "src": "3792:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3788:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 759,
                  "initializationExpression": {
                    "assignments": [
                      734
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 734,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3781:1:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 759,
                        "src": "3773:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 733,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3773:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 736,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 735,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3785:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3773:13:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "3768:182:2"
                }
              ]
            },
            "documentation": {
              "id": 713,
              "nodeType": "StructuredDocumentation",
              "src": "3054:398:2",
              "text": "@notice Initializes a Hyperdrive pool.\n @param _config The configuration of the Hyperdrive pool.\n @param _dataProvider The address of the data provider.\n @param _linkerCodeHash The hash of the ERC20 linker contract's\n        constructor code.\n @param _linkerFactory The address of the factory which is used to deploy\n        the ERC20 linker contracts."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 725,
                    "name": "_dataProvider",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 718,
                    "src": "3637:13:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 726,
                    "name": "_linkerCodeHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 720,
                    "src": "3652:15:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  {
                    "id": 727,
                    "name": "_linkerFactory",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 722,
                    "src": "3669:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 728,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 724,
                  "name": "MultiToken",
                  "nameLocations": [
                    "3626:10:2"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 12262,
                  "src": "3626:10:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "3626:58:2"
              },
              {
                "arguments": [
                  {
                    "id": 730,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 716,
                    "src": "3711:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 731,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 729,
                  "name": "HyperdriveStorage",
                  "nameLocations": [
                    "3693:17:2"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5167,
                  "src": "3693:17:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "3693:26:2"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 716,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "3508:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "3478:37:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 715,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 714,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "3478:11:2",
                        "3490:10:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7245,
                      "src": "3478:22:2"
                    },
                    "referencedDeclaration": 7245,
                    "src": "3478:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 718,
                  "mutability": "mutable",
                  "name": "_dataProvider",
                  "nameLocation": "3533:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "3525:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3525:7:2",
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
                  "id": 720,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "3564:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "3556:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 719,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3556:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 722,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "3597:14:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 761,
                  "src": "3589:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 721,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3589:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3468:149:2"
            },
            "returnParameters": {
              "id": 732,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3724:0:2"
            },
            "scope": 1465,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 777,
            "nodeType": "FunctionDefinition",
            "src": "4142:144:2",
            "nodes": [],
            "body": {
              "id": 776,
              "nodeType": "Block",
              "src": "4194:92:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 765,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "4208:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 766,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4212:5:2",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "4208:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4221:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4208:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 775,
                  "nodeType": "IfStatement",
                  "src": "4204:76:2",
                  "trueBody": {
                    "id": 774,
                    "nodeType": "Block",
                    "src": "4224:56:2",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 769,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "4245:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 771,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4257:10:2",
                            "memberName": "NotPayable",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7334,
                            "src": "4245:22:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 772,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4245:24:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 773,
                        "nodeType": "RevertStatement",
                        "src": "4238:31:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 762,
              "nodeType": "StructuredDocumentation",
              "src": "3988:149:2",
              "text": "@notice A YieldSource dependent check that prevents ether from being\n         transferred to Hyperdrive instances that don't accept ether."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "4151:18:2",
            "parameters": {
              "id": 763,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4169:2:2"
            },
            "returnParameters": {
              "id": 764,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4194:0:2"
            },
            "scope": 1465,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 790,
            "nodeType": "FunctionDefinition",
            "src": "4814:164:2",
            "nodes": [],
            "documentation": {
              "id": 778,
              "nodeType": "StructuredDocumentation",
              "src": "4292:517:2",
              "text": "@notice Transfers base from the user and commits it to the yield source.\n @param _amount The amount of base to deposit.\n @param _options The options that configure how the withdrawal is\n        settled. In particular, the currency used in the deposit is\n        specified here. Aside from those options, yield sources can\n        choose to implement additional options.\n @return sharesMinted The shares created by this deposit.\n @return sharePrice The share price."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "4823:8:2",
            "parameters": {
              "id": 784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 780,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "4849:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 790,
                  "src": "4841:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 779,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4841:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 783,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "4895:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 790,
                  "src": "4866:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 782,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 781,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "4866:11:2",
                        "4878:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "4866:19:2"
                    },
                    "referencedDeclaration": 7295,
                    "src": "4866:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4831:78:2"
            },
            "returnParameters": {
              "id": 789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 786,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "4944:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 790,
                  "src": "4936:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4936:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 788,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "4966:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 790,
                  "src": "4958:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 787,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4958:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4935:42:2"
            },
            "scope": 1465,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 801,
            "nodeType": "FunctionDefinition",
            "src": "5549:148:2",
            "nodes": [],
            "documentation": {
              "id": 791,
              "nodeType": "StructuredDocumentation",
              "src": "4984:560:2",
              "text": "@notice Withdraws shares from the yield source and sends the base\n         released to the destination.\n @param _shares The shares to withdraw from the yield source.\n @param _options The options that configure how the withdrawal is\n        settled. In particular, the destination and currency used in the\n        withdrawal are specified here. Aside from those options, yield\n        sources can choose to implement additional options.\n @return amountWithdrawn The amount of base released by the withdrawal."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "5558:9:2",
            "parameters": {
              "id": 797,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 793,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "5585:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 801,
                  "src": "5577:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 792,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5577:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 796,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "5631:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 801,
                  "src": "5602:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 795,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 794,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "5602:11:2",
                        "5614:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "5602:19:2"
                    },
                    "referencedDeclaration": 7295,
                    "src": "5602:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5567:78:2"
            },
            "returnParameters": {
              "id": 800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 799,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "5680:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 801,
                  "src": "5672:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 798,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5672:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5671:25:2"
            },
            "scope": 1465,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 807,
            "nodeType": "FunctionDefinition",
            "src": "5816:109:2",
            "nodes": [],
            "documentation": {
              "id": 802,
              "nodeType": "StructuredDocumentation",
              "src": "5703:108:2",
              "text": "@notice Loads the share price from the yield source.\n @return sharePrice The current share price."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "5825:14:2",
            "parameters": {
              "id": 803,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5839:2:2"
            },
            "returnParameters": {
              "id": 806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 805,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "5913:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 807,
                  "src": "5905:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 804,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5905:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5904:20:2"
            },
            "scope": 1465,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 812,
            "nodeType": "EventDefinition",
            "src": "5950:47:2",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 808,
              "nodeType": "StructuredDocumentation",
              "src": "5931:14:2",
              "text": "Pause ///"
            },
            "eventSelector": "a4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab",
            "name": "PauserUpdated",
            "nameLocation": "5956:13:2",
            "parameters": {
              "id": 811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 810,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newPauser",
                  "nameLocation": "5986:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 812,
                  "src": "5970:25:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 809,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5970:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5969:27:2"
            }
          },
          {
            "id": 841,
            "nodeType": "FunctionDefinition",
            "src": "6167:200:2",
            "nodes": [],
            "body": {
              "id": 840,
              "nodeType": "Block",
              "src": "6221:146:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 820,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "6235:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 821,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6239:6:2",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "6235:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 822,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4861,
                      "src": "6249:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6235:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 829,
                  "nodeType": "IfStatement",
                  "src": "6231:64:2",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 824,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "6269:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 826,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6281:12:2",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7373,
                        "src": "6269:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 827,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6269:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 828,
                    "nodeType": "RevertStatement",
                    "src": "6262:33:2"
                  }
                },
                {
                  "expression": {
                    "id": 834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 830,
                        "name": "_pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4857,
                        "src": "6305:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 832,
                      "indexExpression": {
                        "id": 831,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 815,
                        "src": "6314:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6305:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 833,
                      "name": "status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 817,
                      "src": "6321:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6305:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 835,
                  "nodeType": "ExpressionStatement",
                  "src": "6305:22:2"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 837,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 815,
                        "src": "6356:3:2",
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
                      "id": 836,
                      "name": "PauserUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 812,
                      "src": "6342:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 838,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6342:18:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 839,
                  "nodeType": "EmitStatement",
                  "src": "6337:23:2"
                }
              ]
            },
            "baseFunctions": [
              7535
            ],
            "documentation": {
              "id": 813,
              "nodeType": "StructuredDocumentation",
              "src": "6003:159:2",
              "text": "@notice Allows governance to change the pauser status of an address.\n @param who The address to change.\n @param status The new pauser status."
            },
            "functionSelector": "7180c8ca",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setPauser",
            "nameLocation": "6176:9:2",
            "parameters": {
              "id": 818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 815,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "6194:3:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 841,
                  "src": "6186:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 814,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6186:7:2",
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
                  "id": 817,
                  "mutability": "mutable",
                  "name": "status",
                  "nameLocation": "6204:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 841,
                  "src": "6199:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 816,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6199:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6185:26:2"
            },
            "returnParameters": {
              "id": 819,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6221:0:2"
            },
            "scope": 1465,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 845,
            "nodeType": "EventDefinition",
            "src": "6373:55:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
            "name": "GovernanceUpdated",
            "nameLocation": "6379:17:2",
            "parameters": {
              "id": 844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 843,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newGovernance",
                  "nameLocation": "6413:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 845,
                  "src": "6397:29:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 842,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6397:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6396:31:2"
            }
          },
          {
            "id": 870,
            "nodeType": "FunctionDefinition",
            "src": "6538:194:2",
            "nodes": [],
            "body": {
              "id": 869,
              "nodeType": "Block",
              "src": "6584:148:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 851,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "6598:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 852,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6602:6:2",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "6598:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 853,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4861,
                      "src": "6612:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6598:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 860,
                  "nodeType": "IfStatement",
                  "src": "6594:64:2",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 855,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "6632:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 857,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6644:12:2",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7373,
                        "src": "6632:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 858,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6632:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 859,
                    "nodeType": "RevertStatement",
                    "src": "6625:33:2"
                  }
                },
                {
                  "expression": {
                    "id": 863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 861,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4861,
                      "src": "6668:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 862,
                      "name": "_who",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 848,
                      "src": "6682:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6668:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 864,
                  "nodeType": "ExpressionStatement",
                  "src": "6668:18:2"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 866,
                        "name": "_who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 848,
                        "src": "6720:4:2",
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
                      "id": 865,
                      "name": "GovernanceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 845,
                      "src": "6702:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 867,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6702:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 868,
                  "nodeType": "EmitStatement",
                  "src": "6697:28:2"
                }
              ]
            },
            "baseFunctions": [
              7659
            ],
            "documentation": {
              "id": 846,
              "nodeType": "StructuredDocumentation",
              "src": "6434:99:2",
              "text": "@notice Allows governance to change governance.\n @param _who The new governance address."
            },
            "functionSelector": "ab033ea9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setGovernance",
            "nameLocation": "6547:13:2",
            "parameters": {
              "id": 849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 848,
                  "mutability": "mutable",
                  "name": "_who",
                  "nameLocation": "6569:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 870,
                  "src": "6561:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 847,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6561:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6560:14:2"
            },
            "returnParameters": {
              "id": 850,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6584:0:2"
            },
            "scope": 1465,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 894,
            "nodeType": "FunctionDefinition",
            "src": "6884:156:2",
            "nodes": [],
            "body": {
              "id": 893,
              "nodeType": "Block",
              "src": "6922:118:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 880,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "6936:21:2",
                    "subExpression": {
                      "baseExpression": {
                        "id": 876,
                        "name": "_pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4857,
                        "src": "6937:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 879,
                      "indexExpression": {
                        "expression": {
                          "id": 877,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "6946:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6950:6:2",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6946:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "6937:20:2",
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
                  "id": 886,
                  "nodeType": "IfStatement",
                  "src": "6932:60:2",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 881,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "6966:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 883,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6978:12:2",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7373,
                        "src": "6966:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 884,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6966:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 885,
                    "nodeType": "RevertStatement",
                    "src": "6959:33:2"
                  }
                },
                {
                  "expression": {
                    "id": 891,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 887,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "7002:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 889,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "7015:8:2",
                      "memberName": "isPaused",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7174,
                      "src": "7002:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 890,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 873,
                      "src": "7026:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "7002:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 892,
                  "nodeType": "ExpressionStatement",
                  "src": "7002:31:2"
                }
              ]
            },
            "baseFunctions": [
              7540
            ],
            "documentation": {
              "id": 871,
              "nodeType": "StructuredDocumentation",
              "src": "6738:141:2",
              "text": "@notice Allows an authorized address to pause this contract.\n @param _status True to pause all deposits and false to unpause them."
            },
            "functionSelector": "02329a29",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pause",
            "nameLocation": "6893:5:2",
            "parameters": {
              "id": 874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 873,
                  "mutability": "mutable",
                  "name": "_status",
                  "nameLocation": "6904:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 894,
                  "src": "6899:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 872,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6899:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6898:14:2"
            },
            "returnParameters": {
              "id": 875,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6922:0:2"
            },
            "scope": 1465,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 907,
            "nodeType": "ModifierDefinition",
            "src": "7117:105:2",
            "nodes": [],
            "body": {
              "id": 906,
              "nodeType": "Block",
              "src": "7140:82:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 897,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4833,
                      "src": "7154:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "id": 898,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "7167:8:2",
                    "memberName": "isPaused",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7174,
                    "src": "7154:21:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 904,
                  "nodeType": "IfStatement",
                  "src": "7150:54:2",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 899,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "7184:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 901,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7196:6:2",
                        "memberName": "Paused",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7338,
                        "src": "7184:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 902,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7184:20:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 903,
                    "nodeType": "RevertStatement",
                    "src": "7177:27:2"
                  }
                },
                {
                  "id": 905,
                  "nodeType": "PlaceholderStatement",
                  "src": "7214:1:2"
                }
              ]
            },
            "documentation": {
              "id": 895,
              "nodeType": "StructuredDocumentation",
              "src": "7046:66:2",
              "text": "@notice Blocks a function execution if the contract is paused."
            },
            "name": "isNotPaused",
            "nameLocation": "7126:11:2",
            "parameters": {
              "id": 896,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7137:2:2"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 917,
            "nodeType": "FunctionDefinition",
            "src": "7503:144:2",
            "nodes": [],
            "documentation": {
              "id": 908,
              "nodeType": "StructuredDocumentation",
              "src": "7252:246:2",
              "text": "@dev Creates a new checkpoint if necessary.\n @param _checkpointTime The time of the checkpoint to create.\n @param _sharePrice The current share price.\n @return openSharePrice The open share price of the latest checkpoint."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_applyCheckpoint",
            "nameLocation": "7512:16:2",
            "parameters": {
              "id": 913,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 910,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "7546:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 917,
                  "src": "7538:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 909,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7538:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 912,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "7579:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 917,
                  "src": "7571:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 911,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7571:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7528:68:2"
            },
            "returnParameters": {
              "id": 916,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 915,
                  "mutability": "mutable",
                  "name": "openSharePrice",
                  "nameLocation": "7631:14:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 917,
                  "src": "7623:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 914,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7623:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7622:24:2"
            },
            "scope": 1465,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 983,
            "nodeType": "FunctionDefinition",
            "src": "7865:907:2",
            "nodes": [],
            "body": {
              "id": 982,
              "nodeType": "Block",
              "src": "7997:775:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 931,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 928,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 921,
                        "src": "8079:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      },
                      "id": 929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8088:11:2",
                      "memberName": "destination",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7288,
                      "src": "8079:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 930,
                      "name": "_feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4864,
                      "src": "8103:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8079:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 938,
                  "nodeType": "IfStatement",
                  "src": "8075:110:2",
                  "trueBody": {
                    "id": 937,
                    "nodeType": "Block",
                    "src": "8118:67:2",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 932,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "8139:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 934,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8151:21:2",
                            "memberName": "InvalidFeeDestination",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7326,
                            "src": "8139:33:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 935,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8139:35:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 936,
                        "nodeType": "RevertStatement",
                        "src": "8132:42:2"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 953,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 948,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 943,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "8277:21:2",
                        "subExpression": {
                          "baseExpression": {
                            "id": 939,
                            "name": "_pausers",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4857,
                            "src": "8278:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 942,
                          "indexExpression": {
                            "expression": {
                              "id": 940,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "8287:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 941,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8291:6:2",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "8287:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "8278:20:2",
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
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 947,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 944,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "8314:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 945,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8318:6:2",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "8314:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "id": 946,
                          "name": "_feeCollector",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4864,
                          "src": "8328:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "8314:27:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "8277:64:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 952,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 949,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "8357:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8361:6:2",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "8357:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 951,
                        "name": "_governance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4861,
                        "src": "8371:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "8357:25:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "8277:105:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 960,
                  "nodeType": "IfStatement",
                  "src": "8260:191:2",
                  "trueBody": {
                    "id": 959,
                    "nodeType": "Block",
                    "src": "8393:58:2",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 954,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "8414:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 956,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8426:12:2",
                            "memberName": "Unauthorized",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7373,
                            "src": "8414:24:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 957,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8414:26:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 958,
                        "nodeType": "RevertStatement",
                        "src": "8407:33:2"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    962
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 962,
                      "mutability": "mutable",
                      "name": "governanceFeesAccrued",
                      "nameLocation": "8539:21:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 982,
                      "src": "8531:29:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 961,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8531:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 964,
                  "initialValue": {
                    "id": 963,
                    "name": "_governanceFeesAccrued",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4859,
                    "src": "8563:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8531:54:2"
                },
                {
                  "expression": {
                    "id": 966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "8595:29:2",
                    "subExpression": {
                      "id": 965,
                      "name": "_governanceFeesAccrued",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4859,
                      "src": "8602:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 967,
                  "nodeType": "ExpressionStatement",
                  "src": "8595:29:2"
                },
                {
                  "expression": {
                    "id": 973,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 968,
                      "name": "proceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 926,
                      "src": "8634:8:2",
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
                          "id": 970,
                          "name": "governanceFeesAccrued",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 962,
                          "src": "8655:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 971,
                          "name": "_options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 921,
                          "src": "8678:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
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
                            "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        ],
                        "id": 969,
                        "name": "_withdraw",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 801,
                        "src": "8645:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$7295_calldata_ptr_$returns$_t_uint256_$",
                          "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                        }
                      },
                      "id": 972,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8645:42:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8634:53:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 974,
                  "nodeType": "ExpressionStatement",
                  "src": "8634:53:2"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 976,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4864,
                        "src": "8723:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 977,
                        "name": "proceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 926,
                        "src": "8738:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 978,
                          "name": "_pricePerShare",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 807,
                          "src": "8748:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                            "typeString": "function () view returns (uint256)"
                          }
                        },
                        "id": 979,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8748:16:2",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 975,
                      "name": "CollectGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 712,
                      "src": "8702:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 980,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8702:63:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 981,
                  "nodeType": "EmitStatement",
                  "src": "8697:68:2"
                }
              ]
            },
            "baseFunctions": [
              7667
            ],
            "documentation": {
              "id": 918,
              "nodeType": "StructuredDocumentation",
              "src": "7653:207:2",
              "text": "@notice This function collects the governance fees accrued by the pool.\n @param _options The options that configure how the fees are settled.\n @return proceeds The amount of base collected."
            },
            "functionSelector": "3e691db9",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 924,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 923,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "7957:12:2"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 64179,
                  "src": "7957:12:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "7957:12:2"
              }
            ],
            "name": "collectGovernanceFee",
            "nameLocation": "7874:20:2",
            "parameters": {
              "id": 922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 921,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "7933:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 983,
                  "src": "7904:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 920,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 919,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "7904:11:2",
                        "7916:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "7904:19:2"
                    },
                    "referencedDeclaration": 7295,
                    "src": "7904:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7894:53:2"
            },
            "returnParameters": {
              "id": 927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 926,
                  "mutability": "mutable",
                  "name": "proceeds",
                  "nameLocation": "7987:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 983,
                  "src": "7979:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 925,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7979:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7978:18:2"
            },
            "scope": 1465,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1016,
            "nodeType": "FunctionDefinition",
            "src": "9268:678:2",
            "nodes": [],
            "body": {
              "id": 1015,
              "nodeType": "Block",
              "src": "9430:516:2",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    996
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 996,
                      "mutability": "mutable",
                      "name": "endingSpotPrice",
                      "nameLocation": "9657:15:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1015,
                      "src": "9649:23:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 995,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9649:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1010,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1002,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 999,
                            "name": "_effectiveShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5128,
                            "src": "9722:23:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 1000,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9722:25:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "id": 1001,
                          "name": "_shareCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 986,
                          "src": "9750:16:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9722:44:2",
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
                        "id": 1006,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 1003,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4833,
                            "src": "9780:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 1004,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9793:12:2",
                          "memberName": "bondReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7150,
                          "src": "9780:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 1005,
                          "name": "_bondCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 988,
                          "src": "9808:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9780:43:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1007,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4823,
                        "src": "9837:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1008,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4820,
                        "src": "9869:12:2",
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
                        "id": 997,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "9675:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 998,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9690:18:2",
                      "memberName": "calculateSpotPrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9113,
                      "src": "9675:33:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1009,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9675:216:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9649:242:2"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1011,
                      "name": "endingSpotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 996,
                      "src": "9908:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 1012,
                      "name": "_maxSpotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 990,
                      "src": "9926:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9908:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 994,
                  "id": 1014,
                  "nodeType": "Return",
                  "src": "9901:38:2"
                }
              ]
            },
            "documentation": {
              "id": 984,
              "nodeType": "StructuredDocumentation",
              "src": "8799:464:2",
              "text": "@dev Checks if any of the bonds the trader purchased on the curve\n      were purchased above price of 1 base per bonds.\n @param _shareCurveDelta The amount of shares the trader pays the curve.\n @param _bondCurveDelta The amount of bonds the trader receives from the\n        curve.\n @param _maxSpotPrice The maximum allowable spot price for the trade.\n @return A flag indicating whether the trade was negative interest."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isNegativeInterest",
            "nameLocation": "9277:19:2",
            "parameters": {
              "id": 991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 986,
                  "mutability": "mutable",
                  "name": "_shareCurveDelta",
                  "nameLocation": "9314:16:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1016,
                  "src": "9306:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 985,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9306:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 988,
                  "mutability": "mutable",
                  "name": "_bondCurveDelta",
                  "nameLocation": "9348:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1016,
                  "src": "9340:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 987,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9340:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 990,
                  "mutability": "mutable",
                  "name": "_maxSpotPrice",
                  "nameLocation": "9381:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1016,
                  "src": "9373:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 989,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9373:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9296:104:2"
            },
            "returnParameters": {
              "id": 994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 993,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1016,
                  "src": "9424:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 992,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9424:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9423:6:2"
            },
            "scope": 1465,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1056,
            "nodeType": "FunctionDefinition",
            "src": "10267:313:2",
            "nodes": [],
            "body": {
              "id": 1055,
              "nodeType": "Block",
              "src": "10337:243:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 1053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 1044,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10505:1:2",
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
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 1041,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "components": [
                                      {
                                        "arguments": [
                                          {
                                            "id": 1032,
                                            "name": "_sharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1019,
                                            "src": "10436:11:2",
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
                                                  "id": 1028,
                                                  "name": "_marketState",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 4833,
                                                  "src": "10400:12:2",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                  }
                                                },
                                                "id": 1029,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "10413:13:2",
                                                "memberName": "shareReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7147,
                                                "src": "10400:26:2",
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
                                              "id": 1027,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "10392:7:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": {
                                                "id": 1026,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10392:7:2",
                                                "typeDescriptions": {}
                                              }
                                            },
                                            "id": 1030,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "10392:35:2",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "id": 1031,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "10428:7:2",
                                          "memberName": "mulDown",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 8364,
                                          "src": "10392:43:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                          }
                                        },
                                        "id": 1033,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10392:56:2",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "id": 1034,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "10391:58:2",
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
                                  "id": 1025,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "10367:6:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_int256_$",
                                    "typeString": "type(int256)"
                                  },
                                  "typeName": {
                                    "id": 1024,
                                    "name": "int256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "10367:6:2",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 1035,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10367:96:2",
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
                                    "expression": {
                                      "id": 1038,
                                      "name": "_marketState",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4833,
                                      "src": "10473:12:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                      }
                                    },
                                    "id": 1039,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "10486:12:2",
                                    "memberName": "longExposure",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 7156,
                                    "src": "10473:25:2",
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
                                  "id": 1037,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "10466:6:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_int128_$",
                                    "typeString": "type(int128)"
                                  },
                                  "typeName": {
                                    "id": 1036,
                                    "name": "int128",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "10466:6:2",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 1040,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10466:33:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int128",
                                  "typeString": "int128"
                                }
                              },
                              "src": "10367:132:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 1042,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "10366:134:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 1043,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10501:3:2",
                        "memberName": "max",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9065,
                        "src": "10366:138:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                          "typeString": "function (int256,int256) pure returns (int256)"
                        }
                      },
                      "id": 1045,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10366:141:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 1050,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1019,
                              "src": "10560:11:2",
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
                              "id": 1048,
                              "name": "_minimumShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4826,
                              "src": "10530:21:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1049,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10552:7:2",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8364,
                            "src": "10530:29:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1051,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10530:42:2",
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
                        "id": 1047,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10523:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 1046,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "10523:6:2",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 1052,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10523:50:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "10366:207:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1023,
                  "id": 1054,
                  "nodeType": "Return",
                  "src": "10347:226:2"
                }
              ]
            },
            "documentation": {
              "id": 1017,
              "nodeType": "StructuredDocumentation",
              "src": "9952:310:2",
              "text": "@dev Check solvency by verifying that the share reserves are greater\n      than the exposure plus the minimum share reserves.\n @param _sharePrice The current share price.\n @return True if the share reserves are greater than the exposure plus\n         the minimum share reserves."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isSolvent",
            "nameLocation": "10276:10:2",
            "parameters": {
              "id": 1020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1019,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "10295:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1056,
                  "src": "10287:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1018,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10287:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10286:21:2"
            },
            "returnParameters": {
              "id": 1023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1022,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1056,
                  "src": "10331:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1021,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10331:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10330:6:2"
            },
            "scope": 1465,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1164,
            "nodeType": "FunctionDefinition",
            "src": "11253:1758:2",
            "nodes": [],
            "body": {
              "id": 1163,
              "nodeType": "Block",
              "src": "11531:1480:2",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    1075
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1075,
                      "mutability": "mutable",
                      "name": "checkpointTime",
                      "nameLocation": "11549:14:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1163,
                      "src": "11541:22:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1074,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11541:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1079,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1078,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1076,
                      "name": "_maturityTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1067,
                      "src": "11566:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 1077,
                      "name": "_positionDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4817,
                      "src": "11582:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11566:33:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11541:58:2"
                },
                {
                  "assignments": [
                    1081
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1081,
                      "mutability": "mutable",
                      "name": "checkpointLongs",
                      "nameLocation": "11617:15:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1163,
                      "src": "11609:23:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1080,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11609:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1091,
                  "initialValue": {
                    "baseExpression": {
                      "id": 1082,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12500,
                      "src": "11635:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 1090,
                    "indexExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "expression": {
                              "id": 1085,
                              "name": "AssetId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8311,
                              "src": "11683:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                                "typeString": "type(library AssetId)"
                              }
                            },
                            "id": 1086,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11691:13:2",
                            "memberName": "AssetIdPrefix",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8017,
                            "src": "11683:21:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$8017_$",
                              "typeString": "type(enum AssetId.AssetIdPrefix)"
                            }
                          },
                          "id": 1087,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "11705:4:2",
                          "memberName": "Long",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8014,
                          "src": "11683:26:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                            "typeString": "enum AssetId.AssetIdPrefix"
                          }
                        },
                        {
                          "id": 1088,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1067,
                          "src": "11711:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                            "typeString": "enum AssetId.AssetIdPrefix"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 1083,
                          "name": "AssetId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8311,
                          "src": "11661:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                            "typeString": "type(library AssetId)"
                          }
                        },
                        "id": 1084,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11669:13:2",
                        "memberName": "encodeAssetId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8040,
                        "src": "11661:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1089,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11661:64:2",
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
                    "src": "11635:100:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11609:126:2"
                },
                {
                  "assignments": [
                    1093
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1093,
                      "mutability": "mutable",
                      "name": "checkpointShorts",
                      "nameLocation": "11753:16:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1163,
                      "src": "11745:24:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1092,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11745:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1103,
                  "initialValue": {
                    "baseExpression": {
                      "id": 1094,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12500,
                      "src": "11772:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 1102,
                    "indexExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "expression": {
                              "id": 1097,
                              "name": "AssetId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8311,
                              "src": "11820:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                                "typeString": "type(library AssetId)"
                              }
                            },
                            "id": 1098,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11828:13:2",
                            "memberName": "AssetIdPrefix",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8017,
                            "src": "11820:21:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$8017_$",
                              "typeString": "type(enum AssetId.AssetIdPrefix)"
                            }
                          },
                          "id": 1099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "11842:5:2",
                          "memberName": "Short",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8015,
                          "src": "11820:27:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                            "typeString": "enum AssetId.AssetIdPrefix"
                          }
                        },
                        {
                          "id": 1100,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1067,
                          "src": "11849:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                            "typeString": "enum AssetId.AssetIdPrefix"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 1095,
                          "name": "AssetId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8311,
                          "src": "11798:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                            "typeString": "type(library AssetId)"
                          }
                        },
                        "id": 1096,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11806:13:2",
                        "memberName": "encodeAssetId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8040,
                        "src": "11798:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1101,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11798:65:2",
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
                    "src": "11772:101:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11745:128:2"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 1110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1106,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1104,
                        "name": "checkpointLongs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1081,
                        "src": "11967:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 1105,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11986:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "11967:20:2",
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
                      "id": 1109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1107,
                        "name": "checkpointShorts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1093,
                        "src": "11991:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 1108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12011:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "11991:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "11967:45:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1161,
                    "nodeType": "Block",
                    "src": "12090:915:2",
                    "statements": [
                      {
                        "assignments": [
                          1120
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 1120,
                            "mutability": "mutable",
                            "name": "delta",
                            "nameLocation": "12345:5:2",
                            "nodeType": "VariableDeclaration",
                            "scope": 1161,
                            "src": "12338:12:2",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            },
                            "typeName": {
                              "id": 1119,
                              "name": "int128",
                              "nodeType": "ElementaryTypeName",
                              "src": "12338:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 1142,
                        "initialValue": {
                          "arguments": [
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 1137,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 1135,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 1128,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "arguments": [
                                              {
                                                "id": 1125,
                                                "name": "_sharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1069,
                                                "src": "12402:11:2",
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
                                                "id": 1123,
                                                "name": "_shareUserDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1065,
                                                "src": "12378:15:2",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "id": 1124,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "12394:7:2",
                                              "memberName": "mulDown",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 8364,
                                              "src": "12378:23:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                              }
                                            },
                                            "id": 1126,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12378:36:2",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "+",
                                          "rightExpression": {
                                            "id": 1127,
                                            "name": "_bondReservesDelta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1063,
                                            "src": "12437:18:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "src": "12378:77:2",
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
                                          "id": 1134,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "hexValue": "32",
                                            "id": 1129,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "12478:1:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_2_by_1",
                                              "typeString": "int_const 2"
                                            },
                                            "value": "2"
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "arguments": [
                                              {
                                                "id": 1132,
                                                "name": "_sharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1069,
                                                "src": "12530:11:2",
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
                                                "id": 1130,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1061,
                                                "src": "12502:19:2",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "id": 1131,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "12522:7:2",
                                              "memberName": "mulDown",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 8364,
                                              "src": "12502:27:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                              }
                                            },
                                            "id": 1133,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12502:40:2",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "src": "12478:64:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "12378:164:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "id": 1136,
                                        "name": "_bondAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1059,
                                        "src": "12565:11:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "12378:198:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 1138,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "12377:200:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1139,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "12578:9:2",
                                "memberName": "toUint128",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9953,
                                "src": "12377:210:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint128)"
                                }
                              },
                              "id": 1140,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "12377:212:2",
                              "tryCall": false,
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
                            "id": 1122,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "12353:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int128_$",
                              "typeString": "type(int128)"
                            },
                            "typeName": {
                              "id": 1121,
                              "name": "int128",
                              "nodeType": "ElementaryTypeName",
                              "src": "12353:6:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 1141,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12353:250:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "12338:265:2"
                      },
                      {
                        "condition": {
                          "id": 1143,
                          "name": "_isLong",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1071,
                          "src": "12814:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 1159,
                          "nodeType": "Block",
                          "src": "12912:83:2",
                          "statements": [
                            {
                              "expression": {
                                "id": 1157,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "expression": {
                                    "baseExpression": {
                                      "id": 1152,
                                      "name": "_checkpoints",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4852,
                                      "src": "12930:12:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                        "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                      }
                                    },
                                    "id": 1154,
                                    "indexExpression": {
                                      "id": 1153,
                                      "name": "checkpointTime",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1075,
                                      "src": "12943:14:2",
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
                                    "src": "12930:28:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                                      "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                    }
                                  },
                                  "id": 1155,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberLocation": "12959:12:2",
                                  "memberName": "longExposure",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7181,
                                  "src": "12930:41:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int128",
                                    "typeString": "int128"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "id": 1156,
                                  "name": "delta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1120,
                                  "src": "12975:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int128",
                                    "typeString": "int128"
                                  }
                                },
                                "src": "12930:50:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int128",
                                  "typeString": "int128"
                                }
                              },
                              "id": 1158,
                              "nodeType": "ExpressionStatement",
                              "src": "12930:50:2"
                            }
                          ]
                        },
                        "id": 1160,
                        "nodeType": "IfStatement",
                        "src": "12810:185:2",
                        "trueBody": {
                          "id": 1151,
                          "nodeType": "Block",
                          "src": "12823:83:2",
                          "statements": [
                            {
                              "expression": {
                                "id": 1149,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "expression": {
                                    "baseExpression": {
                                      "id": 1144,
                                      "name": "_checkpoints",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4852,
                                      "src": "12841:12:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                        "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                      }
                                    },
                                    "id": 1146,
                                    "indexExpression": {
                                      "id": 1145,
                                      "name": "checkpointTime",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1075,
                                      "src": "12854:14:2",
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
                                    "src": "12841:28:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                                      "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                    }
                                  },
                                  "id": 1147,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberLocation": "12870:12:2",
                                  "memberName": "longExposure",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7181,
                                  "src": "12841:41:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int128",
                                    "typeString": "int128"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "-=",
                                "rightHandSide": {
                                  "id": 1148,
                                  "name": "delta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1120,
                                  "src": "12886:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int128",
                                    "typeString": "int128"
                                  }
                                },
                                "src": "12841:50:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int128",
                                  "typeString": "int128"
                                }
                              },
                              "id": 1150,
                              "nodeType": "ExpressionStatement",
                              "src": "12841:50:2"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 1162,
                  "nodeType": "IfStatement",
                  "src": "11963:1042:2",
                  "trueBody": {
                    "id": 1118,
                    "nodeType": "Block",
                    "src": "12014:70:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 1116,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "baseExpression": {
                                "id": 1111,
                                "name": "_checkpoints",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4852,
                                "src": "12028:12:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                  "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                }
                              },
                              "id": 1113,
                              "indexExpression": {
                                "id": 1112,
                                "name": "checkpointTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1075,
                                "src": "12041:14:2",
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
                              "src": "12028:28:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                                "typeString": "struct IHyperdrive.Checkpoint storage ref"
                              }
                            },
                            "id": 1114,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "12057:12:2",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7181,
                            "src": "12028:41:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "30",
                            "id": 1115,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12072:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "12028:45:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        "id": 1117,
                        "nodeType": "ExpressionStatement",
                        "src": "12028:45:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 1057,
              "nodeType": "StructuredDocumentation",
              "src": "10586:662:2",
              "text": "@dev Calculates the checkpoint exposure when a position is closed\n @param _bondAmount The amount of bonds that the user is closing.\n @param _shareReservesDelta The amount of shares that the reserves will\n        change by.\n @param _bondReservesDelta The amount of bonds that the reserves will\n        change by.\n @param _shareUserDelta The amount of shares that the user will receive\n        (long) or pay (short).\n @param _maturityTime The maturity time of the position being closed.\n @param _sharePrice The current share price.\n @param _isLong True if the position being closed is long."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_updateCheckpointLongExposureOnClose",
            "nameLocation": "11262:36:2",
            "parameters": {
              "id": 1072,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1059,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "11316:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1164,
                  "src": "11308:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1058,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11308:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1061,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "11345:19:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1164,
                  "src": "11337:27:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1060,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11337:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1063,
                  "mutability": "mutable",
                  "name": "_bondReservesDelta",
                  "nameLocation": "11382:18:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1164,
                  "src": "11374:26:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1062,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11374:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1065,
                  "mutability": "mutable",
                  "name": "_shareUserDelta",
                  "nameLocation": "11418:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1164,
                  "src": "11410:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1064,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11410:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1067,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "11451:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1164,
                  "src": "11443:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1066,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11443:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1069,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "11482:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1164,
                  "src": "11474:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1068,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11474:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1071,
                  "mutability": "mutable",
                  "name": "_isLong",
                  "nameLocation": "11508:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1164,
                  "src": "11503:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1070,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11503:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11298:223:2"
            },
            "returnParameters": {
              "id": 1073,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11531:0:2"
            },
            "scope": 1465,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1252,
            "nodeType": "FunctionDefinition",
            "src": "13182:890:2",
            "nodes": [],
            "body": {
              "id": 1251,
              "nodeType": "Block",
              "src": "13251:821:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 1178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 1174,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1172,
                        "name": "_before",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1167,
                        "src": "13325:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 1173,
                        "name": "_after",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1169,
                        "src": "13335:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "13325:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 1177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1175,
                        "name": "_before",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1167,
                        "src": "13345:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 1176,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13356:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "13345:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13325:32:2",
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
                      "id": 1212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1210,
                        "name": "_after",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1169,
                        "src": "13758:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 1211,
                        "name": "_before",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1167,
                        "src": "13767:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "13758:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1249,
                    "nodeType": "IfStatement",
                    "src": "13754:312:2",
                    "trueBody": {
                      "id": 1248,
                      "nodeType": "Block",
                      "src": "13776:290:2",
                      "statements": [
                        {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 1215,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 1213,
                              "name": "_before",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1167,
                              "src": "13794:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 1214,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "13805:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "13794:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "id": 1246,
                            "nodeType": "Block",
                            "src": "13961:95:2",
                            "statements": [
                              {
                                "expression": {
                                  "id": 1244,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "expression": {
                                      "id": 1232,
                                      "name": "_marketState",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4833,
                                      "src": "13979:12:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                      }
                                    },
                                    "id": 1234,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberLocation": "13992:12:2",
                                    "memberName": "longExposure",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 7156,
                                    "src": "13979:25:2",
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
                                        "arguments": [],
                                        "expression": {
                                          "argumentTypes": [],
                                          "expression": {
                                            "arguments": [
                                              {
                                                "hexValue": "30",
                                                "id": 1239,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "14027:1:2",
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
                                                "id": 1237,
                                                "name": "_after",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1169,
                                                "src": "14016:6:2",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_int256",
                                                  "typeString": "int256"
                                                }
                                              },
                                              "id": 1238,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "14023:3:2",
                                              "memberName": "max",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 9065,
                                              "src": "14016:10:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                                "typeString": "function (int256,int256) pure returns (int256)"
                                              }
                                            },
                                            "id": 1240,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "14016:13:2",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            }
                                          },
                                          "id": 1241,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "14030:8:2",
                                          "memberName": "toInt128",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 9993,
                                          "src": "14016:22:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                            "typeString": "function (int256) pure returns (int128)"
                                          }
                                        },
                                        "id": 1242,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14016:24:2",
                                        "tryCall": false,
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
                                      "id": 1236,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "14008:7:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint128_$",
                                        "typeString": "type(uint128)"
                                      },
                                      "typeName": {
                                        "id": 1235,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14008:7:2",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 1243,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "14008:33:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint128",
                                      "typeString": "uint128"
                                    }
                                  },
                                  "src": "13979:62:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint128",
                                    "typeString": "uint128"
                                  }
                                },
                                "id": 1245,
                                "nodeType": "ExpressionStatement",
                                "src": "13979:62:2"
                              }
                            ]
                          },
                          "id": 1247,
                          "nodeType": "IfStatement",
                          "src": "13790:266:2",
                          "trueBody": {
                            "id": 1231,
                            "nodeType": "Block",
                            "src": "13808:147:2",
                            "statements": [
                              {
                                "expression": {
                                  "id": 1229,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "expression": {
                                      "id": 1216,
                                      "name": "_marketState",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4833,
                                      "src": "13826:12:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                      }
                                    },
                                    "id": 1218,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberLocation": "13839:12:2",
                                    "memberName": "longExposure",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 7156,
                                    "src": "13826:25:2",
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
                                        "commonType": {
                                          "typeIdentifier": "t_int128",
                                          "typeString": "int128"
                                        },
                                        "id": 1227,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "arguments": [],
                                          "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                              "id": 1221,
                                              "name": "_after",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 1169,
                                              "src": "13884:6:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                              }
                                            },
                                            "id": 1222,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "13891:8:2",
                                            "memberName": "toInt128",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 9993,
                                            "src": "13884:15:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                              "typeString": "function (int256) pure returns (int128)"
                                            }
                                          },
                                          "id": 1223,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "13884:17:2",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "arguments": [],
                                          "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                              "id": 1224,
                                              "name": "_before",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 1167,
                                              "src": "13904:7:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                              }
                                            },
                                            "id": 1225,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "13912:8:2",
                                            "memberName": "toInt128",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 9993,
                                            "src": "13904:16:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                              "typeString": "function (int256) pure returns (int128)"
                                            }
                                          },
                                          "id": 1226,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "13904:18:2",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                          }
                                        },
                                        "src": "13884:38:2",
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
                                      "id": 1220,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "13855:7:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint128_$",
                                        "typeString": "type(uint128)"
                                      },
                                      "typeName": {
                                        "id": 1219,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13855:7:2",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 1228,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "13855:85:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint128",
                                      "typeString": "uint128"
                                    }
                                  },
                                  "src": "13826:114:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint128",
                                    "typeString": "uint128"
                                  }
                                },
                                "id": 1230,
                                "nodeType": "ExpressionStatement",
                                "src": "13826:114:2"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "id": 1250,
                  "nodeType": "IfStatement",
                  "src": "13321:745:2",
                  "trueBody": {
                    "id": 1209,
                    "nodeType": "Block",
                    "src": "13359:321:2",
                    "statements": [
                      {
                        "assignments": [
                          1180
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 1180,
                            "mutability": "mutable",
                            "name": "delta",
                            "nameLocation": "13380:5:2",
                            "nodeType": "VariableDeclaration",
                            "scope": 1209,
                            "src": "13373:12:2",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "typeName": {
                              "id": 1179,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "13373:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 1190,
                        "initialValue": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 1188,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 1183,
                                "name": "_before",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1167,
                                "src": "13395:7:2",
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
                                    "id": 1186,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "13416:1:2",
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
                                    "id": 1184,
                                    "name": "_after",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1169,
                                    "src": "13405:6:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "id": 1185,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "13412:3:2",
                                  "memberName": "max",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 9065,
                                  "src": "13405:10:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                    "typeString": "function (int256,int256) pure returns (int256)"
                                  }
                                },
                                "id": 1187,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "13405:13:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "src": "13395:23:2",
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
                            "id": 1182,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "13388:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 1181,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "13388:6:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 1189,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13388:31:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "13373:46:2"
                      },
                      {
                        "expression": {
                          "id": 1207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 1191,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4833,
                              "src": "13546:12:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 1193,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "13559:12:2",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7156,
                            "src": "13546:25:2",
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
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "expression": {
                                              "id": 1200,
                                              "name": "_marketState",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 4833,
                                              "src": "13617:12:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                              }
                                            },
                                            "id": 1201,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "13630:12:2",
                                            "memberName": "longExposure",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7156,
                                            "src": "13617:25:2",
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
                                          "id": 1199,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "13610:6:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_int128_$",
                                            "typeString": "type(int128)"
                                          },
                                          "typeName": {
                                            "id": 1198,
                                            "name": "int128",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "13610:6:2",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 1202,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13610:33:2",
                                        "tryCall": false,
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
                                      "expression": {
                                        "id": 1196,
                                        "name": "delta",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1180,
                                        "src": "13600:5:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "id": 1197,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "13606:3:2",
                                      "memberName": "min",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 9047,
                                      "src": "13600:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                        "typeString": "function (int256,int256) pure returns (int256)"
                                      }
                                    },
                                    "id": 1203,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "13600:44:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "id": 1204,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "13645:8:2",
                                  "memberName": "toInt128",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 9993,
                                  "src": "13600:53:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                    "typeString": "function (int256) pure returns (int128)"
                                  }
                                },
                                "id": 1205,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "13600:55:2",
                                "tryCall": false,
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
                              "id": 1195,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "13575:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint128_$",
                                "typeString": "type(uint128)"
                              },
                              "typeName": {
                                "id": 1194,
                                "name": "uint128",
                                "nodeType": "ElementaryTypeName",
                                "src": "13575:7:2",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1206,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13575:94:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "src": "13546:123:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "id": 1208,
                        "nodeType": "ExpressionStatement",
                        "src": "13546:123:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 1165,
              "nodeType": "StructuredDocumentation",
              "src": "13017:160:2",
              "text": "@dev Updates the global long exposure.\n @param _before The long exposure before the update.\n @param _after The long exposure after the update."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_updateLongExposure",
            "nameLocation": "13191:19:2",
            "parameters": {
              "id": 1170,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1167,
                  "mutability": "mutable",
                  "name": "_before",
                  "nameLocation": "13218:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1252,
                  "src": "13211:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1166,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13211:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1169,
                  "mutability": "mutable",
                  "name": "_after",
                  "nameLocation": "13234:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1252,
                  "src": "13227:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1168,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13227:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13210:31:2"
            },
            "returnParameters": {
              "id": 1171,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13251:0:2"
            },
            "scope": 1465,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1291,
            "nodeType": "FunctionDefinition",
            "src": "14237:490:2",
            "nodes": [],
            "body": {
              "id": 1290,
              "nodeType": "Block",
              "src": "14352:375:2",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    1261
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1261,
                      "mutability": "mutable",
                      "name": "longExposure",
                      "nameLocation": "14370:12:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1290,
                      "src": "14362:20:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1260,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "14362:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1270,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1268,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1255,
                        "src": "14441:11:2",
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
                              "id": 1264,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4833,
                              "src": "14393:12:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 1265,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "14406:12:2",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7156,
                            "src": "14393:25:2",
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
                          "id": 1263,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "14385:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 1262,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14385:7:2",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 1266,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14385:34:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1267,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14420:7:2",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8382,
                      "src": "14385:42:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14385:77:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14362:100:2"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 1271,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "14476:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 1272,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14489:13:2",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7147,
                      "src": "14476:26:2",
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
                      "id": 1275,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1273,
                        "name": "longExposure",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1261,
                        "src": "14505:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 1274,
                        "name": "_minimumShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4826,
                        "src": "14520:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "14505:36:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14476:65:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1287,
                  "nodeType": "IfStatement",
                  "src": "14472:222:2",
                  "trueBody": {
                    "id": 1286,
                    "nodeType": "Block",
                    "src": "14543:151:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 1284,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 1277,
                            "name": "idleShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1258,
                            "src": "14557:10:2",
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
                            "id": 1283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1281,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 1278,
                                  "name": "_marketState",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4833,
                                  "src": "14586:12:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                  }
                                },
                                "id": 1279,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "14599:13:2",
                                "memberName": "shareReserves",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7147,
                                "src": "14586:26:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 1280,
                                "name": "longExposure",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1261,
                                "src": "14631:12:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "14586:57:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 1282,
                              "name": "_minimumShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4826,
                              "src": "14662:21:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "14586:97:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14557:126:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1285,
                        "nodeType": "ExpressionStatement",
                        "src": "14557:126:2"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 1288,
                    "name": "idleShares",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1258,
                    "src": "14710:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1259,
                  "id": 1289,
                  "nodeType": "Return",
                  "src": "14703:17:2"
                }
              ]
            },
            "documentation": {
              "id": 1253,
              "nodeType": "StructuredDocumentation",
              "src": "14078:154:2",
              "text": "@dev Calculates the number of share reserves that are not reserved by\n      open positions.\n @param _sharePrice The current share price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateIdleShareReserves",
            "nameLocation": "14246:27:2",
            "parameters": {
              "id": 1256,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1255,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "14291:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1291,
                  "src": "14283:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1254,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14283:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14273:35:2"
            },
            "returnParameters": {
              "id": 1259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1258,
                  "mutability": "mutable",
                  "name": "idleShares",
                  "nameLocation": "14340:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1291,
                  "src": "14332:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1257,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14332:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14331:20:2"
            },
            "scope": 1465,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1334,
            "nodeType": "FunctionDefinition",
            "src": "15254:1612:2",
            "nodes": [],
            "body": {
              "id": 1333,
              "nodeType": "Block",
              "src": "15479:1387:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 1324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1305,
                      "name": "totalCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1301,
                      "src": "16431:13:2",
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
                          "id": 1322,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1294,
                          "src": "16614:7:2",
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
                              "id": 1319,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1298,
                              "src": "16580:11:2",
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
                                  "id": 1316,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4840,
                                  "src": "16548:9:2",
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
                                      "id": 1313,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 1309,
                                            "name": "_spotPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1296,
                                            "src": "16478:10:2",
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
                                              "id": 1306,
                                              "name": "FixedPointMath",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 9066,
                                              "src": "16448:14:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                                                "typeString": "type(library FixedPointMath)"
                                              }
                                            },
                                            "id": 1307,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "16463:6:2",
                                            "memberName": "ONE_18",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 8325,
                                            "src": "16448:21:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "id": 1308,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "16470:7:2",
                                          "memberName": "divDown",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 8382,
                                          "src": "16448:29:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                          }
                                        },
                                        "id": 1310,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16448:41:2",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "expression": {
                                          "id": 1311,
                                          "name": "FixedPointMath",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 9066,
                                          "src": "16504:14:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                                            "typeString": "type(library FixedPointMath)"
                                          }
                                        },
                                        "id": 1312,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "memberLocation": "16519:6:2",
                                        "memberName": "ONE_18",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 8325,
                                        "src": "16504:21:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "16448:77:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 1314,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "16447:79:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1315,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "16540:7:2",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8364,
                                "src": "16447:100:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1317,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "16447:111:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1318,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "16572:7:2",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8364,
                            "src": "16447:132:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1320,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16447:145:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1321,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16606:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8364,
                        "src": "16447:166:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1323,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "16447:175:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16431:191:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1325,
                  "nodeType": "ExpressionStatement",
                  "src": "16431:191:2"
                },
                {
                  "expression": {
                    "id": 1331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1326,
                      "name": "governanceCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1303,
                      "src": "16801:18:2",
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
                          "id": 1329,
                          "name": "_governanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4846,
                          "src": "16844:14:2",
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
                          "id": 1327,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1301,
                          "src": "16822:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1328,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16836:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8364,
                        "src": "16822:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1330,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "16822:37:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16801:58:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1332,
                  "nodeType": "ExpressionStatement",
                  "src": "16801:58:2"
                }
              ]
            },
            "documentation": {
              "id": 1292,
              "nodeType": "StructuredDocumentation",
              "src": "14733:516:2",
              "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _amount Amount in shares.\n @param _spotPrice The price without slippage of bonds in terms of base\n         (base/bonds).\n @param _sharePrice The current price of shares in terms of base\n        (base/shares).\n @return totalCurveFee The total curve fee. The fee is in terms of bonds.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of bonds."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateFeesGivenShares",
            "nameLocation": "15263:25:2",
            "parameters": {
              "id": 1299,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1294,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "15306:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1334,
                  "src": "15298:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1293,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15298:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1296,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "15331:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1334,
                  "src": "15323:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1295,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15323:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1298,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "15359:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1334,
                  "src": "15351:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1297,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15351:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15288:88:2"
            },
            "returnParameters": {
              "id": 1304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1301,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "15432:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1334,
                  "src": "15424:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1300,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15424:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1303,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "15455:18:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1334,
                  "src": "15447:26:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1302,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15447:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15423:51:2"
            },
            "scope": 1465,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1412,
            "nodeType": "FunctionDefinition",
            "src": "17660:2619:2",
            "nodes": [],
            "body": {
              "id": 1411,
              "nodeType": "Block",
              "src": "18146:2133:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 1371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1356,
                      "name": "totalCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1346,
                      "src": "18834:13:2",
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
                          "id": 1368,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1339,
                          "src": "18971:24:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 1369,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1343,
                          "src": "18997:11:2",
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
                              "id": 1365,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1337,
                              "src": "18938:7:2",
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
                                  "id": 1362,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "expression": {
                                      "id": 1359,
                                      "name": "FixedPointMath",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9066,
                                      "src": "18881:14:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                                        "typeString": "type(library FixedPointMath)"
                                      }
                                    },
                                    "id": 1360,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberLocation": "18896:6:2",
                                    "memberName": "ONE_18",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 8325,
                                    "src": "18881:21:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "-",
                                  "rightExpression": {
                                    "id": 1361,
                                    "name": "_spotPrice",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1341,
                                    "src": "18905:10:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "18881:34:2",
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
                                  "id": 1357,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4840,
                                  "src": "18850:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1358,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "18873:7:2",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8364,
                                "src": "18850:30:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1363,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "18850:66:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1364,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "18930:7:2",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8364,
                            "src": "18850:87:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1366,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "18850:96:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1367,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18960:10:2",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8346,
                        "src": "18850:120:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1370,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18850:159:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "18834:175:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1372,
                  "nodeType": "ExpressionStatement",
                  "src": "18834:175:2"
                },
                {
                  "expression": {
                    "id": 1378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1373,
                      "name": "governanceCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1350,
                      "src": "19200:18:2",
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
                          "id": 1376,
                          "name": "_governanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4846,
                          "src": "19243:14:2",
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
                          "id": 1374,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1346,
                          "src": "19221:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19235:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8364,
                        "src": "19221:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19221:37:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "19200:58:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1379,
                  "nodeType": "ExpressionStatement",
                  "src": "19200:58:2"
                },
                {
                  "assignments": [
                    1381
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1381,
                      "mutability": "mutable",
                      "name": "flat",
                      "nameLocation": "19707:4:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1411,
                      "src": "19699:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1380,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "19699:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1390,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1387,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 1384,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9066,
                            "src": "19746:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                              "typeString": "type(library FixedPointMath)"
                            }
                          },
                          "id": 1385,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "19761:6:2",
                          "memberName": "ONE_18",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8325,
                          "src": "19746:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 1386,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1339,
                          "src": "19770:24:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "19746:48:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1388,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1343,
                        "src": "19808:11:2",
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
                        "id": 1382,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1337,
                        "src": "19714:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1383,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19722:10:2",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8346,
                      "src": "19714:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "19714:115:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "19699:130:2"
                },
                {
                  "expression": {
                    "id": 1396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1391,
                      "name": "totalFlatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1348,
                      "src": "19839:12:2",
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
                          "id": 1394,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4843,
                          "src": "19867:8:2",
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
                          "id": 1392,
                          "name": "flat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1381,
                          "src": "19854:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19859:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8364,
                        "src": "19854:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19854:22:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "19839:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1397,
                  "nodeType": "ExpressionStatement",
                  "src": "19839:37:2"
                },
                {
                  "expression": {
                    "id": 1403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1398,
                      "name": "governanceFlatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1352,
                      "src": "20063:17:2",
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
                          "id": 1401,
                          "name": "_governanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4846,
                          "src": "20104:14:2",
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
                          "id": 1399,
                          "name": "totalFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1348,
                          "src": "20083:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1400,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20096:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8364,
                        "src": "20083:20:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1402,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20083:36:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "20063:56:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1404,
                  "nodeType": "ExpressionStatement",
                  "src": "20063:56:2"
                },
                {
                  "expression": {
                    "id": 1409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1405,
                      "name": "totalGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1354,
                      "src": "20213:18:2",
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
                      "id": 1408,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1406,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1350,
                        "src": "20234:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 1407,
                        "name": "governanceFlatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1352,
                        "src": "20255:17:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "20234:38:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "20213:59:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1410,
                  "nodeType": "ExpressionStatement",
                  "src": "20213:59:2"
                }
              ]
            },
            "documentation": {
              "id": 1335,
              "nodeType": "StructuredDocumentation",
              "src": "16872:783:2",
              "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _amount Amount in terms of bonds.\n @param _normalizedTimeRemaining The normalized amount of time until maturity.\n @param _spotPrice The price without slippage of bonds in terms of base\n        (base/bonds).\n @param _sharePrice The current price of shares in terms of base (base/shares).\n @return totalCurveFee The curve fee. The fee is in terms of shares.\n @return totalFlatFee The flat fee. The fee is in terms of shares.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of shares.\n @return governanceFlatFee The flat fee that goes to governance. The\n         fee is in terms of shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateFeesGivenBonds",
            "nameLocation": "17669:24:2",
            "parameters": {
              "id": 1344,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1337,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "17711:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1412,
                  "src": "17703:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1336,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17703:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1339,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "17736:24:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1412,
                  "src": "17728:32:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1338,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17728:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1341,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "17778:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1412,
                  "src": "17770:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1340,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17770:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1343,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "17806:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1412,
                  "src": "17798:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1342,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17798:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17693:130:2"
            },
            "returnParameters": {
              "id": 1355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1346,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "17892:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1412,
                  "src": "17884:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1345,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17884:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1348,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "17927:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1412,
                  "src": "17919:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1347,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17919:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1350,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "17961:18:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1412,
                  "src": "17953:26:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1349,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17953:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1352,
                  "mutability": "mutable",
                  "name": "governanceFlatFee",
                  "nameLocation": "18001:17:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1412,
                  "src": "17993:25:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1351,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17993:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1354,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "18040:18:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1412,
                  "src": "18032:26:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1353,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18032:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17870:271:2"
            },
            "scope": 1465,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1438,
            "nodeType": "FunctionDefinition",
            "src": "20580:315:2",
            "nodes": [],
            "body": {
              "id": 1437,
              "nodeType": "Block",
              "src": "20753:142:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 1425,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1420,
                      "src": "20767:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 1426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "20776:6:2",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7291,
                    "src": "20767:15:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1435,
                    "nodeType": "Block",
                    "src": "20829:60:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 1432,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1417,
                              "src": "20866:11:2",
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
                              "id": 1430,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1415,
                              "src": "20850:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1431,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "20858:7:2",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8364,
                            "src": "20850:15:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1433,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20850:28:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1424,
                        "id": 1434,
                        "nodeType": "Return",
                        "src": "20843:35:2"
                      }
                    ]
                  },
                  "id": 1436,
                  "nodeType": "IfStatement",
                  "src": "20763:126:2",
                  "trueBody": {
                    "id": 1429,
                    "nodeType": "Block",
                    "src": "20784:39:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 1427,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1415,
                          "src": "20805:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1424,
                        "id": 1428,
                        "nodeType": "Return",
                        "src": "20798:14:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 1413,
              "nodeType": "StructuredDocumentation",
              "src": "20285:290:2",
              "text": "@dev Converts input to base if necessary according to what is specified in options.\n @param _amount The amount to convert.\n @param _sharePrice The current share price.\n @param _options The options that configure the conversion.\n @return The converted amount."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_convertToBaseFromOption",
            "nameLocation": "20589:24:2",
            "parameters": {
              "id": 1421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1415,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "20631:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1438,
                  "src": "20623:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1414,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20623:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1417,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "20656:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1438,
                  "src": "20648:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1416,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20648:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1420,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "20706:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1438,
                  "src": "20677:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1419,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1418,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "20677:11:2",
                        "20689:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "20677:19:2"
                    },
                    "referencedDeclaration": 7295,
                    "src": "20677:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20613:107:2"
            },
            "returnParameters": {
              "id": 1424,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1423,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1438,
                  "src": "20744:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1422,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20744:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20743:9:2"
            },
            "scope": 1465,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1464,
            "nodeType": "FunctionDefinition",
            "src": "21181:317:2",
            "nodes": [],
            "body": {
              "id": 1463,
              "nodeType": "Block",
              "src": "21356:142:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 1451,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1446,
                      "src": "21370:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 1452,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "21379:6:2",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7291,
                    "src": "21370:15:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1461,
                    "nodeType": "Block",
                    "src": "21453:39:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 1459,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1441,
                          "src": "21474:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1450,
                        "id": 1460,
                        "nodeType": "Return",
                        "src": "21467:14:2"
                      }
                    ]
                  },
                  "id": 1462,
                  "nodeType": "IfStatement",
                  "src": "21366:126:2",
                  "trueBody": {
                    "id": 1458,
                    "nodeType": "Block",
                    "src": "21387:60:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 1455,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1443,
                              "src": "21424:11:2",
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
                              "id": 1453,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1441,
                              "src": "21408:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1454,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "21416:7:2",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8364,
                            "src": "21408:15:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1456,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "21408:28:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1450,
                        "id": 1457,
                        "nodeType": "Return",
                        "src": "21401:35:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 1439,
              "nodeType": "StructuredDocumentation",
              "src": "20901:275:2",
              "text": "@dev Converts input to what is specified in the options from shares.\n @param _amount The amount to convert.\n @param _sharePrice The current share price.\n @param _options The options that configure the conversion.\n @return The converted amount."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_convertToOptionFromShares",
            "nameLocation": "21190:26:2",
            "parameters": {
              "id": 1447,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1441,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "21234:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1464,
                  "src": "21226:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1440,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21226:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1443,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "21259:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1464,
                  "src": "21251:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21251:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1446,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "21309:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1464,
                  "src": "21280:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1445,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1444,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "21280:11:2",
                        "21292:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "21280:19:2"
                    },
                    "referencedDeclaration": 7295,
                    "src": "21280:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21216:107:2"
            },
            "returnParameters": {
              "id": 1450,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1449,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1464,
                  "src": "21347:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1448,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21347:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21346:9:2"
            },
            "scope": 1465,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 571,
              "name": "IHyperdriveWrite",
              "nameLocations": [
                "971:16:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7668,
              "src": "971:16:2"
            },
            "id": 572,
            "nodeType": "InheritanceSpecifier",
            "src": "971:16:2"
          },
          {
            "baseName": {
              "id": 573,
              "name": "MultiToken",
              "nameLocations": [
                "993:10:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 12262,
              "src": "993:10:2"
            },
            "id": 574,
            "nodeType": "InheritanceSpecifier",
            "src": "993:10:2"
          },
          {
            "baseName": {
              "id": 575,
              "name": "HyperdriveStorage",
              "nameLocations": [
                "1009:17:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 5167,
              "src": "1009:17:2"
            },
            "id": 576,
            "nodeType": "InheritanceSpecifier",
            "src": "1009:17:2"
          }
        ],
        "canonicalName": "HyperdriveBase",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 570,
          "nodeType": "StructuredDocumentation",
          "src": "593:338:2",
          "text": "@author DELV\n @title HyperdriveBase\n @notice The base contract of the Hyperdrive inheritance hierarchy.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          1465,
          5167,
          12262,
          7668,
          7980,
          12544,
          64180,
          76,
          6652
        ],
        "name": "HyperdriveBase",
        "nameLocation": "949:14:2",
        "scope": 1466,
        "usedErrors": [
          7312,
          7318,
          7320,
          7324,
          7326,
          7370,
          7373,
          7386,
          7388,
          7390,
          7392,
          7394
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 2
} as const;
