export const ERC4626Hyperdrive = 
{
  "abi": [
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "contract IERC20",
              "name": "baseToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumTransactionAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "positionDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "checkpointDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "governance",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "feeCollector",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "curve",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "flat",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IHyperdrive.Fees",
              "name": "fees",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "oracleSize",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updateGap",
              "type": "uint256"
            }
          ],
          "internalType": "struct IHyperdrive.PoolConfig",
          "name": "_config",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_dataProvider",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_linkerCodeHash",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_linkerFactory",
          "type": "address"
        },
        {
          "internalType": "contract IERC4626",
          "name": "_pool",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "_targets",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ApprovalFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BaseBufferExceedsShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BatchInputLengthMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BelowMinimumContribution",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpiredDeadline",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidExponent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidApr",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidBaseToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointTime",
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
      "name": "InvalidInitialSharePrice",
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
      "name": "InvalidShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidSignature",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTimestamp",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MinimumSharePrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MinimumTransactionAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativeInterest",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativePresentValue",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotPayable",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OutputLimit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Paused",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PoolAlreadyInitialized",
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
      "inputs": [],
      "name": "UnsafeCastToInt128",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsafeCastToUint128",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsupportedToken",
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
          "name": "withdrawalShareAmount",
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "bool",
          "name": "asUnderlying",
          "type": "bool"
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "name": "status",
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
          "name": "_minOutputPerShare",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
        }
      ],
      "name": "redeemWithdrawalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "baseProceeds",
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "name": "who",
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
          "internalType": "contract IERC20",
          "name": "_target",
          "type": "address"
        }
      ],
      "name": "sweep",
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
    "object": "0x6102a060405260016000553480156200001757600080fd5b5060405162006b2138038062006b218339810160408190526200003a916200076f565b6001600160a01b03808616608052831660a05260c084905260408051808201825260018152603160f81b6020918201529051879187918791879185918591859185918591859185918591620000f6917f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd917fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6914691309101938452602084019290925260408301526001600160a01b0316606082015260800190565b60408051601f19818403018152918152815160209092019190912060e05284516001600160a01b0316610100528401516103e8111592506200014e915050576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200018657604051635428734d60e01b815260040160405180910390fd5b60a081018051610120525160808201511080620001b757508060a001518160800151620001b49190620008bb565b15155b15620001d65760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200024a5750670de0b6b3a764000081610120015160200151115b80620002665750670de0b6b3a764000081610120015160400151115b1562000285576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000330576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec34449091015501620002b0565b5050506001600160a01b0388166102805250620003539450506200057692505050565b86602001511462000377576040516355f2a42f60e01b815260040160405180910390fd5b816001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620003b6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003dc9190620008de565b6001600160a01b031686600001516001600160a01b0316146200041257604051630722152560e11b815260040160405180910390fd5b85516102805160405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af115801562000469573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200048f919062000905565b620004ad576040516340b27c2160e11b815260040160405180910390fd5b60005b815181101562000569576000828281518110620004d157620004d162000929565b60200260200101519050610280516001600160a01b0316816001600160a01b03161480620005135750610100516001600160a01b0316816001600160a01b0316145b15620005325760405163350b944160e11b815260040160405180910390fd5b6001600160a01b03166000908152601460205260409020805460ff191660011790558062000560816200093f565b915050620004b0565b5050505050505062000981565b610280516040516303d1689d60e11b8152670de0b6b3a764000060048201526000916001600160a01b0316906307a2d13a90602401602060405180830381865afa158015620005c9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005ef919062000967565b905090565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b0381118282101715620006305762000630620005f4565b60405290565b6001600160a01b03811681146200064c57600080fd5b50565b80516200065c8162000636565b919050565b6000606082840312156200067457600080fd5b604051606081016001600160401b0381118282101715620006995762000699620005f4565b80604052508091508251815260208301516020820152604083015160408201525092915050565b600082601f830112620006d257600080fd5b815160206001600160401b0380831115620006f157620006f1620005f4565b8260051b604051601f19603f83011681018181108482111715620007195762000719620005f4565b6040529384528581018301938381019250878511156200073857600080fd5b83870191505b8482101562000764578151620007548162000636565b835291830191908301906200073e565b979650505050505050565b6000806000806000808688036102608112156200078b57600080fd5b6101c0808212156200079c57600080fd5b620007a66200060a565b9150620007b3896200064f565b82526020890151602083015260408901516040830152606089015160608301526080890151608083015260a089015160a083015260c089015160c0830152620007ff60e08a016200064f565b60e083015261010062000814818b016200064f565b90830152610120620008298b8b830162000661565b81840152506101808901516101408301526101a089015161016083015281975062000856818a016200064f565b965050506101e087015193506200087161020088016200064f565b92506200088261022088016200064f565b6102408801519092506001600160401b03811115620008a057600080fd5b620008ae89828a01620006c0565b9150509295509295509295565b600082620008d957634e487b7160e01b600052601260045260246000fd5b500690565b600060208284031215620008f157600080fd5b8151620008fe8162000636565b9392505050565b6000602082840312156200091857600080fd5b81518015158114620008fe57600080fd5b634e487b7160e01b600052603260045260246000fd5b6000600182016200096057634e487b7160e01b600052601160045260246000fd5b5060010190565b6000602082840312156200097a57600080fd5b5051919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051615f1762000c0a60003960008181612055015281816120f40152818161217601528181612acc01528181612b4d01528181612b8d0152612c20015260006144ef0152600081816105590152818161066901528181610cc90152610d2f01526000818161440b0152818161467f01528181614ae101528181614b5a01528181614d310152614da20152600081816130d101528181613675015281816143df01528181614b2e0152614d7601526000818161463b01528181614ab50152614d0501526000818161074101528181610fa801528181611521015281816117c9015281816119af0152611d96015260008181610a9201528181610add01528181610bf101528181613ae001528181613e0e01528181613e5d0152818161425a0152818161474b01528181614860015261489c01526000818161081a01528181610b6001528181611a10015281816124460152818161248e01528181612faf015281816135ba01528181613aba0152613fd1015260008181610ba301528181611a5201528181612424015281816124af01528181612f8d0152818161359801528181613b060152613faf01526000818161089c01528181610b82015281816110b6015281816115ac01528181611a3101528181611e53015281816122580152818161237d01528181613057015281816132aa01528181614069015281816149f90152614ea3015260008181611c9701528181611d4001526121bb01526000612011015260008181610386015261133e01526000612ea601526000612e69015260006101570152615f176000f3fe6080604052600436106101405760003560e01c80636f8c3a5b116100b6578063ab033ea91161006f578063ab033ea91461049b578063c23632a7146104bb578063c326a903146104db578063e44808bc146104ee578063ed64bab21461050e578063fa3fcea71461052e57610140565b80636f8c3a5b146103e85780637180c8ca146104085780639032c726146104285780639cd241af14610448578063a179403b14610468578063a22cb4651461047b57610140565b80632002b333116101085780632002b333146102ff5780632787d5951461032057806330adf81f146103405780633644e515146103745780634536ee2f146103a85780634ed2d6ac146103c857610140565b806301681a621461025057806302329a291461027257806306dae82a1461029257806317fad7fc146102bf5780631c0f12b6146102df575b34801561014c57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161018f92919061575a565b600060405180830381855af49150503d80600081146101ca576040519150601f19603f3d011682016040523d82523d6000602084013e6101cf565b606091505b509150915081156101f357604051638bb0a34b60e01b815260040160405180910390fd5b60006101fe8261576a565b90506001600160e01b03198116636e64089360e11b1461022057815160208301fd5b815160031981016004840190815292610241918101602001906024016157db565b80519650602001945050505050f35b34801561025c57600080fd5b5061027061026b366004615895565b61054e565b005b34801561027e57600080fd5b5061027061028d3660046158c0565b610692565b6102a56102a03660046158dd565b6106db565b604080519283526020830191909152015b60405180910390f35b3480156102cb57600080fd5b506102706102da366004615978565b610960565b3480156102eb57600080fd5b506102706102fa366004615a0d565b610a14565b61031261030d366004615a55565b610a27565b6040519081526020016102b6565b34801561032c57600080fd5b5061031261033b3660046158c0565b610c7c565b34801561034c57600080fd5b506103127f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561038057600080fd5b506103127f000000000000000000000000000000000000000000000000000000000000000081565b3480156103b457600080fd5b506102a56103c3366004615a55565b610d60565b3480156103d457600080fd5b506102706103e3366004615a9f565b610f30565b3480156103f457600080fd5b506103126104033660046158dd565b610f7e565b34801561041457600080fd5b50610270610423366004615ade565b6111ec565b34801561043457600080fd5b50610270610443366004615b17565b611264565b34801561045457600080fd5b50610270610463366004615b97565b6114b3565b6102a56104763660046158dd565b6114c4565b34801561048757600080fd5b50610270610496366004615ade565b6116bd565b3480156104a757600080fd5b506102706104b6366004615895565b611729565b3480156104c757600080fd5b506102a56104d6366004615a55565b61179d565b6103126104e93660046158dd565b611954565b3480156104fa57600080fd5b50610270610509366004615bcf565b611c16565b34801561051a57600080fd5b50610270610529366004615c20565b611c66565b34801561053a57600080fd5b506103126105493660046158dd565b611d6c565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105975750336000908152600f602052604090205460ff16155b156105b4576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03811660009081526014602052604090205460ff166105ed5760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610634573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106589190615c39565b905061068e6001600160a01b0383167f000000000000000000000000000000000000000000000000000000000000000083611f77565b5050565b336000908152600f602052604090205460ff166106c1576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146107095760405162461bcd60e51b815260040161070090615c52565b60405180910390fd5b6002600055600c54610100900460ff1615610737576040516313d0ff5960e31b815260040160405180910390fd5b61073f611fda565b7f00000000000000000000000000000000000000000000000000000000000000008710156107805760405163211ddda360e11b815260040160405180910390fd5b60008061078d8986611ffb565b91509150868110156107b2576040516342af972b60e01b815260040160405180910390fd5b60006107bc6121b4565b90506107c881836121ef565b5060008060006107d886866123fd565b600854919a50929550909350909150610802908390600160801b90046001600160801b0316615c8c565b61083f8461080e61252e565b6108189190615c9f565b7f00000000000000000000000000000000000000000000000000000000000000009061254f565b111561085e5760405163512095c760e01b815260040160405180910390fd5b868c111561087f5760405163c972651760e01b815260040160405180910390fd5b80601060008282546108919190615c9f565b909155506108c190507f000000000000000000000000000000000000000000000000000000000000000085615c9f565b97506108d183888488888d61256b565b60006108de60018a612765565b90506108eb818c8a61279a565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d60405161093f939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b038616158061097d57506001600160a01b038516155b1561099b5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146109bb5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610a0b57610a038585838181106109db576109db615cb2565b9050602002013588888686868181106109f6576109f6615cb2565b9050602002013533612843565b6001016109be565b50505050505050565b610a218484848433612843565b50505050565b60008054600114610a4a5760405162461bcd60e51b815260040161070090615c52565b6002600055610a57611fda565b600c5460ff1615610a7b57604051637983c05160e01b815260040160405180910390fd5b600080610a888785611ffb565b9092509050610ab87f00000000000000000000000000000000000000000000000000000000000000006002615cc8565b821015610ad857604051632afb507160e21b815260040160405180910390fd5b610b037f00000000000000000000000000000000000000000000000000000000000000006002615cc8565b610b0d9083615c8c565b9250610b20610b1a6121b4565b826121ef565b50600c805460ff19166001179055610b3782612a04565b600880546001600160801b0319166001600160801b0392909216919091179055610bcc610bc7837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612a2e565b612a04565b600880546001600160801b03928316600160801b029216919091179055610c156000807f000000000000000000000000000000000000000000000000000000000000000061279a565b610c216000868561279a565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610c9f5760405162461bcd60e51b815260040161070090615c52565b60026000908155338152600f602052604090205460ff16158015610cec5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610d0357506011546001600160a01b03163314155b15610d20576040516282b42960e81b815260040160405180910390fd5b601080546000909155610d54817f000000000000000000000000000000000000000000000000000000000000000085612a98565b60016000559392505050565b600080600054600114610d855760405162461bcd60e51b815260040161070090615c52565b60026000908155610d94612c00565b9050610da1610b1a6121b4565b50610dab81612c93565b600d548792506001600160801b031680831115610dcf57806001600160801b031692505b82600003610de557600080935093505050610f20565b610df4600360f81b3385612d6d565b600d546001600160801b03600160801b909104811690600090610e1c90869084908616612e0d565b9050610e2785612a04565b610e319084615cdf565b600d80546001600160801b0319166001600160801b0392909216919091179055610e5a81612a04565b600d8054601090610e7c908490600160801b90046001600160801b0316615cdf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610eab818989612a98565b955085610eb88a8761254f565b1115610ed75760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b83610f3a81612e2b565b6001600160a01b0316336001600160a01b031614610f6b57604051632aab8bd360e01b815260040160405180910390fd5b610f7785858585612ee8565b5050505050565b60008054600114610fa15760405162461bcd60e51b815260040161070090615c52565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015610fe75760405163211ddda360e11b815260040160405180910390fd5b6000610ff1612c00565b9050610ffd87826121ef565b5061101361100c600289612765565b3388612d6d565b6000806000806000806110278c888f612f55565b600854959b50939950919750955093509150611054908790600160801b90046001600160801b0316615c8c565b6110608461080e61252e565b111561107f5760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561114157836010600082825461109c9190615c9f565b909155506110af9050838a898886613129565b60006110db7f000000000000000000000000000000000000000000000000000000000000000084615c8c565b6000818152600e6020526040812054919250600160801b909104600f0b9061110e9086908a908e908d90899089906132a3565b6000828152600e602052604090205461113590600f83810b91600160801b9004900b61344b565b61113e8c612c93565b50505b600061114e898f8f612a98565b90508e8110156111715760405163c972651760e01b815260040160405180910390fd5b61117c600284612765565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516111ca939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b03163314611216576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b834211156112855760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166112ac5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156113d8573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461141657604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061143c90615d06565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b6114bf83838333612ee8565b505050565b6000806000546001146114e95760405162461bcd60e51b815260040161070090615c52565b6002600055600c54610100900460ff1615611517576040516313d0ff5960e31b815260040160405180910390fd5b61151f611fda565b7f00000000000000000000000000000000000000000000000000000000000000008710156115605760405163211ddda360e11b815260040160405180910390fd5b600061156a612c00565b90508581101561158d576040516342af972b60e01b815260040160405180910390fd5b60006115976121b4565b905060006115a582846121ef565b90506115d17f000000000000000000000000000000000000000000000000000000000000000083615c9f565b94506000806115e18c8685613572565b60108054939950919450925082916000906115fd908490615c9f565b909155505050848a10156116245760405163c972651760e01b815260040160405180910390fd5b61162e8588611ffb565b505061163c8b8286896136a6565b6000611649600288612765565b9050611656818a8e61279a565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611753576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000806000546001146117c25760405162461bcd60e51b815260040161070090615c52565b60026000557f00000000000000000000000000000000000000000000000000000000000000008610156118085760405163211ddda360e11b815260040160405180910390fd5b6000611812612c00565b905061181f610b1a6121b4565b5061182981612c93565b6002602052600080516020615ec283398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611884916001600160801b0390911690615c8c565b905060006118928284615c9f565b90506118a06000338c612d6d565b60006118af8b868487876138e4565b965090506118c2600360f81b8a8861279a565b6118cd818a8a612a98565b9650868a11156118f05760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b600080546001146119775760405162461bcd60e51b815260040161070090615c52565b6002600055600c54610100900460ff16156119a5576040516313d0ff5960e31b815260040160405180910390fd5b6119ad611fda565b7f00000000000000000000000000000000000000000000000000000000000000008610156119ee5760405163211ddda360e11b815260040160405180910390fd5b6000611a766119fb61252e565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006139e2565b905085811080611a8557508481115b15611aa357604051633b61151160e11b815260040160405180910390fd5b600080611ab08986611ffb565b91509150611abf610b1a6121b4565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611b0b916001600160801b0390911690615c8c565b60008080526002602052600080516020615ec28339815191525491925090611b34908390615c9f565b9050600080611b4285613a1d565b90506000611b4f82613b83565b9050611b5a87613df5565b6008546001600160801b038082168452600954600f0b6020850152600160801b909104166040830152611b8c82613b83565b9250611ba48482611b9d8187615c8c565b9190612e0d565b98505050611bb460008a8961279a565b611bbd84612c93565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b84611c2081612e2b565b6001600160a01b0316336001600160a01b031614611c5157604051632aab8bd360e01b815260040160405180910390fd5b611c5e8686868686612843565b505050505050565b6000818152600e60205260409020546001600160801b031615611c865750565b6000611c906121b4565b9050611cbc7f000000000000000000000000000000000000000000000000000000000000000083615d35565b151580611cc857508181105b15611ce65760405163ecd29e8160e01b815260040160405180910390fd5b808203611cfe576114bf81611cf9612c00565b6121ef565b815b6000818152600e60205260409020546001600160801b0316828203611d2a57611d27612c00565b90505b8015611d3a57610f7784826121ef565b50611d657f000000000000000000000000000000000000000000000000000000000000000082615c9f565b9050611d00565b60008054600114611d8f5760405162461bcd60e51b815260040161070090615c52565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015611dd55760405163211ddda360e11b815260040160405180910390fd5b6000611ddf612c00565b9050611deb87826121ef565b50611dfa61100c600189612765565b600080600080600080611e0e8c888f613f77565b95509550955095509550955060008d90508d421015611ed7578160106000828254611e399190615c9f565b90915550611e4c90508d888786856140ee565b6000611e787f000000000000000000000000000000000000000000000000000000000000000083615c8c565b6000818152600e6020526040902054909150600160801b9004600f0b611ea48f878b8a878f60016132a3565b6000828152600e6020526040902054611ecb90600f83810b91600160801b9004900b61344b565b611ed48a612c93565b50505b6000611ee4878d8d612a98565b9050808d1115611f075760405163c972651760e01b815260040160405180910390fd5b8d611f13600184612765565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b6040516001600160a01b0383166024820152604481018290526114bf90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526142bb565b3415611ff957604051631574f9f360e01b815260040160405180910390fd5b565b60008082156120db576120396001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087614390565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156120a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ca9190615c39565b91506120d4612c00565b90506121ad565b6040516363737ac960e11b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015612143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121679190615c39565b905061219e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084614390565b8092506121a9612c00565b9150505b9250929050565b60006121e07f000000000000000000000000000000000000000000000000000000000000000042615d35565b6121ea9042615c8c565b905090565b6000828152600e6020526040812080546001600160801b031615158061221457504284115b1561222a57546001600160801b031690506123f7565b61223383612a04565b81546001600160801b0319166001600160801b03919091161781556000600e8161227d7f000000000000000000000000000000000000000000000000000000000000000088615c8c565b815260208101919091526040016000908120546001600160801b031691506002816122a88289612765565b8152602001908152602001600020549050600080821115612304576000806122d384898760006143c8565b9150915080601060008282546122e99190615c9f565b909155506122fd905084600084808d613129565b6001925050505b60006002600061231560018b612765565b815260200190815260200160002054905060008111156123705760008061233f838a8860016143c8565b9150915080601060008282546123559190615c9f565b90915550612369905083600084808e6140ee565b6001935050505b81156123ee5760006123a27f00000000000000000000000000000000000000000000000000000000000000008a615c8c565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926123e2928492919004900b61344b565b6123eb89612c93565b50505b86955050505050505b92915050565b60008060008061246a61240e61252e565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000614496565b925060006124d361247961252e565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006144c2565b90506124de816144d3565b6000806124ec89848a61462d565b90925090506124fb8287615c8c565b94506125078186615c9f565b955061251481848a612e0d565b9350612520848a615c8c565b965050505092959194509250565b6008546009546000916121ea916001600160801b0390911690600f0b6146ad565b60006125648383670de0b6b3a7640000612e0d565b9392505050565b600a546001600160801b03166125a6610bc78261259085670de0b6b3a7640000615cc8565b600b546001600160801b031691908a60016146ca565b600b80546001600160801b0319166001600160801b03929092169190911790556125cf87612a04565b600880546000906125ea9084906001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061261785612a04565b60088054601090612639908490600160801b90046001600160801b0316615cdf565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061266686612a04565b6126709082615d49565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b906126cc6126b78b8961254f565b6126c28b6002615cc8565b610bc79190615c8c565b8354909150819084906010906126ed908490600160801b9004600f0b615d69565b82546001600160801b039182166101009390930a928302919092021990911617905550825461272a90600f84810b91600160801b9004900b61344b565b61273387614744565b612750576040516318846de960e01b815260040160405180910390fd5b61275987612c93565b50505050505050505050565b60006001600160f81b0382111561278f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906127cc908490615c9f565b9091555050600083815260026020526040812080548392906127ef908490615c9f565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b038416158061286057506001600160a01b038316155b1561287e5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612942576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff166129425760008581526004602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146129405760008681526004602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061293a908490615c8c565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612974908490615c8c565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906129ab908490615c9f565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b8210612a2a57604051630f0af95160e11b815260040160405180910390fd5b5090565b600080612a3f846301e133806147b6565b9050612a8b612a7b612a59670de0b6b3a7640000866147cb565b612a63888561254f565b612a7590670de0b6b3a7640000615c9f565b906147e0565b612a85888a61254f565b9061254f565b9150505b95945050505050565b60008115612b4057604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301527f0000000000000000000000000000000000000000000000000000000000000000169063ba087652906064016020604051808303816000875af1158015612b15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b399190615c39565b9050612564565b612b746001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611f77565b6040516303d1689d60e11b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015612bdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a8f9190615c39565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015612c6f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121ea9190615c39565b6002602052600080516020615ec283398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612cee916001600160801b0390911690615c8c565b90506000612cfc8284615c9f565b90506000612d11612d0c86613a1d565b613b83565b90506000612d20858385612e0d565b9050600080612d2e88614837565b905082811115612d4557612d428382615c8c565b91505b6000821180612d52575083155b15612d6357612d63828587896148e3565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612d9f908490615c8c565b909155505060008381526002602052604081208054839290612dc2908490615c8c565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612836565b6000826000190484118302158202612e2457600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000806000806000806000612f69886149cc565b9050612fd3612f7661252e565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000614a1d565b909850955093506000612fe761247961252e565b9050612ff2816144d3565b8a8a600080808061300586898988614a8d565b935093509350935080826130199190615c9f565b98506130258285615c8c565b61302f908c615c9f565b9a5061303b8385615c9f565b613045908d615c9f565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a6130819190615c8c565b815260208101919091526040016000908120546001600160801b031691504289116130c3576000898152600e60205260409020546001600160801b03166130c5565b895b90506130f58b8784848e7f0000000000000000000000000000000000000000000000000000000000000000614b8c565b96506131018387615c8c565b95506131138787878686866000614bde565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613172610bc78261315585670de0b6b3a7640000615cc8565b600b54600160801b90046001600160801b031691908a60006146ca565b600b80546001600160801b03928316600160801b02921691909117905561319886612a04565b6131a29082615cdf565b600a80546001600160801b03928316600160801b029216919091179055506131c983612a04565b600880546000906131e49084906001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061321182614c59565b60098054600090613226908490600f0b615d69565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061325684612a04565b60088054601090613278908490600160801b90046001600160801b0316615cdf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b60006132cf7f000000000000000000000000000000000000000000000000000000000000000085615c8c565b90506000600260006132e2600188612765565b8152602001908152602001600020549050600060026000613304600289612765565b8152602001908152602001600020549050816000148015613323575080155b15613348576000838152600e6020526040902080546001600160801b03169055612759565b600061338c8b6133588c8961254f565b613363906002615cc8565b8b61336e8c8b61254f565b6133789190615c9f565b6133829190615c8c565b610bc79190615c9f565b905084156133eb576000848152600e6020526040902080548291906010906133bf908490600160801b9004600f0b615d96565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061343e565b6000848152600e602052604090208054829190601090613416908490600160801b9004600f0b615d69565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b808213801561345b575060008212155b156134ee57600061346c8282614c97565b6134769084615dc3565b6009549091506134a39061349e908390600160801b90046001600160801b0316600f0b614cad565b614c59565b600980546010906134c5908490600160801b90046001600160801b0316615cdf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561068e57600082126135645761350782614c59565b61351082614c59565b61351a9190615d96565b6009805460109061353c908490600160801b90046001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b61351a61349e826000614c97565b60008060006135de61358261252e565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000614cbc565b9150856135eb838761254f565b111561360a5760405163512095c760e01b815260040160405180910390fd5b600061361761247961252e565b9050613622816144d3565b600061363888670de0b6b3a7640000848a614cdd565b945090915061364990508382615c8c565b6136539085615c8c565b935061369987612a858a6136678789615c8c565b8a6136728d82614dde565b8d7f0000000000000000000000000000000000000000000000000000000000000000614b8c565b9450505093509350939050565b600a546136f090610bc790600160801b90046001600160801b03166136d384670de0b6b3a7640000615cc8565b600b54600160801b90046001600160801b031691908860016146ca565b600b80546001600160801b03928316600160801b029216919091179055600061371884612a04565b60085461372e91906001600160801b0316615cdf565b600880546001600160801b0319166001600160801b038316179055905061375485612a04565b60088054601090613776908490600160801b90046001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506137a385612a04565b600a80546010906137c5908490600160801b90046001600160801b0316615d49565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506138145760405163585fe6df60e11b815260040160405180910390fd5b600061381e6121b4565b6000818152600e6020526040902054909150600160801b9004600f0b61384387612a04565b6000838152600e60205260409020805460109061386b908490600160801b9004600f0b615d96565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e60205260409020546138b590600f83810b91600160801b9004900b61344b565b6138be85614744565b6138db576040516318846de960e01b815260040160405180910390fd5b610a0b85612c93565b60008060006138f287613a1d565b905060006138ff82613b83565b905061391161390c612c00565b614837565b935061391e848a88612e0d565b935061393161392c85615de3565b613df5565b6008546001600160801b038082168452600954600f0b6020850152600160801b909104166040830152600061396583613b83565b90506000613974898385612e0d565b90506139808b8a615dc3565b61398a9082615dc3565b905060008112156139d35760006139ab6139a383615de3565b85908c612e0d565b90506139b78188615c8c565b96506139c281613df5565b6139cd81898d614ded565b60009150505b93505050509550959350505050565b6000806139f1878787866144c2565b9050612a8b613a0582866301e13380614e32565b613a1783670de0b6b3a7640000615c8c565b906147b6565b613a7a60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191613b499116614e58565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192613b7b92900416614e58565b905292915050565b600080613ba383610140015184610120015161254f90919063ffffffff16565b61010084015160e0850151613bb79161254f565b613bc19190615dc3565b90506000613bd7846000015185602001516146ad565b90506000821315613c79576000613c198286604001518760a001518860c00151670de0b6b3a7640000613c0a9190615c8c565b89606001518a60800151614ece565b9150613c2790508184614f51565b90508015613c7357613c60828660400151838860c00151670de0b6b3a7640000613c519190615c8c565b89606001518a60800151614f60565b85518690613c6f908390615c8c565b9052505b50613d37565b6000821215613d3757613c8b82615de3565b91506000613cbf8286604001518760c00151670de0b6b3a7640000613cb09190615c8c565b88606001518960800151614f94565b9150613ccd90508184614f51565b90508015613d1957613d06828660400151838860c00151670de0b6b3a7640000613cf79190615c8c565b89606001518a6080015161501e565b85518690613d15908390615c9f565b9052505b613d238184615c8c565b85518690613d32908390615c9f565b905250505b6000613d66856101000151670de0b6b3a7640000613d559190615c8c565b606087015160e08801519190612e0d565b613d94866101400151670de0b6b3a7640000613d829190615c8c565b60608801516101208901519190612e0d565b613d9e9190615dc3565b90506000818660000151613db29190615dff565b90508560a00151811215613dd95760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151613deb9082615c8c565b9695505050505050565b80600003613e005750565b6008546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000811015613e4d5760405163585fe6df60e11b815260040160405180910390fd5b6000613e598383615dff565b90507f0000000000000000000000000000000000000000000000000000000000000000811215613e9c5760405163585fe6df60e11b815260040160405180910390fd5b613ea581612a04565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b818112613ee757613ee0838286612e0d565b9150613f07565b613efb613ef382615de3565b849086612e0d565b613f0490615de3565b91505b613f1082614c59565b600980546001600160801b0319166001600160801b03928316179055600854613f5391610bc791600160801b900416613f4987856146ad565b611b9d87876146ad565b600880546001600160801b03928316600160801b0292169190911790555050505050565b6000806000806000806000613f8b886149cc565b9050613ff5613f9861252e565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615099565b90985096509350600061400961247961252e565b9050614014816144d3565b6000806140238d85858f614cdd565b965090925090506140348288615c8c565b96506140408183615c9f565b61404a908a615c8c565b9850614056858a615c9f565b9750505050506140da85858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e6140939190615c8c565b81526020810191909152604001600020546001600160801b0316428d116140d15760008d8152600e60205260409020546001600160801b03166140d3565b8d5b6001614bde565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614129610bc78261411385670de0b6b3a7640000615cc8565b600b546001600160801b031691908a60006146ca565b600b80546001600160801b0319166001600160801b039290921691909117905561415286612a04565b61415c9082615cdf565b600a80546001600160801b0319166001600160801b03929092169190911790555061418683612a04565b600880546000906141a19084906001600160801b0316615cdf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506141ce82614c59565b600980546000906141e3908490600f0b615d96565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061421384612a04565b60088054601090614235908490600160801b90046001600160801b0316615d49565b82546101009290920a6001600160801b038181021990931691831602179091556008547f000000000000000000000000000000000000000000000000000000000000000091161090508061429d5750600954600854600f9190910b6001600160801b03909116125b15610f775760405163585fe6df60e11b815260040160405180910390fd5b6000614310826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166150e59092919063ffffffff16565b90508051600014806143315750808060200190518101906143319190615e27565b6114bf5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610700565b6040516001600160a01b0380851660248301528316604482015260648101829052610a219085906323b872dd60e01b90608401611fa3565b6000806143d586866147b6565b91506000614403837f000000000000000000000000000000000000000000000000000000000000000061254f565b905061442f817f000000000000000000000000000000000000000000000000000000000000000061254f565b91508315614452576144418282615c8c565b61444b9084615c8c565b9250614469565b61445c8282615c8c565b6144669084615c9f565b92505b8486101561448c5761447c838787612e0d565b9250614489828787612e0d565b91505b5094509492505050565b60006144b78787876144b088670de0b6b3a7640000615c8c565b87876150fc565b979650505050505050565b6000612a8f82612a75858888612e0d565b6013546001600160801b03600160801b820481169116426145147f000000000000000000000000000000000000000000000000000000000000000084615c9f565b111561451f57505050565b60006012828154811061453457614534615cb2565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b0316906145688342615c8c565b601254909150878202830190600090614582886001615c9f565b61458c9190615d35565b905060405180604001604052804263ffffffff168152602001836001600160e01b0316815250601282815481106145c5576145c5615cb2565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b60008061467785612a8585817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061466d818c6147b6565b612a859190615c8c565b91506146a3827f000000000000000000000000000000000000000000000000000000000000000061254f565b9050935093915050565b6000806146ba8385615dc3565b9050600081121561256457600080fd5b6000811561470a576147036146df8487615c9f565b6146e9858761254f565b6146f3888a61254f565b6146fd9190615c9f565b906147cb565b9050612a8f565b82850361471957506000612a8f565b613deb6147268487615c8c565b614730858761254f565b61473a888a61254f565b6146fd9190615c8c565b60006147707f00000000000000000000000000000000000000000000000000000000000000008361254f565b6009546008546147ae916000916001600160801b03600160801b9092048216600f0b9161479e91168761254f565b6147a89190615dc3565b90614c97565b121592915050565b600061256483670de0b6b3a764000084612e0d565b600061256483670de0b6b3a764000084614e32565b6000816000036147f95750670de0b6b3a76400006123f7565b82600003614809575060006123f7565b8160006148158561516f565b905081810261482c670de0b6b3a764000082615e44565b9050613deb81615382565b600954600090819061485990600160801b90046001600160801b0316846147b6565b90506148857f000000000000000000000000000000000000000000000000000000000000000082615c9f565b6008546001600160801b031611156148dd576008547f0000000000000000000000000000000000000000000000000000000000000000906148d09083906001600160801b0316615c8c565b6148da9190615c8c565b91505b50919050565b60008084116148f257826148fd565b6148fd838686612e0d565b90508060000361490d5750610a21565b80858382111561492857839150614925878385612e0d565b90505b61493182612a04565b600d805460009061494c9084906001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061497981612a04565b600d805460109061499b908490600160801b90046001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610a0b8161392c90615de3565b6000806149d76121b4565b90508083116149e75760006149f1565b6149f18184615c8c565b91506148da827f00000000000000000000000000000000000000000000000000000000000000006147b6565b60008080614a3e614a3688670de0b6b3a7640000615c8c565b899087612e0d565b9050614a4a888861254f565b91508115614a8057614a718a8a84614a6a8a670de0b6b3a7640000615c8c565b898961501e565b9250614a7d8382615c9f565b90505b9750975097945050505050565b6000808080614aa486670de0b6b3a7640000615c8c565b9350614ad98786611b9d8b612a85897f000000000000000000000000000000000000000000000000000000000000000061254f565b9350614b05847f000000000000000000000000000000000000000000000000000000000000000061254f565b91506000614b26614b1e89670de0b6b3a7640000615c8c565b8a9088612e0d565b9050614b52817f000000000000000000000000000000000000000000000000000000000000000061254f565b9350614b7e847f000000000000000000000000000000000000000000000000000000000000000061254f565b915050945094509450949050565b600080614ba585614b9d888761550d565b8a9190612e0d565b9050614bb2888486612e0d565b614bbc9082615c9f565b905086811115614bd357614bd08782615c8c565b91505b509695505050505050565b60008060008060008088881015614c3b578615614c0357614c008d898b612e0d565b9c505b614c0e8c898b612e0d565b9b50614c1a8b8d615dc3565b9050614c278b898b612e0d565b9a50614c348a898b612e0d565b9950614c48565b614c458b8d615dc3565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b03198212801590614c7a575060016001607f1b038213155b612a2a5760405163a5353be560e01b815260040160405180910390fd5b6000818313614ca65781612564565b5090919050565b60008183136148dd5782612564565b60006144b7878787614cd688670de0b6b3a7640000615c8c565b8787614f60565b6000808080614cf486670de0b6b3a7640000615c8c565b9050614d298786611b9d8b612a85867f000000000000000000000000000000000000000000000000000000000000000061254f565b9350614d55847f000000000000000000000000000000000000000000000000000000000000000061254f565b91506000614d6e614b1e89670de0b6b3a7640000615c8c565b9050614d9a817f000000000000000000000000000000000000000000000000000000000000000061254f565b9350614dc6847f000000000000000000000000000000000000000000000000000000000000000061254f565b614dd09084615c9f565b925050509450945094915050565b6000818311614ca65781612564565b6000614dfb612d0c83613a1d565b60008080526002602052600080516020615ec28339815191525491925090614e24908590615c9f565b9050610f77858383876148e3565b6000826000190484118302158202614e4957600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000614e6c6121b4565b614e769190615cc8565b9050808311614e86576000614e90565b614e908184615c8c565b91506148da614ec7670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000615cc8565b83906147b6565b60008080614edc85856147b6565b90506000614eed82868c8a8d615522565b90506000614f28614f06670de0b6b3a76400008a6147b6565b614f1e614f178b612a758b8f61254f565b869061254f565b612a759085615c8c565b9050614f34898c615c8c565b614f3e8b83615c8c565b945094505050505b965096945050505050565b60008183116148dd5782612564565b600080614f71888888888888615550565b909250905080614bd357604051637ac17d2560e01b815260040160405180910390fd5b60008080614fa285856147b6565b90506000614fb382868b8a8c615522565b90506000614fe8614fcc670de0b6b3a76400008a6147b6565b612a75614fe1670de0b6b3a764000087615c9f565b85906147b6565b90506000614ff682886147b6565b90506150028b82615c8c565b61500c838c615c8c565b95509550505050509550959350505050565b60008061502b84846147b6565b9050600061503c82858b898c615522565b905061504c86612a75898b615c8c565b97506000615073615065670de0b6b3a7640000896147cb565b612a7585613a178d87615c8c565b905061507f81866147b6565b905061508b8a82615c8c565b9a9950505050505050505050565b600080806150b2614a3688670de0b6b3a7640000615c8c565b90508615614a80576150c4888861254f565b9150614a718a8a846150de8a670de0b6b3a7640000615c8c565b8989614f60565b60606150f484846000856155f1565b949350505050565b60008061510984846147b6565b9050600061511a82858b898c615522565b905061513486612a7561512d8a8d615c9f565b879061254f565b9850615140828a61254f565b98506000615163615159670de0b6b3a7640000896147cb565b612a758c85615c8c565b905061508b818a615c8c565b600080821361519157604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361539d57506000919050565b680755bf798b4a1bf1e582126153c65760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006125648383670de0b6b3a7640000614e32565b600061552e82846147e0565b61554661553f85612a75898961254f565b889061254f565b613deb9190615c9f565b6000808061555e85856147b6565b9050600061556f82868c8a8d615522565b905061557f87612a758a8c615c9f565b98508881101561559757600080935093505050614f46565b60006155bc6155ae670de0b6b3a76400008a6147cb565b612a7585613a178e87615c8c565b90506155c881876147b6565b9050808b11156155df576155dc818c615c8c565b94505b60019350505050965096945050505050565b6060824710156156525760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610700565b600080866001600160a01b0316858760405161566e9190615e72565b60006040518083038185875af1925050503d80600081146156ab576040519150601f19603f3d011682016040523d82523d6000602084013e6156b0565b606091505b50915091506144b7878383876060831561572b578251600003615724576001600160a01b0385163b6157245760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610700565b50816150f4565b6150f483838151156157405781518083602001fd5b8060405162461bcd60e51b81526004016107009190615e8e565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156157995780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156157d25781810151838201526020016157ba565b50506000910152565b6000602082840312156157ed57600080fd5b815167ffffffffffffffff8082111561580557600080fd5b818401915084601f83011261581957600080fd5b81518181111561582b5761582b6157a1565b604051601f8201601f19908116603f01168101908382118183101715615853576158536157a1565b8160405282815287602084870101111561586c57600080fd5b6144b78360208301602088016157b7565b6001600160a01b038116811461589257600080fd5b50565b6000602082840312156158a757600080fd5b81356125648161587d565b801515811461589257600080fd5b6000602082840312156158d257600080fd5b8135612564816158b2565b600080600080600060a086880312156158f557600080fd5b85359450602086013593506040860135925060608601356159158161587d565b91506080860135615925816158b2565b809150509295509295909350565b60008083601f84011261594557600080fd5b50813567ffffffffffffffff81111561595d57600080fd5b6020830191508360208260051b85010111156121ad57600080fd5b6000806000806000806080878903121561599157600080fd5b863561599c8161587d565b955060208701356159ac8161587d565b9450604087013567ffffffffffffffff808211156159c957600080fd5b6159d58a838b01615933565b909650945060608901359150808211156159ee57600080fd5b506159fb89828a01615933565b979a9699509497509295939492505050565b60008060008060808587031215615a2357600080fd5b843593506020850135615a358161587d565b92506040850135615a458161587d565b9396929550929360600135925050565b60008060008060808587031215615a6b57600080fd5b84359350602085013592506040850135615a848161587d565b91506060850135615a94816158b2565b939692955090935050565b60008060008060808587031215615ab557600080fd5b843593506020850135615ac78161587d565b9250604085013591506060850135615a948161587d565b60008060408385031215615af157600080fd5b8235615afc8161587d565b91506020830135615b0c816158b2565b809150509250929050565b600080600080600080600060e0888a031215615b3257600080fd5b8735615b3d8161587d565b96506020880135615b4d8161587d565b95506040880135615b5d816158b2565b945060608801359350608088013560ff81168114615b7a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215615bac57600080fd5b833592506020840135615bbe8161587d565b929592945050506040919091013590565b600080600080600060a08688031215615be757600080fd5b853594506020860135615bf98161587d565b93506040860135615c098161587d565b92506060860135915060808601356159258161587d565b600060208284031215615c3257600080fd5b5035919050565b600060208284031215615c4b57600080fd5b5051919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b818103818111156123f7576123f7615c76565b808201808211156123f7576123f7615c76565b634e487b7160e01b600052603260045260246000fd5b80820281158282048414176123f7576123f7615c76565b6001600160801b03828116828216039080821115615cff57615cff615c76565b5092915050565b600060018201615d1857615d18615c76565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082615d4457615d44615d1f565b500690565b6001600160801b03818116838216019080821115615cff57615cff615c76565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156123f7576123f7615c76565b600f82810b9082900b0360016001607f1b0319811260016001607f1b03821317156123f7576123f7615c76565b8181036000831280158383131683831282161715615cff57615cff615c76565b6000600160ff1b8201615df857615df8615c76565b5060000390565b8082018281126000831280158216821582161715615e1f57615e1f615c76565b505092915050565b600060208284031215615e3957600080fd5b8151612564816158b2565b600082615e5357615e53615d1f565b600160ff1b821460001984141615615e6d57615e6d615c76565b500590565b60008251615e848184602087016157b7565b9190910192915050565b6020815260008251806020840152615ead8160408501602087016157b7565b601f01601f1916919091016040019291505056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba2646970667358221220269df47ce75a3507457bdbfcd8ec92de2692bcdb4bc79d3773dc8856c3a2dba364736f6c63430008130033",
    "sourceMap": "796:7316:13:-:0;;;454:1:97;429:26;;1940:1811:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;764:28:0;;;;;1944:20:41;;;;1974:34;;;;2254:10:39::2;::::0;;;;::::2;::::0;;::::2;::::0;;-1:-1:-1;;;2254:10:39::2;::::0;;::::2;::::0;2077:264;;2171:7:13;;2180:13;;2195:15;;2212:14;;2171:7;;2180:13;;2195:15;;2212:14;;2171:7;;2180:13;;2195:15;;2212:14;;2077:264:39::2;::::0;2105:121:::2;::::0;2244:21;;2283:13:::2;::::0;2322:4:::2;::::0;2077:264:::2;4261:25:165::0;;;4317:2;4302:18;;4295:34;;;;4360:2;4345:18;;4338:34;-1:-1:-1;;;;;4408:32:165;4403:2;4388:18;;4381:60;4248:3;4233:19;;4030:417;2077:264:39::2;;::::0;;-1:-1:-1;;2077:264:39;;::::2;::::0;;;;;;2054:297;;2077:264:::2;2054:297:::0;;::::2;::::0;;;;2035:316:::2;::::0;4466:17:7;;-1:-1:-1;;;;;4453:30:7;;;5012:28;;;5043:3;-1:-1:-1;5008:113:7;;-1:-1:-1;5008:113:7;;-1:-1:-1;;5008:113:7;5069:41;;-1:-1:-1;;;5069:41:7;;;;;;;;;;;5008:113;5154:28;;;;5130:52;;5221:32;;;;5193:60;;5418:26;;;;5448:1;5418:31;5414:108;;5472:39;;-1:-1:-1;;;5472:39:7;;;;;;;;;;;5414:108;5553:26;;;;;5531:48;;5633:26;5606:24;;;;:53;;:127;;;5702:7;:26;;;5675:7;:24;;;:53;;;;:::i;:::-;:58;;5606:127;5589:224;;;5765:37;;-1:-1:-1;;;5765:37:7;;;;;;;;;;;5589:224;5842:24;;;;5822:44;;5891:19;;;;5876:34;;5941:25;;;;5920:46;;5990:18;;;;5976:11;:32;;-1:-1:-1;;;;;;5976:32:7;-1:-1:-1;;;;;5976:32:7;;;;;;;6034:20;;;6018:36;;;6082:12;;;;:18;6103:4;-1:-1:-1;;6082:65:7;;;6143:4;6123:7;:12;;;:17;;;:24;6082:65;:111;;;;6189:4;6163:7;:12;;;:23;;;:30;6082:111;6065:202;;;6225:31;;-1:-1:-1;;;6225:31:7;;;;;;;;;;;6065:202;6288:12;;;;;:18;6276:30;;6327:12;;:17;;;6316:28;;6371:12;:23;;;6354:40;;6452:17;;;6439:30;;6288:18;3062:182:2::2;3086:7;:18;;;3082:1;:22;3062:182;;;3135:38;::::0;;;;::::2;::::0;;;::::2;3153:15;3135:38:::0;::::2;::::0;;-1:-1:-1;3135:38:2::2;::::0;::::2;::::0;;;3122:7:::2;:52:::0;;::::2;::::0;;::::2;::::0;;;;;;;;;;-1:-1:-1;;;;;3122:52:2::2;::::0;::::2;::::0;::::2;::::0;;;::::2;::::0;;;::::2;::::0;3216:3:::2;3062:182;;;-1:-1:-1::0;;;;;;;;2280:12:13;::::1;;::::0;-1:-1:-1;2825:16:13::1;::::0;-1:-1:-1;;2825:14:13::1;:16:::0;-1:-1:-1;;;2825:16:13:i:1;:::-;2796:7;:25;;;:45;2792:121;;2864:38;;-1:-1:-1::0;;;2864:38:13::1;;;;;;;;;;;2792:121;2956:5;-1:-1:-1::0;;;;;2956:11:13::1;;:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;2926:43:13::1;2934:7;:17;;;-1:-1:-1::0;;;;;2926:43:13::1;;2922:111;;2992:30;;-1:-1:-1::0;;;2992:30:13::1;;;;;;;;;;;2922:111;3121:17:::0;;3155:4:::1;::::0;3121:59:::1;::::0;-1:-1:-1;;;3121:59:13;;-1:-1:-1;;;;;5122:32:165;;;3121:59:13::1;::::0;::::1;5104:51:165::0;-1:-1:-1;;5171:18:165;;;5164:34;3121:25:13;::::1;::::0;::::1;::::0;5077:18:165;;3121:59:13::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3116:126;;3203:28;;-1:-1:-1::0;;;3203:28:13::1;;;;;;;;;;;3116:126;3402:9;3397:348;3421:8;:15;3417:1;:19;3397:348;;;3457:14;3474:8;3483:1;3474:11;;;;;;;;:::i;:::-;;;;;;;3457:28;;3547:4;;-1:-1:-1::0;;;;;3520:32:13::1;3528:6;-1:-1:-1::0;;;;;3520:32:13::1;;:90;;;;3599:10;;-1:-1:-1::0;;;;;3572:38:13::1;3580:6;-1:-1:-1::0;;;;;3572:38:13::1;;3520:90;3499:196;;;3650:30;;-1:-1:-1::0;;;3650:30:13::1;;;;;;;;;;;3499:196;-1:-1:-1::0;;;;;3708:19:13::1;;::::0;;;:11:::1;:19;::::0;;;;:26;;-1:-1:-1;;3708:26:13::1;3730:4;3708:26;::::0;;3438:3;::::1;::::0;::::1;:::i;:::-;;;;3397:348;;;;1940:1811:::0;;;;;;796:7316;;6602:134;6686:4;;:43;;-1:-1:-1;;;6686:43:13;;565:4:32;6686:43:13;;;6006:25:165;6660:7:13;;-1:-1:-1;;;;;6686:20:13;;;;5979:18:165;;6686:43:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6679:50;;6602:134;:::o;14:127:165:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;213:2;207:9;255:6;243:19;;-1:-1:-1;;;;;277:34:165;;313:22;;;274:62;271:88;;;339:18;;:::i;:::-;375:2;368:22;146:250;:::o;401:139::-;-1:-1:-1;;;;;484:31:165;;474:42;;464:70;;530:1;527;520:12;464:70;401:139;:::o;545:154::-;632:13;;654:39;632:13;654:39;:::i;:::-;545:154;;;:::o;704:525::-;766:5;814:4;802:9;797:3;793:19;789:30;786:50;;;832:1;829;822:12;786:50;865:2;859:9;907:4;895:17;;-1:-1:-1;;;;;927:34:165;;963:22;;;924:62;921:88;;;989:18;;:::i;:::-;1029:10;1025:2;1018:22;;1058:6;1049:15;;1094:9;1088:16;1080:6;1073:32;1159:2;1148:9;1144:18;1138:25;1133:2;1125:6;1121:15;1114:50;1218:2;1207:9;1203:18;1197:25;1192:2;1184:6;1180:15;1173:50;;704:525;;;;:::o;1234:982::-;1299:5;1352:3;1345:4;1337:6;1333:17;1329:27;1319:55;;1370:1;1367;1360:12;1319:55;1393:13;;1425:4;-1:-1:-1;;;;;1478:10:165;;;1475:36;;;1491:18;;:::i;:::-;1537:2;1534:1;1530:10;1569:2;1563:9;1632:2;1628:7;1623:2;1619;1615:11;1611:25;1603:6;1599:38;1687:6;1675:10;1672:22;1667:2;1655:10;1652:18;1649:46;1646:72;;;1698:18;;:::i;:::-;1734:2;1727:22;1784:18;;;1860:15;;;1856:24;;;1818:15;;;;-1:-1:-1;1892:15:165;;;1889:35;;;1920:1;1917;1910:12;1889:35;1956:2;1948:6;1944:15;1933:26;;1968:218;1984:6;1979:3;1976:15;1968:218;;;2057:3;2051:10;2074:39;2107:5;2074:39;:::i;:::-;2126:18;;2164:12;;;;2001;;;;1968:218;;;2204:6;1234:982;-1:-1:-1;;;;;;;1234:982:165:o;2221:1804::-;2406:6;2414;2422;2430;2438;2446;2490:9;2481:7;2477:23;2520:3;2516:2;2512:12;2509:32;;;2537:1;2534;2527:12;2509:32;2560:6;2586:2;2582;2578:11;2575:31;;;2602:1;2599;2592:12;2575:31;2628:17;;:::i;:::-;2615:30;;2668:48;2706:9;2668:48;:::i;:::-;2661:5;2654:63;2770:2;2759:9;2755:18;2749:25;2744:2;2737:5;2733:14;2726:49;2828:2;2817:9;2813:18;2807:25;2802:2;2795:5;2791:14;2784:49;2886:2;2875:9;2871:18;2865:25;2860:2;2853:5;2849:14;2842:49;2945:3;2934:9;2930:19;2924:26;2918:3;2911:5;2907:15;2900:51;3005:3;2994:9;2990:19;2984:26;2978:3;2971:5;2967:15;2960:51;3065:3;3054:9;3050:19;3044:26;3038:3;3031:5;3027:15;3020:51;3104:58;3157:3;3146:9;3142:19;3104:58;:::i;:::-;3098:3;3091:5;3087:15;3080:83;3182:3;3217:57;3270:2;3259:9;3255:18;3217:57;:::i;:::-;3201:14;;;3194:81;3294:3;3329:62;3383:7;3363:18;;;3329:62;:::i;:::-;3324:2;3317:5;3313:14;3306:86;;3449:6;3438:9;3434:22;3428:29;3419:6;3412:5;3408:18;3401:57;3515:3;3504:9;3500:19;3494:26;3485:6;3478:5;3474:18;3467:54;3540:5;3530:15;;3564:57;3617:2;3606:9;3602:18;3564:57;:::i;:::-;3554:67;;;;3661:3;3650:9;3646:19;3640:26;3630:36;;3685:58;3738:3;3727:9;3723:19;3685:58;:::i;:::-;3675:68;;3762:58;3815:3;3804:9;3800:19;3762:58;:::i;:::-;3864:3;3849:19;;3843:26;3752:68;;-1:-1:-1;;;;;;3881:30:165;;3878:50;;;3924:1;3921;3914:12;3878:50;3947:72;4011:7;4002:6;3991:9;3987:22;3947:72;:::i;:::-;3937:82;;;2221:1804;;;;;;;;:::o;4452:209::-;4484:1;4510;4500:132;;4554:10;4549:3;4545:20;4542:1;4535:31;4589:4;4586:1;4579:15;4617:4;4614:1;4607:15;4500:132;-1:-1:-1;4646:9:165;;4452:209::o;4666:259::-;4736:6;4789:2;4777:9;4768:7;4764:23;4760:32;4757:52;;;4805:1;4802;4795:12;4757:52;4837:9;4831:16;4856:39;4889:5;4856:39;:::i;:::-;4914:5;4666:259;-1:-1:-1;;;4666:259:165:o;5209:277::-;5276:6;5329:2;5317:9;5308:7;5304:23;5300:32;5297:52;;;5345:1;5342;5335:12;5297:52;5377:9;5371:16;5430:5;5423:13;5416:21;5409:5;5406:32;5396:60;;5452:1;5449;5442:12;5491:127;5552:10;5547:3;5543:20;5540:1;5533:31;5583:4;5580:1;5573:15;5607:4;5604:1;5597:15;5623:232;5662:3;5683:17;;;5680:140;;5742:10;5737:3;5733:20;5730:1;5723:31;5777:4;5774:1;5767:15;5805:4;5802:1;5795:15;5680:140;-1:-1:-1;5847:1:165;5836:13;;5623:232::o;6042:184::-;6112:6;6165:2;6153:9;6144:7;6140:23;6136:32;6133:52;;;6181:1;6178;6171:12;6133:52;-1:-1:-1;6204:16:165;;6042:184;-1:-1:-1;6042:184:165:o;:::-;796:7316:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436106101405760003560e01c80636f8c3a5b116100b6578063ab033ea91161006f578063ab033ea91461049b578063c23632a7146104bb578063c326a903146104db578063e44808bc146104ee578063ed64bab21461050e578063fa3fcea71461052e57610140565b80636f8c3a5b146103e85780637180c8ca146104085780639032c726146104285780639cd241af14610448578063a179403b14610468578063a22cb4651461047b57610140565b80632002b333116101085780632002b333146102ff5780632787d5951461032057806330adf81f146103405780633644e515146103745780634536ee2f146103a85780634ed2d6ac146103c857610140565b806301681a621461025057806302329a291461027257806306dae82a1461029257806317fad7fc146102bf5780631c0f12b6146102df575b34801561014c57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161018f92919061575a565b600060405180830381855af49150503d80600081146101ca576040519150601f19603f3d011682016040523d82523d6000602084013e6101cf565b606091505b509150915081156101f357604051638bb0a34b60e01b815260040160405180910390fd5b60006101fe8261576a565b90506001600160e01b03198116636e64089360e11b1461022057815160208301fd5b815160031981016004840190815292610241918101602001906024016157db565b80519650602001945050505050f35b34801561025c57600080fd5b5061027061026b366004615895565b61054e565b005b34801561027e57600080fd5b5061027061028d3660046158c0565b610692565b6102a56102a03660046158dd565b6106db565b604080519283526020830191909152015b60405180910390f35b3480156102cb57600080fd5b506102706102da366004615978565b610960565b3480156102eb57600080fd5b506102706102fa366004615a0d565b610a14565b61031261030d366004615a55565b610a27565b6040519081526020016102b6565b34801561032c57600080fd5b5061031261033b3660046158c0565b610c7c565b34801561034c57600080fd5b506103127f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561038057600080fd5b506103127f000000000000000000000000000000000000000000000000000000000000000081565b3480156103b457600080fd5b506102a56103c3366004615a55565b610d60565b3480156103d457600080fd5b506102706103e3366004615a9f565b610f30565b3480156103f457600080fd5b506103126104033660046158dd565b610f7e565b34801561041457600080fd5b50610270610423366004615ade565b6111ec565b34801561043457600080fd5b50610270610443366004615b17565b611264565b34801561045457600080fd5b50610270610463366004615b97565b6114b3565b6102a56104763660046158dd565b6114c4565b34801561048757600080fd5b50610270610496366004615ade565b6116bd565b3480156104a757600080fd5b506102706104b6366004615895565b611729565b3480156104c757600080fd5b506102a56104d6366004615a55565b61179d565b6103126104e93660046158dd565b611954565b3480156104fa57600080fd5b50610270610509366004615bcf565b611c16565b34801561051a57600080fd5b50610270610529366004615c20565b611c66565b34801561053a57600080fd5b506103126105493660046158dd565b611d6c565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105975750336000908152600f602052604090205460ff16155b156105b4576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03811660009081526014602052604090205460ff166105ed5760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610634573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106589190615c39565b905061068e6001600160a01b0383167f000000000000000000000000000000000000000000000000000000000000000083611f77565b5050565b336000908152600f602052604090205460ff166106c1576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146107095760405162461bcd60e51b815260040161070090615c52565b60405180910390fd5b6002600055600c54610100900460ff1615610737576040516313d0ff5960e31b815260040160405180910390fd5b61073f611fda565b7f00000000000000000000000000000000000000000000000000000000000000008710156107805760405163211ddda360e11b815260040160405180910390fd5b60008061078d8986611ffb565b91509150868110156107b2576040516342af972b60e01b815260040160405180910390fd5b60006107bc6121b4565b90506107c881836121ef565b5060008060006107d886866123fd565b600854919a50929550909350909150610802908390600160801b90046001600160801b0316615c8c565b61083f8461080e61252e565b6108189190615c9f565b7f00000000000000000000000000000000000000000000000000000000000000009061254f565b111561085e5760405163512095c760e01b815260040160405180910390fd5b868c111561087f5760405163c972651760e01b815260040160405180910390fd5b80601060008282546108919190615c9f565b909155506108c190507f000000000000000000000000000000000000000000000000000000000000000085615c9f565b97506108d183888488888d61256b565b60006108de60018a612765565b90506108eb818c8a61279a565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d60405161093f939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b038616158061097d57506001600160a01b038516155b1561099b5760405163f0dd15fd60e01b815260040160405180910390fd5b8281146109bb5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610a0b57610a038585838181106109db576109db615cb2565b9050602002013588888686868181106109f6576109f6615cb2565b9050602002013533612843565b6001016109be565b50505050505050565b610a218484848433612843565b50505050565b60008054600114610a4a5760405162461bcd60e51b815260040161070090615c52565b6002600055610a57611fda565b600c5460ff1615610a7b57604051637983c05160e01b815260040160405180910390fd5b600080610a888785611ffb565b9092509050610ab87f00000000000000000000000000000000000000000000000000000000000000006002615cc8565b821015610ad857604051632afb507160e21b815260040160405180910390fd5b610b037f00000000000000000000000000000000000000000000000000000000000000006002615cc8565b610b0d9083615c8c565b9250610b20610b1a6121b4565b826121ef565b50600c805460ff19166001179055610b3782612a04565b600880546001600160801b0319166001600160801b0392909216919091179055610bcc610bc7837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612a2e565b612a04565b600880546001600160801b03928316600160801b029216919091179055610c156000807f000000000000000000000000000000000000000000000000000000000000000061279a565b610c216000868561279a565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610c9f5760405162461bcd60e51b815260040161070090615c52565b60026000908155338152600f602052604090205460ff16158015610cec5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610d0357506011546001600160a01b03163314155b15610d20576040516282b42960e81b815260040160405180910390fd5b601080546000909155610d54817f000000000000000000000000000000000000000000000000000000000000000085612a98565b60016000559392505050565b600080600054600114610d855760405162461bcd60e51b815260040161070090615c52565b60026000908155610d94612c00565b9050610da1610b1a6121b4565b50610dab81612c93565b600d548792506001600160801b031680831115610dcf57806001600160801b031692505b82600003610de557600080935093505050610f20565b610df4600360f81b3385612d6d565b600d546001600160801b03600160801b909104811690600090610e1c90869084908616612e0d565b9050610e2785612a04565b610e319084615cdf565b600d80546001600160801b0319166001600160801b0392909216919091179055610e5a81612a04565b600d8054601090610e7c908490600160801b90046001600160801b0316615cdf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610eab818989612a98565b955085610eb88a8761254f565b1115610ed75760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b83610f3a81612e2b565b6001600160a01b0316336001600160a01b031614610f6b57604051632aab8bd360e01b815260040160405180910390fd5b610f7785858585612ee8565b5050505050565b60008054600114610fa15760405162461bcd60e51b815260040161070090615c52565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015610fe75760405163211ddda360e11b815260040160405180910390fd5b6000610ff1612c00565b9050610ffd87826121ef565b5061101361100c600289612765565b3388612d6d565b6000806000806000806110278c888f612f55565b600854959b50939950919750955093509150611054908790600160801b90046001600160801b0316615c8c565b6110608461080e61252e565b111561107f5760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561114157836010600082825461109c9190615c9f565b909155506110af9050838a898886613129565b60006110db7f000000000000000000000000000000000000000000000000000000000000000084615c8c565b6000818152600e6020526040812054919250600160801b909104600f0b9061110e9086908a908e908d90899089906132a3565b6000828152600e602052604090205461113590600f83810b91600160801b9004900b61344b565b61113e8c612c93565b50505b600061114e898f8f612a98565b90508e8110156111715760405163c972651760e01b815260040160405180910390fd5b61117c600284612765565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516111ca939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b03163314611216576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b834211156112855760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166112ac5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156113d8573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461141657604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061143c90615d06565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b6114bf83838333612ee8565b505050565b6000806000546001146114e95760405162461bcd60e51b815260040161070090615c52565b6002600055600c54610100900460ff1615611517576040516313d0ff5960e31b815260040160405180910390fd5b61151f611fda565b7f00000000000000000000000000000000000000000000000000000000000000008710156115605760405163211ddda360e11b815260040160405180910390fd5b600061156a612c00565b90508581101561158d576040516342af972b60e01b815260040160405180910390fd5b60006115976121b4565b905060006115a582846121ef565b90506115d17f000000000000000000000000000000000000000000000000000000000000000083615c9f565b94506000806115e18c8685613572565b60108054939950919450925082916000906115fd908490615c9f565b909155505050848a10156116245760405163c972651760e01b815260040160405180910390fd5b61162e8588611ffb565b505061163c8b8286896136a6565b6000611649600288612765565b9050611656818a8e61279a565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611753576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000806000546001146117c25760405162461bcd60e51b815260040161070090615c52565b60026000557f00000000000000000000000000000000000000000000000000000000000000008610156118085760405163211ddda360e11b815260040160405180910390fd5b6000611812612c00565b905061181f610b1a6121b4565b5061182981612c93565b6002602052600080516020615ec283398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611884916001600160801b0390911690615c8c565b905060006118928284615c9f565b90506118a06000338c612d6d565b60006118af8b868487876138e4565b965090506118c2600360f81b8a8861279a565b6118cd818a8a612a98565b9650868a11156118f05760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b600080546001146119775760405162461bcd60e51b815260040161070090615c52565b6002600055600c54610100900460ff16156119a5576040516313d0ff5960e31b815260040160405180910390fd5b6119ad611fda565b7f00000000000000000000000000000000000000000000000000000000000000008610156119ee5760405163211ddda360e11b815260040160405180910390fd5b6000611a766119fb61252e565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006139e2565b905085811080611a8557508481115b15611aa357604051633b61151160e11b815260040160405180910390fd5b600080611ab08986611ffb565b91509150611abf610b1a6121b4565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611b0b916001600160801b0390911690615c8c565b60008080526002602052600080516020615ec28339815191525491925090611b34908390615c9f565b9050600080611b4285613a1d565b90506000611b4f82613b83565b9050611b5a87613df5565b6008546001600160801b038082168452600954600f0b6020850152600160801b909104166040830152611b8c82613b83565b9250611ba48482611b9d8187615c8c565b9190612e0d565b98505050611bb460008a8961279a565b611bbd84612c93565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b84611c2081612e2b565b6001600160a01b0316336001600160a01b031614611c5157604051632aab8bd360e01b815260040160405180910390fd5b611c5e8686868686612843565b505050505050565b6000818152600e60205260409020546001600160801b031615611c865750565b6000611c906121b4565b9050611cbc7f000000000000000000000000000000000000000000000000000000000000000083615d35565b151580611cc857508181105b15611ce65760405163ecd29e8160e01b815260040160405180910390fd5b808203611cfe576114bf81611cf9612c00565b6121ef565b815b6000818152600e60205260409020546001600160801b0316828203611d2a57611d27612c00565b90505b8015611d3a57610f7784826121ef565b50611d657f000000000000000000000000000000000000000000000000000000000000000082615c9f565b9050611d00565b60008054600114611d8f5760405162461bcd60e51b815260040161070090615c52565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015611dd55760405163211ddda360e11b815260040160405180910390fd5b6000611ddf612c00565b9050611deb87826121ef565b50611dfa61100c600189612765565b600080600080600080611e0e8c888f613f77565b95509550955095509550955060008d90508d421015611ed7578160106000828254611e399190615c9f565b90915550611e4c90508d888786856140ee565b6000611e787f000000000000000000000000000000000000000000000000000000000000000083615c8c565b6000818152600e6020526040902054909150600160801b9004600f0b611ea48f878b8a878f60016132a3565b6000828152600e6020526040902054611ecb90600f83810b91600160801b9004900b61344b565b611ed48a612c93565b50505b6000611ee4878d8d612a98565b9050808d1115611f075760405163c972651760e01b815260040160405180910390fd5b8d611f13600184612765565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b6040516001600160a01b0383166024820152604481018290526114bf90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526142bb565b3415611ff957604051631574f9f360e01b815260040160405180910390fd5b565b60008082156120db576120396001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087614390565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156120a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ca9190615c39565b91506120d4612c00565b90506121ad565b6040516363737ac960e11b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015612143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121679190615c39565b905061219e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084614390565b8092506121a9612c00565b9150505b9250929050565b60006121e07f000000000000000000000000000000000000000000000000000000000000000042615d35565b6121ea9042615c8c565b905090565b6000828152600e6020526040812080546001600160801b031615158061221457504284115b1561222a57546001600160801b031690506123f7565b61223383612a04565b81546001600160801b0319166001600160801b03919091161781556000600e8161227d7f000000000000000000000000000000000000000000000000000000000000000088615c8c565b815260208101919091526040016000908120546001600160801b031691506002816122a88289612765565b8152602001908152602001600020549050600080821115612304576000806122d384898760006143c8565b9150915080601060008282546122e99190615c9f565b909155506122fd905084600084808d613129565b6001925050505b60006002600061231560018b612765565b815260200190815260200160002054905060008111156123705760008061233f838a8860016143c8565b9150915080601060008282546123559190615c9f565b90915550612369905083600084808e6140ee565b6001935050505b81156123ee5760006123a27f00000000000000000000000000000000000000000000000000000000000000008a615c8c565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926123e2928492919004900b61344b565b6123eb89612c93565b50505b86955050505050505b92915050565b60008060008061246a61240e61252e565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000614496565b925060006124d361247961252e565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006144c2565b90506124de816144d3565b6000806124ec89848a61462d565b90925090506124fb8287615c8c565b94506125078186615c9f565b955061251481848a612e0d565b9350612520848a615c8c565b965050505092959194509250565b6008546009546000916121ea916001600160801b0390911690600f0b6146ad565b60006125648383670de0b6b3a7640000612e0d565b9392505050565b600a546001600160801b03166125a6610bc78261259085670de0b6b3a7640000615cc8565b600b546001600160801b031691908a60016146ca565b600b80546001600160801b0319166001600160801b03929092169190911790556125cf87612a04565b600880546000906125ea9084906001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061261785612a04565b60088054601090612639908490600160801b90046001600160801b0316615cdf565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061266686612a04565b6126709082615d49565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b906126cc6126b78b8961254f565b6126c28b6002615cc8565b610bc79190615c8c565b8354909150819084906010906126ed908490600160801b9004600f0b615d69565b82546001600160801b039182166101009390930a928302919092021990911617905550825461272a90600f84810b91600160801b9004900b61344b565b61273387614744565b612750576040516318846de960e01b815260040160405180910390fd5b61275987612c93565b50505050505050505050565b60006001600160f81b0382111561278f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906127cc908490615c9f565b9091555050600083815260026020526040812080548392906127ef908490615c9f565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b038416158061286057506001600160a01b038316155b1561287e5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612942576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff166129425760008581526004602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146129405760008681526004602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061293a908490615c8c565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612974908490615c8c565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906129ab908490615c9f565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b8210612a2a57604051630f0af95160e11b815260040160405180910390fd5b5090565b600080612a3f846301e133806147b6565b9050612a8b612a7b612a59670de0b6b3a7640000866147cb565b612a63888561254f565b612a7590670de0b6b3a7640000615c9f565b906147e0565b612a85888a61254f565b9061254f565b9150505b95945050505050565b60008115612b4057604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301527f0000000000000000000000000000000000000000000000000000000000000000169063ba087652906064016020604051808303816000875af1158015612b15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b399190615c39565b9050612564565b612b746001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611f77565b6040516303d1689d60e11b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015612bdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a8f9190615c39565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015612c6f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121ea9190615c39565b6002602052600080516020615ec283398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612cee916001600160801b0390911690615c8c565b90506000612cfc8284615c9f565b90506000612d11612d0c86613a1d565b613b83565b90506000612d20858385612e0d565b9050600080612d2e88614837565b905082811115612d4557612d428382615c8c565b91505b6000821180612d52575083155b15612d6357612d63828587896148e3565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612d9f908490615c8c565b909155505060008381526002602052604081208054839290612dc2908490615c8c565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612836565b6000826000190484118302158202612e2457600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000806000806000806000612f69886149cc565b9050612fd3612f7661252e565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000614a1d565b909850955093506000612fe761247961252e565b9050612ff2816144d3565b8a8a600080808061300586898988614a8d565b935093509350935080826130199190615c9f565b98506130258285615c8c565b61302f908c615c9f565b9a5061303b8385615c9f565b613045908d615c9f565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a6130819190615c8c565b815260208101919091526040016000908120546001600160801b031691504289116130c3576000898152600e60205260409020546001600160801b03166130c5565b895b90506130f58b8784848e7f0000000000000000000000000000000000000000000000000000000000000000614b8c565b96506131018387615c8c565b95506131138787878686866000614bde565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613172610bc78261315585670de0b6b3a7640000615cc8565b600b54600160801b90046001600160801b031691908a60006146ca565b600b80546001600160801b03928316600160801b02921691909117905561319886612a04565b6131a29082615cdf565b600a80546001600160801b03928316600160801b029216919091179055506131c983612a04565b600880546000906131e49084906001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061321182614c59565b60098054600090613226908490600f0b615d69565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061325684612a04565b60088054601090613278908490600160801b90046001600160801b0316615cdf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b60006132cf7f000000000000000000000000000000000000000000000000000000000000000085615c8c565b90506000600260006132e2600188612765565b8152602001908152602001600020549050600060026000613304600289612765565b8152602001908152602001600020549050816000148015613323575080155b15613348576000838152600e6020526040902080546001600160801b03169055612759565b600061338c8b6133588c8961254f565b613363906002615cc8565b8b61336e8c8b61254f565b6133789190615c9f565b6133829190615c8c565b610bc79190615c9f565b905084156133eb576000848152600e6020526040902080548291906010906133bf908490600160801b9004600f0b615d96565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061343e565b6000848152600e602052604090208054829190601090613416908490600160801b9004600f0b615d69565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b808213801561345b575060008212155b156134ee57600061346c8282614c97565b6134769084615dc3565b6009549091506134a39061349e908390600160801b90046001600160801b0316600f0b614cad565b614c59565b600980546010906134c5908490600160801b90046001600160801b0316615cdf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561068e57600082126135645761350782614c59565b61351082614c59565b61351a9190615d96565b6009805460109061353c908490600160801b90046001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b61351a61349e826000614c97565b60008060006135de61358261252e565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000614cbc565b9150856135eb838761254f565b111561360a5760405163512095c760e01b815260040160405180910390fd5b600061361761247961252e565b9050613622816144d3565b600061363888670de0b6b3a7640000848a614cdd565b945090915061364990508382615c8c565b6136539085615c8c565b935061369987612a858a6136678789615c8c565b8a6136728d82614dde565b8d7f0000000000000000000000000000000000000000000000000000000000000000614b8c565b9450505093509350939050565b600a546136f090610bc790600160801b90046001600160801b03166136d384670de0b6b3a7640000615cc8565b600b54600160801b90046001600160801b031691908860016146ca565b600b80546001600160801b03928316600160801b029216919091179055600061371884612a04565b60085461372e91906001600160801b0316615cdf565b600880546001600160801b0319166001600160801b038316179055905061375485612a04565b60088054601090613776908490600160801b90046001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506137a385612a04565b600a80546010906137c5908490600160801b90046001600160801b0316615d49565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506138145760405163585fe6df60e11b815260040160405180910390fd5b600061381e6121b4565b6000818152600e6020526040902054909150600160801b9004600f0b61384387612a04565b6000838152600e60205260409020805460109061386b908490600160801b9004600f0b615d96565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e60205260409020546138b590600f83810b91600160801b9004900b61344b565b6138be85614744565b6138db576040516318846de960e01b815260040160405180910390fd5b610a0b85612c93565b60008060006138f287613a1d565b905060006138ff82613b83565b905061391161390c612c00565b614837565b935061391e848a88612e0d565b935061393161392c85615de3565b613df5565b6008546001600160801b038082168452600954600f0b6020850152600160801b909104166040830152600061396583613b83565b90506000613974898385612e0d565b90506139808b8a615dc3565b61398a9082615dc3565b905060008112156139d35760006139ab6139a383615de3565b85908c612e0d565b90506139b78188615c8c565b96506139c281613df5565b6139cd81898d614ded565b60009150505b93505050509550959350505050565b6000806139f1878787866144c2565b9050612a8b613a0582866301e13380614e32565b613a1783670de0b6b3a7640000615c8c565b906147b6565b613a7a60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191613b499116614e58565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192613b7b92900416614e58565b905292915050565b600080613ba383610140015184610120015161254f90919063ffffffff16565b61010084015160e0850151613bb79161254f565b613bc19190615dc3565b90506000613bd7846000015185602001516146ad565b90506000821315613c79576000613c198286604001518760a001518860c00151670de0b6b3a7640000613c0a9190615c8c565b89606001518a60800151614ece565b9150613c2790508184614f51565b90508015613c7357613c60828660400151838860c00151670de0b6b3a7640000613c519190615c8c565b89606001518a60800151614f60565b85518690613c6f908390615c8c565b9052505b50613d37565b6000821215613d3757613c8b82615de3565b91506000613cbf8286604001518760c00151670de0b6b3a7640000613cb09190615c8c565b88606001518960800151614f94565b9150613ccd90508184614f51565b90508015613d1957613d06828660400151838860c00151670de0b6b3a7640000613cf79190615c8c565b89606001518a6080015161501e565b85518690613d15908390615c9f565b9052505b613d238184615c8c565b85518690613d32908390615c9f565b905250505b6000613d66856101000151670de0b6b3a7640000613d559190615c8c565b606087015160e08801519190612e0d565b613d94866101400151670de0b6b3a7640000613d829190615c8c565b60608801516101208901519190612e0d565b613d9e9190615dc3565b90506000818660000151613db29190615dff565b90508560a00151811215613dd95760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151613deb9082615c8c565b9695505050505050565b80600003613e005750565b6008546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000811015613e4d5760405163585fe6df60e11b815260040160405180910390fd5b6000613e598383615dff565b90507f0000000000000000000000000000000000000000000000000000000000000000811215613e9c5760405163585fe6df60e11b815260040160405180910390fd5b613ea581612a04565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b818112613ee757613ee0838286612e0d565b9150613f07565b613efb613ef382615de3565b849086612e0d565b613f0490615de3565b91505b613f1082614c59565b600980546001600160801b0319166001600160801b03928316179055600854613f5391610bc791600160801b900416613f4987856146ad565b611b9d87876146ad565b600880546001600160801b03928316600160801b0292169190911790555050505050565b6000806000806000806000613f8b886149cc565b9050613ff5613f9861252e565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615099565b90985096509350600061400961247961252e565b9050614014816144d3565b6000806140238d85858f614cdd565b965090925090506140348288615c8c565b96506140408183615c9f565b61404a908a615c8c565b9850614056858a615c9f565b9750505050506140da85858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e6140939190615c8c565b81526020810191909152604001600020546001600160801b0316428d116140d15760008d8152600e60205260409020546001600160801b03166140d3565b8d5b6001614bde565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614129610bc78261411385670de0b6b3a7640000615cc8565b600b546001600160801b031691908a60006146ca565b600b80546001600160801b0319166001600160801b039290921691909117905561415286612a04565b61415c9082615cdf565b600a80546001600160801b0319166001600160801b03929092169190911790555061418683612a04565b600880546000906141a19084906001600160801b0316615cdf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506141ce82614c59565b600980546000906141e3908490600f0b615d96565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061421384612a04565b60088054601090614235908490600160801b90046001600160801b0316615d49565b82546101009290920a6001600160801b038181021990931691831602179091556008547f000000000000000000000000000000000000000000000000000000000000000091161090508061429d5750600954600854600f9190910b6001600160801b03909116125b15610f775760405163585fe6df60e11b815260040160405180910390fd5b6000614310826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166150e59092919063ffffffff16565b90508051600014806143315750808060200190518101906143319190615e27565b6114bf5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610700565b6040516001600160a01b0380851660248301528316604482015260648101829052610a219085906323b872dd60e01b90608401611fa3565b6000806143d586866147b6565b91506000614403837f000000000000000000000000000000000000000000000000000000000000000061254f565b905061442f817f000000000000000000000000000000000000000000000000000000000000000061254f565b91508315614452576144418282615c8c565b61444b9084615c8c565b9250614469565b61445c8282615c8c565b6144669084615c9f565b92505b8486101561448c5761447c838787612e0d565b9250614489828787612e0d565b91505b5094509492505050565b60006144b78787876144b088670de0b6b3a7640000615c8c565b87876150fc565b979650505050505050565b6000612a8f82612a75858888612e0d565b6013546001600160801b03600160801b820481169116426145147f000000000000000000000000000000000000000000000000000000000000000084615c9f565b111561451f57505050565b60006012828154811061453457614534615cb2565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b0316906145688342615c8c565b601254909150878202830190600090614582886001615c9f565b61458c9190615d35565b905060405180604001604052804263ffffffff168152602001836001600160e01b0316815250601282815481106145c5576145c5615cb2565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b60008061467785612a8585817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061466d818c6147b6565b612a859190615c8c565b91506146a3827f000000000000000000000000000000000000000000000000000000000000000061254f565b9050935093915050565b6000806146ba8385615dc3565b9050600081121561256457600080fd5b6000811561470a576147036146df8487615c9f565b6146e9858761254f565b6146f3888a61254f565b6146fd9190615c9f565b906147cb565b9050612a8f565b82850361471957506000612a8f565b613deb6147268487615c8c565b614730858761254f565b61473a888a61254f565b6146fd9190615c8c565b60006147707f00000000000000000000000000000000000000000000000000000000000000008361254f565b6009546008546147ae916000916001600160801b03600160801b9092048216600f0b9161479e91168761254f565b6147a89190615dc3565b90614c97565b121592915050565b600061256483670de0b6b3a764000084612e0d565b600061256483670de0b6b3a764000084614e32565b6000816000036147f95750670de0b6b3a76400006123f7565b82600003614809575060006123f7565b8160006148158561516f565b905081810261482c670de0b6b3a764000082615e44565b9050613deb81615382565b600954600090819061485990600160801b90046001600160801b0316846147b6565b90506148857f000000000000000000000000000000000000000000000000000000000000000082615c9f565b6008546001600160801b031611156148dd576008547f0000000000000000000000000000000000000000000000000000000000000000906148d09083906001600160801b0316615c8c565b6148da9190615c8c565b91505b50919050565b60008084116148f257826148fd565b6148fd838686612e0d565b90508060000361490d5750610a21565b80858382111561492857839150614925878385612e0d565b90505b61493182612a04565b600d805460009061494c9084906001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061497981612a04565b600d805460109061499b908490600160801b90046001600160801b0316615d49565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610a0b8161392c90615de3565b6000806149d76121b4565b90508083116149e75760006149f1565b6149f18184615c8c565b91506148da827f00000000000000000000000000000000000000000000000000000000000000006147b6565b60008080614a3e614a3688670de0b6b3a7640000615c8c565b899087612e0d565b9050614a4a888861254f565b91508115614a8057614a718a8a84614a6a8a670de0b6b3a7640000615c8c565b898961501e565b9250614a7d8382615c9f565b90505b9750975097945050505050565b6000808080614aa486670de0b6b3a7640000615c8c565b9350614ad98786611b9d8b612a85897f000000000000000000000000000000000000000000000000000000000000000061254f565b9350614b05847f000000000000000000000000000000000000000000000000000000000000000061254f565b91506000614b26614b1e89670de0b6b3a7640000615c8c565b8a9088612e0d565b9050614b52817f000000000000000000000000000000000000000000000000000000000000000061254f565b9350614b7e847f000000000000000000000000000000000000000000000000000000000000000061254f565b915050945094509450949050565b600080614ba585614b9d888761550d565b8a9190612e0d565b9050614bb2888486612e0d565b614bbc9082615c9f565b905086811115614bd357614bd08782615c8c565b91505b509695505050505050565b60008060008060008088881015614c3b578615614c0357614c008d898b612e0d565b9c505b614c0e8c898b612e0d565b9b50614c1a8b8d615dc3565b9050614c278b898b612e0d565b9a50614c348a898b612e0d565b9950614c48565b614c458b8d615dc3565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b03198212801590614c7a575060016001607f1b038213155b612a2a5760405163a5353be560e01b815260040160405180910390fd5b6000818313614ca65781612564565b5090919050565b60008183136148dd5782612564565b60006144b7878787614cd688670de0b6b3a7640000615c8c565b8787614f60565b6000808080614cf486670de0b6b3a7640000615c8c565b9050614d298786611b9d8b612a85867f000000000000000000000000000000000000000000000000000000000000000061254f565b9350614d55847f000000000000000000000000000000000000000000000000000000000000000061254f565b91506000614d6e614b1e89670de0b6b3a7640000615c8c565b9050614d9a817f000000000000000000000000000000000000000000000000000000000000000061254f565b9350614dc6847f000000000000000000000000000000000000000000000000000000000000000061254f565b614dd09084615c9f565b925050509450945094915050565b6000818311614ca65781612564565b6000614dfb612d0c83613a1d565b60008080526002602052600080516020615ec28339815191525491925090614e24908590615c9f565b9050610f77858383876148e3565b6000826000190484118302158202614e4957600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000614e6c6121b4565b614e769190615cc8565b9050808311614e86576000614e90565b614e908184615c8c565b91506148da614ec7670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000615cc8565b83906147b6565b60008080614edc85856147b6565b90506000614eed82868c8a8d615522565b90506000614f28614f06670de0b6b3a76400008a6147b6565b614f1e614f178b612a758b8f61254f565b869061254f565b612a759085615c8c565b9050614f34898c615c8c565b614f3e8b83615c8c565b945094505050505b965096945050505050565b60008183116148dd5782612564565b600080614f71888888888888615550565b909250905080614bd357604051637ac17d2560e01b815260040160405180910390fd5b60008080614fa285856147b6565b90506000614fb382868b8a8c615522565b90506000614fe8614fcc670de0b6b3a76400008a6147b6565b612a75614fe1670de0b6b3a764000087615c9f565b85906147b6565b90506000614ff682886147b6565b90506150028b82615c8c565b61500c838c615c8c565b95509550505050509550959350505050565b60008061502b84846147b6565b9050600061503c82858b898c615522565b905061504c86612a75898b615c8c565b97506000615073615065670de0b6b3a7640000896147cb565b612a7585613a178d87615c8c565b905061507f81866147b6565b905061508b8a82615c8c565b9a9950505050505050505050565b600080806150b2614a3688670de0b6b3a7640000615c8c565b90508615614a80576150c4888861254f565b9150614a718a8a846150de8a670de0b6b3a7640000615c8c565b8989614f60565b60606150f484846000856155f1565b949350505050565b60008061510984846147b6565b9050600061511a82858b898c615522565b905061513486612a7561512d8a8d615c9f565b879061254f565b9850615140828a61254f565b98506000615163615159670de0b6b3a7640000896147cb565b612a758c85615c8c565b905061508b818a615c8c565b600080821361519157604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361539d57506000919050565b680755bf798b4a1bf1e582126153c65760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006125648383670de0b6b3a7640000614e32565b600061552e82846147e0565b61554661553f85612a75898961254f565b889061254f565b613deb9190615c9f565b6000808061555e85856147b6565b9050600061556f82868c8a8d615522565b905061557f87612a758a8c615c9f565b98508881101561559757600080935093505050614f46565b60006155bc6155ae670de0b6b3a76400008a6147cb565b612a7585613a178e87615c8c565b90506155c881876147b6565b9050808b11156155df576155dc818c615c8c565b94505b60019350505050965096945050505050565b6060824710156156525760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610700565b600080866001600160a01b0316858760405161566e9190615e72565b60006040518083038185875af1925050503d80600081146156ab576040519150601f19603f3d011682016040523d82523d6000602084013e6156b0565b606091505b50915091506144b7878383876060831561572b578251600003615724576001600160a01b0385163b6157245760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610700565b50816150f4565b6150f483838151156157405781518083602001fd5b8060405162461bcd60e51b81526004016107009190615e8e565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156157995780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156157d25781810151838201526020016157ba565b50506000910152565b6000602082840312156157ed57600080fd5b815167ffffffffffffffff8082111561580557600080fd5b818401915084601f83011261581957600080fd5b81518181111561582b5761582b6157a1565b604051601f8201601f19908116603f01168101908382118183101715615853576158536157a1565b8160405282815287602084870101111561586c57600080fd5b6144b78360208301602088016157b7565b6001600160a01b038116811461589257600080fd5b50565b6000602082840312156158a757600080fd5b81356125648161587d565b801515811461589257600080fd5b6000602082840312156158d257600080fd5b8135612564816158b2565b600080600080600060a086880312156158f557600080fd5b85359450602086013593506040860135925060608601356159158161587d565b91506080860135615925816158b2565b809150509295509295909350565b60008083601f84011261594557600080fd5b50813567ffffffffffffffff81111561595d57600080fd5b6020830191508360208260051b85010111156121ad57600080fd5b6000806000806000806080878903121561599157600080fd5b863561599c8161587d565b955060208701356159ac8161587d565b9450604087013567ffffffffffffffff808211156159c957600080fd5b6159d58a838b01615933565b909650945060608901359150808211156159ee57600080fd5b506159fb89828a01615933565b979a9699509497509295939492505050565b60008060008060808587031215615a2357600080fd5b843593506020850135615a358161587d565b92506040850135615a458161587d565b9396929550929360600135925050565b60008060008060808587031215615a6b57600080fd5b84359350602085013592506040850135615a848161587d565b91506060850135615a94816158b2565b939692955090935050565b60008060008060808587031215615ab557600080fd5b843593506020850135615ac78161587d565b9250604085013591506060850135615a948161587d565b60008060408385031215615af157600080fd5b8235615afc8161587d565b91506020830135615b0c816158b2565b809150509250929050565b600080600080600080600060e0888a031215615b3257600080fd5b8735615b3d8161587d565b96506020880135615b4d8161587d565b95506040880135615b5d816158b2565b945060608801359350608088013560ff81168114615b7a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215615bac57600080fd5b833592506020840135615bbe8161587d565b929592945050506040919091013590565b600080600080600060a08688031215615be757600080fd5b853594506020860135615bf98161587d565b93506040860135615c098161587d565b92506060860135915060808601356159258161587d565b600060208284031215615c3257600080fd5b5035919050565b600060208284031215615c4b57600080fd5b5051919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b818103818111156123f7576123f7615c76565b808201808211156123f7576123f7615c76565b634e487b7160e01b600052603260045260246000fd5b80820281158282048414176123f7576123f7615c76565b6001600160801b03828116828216039080821115615cff57615cff615c76565b5092915050565b600060018201615d1857615d18615c76565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082615d4457615d44615d1f565b500690565b6001600160801b03818116838216019080821115615cff57615cff615c76565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156123f7576123f7615c76565b600f82810b9082900b0360016001607f1b0319811260016001607f1b03821317156123f7576123f7615c76565b8181036000831280158383131683831282161715615cff57615cff615c76565b6000600160ff1b8201615df857615df8615c76565b5060000390565b8082018281126000831280158216821582161715615e1f57615e1f615c76565b505092915050565b600060208284031215615e3957600080fd5b8151612564816158b2565b600082615e5357615e53615d1f565b600160ff1b821460001984141615615e6d57615e6d615c76565b500590565b60008251615e848184602087016157b7565b9190910192915050565b6020815260008251806020840152615ead8160408501602087016157b7565b601f01601f1916919091016040019291505056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba2646970667358221220269df47ce75a3507457bdbfcd8ec92de2692bcdb4bc79d3773dc8856c3a2dba364736f6c63430008130033",
    "sourceMap": "796:7316:13:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1135:12:0;1402;1416:23;1443:12;-1:-1:-1;;;;;1443:25:0;1482:5;;1443:54;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1401:96;;;;1511:7;1507:76;;;1541:31;;-1:-1:-1;;;1541:31:0;;;;;;;;;;;1507:76;1592:15;1610:18;1617:10;1610:18;:::i;:::-;1592:36;-1:-1:-1;;;;;;;1642:43:0;;-1:-1:-1;;;1642:43:0;1638:160;;1762:10;1756:17;1751:2;1739:10;1735:19;1728:46;1638:160;2020:17;;-1:-1:-1;;2016:25:0;;2039:1;1994:20;;1987:55;;;1994:20;2122:31;;;;;;;;;;:::i;:::-;796:7316:13;;;-1:-1:-1;796:7316:13;;;-1:-1:-1;;;;;796:7316:13;7515:595;;;;;;;;;;-1:-1:-1;7515:595:13;;;;;:::i;:::-;;:::i;:::-;;5984:154:2;;;;;;;;;;-1:-1:-1;5984:154:2;;;;;:::i;:::-;;:::i;1716:3078:5:-;;;;;;:::i;:::-;;:::i;:::-;;;;3507:25:165;;;3563:2;3548:18;;3541:34;;;;3480:18;1716:3078:5;;;;;;;;11164:688:39;;;;;;;;;;-1:-1:-1;11164:688:39;;;;;:::i;:::-;;:::i;4263:249::-;;;;;;;;;;-1:-1:-1;4263:249:39;;;;;:::i;:::-;;:::i;1499:3200:4:-;;;;;;:::i;:::-;;:::i;:::-;;;6253:25:165;;;6241:2;6226:18;1499:3200:4;6107:177:165;7172:567:2;;;;;;;;;;-1:-1:-1;7172:567:2;;;;;:::i;:::-;;:::i;1190:174:39:-;;;;;;;;;;;;1240:124;1190:174;;1044:41;;;;;;;;;;;;;;;13214:2087:4;;;;;;;;;;-1:-1:-1;13214:2087:4;;;;;:::i;:::-;;:::i;8739:234:39:-;;;;;;;;;;-1:-1:-1;8739:234:39;;;;;:::i;:::-;;:::i;5326:4188:6:-;;;;;;;;;;-1:-1:-1;5326:4188:6;;;;;:::i;:::-;;:::i;5280:200:2:-;;;;;;;;;;-1:-1:-1;5280:200:2;;;;;:::i;:::-;;:::i;12957:1339:39:-;;;;;;;;;;-1:-1:-1;12957:1339:39;;;;;:::i;:::-;;:::i;8073:188::-;;;;;;;;;;-1:-1:-1;8073:188:39;;;;;:::i;:::-;;:::i;1742:2987:6:-;;;;;;:::i;:::-;;:::i;7362:308:39:-;;;;;;;;;;-1:-1:-1;7362:308:39;;;;;:::i;:::-;;:::i;5646:191:2:-;;;;;;;;;;-1:-1:-1;5646:191:2;;;;;:::i;:::-;;:::i;10070:2176:4:-;;;;;;;;;;-1:-1:-1;10070:2176:4;;;;;:::i;:::-;;:::i;5355:3470::-;;;;;;:::i;:::-;;:::i;4912:294:39:-;;;;;;;;;;-1:-1:-1;4912:294:39;;;;;:::i;:::-;;:::i;1927:1533:1:-;;;;;;;;;;-1:-1:-1;1927:1533:1;;;;;:::i;:::-;;:::i;5410:3338:5:-;;;;;;;;;;-1:-1:-1;5410:3338:5;;;;;:::i;:::-;;:::i;7515:595:13:-;7637:10;-1:-1:-1;;;;;7651:13:13;7637:27;;;;;:52;;-1:-1:-1;7678:10:13;7669:20;;;;:8;:20;;;;;;;;7668:21;7637:52;7633:103;;;7710:26;;-1:-1:-1;;;7710:26:13;;;;;;;;;;;7633:103;-1:-1:-1;;;;;7815:29:13;;;;;;:11;:29;;;;;;;;7810:98;;7867:30;;-1:-1:-1;;;7867:30:13;;;;;;;;;;;7810:98;8017:32;;-1:-1:-1;;;8017:32:13;;8043:4;8017:32;;;10012:51:165;7999:15:13;;-1:-1:-1;;;;;8017:17:13;;;;;9985:18:165;;8017:32:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;7999:50;-1:-1:-1;8059:44:13;-1:-1:-1;;;;;8059:20:13;;8080:13;7999:50;8059:20;:44::i;:::-;7555:555;7515:595;:::o;5984:154:2:-;6045:10;6036:20;;;;:8;:20;;;;;;;;6031:60;;6065:26;;-1:-1:-1;;;6065:26:2;;;;;;;;;;;6031:60;6101:21;:30;;;;;;;-1:-1:-1;;6101:30:2;;;;;;;;;5984:154::o;1716:3078:5:-;1978:20;2000;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;;;;;;;;;558:1;549:6;:10;6250:21:2;;::::1;::::0;::::1;;;6246:54;;;6280:20;;-1:-1:-1::0;;;6280:20:2::1;;;;;;;;;;;6246:54;2103:20:5::2;:18;:20::i;:::-;2151:25;2137:11;:39;2133:115;;;2199:38;;-1:-1:-1::0;;;2199:38:5::2;;;;;;;;;;;2133:115;2295:14;2311:18:::0;2333:70:::2;2355:11;2380:13;2333:8;:70::i;:::-;2294:109;;;;2430:14;2417:10;:27;2413:96;;;2467:31;;-1:-1:-1::0;;;2467:31:5::2;;;;;;;;;;;2413:96;2552:24;2579:19;:17;:19::i;:::-;2552:46;;2608;2625:16;2643:10;2608:16;:46::i;:::-;;2818:26;2854:25:::0;2889:26:::2;3059:38;3078:6;3086:10;3059:18;:38::i;:::-;3592:12;:25:::0;2925:172;;-1:-1:-1;2925:172:5;;-1:-1:-1;2925:172:5;;-1:-1:-1;2925:172:5;;-1:-1:-1;3592:45:5::2;::::0;2925:172;;-1:-1:-1;;;3592:25:5;::::2;-1:-1:-1::0;;;;;3592:25:5::2;:45;:::i;:::-;3485:104;3557:18;3529:25;:23;:25::i;:::-;:46;;;;:::i;:::-;3485:18;::::0;:26:::2;:104::i;:::-;:152;3468:242;;;3669:30;;-1:-1:-1::0;;;3669:30:5::2;;;;;;;;;;;3468:242;3773:12;3760:10;:25;3756:63;;;3794:25;;-1:-1:-1::0;;;3794:25:5::2;;;;;;;;;;;3756:63;3897:18;3871:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;3986:36:5::2;::::0;-1:-1:-1;4005:17:5::2;3986:16:::0;:36:::2;:::i;:::-;3971:51;;4032:193;4060:18;4092:12;4118:17;4149:10;4173:16;4203:12;4032:14;:193::i;:::-;4309:15;4327:97;4362:26;4402:12;4327:21;:97::i;:::-;4309:115;;4434:42;4440:7;4449:12;4463;4434:5;:42::i;:::-;4522:18;4543:11;4522:32;;4648:7;4622:12;-1:-1:-1::0;;;;;4600:141:5::2;;4669:12;4695:10;4719:12;4600:141;;;;;;;11199:25:165::0;;;11255:2;11240:18;;11233:34;;;;11298:2;11283:18;;11276:34;11187:2;11172:18;;10997:319;4600:141:5::2;;;;;;;;4752:35;;;;;;;;591:1:97::0;582:6;:10;1716:3078:5;;;;-1:-1:-1;1716:3078:5;-1:-1:-1;;;;1716:3078:5:o;11164:688:39:-;-1:-1:-1;;;;;11374:18:39;;;;:38;;-1:-1:-1;;;;;;11396:16:39;;;11374:38;11370:98;;;11433:35;;-1:-1:-1;;;11433:35:39;;;;;;;;;;;11370:98;11524:27;;;11520:90;;11572:38;;-1:-1:-1;;;11572:38:39;;;;;;;;;;;11520:90;11675:9;11670:176;11690:14;;;11670:176;;;11722:54;11736:3;;11740:1;11736:6;;;;;;;:::i;:::-;;;;;;;11744:4;11750:2;11754:6;;11761:1;11754:9;;;;;;;:::i;:::-;;;;;;;11765:10;11722:13;:54::i;:::-;11818:3;;11670:176;;;;11164:688;;;;;;:::o;4263:249::-;4453:52;4467:7;4476:4;4482:2;4486:6;4494:10;4453:13;:52::i;:::-;4263:249;;;;:::o;1499:3200:4:-;1675:16;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;1770:20:4::1;:18;:20::i;:::-;1866:26:::0;;::::1;;1862:100;;;1915:36;;-1:-1:-1::0;;;1915:36:4::1;;;;;;;;;;;1862:100;2090:14;2106:18:::0;2128:72:::1;2150:13;2177;2128:8;:72::i;:::-;2089:111:::0;;-1:-1:-1;2089:111:4;-1:-1:-1;3121:25:4::1;3125:21;3121:1;:25;:::i;:::-;3112:6;:34;3108:110;;;3169:38;;-1:-1:-1::0;;;3169:38:4::1;;;;;;;;;;;3108:110;3247:25;3251:21;3247:1;:25;:::i;:::-;3238:34;::::0;:6;:34:::1;:::i;:::-;3227:45;;3324:49;3341:19;:17;:19::i;:::-;3362:10;3324:16;:49::i;:::-;-1:-1:-1::0;3430:26:4;:33;;-1:-1:-1;;3430:33:4::1;3459:4;3430:33;::::0;;3632:18:::1;:6:::0;:16:::1;:18::i;:::-;3603:12;:47:::0;;-1:-1:-1;;;;;;3603:47:4::1;-1:-1:-1::0;;;;;3603:47:4;;;::::1;::::0;;;::::1;::::0;;3688:242:::1;:217;3762:6:::0;3786:18:::1;3822:4:::0;3844:17:::1;3879:12;3688:56;:217::i;:::-;:240;:242::i;:::-;3660:12;:270:::0;;-1:-1:-1;;;;;3660:270:4;;::::1;-1:-1:-1::0;;;3660:270:4::1;::::0;::::1;::::0;;;::::1;::::0;;4435:62:::1;3660:25;::::0;4475:21:::1;4435:5;:62::i;:::-;4507:51;554:1:31;4535:12:4;4549:8;4507:5;:51::i;:::-;4611:55;::::0;;11199:25:165;;;11255:2;11240:18;;11233:34;;;11283:18;;;11276:34;;;-1:-1:-1;;;;;4611:55:4;::::1;::::0;::::1;::::0;11187:2:165;11172:18;4611:55:4::1;;;;;;;4677:15;;591:1:97::0;582:6;:10;1499:3200:4;;-1:-1:-1;;;;1499:3200:4:o;7172:567:2:-;7266:16;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;;;7362::2::1;7353:20:::0;;:8:::1;:20;::::0;;;;;::::1;;7352:21;:64:::0;::::1;;;-1:-1:-1::0;7389:10:2::1;-1:-1:-1::0;;;;;7403:13:2::1;7389:27;;;7352:64;:105;;;;-1:-1:-1::0;7446:11:2::1;::::0;-1:-1:-1;;;;;7446:11:2::1;7432:10;:25;;7352:105;7335:166;;;7475:26;;-1:-1:-1::0;;;7475:26:2::1;;;;;;;;;;;7335:166;7543:22;::::0;;7511:29:::1;7575::::0;;;7625:107:::1;7543:22:::0;7683:13:::1;7710:12:::0;7625:9:::1;:107::i;:::-;591:1:97::0;582:6;:10;7614:118:2;7172:567;-1:-1:-1;;;7172:567:2:o;13214:2087:4:-;13426:20;13448:22;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;;;13540:16:4::1;:14;:16::i;:::-;13519:37;;13566:49;13583:19;:17;:19::i;13566:49::-;;13740:33;13762:10;13740:21;:33::i;:::-;14037:13;:29:::0;13993:7;;-1:-1:-1;;;;;;14037:29:4::1;14080:33:::0;;::::1;14076:97;;;14146:16;-1:-1:-1::0;;;;;14129:33:4::1;;;14076:97;14186:14;14204:1;14186:19:::0;14182:38:::1;;14215:1;14218::::0;14207:13:::1;;;;;;;;14182:38;14275:69;-1:-1:-1::0;;;14317:10:4::1;14329:14:::0;14275:5:::1;:69::i;:::-;14445:13;:22:::0;-1:-1:-1;;;;;;;;14445:22:4;;::::1;::::0;::::1;::::0;14425:17:::1;::::0;14501:106:::1;::::0;:14;;14445:22;;14501:106;::::1;:25;:106::i;:::-;14477:130;;14745:26;:14;:24;:26::i;:::-;14714:57;::::0;:16;:57:::1;:::i;:::-;14670:13;:101:::0;;-1:-1:-1;;;;;;14670:101:4::1;-1:-1:-1::0;;;;;14670:101:4;;;::::1;::::0;;;::::1;::::0;;14807:25:::1;:13:::0;:23:::1;:25::i;:::-;14781:13;:51:::0;;:22:::1;::::0;:51:::1;::::0;;;-1:-1:-1;;;14781:51:4;::::1;-1:-1:-1::0;;;;;14781:51:4::1;;:::i;:::-;;;;;;;;-1:-1:-1::0;;;;;14781:51:4::1;;;;;-1:-1:-1::0;;;;;14781:51:4::1;;;;;;14891:53;14901:13;14916:12;14930:13;14891:9;:53::i;:::-;14876:68:::0;-1:-1:-1;14876:68:4;15013:42:::1;:18:::0;15040:14;15013:26:::1;:42::i;:::-;:57;15009:107;;;15091:25;;-1:-1:-1::0;;;15091:25:4::1;;;;;;;;;;;15009:107;15180:66;::::0;;3507:25:165;;;3563:2;3548:18;;3541:34;;;-1:-1:-1;;;;;15180:66:4;::::1;::::0;::::1;::::0;3480:18:165;15180:66:4::1;;;;;;;15257:37;;;;570:1:97;591::::0;582:6;:10;13214:2087:4;;;;-1:-1:-1;13214:2087:4;-1:-1:-1;;;13214:2087:4:o;8739:234:39:-;8900:7;3063:32;3087:7;3063:23;:32::i;:::-;-1:-1:-1;;;;;3049:46:39;:10;-1:-1:-1;;;;;3049:46:39;;3045:116;;3118:32;;-1:-1:-1;;;3118:32:39;;;;;;;;;;;3045:116;8919:47:::1;8932:7;8941:8;8951:6;8959;8919:12;:47::i;:::-;8739:234:::0;;;;;:::o;5326:4188:6:-;5529:7;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;5566:25:6::1;5552:39:::0;::::1;5548:115;;;5614:38;;-1:-1:-1::0;;;5614:38:6::1;;;;;;;;;;;5548:115;5706:18;5727:16;:14;:16::i;:::-;5706:37;;5753:43;5770:13;5785:10;5753:16;:43::i;:::-;;5857:143;5876:65;5898:27;5927:13;5876:21;:65::i;:::-;5955:10;5979:11;5857:5;:143::i;:::-;6208:25;6247:21:::0;6282:26:::1;6322:23:::0;6359:27:::1;6400:26:::0;6439:60:::1;6460:11;6473:10;6485:13;6439:20;:60::i;:::-;6991:12;:25:::0;6194:305;;-1:-1:-1;6194:305:6;;-1:-1:-1;6194:305:6;;-1:-1:-1;6194:305:6;-1:-1:-1;6194:305:6;-1:-1:-1;6194:305:6;-1:-1:-1;6991:45:6::1;::::0;6194:305;;-1:-1:-1;;;6991:25:6;::::1;-1:-1:-1::0;;;;;6991:25:6::1;:45;:::i;:::-;6887:101;6959:15;6931:25;:23;:25::i;6887:101::-;:149;6870:239;;;7068:30;;-1:-1:-1::0;;;7068:30:6::1;;;;;;;;;;;6870:239;7331:11:::0;7406:13;7482:10;7537:15:::1;:30:::0;-1:-1:-1;7533:1241:6::1;;;7655:18;7629:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;7766:197:6::1;::::0;-1:-1:-1;7800:10:6;7828:17;7863:18;7899:20;7937:12;7766:16:::1;:197::i;:::-;8039:22;8064:32;8079:17;8064:12:::0;:32:::1;:::i;:::-;8110:31;8168:28:::0;;;:12:::1;:28;::::0;;;;:41;8039:57;;-1:-1:-1;;;;8168:41:6;;::::1;;;::::0;8237:264:::1;::::0;8291:10;;8319:15;;8352:17;;8387:18;;8423:12;;8453:11;;8237:36:::1;:264::i;:::-;8594:28;::::0;;;:12:::1;:28;::::0;;;;:41;8515:134:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;8594:41:6;::::1;::::0;::::1;8515:19;:134::i;:::-;8730:33;8752:10;8730:21;:33::i;:::-;7569:1205;;7533:1241;8983:20;9006:99;9029:13;9056:12;9082:13;9006:9;:99::i;:::-;8983:122;;9181:10;9166:12;:25;9162:63;;;9200:25;;-1:-1:-1::0;;;9200:25:6::1;;;;;;;;;;;9162:63;9327:64;9349:27;9378:12;9327:21;:64::i;:::-;9301:12;-1:-1:-1::0;;;;;9277:200:6::1;;9405:12;9431;9457:10;9277:200;;;;;;;11199:25:165::0;;;11255:2;11240:18;;11233:34;;;;11298:2;11283:18;;11276:34;11187:2;11172:18;;10997:319;9277:200:6::1;;;;;;;;9495:12:::0;-1:-1:-1;;;;;;;;;;;591:1:97;582:6;:10;5326:4188:6;;-1:-1:-1;;;;;5326:4188:6:o;5280:200:2:-;5362:11;;-1:-1:-1;;;;;5362:11:2;5348:10;:25;5344:64;;5382:26;;-1:-1:-1;;;5382:26:2;;;;;;;;;;;5344:64;-1:-1:-1;;;;;5418:13:2;;;;;;:8;:13;;;;;;:22;;-1:-1:-1;;5418:22:2;;;;;;;5455:18;;;5418:13;5455:18;5280:200;;:::o;12957:1339:39:-;13232:8;13214:15;:26;13210:68;;;13249:29;;-1:-1:-1;;;13249:29:39;;;;;;;;;;;13210:68;-1:-1:-1;;;;;13338:19:39;;13334:67;;13366:35;;-1:-1:-1;;;13366:35:39;;;;;;;;;;;13334:67;-1:-1:-1;;;;;13759:14:39;;;13412:18;13759:14;;;:7;:14;;;;;;;;;13583:246;;1240:124;13583:246;;;12244:25:165;12323:18;;;12316:43;;;;12395:15;;;12375:18;;;12368:43;12454:14;;12447:22;12427:18;;;12420:50;12486:19;;;12479:35;;;;12530:19;;;;12523:35;;;13583:246:39;;;;;;;;;;12216:19:165;;;13583:246:39;;;13552:295;;;;;;;;-1:-1:-1;;;13456:405:39;;;12827:27:165;13518:16:39;12870:11:165;;;12863:27;12906:12;;;12899:28;12943:12;;13456:405:39;;;-1:-1:-1;;13456:405:39;;;;;;;;;13433:438;;13456:405;13433:438;;;;13927:14;13944:30;;;;;;;;;13193:25:165;;;13266:4;13254:17;;13234:18;;;13227:45;;;;13288:18;;;13281:34;;;13331:18;;;13324:34;;;13433:438:39;;-1:-1:-1;13927:14:39;13944:30;;13165:19:165;;13944:30:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13927:47;;13998:5;-1:-1:-1;;;;;13988:15:39;:6;-1:-1:-1;;;;;13988:15:39;;13984:58;;14012:30;;-1:-1:-1;;;14012:30:39;;;;;;;;;;;13984:58;-1:-1:-1;;;;;14096:14:39;;;;;;:7;:14;;;;;14094:16;;14096:14;;;14094:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;14145:24:39;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;14145:45:39;;;;;;;;;;14248:41;;13649::165;;;14248::39;;13622:18:165;14248:41:39;;;;;;;13147:1149;;12957:1339;;;;;;;:::o;8073:188::-;8203:51;8216:7;8225:8;8235:6;8243:10;8203:12;:51::i;:::-;8073:188;;;:::o;1742:2987:6:-;2006:20;2028:21;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;6250:21:2;;::::1;::::0;::::1;;;6246:54;;;6280:20;;-1:-1:-1::0;;;6280:20:2::1;;;;;;;;;;;6246:54;2132:20:6::2;:18;:20::i;:::-;2180:25;2166:11;:39;2162:115;;;2228:38;;-1:-1:-1::0;;;2228:38:6::2;;;;;;;;;;;2162:115;2603:18;2624:16;:14;:16::i;:::-;2603:37;;2667:14;2654:10;:27;2650:96;;;2704:31;;-1:-1:-1::0;;;2704:31:6::2;;;;;;;;;;;2650:96;2755:24;2782:19;:17;:19::i;:::-;2755:46;;2811:22;2836:46;2853:16;2871:10;2836:16;:46::i;:::-;2811:71:::0;-1:-1:-1;3056:36:6::2;3075:17;3056:16:::0;:36:::2;:::i;:::-;3041:51;;3102:26;3152::::0;3312:60:::2;3332:11;3345:10;3357:14;3312:19;:60::i;:::-;3433:22;:44:::0;;3192:180;;-1:-1:-1;3192:180:6;;-1:-1:-1;3192:180:6;-1:-1:-1;3192:180:6;;3433:22:::2;::::0;:44:::2;::::0;3192:180;;3433:44:::2;:::i;:::-;::::0;;;-1:-1:-1;;;3764:27:6;;::::2;3760:65;;;3800:25;;-1:-1:-1::0;;;3800:25:6::2;;;;;;;;;;;3760:65;3835:38;3844:13;3859;3835:8;:38::i;:::-;;;3948:132;3977:11;4002:18;4034:10;4058:12;3948:15;:132::i;:::-;4240:15;4258:98;4293:27;4334:12;4258:21;:98::i;:::-;4240:116;;4366:41;4372:7;4381:12;4395:11;4366:5;:41::i;:::-;4532:143;::::0;;11199:25:165;;;11255:2;11240:18;;11233:34;;;11283:18;;;11276:34;;;4475:11:6;;4581:7;;-1:-1:-1;;;;;4532:143:6;::::2;::::0;::::2;::::0;11187:2:165;11172:18;4532:143:6::2;;;;;;;4686:36;;;;;;591:1:97::0;582:6;:10;1742:2987:6;;;;-1:-1:-1;1742:2987:6;-1:-1:-1;;;;1742:2987:6:o;7362:308:39:-;7527:10;7509:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;7509:39:39;;;;;;;;;;;;:50;;-1:-1:-1;;7509:50:39;;;;;;;;;;7617:46;;13649:41:165;;;7509:39:39;;7527:10;7617:46;;13622:18:165;7617:46:39;;;;;;;7362:308;;:::o;5646:191:2:-;5719:11;;-1:-1:-1;;;;;5719:11:2;5705:10;:25;5701:64;;5739:26;;-1:-1:-1;;;5739:26:2;;;;;;;;;;;5701:64;5775:11;:17;;-1:-1:-1;;;;;;5775:17:2;-1:-1:-1;;;;;5775:17:2;;;;;;;;5808:22;;;;-1:-1:-1;;5808:22:2;5646:191;:::o;10070:2176:4:-;10267:20;10289:24;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;10343:25:4::1;10333:35:::0;::::1;10329:111;;;10391:38;;-1:-1:-1::0;;;10391:38:4::1;;;;;;;;;;;10329:111;10483:18;10504:16;:14;:16::i;:::-;10483:37;;10530:49;10547:19;:17;:19::i;10530:49::-;;10796:33;10818:10;10796:21;:33::i;:::-;10901:12;:34;::::0;-1:-1:-1;;;;;;;;;;;10901:34:4;11056:13:::1;:29:::0;-1:-1:-1;;;10871:27:4::1;10983:70:::0;;;;;10871:27;;10983:102:::1;::::0;-1:-1:-1;;;;;11056:29:4;;::::1;::::0;10983:102:::1;:::i;:::-;10945:140:::0;-1:-1:-1;11095:21:4::1;11119:61;10945:140:::0;11119:19;:61:::1;:::i;:::-;11095:85;;11190:48;554:1:31;11218:10:4;11230:7;11190:5;:48::i;:::-;11296:21;11363:177;11398:7;11419:10;11443:13;11470:19;11503:27;11363:21;:177::i;:::-;11327:213:::0;-1:-1:-1;11327:213:4;-1:-1:-1;11600:119:4::1;-1:-1:-1::0;;;11667:12:4;11327:213;11600:5:::1;:119::i;:::-;11799:53;11809:13;11824:12;11838:13;11799:9;:53::i;:::-;11784:68;;11916:12;11903:10;:25;11899:63;;;11937:25;;-1:-1:-1::0;;;11937:25:4::1;;;;;;;;;;;11899:63;12053:136;::::0;;11199:25:165;;;11255:2;11240:18;;11233:34;;;11283:18;;;11276:34;;;12031:7:4;;-1:-1:-1;;;;;12053:136:4;::::1;::::0;::::1;::::0;11187:2:165;11172:18;12053:136:4::1;;;;;;;12200:39;;;;;;591:1:97::0;582:6;:10;10070:2176:4;;;;-1:-1:-1;10070:2176:4;-1:-1:-1;;;10070:2176:4:o;5355:3470::-;5573:16;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;6250:21:2;;::::1;::::0;::::1;;;6246:54;;;6280:20;;-1:-1:-1::0;;;6280:20:2::1;;;;;;;;;;;6246:54;5668:20:4::2;:18;:20::i;:::-;5718:25;5702:13;:41;5698:117;;;5766:38;;-1:-1:-1::0;;;5766:38:4::2;;;;;;;;;;;5698:117;5864:11;5878:216;5931:25;:23;:25::i;:::-;5970:12;:25:::0;-1:-1:-1;;;5970:25:4;::::2;-1:-1:-1::0;;;;;5970:25:4::2;6009:18;6041:17;6072:12;5878:39;:216::i;:::-;5864:230;;6114:7;6108:3;:13;:30;;;;6131:7;6125:3;:13;6108:30;6104:67;;;6147:24;;-1:-1:-1::0;;;6147:24:4::2;;;;;;;;;;;6104:67;6251:14;6267:18:::0;6289:72:::2;6311:13;6338;6289:8;:72::i;:::-;6250:111;;;;6405:49;6422:19;:17;:19::i;6405:49::-;-1:-1:-1::0;6983:13:4::2;:29:::0;-1:-1:-1;;;6872:35:4::2;6910:70:::0;;;:12:::2;:70;::::0;;;6872:35;;6910:102:::2;::::0;-1:-1:-1;;;;;6983:29:4;;::::2;::::0;6910:102:::2;:::i;:::-;7022:21;7046:34:::0;;;:12:::2;:34;::::0;-1:-1:-1;;;;;;;;;;;7046:34:4;6872:140;;-1:-1:-1;7022:21:4;7046:76:::2;::::0;6872:140;;7046:76:::2;:::i;:::-;7022:100;;7187:26;7310:63:::0;7376:34:::2;7399:10;7376:22;:34::i;:::-;7310:100;;7424:28;7455:74;7509:6;7455:36;:74::i;:::-;7424:105;;7652:32;7676:6;7652:16;:32::i;:::-;7721:12;:26:::0;-1:-1:-1;;;;;7721:26:4;;::::2;7698:49:::0;;7786:28;;::::2;;7761:22;::::0;::::2;:53:::0;-1:-1:-1;;;7850:25:4;;::::2;;7828:19;::::0;::::2;:47:::0;7910:44:::2;7698:6:::0;7910:36:::2;:44::i;:::-;7889:65:::0;-1:-1:-1;8354:137:4::2;8426:13:::0;8457:20;8355:41:::2;8457:20:::0;7889:65;8355:41:::2;:::i;:::-;8354:54:::0;:137;:54:::2;:137::i;:::-;8343:148;;7223:1279;;8555:51;554:1:31;8583:12:4;8597:8;8555:5;:51::i;:::-;8679:33;8701:10;8679:21;:33::i;:::-;8767:51;::::0;;3507:25:165;;;3563:2;3548:18;;3541:34;;;-1:-1:-1;;;;;8767:51:4;::::2;::::0;::::2;::::0;3480:18:165;8767:51:4::2;;;;;;;-1:-1:-1::0;;591:1:97;582:6;:10;-1:-1:-1;5355:3470:4;;;-1:-1:-1;;;;;;;;5355:3470:4:o;4912:294:39:-;5090:7;3063:32;3087:7;3063:23;:32::i;:::-;-1:-1:-1;;;;;3049:46:39;:10;-1:-1:-1;;;;;3049:46:39;;3045:116;;3118:32;;-1:-1:-1;;;3118:32:39;;;;;;;;;;;3045:116;5151:48:::1;5165:7;5174:4;5180:2;5184:6;5192;5151:13;:48::i;:::-;4912:294:::0;;;;;;:::o;1927:1533:1:-;2067:29;;;;:12;:29;;;;;:40;-1:-1:-1;;;;;2067:40:1;:45;2063:82;;1927:1533;:::o;2063:82::-;2324:24;2351:19;:17;:19::i;:::-;2324:46;-1:-1:-1;2397:37:1;2415:19;2397:15;:37;:::i;:::-;:42;;;:92;;;2474:15;2455:16;:34;2397:92;2380:187;;;2521:35;;-1:-1:-1;;;2521:35:1;;;;;;;;;;;2380:187;2820:16;2801:15;:35;2797:657;;2852:52;2869:16;2887;:14;:16::i;:::-;2852;:52::i;2797:657::-;2972:15;2935:509;3083:25;3111:18;;;:12;:18;;;;;:29;-1:-1:-1;;;;;3111:29:1;3162:24;;;3158:107;;3230:16;:14;:16::i;:::-;3210:36;;3158:107;3286:22;;3282:148;;3332:52;3349:15;3366:17;3332:16;:52::i;3282:148::-;-1:-1:-1;3023:27:1;3031:19;3023:27;;:::i;:::-;;;2935:509;;5410:3338:5;5612:7;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;5649:25:5::1;5635:39:::0;::::1;5631:115;;;5697:38;;-1:-1:-1::0;;;5697:38:5::1;;;;;;;;;;;5631:115;5979:18;6000:16;:14;:16::i;:::-;5979:37;;6026:43;6043:13;6058:10;6026:16;:43::i;:::-;;6129:142;6148:64;6170:26;6198:13;6148:21;:64::i;6129:142::-;6370:25;6409:21:::0;6444:26:::1;6484:23:::0;6521:27:::1;6562:26:::0;6601:59:::1;6621:11;6634:10;6646:13;6601:19;:59::i;:::-;6356:304;;;;;;;;;;;;6861:20;6884:13;6861:36;;6960:13;6942:15;:31;6938:1161;;;7060:18;7034:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;7092:197:5::1;::::0;-1:-1:-1;7125:11:5;7154:17;7189:18;7225:20;7263:12;7092:15:::1;:197::i;:::-;7365:22;7390:32;7405:17;7390:12:::0;:32:::1;:::i;:::-;7436:31;7494:28:::0;;;:12:::1;:28;::::0;;;;:41;7365:57;;-1:-1:-1;;;;7494:41:5;::::1;;;7563:263;7617:11:::0;7646:15;7679:17;7714:18;7750:12;7780:10;7808:4:::1;7563:36;:263::i;:::-;7919:28;::::0;;;:12:::1;:28;::::0;;;;:41;7840:134:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;7919:41:5;::::1;::::0;::::1;7840:19;:134::i;:::-;8055:33;8077:10;8055:21;:33::i;:::-;6975:1124;;6938:1161;8155:20;8178:99;8201:13;8228:12;8254:13;8178:9;:99::i;:::-;8155:122;;8341:12;8328:10;:25;8324:63;;;8362:25;;-1:-1:-1::0;;;8362:25:5::1;;;;;;;;;;;8324:63;8454:11:::0;8560:63:::1;8582:26;8610:12:::0;8560:21:::1;:63::i;:::-;8511:198;::::0;;11199:25:165;;;11255:2;11240:18;;11233:34;;;11283:18;;;11276:34;;;-1:-1:-1;;;;;8511:198:5;::::1;::::0;::::1;::::0;11187:2:165;11172:18;8511:198:5::1;;;;;;;-1:-1:-1::0;591:1:97;582:6;:10;8728:12:5;5410:3338;-1:-1:-1;;;;;;;;;;;;;;5410:3338:5:o;941:175:82:-;1050:58;;-1:-1:-1;;;;;14142:32:165;;1050:58:82;;;14124:51:165;14191:18;;;14184:34;;;1023:86:82;;1043:5;;-1:-1:-1;;;1073:23:82;14097:18:165;;1050:58:82;;;;-1:-1:-1;;1050:58:82;;;;;;;;;;;;;;-1:-1:-1;;;;;1050:58:82;-1:-1:-1;;;;;;1050:58:82;;;;;;;;;;1023:19;:86::i;3436:144:2:-;3502:9;:14;3498:76;;3539:24;;-1:-1:-1;;;3539:24:2;;;;;;;;;;;3498:76;3436:144::o;4221:1068:13:-;4323:20;4345:18;4379:12;4375:908;;;4441:62;-1:-1:-1;;;;;4441:10:13;:27;4469:10;4489:4;4496:6;4441:27;:62::i;:::-;4567:35;;-1:-1:-1;;;4567:35:13;;;;;14403:25:165;;;4596:4:13;14444:18:165;;;14437:60;4567:4:13;-1:-1:-1;;;;;4567:12:13;;;;14376:18:165;;4567:35:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4552:50;;4629:16;:14;:16::i;:::-;4616:29;;4375:908;;;4958:28;;-1:-1:-1;;;4958:28:13;;;;;6253:25:165;;;4938:17:13;;4958:4;-1:-1:-1;;;;;4958:20:13;;;;6226:18:165;;4958:28:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4938:48;-1:-1:-1;5053:138:13;-1:-1:-1;;;;;5068:4:13;5053:38;5109:10;5145:4;4938:48;5053:38;:138::i;:::-;5220:9;5205:24;;5256:16;:14;:16::i;:::-;5243:29;;4662:621;4375:908;4221:1068;;;;;:::o;7834:223:7:-;7910:24;8012:37;8030:19;8012:15;:37;:::i;:::-;7981:69;;:15;:69;:::i;:::-;7950:100;;7834:223;:::o;3705:3533:1:-;3826:7;3958:51;;;:12;:51;;;;;4023:22;;-1:-1:-1;;;;;4023:22:1;:27;;;:64;;;4072:15;4054;:33;4023:64;4019:124;;;4110:22;-1:-1:-1;;;;;4110:22:1;;-1:-1:-1;4103:29:1;;4019:124;4224:23;:11;:21;:23::i;:::-;4199:48;;-1:-1:-1;;;;;;4199:48:1;-1:-1:-1;;;;;4199:48:1;;;;;;;-1:-1:-1;4736:12:1;-1:-1:-1;4762:35:1;4780:17;4762:15;:35;:::i;:::-;4736:71;;;;;;;;;;;-1:-1:-1;4736:71:1;;;:82;-1:-1:-1;;;;;4736:82:1;;-1:-1:-1;4858:12:1;-1:-1:-1;4884:67:1;4858:12;4935:15;4884:21;:67::i;:::-;4858:103;;;;;;;;;;;;4828:133;;4971:20;5027:1;5005:19;:23;5001:667;;;5062:21;5101;5139:180;5186:19;5227:11;5260:14;5296:5;5139:25;:180::i;:::-;5044:275;;;;5359:13;5333:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5386:235:1;;-1:-1:-1;5420:19:1;5457:1;5476:13;;5592:15;5386:16;:235::i;:::-;5653:4;5635:22;;5030:638;;5001:667;5786:26;5815:12;:102;5841:66;5863:26;5891:15;5841:21;:66::i;:::-;5815:102;;;;;;;;;;;;5786:131;;5952:1;5931:18;:22;5927:662;;;5987:21;6026;6064:178;6111:18;6151:11;6184:14;6220:4;6064:25;:178::i;:::-;5969:273;;;;6282:13;6256:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;6309:233:1;;-1:-1:-1;6342:18:1;6378:1;6397:13;;6513:15;6309;:233::i;:::-;6574:4;6556:22;;5955:634;;5927:662;6660:15;6656:547;;;6691:20;6714:35;6732:17;6714:15;:35;:::i;:::-;6763:31;6821:26;;;:12;:26;;;;;:39;;-1:-1:-1;;;;;6888:43:1;;;;;;6691:58;;-1:-1:-1;;;;6821:39:1;;;;;;;;;6945:132;;6821:39;;7024;;;;;6945:19;:132::i;:::-;7158:34;7180:11;7158:21;:34::i;:::-;6677:526;;6656:547;7220:11;7213:18;;;;;;;3705:3533;;;;;:::o;14676:3563:5:-;14816:26;14856:25;14895:20;14929:26;15151:241;15197:25;:23;:25::i;:::-;15236:12;:25;-1:-1:-1;;;15236:25:5;;-1:-1:-1;;;;;15236:25:5;15275:12;15313;15339:11;15364:18;15151:32;:241::i;:::-;15131:261;;15662:17;15682:179;15729:25;:23;:25::i;:::-;15768:12;:25;-1:-1:-1;;;15768:25:5;;-1:-1:-1;;;;;15768:25:5;15807:18;15839:12;15682:33;:179::i;:::-;15662:199;;15907:22;15919:9;15907:11;:22::i;:::-;16111:21;16155:26;16203:130;16251:12;16281:9;16308:11;16203:30;:130::i;:::-;16097:236;;-1:-1:-1;16097:236:5;-1:-1:-1;16496:33:5;16097:236;16496:17;:33;:::i;:::-;16481:48;-1:-1:-1;17208:33:5;17223:18;16481:48;17208:33;:::i;:::-;17188:53;-1:-1:-1;17704:87:5;:18;17747:9;17770:11;17704:29;:87::i;:::-;17683:108;-1:-1:-1;18050:33:5;17683:108;18050:12;:33;:::i;:::-;18029:54;;18094:138;;;14676:3563;;;;;;;:::o;8238:253:7:-;8398:12;:26;8442:28;;8296:7;;8334:150;;-1:-1:-1;;;;;8398:26:7;;;;8442:28;;8334:46;:150::i;1814:119:32:-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;:::-;1895:31;1814:119;-1:-1:-1;;;1814:119:32:o;9283:2118:5:-;9557:29;;-1:-1:-1;;;;;9557:29:5;9698:309;:284;9557:29;9862:20;:13;9878:4;9862:20;:::i;:::-;9719:36;;-1:-1:-1;;;;;9719:36:5;;9698:284;9933:13;9964:4;9698:102;:284::i;:309::-;9659:36;:348;;-1:-1:-1;;;;;;9659:348:5;-1:-1:-1;;;;;9659:348:5;;;;;;;;;;10155:31;:19;:29;:31::i;:::-;10125:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;10125:61:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10125:61:5;;;;;-1:-1:-1;;;;;10125:61:5;;;;;;10225:30;:18;:28;:30::i;:::-;10196:12;:59;;:25;;:59;;;;-1:-1:-1;;;10196:59:5;;-1:-1:-1;;;;;10196:59:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10196:59:5;;;;;-1:-1:-1;;;;;10196:59:5;;;;;;10286:25;:13;:23;:25::i;:::-;10265:46;;;;:::i;:::-;10321:29;:49;;-1:-1:-1;;;;;;10321:49:5;-1:-1:-1;;;;;10321:49:5;;;;;-1:-1:-1;10684:51:5;;;:12;:51;;;;;10786:23;;10321:49;;-1:-1:-1;10684:51:5;-1:-1:-1;;;10786:23:5;;;;;10848:98;10893:40;:19;10921:11;10893:27;:40::i;:::-;10849:29;10865:13;10849:1;:29;:::i;:::-;:84;;;;:::i;10848:98::-;10956:52;;10820:126;;-1:-1:-1;10820:126:5;;10956:10;;:23;;:52;;10820:126;;-1:-1:-1;;;10956:52:5;;;;;:::i;:::-;;;-1:-1:-1;;;;;10956:52:5;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11064:23:5;;11018:70;;10956:52;11018:70;;;;-1:-1:-1;;;11064:23:5;;;;11018:19;:70::i;:::-;11187:23;11198:11;11187:10;:23::i;:::-;11182:106;;11233:44;;-1:-1:-1;;;11233:44:5;;;;;;;;;;;11182:106;11360:34;11382:11;11360:21;:34::i;:::-;9519:1882;;;;9283:2118;;;;;;:::o;1198:469:31:-;1309:10;-1:-1:-1;;;;;1401:10:31;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:31;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:31;1620:18;;;;1617:34;;1198:469::o;9971:314:39:-;10088:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;10088:23:39;;;;;;;;;:33;;10115:6;;10088:19;:33;;10115:6;;10088:33;:::i;:::-;;;;-1:-1:-1;;10131:21:39;;;;:12;:21;;;;;:31;;10156:6;;10131:21;:31;;10156:6;;10131:31;:::i;:::-;;;;-1:-1:-1;;10219:59:39;;;3507:25:165;;;3563:2;3548:18;;3541:34;;;-1:-1:-1;;;;;10219:59:39;;;10254:1;;10234:10;;10219:59;;3480:18:165;10219:59:39;;;;;;;;9971:314;;;:::o;5568:1565::-;-1:-1:-1;;;;;5780:18:39;;;;:38;;-1:-1:-1;;;;;;5802:16:39;;;5780:38;5776:98;;;5839:35;;-1:-1:-1;;;5839:35:39;;;;;;;;;;;5776:98;5983:4;-1:-1:-1;;;;;5973:14:39;:6;-1:-1:-1;;;;;5973:14:39;;5969:871;;-1:-1:-1;;;;;6123:23:39;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;6118:712;;6232:16;6251:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;6251:33:39;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;6367:29:39;;6363:453;;6746:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;6746:33:39;;;;;;;;;;;:41;;;;;;;;;;:51;;6791:6;;6746:27;:51;;6791:6;;6746:51;:::i;:::-;;;;-1:-1:-1;;6363:453:39;6156:674;6118:712;6984:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6984:25:39;;;;;;;;;:35;;7013:6;;6984:19;:35;;7013:6;;6984:35;:::i;:::-;;;;-1:-1:-1;;7029:19:39;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;7029:23:39;;;;;;;;;:33;;7056:6;;7029:19;:33;;7056:6;;7029:33;:::i;:::-;;;;-1:-1:-1;;7077:49:39;;;3507:25:165;;;3563:2;3548:18;;3541:34;;;-1:-1:-1;;;;;7077:49:39;;;;;;;;;;;;;;3480:18:165;7077:49:39;;;;;;;5568:1565;;;;;:::o;640:190:34:-;693:9;-1:-1:-1;;;720:1:34;:12;714:86;;756:33;;-1:-1:-1;;;756:33:34;;;;;;;;;;;714:86;-1:-1:-1;821:1:34;640:190::o;4089:611:33:-;4320:20;;4429:35;:17;4455:8;4429:25;:35::i;:::-;4417:47;-1:-1:-1;4550:143:33;4627:52;4655:23;150:4:32;4665:12:33;4655:9;:23::i;:::-;4634:15;:4;4647:1;4634:12;:15::i;:::-;4628:21;;150:4:32;4628:21:33;:::i;:::-;4627:27;;:52::i;:::-;4550:51;:18;4577:23;4550:26;:51::i;:::-;:59;;:143::i;:::-;4531:162;;;4089:611;;;;;;;;:::o;5797:620:13:-;5929:23;5968:12;5964:447;;;6061:47;;-1:-1:-1;;;6061:47:13;;;;;15162:25:165;;;-1:-1:-1;;;;;15261:15:165;;;15241:18;;;15234:43;6102:4:13;15293:18:165;;;15286:43;6061:4:13;:11;;;;15135:18:165;;6061:47:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6043:65;;5964:447;;;6190:55;-1:-1:-1;;;;;6205:4:13;6190:34;6225:11;6238:6;6190:34;:55::i;:::-;6331:28;;-1:-1:-1;;;6331:28:13;;;;;6253:25:165;;;6311:17:13;;6331:4;-1:-1:-1;;;;;6331:20:13;;;;6226:18:165;;6331:28:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;6602:134::-;6686:43;;-1:-1:-1;;;6686:43:13;;565:4:32;6686:43:13;;;6253:25:165;6660:7:13;;6686:4;-1:-1:-1;;;;;6686:20:13;;;;6226:18:165;;6686:43:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;22173:1546:4:-;22382:12;:34;;-1:-1:-1;;;;;;;;;;;22382:34:4;22537:13;:29;-1:-1:-1;;;22357:22:4;22464:70;;;;;22357:22;;22464:102;;-1:-1:-1;;;;;22537:29:4;;;;22464:102;:::i;:::-;22426:140;-1:-1:-1;22576:21:4;22600:44;22426:140;22600:14;:44;:::i;:::-;22576:68;;22654:20;22677:95;22727:35;22750:11;22727:22;:35::i;:::-;22677:36;:95::i;:::-;22654:118;-1:-1:-1;22782:21:4;22806:88;:14;22654:118;22871:13;22806:25;:88::i;:::-;22782:112;;23252:26;23292:12;23307:40;23335:11;23307:27;:40::i;:::-;23292:55;;23368:13;23361:4;:20;23357:92;;;23418:20;23425:13;23418:4;:20;:::i;:::-;23397:41;;23357:92;23483:1;23462:18;:22;:43;;;-1:-1:-1;23488:17:4;;23462:43;23458:255;;;23521:181;23564:18;23600:12;23630:13;23661:27;23521:25;:181::i;:::-;22234:1485;;;;;;;22173:1546;:::o;10552:330:39:-;10681:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;10681:25:39;;;;;;;;;:35;;10710:6;;10681:19;:35;;10710:6;;10681:35;:::i;:::-;;;;-1:-1:-1;;10726:21:39;;;;:12;:21;;;;;:31;;10751:6;;10726:21;:31;;10751:6;;10726:31;:::i;:::-;;;;-1:-1:-1;;10814:61:39;;;3507:25:165;;;3563:2;3548:18;;3541:34;;;10855:1:39;;-1:-1:-1;;;;;10814:61:39;;;10829:10;;10814:61;;3480:18:165;10814:61:39;3333:248:165;984:556:32;1100:9;1365:1;-1:-1:-1;;1348:19:32;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:32;;1497:27;;984:556::o;3455:503:39:-;3650:34;;;3669:4;3650:34;;;;14124:51:165;;;;14191:18;;;14184:34;;;;3650::39;;;;;;;;;14097:18:165;;;;3650:34:39;;3640:45;;;;;;;;;-1:-1:-1;;;;;;3822:63:39;;;15551:39:165;3853:8:39;15623:15:165;;;-1:-1:-1;;15619:53:165;15606:11;;;15599:74;15689:12;;;15682:28;3869:15:39;15726:12:165;;;;15719:28;;;;3822:63:39;;;;;;;;;;15763:12:165;;;;3822:63:39;;;3799:96;;;;;;3455:503::o;9407:299::-;9553:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;9553:35:39;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;9665:34;;6253:25:165;;;9553:35:39;;9665:34;;6226:18:165;9665:34:39;;;;;;;9407:299;;;;:::o;19765:6067:6:-;19937:25;19976:21;20011:26;20051:23;20088:27;20129:26;20849:21;20873:38;20897:13;20873:23;:38::i;:::-;20849:62;;21046:289;21098:25;:23;:25::i;:::-;21141:12;:25;-1:-1:-1;;;21141:25:6;;-1:-1:-1;;;;;21141:25:6;21184:11;21213:13;21244:12;21274:11;21303:18;21046:34;:289::i;:::-;20925:410;;-1:-1:-1;20925:410:6;-1:-1:-1;20925:410:6;-1:-1:-1;21389:17:6;21409:199;21460:25;:23;:25::i;21409:199::-;21389:219;;21622:22;21634:9;21622:11;:22::i;:::-;21899:11;21970;21878:18;;;;22201:177;21899:11;22284:13;22319:9;21970:11;22201:29;:177::i;:::-;22020:358;;;;;;;;22434:17;22413:18;:38;;;;:::i;:::-;22392:59;-1:-1:-1;23150:34:6;23166:18;23150:13;:34;:::i;:::-;23131:53;;;;:::i;:::-;;-1:-1:-1;23524:28:6;23540:12;23524:13;:28;:::i;:::-;23502:50;;;;:::i;:::-;;;20401:3162;;;;;;;;23720:22;23745:12;:77;23791:17;23775:13;:33;;;;:::i;:::-;23745:77;;;;;;;;;;;-1:-1:-1;23745:77:6;;;:88;-1:-1:-1;;;;;23745:88:6;;-1:-1:-1;23873:15:6;:31;-1:-1:-1;23873:118:6;;23953:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;23953:38:6;23873:118;;;23923:11;23873:118;23847:144;;24556:236;24611:11;24640:18;24676:14;24708:15;24741:11;24770:8;24556:37;:236::i;:::-;24540:252;-1:-1:-1;24998:40:6;25020:18;24998:40;;:::i;:::-;;;25530:285;25595:13;25626:18;25662:15;25695:18;25731:14;25763:15;25796:5;25530:47;:285::i;:::-;19765:6067;;25339:476;;-1:-1:-1;25339:476:6;;-1:-1:-1;25339:476:6;-1:-1:-1;25339:476:6;;-1:-1:-1;19765:6067:6;-1:-1:-1;;;;;;19765:6067:6:o;13387:1212::-;13707:30;;-1:-1:-1;;;13707:30:6;;-1:-1:-1;;;;;13707:30:6;13791:337;:308;13707:30;13968:20;:13;13984:4;13968:20;:::i;:::-;13816:37;;-1:-1:-1;;;13816:37:6;;-1:-1:-1;;;;;13816:37:6;;;14043:11;14076:5;13791:115;:308::i;:337::-;13751:37;:377;;-1:-1:-1;;;;;13751:377:6;;;-1:-1:-1;;;13751:377:6;;;;;;;;;14287:23;:11;:21;:23::i;:::-;14250:60;;:18;:60;:::i;:::-;14201:30;:109;;-1:-1:-1;;;;;14201:109:6;;;-1:-1:-1;;;14201:109:6;;;;;;;;;-1:-1:-1;14418:31:6;:19;:29;:31::i;:::-;14388:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;14388:61:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14388:61:6;;;;;-1:-1:-1;;;;;14388:61:6;;;;;;14491:32;:21;:30;:32::i;:::-;14459:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14459:64:6;;;;;;;-1:-1:-1;;;;;14459:64:6;;;;;;14562:30;:18;:28;:30::i;:::-;14533:12;:59;;:25;;:59;;;;-1:-1:-1;;;14533:59:6;;-1:-1:-1;;;;;14533:59:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14533:59:6;;;;;-1:-1:-1;;;;;14533:59:6;;;;;;13387:1212;;;;;:::o;8388:1713:2:-;8676:22;8701:33;8717:17;8701:13;:33;:::i;:::-;8676:58;;8744:23;8770:12;:100;8796:64;8818:26;8846:13;8796:21;:64::i;:::-;8770:100;;;;;;;;;;;;8744:126;;8880:24;8907:12;:101;8933:65;8955:27;8984:13;8933:21;:65::i;:::-;8907:101;;;;;;;;;;;;8880:128;;9102:15;9121:1;9102:20;:45;;;;-1:-1:-1;9126:21:2;;9102:45;9098:997;;;9207:1;9163:28;;;:12;:28;;;;;:45;;-1:-1:-1;;;;;9163:45:2;;;9098:997;;;9443:12;9482:212;9670:11;9607:40;:19;9635:11;9607:27;:40::i;:::-;9583:64;;:1;:64;:::i;:::-;9542:18;9483:36;:15;9507:11;9483:23;:36::i;:::-;:77;;;;:::i;:::-;:164;;;;:::i;:::-;:198;;;;:::i;9482:212::-;9443:265;;9904:7;9900:185;;;9931:28;;;;:12;:28;;;;;:50;;9976:5;;9931:28;:41;;:50;;9976:5;;-1:-1:-1;;;9931:50:2;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9931:50:2;;;;;;;-1:-1:-1;;;;;9931:50:2;;;;;;9900:185;;;10020:28;;;;:12;:28;;;;;:50;;10065:5;;10020:28;:41;;:50;;10065:5;;-1:-1:-1;;;10020:50:2;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10020:50:2;;;;;;;-1:-1:-1;;;;;10020:50:2;;;;;;9900:185;9225:870;8666:1435;;;8388:1713;;;;;;;:::o;10272:874::-;10425:6;10415:7;:16;:32;;;;;10446:1;10435:7;:12;;10415:32;10411:729;;;10463:12;10495:13;:6;10463:12;10495:10;:13::i;:::-;10485:23;;:7;:23;:::i;:::-;10691:25;;10463:46;;-1:-1:-1;10674:55:2;;:44;;10463:46;;-1:-1:-1;;;10691:25:2;;-1:-1:-1;;;;;10691:25:2;10674:44;;:9;:44::i;:::-;:53;:55::i;:::-;10620:25;:123;;:25;;:123;;;;-1:-1:-1;;;10620:123:2;;-1:-1:-1;;;;;10620:123:2;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10620:123:2;;;;;-1:-1:-1;;;;;10620:123:2;;;;;;10449:305;7555:555:13;7515:595;:::o;10411:729:2:-;10841:7;10832:6;:16;10828:312;;;10879:1;10868:7;:12;10864:266;;10978:18;:7;:16;:18::i;:::-;10958:17;:6;:15;:17::i;:::-;:38;;;;:::i;:::-;10900:25;:114;;:25;;:114;;;;-1:-1:-1;;;10900:114:2;;-1:-1:-1;;;;;10900:114:2;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10900:114:2;;;;;-1:-1:-1;;;;;10900:114:2;;;;;;7555:555:13;7515:595;:::o;10864:266:2:-;11090:24;:13;:6;11101:1;11090:10;:13::i;15166:3749:6:-;15339:21;15374:26;15414;15702:229;15749:25;:23;:25::i;:::-;15788:12;:25;-1:-1:-1;;;15788:25:6;;-1:-1:-1;;;;;15788:25:6;15827:11;15852:12;15878:11;15903:18;15702:33;:229::i;:::-;15681:250;-1:-1:-1;16192:11:6;16150:39;15681:250;16177:11;16150:26;:39::i;:::-;:53;16146:121;;;16226:30;;-1:-1:-1;;;16226:30:6;;;;;;;;;;;16146:121;16538:17;16558:179;16605:25;:23;:25::i;16558:179::-;16538:199;;16824:22;16836:9;16824:11;:22::i;:::-;17014:21;17173:197;17216:11;565:4:32;17326:9:6;17349:11;17173:29;:197::i;:::-;17045:325;-1:-1:-1;17045:325:6;;-1:-1:-1;17796:34:6;;-1:-1:-1;17045:325:6;;17796:34;:::i;:::-;17774:56;;;;:::i;:::-;;-1:-1:-1;18323:512:6;18823:11;18323:478;18391:11;18610:39;18631:18;17774:56;18610:39;:::i;:::-;18667:15;18700:32;:11;18667:15;18700;:32::i;:::-;18750:11;18779:8;18323:50;:478::i;:512::-;18307:528;;18846:62;;15166:3749;;;;;;;:::o;9893:3005::-;10293:30;;10172:312;;:287;;-1:-1:-1;;;10293:30:6;;-1:-1:-1;;;;;10293:30:6;10341:20;:13;10357:4;10341:20;:::i;:::-;10193:37;;-1:-1:-1;;;10193:37:6;;-1:-1:-1;;;;;10193:37:6;;;10412:11;10441:4;10172:103;:287::i;:312::-;10132:37;:352;;-1:-1:-1;;;;;10132:352:6;;;-1:-1:-1;;;10132:352:6;;;;;;;;;-1:-1:-1;10844:31:6;:19;:29;:31::i;:::-;10803:12;:26;:72;;;-1:-1:-1;;;;;10803:26:6;:72;:::i;:::-;10885:12;:43;;-1:-1:-1;;;;;;10885:43:6;-1:-1:-1;;;;;10885:43:6;;;;;;-1:-1:-1;10967:23:6;:11;:21;:23::i;:::-;10938:12;:52;;:25;;:52;;;;-1:-1:-1;;;10938:52:6;;-1:-1:-1;;;;;10938:52:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10938:52:6;;;;;-1:-1:-1;;;;;10938:52:6;;;;;;11034:23;:11;:21;:23::i;:::-;11000:30;:57;;:30;;:57;;;;-1:-1:-1;;;11000:57:6;;-1:-1:-1;;;;;11000:57:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11000:57:6;;;;;;;;;;;;;;;11659:28;;:12;11616:26;11659:28;;;;;11616:26;;11601:86;11584:180;;-1:-1:-1;11584:180:6;;11719:34;;-1:-1:-1;;;11719:34:6;;;;;;;;;;;11584:180;11856:25;11884:19;:17;:19::i;:::-;11913:31;11967;;;:12;:31;;;;;:44;11856:47;;-1:-1:-1;;;;11967:44:6;;;;12099:23;:11;:21;:23::i;:::-;12031:31;;;;:12;:31;;;;;:101;;:44;;:101;;;;-1:-1:-1;;;12031:101:6;;;;;:::i;:::-;;;-1:-1:-1;;;;;12031:101:6;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12213:31:6;;;:12;:31;;;;;:44;12142:125;;12031:101;12142:125;;;;-1:-1:-1;;;12213:44:6;;;;12142:19;:125::i;:::-;12684:23;12695:11;12684:10;:23::i;:::-;12679:106;;12730:44;;-1:-1:-1;;;12730:44:6;;;;;;;;;;;12679:106;12857:34;12879:11;12857:21;:34::i;19443:2515:4:-;19668:21;19691:7;20048:59;20110:35;20133:11;20110:22;:35::i;:::-;20048:97;;20155:28;20186:66;20236:6;20186:36;:66::i;:::-;20155:97;;20278:45;20306:16;:14;:16::i;:::-;20278:27;:45::i;:::-;20262:61;-1:-1:-1;20349:55:4;20262:61;20374:7;20383:20;20349:24;:55::i;:::-;20333:71;-1:-1:-1;20414:40:4;20431:22;20333:71;20431:22;:::i;:::-;20414:16;:40::i;:::-;20487:12;:26;-1:-1:-1;;;;;20487:26:4;;;20464:49;;20548:28;;;;20523:22;;;:53;-1:-1:-1;;;20608:25:4;;;;20586:19;;;:47;20487:26;20672:66;20464:6;20672:36;:66::i;:::-;20643:95;-1:-1:-1;21012:23:4;21058:67;:14;20643:95;21104:20;21058:25;:67::i;:::-;21012:123;-1:-1:-1;21165:40:4;21197:7;21172:14;21165:40;:::i;:::-;21145:60;;;;:::i;:::-;;;21238:1;21219:16;:20;21215:677;;;21412:29;21444:121;21501:17;21502:16;21501:17;:::i;:::-;21444:20;;21537:14;21444:31;:121::i;:::-;21412:153;-1:-1:-1;21579:38:4;21412:153;21579:38;;:::i;:::-;;;21631:47;21655:21;21631:16;:47::i;:::-;21692:152;21734:21;21773:28;21819:11;21692:24;:152::i;:::-;21858:23;;;21241:651;21215:677;21933:16;-1:-1:-1;;;;19443:2515:4;;;;;;;;:::o;2312:782:33:-;2548:11;2784:17;2804:150;2836:23;2873:13;2900:18;2932:12;2804:18;:150::i;:::-;2784:170;-1:-1:-1;2983:104:33;3026:47;2784:170;3045:17;3064:8;3026:18;:47::i;:::-;2984:15;2990:9;150:4:32;2984:15:33;:::i;:::-;2983:25;;:104::i;8679:1001:7:-;8793:53;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8793:53:7;8877:796;;;;;;;;8940:12;:26;-1:-1:-1;;;;;8940:26:7;;;8877:796;;8997:28;;;;8877:796;;;;-1:-1:-1;;;9053:25:7;;;;;8877:796;;;;;;;;;;;;;9148:18;8877:796;;;;9202:21;8877:796;;;;9250:12;8877:796;;;;9294:29;;;;8877:796;;;;9410:36;;8877:796;;8940:26;8877:796;;;9363:97;;9410:36;9363:29;:97::i;:::-;8877:796;;9493:30;;-1:-1:-1;;;;;;;;9493:30:7;;;;;;8877:796;;;;9611:37;;8877:796;;;;;9564:98;;9611:37;;;9564:29;:98::i;:::-;8877:796;;8862:811;8679:1001;-1:-1:-1;;8679:1001:7:o;58989:5242:33:-;59092:7;59242:20;59400:106;59455:7;:33;;;59400:7;:25;;;:33;;:106;;;;:::i;:::-;59318:32;;;;59285:24;;;;:66;;:32;:66::i;:::-;59265:255;;;;:::i;:::-;59242:278;;59530:30;59563:113;59608:7;:21;;;59643:7;:23;;;59563:31;:113::i;:::-;59530:146;;59706:1;59690:13;:17;59686:3447;;;60378:21;60403:291;60452:22;60492:7;:20;;;60530:7;:28;;;60582:7;:19;;;150:4:32;60576:25:33;;;;:::i;:::-;60619:7;:18;;;60655:7;:25;;;60403:31;:291::i;:::-;60375:319;-1:-1:-1;60724:41:33;;-1:-1:-1;60375:319:33;60750:13;60724:17;:41::i;:::-;60708:57;-1:-1:-1;60834:17:33;;60830:448;;60896:367;60988:22;61036:7;:20;;;61082:13;61127:7;:19;;;150:4:32;61121:25:33;;;;:::i;:::-;61172:7;:18;;;61216:7;:25;;;60896:66;:367::i;:::-;60871:392;;:7;;:392;;;;;:::i;:::-;;;-1:-1:-1;60830:448:33;59709:1579;59686:3447;;;61314:1;61298:13;:17;61294:1839;;;62119:14;62120:13;62119:14;:::i;:::-;62103:30;;62197:21;62222:244;62270:22;62310:7;:20;;;62354:7;:19;;;150:4:32;62348:25:33;;;;:::i;:::-;62391:7;:18;;;62427:7;:25;;;62222:30;:244::i;:::-;62194:272;-1:-1:-1;62496:41:33;;-1:-1:-1;62194:272:33;62522:13;62496:17;:41::i;:::-;62480:57;-1:-1:-1;62602:17:33;;62598:448;;62664:367;62756:22;62804:7;:20;;;62850:13;62895:7;:19;;;150:4:32;62889:25:33;;;;:::i;:::-;62940:7;:18;;;62984:7;:25;;;62664:66;:367::i;:::-;62639:392;;:7;;:392;;;;;:::i;:::-;;;-1:-1:-1;62598:448:33;63084:38;63109:13;63092;63084:38;:::i;:::-;63059:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;61294:1839:33;63266:19;63500:153;63563:7;:32;;;150:4:32;63557:38:33;;;;:::i;:::-;63617:18;;;;63500:24;;;;;:153;:35;:153::i;:::-;63308:143;63368:7;:33;;;150:4:32;63362:39:33;;;;:::i;:::-;63419:18;;;;63308:25;;;;;:143;:36;:143::i;:::-;63288:379;;;;:::i;:::-;63266:401;;63677:27;63751:12;63714:7;:21;;;63707:56;;;;:::i;:::-;63677:86;;63807:7;:28;;;63777:20;:59;63773:131;;;63859:34;;-1:-1:-1;;;63859:34:33;;;;;;;;;;;63773:131;63913:53;;;64196:28;;;;64172:52;;63945:20;64172:52;:::i;:::-;64165:59;58989:5242;-1:-1:-1;;;;;;58989:5242:33:o;15478:3325:4:-;15661:19;15684:1;15661:24;15657:61;;15478:3325;:::o;15657:61::-;15949:12;:26;-1:-1:-1;;;;;15949:26:4;16005:21;15989:37;;15985:109;;;16049:34;;-1:-1:-1;;;16049:34:4;;;;;;;;;;;15985:109;16263:27;16293:55;16329:19;16300:13;16293:55;:::i;:::-;16263:85;;16392:21;16362:20;:52;16358:124;;;16437:34;;-1:-1:-1;;;16437:34:4;;;;;;;;;;;16358:124;16520:41;16528:20;16520:39;:41::i;:::-;16491:12;:70;;-1:-1:-1;;;;;;16491:70:4;-1:-1:-1;;;;;16491:70:4;;;;;;;;;;17137:28;;-1:-1:-1;;17137:28:4;;17179:20;;;17175:488;;17264:139;17272:20;17334:15;17372:13;17264:40;:139::i;:::-;17215:202;;17175:488;;;17498:140;17568:16;17569:15;17568:16;:::i;:::-;17506:20;;17607:13;17498:40;:140::i;:::-;17473:179;;;:::i;:::-;17448:204;;17175:488;17703:33;:22;:31;:33::i;:::-;17672:28;:64;;-1:-1:-1;;;;;;17672:64:4;-1:-1:-1;;;;;17672:64:4;;;;;;:12;18578:25;18376:420;;:395;;-1:-1:-1;;;18578:25:4;;;18621:136;18689:13;18724:15;18621:46;:136::i;:::-;18376:160;18461:20;18500:22;18376:59;:160::i;:420::-;18348:12;:448;;-1:-1:-1;;;;;18348:448:4;;;-1:-1:-1;;;18348:448:4;;;;;;;;;-1:-1:-1;;;;;15478:3325:4:o;19075:4703:5:-;19246:25;19285:21;19320:26;19360:23;19397:27;19438:26;20112:21;20136:38;20160:13;20136:23;:38::i;:::-;20112:62;;20242:337;20314:25;:23;:25::i;:::-;20361:12;:25;-1:-1:-1;;;20361:25:5;;-1:-1:-1;;;;;20361:25:5;20408:11;20441:13;20476:12;20510:11;20543:18;20242:50;:337::i;:::-;20188:391;;-1:-1:-1;20188:391:5;-1:-1:-1;20188:391:5;-1:-1:-1;20634:17:5;20654:199;20705:25;:23;:25::i;20654:199::-;20634:219;;20867:22;20879:9;20867:11;:22::i;:::-;21130:21;21165:20;21343:159;21390:11;21419:13;21450:9;21477:11;21343:29;:159::i;:::-;21199:303;-1:-1:-1;21199:303:5;;-1:-1:-1;21199:303:5;-1:-1:-1;21737:32:5;21199:303;21737:32;;:::i;:::-;;-1:-1:-1;21980:28:5;21996:12;21980:13;:28;:::i;:::-;21963:45;;;;:::i;:::-;;-1:-1:-1;22392:34:5;22408:18;21963:45;22392:34;:::i;:::-;22371:55;;19677:2760;;;;22884:887;22945:13;22972:18;23004:15;23033:18;23512:12;:47;23541:17;23525:13;:33;;;;:::i;:::-;23512:47;;;;;;;;;;;-1:-1:-1;23512:47:5;:58;-1:-1:-1;;;;;23512:58:5;23604:15;:31;-1:-1:-1;23604:118:5;;23684:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;23684:38:5;23604:118;;;23654:11;23604:118;23757:4;22884:47;:887::i;:::-;19075:4703;;22717:1054;;-1:-1:-1;22717:1054:5;;-1:-1:-1;22717:1054:5;-1:-1:-1;22717:1054:5;;-1:-1:-1;19075:4703:5;-1:-1:-1;;;;19075:4703:5:o;11870:2273::-;12133:29;;-1:-1:-1;;;;;12133:29:5;12270:335;:306;12133:29;12445:20;:13;12461:4;12445:20;:::i;:::-;12295:36;;-1:-1:-1;;;;;12295:36:5;;12270:306;12520:11;12553:5;12270:114;:306::i;:335::-;12231:36;:374;;-1:-1:-1;;;;;;12231:374:5;-1:-1:-1;;;;;12231:374:5;;;;;;;;;;12759:23;:11;:21;:23::i;:::-;12723:59;;:17;:59;:::i;:::-;12675:29;:107;;-1:-1:-1;;;;;;12675:107:5;-1:-1:-1;;;;;12675:107:5;;;;;;;;;;-1:-1:-1;13344:31:5;:19;:29;:31::i;:::-;13314:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;13314:61:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13314:61:5;;;;;-1:-1:-1;;;;;13314:61:5;;;;;;13417:32;:21;:30;:32::i;:::-;13385:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13385:64:5;;;;;;;-1:-1:-1;;;;;13385:64:5;;;;;;13488:30;:18;:28;:30::i;:::-;13459:12;:59;;:25;;:59;;;;-1:-1:-1;;;13459:59:5;;-1:-1:-1;;;;;13459:59:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13459:59:5;;;;;;;;;;;;;;;13907:12;:26;13937:21;13907:26;;13899:59;;-1:-1:-1;13899:59:5;:161;;-1:-1:-1;14032:28:5;;:12;13989:26;14032:28;;;;;-1:-1:-1;;;;;13989:26:5;;;13974:86;13899:161;13882:255;;;14092:34;;-1:-1:-1;;;14092:34:5;;;;;;;;;;;5173:642:82;5592:23;5618:69;5646:4;5618:69;;;;;;;;;;;;;;;;;5626:5;-1:-1:-1;;;;;5618:27:82;;;:69;;;;;:::i;:::-;5592:95;;5705:10;:17;5726:1;5705:22;:56;;;;5742:10;5731:30;;;;;;;;;;;;:::i;:::-;5697:111;;;;-1:-1:-1;;;5697:111:82;;17059:2:165;5697:111:82;;;17041:21:165;17098:2;17078:18;;;17071:30;17137:34;17117:18;;;17110:62;-1:-1:-1;;;17188:18:165;;;17181:40;17238:19;;5697:111:82;16857:406:165;1355:203:82;1482:68;;-1:-1:-1;;;;;17526:15:165;;;1482:68:82;;;17508:34:165;17578:15;;17558:18;;;17551:43;17610:18;;;17603:34;;;1455:96:82;;1475:5;;-1:-1:-1;;;1505:27:82;17443:18:165;;1482:68:82;17268:375:165;7864:2095:1;8041:21;;8324:32;:11;8344;8324:19;:32::i;:::-;8308:48;-1:-1:-1;8366:15:1;8384:31;8308:48;8406:8;8384:21;:31::i;:::-;8366:49;-1:-1:-1;8441:31:1;8366:49;8457:14;8441:15;:31::i;:::-;8425:47;;8899:7;8895:557;;;8939:23;8949:13;8939:7;:23;:::i;:::-;8922:40;;;;:::i;:::-;;;8895:557;;;9418:23;9428:13;9418:7;:23;:::i;:::-;9401:40;;;;:::i;:::-;;;8895:557;9665:15;9651:11;:29;9647:306;;;9712:100;:13;9754:11;9783:15;9712:24;:100::i;:::-;9696:116;-1:-1:-1;9842:100:1;:13;9884:11;9913:15;9842:24;:100::i;:::-;9826:116;;9647:306;8087:1872;7864:2095;;;;;;;:::o;5385:642:33:-;5638:7;5758:262;5821:23;5862:13;5893:12;5923:18;5929:12;150:4:32;5923:18:33;:::i;:::-;5959:11;5988:18;5758:45;:262::i;:::-;5739:281;5385:642;-1:-1:-1;;;;;;;5385:642:33:o;1246:449::-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;1112:1260:8:-;1199:7;:21;-1:-1:-1;;;;;;;;1199:21:8;;;;;1254:12;1361:15;1332:26;1348:10;1199:21;1332:26;:::i;:::-;:44;1328:81;;;1392:7;;1112:1260;:::o;1328:81::-;1465:27;1495:7;1503:4;1495:13;;;;;;;;:::i;:::-;;;;;;;;;1549:18;;1495:13;;-1:-1:-1;1549:18:8;;;;1608:13;;;;-1:-1:-1;;;;;1608:13:8;;1674:30;1549:18;1674:15;:30;:::i;:::-;2101:7;:14;1658:46;;-1:-1:-1;1943:13:8;;;:27;;;1892:11;;2080:17;2088:4;2096:1;2080:17;:::i;:::-;2079:36;;;;:::i;:::-;2060:55;;2194:49;;;;;;;;2212:15;2194:49;;;;;;2238:3;-1:-1:-1;;;;;2194:49:8;;;;2174:7;2182:8;2174:17;;;;;;;;:::i;:::-;;;;;;;;;;:69;;;;;;-1:-1:-1;;;;;2174:69:8;;;;;;;;;;;:17;;:69;;;;2263:102;;;;;;;;;-1:-1:-1;;;;;2263:102:8;;;;;;2339:15;2263:102;;;;;;;;-1:-1:-1;;;2253:112:8;;:7;:112;-1:-1:-1;;;;;;;;1112:1260:8:o;12874:1582:2:-;13051:21;;14035:177;14202:9;14035:145;14168:11;14035:145;14136:9;565:4:32;14036:41:2;565:4:32;14066:10:2;14036:29;:41::i;:::-;:77;;;;:::i;14035:177::-;14019:193;-1:-1:-1;14412:37:2;14019:193;14434:14;14412:21;:37::i;:::-;14391:58;;12874:1582;;;;;;:::o;68721:340:33:-;68856:7;;68907:53;68944:16;68914:14;68907:53;:::i;:::-;68875:85;;69004:1;68978:22;:27;;68970:36;;;;;13582:678:32;13776:15;13807:9;13803:451;;;13842:152;13949:27;13964:12;13949;:27;:::i;:::-;13892:28;:12;13913:6;13892:20;:28::i;:::-;13843:30;:12;13864:8;13843:20;:30::i;:::-;:77;;;;:::i;:::-;13842:85;;:152::i;:::-;13832:162;;13803:451;;;14045:12;14029;:28;14025:42;;-1:-1:-1;14066:1:32;14059:8;;14025:42;14091:152;14198:27;14213:12;14198;:27;:::i;:::-;14141:28;:12;14162:6;14141:20;:28::i;:::-;14092:30;:12;14113:8;14092:20;:30::i;:::-;:77;;;;:::i;12079:313:2:-;12143:4;12342:42;:21;12372:11;12342:29;:42::i;:::-;12285:25;;:12;12212:26;12178:141;;12317:1;;-1:-1:-1;;;;;;;;12285:25:2;;;;;12179:132;;;12204:56;;12212:26;12248:11;12204:43;:56::i;:::-;12179:132;;;;:::i;:::-;12178:138;;:141::i;:::-;:207;;;12079:313;-1:-1:-1;;12079:313:2:o;2207:165:32:-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;4141:115::-;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;4671:846::-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:32;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:32;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:32;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;11297:490:2:-;11453:25;;11392:18;;;;11445:77;;-1:-1:-1;;;11453:25:2;;-1:-1:-1;;;;;11453:25:2;11501:11;11445:42;:77::i;:::-;11422:100;-1:-1:-1;11565:36:2;11580:21;11422:100;11565:36;:::i;:::-;11536:12;:26;-1:-1:-1;;;;;11536:26:2;:65;11532:222;;;11646:12;:26;11722:21;;11646:57;;11691:12;;-1:-1:-1;;;;;11646:26:2;:57;:::i;:::-;:97;;;;:::i;:::-;11617:126;;11532:222;11763:17;11297:490;;;:::o;25218:1730:4:-;25911:25;25955:1;25939:13;:17;:122;;26047:14;25939:122;;;25971:61;:14;25997:19;26018:13;25971:25;:61::i;:::-;25911:150;;26075:17;26096:1;26075:22;26071:35;;26099:7;;;26071:35;26314:17;26374:19;26407:48;;;26403:274;;;26488:28;;-1:-1:-1;26555:111:4;:19;26488:28;26635:17;26555:30;:111::i;:::-;26530:136;;26403:274;26719:26;:14;:24;:26::i;:::-;26686:13;:59;;:29;;:59;;;;-1:-1:-1;;;;;26686:59:4;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;26686:59:4;;;;;-1:-1:-1;;;;;26686:59:4;;;;;;26781:34;:22;:32;:34::i;:::-;26755:13;:60;;:22;;:60;;;;-1:-1:-1;;;26755:60:4;;-1:-1:-1;;;;;26755:60:4;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;26755:60:4;;;;;-1:-1:-1;;;;;26755:60:4;;;;;;26892:49;26917:22;26909:31;;;:::i;6709:368:7:-;6802:21;6835:24;6862:19;:17;:19::i;:::-;6835:46;;6923:16;6907:13;:32;:95;;7001:1;6907:95;;;6954:32;6970:16;6954:13;:32;:::i;:::-;6891:111;-1:-1:-1;7028:42:7;6891:111;7052:17;7028:23;:42::i;10814:1571:33:-;11146:23;;;11822:100;11857:30;11863:24;150:4:32;11857:30:33;:::i;:::-;11822:10;;11901:11;11822:21;:100::i;:::-;11807:115;-1:-1:-1;11949:44:33;:10;11968:24;11949:18;:44::i;:::-;11932:61;-1:-1:-1;12007:18:33;;12003:376;;12059:264;12122:23;12163:13;12194:14;12226:18;12232:12;150:4:32;12226:18:33;:::i;:::-;12262:11;12291:18;12059:45;:264::i;:::-;12041:282;-1:-1:-1;12337:31:33;12041:282;12337:31;;:::i;:::-;;;12003:376;10814:1571;;;;;;;;;;;:::o;18315:2337:2:-;18547:21;;;;19366:34;19390:10;565:4:32;19366:34:2;:::i;:::-;19350:50;-1:-1:-1;19426:141:2;19529:24;19555:11;19426:78;19493:10;19426:45;19350:50;19461:9;19426:34;:45::i;:141::-;19410:157;-1:-1:-1;19767:37:2;19410:157;19789:14;19767:21;:37::i;:::-;19746:58;-1:-1:-1;20234:12:2;20249:118;20284:48;20308:24;565:4:32;20284:48:2;:::i;:::-;20249:10;;20346:11;20249:21;:118::i;:::-;20234:133;-1:-1:-1;20392:22:2;20234:133;20405:8;20392:12;:22::i;:::-;20377:37;-1:-1:-1;20609:36:2;20377:37;20630:14;20609:20;:36::i;:::-;20589:56;;18696:1956;18315:2337;;;;;;;;;:::o;65520:1230:33:-;65762:21;;66104:186;66140:16;66246:34;:15;66268:11;66246:21;:34::i;:::-;66104:11;;:186;:22;:186::i;:::-;66083:207;-1:-1:-1;66511:45:33;:11;66534:8;66544:11;66511:22;:45::i;:::-;66497:59;;;;:::i;:::-;;;66584:12;66571:10;:25;66567:147;;;66678:25;66691:12;66678:10;:25;:::i;:::-;66662:41;;66567:147;66723:20;65520:1230;;;;;;;;:::o;14234:2717::-;14534:7;14543;14552;14561:6;14569:7;15503:27;15563:15;15544:16;:34;15540:1219;;;15779:7;15775:181;;;15823:118;:14;15870:16;15908:15;15823:25;:118::i;:::-;15806:135;;15775:181;16031:111;:19;16079:16;16113:15;16031:30;:111::i;:::-;16009:133;-1:-1:-1;16250:70:33;16303:16;16009:133;16250:70;:::i;:::-;16211:109;-1:-1:-1;16353:108:33;:16;16398;16432:15;16353:27;:108::i;:::-;16334:127;-1:-1:-1;16497:111:33;:19;16545:16;16579:15;16497:30;:111::i;:::-;16475:133;;15540:1219;;;16678:70;16731:16;16685:19;16678:70;:::i;:::-;16639:109;;15540:1219;16790:14;;16818:19;;16851:16;;14234:2717;-1:-1:-1;;;;;;;;14234:2717:33:o;994:219:34:-;1045:8;-1:-1:-1;;;;;;1071:21:34;;;;;:46;;-1:-1:-1;;;;;;1096:21:34;;;1071:46;1065:119;;1141:32;;-1:-1:-1;;;1141:32:34;;;;;;;;;;;15261:101:32;15317:6;15346:1;15342;:5;:13;;15354:1;15342:13;;;-1:-1:-1;15350:1:32;;15261:101;-1:-1:-1;15261:101:32:o;14987:::-;15043:6;15072:1;15068;:5;:13;;15080:1;15068:13;;9270:637:33;9521:7;9641:259;9704:23;9745:13;9776:9;9803:18;9809:12;150:4:32;9803:18:33;:::i;:::-;9839:11;9868:18;9641:45;:259::i;15102:2464:2:-;15333:21;;;;16118:34;16142:10;565:4:32;16118:34:2;:::i;:::-;16097:55;-1:-1:-1;16178:137:2;16277:24;16303:11;16178:74;16242:9;16178:42;16097:55;16210:9;16178:31;:42::i;:137::-;16162:153;-1:-1:-1;16515:37:2;16162:153;16537:14;16515:21;:37::i;:::-;16494:58;-1:-1:-1;16982:12:2;16997:117;17031:48;17055:24;565:4:32;17031:48:2;:::i;16997:117::-;16982:132;-1:-1:-1;17139:22:2;16982:132;17152:8;17139:12;:22::i;:::-;17124:37;-1:-1:-1;17523:36:2;17124:37;17544:14;17523:20;:36::i;:::-;17501:58;;;;:::i;:::-;;;15443:2123;;15102:2464;;;;;;;;:::o;14710:104:32:-;14768:7;14798:1;14794;:5;:13;;14806:1;14794:13;;24101:580:4;24272:20;24295:95;24345:35;24368:11;24345:22;:35::i;24295:95::-;24400:21;24424:34;;;:12;:34;;-1:-1:-1;;;;;;;;;;;24424:34:4;24272:118;;-1:-1:-1;24400:21:4;24424:77;;24473:28;;24424:77;:::i;:::-;24400:101;;24511:163;24550:19;24583:12;24609:13;24636:28;24511:25;:163::i;2726:748:32:-;2840:9;3105:1;-1:-1:-1;;3088:19:32;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:32;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;7277:444:7:-;7376:21;7409:24;565:4:32;7436:19:7;:17;:19::i;:::-;:43;;;;:::i;:::-;7409:70;;7521:16;7505:13;:32;:95;;7599:1;7505:95;;;7552:32;7568:16;7552:13;:32;:::i;:::-;7489:111;-1:-1:-1;7626:88:7;7663:41;565:4:32;7663:17:7;:41;:::i;:::-;7627:13;;7626:23;:88::i;9241:983:35:-;9414:7;;;9880:13;:1;9890:2;9880:9;:13::i;:::-;9863:30;;9903:9;9915:47;9942:6;9950:2;9954:1;9957;9960;9915:26;:47::i;:::-;9903:59;-1:-1:-1;9972:16:35;9991:105;10054:32;565:4:32;10084:1:35;10054:29;:32::i;:::-;9996:39;10011:23;10032:1;10011:16;:2;10022:4;10011:10;:16::i;:23::-;9996:6;;:14;:39::i;:::-;9992:43;;:1;:43;:::i;9991:105::-;9972:124;-1:-1:-1;10194:8:35;10198:4;10194:1;:8;:::i;:::-;10204:12;10215:1;10204:8;:12;:::i;:::-;10186:31;;;;;;;9241:983;;;;;;;;;;:::o;14433:104:32:-;14491:7;14521:1;14517;:5;:13;;14529:1;14517:13;;4871:481:35;5056:14;5082:12;5124:136;5172:1;5187;5202:2;5218:1;5233;5248:2;5124:34;:136::i;:::-;5104:156;;-1:-1:-1;5104:156:35;-1:-1:-1;5104:156:35;5270:76;;5305:30;;-1:-1:-1;;;5305:30:35;;;;;;;;;;;7623:1046;7773:7;;;8276:13;:1;8286:2;8276:9;:13::i;:::-;8259:30;;8299:9;8311:47;8338:6;8346:2;8350:1;8353;8356;8311:26;:47::i;:::-;8299:59;-1:-1:-1;8368:16:35;8387:103;8448:32;565:4:32;8478:1:35;8448:29;:32::i;:::-;8388:41;8398:30;565:4:32;8398:6:35;:30;:::i;:::-;8388:1;;:9;:41::i;8387:103::-;8368:122;-1:-1:-1;8500:16:35;8519:20;8368:122;8536:2;8519:16;:20::i;:::-;8500:39;-1:-1:-1;8635:12:35;8646:1;8500:39;8635:12;:::i;:::-;8649;8653:8;8649:1;:12;:::i;:::-;8627:35;;;;;;;;7623:1046;;;;;;;;:::o;3358:892::-;3543:7;;3595:13;:1;3605:2;3595:9;:13::i;:::-;3578:30;;3669:9;3681:47;3708:6;3716:2;3720:1;3723;3726;3681:26;:47::i;:::-;3669:59;-1:-1:-1;3770:15:35;3783:1;3771:6;3775:2;3771:1;:6;:::i;3770:15::-;3766:19;-1:-1:-1;3884:10:35;3897:81;3938:30;565:4:32;3966:1:35;3938:27;:30::i;:::-;3897:23;3913:6;3898:5;3902:1;3898;:5;:::i;3897:81::-;3884:94;-1:-1:-1;4088:14:35;3884:94;4099:2;4088:10;:14::i;:::-;4083:19;-1:-1:-1;4237:6:35;4242:1;4083:19;4237:6;:::i;:::-;4230:13;3358:892;-1:-1:-1;;;;;;;;;;3358:892:35:o;6971:1627:33:-;7301:23;;;7880:99;7914:30;7920:24;150:4:32;7914:30:33;:::i;7880:99::-;7864:115;-1:-1:-1;7993:28:33;;7989:603;;8109:43;:9;8127:24;8109:17;:43::i;:::-;8092:60;-1:-1:-1;8271:264:33;8334:23;8375:13;8092:60;8438:18;8444:12;150:4:32;8438:18:33;:::i;:::-;8474:11;8503:18;8271:45;:264::i;4108:223:83:-;4241:12;4272:52;4294:6;4302:4;4308:1;4311:12;4272:21;:52::i;:::-;4265:59;4108:223;-1:-1:-1;;;;4108:223:83:o;2008:837:35:-;2193:7;;2245:13;:1;2255:2;2245:9;:13::i;:::-;2228:30;;2319:9;2331:47;2358:6;2366:2;2370:1;2373;2376;2331:26;:47::i;:::-;2319:59;-1:-1:-1;2427:25:35;2450:1;2427:18;2438:6;2442:2;2438:1;:6;:::i;:::-;2427:2;;:10;:18::i;:25::-;2423:29;-1:-1:-1;2512:17:35;:6;2423:29;2512:14;:17::i;:::-;2508:21;-1:-1:-1;2644:10:35;2657:43;2669:30;565:4:32;2697:1:35;2669:27;:30::i;:::-;2658:5;2662:1;2658;:5;:::i;2657:43::-;2644:56;-1:-1:-1;2832:6:35;2644:56;2832:1;:6;:::i;9632:3592:32:-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:32;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:32;-1:-1:-1;;;;;;;10158:1:32;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:32;11255:5;;11254:13;;-1:-1:-1;;11253:50:32;11323:5;;11322:13;;;-1:-1:-1;;11321:50:32;11389:5;-1:-1:-1;;11389:46:32;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:32;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;5773:3347::-;5819:8;-1:-1:-1;;5996:1:32;:26;5992:40;;-1:-1:-1;6031:1:32;;5773:3347;-1:-1:-1;5773:3347:32:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:32;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:32;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:32;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:32;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:32;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:32;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:32;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:32;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:32:o;3750:115::-;3810:7;3837:20;3846:1;3849;3852:4;3837:8;:20::i;10669:302:35:-;10835:7;10956:8;:1;10962;10956:5;:8::i;:::-;10917:36;10932:20;10950:1;10932:13;:2;10943:1;10932:10;:13::i;:20::-;10917:6;;:14;:36::i;:::-;:47;;;;:::i;6050:1039::-;6239:14;;;6312:13;:1;6322:2;6312:9;:13::i;:::-;6295:30;;6386:9;6398:47;6425:6;6433:2;6437:1;6440;6443;6398:26;:47::i;:::-;6386:59;-1:-1:-1;6487:15:35;6500:1;6488:6;6492:2;6488:1;:6;:::i;6487:15::-;6483:19;;6520:1;6516;:5;6512:53;;;6545:1;6548:5;6537:17;;;;;;;;6512:53;6663:10;6676:81;6717:30;565:4:32;6745:1:35;6717:27;:30::i;:::-;6676:23;6692:6;6677:5;6681:1;6677;:5;:::i;6676:81::-;6663:94;-1:-1:-1;6867:14:35;6663:94;6878:2;6867:10;:14::i;:::-;6862:19;;7015:2;7011:1;:6;7007:52;;;7042:6;7046:2;7042:1;:6;:::i;:::-;7033:15;;7007:52;7078:4;7068:14;;6269:820;;;6050:1039;;;;;;;;;:::o;5165:446:83:-;5330:12;5387:5;5362:21;:30;;5354:81;;;;-1:-1:-1;;;5354:81:83;;18048:2:165;5354:81:83;;;18030:21:165;18087:2;18067:18;;;18060:30;18126:34;18106:18;;;18099:62;-1:-1:-1;;;18177:18:165;;;18170:36;18223:19;;5354:81:83;17846:402:165;5354:81:83;5446:12;5460:23;5487:6;-1:-1:-1;;;;;5487:11:83;5506:5;5513:4;5487:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5445:73;;;;5535:69;5562:6;5570:7;5579:10;5591:12;7851;7879:7;7875:418;;;7906:10;:17;7927:1;7906:22;7902:286;;-1:-1:-1;;;;;1702:19:83;;;8113:60;;;;-1:-1:-1;;;8113:60:83;;18747:2:165;8113:60:83;;;18729:21:165;18786:2;18766:18;;;18759:30;18825:31;18805:18;;;18798:59;18874:18;;8113:60:83;18545:353:165;8113:60:83;-1:-1:-1;8208:10:83;8201:17;;7875:418;8249:33;8257:10;8269:12;8980:17;;:21;8976:379;;9208:10;9202:17;9264:15;9251:10;9247:2;9243:19;9236:44;8976:379;9331:12;9324:20;;-1:-1:-1;;;9324:20:83;;;;;;;;:::i;14:271:165:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:165:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:165;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:165;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:165;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;1944:139::-;-1:-1:-1;;;;;2027:31:165;;2017:42;;2007:70;;2073:1;2070;2063:12;2007:70;1944:139;:::o;2088:270::-;2162:6;2215:2;2203:9;2194:7;2190:23;2186:32;2183:52;;;2231:1;2228;2221:12;2183:52;2270:9;2257:23;2289:39;2322:5;2289:39;:::i;2363:118::-;2449:5;2442:13;2435:21;2428:5;2425:32;2415:60;;2471:1;2468;2461:12;2486:241;2542:6;2595:2;2583:9;2574:7;2570:23;2566:32;2563:52;;;2611:1;2608;2601:12;2563:52;2650:9;2637:23;2669:28;2691:5;2669:28;:::i;2732:596::-;2824:6;2832;2840;2848;2856;2909:3;2897:9;2888:7;2884:23;2880:33;2877:53;;;2926:1;2923;2916:12;2877:53;2962:9;2949:23;2939:33;;3019:2;3008:9;3004:18;2991:32;2981:42;;3070:2;3059:9;3055:18;3042:32;3032:42;;3124:2;3113:9;3109:18;3096:32;3137:39;3170:5;3137:39;:::i;:::-;3195:5;-1:-1:-1;3252:3:165;3237:19;;3224:33;3266:30;3224:33;3266:30;:::i;:::-;3315:7;3305:17;;;2732:596;;;;;;;;:::o;3586:367::-;3649:8;3659:6;3713:3;3706:4;3698:6;3694:17;3690:27;3680:55;;3731:1;3728;3721:12;3680:55;-1:-1:-1;3754:20:165;;3797:18;3786:30;;3783:50;;;3829:1;3826;3819:12;3783:50;3866:4;3858:6;3854:17;3842:29;;3926:3;3919:4;3909:6;3906:1;3902:14;3894:6;3890:27;3886:38;3883:47;3880:67;;;3943:1;3940;3933:12;3958:1066;4098:6;4106;4114;4122;4130;4138;4191:3;4179:9;4170:7;4166:23;4162:33;4159:53;;;4208:1;4205;4198:12;4159:53;4247:9;4234:23;4266:39;4299:5;4266:39;:::i;:::-;4324:5;-1:-1:-1;4381:2:165;4366:18;;4353:32;4394:41;4353:32;4394:41;:::i;:::-;4454:7;-1:-1:-1;4512:2:165;4497:18;;4484:32;4535:18;4565:14;;;4562:34;;;4592:1;4589;4582:12;4562:34;4631:70;4693:7;4684:6;4673:9;4669:22;4631:70;:::i;:::-;4720:8;;-1:-1:-1;4605:96:165;-1:-1:-1;4808:2:165;4793:18;;4780:32;;-1:-1:-1;4824:16:165;;;4821:36;;;4853:1;4850;4843:12;4821:36;;4892:72;4956:7;4945:8;4934:9;4930:24;4892:72;:::i;:::-;3958:1066;;;;-1:-1:-1;3958:1066:165;;-1:-1:-1;3958:1066:165;;4983:8;;3958:1066;-1:-1:-1;;;3958:1066:165:o;5029:541::-;5115:6;5123;5131;5139;5192:3;5180:9;5171:7;5167:23;5163:33;5160:53;;;5209:1;5206;5199:12;5160:53;5245:9;5232:23;5222:33;;5305:2;5294:9;5290:18;5277:32;5318:39;5351:5;5318:39;:::i;:::-;5376:5;-1:-1:-1;5433:2:165;5418:18;;5405:32;5446:41;5405:32;5446:41;:::i;:::-;5029:541;;;;-1:-1:-1;5506:7:165;;5560:2;5545:18;5532:32;;-1:-1:-1;;5029:541:165:o;5575:527::-;5658:6;5666;5674;5682;5735:3;5723:9;5714:7;5710:23;5706:33;5703:53;;;5752:1;5749;5742:12;5703:53;5788:9;5775:23;5765:33;;5845:2;5834:9;5830:18;5817:32;5807:42;;5899:2;5888:9;5884:18;5871:32;5912:39;5945:5;5912:39;:::i;:::-;5970:5;-1:-1:-1;6027:2:165;6012:18;;5999:32;6040:30;5999:32;6040:30;:::i;:::-;5575:527;;;;-1:-1:-1;5575:527:165;;-1:-1:-1;;5575:527:165:o;6471:541::-;6557:6;6565;6573;6581;6634:3;6622:9;6613:7;6609:23;6605:33;6602:53;;;6651:1;6648;6641:12;6602:53;6687:9;6674:23;6664:33;;6747:2;6736:9;6732:18;6719:32;6760:39;6793:5;6760:39;:::i;:::-;6818:5;-1:-1:-1;6870:2:165;6855:18;;6842:32;;-1:-1:-1;6926:2:165;6911:18;;6898:32;6939:41;6898:32;6939:41;:::i;7017:390::-;7082:6;7090;7143:2;7131:9;7122:7;7118:23;7114:32;7111:52;;;7159:1;7156;7149:12;7111:52;7198:9;7185:23;7217:39;7250:5;7217:39;:::i;:::-;7275:5;-1:-1:-1;7332:2:165;7317:18;;7304:32;7345:30;7304:32;7345:30;:::i;:::-;7394:7;7384:17;;;7017:390;;;;;:::o;7412:912::-;7520:6;7528;7536;7544;7552;7560;7568;7621:3;7609:9;7600:7;7596:23;7592:33;7589:53;;;7638:1;7635;7628:12;7589:53;7677:9;7664:23;7696:39;7729:5;7696:39;:::i;:::-;7754:5;-1:-1:-1;7811:2:165;7796:18;;7783:32;7824:41;7783:32;7824:41;:::i;:::-;7884:7;-1:-1:-1;7943:2:165;7928:18;;7915:32;7956:30;7915:32;7956:30;:::i;:::-;8005:7;-1:-1:-1;8059:2:165;8044:18;;8031:32;;-1:-1:-1;8115:3:165;8100:19;;8087:33;8164:4;8151:18;;8139:31;;8129:59;;8184:1;8181;8174:12;8129:59;7412:912;;;;-1:-1:-1;7412:912:165;;;;8207:7;8261:3;8246:19;;8233:33;;-1:-1:-1;8313:3:165;8298:19;;;8285:33;;7412:912;-1:-1:-1;;7412:912:165:o;8329:391::-;8406:6;8414;8422;8475:2;8463:9;8454:7;8450:23;8446:32;8443:52;;;8491:1;8488;8481:12;8443:52;8527:9;8514:23;8504:33;;8587:2;8576:9;8572:18;8559:32;8600:39;8633:5;8600:39;:::i;:::-;8329:391;;8658:5;;-1:-1:-1;;;8710:2:165;8695:18;;;;8682:32;;8329:391::o;8985:691::-;9080:6;9088;9096;9104;9112;9165:3;9153:9;9144:7;9140:23;9136:33;9133:53;;;9182:1;9179;9172:12;9133:53;9218:9;9205:23;9195:33;;9278:2;9267:9;9263:18;9250:32;9291:39;9324:5;9291:39;:::i;:::-;9349:5;-1:-1:-1;9406:2:165;9391:18;;9378:32;9419:41;9378:32;9419:41;:::i;:::-;9479:7;-1:-1:-1;9533:2:165;9518:18;;9505:32;;-1:-1:-1;9589:3:165;9574:19;;9561:33;9603:41;9561:33;9603:41;:::i;9681:180::-;9740:6;9793:2;9781:9;9772:7;9768:23;9764:32;9761:52;;;9809:1;9806;9799:12;9761:52;-1:-1:-1;9832:23:165;;9681:180;-1:-1:-1;9681:180:165:o;10074:184::-;10144:6;10197:2;10185:9;10176:7;10172:23;10168:32;10165:52;;;10213:1;10210;10203:12;10165:52;-1:-1:-1;10236:16:165;;10074:184;-1:-1:-1;10074:184:165:o;10263:334::-;10465:2;10447:21;;;10504:2;10484:18;;;10477:30;-1:-1:-1;;;10538:2:165;10523:18;;10516:40;10588:2;10573:18;;10263:334::o;10602:127::-;10663:10;10658:3;10654:20;10651:1;10644:31;10694:4;10691:1;10684:15;10718:4;10715:1;10708:15;10734:128;10801:9;;;10822:11;;;10819:37;;;10836:18;;:::i;10867:125::-;10932:9;;;10953:10;;;10950:36;;;10966:18;;:::i;11321:127::-;11382:10;11377:3;11373:20;11370:1;11363:31;11413:4;11410:1;11403:15;11437:4;11434:1;11427:15;11453:168;11526:9;;;11557;;11574:15;;;11568:22;;11554:37;11544:71;;11595:18;;:::i;11758:200::-;-1:-1:-1;;;;;11894:10:165;;;11882;;;11878:27;;11917:12;;;11914:38;;;11932:18;;:::i;:::-;11914:38;11758:200;;;;:::o;13369:135::-;13408:3;13429:17;;;13426:43;;13449:18;;:::i;:::-;-1:-1:-1;13496:1:165;13485:13;;13369:135::o;13701:127::-;13762:10;13757:3;13753:20;13750:1;13743:31;13793:4;13790:1;13783:15;13817:4;13814:1;13807:15;13833:112;13865:1;13891;13881:35;;13896:18;;:::i;:::-;-1:-1:-1;13930:9:165;;13833:112::o;14508:197::-;-1:-1:-1;;;;;14630:10:165;;;14642;;;14626:27;;14665:11;;;14662:37;;;14679:18;;:::i;14710:245::-;14808:2;14778:17;;;14797;;;;14774:41;-1:-1:-1;;;;;14830:44:165;;-1:-1:-1;;;;;;14876:49:165;;14827:99;14824:125;;;14929:18;;:::i;15786:249::-;15886:2;15875:17;;;15856;;;;15852:41;-1:-1:-1;;;;;;15908:50:165;;-1:-1:-1;;;;;15960:45:165;;15905:101;15902:127;;;16009:18;;:::i;16040:200::-;16106:9;;;16079:4;16134:9;;16162:10;;16174:12;;;16158:29;16197:12;;;16189:21;;16155:56;16152:82;;;16214:18;;:::i;16245:136::-;16280:3;-1:-1:-1;;;16301:22:165;;16298:48;;16326:18;;:::i;:::-;-1:-1:-1;16366:1:165;16362:13;;16245:136::o;16386:216::-;16450:9;;;16478:11;;;16425:3;16508:9;;16536:10;;16532:19;;16561:10;;16553:19;;16529:44;16526:70;;;16576:18;;:::i;:::-;16526:70;;16386:216;;;;:::o;16607:245::-;16674:6;16727:2;16715:9;16706:7;16702:23;16698:32;16695:52;;;16743:1;16740;16733:12;16695:52;16775:9;16769:16;16794:28;16816:5;16794:28;:::i;17648:193::-;17687:1;17713;17703:35;;17718:18;;:::i;:::-;-1:-1:-1;;;17754:18:165;;-1:-1:-1;;17774:13:165;;17750:38;17747:64;;;17791:18;;:::i;:::-;-1:-1:-1;17825:10:165;;17648:193::o;18253:287::-;18382:3;18420:6;18414:13;18436:66;18495:6;18490:3;18483:4;18475:6;18471:17;18436:66;:::i;:::-;18518:16;;;;;18253:287;-1:-1:-1;;18253:287:165:o;18903:396::-;19052:2;19041:9;19034:21;19015:4;19084:6;19078:13;19127:6;19122:2;19111:9;19107:18;19100:34;19143:79;19215:6;19210:2;19199:9;19195:18;19190:2;19182:6;19178:15;19143:79;:::i;:::-;19283:2;19262:15;-1:-1:-1;;19258:29:165;19243:45;;;;19290:2;19239:54;;18903:396;-1:-1:-1;;18903:396:165:o",
    "linkReferences": {},
    "immutableReferences": {
      "12307": [
        {
          "start": 902,
          "length": 32
        },
        {
          "start": 4926,
          "length": 32
        }
      ],
      "13140": [
        {
          "start": 11881,
          "length": 32
        }
      ],
      "13142": [
        {
          "start": 11942,
          "length": 32
        }
      ],
      "4548": [
        {
          "start": 8209,
          "length": 32
        }
      ],
      "4551": [
        {
          "start": 7319,
          "length": 32
        },
        {
          "start": 7488,
          "length": 32
        },
        {
          "start": 8635,
          "length": 32
        }
      ],
      "4554": [
        {
          "start": 2204,
          "length": 32
        },
        {
          "start": 2946,
          "length": 32
        },
        {
          "start": 4278,
          "length": 32
        },
        {
          "start": 5548,
          "length": 32
        },
        {
          "start": 6705,
          "length": 32
        },
        {
          "start": 7763,
          "length": 32
        },
        {
          "start": 8792,
          "length": 32
        },
        {
          "start": 9085,
          "length": 32
        },
        {
          "start": 12375,
          "length": 32
        },
        {
          "start": 12970,
          "length": 32
        },
        {
          "start": 16489,
          "length": 32
        },
        {
          "start": 18937,
          "length": 32
        },
        {
          "start": 20131,
          "length": 32
        }
      ],
      "4557": [
        {
          "start": 2979,
          "length": 32
        },
        {
          "start": 6738,
          "length": 32
        },
        {
          "start": 9252,
          "length": 32
        },
        {
          "start": 9391,
          "length": 32
        },
        {
          "start": 12173,
          "length": 32
        },
        {
          "start": 13720,
          "length": 32
        },
        {
          "start": 15110,
          "length": 32
        },
        {
          "start": 16303,
          "length": 32
        }
      ],
      "4560": [
        {
          "start": 2074,
          "length": 32
        },
        {
          "start": 2912,
          "length": 32
        },
        {
          "start": 6672,
          "length": 32
        },
        {
          "start": 9286,
          "length": 32
        },
        {
          "start": 9358,
          "length": 32
        },
        {
          "start": 12207,
          "length": 32
        },
        {
          "start": 13754,
          "length": 32
        },
        {
          "start": 15034,
          "length": 32
        },
        {
          "start": 16337,
          "length": 32
        }
      ],
      "4563": [
        {
          "start": 2706,
          "length": 32
        },
        {
          "start": 2781,
          "length": 32
        },
        {
          "start": 3057,
          "length": 32
        },
        {
          "start": 15072,
          "length": 32
        },
        {
          "start": 15886,
          "length": 32
        },
        {
          "start": 15965,
          "length": 32
        },
        {
          "start": 16986,
          "length": 32
        },
        {
          "start": 18251,
          "length": 32
        },
        {
          "start": 18528,
          "length": 32
        },
        {
          "start": 18588,
          "length": 32
        }
      ],
      "4566": [
        {
          "start": 1857,
          "length": 32
        },
        {
          "start": 4008,
          "length": 32
        },
        {
          "start": 5409,
          "length": 32
        },
        {
          "start": 6089,
          "length": 32
        },
        {
          "start": 6575,
          "length": 32
        },
        {
          "start": 7574,
          "length": 32
        }
      ],
      "4577": [
        {
          "start": 17979,
          "length": 32
        },
        {
          "start": 19125,
          "length": 32
        },
        {
          "start": 19717,
          "length": 32
        }
      ],
      "4580": [
        {
          "start": 12497,
          "length": 32
        },
        {
          "start": 13941,
          "length": 32
        },
        {
          "start": 17375,
          "length": 32
        },
        {
          "start": 19246,
          "length": 32
        },
        {
          "start": 19830,
          "length": 32
        }
      ],
      "4583": [
        {
          "start": 17419,
          "length": 32
        },
        {
          "start": 18047,
          "length": 32
        },
        {
          "start": 19169,
          "length": 32
        },
        {
          "start": 19290,
          "length": 32
        },
        {
          "start": 19761,
          "length": 32
        },
        {
          "start": 19874,
          "length": 32
        }
      ],
      "4601": [
        {
          "start": 1369,
          "length": 32
        },
        {
          "start": 1641,
          "length": 32
        },
        {
          "start": 3273,
          "length": 32
        },
        {
          "start": 3375,
          "length": 32
        }
      ],
      "4604": [
        {
          "start": 17647,
          "length": 32
        }
      ],
      "6": [
        {
          "start": 343,
          "length": 32
        }
      ],
      "6047": [
        {
          "start": 8277,
          "length": 32
        },
        {
          "start": 8436,
          "length": 32
        },
        {
          "start": 8566,
          "length": 32
        },
        {
          "start": 10956,
          "length": 32
        },
        {
          "start": 11085,
          "length": 32
        },
        {
          "start": 11149,
          "length": 32
        },
        {
          "start": 11296,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "PERMIT_TYPEHASH()": "30adf81f",
    "addLiquidity(uint256,uint256,uint256,address,bool)": "c326a903",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,address,bool)": "fa3fcea7",
    "closeShort(uint256,uint256,uint256,address,bool)": "6f8c3a5b",
    "collectGovernanceFee(bool)": "2787d595",
    "initialize(uint256,uint256,address,bool)": "2002b333",
    "openLong(uint256,uint256,uint256,address,bool)": "06dae82a",
    "openShort(uint256,uint256,uint256,address,bool)": "a179403b",
    "pause(bool)": "02329a29",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
    "redeemWithdrawalShares(uint256,uint256,address,bool)": "4536ee2f",
    "removeLiquidity(uint256,uint256,address,bool)": "c23632a7",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "sweep(address)": "01681a62",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_dataProvider\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_linkerFactory\",\"type\":\"address\"},{\"internalType\":\"contract IERC4626\",\"name\":\"_pool\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"_targets\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ApprovalFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BaseBufferExceedsShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"asUnderlying\",\"type\":\"bool\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.\",\"_contribution\":\"The amount of base to supply.\",\"_destination\":\"The address which will hold the LP shares\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\"},\"returns\":{\"lpShares\":\"The number of LP tokens created\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account\",\"ids\":\"The array of token ids of the asset to transfer\",\"to\":\"the destination account\",\"values\":\"The amount of each token to transfer\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.\",\"_bondAmount\":\"The amount of longs to close.\",\"_destination\":\"The address which will receive the proceeds of this sale\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum base the user should receive from this trade\"},\"returns\":{\"_0\":\"The amount of underlying the user receives.\"}},\"closeShort(uint256,uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.\",\"_bondAmount\":\"The amount of shorts to close.\",\"_destination\":\"The address that receives the short proceeds.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade.\"},\"returns\":{\"_0\":\"The amount of base tokens produced by closing this short\"}},\"collectGovernanceFee(bool)\":{\"params\":{\"asUnderlying\":\"Indicates if the fees should be paid in underlying or yielding token\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\",\"_dataProvider\":\"The address of the data provider.\",\"_linkerCodeHash\":\"The hash of the ERC20 linker contract's        constructor code.\",\"_linkerFactory\":\"The factory which is used to deploy the ERC20        linker contracts.\",\"_pool\":\"The ERC4626 compatible yield source\",\"_targets\":\"The addresses that can be swept by governance. This        allows governance to collect rewards derived from incentive        programs while also preventing edge cases where `sweep` is used        to access the pool or base tokens.\"}},\"initialize(uint256,uint256,address,bool)\":{\"params\":{\"_apr\":\"The target APR.\",\"_asUnderlying\":\"If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.\",\"_contribution\":\"The amount of base to supply.\",\"_destination\":\"The destination of the LP shares.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.\",\"_baseAmount\":\"The amount of base to use when trading.\",\"_destination\":\"The address which will receive the bonds\",\"_minOutput\":\"The minium number of bonds to receive.\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\"},\"returns\":{\"bondProceeds\":\"The amount of bonds the user received\",\"maturityTime\":\"The maturity time of the bonds.\"}},\"openShort(uint256,uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.\",\"_bondAmount\":\"The amount of bonds to short.\",\"_destination\":\"The address which gets credited with share tokens\",\"_maxDeposit\":\"The most the user expects to deposit for this trade\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\"},\"returns\":{\"maturityTime\":\"The maturity time of the short.\",\"traderDeposit\":\"The amount the user deposited for this trade.\"}},\"pause(bool)\":{\"params\":{\"status\":\"True to pause all deposits and false to unpause them\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.\",\"params\":{\"_approved\":\"a boolean of the approval status to set to\",\"deadline\":\"the timestamp which the signature must be submitted by to be valid\",\"owner\":\"the owner of the account which is having the new approval set\",\"r\":\"The r component of the ECDSA signature\",\"s\":\"The s component of the ECDSA signature\",\"spender\":\"the address which will be allowed to spend owner's tokens\",\"v\":\"Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28\"}},\"redeemWithdrawalShares(uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"If true the user is paid in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.\",\"_destination\":\"The address which receive the withdraw proceeds\",\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_shares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"baseProceeds\":\"The amount of base the LP received.\",\"sharesRedeemed\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"If true the user is paid in underlying if false        the contract transfers in yield source directly.        Note - for some paths one choice may be disabled or blocked.\",\"_destination\":\"The address which will receive the withdraw proceeds\",\"_minOutput\":\"The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.\",\"_shares\":\"The LP shares to burn.\"},\"returns\":{\"baseProceeds\":\"The base the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital\",\"withdrawalShares\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"caller\":\"The eth address which called the linking contract\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval\",\"operator\":\"The eth address which can access the caller's assets\"}},\"setGovernance(address)\":{\"params\":{\"who\":\"The new governance address\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status\",\"who\":\"The address to change\"}},\"sweep(address)\":{\"details\":\"WARNING: The entire balance of any of the sweep targets can be      swept by governance. If these sweep targets provide access to the      base or pool token, then governance has the ability to rug the pool.WARNING: It is unlikely but possible that there is a selector      overlap with 'transferFrom'. Any integrating contracts should be      checked for that, as it may result in an unexpected call from this      address.\",\"params\":{\"_target\":\"The token to sweep.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move\",\"caller\":\"The msg.sender from the bridge\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}}},\"stateVariables\":{\"isSweepable\":{\"details\":\"A mapping from addresses to their status as a sweep target. This      mapping does not change after construction.\"},\"pool\":{\"details\":\"The yield source contract for this hyperdrive\"}},\"title\":\"ERC4626Hyperdrive\",\"version\":1},\"userdoc\":{\"errors\":{\"ApprovalFailed()\":[{\"notice\":\"################## ### Hyperdrive ### ##################\"}],\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"###################### ### SafeCast ### ######################\"}]},\"events\":{\"PauserUpdated(address)\":{\"notice\":\"Pause ///\"}},\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,address,bool)\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,address,bool)\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,address,bool)\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee(bool)\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes a Hyperdrive pool.\"},\"initialize(uint256,uint256,address,bool)\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,address,bool)\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,address,bool)\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,address,bool)\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,address,bool)\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to set asset approvals\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to set the ability of an address to pause deposits\"},\"sweep(address)\":{\"notice\":\"Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge\"}},\"notice\":\"An instance of Hyperdrive that utilizes ERC4626 vaults as a yield source.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/ERC4626Hyperdrive.sol\":\"ERC4626Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212\",\"dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7\"]},\"contracts/src/Hyperdrive.sol\":{\"keccak256\":\"0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e\",\"dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e\",\"dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn\"]},\"contracts/src/HyperdriveLP.sol\":{\"keccak256\":\"0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e\",\"dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv\"]},\"contracts/src/HyperdriveLong.sol\":{\"keccak256\":\"0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f\",\"dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V\"]},\"contracts/src/HyperdriveShort.sol\":{\"keccak256\":\"0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8\",\"dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/HyperdriveTWAP.sol\":{\"keccak256\":\"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc\",\"dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac\"]},\"contracts/src/instances/ERC4626Hyperdrive.sol\":{\"keccak256\":\"0xee0cdfed80801cd31d14173548d63bf514ba1b5618504b607db4a9acf41c31f4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://53234be5f647cef80eec3461170cc8271119d9d5019f65860e23fb5e4a5247d4\",\"dweb:/ipfs/QmXJM27Nf5NNfTayerGiv5C59u7gw5bW1VZ6gXyugzdxmk\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806\",\"dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75\",\"dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef\",\"dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.PoolConfig",
              "name": "_config",
              "type": "tuple",
              "components": [
                {
                  "internalType": "contract IERC20",
                  "name": "baseToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "initialSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumShareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumTransactionAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "positionDuration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "checkpointDuration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timeStretch",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "governance",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "feeCollector",
                  "type": "address"
                },
                {
                  "internalType": "struct IHyperdrive.Fees",
                  "name": "fees",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "curve",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "flat",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "governance",
                      "type": "uint256"
                    }
                  ]
                },
                {
                  "internalType": "uint256",
                  "name": "oracleSize",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "updateGap",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "address",
              "name": "_dataProvider",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "_linkerCodeHash",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "_linkerFactory",
              "type": "address"
            },
            {
              "internalType": "contract IERC4626",
              "name": "_pool",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "_targets",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ApprovalFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BaseBufferExceedsShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BatchInputLengthMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BelowMinimumContribution"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpiredDeadline"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidExponent"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidApr"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidBaseToken"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointTime"
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
          "name": "InvalidInitialSharePrice"
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
          "name": "InvalidShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidSignature"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTimestamp"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MinimumSharePrice"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MinimumTransactionAmount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativeInterest"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativePresentValue"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotPayable"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "OutputLimit"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Paused"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "PoolAlreadyInitialized"
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
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToInt128"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToUint128"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsupportedToken"
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
              "name": "withdrawalShareAmount",
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "bool",
              "name": "asUnderlying",
              "type": "bool"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "name": "status",
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
              "name": "_minOutputPerShare",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeemWithdrawalShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "baseProceeds",
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "name": "who",
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
              "internalType": "contract IERC20",
              "name": "_target",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "sweep"
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
          "addLiquidity(uint256,uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.",
              "_contribution": "The amount of base to supply.",
              "_destination": "The address which will hold the LP shares",
              "_maxApr": "The maximum APR at which the LP is willing to supply.",
              "_minApr": "The minimum APR at which the LP is willing to supply."
            },
            "returns": {
              "lpShares": "The number of LP tokens created"
            }
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "params": {
              "from": "the source account",
              "ids": "The array of token ids of the asset to transfer",
              "to": "the destination account",
              "values": "The amount of each token to transfer"
            }
          },
          "checkpoint(uint256)": {
            "params": {
              "_checkpointTime": "The time of the checkpoint to create."
            }
          },
          "closeLong(uint256,uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              "_bondAmount": "The amount of longs to close.",
              "_destination": "The address which will receive the proceeds of this sale",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum base the user should receive from this trade"
            },
            "returns": {
              "_0": "The amount of underlying the user receives."
            }
          },
          "closeShort(uint256,uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              "_bondAmount": "The amount of shorts to close.",
              "_destination": "The address that receives the short proceeds.",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum output of this trade."
            },
            "returns": {
              "_0": "The amount of base tokens produced by closing this short"
            }
          },
          "collectGovernanceFee(bool)": {
            "params": {
              "asUnderlying": "Indicates if the fees should be paid in underlying or yielding token"
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
              "_linkerFactory": "The factory which is used to deploy the ERC20        linker contracts.",
              "_pool": "The ERC4626 compatible yield source",
              "_targets": "The addresses that can be swept by governance. This        allows governance to collect rewards derived from incentive        programs while also preventing edge cases where `sweep` is used        to access the pool or base tokens."
            }
          },
          "initialize(uint256,uint256,address,bool)": {
            "params": {
              "_apr": "The target APR.",
              "_asUnderlying": "If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.",
              "_contribution": "The amount of base to supply.",
              "_destination": "The destination of the LP shares."
            },
            "returns": {
              "lpShares": "The initial number of LP shares created."
            }
          },
          "openLong(uint256,uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              "_baseAmount": "The amount of base to use when trading.",
              "_destination": "The address which will receive the bonds",
              "_minOutput": "The minium number of bonds to receive.",
              "_minSharePrice": "The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued."
            },
            "returns": {
              "bondProceeds": "The amount of bonds the user received",
              "maturityTime": "The maturity time of the bonds."
            }
          },
          "openShort(uint256,uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              "_bondAmount": "The amount of bonds to short.",
              "_destination": "The address which gets credited with share tokens",
              "_maxDeposit": "The most the user expects to deposit for this trade",
              "_minSharePrice": "The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued."
            },
            "returns": {
              "maturityTime": "The maturity time of the short.",
              "traderDeposit": "The amount the user deposited for this trade."
            }
          },
          "pause(bool)": {
            "params": {
              "status": "True to pause all deposits and false to unpause them"
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
          "redeemWithdrawalShares(uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "If true the user is paid in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.",
              "_destination": "The address which receive the withdraw proceeds",
              "_minOutputPerShare": "The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.",
              "_shares": "The withdrawal shares to redeem."
            },
            "returns": {
              "baseProceeds": "The amount of base the LP received.",
              "sharesRedeemed": "The amount of withdrawal shares that were redeemed."
            }
          },
          "removeLiquidity(uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "If true the user is paid in underlying if false        the contract transfers in yield source directly.        Note - for some paths one choice may be disabled or blocked.",
              "_destination": "The address which will receive the withdraw proceeds",
              "_minOutput": "The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.",
              "_shares": "The LP shares to burn."
            },
            "returns": {
              "baseProceeds": "The base the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital",
              "withdrawalShares": "The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares."
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
              "who": "The new governance address"
            }
          },
          "setPauser(address,bool)": {
            "params": {
              "status": "The new pauser status",
              "who": "The address to change"
            }
          },
          "sweep(address)": {
            "details": "WARNING: The entire balance of any of the sweep targets can be      swept by governance. If these sweep targets provide access to the      base or pool token, then governance has the ability to rug the pool.WARNING: It is unlikely but possible that there is a selector      overlap with 'transferFrom'. Any integrating contracts should be      checked for that, as it may result in an unexpected call from this      address.",
            "params": {
              "_target": "The token to sweep."
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
          "addLiquidity(uint256,uint256,uint256,address,bool)": {
            "notice": "Allows LPs to supply liquidity for LP shares."
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "notice": "Transfers several assets from one account to another"
          },
          "checkpoint(uint256)": {
            "notice": "Allows anyone to mint a new checkpoint."
          },
          "closeLong(uint256,uint256,uint256,address,bool)": {
            "notice": "Closes a long position with a specified maturity time."
          },
          "closeShort(uint256,uint256,uint256,address,bool)": {
            "notice": "Closes a short position with a specified maturity time."
          },
          "collectGovernanceFee(bool)": {
            "notice": "This function collects the governance fees accrued by the pool."
          },
          "constructor": {
            "notice": "Initializes a Hyperdrive pool."
          },
          "initialize(uint256,uint256,address,bool)": {
            "notice": "Allows the first LP to initialize the market with a target APR."
          },
          "openLong(uint256,uint256,uint256,address,bool)": {
            "notice": "Opens a long position."
          },
          "openShort(uint256,uint256,uint256,address,bool)": {
            "notice": "Opens a short position."
          },
          "pause(bool)": {
            "notice": "Allows an authorized address to pause this contract"
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "notice": "Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature."
          },
          "redeemWithdrawalShares(uint256,uint256,address,bool)": {
            "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."
          },
          "removeLiquidity(uint256,uint256,address,bool)": {
            "notice": "Allows an LP to burn shares and withdraw from the pool."
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
            "notice": "Allows governance to change governance"
          },
          "setPauser(address,bool)": {
            "notice": "Allows governance to set the ability of an address to pause deposits"
          },
          "sweep(address)": {
            "notice": "Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users."
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
        "contracts/src/instances/ERC4626Hyperdrive.sol": "ERC4626Hyperdrive"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/DataProvider.sol": {
        "keccak256": "0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30",
        "urls": [
          "bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212",
          "dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/Hyperdrive.sol": {
        "keccak256": "0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5",
        "urls": [
          "bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e",
          "dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveBase.sol": {
        "keccak256": "0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95",
        "urls": [
          "bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e",
          "dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveLP.sol": {
        "keccak256": "0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a",
        "urls": [
          "bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e",
          "dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveLong.sol": {
        "keccak256": "0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188",
        "urls": [
          "bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f",
          "dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveShort.sol": {
        "keccak256": "0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa",
        "urls": [
          "bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8",
          "dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa"
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
      "contracts/src/HyperdriveTWAP.sol": {
        "keccak256": "0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b",
        "urls": [
          "bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc",
          "dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/ERC4626Hyperdrive.sol": {
        "keccak256": "0xee0cdfed80801cd31d14173548d63bf514ba1b5618504b607db4a9acf41c31f4",
        "urls": [
          "bzz-raw://53234be5f647cef80eec3461170cc8271119d9d5019f65860e23fb5e4a5247d4",
          "dweb:/ipfs/QmXJM27Nf5NNfTayerGiv5C59u7gw5bW1VZ6gXyugzdxmk"
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
      "contracts/src/interfaces/IERC4626.sol": {
        "keccak256": "0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf",
        "urls": [
          "bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc",
          "dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia"
        ],
        "license": "GPL-2.0-or-later"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        "urls": [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"
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
        "keccak256": "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        "urls": [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"
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
        "keccak256": "0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384",
        "urls": [
          "bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806",
          "dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"
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
        "keccak256": "0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2",
        "urls": [
          "bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75",
          "dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"
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
        "keccak256": "0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04",
        "urls": [
          "bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef",
          "dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"
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
    "absolutePath": "contracts/src/instances/ERC4626Hyperdrive.sol",
    "id": 6383,
    "exportedSymbols": {
      "ERC4626Hyperdrive": [
        6382
      ],
      "FixedPointMath": [
        8486
      ],
      "Hyperdrive": [
        478
      ],
      "IERC20": [
        6461
      ],
      "IERC4626": [
        6686
      ],
      "IHyperdrive": [
        7103
      ],
      "SafeERC20": [
        59663
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:8074:13",
    "nodes": [
      {
        "id": 6021,
        "nodeType": "PragmaDirective",
        "src": "39:23:13",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 6023,
        "nodeType": "ImportDirective",
        "src": "64:93:13",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
        "file": "openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6383,
        "sourceUnit": 59664,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6022,
              "name": "SafeERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 59663,
              "src": "73:9:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6025,
        "nodeType": "ImportDirective",
        "src": "158:47:13",
        "nodes": [],
        "absolutePath": "contracts/src/Hyperdrive.sol",
        "file": "../Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6383,
        "sourceUnit": 479,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6024,
              "name": "Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 478,
              "src": "167:10:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6027,
        "nodeType": "ImportDirective",
        "src": "206:50:13",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6383,
        "sourceUnit": 6462,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6026,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6461,
              "src": "215:6:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6029,
        "nodeType": "ImportDirective",
        "src": "257:54:13",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6383,
        "sourceUnit": 6687,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6028,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6686,
              "src": "266:8:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6031,
        "nodeType": "ImportDirective",
        "src": "312:60:13",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6383,
        "sourceUnit": 7104,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6030,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "321:11:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6033,
        "nodeType": "ImportDirective",
        "src": "373:65:13",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6383,
        "sourceUnit": 8487,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6032,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8486,
              "src": "382:14:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6382,
        "nodeType": "ContractDefinition",
        "src": "796:7316:13",
        "nodes": [
          {
            "id": 6039,
            "nodeType": "UsingForDirective",
            "src": "843:33:13",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 6037,
              "name": "FixedPointMath",
              "nameLocations": [
                "849:14:13"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "849:14:13"
            },
            "typeName": {
              "id": 6038,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "868:7:13",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 6043,
            "nodeType": "UsingForDirective",
            "src": "881:27:13",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 6040,
              "name": "SafeERC20",
              "nameLocations": [
                "887:9:13"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 59663,
              "src": "887:9:13"
            },
            "typeName": {
              "id": 6042,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 6041,
                "name": "IERC20",
                "nameLocations": [
                  "901:6:13"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6461,
                "src": "901:6:13"
              },
              "referencedDeclaration": 6461,
              "src": "901:6:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$6461",
                "typeString": "contract IERC20"
              }
            }
          },
          {
            "id": 6047,
            "nodeType": "VariableDeclaration",
            "src": "973:32:13",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 6044,
              "nodeType": "StructuredDocumentation",
              "src": "914:54:13",
              "text": "@dev The yield source contract for this hyperdrive"
            },
            "mutability": "immutable",
            "name": "pool",
            "nameLocation": "1001:4:13",
            "scope": 6382,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC4626_$6686",
              "typeString": "contract IERC4626"
            },
            "typeName": {
              "id": 6046,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 6045,
                "name": "IERC4626",
                "nameLocations": [
                  "973:8:13"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6686,
                "src": "973:8:13"
              },
              "referencedDeclaration": 6686,
              "src": "973:8:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC4626_$6686",
                "typeString": "contract IERC4626"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 6052,
            "nodeType": "VariableDeclaration",
            "src": "1147:61:13",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 6048,
              "nodeType": "StructuredDocumentation",
              "src": "1012:130:13",
              "text": "@dev A mapping from addresses to their status as a sweep target. This\n      mapping does not change after construction."
            },
            "mutability": "mutable",
            "name": "isSweepable",
            "nameLocation": "1197:11:13",
            "scope": 6382,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 6051,
              "keyName": "target",
              "keyNameLocation": "1163:6:13",
              "keyType": {
                "id": 6049,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1155:7:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1147:40:13",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "canSweep",
              "valueNameLocation": "1178:8:13",
              "valueType": {
                "id": 6050,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1173:4:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 6182,
            "nodeType": "FunctionDefinition",
            "src": "1940:1811:13",
            "nodes": [],
            "body": {
              "id": 6181,
              "nodeType": "Block",
              "src": "2228:1523:13",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 6079,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6077,
                      "name": "pool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6047,
                      "src": "2280:4:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC4626_$6686",
                        "typeString": "contract IERC4626"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6078,
                      "name": "_pool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6065,
                      "src": "2287:5:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC4626_$6686",
                        "typeString": "contract IERC4626"
                      }
                    },
                    "src": "2280:12:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$6686",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "id": 6080,
                  "nodeType": "ExpressionStatement",
                  "src": "2280:12:13"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6085,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 6081,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6056,
                        "src": "2796:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 6082,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2804:17:13",
                      "memberName": "initialSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6892,
                      "src": "2796:25:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 6083,
                        "name": "_pricePerShare",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          6326
                        ],
                        "referencedDeclaration": 6326,
                        "src": "2825:14:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 6084,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2825:16:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2796:45:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6092,
                  "nodeType": "IfStatement",
                  "src": "2792:121:13",
                  "trueBody": {
                    "id": 6091,
                    "nodeType": "Block",
                    "src": "2843:70:13",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 6086,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "2864:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 6088,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2876:24:13",
                            "memberName": "InvalidInitialSharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6990,
                            "src": "2864:36:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6089,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2864:38:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6090,
                        "nodeType": "RevertStatement",
                        "src": "2857:45:13"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 6101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 6095,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6056,
                            "src": "2934:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 6096,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2942:9:13",
                          "memberName": "baseToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6889,
                          "src": "2934:17:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 6094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2926:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 6093,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2926:7:13",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 6097,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2926:26:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 6098,
                          "name": "_pool",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6065,
                          "src": "2956:5:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC4626_$6686",
                            "typeString": "contract IERC4626"
                          }
                        },
                        "id": 6099,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2962:5:13",
                        "memberName": "asset",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6555,
                        "src": "2956:11:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                          "typeString": "function () view external returns (address)"
                        }
                      },
                      "id": 6100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2956:13:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2926:43:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6108,
                  "nodeType": "IfStatement",
                  "src": "2922:111:13",
                  "trueBody": {
                    "id": 6107,
                    "nodeType": "Block",
                    "src": "2971:62:13",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 6102,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "2992:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 6104,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3004:16:13",
                            "memberName": "InvalidBaseToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6984,
                            "src": "2992:28:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2992:30:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6106,
                        "nodeType": "RevertStatement",
                        "src": "2985:37:13"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 6122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3120:60:13",
                    "subExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 6114,
                              "name": "pool",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6047,
                              "src": "3155:4:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC4626_$6686",
                                "typeString": "contract IERC4626"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC4626_$6686",
                                "typeString": "contract IERC4626"
                              }
                            ],
                            "id": 6113,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3147:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 6112,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "3147:7:13",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 6115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3147:13:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "id": 6118,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3167:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 6117,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3167:7:13",
                                  "typeDescriptions": {}
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                }
                              ],
                              "id": 6116,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "3162:4:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 6119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3162:13:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_uint256",
                              "typeString": "type(uint256)"
                            }
                          },
                          "id": 6120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3176:3:13",
                          "memberName": "max",
                          "nodeType": "MemberAccess",
                          "src": "3162:17:13",
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
                          "expression": {
                            "id": 6109,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6056,
                            "src": "3121:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 6110,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3129:9:13",
                          "memberName": "baseToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6889,
                          "src": "3121:17:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 6111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3139:7:13",
                        "memberName": "approve",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6448,
                        "src": "3121:25:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 6121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3121:59:13",
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
                  "id": 6129,
                  "nodeType": "IfStatement",
                  "src": "3116:126:13",
                  "trueBody": {
                    "id": 6128,
                    "nodeType": "Block",
                    "src": "3182:60:13",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 6123,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "3203:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 6125,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3215:14:13",
                            "memberName": "ApprovalFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6974,
                            "src": "3203:26:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6126,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3203:28:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6127,
                        "nodeType": "RevertStatement",
                        "src": "3196:35:13"
                      }
                    ]
                  }
                },
                {
                  "body": {
                    "id": 6179,
                    "nodeType": "Block",
                    "src": "3443:302:13",
                    "statements": [
                      {
                        "assignments": [
                          6142
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6142,
                            "mutability": "mutable",
                            "name": "target",
                            "nameLocation": "3465:6:13",
                            "nodeType": "VariableDeclaration",
                            "scope": 6179,
                            "src": "3457:14:13",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 6141,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "3457:7:13",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 6146,
                        "initialValue": {
                          "baseExpression": {
                            "id": 6143,
                            "name": "_targets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6068,
                            "src": "3474:8:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 6145,
                          "indexExpression": {
                            "id": 6144,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6131,
                            "src": "3483:1:13",
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
                          "src": "3474:11:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3457:28:13"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 6165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 6155,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 6149,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6142,
                                  "src": "3528:6:13",
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
                                "id": 6148,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3520:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6147,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3520:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6150,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3520:15:13",
                              "tryCall": false,
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
                                  "id": 6153,
                                  "name": "pool",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6047,
                                  "src": "3547:4:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC4626_$6686",
                                    "typeString": "contract IERC4626"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC4626_$6686",
                                    "typeString": "contract IERC4626"
                                  }
                                ],
                                "id": 6152,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3539:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6151,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3539:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6154,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3539:13:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "3520:32:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 6164,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 6158,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6142,
                                  "src": "3580:6:13",
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
                                "id": 6157,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3572:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6156,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3572:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6159,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3572:15:13",
                              "tryCall": false,
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
                                  "id": 6162,
                                  "name": "_baseToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4548,
                                  "src": "3599:10:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC20_$6461",
                                    "typeString": "contract IERC20"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC20_$6461",
                                    "typeString": "contract IERC20"
                                  }
                                ],
                                "id": 6161,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3591:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6160,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3591:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6163,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3591:19:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "3572:38:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3520:90:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 6172,
                        "nodeType": "IfStatement",
                        "src": "3499:196:13",
                        "trueBody": {
                          "id": 6171,
                          "nodeType": "Block",
                          "src": "3625:70:13",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 6166,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7103,
                                    "src": "3650:11:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 6168,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3662:16:13",
                                  "memberName": "UnsupportedToken",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7024,
                                  "src": "3650:28:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 6169,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3650:30:13",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 6170,
                              "nodeType": "RevertStatement",
                              "src": "3643:37:13"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 6177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 6173,
                              "name": "isSweepable",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6052,
                              "src": "3708:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 6175,
                            "indexExpression": {
                              "id": 6174,
                              "name": "target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6142,
                              "src": "3720:6:13",
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
                            "src": "3708:19:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 6176,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3730:4:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "3708:26:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 6178,
                        "nodeType": "ExpressionStatement",
                        "src": "3708:26:13"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 6134,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6131,
                      "src": "3417:1:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 6135,
                        "name": "_targets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6068,
                        "src": "3421:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 6136,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3430:6:13",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3421:15:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3417:19:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6180,
                  "initializationExpression": {
                    "assignments": [
                      6131
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 6131,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3410:1:13",
                        "nodeType": "VariableDeclaration",
                        "scope": 6180,
                        "src": "3402:9:13",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 6130,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3402:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 6133,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 6132,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3414:1:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3402:13:13"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 6139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3438:3:13",
                      "subExpression": {
                        "id": 6138,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6131,
                        "src": "3438:1:13",
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
                    "id": 6140,
                    "nodeType": "ExpressionStatement",
                    "src": "3438:3:13"
                  },
                  "nodeType": "ForStatement",
                  "src": "3397:348:13"
                }
              ]
            },
            "documentation": {
              "id": 6053,
              "nodeType": "StructuredDocumentation",
              "src": "1215:720:13",
              "text": "@notice Initializes a Hyperdrive pool.\n @param _config The configuration of the Hyperdrive pool.\n @param _dataProvider The address of the data provider.\n @param _linkerCodeHash The hash of the ERC20 linker contract's\n        constructor code.\n @param _linkerFactory The factory which is used to deploy the ERC20\n        linker contracts.\n @param _pool The ERC4626 compatible yield source\n @param _targets The addresses that can be swept by governance. This\n        allows governance to collect rewards derived from incentive\n        programs while also preventing edge cases where `sweep` is used\n        to access the pool or base tokens."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 6071,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6056,
                    "src": "2171:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "id": 6072,
                    "name": "_dataProvider",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6058,
                    "src": "2180:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 6073,
                    "name": "_linkerCodeHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6060,
                    "src": "2195:15:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  {
                    "id": 6074,
                    "name": "_linkerFactory",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6062,
                    "src": "2212:14:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 6075,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 6070,
                  "name": "Hyperdrive",
                  "nameLocations": [
                    "2160:10:13"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 478,
                  "src": "2160:10:13"
                },
                "nodeType": "ModifierInvocation",
                "src": "2160:67:13"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 6069,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6056,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1991:7:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6182,
                  "src": "1961:37:13",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 6055,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6054,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1961:11:13",
                        "1973:10:13"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6924,
                      "src": "1961:22:13"
                    },
                    "referencedDeclaration": 6924,
                    "src": "1961:22:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6058,
                  "mutability": "mutable",
                  "name": "_dataProvider",
                  "nameLocation": "2016:13:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6182,
                  "src": "2008:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6057,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2008:7:13",
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
                  "id": 6060,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "2047:15:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6182,
                  "src": "2039:23:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6059,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2039:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6062,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "2080:14:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6182,
                  "src": "2072:22:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2072:7:13",
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
                  "id": 6065,
                  "mutability": "mutable",
                  "name": "_pool",
                  "nameLocation": "2113:5:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6182,
                  "src": "2104:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$6686",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 6064,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6063,
                      "name": "IERC4626",
                      "nameLocations": [
                        "2104:8:13"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6686,
                      "src": "2104:8:13"
                    },
                    "referencedDeclaration": 6686,
                    "src": "2104:8:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$6686",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6068,
                  "mutability": "mutable",
                  "name": "_targets",
                  "nameLocation": "2145:8:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6182,
                  "src": "2128:25:13",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6066,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2128:7:13",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 6067,
                    "nodeType": "ArrayTypeName",
                    "src": "2128:9:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1951:208:13"
            },
            "returnParameters": {
              "id": 6076,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2228:0:13"
            },
            "scope": 6382,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 6260,
            "nodeType": "FunctionDefinition",
            "src": "4221:1068:13",
            "nodes": [],
            "body": {
              "id": 6259,
              "nodeType": "Block",
              "src": "4365:924:13",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 6195,
                    "name": "asUnderlying",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6187,
                    "src": "4379:12:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 6257,
                    "nodeType": "Block",
                    "src": "4662:621:13",
                    "statements": [
                      {
                        "assignments": [
                          6226
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6226,
                            "mutability": "mutable",
                            "name": "converted",
                            "nameLocation": "4946:9:13",
                            "nodeType": "VariableDeclaration",
                            "scope": 6257,
                            "src": "4938:17:13",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 6225,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "4938:7:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 6231,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 6229,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6185,
                              "src": "4979:6:13",
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
                              "id": 6227,
                              "name": "pool",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6047,
                              "src": "4958:4:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC4626_$6686",
                                "typeString": "contract IERC4626"
                              }
                            },
                            "id": 6228,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4963:15:13",
                            "memberName": "convertToShares",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6613,
                            "src": "4958:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) view external returns (uint256)"
                            }
                          },
                          "id": 6230,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4958:28:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4938:48:13"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 6239,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "5109:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 6240,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5113:6:13",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "5109:10:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 6243,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "5145:4:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6382",
                                    "typeString": "contract ERC4626Hyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6382",
                                    "typeString": "contract ERC4626Hyperdrive"
                                  }
                                ],
                                "id": 6242,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5137:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6241,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5137:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6244,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5137:13:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 6245,
                              "name": "converted",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6226,
                              "src": "5168:9:13",
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
                                      "id": 6235,
                                      "name": "pool",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6047,
                                      "src": "5068:4:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$6686",
                                        "typeString": "contract IERC4626"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC4626_$6686",
                                        "typeString": "contract IERC4626"
                                      }
                                    ],
                                    "id": 6234,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5060:7:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 6233,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5060:7:13",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 6236,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5060:13:13",
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
                                "id": 6232,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6461,
                                "src": "5053:6:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$6461_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 6237,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5053:21:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$6461",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 6238,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5075:16:13",
                            "memberName": "safeTransferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 59347,
                            "src": "5053:38:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$58980_$",
                              "typeString": "function (contract IERC20,address,address,uint256)"
                            }
                          },
                          "id": 6246,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5053:138:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6247,
                        "nodeType": "ExpressionStatement",
                        "src": "5053:138:13"
                      },
                      {
                        "expression": {
                          "id": 6250,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6248,
                            "name": "sharesMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6191,
                            "src": "5205:12:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 6249,
                            "name": "converted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6226,
                            "src": "5220:9:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5205:24:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6251,
                        "nodeType": "ExpressionStatement",
                        "src": "5205:24:13"
                      },
                      {
                        "expression": {
                          "id": 6255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6252,
                            "name": "sharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6193,
                            "src": "5243:10:13",
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
                              "id": 6253,
                              "name": "_pricePerShare",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                6326
                              ],
                              "referencedDeclaration": 6326,
                              "src": "5256:14:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 6254,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5256:16:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5243:29:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6256,
                        "nodeType": "ExpressionStatement",
                        "src": "5243:29:13"
                      }
                    ]
                  },
                  "id": 6258,
                  "nodeType": "IfStatement",
                  "src": "4375:908:13",
                  "trueBody": {
                    "id": 6224,
                    "nodeType": "Block",
                    "src": "4393:263:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 6199,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "4469:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 6200,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4473:6:13",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4469:10:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 6203,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "4489:4:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6382",
                                    "typeString": "contract ERC4626Hyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6382",
                                    "typeString": "contract ERC4626Hyperdrive"
                                  }
                                ],
                                "id": 6202,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4481:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6201,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4481:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6204,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4481:13:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 6205,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6185,
                              "src": "4496:6:13",
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
                              "id": 6196,
                              "name": "_baseToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4548,
                              "src": "4441:10:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$6461",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 6198,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4452:16:13",
                            "memberName": "safeTransferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 59347,
                            "src": "4441:27:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$58980_$",
                              "typeString": "function (contract IERC20,address,address,uint256)"
                            }
                          },
                          "id": 6206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4441:62:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6207,
                        "nodeType": "ExpressionStatement",
                        "src": "4441:62:13"
                      },
                      {
                        "expression": {
                          "id": 6217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6208,
                            "name": "sharesMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6191,
                            "src": "4552:12:13",
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
                                "id": 6211,
                                "name": "amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6185,
                                "src": "4580:6:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 6214,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "4596:4:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6382",
                                      "typeString": "contract ERC4626Hyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6382",
                                      "typeString": "contract ERC4626Hyperdrive"
                                    }
                                  ],
                                  "id": 6213,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4588:7:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 6212,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4588:7:13",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 6215,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4588:13:13",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "id": 6209,
                                "name": "pool",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6047,
                                "src": "4567:4:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC4626_$6686",
                                  "typeString": "contract IERC4626"
                                }
                              },
                              "id": 6210,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4572:7:13",
                              "memberName": "deposit",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6571,
                              "src": "4567:12:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (uint256,address) external returns (uint256)"
                              }
                            },
                            "id": 6216,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4567:35:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4552:50:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6218,
                        "nodeType": "ExpressionStatement",
                        "src": "4552:50:13"
                      },
                      {
                        "expression": {
                          "id": 6222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6219,
                            "name": "sharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6193,
                            "src": "4616:10:13",
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
                              "id": 6220,
                              "name": "_pricePerShare",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                6326
                              ],
                              "referencedDeclaration": 6326,
                              "src": "4629:14:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 6221,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4629:16:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4616:29:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6223,
                        "nodeType": "ExpressionStatement",
                        "src": "4616:29:13"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              674
            ],
            "documentation": {
              "id": 6183,
              "nodeType": "StructuredDocumentation",
              "src": "3783:433:13",
              "text": "@notice Transfers amount of 'token' from the user and commits it to the yield source.\n @param amount The amount of token to transfer\n @param asUnderlying If true the yield source will transfer underlying tokens\n                     if false it will transfer the yielding asset directly\n @return sharesMinted The shares this deposit creates\n @return sharePrice The share price at time of deposit"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "4230:8:13",
            "overrides": {
              "id": 6189,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4305:8:13"
            },
            "parameters": {
              "id": 6188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6185,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4256:6:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6260,
                  "src": "4248:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6184,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4248:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6187,
                  "mutability": "mutable",
                  "name": "asUnderlying",
                  "nameLocation": "4277:12:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6260,
                  "src": "4272:17:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6186,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4272:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4238:57:13"
            },
            "returnParameters": {
              "id": 6194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6191,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "4331:12:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6260,
                  "src": "4323:20:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6190,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4323:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6193,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "4353:10:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6260,
                  "src": "4345:18:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6192,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4345:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4322:42:13"
            },
            "scope": 6382,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6312,
            "nodeType": "FunctionDefinition",
            "src": "5797:620:13",
            "nodes": [],
            "body": {
              "id": 6311,
              "nodeType": "Block",
              "src": "5954:463:13",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 6273,
                    "name": "asUnderlying",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6267,
                    "src": "5968:12:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 6309,
                    "nodeType": "Block",
                    "src": "6125:286:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 6294,
                              "name": "destination",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6265,
                              "src": "6225:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 6295,
                              "name": "shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6263,
                              "src": "6238:6:13",
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
                                      "id": 6290,
                                      "name": "pool",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6047,
                                      "src": "6205:4:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$6686",
                                        "typeString": "contract IERC4626"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC4626_$6686",
                                        "typeString": "contract IERC4626"
                                      }
                                    ],
                                    "id": 6289,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6197:7:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 6288,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6197:7:13",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 6291,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6197:13:13",
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
                                "id": 6287,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6461,
                                "src": "6190:6:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$6461_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 6292,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6190:21:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$6461",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 6293,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6212:12:13",
                            "memberName": "safeTransfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 59320,
                            "src": "6190:34:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$58980_$",
                              "typeString": "function (contract IERC20,address,uint256)"
                            }
                          },
                          "id": 6296,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6190:55:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6297,
                        "nodeType": "ExpressionStatement",
                        "src": "6190:55:13"
                      },
                      {
                        "assignments": [
                          6299
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6299,
                            "mutability": "mutable",
                            "name": "estimated",
                            "nameLocation": "6319:9:13",
                            "nodeType": "VariableDeclaration",
                            "scope": 6309,
                            "src": "6311:17:13",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 6298,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6311:7:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 6304,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 6302,
                              "name": "shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6263,
                              "src": "6352:6:13",
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
                              "id": 6300,
                              "name": "pool",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6047,
                              "src": "6331:4:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC4626_$6686",
                                "typeString": "contract IERC4626"
                              }
                            },
                            "id": 6301,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6336:15:13",
                            "memberName": "convertToAssets",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6621,
                            "src": "6331:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) view external returns (uint256)"
                            }
                          },
                          "id": 6303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6331:28:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6311:48:13"
                      },
                      {
                        "expression": {
                          "id": 6307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6305,
                            "name": "amountWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6271,
                            "src": "6373:15:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 6306,
                            "name": "estimated",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6299,
                            "src": "6391:9:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6373:27:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6308,
                        "nodeType": "ExpressionStatement",
                        "src": "6373:27:13"
                      }
                    ]
                  },
                  "id": 6310,
                  "nodeType": "IfStatement",
                  "src": "5964:447:13",
                  "trueBody": {
                    "id": 6286,
                    "nodeType": "Block",
                    "src": "5982:137:13",
                    "statements": [
                      {
                        "expression": {
                          "id": 6284,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6274,
                            "name": "amountWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6271,
                            "src": "6043:15:13",
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
                                "id": 6277,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6263,
                                "src": "6073:6:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 6278,
                                "name": "destination",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6265,
                                "src": "6081:11:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 6281,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "6102:4:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6382",
                                      "typeString": "contract ERC4626Hyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6382",
                                      "typeString": "contract ERC4626Hyperdrive"
                                    }
                                  ],
                                  "id": 6280,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6094:7:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 6279,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6094:7:13",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 6282,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6094:13:13",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "id": 6275,
                                "name": "pool",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6047,
                                "src": "6061:4:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC4626_$6686",
                                  "typeString": "contract IERC4626"
                                }
                              },
                              "id": 6276,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6066:6:13",
                              "memberName": "redeem",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6605,
                              "src": "6061:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (uint256,address,address) external returns (uint256)"
                              }
                            },
                            "id": 6283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6061:47:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6043:65:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6285,
                        "nodeType": "ExpressionStatement",
                        "src": "6043:65:13"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              686
            ],
            "documentation": {
              "id": 6261,
              "nodeType": "StructuredDocumentation",
              "src": "5295:497:13",
              "text": "@notice Withdraws shares from the yield source and sends the resulting tokens to the destination\n @param shares The shares to withdraw from the yield source\n @param asUnderlying If true the yield source will transfer underlying tokens\n                     if false it will transfer the yielding asset directly\n @param destination The address which is where to send the resulting tokens\n @return amountWithdrawn the amount of 'token' produced by this withdraw"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "5806:9:13",
            "overrides": {
              "id": 6269,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5911:8:13"
            },
            "parameters": {
              "id": 6268,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6263,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5833:6:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6312,
                  "src": "5825:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6262,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5825:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6265,
                  "mutability": "mutable",
                  "name": "destination",
                  "nameLocation": "5857:11:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6312,
                  "src": "5849:19:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6264,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5849:7:13",
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
                  "id": 6267,
                  "mutability": "mutable",
                  "name": "asUnderlying",
                  "nameLocation": "5883:12:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6312,
                  "src": "5878:17:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6266,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5878:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5815:86:13"
            },
            "returnParameters": {
              "id": 6272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6271,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "5937:15:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6312,
                  "src": "5929:23:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6270,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5929:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5928:25:13"
            },
            "scope": 6382,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6326,
            "nodeType": "FunctionDefinition",
            "src": "6602:134:13",
            "nodes": [],
            "body": {
              "id": 6325,
              "nodeType": "Block",
              "src": "6669:67:13",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 6321,
                          "name": "FixedPointMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8486,
                          "src": "6707:14:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                            "typeString": "type(library FixedPointMath)"
                          }
                        },
                        "id": 6322,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6722:6:13",
                        "memberName": "ONE_18",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7745,
                        "src": "6707:21:13",
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
                        "id": 6319,
                        "name": "pool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6047,
                        "src": "6686:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC4626_$6686",
                          "typeString": "contract IERC4626"
                        }
                      },
                      "id": 6320,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6691:15:13",
                      "memberName": "convertToAssets",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6621,
                      "src": "6686:20:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view external returns (uint256)"
                      }
                    },
                    "id": 6323,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6686:43:13",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 6318,
                  "id": 6324,
                  "nodeType": "Return",
                  "src": "6679:50:13"
                }
              ]
            },
            "baseFunctions": [
              692
            ],
            "documentation": {
              "id": 6313,
              "nodeType": "StructuredDocumentation",
              "src": "6423:174:13",
              "text": "@notice Loads the share price from the yield source.\n @return The current share price.\n @dev must remain consistent with the impl inside of the DataProvider"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "6611:14:13",
            "overrides": {
              "id": 6315,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6642:8:13"
            },
            "parameters": {
              "id": 6314,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6625:2:13"
            },
            "returnParameters": {
              "id": 6318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6317,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6326,
                  "src": "6660:7:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6316,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6660:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6659:9:13"
            },
            "scope": 6382,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6381,
            "nodeType": "FunctionDefinition",
            "src": "7515:595:13",
            "nodes": [],
            "body": {
              "id": 6380,
              "nodeType": "Block",
              "src": "7555:555:13",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 6342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 6336,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 6333,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "7637:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6334,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7641:6:13",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "7637:10:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 6335,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4601,
                        "src": "7651:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "7637:27:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 6341,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "7668:21:13",
                      "subExpression": {
                        "baseExpression": {
                          "id": 6337,
                          "name": "_pausers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4594,
                          "src": "7669:8:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 6340,
                        "indexExpression": {
                          "expression": {
                            "id": 6338,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "7678:3:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 6339,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7682:6:13",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "7678:10:13",
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
                        "src": "7669:20:13",
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
                    "src": "7637:52:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6348,
                  "nodeType": "IfStatement",
                  "src": "7633:103:13",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 6343,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "7710:11:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 6345,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7722:12:13",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7047,
                        "src": "7710:24:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 6346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7710:26:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 6347,
                    "nodeType": "RevertStatement",
                    "src": "7703:33:13"
                  }
                },
                {
                  "condition": {
                    "id": 6355,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "7814:30:13",
                    "subExpression": {
                      "baseExpression": {
                        "id": 6349,
                        "name": "isSweepable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6052,
                        "src": "7815:11:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 6354,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 6352,
                            "name": "_target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6330,
                            "src": "7835:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6461",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$6461",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 6351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7827:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 6350,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "7827:7:13",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7827:16:13",
                        "tryCall": false,
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
                      "src": "7815:29:13",
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
                  "id": 6362,
                  "nodeType": "IfStatement",
                  "src": "7810:98:13",
                  "trueBody": {
                    "id": 6361,
                    "nodeType": "Block",
                    "src": "7846:62:13",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 6356,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "7867:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 6358,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7879:16:13",
                            "memberName": "UnsupportedToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7024,
                            "src": "7867:28:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6359,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7867:30:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6360,
                        "nodeType": "RevertStatement",
                        "src": "7860:37:13"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    6364
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6364,
                      "mutability": "mutable",
                      "name": "balance",
                      "nameLocation": "8007:7:13",
                      "nodeType": "VariableDeclaration",
                      "scope": 6380,
                      "src": "7999:15:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6363,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7999:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6372,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 6369,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "8043:4:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6382",
                              "typeString": "contract ERC4626Hyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6382",
                              "typeString": "contract ERC4626Hyperdrive"
                            }
                          ],
                          "id": 6368,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8035:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 6367,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "8035:7:13",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6370,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8035:13:13",
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
                        "id": 6365,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6330,
                        "src": "8017:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$6461",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 6366,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8025:9:13",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6418,
                      "src": "8017:17:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 6371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8017:32:13",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7999:50:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6376,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4601,
                        "src": "8080:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6377,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6364,
                        "src": "8095:7:13",
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
                        "id": 6373,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6330,
                        "src": "8059:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$6461",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 6375,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8067:12:13",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59320,
                      "src": "8059:20:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$58980_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$58980_$",
                        "typeString": "function (contract IERC20,address,uint256)"
                      }
                    },
                    "id": 6378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8059:44:13",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6379,
                  "nodeType": "ExpressionStatement",
                  "src": "8059:44:13"
                }
              ]
            },
            "documentation": {
              "id": 6327,
              "nodeType": "StructuredDocumentation",
              "src": "6742:768:13",
              "text": "@notice Some yield sources [eg Morpho] pay rewards directly to this\n         contract but we can't handle distributing them internally so we\n         sweep to the fee collector address to then redistribute to users.\n @dev WARNING: The entire balance of any of the sweep targets can be\n      swept by governance. If these sweep targets provide access to the\n      base or pool token, then governance has the ability to rug the pool.\n @dev WARNING: It is unlikely but possible that there is a selector\n      overlap with 'transferFrom'. Any integrating contracts should be\n      checked for that, as it may result in an unexpected call from this\n      address.\n @param _target The token to sweep."
            },
            "functionSelector": "01681a62",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sweep",
            "nameLocation": "7524:5:13",
            "parameters": {
              "id": 6331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6330,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "7537:7:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6381,
                  "src": "7530:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$6461",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 6329,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6328,
                      "name": "IERC20",
                      "nameLocations": [
                        "7530:6:13"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6461,
                      "src": "7530:6:13"
                    },
                    "referencedDeclaration": 6461,
                    "src": "7530:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$6461",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7529:16:13"
            },
            "returnParameters": {
              "id": 6332,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7555:0:13"
            },
            "scope": 6382,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 6035,
              "name": "Hyperdrive",
              "nameLocations": [
                "826:10:13"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 478,
              "src": "826:10:13"
            },
            "id": 6036,
            "nodeType": "InheritanceSpecifier",
            "src": "826:10:13"
          }
        ],
        "canonicalName": "ERC4626Hyperdrive",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 6034,
          "nodeType": "StructuredDocumentation",
          "src": "440:356:13",
          "text": "@author DELV\n @title ERC4626Hyperdrive\n @notice An instance of Hyperdrive that utilizes ERC4626 vaults as a yield source.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          6382,
          478,
          4522,
          3682,
          2866,
          5037,
          1320,
          4904,
          12918,
          7657,
          13196,
          63474,
          72
        ],
        "name": "ERC4626Hyperdrive",
        "nameLocation": "805:17:13",
        "scope": 6383,
        "usedErrors": [
          6974,
          6976,
          6978,
          6982,
          6984,
          6986,
          6988,
          6990,
          6994,
          6996,
          6998,
          7000,
          7002,
          7004,
          7008,
          7010,
          7012,
          7014,
          7024,
          7026,
          7028,
          7044,
          7047,
          7060,
          7062,
          7064,
          7066,
          7068,
          7085,
          7088,
          7090,
          7097,
          7100,
          7102
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 13
} as const;
