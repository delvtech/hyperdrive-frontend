export const MockRocketPool = {
  name: 'MockRocketPool' as const,
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
    "name": "allowance",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
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
    "name": "approve",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
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
        "name": "destination",
        "type": "address",
        "internalType": "address"
      },
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
    "name": "getEthValue",
    "inputs": [
      {
        "name": "_rethAmount",
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
    "name": "getRethValue",
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
        "name": "destination",
        "type": "address",
        "internalType": "address"
      },
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
    "name": "mint",
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
    "name": "nonces",
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
    "name": "permit",
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
      },
      {
        "name": "value",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "deadline",
        "type": "uint256",
        "internalType": "uint256"
      },
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
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
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
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
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
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
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
        "name": "amount",
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
        "name": "amount",
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
  }
] as const,
  bytecode: '0x61010060405234801562000011575f80fd5b506040516200241c3803806200241c83398101604081905262000034916200020d565b6040518060400160405280600e81526020016d0a4dec6d6cae8a0deded8408aa8960931b815250604051806040016040528060048152602001630a48aa8960e31b815250601285858582308181898989825f908162000094919062000304565b506001620000a3838262000304565b5060ff81166080524660a052620000b962000173565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a35050505090151560e052600c55505050600e94909455505042600f55506200044a9050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f604051620001a59190620003d0565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b5f805f806080858703121562000221575f80fd5b845160208601519094506001600160a01b038116811462000240575f80fd5b6040860151909350801515811462000256575f80fd5b6060959095015193969295505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806200028f57607f821691505b602082108103620002ae57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002ff57805f5260205f20601f840160051c81016020851015620002db5750805b601f840160051c820191505b81811015620002fc575f8155600101620002e7565b50505b505050565b81516001600160401b0381111562000320576200032062000266565b62000338816200033184546200027a565b84620002b4565b602080601f8311600181146200036e575f8415620003565750858301515b5f19600386901b1c1916600185901b178555620003c8565b5f85815260208120601f198616915b828110156200039e578886015182559484019460019091019084016200037d565b5085821015620003bc57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f808354620003df816200027a565b60018281168015620003fa576001811462000410576200043e565b60ff19841687528215158302870194506200043e565b875f526020805f205f5b85811015620004355781548a8201529084019082016200041a565b50505082870194505b50929695505050505050565b60805160a05160c05160e051611f6d620004af5f395f8181610587015281816108c4015281816109d901528181610c5201528181610d2601528181610dc30152818161118501526111e601525f610cec01525f610cb701525f6103e30152611f6d5ff3fe60806040526004361061026a575f3560e01c8063728b952b1161014a578063a9059cbb116100be578063d505accf11610078578063d505accf146107a0578063dd62ed3e146107bf578063e688747b146107f5578063ea7ca27614610836578063ed0d0efb14610878578063f2fde38b146108a3575f80fd5b8063a9059cbb146106cd578063aed30777146106ec578063b70096131461071a578063bf7e214f14610739578063c53a398514610758578063d5002f2e1461078c575f80fd5b80638da5cb5b1161010f5780638da5cb5b146106125780638fcb4e5b1461064957806395d89b41146106685780639dc29fac1461067c578063a0712d681461069b578063a1903eab146106ba575f80fd5b8063728b952b146105575780637a8c63b5146105765780637a9e5e4b146105a95780637ecebe00146105c85780638b32fa23146105f3575f80fd5b806334fcf437116101e15780634346f03e116101a65780634346f03e1461049c5780634b5159da146104bb578063679aefce146104da57806367aff484146104ee5780636d7804591461050d57806370a082311461052c575f80fd5b806334fcf437146104175780633644e5151461043657806337cfdaca1461044a57806340c10f191461045e57806342966c681461047d575f80fd5b80630bade8a4116102325780630bade8a41461033c5780630ea9b75b1461036a57806318160ddd14610389578063239c70ae1461039e57806323b872dd146103b3578063313ce567146103d2575f80fd5b806305f05a941461026e57806306a36aee1461028f57806306fdde03146102cd578063088a4ed0146102ee578063095ea7b31461030d575b5f80fd5b348015610279575f80fd5b5061028d610288366004611a01565b6108c2565b005b34801561029a575f80fd5b506102ba6102a9366004611a38565b60096020525f908152604090205481565b6040519081526020015b60405180910390f35b3480156102d8575f80fd5b506102e161094c565b6040516102c49190611a53565b3480156102f9575f80fd5b5061028d610308366004611a9f565b6109d7565b348015610318575f80fd5b5061032c610327366004611ab6565b610a33565b60405190151581526020016102c4565b348015610347575f80fd5b5061032c610356366004611afc565b600a6020525f908152604090205460ff1681565b348015610375575f80fd5b5061028d610384366004611b25565b610a9f565b348015610394575f80fd5b506102ba60025481565b3480156103a9575f80fd5b506102ba600c5481565b3480156103be575f80fd5b5061032c6103cd366004611b69565b610b74565b3480156103dd575f80fd5b506104057f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016102c4565b348015610422575f80fd5b5061028d610431366004611a9f565b610c50565b348015610441575f80fd5b506102ba610cb4565b348015610455575f80fd5b506102ba610d0e565b348015610469575f80fd5b5061028d610478366004611ab6565b610d24565b348015610488575f80fd5b5061028d610497366004611a9f565b610dc1565b3480156104a7575f80fd5b506102ba6104b6366004611a9f565b610e25565b3480156104c6575f80fd5b5061028d6104d5366004611ba7565b610e42565b3480156104e5575f80fd5b50600e546102ba565b3480156104f9575f80fd5b5061028d610508366004611bc1565b610ed2565b348015610518575f80fd5b506102ba610527366004611b69565b610f97565b348015610537575f80fd5b506102ba610546366004611a38565b60036020525f908152604090205481565b348015610562575f80fd5b5061028d610571366004611bec565b610fcd565b348015610581575f80fd5b5061032c7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105b4575f80fd5b5061028d6105c3366004611a38565b611054565b3480156105d3575f80fd5b506102ba6105e2366004611a38565b60056020525f908152604090205481565b3480156105fe575f80fd5b506102ba61060d366004611a9f565b611139565b34801561061d575f80fd5b50600654610631906001600160a01b031681565b6040516001600160a01b0390911681526020016102c4565b348015610654575f80fd5b506102ba610663366004611ab6565b61114d565b348015610673575f80fd5b506102e1611176565b348015610687575f80fd5b5061028d610696366004611ab6565b611183565b3480156106a6575f80fd5b5061028d6106b5366004611a9f565b6111e4565b6102ba6106c8366004611a38565b61127d565b3480156106d8575f80fd5b5061032c6106e7366004611ab6565b611304565b3480156106f7575f80fd5b5061032c610706366004611a38565b600d6020525f908152604090205460ff1681565b348015610725575f80fd5b5061032c610734366004611c18565b611367565b348015610744575f80fd5b50600754610631906001600160a01b031681565b348015610763575f80fd5b50610631610772366004611a38565b60086020525f90815260409020546001600160a01b031681565b348015610797575f80fd5b506011546102ba565b3480156107ab575f80fd5b5061028d6107ba366004611c5c565b611460565b3480156107ca575f80fd5b506102ba6107d9366004611bec565b600460209081525f928352604080842090915290825290205481565b348015610800575f80fd5b5061032c61080f366004611cc5565b6001600160e01b0319165f908152600b602052604090205460ff919091161c600116151590565b348015610841575f80fd5b5061032c610850366004611cf6565b6001600160a01b03919091165f90815260096020526040902054600160ff9092161c16151590565b348015610883575f80fd5b506102ba610892366004611afc565b600b6020525f908152604090205481565b3480156108ae575f80fd5b5061028d6108bd366004611a38565b61169e565b7f000000000000000000000000000000000000000000000000000000000000000015610922576108fd335f356001600160e01b03191661171a565b6109225760405162461bcd60e51b815260040161091990611d20565b60405180910390fd5b6001600160a01b03919091165f908152600d60205260409020805460ff1916911515919091179055565b5f805461095890611d57565b80601f016020809104026020016040519081016040528092919081815260200182805461098490611d57565b80156109cf5780601f106109a6576101008083540402835291602001916109cf565b820191905f5260205f20905b8154815290600101906020018083116109b257829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000015610a2e57610a12335f356001600160e01b03191661171a565b610a2e5760405162461bcd60e51b815260040161091990611d20565b600c55565b335f8181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610a8d9086815260200190565b60405180910390a35060015b92915050565b610ab4335f356001600160e01b03191661171a565b610ad05760405162461bcd60e51b815260040161091990611d8f565b8015610aff576001600160e01b031982165f908152600b602052604090208054600160ff86161b179055610b25565b6001600160e01b031982165f908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610b67911515815260200190565b60405180910390a3505050565b6001600160a01b0383165f9081526004602090815260408083203384529091528120545f198114610bcd57610ba98382611dc9565b6001600160a01b0386165f9081526004602090815260408083203384529091529020555b6001600160a01b0385165f9081526003602052604081208054859290610bf4908490611dc9565b90915550506001600160a01b038085165f81815260036020526040908190208054870190555190918716905f80516020611f1883398151915290610c3b9087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610ca757610c8b335f356001600160e01b03191661171a565b610ca75760405162461bcd60e51b815260040161091990611d20565b610caf6117c1565b600e55565b5f7f00000000000000000000000000000000000000000000000000000000000000004614610ce957610ce46117f0565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b5f610d17611888565b601054610ce49190611ddc565b7f000000000000000000000000000000000000000000000000000000000000000015610d7b57610d5f335f356001600160e01b03191661171a565b610d7b5760405162461bcd60e51b815260040161091990611d20565b335f908152600d602052604090205460ff16610db357600c54811115610db35760405162461bcd60e51b815260040161091990611def565b610dbd82826118e7565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610e1857610dfc335f356001600160e01b03191661171a565b610e185760405162461bcd60e51b815260040161091990611d20565b610e22338261193e565b50565b5f610a99610e3260115490565b610e3a610d0e565b84919061199d565b610e57335f356001600160e01b03191661171a565b610e735760405162461bcd60e51b815260040161091990611d8f565b6001600160e01b031982165f818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610ee7335f356001600160e01b03191661171a565b610f035760405162461bcd60e51b815260040161091990611d8f565b8015610f31576001600160a01b0383165f9081526009602052604090208054600160ff85161b179055610f56565b6001600160a01b0383165f9081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610b67911515815260200190565b5f610fa06117c1565b5f610fb7610fac610d0e565b60115485919061199d565b9050610fc4858583610b74565b50949350505050565b610fe2335f356001600160e01b03191661171a565b610ffe5760405162461bcd60e51b815260040161091990611d8f565b6001600160a01b038281165f8181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b03163314806110e6575060075460405163b700961360e01b81526001600160a01b039091169063b7009613906110a790339030906001600160e01b03195f351690600401611e31565b602060405180830381865afa1580156110c2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110e69190611e5e565b6110ee575f80fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a350565b5f610a99611145610d0e565b601154610e3a565b5f6111566117c1565b5f611162610fac610d0e565b905061116e8482611304565b509392505050565b6001805461095890611d57565b7f0000000000000000000000000000000000000000000000000000000000000000156111da576111be335f356001600160e01b03191661171a565b6111da5760405162461bcd60e51b815260040161091990611d20565b610dbd828261193e565b7f00000000000000000000000000000000000000000000000000000000000000001561123b5761121f335f356001600160e01b03191661171a565b61123b5760405162461bcd60e51b815260040161091990611d20565b335f908152600d602052604090205460ff1661127357600c548111156112735760405162461bcd60e51b815260040161091990611def565b610e2233826118e7565b5f6112866117c1565b6011545f036112ac5734601181905560108190556112a59033906118e7565b5034919050565b5f6112c96112b960115490565b6112c1610d0e565b34919061199d565b90503460105f8282546112dc9190611ddc565b925050819055508060115f8282546112f49190611ddc565b90915550610a99905033346118e7565b335f90815260036020526040812080548391908390611324908490611dc9565b90915550506001600160a01b0383165f81815260036020526040908190208054850190555133905f80516020611f1883398151915290610a8d9086815260200190565b6001600160a01b038083165f9081526008602052604081205490911680156114005760405163b700961360e01b81526001600160a01b0382169063b7009613906113b990889088908890600401611e31565b602060405180830381865afa1580156113d4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113f89190611e5e565b915050610c49565b6001600160e01b031983165f908152600a602052604090205460ff168061145757506001600160e01b031983165f908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b428410156114b05760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610919565b5f60016114bb610cb4565b6001600160a01b038a81165f8181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f1981840301815282825280516020918201205f84529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156115c3573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116158015906115f95750876001600160a01b0316816001600160a01b0316145b6116365760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610919565b6001600160a01b039081165f9081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6116b3335f356001600160e01b03191661171a565b6116cf5760405162461bcd60e51b815260040161091990611d8f565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a350565b6007545f906001600160a01b031680158015906117a1575060405163b700961360e01b81526001600160a01b0382169063b70096139061176290879030908890600401611e31565b602060405180830381865afa15801561177d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117a19190611e5e565b806117b957506006546001600160a01b038581169116145b949350505050565b5f6117ca611888565b905080156117e9578060105f8282546117e39190611ddc565b90915550505b5042600f55565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f6040516118209190611e79565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b5f600e545f0361189757505f90565b600f544210156118a657505f90565b5f6118c36301e13380600f54426118bd9190611dc9565b906119b8565b90505f610c496118de83600e546119cc90919063ffffffff16565b601054906119cc565b8060025f8282546118f89190611ddc565b90915550506001600160a01b0382165f818152600360209081526040808320805486019055518481525f80516020611f1883398151915291015b60405180910390a35050565b6001600160a01b0382165f9081526003602052604081208054839290611965908490611dc9565b90915550506002805482900390556040518181525f906001600160a01b038416905f80516020611f1883398151915290602001611932565b5f825f1904841183021582026119b1575f80fd5b5091020490565b5f610c4983670de0b6b3a76400008461199d565b5f610c498383670de0b6b3a764000061199d565b6001600160a01b0381168114610e22575f80fd5b8015158114610e22575f80fd5b5f8060408385031215611a12575f80fd5b8235611a1d816119e0565b91506020830135611a2d816119f4565b809150509250929050565b5f60208284031215611a48575f80fd5b8135610c49816119e0565b5f602080835283518060208501525f5b81811015611a7f57858101830151858201604001528201611a63565b505f604082860101526040601f19601f8301168501019250505092915050565b5f60208284031215611aaf575f80fd5b5035919050565b5f8060408385031215611ac7575f80fd5b8235611ad2816119e0565b946020939093013593505050565b80356001600160e01b031981168114611af7575f80fd5b919050565b5f60208284031215611b0c575f80fd5b610c4982611ae0565b803560ff81168114611af7575f80fd5b5f805f60608486031215611b37575f80fd5b611b4084611b15565b9250611b4e60208501611ae0565b91506040840135611b5e816119f4565b809150509250925092565b5f805f60608486031215611b7b575f80fd5b8335611b86816119e0565b92506020840135611b96816119e0565b929592945050506040919091013590565b5f8060408385031215611bb8575f80fd5b611a1d83611ae0565b5f805f60608486031215611bd3575f80fd5b8335611bde816119e0565b9250611b4e60208501611b15565b5f8060408385031215611bfd575f80fd5b8235611c08816119e0565b91506020830135611a2d816119e0565b5f805f60608486031215611c2a575f80fd5b8335611c35816119e0565b92506020840135611c45816119e0565b9150611c5360408501611ae0565b90509250925092565b5f805f805f805f60e0888a031215611c72575f80fd5b8735611c7d816119e0565b96506020880135611c8d816119e0565b95506040880135945060608801359350611ca960808901611b15565b925060a0880135915060c0880135905092959891949750929550565b5f8060408385031215611cd6575f80fd5b611cdf83611b15565b9150611ced60208401611ae0565b90509250929050565b5f8060408385031215611d07575f80fd5b8235611d12816119e0565b9150611ced60208401611b15565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b600181811c90821680611d6b57607f821691505b602082108103611d8957634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610a9957610a99611db5565b80820180821115610a9957610a99611db5565b60208082526022908201527f45524332304d696e7461626c653a20496e76616c6964206d696e7420616d6f756040820152611b9d60f21b606082015260800190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b5f60208284031215611e6e575f80fd5b8151610c49816119f4565b5f8083545f60018260011c91506001831680611e9657607f831692505b60208084108203611eb557634e487b7160e01b5f52602260045260245ffd5b818015611ec95760018114611ede57611f09565b60ff1986168952841515850289019650611f09565b5f8a8152602090205f5b86811015611f015781548b820152908501908301611ee8565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220e8e9ccbe437120ca4c0e1197fab17ff508ebe5606158c7b314115a9315adb80764736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "DOMAIN_SEPARATOR()": "3644e515",
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
  "getEthValue(uint256)": "8b32fa23",
  "getRate()": "679aefce",
  "getRethValue(uint256)": "4346f03e",
  "getRolesWithCapability(bytes4)": "ed0d0efb",
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
  "nonces(address)": "7ecebe00",
  "owner()": "8da5cb5b",
  "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
  "setAuthority(address)": "7a9e5e4b",
  "setMaxMintAmount(uint256)": "088a4ed0",
  "setPublicCapability(bytes4,bool)": "4b5159da",
  "setRate(uint256)": "34fcf437",
  "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
  "setTargetCustomAuthority(address,address)": "728b952b",
  "setUnrestrictedMintStatus(address,bool)": "05f05a94",
  "setUserRole(address,uint8,bool)": "67aff484",
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
