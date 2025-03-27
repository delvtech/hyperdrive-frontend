export const MockLido = {
  name: 'MockLido' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_initialRate",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_admin",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_isCompetitionMode",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "_maxMintAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "allowance",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "spender",
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
    "name": "approve",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "value",
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
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "authority",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract Authority"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "name": "_owner",
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
    "name": "burn",
    "inputs": [
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "burn",
    "inputs": [
      {
        "name": "_target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "canCall",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "functionSig",
        "type": "bytes4",
        "internalType": "bytes4"
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
    "name": "decimals",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "doesRoleHaveCapability",
    "inputs": [
      {
        "name": "role",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "functionSig",
        "type": "bytes4",
        "internalType": "bytes4"
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
    "name": "doesUserHaveRole",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "role",
        "type": "uint8",
        "internalType": "uint8"
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
    "name": "getBufferedEther",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getPooledEthByShares",
    "inputs": [
      {
        "name": "_sharesAmount",
        "type": "uint256",
        "internalType": "uint256"
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
    "name": "getRate",
    "inputs": [],
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
    "name": "getRolesWithCapability",
    "inputs": [
      {
        "name": "",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
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
    "name": "getSharesByPooledEth",
    "inputs": [
      {
        "name": "_ethAmount",
        "type": "uint256",
        "internalType": "uint256"
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
    "name": "getTargetCustomAuthority",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract Authority"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTotalPooledEther",
    "inputs": [],
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
    "name": "getTotalShares",
    "inputs": [],
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
    "name": "getUserRoles",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
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
    "name": "isCapabilityPublic",
    "inputs": [
      {
        "name": "",
        "type": "bytes4",
        "internalType": "bytes4"
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
    "name": "isCompetitionMode",
    "inputs": [],
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
    "name": "isUnrestricted",
    "inputs": [
      {
        "name": "",
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
    "name": "maxMintAmount",
    "inputs": [],
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
    "name": "mint",
    "inputs": [
      {
        "name": "_recipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mint",
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
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
    "name": "setAuthority",
    "inputs": [
      {
        "name": "newAuthority",
        "type": "address",
        "internalType": "contract Authority"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setMaxMintAmount",
    "inputs": [
      {
        "name": "_maxMintAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPublicCapability",
    "inputs": [
      {
        "name": "functionSig",
        "type": "bytes4",
        "internalType": "bytes4"
      },
      {
        "name": "enabled",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setRate",
    "inputs": [
      {
        "name": "_rate_",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setRoleCapability",
    "inputs": [
      {
        "name": "role",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "functionSig",
        "type": "bytes4",
        "internalType": "bytes4"
      },
      {
        "name": "enabled",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setTargetCustomAuthority",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "customAuthority",
        "type": "address",
        "internalType": "contract Authority"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setUnrestrictedMintStatus",
    "inputs": [
      {
        "name": "_target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_status",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setUserRole",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "role",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "enabled",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "sharesOf",
    "inputs": [
      {
        "name": "",
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
    "name": "submit",
    "inputs": [
      {
        "name": "",
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
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "symbol",
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
    "name": "totalSupply",
    "inputs": [],
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
    "name": "transfer",
    "inputs": [
      {
        "name": "_recipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_amount",
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
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferFrom",
    "inputs": [
      {
        "name": "_sender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_recipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_amount",
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
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferOwnership",
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
    "name": "transferShares",
    "inputs": [
      {
        "name": "_recipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_sharesAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
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
    "name": "transferSharesFrom",
    "inputs": [
      {
        "name": "_sender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_recipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_sharesAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "spender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "value",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "AuthorityUpdated",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newAuthority",
        "type": "address",
        "indexed": true,
        "internalType": "contract Authority"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PublicCapabilityUpdated",
    "inputs": [
      {
        "name": "functionSig",
        "type": "bytes4",
        "indexed": true,
        "internalType": "bytes4"
      },
      {
        "name": "enabled",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoleCapabilityUpdated",
    "inputs": [
      {
        "name": "role",
        "type": "uint8",
        "indexed": true,
        "internalType": "uint8"
      },
      {
        "name": "functionSig",
        "type": "bytes4",
        "indexed": true,
        "internalType": "bytes4"
      },
      {
        "name": "enabled",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TargetCustomAuthorityUpdated",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "authority",
        "type": "address",
        "indexed": true,
        "internalType": "contract Authority"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "value",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferShares",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "sharesValue",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "UserRoleUpdated",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "role",
        "type": "uint8",
        "indexed": true,
        "internalType": "uint8"
      },
      {
        "name": "enabled",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "ERC20InsufficientAllowance",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "allowance",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "needed",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InsufficientBalance",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "balance",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "needed",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InvalidApprover",
    "inputs": [
      {
        "name": "approver",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InvalidReceiver",
    "inputs": [
      {
        "name": "receiver",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InvalidSender",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InvalidSpender",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      }
    ]
  }
] as const,
  bytecode: '0x60a060405234801562000010575f80fd5b506040516200211b3803806200211b833981016040819052620000339162000159565b604080518082018252601781527f4c6971756964207374616b656420457468657220322e300000000000000000006020808301919091528251808401845260058152640e6e88aa8960db1b918101919091525f80546001600160a01b03199081166001600160a01b038916908117835560018054309316831790559451939492938893919284928492909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a35050505081600990816200012e919062000250565b50600a6200013d828262000250565b505050600d9390935542600e55151560805250600b556200031c565b5f805f80608085870312156200016d575f80fd5b845160208601519094506001600160a01b03811681146200018c575f80fd5b60408601519093508015158114620001a2575f80fd5b6060959095015193969295505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c90821680620001db57607f821691505b602082108103620001fa57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200024b57805f5260205f20601f840160051c81016020851015620002275750805b601f840160051c820191505b8181101562000248575f815560010162000233565b50505b505050565b81516001600160401b038111156200026c576200026c620001b2565b62000284816200027d8454620001c6565b8462000200565b602080601f831160018114620002ba575f8415620002a25750858301515b5f19600386901b1c1916600185901b17855562000314565b5f85815260208120601f198616915b82811015620002ea57888601518255948401946001909101908401620002c9565b50858210156200030857878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b608051611db5620003665f395f81816105620152818161086e0152818161098801528181610b7701528181610bf601528181610c5b015281816110e401526111450152611db55ff3fe60806040526004361061025f575f3560e01c8063728b952b1161013f578063aed30777116100b3578063dd62ed3e11610078578063dd62ed3e14610730578063e688747b14610774578063ea7ca276146107b5578063ed0d0efb146107f7578063f2fde38b14610822578063f5eb42dc14610841575f80fd5b8063aed307771461067c578063b7009613146106aa578063bf7e214f146106c9578063c53a3985146106e8578063d5002f2e1461071c575f80fd5b80638fcb4e5b116101045780638fcb4e5b146105d957806395d89b41146105f85780639dc29fac1461060c578063a0712d681461062b578063a1903eab1461064a578063a9059cbb1461065d575f80fd5b8063728b952b146105135780637a28fb88146105325780637a8c63b5146105515780637a9e5e4b146105845780638da5cb5b146105a3575f80fd5b8063313ce567116101d657806347b714e01161019b57806347b714e0146104715780634b5159da14610483578063679aefce146104a257806367aff484146104b65780636d780459146104d557806370a08231146104f4575f80fd5b8063313ce567146103e557806334fcf4371461040057806337cfdaca1461041f57806340c10f191461043357806342966c6814610452575f80fd5b80630bade8a4116102275780630bade8a4146103315780630ea9b75b1461035f57806318160ddd1461037e5780631920845114610392578063239c70ae146103b157806323b872dd146103c6575f80fd5b806305f05a941461026357806306a36aee1461028457806306fdde03146102c2578063088a4ed0146102e3578063095ea7b314610302575b5f80fd5b34801561026e575f80fd5b5061028261027d366004611972565b61086c565b005b34801561028f575f80fd5b506102af61029e3660046119a9565b60036020525f908152604090205481565b6040519081526020015b60405180910390f35b3480156102cd575f80fd5b506102d66108f6565b6040516102b991906119c4565b3480156102ee575f80fd5b506102826102fd366004611a10565b610986565b34801561030d575f80fd5b5061032161031c366004611a27565b6109e2565b60405190151581526020016102b9565b34801561033c575f80fd5b5061032161034b366004611a6d565b60046020525f908152604090205460ff1681565b34801561036a575f80fd5b50610282610379366004611a96565b6109fb565b348015610389575f80fd5b506008546102af565b34801561039d575f80fd5b506102af6103ac366004611a10565b610ad0565b3480156103bc575f80fd5b506102af600b5481565b3480156103d1575f80fd5b506103216103e0366004611ada565b610aed565b3480156103f0575f80fd5b50604051601281526020016102b9565b34801561040b575f80fd5b5061028261041a366004611a10565b610b75565b34801561042a575f80fd5b506102af610bd9565b34801561043e575f80fd5b5061028261044d366004611a27565b610bf4565b34801561045d575f80fd5b5061028261046c366004611a10565b610c59565b34801561047c575f80fd5b505f6102af565b34801561048e575f80fd5b5061028261049d366004611b18565b610cbd565b3480156104ad575f80fd5b50600d546102af565b3480156104c1575f80fd5b506102826104d0366004611b32565b610d4d565b3480156104e0575f80fd5b506102af6104ef366004611ada565b610e12565b3480156104ff575f80fd5b506102af61050e3660046119a9565b610ea5565b34801561051e575f80fd5b5061028261052d366004611b5d565b610ec6565b34801561053d575f80fd5b506102af61054c366004611a10565b610f4d565b34801561055c575f80fd5b506103217f000000000000000000000000000000000000000000000000000000000000000081565b34801561058f575f80fd5b5061028261059e3660046119a9565b610f61565b3480156105ae575f80fd5b505f546105c1906001600160a01b031681565b6040516001600160a01b0390911681526020016102b9565b3480156105e4575f80fd5b506102af6105f3366004611a27565b611045565b348015610603575f80fd5b506102d66110d3565b348015610617575f80fd5b50610282610626366004611a27565b6110e2565b348015610636575f80fd5b50610282610645366004611a10565b611143565b6102af6106583660046119a9565b6111a4565b348015610668575f80fd5b50610321610677366004611a27565b611262565b348015610687575f80fd5b506103216106963660046119a9565b600c6020525f908152604090205460ff1681565b3480156106b5575f80fd5b506103216106c4366004611b89565b6112e6565b3480156106d4575f80fd5b506001546105c1906001600160a01b031681565b3480156106f3575f80fd5b506105c16107023660046119a9565b60026020525f90815260409020546001600160a01b031681565b348015610727575f80fd5b506010546102af565b34801561073b575f80fd5b506102af61074a366004611b5d565b6001600160a01b039182165f90815260076020908152604080832093909416825291909152205490565b34801561077f575f80fd5b5061032161078e366004611bcd565b6001600160e01b0319165f9081526005602052604090205460ff919091161c600116151590565b3480156107c0575f80fd5b506103216107cf366004611bfe565b6001600160a01b03919091165f90815260036020526040902054600160ff9092161c16151590565b348015610802575f80fd5b506102af610811366004611a6d565b60056020525f908152604090205481565b34801561082d575f80fd5b5061028261083c3660046119a9565b6113df565b34801561084c575f80fd5b506102af61085b3660046119a9565b60116020525f908152604090205481565b7f0000000000000000000000000000000000000000000000000000000000000000156108cc576108a7335f356001600160e01b03191661145a565b6108cc5760405162461bcd60e51b81526004016108c390611c28565b60405180910390fd5b6001600160a01b03919091165f908152600c60205260409020805460ff1916911515919091179055565b60606009805461090590611c5f565b80601f016020809104026020016040519081016040528092919081815260200182805461093190611c5f565b801561097c5780601f106109535761010080835404028352916020019161097c565b820191905f5260205f20905b81548152906001019060200180831161095f57829003601f168201915b5050505050905090565b7f0000000000000000000000000000000000000000000000000000000000000000156109dd576109c1335f356001600160e01b03191661145a565b6109dd5760405162461bcd60e51b81526004016108c390611c28565b600b55565b5f336109ef818585611500565b60019150505b92915050565b610a10335f356001600160e01b03191661145a565b610a2c5760405162461bcd60e51b81526004016108c390611c97565b8015610a5b576001600160e01b031982165f9081526005602052604090208054600160ff86161b179055610a81565b6001600160e01b031982165f9081526005602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610ac3911515815260200190565b60405180910390a3505050565b5f6109f5610add60105490565b610ae5610bd9565b849190611512565b5f610af661152d565b5f610b0083610ad0565b9050610b0d85858361155c565b506040518381526001600160a01b0385169033905f80516020611d608339815191529060200160405180910390a36040518181526001600160a01b0385169033905f80516020611d408339815191529060200160405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610bcc57610bb0335f356001600160e01b03191661145a565b610bcc5760405162461bcd60e51b81526004016108c390611c28565b610bd461152d565b600d55565b5f610be26115d5565b600f54610bef9190611cd1565b905090565b7f000000000000000000000000000000000000000000000000000000000000000015610c4b57610c2f335f356001600160e01b03191661145a565b610c4b5760405162461bcd60e51b81526004016108c390611c28565b610c558282611634565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610cb057610c94335f356001600160e01b03191661145a565b610cb05760405162461bcd60e51b81526004016108c390611c28565b610cba3382611720565b50565b610cd2335f356001600160e01b03191661145a565b610cee5760405162461bcd60e51b81526004016108c390611c97565b6001600160e01b031982165f81815260046020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610d62335f356001600160e01b03191661145a565b610d7e5760405162461bcd60e51b81526004016108c390611c97565b8015610dac576001600160a01b0383165f9081526003602052604090208054600160ff85161b179055610dd1565b6001600160a01b0383165f9081526003602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610ac3911515815260200190565b5f610e1b61152d565b5f610e2785858561155c565b9050836001600160a01b0316856001600160a01b03165f80516020611d6083398151915283604051610e5b91815260200190565b60405180910390a3836001600160a01b0316856001600160a01b03165f80516020611d4083398151915285604051610e9591815260200190565b60405180910390a3949350505050565b6001600160a01b0381165f908152601160205260408120546109f590610f4d565b610edb335f356001600160e01b03191661145a565b610ef75760405162461bcd60e51b81526004016108c390611c97565b6001600160a01b038281165f8181526002602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b5f6109f5610f59610bd9565b601054610ae5565b5f546001600160a01b0316331480610ff2575060015460405163b700961360e01b81526001600160a01b039091169063b700961390610fb390339030906001600160e01b03195f351690600401611ce4565b602060405180830381865afa158015610fce573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ff29190611d11565b610ffa575f80fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a350565b5f61104e61152d565b5f6110598484611786565b9050836001600160a01b0316336001600160a01b03165f80516020611d608339815191528360405161108d91815260200190565b60405180910390a36040518381526001600160a01b0385169033905f80516020611d408339815191529060200160405180910390a36110cb83610f4d565b949350505050565b6060600a805461090590611c5f565b7f0000000000000000000000000000000000000000000000000000000000000000156111395761111d335f356001600160e01b03191661145a565b6111395760405162461bcd60e51b81526004016108c390611c28565b610c558282611720565b7f00000000000000000000000000000000000000000000000000000000000000001561119a5761117e335f356001600160e01b03191661145a565b61119a5760405162461bcd60e51b81526004016108c390611c28565b610cba3382611634565b5f6111ad61152d565b6010545f036111eb57346010819055600f819055335f90815260116020526040812080549091906111df908490611cd1565b90915550349392505050565b5f6112086111f860105490565b611200610bd9565b349190611512565b905034600f5f82825461121b9190611cd1565b925050819055508060105f8282546112339190611cd1565b9091555050335f9081526011602052604081208054839290611256908490611cd1565b90915550909392505050565b5f61126b61152d565b5f61127583610ad0565b90506112818482611786565b506040518381526001600160a01b0385169033905f80516020611d608339815191529060200160405180910390a36040518181526001600160a01b0385169033905f80516020611d408339815191529060200160405180910390a35060019392505050565b6001600160a01b038083165f90815260026020526040812054909116801561137f5760405163b700961360e01b81526001600160a01b0382169063b70096139061133890889088908890600401611ce4565b602060405180830381865afa158015611353573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113779190611d11565b915050610b6e565b6001600160e01b031983165f9081526004602052604090205460ff16806113d657506001600160e01b031983165f908152600560209081526040808320546001600160a01b03891684526003909252909120541615155b95945050505050565b6113f4335f356001600160e01b03191661145a565b6114105760405162461bcd60e51b81526004016108c390611c97565b5f80546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001545f906001600160a01b031680158015906114e1575060405163b700961360e01b81526001600160a01b0382169063b7009613906114a290879030908890600401611ce4565b602060405180830381865afa1580156114bd573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114e19190611d11565b806110cb57505f546001600160a01b0385811691161491505092915050565b61150d83838360016117e1565b505050565b5f825f190484118302158202611526575f80fd5b5091020490565b5f6115366115d5565b905080156115555780600f5f82825461154f9190611cd1565b90915550505b5042600e55565b5f8061156783610f4d565b90506115748533836118b4565b6001600160a01b0385165f908152601160205260408120805485929061159b908490611d2c565b90915550506001600160a01b0384165f90815260116020526040812080548592906115c7908490611cd1565b909155509095945050505050565b5f600d545f036115e457505f90565b600e544210156115f357505f90565b5f6116106301e13380600e544261160a9190611d2c565b90611929565b90505f610b6e61162b83600d5461193d90919063ffffffff16565b600f549061193d565b335f908152600c602052604090205460ff1661169c57600b5481111561169c5760405162461bcd60e51b815260206004820152601d60248201527f4d6f636b4c69646f3a20496e76616c6964206d696e7420616d6f756e7400000060448201526064016108c3565b5f6116a660105490565b5f036116b35750806116bf565b6116bc82610ad0565b90505b6001600160a01b0383165f90815260116020526040812080548392906116e6908490611cd1565b9250508190555081600f5f8282546116fe9190611cd1565b925050819055508060105f8282546117169190611cd1565b9091555050505050565b5f61172a82610ad0565b6001600160a01b0384165f90815260116020526040812080549293508392909190611756908490611d2c565b9250508190555081600f5f82825461176e9190611d2c565b925050819055508060105f8282546117169190611d2c565b335f908152601160205260408120805483919083906117a6908490611d2c565b90915550506001600160a01b0383165f90815260116020526040812080548492906117d2908490611cd1565b90915550610b6e905082610f4d565b6001600160a01b03841661180a5760405163e602df0560e01b81525f60048201526024016108c3565b6001600160a01b03831661183357604051634a1406b160e11b81525f60048201526024016108c3565b6001600160a01b038085165f90815260076020908152604080832093871683529290522082905580156118ae57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516118a591815260200190565b60405180910390a35b50505050565b6001600160a01b038381165f908152600760209081526040808320938616835292905220545f1981146118ae578181101561191b57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016108c3565b6118ae84848484035f6117e1565b5f610b6e83670de0b6b3a764000084611512565b5f610b6e8383670de0b6b3a7640000611512565b6001600160a01b0381168114610cba575f80fd5b8015158114610cba575f80fd5b5f8060408385031215611983575f80fd5b823561198e81611951565b9150602083013561199e81611965565b809150509250929050565b5f602082840312156119b9575f80fd5b8135610b6e81611951565b5f602080835283518060208501525f5b818110156119f0578581018301518582016040015282016119d4565b505f604082860101526040601f19601f8301168501019250505092915050565b5f60208284031215611a20575f80fd5b5035919050565b5f8060408385031215611a38575f80fd5b8235611a4381611951565b946020939093013593505050565b80356001600160e01b031981168114611a68575f80fd5b919050565b5f60208284031215611a7d575f80fd5b610b6e82611a51565b803560ff81168114611a68575f80fd5b5f805f60608486031215611aa8575f80fd5b611ab184611a86565b9250611abf60208501611a51565b91506040840135611acf81611965565b809150509250925092565b5f805f60608486031215611aec575f80fd5b8335611af781611951565b92506020840135611b0781611951565b929592945050506040919091013590565b5f8060408385031215611b29575f80fd5b61198e83611a51565b5f805f60608486031215611b44575f80fd5b8335611b4f81611951565b9250611abf60208501611a86565b5f8060408385031215611b6e575f80fd5b8235611b7981611951565b9150602083013561199e81611951565b5f805f60608486031215611b9b575f80fd5b8335611ba681611951565b92506020840135611bb681611951565b9150611bc460408501611a51565b90509250925092565b5f8060408385031215611bde575f80fd5b611be783611a86565b9150611bf560208401611a51565b90509250929050565b5f8060408385031215611c0f575f80fd5b8235611c1a81611951565b9150611bf560208401611a86565b60208082526018908201527f4d6f636b4c69646f3a206e6f7420617574686f72697a65640000000000000000604082015260600190565b600181811c90821680611c7357607f821691505b602082108103611c9157634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b808201808211156109f5576109f5611cbd565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b5f60208284031215611d21575f80fd5b8151610b6e81611965565b818103818111156109f5576109f5611cbd56fe9d9c909296d9c674451c0c24f02cb64981eb3b727f99865939192f880a755dcbddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220c64c96e3308b8e17d92ad04d2f2a29ffc25a8efc4027bf469d829c7c609dd6d364736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "allowance(address,address)": "dd62ed3e",
  "approve(address,uint256)": "095ea7b3",
  "authority()": "bf7e214f",
  "balanceOf(address)": "70a08231",
  "burn(address,uint256)": "9dc29fac",
  "burn(uint256)": "42966c68",
  "canCall(address,address,bytes4)": "b7009613",
  "decimals()": "313ce567",
  "doesRoleHaveCapability(uint8,bytes4)": "e688747b",
  "doesUserHaveRole(address,uint8)": "ea7ca276",
  "getBufferedEther()": "47b714e0",
  "getPooledEthByShares(uint256)": "7a28fb88",
  "getRate()": "679aefce",
  "getRolesWithCapability(bytes4)": "ed0d0efb",
  "getSharesByPooledEth(uint256)": "19208451",
  "getTargetCustomAuthority(address)": "c53a3985",
  "getTotalPooledEther()": "37cfdaca",
  "getTotalShares()": "d5002f2e",
  "getUserRoles(address)": "06a36aee",
  "isCapabilityPublic(bytes4)": "0bade8a4",
  "isCompetitionMode()": "7a8c63b5",
  "isUnrestricted(address)": "aed30777",
  "maxMintAmount()": "239c70ae",
  "mint(address,uint256)": "40c10f19",
  "mint(uint256)": "a0712d68",
  "name()": "06fdde03",
  "owner()": "8da5cb5b",
  "setAuthority(address)": "7a9e5e4b",
  "setMaxMintAmount(uint256)": "088a4ed0",
  "setPublicCapability(bytes4,bool)": "4b5159da",
  "setRate(uint256)": "34fcf437",
  "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
  "setTargetCustomAuthority(address,address)": "728b952b",
  "setUnrestrictedMintStatus(address,bool)": "05f05a94",
  "setUserRole(address,uint8,bool)": "67aff484",
  "sharesOf(address)": "f5eb42dc",
  "submit(address)": "a1903eab",
  "symbol()": "95d89b41",
  "totalSupply()": "18160ddd",
  "transfer(address,uint256)": "a9059cbb",
  "transferFrom(address,address,uint256)": "23b872dd",
  "transferOwnership(address)": "f2fde38b",
  "transferShares(address,uint256)": "8fcb4e5b",
  "transferSharesFrom(address,address,uint256)": "6d780459"
} as const
};
