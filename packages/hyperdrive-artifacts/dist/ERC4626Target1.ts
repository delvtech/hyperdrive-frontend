export const ERC4626Target1 = 
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
              "name": "precisionThreshold",
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
            }
          ],
          "internalType": "struct IHyperdrive.PoolConfig",
          "name": "_config",
          "type": "tuple"
        },
        {
          "internalType": "contract IERC4626",
          "name": "__pool",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "BelowMinimumContribution",
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
      "name": "InvalidFeeAmounts",
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
      "name": "Unauthorized",
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
          "name": "_withdrawalShares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutputPerShare",
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
          "name": "_lpShares",
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
          "internalType": "contract IERC20",
          "name": "_target",
          "type": "address"
        }
      ],
      "name": "sweep",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x61026060405260016000553480156200001757600080fd5b506040516200463d3803806200463d8339810160408190526200003a91620002c8565b81516001600160a01b031660809081528201518190839081906103e8111562000076576040516349db44f560e01b815260040160405180910390fd5b60808101516101805260a08101516101a05260c08101516101c052610100810151600003620000b857604051635428734d60e01b815260040160405180910390fd5b6101008101805160a0525160e08201511080620000ea57508061010001518160e00151620000e79190620003c8565b15155b15620001095760405163253fffcf60e11b815260040160405180910390fd5b60e08181015160c05261012082015190526060810151610160908152610140820151600880546001600160a01b0319166001600160a01b0392831617905590820151166101e05261018081015151670de0b6b3a764000010806200017d5750670de0b6b3a764000081610180015160200151115b80620001995750670de0b6b3a764000081610180015160400151115b15620001b8576040516322f72cc360e11b815260040160405180910390fd5b610180810180515161010052805160209081015161012052905160409081015161014052908201516001600160a01b039081166102005291015161022052919091166102405250620003eb915050565b6040516101a081016001600160401b03811182821017156200023a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200025857600080fd5b919050565b6000606082840312156200027057600080fd5b604051606081016001600160401b0381118282101715620002a157634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b600080828403610200811215620002de57600080fd5b6101e080821215620002ef57600080fd5b620002f962000208565b9150620003068562000240565b8252620003166020860162000240565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101406200037f81870162000240565b908301526101606200039386820162000240565b90830152610180620003a8878783016200025d565b8184015250819350620003bd81860162000240565b925050509250929050565b600082620003e657634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051614066620005d760003960008181611330015281816118a20152818161196c0152818161215201526121e8015260005050600050506000818161019b01526102ab015260005050600081816105f001528181610ae701528181610cce01528181610dff0152610ff9015260008181610877015281816108c2015281816109c4015281816124430152818161276d015281816127bc01528181612ccb01528181612e230152612e5f01526000818161093301528181610b4801528181611a3e01528181611a8b0152818161241d01528181612a4701526130d3015260008181612d6f0152818161317601526131ef015260008181611bf701528181612d4301526131c3015260008181611add015261314901526000818161097601528181610b8a01528181611a1c01528181611aac0152818161246901528181612a2501526130f40152600081816106b50152818161095501528181610b69015281816110b6015281816114470152818161156301528181611b7d01528181611dd001528181612ada01528181612fc5015261354d01526000818161122f015281816112e401526113af0152600061210e01526140666000f3fe60806040526004361061007b5760003560e01c80639aa684621161004e5780639aa684621461011d578063cbc1343414610130578063ded0623114610150578063ed64bab21461017057600080fd5b806301681a6214610080578063074a6de9146100a257806329b23fc1146100dc57806377d05ff41461010a575b600080fd5b34801561008c57600080fd5b506100a061009b366004613cef565b610190565b005b3480156100ae57600080fd5b506100c26100bd366004613d1e565b6102d4565b604080519283526020830191909152015b60405180910390f35b3480156100e857600080fd5b506100fc6100f7366004613d6e565b6102ee565b6040519081526020016100d3565b6100fc610118366004613d1e565b610305565b6100fc61012b366004613d6e565b61031c565b34801561013c57600080fd5b506100c261014b366004613d1e565b61032a565b34801561015c57600080fd5b506100fc61016b366004613d6e565b610338565b34801561017c57600080fd5b506100a061018b366004613dc8565b610346565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906101d95750336000908152600a602052604090205460ff16155b156101f6576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03811660009081526010602052604090205460ff1661022f5760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610276573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029a9190613de1565b90506102d06001600160a01b0383167f000000000000000000000000000000000000000000000000000000000000000083610352565b5050565b6000806102e28585856103d5565b91509150935093915050565b60006102fc858585856105c6565b95945050505050565b600061031284848461080c565b90505b9392505050565b60006102fc85858585610a8c565b6000806102e2858585610dd3565b60006102fc85858585610fcf565b61034f816111fe565b50565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806103cf5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b60448201526064015b60405180910390fd5b50505050565b6000806000546001146103fa5760405162461bcd60e51b81526004016103c690613dfa565b60026000908155610409611310565b905061041c6104166113a8565b826113de565b50610426816116cd565b6006548692506001600160801b03168083111561044a57806001600160801b031692505b82600003610460576000809350935050506105b7565b61046f600360f81b3385611790565b6006546001600160801b03600160801b90910481169060009061049790869084908616611839565b90506104a285611857565b6104ac9084613e34565b600680546001600160801b0319166001600160801b03929092169190911790556104d581611857565b600680546010906104f7908490600160801b90046001600160801b0316613e34565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506105258188611881565b955085610532898761199a565b11156105515760405163c972651760e01b815260040160405180910390fd5b61055e6020880188613cef565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f75486610593848861199a565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b600080546001146105e95760405162461bcd60e51b81526004016103c690613dfa565b60026000557f000000000000000000000000000000000000000000000000000000000000000084101561062f5760405163211ddda360e11b815260040160405180910390fd5b6000610639611310565b905061064586826113de565b5061065b6106546002886119af565b3387611790565b60008060008060008061066f8b888e6119e4565b949a509298509096509450925090508a8c884282111561074057836009600082825461069b9190613e5b565b909155506106ae9050838a898886611c4f565b60006106da7f000000000000000000000000000000000000000000000000000000000000000084613e6e565b600081815260076020526040812054919250600160801b909104600f0b9061070d9086908a908e908d9089908990611dc9565b60008281526007602052604090205461073490600f83810b91600160801b9004900b611f72565b61073d836116cd565b50505b600061074c898e611881565b90508c600061075c838e84612099565b90508f81101561077f5760405163c972651760e01b815260040160405180910390fd5b61078a6002866119af565b8f600001602081019061079d9190613cef565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b6000805460011461082f5760405162461bcd60e51b81526004016103c690613dfa565b600260005561083c6120c8565b60055460ff161561086057604051637983c05160e01b815260040160405180910390fd5b60008061086d86856120e9565b909250905061089d7f00000000000000000000000000000000000000000000000000000000000000006002613e81565b8210156108bd57604051632afb507160e21b815260040160405180910390fd5b6108e87f00000000000000000000000000000000000000000000000000000000000000006002613e81565b6108f29083613e6e565b6005805460ff19166001179055925061090a82611857565b600180546001600160801b0319166001600160801b039290921691909117905561099f61099a837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612222565b611857565b600180546001600160801b03928316600160801b0292169190911790556109e86000807f0000000000000000000000000000000000000000000000000000000000000000612284565b610a0060006109fa6020870187613cef565b85612284565b610a0b6104166113a8565b506000610a19878387612099565b9050610a286020860186613cef565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b60008054600114610aaf5760405162461bcd60e51b81526004016103c690613dfa565b6002600055600554610100900460ff1615610add576040516313d0ff5960e31b815260040160405180910390fd5b610ae56120c8565b7f0000000000000000000000000000000000000000000000000000000000000000851015610b265760405163211ddda360e11b815260040160405180910390fd5b6000610bae610b33612324565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612345565b905084811080610bbd57508381115b15610bdb57604051633b61151160e11b815260040160405180910390fd5b600080610be888866120e9565b91509150610bf76104166113a8565b50600654600360f81b6000908152600c602052600080516020614011833981519152549091610c31916001600160801b0390911690613e6e565b6000808052600c602052600080516020613ff18339815191525491925090610c5a908390613e5b565b90506000806000610c6a86612380565b9050610c75816124e6565b9150610c8087612754565b6001546001600160801b038082168352600254600f0b6020840152600160801b909104166040820152610cb2816124e6565b9250610cca8483610cc38187613e6e565b9190611839565b98507f0000000000000000000000000000000000000000000000000000000000000000891015610d0d5760405163211ddda360e11b815260040160405180910390fd5b50610d266000610d2060208c018c613cef565b8a612284565b610d2f856116cd565b60008315610d4657610d4182856128d6565b610d49565b60005b90506000610d588e888d612099565b9050610d6760208c018c613cef565b604080518c815260208101849052908101899052606081018490526001600160a01b0391909116907fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396099060800160405180910390a25050600160005550959a9950505050505050505050565b600080600054600114610df85760405162461bcd60e51b81526004016103c690613dfa565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015610e3e5760405163211ddda360e11b815260040160405180910390fd5b6000610e48611310565b9050610e556104166113a8565b50610e5f816116cd565b600c602052600080516020613ff183398151915254600654600360f81b6000908152600080516020614011833981519152549091610ea8916001600160801b0390911690613e6e565b90506000610eb68284613e5b565b9050610ec46000338b611790565b600080610ed48b878588886128eb565b9098509092509050610ef7600360f81b610ef160208c018c613cef565b89612284565b610f01828a611881565b97506000610f1089888c612099565b9050888b1115610f335760405163c972651760e01b815260040160405180910390fd5b60008415610f4a57610f4583866128d6565b610f4d565b60005b9050610f5c60208c018c613cef565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b60008054600114610ff25760405162461bcd60e51b81526004016103c690613dfa565b60026000557f00000000000000000000000000000000000000000000000000000000000000008410156110385760405163211ddda360e11b815260040160405180910390fd5b6000611042611310565b905061104e86826113de565b5061105d6106546001886119af565b6000806000806000806110718b888e6129ed565b95509550955095509550955060008c90508c42101561113a57816009600082825461109c9190613e5b565b909155506110af90508c88878685612b5f565b60006110db7f000000000000000000000000000000000000000000000000000000000000000083613e6e565b600081815260076020526040902054909150600160801b9004600f0b6111078e878b8a878f6001611dc9565b60008281526007602052604090205461112e90600f83810b91600160801b9004900b611f72565b6111378a6116cd565b50505b6000611146878c611881565b90506000611155828b8e612099565b9050808d11156111785760405163c972651760e01b815260040160405180910390fd5b8d6111846001856119af565b61119160208f018f613cef565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b6000818152600760205260409020546001600160801b03161561121e5750565b60006112286113a8565b90506112547f000000000000000000000000000000000000000000000000000000000000000083613eae565b15158061126057508181105b1561127e5760405163ecd29e8160e01b815260040160405180910390fd5b80820361129b5761129681611291611310565b6113de565b505050565b815b6000818152600760205260409020546001600160801b03168282036112c7576112c4611310565b90505b80156112de576112d784826113de565b5050505050565b506113097f000000000000000000000000000000000000000000000000000000000000000082613e5b565b905061129d565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa15801561137f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a39190613de1565b905090565b60006113d47f000000000000000000000000000000000000000000000000000000000000000042613eae565b6113a39042613e6e565b600082815260076020526040812080546001600160801b031615158061140357504284115b1561141957546001600160801b031690506116c7565b61142283611857565b81546001600160801b0319166001600160801b0391909116178155600060078161146c7f000000000000000000000000000000000000000000000000000000000000000088613e6e565b815260208101919091526040016000908120546001600160801b031691506114956002876119af565b6000818152600c602052604081205491925081156114ee576000806114bd848a886000612d2c565b9150915080600960008282546114d39190613e5b565b909155506114e7905084600084808e611c4f565b6001925050505b60006114fb60018a6119af565b6000818152600c6020526040902054909150801561155657600080611523838c8a6001612d2c565b9150915080600960008282546115399190613e5b565b909155508c905061154e846000858085612b5f565b600195505050505b82156115d45760006115887f00000000000000000000000000000000000000000000000000000000000000008c613e6e565b600081815260076020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926115c8928492919004900b611f72565b6115d18b6116cd565b50505b6000808a116115e45760006115ff565b6115ff8a6115f96115f48d612380565b6124e6565b9061199a565b600654600c602052600080516020614011833981519152546000808052600080516020613ff183398151915254939450926001600160801b03909216916116469190613e5b565b6116509190613e6e565b9050600081156116695761166483836128d6565b61166c565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a28b9a50505050505050505050505b92915050565b600c602052600080516020613ff183398151915254600654600360f81b6000908152600080516020614011833981519152549091611716916001600160801b0390911690613e6e565b905060006117248284613e5b565b905060006117346115f486612380565b90506000611743858385611839565b905060008061175188612dfa565b905082811115611768576117658382613e6e565b91505b6000821180611775575083155b156117865761178682858789612ea6565b5050505050505050565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906117c2908490613e6e565b90915550506000838152600c6020526040812080548392906117e5908490613e6e565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600082600019048411830215820261185057600080fd5b5091020490565b6000600160801b821061187d57604051630f0af95160e11b815260040160405180910390fd5b5090565b60006118936040830160208401613ec2565b15611952576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba087652846118d56020860186613cef565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015611927573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061194b9190613de1565b90506116c7565b6119936119626020840184613cef565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169085610352565b5090919050565b60006103158383670de0b6b3a7640000611839565b60006001600160f81b038211156119d95760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008060008060008060006119f888612f98565b9050611a62611a05612324565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000612fe9565b909850955093506000611ad0611a76612324565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000613059565b9050611b068589611b01847f000000000000000000000000000000000000000000000000000000000000000061306a565b61309a565b15611b245760405163512095c760e01b815260040160405180910390fd5b8a8a60008080611b3685888887613123565b9b509295509093509150611b4c90508184613e6e565b611b56908b613e5b565b9950611b628284613e5b565b611b6c908c613e5b565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a611ba79190613e6e565b815260208101919091526040016000908120546001600160801b03169150428911611be9576000898152600760205260409020546001600160801b0316611beb565b895b9050611c1b8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061322d565b9650611c278387613e6e565b9550611c39878787868686600061327f565b9b9f939e50919c509a5098975095505050505050565b600354600160801b90046001600160801b0316611c9861099a82611c7b85670de0b6b3a7640000613e81565b600454600160801b90046001600160801b031691908a60006132fa565b600480546001600160801b03928316600160801b029216919091179055611cbe86611857565b611cc89082613e34565b600380546001600160801b03928316600160801b029216919091179055611cee84611857565b60018054600090611d099084906001600160801b0316613ee4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d3683613374565b60028054600090611d4b908490600f0b613f04565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d7b85611857565b60018054601090611d9d908490600160801b90046001600160801b0316613e34565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611df57f000000000000000000000000000000000000000000000000000000000000000085613e6e565b90506000600c6000611e086001886119af565b81526020019081526020016000205490506000600c6000611e2a6002896119af565b8152602001908152602001600020549050816000148015611e49575080155b15611e6e57600083815260076020526040902080546001600160801b03169055611f66565b6000611eb28b611e7e8c8961199a565b611e89906002613e81565b8b611e948c8b61199a565b611e9e9190613e5b565b611ea89190613e6e565b61099a9190613e5b565b90508415611f115760008481526007602052604090208054829190601090611ee5908490600160801b9004600f0b613f31565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f64565b60008481526007602052604090208054829190601090611f3c908490600160801b9004600f0b613f04565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015611f82575060008212155b15612015576000611f9382826133b2565b611f9d9084613f5e565b600254909150611fca90611fc5908390600160801b90046001600160801b0316600f0b6133c1565b613374565b60028054601090611fec908490600160801b90046001600160801b0316613e34565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156102d0576000821261208b5761202e82613374565b61203782613374565b6120419190613f31565b60028054601090612063908490600160801b90046001600160801b0316613ee4565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b612041611fc58260006133b2565b60006120ab6040830160208401613ec2565b156120b7575082610315565b6120c1848461199a565b9050610315565b34156120e757604051631574f9f360e01b815260040160405180910390fd5b565b6000806120fc6040840160208501613ec2565b156121d8576121366001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330876133d0565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156121a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c79190613de1565b91506121d1611310565b905061221b565b8391506122106001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330856133d0565b612218611310565b90505b9250929050565b600080612233846301e133806128d6565b905061227961226f61224d670de0b6b3a764000086613453565b612257888561199a565b61226990670de0b6b3a7640000613e5b565b90613468565b6115f9888a61199a565b979650505050505050565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906122b6908490613e5b565b90915550506000838152600c6020526040812080548392906122d9908490613e5b565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910161182c565b6001546002546000916113a3916001600160801b0390911690600f0b6134bf565b60008061235487878786613059565b905061227961236882866301e133806134dc565b61237a83670de0b6b3a7640000613e6e565b906128d6565b6123dd60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e082015260045490916101008301916124ac9116613502565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926124de92900416613502565b905292915050565b60008061250683610140015184610120015161199a90919063ffffffff16565b61010084015160e085015161251a9161199a565b6125249190613f5e565b9050600061253a846000015185602001516134bf565b905060008213156125da57600061257c8286604001518760a001518860c00151670de0b6b3a764000061256d9190613e6e565b89606001518a60800151613578565b90506125888184613612565b905080156125d4576125c1828660400151838860c00151670de0b6b3a76400006125b29190613e6e565b89606001518a60800151613621565b855186906125d0908390613e6e565b9052505b50612696565b6000821215612696576125ec82613f7e565b915060006126208286604001518760c00151670de0b6b3a76400006126119190613e6e565b88606001518960800151613655565b905061262c8184613612565b9050801561267857612665828660400151838860c00151670de0b6b3a76400006126569190613e6e565b89606001518a608001516136eb565b85518690612674908390613e5b565b9052505b6126828184613e6e565b85518690612691908390613e5b565b905250505b60006126c5856101000151670de0b6b3a76400006126b49190613e6e565b606087015160e08801519190611839565b6126f3866101400151670de0b6b3a76400006126e19190613e6e565b60608801516101208901519190611839565b6126fd9190613f5e565b905060008186600001516127119190613f9a565b90508560a001518112156127385760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015161274a9082613e6e565b9695505050505050565b8060000361275f5750565b6001546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156127ac5760405163585fe6df60e11b815260040160405180910390fd5b60006127b88383613f9a565b90507f00000000000000000000000000000000000000000000000000000000000000008112156127fb5760405163585fe6df60e11b815260040160405180910390fd5b61280481611857565b600180546001600160801b0319166001600160801b0392909216919091179055600254600090600f0b8181126128465761283f838286611839565b9150612866565b61285a61285282613f7e565b849086611839565b61286390613f7e565b91505b61286f82613374565b600280546001600160801b0319166001600160801b039283161790556001546128b29161099a91600160801b9004166128a887856134bf565b610cc387876134bf565b600180546001600160801b03928316600160801b0292169190911790555050505050565b600061031583670de0b6b3a764000084611839565b6000806000806128fa88612380565b90506000612907826124e6565b9050612919612914611310565b612dfa565b9450612926858b89611839565b945061293961293486613f7e565b612754565b6001546001600160801b038082168452600254600f0b6020850152600160801b909104166040830152600061296d836124e6565b9050600061297c8a8385611839565b90506129888c8b613f5e565b6129929082613f5e565b905060008112156129db5760006129b36129ab83613f7e565b85908d611839565b90506129bf8189613e6e565b97506129ca81612754565b6129d5818a8e613780565b60009150505b94509092505050955095509592505050565b6000806000806000806000612a0188612f98565b9050612a6b612a0e612324565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006137c5565b9098509650935060008080612a81611a76612324565b9050612a8f8d85838f613123565b9850929550909350612aa5915084905088613e6e565b9650612ab18284613e5b565b612abb908a613e6e565b9850612ac7858a613e5b565b975050505050612b4b85858584600760007f00000000000000000000000000000000000000000000000000000000000000008e612b049190613e6e565b81526020810191909152604001600020546001600160801b0316428d11612b425760008d8152600760205260409020546001600160801b0316612b44565b8d5b600161327f565b999d939c50919a5098509695509350505050565b6003546001600160801b0316612b9a61099a82612b8485670de0b6b3a7640000613e81565b6004546001600160801b031691908a60006132fa565b600480546001600160801b0319166001600160801b0392909216919091179055612bc386611857565b612bcd9082613e34565b600380546001600160801b0319166001600160801b039290921691909117905550612bf783611857565b60018054600090612c129084906001600160801b0316613e34565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612c3f82613374565b60028054600090612c54908490600f0b613f31565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612c8484611857565b60018054601090612ca6908490600160801b90046001600160801b0316613ee4565b82546101009290920a6001600160801b038181021990931691831602179091556001547f0000000000000000000000000000000000000000000000000000000000000000911610905080612d0e5750600254600154600f9190910b6001600160801b03909116125b156112d75760405163585fe6df60e11b815260040160405180910390fd5b600080612d3986866128d6565b91506000612d67837f000000000000000000000000000000000000000000000000000000000000000061199a565b9050612d93817f000000000000000000000000000000000000000000000000000000000000000061199a565b91508315612db657612da58282613e6e565b612daf9084613e6e565b9250612dcd565b612dc08282613e6e565b612dca9084613e5b565b92505b84861015612df057612de0838787611839565b9250612ded828787611839565b91505b5094509492505050565b6002546000908190612e1c90600160801b90046001600160801b0316846128d6565b9050612e487f000000000000000000000000000000000000000000000000000000000000000082613e5b565b6001546001600160801b03161115612ea0576001547f000000000000000000000000000000000000000000000000000000000000000090612e939083906001600160801b0316613e6e565b612e9d9190613e6e565b91505b50919050565b6000808411612eb55782612ec0565b612ec0838686611839565b905080600003612ed057506103cf565b808583821115612eeb57839150612ee8878385611839565b90505b612ef482611857565b60068054600090612f0f9084906001600160801b0316613ee4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612f3c81611857565b60068054601090612f5e908490600160801b90046001600160801b0316613ee4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612f8f8161293490613f7e565b50505050505050565b600080612fa36113a8565b9050808311612fb3576000612fbd565b612fbd8184613e6e565b9150612e9d827f00000000000000000000000000000000000000000000000000000000000000006128d6565b6000808061300a61300288670de0b6b3a7640000613e6e565b899087611839565b9050613016888861199a565b9150811561304c5761303d8a8a846130368a670de0b6b3a7640000613e6e565b89896136eb565b92506130498382613e5b565b90505b9750975097945050505050565b60006102fc82612269858888611839565b600061308861308184670de0b6b3a7640000613e6e565b8390613811565b61031590670de0b6b3a7640000613e6e565b600080613118856130a9612324565b6130b39190613e5b565b6001546130d1908790600160801b90046001600160801b0316613e6e565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000613059565b909210949350505050565b60008080808061316e8887610cc38c6115f96131478d670de0b6b3a7640000613e6e565b7f00000000000000000000000000000000000000000000000000000000000000009061199a565b945061319a857f000000000000000000000000000000000000000000000000000000000000000061199a565b925060006131bb6131b38a670de0b6b3a7640000613e6e565b8b9089611839565b90506131e7817f000000000000000000000000000000000000000000000000000000000000000061199a565b9450613213857f000000000000000000000000000000000000000000000000000000000000000061199a565b925061321f8385613e5b565b915050945094509450945094565b6000806132468561323e8887613811565b8a9190611839565b9050613253888486611839565b61325d9082613e5b565b905086811115613274576132718782613e6e565b91505b509695505050505050565b600080600080600080888810156132dc5786156132a4576132a18d898b611839565b9c505b6132af8c898b611839565b9b506132bb8b8d613f5e565b90506132c88b898b611839565b9a506132d58a898b611839565b99506132e9565b6132e68b8d613f5e565b90505b9b9c9a9b999a975050505050505050565b6000811561333a5761333361330f8487613e5b565b613319858761199a565b613323888a61199a565b61332d9190613e5b565b90613453565b90506102fc565b828503613349575060006102fc565b61274a6133568487613e6e565b613360858761199a565b61336a888a61199a565b61332d9190613e6e565b600060016001607f1b03198212801590613395575060016001607f1b038213155b61187d5760405163a5353be560e01b815260040160405180910390fd5b60008183136119935781610315565b6000818313612ea05782610315565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806112d75760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b60448201526064016103c6565b600061031583670de0b6b3a7640000846134dc565b6000816000036134815750670de0b6b3a76400006116c7565b82600003613491575060006116c7565b81600061349d85613826565b90508181026134b4670de0b6b3a764000082613fc2565b905061274a81613a39565b6000806134cc8385613f5e565b9050600081121561031557600080fd5b60008260001904841183021582026134f357600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006135166113a8565b6135209190613e81565b905080831161353057600061353a565b61353a8184613e6e565b9150612e9d613571670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613e81565b83906128d6565b6000806135888888878787613bc4565b905060006135a561359d87612269878b613811565b8690866134dc565b6135af9083613e6e565b9050670de0b6b3a764000081106135e3576135dc6135d5670de0b6b3a7640000886128d6565b8290613468565b90506135fb565b6135f86135d5670de0b6b3a764000088613453565b90505b6136058882613e6e565b9998505050505050505050565b6000818311612ea05782610315565b600080613632888888888888613bf3565b90925090508061327457604051637ac17d2560e01b815260040160405180910390fd5b6000806136658787878787613cb5565b90506000613690670de0b6b3a764000061367f87876128d6565b6136899190613e5b565b8390613453565b9050670de0b6b3a764000081106136bd576136b66135d5670de0b6b3a764000088613453565b90506136d5565b6136d26135d5670de0b6b3a7640000886128d6565b90505b6136df8188613e6e565b98975050505050505050565b6000806136fb8888878787613cb5565b905061370b85612269888a613e6e565b96506000613725848661371e8b86613e6e565b91906134dc565b9050670de0b6b3a764000081106137525761374b6135d5670de0b6b3a764000088613453565b905061376a565b6137676135d5670de0b6b3a7640000886128d6565b90505b6137748185613453565b90506136058982613e6e565b600061378e6115f483612380565b6000808052600c602052600080516020613ff183398151915254919250906137b7908590613e5b565b90506112d785838387612ea6565b600080806137de61300288670de0b6b3a7640000613e6e565b9050861561304c576137f0888861199a565b915061303d8a8a8461380a8a670de0b6b3a7640000613e6e565b8989613621565b60006103158383670de0b6b3a76400006134dc565b600080821361384857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213613a5457506000919050565b680755bf798b4a1bf1e58212613a7d5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000613bd08585613468565b613be9613be186612269868b61199a565b859085611839565b61274a9190613e5b565b6000806000613c058989888888613cb5565b9050613c1586612269898b613e5b565b975087811015613c2c576000809250925050613caa565b6000613c3d858761371e8c86613e6e565b9050670de0b6b3a76400008110613c6a57613c636135d5670de0b6b3a764000089613453565b9050613c82565b613c7f6135d5670de0b6b3a7640000896128d6565b90505b613c8c8186613453565b9050808a1115613ca357613ca0818b613e6e565b93505b6001925050505b965096945050505050565b6000613cc18585613468565b613be9613cd286612269868b613811565b8590856134dc565b6001600160a01b038116811461034f57600080fd5b600060208284031215613d0157600080fd5b813561031581613cda565b600060608284031215612ea057600080fd5b600080600060608486031215613d3357600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613d5857600080fd5b613d6486828701613d0c565b9150509250925092565b60008060008060808587031215613d8457600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613db057600080fd5b613dbc87828801613d0c565b91505092959194509250565b600060208284031215613dda57600080fd5b5035919050565b600060208284031215613df357600080fd5b5051919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b03828116828216039080821115613e5457613e54613e1e565b5092915050565b808201808211156116c7576116c7613e1e565b818103818111156116c7576116c7613e1e565b80820281158282048414176116c7576116c7613e1e565b634e487b7160e01b600052601260045260246000fd5b600082613ebd57613ebd613e98565b500690565b600060208284031215613ed457600080fd5b8135801515811461031557600080fd5b6001600160801b03818116838216019080821115613e5457613e54613e1e565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156116c7576116c7613e1e565b600f82810b9082900b0360016001607f1b0319811260016001607f1b03821317156116c7576116c7613e1e565b8181036000831280158383131683831282161715613e5457613e54613e1e565b6000600160ff1b8201613f9357613f93613e1e565b5060000390565b8082018281126000831280158216821582161715613fba57613fba613e1e565b505092915050565b600082613fd157613fd1613e98565b600160ff1b821460001984141615613feb57613feb613e1e565b50059056fe13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e8e33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333da26469706673582212204ecbf47f656deffd83b512dd92141cd7ccaf8835e71a54fb6cca1407519a4f2264736f6c63430008130033",
    "sourceMap": "917:1802:10:-:0;;;454:1:87;429:26;;1174:139:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5110:17:40;;-1:-1:-1;;;;;5097:30:40;;;;;5656:28;;;1303:6:10;;1282:7;;;;5687:3:40;-1:-1:-1;5652:113:40;;;5713:41;;-1:-1:-1;;;5713:41:40;;;;;;;;;;;5652:113;5798:28;;;;5774:52;;5865:32;;;;5837:60;;5929:26;;;;5907:48;;6120:26;;;;6150:1;6120:31;6116:108;;6174:39;;-1:-1:-1;;;6174:39:40;;;;;;;;;;;6116:108;6255:26;;;;;6233:48;;6335:26;6308:24;;;;:53;;:127;;;6404:7;:26;;;6377:7;:24;;;:53;;;;:::i;:::-;:58;;6308:127;6291:224;;;6467:37;;-1:-1:-1;;;6467:37:40;;;;;;;;;;;6291:224;6544:24;;;;;6524:44;;6593:19;;;;6578:34;;6643:25;;;;6622:46;;;;6692:18;;;;6678:11;:32;;-1:-1:-1;;;;;;6678:32:40;-1:-1:-1;;;;;6678:32:40;;;;;;6736:20;;;;6720:36;;;6826:12;;;;:18;6847:4;-1:-1:-1;;6826:65:40;;;6887:4;6867:7;:12;;;:17;;;:24;6826:65;:111;;;;6933:4;6907:7;:12;;;:23;;;:30;6826:111;6809:202;;;6969:31;;-1:-1:-1;;;6969:31:40;;;;;;;;;;;6809:202;7032:12;;;;;:18;7020:30;;7071:12;;:17;;;;;7060:28;;7115:12;;:23;;;;;7098:40;;7215:21;;;;-1:-1:-1;;;;;7198:38:40;;;;;-1:-1:-1;;7264:22:40;7246:40;;1489:14:5;;;;;;-1:-1:-1;917:1802:10;;-1:-1:-1;;917:1802:10;14:347:149;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:149;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:149;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:622::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:149;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;;556:622;;;;:::o;1183:1456::-;1307:6;1315;1359:9;1350:7;1346:23;1389:3;1385:2;1381:12;1378:32;;;1406:1;1403;1396:12;1378:32;1429:6;1455:2;1451;1447:11;1444:31;;;1471:1;1468;1461:12;1444:31;1497:17;;:::i;:::-;1484:30;;1537:48;1575:9;1537:48;:::i;:::-;1530:5;1523:63;1618:57;1671:2;1660:9;1656:18;1618:57;:::i;:::-;1613:2;1606:5;1602:14;1595:81;1729:2;1718:9;1714:18;1708:25;1703:2;1696:5;1692:14;1685:49;1787:2;1776:9;1772:18;1766:25;1761:2;1754:5;1750:14;1743:49;1846:3;1835:9;1831:19;1825:26;1819:3;1812:5;1808:15;1801:51;1906:3;1895:9;1891:19;1885:26;1879:3;1872:5;1868:15;1861:51;1966:3;1955:9;1951:19;1945:26;1939:3;1932:5;1928:15;1921:51;2026:3;2015:9;2011:19;2005:26;1999:3;1992:5;1988:15;1981:51;2051:3;2107:2;2096:9;2092:18;2086:25;2081:2;2074:5;2070:14;2063:49;;2131:3;2187:2;2176:9;2172:18;2166:25;2161:2;2154:5;2150:14;2143:49;;2211:3;2246:57;2299:2;2288:9;2284:18;2246:57;:::i;:::-;2230:14;;;2223:81;2323:3;2358:57;2396:18;;;2358:57;:::i;:::-;2342:14;;;2335:81;2435:3;2470:62;2524:7;2504:18;;;2470:62;:::i;:::-;2465:2;2458:5;2454:14;2447:86;;2552:5;2542:15;;2576:57;2629:2;2618:9;2614:18;2576:57;:::i;:::-;2566:67;;;;1183:1456;;;;;:::o;2644:209::-;2676:1;2702;2692:132;;2746:10;2741:3;2737:20;2734:1;2727:31;2781:4;2778:1;2771:15;2809:4;2806:1;2799:15;2692:132;-1:-1:-1;2838:9:149;;2644:209::o;:::-;917:1802:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040526004361061007b5760003560e01c80639aa684621161004e5780639aa684621461011d578063cbc1343414610130578063ded0623114610150578063ed64bab21461017057600080fd5b806301681a6214610080578063074a6de9146100a257806329b23fc1146100dc57806377d05ff41461010a575b600080fd5b34801561008c57600080fd5b506100a061009b366004613cef565b610190565b005b3480156100ae57600080fd5b506100c26100bd366004613d1e565b6102d4565b604080519283526020830191909152015b60405180910390f35b3480156100e857600080fd5b506100fc6100f7366004613d6e565b6102ee565b6040519081526020016100d3565b6100fc610118366004613d1e565b610305565b6100fc61012b366004613d6e565b61031c565b34801561013c57600080fd5b506100c261014b366004613d1e565b61032a565b34801561015c57600080fd5b506100fc61016b366004613d6e565b610338565b34801561017c57600080fd5b506100a061018b366004613dc8565b610346565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906101d95750336000908152600a602052604090205460ff16155b156101f6576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03811660009081526010602052604090205460ff1661022f5760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610276573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029a9190613de1565b90506102d06001600160a01b0383167f000000000000000000000000000000000000000000000000000000000000000083610352565b5050565b6000806102e28585856103d5565b91509150935093915050565b60006102fc858585856105c6565b95945050505050565b600061031284848461080c565b90505b9392505050565b60006102fc85858585610a8c565b6000806102e2858585610dd3565b60006102fc85858585610fcf565b61034f816111fe565b50565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806103cf5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b60448201526064015b60405180910390fd5b50505050565b6000806000546001146103fa5760405162461bcd60e51b81526004016103c690613dfa565b60026000908155610409611310565b905061041c6104166113a8565b826113de565b50610426816116cd565b6006548692506001600160801b03168083111561044a57806001600160801b031692505b82600003610460576000809350935050506105b7565b61046f600360f81b3385611790565b6006546001600160801b03600160801b90910481169060009061049790869084908616611839565b90506104a285611857565b6104ac9084613e34565b600680546001600160801b0319166001600160801b03929092169190911790556104d581611857565b600680546010906104f7908490600160801b90046001600160801b0316613e34565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506105258188611881565b955085610532898761199a565b11156105515760405163c972651760e01b815260040160405180910390fd5b61055e6020880188613cef565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f75486610593848861199a565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b600080546001146105e95760405162461bcd60e51b81526004016103c690613dfa565b60026000557f000000000000000000000000000000000000000000000000000000000000000084101561062f5760405163211ddda360e11b815260040160405180910390fd5b6000610639611310565b905061064586826113de565b5061065b6106546002886119af565b3387611790565b60008060008060008061066f8b888e6119e4565b949a509298509096509450925090508a8c884282111561074057836009600082825461069b9190613e5b565b909155506106ae9050838a898886611c4f565b60006106da7f000000000000000000000000000000000000000000000000000000000000000084613e6e565b600081815260076020526040812054919250600160801b909104600f0b9061070d9086908a908e908d9089908990611dc9565b60008281526007602052604090205461073490600f83810b91600160801b9004900b611f72565b61073d836116cd565b50505b600061074c898e611881565b90508c600061075c838e84612099565b90508f81101561077f5760405163c972651760e01b815260040160405180910390fd5b61078a6002866119af565b8f600001602081019061079d9190613cef565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b6000805460011461082f5760405162461bcd60e51b81526004016103c690613dfa565b600260005561083c6120c8565b60055460ff161561086057604051637983c05160e01b815260040160405180910390fd5b60008061086d86856120e9565b909250905061089d7f00000000000000000000000000000000000000000000000000000000000000006002613e81565b8210156108bd57604051632afb507160e21b815260040160405180910390fd5b6108e87f00000000000000000000000000000000000000000000000000000000000000006002613e81565b6108f29083613e6e565b6005805460ff19166001179055925061090a82611857565b600180546001600160801b0319166001600160801b039290921691909117905561099f61099a837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612222565b611857565b600180546001600160801b03928316600160801b0292169190911790556109e86000807f0000000000000000000000000000000000000000000000000000000000000000612284565b610a0060006109fa6020870187613cef565b85612284565b610a0b6104166113a8565b506000610a19878387612099565b9050610a286020860186613cef565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b60008054600114610aaf5760405162461bcd60e51b81526004016103c690613dfa565b6002600055600554610100900460ff1615610add576040516313d0ff5960e31b815260040160405180910390fd5b610ae56120c8565b7f0000000000000000000000000000000000000000000000000000000000000000851015610b265760405163211ddda360e11b815260040160405180910390fd5b6000610bae610b33612324565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612345565b905084811080610bbd57508381115b15610bdb57604051633b61151160e11b815260040160405180910390fd5b600080610be888866120e9565b91509150610bf76104166113a8565b50600654600360f81b6000908152600c602052600080516020614011833981519152549091610c31916001600160801b0390911690613e6e565b6000808052600c602052600080516020613ff18339815191525491925090610c5a908390613e5b565b90506000806000610c6a86612380565b9050610c75816124e6565b9150610c8087612754565b6001546001600160801b038082168352600254600f0b6020840152600160801b909104166040820152610cb2816124e6565b9250610cca8483610cc38187613e6e565b9190611839565b98507f0000000000000000000000000000000000000000000000000000000000000000891015610d0d5760405163211ddda360e11b815260040160405180910390fd5b50610d266000610d2060208c018c613cef565b8a612284565b610d2f856116cd565b60008315610d4657610d4182856128d6565b610d49565b60005b90506000610d588e888d612099565b9050610d6760208c018c613cef565b604080518c815260208101849052908101899052606081018490526001600160a01b0391909116907fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396099060800160405180910390a25050600160005550959a9950505050505050505050565b600080600054600114610df85760405162461bcd60e51b81526004016103c690613dfa565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015610e3e5760405163211ddda360e11b815260040160405180910390fd5b6000610e48611310565b9050610e556104166113a8565b50610e5f816116cd565b600c602052600080516020613ff183398151915254600654600360f81b6000908152600080516020614011833981519152549091610ea8916001600160801b0390911690613e6e565b90506000610eb68284613e5b565b9050610ec46000338b611790565b600080610ed48b878588886128eb565b9098509092509050610ef7600360f81b610ef160208c018c613cef565b89612284565b610f01828a611881565b97506000610f1089888c612099565b9050888b1115610f335760405163c972651760e01b815260040160405180910390fd5b60008415610f4a57610f4583866128d6565b610f4d565b60005b9050610f5c60208c018c613cef565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b60008054600114610ff25760405162461bcd60e51b81526004016103c690613dfa565b60026000557f00000000000000000000000000000000000000000000000000000000000000008410156110385760405163211ddda360e11b815260040160405180910390fd5b6000611042611310565b905061104e86826113de565b5061105d6106546001886119af565b6000806000806000806110718b888e6129ed565b95509550955095509550955060008c90508c42101561113a57816009600082825461109c9190613e5b565b909155506110af90508c88878685612b5f565b60006110db7f000000000000000000000000000000000000000000000000000000000000000083613e6e565b600081815260076020526040902054909150600160801b9004600f0b6111078e878b8a878f6001611dc9565b60008281526007602052604090205461112e90600f83810b91600160801b9004900b611f72565b6111378a6116cd565b50505b6000611146878c611881565b90506000611155828b8e612099565b9050808d11156111785760405163c972651760e01b815260040160405180910390fd5b8d6111846001856119af565b61119160208f018f613cef565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b6000818152600760205260409020546001600160801b03161561121e5750565b60006112286113a8565b90506112547f000000000000000000000000000000000000000000000000000000000000000083613eae565b15158061126057508181105b1561127e5760405163ecd29e8160e01b815260040160405180910390fd5b80820361129b5761129681611291611310565b6113de565b505050565b815b6000818152600760205260409020546001600160801b03168282036112c7576112c4611310565b90505b80156112de576112d784826113de565b5050505050565b506113097f000000000000000000000000000000000000000000000000000000000000000082613e5b565b905061129d565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa15801561137f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a39190613de1565b905090565b60006113d47f000000000000000000000000000000000000000000000000000000000000000042613eae565b6113a39042613e6e565b600082815260076020526040812080546001600160801b031615158061140357504284115b1561141957546001600160801b031690506116c7565b61142283611857565b81546001600160801b0319166001600160801b0391909116178155600060078161146c7f000000000000000000000000000000000000000000000000000000000000000088613e6e565b815260208101919091526040016000908120546001600160801b031691506114956002876119af565b6000818152600c602052604081205491925081156114ee576000806114bd848a886000612d2c565b9150915080600960008282546114d39190613e5b565b909155506114e7905084600084808e611c4f565b6001925050505b60006114fb60018a6119af565b6000818152600c6020526040902054909150801561155657600080611523838c8a6001612d2c565b9150915080600960008282546115399190613e5b565b909155508c905061154e846000858085612b5f565b600195505050505b82156115d45760006115887f00000000000000000000000000000000000000000000000000000000000000008c613e6e565b600081815260076020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926115c8928492919004900b611f72565b6115d18b6116cd565b50505b6000808a116115e45760006115ff565b6115ff8a6115f96115f48d612380565b6124e6565b9061199a565b600654600c602052600080516020614011833981519152546000808052600080516020613ff183398151915254939450926001600160801b03909216916116469190613e5b565b6116509190613e6e565b9050600081156116695761166483836128d6565b61166c565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a28b9a50505050505050505050505b92915050565b600c602052600080516020613ff183398151915254600654600360f81b6000908152600080516020614011833981519152549091611716916001600160801b0390911690613e6e565b905060006117248284613e5b565b905060006117346115f486612380565b90506000611743858385611839565b905060008061175188612dfa565b905082811115611768576117658382613e6e565b91505b6000821180611775575083155b156117865761178682858789612ea6565b5050505050505050565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906117c2908490613e6e565b90915550506000838152600c6020526040812080548392906117e5908490613e6e565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600082600019048411830215820261185057600080fd5b5091020490565b6000600160801b821061187d57604051630f0af95160e11b815260040160405180910390fd5b5090565b60006118936040830160208401613ec2565b15611952576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba087652846118d56020860186613cef565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015611927573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061194b9190613de1565b90506116c7565b6119936119626020840184613cef565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169085610352565b5090919050565b60006103158383670de0b6b3a7640000611839565b60006001600160f81b038211156119d95760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008060008060008060006119f888612f98565b9050611a62611a05612324565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000612fe9565b909850955093506000611ad0611a76612324565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000613059565b9050611b068589611b01847f000000000000000000000000000000000000000000000000000000000000000061306a565b61309a565b15611b245760405163512095c760e01b815260040160405180910390fd5b8a8a60008080611b3685888887613123565b9b509295509093509150611b4c90508184613e6e565b611b56908b613e5b565b9950611b628284613e5b565b611b6c908c613e5b565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a611ba79190613e6e565b815260208101919091526040016000908120546001600160801b03169150428911611be9576000898152600760205260409020546001600160801b0316611beb565b895b9050611c1b8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061322d565b9650611c278387613e6e565b9550611c39878787868686600061327f565b9b9f939e50919c509a5098975095505050505050565b600354600160801b90046001600160801b0316611c9861099a82611c7b85670de0b6b3a7640000613e81565b600454600160801b90046001600160801b031691908a60006132fa565b600480546001600160801b03928316600160801b029216919091179055611cbe86611857565b611cc89082613e34565b600380546001600160801b03928316600160801b029216919091179055611cee84611857565b60018054600090611d099084906001600160801b0316613ee4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d3683613374565b60028054600090611d4b908490600f0b613f04565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d7b85611857565b60018054601090611d9d908490600160801b90046001600160801b0316613e34565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611df57f000000000000000000000000000000000000000000000000000000000000000085613e6e565b90506000600c6000611e086001886119af565b81526020019081526020016000205490506000600c6000611e2a6002896119af565b8152602001908152602001600020549050816000148015611e49575080155b15611e6e57600083815260076020526040902080546001600160801b03169055611f66565b6000611eb28b611e7e8c8961199a565b611e89906002613e81565b8b611e948c8b61199a565b611e9e9190613e5b565b611ea89190613e6e565b61099a9190613e5b565b90508415611f115760008481526007602052604090208054829190601090611ee5908490600160801b9004600f0b613f31565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f64565b60008481526007602052604090208054829190601090611f3c908490600160801b9004600f0b613f04565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015611f82575060008212155b15612015576000611f9382826133b2565b611f9d9084613f5e565b600254909150611fca90611fc5908390600160801b90046001600160801b0316600f0b6133c1565b613374565b60028054601090611fec908490600160801b90046001600160801b0316613e34565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156102d0576000821261208b5761202e82613374565b61203782613374565b6120419190613f31565b60028054601090612063908490600160801b90046001600160801b0316613ee4565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b612041611fc58260006133b2565b60006120ab6040830160208401613ec2565b156120b7575082610315565b6120c1848461199a565b9050610315565b34156120e757604051631574f9f360e01b815260040160405180910390fd5b565b6000806120fc6040840160208501613ec2565b156121d8576121366001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330876133d0565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156121a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c79190613de1565b91506121d1611310565b905061221b565b8391506122106001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330856133d0565b612218611310565b90505b9250929050565b600080612233846301e133806128d6565b905061227961226f61224d670de0b6b3a764000086613453565b612257888561199a565b61226990670de0b6b3a7640000613e5b565b90613468565b6115f9888a61199a565b979650505050505050565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906122b6908490613e5b565b90915550506000838152600c6020526040812080548392906122d9908490613e5b565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910161182c565b6001546002546000916113a3916001600160801b0390911690600f0b6134bf565b60008061235487878786613059565b905061227961236882866301e133806134dc565b61237a83670de0b6b3a7640000613e6e565b906128d6565b6123dd60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e082015260045490916101008301916124ac9116613502565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926124de92900416613502565b905292915050565b60008061250683610140015184610120015161199a90919063ffffffff16565b61010084015160e085015161251a9161199a565b6125249190613f5e565b9050600061253a846000015185602001516134bf565b905060008213156125da57600061257c8286604001518760a001518860c00151670de0b6b3a764000061256d9190613e6e565b89606001518a60800151613578565b90506125888184613612565b905080156125d4576125c1828660400151838860c00151670de0b6b3a76400006125b29190613e6e565b89606001518a60800151613621565b855186906125d0908390613e6e565b9052505b50612696565b6000821215612696576125ec82613f7e565b915060006126208286604001518760c00151670de0b6b3a76400006126119190613e6e565b88606001518960800151613655565b905061262c8184613612565b9050801561267857612665828660400151838860c00151670de0b6b3a76400006126569190613e6e565b89606001518a608001516136eb565b85518690612674908390613e5b565b9052505b6126828184613e6e565b85518690612691908390613e5b565b905250505b60006126c5856101000151670de0b6b3a76400006126b49190613e6e565b606087015160e08801519190611839565b6126f3866101400151670de0b6b3a76400006126e19190613e6e565b60608801516101208901519190611839565b6126fd9190613f5e565b905060008186600001516127119190613f9a565b90508560a001518112156127385760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015161274a9082613e6e565b9695505050505050565b8060000361275f5750565b6001546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156127ac5760405163585fe6df60e11b815260040160405180910390fd5b60006127b88383613f9a565b90507f00000000000000000000000000000000000000000000000000000000000000008112156127fb5760405163585fe6df60e11b815260040160405180910390fd5b61280481611857565b600180546001600160801b0319166001600160801b0392909216919091179055600254600090600f0b8181126128465761283f838286611839565b9150612866565b61285a61285282613f7e565b849086611839565b61286390613f7e565b91505b61286f82613374565b600280546001600160801b0319166001600160801b039283161790556001546128b29161099a91600160801b9004166128a887856134bf565b610cc387876134bf565b600180546001600160801b03928316600160801b0292169190911790555050505050565b600061031583670de0b6b3a764000084611839565b6000806000806128fa88612380565b90506000612907826124e6565b9050612919612914611310565b612dfa565b9450612926858b89611839565b945061293961293486613f7e565b612754565b6001546001600160801b038082168452600254600f0b6020850152600160801b909104166040830152600061296d836124e6565b9050600061297c8a8385611839565b90506129888c8b613f5e565b6129929082613f5e565b905060008112156129db5760006129b36129ab83613f7e565b85908d611839565b90506129bf8189613e6e565b97506129ca81612754565b6129d5818a8e613780565b60009150505b94509092505050955095509592505050565b6000806000806000806000612a0188612f98565b9050612a6b612a0e612324565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006137c5565b9098509650935060008080612a81611a76612324565b9050612a8f8d85838f613123565b9850929550909350612aa5915084905088613e6e565b9650612ab18284613e5b565b612abb908a613e6e565b9850612ac7858a613e5b565b975050505050612b4b85858584600760007f00000000000000000000000000000000000000000000000000000000000000008e612b049190613e6e565b81526020810191909152604001600020546001600160801b0316428d11612b425760008d8152600760205260409020546001600160801b0316612b44565b8d5b600161327f565b999d939c50919a5098509695509350505050565b6003546001600160801b0316612b9a61099a82612b8485670de0b6b3a7640000613e81565b6004546001600160801b031691908a60006132fa565b600480546001600160801b0319166001600160801b0392909216919091179055612bc386611857565b612bcd9082613e34565b600380546001600160801b0319166001600160801b039290921691909117905550612bf783611857565b60018054600090612c129084906001600160801b0316613e34565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612c3f82613374565b60028054600090612c54908490600f0b613f31565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612c8484611857565b60018054601090612ca6908490600160801b90046001600160801b0316613ee4565b82546101009290920a6001600160801b038181021990931691831602179091556001547f0000000000000000000000000000000000000000000000000000000000000000911610905080612d0e5750600254600154600f9190910b6001600160801b03909116125b156112d75760405163585fe6df60e11b815260040160405180910390fd5b600080612d3986866128d6565b91506000612d67837f000000000000000000000000000000000000000000000000000000000000000061199a565b9050612d93817f000000000000000000000000000000000000000000000000000000000000000061199a565b91508315612db657612da58282613e6e565b612daf9084613e6e565b9250612dcd565b612dc08282613e6e565b612dca9084613e5b565b92505b84861015612df057612de0838787611839565b9250612ded828787611839565b91505b5094509492505050565b6002546000908190612e1c90600160801b90046001600160801b0316846128d6565b9050612e487f000000000000000000000000000000000000000000000000000000000000000082613e5b565b6001546001600160801b03161115612ea0576001547f000000000000000000000000000000000000000000000000000000000000000090612e939083906001600160801b0316613e6e565b612e9d9190613e6e565b91505b50919050565b6000808411612eb55782612ec0565b612ec0838686611839565b905080600003612ed057506103cf565b808583821115612eeb57839150612ee8878385611839565b90505b612ef482611857565b60068054600090612f0f9084906001600160801b0316613ee4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612f3c81611857565b60068054601090612f5e908490600160801b90046001600160801b0316613ee4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612f8f8161293490613f7e565b50505050505050565b600080612fa36113a8565b9050808311612fb3576000612fbd565b612fbd8184613e6e565b9150612e9d827f00000000000000000000000000000000000000000000000000000000000000006128d6565b6000808061300a61300288670de0b6b3a7640000613e6e565b899087611839565b9050613016888861199a565b9150811561304c5761303d8a8a846130368a670de0b6b3a7640000613e6e565b89896136eb565b92506130498382613e5b565b90505b9750975097945050505050565b60006102fc82612269858888611839565b600061308861308184670de0b6b3a7640000613e6e565b8390613811565b61031590670de0b6b3a7640000613e6e565b600080613118856130a9612324565b6130b39190613e5b565b6001546130d1908790600160801b90046001600160801b0316613e6e565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000613059565b909210949350505050565b60008080808061316e8887610cc38c6115f96131478d670de0b6b3a7640000613e6e565b7f00000000000000000000000000000000000000000000000000000000000000009061199a565b945061319a857f000000000000000000000000000000000000000000000000000000000000000061199a565b925060006131bb6131b38a670de0b6b3a7640000613e6e565b8b9089611839565b90506131e7817f000000000000000000000000000000000000000000000000000000000000000061199a565b9450613213857f000000000000000000000000000000000000000000000000000000000000000061199a565b925061321f8385613e5b565b915050945094509450945094565b6000806132468561323e8887613811565b8a9190611839565b9050613253888486611839565b61325d9082613e5b565b905086811115613274576132718782613e6e565b91505b509695505050505050565b600080600080600080888810156132dc5786156132a4576132a18d898b611839565b9c505b6132af8c898b611839565b9b506132bb8b8d613f5e565b90506132c88b898b611839565b9a506132d58a898b611839565b99506132e9565b6132e68b8d613f5e565b90505b9b9c9a9b999a975050505050505050565b6000811561333a5761333361330f8487613e5b565b613319858761199a565b613323888a61199a565b61332d9190613e5b565b90613453565b90506102fc565b828503613349575060006102fc565b61274a6133568487613e6e565b613360858761199a565b61336a888a61199a565b61332d9190613e6e565b600060016001607f1b03198212801590613395575060016001607f1b038213155b61187d5760405163a5353be560e01b815260040160405180910390fd5b60008183136119935781610315565b6000818313612ea05782610315565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806112d75760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b60448201526064016103c6565b600061031583670de0b6b3a7640000846134dc565b6000816000036134815750670de0b6b3a76400006116c7565b82600003613491575060006116c7565b81600061349d85613826565b90508181026134b4670de0b6b3a764000082613fc2565b905061274a81613a39565b6000806134cc8385613f5e565b9050600081121561031557600080fd5b60008260001904841183021582026134f357600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006135166113a8565b6135209190613e81565b905080831161353057600061353a565b61353a8184613e6e565b9150612e9d613571670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613e81565b83906128d6565b6000806135888888878787613bc4565b905060006135a561359d87612269878b613811565b8690866134dc565b6135af9083613e6e565b9050670de0b6b3a764000081106135e3576135dc6135d5670de0b6b3a7640000886128d6565b8290613468565b90506135fb565b6135f86135d5670de0b6b3a764000088613453565b90505b6136058882613e6e565b9998505050505050505050565b6000818311612ea05782610315565b600080613632888888888888613bf3565b90925090508061327457604051637ac17d2560e01b815260040160405180910390fd5b6000806136658787878787613cb5565b90506000613690670de0b6b3a764000061367f87876128d6565b6136899190613e5b565b8390613453565b9050670de0b6b3a764000081106136bd576136b66135d5670de0b6b3a764000088613453565b90506136d5565b6136d26135d5670de0b6b3a7640000886128d6565b90505b6136df8188613e6e565b98975050505050505050565b6000806136fb8888878787613cb5565b905061370b85612269888a613e6e565b96506000613725848661371e8b86613e6e565b91906134dc565b9050670de0b6b3a764000081106137525761374b6135d5670de0b6b3a764000088613453565b905061376a565b6137676135d5670de0b6b3a7640000886128d6565b90505b6137748185613453565b90506136058982613e6e565b600061378e6115f483612380565b6000808052600c602052600080516020613ff183398151915254919250906137b7908590613e5b565b90506112d785838387612ea6565b600080806137de61300288670de0b6b3a7640000613e6e565b9050861561304c576137f0888861199a565b915061303d8a8a8461380a8a670de0b6b3a7640000613e6e565b8989613621565b60006103158383670de0b6b3a76400006134dc565b600080821361384857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213613a5457506000919050565b680755bf798b4a1bf1e58212613a7d5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000613bd08585613468565b613be9613be186612269868b61199a565b859085611839565b61274a9190613e5b565b6000806000613c058989888888613cb5565b9050613c1586612269898b613e5b565b975087811015613c2c576000809250925050613caa565b6000613c3d858761371e8c86613e6e565b9050670de0b6b3a76400008110613c6a57613c636135d5670de0b6b3a764000089613453565b9050613c82565b613c7f6135d5670de0b6b3a7640000896128d6565b90505b613c8c8186613453565b9050808a1115613ca357613ca0818b613e6e565b93505b6001925050505b965096945050505050565b6000613cc18585613468565b613be9613cd286612269868b613811565b8590856134dc565b6001600160a01b038116811461034f57600080fd5b600060208284031215613d0157600080fd5b813561031581613cda565b600060608284031215612ea057600080fd5b600080600060608486031215613d3357600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613d5857600080fd5b613d6486828701613d0c565b9150509250925092565b60008060008060808587031215613d8457600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613db057600080fd5b613dbc87828801613d0c565b91505092959194509250565b600060208284031215613dda57600080fd5b5035919050565b600060208284031215613df357600080fd5b5051919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b03828116828216039080821115613e5457613e54613e1e565b5092915050565b808201808211156116c7576116c7613e1e565b818103818111156116c7576116c7613e1e565b80820281158282048414176116c7576116c7613e1e565b634e487b7160e01b600052601260045260246000fd5b600082613ebd57613ebd613e98565b500690565b600060208284031215613ed457600080fd5b8135801515811461031557600080fd5b6001600160801b03818116838216019080821115613e5457613e54613e1e565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156116c7576116c7613e1e565b600f82810b9082900b0360016001607f1b0319811260016001607f1b03821317156116c7576116c7613e1e565b8181036000831280158383131683831282161715613e5457613e54613e1e565b6000600160ff1b8201613f9357613f93613e1e565b5060000390565b8082018281126000831280158216821582161715613fba57613fba613e1e565b505092915050565b600082613fd157613fd1613e98565b600160ff1b821460001984141615613feb57613feb613e1e565b50059056fe13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e8e33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333da26469706673582212204ecbf47f656deffd83b512dd92141cd7ccaf8835e71a54fb6cca1407519a4f2264736f6c63430008130033",
    "sourceMap": "917:1802:10:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2093:624;;;;;;;;;;-1:-1:-1;2093:624:10;;;;;:::i;:::-;;:::i;:::-;;5932:362:2;;;;;;;;;;-1:-1:-1;5932:362:2;;;;;:::i;:::-;;:::i;:::-;;;;1264:25:149;;;1320:2;1305:18;;1298:34;;;;1237:18;5932:362:2;;;;;;;;2431:273;;;;;;;;;;-1:-1:-1;2431:273:2;;;;;:::i;:::-;;:::i;:::-;;;2055:25:149;;;2043:2;2028:18;2431:273:2;1909:177:149;3049:236:2;;;;;;:::i;:::-;;:::i;3705:280::-;;;;;;:::i;:::-;;:::i;4988:242::-;;;;;;;;;;-1:-1:-1;4988:242:2;;;;;:::i;:::-;;:::i;1732:271::-;;;;;;;;;;-1:-1:-1;1732:271:2;;;;;:::i;:::-;;:::i;6450:99::-;;;;;;;;;;-1:-1:-1;6450:99:2;;;;;:::i;:::-;;:::i;2093:624:10:-;2215:10;-1:-1:-1;;;;;2229:13:10;2215:27;;;;;:52;;-1:-1:-1;2256:10:10;2247:20;;;;:8;:20;;;;;;;;2246:21;2215:52;2211:116;;;2290:26;;-1:-1:-1;;;2290:26:10;;;;;;;;;;;2211:116;-1:-1:-1;;;;;2405:30:10;;;;;;:12;:30;;;;;;;;2400:99;;2458:30;;-1:-1:-1;;;2458:30:10;;;;;;;;;;;2400:99;2608:32;;-1:-1:-1;;;2608:32:10;;2634:4;2608:32;;;2422:51:149;2590:15:10;;-1:-1:-1;;;;;2608:17:10;;;;;2395:18:149;;2608:32:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2590:50;-1:-1:-1;2650:60:10;-1:-1:-1;;;;;2650:36:10;;2687:13;2590:50;2650:36;:60::i;:::-;2133:584;2093:624;:::o;5932:362:2:-;6106:7;6115;6153:134;6194:17;6229:18;6265:8;6153:23;:134::i;:::-;6134:153;;;;5932:362;;;;;;:::o;2431:273::-;2610:7;2636:61;2648:13;2663:11;2676:10;2688:8;2636:11;:61::i;:::-;2629:68;2431:273;-1:-1:-1;;;;;2431:273:2:o;3049:236::-;3201:16;3236:42;3248:13;3263:4;3269:8;3236:11;:42::i;:::-;3229:49;;3049:236;;;;;;:::o;3705:280::-;3887:16;3922:56;3936:13;3951:7;3960;3969:8;3922:13;:56::i;4988:242::-;5139:7;5148;5174:49;5191:9;5202:10;5214:8;5174:16;:49::i;1732:271::-;1910:7;1936:60;1947:13;1962:11;1975:10;1987:8;1936:10;:60::i;6450:99::-;6514:28;6526:15;6514:11;:28::i;:::-;6450:99;:::o;2950:1499:88:-;3062:12;3232:4;3226:11;-1:-1:-1;;;3355:17:88;3348:93;3488:2;3484:1;3465:17;3461:25;3454:37;3568:6;3563:2;3544:17;3540:26;3533:42;4370:2;4367:1;4363:2;4344:17;4341:1;4334:5;4327;4322:51;3891:16;3884:24;3878:2;3860:16;3857:24;3853:1;3849;3843:8;3840:15;3836:46;3833:76;3633:754;3622:765;;;4415:7;4407:35;;;;-1:-1:-1;;;4407:35:88;;2875:2:149;4407:35:88;;;2857:21:149;2914:2;2894:18;;;2887:30;-1:-1:-1;;;2933:18:149;;;2926:45;2988:18;;4407:35:88;;;;;;;;;3052:1397;2950:1499;;;:::o;13554:2371:35:-;13766:16;13784:32;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;;;;;;:::i;:::-;558:1;549:6;:10;;;13886:16:35::1;:14;:16::i;:::-;13865:37;;13912:49;13929:19;:17;:19::i;:::-;13950:10;13912:16;:49::i;:::-;;14086:33;14108:10;14086:21;:33::i;:::-;14403:13;:29:::0;14349:17;;-1:-1:-1;;;;;;14403:29:35::1;14446:43:::0;;::::1;14442:117;;;14532:16;-1:-1:-1::0;;;;;14505:43:35::1;;;14442:117;14572:24;14600:1;14572:29:::0;14568:48:::1;;14611:1;14614::::0;14603:13:::1;;;;;;;;14568:48;14671:125;-1:-1:-1::0;;;14738:10:35::1;14762:24:::0;14671:5:::1;:125::i;:::-;14897:13;:22:::0;-1:-1:-1;;;;;;;;14897:22:35;;::::1;::::0;::::1;::::0;14877:17:::1;::::0;14953:116:::1;::::0;:24;;14897:22;;14953:116;::::1;:35;:116::i;:::-;14929:140;;15207:36;:24;:34;:36::i;:::-;15176:67;::::0;:16;:67:::1;:::i;:::-;15132:13;:111:::0;;-1:-1:-1;;;;;;15132:111:35::1;-1:-1:-1::0;;;;;15132:111:35;;;::::1;::::0;;;::::1;::::0;;15279:25:::1;:13:::0;:23:::1;:25::i;:::-;15253:13;:51:::0;;:22:::1;::::0;:51:::1;::::0;;;-1:-1:-1;;;15253:51:35;::::1;-1:-1:-1::0;;;;;15253:51:35::1;;:::i;:::-;;;;;;;;-1:-1:-1::0;;;;;15253:51:35::1;;;;;-1:-1:-1::0;;;;;15253:51:35::1;;;;;;15359:34;15369:13;15384:8;15359:9;:34::i;:::-;15348:45:::0;-1:-1:-1;15348:45:35;15462:52:::1;:18:::0;15489:24;15462:26:::1;:52::i;:::-;:63;15458:126;;;15548:25;;-1:-1:-1::0;;;15548:25:35::1;;;;;;;;;;;15458:126;15683:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;15647:217:35::1;;15717:24:::0;15776:33:::1;:13:::0;15798:10;15776:21:::1;:33::i;:::-;15647:217;::::0;;4287:25:149;;;4343:2;4328:18;;4321:34;;;;4371:18;;4364:34;;;4275:2;4260:18;15647:217:35::1;;;;;;;15875:43;;;;570:1:87;591::::0;582:6;:10;13554:2371:35;;;;-1:-1:-1;13554:2371:35;-1:-1:-1;;13554:2371:35:o;5673:4086:39:-;5866:7;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;;;;;;:::i;:::-;558:1;549:6;:10;5903:25:39::1;5889:39:::0;::::1;5885:115;;;5951:38;;-1:-1:-1::0;;;5951:38:39::1;;;;;;;;;;;5885:115;6043:18;6064:16;:14;:16::i;:::-;6043:37;;6090:43;6107:13;6122:10;6090:16;:43::i;:::-;;6194:143;6213:65;6235:27;6264:13;6213:21;:65::i;:::-;6292:10;6316:11;6194:5;:143::i;:::-;6625:25;6664:21:::0;6699:26:::1;6739:23:::0;6776:27:::1;6817:26:::0;6856:60:::1;6877:11;6890:10;6902:13;6856:20;:60::i;:::-;6611:305:::0;;-1:-1:-1;6611:305:39;;-1:-1:-1;6611:305:39;;-1:-1:-1;6611:305:39;-1:-1:-1;6611:305:39;-1:-1:-1;6611:305:39;-1:-1:-1;7139:11:39;7214:13;7290:10;7345:15:::1;:30:::0;-1:-1:-1;7341:1241:39::1;;;7463:18;7437:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;7574:197:39::1;::::0;-1:-1:-1;7608:10:39;7636:17;7671:18;7707:20;7745:12;7574:16:::1;:197::i;:::-;7858:22;7883:32;7898:17;7883:12:::0;:32:::1;:::i;:::-;7929:31;7987:28:::0;;;:12:::1;:28;::::0;;;;:37;7858:57;;-1:-1:-1;;;;7987:37:39;;::::1;;;::::0;8052:260:::1;::::0;8102:10;;8130:15;;8163:17;;8198:18;;8234:12;;8264:11;;8052:32:::1;:260::i;:::-;8405:28;::::0;;;:12:::1;:28;::::0;;;;:37;8326:130:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;8405:37:39;::::1;::::0;::::1;8326:19;:130::i;:::-;8537:34;8559:11;8537:21;:34::i;:::-;7377:1205;;7341:1241;8791:16;8810:34;8820:13;8835:8;8810:9;:34::i;:::-;8791:53:::0;-1:-1:-1;9171:8:39;9220:20:::1;9243:101;8791:53:::0;9303:10;9171:8;9243:24:::1;:101::i;:::-;9220:124;;9373:10;9358:12;:25;9354:88;;;9406:25;;-1:-1:-1::0;;;9406:25:39::1;;;;;;;;;;;9354:88;9551:64;9573:27;9602:12;9551:21;:64::i;:::-;9517:8;:20;;;;;;;;;;:::i;:::-;9493:233;::::0;;4903:25:149;;;4959:2;4944:18;;4937:34;;;4987:18;;;4980:34;;;5045:2;5030:18;;5023:34;;;-1:-1:-1;;;;;9493:233:39;;;::::1;::::0;::::1;::::0;4890:3:149;4875:19;9493:233:39::1;;;;;;;-1:-1:-1::0;;591:1:87;582:6;:10;9744:8:39;5673:4086;-1:-1:-1;;;;;;;;;;;;;;;5673:4086:39:o;1298:3446:35:-;1456:16;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;;;;;;:::i;:::-;558:1;549:6;:10;1551:20:35::1;:18;:20::i;:::-;1647:26:::0;;::::1;;1643:100;;;1696:36;;-1:-1:-1::0;;;1696:36:35::1;;;;;;;;;;;1643:100;1871:19;1892:18:::0;1914:67:::1;1936:13;1963:8;1914;:67::i;:::-;1870:111:::0;;-1:-1:-1;1870:111:35;-1:-1:-1;2906:25:35::1;2910:21;2906:1;:25;:::i;:::-;2892:11;:39;2888:115;;;2954:38;;-1:-1:-1::0;;;2954:38:35::1;;;;;;;;;;;2888:115;3037:25;3041:21;3037:1;:25;:::i;:::-;3023:39;::::0;:11;:39:::1;:::i;:::-;3119:26:::0;:33;;-1:-1:-1;;3119:33:35::1;3148:4;3119:33;::::0;;3012:50;-1:-1:-1;3321:23:35::1;:11:::0;:21:::1;:23::i;:::-;3292:12;:52:::0;;-1:-1:-1;;;;;;3292:52:35::1;-1:-1:-1::0;;;;;3292:52:35;;;::::1;::::0;;;::::1;::::0;;3382:247:::1;:222;3456:11:::0;3485:18:::1;3521:4:::0;3543:17:::1;3578:12;3382:56;:222::i;:::-;:245;:247::i;:::-;3354:12;:275:::0;;-1:-1:-1;;;;;3354:275:35;;::::1;-1:-1:-1::0;;;3354:275:35::1;::::0;::::1;::::0;;;::::1;::::0;;4134:62:::1;3354:25;::::0;4174:21:::1;4134:5;:62::i;:::-;4206:59;554:1:41;4234:20:35;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4256:8;4206:5;:59::i;:::-;4317:49;4334:19;:17;:19::i;4317:49::-;;4414:24;4441:107;4479:13;4506:10;4530:8;4441:24;:107::i;:::-;4414:134:::0;-1:-1:-1;4587:20:35::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4563:148;::::0;;4903:25:149;;;4959:2;4944:18;;4937:34;;;4987:18;;;4980:34;;;5045:2;5030:18;;5023:34;;;-1:-1:-1;;;;;4563:148:35;;;::::1;::::0;::::1;::::0;4890:3:149;4875:19;4563:148:35::1;;;;;;;4722:15;;;591:1:87::0;582:6;:10;1298:3446:35;;-1:-1:-1;;;1298:3446:35:o;5152:4076::-;5352:16;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;;;;;;:::i;:::-;558:1;549:6;:10;5256:21:33;;::::1;::::0;::::1;;;5252:54;;;5286:20;;-1:-1:-1::0;;;5286:20:33::1;;;;;;;;;;;5252:54;5447:20:35::2;:18;:20::i;:::-;5497:25;5481:13;:41;5477:117;;;5545:38;;-1:-1:-1::0;;;5545:38:35::2;;;;;;;;;;;5477:117;5643:11;5657:208;5702:25;:23;:25::i;:::-;5741:12;:25:::0;-1:-1:-1;;;5741:25:35;::::2;-1:-1:-1::0;;;;;5741:25:35::2;5780:18;5812:17;5843:12;5657:31;:208::i;:::-;5643:222;;5885:7;5879:3;:13;:30;;;;5902:7;5896:3;:13;5879:30;5875:92;;;5932:24;;-1:-1:-1::0;;;5932:24:35::2;;;;;;;;;;;5875:92;6046:19;6067:18:::0;6089:67:::2;6111:13;6138:8;6089;:67::i;:::-;6045:111;;;;6200:49;6217:19;:17;:19::i;6200:49::-;-1:-1:-1::0;6778:13:35::2;:29:::0;-1:-1:-1;;;6667:35:35::2;6705:70:::0;;;:12:::2;:70;::::0;-1:-1:-1;;;;;;;;;;;6705:70:35;6667:35;;6705:102:::2;::::0;-1:-1:-1;;;;;6778:29:35;;::::2;::::0;6705:102:::2;:::i;:::-;6817:21;6841:34:::0;;;:12:::2;:34;::::0;-1:-1:-1;;;;;;;;;;;6841:34:35;6667:140;;-1:-1:-1;6817:21:35;6841:76:::2;::::0;6667:140;;6841:76:::2;:::i;:::-;6817:100;;6982:26;7018:28:::0;7143:63:::2;7209:34;7232:10;7209:22;:34::i;:::-;7143:100;;7280:44;7317:6;7280:36;:44::i;:::-;7257:67;;7447:37;7471:11;7447:16;:37::i;:::-;7521:12;:26:::0;-1:-1:-1;;;;;7521:26:35;;::::2;7498:49:::0;;7586:28;;::::2;;7561:22;::::0;::::2;:53:::0;-1:-1:-1;;;7650:25:35;;::::2;;7628:19;::::0;::::2;:47:::0;7710:44:::2;7498:6:::0;7710:36:::2;:44::i;:::-;7689:65:::0;-1:-1:-1;8154:137:35::2;8226:13:::0;8257:20;8155:41:::2;8257:20:::0;7689:65;8155:41:::2;:::i;:::-;8154:54:::0;:137;:54:::2;:137::i;:::-;8143:148;;8406:25;8395:8;:36;8391:120;;;8458:38;;-1:-1:-1::0;;;8458:38:35::2;;;;;;;;;;;8391:120;-1:-1:-1::0;8574:59:35::2;554:1:41;8602:20:35;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;8624:8;8574:5;:59::i;:::-;8706:33;8728:10;8706:21;:33::i;:::-;8789:20;8812:18:::0;;:92:::2;;8861:43;:20:::0;8890:13;8861:28:::2;:43::i;:::-;8812:92;;;8845:1;8812:92;8789:115;;8914:24;8941:107;8979:13;9006:10;9030:8;8941:24;:107::i;:::-;8914:134:::0;-1:-1:-1;9089:20:35::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;9063:158;::::0;;4903:25:149;;;4959:2;4944:18;;4937:34;;;4987:18;;;4980:34;;;5045:2;5030:18;;5023:34;;;-1:-1:-1;;;;;9063:158:35;;;::::2;::::0;::::2;::::0;4890:3:149;4875:19;9063:158:35::2;;;;;;;-1:-1:-1::0;;591:1:87;582:6;:10;-1:-1:-1;5152:4076:35;;;-1:-1:-1;;;;;;;;;;5152:4076:35:o;10253:2561::-;10442:16;10460:24;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;;;;;;:::i;:::-;558:1;549:6;:10;10516:25:35::1;10504:37:::0;::::1;10500:113;;;10564:38;;-1:-1:-1::0;;;10564:38:35::1;;;;;;;;;;;10500:113;10656:18;10677:16;:14;:16::i;:::-;10656:37;;10703:49;10720:19;:17;:19::i;10703:49::-;;10969:33;10991:10;10969:21;:33::i;:::-;11074:12;:34;::::0;-1:-1:-1;;;;;;;;;;;11074:34:35;11229:13:::1;:29:::0;-1:-1:-1;;;11044:27:35::1;11156:70:::0;;;-1:-1:-1;;;;;;;;;;;11156:70:35;11044:27;;11156:102:::1;::::0;-1:-1:-1;;;;;11229:29:35;;::::1;::::0;11156:102:::1;:::i;:::-;11118:140:::0;-1:-1:-1;11268:21:35::1;11292:61;11118:140:::0;11292:19;:61:::1;:::i;:::-;11268:85;;11363:50;554:1:41;11391:10:35;11403:9;11363:5;:50::i;:::-;11471:21;11502:28:::0;11644:179:::1;11679:9;11702:10;11726:13;11753:19;11786:27;11644:21;:179::i;:::-;11540:283:::0;;-1:-1:-1;11540:283:35;;-1:-1:-1;11540:283:35;-1:-1:-1;11883:127:35::1;-1:-1:-1::0;;;11950:20:35::1;;::::0;::::1;::::0;::::1;:::i;:::-;11984:16;11883:5;:127::i;:::-;12086:34;12096:13;12111:8;12086:9;:34::i;:::-;12075:45;;12167:20;12190:102;12228:8;12250:10;12274:8;12190:24;:102::i;:::-;12167:125;;12319:8;12306:10;:21;12302:59;;;12336:25;;-1:-1:-1::0;;;12336:25:35::1;;;;;;;;;;;12302:59;12413:20;12436:18:::0;;:92:::1;;12485:43;:20:::0;12514:13;12485:28:::1;:43::i;:::-;12436:92;;;12469:1;12436:92;12413:115:::0;-1:-1:-1;12572:20:35::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;12543:218;::::0;;5500:25:149;;;5556:2;5541:18;;5534:34;;;5584:18;;;5577:34;;;5642:2;5627:18;;5620:34;;;5685:3;5670:19;;5663:35;;;-1:-1:-1;;;;;12543:218:35;;;::::1;::::0;::::1;::::0;5487:3:149;5472:19;12543:218:35::1;;;;;;;12772:35;;;;;;;;591:1:87::0;582:6;:10;10253:2561:35;;;;-1:-1:-1;10253:2561:35;-1:-1:-1;;10253:2561:35:o;5153:3752:36:-;5345:7;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;;;;;;:::i;:::-;558:1;549:6;:10;5382:25:36::1;5368:39:::0;::::1;5364:115;;;5430:38;;-1:-1:-1::0;;;5430:38:36::1;;;;;;;;;;;5364:115;5712:18;5733:16;:14;:16::i;:::-;5712:37;;5759:43;5776:13;5791:10;5759:16;:43::i;:::-;;5862:142;5881:64;5903:26;5931:13;5881:21;:64::i;5862:142::-;6180:25;6219:21:::0;6254:26:::1;6294:23:::0;6331:27:::1;6372:26:::0;6411:59:::1;6431:11;6444:10;6456:13;6411:19;:59::i;:::-;6166:304;;;;;;;;;;;;6671:20;6694:13;6671:36;;6770:13;6752:15;:31;6748:1160;;;6870:18;6844:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;6902:197:36::1;::::0;-1:-1:-1;6935:11:36;6964:17;6999:18;7035:20;7073:12;6902:15:::1;:197::i;:::-;7186:22;7211:32;7226:17;7211:12:::0;:32:::1;:::i;:::-;7257:31;7315:28:::0;;;:12:::1;:28;::::0;;;;:37;7186:57;;-1:-1:-1;;;;7315:37:36;::::1;;;7380:259;7430:11:::0;7459:15;7492:17;7527:18;7563:12;7593:10;7621:4:::1;7380:32;:259::i;:::-;7732:28;::::0;;;:12:::1;:28;::::0;;;;:37;7653:130:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;7732:37:36;::::1;::::0;::::1;7653:19;:130::i;:::-;7864:33;7886:10;7864:21;:33::i;:::-;6785:1123;;6748:1160;7964:16;7983:34;7993:13;8008:8;7983:9;:34::i;:::-;7964:53;;8296:20;8319:102;8357:8;8379:10;8403:8;8319:24;:102::i;:::-;8296:125;;8448:12;8435:10;:25;8431:88;;;8483:25;;-1:-1:-1::0;;;8483:25:36::1;;;;;;;;;;;8431:88;8585:11:::0;8699:63:::1;8721:26;8749:12:::0;8699:21:::1;:63::i;:::-;8665:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;8642:230;::::0;;4903:25:149;;;4959:2;4944:18;;4937:34;;;4987:18;;;4980:34;;;5045:2;5030:18;;5023:34;;;-1:-1:-1;;;;;8642:230:36;;;::::1;::::0;::::1;::::0;4890:3:149;4875:19;8642:230:36::1;;;;;;;-1:-1:-1::0;;591:1:87;582:6;:10;8890:8:36;5153:3752;-1:-1:-1;;;;;;;;;;;;;5153:3752:36:o;1164:1527:34:-;1298:29;;;;:12;:29;;;;;:40;-1:-1:-1;;;;;1298:40:34;:45;1294:82;;1164:1527;:::o;1294:82::-;1555:24;1582:19;:17;:19::i;:::-;1555:46;-1:-1:-1;1628:37:34;1646:19;1628:15;:37;:::i;:::-;:42;;;:92;;;1705:15;1686:16;:34;1628:92;1611:187;;;1752:35;;-1:-1:-1;;;1752:35:34;;;;;;;;;;;1611:187;2051:16;2032:15;:35;2028:657;;2083:52;2100:16;2118;:14;:16::i;:::-;2083;:52::i;:::-;;2133:584:10;2093:624;:::o;2028:657:34:-;2203:15;2166:509;2314:25;2342:18;;;:12;:18;;;;;:29;-1:-1:-1;;;;;2342:29:34;2393:24;;;2389:107;;2461:16;:14;:16::i;:::-;2441:36;;2389:107;2517:22;;2513:148;;2563:52;2580:15;2597:17;2563:16;:52::i;:::-;;2637:5;2083:52;2133:584:10;2093:624;:::o;2513:148:34:-;-1:-1:-1;2254:27:34;2262:19;2254:27;;:::i;:::-;;;2166:509;;4944:117:5;5028:26;;-1:-1:-1;;;5028:26:5;;150:4:42;5028:26:5;;;2055:25:149;5002:7:5;;5028:5;-1:-1:-1;;;;;5028:21:5;;;;2028:18:149;;5028:26:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5021:33;;4944:117;:::o;7049:223:33:-;7125:24;7227:37;7245:19;7227:15;:37;:::i;:::-;7196:69;;:15;:69;:::i;2936:4513:34:-;3057:7;3189:51;;;:12;:51;;;;;3254:22;;-1:-1:-1;;;;;3254:22:34;:27;;;:64;;;3303:15;3285;:33;3254:64;3250:124;;;3341:22;-1:-1:-1;;;;;3341:22:34;;-1:-1:-1;3334:29:34;;3250:124;3455:23;:11;:21;:23::i;:::-;3430:48;;-1:-1:-1;;;;;;3430:48:34;-1:-1:-1;;;;;3430:48:34;;;;;;;-1:-1:-1;3967:12:34;-1:-1:-1;3993:35:34;4011:17;3993:15;:35;:::i;:::-;3967:71;;;;;;;;;;;-1:-1:-1;3967:71:34;;;:82;-1:-1:-1;;;;;3967:82:34;;-1:-1:-1;4082:101:34;4117:27;4158:15;4082:21;:101::i;:::-;4193:27;4223:26;;;:12;:26;;;;;;4059:124;;-1:-1:-1;4293:23:34;;4289:667;;4350:21;4389;4427:180;4474:19;4515:11;4548:14;4584:5;4427:25;:180::i;:::-;4332:275;;;;4647:13;4621:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;4674:235:34;;-1:-1:-1;4708:19:34;4745:1;4764:13;;4880:15;4674:16;:235::i;:::-;4941:4;4923:22;;4318:638;;4289:667;5074:19;5096:100;5131:26;5171:15;5096:21;:100::i;:::-;5206:26;5235:25;;;:12;:25;;;;;;5074:122;;-1:-1:-1;5274:22:34;;5270:745;;5330:21;5369;5407:178;5454:18;5494:11;5527:14;5563:4;5407:25;:178::i;:::-;5312:273;;;;5625:13;5599:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5677:15:34;;-1:-1:-1;5736:232:34;5769:18;5652:22;5824:13;;5677:15;5736;:232::i;:::-;6000:4;5982:22;;5298:717;;;5270:745;6097:15;6093:535;;;6128:20;6151:35;6169:17;6151:15;:35;:::i;:::-;6200:31;6258:26;;;:12;:26;;;;;:35;;-1:-1:-1;;;;;6321:39:34;;;;;;6128:58;;-1:-1:-1;;;;6258:35:34;;;;;;;;;6374:128;;6258:35;;6453;;;;;6374:19;:128::i;:::-;6583:34;6605:11;6583:21;:34::i;:::-;6114:514;;6093:535;6738:20;6775:1;6761:11;:15;:174;;6934:1;6761:174;;;6791:128;6907:11;6791:90;6845:35;6868:11;6845:22;:35::i;:::-;6791:53;:90::i;:::-;:115;;:128::i;:::-;7081:13;:29;7018:12;:48;;-1:-1:-1;;;;;;;;;;;7018:48:34;6945:21;6969:34;;;-1:-1:-1;;;;;;;;;;;6969:34:34;6738:197;;-1:-1:-1;6945:21:34;-1:-1:-1;;;;;7081:29:34;;;;6969:97;;7018:48;6969:97;:::i;:::-;:141;;;;:::i;:::-;6945:165;-1:-1:-1;7120:20:34;7143:18;;:84;;7192:35;:12;7213:13;7192:20;:35::i;:::-;7143:84;;;7176:1;7143:84;7242:171;;;4903:25:149;;;4959:2;4944:18;;4937:34;;;4987:18;;;4980:34;;;5045:2;5030:18;;5023:34;;;7120:107:34;;-1:-1:-1;7272:15:34;;7242:171;;4890:3:149;4875:19;7242:171:34;;;;;;;7431:11;7424:18;;;;;;;;;;;;2936:4513;;;;;:::o;22908:1546:35:-;23117:12;:34;;-1:-1:-1;;;;;;;;;;;23117:34:35;23272:13;:29;-1:-1:-1;;;23092:22:35;23199:70;;;-1:-1:-1;;;;;;;;;;;23199:70:35;23092:22;;23199:102;;-1:-1:-1;;;;;23272:29:35;;;;23199:102;:::i;:::-;23161:140;-1:-1:-1;23311:21:35;23335:44;23161:140;23335:14;:44;:::i;:::-;23311:68;;23389:20;23412:95;23462:35;23485:11;23462:22;:35::i;23412:95::-;23389:118;-1:-1:-1;23517:21:35;23541:88;:14;23389:118;23606:13;23541:25;:88::i;:::-;23517:112;;23987:26;24027:12;24042:40;24070:11;24042:27;:40::i;:::-;24027:55;;24103:13;24096:4;:20;24092:92;;;24153:20;24160:13;24153:4;:20;:::i;:::-;24132:41;;24092:92;24218:1;24197:18;:22;:43;;;-1:-1:-1;24223:17:35;;24197:43;24193:255;;;24256:181;24299:18;24335:12;24365:13;24396:27;24256:25;:181::i;:::-;22969:1485;;;;;;;22908:1546;:::o;6377:333:37:-;6507:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6507:25:37;;;;;;;;;:35;;6536:6;;6507:19;:35;;6536:6;;6507:35;:::i;:::-;;;;-1:-1:-1;;6552:21:37;;;;:12;:21;;;;;:31;;6577:6;;6552:21;:31;;6577:6;;6552:31;:::i;:::-;;;;-1:-1:-1;;6642:61:37;;;1264:25:149;;;1320:2;1305:18;;1298:34;;;6683:1:37;;-1:-1:-1;;;;;6642:61:37;;;6657:10;;6642:61;;1237:18:149;6642:61:37;;;;;;;;6377:333;;;:::o;941:556:42:-;1057:9;1322:1;-1:-1:-1;;1305:19:42;1302:1;1299:26;1296:1;1292:34;1285:42;1272:11;1268:60;1241:146;;1371:1;1368;1361:12;1241:146;-1:-1:-1;1458:9:42;;1454:27;;941:556::o;640:190:44:-;693:9;-1:-1:-1;;;720:1:44;:12;714:86;;756:33;;-1:-1:-1;;;756:33:44;;;;;;;;;;;714:86;-1:-1:-1;821:1:44;640:190::o;4099:660:5:-;4223:23;4262:15;;;;;;;;:::i;:::-;4258:495;;;-1:-1:-1;;;;;4430:5:5;:12;;4460:7;4485:20;;;;:8;:20;:::i;:::-;4430:120;;-1:-1:-1;;;;;;4430:120:5;;;;;;;;;;6438:25:149;;;;-1:-1:-1;;;;;6537:15:149;6517:18;;;6510:43;4531:4:5;6569:18:149;;;6562:43;6411:18;;4430:120:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4412:138;;4258:495;;;4638:65;4673:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;4652:5:5;4638:34;;4695:7;4638:34;:65::i;:::-;-1:-1:-1;4735:7:5;;4099:660;-1:-1:-1;4099:660:5:o;1771:119:42:-;1833:7;1860:22;1871:1;1874;1877:4;1860:10;:22::i;1198:469:41:-;1309:10;-1:-1:-1;;;;;1401:10:41;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:41;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:41;1620:18;;;;1617:34;;1198:469::o;20785:6394:39:-;20970:25;21009:21;21044:26;21084:23;21121:27;21162:26;21882:21;21906:38;21930:13;21906:23;:38::i;:::-;21882:62;;22079:289;22131:25;:23;:25::i;:::-;22174:12;:25;-1:-1:-1;;;22174:25:39;;-1:-1:-1;;;;;22174:25:39;22217:11;22246:13;22277:12;22307:11;22336:18;22079:34;:289::i;:::-;21958:410;;-1:-1:-1;21958:410:39;-1:-1:-1;21958:410:39;-1:-1:-1;22513:17:39;22533:199;22584:25;:23;:25::i;:::-;22627:12;:25;-1:-1:-1;;;22627:25:39;;-1:-1:-1;;;;;22627:25:39;22670:18;22706:12;22533:33;:199::i;:::-;22513:219;;22767:273;22808:15;22845:17;22884:138;22956:9;22991;22884:46;:138::i;:::-;22767:19;:273::i;:::-;22746:379;;;23080:30;;-1:-1:-1;;;23080:30:39;;;;;;;;;;;22746:379;23379:11;23450;23358:18;;;23778:152;23379:11;23848:13;23879:9;23450:11;23778:24;:152::i;:::-;23599:331;-1:-1:-1;23599:331:39;;-1:-1:-1;23599:331:39;;-1:-1:-1;23599:331:39;-1:-1:-1;24578:29:39;;-1:-1:-1;23599:331:39;;24578:29;:::i;:::-;24559:48;;;;:::i;:::-;;-1:-1:-1;24881:18:39;24892:7;24881:8;:18;:::i;:::-;24859:40;;;;:::i;:::-;;;21434:3476;;;;;;;25067:22;25092:12;:77;25138:17;25122:13;:33;;;;:::i;:::-;25092:77;;;;;;;;;;;-1:-1:-1;25092:77:39;;;:88;-1:-1:-1;;;;;25092:88:39;;-1:-1:-1;25220:15:39;:31;-1:-1:-1;25220:118:39;;25300:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;25300:38:39;25220:118;;;25270:11;25220:118;25194:144;;25903:236;25958:11;25987:18;26023:14;26055:15;26088:11;26117:8;25903:37;:236::i;:::-;25887:252;-1:-1:-1;26345:40:39;26367:18;26345:40;;:::i;:::-;;;26877:285;26942:13;26973:18;27009:15;27042:18;27078:14;27110:15;27143:5;26877:47;:285::i;:::-;20785:6394;;26686:476;;-1:-1:-1;26686:476:39;;-1:-1:-1;26686:476:39;-1:-1:-1;26686:476:39;;-1:-1:-1;20785:6394:39;-1:-1:-1;;;;;;20785:6394:39:o;14505:1128::-;14807:30;;-1:-1:-1;;;14807:30:39;;-1:-1:-1;;;;;14807:30:39;14887:301;:276;14807:30;15044:20;:13;15060:4;15044:20;:::i;:::-;14908:37;;-1:-1:-1;;;14908:37:39;;-1:-1:-1;;;;;14908:37:39;;;15115:11;15144:5;14887:103;:276::i;:301::-;14847:37;:341;;-1:-1:-1;;;;;14847:341:39;;;-1:-1:-1;;;14847:341:39;;;;;;;;;15331:23;:11;:21;:23::i;:::-;15298:56;;:18;:56;:::i;:::-;15253:30;:101;;-1:-1:-1;;;;;15253:101:39;;;-1:-1:-1;;;15253:101:39;;;;;;;;;15452:31;:19;:29;:31::i;:::-;15422:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;15422:61:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15422:61:39;;;;;-1:-1:-1;;;;;15422:61:39;;;;;;15525:32;:21;:30;:32::i;:::-;15493:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15493:64:39;;;;;;;-1:-1:-1;;;;;15493:64:39;;;;;;15596:30;:18;:28;:30::i;:::-;15567:12;:59;;:25;;:59;;;;-1:-1:-1;;;15567:59:39;;-1:-1:-1;;;;;15567:59:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15567:59:39;;;;;-1:-1:-1;;;;;15567:59:39;;;;;;14717:916;14505:1128;;;;;:::o;11295:1724:33:-;11580:22;11605:33;11621:17;11605:13;:33;:::i;:::-;11580:58;;11648:23;11674:12;:100;11700:64;11722:26;11750:13;11700:21;:64::i;:::-;11674:100;;;;;;;;;;;;11648:126;;11784:24;11811:12;:101;11837:65;11859:27;11888:13;11837:21;:65::i;:::-;11811:101;;;;;;;;;;;;11784:128;;12001:15;12020:1;12001:20;:45;;;;-1:-1:-1;12025:21:33;;12001:45;11997:1016;;;12102:1;12062:28;;;:12;:28;;;;;:41;;-1:-1:-1;;;;;12062:41:33;;;11997:1016;;;12363:12;12402:213;12591:11;12531:37;:16;12556:11;12531:24;:37::i;:::-;12507:61;;:1;:61;:::i;:::-;12466:18;12403:40;:19;12431:11;12403:27;:40::i;:::-;:81;;;;:::i;:::-;:165;;;;:::i;:::-;:199;;;;:::i;12402:213::-;12363:266;;12830:7;12826:177;;;12857:28;;;;:12;:28;;;;;:46;;12898:5;;12857:28;:37;;:46;;12898:5;;-1:-1:-1;;;12857:46:33;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12857:46:33;;;;;;;-1:-1:-1;;;;;12857:46:33;;;;;;12826:177;;;12942:28;;;;:12;:28;;;;;:46;;12983:5;;12942:28;:37;;:46;;12983:5;;-1:-1:-1;;;12942:46:33;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12942:46:33;;;;;;;-1:-1:-1;;;;;12942:46:33;;;;;;12826:177;12120:893;11997:1016;11570:1449;;;11295:1724;;;;;;;:::o;13190:890::-;13343:6;13333:7;:16;:32;;;;;13364:1;13353:7;:12;;13333:32;13329:745;;;13381:12;13413:13;:6;13381:12;13413:10;:13::i;:::-;13403:23;;:7;:23;:::i;:::-;13625:25;;13381:46;;-1:-1:-1;13608:55:33;;:44;;13381:46;;-1:-1:-1;;;13625:25:33;;-1:-1:-1;;;;;13625:25:33;13608:44;;:9;:44::i;:::-;:53;:55::i;:::-;13554:25;:123;;:25;;:123;;;;-1:-1:-1;;;13554:123:33;;-1:-1:-1;;;;;13554:123:33;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13554:123:33;;;;;-1:-1:-1;;;;;13554:123:33;;;;;;13367:321;2133:584:10;2093:624;:::o;13329:745:33:-;13775:7;13766:6;:16;13762:312;;;13813:1;13802:7;:12;13798:266;;13912:18;:7;:16;:18::i;:::-;13892:17;:6;:15;:17::i;:::-;:38;;;;:::i;:::-;13834:25;:114;;:25;;:114;;;;-1:-1:-1;;;13834:114:33;;-1:-1:-1;;;;;13834:114:33;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13834:114:33;;;;;-1:-1:-1;;;;;13834:114:33;;;;;;2133:584:10;2093:624;:::o;13798:266:33:-;14024:24;:13;:6;14035:1;14024:10;:13::i;20504:315::-;20668:7;20691:15;;;;;;;;:::i;:::-;20687:126;;;-1:-1:-1;20729:7:33;20722:14;;20687:126;20774:28;:7;20790:11;20774:15;:28::i;:::-;20767:35;;;;5179:145:5;5246:9;:14;5242:76;;5283:24;;-1:-1:-1;;;5283:24:5;;;;;;;;;;;5242:76;5179:145::o;2227:1105::-;2350:20;;2406:15;;;;;;;;:::i;:::-;2402:924;;;2489:141;-1:-1:-1;;;;;2503:10:5;2489:43;2550:10;2586:4;2609:7;2489:43;:141::i;:::-;2715:37;;-1:-1:-1;;;2715:37:5;;;;;7701:25:149;;;2746:4:5;7742:18:149;;;7735:60;2715:5:5;-1:-1:-1;;;;;2715:13:5;;;;7674:18:149;;2715:37:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2700:52;;2779:16;:14;:16::i;:::-;2766:29;;2402:924;;;3049:7;;-1:-1:-1;3131:141:5;-1:-1:-1;;;;;3145:5:5;3131:38;3187:10;3223:4;3049:7;3131:38;:141::i;:::-;3299:16;:14;:16::i;:::-;3286:29;;2402:924;2227:1105;;;;;:::o;4023:611:43:-;4254:20;;4363:35;:17;4389:8;4363:25;:35::i;:::-;4351:47;-1:-1:-1;4484:143:43;4561:52;4589:23;150:4:42;4599:12:43;4589:9;:23::i;:::-;4568:15;:4;4581:1;4568:12;:15::i;:::-;4562:21;;150:4:42;4562:21:43;:::i;:::-;4561:27;;:52::i;:::-;4484:51;:18;4511:23;4484:26;:51::i;:143::-;4465:162;4023:611;-1:-1:-1;;;;;;;4023:611:43:o;5789:316:37:-;5906:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;5906:23:37;;;;;;;;;:33;;5933:6;;5906:19;:33;;5933:6;;5906:33;:::i;:::-;;;;-1:-1:-1;;5949:21:37;;;;:12;:21;;;;;:31;;5974:6;;5949:21;:31;;5974:6;;5949:31;:::i;:::-;;;;-1:-1:-1;;6039:59:37;;;1264:25:149;;;1320:2;1305:18;;1298:34;;;-1:-1:-1;;;;;6039:59:37;;;6074:1;;6054:10;;6039:59;;1237:18:149;6039:59:37;1090:248:149;7453:253:33;7613:12;:26;7657:28;;7511:7;;7549:150;;-1:-1:-1;;;;;7613:26:33;;;;7657:28;;7549:46;:150::i;2254:774:43:-;2482:11;2718:17;2738:150;2770:23;2807:13;2834:18;2866:12;2738:18;:150::i;:::-;2718:170;-1:-1:-1;2917:104:43;2960:47;2718:170;2979:17;2998:8;2960:18;:47::i;:::-;2918:15;2924:9;150:4:42;2918:15:43;:::i;:::-;2917:25;;:104::i;7894:1001:33:-;8008:53;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8008:53:33;8092:796;;;;;;;;8155:12;:26;-1:-1:-1;;;;;8155:26:33;;;8092:796;;8212:28;;;;8092:796;;;;-1:-1:-1;;;8268:25:33;;;;;8092:796;;;;;;;;;;;;;8363:18;8092:796;;;;8417:21;8092:796;;;;8465:12;8092:796;;;;8509:29;;;;8092:796;;;;8625:36;;8092:796;;8155:26;8092:796;;;8578:97;;8625:36;8578:29;:97::i;:::-;8092:796;;8708:30;;-1:-1:-1;;;;;;;;8708:30:33;;;;;;8092:796;;;;8826:37;;8092:796;;;;;8779:98;;8826:37;;;8779:29;:98::i;:::-;8092:796;;8077:811;7894:1001;-1:-1:-1;;7894:1001:33:o;20164:5466:43:-;20267:7;20417:20;20575:106;20630:7;:33;;;20575:7;:25;;;:33;;:106;;;;:::i;:::-;20493:32;;;;20460:24;;;;:66;;:32;:66::i;:::-;20440:255;;;;:::i;:::-;20417:278;;20705:30;20738:113;20783:7;:21;;;20818:7;:23;;;20738:31;:113::i;:::-;20705:146;;20881:1;20865:13;:17;20861:3671;;;21550:21;21574:291;21623:22;21663:7;:20;;;21701:7;:28;;;21753:7;:19;;;150:4:42;21747:25:43;;;;:::i;:::-;21790:7;:18;;;21826:7;:25;;;21574:31;:291::i;:::-;21550:315;-1:-1:-1;21895:41:43;21550:315;21921:13;21895:17;:41::i;:::-;21879:57;-1:-1:-1;22005:17:43;;22001:565;;22180:371;22276:22;22324:7;:20;;;22370:13;22415:7;:19;;;150:4:42;22409:25:43;;;;:::i;:::-;22460:7;:18;;;22504:7;:25;;;22180:70;:371::i;:::-;22155:396;;:7;;:396;;;;;:::i;:::-;;;-1:-1:-1;22001:565:43;20884:1692;20861:3671;;;22602:1;22586:13;:17;22582:1950;;;23407:14;23408:13;23407:14;:::i;:::-;23391:30;;23482:21;23506:244;23554:22;23594:7;:20;;;23638:7;:19;;;150:4:42;23632:25:43;;;;:::i;:::-;23675:7;:18;;;23711:7;:25;;;23506:30;:244::i;:::-;23482:268;-1:-1:-1;23780:41:43;23482:268;23806:13;23780:17;:41::i;:::-;23764:57;-1:-1:-1;23886:17:43;;23882:563;;24061:369;24155:22;24203:7;:20;;;24249:13;24294:7;:19;;;150:4:42;24288:25:43;;;;:::i;:::-;24339:7;:18;;;24383:7;:25;;;24061:68;:369::i;:::-;24036:394;;:7;;:394;;;;;:::i;:::-;;;-1:-1:-1;23882:563:43;24483:38;24508:13;24491;24483:38;:::i;:::-;24458:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;22582:1950:43;24665:19;24899:153;24962:7;:32;;;150:4:42;24956:38:43;;;;:::i;:::-;25016:18;;;;24899:24;;;;;:153;:35;:153::i;:::-;24707:143;24767:7;:33;;;150:4:42;24761:39:43;;;;:::i;:::-;24818:18;;;;24707:25;;;;;:143;:36;:143::i;:::-;24687:379;;;;:::i;:::-;24665:401;;25076:27;25150:12;25113:7;:21;;;25106:56;;;;:::i;:::-;25076:86;;25206:7;:28;;;25176:20;:59;25172:131;;;25258:34;;-1:-1:-1;;;25258:34:43;;;;;;;;;;;25172:131;25312:53;;;25595:28;;;;25571:52;;25344:20;25571:52;:::i;:::-;25564:59;20164:5466;-1:-1:-1;;;;;;20164:5466:43:o;16102:3325:35:-;16285:19;16308:1;16285:24;16281:61;;16102:3325;:::o;16281:61::-;16573:12;:26;-1:-1:-1;;;;;16573:26:35;16629:21;16613:37;;16609:109;;;16673:34;;-1:-1:-1;;;16673:34:35;;;;;;;;;;;16609:109;16887:27;16917:55;16953:19;16924:13;16917:55;:::i;:::-;16887:85;;17016:21;16986:20;:52;16982:124;;;17061:34;;-1:-1:-1;;;17061:34:35;;;;;;;;;;;16982:124;17144:41;17152:20;17144:39;:41::i;:::-;17115:12;:70;;-1:-1:-1;;;;;;17115:70:35;-1:-1:-1;;;;;17115:70:35;;;;;;;;;;17761:28;;-1:-1:-1;;17761:28:35;;17803:20;;;17799:488;;17888:139;17896:20;17958:15;17996:13;17888:40;:139::i;:::-;17839:202;;17799:488;;;18122:140;18192:16;18193:15;18192:16;:::i;:::-;18130:20;;18231:13;18122:40;:140::i;:::-;18097:179;;;:::i;:::-;18072:204;;17799:488;18327:33;:22;:31;:33::i;:::-;18296:28;:64;;-1:-1:-1;;;;;;18296:64:35;-1:-1:-1;;;;;18296:64:35;;;;;;-1:-1:-1;19202:25:35;19000:420;;:395;;-1:-1:-1;;;19202:25:35;;;19245:136;19313:13;19348:15;19245:46;:136::i;:::-;19000:160;19085:20;19124:22;19000:59;:160::i;:420::-;18972:12;:448;;-1:-1:-1;;;;;18972:448:35;;;-1:-1:-1;;;18972:448:35;;;;;;;;;-1:-1:-1;;;;;16102:3325:35:o;2164:165:42:-;2226:7;2253:22;2264:1;2267:4;2273:1;2253:10;:22::i;20147:2546:35:-;20372:21;20395:7;20404;20761:59;20823:35;20846:11;20823:22;:35::i;:::-;20761:97;;20868:28;20899:66;20949:6;20899:36;:66::i;:::-;20868:97;;20991:45;21019:16;:14;:16::i;:::-;20991:27;:45::i;:::-;20975:61;-1:-1:-1;21062:55:35;20975:61;21087:7;21096:20;21062:24;:55::i;:::-;21046:71;-1:-1:-1;21127:40:35;21144:22;21046:71;21144:22;:::i;:::-;21127:16;:40::i;:::-;21200:12;:26;-1:-1:-1;;;;;21200:26:35;;;21177:49;;21261:28;;;;21236:22;;;:53;-1:-1:-1;;;21321:25:35;;;;21299:19;;;:47;21200:26;21385:66;21177:6;21385:36;:66::i;:::-;21356:95;-1:-1:-1;21725:23:35;21771:67;:14;21356:95;21817:20;21771:25;:67::i;:::-;21725:123;-1:-1:-1;21878:40:35;21910:7;21885:14;21878:40;:::i;:::-;21858:60;;;;:::i;:::-;;;21951:1;21932:16;:20;21928:677;;;22125:29;22157:121;22214:17;22215:16;22214:17;:::i;:::-;22157:20;;22250:14;22157:31;:121::i;:::-;22125:153;-1:-1:-1;22292:38:35;22125:153;22292:38;;:::i;:::-;;;22344:47;22368:21;22344:16;:47::i;:::-;22405:152;22447:21;22486:28;22532:11;22405:24;:152::i;:::-;22571:23;;;21954:651;21928:677;22646:16;-1:-1:-1;22665:20:35;;-1:-1:-1;;;20147:2546:35;;;;;;;;;:::o;19272:4635:36:-;19456:25;19495:21;19530:26;19570:23;19607:27;19648:26;20322:21;20346:38;20370:13;20346:23;:38::i;:::-;20322:62;;20452:337;20524:25;:23;:25::i;:::-;20571:12;:25;-1:-1:-1;;;20571:25:36;;-1:-1:-1;;;;;20571:25:36;20618:11;20651:13;20686:12;20720:11;20753:18;20452:50;:337::i;:::-;20398:391;;-1:-1:-1;20398:391:36;-1:-1:-1;20398:391:36;-1:-1:-1;21030:16:36;;;21109:199;21160:25;:23;:25::i;21109:199::-;21089:219;;21492:154;21534:11;21563:13;21594:9;21621:11;21492:24;:154::i;:::-;21322:324;-1:-1:-1;21322:324:36;;-1:-1:-1;21322:324:36;;-1:-1:-1;21881:27:36;;-1:-1:-1;21322:324:36;;-1:-1:-1;21881:27:36;;:::i;:::-;;-1:-1:-1;22119:18:36;22130:7;22119:8;:18;:::i;:::-;22102:35;;;;:::i;:::-;;-1:-1:-1;22521:34:36;22537:18;22102:35;22521:34;:::i;:::-;22500:55;;19887:2679;;;;23013:887;23074:13;23101:18;23133:15;23162:18;23641:12;:47;23670:17;23654:13;:33;;;;:::i;:::-;23641:47;;;;;;;;;;;-1:-1:-1;23641:47:36;:58;-1:-1:-1;;;;;23641:58:36;23733:15;:31;-1:-1:-1;23733:118:36;;23813:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;23813:38:36;23733:118;;;23783:11;23733:118;23886:4;23013:47;:887::i;:::-;19272:4635;;22846:1054;;-1:-1:-1;22846:1054:36;;-1:-1:-1;22846:1054:36;-1:-1:-1;22846:1054:36;;-1:-1:-1;19272:4635:36;-1:-1:-1;;;;19272:4635:36:o;12007:2273::-;12270:29;;-1:-1:-1;;;;;12270:29:36;12407:335;:306;12270:29;12582:20;:13;12598:4;12582:20;:::i;:::-;12432:36;;-1:-1:-1;;;;;12432:36:36;;12407:306;12657:11;12690:5;12407:114;:306::i;:335::-;12368:36;:374;;-1:-1:-1;;;;;;12368:374:36;-1:-1:-1;;;;;12368:374:36;;;;;;;;;;12896:23;:11;:21;:23::i;:::-;12860:59;;:17;:59;:::i;:::-;12812:29;:107;;-1:-1:-1;;;;;;12812:107:36;-1:-1:-1;;;;;12812:107:36;;;;;;;;;;-1:-1:-1;13481:31:36;:19;:29;:31::i;:::-;13451:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;13451:61:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13451:61:36;;;;;-1:-1:-1;;;;;13451:61:36;;;;;;13554:32;:21;:30;:32::i;:::-;13522:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13522:64:36;;;;;;;-1:-1:-1;;;;;13522:64:36;;;;;;13625:30;:18;:28;:30::i;:::-;13596:12;:59;;:25;;:59;;;;-1:-1:-1;;;13596:59:36;;-1:-1:-1;;;;;13596:59:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13596:59:36;;;;;;;;;;;;;;;-1:-1:-1;14044:26:36;14074:21;14044:26;;14036:59;;-1:-1:-1;14036:59:36;:161;;-1:-1:-1;14169:28:36;;:12;14126:26;14169:28;;;;;-1:-1:-1;;;;;14126:26:36;;;14111:86;14036:161;14019:255;;;14229:34;;-1:-1:-1;;;14229:34:36;;;;;;;;;;;8075:2095:34;8252:21;;8535:32;:11;8555;8535:19;:32::i;:::-;8519:48;-1:-1:-1;8577:15:34;8595:31;8519:48;8617:8;8595:21;:31::i;:::-;8577:49;-1:-1:-1;8652:31:34;8577:49;8668:14;8652:15;:31::i;:::-;8636:47;;9110:7;9106:557;;;9150:23;9160:13;9150:7;:23;:::i;:::-;9133:40;;;;:::i;:::-;;;9106:557;;;9629:23;9639:13;9629:7;:23;:::i;:::-;9612:40;;;;:::i;:::-;;;9106:557;9876:15;9862:11;:29;9858:306;;;9923:100;:13;9965:11;9994:15;9923:24;:100::i;:::-;9907:116;-1:-1:-1;10053:100:34;:13;10095:11;10124:15;10053:24;:100::i;:::-;10037:116;;9858:306;8298:1872;8075:2095;;;;;;;:::o;14245:490:33:-;14401:25;;14340:18;;;;14393:77;;-1:-1:-1;;;14401:25:33;;-1:-1:-1;;;;;14401:25:33;14449:11;14393:42;:77::i;:::-;14370:100;-1:-1:-1;14513:36:33;14528:21;14370:100;14513:36;:::i;:::-;14484:12;:26;-1:-1:-1;;;;;14484:26:33;:65;14480:222;;;14594:12;:26;14670:21;;14594:57;;14639:12;;-1:-1:-1;;;;;14594:26:33;:57;:::i;:::-;:97;;;;:::i;:::-;14565:126;;14480:222;14711:17;14245:490;;;:::o;25953:1730:35:-;26646:25;26690:1;26674:13;:17;:122;;26782:14;26674:122;;;26706:61;:14;26732:19;26753:13;26706:25;:61::i;:::-;26646:150;;26810:17;26831:1;26810:22;26806:35;;26834:7;;;26806:35;27049:17;27109:19;27142:48;;;27138:274;;;27223:28;;-1:-1:-1;27290:111:35;:19;27223:28;27370:17;27290:30;:111::i;:::-;27265:136;;27138:274;27454:26;:14;:24;:26::i;:::-;27421:13;:59;;:29;;:59;;;;-1:-1:-1;;;;;27421:59:35;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27421:59:35;;;;;-1:-1:-1;;;;;27421:59:35;;;;;;27516:34;:22;:32;:34::i;:::-;27490:13;:60;;:22;;:60;;;;-1:-1:-1;;;27490:60:35;;-1:-1:-1;;;;;27490:60:35;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27490:60:35;;;;;-1:-1:-1;;;;;27490:60:35;;;;;;27627:49;27652:22;27644:31;;;:::i;27627:49::-;26149:1534;;;25953:1730;;;;:::o;5982:368:33:-;6075:21;6108:24;6135:19;:17;:19::i;:::-;6108:46;;6196:16;6180:13;:32;:95;;6274:1;6180:95;;;6227:32;6243:16;6227:13;:32;:::i;:::-;6164:111;-1:-1:-1;6301:42:33;6164:111;6325:17;6301:23;:42::i;13107:1882:43:-;13439:23;;;14115:100;14150:30;14156:24;150:4:42;14150:30:43;:::i;:::-;14115:10;;14194:11;14115:21;:100::i;:::-;14100:115;-1:-1:-1;14242:44:43;:10;14261:24;14242:18;:44::i;:::-;14225:61;-1:-1:-1;14300:18:43;;14296:687;;14452:475;14517:23;14558:13;14589:14;14830:18;14836:12;150:4:42;14830:18:43;:::i;:::-;14866:11;14895:18;14452:47;:475::i;:::-;14434:493;-1:-1:-1;14941:31:43;14434:493;14941:31;;:::i;:::-;;;14296:687;13107:1882;;;;;;;;;;;:::o;1246:449::-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;6077:213::-;6210:7;6242:41;6258:24;6264:18;150:4:42;6258:24:43;:::i;:::-;6242:9;;:15;:41::i;:::-;6236:47;;150:4:42;6236:47:43;:::i;9370:678:33:-;9526:4;9751:23;9777:216;9852:16;9824:25;:23;:25::i;:::-;:44;;;;:::i;:::-;9882:12;:25;:43;;9910:15;;-1:-1:-1;;;9882:25:33;;-1:-1:-1;;;;;9882:25:33;:43;:::i;:::-;9939:18;9971:12;9777:33;:216::i;:::-;-1:-1:-1;;;;9370:678:33;-1:-1:-1;;;;9370:678:33:o;17620:2583::-;17844:21;;;;;18810:141;18913:24;18939:11;18810:78;18880:7;18810:48;18841:16;18847:10;150:4:42;18841:16:33;:::i;:::-;18810:9;;:30;:48::i;:141::-;18794:157;-1:-1:-1;19163:37:33;18794:157;19185:14;19163:21;:37::i;:::-;19142:58;-1:-1:-1;19641:12:33;19656:97;19688:30;19694:24;150:4:42;19688:30:33;:::i;:::-;19656:7;;19732:11;19656:18;:97::i;:::-;19641:112;-1:-1:-1;19778:22:33;19641:112;19791:8;19778:12;:22::i;:::-;19763:37;-1:-1:-1;20007:36:33;19763:37;20028:14;20007:20;:36::i;:::-;19987:56;-1:-1:-1;20158:38:33;19987:56;20158:18;:38;:::i;:::-;20137:59;;18106:2097;17620:2583;;;;;;;;;:::o;26993:1230:43:-;27235:21;;27577:186;27613:16;27719:34;:15;27741:11;27719:21;:34::i;:::-;27577:11;;:186;:22;:186::i;:::-;27556:207;-1:-1:-1;27984:45:43;:11;28007:8;28017:11;27984:22;:45::i;:::-;27970:59;;;;:::i;:::-;;;28057:12;28044:10;:25;28040:147;;;28151:25;28164:12;28151:10;:25;:::i;:::-;28135:41;;28040:147;28196:20;26993:1230;;;;;;;;:::o;16838:2717::-;17138:7;17147;17156;17165:6;17173:7;18107:27;18167:15;18148:16;:34;18144:1219;;;18383:7;18379:181;;;18427:118;:14;18474:16;18512:15;18427:25;:118::i;:::-;18410:135;;18379:181;18635:111;:19;18683:16;18717:15;18635:30;:111::i;:::-;18613:133;-1:-1:-1;18854:70:43;18907:16;18613:133;18854:70;:::i;:::-;18815:109;-1:-1:-1;18957:108:43;:16;19002;19036:15;18957:27;:108::i;:::-;18938:127;-1:-1:-1;19101:111:43;:19;19149:16;19183:15;19101:30;:111::i;:::-;19079:133;;18144:1219;;;19282:70;19335:16;19289:19;19282:70;:::i;:::-;19243:109;;18144:1219;19394:14;;19422:19;;19455:16;;16838:2717;-1:-1:-1;;;;;;;;16838:2717:43:o;13533:678:42:-;13727:15;13758:9;13754:451;;;13793:152;13900:27;13915:12;13900;:27;:::i;:::-;13843:28;:12;13864:6;13843:20;:28::i;:::-;13794:30;:12;13815:8;13794:20;:30::i;:::-;:77;;;;:::i;:::-;13793:85;;:152::i;:::-;13783:162;;13754:451;;;13996:12;13980;:28;13976:42;;-1:-1:-1;14017:1:42;14010:8;;13976:42;14042:152;14149:27;14164:12;14149;:27;:::i;:::-;14092:28;:12;14113:6;14092:20;:28::i;:::-;14043:30;:12;14064:8;14043:20;:30::i;:::-;:77;;;;:::i;994:219:44:-;1045:8;-1:-1:-1;;;;;;1071:21:44;;;;;:46;;-1:-1:-1;;;;;;1096:21:44;;;1071:46;1065:119;;1141:32;;-1:-1:-1;;;1141:32:44;;;;;;;;;;;15212:101:42;15268:6;15297:1;15293;:5;:13;;15305:1;15293:13;;14938:101;14994:6;15023:1;15019;:5;:13;;15031:1;15019:13;;1328:1616:88;1466:12;1636:4;1630:11;-1:-1:-1;;;1759:17:88;1752:93;1892:4;1888:1;1869:17;1865:25;1858:39;1976:2;1971;1952:17;1948:26;1941:38;2056:6;2051:2;2032:17;2028:26;2021:42;2860:2;2857:1;2852:3;2833:17;2830:1;2823:5;2816;2811:52;2379:16;2372:24;2366:2;2348:16;2345:24;2341:1;2337;2331:8;2328:15;2324:46;2321:76;2121:756;2110:767;;;2905:7;2897:40;;;;-1:-1:-1;;;2897:40:88;;8370:2:149;2897:40:88;;;8352:21:149;8409:2;8389:18;;;8382:30;-1:-1:-1;;;8428:18:149;;;8421:50;8488:18;;2897:40:88;8168:344:149;4098:115:42;4158:7;4185:20;4194:1;4197:4;4203:1;4185:8;:20::i;4628:840::-;4686:7;4752:1;4757;4752:6;4748:47;;-1:-1:-1;150:4:42;4774:10;;4748:47;4848:1;4853;4848:6;4844:45;;-1:-1:-1;4877:1:42;4870:8;;4844:45;5052:1;5027:15;5230:14;5241:1;5230:3;:14::i;:::-;5217:27;-1:-1:-1;5322:18:42;;;5359:19;150:4;5322:18;5359:19;:::i;:::-;;;5451:9;5455:4;5451:3;:9::i;28808:340:43:-;28943:7;;28994:53;29031:16;29001:14;28994:53;:::i;:::-;28962:85;;29091:1;29065:22;:27;;29057:36;;;;;2683:748:42;2797:9;3062:1;-1:-1:-1;;3045:19:42;3042:1;3039:26;3036:1;3032:34;3025:42;3012:11;3008:60;2981:146;;3111:1;3108;3101:12;2981:146;-1:-1:-1;3378:9:42;;3325:27;;;3322:34;;3374:27;;;3301:114;;2683:748::o;6550:386:33:-;6649:21;6682:24;150:4:42;6709:19:33;:17;:19::i;:::-;:25;;;;:::i;:::-;6682:52;;6776:16;6760:13;:32;:95;;6854:1;6760:95;;;6807:32;6823:16;6807:13;:32;:::i;:::-;6744:111;-1:-1:-1;6881:48:33;6905:23;150:4:42;6905:17:33;:23;:::i;:::-;6882:13;;6881:23;:48::i;12090:1116:45:-;12263:7;12703:9;12715:21;12721:1;12724;12727;12730;12733:2;12715:5;:21::i;:::-;12703:33;-1:-1:-1;12746:16:45;12769:37;12780:21;12799:1;12780:14;:2;12789:4;12780:8;:14::i;:21::-;12769:1;;12803:2;12769:10;:37::i;:::-;12765:41;;:1;:41;:::i;:::-;12746:60;;150:4:42;12820:8:45;:15;12816:295;;12934:28;12947:14;150:4:42;12959:1:45;12947:11;:14::i;:::-;12934:8;;:12;:28::i;:::-;12923:39;;12816:295;;;13074:26;13087:12;150:4:42;13097:1:45;13087:9;:12::i;13074:26::-;13063:37;;12816:295;13187:12;13198:1;13187:8;:12;:::i;:::-;13180:19;12090:1116;-1:-1:-1;;;;;;;;;12090:1116:45:o;14384:104:42:-;14442:7;14472:1;14468;:5;:13;;14480:1;14468:13;;7296:489:45;7485:14;7511:12;7553:140;7605:1;7620;7635:2;7651:1;7666;7681:2;7553:38;:140::i;:::-;7533:160;;-1:-1:-1;7533:160:45;-1:-1:-1;7533:160:45;7703:76;;7738:30;;-1:-1:-1;;;7738:30:45;;;;;;;;;;;10390:1124;10540:7;11028:9;11040:19;11044:1;11047;11050;11053;11056:2;11040:3;:19::i;:::-;11028:31;-1:-1:-1;11069:16:45;11088:28;150:4:42;11096:13:45;:1;11106:2;11096:9;:13::i;:::-;:19;;;;:::i;:::-;11088:1;;:7;:28::i;:::-;11069:47;;150:4:42;11130:8:45;:15;11126:293;;11241:26;11254:12;150:4:42;11264:1:45;11254:9;:12::i;11241:26::-;11230:37;;11126:293;;;11380:28;11393:14;150:4:42;11405:1:45;11393:11;:14::i;11380:28::-;11369:39;;11126:293;11495:12;11499:8;11495:1;:12;:::i;:::-;11488:19;10390:1124;-1:-1:-1;;;;;;;;10390:1124:45:o;3826:1099::-;4013:7;4169:9;4181:19;4185:1;4188;4191;4194;4197:2;4181:3;:19::i;:::-;4169:31;-1:-1:-1;4243:15:45;4256:1;4244:6;4248:2;4244:1;:6;:::i;4243:15::-;4239:19;-1:-1:-1;4414:10:45;4427:23;4444:2;4448:1;4428:5;4239:19;4428:1;:5;:::i;:::-;4427:16;:23;:16;:23::i;:::-;4414:36;;150:4:42;4464:2:45;:9;4460:261;;4562:20;4569:12;150:4:42;4579:1:45;4569:9;:12::i;4562:20::-;4557:25;;4460:261;;;4688:22;4695:14;150:4:42;4707:1:45;4695:11;:14::i;4688:22::-;4683:27;;4460:261;4803:12;:2;4812;4803:8;:12::i;:::-;4798:17;-1:-1:-1;4912:6:45;4917:1;4798:17;4912:6;:::i;24836:580:35:-;25007:20;25030:95;25080:35;25103:11;25080:22;:35::i;25030:95::-;25135:21;25159:34;;;:12;:34;;-1:-1:-1;;;;;;;;;;;25159:34:35;25007:118;;-1:-1:-1;25135:21:35;25159:77;;25208:28;;25159:77;:::i;:::-;25135:101;;25246:163;25285:19;25318:12;25344:13;25371:28;25246:25;:163::i;8791:1862:43:-;9121:23;;;9700:99;9734:30;9740:24;150:4:42;9734:30:43;:::i;9700:99::-;9684:115;-1:-1:-1;9813:28:43;;9809:838;;9929:43;:9;9947:24;9929:17;:43::i;:::-;9912:60;-1:-1:-1;10113:477:43;10180:23;10221:13;9912:60;10493:18;10499:12;150:4:42;10493:18:43;:::i;:::-;10529:11;10558:18;10113:49;:477::i;3707:115:42:-;3767:7;3794:20;3803:1;3806;3809:4;3794:8;:20::i;9583:3592::-;9628:8;9681:1;9676;:6;9672:60;;9691:41;;-1:-1:-1;;;9691:41:42;;;;;;;;;;;9672:60;-1:-1:-1;10698:2:42;-1:-1:-1;;;;;;;10109:1:42;10105:49;10212:9;;;10192:18;10189:33;10186:1;10182:41;10176:48;10274:9;;;10262:10;10259:25;10256:1;10252:33;10246:40;10332:9;;;10324:6;10321:21;10318:1;10314:29;10308:36;10388:9;;;10382:4;10379:19;10376:1;10372:27;;;10366:34;;;10443:9;;;10438:3;10435:18;10432:1;10428:26;10422:33;10498:9;;;10490:18;;;10487:1;10483:26;;;10477:33;;;10546:9;;;10538:18;;;10532:25;10728:3;:7;;;;;10714:22;;;;10761:17;;;11554:31;11550:35;;11605:5;;11604:13;;11621:32;11603:50;11673:5;;11672:13;;11689:33;11671:51;11742:5;;11741:13;;11758:33;11740:51;11811:5;;11810:13;;11827:33;11809:51;11880:5;;11879:13;;11896:32;11878:50;11948:5;;11947:13;;11964:30;11946:48;10951:31;10947:35;;11002:5;;11001:13;;11018:32;11000:50;11070:5;;11069:13;;11086:32;11068:50;11138:5;;11137:13;;-1:-1:-1;;11136:50:42;11206:5;;11205:13;;-1:-1:-1;;11204:50:42;11274:5;;11273:13;;;-1:-1:-1;;11272:50:42;11340:5;-1:-1:-1;;11340:46:42;12335:10;12725:43;12720:48;-1:-1:-1;;10694:6:42;;;;12848:71;:91;12827:112;13012:72;13007:77;13155:3;13149:9;;9583:3592::o;5724:3347::-;5770:8;-1:-1:-1;;5947:1:42;:26;5943:40;;-1:-1:-1;5982:1:42;;5724:3347;-1:-1:-1;5724:3347:42:o;5943:40::-;6182:21;6177:1;:26;6173:99;;6228:44;;-1:-1:-1;;;6228:44:42;;;;;;;;;;;6173:99;6545:7;6539:2;6534:7;;;6533:19;;-1:-1:-1;6881:8:42;6965:2;6905:29;6894:7;;;6893:41;-1:-1:-1;;;6893:51:42;6892:75;;6993:29;6989:33;;6985:37;;;-1:-1:-1;;7664:35:42;;7719:5;;7299:2;7718:13;;;7735:32;7717:50;7787:5;;7786:13;;-1:-1:-1;;7785:51:42;7856:5;;7855:13;;7872:34;7854:52;7926:5;;7925:13;;-1:-1:-1;;7924:53:42;7997:5;;7996:13;;8013:35;7995:53;7305:32;7238:31;7234:35;;7289:5;;7288:13;;7287:50;;;7362:5;;;-1:-1:-1;;7362:40:42;7422:5;7421:13;;;7438:35;7420:53;7491:5;;;-1:-1:-1;;;7491:50:42;8413:10;8950:49;8917:82;9032:3;:7;;;;8916:124;;;;;;-1:-1:-1;;5724:3347:42:o;14609:278:45:-;14749:7;14872:8;:1;14878;14872:5;:8::i;:::-;14831:38;14844:20;14862:1;14844:13;:2;14855:1;14844:10;:13::i;:20::-;14831:1;;14866:2;14831:12;:38::i;:::-;:49;;;;:::i;8539:1314::-;8732:14;8748:12;8909:9;8921:19;8925:1;8928;8931;8934;8937:2;8921:3;:19::i;:::-;8909:31;-1:-1:-1;8983:15:45;8996:1;8984:6;8988:2;8984:1;:6;:::i;8983:15::-;8979:19;;9080:1;9076;:5;9072:53;;;9105:1;9108:5;9097:17;;;;;;;9072:53;9280:10;9293:23;9310:2;9314:1;9294:5;9298:1;9294;:5;:::i;9293:23::-;9280:36;;150:4:42;9330:2:45;:9;9326:263;;9429:20;9436:12;150:4:42;9446:1:45;9436:9;:12::i;9429:20::-;9424:25;;9326:263;;;9556:22;9563:14;150:4:42;9575:1:45;9563:11;:14::i;9556:22::-;9551:27;;9326:263;9671:12;:2;9680;9671:8;:12::i;:::-;9666:17;;9779:2;9775:1;:6;9771:52;;;9806:6;9810:2;9806:1;:6;:::i;:::-;9797:15;;9771:52;9842:4;9832:14;;8762:1091;;8539:1314;;;;;;;;;;:::o;13771:272::-;13909:7;14028:8;:1;14034;14028:5;:8::i;:::-;13991:34;14002:18;14018:1;14002:11;:2;14011:1;14002:8;:11::i;:18::-;13991:1;;14022:2;13991:10;:34::i;14:139:149:-;-1:-1:-1;;;;;97:31:149;;87:42;;77:70;;143:1;140;133:12;158:270;232:6;285:2;273:9;264:7;260:23;256:32;253:52;;;301:1;298;291:12;253:52;340:9;327:23;359:39;392:5;359:39;:::i;433:155::-;493:5;538:2;529:6;524:3;520:16;516:25;513:45;;;554:1;551;544:12;593:492;697:6;705;713;766:2;754:9;745:7;741:23;737:32;734:52;;;782:1;779;772:12;734:52;818:9;805:23;795:33;;875:2;864:9;860:18;847:32;837:42;;930:2;919:9;915:18;902:32;957:18;949:6;946:30;943:50;;;989:1;986;979:12;943:50;1012:67;1071:7;1062:6;1051:9;1047:22;1012:67;:::i;:::-;1002:77;;;593:492;;;;;:::o;1343:561::-;1456:6;1464;1472;1480;1533:3;1521:9;1512:7;1508:23;1504:33;1501:53;;;1550:1;1547;1540:12;1501:53;1586:9;1573:23;1563:33;;1643:2;1632:9;1628:18;1615:32;1605:42;;1694:2;1683:9;1679:18;1666:32;1656:42;;1749:2;1738:9;1734:18;1721:32;1776:18;1768:6;1765:30;1762:50;;;1808:1;1805;1798:12;1762:50;1831:67;1890:7;1881:6;1870:9;1866:22;1831:67;:::i;:::-;1821:77;;;1343:561;;;;;;;:::o;2091:180::-;2150:6;2203:2;2191:9;2182:7;2178:23;2174:32;2171:52;;;2219:1;2216;2209:12;2171:52;-1:-1:-1;2242:23:149;;2091:180;-1:-1:-1;2091:180:149:o;2484:184::-;2554:6;2607:2;2595:9;2586:7;2582:23;2578:32;2575:52;;;2623:1;2620;2613:12;2575:52;-1:-1:-1;2646:16:149;;2484:184;-1:-1:-1;2484:184:149:o;3017:334::-;3219:2;3201:21;;;3258:2;3238:18;;;3231:30;-1:-1:-1;;;3292:2:149;3277:18;;3270:40;3342:2;3327:18;;3017:334::o;3488:127::-;3549:10;3544:3;3540:20;3537:1;3530:31;3580:4;3577:1;3570:15;3604:4;3601:1;3594:15;3620:200;-1:-1:-1;;;;;3756:10:149;;;3744;;;3740:27;;3779:12;;;3776:38;;;3794:18;;:::i;:::-;3776:38;3620:200;;;;:::o;4409:125::-;4474:9;;;4495:10;;;4492:36;;;4508:18;;:::i;4539:128::-;4606:9;;;4627:11;;;4624:37;;;4641:18;;:::i;5068:168::-;5141:9;;;5172;;5189:15;;;5183:22;;5169:37;5159:71;;5210:18;;:::i;5709:127::-;5770:10;5765:3;5761:20;5758:1;5751:31;5801:4;5798:1;5791:15;5825:4;5822:1;5815:15;5841:112;5873:1;5899;5889:35;;5904:18;;:::i;:::-;-1:-1:-1;5938:9:149;;5841:112::o;5958:273::-;6014:6;6067:2;6055:9;6046:7;6042:23;6038:32;6035:52;;;6083:1;6080;6073:12;6035:52;6122:9;6109:23;6175:5;6168:13;6161:21;6154:5;6151:32;6141:60;;6197:1;6194;6187:12;6616:197;-1:-1:-1;;;;;6738:10:149;;;6750;;;6734:27;;6773:11;;;6770:37;;;6787:18;;:::i;6818:245::-;6916:2;6886:17;;;6905;;;;6882:41;-1:-1:-1;;;;;6938:44:149;;-1:-1:-1;;;;;;6984:49:149;;6935:99;6932:125;;;7037:18;;:::i;7068:249::-;7168:2;7157:17;;;7138;;;;7134:41;-1:-1:-1;;;;;;7190:50:149;;-1:-1:-1;;;;;7242:45:149;;7187:101;7184:127;;;7291:18;;:::i;7322:200::-;7388:9;;;7361:4;7416:9;;7444:10;;7456:12;;;7440:29;7479:12;;;7471:21;;7437:56;7434:82;;;7496:18;;:::i;7806:136::-;7841:3;-1:-1:-1;;;7862:22:149;;7859:48;;7887:18;;:::i;:::-;-1:-1:-1;7927:1:149;7923:13;;7806:136::o;7947:216::-;8011:9;;;8039:11;;;7986:3;8069:9;;8097:10;;8093:19;;8122:10;;8114:19;;8090:44;8087:70;;;8137:18;;:::i;:::-;8087:70;;7947:216;;;;:::o;8517:193::-;8556:1;8582;8572:35;;8587:18;;:::i;:::-;-1:-1:-1;;;8623:18:149;;-1:-1:-1;;8643:13:149;;8619:38;8616:64;;;8660:18;;:::i;:::-;-1:-1:-1;8694:10:149;;8517:193::o",
    "linkReferences": {},
    "immutableReferences": {
      "2296": [
        {
          "start": 4912,
          "length": 32
        },
        {
          "start": 6306,
          "length": 32
        },
        {
          "start": 6508,
          "length": 32
        },
        {
          "start": 8530,
          "length": 32
        },
        {
          "start": 8680,
          "length": 32
        }
      ],
      "9215": [
        {
          "start": 8462,
          "length": 32
        }
      ],
      "9218": [
        {
          "start": 4655,
          "length": 32
        },
        {
          "start": 4836,
          "length": 32
        },
        {
          "start": 5039,
          "length": 32
        }
      ],
      "9221": [
        {
          "start": 1717,
          "length": 32
        },
        {
          "start": 2389,
          "length": 32
        },
        {
          "start": 2921,
          "length": 32
        },
        {
          "start": 4278,
          "length": 32
        },
        {
          "start": 5191,
          "length": 32
        },
        {
          "start": 5475,
          "length": 32
        },
        {
          "start": 7037,
          "length": 32
        },
        {
          "start": 7632,
          "length": 32
        },
        {
          "start": 10970,
          "length": 32
        },
        {
          "start": 12229,
          "length": 32
        },
        {
          "start": 13645,
          "length": 32
        }
      ],
      "9224": [
        {
          "start": 2422,
          "length": 32
        },
        {
          "start": 2954,
          "length": 32
        },
        {
          "start": 6684,
          "length": 32
        },
        {
          "start": 6828,
          "length": 32
        },
        {
          "start": 9321,
          "length": 32
        },
        {
          "start": 10789,
          "length": 32
        },
        {
          "start": 12532,
          "length": 32
        }
      ],
      "9227": [
        {
          "start": 6877,
          "length": 32
        },
        {
          "start": 12617,
          "length": 32
        }
      ],
      "9230": [
        {
          "start": 7159,
          "length": 32
        },
        {
          "start": 11587,
          "length": 32
        },
        {
          "start": 12739,
          "length": 32
        }
      ],
      "9233": [
        {
          "start": 11631,
          "length": 32
        },
        {
          "start": 12662,
          "length": 32
        },
        {
          "start": 12783,
          "length": 32
        }
      ],
      "9236": [
        {
          "start": 2355,
          "length": 32
        },
        {
          "start": 2888,
          "length": 32
        },
        {
          "start": 6718,
          "length": 32
        },
        {
          "start": 6795,
          "length": 32
        },
        {
          "start": 9245,
          "length": 32
        },
        {
          "start": 10823,
          "length": 32
        },
        {
          "start": 12499,
          "length": 32
        }
      ],
      "9239": [
        {
          "start": 2167,
          "length": 32
        },
        {
          "start": 2242,
          "length": 32
        },
        {
          "start": 2500,
          "length": 32
        },
        {
          "start": 9283,
          "length": 32
        },
        {
          "start": 10093,
          "length": 32
        },
        {
          "start": 10172,
          "length": 32
        },
        {
          "start": 11467,
          "length": 32
        },
        {
          "start": 11811,
          "length": 32
        },
        {
          "start": 11871,
          "length": 32
        }
      ],
      "9242": [
        {
          "start": 1520,
          "length": 32
        },
        {
          "start": 2791,
          "length": 32
        },
        {
          "start": 3278,
          "length": 32
        },
        {
          "start": 3583,
          "length": 32
        },
        {
          "start": 4089,
          "length": 32
        }
      ],
      "9262": [
        {
          "start": 411,
          "length": 32
        },
        {
          "start": 683,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": "9aa68462",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
    "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
    "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
    "sweep(address)": "01681a62"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"precisionThreshold\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__pool\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_withdrawalShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_lpShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of base to supply.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The number of LP tokens created.\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum amount of base the trader will accept.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of underlying the user receives.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of base tokens produced by closing this short.\"}},\"constructor\":{\"params\":{\"__pool\":\"The ERC4626 pool.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of base to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received.\",\"_1\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutput\":\"The minium amount of the base token to receive.        NOTE: This value is likely to be less than the amount LP shares        are worth. The remainder is in short and long withdraw shares        which are hard to game the value of.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The LP receives a         proportional amount of the pool's idle capital.\",\"_1\":\"The base that the LP receives buys out some of their LP shares,         but it may not be sufficient to fully buy the LP out. In this         case, the LP receives withdrawal shares equal in value to the         present value they are owed. As idle capital becomes available,         the pool will buy back these shares.\"}},\"sweep(address)\":{\"details\":\"WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The token to sweep.\"}}},\"title\":\"ERC4626Target1\",\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"################ ### SafeCast ### ################\"}]},\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"constructor\":{\"notice\":\"Initializes the target1 contract.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"sweep(address)\":{\"notice\":\"Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users.\"}},\"notice\":\"ERC4626Hyperdrive's target 1 logic contract. This contract contains         several stateful functions that couldn't fit into the Hyperdrive         contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/ERC4626Target1.sol\":\"ERC4626Target1\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x7d95b2b8abfdb4518963c0a06f568969b499f3e07fc7e42ff54722d42fae78c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0ee08b9c5ffcc231eeca7413e358bec99df0a6f2b8315463d64edacd2ba7f283\",\"dweb:/ipfs/QmfGFMnbvHcCh1YJ1KZEUiJucuJosaD9xbrURbg3rDenRG\"]},\"contracts/src/instances/ERC4626Base.sol\":{\"keccak256\":\"0x186f72e49a6542caa25f799fa9072c2b1b4a81cc7ab3475fbaad29fb56bb0229\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5dba800fe086f6ef89913f8a329887d4c9cb4d283be553e9534013882a7fcc44\",\"dweb:/ipfs/QmNts4c5uyZGmCjHeSREQpayigYkmro2xzRXVcSTqzH9r3\"]},\"contracts/src/instances/ERC4626Target1.sol\":{\"keccak256\":\"0xd6a108ba6a7dcaa55b87c379a5c399fca438c52f8147ddb3e6652b557bceb00a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fc7c66cd8cfbd2f12c1d1c39bebbd4087490ca751d9d04d5588534b55d4b5860\",\"dweb:/ipfs/QmNupRdKsNH3Wq5pwViGhvtwNGbp9rw5ursjnvNfE4zBXi\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780\",\"dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8\",\"dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb\",\"dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8\",\"dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc\",\"dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2\",\"dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7\",\"dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a\",\"dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb\",\"dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d\",\"dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db\",\"dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
                  "name": "precisionThreshold",
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
                }
              ]
            },
            {
              "internalType": "contract IERC4626",
              "name": "__pool",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BelowMinimumContribution"
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
          "name": "InvalidFeeAmounts"
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
          "name": "Unauthorized"
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
              "name": "_withdrawalShares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutputPerShare",
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
              "name": "_lpShares",
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
              "internalType": "contract IERC20",
              "name": "_target",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "sweep"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_contribution": "The amount of base to supply.",
              "_maxApr": "The maximum APR at which the LP is willing to supply.",
              "_minApr": "The minimum APR at which the LP is willing to supply.",
              "_options": "The options that configure how the operation is settled."
            },
            "returns": {
              "lpShares": "The number of LP tokens created."
            }
          },
          "checkpoint(uint256)": {
            "params": {
              "_checkpointTime": "The time of the checkpoint to create."
            }
          },
          "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_bondAmount": "The amount of longs to close.",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum amount of base the trader will accept.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "_0": "The amount of underlying the user receives."
            }
          },
          "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_bondAmount": "The amount of shorts to close.",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum output of this trade.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "_0": "The amount of base tokens produced by closing this short."
            }
          },
          "constructor": {
            "params": {
              "__pool": "The ERC4626 pool.",
              "_config": "The configuration of the Hyperdrive pool."
            }
          },
          "initialize(uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_apr": "The target APR.",
              "_contribution": "The amount of base to supply.",
              "_options": "The options that configure how the operation is settled."
            },
            "returns": {
              "lpShares": "The initial number of LP shares created."
            }
          },
          "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_minOutputPerShare": "The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.",
              "_options": "The options that configure how the operation is settled.",
              "_withdrawalShares": "The withdrawal shares to redeem."
            },
            "returns": {
              "_0": "The amount the LP received.",
              "_1": "The amount of withdrawal shares that were redeemed."
            }
          },
          "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_lpShares": "The LP shares to burn.",
              "_minOutput": "The minium amount of the base token to receive.        NOTE: This value is likely to be less than the amount LP shares        are worth. The remainder is in short and long withdraw shares        which are hard to game the value of.",
              "_options": "The options that configure how the operation is settled."
            },
            "returns": {
              "_0": "The amount the LP removing liquidity receives. The LP receives a         proportional amount of the pool's idle capital.",
              "_1": "The base that the LP receives buys out some of their LP shares,         but it may not be sufficient to fully buy the LP out. In this         case, the LP receives withdrawal shares equal in value to the         present value they are owed. As idle capital becomes available,         the pool will buy back these shares."
            }
          },
          "sweep(address)": {
            "details": "WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.",
            "params": {
              "_target": "The token to sweep."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows LPs to supply liquidity for LP shares."
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
          "constructor": {
            "notice": "Initializes the target1 contract."
          },
          "initialize(uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows the first LP to initialize the market with a target APR."
          },
          "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
            "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."
          },
          "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows an LP to burn shares and withdraw from the pool."
          },
          "sweep(address)": {
            "notice": "Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/instances/ERC4626Target1.sol": "ERC4626Target1"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/external/HyperdriveTarget1.sol": {
        "keccak256": "0x7d95b2b8abfdb4518963c0a06f568969b499f3e07fc7e42ff54722d42fae78c2",
        "urls": [
          "bzz-raw://0ee08b9c5ffcc231eeca7413e358bec99df0a6f2b8315463d64edacd2ba7f283",
          "dweb:/ipfs/QmfGFMnbvHcCh1YJ1KZEUiJucuJosaD9xbrURbg3rDenRG"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/ERC4626Base.sol": {
        "keccak256": "0x186f72e49a6542caa25f799fa9072c2b1b4a81cc7ab3475fbaad29fb56bb0229",
        "urls": [
          "bzz-raw://5dba800fe086f6ef89913f8a329887d4c9cb4d283be553e9534013882a7fcc44",
          "dweb:/ipfs/QmNts4c5uyZGmCjHeSREQpayigYkmro2xzRXVcSTqzH9r3"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/ERC4626Target1.sol": {
        "keccak256": "0xd6a108ba6a7dcaa55b87c379a5c399fca438c52f8147ddb3e6652b557bceb00a",
        "urls": [
          "bzz-raw://fc7c66cd8cfbd2f12c1d1c39bebbd4087490ca751d9d04d5588534b55d4b5860",
          "dweb:/ipfs/QmNupRdKsNH3Wq5pwViGhvtwNGbp9rw5ursjnvNfE4zBXi"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626.sol": {
        "keccak256": "0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf",
        "urls": [
          "bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc",
          "dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia"
        ],
        "license": "GPL-2.0-or-later"
      },
      "contracts/src/interfaces/IERC4626Hyperdrive.sol": {
        "keccak256": "0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312",
        "urls": [
          "bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780",
          "dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626HyperdriveCore.sol": {
        "keccak256": "0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9",
        "urls": [
          "bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8",
          "dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
        "keccak256": "0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e",
        "urls": [
          "bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb",
          "dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5",
        "urls": [
          "bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70",
          "dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d",
        "urls": [
          "bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85",
          "dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"
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
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad",
        "urls": [
          "bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6",
          "dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d",
        "urls": [
          "bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8",
          "dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb",
        "urls": [
          "bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f",
          "dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4",
        "urls": [
          "bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6",
          "dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveAdmin.sol": {
        "keccak256": "0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784",
        "urls": [
          "bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8",
          "dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646",
        "urls": [
          "bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc",
          "dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveCheckpoint.sol": {
        "keccak256": "0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57",
        "urls": [
          "bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2",
          "dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLP.sol": {
        "keccak256": "0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad",
        "urls": [
          "bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7",
          "dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLong.sol": {
        "keccak256": "0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543",
        "urls": [
          "bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a",
          "dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveMultiToken.sol": {
        "keccak256": "0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277",
        "urls": [
          "bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb",
          "dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveShort.sol": {
        "keccak256": "0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0",
        "urls": [
          "bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d",
          "dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveStorage.sol": {
        "keccak256": "0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148",
        "urls": [
          "bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db",
          "dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw"
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
        "keccak256": "0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639",
        "urls": [
          "bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d",
          "dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3",
        "urls": [
          "bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62",
          "dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx"
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
        "keccak256": "0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db",
        "urls": [
          "bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a",
          "dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH"
        ],
        "license": "Apache-2.0"
      },
      "lib/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/SafeTransferLib.sol": {
        "keccak256": "0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a",
        "urls": [
          "bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4",
          "dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/instances/ERC4626Target1.sol",
    "id": 2905,
    "exportedSymbols": {
      "ERC20": [
        60340
      ],
      "ERC4626Base": [
        2468
      ],
      "ERC4626Target1": [
        2904
      ],
      "HyperdriveTarget1": [
        1361
      ],
      "IERC20": [
        3030
      ],
      "IERC4626": [
        3255
      ],
      "IHyperdrive": [
        3759
      ],
      "SafeTransferLib": [
        60649
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:2681:10",
    "nodes": [
      {
        "id": 2803,
        "nodeType": "PragmaDirective",
        "src": "39:23:10",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 2805,
        "nodeType": "ImportDirective",
        "src": "64:49:10",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "solmate/tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2905,
        "sourceUnit": 60341,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2804,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 60340,
              "src": "73:5:10",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2807,
        "nodeType": "ImportDirective",
        "src": "114:68:10",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/SafeTransferLib.sol",
        "file": "solmate/utils/SafeTransferLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2905,
        "sourceUnit": 60650,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2806,
              "name": "SafeTransferLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 60649,
              "src": "123:15:10",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2809,
        "nodeType": "ImportDirective",
        "src": "183:70:10",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget1.sol",
        "file": "../external/HyperdriveTarget1.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2905,
        "sourceUnit": 1362,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2808,
              "name": "HyperdriveTarget1",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1361,
              "src": "192:17:10",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2811,
        "nodeType": "ImportDirective",
        "src": "254:50:10",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2905,
        "sourceUnit": 3031,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2810,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3030,
              "src": "263:6:10",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2813,
        "nodeType": "ImportDirective",
        "src": "305:54:10",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2905,
        "sourceUnit": 3256,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2812,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3255,
              "src": "314:8:10",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2815,
        "nodeType": "ImportDirective",
        "src": "360:60:10",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2905,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2814,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "369:11:10",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2817,
        "nodeType": "ImportDirective",
        "src": "421:48:10",
        "nodes": [],
        "absolutePath": "contracts/src/instances/ERC4626Base.sol",
        "file": "./ERC4626Base.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2905,
        "sourceUnit": 2469,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2816,
              "name": "ERC4626Base",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 2468,
              "src": "430:11:10",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2904,
        "nodeType": "ContractDefinition",
        "src": "917:1802:10",
        "nodes": [
          {
            "id": 2826,
            "nodeType": "UsingForDirective",
            "src": "981:32:10",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 2823,
              "name": "SafeTransferLib",
              "nameLocations": [
                "987:15:10"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60649,
              "src": "987:15:10"
            },
            "typeName": {
              "id": 2825,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 2824,
                "name": "ERC20",
                "nameLocations": [
                  "1007:5:10"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 60340,
                "src": "1007:5:10"
              },
              "referencedDeclaration": 60340,
              "src": "1007:5:10",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$60340",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "id": 2843,
            "nodeType": "FunctionDefinition",
            "src": "1174:139:10",
            "nodes": [],
            "body": {
              "id": 2842,
              "nodeType": "Block",
              "src": "1311:2:10",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 2827,
              "nodeType": "StructuredDocumentation",
              "src": "1019:150:10",
              "text": "@notice Initializes the target1 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __pool The ERC4626 pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 2836,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2830,
                    "src": "1282:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 2837,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2835,
                  "name": "HyperdriveTarget1",
                  "nameLocations": [
                    "1264:17:10"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1361,
                  "src": "1264:17:10"
                },
                "nodeType": "ModifierInvocation",
                "src": "1264:26:10"
              },
              {
                "arguments": [
                  {
                    "id": 2839,
                    "name": "__pool",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2833,
                    "src": "1303:6:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  }
                ],
                "id": 2840,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2838,
                  "name": "ERC4626Base",
                  "nameLocations": [
                    "1291:11:10"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2468,
                  "src": "1291:11:10"
                },
                "nodeType": "ModifierInvocation",
                "src": "1291:19:10"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 2834,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2830,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1225:7:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 2843,
                  "src": "1195:37:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 2829,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2828,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1195:11:10",
                        "1207:10:10"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "1195:22:10"
                    },
                    "referencedDeclaration": 3558,
                    "src": "1195:22:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2833,
                  "mutability": "mutable",
                  "name": "__pool",
                  "nameLocation": "1251:6:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 2843,
                  "src": "1242:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$3255",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 2832,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2831,
                      "name": "IERC4626",
                      "nameLocations": [
                        "1242:8:10"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3255,
                      "src": "1242:8:10"
                    },
                    "referencedDeclaration": 3255,
                    "src": "1242:8:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1185:78:10"
            },
            "returnParameters": {
              "id": 2841,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1311:0:10"
            },
            "scope": 2904,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 2903,
            "nodeType": "FunctionDefinition",
            "src": "2093:624:10",
            "nodes": [],
            "body": {
              "id": 2902,
              "nodeType": "Block",
              "src": "2133:584:10",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 2859,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 2853,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 2850,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2215:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2219:6:10",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2215:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 2852,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9262,
                        "src": "2229:13:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "2215:27:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 2858,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "2246:21:10",
                      "subExpression": {
                        "baseExpression": {
                          "id": 2854,
                          "name": "_pausers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9273,
                          "src": "2247:8:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 2857,
                        "indexExpression": {
                          "expression": {
                            "id": 2855,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2256:3:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2856,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2260:6:10",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2256:10:10",
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
                        "src": "2247:20:10",
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
                    "src": "2215:52:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2866,
                  "nodeType": "IfStatement",
                  "src": "2211:116:10",
                  "trueBody": {
                    "id": 2865,
                    "nodeType": "Block",
                    "src": "2269:58:10",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2860,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "2290:11:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2862,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2302:12:10",
                            "memberName": "Unauthorized",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3686,
                            "src": "2290:24:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2863,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2290:26:10",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2864,
                        "nodeType": "RevertStatement",
                        "src": "2283:33:10"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 2873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2404:31:10",
                    "subExpression": {
                      "baseExpression": {
                        "id": 2867,
                        "name": "_isSweepable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2301,
                        "src": "2405:12:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 2872,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 2870,
                            "name": "_target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2847,
                            "src": "2426:7:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$3030",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$3030",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 2869,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2418:7:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 2868,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2418:7:10",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 2871,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2418:16:10",
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
                      "src": "2405:30:10",
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
                  "id": 2880,
                  "nodeType": "IfStatement",
                  "src": "2400:99:10",
                  "trueBody": {
                    "id": 2879,
                    "nodeType": "Block",
                    "src": "2437:62:10",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2874,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "2458:11:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2876,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2470:16:10",
                            "memberName": "UnsupportedToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3663,
                            "src": "2458:28:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2877,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2458:30:10",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2878,
                        "nodeType": "RevertStatement",
                        "src": "2451:37:10"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    2882
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2882,
                      "mutability": "mutable",
                      "name": "balance",
                      "nameLocation": "2598:7:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 2902,
                      "src": "2590:15:10",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2881,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2590:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2890,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 2887,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2634:4:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626Target1_$2904",
                              "typeString": "contract ERC4626Target1"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626Target1_$2904",
                              "typeString": "contract ERC4626Target1"
                            }
                          ],
                          "id": 2886,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2626:7:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 2885,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2626:7:10",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 2888,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2626:13:10",
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
                        "id": 2883,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2847,
                        "src": "2608:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$3030",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 2884,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2616:9:10",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2991,
                      "src": "2608:17:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 2889,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2608:32:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2590:50:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2898,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9262,
                        "src": "2687:13:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2899,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2882,
                        "src": "2702:7:10",
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
                                "id": 2894,
                                "name": "_target",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2847,
                                "src": "2664:7:10",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3030",
                                  "typeString": "contract IERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IERC20_$3030",
                                  "typeString": "contract IERC20"
                                }
                              ],
                              "id": 2893,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2656:7:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 2892,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2656:7:10",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 2895,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2656:16:10",
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
                          "id": 2891,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60340,
                          "src": "2650:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$60340_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 2896,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2650:23:10",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$60340",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 2897,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2674:12:10",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 60628,
                      "src": "2650:36:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$60340_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$60340_$",
                        "typeString": "function (contract ERC20,address,uint256)"
                      }
                    },
                    "id": 2900,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2650:60:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2901,
                  "nodeType": "ExpressionStatement",
                  "src": "2650:60:10"
                }
              ]
            },
            "documentation": {
              "id": 2844,
              "nodeType": "StructuredDocumentation",
              "src": "1339:749:10",
              "text": "@notice Some yield sources [eg Morpho] pay rewards directly to this\n         contract but we can't handle distributing them internally so we\n         sweep to the fee collector address to then redistribute to users.\n @dev WARN: The entire balance of any of the sweep targets can be swept\n      by governance. If these sweep targets provide access to the base or\n      pool token, then governance has the ability to rug the pool.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transferFrom'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address.\n @param _target The token to sweep."
            },
            "functionSelector": "01681a62",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sweep",
            "nameLocation": "2102:5:10",
            "parameters": {
              "id": 2848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2847,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "2115:7:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 2903,
                  "src": "2108:14:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$3030",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 2846,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2845,
                      "name": "IERC20",
                      "nameLocations": [
                        "2108:6:10"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3030,
                      "src": "2108:6:10"
                    },
                    "referencedDeclaration": 3030,
                    "src": "2108:6:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$3030",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2107:16:10"
            },
            "returnParameters": {
              "id": 2849,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2133:0:10"
            },
            "scope": 2904,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 2819,
              "name": "HyperdriveTarget1",
              "nameLocations": [
                "944:17:10"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1361,
              "src": "944:17:10"
            },
            "id": 2820,
            "nodeType": "InheritanceSpecifier",
            "src": "944:17:10"
          },
          {
            "baseName": {
              "id": 2821,
              "name": "ERC4626Base",
              "nameLocations": [
                "963:11:10"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2468,
              "src": "963:11:10"
            },
            "id": 2822,
            "nodeType": "InheritanceSpecifier",
            "src": "963:11:10"
          }
        ],
        "canonicalName": "ERC4626Target1",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 2818,
          "nodeType": "StructuredDocumentation",
          "src": "471:446:10",
          "text": "@author DELV\n @title ERC4626Target1\n @notice ERC4626Hyperdrive's target 1 logic contract. This contract contains\n         several stateful functions that couldn't fit into the Hyperdrive\n         contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          2904,
          2468,
          1361,
          5801,
          9192,
          7805,
          6967,
          8158,
          4506,
          5354,
          9465,
          60564
        ],
        "name": "ERC4626Target1",
        "nameLocation": "926:14:10",
        "scope": 2905,
        "usedErrors": [
          3615,
          3619,
          3623,
          3625,
          3631,
          3633,
          3635,
          3637,
          3641,
          3643,
          3647,
          3649,
          3651,
          3653,
          3663,
          3667,
          3686,
          3730,
          3733,
          3735,
          3742,
          3745,
          3747
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 10
} as const;
