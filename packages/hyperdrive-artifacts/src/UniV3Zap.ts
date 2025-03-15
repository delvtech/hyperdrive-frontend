export const UniV3Zap = {
  name: 'UniV3Zap' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_swapRouter",
        "type": "address",
        "internalType": "contract ISwapRouter"
      },
      {
        "name": "_weth",
        "type": "address",
        "internalType": "contract IWETH"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "addLiquidityZap",
    "inputs": [
      {
        "name": "_hyperdrive",
        "type": "address",
        "internalType": "contract IHyperdrive"
      },
      {
        "name": "_minLpSharePrice",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minApr",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_maxApr",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_hyperdriveOptions",
        "type": "tuple",
        "internalType": "struct IHyperdrive.Options",
        "components": [
          {
            "name": "destination",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asBase",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "extraData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "name": "_zapInOptions",
        "type": "tuple",
        "internalType": "struct IUniV3Zap.ZapInOptions",
        "components": [
          {
            "name": "swapParams",
            "type": "tuple",
            "internalType": "struct ISwapRouter.ExactInputParams",
            "components": [
              {
                "name": "path",
                "type": "bytes",
                "internalType": "bytes"
              },
              {
                "name": "recipient",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "deadline",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "amountIn",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "amountOutMinimum",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "sourceAsset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "sourceAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shouldWrap",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "isRebasing",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "lpShares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "closeLongZap",
    "inputs": [
      {
        "name": "_hyperdrive",
        "type": "address",
        "internalType": "contract IHyperdrive"
      },
      {
        "name": "_maturityTime",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_bondAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minOutput",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_options",
        "type": "tuple",
        "internalType": "struct IHyperdrive.Options",
        "components": [
          {
            "name": "destination",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asBase",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "extraData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "name": "_swapParams",
        "type": "tuple",
        "internalType": "struct ISwapRouter.ExactInputParams",
        "components": [
          {
            "name": "path",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "deadline",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountIn",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountOutMinimum",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "_shouldWrap",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "proceeds",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "closeShortZap",
    "inputs": [
      {
        "name": "_hyperdrive",
        "type": "address",
        "internalType": "contract IHyperdrive"
      },
      {
        "name": "_maturityTime",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_bondAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minOutput",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_options",
        "type": "tuple",
        "internalType": "struct IHyperdrive.Options",
        "components": [
          {
            "name": "destination",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asBase",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "extraData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "name": "_swapParams",
        "type": "tuple",
        "internalType": "struct ISwapRouter.ExactInputParams",
        "components": [
          {
            "name": "path",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "deadline",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountIn",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountOutMinimum",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "_shouldWrap",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "proceeds",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "kind",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "openLongZap",
    "inputs": [
      {
        "name": "_hyperdrive",
        "type": "address",
        "internalType": "contract IHyperdrive"
      },
      {
        "name": "_minOutput",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minVaultSharePrice",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_hyperdriveOptions",
        "type": "tuple",
        "internalType": "struct IHyperdrive.Options",
        "components": [
          {
            "name": "destination",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asBase",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "extraData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "name": "_zapInOptions",
        "type": "tuple",
        "internalType": "struct IUniV3Zap.ZapInOptions",
        "components": [
          {
            "name": "swapParams",
            "type": "tuple",
            "internalType": "struct ISwapRouter.ExactInputParams",
            "components": [
              {
                "name": "path",
                "type": "bytes",
                "internalType": "bytes"
              },
              {
                "name": "recipient",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "deadline",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "amountIn",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "amountOutMinimum",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "sourceAsset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "sourceAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shouldWrap",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "isRebasing",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "maturityTime",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "longAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "openShortZap",
    "inputs": [
      {
        "name": "_hyperdrive",
        "type": "address",
        "internalType": "contract IHyperdrive"
      },
      {
        "name": "_bondAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_maxDeposit",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minVaultSharePrice",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_hyperdriveOptions",
        "type": "tuple",
        "internalType": "struct IHyperdrive.Options",
        "components": [
          {
            "name": "destination",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asBase",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "extraData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "name": "_zapInOptions",
        "type": "tuple",
        "internalType": "struct IUniV3Zap.ZapInOptions",
        "components": [
          {
            "name": "swapParams",
            "type": "tuple",
            "internalType": "struct ISwapRouter.ExactInputParams",
            "components": [
              {
                "name": "path",
                "type": "bytes",
                "internalType": "bytes"
              },
              {
                "name": "recipient",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "deadline",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "amountIn",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "amountOutMinimum",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "sourceAsset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "sourceAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shouldWrap",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "isRebasing",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "maturityTime",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "deposit",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "redeemWithdrawalSharesZap",
    "inputs": [
      {
        "name": "_hyperdrive",
        "type": "address",
        "internalType": "contract IHyperdrive"
      },
      {
        "name": "_withdrawalShares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minOutputPerShare",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_options",
        "type": "tuple",
        "internalType": "struct IHyperdrive.Options",
        "components": [
          {
            "name": "destination",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asBase",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "extraData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "name": "_swapParams",
        "type": "tuple",
        "internalType": "struct ISwapRouter.ExactInputParams",
        "components": [
          {
            "name": "path",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "deadline",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountIn",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountOutMinimum",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "_shouldWrap",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "proceeds",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "withdrawalSharesRedeemed",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "removeLiquidityZap",
    "inputs": [
      {
        "name": "_hyperdrive",
        "type": "address",
        "internalType": "contract IHyperdrive"
      },
      {
        "name": "_lpShares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minOutputPerShare",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_options",
        "type": "tuple",
        "internalType": "struct IHyperdrive.Options",
        "components": [
          {
            "name": "destination",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asBase",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "extraData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "name": "_swapParams",
        "type": "tuple",
        "internalType": "struct ISwapRouter.ExactInputParams",
        "components": [
          {
            "name": "path",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "deadline",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountIn",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "amountOutMinimum",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "_shouldWrap",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "proceeds",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "withdrawalShares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "swapRouter",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract ISwapRouter"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "version",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "weth",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IWETH"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "error",
    "name": "AddressEmptyCode",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "AddressInsufficientBalance",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "FailedInnerCall",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidInputToken",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidOutputToken",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidRecipient",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidSourceAmount",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidSourceAsset",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidSwap",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidTimestamp",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidTransfer",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NotPayable",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ReentrancyGuardReentrantCall",
    "inputs": []
  },
  {
    "type": "error",
    "name": "SafeERC20FailedOperation",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ShouldWrapAssets",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TransferFailed",
    "inputs": []
  }
] as const,
  bytecode: '0x60c060405234801562000010575f80fd5b5060405162002d1238038062002d1283398101604081905262000033916200008f565b60015f8190556200004584826200020b565b506001600160a01b039182166080521660a05250620002d7565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b03811681146200008a575f80fd5b919050565b5f805f60608486031215620000a2575f80fd5b83516001600160401b0380821115620000b9575f80fd5b818601915086601f830112620000cd575f80fd5b815181811115620000e257620000e26200005f565b604051601f8201601f19908116603f011681019083821181831017156200010d576200010d6200005f565b8160405282815260209350898484870101111562000129575f80fd5b5f91505b828210156200014c57848201840151818301850152908301906200012d565b5f8484830101528097505050506200016681870162000073565b93505050620001786040850162000073565b90509250925092565b600181811c908216806200019657607f821691505b602082108103620001b557634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200020657805f5260205f20601f840160051c81016020851015620001e25750805b601f840160051c820191505b8181101562000203575f8155600101620001ee565b50505b505050565b81516001600160401b038111156200022757620002276200005f565b6200023f8162000238845462000181565b84620001bb565b602080601f83116001811462000275575f84156200025d5750858301515b5f19600386901b1c1916600185901b178555620002cf565b5f85815260208120601f198616915b82811015620002a55788860151825594840194600190910190840162000284565b5085821015620002c357878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a0516129be620003545f395f818161019801528181610d0601528181610ec0015281816113e60152818161192e01528181611a3901528181611c5501528181611d5b0152611da701525f818161025a0152818161123f0152818161130a0152818161135201528181611c8a0152611ce201526129be5ff3fe6080604052600436106100a8575f3560e01c806354fd4d501161006257806354fd4d50146101e55780635bf8404614610217578063ba77fd3d1461022a578063c31c9c0714610249578063d49518381461027c578063dcda7d3d1461029b575f80fd5b806304baa00b146100d557806306fdde031461011e5780631fd5fcd61461013257806323003ba5146101535780633fc8cef3146101875780634b22d586146101d2575f80fd5b366100d1575f546002146100cf57604051632f35253160e01b815260040160405180910390fd5b005b5f80fd5b3480156100e0575f80fd5b50610108604051806040016040528060088152602001670556e6956335a61760c41b81525081565b60405161011591906121fe565b60405180910390f35b348015610129575f80fd5b506101086102ba565b61014561014036600461224a565b610346565b604051908152602001610115565b34801561015e575f80fd5b5061017261016d3660046122e3565b6104be565b60408051928352602083019190915201610115565b348015610192575f80fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610115565b6101726101e036600461237a565b6105dc565b3480156101f0575f80fd5b5061010860405180604001604052806007815260200166076312e302e32360cc1b81525081565b61017261022536600461224a565b6106fc565b348015610235575f80fd5b506101456102443660046123fe565b6108ee565b348015610254575f80fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b348015610287575f80fd5b506101456102963660046123fe565b610a14565b3480156102a6575f80fd5b506101726102b53660046122e3565b610ac9565b600180546102c79061249f565b80601f01602080910402602001604051908101604052809291908181526020018280546102f39061249f565b801561033e5780601f106103155761010080835404028352916020019161033e565b820191905f5260205f20905b81548152906001019060200180831161032157829003601f168201915b505050505081565b5f61034f610b78565b5f61035b888585610ba0565b90505f61037061036a85612617565b83611090565b9050816103e6576103e6896103868360016126b1565b6103d661039388806126c4565b61039d90806126e2565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506114be92505050565b6001600160a01b031691906114cf565b6103f6604086016020870161272c565b15801561040e575061040e60a085016080860161272c565b156104205761041d8982611592565b90505b5f8261042c575f61042e565b815b9050896001600160a01b0316634c2ac1d982848c8c8c8c6040518763ffffffff1660e01b81526004016104659594939291906127e7565b60206040518083038185885af1158015610481573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906104a69190612811565b93505050506104b460015f55565b9695505050505050565b5f806104c8610b78565b5f6104dd89876104d788612828565b87611782565b604051630e07895b60e11b81529091506001600160a01b038a1690631c0f12b690610512905f90339030908e90600401612833565b5f604051808303815f87803b158015610529575f80fd5b505af115801561053b573d5f803e3d5ffd5b50506040516332f04d0d60e21b81526001600160a01b038c16925063cbc13434915061056f908b908b908b90600401612858565b60408051808303815f875af115801561058a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105ae9190612876565b92506105c590506105be86612828565b82866119fd565b9250506105d160015f55565b965096945050505050565b5f806105e6610b78565b5f6105f2888686610ba0565b90505f61060161036a86612617565b90508161062457610624896106178360016126b1565b6103d661039389806126c4565b610634604087016020880161272c565b15801561064c575061064c60a086016080870161272c565b1561065e5761065b8982611592565b90505b5f8261066a575f61066c565b815b9050896001600160a01b031663cba2e58d82848c8c8c6040518663ffffffff1660e01b81526004016106a19493929190612898565b604080518083038185885af11580156106bc573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906106e19190612876565b90955093505050506106f260015f55565b9550959350505050565b5f80610706610b78565b5f610712898686610ba0565b90505f61072161036a86612617565b90505f61073161039387806126c4565b905082610758576107588b6107478460016126b1565b6001600160a01b03841691906114cf565b5f83610764575f610766565b825b90508b6001600160a01b031663dbbe8070828d8d8d8d6040518663ffffffff1660e01b815260040161079b9493929190612898565b604080518083038185885af11580156107b6573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906107db9190612876565b9096509450831561085b57478015610855576040515f90339083908381818185875af1925050503d805f811461082c576040519150601f19603f3d011682016040523d82523d5f602084013e610831565b606091505b5050905080610853576040516312171d8360e31b815260040160405180910390fd5b505b506108e1565b6040516370a0823160e01b81523060048201525f906001600160a01b038416906370a0823190602401602060405180830381865afa15801561089f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108c39190612811565b905080156108df576108df6001600160a01b0384163383611ee8565b505b505050506105d160015f55565b5f6108f7610b78565b5f61090c898661090687612828565b86611782565b9050886001600160a01b0316631c0f12b661092860028b611f1e565b33308b6040518563ffffffff1660e01b815260040161094a9493929190612833565b5f604051808303815f87803b158015610961575f80fd5b505af1158015610973573d5f803e3d5ffd5b50506040516329b23fc160e01b81526001600160a01b038c1692506329b23fc191506109a9908b908b908b908b90600401612898565b6020604051808303815f875af11580156109c5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109e99190612811565b506109fd6109f685612828565b82856119fd565b915050610a0960015f55565b979650505050505050565b5f610a1d610b78565b5f610a2c898661090687612828565b9050886001600160a01b0316631c0f12b6610a4860018b611f1e565b33308b6040518563ffffffff1660e01b8152600401610a6a9493929190612833565b5f604051808303815f87803b158015610a81575f80fd5b505af1158015610a93573d5f803e3d5ffd5b505060405163ded0623160e01b81526001600160a01b038c16925063ded0623191506109a9908b908b908b908b90600401612898565b5f80610ad3610b78565b5f610ae289876104d788612828565b604051630e07895b60e11b81529091506001600160a01b038a1690631c0f12b690610b1b90600360f81b90339030908e90600401612833565b5f604051808303815f87803b158015610b32575f80fd5b505af1158015610b44573d5f803e3d5ffd5b505060405163074a6de960e01b81526001600160a01b038c16925063074a6de9915061056f908b908b908b90600401612858565b60025f5403610b9a57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f30610bac83806126c4565b610bbd9060408101906020016128bc565b6001600160a01b031614610be457604051634e46966960e11b815260040160405180910390fd5b5f610c35610bf284806126c4565b610bfc90806126e2565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250611f5292505050565b90505f610c4561039385806126c4565b9050806001600160a01b0316826001600160a01b031603610c7957604051631115766760e01b815260040160405180910390fd5b610c89608085016060860161272c565b15610dd3576001600160a01b038216610ca860408601602087016128bc565b6001600160a01b031603610cce57604051625605b760e01b815260040160405180910390fd5b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee610cf360408601602087016128bc565b6001600160a01b0316148015610d3b57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614155b15610d5857604051625605b760e01b815260040160405180910390fd5b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee610d7d60408601602087016128bc565b6001600160a01b0316148015610db157508360400135341080610db15750610da584806126c4565b60600135846040013514155b15610dce57604051625605b760e01b815260040160405180910390fd5b610e44565b6001600160a01b038216610ded60408601602087016128bc565b6001600160a01b031614610e1357604051625605b760e01b815260040160405180910390fd5b610e1d84806126c4565b60600135846040013514610e44576040516397e0deb160e01b815260040160405180910390fd5b5f866001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e81573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ea591906128d7565b9050610eb7604087016020880161272c565b8015610ef457507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316145b8015610f1c57506001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee145b15610f2d5760019350505050611089565b610f3d604087016020880161272c565b8015610fba5750866001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f80573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fa491906128d7565b6001600160a01b0316826001600160a01b031614155b15610fd7576040516231010160e51b815260040160405180910390fd5b610fe7604087016020880161272c565b1580156110655750866001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa15801561102b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061104f91906128d7565b6001600160a01b0316826001600160a01b031614155b15611082576040516231010160e51b815260040160405180910390fd5b5f93505050505b9392505050565b815151602001515f90819081908190600160601b9004905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b031686602001516001600160a01b0316036110f9578551606001516110e990346128f2565b8651606001519093509150611339565b8560600151156112725761112b3330886040015189602001516001600160a01b0316611f60909392919063ffffffff16565b611155818760400151600161114091906126b1565b60208901516001600160a01b031691906114cf565b6040868101519051630ea598cb60e41b815260048101919091526001600160a01b0382169063ea598cb0906024016020604051808303815f875af115801561119f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111c39190612811565b506040516370a0823160e01b81523060048201526001600160a01b038216906370a0823190602401602060405180830381865afa158015611206573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061122a9190612811565b86516060908101919091528651015161126a907f0000000000000000000000000000000000000000000000000000000000000000906107479060016126b1565b349250611339565b604086015161128f906001600160a01b0383169033903090611f60565b6040516370a0823160e01b81523060048201526001600160a01b038216906370a0823190602401602060405180830381865afa1580156112d1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112f59190612811565b865160609081019190915286510151611335907f0000000000000000000000000000000000000000000000000000000000000000906107479060016126b1565b3492505b855160405163c04b8d5960e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163c04b8d5991859161138791600401612905565b60206040518083038185885af11580156113a3573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906113c89190612811565b9350841561144657604051632e1a7d4d60e01b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d906024015f604051808303815f87803b15801561142f575f80fd5b505af1158015611441573d5f803e3d5ffd5b505050505b82156114b4576040515f90339085908381818185875af1925050503d805f811461148b576040519150601f19603f3d011682016040523d82523d5f602084013e611490565b606091505b50509050806114b2576040516312171d8360e31b815260040160405180910390fd5b505b5050505b92915050565b805101600c0151600160601b900490565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526115208482611f99565b61158c576040516001600160a01b0384811660248301525f604483015261158291869182169063095ea7b3906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061203a565b61158c848261203a565b50505050565b5f4660011480156115bf57506001600160a01b03831673d7e470043241c10970953bd8374ee6238e77d735145b1561169757826001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa158015611600573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061162491906128d7565b6001600160a01b03166319208451836040518263ffffffff1660e01b815260040161165191815260200190565b602060405180830381865afa15801561166c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116909190612811565b90506114b8565b4660011480156116c357506001600160a01b03831673324395d5d835f84a02a75aa26814f6fd22f25698145b1561175557826001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa158015611704573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061172891906128d7565b6001600160a01b031663c6e6f592836040518263ffffffff1660e01b815260040161165191815260200190565b6040516363737ac960e11b8152600481018390526001600160a01b0384169063c6e6f59290602401611651565b5f3061179160208601866128bc565b6001600160a01b0316146117b857604051634e46966960e11b815260040160405180910390fd5b825160208101518151909101600c0151600160601b91829004915f91049050806001600160a01b0316826001600160a01b03160361180957604051631115766760e01b815260040160405180910390fd5b5f61181a604088016020890161272c565b1561188657876001600160a01b031663c55dae636040518163ffffffff1660e01b8152600401602060405180830381865afa15801561185b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061187f91906128d7565b90506118e9565b876001600160a01b0316630a4e14936040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118c2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118e691906128d7565b90505b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03821601611983578461192c57604051633f27152160e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b03161461197e57604051632df9739b60e01b815260040160405180910390fd5b610a09565b841580156119a35750826001600160a01b0316816001600160a01b031614155b156119c157604051632df9739b60e01b815260040160405180910390fd5b8480156119df5750826001600160a01b0316816001600160a01b0316145b15610a0957604051632df9739b60e01b815260040160405180910390fd5b8251602001515f90600160601b90048215611ba15773eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03851601611aac577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0476040518263ffffffff1660e01b81526004015f604051808303818588803b158015611a90575f80fd5b505af1158015611aa2573d5f803e3d5ffd5b5050505050611ba1565b6040516370a0823160e01b81523060048201525f906001600160a01b038616906370a0823190602401602060405180830381865afa158015611af0573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b149190612811565b9050611b3682611b258360016126b1565b6001600160a01b03881691906114cf565b604051630ea598cb60e41b8152600481018290526001600160a01b0383169063ea598cb0906024016020604051808303815f875af1158015611b7a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b9e9190612811565b50505b6040516370a0823160e01b81523060048201525f906001600160a01b038316906370a0823190602401602060405180830381865afa158015611be5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c099190612811565b9050611c2886608001518760600151836120a09092919063ffffffff16565b6080870152606086018190528551805101600c01516020870151600160601b909104906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811690831603611c85573060208901525b611ccb7f000000000000000000000000000000000000000000000000000000000000000089606001516001611cba91906126b1565b6001600160a01b03871691906114cf565b60405163c04b8d5960e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c04b8d5990611d17908b90600401612905565b6020604051808303815f875af1158015611d33573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d579190612811565b94507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031603611edd576040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d9082906370a0823190602401602060405180830381865afa158015611dfc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e209190612811565b6040518263ffffffff1660e01b8152600401611e3e91815260200190565b5f604051808303815f87803b158015611e55575f80fd5b505af1158015611e67573d5f803e3d5ffd5b505050505f816001600160a01b0316476040515f6040518083038185875af1925050503d805f8114611eb4576040519150601f19603f3d011682016040523d82523d5f602084013e611eb9565b606091505b5050905080611edb576040516312171d8360e31b815260040160405180910390fd5b505b505050509392505050565b6040516001600160a01b03838116602483015260448201839052611f1991859182169063a9059cbb90606401611550565b505050565b5f6001600160f81b03821115611f475760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60200151600160601b900490565b6040516001600160a01b03848116602483015283811660448301526064820183905261158c9186918216906323b872dd90608401611550565b5f805f846001600160a01b031684604051611fb4919061295c565b5f604051808303815f865af19150503d805f8114611fed576040519150601f19603f3d011682016040523d82523d5f602084013e611ff2565b606091505b509150915081801561201c57508051158061201c57508080602001905181019061201c919061296d565b801561203157505f856001600160a01b03163b115b95945050505050565b5f61204e6001600160a01b038416836120bb565b905080515f14158015612072575080806020019051810190612070919061296d565b155b15611f1957604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f825f1904841183021582026120b4575f80fd5b5091020490565b606061108983835f845f80856001600160a01b031684866040516120df919061295c565b5f6040518083038185875af1925050503d805f8114612119576040519150601f19603f3d011682016040523d82523d5f602084013e61211e565b606091505b50915091506104b486838360608261213e5761213982612185565b611089565b815115801561215557506001600160a01b0384163b155b1561217e57604051639996b31560e01b81526001600160a01b0385166004820152602401612097565b5080611089565b8051156121955780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b5f5b838110156121cb5781810151838201526020016121b3565b50505f910152565b5f81518084526121ea8160208601602086016121b1565b601f01601f19169290920160200192915050565b602081525f61108960208301846121d3565b6001600160a01b03811681146121ae575f80fd5b5f60608284031215612234575f80fd5b50919050565b5f60a08284031215612234575f80fd5b5f805f805f8060c0878903121561225f575f80fd5b863561226a81612210565b9550602087013594506040870135935060608701359250608087013567ffffffffffffffff8082111561229b575f80fd5b6122a78a838b01612224565b935060a08901359150808211156122bc575f80fd5b506122c989828a0161223a565b9150509295509295509295565b80151581146121ae575f80fd5b5f805f805f8060c087890312156122f8575f80fd5b863561230381612210565b95506020870135945060408701359350606087013567ffffffffffffffff8082111561232d575f80fd5b6123398a838b01612224565b9450608089013591508082111561234e575f80fd5b5061235b89828a0161223a565b92505060a087013561236c816122d6565b809150509295509295509295565b5f805f805f60a0868803121561238e575f80fd5b853561239981612210565b94506020860135935060408601359250606086013567ffffffffffffffff808211156123c3575f80fd5b6123cf89838a01612224565b935060808801359150808211156123e4575f80fd5b506123f18882890161223a565b9150509295509295909350565b5f805f805f805f60e0888a031215612414575f80fd5b873561241f81612210565b9650602088013595506040880135945060608801359350608088013567ffffffffffffffff80821115612450575f80fd5b61245c8b838c01612224565b945060a08a0135915080821115612471575f80fd5b5061247e8a828b0161223a565b92505060c088013561248f816122d6565b8091505092959891949750929550565b600181811c908216806124b357607f821691505b60208210810361223457634e487b7160e01b5f52602260045260245ffd5b634e487b7160e01b5f52604160045260245ffd5b60405160a0810167ffffffffffffffff81118282101715612508576125086124d1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715612537576125376124d1565b604052919050565b803561254a81612210565b919050565b5f60a0828403121561255f575f80fd5b6125676124e5565b9050813567ffffffffffffffff80821115612580575f80fd5b818401915084601f830112612593575f80fd5b81356020828211156125a7576125a76124d1565b6125b9601f8301601f1916820161250e565b925081835286818386010111156125ce575f80fd5b81818501828501375f8183850101528285526125eb81870161253f565b818601525050505060408201356040820152606082013560608201526080820135608082015292915050565b5f60a08236031215612627575f80fd5b61262f6124e5565b823567ffffffffffffffff811115612645575f80fd5b6126513682860161254f565b825250602083013561266281612210565b602082015260408381013590820152606083013561267f816122d6565b60608201526080830135612692816122d6565b608082015292915050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156114b8576114b861269d565b5f8235609e198336030181126126d8575f80fd5b9190910192915050565b5f808335601e198436030181126126f7575f80fd5b83018035915067ffffffffffffffff821115612711575f80fd5b602001915036819003821315612725575f80fd5b9250929050565b5f6020828403121561273c575f80fd5b8135611089816122d6565b5f813561275381612210565b6001600160a01b03168352602082013561276c816122d6565b15156020840152604082013536839003601e1901811261278a575f80fd5b820160208101903567ffffffffffffffff8111156127a6575f80fd5b8036038213156127b4575f80fd5b60606040860152806060860152808260808701375f608082870101526080601f19601f8301168601019250505092915050565b85815284602082015283604082015282606082015260a060808201525f610a0960a0830184612747565b5f60208284031215612821575f80fd5b5051919050565b5f6114b8368361254f565b9384526001600160a01b03928316602085015291166040830152606082015260800190565b838152826020820152606060408201525f6120316060830184612747565b5f8060408385031215612887575f80fd5b505080516020909101519092909150565b848152836020820152826040820152608060608201525f6104b46080830184612747565b5f602082840312156128cc575f80fd5b813561108981612210565b5f602082840312156128e7575f80fd5b815161108981612210565b818103818111156114b8576114b861269d565b602081525f825160a0602084015261292060c08401826121d3565b905060018060a01b0360208501511660408401526040840151606084015260608401516080840152608084015160a08401528091505092915050565b5f82516126d88184602087016121b1565b5f6020828403121561297d575f80fd5b8151611089816122d656fea264697066735822122034463bb058ee2269f41a7881f7bae5d9ffd44c93ad4b8ed78b08c825b443fc8064736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "addLiquidityZap(address,uint256,uint256,uint256,(address,bool,bytes),((bytes,address,uint256,uint256,uint256),address,uint256,bool,bool))": "1fd5fcd6",
  "closeLongZap(address,uint256,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "d4951838",
  "closeShortZap(address,uint256,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "ba77fd3d",
  "kind()": "04baa00b",
  "name()": "06fdde03",
  "openLongZap(address,uint256,uint256,(address,bool,bytes),((bytes,address,uint256,uint256,uint256),address,uint256,bool,bool))": "4b22d586",
  "openShortZap(address,uint256,uint256,uint256,(address,bool,bytes),((bytes,address,uint256,uint256,uint256),address,uint256,bool,bool))": "5bf84046",
  "redeemWithdrawalSharesZap(address,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "dcda7d3d",
  "removeLiquidityZap(address,uint256,uint256,(address,bool,bytes),(bytes,address,uint256,uint256,uint256),bool)": "23003ba5",
  "swapRouter()": "c31c9c07",
  "version()": "54fd4d50",
  "weth()": "3fc8cef3"
} as const
};
