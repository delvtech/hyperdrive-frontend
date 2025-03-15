export const IMorphoBase = {
  name: 'IMorphoBase' as const,
  abi: [
  {
    "type": "function",
    "name": "DOMAIN_SEPARATOR",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "accrueInterest",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "borrow",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "receiver",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "assetsBorrowed",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "sharesBorrowed",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createMarket",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "enableIrm",
    "inputs": [
      {
        "name": "irm",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "enableLltv",
    "inputs": [
      {
        "name": "lltv",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "extSloads",
    "inputs": [
      {
        "name": "slots",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "feeRecipient",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "flashLoan",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isAuthorized",
    "inputs": [
      {
        "name": "authorizer",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "authorized",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isIrmEnabled",
    "inputs": [
      {
        "name": "irm",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isLltvEnabled",
    "inputs": [
      {
        "name": "lltv",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "liquidate",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "borrower",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "seizedAssets",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "repaidShares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "nonce",
    "inputs": [
      {
        "name": "authorizer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "repay",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "assetsRepaid",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "sharesRepaid",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setAuthorization",
    "inputs": [
      {
        "name": "authorized",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "newIsAuthorized",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setAuthorizationWithSig",
    "inputs": [
      {
        "name": "authorization",
        "type": "tuple",
        "internalType": "struct Authorization",
        "components": [
          {
            "name": "authorizer",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "authorized",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "isAuthorized",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "nonce",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "deadline",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "signature",
        "type": "tuple",
        "internalType": "struct Signature",
        "components": [
          {
            "name": "v",
            "type": "uint8",
            "internalType": "uint8"
          },
          {
            "name": "r",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "s",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setFee",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "newFee",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setFeeRecipient",
    "inputs": [
      {
        "name": "newFeeRecipient",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setOwner",
    "inputs": [
      {
        "name": "newOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supply",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "assetsSupplied",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "sharesSupplied",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supplyCollateral",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdraw",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "receiver",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "assetsWithdrawn",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "sharesWithdrawn",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdrawCollateral",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "onBehalf",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "receiver",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "DOMAIN_SEPARATOR()": "3644e515",
  "accrueInterest((address,address,address,address,uint256))": "151c1ade",
  "borrow((address,address,address,address,uint256),uint256,uint256,address,address)": "50d8cd4b",
  "createMarket((address,address,address,address,uint256))": "8c1358a2",
  "enableIrm(address)": "5a64f51e",
  "enableLltv(uint256)": "4d98a93b",
  "extSloads(bytes32[])": "7784c685",
  "feeRecipient()": "46904840",
  "flashLoan(address,uint256,bytes)": "e0232b42",
  "isAuthorized(address,address)": "65e4ad9e",
  "isIrmEnabled(address)": "f2b863ce",
  "isLltvEnabled(uint256)": "b485f3b8",
  "liquidate((address,address,address,address,uint256),address,uint256,uint256,bytes)": "d8eabcb8",
  "nonce(address)": "70ae92d2",
  "owner()": "8da5cb5b",
  "repay((address,address,address,address,uint256),uint256,uint256,address,bytes)": "20b76e81",
  "setAuthorization(address,bool)": "eecea000",
  "setAuthorizationWithSig((address,address,bool,uint256,uint256),(uint8,bytes32,bytes32))": "8069218f",
  "setFee((address,address,address,address,uint256),uint256)": "2b4f013c",
  "setFeeRecipient(address)": "e74b981b",
  "setOwner(address)": "13af4035",
  "supply((address,address,address,address,uint256),uint256,uint256,address,bytes)": "a99aad89",
  "supplyCollateral((address,address,address,address,uint256),uint256,address,bytes)": "238d6579",
  "withdraw((address,address,address,address,uint256),uint256,uint256,address,address)": "5c2bea49",
  "withdrawCollateral((address,address,address,address,uint256),uint256,address,address)": "8720316d"
} as const
};
