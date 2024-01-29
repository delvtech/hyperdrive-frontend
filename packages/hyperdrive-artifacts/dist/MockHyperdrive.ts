export const MockHyperdrive = 
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
              "internalType": "address",
              "name": "linkerFactory",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "linkerCodeHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "initialVaultSharePrice",
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
                  "name": "governanceLP",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governanceZombie",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IHyperdrive.Fees",
              "name": "fees",
              "type": "tuple"
            }
          ],
          "internalType": "struct IHyperdrive.PoolConfig",
          "name": "_config",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ExpInvalidExponent",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
          "name": "reason",
          "type": "uint8"
        }
      ],
      "name": "InsufficientLiquidity",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "LnInvalidInput",
      "type": "error"
    },
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
          "name": "time",
          "type": "uint256"
        },
        {
          "internalType": "int256",
          "name": "apr",
          "type": "int256"
        }
      ],
      "name": "accrue",
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
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_normalizedTimeRemaining",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_spotPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "vaultSharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateFeesGivenBonds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalCurveFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalFlatFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "governanceCurveFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalGovernanceFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_shareAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_spotPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "vaultSharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateFeesGivenShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "curveFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "governanceCurveFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_vaultSharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateIdleShareReserves",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_shareAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_vaultSharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateOpenLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "shareReservesDelta",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bondReservesDelta",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bondProceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalGovernanceFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maturityTime",
          "type": "uint256"
        }
      ],
      "name": "calculateTimeRemaining",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "timeRemaining",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maturityTime",
          "type": "uint256"
        }
      ],
      "name": "calculateTimeRemainingScaled",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "timeRemaining",
          "type": "uint256"
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
      "inputs": [],
      "name": "getTotalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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
      "inputs": [],
      "name": "latestCheckpoint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "checkpointTime",
          "type": "uint256"
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
          "internalType": "uint128",
          "name": "longExposure",
          "type": "uint128"
        }
      ],
      "name": "setLongExposure",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "shareReserves",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "bondReserves",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longExposure",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longsOutstanding",
              "type": "uint128"
            },
            {
              "internalType": "int128",
              "name": "shareAdjustment",
              "type": "int128"
            },
            {
              "internalType": "uint128",
              "name": "shortsOutstanding",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longAverageMaturityTime",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "shortAverageMaturityTime",
              "type": "uint128"
            },
            {
              "internalType": "bool",
              "name": "isInitialized",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool"
            },
            {
              "internalType": "uint112",
              "name": "zombieBaseProceeds",
              "type": "uint112"
            },
            {
              "internalType": "uint128",
              "name": "zombieShareReserves",
              "type": "uint128"
            }
          ],
          "internalType": "struct IHyperdrive.MarketState",
          "name": "_marketState_",
          "type": "tuple"
        }
      ],
      "name": "setMarketState",
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
      "inputs": [
        {
          "internalType": "uint128",
          "name": "shareReserves",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "bondReserves",
          "type": "uint128"
        }
      ],
      "name": "setReserves",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_totalShares",
          "type": "uint256"
        }
      ],
      "name": "setTotalShares",
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
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "_shareReservesDelta",
          "type": "int256"
        }
      ],
      "name": "updateLiquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x6103006040523480156200001257600080fd5b5060405162019416380380620194168339810160408190526200003591620003c8565b80816040516200004590620002b8565b62000051919062000492565b604051809103906000f0801580156200006e573d6000803e3d6000fd5b50826040516200007e90620002c6565b6200008a919062000492565b604051809103906000f080158015620000a7573d6000803e3d6000fd5b5083604051620000b790620002d4565b620000c3919062000492565b604051809103906000f080158015620000e0573d6000803e3d6000fd5b5084604051620000f090620002e2565b620000fc919062000492565b604051809103906000f08015801562000119573d6000803e3d6000fd5b50856040516200012990620002f0565b62000135919062000492565b604051809103906000f08015801562000152573d6000803e3d6000fd5b506001600081905586516001600160a01b0390811660809081526060808a015161018052818a01516101a05260a0808b01516101c05260e0808c0151825260c0808d01519052610100808d0151909152610160808d01805151909252815160209081015161012090815283516040908101516101409081529451870151909352818f0151881661020052828f0151610220528e0151600880546001600160a01b03191691891691909117905591909c015185166101e0529984166102405297831661026052958216610280529381166102a052919091166102c05285518087018752908152603160f81b9085015284517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818601527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6818701524692810192909252308282015284518083039091018152910190925281519101206102e0525062000570565b613d168062002f1c83390190565b614e138062006c3283390190565b614c28806200ba4583390190565b61471f806201066d83390190565b61468a8062014d8c83390190565b60405161018081016001600160401b03811182821017156200033057634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200034e57600080fd5b919050565b6000608082840312156200036657600080fd5b604051608081016001600160401b03811182821017156200039757634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620003dc57600080fd5b620003e6620002fe565b620003f18362000336565b8152620004016020840162000336565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200045e81850162000336565b908201526101406200047284820162000336565b90820152610160620004878585830162000353565b908201529392505050565b81516001600160a01b031681526101e081016020830151620004bf60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000524828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016092830151805193830193909352602083015161018083015260408301516101a08301526060909201516101c09091015290565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e0516127f862000724600039600081816104f20152610d6501526000818161089f0152610f5c0152600081816107e40152610f260152600081816106d001528181610a8d0152610fb601526000818161084b015281816109d301528181610af20152610d2801526000818161025d01528181610404015281816109a301528181610a0501528181610a3701528181610ac101528181610ce101528181610df601528181610ede0152610f85015260005050600050506000505060005050600081816112a901528181611550015261158c0152600081816113eb015281816114330152611a5501526000505060008181611055015281816110ce015261124e0152600081816110a201526114a601526000818161101b0152818161120a01526114850152600081816113c9015281816114540152611a760152600081816111d1015261161501526000611373015260008181610b4401528181610bde0152610c5101526127f86000f3fe6080604052600436106102465760003560e01c8063907c0f9211610139578063cba2e58d116100b6578063ded062311161007a578063ded062311461047e578063e44808bc14610819578063eac3e79914610839578063ed64bab21461086d578063f3f707071461088d578063f45cf2e0146108c157610246565b8063cba2e58d146107aa578063cbc1343414610378578063d5002f2e146107bd578063d899e112146107d2578063dbbe80701461080657610246565b8063a77384c1116100fd578063a77384c1146106f2578063ab033ea914610712578063b1b4b1701461072d578063b4f8da391461074d578063ca6d38f71461078a57610246565b8063907c0f92146106695780639bd334981461067e5780639cd241af1461069e578063a22cb465146105d6578063a6e8a859146106be57610246565b80634c2ac1d9116101c75780637180c8ca1161018b5780637180c8ca146105d657806371f88b7c146105f657806377d05ff4146106165780638120a3e2146106295780639032c7261461064957610246565b80634c2ac1d9146105345780634ed2d6ac14610547578063680962391461056257806368c2ecb814610582578063702db0eb146105a257610246565b806322d5506b1161020e57806322d5506b1461043e57806329b23fc11461047e57806330adf81f146104ac5780633644e515146104e05780633e691db91461051457610246565b806302329a2914610356578063074a6de91461037857806317fad7fc146103b25780631c0f12b6146103d257806321b57d53146103f2575b34801561025257600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610295929190611ea1565b600060405180830381855af49150503d80600081146102d0576040519150601f19603f3d011682016040523d82523d6000602084013e6102d5565b606091505b509150915081156102f957604051638bb0a34b60e01b815260040160405180910390fd5b600061030482611eb1565b90506001600160e01b03198116636e64089360e11b1461032657815160208301fd5b81516003198101600484019081529261034791810160200190602401611f4c565b80519650602001945050505050f35b34801561036257600080fd5b50610376610371366004612003565b61099e565b005b34801561038457600080fd5b50610398610393366004612030565b6109cb565b604080519283526020830191909152015b60405180910390f35b3480156103be57600080fd5b506103766103cd3660046120e3565b610a00565b3480156103de57600080fd5b506103766103ed366004612174565b610a32565b3480156103fe57600080fd5b506104267f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016103a9565b34801561044a57600080fd5b5061045e6104593660046121b8565b610a62565b6040805194855260208501939093529183015260608201526080016103a9565b34801561048a57600080fd5b5061049e6104993660046121ea565b610a86565b6040519081526020016103a9565b3480156104b857600080fd5b5061049e7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b3480156104ec57600080fd5b5061049e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561052057600080fd5b5061049e61052f366004612244565b610aba565b61049e610542366004612279565b610aeb565b34801561055357600080fd5b506103766103ed3660046122dd565b34801561056e57600080fd5b5061037661057d366004612323565b610b20565b34801561058e57600080fd5b5061049e61059d366004612345565b610ccb565b3480156105ae57600080fd5b506103766105bd366004612375565b6001600160801b03908116600160801b02911617600155565b3480156105e257600080fd5b506103766105f13660046123a8565b610cdc565b34801561060257600080fd5b506103986106113660046123d2565b610d05565b61049e610624366004612030565b610d21565b34801561063557600080fd5b50610376610644366004612345565b610d54565b34801561065557600080fd5b506103766106643660046123fe565b610d60565b34801561067557600080fd5b5061049e610eaa565b34801561068a57600080fd5b5061045e610699366004612323565b610eb9565b3480156106aa57600080fd5b506103766106b9366004612478565b610ed9565b3480156106ca57600080fd5b506104267f000000000000000000000000000000000000000000000000000000000000000081565b3480156106fe57600080fd5b5061037661070d366004612345565b601055565b34801561071e57600080fd5b506103766103713660046124ad565b34801561073957600080fd5b5061049e610748366004612345565b610f08565b34801561075957600080fd5b506103766107683660046124c8565b600280546001600160801b0319166001600160801b0392909216919091179055565b34801561079657600080fd5b5061049e6107a5366004612345565b610f13565b6103986107b83660046121ea565b610f1e565b3480156107c957600080fd5b5060105461049e565b3480156107de57600080fd5b506104267f000000000000000000000000000000000000000000000000000000000000000081565b6103986108143660046121ea565b610f54565b34801561082557600080fd5b506103766108343660046124e3565b610f80565b34801561084557600080fd5b506104267f000000000000000000000000000000000000000000000000000000000000000081565b34801561087957600080fd5b50610376610888366004612345565b610fb1565b34801561089957600080fd5b506104267f000000000000000000000000000000000000000000000000000000000000000081565b3480156108cd57600080fd5b506103766108dc366004612563565b805160208201516001600160801b03918216600160801b91831682021760015560408301516060840151908316908316820217600255608083015160a084015190831690831682021760035560c083015160e084015190831690831682021760045561010080840151600580546101208701516101408801516101609098015161ffff1990921693151561ff001916939093179215159093029190911761ffff16620100006001600160701b0390961695909502841694909417921602179055565b6109c77f0000000000000000000000000000000000000000000000000000000000000000610fd6565b5050565b6000806109f77f0000000000000000000000000000000000000000000000000000000000000000610fd6565b50935093915050565b610a297f0000000000000000000000000000000000000000000000000000000000000000610fd6565b50505050505050565b610a5b7f0000000000000000000000000000000000000000000000000000000000000000610fd6565b5050505050565b600080600080610a7488888888610ff6565b929b919a509850909650945050505050565b6000610ab17f0000000000000000000000000000000000000000000000000000000000000000610fd6565b50949350505050565b6000610ae57f0000000000000000000000000000000000000000000000000000000000000000610fd6565b50919050565b6000610b167f0000000000000000000000000000000000000000000000000000000000000000610fd6565b5095945050505050565b6040516370a0823160e01b8152306004820152600090610bb6906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baf919061264f565b838561110a565b9150506000811315610c3e576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b158015610c2a57600080fd5b505af1158015610a29573d6000803e3d6000fd5b6000811215610cc6576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610c808461267e565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610c2a57600080fd5b505050565b6000610cd6826111a4565b92915050565b610cc67f0000000000000000000000000000000000000000000000000000000000000000610fd6565b600080610d138585856111fc565b90925090505b935093915050565b6000610d4c7f0000000000000000000000000000000000000000000000000000000000000000610fd6565b509392505050565b610d5d8161127c565b50565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610e50919061269a565b600060405180830381855af49150503d8060008114610e8b576040519150601f19603f3d011682016040523d82523d6000602084013e610e90565b606091505b509150915081610ea257805160208201fd5b805160208201f35b6000610eb461136c565b905090565b600080600080610ec986866113a2565b9299919850965090945092505050565b610f027f0000000000000000000000000000000000000000000000000000000000000000610fd6565b50505050565b6000610cd68261152e565b6000610cd6826115ca565b600080610f4a7f0000000000000000000000000000000000000000000000000000000000000000610fd6565b5094509492505050565b600080610f4a7f0000000000000000000000000000000000000000000000000000000000000000610fd6565b610fa97f0000000000000000000000000000000000000000000000000000000000000000610fd6565b505050505050565b6109c77f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b0316600036604051610e50929190611ea1565b600080808061104d87866110468b6110406110198c670de0b6b3a76400006126b6565b7f000000000000000000000000000000000000000000000000000000000000000090611640565b90611640565b9190611651565b9350611079847f0000000000000000000000000000000000000000000000000000000000000000611640565b9150600061109a61109289670de0b6b3a76400006126b6565b8a9088611651565b90506110c6817f0000000000000000000000000000000000000000000000000000000000000000611640565b93506110f2847f0000000000000000000000000000000000000000000000000000000000000000611640565b6110fc90846126c9565b915050945094509450949050565b6000808061111c846301e1338061166f565b9050600061113b82600088126111325787611040565b6110408861267e565b9050600086131561116e5761115961115282611684565b8890611640565b935061116587856126b6565b92505050610d19565b60008612156111965761118a61118382611684565b889061166f565b935061116587856126dc565b509495600095509350505050565b6000806111af61136c565b90508083116111bf5760006111c9565b6111c981846126b6565b91506111f5827f000000000000000000000000000000000000000000000000000000000000000061166f565b9392505050565b6000806112468561104085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061123c818c61166f565b61104091906126b6565b9150611272827f0000000000000000000000000000000000000000000000000000000000000000611640565b9050935093915050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806112ce8686867f00000000000000000000000000000000000000000000000000000000000000008b61180f565b925092509250858314611305576112e4836118bc565b600180546001600160801b0319166001600160801b03929092169190911790555b84821461133657611315826118e6565b600380546001600160801b0319166001600160801b03929092169190911790555b838114610a2957611346816118bc565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b60006113987f000000000000000000000000000000000000000000000000000000000000000042612719565b610eb490426126b6565b60008060008061140f6113b3611936565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000611957565b9250600061147861141e611936565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611983565b90506114cf87856114ca847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a3565b611a1c565b156114de576114de6002611aa5565b6000806114ec89848a6111fc565b90925090506114fb82876126b6565b945061150781866126c9565b955061151481848a611651565b9350611520848a6126b6565b965050505092959194509250565b6002546000908190611549906001600160801b031684611ac9565b90506115757f0000000000000000000000000000000000000000000000000000000000000000826126c9565b6001546001600160801b03161115610ae5576001547f0000000000000000000000000000000000000000000000000000000000000000906115c09083906001600160801b03166126b6565b6111f591906126b6565b600080670de0b6b3a76400006115de61136c565b6115e8919061272d565b90508083116115f8576000611602565b61160281846126b6565b91506111f5611639670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061272d565b839061166f565b60006111f58383670de0b6b3a76400005b600082600019048411830215820261166857600080fd5b5091020490565b60006111f583670de0b6b3a764000084611651565b6000680248ce36a70cb26b3e19821361169f57506000919050565b680755bf798b4a1bf1e582126116c8576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000806000836000036118295750869150859050846118b1565b6000611835858a612744565b9050858112156118585760405163585fe6df60e11b815260040160405180910390fd5b809350600088126118755761186e84898b611651565b9250611895565b6118896118818961267e565b85908b611651565b6118929061267e565b92505b6118ad876118a38b8b611ade565b6110468787611ade565b9150505b955095509592505050565b6000600160801b82106118e257604051630f0af95160e11b815260040160405180910390fd5b5090565b60006f7fffffffffffffffffffffffffffffff19821280159061191957506f7fffffffffffffffffffffffffffffff8213155b6118e25760405163a5353be560e01b815260040160405180910390fd5b600154600354600091610eb4916001600160801b0390911690600f0b611ade565b600061197887878761197188670de0b6b3a76400006126b6565b8787611afb565b979650505050505050565b600061199a82611994858888611651565b90611bc7565b95945050505050565b6000611a146119ea6119bd84670de0b6b3a76400006126b6565b6119e4670de0b6b3a76400006119d3818a611ac9565b6119dd91906126b6565b8790611c28565b90611c28565b6119fc90670de0b6b3a76400006126c9565b611a0e84670de0b6b3a76400006126b6565b9061166f565b949350505050565b600080611a9a85611a2b611936565b611a3591906126c9565b600154611a53908790600160801b90046001600160801b03166126b6565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611983565b909210949350505050565b80604051633c06d78b60e11b8152600401611ac0919061276c565b60405180910390fd5b60006111f583670de0b6b3a764000084611c39565b600080611aeb83856126dc565b905060008112156111f557600080fd5b600080611b0b8888878787611c5f565b9050611b2585611994611b1e898c6126c9565b8690611640565b9750611b32848985611651565b975087811015611b4657611b466000611aa5565b6000611b5289836126b6565b9050670de0b6b3a76400008110611b8657611b7f611b78670de0b6b3a764000088611ac9565b8290611bc7565b9050611b9e565b611b9b611b78670de0b6b3a76400008861166f565b90505b80881015611bb057611bb06000611aa5565b611bba81896126b6565b9998505050505050505050565b600081600003611be05750670de0b6b3a7640000610cd6565b82600003611bf057506000610cd6565b816000611bfc85611c8e565b9050818102611c13670de0b6b3a764000082612794565b9050611c1e81611684565b9695505050505050565b60006111f58383670de0b6b3a76400005b6000826000190484118302158202611c5057600080fd5b50910281810615159190040190565b6000611c6b8585611bc7565b611c84611c7c86611994868b611c28565b859085611c39565b611c1e91906126c9565b6000808213611cb05760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015611ee05780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715611f2257611f22611ee8565b60405290565b60005b83811015611f43578181015183820152602001611f2b565b50506000910152565b600060208284031215611f5e57600080fd5b815167ffffffffffffffff80821115611f7657600080fd5b818401915084601f830112611f8a57600080fd5b815181811115611f9c57611f9c611ee8565b604051601f8201601f19908116603f01168101908382118183101715611fc457611fc4611ee8565b81604052828152876020848701011115611fdd57600080fd5b611978836020830160208801611f28565b80358015158114611ffe57600080fd5b919050565b60006020828403121561201557600080fd5b6111f582611fee565b600060608284031215610ae557600080fd5b60008060006060848603121561204557600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561206a57600080fd5b6120768682870161201e565b9150509250925092565b80356001600160a01b0381168114611ffe57600080fd5b60008083601f8401126120a957600080fd5b50813567ffffffffffffffff8111156120c157600080fd5b6020830191508360208260051b85010111156120dc57600080fd5b9250929050565b600080600080600080608087890312156120fc57600080fd5b61210587612080565b955061211360208801612080565b9450604087013567ffffffffffffffff8082111561213057600080fd5b61213c8a838b01612097565b9096509450606089013591508082111561215557600080fd5b5061216289828a01612097565b979a9699509497509295939492505050565b6000806000806080858703121561218a57600080fd5b8435935061219a60208601612080565b92506121a860408601612080565b9396929550929360600135925050565b600080600080608085870312156121ce57600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561220057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561222c57600080fd5b6122388782880161201e565b91505092959194509250565b60006020828403121561225657600080fd5b813567ffffffffffffffff81111561226d57600080fd5b611a148482850161201e565b600080600080600060a0868803121561229157600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156122c457600080fd5b6122d08882890161201e565b9150509295509295909350565b600080600080608085870312156122f357600080fd5b8435935061230360208601612080565b92506040850135915061231860608601612080565b905092959194509250565b6000806040838503121561233657600080fd5b50508035926020909101359150565b60006020828403121561235757600080fd5b5035919050565b80356001600160801b0381168114611ffe57600080fd5b6000806040838503121561238857600080fd5b6123918361235e565b915061239f6020840161235e565b90509250929050565b600080604083850312156123bb57600080fd5b6123c483612080565b915061239f60208401611fee565b6000806000606084860312156123e757600080fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a03121561241957600080fd5b61242288612080565b965061243060208901612080565b955061243e60408901611fee565b945060608801359350608088013560ff8116811461245b57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561248d57600080fd5b8335925061249d60208501612080565b9150604084013590509250925092565b6000602082840312156124bf57600080fd5b6111f582612080565b6000602082840312156124da57600080fd5b6111f58261235e565b600080600080600060a086880312156124fb57600080fd5b8535945061250b60208701612080565b935061251960408701612080565b92506060860135915061252e60808701612080565b90509295509295909350565b8035600f81900b8114611ffe57600080fd5b80356001600160701b0381168114611ffe57600080fd5b6000610180828403121561257657600080fd5b61257e611efe565b6125878361235e565b81526125956020840161235e565b60208201526125a66040840161235e565b60408201526125b76060840161235e565b60608201526125c86080840161253a565b60808201526125d960a0840161235e565b60a08201526125ea60c0840161235e565b60c08201526125fb60e0840161235e565b60e082015261010061260e818501611fee565b90820152610120612620848201611fee565b9082015261014061263284820161254c565b9082015261016061264484820161235e565b908201529392505050565b60006020828403121561266157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b820161269357612693612668565b5060000390565b600082516126ac818460208701611f28565b9190910192915050565b81810381811115610cd657610cd6612668565b80820180821115610cd657610cd6612668565b81810360008312801583831316838312821617156126fc576126fc612668565b5092915050565b634e487b7160e01b600052601260045260246000fd5b60008261272857612728612703565b500690565b8082028115828204841417610cd657610cd6612668565b808201828112600083128015821682158216171561276457612764612668565b505092915050565b602081016004831061278e57634e487b7160e01b600052602160045260246000fd5b91905290565b6000826127a3576127a3612703565b600160ff1b8214600019841416156127bd576127bd612668565b50059056fea2646970667358221220c8506bce6c2cb4763a59f920b7ca38cb31419e1a5d149e08ab65313c3a63af7664736f6c634300081400336102406040523480156200001257600080fd5b5060405162003d1638038062003d168339810160408190526200003591620001b9565b600160005580516001600160a01b03908116608090815260608084015161018052908301516101a05260a0808401516101c05260e08085015190915260c08085015190526101008085015190915261016080850180515190925281516020908101516101209081528351604090810151610140908152945190950151909252850151841661020052918401516102205290830151600880546001600160a01b03191691841691909117905590910151166101e05262000283565b60405161018081016001600160401b03811182821017156200012157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013f57600080fd5b919050565b6000608082840312156200015757600080fd5b604051608081016001600160401b03811182821017156200018857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620001cd57600080fd5b620001d7620000ef565b620001e28362000127565b8152620001f26020840162000127565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200024f81850162000127565b908201526101406200026384820162000127565b90820152610160620002788585830162000144565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161396d620003a9600039600081816109cc015261187d01526000818161099d0152611840015260008181610afa015281816115a901528181611623015261169f01526000610a3e015260008181610a180152611aef0152600081816109f20152611ac901526000610ba601526000610b8001526000610b5a01526000610b34015260008181610ab00152611b15015260008181610a6401528181610d0501526121d0015260008181610a8a01526122cf01526000818161096e01528181610cc6015281816119470152818161199001528181611e7301528181611ebc01528181611fbc015261205a015261396d6000f3fe608060405234801561001057600080fd5b50600436106101ce5760003560e01c80637ecebe0011610104578063becee9c3116100a2578063d816574311610071578063d8165743146103fc578063e44808bc14610411578063e985e9c514610424578063fba560081461043757600080fd5b8063becee9c3146103a9578063c55dae63146103c9578063c69e16ad14610340578063cf210e65146103e957600080fd5b8063a22cb465116100de578063a22cb4651461035b578063ab033ea91461036e578063b0d9658014610381578063bd85b0391461039657600080fd5b80637ecebe001461032d5780638e67f87e146103405780639cd241af1461034857600080fd5b80633656eec2116101715780634e41a1fb1161014b5780634e41a1fb146102df5780634ed2d6ac146102f257806360246c88146103055780637180c8ca1461031a57600080fd5b80633656eec2146102965780633e691db9146102a957806346fbf68e146102bc57600080fd5b806317fad7fc116101ad57806317fad7fc146102245780631c0f12b61461023757806320fc48811461024a57806321ff32a91461027557600080fd5b8062ad800c146101d357806302329a29146101fc57806314e5f07b14610211575b600080fd5b6101e66101e1366004612f16565b610466565b6040516101f39190612f7f565b60405180910390f35b61020f61020a366004612fa0565b61049d565b005b61020f61021f366004612fd4565b6104a9565b61020f6102323660046130b1565b6104c5565b61020f610245366004613142565b6104db565b61025d610258366004612f16565b6104ee565b60405190516001600160801b031681526020016101f3565b610288610283366004613186565b61052f565b6040519081526020016101f3565b6102886102a43660046131c2565b610575565b6102886102b73660046131ee565b6105ae565b6102cf6102ca366004613229565b6105b9565b60405190151581526020016101f3565b6101e66102ed366004612f16565b6105ef565b61020f610300366004613244565b6105fd565b61030d61064b565b6040516101f3919061328a565b61020f61032836600461332b565b610878565b61028861033b366004613229565b610886565b6102886108b2565b61020f610356366004613362565b6108cf565b61020f61036936600461332b565b6108e0565b61020f61037c366004613229565b61094c565b610389610955565b6040516101f39190613397565b6102886103a4366004612f16565b610bdb565b6103bc6103b7366004613474565b610bfd565b6040516101f391906134b6565b6103d1610cb8565b6040516001600160a01b0390911681526020016101f3565b6102886103f7366004612f16565b610cf8565b610404610d41565b6040516101f391906134fa565b61020f61041f36600461360b565b610e4d565b6102cf610432366004613662565b610e95565b61043f610ed9565b6040805182516001600160801b0390811682526020938401511692810192909252016101f3565b606061049861047483610f38565b6040516020016104849190612f7f565b604051602081830303815290604052611066565b919050565b6104a68161108a565b50565b6104ba89898989898989898961110d565b505050505050505050565b6104d3868686868686611320565b505050505050565b6104e884848484336113d4565b50505050565b6040805160208101909152600081526104986007600084815260200190815260200160002060405160200161048491546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261056e9101610484565b9392505050565b6000828152600b602090815260408083206001600160a01b03851684528252808320548151928301526105a89101610484565b92915050565b60006105a882611595565b6001600160a01b0381166000908152600a60209081526040808320549051610498926104849260ff169101901515815260200190565b606061049861047483611710565b8361060781611802565b6001600160a01b0316336001600160a01b03161461063857604051632aab8bd360e01b815260040160405180910390fd5b610644858585856118bf565b5050505050565b6106c4604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006106ce61192c565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b039092169161073991906136b8565b61074391906136cb565b90506000808311610755576000610770565b6107708361076a61076586611a2b565b611b93565b90611bc3565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156108445761083f8486611bd8565b610847565b60005b81526002546001600160801b0316602091820152604051919250610871916104849184910161328a565b5050505090565b6108828282611bed565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104989101610484565b60006108cc60095460405160200161048491815260200190565b90565b6108db838383336118bf565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6104a681611c65565b61095d612e66565b6108cc6040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104849190613397565b6000818152600c60209081526040808320548151928301526104989101610484565b606060008267ffffffffffffffff811115610c1a57610c1a6136de565b604051908082528060200260200182016040528015610c43578160200160208202803683370190505b50905060005b83811015610c9c576000858583818110610c6557610c656136f4565b90506020020135905060008154905080848481518110610c8757610c876136f4565b60209081029190910101525050600101610c49565b50610cb18160405160200161048491906134b6565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916108cc9101610484565b6000610498610d2f610d2a7f0000000000000000000000000000000000000000000000000000000000000000856136b8565b611cd9565b60405160200161048491815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526108cc6001604051602001610484919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610e5781611802565b6001600160a01b0316336001600160a01b031614610e8857604051632aab8bd360e01b815260040160405180910390fd5b6104d386868686866113d4565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff90911615159181019190915290916105a89101610484565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526108cc90606001610484565b606060f882901c6001600160f81b0383166000610f5482611d21565b90506000836003811115610f6a57610f6a61368c565b03610f9c576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061105e565b6001836003811115610fb057610fb061368c565b03610fdc5780604051602001610fc6919061370a565b604051602081830303815290604052935061105e565b6002836003811115610ff057610ff061368c565b036110065780604051602001610fc69190613743565b600383600381111561101a5761101a61368c565b0361105e576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b81526004016110819190612f7f565b60405180910390fd5b336000908152600a602052604090205460ff166110b9576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061110290831515815260200190565b60405180910390a150565b8342111561112e5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166111555760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611243573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461128157604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f6020526040812080549091906112a79061377d565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061133d57506001600160a01b038516155b1561135b5760405163f0dd15fd60e01b815260040160405180910390fd5b82811461137b5760405163174861a760e31b815260040160405180910390fd5b60005b838110156113cb576113c385858381811061139b5761139b6136f4565b9050602002013588888686868181106113b6576113b66136f4565b90506020020135336113d4565b60010161137e565b50505050505050565b6001600160a01b03841615806113f157506001600160a01b038316155b1561140f5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146114d3576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff166114d3576000858152600e602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146114d1576000868152600e602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906114cb9084906136cb565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906115059084906136cb565b90915550506000858152600b602090815260408083206001600160a01b03871684529091528120805484929061153c9084906136b8565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600061159f611e2e565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166115d66020840184613229565b6001600160a01b0316146115fd57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156116465750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b801561165d57506008546001600160a01b03163314155b1561167a576040516282b42960e81b815260040160405180910390fd5b600061168461192c565b60098054600090915590915061169b818386611e58565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e476116f3858588612156565b60405190815260200160405180910390a250506104986001600055565b606060f882901c6001600160f81b038316600061172c82611d21565b905060008360038111156117425761174261368c565b03611774576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061105e565b60018360038111156117885761178861368c565b0361179e5780604051602001610fc69190613796565b60028360038111156117b2576117b261368c565b036117c85780604051602001610fc691906137ce565b60038360038111156117dc576117dc61368c565b0361105e576040516c485950455244524956452d575360981b6020820152602d0161104c565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161197b575047611a06565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156119df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a0391906137fa565b90505b601054600003611a17576000611a25565b601054611a25908290611bd8565b91505090565b611a8860405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e08201526004549091610100830191611b599116612185565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611b8b92900416612185565b905292915050565b6000806000611ba1846121fb565b9150915080610cb15760405163aeeb825d60e01b815260040160405180910390fd5b600061056e8383670de0b6b3a7640000612275565b600061056e83670de0b6b3a764000084612275565b6008546001600160a01b03163314611c17576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b03163314611c8f576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c6000611cea600285612293565b815260200190815260200160002054600c6000611d08600186612293565b8152602001908152602001600020546105a89190613813565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611d53600a85613849565b611d5e9060306136b8565b60f81b81611d6d6001856136cb565b81518110611d7d57611d7d6136f4565b60200101906001600160f81b031916908160001a905350611d9f600a8561385d565b935060015b8415611e2057611db5600a86613849565b611dc09060306136b8565b60f81b826001611dd084876136cb565b611dda91906136cb565b81518110611dea57611dea6136f4565b60200101906001600160f81b031916908160001a905350611e0c600a8661385d565b945080611e188161377d565b915050611da4565b918290030190815292915050565b600260005403611e5157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611ea7575047611f32565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611f0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2f91906137fa565b90505b6000611f3e8686611bc3565b601054909150611f5090829084612275565b95506010548611611f615785611f65565b6010545b9550601054600003611f78576000611f88565b601054611f889087908490612275565b92508560106000828254611f9c91906136cb565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161205057611ff66020860186613229565b6001600160a01b03168460405160006040518083038185875af1925050503d8060008114612040576040519150601f19603f3d011682016040523d82523d6000602084013e612045565b606091505b505080915050612100565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb61208c6020880188613229565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018790526044016020604051808303816000875af11580156120d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120fd9190613871565b90505b8061211e576040516312171d8360e31b815260040160405180910390fd5b61212e6040860160208701612fa0565b6121495761214461213d61192c565b8590611bd8565b61214b565b835b979650505050505050565b60006121686040830160208401612fa0565b1561217457508261056e565b61217e8484611bc3565b905061056e565b600080670de0b6b3a76400006121996122c8565b6121a3919061388e565b90508083116121b35760006121bd565b6121bd81846136cb565b915061056e6121f4670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061388e565b8390611bd8565b600080600080600061220c86612303565b915091508061222357506000958695509350505050565b8560a0015161223187612546565b875161223e9085906138a5565b61224891906138a5565b6122529190613813565b92505050600081121561226b5750600093849350915050565b9360019350915050565b600082600019048411830215820261228c57600080fd5b5091020490565b60006001600160f81b038211156122bd5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006122f47f000000000000000000000000000000000000000000000000000000000000000042613849565b6122fe90426136cb565b905090565b6000806000612325846101400151856101200151611bc390919063ffffffff16565b61010085015160e0860151612339916125ad565b6123439190613813565b90506000612359856000015186602001516125c2565b9050600082131561245c5760008290506000806123aa886000015189602001518a604001518b60a001518c60c00151670de0b6b3a764000061239b91906136cb565b8d606001518e608001516125df565b91509150806123c3575060009788975095505050505050565b8282106124185760006123fd858a60400151868c60c00151670de0b6b3a76400006123ee91906136cb565b8d606001518e608001516126ce565b9050612408816138c5565b9960019950975050505050505050565b600088602001511261244b5760a088015161243390856136cb565b61243c906138c5565b98600198509650505050505050565b60a0880151885161243391906136cb565b6000821215612538576000612470836138c5565b905060006124a48388604001518960c00151670de0b6b3a764000061249591906136cb565b8a606001518b608001516126fe565b90508181106124e057600061243c848960400151858b60c00151670de0b6b3a76400006124d191906136cb565b8c606001518d60800151612794565b60006125128489604001518a60c00151670de0b6b3a764000061250391906136cb565b8b606001518c6080015161286c565b905061252e8860600151838561252891906136cb565b90611bd8565b61243c90826136b8565b506000946001945092505050565b6000612575826101000151670de0b6b3a764000061256491906136cb565b606084015160e085015191906128fb565b6125a3836101400151670de0b6b3a764000061259191906136cb565b60608501516101208601519190612275565b6105a89190613813565b600061056e8383670de0b6b3a76400006128fb565b6000806125cf8385613813565b9050600081121561056e57600080fd5b6000806000881215612601576125f4886138c5565b6125fe90876136b8565b95505b600061260d8a8a6125c2565b9050600061261e828a898989612921565b9050600061264161263989612633898d6125ad565b9061295a565b8890886128fb565b61264b90836136cb565b9050670de0b6b3a7640000811061267f57612678612671670de0b6b3a76400008a611bd8565b829061295a565b9050612697565b612694612671670de0b6b3a76400008a6129b1565b90505b898110156126ae57600080945094505050506126c2565b6126b88a826136cb565b6001945094505050505b97509795505050505050565b6000806126df8888888888886129c6565b9092509050806126f3576126f36000612a88565b509695505050505050565b60008061270e8787878787612aa3565b90506000612739670de0b6b3a76400006127288787611bd8565b61273291906136b8565b83906129b1565b9050670de0b6b3a764000081106127665761275f612671670de0b6b3a7640000886129b1565b905061277e565b61277b612671670de0b6b3a764000088611bd8565b90505b61278881886136cb565b98975050505050505050565b6000806127a48888878787612aa3565b9050858710156127b8576127b86000612a88565b6127c685612633888a6136cb565b9650868110156127da576127da6000612a88565b60006127f284866127eb8b866136cb565b91906128fb565b9050670de0b6b3a7640000811061281f57612818612671670de0b6b3a7640000886129b1565b9050612837565b612834612671670de0b6b3a764000088611bd8565b90505b61284181856129b1565b905088811015612855576128556000612a88565b61285f89826136cb565b9998505050505050505050565b60008061287c8787878787612921565b905060006128a0670de0b6b3a764000061289687876129b1565b6121f491906136b8565b9050670de0b6b3a764000081106128cd576128c6612671670de0b6b3a764000088611bd8565b90506128e5565b6128e2612671670de0b6b3a7640000886129b1565b90505b6128ef8185611bd8565b905061278888826136cb565b600082600019048411830215820261291257600080fd5b50910281810615159190040190565b600061292d858561295a565b61294661293e86612633868b611bc3565b859085612275565b61295091906136b8565b9695505050505050565b6000816000036129735750670de0b6b3a76400006105a8565b82600003612983575060006105a8565b81600061298f85612ac8565b90508181026129a6670de0b6b3a7640000826138e1565b905061295081612cdb565b600061056e83670de0b6b3a7640000846128fb565b60008060006129d88989888888612aa3565b90506129e886612633898b6136b8565b9750878110156129ff576000809250925050612a7d565b6000612a1085876127eb8c866136cb565b9050670de0b6b3a76400008110612a3d57612a36612671670de0b6b3a7640000896129b1565b9050612a55565b612a52612671670de0b6b3a764000089611bd8565b90505b612a5f81866129b1565b9050808a1115612a7657612a73818b6136cb565b93505b6001925050505b965096945050505050565b80604051633c06d78b60e11b8152600401611081919061390f565b6000612aaf858561295a565b612946612ac086612633868b6125ad565b8590856128fb565b6000808213612aea5760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213612cf657506000919050565b680755bf798b4a1bf1e58212612d1f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612f116040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612f2857600080fd5b5035919050565b60005b83811015612f4a578181015183820152602001612f32565b50506000910152565b60008151808452612f6b816020860160208601612f2f565b601f01601f19169290920160200192915050565b60208152600061056e6020830184612f53565b80151581146104a657600080fd5b600060208284031215612fb257600080fd5b813561056e81612f92565b80356001600160a01b038116811461049857600080fd5b60008060008060008060008060006101208a8c031215612ff357600080fd5b8935985060208a0135975061300a60408b01612fbd565b965061301860608b01612fbd565b955060808a013561302881612f92565b945060a08a0135935060c08a013560ff8116811461304557600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f84011261307757600080fd5b50813567ffffffffffffffff81111561308f57600080fd5b6020830191508360208260051b85010111156130aa57600080fd5b9250929050565b600080600080600080608087890312156130ca57600080fd5b6130d387612fbd565b95506130e160208801612fbd565b9450604087013567ffffffffffffffff808211156130fe57600080fd5b61310a8a838b01613065565b9096509450606089013591508082111561312357600080fd5b5061313089828a01613065565b979a9699509497509295939492505050565b6000806000806080858703121561315857600080fd5b8435935061316860208601612fbd565b925061317660408601612fbd565b9396929550929360600135925050565b60008060006060848603121561319b57600080fd5b833592506131ab60208501612fbd565b91506131b960408501612fbd565b90509250925092565b600080604083850312156131d557600080fd5b823591506131e560208401612fbd565b90509250929050565b60006020828403121561320057600080fd5b813567ffffffffffffffff81111561321757600080fd5b82016060818503121561056e57600080fd5b60006020828403121561323b57600080fd5b61056e82612fbd565b6000806000806080858703121561325a57600080fd5b8435935061326a60208601612fbd565b92506040850135915061327f60608601612fbd565b905092959194509250565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561333e57600080fd5b61334783612fbd565b9150602083013561335781612f92565b809150509250929050565b60008060006060848603121561337757600080fd5b8335925061338760208501612fbd565b9150604084013590509250925092565b81516001600160a01b031681526101e0810160208301516133c360208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613427828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b6000806020838503121561348757600080fd5b823567ffffffffffffffff81111561349e57600080fd5b6134aa85828601613065565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156134ee578351835292840192918401916001016134d2565b50909695505050505050565b81516001600160801b031681526101808101602083015161352660208401826001600160801b03169052565b50604083015161354160408401826001600160801b03169052565b50606083015161355c60608401826001600160801b03169052565b5060808301516135716080840182600f0b9052565b5060a083015161358c60a08401826001600160801b03169052565b5060c08301516135a760c08401826001600160801b03169052565b5060e08301516135c260e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b0381168285015261346c565b600080600080600060a0868803121561362357600080fd5b8535945061363360208701612fbd565b935061364160408701612fbd565b92506060860135915061365660808701612fbd565b90509295509295909350565b6000806040838503121561367557600080fd5b61367e83612fbd565b91506131e560208401612fbd565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156105a8576105a86136a2565b818103818111156105a8576105a86136a2565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613736816011850160208701612f2f565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613770816012850160208701612f2f565b9190910160120192915050565b60006001820161378f5761378f6136a2565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516137c1816010850160208701612f2f565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613736816011850160208701612f2f565b60006020828403121561380c57600080fd5b5051919050565b8181036000831280158383131683831282161715610cb157610cb16136a2565b634e487b7160e01b600052601260045260246000fd5b60008261385857613858613833565b500690565b60008261386c5761386c613833565b500490565b60006020828403121561388357600080fd5b815161056e81612f92565b80820281158282048414176105a8576105a86136a2565b808201828112600083128015821682158216171561346c5761346c6136a2565b6000600160ff1b82016138da576138da6136a2565b5060000390565b6000826138f0576138f0613833565b600160ff1b82146000198414161561390a5761390a6136a2565b500590565b602081016004831061393157634e487b7160e01b600052602160045260246000fd5b9190529056fea264697066735822122025ec606e8a647f1ad1f0fb0edee52a19e4961bbcb4cc06f0f253d9177dda82c664736f6c634300081400336102406040523480156200001257600080fd5b5060405162004e1338038062004e138339810160408190526200003591620001b9565b600160005580516001600160a01b03908116608090815260608084015161018052908301516101a05260a0808401516101c05260e08085015190915260c08085015190526101008085015190915261016080850180515190925281516020908101516101209081528351604090810151610140908152945190950151909252850151841661020052918401516102205290830151600880546001600160a01b03191691841691909117905590910151166101e05262000283565b60405161018081016001600160401b03811182821017156200012157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013f57600080fd5b919050565b6000608082840312156200015757600080fd5b604051608081016001600160401b03811182821017156200018857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620001cd57600080fd5b620001d7620000ef565b620001e28362000127565b8152620001f26020840162000127565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200024f81850162000127565b908201526101406200026384820162000127565b90820152610160620002788585830162000144565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614a22620003f1600039600050506000505060005050600081816102230152818161044f01526107e70152600081816105c70152818161061201528181610714015281816115300152818161163801528181611efe01528181611f63015281816121b101526121ed015260008181610284015281816106830152818161142501528181611452015261150a01526000611b0101526000611c5c015260008181610ba90152611c30015260005050600081816102c6015281816106c601526115560152600081816102a5015281816106a501528181610af1015261275a01526000610a4801526000818161095d015281816109a6015281816110ba015281816111a8015281816111f1015281816112b00152818161137f015281816123bf015281816124080152818161250801526125a60152614a226000f3fe60806040526004361061003f5760003560e01c8063074a6de9146100445780634c2ac1d91461007e57806377d05ff41461009f578063cbc13434146100b2575b600080fd5b34801561005057600080fd5b5061006461005f3660046146c9565b6100d2565b604080519283526020830191909152015b60405180910390f35b61009161008c366004614719565b6100ed565b604051908152602001610075565b6100916100ad3660046146c9565b610108565b3480156100be57600080fd5b506100646100cd3660046146c9565b61011f565b6000806100e085858561012d565b915091505b935093915050565b60006100fc86868686866101e6565b90505b95945050505050565b600061011584848461057a565b90505b9392505050565b6000806100e08585856107da565b600080610138610918565b6000610142610942565b905061015561014f610a41565b82610a7c565b5061015f81610e12565b61016b86828787610f4f565b9093509150600061017d848387611089565b905061018c602086018661477d565b60408051858152602081018490529081018490526001600160a01b0391909116907f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f7549060600160405180910390a250506100e56001600055565b60006101f0610918565b600554610100900460ff1615610219576040516321081abf60e01b815260040160405180910390fd5b6102216110b8565b7f00000000000000000000000000000000000000000000000000000000000000008610156102625760405163211ddda360e11b815260040160405180910390fd5b60006102ea61026f611125565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611146565b9050848110806102f957508381115b1561031757604051633b61151160e11b815260040160405180910390fd5b600080610324898661118c565b9150915061033361014f610a41565b50600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d54909161037f916001600160801b03909116906147bc565b6000808052600c6020527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854919250906103ba9083906147cf565b905060008060006103ca866114c1565b90506103d5816115d4565b91506103e08761160b565b6001546001600160801b038082168352600354600f0b6020840152600160801b909104166040820152610412816115d4565b9250818310156104355760405163184d952160e11b815260040160405180910390fd5b61044b848361044481876147bc565b91906116fc565b98507f000000000000000000000000000000000000000000000000000000000000000089101561048e5760405163211ddda360e11b815260040160405180910390fd5b508b61049a8e8a61171a565b10156104b95760405163c972651760e01b815260040160405180910390fd5b6104d160006104cb60208c018c61477d565b8a61172f565b6104da85610e12565b600083156104f1576104ec828561171a565b6104f4565b60005b905060006105038f888d611089565b905061051260208c018c61477d565b604080518c815260208101849052908101899052606081018490526001600160a01b0391909116907fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396099060800160405180910390a25050505050505050506100ff6001600055565b6000610584610918565b61058c6110b8565b60055460ff16156105b057604051637983c05160e01b815260040160405180910390fd5b6000806105bd868561118c565b90925090506105ed7f000000000000000000000000000000000000000000000000000000000000000060026147e2565b82101561060d57604051632afb507160e21b815260040160405180910390fd5b6106387f000000000000000000000000000000000000000000000000000000000000000060026147e2565b61064290836147bc565b6005805460ff19166001179055925061065a826117d8565b600180546001600160801b0319166001600160801b03929092169190911790556106ef6106ea837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611802565b6117d8565b600180546001600160801b03928316600160801b0292169190911790556107386000807f000000000000000000000000000000000000000000000000000000000000000061172f565b610750600061074a602087018761477d565b8561172f565b61075b61014f610a41565b506000610769878387611089565b9050610778602086018661477d565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a25050506101186001600055565b6000806107e5610918565b7f00000000000000000000000000000000000000000000000000000000000000008510156108265760405163211ddda360e11b815260040160405180910390fd5b6000610830610942565b905061083d61014f610a41565b5061084a6000338861189f565b610865600360f81b61085f602087018761477d565b8861172f565b61086e81610e12565b600061087c87838888610f4f565b909450905061088b81886147bc565b9250600061089a858488611089565b90506108a9602087018761477d565b6001600160a01b03167fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be8898386886108e089611982565b604080519586526020860194909452928401919091526060830152608082015260a00160405180910390a25050506100e56001600055565b60026000540361093b57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601610991575047610a1c565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156109f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1991906147f9565b90505b601054600003610a2d576000610a3b565b601054610a3b90829061171a565b91505090565b6000610a6d7f000000000000000000000000000000000000000000000000000000000000000042614828565b610a7790426147bc565b905090565b600082815260076020526040812080546001600160801b0316151580610aa157504284115b15610ab757546001600160801b03169050610e0c565b610ac0836117d8565b81546001600160801b0319166001600160801b0391909116178155610ae483611a40565b5060009050600781610b167f0000000000000000000000000000000000000000000000000000000000000000886147bc565b815260208101919091526040016000908120546001600160801b03169150610b3f600287611be4565b6000818152600c60205260408120549192508115610c7857506001600080610b69848a8884611c19565b915091508060096000828254610b7f91906147cf565b90915550610b93905084600084808e611ce7565b610b9d81836147cf565b9150610bcd8483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611e61565b9150610be1610bdc838b611eac565b611ec1565b60058054600290610c029084906201000090046001600160701b031661483c565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610c2f826117d8565b60058054601090610c51908490600160801b90046001600160801b031661485c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610c8560018a611be4565b6000818152600c60205260409020549091508015610d8d5760019250600080610cb1838c8a6001611c19565b915091508060096000828254610cc791906147cf565b909155508c9050610cdc846000858085611ee7565b610ce682846147bc565b9250610cf5610bdc848e611eac565b60058054600290610d169084906201000090046001600160701b031661483c565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610d43836117d8565b60058054601090610d65908490600160801b90046001600160801b031661485c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610db057610da7610da0858361487c565b60006120dc565b610db089610e12565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a8684610dde8e611982565b60408051948552602085019390935291830152606082015260800160405180910390a2889750505050505050505b92915050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091610e5d916001600160801b03909116906147bc565b905080600003610e6b575050565b6000610e768361218f565b905080600003610e8557505050565b600080610e9b610e96848688612234565b61230d565b91509150610ea8826117d8565b60068054600090610ec39084906001600160801b031661485c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ef0816117d8565b60068054601090610f12908490600160801b90046001600160801b031661485c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f4881610f439061489c565b61160b565b5050505050565b60065460009085906001600160801b031680821115610f7557806001600160801b031691505b81600003610f8a576000809250925050611080565b610f99600360f81b338461189f565b6006546001600160801b03600160801b909104811690600090610fc1908590849086166116fc565b9050610fcc846117d8565b610fd690846148b8565b600680546001600160801b0319166001600160801b0392909216919091179055610fff816117d8565b60068054601090611021908490600160801b90046001600160801b03166148b8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110508189886123a4565b94508461105d88866126a0565b111561107c5760405163c972651760e01b815260040160405180910390fd5b5050505b94509492505050565b600061109b60408301602084016148e9565b156110a7575082610118565b6110b18484611eac565b9050610118565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906111055750600034115b1561112357604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610a77916001600160801b0390911690600f0b6126b5565b600080611155878787866126d2565b905061118161116982866301e133806126e9565b61117b83670de0b6b3a76400006147bc565b9061171a565b979650505050505050565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016111dc575047611267565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611240573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126491906147f9565b90505b600061127960408601602087016148e9565b6112925760105461128d90879084906116fc565b611294565b855b9050600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161135d57813410156112fe576040516312171d8360e31b815260040160405180910390fd5b81341115611358573361131183346147bc565b604051600081818185875af1925050503d806000811461134d576040519150601f19603f3d011682016040523d82523d6000602084013e611352565b606091505b50909150505b6113f7565b6040516323b872dd60e01b8152336004820152306024820152604481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156113d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f49190614906565b90505b80611415576040516312171d8360e31b815260040160405180910390fd5b60105460000361147c57611449877f000000000000000000000000000000000000000000000000000000000000000061171a565b601081905594507f000000000000000000000000000000000000000000000000000000000000000093506114ba92505050565b60105460009061148e908990866116fc565b905080601060008282546114a291906147cf565b909155508190506114b1610942565b95509550505050505b9250929050565b6114c961460b565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e0820152600454909161010083019161159a911661270f565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926115cc9290041661270f565b905292915050565b60008060006115e284612785565b91509150806116045760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b6001546003546001600160801b0380831692600f9290920b91600160801b9004166000808061165d8686867f00000000000000000000000000000000000000000000000000000000000000008b6127ff565b92509250925085831461169457611673836117d8565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146116c5576116a4826128ac565b600380546001600160801b0319166001600160801b03929092169190911790555b8381146116f3576116d5816117d8565b600180546001600160801b03928316600160801b0292169190911790555b50505050505050565b600082600019048411830215820261171357600080fd5b5091020490565b600061011883670de0b6b3a7640000846116fc565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906117619084906147cf565b90915550506000838152600c6020526040812080548392906117849084906147cf565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000600160801b82106117fe57604051630f0af95160e11b815260040160405180910390fd5b5090565b600080611813846301e1338061171a565b905060006118218683611eac565b61183390670de0b6b3a76400006147cf565b9050670de0b6b3a7640000811061186757611860611859670de0b6b3a76400008661171a565b82906128ea565b905061187f565b61187c611859670de0b6b3a76400008661294b565b90505b6118938161188d898b611eac565b90611eac565b98975050505050505050565b6000838152600b602090815260408083206001600160a01b03861684529091529020548111156118e257604051631e9acf1760e31b815260040160405180910390fd5b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906119149084906147bc565b90915550506000838152600c6020526040812080548392906119379084906147bc565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291016117cb565b600080600083116119945760006119a9565b6119a98361188d6119a4866114c1565b6115d4565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691611a1491906147cf565b611a1e91906147bc565b90508015611a3557611a30828261171a565b611a38565b60005b949350505050565b6005546000908190611a63908490600160801b90046001600160801b0316611eac565b6005546201000090046001600160701b03169250905081811115611bdf576000611a8d83836147bc565b9050611a9c6106ea828661294b565b60058054601090611abe908490600160801b90046001600160801b03166148b8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611af7858361171a90919063ffffffff16565b90506000611b25827f0000000000000000000000000000000000000000000000000000000000000000611eac565b90508060096000828254611b3991906147cf565b90915550611b49905081836147bc565b9150611b54826117d8565b60018054600090611b6f9084906001600160801b031661485c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b9c826117d8565b60038054600090611bb1908490600f0b614923565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611c0e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611c26868661171a565b91506000611c54837f0000000000000000000000000000000000000000000000000000000000000000611eac565b9050611c80817f0000000000000000000000000000000000000000000000000000000000000000611eac565b91508315611ca357611c9282826147bc565b611c9c90846147bc565b9250611cba565b611cad82826147bc565b611cb790846147cf565b92505b84861015611cdd57611ccd8387876116fc565b9250611cda8287876116fc565b91505b5094509492505050565b600354600160801b90046001600160801b0316611d306106ea82611d1385670de0b6b3a76400006147e2565b600454600160801b90046001600160801b031691908a6000612960565b600480546001600160801b03928316600160801b029216919091179055611d56866117d8565b611d6090826148b8565b600380546001600160801b03928316600160801b029216919091179055611d86846117d8565b60018054600090611da19084906001600160801b031661485c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611dce836128ac565b60038054600090611de3908490600f0b614923565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611e13856117d8565b60018054601090611e35908490600160801b90046001600160801b03166148b8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611e738461117b8a888a6116fc565b9050611e808884866116fc565b611e8a90826147cf565b905086811115611ea157611e9e87826147bc565b91505b509695505050505050565b60006101188383670de0b6b3a76400006116fc565b6000600160701b82106117fe5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611f2957507f0000000000000000000000000000000000000000000000000000000000000000611f2785836147bc565b105b15611f3857611f386003612a1d565b611f4284826147bc565b600354909150600f0b611f55848261487c565b90508385138015611f8e57507f0000000000000000000000000000000000000000000000000000000000000000611f8c83836126b5565b105b15611f9d57611f9d6001612a1d565b600254600160801b90046001600160801b0316611fdf6106ea82611fc987670de0b6b3a76400006147e2565b6004546001600160801b031691908c6000612960565b600480546001600160801b0319166001600160801b039290921691909117905561200988826147bc565b9050612014816117d8565b600280546001600160801b03928316600160801b02921691909117905561203a836117d8565b600180546001600160801b0319166001600160801b0392909216919091179055612063826128ac565b600380546001600160801b0319166001600160801b039290921691909117905561208c876117d8565b600180546010906120ae908490600160801b90046001600160801b031661485c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006121056120eb8483612a41565b6120f6846000612a41565b612100919061487c565b6128ac565b9050600081600f0b131561215a57600280548291906000906121319084906001600160801b031661485c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561218a5761216f81614950565b600280546000906121319084906001600160801b03166148b8565b505050565b60025460009081906121aa906001600160801b03168461294b565b90506121d67f0000000000000000000000000000000000000000000000000000000000000000826147cf565b6001546001600160801b0316111561222e576001547f0000000000000000000000000000000000000000000000000000000000000000906122219083906001600160801b03166147bc565b61222b91906147bc565b91505b50919050565b61223c614665565b6000612247836114c1565b90506000612254826115d4565b90506000612275836101400151846101200151611eac90919063ffffffff16565b61010084015160e0850151612289916126a0565b612293919061487c565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b60008060006123248460c001518560e001516126b5565b905060006123328583612a57565b905060006123408683612d55565b90508060000361235857506000958695509350505050565b8560600151811161236d579590945092505050565b506060850151600061237f8785612e00565b9050806000036123985750600096879650945050505050565b90969095509350505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016123f357504761247e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612457573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061247b91906147f9565b90505b600061248a8686611eac565b60105490915061249c908290846116fc565b955060105486116124ad57856124b1565b6010545b95506010546000036124c45760006124d4565b6010546124d490879084906116fc565b925085601060008282546124e891906147bc565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161259c57612542602086018661477d565b6001600160a01b03168460405160006040518083038185875af1925050503d806000811461258c576040519150601f19603f3d011682016040523d82523d6000602084013e612591565b606091505b50508091505061264c565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb6125d8602088018861477d565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018790526044016020604051808303816000875af1158015612625573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126499190614906565b90505b8061266a576040516312171d8360e31b815260040160405180910390fd5b61267a60408601602087016148e9565b61269557612690612689610942565b859061171a565b611181565b509195945050505050565b60006101188383670de0b6b3a76400006126e9565b6000806126c2838561487c565b9050600081121561011857600080fd5b60006100ff826126e38588886116fc565b906128ea565b600082600019048411830215820261270057600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612723610a41565b61272d91906147e2565b905080831161273d576000612747565b61274781846147bc565b915061222b61277e670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006147e2565b839061171a565b60008060008060006127968661322a565b91509150806127ad57506000958695509350505050565b8560a001516127bb87613467565b87516127c8908590614976565b6127d29190614976565b6127dc919061487c565b9250505060008112156127f55750600093849350915050565b9360019350915050565b6000806000836000036128195750869150859050846128a1565b6000612825858a614976565b9050858112156128485760405163585fe6df60e11b815260040160405180910390fd5b809350600088126128655761285e84898b6116fc565b9250612885565b6128796128718961489c565b85908b6116fc565b6128829061489c565b92505b61289d876128938b8b6126b5565b61044487876126b5565b9150505b955095509592505050565b600060016001607f1b031982128015906128cd575060016001607f1b038213155b6117fe5760405163a5353be560e01b815260040160405180910390fd5b6000816000036129035750670de0b6b3a7640000610e0c565b8260000361291357506000610e0c565b81600061291f856134ce565b9050818102612936670de0b6b3a764000082614996565b9050612941816136e1565b9695505050505050565b600061011883670de0b6b3a7640000846126e9565b6000826000036129715750846100ff565b81156129e3576129a261298484876147cf565b61298e8587611eac565b612998888a611eac565b61117b91906147cf565b905060006129b0858861386c565b905060006129be868961387b565b9050818310156129d0578192506129dc565b808311156129dc578092505b50506100ff565b8285036129f2575060006100ff565b6100fc6129ff84876147bc565b612a0985876126a0565b612a13888a611eac565b61117b91906147bc565b80604051633c06d78b60e11b8152600401612a3891906149c4565b60405180910390fd5b6000818313612a505781610118565b5090919050565b6000808360a0015112612a6f57506080820151610e0c565b60008360a00151612a7f9061489c565b9050612ab08460c001518560e00151866101000151876000015160a001518860800151612aab9061489c565b6127ff565b865160408101919091526020808201929092529190915284518051910151600091612b1091612adf91906126b5565b8651604081015160c090910151612afe90670de0b6b3a76400006147bc565b8851606081015160809091015161388a565b9050818110612b26575050506080820151610e0c565b506000612b34858584613914565b905060005b6003811015612cb057612b688660c001518760e00151886101000151896000015160a0015186612aab9061489c565b885160408101919091526020808201929092529190915286518051910151600091612bc891612b9791906126b5565b8851604081015160c090910151612bb690670de0b6b3a76400006147bc565b8a51606081015160809091015161388a565b9050600080612bd78989613ab8565b9150915080612be857505050612cb0565b85831115612c4457849650612c14620f4240670de0b6b3a7640000612c0d91906147cf565b8790611eac565b8311612c2557505050505050610e0c565b612c338261117b88866147bc565b612c3d90866147cf565b9450612c8e565b85831015612c80576000612c5c8361117b868a6147bc565b9050858110612c6e5750505050612cb0565b612c7881876147bc565b955050612c8e565b849650505050505050610e0c565b8860800151851115612ca257886080015194505b836001019350505050612b39565b50828114612d4d57612cde8560c001518660e00151876101000151886000015160a0015185612aab9061489c565b875160408101919091526020808201929092529190915285518051910151600091612d3e91612d0d91906126b5565b8751604081015160c090910151612d2c90670de0b6b3a76400006147bc565b8951606081015160809091015161388a565b9050828110612d4b578193505b505b505092915050565b6000612d7d8360c001518460e00151856101000151866000015160a0015186612aab9061489c565b8551604081019190915260208101919091525282516000908190612da090612785565b91509150801580612db5575084602001518210155b15612dc557600092505050610e0c565b600085606001518660400151612ddb91906147cf565b9050612df6838760200151836116fc9092919063ffffffff16565b61294190826147bc565b60008083606001518460400151612e1791906147cf565b90508360a00151600003612e415760608401516020850151612e3991836116fc565b915050610e0c565b60208401516060850151600091612e599190846116fc565b905060008560a00151131561309b5760005b600481101561309557612e9a8660c001518760e00151886101000151896000015160a0015186612aab9061489c565b885160408101919091526020810191909152528551600090612ebb906115d4565b9050612ec8878286613d26565b15612ed35750613095565b865180516020820151604083015160a084015160c0909401516000948594612f209490939092909190612f0e90670de0b6b3a76400006147bc565b8e516060810151608090910151613d9f565b9150915080612f3157505050613095565b6000828a60a0015111612f9457612f4d8a8a8c60a00151613e81565b92509050811580612f665750670de0b6b3a76400008110155b15612f7b576000975050505050505050610e0c565b612f8d81670de0b6b3a76400006147bc565b9050612fc6565b612f9d8a61413f565b909650915081612fb7576000975050505050505050610e0c565b85975050505050505050610e0c565b6000612fe38b604001518c602001516126a090919063ffffffff16565b612fed868a611eac565b612ff7919061487c565b905060008113156130275761301661300f838a6126a0565b829061171a565b61302090886147cf565b9650613085565b600081121561307b57600061304861303f848b6126a0565b61117b8461489c565b9050878110156130635761305c81896147bc565b9750613075565b60009950505050505050505050610e0c565b50613085565b5050505050613095565b8560010195505050505050612e6b565b50611a38565b60005b6004811015613221576130cd8660c001518760e00151886101000151896000015160a0015186612aab9061489c565b8851604081019190915260208101919091525285516000906130ee906115d4565b90506130fb878286613d26565b156131065750613221565b60008061312189898b60a0015161311c9061489c565b61422a565b9150915080158061313a5750670de0b6b3a76400008210155b1561314e5760009650505050505050610e0c565b61316082670de0b6b3a76400006147bc565b9150600061317f8a604001518b602001516126a090919063ffffffff16565b6131898589611eac565b613193919061487c565b905060008113156131bd576131ac8761117b838661171a565b6131b690876147cf565b9550613212565b60008112156132095760006131d78861117b86818661489c565b9050868110156131f2576131eb81886147bc565b9650613203565b600098505050505050505050610e0c565b50613212565b50505050613221565b8460010194505050505061309e565b50949350505050565b600080600061324c846101400151856101200151611eac90919063ffffffff16565b61010085015160e0860151613260916126a0565b61326a919061487c565b90506000613280856000015186602001516126b5565b905060008213156133835760008290506000806132d1886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006132c291906147bc565b8d606001518e60800151613d9f565b91509150806132ea575060009788975095505050505050565b82821061333f576000613324858a60400151868c60c00151670de0b6b3a764000061331591906147bc565b8d606001518e60800151614369565b905061332f8161489c565b9960019950975050505050505050565b60008860200151126133725760a088015161335a90856147bc565b6133639061489c565b98600198509650505050505050565b60a0880151885161335a91906147bc565b60008212156134595760006133978361489c565b905060006133cb8388604001518960c00151670de0b6b3a76400006133bc91906147bc565b8a606001518b6080015161388a565b9050818110613407576000613363848960400151858b60c00151670de0b6b3a76400006133f891906147bc565b8c606001518d6080015161438e565b60006134398489604001518a60c00151670de0b6b3a764000061342a91906147bc565b8b606001518c60800151614466565b905061344f8860600151838561117b91906147bc565b61336390826147cf565b506000946001945092505050565b6000613496826101000151670de0b6b3a764000061348591906147bc565b606084015160e085015191906126e9565b6134c4836101400151670de0b6b3a76400006134b291906147bc565b606085015161012086015191906116fc565b610e0c919061487c565b60008082136134f05760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136136fc57506000919050565b680755bf798b4a1bf1e58212613725576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600081831161222e5782610118565b6000818311612a505781610118565b60008061389a87878787876144f5565b905060006138c5670de0b6b3a76400006138b4878761171a565b6138be91906147cf565b839061294b565b9050670de0b6b3a764000081106138f2576138eb611859670de0b6b3a76400008861294b565b905061390a565b613907611859670de0b6b3a76400008861171a565b90505b61189381886147bc565b82516080810151606090910151600091829161398391670de0b6b3a76400009161393d9161171a565b61394791906147cf565b610100870151875160c0015161397d91889161396b90670de0b6b3a76400006147bc565b8a5160608101516080909101516144f5565b9061294b565b9050670de0b6b3a764000081106139ca57845160c001516139c390611859906139b490670de0b6b3a76400006147bc565b670de0b6b3a76400009061294b565b90506139fc565b845160c001516139f990611859906139ea90670de0b6b3a76400006147bc565b670de0b6b3a76400009061171a565b90505b613a0683826147cf565b905060008560e0015112613a6257613a5b613a54613a358760c001518860e0015161294b90919063ffffffff16565b613a4790670de0b6b3a76400006147bc565b61010088015190876116fc565b829061294b565b9050613a93565b613a90613a54613a7e8760c001518860e0015161117b9061489c565b613a4790670de0b6b3a76400006147cf565b90505b8460c001518110613aa8576000915050610118565b808560c001516100ff91906147bc565b8151805160209091015160009182918291613ad2916126b5565b855160c0810151604090910151919250600091613b0991613afd91613af6916128ea565b87906126a0565b6101008801519061171a565b865160c0810151608090910151613b3491613b28916126e390876126a0565b8851606001519061171a565b613b3e91906147cf565b90506000613b7d83886000015160400151896000015160c00151670de0b6b3a7640000613b6b91906147bc565b8a516060810151608090910151614524565b9050670de0b6b3a76400008110613bd457613bcd613bc6613bbf896000015160c00151670de0b6b3a7640000613bb391906147bc565b8a5160c001519061171a565b83906128ea565b8390611eac565b9150613c08565b613c05613bc6613bbf896000015160c00151670de0b6b3a7640000613bf991906147bc565b8a5160c001519061294b565b91505b613c5861277e613c2d896000015160c00151670de0b6b3a76400006139b491906147bc565b89516080810151606090910151670de0b6b3a764000091613c4e919061294b565b6126e391906147cf565b91506000613c748789610100015161294b90919063ffffffff16565b9050808311613c8e57613c8783826147bc565b9250613c9e565b60008095509550505050506114ba565b60008860e0015112613ce857613ce183613cc98a60c001518b60e0015161171a90919063ffffffff16565b613cdb90670de0b6b3a76400006147bc565b906126a0565b9250613d17565b613d1483613d028a60c001518b60e0015161397d9061489c565b613cdb90670de0b6b3a76400006147cf565b92505b50909660019650945050505050565b600080613d4084866020015161171a90919063ffffffff16565b90506000613d5b86604001518561171a90919063ffffffff16565b905081811015613d7057600092505050610118565b8181101580156129415750613d94613bc6633b9aca00670de0b6b3a76400006147cf565b101595945050505050565b6000806000881215613dc157613db48861489c565b613dbe90876147cf565b95505b6000613dcd8a8a6126b5565b90506000613dde828a898989614524565b90506000613dfb613df3896126e3898d6126a0565b8890886126e9565b613e0590836147bc565b9050670de0b6b3a76400008110613e3257613e2b611859670de0b6b3a76400008a61171a565b9050613e4a565b613e47611859670de0b6b3a76400008a61294b565b90505b89811015613e615760008094509450505050613e75565b613e6b8a826147bc565b6001945094505050505b97509795505050505050565b8251805160209091015160009182918291613e9b916126b5565b90506000613ed8613ecc613ec5896000015160c00151888b60000151604001516126e391906147cf565b88906126a0565b6101008901519061171a565b875160c0810151604090910151613f0991613efd91613ef6916128ea565b8990611eac565b6101008a01519061294b565b885160c0810151608090910151613f3491613f28916126e39088611eac565b8a51606001519061294b565b613f3e91906147cf565b613f4891906147bc565b90506000613f87838960000151604001518a6000015160c00151670de0b6b3a7640000613f7591906147bc565b8b5160608101516080909101516144f5565b90506000613fbb896000015160c00151670de0b6b3a7640000613faa91906147bc565b8a51604001516126e3908a906147cf565b905080821015613fd55760008095509550505050506100e5565b613ff6613fe282846147bc565b8a51606081015160809091015191906126e9565b9050670de0b6b3a7640000811061403a57885160c00151614033906118599061402790670de0b6b3a76400006147bc565b8b5160c001519061294b565b9050614069565b885160c00151614066906118599061405a90670de0b6b3a76400006147bc565b8b5160c001519061171a565b90505b88516060015161407c90849083906126e9565b925082670de0b6b3a7640000106140a65761409f83670de0b6b3a76400006147bc565b92506140b7565b6000600195509550505050506100e5565b60008960e0015112614101576140fa6140e18a60c001518b60e0015161294b90919063ffffffff16565b6140f390670de0b6b3a76400006147bc565b8490611eac565b925061412f565b61412c61411a8a60c001518b60e0015161117b9061489c565b6140f390670de0b6b3a76400006147cf565b92505b5090976001975095505050505050565b60008060008360e001511361415957506000928392509050565b60c083015183515260e0830151835160200152610100830151835160400152825160009061418690613467565b905060008082126141c8576040850151606086015183916141b7916141ab90826147cf565b602089015191906126e9565b6141c191906147bc565b90506141f7565b6141d18261489c565b604086015160608701516141ea91906141ab90826147cf565b6141f491906147cf565b90505b60e085015160c086015161420c9183906126e9565b9050808560c0015161421e91906147bc565b95600195509350505050565b8251805160209091015160009182918291614244916126b5565b9050600061426e613ecc613ec5896000015160c00151888b60000151604001516126e391906147bc565b875160c081015160409091015161428c91613efd91613ef6916128ea565b885160c08101516080909101516142ab91613f28916126e39088611eac565b6142b591906147cf565b6142bf91906147bc565b905060006142ec838960000151604001518a6000015160c00151670de0b6b3a7640000613f7591906147bc565b90506000614320896000015160c00151670de0b6b3a764000061430f91906147bc565b8a51604001516126e3908a906147bc565b90508082101561433a5760008095509550505050506100e5565b614347613fe282846147bc565b9050885160c00151614033906118599061402790670de0b6b3a76400006147bc565b60008061437a888888888888614549565b909250905080611ea157611ea16000612a1d565b60008061439e88888787876144f5565b9050858710156143b2576143b26000612a1d565b6143c0856126e3888a6147bc565b9650868110156143d4576143d46000612a1d565b60006143ec84866143e58b866147bc565b91906126e9565b9050670de0b6b3a7640000811061441957614412611859670de0b6b3a76400008861294b565b9050614431565b61442e611859670de0b6b3a76400008861171a565b90505b61443b818561294b565b90508881101561444f5761444f6000612a1d565b61445989826147bc565b9998505050505050505050565b6000806144768787878787614524565b9050600061449a670de0b6b3a7640000614490878761294b565b61277e91906147cf565b9050670de0b6b3a764000081106144c7576144c0611859670de0b6b3a76400008861171a565b90506144df565b6144dc611859670de0b6b3a76400008861294b565b90505b6144e9818561171a565b905061189388826147bc565b600061450185856128ea565b61451a614512866126e3868b6126a0565b8590856126e9565b6100fc91906147cf565b600061453085856128ea565b61451a614541866126e3868b611eac565b8590856116fc565b600080600061455b89898888886144f5565b905061456b866126e3898b6147cf565b975087811015614582576000809250925050614600565b600061459385876143e58c866147bc565b9050670de0b6b3a764000081106145c0576145b9611859670de0b6b3a76400008961294b565b90506145d8565b6145d5611859670de0b6b3a76400008961171a565b90505b6145e2818661294b565b9050808a11156145f9576145f6818b6147bc565b93505b6001925050505b965096945050505050565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061467961460b565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561222e57600080fd5b6000806000606084860312156146de57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561470357600080fd5b61470f868287016146b7565b9150509250925092565b600080600080600060a0868803121561473157600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561476457600080fd5b614770888289016146b7565b9150509295509295909350565b60006020828403121561478f57600080fd5b81356001600160a01b038116811461011857600080fd5b634e487b7160e01b600052601160045260246000fd5b81810381811115610e0c57610e0c6147a6565b80820180821115610e0c57610e0c6147a6565b8082028115828204841417610e0c57610e0c6147a6565b60006020828403121561480b57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008261483757614837614812565b500690565b6001600160701b03818116838216019080821115611604576116046147a6565b6001600160801b03818116838216019080821115611604576116046147a6565b8181036000831280158383131683831282161715611604576116046147a6565b6000600160ff1b82016148b1576148b16147a6565b5060000390565b6001600160801b03828116828216039080821115611604576116046147a6565b80151581146148e657600080fd5b50565b6000602082840312156148fb57600080fd5b8135610118816148d8565b60006020828403121561491857600080fd5b8151610118816148d8565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e0c57610e0c6147a6565b600081600f0b60016001607f1b0319810361496d5761496d6147a6565b60000392915050565b8082018281126000831280158216821582161715612d4d57612d4d6147a6565b6000826149a5576149a5614812565b600160ff1b8214600019841416156149bf576149bf6147a6565b500590565b60208101600483106149e657634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220fe2cffb8117790748fdd3c8bf2b27d31d2bf101ead6acb758ee615608331aa8f64736f6c634300081400336102406040523480156200001257600080fd5b5060405162004c2838038062004c288339810160408190526200003591620001b9565b600160005580516001600160a01b03908116608090815260608084015161018052908301516101a05260a0808401516101c05260e08085015190915260c08085015190526101008085015190915261016080850180515190925281516020908101516101209081528351604090810151610140908152945190950151909252850151841661020052918401516102205290830151600880546001600160a01b03191691841691909117905590910151166101e05262000283565b60405161018081016001600160401b03811182821017156200012157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013f57600080fd5b919050565b6000608082840312156200015757600080fd5b604051608081016001600160401b03811182821017156200018857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620001cd57600080fd5b620001d7620000ef565b620001e28362000127565b8152620001f26020840162000127565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200024f81850162000127565b908201526101406200026384820162000127565b90820152610160620002788585830162000144565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161482e620003fa6000396000505060005050600050506000818160d201526102930152600081816116dc0152818161174101528181612193015281816121cf015281816123b00152612587015260008181610b8a01528181610bd7015281816115af01528181611e570152612561015260006119f5015260008181611b1b01528181611f240152611f9d0152600081816107a701528181610d3101528181611aef0152611f71015260008181610c290152611ef0015260008181610b6801528181610bf80152818161158d01528181611e7801526125ad0152600081816106ef01528181610cb70152818161163f01528181611d2201526130eb0152600081816104700152818161052501526118c1015260008181610596015281816105df015281816112410152818161128a0152818161138a0152611428015261482e6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806329b23fc114610046578063ded062311461006b578063ed64bab21461007e575b600080fd5b610059610054366004614514565b610093565b60405190815260200160405180910390f35b610059610079366004614514565b6100ac565b61009161008c366004614573565b6100ba565b005b60006100a1858585856100c6565b90505b949350505050565b60006100a185858585610287565b6100c38161043f565b50565b60006100d0610551565b7f00000000000000000000000000000000000000000000000000000000000000008410156101115760405163211ddda360e11b815260040160405180910390fd5b600061011b61057b565b9050610127868261067a565b5061013d610136600288610a10565b3387610a45565b60008060008060006101508a878d610b30565b945094509450945094508a4210156101b657806009600082825461017491906145a2565b9091555061018790508a8685858f610d8a565b60006101928c610f09565b90506101a76101a18c836145b5565b82610f51565b6101b087610fff565b506101c3565b6101c08487611135565b93505b60006101d085888b611226565b905060006101df82898c611526565b90508a8110156102025760405163c972651760e01b815260040160405180910390fd5b8b8d61020f600282610a10565b61021c60208e018e6145d5565b60408051848152602081018790529081018d9052606081018590526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a35091985050505050505050506100a46001600055565b6000610291610551565b7f00000000000000000000000000000000000000000000000000000000000000008410156102d25760405163211ddda360e11b815260040160405180910390fd5b60006102dc61057b565b90506102e8868261067a565b506102f7610136600188610a10565b600080600080600061030a8a878d611555565b9450945094509450945060008b90508b42101561036f57816009600082825461033391906145a2565b9091555061034690508b878686856116c5565b600061035182610f09565b90506103606101a18d836145fe565b61036988610fff565b5061037c565b6103798588611135565b94505b600061038986898c611226565b90506000610398828a8d611526565b9050808c11156103bb5760405163c972651760e01b815260040160405180910390fd5b8c6103c7600185610a10565b6103d460208e018e6145d5565b60408051878152602081018690529081018d9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a35090985050505050505050506100a46001600055565b6000818152600760205260409020546001600160801b03161561045f5750565b60006104696118ba565b90506104957f000000000000000000000000000000000000000000000000000000000000000083614634565b1515806104a157508181105b156104bf5760405163ecd29e8160e01b815260040160405180910390fd5b8082036104dc576104d7816104d261057b565b61067a565b505050565b815b6000818152600760205260409020546001600160801b03168282036105085761050561057b565b90505b801561051f57610518848261067a565b5050505050565b5061054a7f0000000000000000000000000000000000000000000000000000000000000000826145a2565b90506104de565b60026000540361057457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016105ca575047610655565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561062e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106529190614648565b90505b601054600003610666576000610674565b6010546106749082906118f5565b91505090565b600082815260076020526040812080546001600160801b031615158061069f57504284115b156106b557546001600160801b03169050610a0a565b6106be8361190a565b81546001600160801b0319166001600160801b03919091161781556106e283611934565b50600090506007816107147f000000000000000000000000000000000000000000000000000000000000000088614661565b815260208101919091526040016000908120546001600160801b0316915061073d600287610a10565b6000818152600c6020526040812054919250811561087657506001600080610767848a8884611ad8565b91509150806009600082825461077d91906145a2565b90915550610791905084600084808e610d8a565b61079b81836145a2565b91506107cb8483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611ba6565b91506107df6107da838b611bf7565b611c0c565b600580546002906108009084906201000090046001600160701b0316614674565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061082d8261190a565b6005805460109061084f908490600160801b90046001600160801b0316614694565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061088360018a610a10565b6000818152600c6020526040902054909150801561098b57600192506000806108af838c8a6001611ad8565b9150915080600960008282546108c591906145a2565b909155508c90506108da8460008580856116c5565b6108e48284614661565b92506108f36107da848e611bf7565b600580546002906109149084906201000090046001600160701b0316614674565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109418361190a565b60058054601090610963908490600160801b90046001600160801b0316614694565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b82156109ae576109a561099e85836145b5565b6000610f51565b6109ae89610fff565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a86846109dc8e611c32565b60408051948552602085019390935291830152606082015260800160405180910390a2889750505050505050505b92915050565b60006001600160f81b03821115610a3a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b0386168452909152902054811115610a8857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290610aba908490614661565b90915550506000838152600c602052604081208054839290610add908490614661565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000806000806000806000610b4488611cf5565b9050610bae610b51611d46565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611d67565b909850955091506000610c1c610bc2611d46565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611dd7565b9050610c528389610c4d847f0000000000000000000000000000000000000000000000000000000000000000611dee565b611e1e565b15610c6157610c616002611ea7565b8a8a60008080610c7385888887611ecb565b9b5091945092509050610c868184614661565b610c9090896145a2565b9750610c9c82846145a2565b610ca6908c6145a2565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a610ce19190614661565b815260208101919091526040016000908120546001600160801b03169150428911610d23576000898152600760205260409020546001600160801b0316610d25565b895b9050610d558b8784848e7f0000000000000000000000000000000000000000000000000000000000000000611ba6565b9650610d618487614661565b9550610d738787858786866000611fd9565b9b9f939e50919c50909a5090975050505050505050565b600354600160801b90046001600160801b0316610dd8610dd382610db685670de0b6b3a76400006146b4565b600454600160801b90046001600160801b031691908a6000612054565b61190a565b600480546001600160801b03928316600160801b029216919091179055610dfe8661190a565b610e0890826146cb565b600380546001600160801b03928316600160801b029216919091179055610e2e8461190a565b60018054600090610e499084906001600160801b0316614694565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610e768361211d565b60038054600090610e8b908490600f0b6146eb565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550610ebb8561190a565b60018054601090610edd908490600160801b90046001600160801b03166146cb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000600c6000610f1a600285610a10565b815260200190815260200160002054600c6000610f38600186610a10565b815260200190815260200160002054610a0a91906145b5565b6000610f7a610f60848361215b565b610f6b84600061215b565b610f7591906145b5565b61211d565b9050600081600f0b1315610fcf5760028054829190600090610fa69084906001600160801b0316614694565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156104d757610fe481614718565b60028054600090610fa69084906001600160801b03166146cb565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d54909161104a916001600160801b0390911690614661565b905080600003611058575050565b600061106383612171565b90508060000361107257505050565b600080611088611083848688612213565b6122ec565b915091506110958261190a565b600680546000906110b09084906001600160801b0316614694565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110dd8161190a565b600680546010906110ff908490600160801b90046001600160801b0316614694565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610518816111309061473e565b612383565b600080600061114384611934565b909250905060006111548686611bf7565b90508183111561116c57611169868385612474565b95505b828110156111855761117e8184614661565b925061118a565b600092505b61119383611c0c565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156111ef576111e88782614661565b90506111f3565b5060005b6111fc8161190a565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611275575047611300565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156112d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112fd9190614648565b90505b600061130c8686611bf7565b60105490915061131e90829084612474565b9550601054861161132f5785611333565b6010545b9550601054600003611346576000611356565b6010546113569087908490612474565b9250856010600082825461136a9190614661565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161141e576113c460208601866145d5565b6001600160a01b03168460405160006040518083038185875af1925050503d806000811461140e576040519150601f19603f3d011682016040523d82523d6000602084013e611413565b606091505b5050809150506114ce565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb61145a60208801886145d5565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018790526044016020604051808303816000875af11580156114a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114cb9190614768565b90505b806114ec576040516312171d8360e31b815260040160405180910390fd5b6114fc6040860160208701614785565b6115175761151261150b61057b565b85906118f5565b611519565b835b93505050505b9392505050565b60006115386040830160208401614785565b1561154457508261151f565b61154e8484611bf7565b905061151f565b600080600080600080600061156988611cf5565b90506115d3611576611d46565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000612492565b90985096509150600080806115e9610bc2611d46565b90506115f78d85838f611ecb565b9850919450925061160a90508386614661565b945061161682846145a2565b611620908a614661565b985061162c868a6145a2565b9750505050506116b085858385600760007f00000000000000000000000000000000000000000000000000000000000000008e6116699190614661565b81526020810191909152604001600020546001600160801b0316428d116116a75760008d8152600760205260409020546001600160801b03166116a9565b8d5b6001611fd9565b999d939c50919a509098509095505050505050565b6001546001600160801b03168381108061170757507f00000000000000000000000000000000000000000000000000000000000000006117058583614661565b105b15611716576117166003611ea7565b6117208482614661565b600354909150600f0b61173384826145b5565b9050838513801561176c57507f000000000000000000000000000000000000000000000000000000000000000061176a83836124e6565b105b1561177b5761177b6001611ea7565b600254600160801b90046001600160801b03166117bd610dd3826117a787670de0b6b3a76400006146b4565b6004546001600160801b031691908c6000612054565b600480546001600160801b0319166001600160801b03929092169190911790556117e78882614661565b90506117f28161190a565b600280546001600160801b03928316600160801b0292169190911790556118188361190a565b600180546001600160801b0319166001600160801b03929092169190911790556118418261211d565b600380546001600160801b0319166001600160801b039290921691909117905561186a8761190a565b6001805460109061188c908490600160801b90046001600160801b0316614694565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006118e67f000000000000000000000000000000000000000000000000000000000000000042614634565b6118f09042614661565b905090565b600061151f83670de0b6b3a764000084612474565b6000600160801b821061193057604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190611957908490600160801b90046001600160801b0316611bf7565b6005546201000090046001600160701b03169250905081811115611ad35760006119818383614661565b9050611990610dd38286612503565b600580546010906119b2908490600160801b90046001600160801b03166146cb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006119eb85836118f590919063ffffffff16565b90506000611a19827f0000000000000000000000000000000000000000000000000000000000000000611bf7565b90508060096000828254611a2d91906145a2565b90915550611a3d90508183614661565b9150611a488261190a565b60018054600090611a639084906001600160801b0316614694565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a908261190a565b60038054600090611aa5908490600f0b6146eb565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611ae586866118f5565b91506000611b13837f0000000000000000000000000000000000000000000000000000000000000000611bf7565b9050611b3f817f0000000000000000000000000000000000000000000000000000000000000000611bf7565b91508315611b6257611b518282614661565b611b5b9084614661565b9250611b79565b611b6c8282614661565b611b7690846145a2565b92505b84861015611b9c57611b8c838787612474565b9250611b99828787612474565b91505b5094509492505050565b600080611bbe84611bb88a888a612474565b906118f5565b9050611bcb888486612474565b611bd590826145a2565b905086811115611bec57611be98782614661565b91505b509695505050505050565b600061151f8383670de0b6b3a7640000612474565b6000600160701b82106119305760405163086b151760e11b815260040160405180910390fd5b60008060008311611c44576000611c5f565b611c5f83611c59611c5486612518565b61262b565b90611bf7565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691611cca91906145a2565b611cd49190614661565b90508015611ceb57611ce682826118f5565b6100a4565b6000949350505050565b600080611d006118ba565b9050808311611d10576000611d1a565b611d1a8184614661565b915061151f827f00000000000000000000000000000000000000000000000000000000000000006118f5565b6001546003546000916118f0916001600160801b0390911690600f0b6124e6565b60008080611d88611d8088670de0b6b3a7640000614661565b899087612662565b90508615611dca57611d9a8888612688565b9150611dbb8a8a84611db48a670de0b6b3a7640000614661565b898961269d565b9250611dc783826145a2565b90505b9750975097945050505050565b60006100a182611de8858888612474565b9061277c565b6000611e0c611e0584670de0b6b3a7640000614661565b8390612688565b61151f90670de0b6b3a7640000614661565b600080611e9c85611e2d611d46565b611e3791906145a2565b600154611e55908790600160801b90046001600160801b0316614661565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611dd7565b909210949350505050565b80604051633c06d78b60e11b8152600401611ec291906147a2565b60405180910390fd5b6000808080611f1c8786611f158b611c59611eee8c670de0b6b3a7640000614661565b7f000000000000000000000000000000000000000000000000000000000000000090611bf7565b9190612474565b9350611f48847f0000000000000000000000000000000000000000000000000000000000000000611bf7565b91506000611f69611f6189670de0b6b3a7640000614661565b8a9088612474565b9050611f95817f0000000000000000000000000000000000000000000000000000000000000000611bf7565b9350611fc1847f0000000000000000000000000000000000000000000000000000000000000000611bf7565b611fcb90846145a2565b915050945094509450949050565b60008060008060008088881015612036578615611ffe57611ffb8d898b612474565b9c505b6120098c898b612474565b9b506120158b8d6145b5565b90506120228b898b612474565b9a5061202f8a898b612474565b9950612043565b6120408b8d6145b5565b90505b9b9c9a9b999a975050505050505050565b600082600003612065575084612114565b81156120d75761209661207884876145a2565b6120828587611bf7565b61208c888a611bf7565b611bb891906145a2565b905060006120a485886127dd565b905060006120b286896127ec565b9050818310156120c4578192506120d0565b808311156120d0578092505b5050612114565b8285036120e657506000612114565b6121116120f38487614661565b6120fd8587612688565b612107888a611bf7565b611bb89190614661565b90505b95945050505050565b600060016001607f1b0319821280159061213e575060016001607f1b038213155b6119305760405163a5353be560e01b815260040160405180910390fd5b600081831361216a578161151f565b5090919050565b600254600090819061218c906001600160801b031684612503565b90506121b87f0000000000000000000000000000000000000000000000000000000000000000826145a2565b6001546001600160801b0316111561220d576001547f0000000000000000000000000000000000000000000000000000000000000000906122039083906001600160801b0316614661565b61151f9190614661565b50919050565b61221b614468565b600061222683612518565b905060006122338261262b565b90506000612254836101400151846101200151611bf790919063ffffffff16565b61010084015160e085015161226891612688565b61227291906145b5565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b60008060006123038460c001518560e001516124e6565b9050600061231185836127fb565b9050600061231f8683612af9565b90508060000361233757506000958695509350505050565b8560600151811161234c579590945092505050565b506060850151600061235e8785612ba4565b9050806000036123775750600096879650945050505050565b90969095509350505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806123d58686867f00000000000000000000000000000000000000000000000000000000000000008b612fce565b92509250925085831461240c576123eb8361190a565b600180546001600160801b0319166001600160801b03929092169190911790555b84821461243d5761241c8261211d565b600380546001600160801b0319166001600160801b03929092169190911790555b83811461246b5761244d8161190a565b600180546001600160801b03928316600160801b0292169190911790555b50505050505050565b600082600019048411830215820261248b57600080fd5b5091020490565b600080806124b36124ab88670de0b6b3a7640000614661565b899087612474565b90508615611dca576124c58888611bf7565b9150611dbb8a8a846124df8a670de0b6b3a7640000614661565b898961307b565b6000806124f383856145b5565b9050600081121561151f57600080fd5b600061151f83670de0b6b3a764000084612662565b6125206144ba565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e082015260045490916101008301916125f191166130a0565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612623929004166130a0565b905292915050565b600080600061263984613116565b915091508061265b5760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b600082600019048411830215820261267957600080fd5b50910281810615159190040190565b600061151f8383670de0b6b3a7640000612662565b6000806126ad8888878787613190565b9050858710156126c1576126c16000611ea7565b6126cf85611de8888a614661565b9650868110156126e3576126e36000611ea7565b60006126fb84866126f48b86614661565b9190612662565b9050670de0b6b3a7640000811061272f57612728612721670de0b6b3a764000088612503565b829061277c565b9050612747565b612744612721670de0b6b3a7640000886118f5565b90505b6127518185612503565b905088811015612765576127656000611ea7565b61276f8982614661565b9998505050505050505050565b6000816000036127955750670de0b6b3a7640000610a0a565b826000036127a557506000610a0a565b8160006127b1856131bf565b90508181026127c8670de0b6b3a7640000826147ca565b90506127d3816133d2565b9695505050505050565b600081831161220d578261151f565b600081831161216a578161151f565b6000808360a001511261281357506080820151610a0a565b60008360a001516128239061473e565b90506128548460c001518560e00151866101000151876000015160a00151886080015161284f9061473e565b612fce565b8651604081019190915260208082019290925291909152845180519101516000916128b49161288391906124e6565b8651604081015160c0909101516128a290670de0b6b3a7640000614661565b8851606081015160809091015161355d565b90508181106128ca575050506080820151610a0a565b5060006128d88585846135f3565b905060005b6003811015612a545761290c8660c001518760e00151886101000151896000015160a001518661284f9061473e565b88516040810191909152602080820192909252919091528651805191015160009161296c9161293b91906124e6565b8851604081015160c09091015161295a90670de0b6b3a7640000614661565b8a51606081015160809091015161355d565b905060008061297b8989613797565b915091508061298c57505050612a54565b858311156129e8578496506129b8620f4240670de0b6b3a76400006129b191906145a2565b8790611bf7565b83116129c957505050505050610a0a565b6129d782611bb88886614661565b6129e190866145a2565b9450612a32565b85831015612a24576000612a0083611bb8868a614661565b9050858110612a125750505050612a54565b612a1c8187614661565b955050612a32565b849650505050505050610a0a565b8860800151851115612a4657886080015194505b8360010193505050506128dd565b50828114612af157612a828560c001518660e00151876101000151886000015160a001518561284f9061473e565b875160408101919091526020808201929092529190915285518051910151600091612ae291612ab191906124e6565b8751604081015160c090910151612ad090670de0b6b3a7640000614661565b8951606081015160809091015161355d565b9050828110612aef578193505b505b505092915050565b6000612b218360c001518460e00151856101000151866000015160a001518661284f9061473e565b8551604081019190915260208101919091525282516000908190612b4490613116565b91509150801580612b59575084602001518210155b15612b6957600092505050610a0a565b600085606001518660400151612b7f91906145a2565b9050612b9a838760200151836124749092919063ffffffff16565b6127d39082614661565b60008083606001518460400151612bbb91906145a2565b90508360a00151600003612be55760608401516020850151612bdd9183612474565b915050610a0a565b60208401516060850151600091612bfd919084612474565b905060008560a001511315612e3f5760005b6004811015612e3957612c3e8660c001518760e00151886101000151896000015160a001518661284f9061473e565b885160408101919091526020810191909152528551600090612c5f9061262b565b9050612c6c878286613a08565b15612c775750612e39565b865180516020820151604083015160a084015160c0909401516000948594612cc49490939092909190612cb290670de0b6b3a7640000614661565b8e516060810151608090910151613a81565b9150915080612cd557505050612e39565b6000828a60a0015111612d3857612cf18a8a8c60a00151613b63565b92509050811580612d0a5750670de0b6b3a76400008110155b15612d1f576000975050505050505050610a0a565b612d3181670de0b6b3a7640000614661565b9050612d6a565b612d418a613e24565b909650915081612d5b576000975050505050505050610a0a565b85975050505050505050610a0a565b6000612d878b604001518c6020015161268890919063ffffffff16565b612d91868a611bf7565b612d9b91906145b5565b90506000811315612dcb57612dba612db3838a612688565b82906118f5565b612dc490886145a2565b9650612e29565b6000811215612e1f576000612dec612de3848b612688565b611bb88461473e565b905087811015612e0757612e008189614661565b9750612e19565b60009950505050505050505050610a0a565b50612e29565b5050505050612e39565b8560010195505050505050612c0f565b506100a4565b60005b6004811015612fc557612e718660c001518760e00151886101000151896000015160a001518661284f9061473e565b885160408101919091526020810191909152528551600090612e929061262b565b9050612e9f878286613a08565b15612eaa5750612fc5565b600080612ec589898b60a00151612ec09061473e565b613f0f565b91509150801580612ede5750670de0b6b3a76400008210155b15612ef25760009650505050505050610a0a565b612f0482670de0b6b3a7640000614661565b91506000612f238a604001518b6020015161268890919063ffffffff16565b612f2d8589611bf7565b612f3791906145b5565b90506000811315612f6157612f5087611bb883866118f5565b612f5a90876145a2565b9550612fb6565b6000811215612fad576000612f7b88611bb886818661473e565b905086811015612f9657612f8f8188614661565b9650612fa7565b600098505050505050505050610a0a565b50612fb6565b50505050612fc5565b84600101945050505050612e42565b50949350505050565b600080600083600003612fe8575086915085905084613070565b6000612ff4858a6145fe565b9050858112156130175760405163585fe6df60e11b815260040160405180910390fd5b809350600088126130345761302d84898b612474565b9250613054565b6130486130408961473e565b85908b612474565b6130519061473e565b92505b61306c876130628b8b6124e6565b611f1587876124e6565b9150505b955095509592505050565b60008061308c88888888888861404e565b909250905080611bec57611bec6000611ea7565b600080670de0b6b3a76400006130b46118ba565b6130be91906146b4565b90508083116130ce5760006130d8565b6130d88184614661565b915061151f61310f670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006146b4565b83906118f5565b600080600080600061312786614110565b915091508061313e57506000958695509350505050565b8560a0015161314c8761434d565b87516131599085906145fe565b61316391906145fe565b61316d91906145b5565b9250505060008112156131865750600093849350915050565b9360019350915050565b600061319c858561277c565b6131b56131ad86611de8868b612688565b859085612662565b61211191906145a2565b60008082136131e15760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136133ed57506000919050565b680755bf798b4a1bf1e58212613416576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008061356d8787878787613190565b90506000613598670de0b6b3a764000061358787876118f5565b61359191906145a2565b8390612503565b9050670de0b6b3a764000081106135c5576135be612721670de0b6b3a764000088612503565b90506135dd565b6135da612721670de0b6b3a7640000886118f5565b90505b6135e78188614661565b98975050505050505050565b82516080810151606090910151600091829161366291670de0b6b3a76400009161361c916118f5565b61362691906145a2565b610100870151875160c0015161365c91889161364a90670de0b6b3a7640000614661565b8a516060810151608090910151613190565b90612503565b9050670de0b6b3a764000081106136a957845160c001516136a2906127219061369390670de0b6b3a7640000614661565b670de0b6b3a764000090612503565b90506136db565b845160c001516136d890612721906136c990670de0b6b3a7640000614661565b670de0b6b3a7640000906118f5565b90505b6136e583826145a2565b905060008560e00151126137415761373a6137336137148760c001518860e0015161250390919063ffffffff16565b61372690670de0b6b3a7640000614661565b6101008801519087612474565b8290612503565b9050613772565b61376f61373361375d8760c001518860e00151611bb89061473e565b61372690670de0b6b3a76400006145a2565b90505b8460c00151811061378757600091505061151f565b808560c001516121149190614661565b81518051602090910151600091829182916137b1916124e6565b855160c08101516040909101519192506000916137e8916137dc916137d59161277c565b8790612688565b610100880151906118f5565b865160c08101516080909101516138139161380791611de89087612688565b885160600151906118f5565b61381d91906145a2565b9050600061385c83886000015160400151896000015160c00151670de0b6b3a764000061384a9190614661565b8a5160608101516080909101516143b4565b9050670de0b6b3a764000081106138b3576138ac6138a561389e896000015160c00151670de0b6b3a76400006138929190614661565b8a5160c00151906118f5565b839061277c565b8390611bf7565b91506138e7565b6138e46138a561389e896000015160c00151670de0b6b3a76400006138d89190614661565b8a5160c0015190612503565b91505b61393761310f61390c896000015160c00151670de0b6b3a76400006136939190614661565b89516080810151606090910151670de0b6b3a76400009161392d9190612503565b611de891906145a2565b915060006139538789610100015161250390919063ffffffff16565b905080831161396d576139668382614661565b925061397d565b6000809550955050505050613a01565b60008860e00151126139c7576139c0836139a88a60c001518b60e001516118f590919063ffffffff16565b6139ba90670de0b6b3a7640000614661565b90612688565b92506139f6565b6139f3836139e18a60c001518b60e0015161365c9061473e565b6139ba90670de0b6b3a76400006145a2565b92505b509093506001925050505b9250929050565b600080613a228486602001516118f590919063ffffffff16565b90506000613a3d8660400151856118f590919063ffffffff16565b905081811015613a525760009250505061151f565b8181101580156127d35750613a766138a5633b9aca00670de0b6b3a76400006145a2565b101595945050505050565b6000806000881215613aa357613a968861473e565b613aa090876145a2565b95505b6000613aaf8a8a6124e6565b90506000613ac0828a8989896143b4565b90506000613add613ad589611de8898d612688565b889088612662565b613ae79083614661565b9050670de0b6b3a76400008110613b1457613b0d612721670de0b6b3a76400008a6118f5565b9050613b2c565b613b29612721670de0b6b3a76400008a612503565b90505b89811015613b435760008094509450505050613b57565b613b4d8a82614661565b6001945094505050505b97509795505050505050565b8251805160209091015160009182918291613b7d916124e6565b90506000613bba613bae613ba7896000015160c00151888b6000015160400151611de891906145a2565b8890612688565b610100890151906118f5565b875160c0810151604090910151613beb91613bdf91613bd89161277c565b8990611bf7565b6101008a015190612503565b885160c0810151608090910151613c1691613c0a91611de89088611bf7565b8a516060015190612503565b613c2091906145a2565b613c2a9190614661565b90506000613c69838960000151604001518a6000015160c00151670de0b6b3a7640000613c579190614661565b8b516060810151608090910151613190565b90506000613c9d896000015160c00151670de0b6b3a7640000613c8c9190614661565b8a5160400151611de8908a906145a2565b905080821015613cb7576000809550955050505050613e1c565b613cd8613cc48284614661565b8a5160608101516080909101519190612662565b9050670de0b6b3a76400008110613d1c57885160c00151613d159061272190613d0990670de0b6b3a7640000614661565b8b5160c0015190612503565b9050613d4b565b885160c00151613d489061272190613d3c90670de0b6b3a7640000614661565b8b5160c00151906118f5565b90505b885160600151613d5e9084908390612662565b925082670de0b6b3a764000010613d8857613d8183670de0b6b3a7640000614661565b9250613d99565b600060019550955050505050613e1c565b60008960e0015112613de357613ddc613dc38a60c001518b60e0015161250390919063ffffffff16565b613dd590670de0b6b3a7640000614661565b8490611bf7565b9250613e11565b613e0e613dfc8a60c001518b60e00151611bb89061473e565b613dd590670de0b6b3a76400006145a2565b92505b509093506001925050505b935093915050565b60008060008360e0015113613e3e57506000928392509050565b60c083015183515260e08301518351602001526101008301518351604001528251600090613e6b9061434d565b90506000808212613ead57604085015160608601518391613e9c91613e9090826145a2565b60208901519190612662565b613ea69190614661565b9050613edc565b613eb68261473e565b60408601516060870151613ecf9190613e9090826145a2565b613ed991906145a2565b90505b60e085015160c0860151613ef1918390612662565b9050808560c00151613f039190614661565b95600195509350505050565b8251805160209091015160009182918291613f29916124e6565b90506000613f53613bae613ba7896000015160c00151888b6000015160400151611de89190614661565b875160c0810151604090910151613f7191613bdf91613bd89161277c565b885160c0810151608090910151613f9091613c0a91611de89088611bf7565b613f9a91906145a2565b613fa49190614661565b90506000613fd1838960000151604001518a6000015160c00151670de0b6b3a7640000613c579190614661565b90506000614005896000015160c00151670de0b6b3a7640000613ff49190614661565b8a5160400151611de8908a90614661565b90508082101561401f576000809550955050505050613e1c565b61402c613cc48284614661565b9050885160c00151613d159061272190613d0990670de0b6b3a7640000614661565b60008060006140608989888888613190565b905061407086611de8898b6145a2565b975087811015614087576000809250925050614105565b600061409885876126f48c86614661565b9050670de0b6b3a764000081106140c5576140be612721670de0b6b3a764000089612503565b90506140dd565b6140da612721670de0b6b3a7640000896118f5565b90505b6140e78186612503565b9050808a11156140fe576140fb818b614661565b93505b6001925050505b965096945050505050565b6000806000614132846101400151856101200151611bf790919063ffffffff16565b61010085015160e086015161414691612688565b61415091906145b5565b90506000614166856000015186602001516124e6565b905060008213156142695760008290506000806141b7886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006141a89190614661565b8d606001518e60800151613a81565b91509150806141d0575060009788975095505050505050565b82821061422557600061420a858a60400151868c60c00151670de0b6b3a76400006141fb9190614661565b8d606001518e6080015161307b565b90506142158161473e565b9960019950975050505050505050565b60008860200151126142585760a08801516142409085614661565b6142499061473e565b98600198509650505050505050565b60a088015188516142409190614661565b600082121561433f57600061427d8361473e565b905060006142b18388604001518960c00151670de0b6b3a76400006142a29190614661565b8a606001518b6080015161355d565b90508181106142ed576000614249848960400151858b60c00151670de0b6b3a76400006142de9190614661565b8c606001518d6080015161269d565b600061431f8489604001518a60c00151670de0b6b3a76400006143109190614661565b8b606001518c608001516143d9565b905061433588606001518385611bb89190614661565b61424990826145a2565b506000946001945092505050565b600061437c826101000151670de0b6b3a764000061436b9190614661565b606084015160e08501519190612662565b6143aa836101400151670de0b6b3a76400006143989190614661565b60608501516101208601519190612474565b610a0a91906145b5565b60006143c0858561277c565b6131b56143d186611de8868b611bf7565b859085612474565b6000806143e987878787876143b4565b9050600061440d670de0b6b3a76400006144038787612503565b61310f91906145a2565b9050670de0b6b3a7640000811061443a57614433612721670de0b6b3a7640000886118f5565b9050614452565b61444f612721670de0b6b3a764000088612503565b90505b61445c81856118f5565b90506135e78882614661565b60405180610120016040528061447c6144ba565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561452a57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561455657600080fd5b85016060818803121561456857600080fd5b939692955090935050565b60006020828403121561458557600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610a0a57610a0a61458c565b818103600083128015838313168383128216171561265b5761265b61458c565b6000602082840312156145e757600080fd5b81356001600160a01b038116811461151f57600080fd5b8082018281126000831280158216821582161715612af157612af161458c565b634e487b7160e01b600052601260045260246000fd5b6000826146435761464361461e565b500690565b60006020828403121561465a57600080fd5b5051919050565b81810381811115610a0a57610a0a61458c565b6001600160701b0381811683821601908082111561265b5761265b61458c565b6001600160801b0381811683821601908082111561265b5761265b61458c565b8082028115828204841417610a0a57610a0a61458c565b6001600160801b0382811682821603908082111561265b5761265b61458c565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610a0a57610a0a61458c565b600081600f0b60016001607f1b031981036147355761473561458c565b60000392915050565b6000600160ff1b82016147535761475361458c565b5060000390565b80151581146100c357600080fd5b60006020828403121561477a57600080fd5b815161151f8161475a565b60006020828403121561479757600080fd5b813561151f8161475a565b60208101600483106147c457634e487b7160e01b600052602160045260246000fd5b91905290565b6000826147d9576147d961461e565b600160ff1b8214600019841416156147f3576147f361458c565b50059056fea26469706673582212202f50ead64a6a7ee57740e15c26f4592911673f980d76f68e0de8d304044b76a064736f6c634300081400336102406040523480156200001257600080fd5b506040516200471f3803806200471f8339810160408190526200003591620001b9565b600160005580516001600160a01b03908116608090815260608084015161018052908301516101a05260a0808401516101c05260e08085015190915260c08085015190526101008085015190915261016080850180515190925281516020908101516101209081528351604090810151610140908152945190950151909252850151841661020052918401516102205290830151600880546001600160a01b03191691841691909117905590910151166101e05262000283565b60405161018081016001600160401b03811182821017156200012157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013f57600080fd5b919050565b6000608082840312156200015757600080fd5b604051608081016001600160401b03811182821017156200018857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620001cd57600080fd5b620001d7620000ef565b620001e28362000127565b8152620001f26020840162000127565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200024f81850162000127565b908201526101406200026384820162000127565b90820152610160620002788585830162000144565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614348620003d7600039600050506000505060005050600060ca0152600081816114140152818161147901528181611bc101528181611cc001528181611cfc01528181611ee001526120120152600081816105a5015281816105d201528181610a7601528181610abe015281816119b70152611fec0152600061105b0152600081816111810152611a7d0152600081816107c701528181610b310152611155015260008181610b100152611a39015260008181610a5401528181610adf015281816119d801526120380152600081816101980152818161070f0152612b3b015260006106660152600081816102a1015281816103280152818161037101528181610430015281816104ff01528181610e8c0152610ed501526143486000f3fe60806040526004361061001e5760003560e01c8063cba2e58d14610023575b600080fd5b610036610031366004614044565b61004f565b6040805192835260208301919091520160405180910390f35b60008061005e8686868661006c565b915091505b94509492505050565b600080610077610275565b600554610100900460ff16156100a0576040516321081abf60e01b815260040160405180910390fd5b6100a861029f565b6000806100b5888661030c565b909250905060006100c68383610641565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101095760405163211ddda360e11b815260040160405180910390fd5b8682101561012a576040516342af972b60e01b815260040160405180910390fd5b600061013461065f565b9050610140818461069a565b5060008060006101508787610a2d565b909a5091945092509050878c111561017b5760405163c972651760e01b815260040160405180910390fd5b806009600082825461018d91906140b9565b909155506101bd90507f0000000000000000000000000000000000000000000000000000000000000000856140b9565b98506101cc838984898d610bb9565b60006101d960018b610d2f565b90506101f2816101ec60208e018e6140cc565b8b610d64565b8d8b8a8361020360208401846140cc565b6001600160a01b03167f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6868f610239878f88610e0c565b60408051928352602083019190915281018e90526060810185905260800160405180910390a39a50505050505050505050506100636001600055565b60026000540361029857604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906102ec5750600034115b1561030a57604051631574f9f360e01b815260040160405180910390fd5b565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161035c5750476103e7565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156103c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e491906140f5565b90505b60006103f9604086016020870161411f565b6104125760105461040d9087908490610e3e565b610414565b855b9050600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016104dd578134101561047e576040516312171d8360e31b815260040160405180910390fd5b813411156104d85733610491833461413c565b604051600081818185875af1925050503d80600081146104cd576040519150601f19603f3d011682016040523d82523d6000602084013e6104d2565b606091505b50909150505b610577565b6040516323b872dd60e01b8152336004820152306024820152604481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610550573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610574919061414f565b90505b80610595576040516312171d8360e31b815260040160405180910390fd5b6010546000036105fc576105c9877f0000000000000000000000000000000000000000000000000000000000000000610e5c565b601081905594507f0000000000000000000000000000000000000000000000000000000000000000935061063a92505050565b60105460009061060e90899086610e3e565b9050806010600082825461062291906140b9565b90915550819050610631610e71565b95509550505050505b9250929050565b60006106568383670de0b6b3a7640000610e3e565b90505b92915050565b600061068b7f000000000000000000000000000000000000000000000000000000000000000042614182565b610695904261413c565b905090565b600082815260076020526040812080546001600160801b03161515806106bf57504284115b156106d557546001600160801b03169050610659565b6106de83610f70565b81546001600160801b0319166001600160801b039190911617815561070283610f9a565b50600090506007816107347f00000000000000000000000000000000000000000000000000000000000000008861413c565b815260208101919091526040016000908120546001600160801b0316915061075d600287610d2f565b6000818152600c6020526040812054919250811561089657506001600080610787848a888461113e565b91509150806009600082825461079d91906140b9565b909155506107b1905084600084808e61120c565b6107bb81836140b9565b91506107eb8483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611386565b91506107ff6107fa838b610641565b6113d7565b600580546002906108209084906201000090046001600160701b0316614196565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061084d82610f70565b6005805460109061086f908490600160801b90046001600160801b03166141b6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006108a360018a610d2f565b6000818152600c602052604090205490915080156109ab57600192506000806108cf838c8a600161113e565b9150915080600960008282546108e591906140b9565b909155508c90506108fa8460008580856113fd565b610904828461413c565b92506109136107fa848e610641565b600580546002906109349084906201000090046001600160701b0316614196565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061096183610f70565b60058054601090610983908490600160801b90046001600160801b03166141b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b82156109ce576109c56109be85836141d6565b60006115f2565b6109ce896116a5565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a86846109fc8e6117e2565b60408051948552602085019390935291830152606082015260800160405180910390a2509698975050505050505050565b600080600080610a9a610a3e6118a6565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006118c7565b92506000610b03610aa96118a6565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118f3565b9050610b5a8785610b55847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611913565b61197e565b15610b6957610b696002611a07565b600080610b7789848a611a2b565b9092509050610b86828761413c565b9450610b9281866140b9565b9550610b9f81848a610e3e565b9350610bab848a61413c565b965050505092959194509250565b600254600160801b90046001600160801b0316610c00610bfb82610be585670de0b6b3a76400006141f6565b6004546001600160801b03169190896001611aab565b610f70565b600480546001600160801b0319166001600160801b0392909216919091179055610c2986610f70565b60018054600090610c449084906001600160801b03166141b6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c7184610f70565b60018054601090610c93908490600160801b90046001600160801b031661420d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610cc085610f70565b610cca90826141b6565b600280546001600160801b03808416600160801b02911617905590506000610cf183611b72565b9050610d0681610d01888261422d565b6115f2565b610d0f84611bba565b610d1d57610d1d6003611a07565b610d26846116a5565b50505050505050565b60006001600160f81b03821115610d595760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290610d969084906140b9565b90915550506000838152600c602052604081208054839290610db99084906140b9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610e1e604083016020840161411f565b15610e2a575082610e37565b610e348484610641565b90505b9392505050565b6000826000190484118302158202610e5557600080fd5b5091020490565b600061065683670de0b6b3a764000084610e3e565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601610ec0575047610f4b565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610f24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4891906140f5565b90505b601054600003610f5c576000610f6a565b601054610f6a908290610e5c565b91505090565b6000600160801b8210610f9657604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190610fbd908490600160801b90046001600160801b0316610641565b6005546201000090046001600160701b03169250905081811115611139576000610fe7838361413c565b9050610ff6610bfb8286611c18565b60058054601090611018908490600160801b90046001600160801b031661420d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006110518583610e5c90919063ffffffff16565b9050600061107f827f0000000000000000000000000000000000000000000000000000000000000000610641565b9050806009600082825461109391906140b9565b909155506110a39050818361413c565b91506110ae82610f70565b600180546000906110c99084906001600160801b03166141b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110f682610f70565b6003805460009061110b908490600f0b61424d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061114b8686610e5c565b91506000611179837f0000000000000000000000000000000000000000000000000000000000000000610641565b90506111a5817f0000000000000000000000000000000000000000000000000000000000000000610641565b915083156111c8576111b7828261413c565b6111c1908461413c565b92506111df565b6111d2828261413c565b6111dc90846140b9565b92505b84861015611202576111f2838787610e3e565b92506111ff828787610e3e565b91505b5094509492505050565b600354600160801b90046001600160801b0316611255610bfb8261123885670de0b6b3a76400006141f6565b600454600160801b90046001600160801b031691908a6000611aab565b600480546001600160801b03928316600160801b02921691909117905561127b86610f70565b611285908261420d565b600380546001600160801b03928316600160801b0292169190911790556112ab84610f70565b600180546000906112c69084906001600160801b03166141b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112f383611c2d565b60038054600090611308908490600f0b61424d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061133885610f70565b6001805460109061135a908490600160801b90046001600160801b031661420d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061139e846113988a888a610e3e565b90610e5c565b90506113ab888486610e3e565b6113b590826140b9565b9050868111156113cc576113c9878261413c565b91505b509695505050505050565b6000600160701b8210610f965760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061143f57507f000000000000000000000000000000000000000000000000000000000000000061143d858361413c565b105b1561144e5761144e6003611a07565b611458848261413c565b600354909150600f0b61146b84826141d6565b905083851380156114a457507f00000000000000000000000000000000000000000000000000000000000000006114a28383611c6b565b105b156114b3576114b36001611a07565b600254600160801b90046001600160801b03166114f5610bfb826114df87670de0b6b3a76400006141f6565b6004546001600160801b031691908c6000611aab565b600480546001600160801b0319166001600160801b039290921691909117905561151f888261413c565b905061152a81610f70565b600280546001600160801b03928316600160801b02921691909117905561155083610f70565b600180546001600160801b0319166001600160801b039290921691909117905561157982611c2d565b600380546001600160801b0319166001600160801b03929092169190911790556115a287610f70565b600180546010906115c4908490600160801b90046001600160801b03166141b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061161b6116018483611c88565b61160c846000611c88565b61161691906141d6565b611c2d565b9050600081600f0b131561167057600280548291906000906116479084906001600160801b03166141b6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156116a0576116858161427a565b600280546000906116479084906001600160801b031661420d565b505050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5490916116f0916001600160801b039091169061413c565b9050806000036116fe575050565b600061170983611c9e565b90508060000361171857505050565b60008061172e611729848688611d43565b611e1c565b9150915061173b82610f70565b600680546000906117569084906001600160801b03166141b6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061178381610f70565b600680546010906117a5908490600160801b90046001600160801b03166141b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117db816117d6906142a0565b611eb3565b5050505050565b600080600083116117f457600061180f565b61180f8361180961180486611fa3565b6120b6565b90610641565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b039092169161187a91906140b9565b611884919061413c565b9050801561189b576118968282610e5c565b61189e565b60005b949350505050565b600154600354600091610695916001600160801b0390911690600f0b611c6b565b60006118e88787876118e188670de0b6b3a764000061413c565b87876120ed565b979650505050505050565b600061190a82611904858888610e3e565b906121b9565b95945050505050565b6000610e3461195a61192d84670de0b6b3a764000061413c565b611954670de0b6b3a7640000611943818a611c18565b61194d919061413c565b8790612210565b90612210565b61196c90670de0b6b3a76400006140b9565b61139884670de0b6b3a764000061413c565b6000806119fc8561198d6118a6565b61199791906140b9565b6001546119b5908790600160801b90046001600160801b031661413c565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118f3565b909210949350505050565b80604051633c06d78b60e11b8152600401611a2291906142bc565b60405180910390fd5b600080611a758561180985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000611a6b818c610e5c565b611809919061413c565b9150611aa1827f0000000000000000000000000000000000000000000000000000000000000000610641565b9050935093915050565b600082600003611abc57508461190a565b8115611b2e57611aed611acf84876140b9565b611ad98587610641565b611ae3888a610641565b61139891906140b9565b90506000611afb8588612225565b90506000611b098689612234565b905081831015611b1b57819250611b27565b80831115611b27578092505b505061190a565b828503611b3d5750600061190a565b611b68611b4a848761413c565b611b548587612210565b611b5e888a610641565b611398919061413c565b9695505050505050565b6000600c6000611b83600285610d2f565b815260200190815260200160002054600c6000611ba1600186610d2f565b81526020019081526020016000205461065991906141d6565b6000611be67f000000000000000000000000000000000000000000000000000000000000000083610641565b6002546001546001600160801b03918216600f0b91611c06911685612210565b611c1091906141d6565b121592915050565b600061065683670de0b6b3a764000084612243565b600060016001607f1b03198212801590611c4e575060016001607f1b038213155b610f965760405163a5353be560e01b815260040160405180910390fd5b600080611c7883856141d6565b9050600081121561065657600080fd5b6000818313611c975781610656565b5090919050565b6002546000908190611cb9906001600160801b031684611c18565b9050611ce57f0000000000000000000000000000000000000000000000000000000000000000826140b9565b6001546001600160801b03161115611d3d576001547f000000000000000000000000000000000000000000000000000000000000000090611d309083906001600160801b031661413c565b611d3a919061413c565b91505b50919050565b611d4b613f98565b6000611d5683611fa3565b90506000611d63826120b6565b90506000611d8483610140015184610120015161064190919063ffffffff16565b61010084015160e0850151611d9891612210565b611da291906141d6565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b6000806000611e338460c001518560e00151611c6b565b90506000611e418583612269565b90506000611e4f8683612567565b905080600003611e6757506000958695509350505050565b85606001518111611e7c579590945092505050565b5060608501516000611e8e8785612612565b905080600003611ea75750600096879650945050505050565b90969095509350505050565b6001546003546001600160801b0380831692600f9290920b91600160801b90041660008080611f058686867f00000000000000000000000000000000000000000000000000000000000000008b612a3c565b925092509250858314611f3c57611f1b83610f70565b600180546001600160801b0319166001600160801b03929092169190911790555b848214611f6d57611f4c82611c2d565b600380546001600160801b0319166001600160801b03929092169190911790555b838114610d2657611f7d81610f70565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b611fab613fea565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e0820152600454909161010083019161207c9116612af0565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926120ae92900416612af0565b905292915050565b60008060006120c484612b66565b91509150806120e65760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b6000806120fd8888878787612be0565b905061211785611904612110898c6140b9565b8690610641565b9750612124848985610e3e565b975087811015612138576121386000611a07565b6000612144898361413c565b9050670de0b6b3a764000081106121785761217161216a670de0b6b3a764000088611c18565b82906121b9565b9050612190565b61218d61216a670de0b6b3a764000088610e5c565b90505b808810156121a2576121a26000611a07565b6121ac818961413c565b9998505050505050505050565b6000816000036121d25750670de0b6b3a7640000610659565b826000036121e257506000610659565b8160006121ee85612c0f565b9050818102612205670de0b6b3a7640000826142e4565b9050611b6881612e22565b60006106568383670de0b6b3a7640000612243565b6000818311611d3d5782610656565b6000818311611c975781610656565b600082600019048411830215820261225a57600080fd5b50910281810615159190040190565b6000808360a001511261228157506080820151610659565b60008360a00151612291906142a0565b90506122c28460c001518560e00151866101000151876000015160a0015188608001516122bd906142a0565b612a3c565b865160408101919091526020808201929092529190915284518051910151600091612322916122f19190611c6b565b8651604081015160c09091015161231090670de0b6b3a764000061413c565b88516060810151608090910151612fad565b9050818110612338575050506080820151610659565b506000612346858584613043565b905060005b60038110156124c25761237a8660c001518760e00151886101000151896000015160a00151866122bd906142a0565b8851604081019190915260208082019290925291909152865180519101516000916123da916123a99190611c6b565b8851604081015160c0909101516123c890670de0b6b3a764000061413c565b8a516060810151608090910151612fad565b90506000806123e989896131e7565b91509150806123fa575050506124c2565b8583111561245657849650612426620f4240670de0b6b3a764000061241f91906140b9565b8790610641565b831161243757505050505050610659565b61244582611398888661413c565b61244f90866140b9565b94506124a0565b8583101561249257600061246e83611398868a61413c565b905085811061248057505050506124c2565b61248a818761413c565b9550506124a0565b849650505050505050610659565b88608001518511156124b457886080015194505b83600101935050505061234b565b5082811461255f576124f08560c001518660e00151876101000151886000015160a00151856122bd906142a0565b8751604081019190915260208082019290925291909152855180519101516000916125509161251f9190611c6b565b8751604081015160c09091015161253e90670de0b6b3a764000061413c565b89516060810151608090910151612fad565b905082811061255d578193505b505b505092915050565b600061258f8360c001518460e00151856101000151866000015160a00151866122bd906142a0565b85516040810191909152602081019190915252825160009081906125b290612b66565b915091508015806125c7575084602001518210155b156125d757600092505050610659565b6000856060015186604001516125ed91906140b9565b905061260883876020015183610e3e9092919063ffffffff16565b611b68908261413c565b6000808360600151846040015161262991906140b9565b90508360a00151600003612653576060840151602085015161264b9183610e3e565b915050610659565b6020840151606085015160009161266b919084610e3e565b905060008560a0015113156128ad5760005b60048110156128a7576126ac8660c001518760e00151886101000151896000015160a00151866122bd906142a0565b8851604081019190915260208101919091525285516000906126cd906120b6565b90506126da878286613448565b156126e557506128a7565b865180516020820151604083015160a084015160c0909401516000948594612732949093909290919061272090670de0b6b3a764000061413c565b8e5160608101516080909101516134c1565b9150915080612743575050506128a7565b6000828a60a00151116127a65761275f8a8a8c60a001516135a3565b925090508115806127785750670de0b6b3a76400008110155b1561278d576000975050505050505050610659565b61279f81670de0b6b3a764000061413c565b90506127d8565b6127af8a613864565b9096509150816127c9576000975050505050505050610659565b85975050505050505050610659565b60006127f58b604001518c6020015161221090919063ffffffff16565b6127ff868a610641565b61280991906141d6565b9050600081131561283957612828612821838a612210565b8290610e5c565b61283290886140b9565b9650612897565b600081121561288d57600061285a612851848b612210565b611398846142a0565b9050878110156128755761286e818961413c565b9750612887565b60009950505050505050505050610659565b50612897565b50505050506128a7565b856001019550505050505061267d565b5061189e565b60005b6004811015612a33576128df8660c001518760e00151886101000151896000015160a00151866122bd906142a0565b885160408101919091526020810191909152528551600090612900906120b6565b905061290d878286613448565b156129185750612a33565b60008061293389898b60a0015161292e906142a0565b61394f565b9150915080158061294c5750670de0b6b3a76400008210155b156129605760009650505050505050610659565b61297282670de0b6b3a764000061413c565b915060006129918a604001518b6020015161221090919063ffffffff16565b61299b8589610641565b6129a591906141d6565b905060008113156129cf576129be876113988386610e5c565b6129c890876140b9565b9550612a24565b6000811215612a1b5760006129e9886113988681866142a0565b905086811015612a04576129fd818861413c565b9650612a15565b600098505050505050505050610659565b50612a24565b50505050612a33565b846001019450505050506128b0565b50949350505050565b600080600083600003612a56575086915085905084612ae5565b6000612a62858a61422d565b905085811215612a855760405163585fe6df60e11b815260040160405180910390fd5b80935060008812612aa257612a9b84898b610e3e565b9250612ac2565b612ab6612aae896142a0565b85908b610e3e565b612abf906142a0565b92505b612ae187612ad08b8b611c6b565b612ada8787611c6b565b9190610e3e565b9150505b955095509592505050565b600080670de0b6b3a7640000612b0461065f565b612b0e91906141f6565b9050808311612b1e576000612b28565b612b28818461413c565b9150611d3a612b5f670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006141f6565b8390610e5c565b6000806000806000612b7786613a8e565b9150915080612b8e57506000958695509350505050565b8560a00151612b9c87613ccb565b8751612ba990859061422d565b612bb3919061422d565b612bbd91906141d6565b925050506000811215612bd65750600093849350915050565b9360019350915050565b6000612bec85856121b9565b612c05612bfd86611904868b612210565b859085612243565b611b6891906140b9565b6000808213612c315760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213612e3d57506000919050565b680755bf798b4a1bf1e58212612e66576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080612fbd8787878787612be0565b90506000612fe8670de0b6b3a7640000612fd78787610e5c565b612fe191906140b9565b8390611c18565b9050670de0b6b3a764000081106130155761300e61216a670de0b6b3a764000088611c18565b905061302d565b61302a61216a670de0b6b3a764000088610e5c565b90505b613037818861413c565b98975050505050505050565b8251608081015160609091015160009182916130b291670de0b6b3a76400009161306c91610e5c565b61307691906140b9565b610100870151875160c001516130ac91889161309a90670de0b6b3a764000061413c565b8a516060810151608090910151612be0565b90611c18565b9050670de0b6b3a764000081106130f957845160c001516130f29061216a906130e390670de0b6b3a764000061413c565b670de0b6b3a764000090611c18565b905061312b565b845160c001516131289061216a9061311990670de0b6b3a764000061413c565b670de0b6b3a764000090610e5c565b90505b61313583826140b9565b905060008560e00151126131915761318a6131836131648760c001518860e00151611c1890919063ffffffff16565b61317690670de0b6b3a764000061413c565b6101008801519087610e3e565b8290611c18565b90506131c2565b6131bf6131836131ad8760c001518860e00151611398906142a0565b61317690670de0b6b3a76400006140b9565b90505b8460c0015181106131d7576000915050610e37565b808560c0015161190a919061413c565b815180516020909101516000918291829161320191611c6b565b855160c0810151604090910151919250600091613231916132259161194d916121b9565b61010088015190610e5c565b865160c081015160809091015161325c91613250916119049087612210565b88516060015190610e5c565b61326691906140b9565b905060006132a583886000015160400151896000015160c00151670de0b6b3a7640000613293919061413c565b8a516060810151608090910151613d32565b9050670de0b6b3a764000081106132fc576132f56132ee6132e7896000015160c00151670de0b6b3a76400006132db919061413c565b8a5160c0015190610e5c565b83906121b9565b8390610641565b9150613330565b61332d6132ee6132e7896000015160c00151670de0b6b3a7640000613321919061413c565b8a5160c0015190611c18565b91505b613380612b5f613355896000015160c00151670de0b6b3a76400006130e3919061413c565b89516080810151606090910151670de0b6b3a7640000916133769190611c18565b61190491906140b9565b9150600061339c87896101000151611c1890919063ffffffff16565b90508083116133b6576133af838261413c565b92506133c6565b600080955095505050505061063a565b60008860e001511261340a57613403836133f18a60c001518b60e00151610e5c90919063ffffffff16565b61195490670de0b6b3a764000061413c565b9250613439565b613436836134248a60c001518b60e001516130ac906142a0565b61195490670de0b6b3a76400006140b9565b92505b50909660019650945050505050565b600080613462848660200151610e5c90919063ffffffff16565b9050600061347d866040015185610e5c90919063ffffffff16565b90508181101561349257600092505050610e37565b818110158015611b6857506134b66132ee633b9aca00670de0b6b3a76400006140b9565b101595945050505050565b60008060008812156134e3576134d6886142a0565b6134e090876140b9565b95505b60006134ef8a8a611c6b565b90506000613500828a898989613d32565b9050600061351d61351589611904898d612210565b889088612243565b613527908361413c565b9050670de0b6b3a764000081106135545761354d61216a670de0b6b3a76400008a610e5c565b905061356c565b61356961216a670de0b6b3a76400008a611c18565b90505b898110156135835760008094509450505050613597565b61358d8a8261413c565b6001945094505050505b97509795505050505050565b82518051602090910151600091829182916135bd91611c6b565b905060006135fa6135ee6135e7896000015160c00151888b600001516040015161190491906140b9565b8890612210565b61010089015190610e5c565b875160c081015160409091015161362b9161361f91613618916121b9565b8990610641565b6101008a015190611c18565b885160c08101516080909101516136569161364a916119049088610641565b8a516060015190611c18565b61366091906140b9565b61366a919061413c565b905060006136a9838960000151604001518a6000015160c00151670de0b6b3a7640000613697919061413c565b8b516060810151608090910151612be0565b905060006136dd896000015160c00151670de0b6b3a76400006136cc919061413c565b8a5160400151611904908a906140b9565b9050808210156136f757600080955095505050505061385c565b613718613704828461413c565b8a5160608101516080909101519190612243565b9050670de0b6b3a7640000811061375c57885160c001516137559061216a9061374990670de0b6b3a764000061413c565b8b5160c0015190611c18565b905061378b565b885160c001516137889061216a9061377c90670de0b6b3a764000061413c565b8b5160c0015190610e5c565b90505b88516060015161379e9084908390612243565b925082670de0b6b3a7640000106137c8576137c183670de0b6b3a764000061413c565b92506137d9565b60006001955095505050505061385c565b60008960e00151126138235761381c6138038a60c001518b60e00151611c1890919063ffffffff16565b61381590670de0b6b3a764000061413c565b8490610641565b9250613851565b61384e61383c8a60c001518b60e00151611398906142a0565b61381590670de0b6b3a76400006140b9565b92505b509093506001925050505b935093915050565b60008060008360e001511361387e57506000928392509050565b60c083015183515260e083015183516020015261010083015183516040015282516000906138ab90613ccb565b905060008082126138ed576040850151606086015183916138dc916138d090826140b9565b60208901519190612243565b6138e6919061413c565b905061391c565b6138f6826142a0565b6040860151606087015161390f91906138d090826140b9565b61391991906140b9565b90505b60e085015160c0860151613931918390612243565b9050808560c00151613943919061413c565b95600195509350505050565b825180516020909101516000918291829161396991611c6b565b905060006139936135ee6135e7896000015160c00151888b6000015160400151611904919061413c565b875160c08101516040909101516139b19161361f91613618916121b9565b885160c08101516080909101516139d09161364a916119049088610641565b6139da91906140b9565b6139e4919061413c565b90506000613a11838960000151604001518a6000015160c00151670de0b6b3a7640000613697919061413c565b90506000613a45896000015160c00151670de0b6b3a7640000613a34919061413c565b8a5160400151611904908a9061413c565b905080821015613a5f57600080955095505050505061385c565b613a6c613704828461413c565b9050885160c001516137559061216a9061374990670de0b6b3a764000061413c565b6000806000613ab084610140015185610120015161064190919063ffffffff16565b61010085015160e0860151613ac491612210565b613ace91906141d6565b90506000613ae485600001518660200151611c6b565b90506000821315613be7576000829050600080613b35886000015189602001518a604001518b60a001518c60c00151670de0b6b3a7640000613b26919061413c565b8d606001518e608001516134c1565b9150915080613b4e575060009788975095505050505050565b828210613ba3576000613b88858a60400151868c60c00151670de0b6b3a7640000613b79919061413c565b8d606001518e60800151613d57565b9050613b93816142a0565b9960019950975050505050505050565b6000886020015112613bd65760a0880151613bbe908561413c565b613bc7906142a0565b98600198509650505050505050565b60a08801518851613bbe919061413c565b6000821215613cbd576000613bfb836142a0565b90506000613c2f8388604001518960c00151670de0b6b3a7640000613c20919061413c565b8a606001518b60800151612fad565b9050818110613c6b576000613bc7848960400151858b60c00151670de0b6b3a7640000613c5c919061413c565b8c606001518d60800151613d7c565b6000613c9d8489604001518a60c00151670de0b6b3a7640000613c8e919061413c565b8b606001518c60800151613e47565b9050613cb388606001518385611398919061413c565b613bc790826140b9565b506000946001945092505050565b6000613cfa826101000151670de0b6b3a7640000613ce9919061413c565b606084015160e08501519190612243565b613d28836101400151670de0b6b3a7640000613d16919061413c565b60608501516101208601519190610e3e565b61065991906141d6565b6000613d3e85856121b9565b612c05613d4f86611904868b610641565b859085610e3e565b600080613d68888888888888613ed6565b9092509050806113cc576113cc6000611a07565b600080613d8c8888878787612be0565b905085871015613da057613da06000611a07565b613dae85611904888a61413c565b965086811015613dc257613dc26000611a07565b6000613dda8486613dd38b8661413c565b9190612243565b9050670de0b6b3a76400008110613e0757613e0061216a670de0b6b3a764000088611c18565b9050613e1f565b613e1c61216a670de0b6b3a764000088610e5c565b90505b613e298185611c18565b905088811015613e3d57613e3d6000611a07565b6121ac898261413c565b600080613e578787878787613d32565b90506000613e7b670de0b6b3a7640000613e718787611c18565b612b5f91906140b9565b9050670de0b6b3a76400008110613ea857613ea161216a670de0b6b3a764000088610e5c565b9050613ec0565b613ebd61216a670de0b6b3a764000088611c18565b90505b613eca8185610e5c565b9050613037888261413c565b6000806000613ee88989888888612be0565b9050613ef886611904898b6140b9565b975087811015613f0f576000809250925050613f8d565b6000613f208587613dd38c8661413c565b9050670de0b6b3a76400008110613f4d57613f4661216a670de0b6b3a764000089611c18565b9050613f65565b613f6261216a670de0b6b3a764000089610e5c565b90505b613f6f8186611c18565b9050808a1115613f8657613f83818b61413c565b93505b6001925050505b965096945050505050565b604051806101200160405280613fac613fea565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561405a57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561408657600080fd5b85016060818803121561409857600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610659576106596140a3565b6000602082840312156140de57600080fd5b81356001600160a01b038116811461065657600080fd5b60006020828403121561410757600080fd5b5051919050565b801515811461411c57600080fd5b50565b60006020828403121561413157600080fd5b81356106568161410e565b81810381811115610659576106596140a3565b60006020828403121561416157600080fd5b81516106568161410e565b634e487b7160e01b600052601260045260246000fd5b6000826141915761419161416c565b500690565b6001600160701b038181168382160190808211156120e6576120e66140a3565b6001600160801b038181168382160190808211156120e6576120e66140a3565b81810360008312801583831316838312821617156120e6576120e66140a3565b8082028115828204841417610659576106596140a3565b6001600160801b038281168282160390808211156120e6576120e66140a3565b808201828112600083128015821682158216171561255f5761255f6140a3565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610659576106596140a3565b600081600f0b60016001607f1b03198103614297576142976140a3565b60000392915050565b6000600160ff1b82016142b5576142b56140a3565b5060000390565b60208101600483106142de57634e487b7160e01b600052602160045260246000fd5b91905290565b6000826142f3576142f361416c565b600160ff1b82146000198414161561430d5761430d6140a3565b50059056fea26469706673582212202b3595fe20fb7a441bf3d13247aacf49097666b1ecae0124aa96782dcb4e733064736f6c634300081400336102406040523480156200001257600080fd5b506040516200468a3803806200468a8339810160408190526200003591620001b9565b600160005580516001600160a01b03908116608090815260608084015161018052908301516101a05260a0808401516101c05260e08085015190915260c08085015190526101008085015190915261016080850180515190925281516020908101516101209081528351604090810151610140908152945190950151909252850151841661020052918401516102205290830151600880546001600160a01b03191691841691909117905590910151166101e05262000283565b60405161018081016001600160401b03811182821017156200012157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200013f57600080fd5b919050565b6000608082840312156200015757600080fd5b604051608081016001600160401b03811182821017156200018857634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620001cd57600080fd5b620001d7620000ef565b620001e28362000127565b8152620001f26020840162000127565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200024f81850162000127565b908201526101406200026384820162000127565b90820152610160620002788585830162000144565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516142b3620003d7600039600050506000505060005050600060aa015260008181610cfb0152818161145f015281816114c401528181611c3101528181611d0c01528181611d4801528181611f2c015261205f01526000818161082a0152818161089001528181610c2f01528181610c5c0152612039015260006110910152600081816111b7015281816119f00152611a690152600081816105790152818161092a0152818161118b0152611a3d015260006119bc015260008181610808015281816108b10152612085015260008181610137015281816104c10152612ab6015260006104180152600081816102a70152818161032d01528181610376015281816109b2015281816109fb01528181610aba0152610b8901526142b36000f3fe60806040526004361061001e5760003560e01c8063dbbe807014610023575b600080fd5b610036610031366004613faf565b61004f565b6040805192835260208301919091520160405180910390f35b60008061005e8686868661006c565b915091505b94509492505050565b60008061007761027b565b600554610100900460ff16156100a0576040516321081abf60e01b815260040160405180910390fd5b6100a86102a5565b7f00000000000000000000000000000000000000000000000000000000000000008610156100e95760405163211ddda360e11b815260040160405180910390fd5b60006100f3610312565b905084811015610116576040516342af972b60e01b815260040160405180910390fd5b6000610120610411565b9050600061012e828461044c565b9050600061015c7f000000000000000000000000000000000000000000000000000000000000000084614024565b9050600080600061016e8d88876107e2565b60098054929650929450925082919060009061018b908490614024565b925050819055505060006101a082888c610964565b9050808c10156101c35760405163c972651760e01b815260040160405180910390fd5b6101cd818b610996565b50506101db8d848987610ccb565b60006101e8600286610eb4565b90508d610202826101fc60208f018f614037565b83610ee9565b8161021060208e018e614037565b60408051898152602081018890529081018c9052606081018490526001600160a01b0391909116907f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef959060800160405180910390a35093985096505050505050506100636001600055565b60026000540361029e57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906102f25750600034115b1561031057604051631574f9f360e01b815260040160405180910390fd5b565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016103615750476103ec565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156103c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e99190614060565b90505b6010546000036103fd57600061040b565b60105461040b908290610f91565b91505090565b600061043d7f00000000000000000000000000000000000000000000000000000000000000004261408f565b61044790426140a3565b905090565b600082815260076020526040812080546001600160801b031615158061047157504284115b1561048757546001600160801b031690506107dc565b61049083610fa6565b81546001600160801b0319166001600160801b03919091161781556104b483610fd0565b50600090506007816104e67f0000000000000000000000000000000000000000000000000000000000000000886140a3565b815260208101919091526040016000908120546001600160801b0316915061050f600287610eb4565b6000818152600c6020526040812054919250811561064857506001600080610539848a8884611174565b91509150806009600082825461054f9190614024565b90915550610563905084600084808e611242565b61056d8183614024565b915061059d8483888c8d7f00000000000000000000000000000000000000000000000000000000000000006113bc565b91506105b16105ac838b61140d565b611422565b600580546002906105d29084906201000090046001600160701b03166140b6565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506105ff82610fa6565b60058054601090610621908490600160801b90046001600160801b03166140d6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061065560018a610eb4565b6000818152600c6020526040902054909150801561075d5760019250600080610681838c8a6001611174565b9150915080600960008282546106979190614024565b909155508c90506106ac846000858085611448565b6106b682846140a3565b92506106c56105ac848e61140d565b600580546002906106e69084906201000090046001600160701b03166140b6565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061071383610fa6565b60058054601090610735908490600160801b90046001600160801b03166140d6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b82156107805761077761077085836140f6565b600061163d565b610780896116f0565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a86846107ae8e61182d565b60408051948552602085019390935291830152606082015260800160405180910390a2889750505050505050505b92915050565b600080600061084e6107f26118f1565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000611912565b91508561085b838761193e565b111561086b5761086b6002611953565b60008060006108d561087b6118f1565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611977565b90506108eb89670de0b6b3a7640000838b611997565b509194509092506108fe905082846140a3565b61090890866140a3565b94506109548861094e8b61091c868a6140a3565b8b6109278e82611aa5565b8e7f0000000000000000000000000000000000000000000000000000000000000000611abb565b9061193e565b9550909250505093509350939050565b60006109766040830160208401614127565b1561098257508261098f565b61098c8484610f91565b90505b9392505050565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016109e6575047610a71565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610a4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6e9190614060565b90505b6000610a836040860160208701614127565b610a9c57601054610a979087908490611ae0565b610a9e565b855b9050600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601610b675781341015610b08576040516312171d8360e31b815260040160405180910390fd5b81341115610b625733610b1b83346140a3565b604051600081818185875af1925050503d8060008114610b57576040519150601f19603f3d011682016040523d82523d6000602084013e610b5c565b606091505b50909150505b610c01565b6040516323b872dd60e01b8152336004820152306024820152604481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610bda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfe9190614144565b90505b80610c1f576040516312171d8360e31b815260040160405180910390fd5b601054600003610c8657610c53877f0000000000000000000000000000000000000000000000000000000000000000610f91565b601081905594507f00000000000000000000000000000000000000000000000000000000000000009350610cc492505050565b601054600090610c9890899086611ae0565b90508060106000828254610cac9190614024565b90915550819050610cbb610312565b95509550505050505b9250929050565b6001546001600160801b031683811015610ce957610ce96003611953565b610cf384826140a3565b6003549091507f000000000000000000000000000000000000000000000000000000000000000090610d29908390600f0b611afe565b1015610d3957610d396001611953565b600354610d8890610d8390600160801b90046001600160801b0316610d6685670de0b6b3a7640000614161565b600454600160801b90046001600160801b03169190896001611b1b565b610fa6565b600480546001600160801b03928316600160801b029216919091179055610dae81610fa6565b600180546001600160801b0319166001600160801b0392909216919091179055610dd785610fa6565b60018054601090610df9908490600160801b90046001600160801b03166140d6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610e2685610fa6565b60038054601090610e48908490600160801b90046001600160801b03166140d6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610e7783611be2565b9050610e8c81610e8788826140f6565b61163d565b610e9584611c2a565b610ea357610ea36003611953565b610eac846116f0565b505050505050565b60006001600160f81b03821115610ede5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290610f1b908490614024565b90915550506000838152600c602052604081208054839290610f3e908490614024565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061098f83670de0b6b3a764000084611ae0565b6000600160801b8210610fcc57604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190610ff3908490600160801b90046001600160801b031661140d565b6005546201000090046001600160701b0316925090508181111561116f57600061101d83836140a3565b905061102c610d838286611c88565b6005805460109061104e908490600160801b90046001600160801b0316614178565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006110878583610f9190919063ffffffff16565b905060006110b5827f000000000000000000000000000000000000000000000000000000000000000061140d565b905080600960008282546110c99190614024565b909155506110d9905081836140a3565b91506110e482610fa6565b600180546000906110ff9084906001600160801b03166140d6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061112c82610fa6565b60038054600090611141908490600f0b614198565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806111818686610f91565b915060006111af837f000000000000000000000000000000000000000000000000000000000000000061140d565b90506111db817f000000000000000000000000000000000000000000000000000000000000000061140d565b915083156111fe576111ed82826140a3565b6111f790846140a3565b9250611215565b61120882826140a3565b6112129084614024565b92505b8486101561123857611228838787611ae0565b9250611235828787611ae0565b91505b5094509492505050565b600354600160801b90046001600160801b031661128b610d838261126e85670de0b6b3a7640000614161565b600454600160801b90046001600160801b031691908a6000611b1b565b600480546001600160801b03928316600160801b0292169190911790556112b186610fa6565b6112bb9082614178565b600380546001600160801b03928316600160801b0292169190911790556112e184610fa6565b600180546000906112fc9084906001600160801b03166140d6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061132983611c9d565b6003805460009061133e908490600f0b614198565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061136e85610fa6565b60018054601090611390908490600160801b90046001600160801b0316614178565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806113d4846113ce8a888a611ae0565b90610f91565b90506113e1888486611ae0565b6113eb9082614024565b905086811115611402576113ff87826140a3565b91505b509695505050505050565b600061098f8383670de0b6b3a7640000611ae0565b6000600160701b8210610fcc5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061148a57507f000000000000000000000000000000000000000000000000000000000000000061148885836140a3565b105b15611499576114996003611953565b6114a384826140a3565b600354909150600f0b6114b684826140f6565b905083851380156114ef57507f00000000000000000000000000000000000000000000000000000000000000006114ed8383611afe565b105b156114fe576114fe6001611953565b600254600160801b90046001600160801b0316611540610d838261152a87670de0b6b3a7640000614161565b6004546001600160801b031691908c6000611b1b565b600480546001600160801b0319166001600160801b039290921691909117905561156a88826140a3565b905061157581610fa6565b600280546001600160801b03928316600160801b02921691909117905561159b83610fa6565b600180546001600160801b0319166001600160801b03929092169190911790556115c482611c9d565b600380546001600160801b0319166001600160801b03929092169190911790556115ed87610fa6565b6001805460109061160f908490600160801b90046001600160801b03166140d6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061166661164c8483611cdb565b611657846000611cdb565b61166191906140f6565b611c9d565b9050600081600f0b13156116bb57600280548291906000906116929084906001600160801b03166140d6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156116eb576116d0816141c5565b600280546000906116929084906001600160801b0316614178565b505050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d54909161173b916001600160801b03909116906140a3565b905080600003611749575050565b600061175483611cea565b90508060000361176357505050565b600080611779611774848688611d8f565b611e68565b9150915061178682610fa6565b600680546000906117a19084906001600160801b03166140d6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117ce81610fa6565b600680546010906117f0908490600160801b90046001600160801b03166140d6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061182681611821906141eb565b611eff565b5050505050565b6000806000831161183f57600061185a565b61185a8361185461184f86611ff0565b612103565b9061140d565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916118c59190614024565b6118cf91906140a3565b905080156118e6576118e18282610f91565b6118e9565b60005b949350505050565b600154600354600091610447916001600160801b0390911690600f0b611afe565b600061193387878761192c88670de0b6b3a76400006140a3565b878761213a565b979650505050505050565b600061098f8383670de0b6b3a764000061215f565b80604051633c06d78b60e11b815260040161196e9190614207565b60405180910390fd5b600061198e82611988858888611ae0565b90612185565b95945050505050565b60008080806119e887866119e18b6118546119ba8c670de0b6b3a76400006140a3565b7f00000000000000000000000000000000000000000000000000000000000000009061140d565b9190611ae0565b9350611a14847f000000000000000000000000000000000000000000000000000000000000000061140d565b91506000611a35611a2d89670de0b6b3a76400006140a3565b8a9088611ae0565b9050611a61817f000000000000000000000000000000000000000000000000000000000000000061140d565b9350611a8d847f000000000000000000000000000000000000000000000000000000000000000061140d565b611a979084614024565b915050945094509450949050565b6000818311611ab4578161098f565b5090919050565b600080611ad384611acd8a888a61215f565b90611c88565b90506113e188848661215f565b6000826000190484118302158202611af757600080fd5b5091020490565b600080611b0b83856140f6565b9050600081121561098f57600080fd5b600082600003611b2c57508461198e565b8115611b9e57611b5d611b3f8487614024565b611b49858761140d565b611b53888a61140d565b6113ce9190614024565b90506000611b6b85886121dc565b90506000611b798689611aa5565b905081831015611b8b57819250611b97565b80831115611b97578092505b505061198e565b828503611bad5750600061198e565b611bd8611bba84876140a3565b611bc4858761193e565b611bce888a61140d565b6113ce91906140a3565b9695505050505050565b6000600c6000611bf3600285610eb4565b815260200190815260200160002054600c6000611c11600186610eb4565b8152602001908152602001600020546107dc91906140f6565b6000611c567f00000000000000000000000000000000000000000000000000000000000000008361140d565b6002546001546001600160801b03918216600f0b91611c7691168561193e565b611c8091906140f6565b121592915050565b600061098f83670de0b6b3a76400008461215f565b600060016001607f1b03198212801590611cbe575060016001607f1b038213155b610fcc5760405163a5353be560e01b815260040160405180910390fd5b6000818313611ab4578161098f565b6002546000908190611d05906001600160801b031684611c88565b9050611d317f000000000000000000000000000000000000000000000000000000000000000082614024565b6001546001600160801b03161115611d89576001547f000000000000000000000000000000000000000000000000000000000000000090611d7c9083906001600160801b03166140a3565b611d8691906140a3565b91505b50919050565b611d97613f03565b6000611da283611ff0565b90506000611daf82612103565b90506000611dd083610140015184610120015161140d90919063ffffffff16565b61010084015160e0850151611de49161193e565b611dee91906140f6565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b6000806000611e7f8460c001518560e00151611afe565b90506000611e8d85836121eb565b90506000611e9b86836124e9565b905080600003611eb357506000958695509350505050565b85606001518111611ec8579590945092505050565b5060608501516000611eda8785612594565b905080600003611ef35750600096879650945050505050565b90969095509350505050565b6001546003546001600160801b0380831692600f9290920b91600160801b90041660008080611f518686867f00000000000000000000000000000000000000000000000000000000000000008b6129be565b925092509250858314611f8857611f6783610fa6565b600180546001600160801b0319166001600160801b03929092169190911790555b848214611fb957611f9882611c9d565b600380546001600160801b0319166001600160801b03929092169190911790555b838114611fe757611fc981610fa6565b600180546001600160801b03928316600160801b0292169190911790555b50505050505050565b611ff8613f55565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e082015260045490916101008301916120c99116612a6b565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926120fb92900416612a6b565b905292915050565b600080600061211184612ae1565b91509150806121335760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b60008061214b888888888888612b5b565b909250905080611402576114026000611953565b600082600019048411830215820261217657600080fd5b50910281810615159190040190565b60008160000361219e5750670de0b6b3a76400006107dc565b826000036121ae575060006107dc565b8160006121ba85612c2b565b90508181026121d1670de0b6b3a76400008261422f565b9050611bd881612e3e565b6000818311611d89578261098f565b6000808360a0015112612203575060808201516107dc565b60008360a00151612213906141eb565b90506122448460c001518560e00151866101000151876000015160a00151886080015161223f906141eb565b6129be565b8651604081019190915260208082019290925291909152845180519101516000916122a4916122739190611afe565b8651604081015160c09091015161229290670de0b6b3a76400006140a3565b88516060810151608090910151612fc9565b90508181106122ba5750505060808201516107dc565b5060006122c885858461305f565b905060005b6003811015612444576122fc8660c001518760e00151886101000151896000015160a001518661223f906141eb565b88516040810191909152602080820192909252919091528651805191015160009161235c9161232b9190611afe565b8851604081015160c09091015161234a90670de0b6b3a76400006140a3565b8a516060810151608090910151612fc9565b905060008061236b89896131fd565b915091508061237c57505050612444565b858311156123d8578496506123a8620f4240670de0b6b3a76400006123a19190614024565b879061140d565b83116123b9575050505050506107dc565b6123c7826113ce88866140a3565b6123d19086614024565b9450612422565b858310156124145760006123f0836113ce868a6140a3565b90508581106124025750505050612444565b61240c81876140a3565b955050612422565b8496505050505050506107dc565b886080015185111561243657886080015194505b8360010193505050506122cd565b508281146124e1576124728560c001518660e00151876101000151886000015160a001518561223f906141eb565b8751604081019190915260208082019290925291909152855180519101516000916124d2916124a19190611afe565b8751604081015160c0909101516124c090670de0b6b3a76400006140a3565b89516060810151608090910151612fc9565b90508281106124df578193505b505b505092915050565b60006125118360c001518460e00151856101000151866000015160a001518661223f906141eb565b855160408101919091526020810191909152528251600090819061253490612ae1565b91509150801580612549575084602001518210155b15612559576000925050506107dc565b60008560600151866040015161256f9190614024565b905061258a83876020015183611ae09092919063ffffffff16565b611bd890826140a3565b600080836060015184604001516125ab9190614024565b90508360a001516000036125d557606084015160208501516125cd9183611ae0565b9150506107dc565b602084015160608501516000916125ed919084611ae0565b905060008560a00151131561282f5760005b60048110156128295761262e8660c001518760e00151886101000151896000015160a001518661223f906141eb565b88516040810191909152602081019190915252855160009061264f90612103565b905061265c878286613465565b156126675750612829565b865180516020820151604083015160a084015160c09094015160009485946126b494909390929091906126a290670de0b6b3a76400006140a3565b8e5160608101516080909101516134de565b91509150806126c557505050612829565b6000828a60a0015111612728576126e18a8a8c60a001516135c0565b925090508115806126fa5750670de0b6b3a76400008110155b1561270f5760009750505050505050506107dc565b61272181670de0b6b3a76400006140a3565b905061275a565b6127318a613881565b90965091508161274b5760009750505050505050506107dc565b859750505050505050506107dc565b60006127778b604001518c6020015161193e90919063ffffffff16565b612781868a61140d565b61278b91906140f6565b905060008113156127bb576127aa6127a3838a61193e565b8290610f91565b6127b49088614024565b9650612819565b600081121561280f5760006127dc6127d3848b61193e565b6113ce846141eb565b9050878110156127f7576127f081896140a3565b9750612809565b600099505050505050505050506107dc565b50612819565b5050505050612829565b85600101955050505050506125ff565b506118e9565b60005b60048110156129b5576128618660c001518760e00151886101000151896000015160a001518661223f906141eb565b88516040810191909152602081019190915252855160009061288290612103565b905061288f878286613465565b1561289a57506129b5565b6000806128b589898b60a001516128b0906141eb565b61396c565b915091508015806128ce5750670de0b6b3a76400008210155b156128e257600096505050505050506107dc565b6128f482670de0b6b3a76400006140a3565b915060006129138a604001518b6020015161193e90919063ffffffff16565b61291d858961140d565b61292791906140f6565b9050600081131561295157612940876113ce8386610f91565b61294a9087614024565b95506129a6565b600081121561299d57600061296b886113ce8681866141eb565b9050868110156129865761297f81886140a3565b9650612997565b6000985050505050505050506107dc565b506129a6565b505050506129b5565b84600101945050505050612832565b50949350505050565b6000806000836000036129d8575086915085905084612a60565b60006129e4858a61425d565b905085811215612a075760405163585fe6df60e11b815260040160405180910390fd5b80935060008812612a2457612a1d84898b611ae0565b9250612a44565b612a38612a30896141eb565b85908b611ae0565b612a41906141eb565b92505b612a5c87612a528b8b611afe565b6119e18787611afe565b9150505b955095509592505050565b600080670de0b6b3a7640000612a7f610411565b612a899190614161565b9050808311612a99576000612aa3565b612aa381846140a3565b9150611d86612ada670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614161565b8390610f91565b6000806000806000612af286613aab565b9150915080612b0957506000958695509350505050565b8560a00151612b1787613ce8565b8751612b2490859061425d565b612b2e919061425d565b612b3891906140f6565b925050506000811215612b515750600093849350915050565b9360019350915050565b6000806000612b6d8989888888613d4f565b9050612b7d86611988898b614024565b975087811015612b94576000809250925050612c20565b6000612bac8587612ba58c866140a3565b919061215f565b9050670de0b6b3a76400008110612be057612bd9612bd2670de0b6b3a764000089611c88565b8290612185565b9050612bf8565b612bf5612bd2670de0b6b3a764000089610f91565b90505b612c028186611c88565b9050808a1115612c1957612c16818b6140a3565b93505b6001925050505b965096945050505050565b6000808213612c4d5760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213612e5957506000919050565b680755bf798b4a1bf1e58212612e82576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080612fd98787878787613d4f565b90506000613004670de0b6b3a7640000612ff38787610f91565b612ffd9190614024565b8390611c88565b9050670de0b6b3a764000081106130315761302a612bd2670de0b6b3a764000088611c88565b9050613049565b613046612bd2670de0b6b3a764000088610f91565b90505b61305381886140a3565b98975050505050505050565b8251608081015160609091015160009182916130c891670de0b6b3a76400009161308891610f91565b6130929190614024565b610100870151875160c00151611acd9188916130b690670de0b6b3a76400006140a3565b8a516060810151608090910151613d4f565b9050670de0b6b3a7640000811061310f57845160c0015161310890612bd2906130f990670de0b6b3a76400006140a3565b670de0b6b3a764000090611c88565b9050613141565b845160c0015161313e90612bd29061312f90670de0b6b3a76400006140a3565b670de0b6b3a764000090610f91565b90505b61314b8382614024565b905060008560e00151126131a7576131a061319961317a8760c001518860e00151611c8890919063ffffffff16565b61318c90670de0b6b3a76400006140a3565b6101008801519087611ae0565b8290611c88565b90506131d8565b6131d56131996131c38760c001518860e001516113ce906141eb565b61318c90670de0b6b3a7640000614024565b90505b8460c0015181106131ed57600091505061098f565b808560c0015161198e91906140a3565b815180516020909101516000918291829161321791611afe565b855160c081015160409091015191925060009161324e916132429161323b91612185565b879061193e565b61010088015190610f91565b865160c08101516080909101516132799161326d91611988908761193e565b88516060015190610f91565b6132839190614024565b905060006132c283886000015160400151896000015160c00151670de0b6b3a76400006132b091906140a3565b8a516060810151608090910151613d7e565b9050670de0b6b3a764000081106133195761331261330b613304896000015160c00151670de0b6b3a76400006132f891906140a3565b8a5160c0015190610f91565b8390612185565b839061140d565b915061334d565b61334a61330b613304896000015160c00151670de0b6b3a764000061333e91906140a3565b8a5160c0015190611c88565b91505b61339d612ada613372896000015160c00151670de0b6b3a76400006130f991906140a3565b89516080810151606090910151670de0b6b3a7640000916133939190611c88565b6119889190614024565b915060006133b987896101000151611c8890919063ffffffff16565b90508083116133d3576133cc83826140a3565b92506133e3565b6000809550955050505050610cc4565b60008860e0015112613427576134208361340e8a60c001518b60e00151610f9190919063ffffffff16565b61094e90670de0b6b3a76400006140a3565b9250613456565b613453836134418a60c001518b60e00151611acd906141eb565b61094e90670de0b6b3a7640000614024565b92505b50909660019650945050505050565b60008061347f848660200151610f9190919063ffffffff16565b9050600061349a866040015185610f9190919063ffffffff16565b9050818110156134af5760009250505061098f565b818110158015611bd857506134d361330b633b9aca00670de0b6b3a7640000614024565b101595945050505050565b6000806000881215613500576134f3886141eb565b6134fd9087614024565b95505b600061350c8a8a611afe565b9050600061351d828a898989613d7e565b9050600061353a61353289611988898d61193e565b88908861215f565b61354490836140a3565b9050670de0b6b3a764000081106135715761356a612bd2670de0b6b3a76400008a610f91565b9050613589565b613586612bd2670de0b6b3a76400008a611c88565b90505b898110156135a057600080945094505050506135b4565b6135aa8a826140a3565b6001945094505050505b97509795505050505050565b82518051602090910151600091829182916135da91611afe565b9050600061361761360b613604896000015160c00151888b60000151604001516119889190614024565b889061193e565b61010089015190610f91565b875160c08101516040909101516136489161363c9161363591612185565b899061140d565b6101008a015190611c88565b885160c08101516080909101516136739161366791611988908861140d565b8a516060015190611c88565b61367d9190614024565b61368791906140a3565b905060006136c6838960000151604001518a6000015160c00151670de0b6b3a76400006136b491906140a3565b8b516060810151608090910151613d4f565b905060006136fa896000015160c00151670de0b6b3a76400006136e991906140a3565b8a5160400151611988908a90614024565b905080821015613714576000809550955050505050613879565b61373561372182846140a3565b8a516060810151608090910151919061215f565b9050670de0b6b3a7640000811061377957885160c0015161377290612bd29061376690670de0b6b3a76400006140a3565b8b5160c0015190611c88565b90506137a8565b885160c001516137a590612bd29061379990670de0b6b3a76400006140a3565b8b5160c0015190610f91565b90505b8851606001516137bb908490839061215f565b925082670de0b6b3a7640000106137e5576137de83670de0b6b3a76400006140a3565b92506137f6565b600060019550955050505050613879565b60008960e0015112613840576138396138208a60c001518b60e00151611c8890919063ffffffff16565b61383290670de0b6b3a76400006140a3565b849061140d565b925061386e565b61386b6138598a60c001518b60e001516113ce906141eb565b61383290670de0b6b3a7640000614024565b92505b509093506001925050505b935093915050565b60008060008360e001511361389b57506000928392509050565b60c083015183515260e083015183516020015261010083015183516040015282516000906138c890613ce8565b9050600080821261390a576040850151606086015183916138f9916138ed9082614024565b6020890151919061215f565b61390391906140a3565b9050613939565b613913826141eb565b6040860151606087015161392c91906138ed9082614024565b6139369190614024565b90505b60e085015160c086015161394e91839061215f565b9050808560c0015161396091906140a3565b95600195509350505050565b825180516020909101516000918291829161398691611afe565b905060006139b061360b613604896000015160c00151888b600001516040015161198891906140a3565b875160c08101516040909101516139ce9161363c9161363591612185565b885160c08101516080909101516139ed9161366791611988908861140d565b6139f79190614024565b613a0191906140a3565b90506000613a2e838960000151604001518a6000015160c00151670de0b6b3a76400006136b491906140a3565b90506000613a62896000015160c00151670de0b6b3a7640000613a5191906140a3565b8a5160400151611988908a906140a3565b905080821015613a7c576000809550955050505050613879565b613a8961372182846140a3565b9050885160c0015161377290612bd29061376690670de0b6b3a76400006140a3565b6000806000613acd84610140015185610120015161140d90919063ffffffff16565b61010085015160e0860151613ae19161193e565b613aeb91906140f6565b90506000613b0185600001518660200151611afe565b90506000821315613c04576000829050600080613b52886000015189602001518a604001518b60a001518c60c00151670de0b6b3a7640000613b4391906140a3565b8d606001518e608001516134de565b9150915080613b6b575060009788975095505050505050565b828210613bc0576000613ba5858a60400151868c60c00151670de0b6b3a7640000613b9691906140a3565b8d606001518e6080015161213a565b9050613bb0816141eb565b9960019950975050505050505050565b6000886020015112613bf35760a0880151613bdb90856140a3565b613be4906141eb565b98600198509650505050505050565b60a08801518851613bdb91906140a3565b6000821215613cda576000613c18836141eb565b90506000613c4c8388604001518960c00151670de0b6b3a7640000613c3d91906140a3565b8a606001518b60800151612fc9565b9050818110613c88576000613be4848960400151858b60c00151670de0b6b3a7640000613c7991906140a3565b8c606001518d60800151613da3565b6000613cba8489604001518a60c00151670de0b6b3a7640000613cab91906140a3565b8b606001518c60800151613e74565b9050613cd0886060015183856113ce91906140a3565b613be49082614024565b506000946001945092505050565b6000613d17826101000151670de0b6b3a7640000613d0691906140a3565b606084015160e0850151919061215f565b613d45836101400151670de0b6b3a7640000613d3391906140a3565b60608501516101208601519190611ae0565b6107dc91906140f6565b6000613d5b8585612185565b613d74613d6c86611988868b61193e565b85908561215f565b611bd89190614024565b6000613d8a8585612185565b613d74613d9b86611988868b61140d565b859085611ae0565b600080613db38888878787613d4f565b905085871015613dc757613dc76000611953565b613dd585611988888a6140a3565b965086811015613de957613de96000611953565b6000613dfa8486612ba58b866140a3565b9050670de0b6b3a76400008110613e2757613e20612bd2670de0b6b3a764000088611c88565b9050613e3f565b613e3c612bd2670de0b6b3a764000088610f91565b90505b613e498185611c88565b905088811015613e5d57613e5d6000611953565b613e6789826140a3565b9998505050505050505050565b600080613e848787878787613d7e565b90506000613ea8670de0b6b3a7640000613e9e8787611c88565b612ada9190614024565b9050670de0b6b3a76400008110613ed557613ece612bd2670de0b6b3a764000088610f91565b9050613eed565b613eea612bd2670de0b6b3a764000088611c88565b90505b613ef78185610f91565b905061305388826140a3565b604051806101200160405280613f17613f55565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60008060008060808587031215613fc557600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613ff157600080fd5b85016060818803121561400357600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156107dc576107dc61400e565b60006020828403121561404957600080fd5b81356001600160a01b038116811461098f57600080fd5b60006020828403121561407257600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b60008261409e5761409e614079565b500690565b818103818111156107dc576107dc61400e565b6001600160701b038181168382160190808211156121335761213361400e565b6001600160801b038181168382160190808211156121335761213361400e565b81810360008312801583831316838312821617156121335761213361400e565b801515811461412457600080fd5b50565b60006020828403121561413957600080fd5b813561098f81614116565b60006020828403121561415657600080fd5b815161098f81614116565b80820281158282048414176107dc576107dc61400e565b6001600160801b038281168282160390808211156121335761213361400e565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156107dc576107dc61400e565b600081600f0b60016001607f1b031981036141e2576141e261400e565b60000392915050565b6000600160ff1b82016142005761420061400e565b5060000390565b602081016004831061422957634e487b7160e01b600052602160045260246000fd5b91905290565b60008261423e5761423e614079565b600160ff1b8214600019841416156142585761425861400e565b500590565b80820182811260008312801582168215821617156124e1576124e161400e56fea2646970667358221220d8d5b1084810be07bc790f66dba15602185bbe592b61560c819fa5079482e0c164736f6c63430008140033",
    "sourceMap": "6161:4370:86:-:0;;;6264:406;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6361:7;6416;6390:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;6473:7;6447:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;6530:7;6504:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;6587:7;6561:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;6644:7;6618:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1713:1:121;1917:7;:21;;;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;6509:52;;;-1:-1:-1;;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;;6818:36;;;;6047:18:15;;::::1;;::::0;6075;;::::1;;::::0;6103;;::::1;;::::0;6131;;::::1;;::::0;6159;;;::::1;;::::0;6741:10;;;;::::1;::::0;;;;;-1:-1:-1;;;6741:10:15;;::::1;::::0;6564:264;;6592:121:::1;6564:264:::0;;::::1;4332:25:184::0;6731:21:15;4373:18:184;;;4366:34;6770:13:15::1;4416:18:184::0;;;4409:34;;;;6809:4:15::1;4459:18:184::0;;;4452:60;6564:264:15;;;;;;;;;;4304:19:184;;6564:264:15;;;6541:297;;;::::1;::::0;6522:316:::1;::::0;-1:-1:-1;6161:4370:86;;;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;14:347:184:-;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:184;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:184;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:184;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1180::-;1340:6;1393:3;1381:9;1372:7;1368:23;1364:33;1361:53;;;1410:1;1407;1400:12;1361:53;1436:17;;:::i;:::-;1476:48;1514:9;1476:48;:::i;:::-;1469:5;1462:63;1557:57;1610:2;1599:9;1595:18;1557:57;:::i;:::-;1552:2;1545:5;1541:14;1534:81;1668:2;1657:9;1653:18;1647:25;1642:2;1635:5;1631:14;1624:49;1726:2;1715:9;1711:18;1705:25;1700:2;1693:5;1689:14;1682:49;1785:3;1774:9;1770:19;1764:26;1758:3;1751:5;1747:15;1740:51;1845:3;1834:9;1830:19;1824:26;1818:3;1811:5;1807:15;1800:51;1905:3;1894:9;1890:19;1884:26;1878:3;1871:5;1867:15;1860:51;1965:3;1954:9;1950:19;1944:26;1938:3;1931:5;1927:15;1920:51;1990:3;2046:2;2035:9;2031:18;2025:25;2020:2;2013:5;2009:14;2002:49;;2070:3;2105:57;2158:2;2147:9;2143:18;2105:57;:::i;:::-;2089:14;;;2082:81;2182:3;2217:57;2255:18;;;2217:57;:::i;:::-;2201:14;;;2194:81;2294:3;2329:62;2383:7;2363:18;;;2329:62;:::i;:::-;2313:14;;;2306:86;2317:5;1242:1180;-1:-1:-1;;;1242:1180:184:o;2806:1290::-;3036:13;;-1:-1:-1;;;;;2501:31:184;2489:44;;2996:3;2981:19;;3108:4;3100:6;3096:17;3090:24;3123:62;3179:4;3168:9;3164:20;3150:12;-1:-1:-1;;;;;2501:31:184;2489:44;;2427:112;3123:62;;3241:4;3233:6;3229:17;3223:24;3216:4;3205:9;3201:20;3194:54;3304:4;3296:6;3292:17;3286:24;3279:4;3268:9;3264:20;3257:54;3367:4;3359:6;3355:17;3349:24;3342:4;3331:9;3327:20;3320:54;3430:4;3422:6;3418:17;3412:24;3405:4;3394:9;3390:20;3383:54;3493:4;3485:6;3481:17;3475:24;3468:4;3457:9;3453:20;3446:54;3556:4;3548:6;3544:17;3538:24;3531:4;3520:9;3516:20;3509:54;3582:6;3642:2;3634:6;3630:15;3624:22;3619:2;3608:9;3604:18;3597:50;;3666:6;3721:2;3713:6;3709:15;3703:22;3734:62;3792:2;3781:9;3777:18;3761:14;-1:-1:-1;;;;;2501:31:184;2489:44;;2427:112;3734:62;-1:-1:-1;;3815:6:184;3858:15;;;3852:22;-1:-1:-1;;;;;2501:31:184;3926:18;;;2489:44;3964:6;4007:15;;;4001:22;2614:12;;4071:18;;;2602:25;;;;2676:4;2665:16;;2659:23;2643:14;;;2636:47;2732:4;2721:16;;2715:23;2699:14;;;2692:47;2788:4;2777:16;;;2771:23;2755:14;;;;2748:47;2806:1290;:::o;4101:417::-;6161:4370:86;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436106102465760003560e01c8063907c0f9211610139578063cba2e58d116100b6578063ded062311161007a578063ded062311461047e578063e44808bc14610819578063eac3e79914610839578063ed64bab21461086d578063f3f707071461088d578063f45cf2e0146108c157610246565b8063cba2e58d146107aa578063cbc1343414610378578063d5002f2e146107bd578063d899e112146107d2578063dbbe80701461080657610246565b8063a77384c1116100fd578063a77384c1146106f2578063ab033ea914610712578063b1b4b1701461072d578063b4f8da391461074d578063ca6d38f71461078a57610246565b8063907c0f92146106695780639bd334981461067e5780639cd241af1461069e578063a22cb465146105d6578063a6e8a859146106be57610246565b80634c2ac1d9116101c75780637180c8ca1161018b5780637180c8ca146105d657806371f88b7c146105f657806377d05ff4146106165780638120a3e2146106295780639032c7261461064957610246565b80634c2ac1d9146105345780634ed2d6ac14610547578063680962391461056257806368c2ecb814610582578063702db0eb146105a257610246565b806322d5506b1161020e57806322d5506b1461043e57806329b23fc11461047e57806330adf81f146104ac5780633644e515146104e05780633e691db91461051457610246565b806302329a2914610356578063074a6de91461037857806317fad7fc146103b25780631c0f12b6146103d257806321b57d53146103f2575b34801561025257600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610295929190611ea1565b600060405180830381855af49150503d80600081146102d0576040519150601f19603f3d011682016040523d82523d6000602084013e6102d5565b606091505b509150915081156102f957604051638bb0a34b60e01b815260040160405180910390fd5b600061030482611eb1565b90506001600160e01b03198116636e64089360e11b1461032657815160208301fd5b81516003198101600484019081529261034791810160200190602401611f4c565b80519650602001945050505050f35b34801561036257600080fd5b50610376610371366004612003565b61099e565b005b34801561038457600080fd5b50610398610393366004612030565b6109cb565b604080519283526020830191909152015b60405180910390f35b3480156103be57600080fd5b506103766103cd3660046120e3565b610a00565b3480156103de57600080fd5b506103766103ed366004612174565b610a32565b3480156103fe57600080fd5b506104267f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016103a9565b34801561044a57600080fd5b5061045e6104593660046121b8565b610a62565b6040805194855260208501939093529183015260608201526080016103a9565b34801561048a57600080fd5b5061049e6104993660046121ea565b610a86565b6040519081526020016103a9565b3480156104b857600080fd5b5061049e7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b3480156104ec57600080fd5b5061049e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561052057600080fd5b5061049e61052f366004612244565b610aba565b61049e610542366004612279565b610aeb565b34801561055357600080fd5b506103766103ed3660046122dd565b34801561056e57600080fd5b5061037661057d366004612323565b610b20565b34801561058e57600080fd5b5061049e61059d366004612345565b610ccb565b3480156105ae57600080fd5b506103766105bd366004612375565b6001600160801b03908116600160801b02911617600155565b3480156105e257600080fd5b506103766105f13660046123a8565b610cdc565b34801561060257600080fd5b506103986106113660046123d2565b610d05565b61049e610624366004612030565b610d21565b34801561063557600080fd5b50610376610644366004612345565b610d54565b34801561065557600080fd5b506103766106643660046123fe565b610d60565b34801561067557600080fd5b5061049e610eaa565b34801561068a57600080fd5b5061045e610699366004612323565b610eb9565b3480156106aa57600080fd5b506103766106b9366004612478565b610ed9565b3480156106ca57600080fd5b506104267f000000000000000000000000000000000000000000000000000000000000000081565b3480156106fe57600080fd5b5061037661070d366004612345565b601055565b34801561071e57600080fd5b506103766103713660046124ad565b34801561073957600080fd5b5061049e610748366004612345565b610f08565b34801561075957600080fd5b506103766107683660046124c8565b600280546001600160801b0319166001600160801b0392909216919091179055565b34801561079657600080fd5b5061049e6107a5366004612345565b610f13565b6103986107b83660046121ea565b610f1e565b3480156107c957600080fd5b5060105461049e565b3480156107de57600080fd5b506104267f000000000000000000000000000000000000000000000000000000000000000081565b6103986108143660046121ea565b610f54565b34801561082557600080fd5b506103766108343660046124e3565b610f80565b34801561084557600080fd5b506104267f000000000000000000000000000000000000000000000000000000000000000081565b34801561087957600080fd5b50610376610888366004612345565b610fb1565b34801561089957600080fd5b506104267f000000000000000000000000000000000000000000000000000000000000000081565b3480156108cd57600080fd5b506103766108dc366004612563565b805160208201516001600160801b03918216600160801b91831682021760015560408301516060840151908316908316820217600255608083015160a084015190831690831682021760035560c083015160e084015190831690831682021760045561010080840151600580546101208701516101408801516101609098015161ffff1990921693151561ff001916939093179215159093029190911761ffff16620100006001600160701b0390961695909502841694909417921602179055565b6109c77f0000000000000000000000000000000000000000000000000000000000000000610fd6565b5050565b6000806109f77f0000000000000000000000000000000000000000000000000000000000000000610fd6565b50935093915050565b610a297f0000000000000000000000000000000000000000000000000000000000000000610fd6565b50505050505050565b610a5b7f0000000000000000000000000000000000000000000000000000000000000000610fd6565b5050505050565b600080600080610a7488888888610ff6565b929b919a509850909650945050505050565b6000610ab17f0000000000000000000000000000000000000000000000000000000000000000610fd6565b50949350505050565b6000610ae57f0000000000000000000000000000000000000000000000000000000000000000610fd6565b50919050565b6000610b167f0000000000000000000000000000000000000000000000000000000000000000610fd6565b5095945050505050565b6040516370a0823160e01b8152306004820152600090610bb6906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baf919061264f565b838561110a565b9150506000811315610c3e576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b158015610c2a57600080fd5b505af1158015610a29573d6000803e3d6000fd5b6000811215610cc6576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610c808461267e565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610c2a57600080fd5b505050565b6000610cd6826111a4565b92915050565b610cc67f0000000000000000000000000000000000000000000000000000000000000000610fd6565b600080610d138585856111fc565b90925090505b935093915050565b6000610d4c7f0000000000000000000000000000000000000000000000000000000000000000610fd6565b509392505050565b610d5d8161127c565b50565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610e50919061269a565b600060405180830381855af49150503d8060008114610e8b576040519150601f19603f3d011682016040523d82523d6000602084013e610e90565b606091505b509150915081610ea257805160208201fd5b805160208201f35b6000610eb461136c565b905090565b600080600080610ec986866113a2565b9299919850965090945092505050565b610f027f0000000000000000000000000000000000000000000000000000000000000000610fd6565b50505050565b6000610cd68261152e565b6000610cd6826115ca565b600080610f4a7f0000000000000000000000000000000000000000000000000000000000000000610fd6565b5094509492505050565b600080610f4a7f0000000000000000000000000000000000000000000000000000000000000000610fd6565b610fa97f0000000000000000000000000000000000000000000000000000000000000000610fd6565b505050505050565b6109c77f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b0316600036604051610e50929190611ea1565b600080808061104d87866110468b6110406110198c670de0b6b3a76400006126b6565b7f000000000000000000000000000000000000000000000000000000000000000090611640565b90611640565b9190611651565b9350611079847f0000000000000000000000000000000000000000000000000000000000000000611640565b9150600061109a61109289670de0b6b3a76400006126b6565b8a9088611651565b90506110c6817f0000000000000000000000000000000000000000000000000000000000000000611640565b93506110f2847f0000000000000000000000000000000000000000000000000000000000000000611640565b6110fc90846126c9565b915050945094509450949050565b6000808061111c846301e1338061166f565b9050600061113b82600088126111325787611040565b6110408861267e565b9050600086131561116e5761115961115282611684565b8890611640565b935061116587856126b6565b92505050610d19565b60008612156111965761118a61118382611684565b889061166f565b935061116587856126dc565b509495600095509350505050565b6000806111af61136c565b90508083116111bf5760006111c9565b6111c981846126b6565b91506111f5827f000000000000000000000000000000000000000000000000000000000000000061166f565b9392505050565b6000806112468561104085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061123c818c61166f565b61104091906126b6565b9150611272827f0000000000000000000000000000000000000000000000000000000000000000611640565b9050935093915050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806112ce8686867f00000000000000000000000000000000000000000000000000000000000000008b61180f565b925092509250858314611305576112e4836118bc565b600180546001600160801b0319166001600160801b03929092169190911790555b84821461133657611315826118e6565b600380546001600160801b0319166001600160801b03929092169190911790555b838114610a2957611346816118bc565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b60006113987f000000000000000000000000000000000000000000000000000000000000000042612719565b610eb490426126b6565b60008060008061140f6113b3611936565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000611957565b9250600061147861141e611936565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611983565b90506114cf87856114ca847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119a3565b611a1c565b156114de576114de6002611aa5565b6000806114ec89848a6111fc565b90925090506114fb82876126b6565b945061150781866126c9565b955061151481848a611651565b9350611520848a6126b6565b965050505092959194509250565b6002546000908190611549906001600160801b031684611ac9565b90506115757f0000000000000000000000000000000000000000000000000000000000000000826126c9565b6001546001600160801b03161115610ae5576001547f0000000000000000000000000000000000000000000000000000000000000000906115c09083906001600160801b03166126b6565b6111f591906126b6565b600080670de0b6b3a76400006115de61136c565b6115e8919061272d565b90508083116115f8576000611602565b61160281846126b6565b91506111f5611639670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061272d565b839061166f565b60006111f58383670de0b6b3a76400005b600082600019048411830215820261166857600080fd5b5091020490565b60006111f583670de0b6b3a764000084611651565b6000680248ce36a70cb26b3e19821361169f57506000919050565b680755bf798b4a1bf1e582126116c8576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000806000836000036118295750869150859050846118b1565b6000611835858a612744565b9050858112156118585760405163585fe6df60e11b815260040160405180910390fd5b809350600088126118755761186e84898b611651565b9250611895565b6118896118818961267e565b85908b611651565b6118929061267e565b92505b6118ad876118a38b8b611ade565b6110468787611ade565b9150505b955095509592505050565b6000600160801b82106118e257604051630f0af95160e11b815260040160405180910390fd5b5090565b60006f7fffffffffffffffffffffffffffffff19821280159061191957506f7fffffffffffffffffffffffffffffff8213155b6118e25760405163a5353be560e01b815260040160405180910390fd5b600154600354600091610eb4916001600160801b0390911690600f0b611ade565b600061197887878761197188670de0b6b3a76400006126b6565b8787611afb565b979650505050505050565b600061199a82611994858888611651565b90611bc7565b95945050505050565b6000611a146119ea6119bd84670de0b6b3a76400006126b6565b6119e4670de0b6b3a76400006119d3818a611ac9565b6119dd91906126b6565b8790611c28565b90611c28565b6119fc90670de0b6b3a76400006126c9565b611a0e84670de0b6b3a76400006126b6565b9061166f565b949350505050565b600080611a9a85611a2b611936565b611a3591906126c9565b600154611a53908790600160801b90046001600160801b03166126b6565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611983565b909210949350505050565b80604051633c06d78b60e11b8152600401611ac0919061276c565b60405180910390fd5b60006111f583670de0b6b3a764000084611c39565b600080611aeb83856126dc565b905060008112156111f557600080fd5b600080611b0b8888878787611c5f565b9050611b2585611994611b1e898c6126c9565b8690611640565b9750611b32848985611651565b975087811015611b4657611b466000611aa5565b6000611b5289836126b6565b9050670de0b6b3a76400008110611b8657611b7f611b78670de0b6b3a764000088611ac9565b8290611bc7565b9050611b9e565b611b9b611b78670de0b6b3a76400008861166f565b90505b80881015611bb057611bb06000611aa5565b611bba81896126b6565b9998505050505050505050565b600081600003611be05750670de0b6b3a7640000610cd6565b82600003611bf057506000610cd6565b816000611bfc85611c8e565b9050818102611c13670de0b6b3a764000082612794565b9050611c1e81611684565b9695505050505050565b60006111f58383670de0b6b3a76400005b6000826000190484118302158202611c5057600080fd5b50910281810615159190040190565b6000611c6b8585611bc7565b611c84611c7c86611994868b611c28565b859085611c39565b611c1e91906126c9565b6000808213611cb05760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015611ee05780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715611f2257611f22611ee8565b60405290565b60005b83811015611f43578181015183820152602001611f2b565b50506000910152565b600060208284031215611f5e57600080fd5b815167ffffffffffffffff80821115611f7657600080fd5b818401915084601f830112611f8a57600080fd5b815181811115611f9c57611f9c611ee8565b604051601f8201601f19908116603f01168101908382118183101715611fc457611fc4611ee8565b81604052828152876020848701011115611fdd57600080fd5b611978836020830160208801611f28565b80358015158114611ffe57600080fd5b919050565b60006020828403121561201557600080fd5b6111f582611fee565b600060608284031215610ae557600080fd5b60008060006060848603121561204557600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561206a57600080fd5b6120768682870161201e565b9150509250925092565b80356001600160a01b0381168114611ffe57600080fd5b60008083601f8401126120a957600080fd5b50813567ffffffffffffffff8111156120c157600080fd5b6020830191508360208260051b85010111156120dc57600080fd5b9250929050565b600080600080600080608087890312156120fc57600080fd5b61210587612080565b955061211360208801612080565b9450604087013567ffffffffffffffff8082111561213057600080fd5b61213c8a838b01612097565b9096509450606089013591508082111561215557600080fd5b5061216289828a01612097565b979a9699509497509295939492505050565b6000806000806080858703121561218a57600080fd5b8435935061219a60208601612080565b92506121a860408601612080565b9396929550929360600135925050565b600080600080608085870312156121ce57600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561220057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561222c57600080fd5b6122388782880161201e565b91505092959194509250565b60006020828403121561225657600080fd5b813567ffffffffffffffff81111561226d57600080fd5b611a148482850161201e565b600080600080600060a0868803121561229157600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156122c457600080fd5b6122d08882890161201e565b9150509295509295909350565b600080600080608085870312156122f357600080fd5b8435935061230360208601612080565b92506040850135915061231860608601612080565b905092959194509250565b6000806040838503121561233657600080fd5b50508035926020909101359150565b60006020828403121561235757600080fd5b5035919050565b80356001600160801b0381168114611ffe57600080fd5b6000806040838503121561238857600080fd5b6123918361235e565b915061239f6020840161235e565b90509250929050565b600080604083850312156123bb57600080fd5b6123c483612080565b915061239f60208401611fee565b6000806000606084860312156123e757600080fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a03121561241957600080fd5b61242288612080565b965061243060208901612080565b955061243e60408901611fee565b945060608801359350608088013560ff8116811461245b57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561248d57600080fd5b8335925061249d60208501612080565b9150604084013590509250925092565b6000602082840312156124bf57600080fd5b6111f582612080565b6000602082840312156124da57600080fd5b6111f58261235e565b600080600080600060a086880312156124fb57600080fd5b8535945061250b60208701612080565b935061251960408701612080565b92506060860135915061252e60808701612080565b90509295509295909350565b8035600f81900b8114611ffe57600080fd5b80356001600160701b0381168114611ffe57600080fd5b6000610180828403121561257657600080fd5b61257e611efe565b6125878361235e565b81526125956020840161235e565b60208201526125a66040840161235e565b60408201526125b76060840161235e565b60608201526125c86080840161253a565b60808201526125d960a0840161235e565b60a08201526125ea60c0840161235e565b60c08201526125fb60e0840161235e565b60e082015261010061260e818501611fee565b90820152610120612620848201611fee565b9082015261014061263284820161254c565b9082015261016061264484820161235e565b908201529392505050565b60006020828403121561266157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b820161269357612693612668565b5060000390565b600082516126ac818460208701611f28565b9190910192915050565b81810381811115610cd657610cd6612668565b80820180821115610cd657610cd6612668565b81810360008312801583831316838312821617156126fc576126fc612668565b5092915050565b634e487b7160e01b600052601260045260246000fd5b60008261272857612728612703565b500690565b8082028115828204841417610cd657610cd6612668565b808201828112600083128015821682158216171561276457612764612668565b505092915050565b602081016004831061278e57634e487b7160e01b600052602160045260246000fd5b91905290565b6000826127a3576127a3612703565b600160ff1b8214600019841416156127bd576127bd612668565b50059056fea2646970667358221220c8506bce6c2cb4763a59f920b7ca38cb31419e1a5d149e08ab65313c3a63af7664736f6c63430008140033",
    "sourceMap": "6161:4370:86:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7228:12:15;7382;7396:23;7423:7;-1:-1:-1;;;;;7423:20:15;7444:5;;7423:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7381:69;;;;7464:7;7460:76;;;7494:31;;-1:-1:-1;;;7494:31:15;;;;;;;;;;;7460:76;7545:15;7563:18;7570:10;7563:18;:::i;:::-;7545:36;-1:-1:-1;;;;;;;7595:43:15;;-1:-1:-1;;;7595:43:15;7591:160;;7715:10;7709:17;7704:2;7692:10;7688:19;7681:46;7591:160;7952:17;;-1:-1:-1;;7948:25:15;;7971:1;7926:20;;7919:55;;;7926:20;8053:31;;;;;;;;;;:::i;:::-;6161:4370:86;;;-1:-1:-1;6161:4370:86;;;-1:-1:-1;;;;;6161:4370:86;10948:65:15;;;;;;;;;;-1:-1:-1;10948:65:15;;;;;:::i;:::-;;:::i;:::-;;10236:181;;;;;;;;;;-1:-1:-1;10236:181:15;;;;;:::i;:::-;;:::i;:::-;;;;3377:25:184;;;3433:2;3418:18;;3411:34;;;;3350:18;10236:181:15;;;;;;;;12498:167;;;;;;;;;;-1:-1:-1;12498:167:15;;;;;:::i;:::-;;:::i;11419:102::-;;;;;;;;;;-1:-1:-1;11419:102:15;;;;;:::i;:::-;;:::i;4380:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5499:32:184;;;5481:51;;5469:2;5454:18;4380:32:15;5335:203:184;8058:822:86;;;;;;;;;;-1:-1:-1;8058:822:86;;;;;:::i;:::-;;:::i;:::-;;;;6164:25:184;;;6220:2;6205:18;;6198:34;;;;6248:18;;;6241:34;6306:2;6291:18;;6284:34;6151:3;6136:19;8058:822:86;5933:391:184;8965:177:15;;;;;;;;;;-1:-1:-1;8965:177:15;;;;;:::i;:::-;;:::i;:::-;;;7041:25:184;;;7029:2;7014:18;8965:177:15;6895::184;5115:174:15;;;;;;;;;;;;5165:124;5115:174;;5353:41;;;;;;;;;;;;;;;10737:136;;;;;;;;;;-1:-1:-1;10737:136:15;;;;;:::i;:::-;;:::i;9481:204::-;;;;;;:::i;:::-;;:::i;11934:107::-;;;;;;;;;;-1:-1:-1;11934:107:15;;;;;:::i;7069:566:86:-;;;;;;;;;;-1:-1:-1;7069:566:86;;;;;:::i;:::-;;:::i;9320:177::-;;;;;;;;;;-1:-1:-1;9320:177:86;;;;;:::i;:::-;;:::i;10226:184::-;;;;;;;;;;-1:-1:-1;10226:184:86;;;;;:::i;:::-;-1:-1:-1;;;;;10363:40:86;;;-1:-1:-1;;;10363:40:86;10311:42;;10363:40;10311:12;10363:40;10226:184;11234:78:15;;;;;;;;;;-1:-1:-1;11234:78:15;;;;;:::i;:::-;;:::i;7641:411:86:-;;;;;;;;;;-1:-1:-1;7641:411:86;;;;;:::i;:::-;;:::i;9245:168:15:-;;;;;;:::i;:::-;;:::i;9822:116:86:-;;;;;;;;;;-1:-1:-1;9822:116:86;;;;;:::i;:::-;;:::i;13854:868:15:-;;;;;;;;;;-1:-1:-1;13854:868:15;;;;;:::i;:::-;;:::i;9698:118:86:-;;;;;;;;;;;;;:::i;8929:385::-;;;;;;;;;;-1:-1:-1;8929:385:86;;;;;:::i;:::-;;:::i;12331:92:15:-;;;;;;;;;;-1:-1:-1;12331:92:15;;;;;:::i;:::-;;:::i;4682:32::-;;;;;;;;;;;;;;;6839:98:86;;;;;;;;;;-1:-1:-1;6839:98:86;;;;;:::i;:::-;6904:11;:26;6839:98;11075:76:15;;;;;;;;;;-1:-1:-1;11075:76:15;;;;;:::i;9944:177:86:-;;;;;;;;;;-1:-1:-1;9944:177:86;;;;;:::i;:::-;;:::i;10416:113::-;;;;;;;;;;-1:-1:-1;10416:113:86;;;;;:::i;:::-;10482:25;:40;;-1:-1:-1;;;;;;10482:40:86;-1:-1:-1;;;;;10482:40:86;;;;;;;;;;10416:113;9503:189;;;;;;;;;;-1:-1:-1;9503:189:86;;;;;:::i;:::-;;:::i;8183:192:15:-;;;;;;:::i;:::-;;:::i;10127:93:86:-;;;;;;;;;;-1:-1:-1;10202:11:86;;10127:93;;4833:32:15;;;;;;;;;;;;;;;8694:193;;;;;;:::i;:::-;;:::i;11650:163::-;;;;;;;;;;-1:-1:-1;11650:163:15;;;;;:::i;:::-;;:::i;4531:32::-;;;;;;;;;;;;;;;10504:73;;;;;;;;;;-1:-1:-1;10504:73:15;;;;;:::i;:::-;;:::i;4993:32::-;;;;;;;;;;;;;;;6695:138:86;;;;;;;;;;-1:-1:-1;6695:138:86;;;;;:::i;:::-;6798:28;;;;;;-1:-1:-1;;;;;6798:28:86;;;-1:-1:-1;;;6798:28:86;;;;;;:12;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;6798:28:86;;;;;;-1:-1:-1;;6798:28:86;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6798:28:86;;;;;;;;;;;;;;;;;;;6695:138;10948:65:15;10988:18;10998:7;10988:9;:18::i;:::-;;10948:65;:::o;10236:181::-;10364:7;10373;10392:18;10402:7;10392:9;:18::i;:::-;;10236:181;;;;;;:::o;12498:167::-;12640:18;12650:7;12640:9;:18::i;:::-;;12498:167;;;;;;:::o;11419:102::-;11496:18;11506:7;11496:9;:18::i;:::-;;11419:102;;;;:::o;8058:822:86:-;8289:21;8324:20;8358:26;8398;8579:150;8617:11;8642:24;8680:10;8704:15;8579:24;:150::i;:::-;8449:280;;;;-1:-1:-1;8449:280:86;-1:-1:-1;8449:280:86;;-1:-1:-1;8058:822:86;-1:-1:-1;;;;;8058:822:86:o;8965:177:15:-;9098:7;9117:18;9127:7;9117:9;:18::i;:::-;;8965:177;;;;;;:::o;10737:136::-;10829:7;10848:18;10858:7;10848:9;:18::i;:::-;;10737:136;;;:::o;9481:204::-;9641:7;9660:18;9670:7;9660:9;:18::i;:::-;;9481:204;;;;;;;:::o;7069:566:86:-;7207:35;;-1:-1:-1;;;7207:35:86;;7236:4;7207:35;;;5481:51:184;7133:15:86;;7152:135;;-1:-1:-1;;;;;7207:10:86;:20;;;;5454:18:184;;7207:35:86;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;7256:3;7273:4;7152:41;:135::i;:::-;7130:157;;;7313:1;7302:8;:12;7298:331;;;7330:119;;-1:-1:-1;;;7330:119:86;;7395:4;7330:119;;;14331:51:184;14398:18;;;14391:34;;;7352:10:86;-1:-1:-1;;;;;7330:39:86;;;;14304:18:184;;7330:119:86;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7298:331;7481:1;7470:8;:12;7466:163;;;-1:-1:-1;;;;;7520:10:86;7498:39;;7563:4;7594:9;7595:8;7594:9;:::i;:::-;7498:120;;-1:-1:-1;;;;;;7498:120:86;;;;;;;-1:-1:-1;;;;;14349:32:184;;;7498:120:86;;;14331:51:184;14398:18;;;14391:34;14304:18;;7498:120:86;;;;;;;;;;;;;;;;;;;7466:163;7120:515;7069:566;;:::o;9320:177::-;9412:21;9452:38;9476:13;9452:23;:38::i;:::-;9445:45;9320:177;-1:-1:-1;;9320:177:86:o;11234:78:15:-;11287:18;11297:7;11287:9;:18::i;7641:411:86:-;7795:16;7813:26;7884:114;7923:12;7949:10;7973:15;7884:25;:114::i;:::-;7851:147;;-1:-1:-1;7851:147:86;-1:-1:-1;7641:411:86;;;;;;;:::o;9245:168:15:-;9369:7;9388:18;9398:7;9388:9;:18::i;:::-;;9245:168;;;;;:::o;9822:116:86:-;9894:37;9911:19;9894:16;:37::i;:::-;9822:116;:::o;13854:868:15:-;14126:373;;14228:16;14126:373;;;15070:25:184;5165:124:15;15111:18:184;;;15104:34;-1:-1:-1;;;;;15212:15:184;;;15192:18;;;15185:43;15264:15;;;15244:18;;;15237:43;15324:14;;15317:22;15296:19;;;15289:51;15356:19;;;15349:35;;;15433:4;15421:17;;15400:19;;;15393:46;15455:19;;;15448:35;;;15499:19;;;15492:35;;;14055:12:15;;;;14092:7;:20;;15042:19:184;;14126:373:15;;;-1:-1:-1;;14126:373:15;;;;;;;;;;;;;;-1:-1:-1;;;;;14126:373:15;-1:-1:-1;;;14126:373:15;;;14092:417;;;14126:373;14092:417;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14054:455;;;;14524:7;14519:117;;14604:6;14598:13;14593:2;14585:6;14581:15;14574:38;14519:117;14698:6;14692:13;14687:2;14679:6;14675:15;14668:38;9698:118:86;9749:22;9790:19;:17;:19::i;:::-;9783:26;;9698:118;:::o;8929:385::-;9086:26;9126:25;9165:20;9199:26;9257:50;9276:12;9290:16;9257:18;:50::i;:::-;9250:57;;;;-1:-1:-1;9250:57:86;-1:-1:-1;9250:57:86;;-1:-1:-1;8929:385:86;-1:-1:-1;;;8929:385:86:o;12331:92:15:-;12398:18;12408:7;12398:9;:18::i;:::-;;12331:92;;;:::o;9944:177:86:-;10043:7;10069:45;10097:16;10069:27;:45::i;9503:189::-;9601:21;9641:44;9671:13;9641:29;:44::i;8183:192:15:-;8322:7;8331;8350:18;8360:7;8350:9;:18::i;:::-;;8183:192;;;;;;;:::o;8694:193::-;8834:7;8843;8862:18;8872:7;8862:9;:18::i;11650:163::-;11788:18;11798:7;11788:9;:18::i;:::-;;11650:163;;;;;:::o;10504:73::-;10552:18;10562:7;15000:359;15054:12;15079;15093:19;15116:7;-1:-1:-1;;;;;15116:20:15;15137:8;;15116:30;;;;;;;:::i;22433:2743:64:-;22666:16;;;;23556:150;23663:24;23689:16;23556:82;23626:11;23556:48;23587:16;23593:10;150:4:73;23587:16:64;:::i;:::-;23556:9;;:30;:48::i;:::-;:69;;:82::i;:::-;:106;:150;:106;:150::i;:::-;23545:161;-1:-1:-1;23994:34:64;23545:161;24011:16;23994;:34::i;:::-;23973:55;-1:-1:-1;24539:12:64;24554:106;24590:30;24596:24;150:4:73;24590:30:64;:::i;:::-;24554:11;;24634:16;24554:22;:106::i;:::-;24539:121;-1:-1:-1;24680:22:64;24539:121;24693:8;24680:12;:22::i;:::-;24670:32;-1:-1:-1;25136:33:64;24670:32;25152:16;25136:15;:33::i;:::-;25103:66;;:18;:66;:::i;:::-;25070:99;;22806:2370;22433:2743;;;;;;;;;:::o;4992:1056:182:-;5129:19;;;5249:23;:5;5263:8;5249:13;:23::i;:::-;5224:48;;5282:10;5295:81;5352:14;5311:1;5303:5;:9;:26;;5324:5;5303:26;;;5315:6;5316:5;5315:6;:::i;5295:81::-;5282:94;;5399:1;5391:5;:9;5387:623;;;5430:89;5474:30;5500:2;5474:18;:30::i;:::-;5430:10;;:18;:89::i;:::-;5416:103;-1:-1:-1;5551:24:182;5565:10;5416:103;5551:24;:::i;:::-;5533:43;;5590:30;;;;5387:623;5649:1;5641:5;:9;5637:373;;;5801:89;5845:30;5871:2;5845:18;:30::i;:::-;5801:10;;:18;:89::i;:::-;5787:103;-1:-1:-1;5915:40:182;5944:10;5787:103;5915:40;:::i;5637:373::-;-1:-1:-1;6027:10:182;;6039:1;;-1:-1:-1;4992:1056:182;-1:-1:-1;;;;4992:1056:182:o;4153:432:64:-;4246:21;4279:24;4306:19;:17;:19::i;:::-;4279:46;;4367:16;4351:13;:32;:95;;4445:1;4351:95;;;4398:32;4414:16;4398:13;:32;:::i;:::-;4335:111;-1:-1:-1;4538:40:64;4335:111;4560:17;4538:21;:40::i;:::-;4522:56;4153:432;-1:-1:-1;;;4153:432:64:o;20071:1666::-;20227:16;;21283:137;21407:12;21283:102;21368:16;21283:102;21336:9;150:4:73;21284:23:64;150:4:73;21296:10:64;21284:11;:23::i;:::-;:29;;;;:::i;21283:137::-;21272:148;-1:-1:-1;21696:34:64;21272:148;21713:16;21696;:34::i;:::-;21675:55;;20071:1666;;;;;;:::o;19555:1121:66:-;19696:12;:26;19758:28;;-1:-1:-1;;;;;19696:26:66;;;;19758:28;;;;;;-1:-1:-1;;;19820:25:66;;;19671:22;;;19994:218;19696:26;19758:28;19820:25;20140:21;20179:19;19994:31;:218::i;:::-;19855:357;;;;;;20287:14;20263:20;:38;20259:130;;20346:32;:20;:30;:32::i;:::-;20317:12;:61;;-1:-1:-1;;;;;;20317:61:66;-1:-1:-1;;;;;20317:61:66;;;;;;;;;;20259:130;20428:16;20402:22;:42;20398:137;;20491:33;:22;:31;:33::i;:::-;20460:28;:64;;-1:-1:-1;;;;;;20460:64:66;-1:-1:-1;;;;;20460:64:66;;;;;;;;;;20398:137;20571:13;20548:19;:36;20544:126;;20628:31;:19;:29;:31::i;:::-;20600:12;:59;;-1:-1:-1;;;;;20600:59:66;;;-1:-1:-1;;;20600:59:66;;;;;;;;;19618:1058;;;;;;19555:1121;:::o;5348:223:64:-;5424:24;5526:37;5544:19;5526:15;:37;:::i;:::-;5495:69;;:15;:69;:::i;15687:3916:67:-;15845:26;15885:25;15924:20;15958:26;16180:251;16226:25;:23;:25::i;:::-;16265:12;:25;-1:-1:-1;;;16265:25:67;;-1:-1:-1;;;;;16265:25:67;16304:12;16342;16368:16;16398:23;16180:32;:251::i;:::-;16160:271;;16564:17;16584:184;16631:25;:23;:25::i;:::-;16670:12;:25;-1:-1:-1;;;16670:25:67;;-1:-1:-1;;;;;16670:25:67;16709:23;16746:12;16584:33;:184::i;:::-;16564:204;;16795:270;16832:12;16862:17;16897:154;16963:9;16994;17025:8;16897:44;:154::i;:::-;16795:19;:270::i;:::-;16778:449;;;17090:126;17146:56;17090:38;:126::i;:::-;17403:16;17442:26;17490:130;17533:12;17563:9;17590:16;17490:25;:130::i;:::-;17389:231;;-1:-1:-1;17389:231:67;-1:-1:-1;17783:28:67;17389:231;17783:17;:28;:::i;:::-;17768:43;-1:-1:-1;18485:33:67;18500:18;17768:43;18485:33;:::i;:::-;18465:53;-1:-1:-1;19063:92:67;:18;19106:9;19129:16;19063:29;:92::i;:::-;19042:113;-1:-1:-1;19414:33:67;19042:113;19414:12;:33;:::i;:::-;19393:54;;19458:138;;;15687:3916;;;;;;;:::o;18027:558:64:-;18248:25;;18127:18;;;;18240:80;;-1:-1:-1;;;;;18248:25:64;18294:16;18240:40;:80::i;:::-;18217:103;-1:-1:-1;18363:36:64;18378:21;18217:103;18363:36;:::i;:::-;18334:12;:26;-1:-1:-1;;;;;18334:26:64;:65;18330:222;;;18444:12;:26;18520:21;;18444:57;;18489:12;;-1:-1:-1;;;;;18444:26:64;:57;:::i;:::-;:97;;;;:::i;4785:450::-;4884:21;4917:24;150:4:73;4944:19:64;:17;:19::i;:::-;:25;;;;:::i;:::-;4917:52;;5011:16;4995:13;:32;:95;;5089:1;4995:95;;;5042:32;5058:16;5042:13;:32;:::i;:::-;4979:111;-1:-1:-1;5182:46:64;5204:23;150:4:73;5204:17:64;:23;:::i;:::-;5182:13;;:21;:46::i;1535:119:73:-;1597:7;1624:22;1635:1;1638;1641:4;823:556;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;1810:165::-;1872:7;1899:22;1910:1;1913:4;1919:1;1899:10;:22::i;4830:3335::-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;-1:-1:-1;;;5987:51:73;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;-1:-1:-1;;;6585:50:73;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;2119:3268:75:-;2390:21;2425:22;2461:20;2616:19;2639:1;2616:24;2612:111;;-1:-1:-1;2664:14:75;;-1:-1:-1;2680:16:75;;-1:-1:-1;2698:13:75;2656:56;;2612:111;2892:21;2916:44;2941:19;2923:14;2916:44;:::i;:::-;2892:68;;2998:21;2974:14;:46;2970:118;;;3043:34;;-1:-1:-1;;;3043:34:75;;;;;;;;;;;2970:118;3121:14;3097:39;;3711:1;3691:16;:21;3687:661;;3868:134;3876:13;3931:16;3970:14;3868:33;:134::i;:::-;3826:190;;3687:661;;;4188:135;4251:17;4252:16;4251:17;:::i;:::-;4196:13;;4291:14;4188:33;:135::i;:::-;4163:174;;;:::i;:::-;4145:192;;3687:661;5064:316;5197:13;5228:138;5296:14;5332:16;5228:46;:138::i;:::-;5064:91;5124:13;5139:15;5064:59;:91::i;:316::-;5049:331;;2496:2891;2119:3268;;;;;;;;;;:::o;884:190:76:-;937:9;-1:-1:-1;;;964:1:76;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:76;;;;;;;;;;;958:86;-1:-1:-1;1065:1:76;884:190::o;1238:219::-;1289:8;-1:-1:-1;;1315:21:76;;;;;:46;;-1:-1:-1;1345:16:76;1340:21;;;1315:46;1309:119;;1385:32;;-1:-1:-1;;;1385:32:76;;;;;;;;;;;5752:253:64;5912:12;:26;5956:28;;5810:7;;5848:150;;-1:-1:-1;;;;;5912:26:64;;;;5956:28;;5848:46;:150::i;18303:892:74:-;18566:7;18703:485;18770:23;18811:13;18842:12;19081:18;19087:12;150:4:73;19081:18:74;:::i;:::-;19117:16;19151:23;18703:49;:485::i;:::-;18684:504;18303:892;-1:-1:-1;;;;;;;18303:892:74:o;3774:531::-;3974:17;4180:118;4285:12;4180:87;:23;4228;4253:13;4180:47;:87::i;:::-;:104;;:118::i;:::-;4168:130;3774:531;-1:-1:-1;;;;;3774:531:74:o;16119:541::-;16276:7;16383:270;16519:120;16603:14;16609:8;150:4:73;16603:14:74;:::i;:::-;16519:52;150:4:73;16535:29:74;150:4:73;16545:18:74;16535:9;:29::i;:::-;:35;;;;:::i;:::-;16519:9;;:15;:52::i;:::-;:58;;:120::i;:::-;16493:146;;150:4:73;16493:146:74;:::i;:::-;16384:14;16390:8;150:4:73;16384:14:74;:::i;:::-;16383:24;;:270::i;:::-;16364:289;16119:541;-1:-1:-1;;;;16119:541:74:o;10589:683:64:-;10745:4;10970:23;10996:221;11071:16;11043:25;:23;:25::i;:::-;:44;;;;:::i;:::-;11101:12;:25;:43;;11129:15;;-1:-1:-1;;;11101:25:64;;-1:-1:-1;;;;;11101:25:64;:43;:::i;:::-;11158:23;11195:12;10996:33;:221::i;:::-;-1:-1:-1;;;;10589:683:64;-1:-1:-1;;;;10589:683:64:o;317:182:72:-;485:6;451:41;;-1:-1:-1;;;451:41:72;;;;;;;;:::i;:::-;;;;;;;;3390:115:73;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;6471:340:74:-;6606:7;;6657:53;6694:16;6664:14;6657:53;:::i;:::-;6625:85;;6754:1;6728:22;:27;;6720:36;;;;;2068:1646:77;2258:7;2415:9;2427:20;2431:2;2435:1;2438;2441;2444:2;2427:3;:20::i;:::-;2415:32;-1:-1:-1;2585:26:77;2609:1;2585:19;2596:7;2601:2;2596;:7;:::i;:::-;2585:2;;:10;:19::i;:26::-;2580:31;-1:-1:-1;2674:20:77;:1;2580:31;2691:2;2674:12;:20::i;:::-;2669:25;;2768:2;2764:1;:6;2760:166;;;2786:129;2842:59;2786:38;:129::i;:::-;3086:10;3099:6;3103:2;3099:1;:6;:::i;:::-;3086:19;;150:4:73;3119:2:77;:9;3115:261;;3217:20;3224:12;150:4:73;3234:1:77;3224:9;:12::i;:::-;3217:2;;:6;:20::i;:::-;3212:25;;3115:261;;;3343:22;3350:14;150:4:73;3362:1:77;3350:11;:14::i;3343:22::-;3338:27;;3115:261;3449:2;3445:1;:6;3441:166;;;3467:129;3523:59;3467:38;:129::i;:::-;3701:6;3705:2;3701:1;:6;:::i;:::-;3694:13;2068:1646;-1:-1:-1;;;;;;;;;2068:1646:77:o;3740:838:73:-;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;;4561:9;4565:4;4561:3;:9::i;:::-;4546:25;3740:838;-1:-1:-1;;;;;;3740:838:73:o;3117:115::-;3177:7;3204:20;3213:1;3216;3219:4;2211:748;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;17543:343:77:-;17682:7;17871:8;:1;17877;17871:5;:8::i;:::-;17833:35;17844:19;17861:1;17844:12;:2;17853;17844:8;:12::i;:19::-;17833:1;;17865:2;17833:10;:35::i;:::-;:46;;;;:::i;8345:3611:73:-;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;-1:-1:-1;;;;;;;8890:1:73;8886:49;8993:9;;;8973:18;8970:33;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;14:271:184:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:184:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:184;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:247;855:2;849:9;897:3;885:16;;931:18;916:34;;952:22;;;913:62;910:88;;;978:18;;:::i;:::-;1014:2;1007:22;788:247;:::o;1040:250::-;1125:1;1135:113;1149:6;1146:1;1143:13;1135:113;;;1225:11;;;1219:18;1206:11;;;1199:39;1171:2;1164:10;1135:113;;;-1:-1:-1;;1282:1:184;1264:16;;1257:27;1040:250::o;1295:896::-;1374:6;1427:2;1415:9;1406:7;1402:23;1398:32;1395:52;;;1443:1;1440;1433:12;1395:52;1476:9;1470:16;1505:18;1546:2;1538:6;1535:14;1532:34;;;1562:1;1559;1552:12;1532:34;1600:6;1589:9;1585:22;1575:32;;1645:7;1638:4;1634:2;1630:13;1626:27;1616:55;;1667:1;1664;1657:12;1616:55;1696:2;1690:9;1718:2;1714;1711:10;1708:36;;;1724:18;;:::i;:::-;1799:2;1793:9;1767:2;1853:13;;-1:-1:-1;;1849:22:184;;;1873:2;1845:31;1841:40;1829:53;;;1897:18;;;1917:22;;;1894:46;1891:72;;;1943:18;;:::i;:::-;1983:10;1979:2;1972:22;2018:2;2010:6;2003:18;2058:7;2053:2;2048;2044;2040:11;2036:20;2033:33;2030:53;;;2079:1;2076;2069:12;2030:53;2092:68;2157:2;2152;2144:6;2140:15;2135:2;2131;2127:11;2092:68;:::i;2196:160::-;2261:20;;2317:13;;2310:21;2300:32;;2290:60;;2346:1;2343;2336:12;2290:60;2196:160;;;:::o;2361:180::-;2417:6;2470:2;2458:9;2449:7;2445:23;2441:32;2438:52;;;2486:1;2483;2476:12;2438:52;2509:26;2525:9;2509:26;:::i;2546:155::-;2606:5;2651:2;2642:6;2637:3;2633:16;2629:25;2626:45;;;2667:1;2664;2657:12;2706:492;2810:6;2818;2826;2879:2;2867:9;2858:7;2854:23;2850:32;2847:52;;;2895:1;2892;2885:12;2847:52;2931:9;2918:23;2908:33;;2988:2;2977:9;2973:18;2960:32;2950:42;;3043:2;3032:9;3028:18;3015:32;3070:18;3062:6;3059:30;3056:50;;;3102:1;3099;3092:12;3056:50;3125:67;3184:7;3175:6;3164:9;3160:22;3125:67;:::i;:::-;3115:77;;;2706:492;;;;;:::o;3456:173::-;3524:20;;-1:-1:-1;;;;;3573:31:184;;3563:42;;3553:70;;3619:1;3616;3609:12;3634:367;3697:8;3707:6;3761:3;3754:4;3746:6;3742:17;3738:27;3728:55;;3779:1;3776;3769:12;3728:55;-1:-1:-1;3802:20:184;;3845:18;3834:30;;3831:50;;;3877:1;3874;3867:12;3831:50;3914:4;3906:6;3902:17;3890:29;;3974:3;3967:4;3957:6;3954:1;3950:14;3942:6;3938:27;3934:38;3931:47;3928:67;;;3991:1;3988;3981:12;3928:67;3634:367;;;;;:::o;4006:922::-;4146:6;4154;4162;4170;4178;4186;4239:3;4227:9;4218:7;4214:23;4210:33;4207:53;;;4256:1;4253;4246:12;4207:53;4279:29;4298:9;4279:29;:::i;:::-;4269:39;;4327:38;4361:2;4350:9;4346:18;4327:38;:::i;:::-;4317:48;;4416:2;4405:9;4401:18;4388:32;4439:18;4480:2;4472:6;4469:14;4466:34;;;4496:1;4493;4486:12;4466:34;4535:70;4597:7;4588:6;4577:9;4573:22;4535:70;:::i;:::-;4624:8;;-1:-1:-1;4509:96:184;-1:-1:-1;4712:2:184;4697:18;;4684:32;;-1:-1:-1;4728:16:184;;;4725:36;;;4757:1;4754;4747:12;4725:36;;4796:72;4860:7;4849:8;4838:9;4834:24;4796:72;:::i;:::-;4006:922;;;;-1:-1:-1;4006:922:184;;-1:-1:-1;4006:922:184;;4887:8;;4006:922;-1:-1:-1;;;4006:922:184:o;4933:397::-;5019:6;5027;5035;5043;5096:3;5084:9;5075:7;5071:23;5067:33;5064:53;;;5113:1;5110;5103:12;5064:53;5149:9;5136:23;5126:33;;5178:38;5212:2;5201:9;5197:18;5178:38;:::i;:::-;5168:48;;5235:38;5269:2;5258:9;5254:18;5235:38;:::i;:::-;4933:397;;;;-1:-1:-1;5225:48:184;;5320:2;5305:18;5292:32;;-1:-1:-1;;4933:397:184:o;5543:385::-;5629:6;5637;5645;5653;5706:3;5694:9;5685:7;5681:23;5677:33;5674:53;;;5723:1;5720;5713:12;5674:53;-1:-1:-1;;5746:23:184;;;5816:2;5801:18;;5788:32;;-1:-1:-1;5867:2:184;5852:18;;5839:32;;5918:2;5903:18;5890:32;;-1:-1:-1;5543:385:184;-1:-1:-1;5543:385:184:o;6329:561::-;6442:6;6450;6458;6466;6519:3;6507:9;6498:7;6494:23;6490:33;6487:53;;;6536:1;6533;6526:12;6487:53;6572:9;6559:23;6549:33;;6629:2;6618:9;6614:18;6601:32;6591:42;;6680:2;6669:9;6665:18;6652:32;6642:42;;6735:2;6724:9;6720:18;6707:32;6762:18;6754:6;6751:30;6748:50;;;6794:1;6791;6784:12;6748:50;6817:67;6876:7;6867:6;6856:9;6852:22;6817:67;:::i;:::-;6807:77;;;6329:561;;;;;;;:::o;7259:356::-;7345:6;7398:2;7386:9;7377:7;7373:23;7369:32;7366:52;;;7414:1;7411;7404:12;7366:52;7454:9;7441:23;7487:18;7479:6;7476:30;7473:50;;;7519:1;7516;7509:12;7473:50;7542:67;7601:7;7592:6;7581:9;7577:22;7542:67;:::i;7620:630::-;7742:6;7750;7758;7766;7774;7827:3;7815:9;7806:7;7802:23;7798:33;7795:53;;;7844:1;7841;7834:12;7795:53;7880:9;7867:23;7857:33;;7937:2;7926:9;7922:18;7909:32;7899:42;;7988:2;7977:9;7973:18;7960:32;7950:42;;8039:2;8028:9;8024:18;8011:32;8001:42;;8094:3;8083:9;8079:19;8066:33;8122:18;8114:6;8111:30;8108:50;;;8154:1;8151;8144:12;8108:50;8177:67;8236:7;8227:6;8216:9;8212:22;8177:67;:::i;:::-;8167:77;;;7620:630;;;;;;;;:::o;8255:397::-;8341:6;8349;8357;8365;8418:3;8406:9;8397:7;8393:23;8389:33;8386:53;;;8435:1;8432;8425:12;8386:53;8471:9;8458:23;8448:33;;8500:38;8534:2;8523:9;8519:18;8500:38;:::i;:::-;8490:48;;8585:2;8574:9;8570:18;8557:32;8547:42;;8608:38;8642:2;8631:9;8627:18;8608:38;:::i;:::-;8598:48;;8255:397;;;;;;;:::o;8657:247::-;8724:6;8732;8785:2;8773:9;8764:7;8760:23;8756:32;8753:52;;;8801:1;8798;8791:12;8753:52;-1:-1:-1;;8824:23:184;;;8894:2;8879:18;;;8866:32;;-1:-1:-1;8657:247:184:o;8909:180::-;8968:6;9021:2;9009:9;9000:7;8996:23;8992:32;8989:52;;;9037:1;9034;9027:12;8989:52;-1:-1:-1;9060:23:184;;8909:180;-1:-1:-1;8909:180:184:o;9094:188::-;9162:20;;-1:-1:-1;;;;;9211:46:184;;9201:57;;9191:85;;9272:1;9269;9262:12;9287:260;9355:6;9363;9416:2;9404:9;9395:7;9391:23;9387:32;9384:52;;;9432:1;9429;9422:12;9384:52;9455:29;9474:9;9455:29;:::i;:::-;9445:39;;9503:38;9537:2;9526:9;9522:18;9503:38;:::i;:::-;9493:48;;9287:260;;;;;:::o;9552:254::-;9617:6;9625;9678:2;9666:9;9657:7;9653:23;9649:32;9646:52;;;9694:1;9691;9684:12;9646:52;9717:29;9736:9;9717:29;:::i;:::-;9707:39;;9765:35;9796:2;9785:9;9781:18;9765:35;:::i;9811:316::-;9888:6;9896;9904;9957:2;9945:9;9936:7;9932:23;9928:32;9925:52;;;9973:1;9970;9963:12;9925:52;-1:-1:-1;;9996:23:184;;;10066:2;10051:18;;10038:32;;-1:-1:-1;10117:2:184;10102:18;;;10089:32;;9811:316;-1:-1:-1;9811:316:184:o;10316:693::-;10424:6;10432;10440;10448;10456;10464;10472;10525:3;10513:9;10504:7;10500:23;10496:33;10493:53;;;10542:1;10539;10532:12;10493:53;10565:29;10584:9;10565:29;:::i;:::-;10555:39;;10613:38;10647:2;10636:9;10632:18;10613:38;:::i;:::-;10603:48;;10670:35;10701:2;10690:9;10686:18;10670:35;:::i;:::-;10660:45;;10752:2;10741:9;10737:18;10724:32;10714:42;;10806:3;10795:9;10791:19;10778:33;10851:4;10844:5;10840:16;10833:5;10830:27;10820:55;;10871:1;10868;10861:12;10820:55;10316:693;;;;-1:-1:-1;10316:693:184;;;;10894:5;10946:3;10931:19;;10918:33;;-1:-1:-1;10998:3:184;10983:19;;;10970:33;;10316:693;-1:-1:-1;;10316:693:184:o;11267:322::-;11344:6;11352;11360;11413:2;11401:9;11392:7;11388:23;11384:32;11381:52;;;11429:1;11426;11419:12;11381:52;11465:9;11452:23;11442:33;;11494:38;11528:2;11517:9;11513:18;11494:38;:::i;:::-;11484:48;;11579:2;11568:9;11564:18;11551:32;11541:42;;11267:322;;;;;:::o;11594:186::-;11653:6;11706:2;11694:9;11685:7;11681:23;11677:32;11674:52;;;11722:1;11719;11712:12;11674:52;11745:29;11764:9;11745:29;:::i;11785:186::-;11844:6;11897:2;11885:9;11876:7;11872:23;11868:32;11865:52;;;11913:1;11910;11903:12;11865:52;11936:29;11955:9;11936:29;:::i;11976:472::-;12071:6;12079;12087;12095;12103;12156:3;12144:9;12135:7;12131:23;12127:33;12124:53;;;12173:1;12170;12163:12;12124:53;12209:9;12196:23;12186:33;;12238:38;12272:2;12261:9;12257:18;12238:38;:::i;:::-;12228:48;;12295:38;12329:2;12318:9;12314:18;12295:38;:::i;:::-;12285:48;;12380:2;12369:9;12365:18;12352:32;12342:42;;12403:39;12437:3;12426:9;12422:19;12403:39;:::i;:::-;12393:49;;11976:472;;;;;;;;:::o;12453:162::-;12520:20;;12580:2;12569:21;;;12559:32;;12549:60;;12605:1;12602;12595:12;12620:184;12688:20;;-1:-1:-1;;;;;12737:42:184;;12727:53;;12717:81;;12794:1;12791;12784:12;12809:1154;12897:6;12950:3;12938:9;12929:7;12925:23;12921:33;12918:53;;;12967:1;12964;12957:12;12918:53;12993:17;;:::i;:::-;13033:29;13052:9;13033:29;:::i;:::-;13026:5;13019:44;13095:38;13129:2;13118:9;13114:18;13095:38;:::i;:::-;13090:2;13083:5;13079:14;13072:62;13166:38;13200:2;13189:9;13185:18;13166:38;:::i;:::-;13161:2;13154:5;13150:14;13143:62;13237:38;13271:2;13260:9;13256:18;13237:38;:::i;:::-;13232:2;13225:5;13221:14;13214:62;13309:38;13342:3;13331:9;13327:19;13309:38;:::i;:::-;13303:3;13296:5;13292:15;13285:63;13381:39;13415:3;13404:9;13400:19;13381:39;:::i;:::-;13375:3;13368:5;13364:15;13357:64;13454:39;13488:3;13477:9;13473:19;13454:39;:::i;:::-;13448:3;13441:5;13437:15;13430:64;13527:39;13561:3;13550:9;13546:19;13527:39;:::i;:::-;13521:3;13514:5;13510:15;13503:64;13586:3;13621:35;13652:2;13641:9;13637:18;13621:35;:::i;:::-;13605:14;;;13598:59;13676:3;13711:35;13727:18;;;13711:35;:::i;:::-;13695:14;;;13688:59;13766:3;13801:38;13820:18;;;13801:38;:::i;:::-;13785:14;;;13778:62;13859:3;13894:38;13913:18;;;13894:38;:::i;:::-;13878:14;;;13871:62;13882:5;12809:1154;-1:-1:-1;;;12809:1154:184:o;13968:184::-;14038:6;14091:2;14079:9;14070:7;14066:23;14062:32;14059:52;;;14107:1;14104;14097:12;14059:52;-1:-1:-1;14130:16:184;;13968:184;-1:-1:-1;13968:184:184:o;14436:127::-;14497:10;14492:3;14488:20;14485:1;14478:31;14528:4;14525:1;14518:15;14552:4;14549:1;14542:15;14568:136;14603:3;-1:-1:-1;;;14624:22:184;;14621:48;;14649:18;;:::i;:::-;-1:-1:-1;14689:1:184;14685:13;;14568:136::o;15538:287::-;15667:3;15705:6;15699:13;15721:66;15780:6;15775:3;15768:4;15760:6;15756:17;15721:66;:::i;:::-;15803:16;;;;;15538:287;-1:-1:-1;;15538:287:184:o;15830:128::-;15897:9;;;15918:11;;;15915:37;;;15932:18;;:::i;15963:125::-;16028:9;;;16049:10;;;16046:36;;;16062:18;;:::i;16093:200::-;16159:9;;;16132:4;16187:9;;16215:10;;16227:12;;;16211:29;16250:12;;;16242:21;;16208:56;16205:82;;;16267:18;;:::i;:::-;16205:82;16093:200;;;;:::o;16298:127::-;16359:10;16354:3;16350:20;16347:1;16340:31;16390:4;16387:1;16380:15;16414:4;16411:1;16404:15;16430:112;16462:1;16488;16478:35;;16493:18;;:::i;:::-;-1:-1:-1;16527:9:184;;16430:112::o;16547:168::-;16620:9;;;16651;;16668:15;;;16662:22;;16648:37;16638:71;;16689:18;;:::i;16720:216::-;16784:9;;;16812:11;;;16759:3;16842:9;;16870:10;;16866:19;;16895:10;;16887:19;;16863:44;16860:70;;;16910:18;;:::i;:::-;16860:70;;16720:216;;;;:::o;16941:360::-;17105:2;17090:18;;17138:1;17127:13;;17117:144;;17183:10;17178:3;17174:20;17171:1;17164:31;17218:4;17215:1;17208:15;17246:4;17243:1;17236:15;17117:144;17270:25;;;16941:360;:::o;17306:193::-;17345:1;17371;17361:35;;17376:18;;:::i;:::-;-1:-1:-1;;;17412:18:184;;-1:-1:-1;;17432:13:184;;17408:38;17405:64;;;17449:18;;:::i;:::-;-1:-1:-1;17483:10:184;;17306:193::o",
    "linkReferences": {},
    "immutableReferences": {
      "13002": [
        {
          "start": 2884,
          "length": 32
        },
        {
          "start": 3038,
          "length": 32
        },
        {
          "start": 3153,
          "length": 32
        }
      ],
      "13005": [
        {
          "start": 4979,
          "length": 32
        }
      ],
      "13008": [
        {
          "start": 4561,
          "length": 32
        },
        {
          "start": 5653,
          "length": 32
        }
      ],
      "13011": [
        {
          "start": 5065,
          "length": 32
        },
        {
          "start": 5204,
          "length": 32
        },
        {
          "start": 6774,
          "length": 32
        }
      ],
      "13014": [
        {
          "start": 4123,
          "length": 32
        },
        {
          "start": 4618,
          "length": 32
        },
        {
          "start": 5253,
          "length": 32
        }
      ],
      "13017": [
        {
          "start": 4258,
          "length": 32
        },
        {
          "start": 5286,
          "length": 32
        }
      ],
      "13020": [
        {
          "start": 4181,
          "length": 32
        },
        {
          "start": 4302,
          "length": 32
        },
        {
          "start": 4686,
          "length": 32
        }
      ],
      "13026": [
        {
          "start": 5099,
          "length": 32
        },
        {
          "start": 5171,
          "length": 32
        },
        {
          "start": 6741,
          "length": 32
        }
      ],
      "13029": [
        {
          "start": 4777,
          "length": 32
        },
        {
          "start": 5456,
          "length": 32
        },
        {
          "start": 5516,
          "length": 32
        }
      ],
      "1844": [
        {
          "start": 605,
          "length": 32
        },
        {
          "start": 1028,
          "length": 32
        },
        {
          "start": 2467,
          "length": 32
        },
        {
          "start": 2565,
          "length": 32
        },
        {
          "start": 2615,
          "length": 32
        },
        {
          "start": 2753,
          "length": 32
        },
        {
          "start": 3297,
          "length": 32
        },
        {
          "start": 3574,
          "length": 32
        },
        {
          "start": 3806,
          "length": 32
        },
        {
          "start": 3973,
          "length": 32
        }
      ],
      "1847": [
        {
          "start": 2123,
          "length": 32
        },
        {
          "start": 2515,
          "length": 32
        },
        {
          "start": 2802,
          "length": 32
        },
        {
          "start": 3368,
          "length": 32
        }
      ],
      "1850": [
        {
          "start": 1744,
          "length": 32
        },
        {
          "start": 2701,
          "length": 32
        },
        {
          "start": 4022,
          "length": 32
        }
      ],
      "1853": [
        {
          "start": 2020,
          "length": 32
        },
        {
          "start": 3878,
          "length": 32
        }
      ],
      "1856": [
        {
          "start": 2207,
          "length": 32
        },
        {
          "start": 3932,
          "length": 32
        }
      ],
      "1865": [
        {
          "start": 1266,
          "length": 32
        },
        {
          "start": 3429,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "PERMIT_TYPEHASH()": "30adf81f",
    "accrue(uint256,int256)": "68096239",
    "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "calculateFeesGivenBonds(uint256,uint256,uint256,uint256)": "22d5506b",
    "calculateFeesGivenShares(uint256,uint256,uint256)": "71f88b7c",
    "calculateIdleShareReserves(uint256)": "b1b4b170",
    "calculateOpenLong(uint256,uint256)": "9bd33498",
    "calculateTimeRemaining(uint256)": "68c2ecb8",
    "calculateTimeRemainingScaled(uint256)": "ca6d38f7",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
    "collectGovernanceFee((address,bool,bytes))": "3e691db9",
    "getTotalShares()": "d5002f2e",
    "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
    "latestCheckpoint()": "907c0f92",
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
    "setLongExposure(uint128)": "b4f8da39",
    "setMarketState((uint128,uint128,uint128,uint128,int128,uint128,uint128,uint128,bool,bool,uint112,uint128))": "f45cf2e0",
    "setPauser(address,bool)": "7180c8ca",
    "setReserves(uint128,uint128)": "702db0eb",
    "setTotalShares(uint256)": "a77384c1",
    "target0()": "21b57d53",
    "target1()": "eac3e799",
    "target2()": "a6e8a859",
    "target3()": "d899e112",
    "target4()": "f3f70707",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
    "updateLiquidity(int256)": "8120a3e2"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"apr\",\"type\":\"int256\"}],\"name\":\"accrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesGivenBonds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalFlatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalGovernanceFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesGivenShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceCurveFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateIdleShareReserves\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalGovernanceFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemaining\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timeRemaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemainingScaled\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timeRemaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestCheckpoint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"}],\"name\":\"setLongExposure\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"_marketState_\",\"type\":\"tuple\"}],\"name\":\"setMarketState\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"}],\"name\":\"setReserves\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_totalShares\",\"type\":\"uint256\"}],\"name\":\"setTotalShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_shareReservesDelta\",\"type\":\"int256\"}],\"name\":\"updateLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"collectGovernanceFee((address,bool,bytes))\":{\"returns\":{\"_0\":\"proceeds The amount of base collected.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidShareReserves()\":[{\"notice\":\"Thrown when update liquidity brings the share reserves below         the minimum share reserves.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"UnexpectedSuccess()\":[{\"notice\":\"Thrown when a read-only call succeeds. The proxy architecture         uses a force-revert delegatecall pattern to ensure that calls         that are intended to be read-only are actually read-only.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}]},\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setMarketState((uint128,uint128,uint128,uint128,int128,uint128,uint128,uint128,bool,bool,uint112,uint128))\":{\"notice\":\"Mocks ///\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains         stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains         stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains         stateful functions.\"},\"target4()\":{\"notice\":\"The target4 address. This is a logic contract that contains all         some stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"MockHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0xf13876323d6ec88f8d677f9e97a41e38527266af0a73dbf53ac5c51e6cbe8bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://be3e4a1d83c4f02b81d38002f7862d817b543702a6e90245eeabe4a1ae1f5051\",\"dweb:/ipfs/QmfYCQ8oTCo3UkdWZ4easGZoAYRrSiZGtbi7SsR8oP2PDJ\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x0977333fa78572cbd52deafbd01876e232a75170bcbb729cde37bfae8904a611\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1d7ad748953d0e16b4b3a287fa7fe9cdada42a1feebf0db4fe9b4deff2c079fb\",\"dweb:/ipfs/QmNsbYuGteVv9op5AfpQheqNTjA6C1GKdCEwCiFmX1Tnje\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x872936746745dd2a51a794f6164b8e2284149a05907ce0c5716c22ac41843a32\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d5076d4ab69aae637a42f7710bee96a2096e24a01c5b63cd18bd4e1ffee8040b\",\"dweb:/ipfs/QmNxqSj6iba9MZYcuPih6KGuS1jB2iRWyhfuRyLnnTSdjn\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0x970a42b84aa146359b457ff80292cf63da4fec87dd40f0c381b895e6a7164c5c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c0c345a61d801ece680c772e18239a09182aba02f1faef9c80a97efd9d12fde3\",\"dweb:/ipfs/QmQf22pfDV1ssU87RD9JHX5cx4xmSfZNmA68dy4FX8SpTn\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x05df10b1980af42c88176b1b4efa7571bd97e440d5eb3e22161010d8969c04bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9e30127e03d5d64bcbea739382593404238292c6f1a9480483ab2b29f2f83483\",\"dweb:/ipfs/QmUoP65LsnUMGbqardQ7h3KVT9ojWAc4ttzKgKHe7cYy8t\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0x9af0ad4e06ec7b67b731854bfdee2224bab03bf64803ea4bd801ea71cc8fbccf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e3deb01021351fe7adb1a7273ae483467476be845aa191a76256df5f8f168c58\",\"dweb:/ipfs/QmNfA2XYuzTJTc8AGbVHbX5hCvrgShb7bCaNeJvWfs5uAG\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0xb03ab9d883c7eb223ea4d05d5d22cb30834b5589958459ff70236c0e1f571e7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0f33134385373cb53eed027b88befe223e70ebe77ecf19dea6ce3f2a677458d1\",\"dweb:/ipfs/QmWGrRr12zS1ccFzMx82zwWoJfHDZf6bdYivNF4FA3Ggd3\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x85425352d87169445470983b3ba518d759f022bdbaec6dad3bdd606a96f9b826\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://453da96e4ddc453cace00c54c3bef55ab1b7f7d23c86c33e5aa09c395ee54496\",\"dweb:/ipfs/QmXkvqn4mEq8sw4ofFW4jKR3QCmPJTxGmKh6YWpKp5sU3w\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e\",\"dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x90ef3178580af58520b7517024b091b7d67cc6e6e93cb46e061ba2fd7366b972\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5841dbfb9498e283d26855ca25caebfb080c8893474858acfde43ba60c0cb2ae\",\"dweb:/ipfs/QmRYGcn4qmjt7eYsr4oMANBignijf6oz4UFmRA679zt9YD\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x7213875367ce751a20f5371d79880a2b6105bf3e20fab65044ecb9f921d17deb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://179935e894ba8c1a634b3ab16d1b3914c60218fa5dbf61e58ce54df06ac6d75e\",\"dweb:/ipfs/QmRif44MTY2U9b5TFAiEStZYu2TiUQUANi5VQKDvQezeKy\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0xa1d8f02c9a470eb0e1fd2ff6195546fe414485cd3c86b9f0ff0734db27699ab6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://54324a6775bbd1cfc643504cb9b0e53fd843f5a4d9d7c38c07526d6b3e44299d\",\"dweb:/ipfs/QmREvG68YXkt1EoWZL131BpnB4fWjvK6GXJpzi6msL1VzB\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x960457a35b1ac18fa27eb3524d29f8ae14cbdbad70a20c46aab62a20330eadb0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e1f791d322e18bada00890b63c13de0d4db9e37b5583d005e44e4516b0f6eb71\",\"dweb:/ipfs/Qmd8Tcer76uSNah2eKA5g9MTSVGwch9HXZUYfMN7YEWeZ7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0xc4d712ed08255a2c1cda9b2b0256a4d4eb5f201438d9afc56437f5a6a413df09\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e60c40a7c62d90779112453b593b7d49cb1d94bce647b027e64c7945fa042fb0\",\"dweb:/ipfs/QmVgCNq21QdcBTF6z5ET6fPAiRX4MstMnMmZPXcVqJZ5Ua\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/Constants.sol\":{\"keccak256\":\"0x1d2e53dc74e1efce3175255e993195d06f25a94b779b8bdf88705056f40c231b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db06c971fbc6394cf5686c661e5cddc44818113134dfb56a5324495239f86ca8\",\"dweb:/ipfs/QmY25XsnomyJic1hFMZSqLzzi8NYmYfZVgLBgcXk5Ggejc\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x8984493923a9412c6cca272d1b425aa36aa03744c9f0ca2be204f7f0b71c1526\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ce3273e691814ffda079752f1b15bcf64a0ae911fe8a58903d34ce6210ba053b\",\"dweb:/ipfs/QmRAXXNPy9vyG9duP9ET9WrDfrmq3fds7mxfGdsSYZ1tVv\"]}},\"version\":1}",
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
                  "internalType": "address",
                  "name": "linkerFactory",
                  "type": "address"
                },
                {
                  "internalType": "bytes32",
                  "name": "linkerCodeHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "initialVaultSharePrice",
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
                      "name": "governanceLP",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "governanceZombie",
                      "type": "uint256"
                    }
                  ]
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpInvalidExponent"
        },
        {
          "inputs": [
            {
              "internalType": "enum IHyperdrive.InsufficientLiquidityReason",
              "name": "reason",
              "type": "uint8"
            }
          ],
          "type": "error",
          "name": "InsufficientLiquidity"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "LnInvalidInput"
        },
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
              "name": "time",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "apr",
              "type": "int256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "accrue"
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
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_normalizedTimeRemaining",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_spotPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vaultSharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateFeesGivenBonds",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "totalCurveFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalFlatFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "governanceCurveFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalGovernanceFee",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_shareAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_spotPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vaultSharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateFeesGivenShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "curveFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "governanceCurveFee",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_vaultSharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateIdleShareReserves",
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
              "name": "_shareAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_vaultSharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateOpenLong",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "shareReservesDelta",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bondReservesDelta",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bondProceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalGovernanceFee",
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
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateTimeRemaining",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "timeRemaining",
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
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateTimeRemainingScaled",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "timeRemaining",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getTotalShares",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "latestCheckpoint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "checkpointTime",
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
              "internalType": "uint128",
              "name": "longExposure",
              "type": "uint128"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setLongExposure"
        },
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.MarketState",
              "name": "_marketState_",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint128",
                  "name": "shareReserves",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "bondReserves",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longExposure",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longsOutstanding",
                  "type": "uint128"
                },
                {
                  "internalType": "int128",
                  "name": "shareAdjustment",
                  "type": "int128"
                },
                {
                  "internalType": "uint128",
                  "name": "shortsOutstanding",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longAverageMaturityTime",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "shortAverageMaturityTime",
                  "type": "uint128"
                },
                {
                  "internalType": "bool",
                  "name": "isInitialized",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isPaused",
                  "type": "bool"
                },
                {
                  "internalType": "uint112",
                  "name": "zombieBaseProceeds",
                  "type": "uint112"
                },
                {
                  "internalType": "uint128",
                  "name": "zombieShareReserves",
                  "type": "uint128"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setMarketState"
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
          "inputs": [
            {
              "internalType": "uint128",
              "name": "shareReserves",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "bondReserves",
              "type": "uint128"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setReserves"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_totalShares",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setTotalShares"
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
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "_shareReservesDelta",
              "type": "int256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateLiquidity"
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
          "setMarketState((uint128,uint128,uint128,uint128,int128,uint128,uint128,uint128,bool,bool,uint112,uint128))": {
            "notice": "Mocks ///"
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
        "contracts/test/MockHyperdrive.sol": "MockHyperdrive"
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
      "contracts/src/external/HyperdriveTarget1.sol": {
        "keccak256": "0x872936746745dd2a51a794f6164b8e2284149a05907ce0c5716c22ac41843a32",
        "urls": [
          "bzz-raw://d5076d4ab69aae637a42f7710bee96a2096e24a01c5b63cd18bd4e1ffee8040b",
          "dweb:/ipfs/QmNxqSj6iba9MZYcuPih6KGuS1jB2iRWyhfuRyLnnTSdjn"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/external/HyperdriveTarget2.sol": {
        "keccak256": "0x970a42b84aa146359b457ff80292cf63da4fec87dd40f0c381b895e6a7164c5c",
        "urls": [
          "bzz-raw://c0c345a61d801ece680c772e18239a09182aba02f1faef9c80a97efd9d12fde3",
          "dweb:/ipfs/QmQf22pfDV1ssU87RD9JHX5cx4xmSfZNmA68dy4FX8SpTn"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/external/HyperdriveTarget3.sol": {
        "keccak256": "0x05df10b1980af42c88176b1b4efa7571bd97e440d5eb3e22161010d8969c04bf",
        "urls": [
          "bzz-raw://9e30127e03d5d64bcbea739382593404238292c6f1a9480483ab2b29f2f83483",
          "dweb:/ipfs/QmUoP65LsnUMGbqardQ7h3KVT9ojWAc4ttzKgKHe7cYy8t"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/external/HyperdriveTarget4.sol": {
        "keccak256": "0x9af0ad4e06ec7b67b731854bfdee2224bab03bf64803ea4bd801ea71cc8fbccf",
        "urls": [
          "bzz-raw://e3deb01021351fe7adb1a7273ae483467476be845aa191a76256df5f8f168c58",
          "dweb:/ipfs/QmNfA2XYuzTJTc8AGbVHbX5hCvrgShb7bCaNeJvWfs5uAG"
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
      "contracts/test/ERC20Mintable.sol": {
        "keccak256": "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d",
        "urls": [
          "bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df",
          "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockHyperdrive.sol": {
        "keccak256": "0xc4d712ed08255a2c1cda9b2b0256a4d4eb5f201438d9afc56437f5a6a413df09",
        "urls": [
          "bzz-raw://e60c40a7c62d90779112453b593b7d49cb1d94bce647b027e64c7945fa042fb0",
          "dweb:/ipfs/QmVgCNq21QdcBTF6z5ET6fPAiRX4MstMnMmZPXcVqJZ5Ua"
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
      },
      "lib/solmate/src/auth/Auth.sol": {
        "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
        "urls": [
          "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
          "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
        "keccak256": "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
        "urls": [
          "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
          "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      },
      "test/utils/Constants.sol": {
        "keccak256": "0x1d2e53dc74e1efce3175255e993195d06f25a94b779b8bdf88705056f40c231b",
        "urls": [
          "bzz-raw://db06c971fbc6394cf5686c661e5cddc44818113134dfb56a5324495239f86ca8",
          "dweb:/ipfs/QmY25XsnomyJic1hFMZSqLzzi8NYmYfZVgLBgcXk5Ggejc"
        ],
        "license": "Apache-2.0"
      },
      "test/utils/HyperdriveUtils.sol": {
        "keccak256": "0x8984493923a9412c6cca272d1b425aa36aa03744c9f0ca2be204f7f0b71c1526",
        "urls": [
          "bzz-raw://ce3273e691814ffda079752f1b15bcf64a0ae911fe8a58903d34ce6210ba053b",
          "dweb:/ipfs/QmRAXXNPy9vyG9duP9ET9WrDfrmq3fds7mxfGdsSYZ1tVv"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockHyperdrive.sol",
    "id": 20867,
    "exportedSymbols": {
      "ERC20Mintable": [
        19264
      ],
      "ETH": [
        140741
      ],
      "FixedPointMath": [
        14294
      ],
      "Hyperdrive": [
        2381
      ],
      "HyperdriveBase": [
        9507
      ],
      "HyperdriveTarget0": [
        3128
      ],
      "HyperdriveTarget1": [
        3261
      ],
      "HyperdriveTarget2": [
        3361
      ],
      "HyperdriveTarget3": [
        3429
      ],
      "HyperdriveTarget4": [
        3497
      ],
      "HyperdriveUtils": [
        145581
      ],
      "IHyperdrive": [
        7411
      ],
      "IMockHyperdrive": [
        20064
      ],
      "MockHyperdrive": [
        20777
      ],
      "MockHyperdriveBase": [
        20446
      ],
      "MockHyperdriveTarget0": [
        20806
      ],
      "MockHyperdriveTarget1": [
        20821
      ],
      "MockHyperdriveTarget2": [
        20836
      ],
      "MockHyperdriveTarget3": [
        20851
      ],
      "MockHyperdriveTarget4": [
        20866
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:11526:86",
    "nodes": [
      {
        "id": 19994,
        "nodeType": "PragmaDirective",
        "src": "39:23:86",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 19996,
        "nodeType": "ImportDirective",
        "src": "64:67:86",
        "nodes": [],
        "absolutePath": "contracts/src/external/Hyperdrive.sol",
        "file": "contracts/src/external/Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 2382,
        "symbolAliases": [
          {
            "foreign": {
              "id": 19995,
              "name": "Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 2381,
              "src": "73:10:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 19998,
        "nodeType": "ImportDirective",
        "src": "132:81:86",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
        "file": "contracts/src/external/HyperdriveTarget0.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 3129,
        "symbolAliases": [
          {
            "foreign": {
              "id": 19997,
              "name": "HyperdriveTarget0",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3128,
              "src": "141:17:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20000,
        "nodeType": "ImportDirective",
        "src": "214:81:86",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget1.sol",
        "file": "contracts/src/external/HyperdriveTarget1.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 3262,
        "symbolAliases": [
          {
            "foreign": {
              "id": 19999,
              "name": "HyperdriveTarget1",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3261,
              "src": "223:17:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20002,
        "nodeType": "ImportDirective",
        "src": "296:81:86",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget2.sol",
        "file": "contracts/src/external/HyperdriveTarget2.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 3362,
        "symbolAliases": [
          {
            "foreign": {
              "id": 20001,
              "name": "HyperdriveTarget2",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3361,
              "src": "305:17:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20004,
        "nodeType": "ImportDirective",
        "src": "378:81:86",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget3.sol",
        "file": "contracts/src/external/HyperdriveTarget3.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 3430,
        "symbolAliases": [
          {
            "foreign": {
              "id": 20003,
              "name": "HyperdriveTarget3",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3429,
              "src": "387:17:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20006,
        "nodeType": "ImportDirective",
        "src": "460:81:86",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget4.sol",
        "file": "contracts/src/external/HyperdriveTarget4.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 3498,
        "symbolAliases": [
          {
            "foreign": {
              "id": 20005,
              "name": "HyperdriveTarget4",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3497,
              "src": "469:17:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20008,
        "nodeType": "ImportDirective",
        "src": "542:75:86",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
        "file": "contracts/src/internal/HyperdriveBase.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 9508,
        "symbolAliases": [
          {
            "foreign": {
              "id": 20007,
              "name": "HyperdriveBase",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9507,
              "src": "551:14:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20010,
        "nodeType": "ImportDirective",
        "src": "618:71:86",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 20009,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "627:11:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20012,
        "nodeType": "ImportDirective",
        "src": "690:71:86",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 20011,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "699:11:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20014,
        "nodeType": "ImportDirective",
        "src": "762:76:86",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "contracts/src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 14295,
        "symbolAliases": [
          {
            "foreign": {
              "id": 20013,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14294,
              "src": "771:14:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20016,
        "nodeType": "ImportDirective",
        "src": "839:65:86",
        "nodes": [],
        "absolutePath": "contracts/test/ERC20Mintable.sol",
        "file": "contracts/test/ERC20Mintable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 19265,
        "symbolAliases": [
          {
            "foreign": {
              "id": 20015,
              "name": "ERC20Mintable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 19264,
              "src": "848:13:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20018,
        "nodeType": "ImportDirective",
        "src": "905:47:86",
        "nodes": [],
        "absolutePath": "test/utils/Constants.sol",
        "file": "test/utils/Constants.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 140742,
        "symbolAliases": [
          {
            "foreign": {
              "id": 20017,
              "name": "ETH",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 140741,
              "src": "914:3:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20020,
        "nodeType": "ImportDirective",
        "src": "953:65:86",
        "nodes": [],
        "absolutePath": "test/utils/HyperdriveUtils.sol",
        "file": "test/utils/HyperdriveUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 20867,
        "sourceUnit": 145582,
        "symbolAliases": [
          {
            "foreign": {
              "id": 20019,
              "name": "HyperdriveUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 145581,
              "src": "962:15:86",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 20064,
        "nodeType": "ContractDefinition",
        "src": "1020:594:86",
        "nodes": [
          {
            "id": 20027,
            "nodeType": "FunctionDefinition",
            "src": "1052:51:86",
            "nodes": [],
            "functionSelector": "68096239",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "accrue",
            "nameLocation": "1061:6:86",
            "parameters": {
              "id": 20025,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20022,
                  "mutability": "mutable",
                  "name": "time",
                  "nameLocation": "1076:4:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20027,
                  "src": "1068:12:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20021,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1068:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20024,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "1089:3:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20027,
                  "src": "1082:10:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 20023,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1082:6:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1067:26:86"
            },
            "returnParameters": {
              "id": 20026,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1102:0:86"
            },
            "scope": 20064,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20034,
            "nodeType": "FunctionDefinition",
            "src": "1109:101:86",
            "nodes": [],
            "functionSelector": "68c2ecb8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "1118:22:86",
            "parameters": {
              "id": 20030,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20029,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "1158:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20034,
                  "src": "1150:21:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20028,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1150:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1140:37:86"
            },
            "returnParameters": {
              "id": 20033,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20032,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20034,
                  "src": "1201:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20031,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1201:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1200:9:86"
            },
            "scope": 20064,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20041,
            "nodeType": "FunctionDefinition",
            "src": "1216:107:86",
            "nodes": [],
            "functionSelector": "ca6d38f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemainingScaled",
            "nameLocation": "1225:28:86",
            "parameters": {
              "id": 20037,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20036,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "1271:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20041,
                  "src": "1263:21:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20035,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1263:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1253:37:86"
            },
            "returnParameters": {
              "id": 20040,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20039,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20041,
                  "src": "1314:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20038,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1314:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1313:9:86"
            },
            "scope": 20064,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20046,
            "nodeType": "FunctionDefinition",
            "src": "1329:60:86",
            "nodes": [],
            "functionSelector": "907c0f92",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "1338:16:86",
            "parameters": {
              "id": 20042,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1354:2:86"
            },
            "returnParameters": {
              "id": 20045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20044,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20046,
                  "src": "1380:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20043,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1380:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1379:9:86"
            },
            "scope": 20064,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20051,
            "nodeType": "FunctionDefinition",
            "src": "1395:62:86",
            "nodes": [],
            "functionSelector": "ced09112",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "updateLiquidity",
            "nameLocation": "1404:15:86",
            "parameters": {
              "id": 20049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20048,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "1428:18:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20051,
                  "src": "1420:26:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20047,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1420:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1419:28:86"
            },
            "returnParameters": {
              "id": 20050,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1456:0:86"
            },
            "scope": 20064,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20058,
            "nodeType": "FunctionDefinition",
            "src": "1463:75:86",
            "nodes": [],
            "functionSelector": "8392b8c0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setReserves",
            "nameLocation": "1472:11:86",
            "parameters": {
              "id": 20056,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20053,
                  "mutability": "mutable",
                  "name": "shareReserves",
                  "nameLocation": "1492:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20058,
                  "src": "1484:21:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20052,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1484:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20055,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "1515:12:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20058,
                  "src": "1507:20:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20054,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1507:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1483:45:86"
            },
            "returnParameters": {
              "id": 20057,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1537:0:86"
            },
            "scope": 20064,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20063,
            "nodeType": "FunctionDefinition",
            "src": "1544:68:86",
            "nodes": [],
            "functionSelector": "8e67f87e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getGovernanceFeesAccrued",
            "nameLocation": "1553:24:86",
            "parameters": {
              "id": 20059,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1577:2:86"
            },
            "returnParameters": {
              "id": 20062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20061,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20063,
                  "src": "1603:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20060,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1603:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1602:9:86"
            },
            "scope": 20064,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IMockHyperdrive",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          20064
        ],
        "name": "IMockHyperdrive",
        "nameLocation": "1030:15:86",
        "scope": 20867,
        "usedErrors": [],
        "usedEvents": []
      },
      {
        "id": 20446,
        "nodeType": "ContractDefinition",
        "src": "1616:4543:86",
        "nodes": [
          {
            "id": 20069,
            "nodeType": "UsingForDirective",
            "src": "1677:33:86",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 20067,
              "name": "FixedPointMath",
              "nameLocations": [
                "1683:14:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14294,
              "src": "1683:14:86"
            },
            "typeName": {
              "id": 20068,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1702:7:86",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 20071,
            "nodeType": "VariableDeclaration",
            "src": "1716:28:86",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "totalShares",
            "nameLocation": "1733:11:86",
            "scope": 20446,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 20070,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1716:7:86",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 20230,
            "nodeType": "FunctionDefinition",
            "src": "1751:1740:86",
            "nodes": [],
            "body": {
              "id": 20229,
              "nodeType": "Block",
              "src": "1890:1601:86",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    20085
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20085,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "1961:6:86",
                      "nodeType": "VariableDeclaration",
                      "scope": 20229,
                      "src": "1953:14:86",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 20084,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1953:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20086,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1953:14:86"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 20092,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 20089,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13002,
                          "src": "1989:10:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6740",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6740",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 20088,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1981:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 20087,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1981:7:86",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 20090,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1981:19:86",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 20091,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 140741,
                      "src": "2004:3:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1981:26:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 20112,
                    "nodeType": "Block",
                    "src": "2070:69:86",
                    "statements": [
                      {
                        "expression": {
                          "id": 20110,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 20102,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20085,
                            "src": "2084:6:86",
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
                                "arguments": [
                                  {
                                    "id": 20107,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "2122:4:86",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 20106,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2114:7:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 20105,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2114:7:86",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 20108,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2114:13:86",
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
                                "id": 20103,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13002,
                                "src": "2093:10:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6740",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 20104,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2104:9:86",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6701,
                              "src": "2093:20:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 20109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2093:35:86",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2084:44:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20111,
                        "nodeType": "ExpressionStatement",
                        "src": "2084:44:86"
                      }
                    ]
                  },
                  "id": 20113,
                  "nodeType": "IfStatement",
                  "src": "1977:162:86",
                  "trueBody": {
                    "id": 20101,
                    "nodeType": "Block",
                    "src": "2009:55:86",
                    "statements": [
                      {
                        "expression": {
                          "id": 20099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 20093,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20085,
                            "src": "2023:6:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 20096,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "2040:4:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                ],
                                "id": 20095,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2032:7:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 20094,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2032:7:86",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 20097,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2032:13:86",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 20098,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2046:7:86",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "2032:21:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2023:30:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20100,
                        "nodeType": "ExpressionStatement",
                        "src": "2023:30:86"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    20115
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20115,
                      "mutability": "mutable",
                      "name": "baseAmount",
                      "nameLocation": "2156:10:86",
                      "nodeType": "VariableDeclaration",
                      "scope": 20229,
                      "src": "2148:18:86",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 20114,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2148:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20125,
                  "initialValue": {
                    "condition": {
                      "expression": {
                        "id": 20116,
                        "name": "options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20076,
                        "src": "2169:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      },
                      "id": 20117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2177:6:86",
                      "memberName": "asBase",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7267,
                      "src": "2169:14:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "arguments": [
                        {
                          "id": 20121,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20085,
                          "src": "2237:6:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20122,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20071,
                          "src": "2245:11:86",
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
                          "id": 20119,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20073,
                          "src": "2219:6:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20120,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2226:10:86",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13554,
                        "src": "2219:17:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 20123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2219:38:86",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 20124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "2169:88:86",
                    "trueExpression": {
                      "id": 20118,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20073,
                      "src": "2198:6:86",
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
                  "src": "2148:109:86"
                },
                {
                  "assignments": [
                    20127
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20127,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "2404:7:86",
                      "nodeType": "VariableDeclaration",
                      "scope": 20229,
                      "src": "2399:12:86",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 20126,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2399:4:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20129,
                  "initialValue": {
                    "hexValue": "74727565",
                    "id": 20128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2414:4:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2399:19:86"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 20135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 20132,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13002,
                          "src": "2440:10:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6740",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6740",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 20131,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2432:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 20130,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2432:7:86",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 20133,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2432:19:86",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 20134,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 140741,
                      "src": "2455:3:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2432:26:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 20184,
                    "nodeType": "Block",
                    "src": "2771:159:86",
                    "statements": [
                      {
                        "expression": {
                          "id": 20182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 20171,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20127,
                            "src": "2785:7:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 20174,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "2836:3:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 20175,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2840:6:86",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "2836:10:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 20178,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "2872:4:86",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 20177,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2864:7:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 20176,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2864:7:86",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 20179,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2864:13:86",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 20180,
                                "name": "baseAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20115,
                                "src": "2895:10:86",
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
                                "id": 20172,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13002,
                                "src": "2795:10:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6740",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 20173,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2806:12:86",
                              "memberName": "transferFrom",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6739,
                              "src": "2795:23:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,address,uint256) external returns (bool)"
                              }
                            },
                            "id": 20181,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2795:124:86",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "2785:134:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 20183,
                        "nodeType": "ExpressionStatement",
                        "src": "2785:134:86"
                      }
                    ]
                  },
                  "id": 20185,
                  "nodeType": "IfStatement",
                  "src": "2428:502:86",
                  "trueBody": {
                    "id": 20170,
                    "nodeType": "Block",
                    "src": "2460:305:86",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 20139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 20136,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2478:3:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 20137,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2482:5:86",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "2478:9:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 20138,
                            "name": "baseAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20115,
                            "src": "2490:10:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2478:22:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 20146,
                        "nodeType": "IfStatement",
                        "src": "2474:96:86",
                        "trueBody": {
                          "id": 20145,
                          "nodeType": "Block",
                          "src": "2502:68:86",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 20140,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7411,
                                    "src": "2527:11:86",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 20142,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2539:14:86",
                                  "memberName": "TransferFailed",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7366,
                                  "src": "2527:26:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 20143,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2527:28:86",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 20144,
                              "nodeType": "RevertStatement",
                              "src": "2520:35:86"
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
                          "id": 20150,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 20147,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2587:3:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 20148,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2591:5:86",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "2587:9:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 20149,
                            "name": "baseAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20115,
                            "src": "2599:10:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2587:22:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 20169,
                        "nodeType": "IfStatement",
                        "src": "2583:172:86",
                        "trueBody": {
                          "id": 20168,
                          "nodeType": "Block",
                          "src": "2611:144:86",
                          "statements": [
                            {
                              "expression": {
                                "id": 20166,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "components": [
                                    {
                                      "id": 20151,
                                      "name": "success",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20127,
                                      "src": "2630:7:86",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    null
                                  ],
                                  "id": 20152,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "TupleExpression",
                                  "src": "2629:11:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$_t_bool_$__$",
                                    "typeString": "tuple(bool,)"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "arguments": [
                                    {
                                      "hexValue": "",
                                      "id": 20164,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2737:2:86",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                        "typeString": "literal_string \"\""
                                      },
                                      "value": ""
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                        "typeString": "literal_string \"\""
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                          "typeString": "literal_string \"\""
                                        }
                                      ],
                                      "expression": {
                                        "arguments": [
                                          {
                                            "expression": {
                                              "id": 20155,
                                              "name": "msg",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -15,
                                              "src": "2651:3:86",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                              }
                                            },
                                            "id": 20156,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2655:6:86",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "2651:10:86",
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
                                          "id": 20154,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "2643:8:86",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_payable_$",
                                            "typeString": "type(address payable)"
                                          },
                                          "typeName": {
                                            "id": 20153,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2643:8:86",
                                            "stateMutability": "payable",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 20157,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2643:19:86",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      },
                                      "id": 20158,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "2663:4:86",
                                      "memberName": "call",
                                      "nodeType": "MemberAccess",
                                      "src": "2643:24:86",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                      }
                                    },
                                    "id": 20163,
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
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 20162,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "expression": {
                                            "id": 20159,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "2696:3:86",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 20160,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "2700:5:86",
                                          "memberName": "value",
                                          "nodeType": "MemberAccess",
                                          "src": "2696:9:86",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "id": 20161,
                                          "name": "baseAmount",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 20115,
                                          "src": "2708:10:86",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "2696:22:86",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "src": "2643:93:86",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                      "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                    }
                                  },
                                  "id": 20165,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2643:97:86",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                    "typeString": "tuple(bool,bytes memory)"
                                  }
                                },
                                "src": "2629:111:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 20167,
                              "nodeType": "ExpressionStatement",
                              "src": "2629:111:86"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 20187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2943:8:86",
                    "subExpression": {
                      "id": 20186,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20127,
                      "src": "2944:7:86",
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
                  "id": 20194,
                  "nodeType": "IfStatement",
                  "src": "2939:74:86",
                  "trueBody": {
                    "id": 20193,
                    "nodeType": "Block",
                    "src": "2953:60:86",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 20188,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7411,
                              "src": "2974:11:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 20190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2986:14:86",
                            "memberName": "TransferFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7366,
                            "src": "2974:26:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 20191,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2974:28:86",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 20192,
                        "nodeType": "RevertStatement",
                        "src": "2967:35:86"
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
                    "id": 20197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 20195,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20071,
                      "src": "3148:11:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 20196,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3163:1:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3148:16:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 20227,
                    "nodeType": "Block",
                    "src": "3309:176:86",
                    "statements": [
                      {
                        "assignments": [
                          20211
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 20211,
                            "mutability": "mutable",
                            "name": "newShares",
                            "nameLocation": "3331:9:86",
                            "nodeType": "VariableDeclaration",
                            "scope": 20227,
                            "src": "3323:17:86",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 20210,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3323:7:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 20217,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 20214,
                              "name": "totalShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20071,
                              "src": "3361:11:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 20215,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20085,
                              "src": "3374:6:86",
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
                              "id": 20212,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20073,
                              "src": "3343:6:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 20213,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3350:10:86",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13554,
                            "src": "3343:17:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 20216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3343:38:86",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3323:58:86"
                      },
                      {
                        "expression": {
                          "id": 20220,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 20218,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20071,
                            "src": "3395:11:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 20219,
                            "name": "newShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20211,
                            "src": "3410:9:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3395:24:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20221,
                        "nodeType": "ExpressionStatement",
                        "src": "3395:24:86"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 20222,
                              "name": "newShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20211,
                              "src": "3441:9:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 20223,
                                "name": "_pricePerVaultShare",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  20422
                                ],
                                "referencedDeclaration": 20422,
                                "src": "3452:19:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 20224,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3452:21:86",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 20225,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "3440:34:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "functionReturnParameters": 20083,
                        "id": 20226,
                        "nodeType": "Return",
                        "src": "3433:41:86"
                      }
                    ]
                  },
                  "id": 20228,
                  "nodeType": "IfStatement",
                  "src": "3144:341:86",
                  "trueBody": {
                    "id": 20209,
                    "nodeType": "Block",
                    "src": "3166:137:86",
                    "statements": [
                      {
                        "expression": {
                          "id": 20203,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 20198,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20071,
                            "src": "3180:11:86",
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
                                "id": 20201,
                                "name": "_initialVaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13026,
                                "src": "3209:23:86",
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
                                "id": 20199,
                                "name": "amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20073,
                                "src": "3194:6:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 20200,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3201:7:86",
                              "memberName": "divDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13590,
                              "src": "3194:14:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 20202,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3194:39:86",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3180:53:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20204,
                        "nodeType": "ExpressionStatement",
                        "src": "3180:53:86"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 20205,
                              "name": "totalShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20071,
                              "src": "3255:11:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 20206,
                              "name": "_initialVaultSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13026,
                              "src": "3268:23:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 20207,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "3254:38:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "functionReturnParameters": 20083,
                        "id": 20208,
                        "nodeType": "Return",
                        "src": "3247:45:86"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              8650
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "1760:8:86",
            "overrides": {
              "id": 20078,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1854:8:86"
            },
            "parameters": {
              "id": 20077,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20073,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1786:6:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20230,
                  "src": "1778:14:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20072,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1778:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20076,
                  "mutability": "mutable",
                  "name": "options",
                  "nameLocation": "1831:7:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20230,
                  "src": "1802:36:86",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 20075,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20074,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "1802:11:86",
                        "1814:7:86"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "1802:19:86"
                    },
                    "referencedDeclaration": 7271,
                    "src": "1802:19:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1768:76:86"
            },
            "returnParameters": {
              "id": 20083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20080,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20230,
                  "src": "1872:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20079,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1872:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20082,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20230,
                  "src": "1881:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1881:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1871:18:86"
            },
            "scope": 20446,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 20373,
            "nodeType": "FunctionDefinition",
            "src": "3497:1725:86",
            "nodes": [],
            "body": {
              "id": 20372,
              "nodeType": "Block",
              "src": "3670:1552:86",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    20244
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20244,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "3748:6:86",
                      "nodeType": "VariableDeclaration",
                      "scope": 20372,
                      "src": "3740:14:86",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 20243,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3740:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20245,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3740:14:86"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 20251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 20248,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13002,
                          "src": "3776:10:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6740",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6740",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 20247,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3768:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 20246,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3768:7:86",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 20249,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3768:19:86",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 20250,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 140741,
                      "src": "3791:3:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3768:26:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 20271,
                    "nodeType": "Block",
                    "src": "3857:69:86",
                    "statements": [
                      {
                        "expression": {
                          "id": 20269,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 20261,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20244,
                            "src": "3871:6:86",
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
                                "arguments": [
                                  {
                                    "id": 20266,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "3909:4:86",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 20265,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "3901:7:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 20264,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3901:7:86",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 20267,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3901:13:86",
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
                                "id": 20262,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13002,
                                "src": "3880:10:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6740",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 20263,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3891:9:86",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6701,
                              "src": "3880:20:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 20268,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3880:35:86",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3871:44:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20270,
                        "nodeType": "ExpressionStatement",
                        "src": "3871:44:86"
                      }
                    ]
                  },
                  "id": 20272,
                  "nodeType": "IfStatement",
                  "src": "3764:162:86",
                  "trueBody": {
                    "id": 20260,
                    "nodeType": "Block",
                    "src": "3796:55:86",
                    "statements": [
                      {
                        "expression": {
                          "id": 20258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 20252,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20244,
                            "src": "3810:6:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 20255,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "3827:4:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                ],
                                "id": 20254,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3819:7:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 20253,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3819:7:86",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 20256,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3819:13:86",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 20257,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3833:7:86",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "3819:21:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3810:30:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20259,
                        "nodeType": "ExpressionStatement",
                        "src": "3810:30:86"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    20274
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20274,
                      "mutability": "mutable",
                      "name": "baseAmount",
                      "nameLocation": "4150:10:86",
                      "nodeType": "VariableDeclaration",
                      "scope": 20372,
                      "src": "4142:18:86",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 20273,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4142:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20279,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 20277,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20234,
                        "src": "4178:10:86",
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
                        "id": 20275,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20232,
                        "src": "4163:6:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 20276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4170:7:86",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13572,
                      "src": "4163:14:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 20278,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4163:26:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4142:47:86"
                },
                {
                  "expression": {
                    "id": 20286,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20280,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20232,
                      "src": "4199:6:86",
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
                          "id": 20283,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20071,
                          "src": "4230:11:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20284,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20244,
                          "src": "4243:6:86",
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
                          "id": 20281,
                          "name": "baseAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20274,
                          "src": "4208:10:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20282,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4219:10:86",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13554,
                        "src": "4208:21:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 20285,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4208:42:86",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4199:51:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 20287,
                  "nodeType": "ExpressionStatement",
                  "src": "4199:51:86"
                },
                {
                  "expression": {
                    "id": 20295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20288,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20232,
                      "src": "4373:6:86",
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
                        "id": 20291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 20289,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20232,
                          "src": "4382:6:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 20290,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20071,
                          "src": "4391:11:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4382:20:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "id": 20293,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20232,
                        "src": "4419:6:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 20294,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "4382:43:86",
                      "trueExpression": {
                        "id": 20292,
                        "name": "totalShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20071,
                        "src": "4405:11:86",
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
                    "src": "4373:52:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 20296,
                  "nodeType": "ExpressionStatement",
                  "src": "4373:52:86"
                },
                {
                  "expression": {
                    "id": 20308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20297,
                      "name": "withdrawValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20241,
                      "src": "4476:13:86",
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
                        "id": 20300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 20298,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20071,
                          "src": "4492:11:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 20299,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4507:1:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4492:16:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 20306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4576:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 20307,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "4492:85:86",
                      "trueExpression": {
                        "arguments": [
                          {
                            "id": 20303,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20244,
                            "src": "4541:6:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 20304,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20071,
                            "src": "4549:11:86",
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
                            "id": 20301,
                            "name": "shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20232,
                            "src": "4523:6:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 20302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4530:10:86",
                          "memberName": "mulDivDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13554,
                          "src": "4523:17:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 20305,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4523:38:86",
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
                    "src": "4476:101:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 20309,
                  "nodeType": "ExpressionStatement",
                  "src": "4476:101:86"
                },
                {
                  "expression": {
                    "id": 20312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20310,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20071,
                      "src": "4666:11:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 20311,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20232,
                      "src": "4681:6:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4666:21:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 20313,
                  "nodeType": "ExpressionStatement",
                  "src": "4666:21:86"
                },
                {
                  "assignments": [
                    20315
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20315,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "4702:7:86",
                      "nodeType": "VariableDeclaration",
                      "scope": 20372,
                      "src": "4697:12:86",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 20314,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4697:4:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20316,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4697:12:86"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 20322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 20319,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13002,
                          "src": "4731:10:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6740",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6740",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 20318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "4723:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 20317,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4723:7:86",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 20320,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4723:19:86",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 20321,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 140741,
                      "src": "4746:3:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4723:26:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 20347,
                    "nodeType": "Block",
                    "src": "4885:90:86",
                    "statements": [
                      {
                        "expression": {
                          "id": 20345,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 20338,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20315,
                            "src": "4899:7:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 20341,
                                  "name": "options",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20237,
                                  "src": "4929:7:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                                    "typeString": "struct IHyperdrive.Options calldata"
                                  }
                                },
                                "id": 20342,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "4937:11:86",
                                "memberName": "destination",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7264,
                                "src": "4929:19:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 20343,
                                "name": "withdrawValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20241,
                                "src": "4950:13:86",
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
                                "id": 20339,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13002,
                                "src": "4909:10:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6740",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 20340,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4920:8:86",
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6710,
                              "src": "4909:19:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 20344,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4909:55:86",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "4899:65:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 20346,
                        "nodeType": "ExpressionStatement",
                        "src": "4899:65:86"
                      }
                    ]
                  },
                  "id": 20348,
                  "nodeType": "IfStatement",
                  "src": "4719:256:86",
                  "trueBody": {
                    "id": 20337,
                    "nodeType": "Block",
                    "src": "4751:128:86",
                    "statements": [
                      {
                        "expression": {
                          "id": 20335,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "components": [
                              {
                                "id": 20323,
                                "name": "success",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20315,
                                "src": "4766:7:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              null
                            ],
                            "id": 20324,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "4765:11:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bool_$__$",
                              "typeString": "tuple(bool,)"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "hexValue": "",
                                "id": 20333,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4865:2:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                },
                                "value": ""
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                    "typeString": "literal_string \"\""
                                  }
                                ],
                                "expression": {
                                  "arguments": [
                                    {
                                      "expression": {
                                        "id": 20327,
                                        "name": "options",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20237,
                                        "src": "4787:7:86",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                                          "typeString": "struct IHyperdrive.Options calldata"
                                        }
                                      },
                                      "id": 20328,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "4795:11:86",
                                      "memberName": "destination",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 7264,
                                      "src": "4787:19:86",
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
                                    "id": 20326,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "4779:8:86",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_payable_$",
                                      "typeString": "type(address payable)"
                                    },
                                    "typeName": {
                                      "id": 20325,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "4779:8:86",
                                      "stateMutability": "payable",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 20329,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4779:28:86",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "id": 20330,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "4808:4:86",
                                "memberName": "call",
                                "nodeType": "MemberAccess",
                                "src": "4779:33:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                  "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                }
                              },
                              "id": 20332,
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
                                  "id": 20331,
                                  "name": "withdrawValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20241,
                                  "src": "4837:13:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "src": "4779:85:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                              }
                            },
                            "id": 20334,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4779:89:86",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                              "typeString": "tuple(bool,bytes memory)"
                            }
                          },
                          "src": "4765:103:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 20336,
                        "nodeType": "ExpressionStatement",
                        "src": "4765:103:86"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 20350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "4988:8:86",
                    "subExpression": {
                      "id": 20349,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20315,
                      "src": "4989:7:86",
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
                  "id": 20357,
                  "nodeType": "IfStatement",
                  "src": "4984:74:86",
                  "trueBody": {
                    "id": 20356,
                    "nodeType": "Block",
                    "src": "4998:60:86",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 20351,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7411,
                              "src": "5019:11:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 20353,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5031:14:86",
                            "memberName": "TransferFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7366,
                            "src": "5019:26:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 20354,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5019:28:86",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 20355,
                        "nodeType": "RevertStatement",
                        "src": "5012:35:86"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 20368,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20358,
                      "name": "withdrawValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20241,
                      "src": "5067:13:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "expression": {
                          "id": 20359,
                          "name": "options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20237,
                          "src": "5083:7:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        },
                        "id": 20360,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5091:6:86",
                        "memberName": "asBase",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7267,
                        "src": "5083:14:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "arguments": [
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 20364,
                              "name": "_pricePerVaultShare",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                20422
                              ],
                              "referencedDeclaration": 20422,
                              "src": "5162:19:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 20365,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5162:21:86",
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
                          "expression": {
                            "id": 20362,
                            "name": "withdrawValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20241,
                            "src": "5140:13:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 20363,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5154:7:86",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13590,
                          "src": "5140:21:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 20366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5140:44:86",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 20367,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "5083:101:86",
                      "trueExpression": {
                        "id": 20361,
                        "name": "withdrawValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20241,
                        "src": "5112:13:86",
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
                    "src": "5067:117:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 20369,
                  "nodeType": "ExpressionStatement",
                  "src": "5067:117:86"
                },
                {
                  "expression": {
                    "id": 20370,
                    "name": "withdrawValue",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20241,
                    "src": "5202:13:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 20242,
                  "id": 20371,
                  "nodeType": "Return",
                  "src": "5195:20:86"
                }
              ]
            },
            "baseFunctions": [
              8663
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "3506:9:86",
            "overrides": {
              "id": 20239,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3629:8:86"
            },
            "parameters": {
              "id": 20238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20232,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3533:6:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20373,
                  "src": "3525:14:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20231,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3525:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20234,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "3557:10:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20373,
                  "src": "3549:18:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20233,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3549:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20237,
                  "mutability": "mutable",
                  "name": "options",
                  "nameLocation": "3606:7:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20373,
                  "src": "3577:36:86",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 20236,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20235,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "3577:11:86",
                        "3589:7:86"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "3577:19:86"
                    },
                    "referencedDeclaration": 7271,
                    "src": "3577:19:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3515:104:86"
            },
            "returnParameters": {
              "id": 20242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20241,
                  "mutability": "mutable",
                  "name": "withdrawValue",
                  "nameLocation": "3655:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20373,
                  "src": "3647:21:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20240,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3647:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3646:23:86"
            },
            "scope": 20446,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 20422,
            "nodeType": "FunctionDefinition",
            "src": "5228:570:86",
            "nodes": [],
            "body": {
              "id": 20421,
              "nodeType": "Block",
              "src": "5352:446:86",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    20380
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20380,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "5430:6:86",
                      "nodeType": "VariableDeclaration",
                      "scope": 20421,
                      "src": "5422:14:86",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 20379,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5422:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20381,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5422:14:86"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 20387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 20384,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13002,
                          "src": "5458:10:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6740",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6740",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 20383,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5450:7:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 20382,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5450:7:86",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 20385,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5450:19:86",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 20386,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 140741,
                      "src": "5473:3:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5450:26:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 20407,
                    "nodeType": "Block",
                    "src": "5539:69:86",
                    "statements": [
                      {
                        "expression": {
                          "id": 20405,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 20397,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20380,
                            "src": "5553:6:86",
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
                                "arguments": [
                                  {
                                    "id": 20402,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "5591:4:86",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 20401,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5583:7:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 20400,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5583:7:86",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 20403,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5583:13:86",
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
                                "id": 20398,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13002,
                                "src": "5562:10:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6740",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 20399,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5573:9:86",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6701,
                              "src": "5562:20:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 20404,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5562:35:86",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5553:44:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20406,
                        "nodeType": "ExpressionStatement",
                        "src": "5553:44:86"
                      }
                    ]
                  },
                  "id": 20408,
                  "nodeType": "IfStatement",
                  "src": "5446:162:86",
                  "trueBody": {
                    "id": 20396,
                    "nodeType": "Block",
                    "src": "5478:55:86",
                    "statements": [
                      {
                        "expression": {
                          "id": 20394,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 20388,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20380,
                            "src": "5492:6:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 20391,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "5509:4:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$20446",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                ],
                                "id": 20390,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5501:7:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 20389,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5501:7:86",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 20392,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5501:13:86",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 20393,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5515:7:86",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "5501:21:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5492:30:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20395,
                        "nodeType": "ExpressionStatement",
                        "src": "5492:30:86"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 20419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20409,
                      "name": "vaultSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20377,
                      "src": "5723:15:86",
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
                        "id": 20412,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 20410,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20071,
                          "src": "5741:11:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 20411,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5756:1:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "5741:16:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 20417,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5790:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 20418,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "5741:50:86",
                      "trueExpression": {
                        "arguments": [
                          {
                            "id": 20415,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20071,
                            "src": "5775:11:86",
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
                            "id": 20413,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20380,
                            "src": "5760:6:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 20414,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5767:7:86",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13590,
                          "src": "5760:14:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 20416,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5760:27:86",
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
                    "src": "5723:68:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 20420,
                  "nodeType": "ExpressionStatement",
                  "src": "5723:68:86"
                }
              ]
            },
            "baseFunctions": [
              8669
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerVaultShare",
            "nameLocation": "5237:19:86",
            "overrides": {
              "id": 20375,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5297:8:86"
            },
            "parameters": {
              "id": 20374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5256:2:86"
            },
            "returnParameters": {
              "id": 20378,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20377,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "5331:15:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20422,
                  "src": "5323:23:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20376,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5323:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5322:25:86"
            },
            "scope": 20446,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 20445,
            "nodeType": "FunctionDefinition",
            "src": "5983:174:86",
            "nodes": [],
            "body": {
              "id": 20444,
              "nodeType": "Block",
              "src": "6036:121:86",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 20436,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 20431,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 20428,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13002,
                            "src": "6058:10:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6740",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$6740",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 20427,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6050:7:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 20426,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6050:7:86",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 20429,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6050:19:86",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 20430,
                        "name": "ETH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 140741,
                        "src": "6073:3:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "6050:26:86",
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
                      "id": 20435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 20432,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "6080:3:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 20433,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6084:5:86",
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "6080:9:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 20434,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6092:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "6080:13:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6050:43:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 20443,
                  "nodeType": "IfStatement",
                  "src": "6046:105:86",
                  "trueBody": {
                    "id": 20442,
                    "nodeType": "Block",
                    "src": "6095:56:86",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 20437,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7411,
                              "src": "6116:11:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 20439,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6128:10:86",
                            "memberName": "NotPayable",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7343,
                            "src": "6116:22:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 20440,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6116:24:86",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 20441,
                        "nodeType": "RevertStatement",
                        "src": "6109:31:86"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              8637
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "5992:18:86",
            "overrides": {
              "id": 20424,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6027:8:86"
            },
            "parameters": {
              "id": 20423,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6010:2:86"
            },
            "returnParameters": {
              "id": 20425,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6036:0:86"
            },
            "scope": 20446,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 20065,
              "name": "HyperdriveBase",
              "nameLocations": [
                "1656:14:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9507,
              "src": "1656:14:86"
            },
            "id": 20066,
            "nodeType": "InheritanceSpecifier",
            "src": "1656:14:86"
          }
        ],
        "canonicalName": "MockHyperdriveBase",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          20446,
          9507,
          13187,
          67106,
          7814,
          8304
        ],
        "name": "MockHyperdriveBase",
        "nameLocation": "1634:18:86",
        "scope": 20867,
        "usedErrors": [
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
      },
      {
        "id": 20777,
        "nodeType": "ContractDefinition",
        "src": "6161:4370:86",
        "nodes": [
          {
            "id": 20453,
            "nodeType": "UsingForDirective",
            "src": "6225:33:86",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 20451,
              "name": "FixedPointMath",
              "nameLocations": [
                "6231:14:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14294,
              "src": "6231:14:86"
            },
            "typeName": {
              "id": 20452,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6250:7:86",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 20503,
            "nodeType": "FunctionDefinition",
            "src": "6264:406:86",
            "nodes": [],
            "body": {
              "id": 20502,
              "nodeType": "Block",
              "src": "6668:2:86",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 20459,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20456,
                    "src": "6361:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 20465,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20456,
                            "src": "6416:7:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 20464,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6390:25:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$20806_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)"
                          },
                          "typeName": {
                            "id": 20463,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 20462,
                              "name": "MockHyperdriveTarget0",
                              "nameLocations": [
                                "6394:21:86"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 20806,
                              "src": "6394:21:86"
                            },
                            "referencedDeclaration": 20806,
                            "src": "6394:21:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$20806",
                              "typeString": "contract MockHyperdriveTarget0"
                            }
                          }
                        },
                        "id": 20466,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6390:34:86",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$20806",
                          "typeString": "contract MockHyperdriveTarget0"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$20806",
                          "typeString": "contract MockHyperdriveTarget0"
                        }
                      ],
                      "id": 20461,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6382:7:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 20460,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6382:7:86",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 20467,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6382:43:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 20473,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20456,
                            "src": "6473:7:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 20472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6447:25:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget1_$20821_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget1)"
                          },
                          "typeName": {
                            "id": 20471,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 20470,
                              "name": "MockHyperdriveTarget1",
                              "nameLocations": [
                                "6451:21:86"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 20821,
                              "src": "6451:21:86"
                            },
                            "referencedDeclaration": 20821,
                            "src": "6451:21:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$20821",
                              "typeString": "contract MockHyperdriveTarget1"
                            }
                          }
                        },
                        "id": 20474,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6447:34:86",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$20821",
                          "typeString": "contract MockHyperdriveTarget1"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$20821",
                          "typeString": "contract MockHyperdriveTarget1"
                        }
                      ],
                      "id": 20469,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6439:7:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 20468,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6439:7:86",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 20475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6439:43:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 20481,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20456,
                            "src": "6530:7:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 20480,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6504:25:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget2_$20836_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget2)"
                          },
                          "typeName": {
                            "id": 20479,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 20478,
                              "name": "MockHyperdriveTarget2",
                              "nameLocations": [
                                "6508:21:86"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 20836,
                              "src": "6508:21:86"
                            },
                            "referencedDeclaration": 20836,
                            "src": "6508:21:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$20836",
                              "typeString": "contract MockHyperdriveTarget2"
                            }
                          }
                        },
                        "id": 20482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6504:34:86",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$20836",
                          "typeString": "contract MockHyperdriveTarget2"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$20836",
                          "typeString": "contract MockHyperdriveTarget2"
                        }
                      ],
                      "id": 20477,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6496:7:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 20476,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6496:7:86",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 20483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6496:43:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 20489,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20456,
                            "src": "6587:7:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 20488,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6561:25:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget3_$20851_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget3)"
                          },
                          "typeName": {
                            "id": 20487,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 20486,
                              "name": "MockHyperdriveTarget3",
                              "nameLocations": [
                                "6565:21:86"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 20851,
                              "src": "6565:21:86"
                            },
                            "referencedDeclaration": 20851,
                            "src": "6565:21:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$20851",
                              "typeString": "contract MockHyperdriveTarget3"
                            }
                          }
                        },
                        "id": 20490,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6561:34:86",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$20851",
                          "typeString": "contract MockHyperdriveTarget3"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$20851",
                          "typeString": "contract MockHyperdriveTarget3"
                        }
                      ],
                      "id": 20485,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6553:7:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 20484,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6553:7:86",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 20491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6553:43:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 20497,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20456,
                            "src": "6644:7:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 20496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6618:25:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget4_$20866_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget4)"
                          },
                          "typeName": {
                            "id": 20495,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 20494,
                              "name": "MockHyperdriveTarget4",
                              "nameLocations": [
                                "6622:21:86"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 20866,
                              "src": "6622:21:86"
                            },
                            "referencedDeclaration": 20866,
                            "src": "6622:21:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget4_$20866",
                              "typeString": "contract MockHyperdriveTarget4"
                            }
                          }
                        },
                        "id": 20498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6618:34:86",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget4_$20866",
                          "typeString": "contract MockHyperdriveTarget4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget4_$20866",
                          "typeString": "contract MockHyperdriveTarget4"
                        }
                      ],
                      "id": 20493,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6610:7:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 20492,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6610:7:86",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 20499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6610:43:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 20500,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 20458,
                  "name": "Hyperdrive",
                  "nameLocations": [
                    "6337:10:86"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2381,
                  "src": "6337:10:86"
                },
                "nodeType": "ModifierInvocation",
                "src": "6337:326:86"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 20457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20456,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "6315:7:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20503,
                  "src": "6285:37:86",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 20455,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20454,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "6285:11:86",
                        "6297:10:86"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "6285:22:86"
                    },
                    "referencedDeclaration": 7215,
                    "src": "6285:22:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6275:53:86"
            },
            "returnParameters": {
              "id": 20501,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6668:0:86"
            },
            "scope": 20777,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 20515,
            "nodeType": "FunctionDefinition",
            "src": "6695:138:86",
            "nodes": [],
            "body": {
              "id": 20514,
              "nodeType": "Block",
              "src": "6788:45:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 20512,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20510,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13036,
                      "src": "6798:12:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 20511,
                      "name": "_marketState_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20507,
                      "src": "6813:13:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$7116_memory_ptr",
                        "typeString": "struct IHyperdrive.MarketState memory"
                      }
                    },
                    "src": "6798:28:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                      "typeString": "struct IHyperdrive.MarketState storage ref"
                    }
                  },
                  "id": 20513,
                  "nodeType": "ExpressionStatement",
                  "src": "6798:28:86"
                }
              ]
            },
            "documentation": {
              "id": 20504,
              "nodeType": "StructuredDocumentation",
              "src": "6676:14:86",
              "text": "Mocks ///"
            },
            "functionSelector": "f45cf2e0",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setMarketState",
            "nameLocation": "6704:14:86",
            "parameters": {
              "id": 20508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20507,
                  "mutability": "mutable",
                  "name": "_marketState_",
                  "nameLocation": "6759:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20515,
                  "src": "6728:44:86",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MarketState_$7116_memory_ptr",
                    "typeString": "struct IHyperdrive.MarketState"
                  },
                  "typeName": {
                    "id": 20506,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20505,
                      "name": "IHyperdrive.MarketState",
                      "nameLocations": [
                        "6728:11:86",
                        "6740:11:86"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7116,
                      "src": "6728:23:86"
                    },
                    "referencedDeclaration": 7116,
                    "src": "6728:23:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$7116_storage_ptr",
                      "typeString": "struct IHyperdrive.MarketState"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6718:60:86"
            },
            "returnParameters": {
              "id": 20509,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6788:0:86"
            },
            "scope": 20777,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20525,
            "nodeType": "FunctionDefinition",
            "src": "6839:98:86",
            "nodes": [],
            "body": {
              "id": 20524,
              "nodeType": "Block",
              "src": "6894:43:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 20522,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 20520,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20071,
                      "src": "6904:11:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 20521,
                      "name": "_totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20517,
                      "src": "6918:12:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6904:26:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 20523,
                  "nodeType": "ExpressionStatement",
                  "src": "6904:26:86"
                }
              ]
            },
            "functionSelector": "a77384c1",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setTotalShares",
            "nameLocation": "6848:14:86",
            "parameters": {
              "id": 20518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20517,
                  "mutability": "mutable",
                  "name": "_totalShares",
                  "nameLocation": "6871:12:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20525,
                  "src": "6863:20:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20516,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6863:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6862:22:86"
            },
            "returnParameters": {
              "id": 20519,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6894:0:86"
            },
            "scope": 20777,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20593,
            "nodeType": "FunctionDefinition",
            "src": "7069:566:86",
            "nodes": [],
            "body": {
              "id": 20592,
              "nodeType": "Block",
              "src": "7120:515:86",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    null,
                    20533
                  ],
                  "declarations": [
                    null,
                    {
                      "constant": false,
                      "id": 20533,
                      "mutability": "mutable",
                      "name": "interest",
                      "nameLocation": "7140:8:86",
                      "nodeType": "VariableDeclaration",
                      "scope": 20592,
                      "src": "7133:15:86",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 20532,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7133:6:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 20546,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 20540,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "7236:4:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MockHyperdrive_$20777",
                                  "typeString": "contract MockHyperdrive"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MockHyperdrive_$20777",
                                  "typeString": "contract MockHyperdrive"
                                }
                              ],
                              "id": 20539,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "7228:7:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 20538,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "7228:7:86",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 20541,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7228:13:86",
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
                            "id": 20536,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13002,
                            "src": "7207:10:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6740",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 20537,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7218:9:86",
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6701,
                          "src": "7207:20:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 20542,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7207:35:86",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 20543,
                        "name": "apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20529,
                        "src": "7256:3:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 20544,
                        "name": "time",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20527,
                        "src": "7273:4:86",
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 20534,
                        "name": "HyperdriveUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145581,
                        "src": "7152:15:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveUtils_$145581_$",
                          "typeString": "type(library HyperdriveUtils)"
                        }
                      },
                      "id": 20535,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7168:25:86",
                      "memberName": "calculateCompoundInterest",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 143411,
                      "src": "7152:41:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$",
                        "typeString": "function (uint256,int256,uint256) pure returns (uint256,int256)"
                      }
                    },
                    "id": 20545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7152:135:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$",
                      "typeString": "tuple(uint256,int256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7130:157:86"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 20549,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 20547,
                      "name": "interest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20533,
                      "src": "7302:8:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 20548,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7313:1:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7302:12:86",
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
                      "id": 20570,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 20568,
                        "name": "interest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20533,
                        "src": "7470:8:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 20569,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7481:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "7470:12:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 20590,
                    "nodeType": "IfStatement",
                    "src": "7466:163:86",
                    "trueBody": {
                      "id": 20589,
                      "nodeType": "Block",
                      "src": "7484:145:86",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 20580,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "7563:4:86",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$20777",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$20777",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 20579,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "7555:7:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 20578,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "7555:7:86",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 20581,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7555:13:86",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 20585,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "UnaryOperation",
                                    "operator": "-",
                                    "prefix": true,
                                    "src": "7594:9:86",
                                    "subExpression": {
                                      "id": 20584,
                                      "name": "interest",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20533,
                                      "src": "7595:8:86",
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
                                  "id": 20583,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "7586:7:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 20582,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "7586:7:86",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 20586,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7586:18:86",
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
                                }
                              ],
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "id": 20574,
                                        "name": "_baseToken",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 13002,
                                        "src": "7520:10:86",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_IERC20_$6740",
                                          "typeString": "contract IERC20"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_IERC20_$6740",
                                          "typeString": "contract IERC20"
                                        }
                                      ],
                                      "id": 20573,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "7512:7:86",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 20572,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7512:7:86",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 20575,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "7512:19:86",
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
                                  "id": 20571,
                                  "name": "ERC20Mintable",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 19264,
                                  "src": "7498:13:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$19264_$",
                                    "typeString": "type(contract ERC20Mintable)"
                                  }
                                },
                                "id": 20576,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7498:34:86",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20Mintable_$19264",
                                  "typeString": "contract ERC20Mintable"
                                }
                              },
                              "id": 20577,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7533:4:86",
                              "memberName": "burn",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 19263,
                              "src": "7498:39:86",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                "typeString": "function (address,uint256) external"
                              }
                            },
                            "id": 20587,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7498:120:86",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 20588,
                          "nodeType": "ExpressionStatement",
                          "src": "7498:120:86"
                        }
                      ]
                    }
                  },
                  "id": 20591,
                  "nodeType": "IfStatement",
                  "src": "7298:331:86",
                  "trueBody": {
                    "id": 20567,
                    "nodeType": "Block",
                    "src": "7316:144:86",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 20559,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "7395:4:86",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$20777",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$20777",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 20558,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7387:7:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 20557,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "7387:7:86",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 20560,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7387:13:86",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 20563,
                                  "name": "interest",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20533,
                                  "src": "7426:8:86",
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
                                "id": 20562,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7418:7:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 20561,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "7418:7:86",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 20564,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7418:17:86",
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
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 20553,
                                      "name": "_baseToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 13002,
                                      "src": "7352:10:86",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$6740",
                                        "typeString": "contract IERC20"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC20_$6740",
                                        "typeString": "contract IERC20"
                                      }
                                    ],
                                    "id": 20552,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "7344:7:86",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 20551,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "7344:7:86",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 20554,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7344:19:86",
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
                                "id": 20550,
                                "name": "ERC20Mintable",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19264,
                                "src": "7330:13:86",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$19264_$",
                                  "typeString": "type(contract ERC20Mintable)"
                                }
                              },
                              "id": 20555,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7330:34:86",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20Mintable_$19264",
                                "typeString": "contract ERC20Mintable"
                              }
                            },
                            "id": 20556,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7365:4:86",
                            "memberName": "mint",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 19234,
                            "src": "7330:39:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256) external"
                            }
                          },
                          "id": 20565,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7330:119:86",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 20566,
                        "nodeType": "ExpressionStatement",
                        "src": "7330:119:86"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "68096239",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "accrue",
            "nameLocation": "7078:6:86",
            "parameters": {
              "id": 20530,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20527,
                  "mutability": "mutable",
                  "name": "time",
                  "nameLocation": "7093:4:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20593,
                  "src": "7085:12:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20526,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7085:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20529,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "7106:3:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20593,
                  "src": "7099:10:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 20528,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7099:6:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7084:26:86"
            },
            "returnParameters": {
              "id": 20531,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7120:0:86"
            },
            "scope": 20777,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20621,
            "nodeType": "FunctionDefinition",
            "src": "7641:411:86",
            "nodes": [],
            "body": {
              "id": 20620,
              "nodeType": "Block",
              "src": "7841:211:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 20614,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 20606,
                          "name": "curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20602,
                          "src": "7852:8:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20607,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20604,
                          "src": "7862:18:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 20608,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "7851:30:86",
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
                          "id": 20610,
                          "name": "_shareAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20595,
                          "src": "7923:12:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20611,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20597,
                          "src": "7949:10:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20612,
                          "name": "vaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20599,
                          "src": "7973:15:86",
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
                        "id": 20609,
                        "name": "_calculateFeesGivenShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9384,
                        "src": "7884:25:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256)"
                        }
                      },
                      "id": 20613,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7884:114:86",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "7851:147:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20615,
                  "nodeType": "ExpressionStatement",
                  "src": "7851:147:86"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 20616,
                        "name": "curveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20602,
                        "src": "8016:8:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 20617,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20604,
                        "src": "8026:18:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 20618,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8015:30:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 20605,
                  "id": 20619,
                  "nodeType": "Return",
                  "src": "8008:37:86"
                }
              ]
            },
            "functionSelector": "71f88b7c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenShares",
            "nameLocation": "7650:24:86",
            "parameters": {
              "id": 20600,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20595,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "7692:12:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20621,
                  "src": "7684:20:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7684:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20597,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "7722:10:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20621,
                  "src": "7714:18:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20596,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7714:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20599,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "7750:15:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20621,
                  "src": "7742:23:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20598,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7742:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7674:97:86"
            },
            "returnParameters": {
              "id": 20605,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20602,
                  "mutability": "mutable",
                  "name": "curveFee",
                  "nameLocation": "7803:8:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20621,
                  "src": "7795:16:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20601,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7795:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20604,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "7821:18:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20621,
                  "src": "7813:26:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20603,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7813:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7794:46:86"
            },
            "scope": 20777,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20660,
            "nodeType": "FunctionDefinition",
            "src": "8058:822:86",
            "nodes": [],
            "body": {
              "id": 20659,
              "nodeType": "Block",
              "src": "8439:441:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 20651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 20640,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20632,
                          "src": "8463:13:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20641,
                          "name": "totalFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20634,
                          "src": "8490:12:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20642,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20636,
                          "src": "8516:18:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20643,
                          "name": "totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20638,
                          "src": "8548:18:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 20644,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "8449:127:86",
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
                          "id": 20646,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20623,
                          "src": "8617:11:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20647,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20625,
                          "src": "8642:24:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20648,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20627,
                          "src": "8680:10:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 20649,
                          "name": "vaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20629,
                          "src": "8704:15:86",
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
                        "id": 20645,
                        "name": "_calculateFeesGivenBonds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9454,
                        "src": "8579:24:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 20650,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8579:150:86",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "8449:280:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20652,
                  "nodeType": "ExpressionStatement",
                  "src": "8449:280:86"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 20653,
                        "name": "totalCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20632,
                        "src": "8760:13:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 20654,
                        "name": "totalFlatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20634,
                        "src": "8787:12:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 20655,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20636,
                        "src": "8813:18:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 20656,
                        "name": "totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20638,
                        "src": "8845:18:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 20657,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8746:127:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 20639,
                  "id": 20658,
                  "nodeType": "Return",
                  "src": "8739:134:86"
                }
              ]
            },
            "functionSelector": "22d5506b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenBonds",
            "nameLocation": "8067:23:86",
            "parameters": {
              "id": 20630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20623,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "8108:11:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20660,
                  "src": "8100:19:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20622,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8100:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20625,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "8137:24:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20660,
                  "src": "8129:32:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20624,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8129:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20627,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "8179:10:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20660,
                  "src": "8171:18:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20626,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8171:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20629,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "8207:15:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20660,
                  "src": "8199:23:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20628,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8199:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8090:138:86"
            },
            "returnParameters": {
              "id": 20639,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20632,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "8297:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20660,
                  "src": "8289:21:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20631,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8289:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20634,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "8332:12:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20660,
                  "src": "8324:20:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20633,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8324:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20636,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "8366:18:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20660,
                  "src": "8358:26:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20635,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8358:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20638,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "8406:18:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20660,
                  "src": "8398:26:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20637,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8398:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8275:159:86"
            },
            "scope": 20777,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20681,
            "nodeType": "FunctionDefinition",
            "src": "8929:385:86",
            "nodes": [],
            "body": {
              "id": 20680,
              "nodeType": "Block",
              "src": "9240:74:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 20676,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20662,
                        "src": "9276:12:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 20677,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20664,
                        "src": "9290:16:86",
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
                      "id": 20675,
                      "name": "_calculateOpenLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11518,
                      "src": "9257:18:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256) view returns (uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 20678,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9257:50:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 20674,
                  "id": 20679,
                  "nodeType": "Return",
                  "src": "9250:57:86"
                }
              ]
            },
            "functionSelector": "9bd33498",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "8938:17:86",
            "parameters": {
              "id": 20665,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20662,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "8973:12:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20681,
                  "src": "8965:20:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20661,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8965:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20664,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "9003:16:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20681,
                  "src": "8995:24:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20663,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8995:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8955:70:86"
            },
            "returnParameters": {
              "id": 20674,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20667,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "9094:18:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20681,
                  "src": "9086:26:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20666,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9086:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20669,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "9134:17:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20681,
                  "src": "9126:25:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20668,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9126:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20671,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "9173:12:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20681,
                  "src": "9165:20:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20670,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9165:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20673,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "9207:18:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20681,
                  "src": "9199:26:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20672,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9199:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9072:163:86"
            },
            "scope": 20777,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20693,
            "nodeType": "FunctionDefinition",
            "src": "9320:177:86",
            "nodes": [],
            "body": {
              "id": 20692,
              "nodeType": "Block",
              "src": "9435:62:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 20689,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20683,
                        "src": "9476:13:86",
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
                      "id": 20688,
                      "name": "_calculateTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8725,
                      "src": "9452:23:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 20690,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9452:38:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 20687,
                  "id": 20691,
                  "nodeType": "Return",
                  "src": "9445:45:86"
                }
              ]
            },
            "functionSelector": "68c2ecb8",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "9329:22:86",
            "parameters": {
              "id": 20684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20683,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "9369:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20693,
                  "src": "9361:21:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20682,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9361:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9351:37:86"
            },
            "returnParameters": {
              "id": 20687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20686,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "9420:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20693,
                  "src": "9412:21:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20685,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9412:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9411:23:86"
            },
            "scope": 20777,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20705,
            "nodeType": "FunctionDefinition",
            "src": "9503:189:86",
            "nodes": [],
            "body": {
              "id": 20704,
              "nodeType": "Block",
              "src": "9624:68:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 20701,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20695,
                        "src": "9671:13:86",
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
                      "id": 20700,
                      "name": "_calculateTimeRemainingScaled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8761,
                      "src": "9641:29:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 20702,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9641:44:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 20699,
                  "id": 20703,
                  "nodeType": "Return",
                  "src": "9634:51:86"
                }
              ]
            },
            "functionSelector": "ca6d38f7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemainingScaled",
            "nameLocation": "9512:28:86",
            "parameters": {
              "id": 20696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20695,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "9558:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20705,
                  "src": "9550:21:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20694,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9550:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9540:37:86"
            },
            "returnParameters": {
              "id": 20699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20698,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "9609:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20705,
                  "src": "9601:21:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9601:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9600:23:86"
            },
            "scope": 20777,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20714,
            "nodeType": "FunctionDefinition",
            "src": "9698:118:86",
            "nodes": [],
            "body": {
              "id": 20713,
              "nodeType": "Block",
              "src": "9773:43:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 20710,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8779,
                      "src": "9790:17:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 20711,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9790:19:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 20709,
                  "id": 20712,
                  "nodeType": "Return",
                  "src": "9783:26:86"
                }
              ]
            },
            "functionSelector": "907c0f92",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "9707:16:86",
            "parameters": {
              "id": 20706,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9723:2:86"
            },
            "returnParameters": {
              "id": 20709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20708,
                  "mutability": "mutable",
                  "name": "checkpointTime",
                  "nameLocation": "9757:14:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20714,
                  "src": "9749:22:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20707,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9749:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9748:24:86"
            },
            "scope": 20777,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20724,
            "nodeType": "FunctionDefinition",
            "src": "9822:116:86",
            "nodes": [],
            "body": {
              "id": 20723,
              "nodeType": "Block",
              "src": "9884:54:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 20720,
                        "name": "_shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20716,
                        "src": "9911:19:86",
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
                      "id": 20719,
                      "name": "_updateLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10801,
                      "src": "9894:16:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                        "typeString": "function (int256)"
                      }
                    },
                    "id": 20721,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9894:37:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20722,
                  "nodeType": "ExpressionStatement",
                  "src": "9894:37:86"
                }
              ]
            },
            "functionSelector": "8120a3e2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateLiquidity",
            "nameLocation": "9831:15:86",
            "parameters": {
              "id": 20717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20716,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "9854:19:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20724,
                  "src": "9847:26:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 20715,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9847:6:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9846:28:86"
            },
            "returnParameters": {
              "id": 20718,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9884:0:86"
            },
            "scope": 20777,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20736,
            "nodeType": "FunctionDefinition",
            "src": "9944:177:86",
            "nodes": [],
            "body": {
              "id": 20735,
              "nodeType": "Block",
              "src": "10052:69:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 20732,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20726,
                        "src": "10097:16:86",
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
                      "id": 20731,
                      "name": "_calculateIdleShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9288,
                      "src": "10069:27:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 20733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10069:45:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 20730,
                  "id": 20734,
                  "nodeType": "Return",
                  "src": "10062:52:86"
                }
              ]
            },
            "functionSelector": "b1b4b170",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateIdleShareReserves",
            "nameLocation": "9953:26:86",
            "parameters": {
              "id": 20727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20726,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "9997:16:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20736,
                  "src": "9989:24:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9989:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9979:40:86"
            },
            "returnParameters": {
              "id": 20730,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20729,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20736,
                  "src": "10043:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20728,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10043:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10042:9:86"
            },
            "scope": 20777,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20744,
            "nodeType": "FunctionDefinition",
            "src": "10127:93:86",
            "nodes": [],
            "body": {
              "id": 20743,
              "nodeType": "Block",
              "src": "10185:35:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 20741,
                    "name": "totalShares",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20071,
                    "src": "10202:11:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 20740,
                  "id": 20742,
                  "nodeType": "Return",
                  "src": "10195:18:86"
                }
              ]
            },
            "functionSelector": "d5002f2e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalShares",
            "nameLocation": "10136:14:86",
            "parameters": {
              "id": 20737,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10150:2:86"
            },
            "returnParameters": {
              "id": 20740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20739,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20744,
                  "src": "10176:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20738,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10176:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10175:9:86"
            },
            "scope": 20777,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20764,
            "nodeType": "FunctionDefinition",
            "src": "10226:184:86",
            "nodes": [],
            "body": {
              "id": 20763,
              "nodeType": "Block",
              "src": "10301:109:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 20755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 20751,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13036,
                        "src": "10311:12:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 20753,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10324:13:86",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7082,
                      "src": "10311:26:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 20754,
                      "name": "shareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20746,
                      "src": "10340:13:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "10311:42:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 20756,
                  "nodeType": "ExpressionStatement",
                  "src": "10311:42:86"
                },
                {
                  "expression": {
                    "id": 20761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 20757,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13036,
                        "src": "10363:12:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 20759,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10376:12:86",
                      "memberName": "bondReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7085,
                      "src": "10363:25:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 20760,
                      "name": "bondReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20748,
                      "src": "10391:12:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "10363:40:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 20762,
                  "nodeType": "ExpressionStatement",
                  "src": "10363:40:86"
                }
              ]
            },
            "functionSelector": "702db0eb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setReserves",
            "nameLocation": "10235:11:86",
            "parameters": {
              "id": 20749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20746,
                  "mutability": "mutable",
                  "name": "shareReserves",
                  "nameLocation": "10255:13:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20764,
                  "src": "10247:21:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 20745,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "10247:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20748,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "10278:12:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20764,
                  "src": "10270:20:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 20747,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "10270:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10246:45:86"
            },
            "returnParameters": {
              "id": 20750,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10301:0:86"
            },
            "scope": 20777,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 20776,
            "nodeType": "FunctionDefinition",
            "src": "10416:113:86",
            "nodes": [],
            "body": {
              "id": 20775,
              "nodeType": "Block",
              "src": "10472:57:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 20773,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 20769,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13036,
                        "src": "10482:12:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 20771,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10495:12:86",
                      "memberName": "longExposure",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7088,
                      "src": "10482:25:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 20772,
                      "name": "longExposure",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20766,
                      "src": "10510:12:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "10482:40:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 20774,
                  "nodeType": "ExpressionStatement",
                  "src": "10482:40:86"
                }
              ]
            },
            "functionSelector": "b4f8da39",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setLongExposure",
            "nameLocation": "10425:15:86",
            "parameters": {
              "id": 20767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20766,
                  "mutability": "mutable",
                  "name": "longExposure",
                  "nameLocation": "10449:12:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20776,
                  "src": "10441:20:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 20765,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "10441:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10440:22:86"
            },
            "returnParameters": {
              "id": 20768,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10472:0:86"
            },
            "scope": 20777,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 20447,
              "name": "Hyperdrive",
              "nameLocations": [
                "6188:10:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2381,
              "src": "6188:10:86"
            },
            "id": 20448,
            "nodeType": "InheritanceSpecifier",
            "src": "6188:10:86"
          },
          {
            "baseName": {
              "id": 20449,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "6200:18:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 20446,
              "src": "6200:18:86"
            },
            "id": 20450,
            "nodeType": "InheritanceSpecifier",
            "src": "6200:18:86"
          }
        ],
        "canonicalName": "MockHyperdrive",
        "contractDependencies": [
          20806,
          20821,
          20836,
          20851,
          20866
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          20777,
          20446,
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
        "name": "MockHyperdrive",
        "nameLocation": "6170:14:86",
        "scope": 20867,
        "usedErrors": [
          7286,
          7298,
          7319,
          7328,
          7372,
          7378,
          7381,
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
      },
      {
        "id": 20806,
        "nodeType": "ContractDefinition",
        "src": "10533:327:86",
        "nodes": [
          {
            "id": 20791,
            "nodeType": "FunctionDefinition",
            "src": "10611:94:86",
            "nodes": [],
            "body": {
              "id": 20790,
              "nodeType": "Block",
              "src": "10703:2:86",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 20787,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20784,
                    "src": "10694:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 20788,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 20786,
                  "name": "HyperdriveTarget0",
                  "nameLocations": [
                    "10676:17:86"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3128,
                  "src": "10676:17:86"
                },
                "nodeType": "ModifierInvocation",
                "src": "10676:26:86"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 20785,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20784,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "10662:7:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20791,
                  "src": "10632:37:86",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 20783,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20782,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "10632:11:86",
                        "10644:10:86"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "10632:22:86"
                    },
                    "referencedDeclaration": 7215,
                    "src": "10632:22:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10622:53:86"
            },
            "returnParameters": {
              "id": 20789,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10703:0:86"
            },
            "scope": 20806,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 20805,
            "nodeType": "FunctionDefinition",
            "src": "10730:128:86",
            "nodes": [],
            "body": {
              "id": 20804,
              "nodeType": "Block",
              "src": "10798:60:86",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 20800,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13055,
                            "src": "10827:22:86",
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
                            "id": 20798,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "10816:3:86",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 20799,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "10820:6:86",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "10816:10:86",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 20801,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10816:34:86",
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
                      "id": 20797,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3127,
                      "src": "10808:7:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 20802,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10808:43:86",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20803,
                  "nodeType": "ExpressionStatement",
                  "src": "10808:43:86"
                }
              ]
            },
            "documentation": {
              "id": 20792,
              "nodeType": "StructuredDocumentation",
              "src": "10711:14:86",
              "text": "Mocks ///"
            },
            "functionSelector": "8e67f87e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getGovernanceFeesAccrued",
            "nameLocation": "10739:24:86",
            "parameters": {
              "id": 20793,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10763:2:86"
            },
            "returnParameters": {
              "id": 20796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20795,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 20805,
                  "src": "10789:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20794,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10789:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10788:9:86"
            },
            "scope": 20806,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 20778,
              "name": "HyperdriveTarget0",
              "nameLocations": [
                "10567:17:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3128,
              "src": "10567:17:86"
            },
            "id": 20779,
            "nodeType": "InheritanceSpecifier",
            "src": "10567:17:86"
          },
          {
            "baseName": {
              "id": 20780,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "10586:18:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 20446,
              "src": "10586:18:86"
            },
            "id": 20781,
            "nodeType": "InheritanceSpecifier",
            "src": "10586:18:86"
          }
        ],
        "canonicalName": "MockHyperdriveTarget0",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          20806,
          20446,
          3128,
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
          8071,
          8377
        ],
        "name": "MockHyperdriveTarget0",
        "nameLocation": "10542:21:86",
        "scope": 20867,
        "usedErrors": [
          7280,
          7286,
          7289,
          7298,
          7310,
          7313,
          7322,
          7325,
          7328,
          7337,
          7355,
          7360,
          7366,
          7369,
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
      },
      {
        "id": 20821,
        "nodeType": "ContractDefinition",
        "src": "10862:174:86",
        "nodes": [
          {
            "id": 20820,
            "nodeType": "FunctionDefinition",
            "src": "10940:94:86",
            "nodes": [],
            "body": {
              "id": 20819,
              "nodeType": "Block",
              "src": "11032:2:86",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 20816,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20813,
                    "src": "11023:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 20817,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 20815,
                  "name": "HyperdriveTarget1",
                  "nameLocations": [
                    "11005:17:86"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3261,
                  "src": "11005:17:86"
                },
                "nodeType": "ModifierInvocation",
                "src": "11005:26:86"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 20814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20813,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "10991:7:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20820,
                  "src": "10961:37:86",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 20812,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20811,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "10961:11:86",
                        "10973:10:86"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "10961:22:86"
                    },
                    "referencedDeclaration": 7215,
                    "src": "10961:22:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10951:53:86"
            },
            "returnParameters": {
              "id": 20818,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11032:0:86"
            },
            "scope": 20821,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 20807,
              "name": "HyperdriveTarget1",
              "nameLocations": [
                "10896:17:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3261,
              "src": "10896:17:86"
            },
            "id": 20808,
            "nodeType": "InheritanceSpecifier",
            "src": "10896:17:86"
          },
          {
            "baseName": {
              "id": 20809,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "10915:18:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 20446,
              "src": "10915:18:86"
            },
            "id": 20810,
            "nodeType": "InheritanceSpecifier",
            "src": "10915:18:86"
          }
        ],
        "canonicalName": "MockHyperdriveTarget1",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          20821,
          20446,
          3261,
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
          8304
        ],
        "name": "MockHyperdriveTarget1",
        "nameLocation": "10871:21:86",
        "scope": 20867,
        "usedErrors": [
          7283,
          7286,
          7292,
          7298,
          7301,
          7319,
          7325,
          7328,
          7334,
          7337,
          7340,
          7343,
          7346,
          7349,
          7352,
          7366,
          7375,
          7378,
          7381,
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
      },
      {
        "id": 20836,
        "nodeType": "ContractDefinition",
        "src": "11038:174:86",
        "nodes": [
          {
            "id": 20835,
            "nodeType": "FunctionDefinition",
            "src": "11116:94:86",
            "nodes": [],
            "body": {
              "id": 20834,
              "nodeType": "Block",
              "src": "11208:2:86",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 20831,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20828,
                    "src": "11199:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 20832,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 20830,
                  "name": "HyperdriveTarget2",
                  "nameLocations": [
                    "11181:17:86"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3361,
                  "src": "11181:17:86"
                },
                "nodeType": "ModifierInvocation",
                "src": "11181:26:86"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 20829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20828,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "11167:7:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20835,
                  "src": "11137:37:86",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 20827,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20826,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "11137:11:86",
                        "11149:10:86"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "11137:22:86"
                    },
                    "referencedDeclaration": 7215,
                    "src": "11137:22:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11127:53:86"
            },
            "returnParameters": {
              "id": 20833,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11208:0:86"
            },
            "scope": 20836,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 20822,
              "name": "HyperdriveTarget2",
              "nameLocations": [
                "11072:17:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3361,
              "src": "11072:17:86"
            },
            "id": 20823,
            "nodeType": "InheritanceSpecifier",
            "src": "11072:17:86"
          },
          {
            "baseName": {
              "id": 20824,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "11091:18:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 20446,
              "src": "11091:18:86"
            },
            "id": 20825,
            "nodeType": "InheritanceSpecifier",
            "src": "11091:18:86"
          }
        ],
        "canonicalName": "MockHyperdriveTarget2",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          20836,
          20446,
          3361,
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
          8304
        ],
        "name": "MockHyperdriveTarget2",
        "nameLocation": "11047:21:86",
        "scope": 20867,
        "usedErrors": [
          7286,
          7292,
          7298,
          7307,
          7319,
          7325,
          7328,
          7334,
          7337,
          7346,
          7366,
          7375,
          7378,
          7381,
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
      },
      {
        "id": 20851,
        "nodeType": "ContractDefinition",
        "src": "11214:174:86",
        "nodes": [
          {
            "id": 20850,
            "nodeType": "FunctionDefinition",
            "src": "11292:94:86",
            "nodes": [],
            "body": {
              "id": 20849,
              "nodeType": "Block",
              "src": "11384:2:86",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 20846,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20843,
                    "src": "11375:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 20847,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 20845,
                  "name": "HyperdriveTarget3",
                  "nameLocations": [
                    "11357:17:86"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3429,
                  "src": "11357:17:86"
                },
                "nodeType": "ModifierInvocation",
                "src": "11357:26:86"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 20844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20843,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "11343:7:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20850,
                  "src": "11313:37:86",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 20842,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20841,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "11313:11:86",
                        "11325:10:86"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "11313:22:86"
                    },
                    "referencedDeclaration": 7215,
                    "src": "11313:22:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11303:53:86"
            },
            "returnParameters": {
              "id": 20848,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11384:0:86"
            },
            "scope": 20851,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 20837,
              "name": "HyperdriveTarget3",
              "nameLocations": [
                "11248:17:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3429,
              "src": "11248:17:86"
            },
            "id": 20838,
            "nodeType": "InheritanceSpecifier",
            "src": "11248:17:86"
          },
          {
            "baseName": {
              "id": 20839,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "11267:18:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 20446,
              "src": "11267:18:86"
            },
            "id": 20840,
            "nodeType": "InheritanceSpecifier",
            "src": "11267:18:86"
          }
        ],
        "canonicalName": "MockHyperdriveTarget3",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          20851,
          20446,
          3429,
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
          8304
        ],
        "name": "MockHyperdriveTarget3",
        "nameLocation": "11223:21:86",
        "scope": 20867,
        "usedErrors": [
          7286,
          7298,
          7319,
          7325,
          7328,
          7331,
          7334,
          7337,
          7343,
          7346,
          7352,
          7366,
          7375,
          7378,
          7381,
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
      },
      {
        "id": 20866,
        "nodeType": "ContractDefinition",
        "src": "11390:174:86",
        "nodes": [
          {
            "id": 20865,
            "nodeType": "FunctionDefinition",
            "src": "11468:94:86",
            "nodes": [],
            "body": {
              "id": 20864,
              "nodeType": "Block",
              "src": "11560:2:86",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 20861,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20858,
                    "src": "11551:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 20862,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 20860,
                  "name": "HyperdriveTarget4",
                  "nameLocations": [
                    "11533:17:86"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3497,
                  "src": "11533:17:86"
                },
                "nodeType": "ModifierInvocation",
                "src": "11533:26:86"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 20859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20858,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "11519:7:86",
                  "nodeType": "VariableDeclaration",
                  "scope": 20865,
                  "src": "11489:37:86",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 20857,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 20856,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "11489:11:86",
                        "11501:10:86"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "11489:22:86"
                    },
                    "referencedDeclaration": 7215,
                    "src": "11489:22:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11479:53:86"
            },
            "returnParameters": {
              "id": 20863,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11560:0:86"
            },
            "scope": 20866,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 20852,
              "name": "HyperdriveTarget4",
              "nameLocations": [
                "11424:17:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3497,
              "src": "11424:17:86"
            },
            "id": 20853,
            "nodeType": "InheritanceSpecifier",
            "src": "11424:17:86"
          },
          {
            "baseName": {
              "id": 20854,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "11443:18:86"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 20446,
              "src": "11443:18:86"
            },
            "id": 20855,
            "nodeType": "InheritanceSpecifier",
            "src": "11443:18:86"
          }
        ],
        "canonicalName": "MockHyperdriveTarget4",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          20866,
          20446,
          3497,
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
          8304
        ],
        "name": "MockHyperdriveTarget4",
        "nameLocation": "11399:21:86",
        "scope": 20867,
        "usedErrors": [
          7286,
          7298,
          7319,
          7325,
          7328,
          7331,
          7334,
          7337,
          7343,
          7346,
          7352,
          7366,
          7375,
          7378,
          7381,
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
  "id": 86
} as const;
