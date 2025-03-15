export const ERC20Mintable = {
  name: 'ERC20Mintable' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "symbol",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "decimals",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "admin",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "isCompetitionMode_",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "maxMintAmount_",
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
  bytecode: '0x61010060405234801562000011575f80fd5b5060405162001f8938038062001f8983398101604081905262000034916200028a565b823081818989895f620000488482620003cb565b506001620000578382620003cb565b5060ff81166080524660a0526200006d6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a35050505090151560e052600c55506200051192505050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f6040516200014c919062000497565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b5f52604160045260245ffd5b5f82601f830112620001d8575f80fd5b81516001600160401b0380821115620001f557620001f5620001b4565b604051601f8301601f19908116603f01168101908282118183101715620002205762000220620001b4565b81604052838152602092508660208588010111156200023d575f80fd5b5f91505b8382101562000260578582018301518183018401529082019062000241565b5f602085830101528094505050505092915050565b8051801515811462000285575f80fd5b919050565b5f805f805f8060c08789031215620002a0575f80fd5b86516001600160401b0380821115620002b7575f80fd5b620002c58a838b01620001c8565b97506020890151915080821115620002db575f80fd5b50620002ea89828a01620001c8565b955050604087015160ff8116811462000301575f80fd5b60608801519094506001600160a01b03811681146200031e575f80fd5b92506200032e6080880162000275565b915060a087015190509295509295509295565b600181811c908216806200035657607f821691505b6020821081036200037557634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620003c657805f5260205f20601f840160051c81016020851015620003a25750805b601f840160051c820191505b81811015620003c3575f8155600101620003ae565b50505b505050565b81516001600160401b03811115620003e757620003e7620001b4565b620003ff81620003f8845462000341565b846200037b565b602080601f83116001811462000435575f84156200041d5750858301515b5f19600386901b1c1916600185901b1785556200048f565b5f85815260208120601f198616915b82811015620004655788860151825594840194600190910190840162000444565b50858210156200048357878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f808354620004a68162000341565b60018281168015620004c15760018114620004d75762000505565b60ff198416875282151583028701945062000505565b875f526020805f205f5b85811015620004fc5781548a820152908401908201620004e1565b50505082870194505b50929695505050505050565b60805160a05160c05160e051611a1a6200056f5f395f81816103c7015281816105d3015281816106e8015281816109bb01528181610a5801528181610d8a0152610deb01525f61099701525f61096201525f6103080152611a1a5ff3fe608060405234801561000f575f80fd5b5060043610610213575f3560e01c80637a8c63b51161011f578063b7009613116100a9578063dd62ed3e11610079578063dd62ed3e1461050a578063e688747b14610534578063ea7ca27614610569578063ed0d0efb1461059f578063f2fde38b146105be575f80fd5b8063b7009613146104a9578063bf7e214f146104bc578063c53a3985146104cf578063d505accf146104f7575f80fd5b806395d89b41116100ef57806395d89b41146104465780639dc29fac1461044e578063a0712d6814610461578063a9059cbb14610474578063aed3077714610487575f80fd5b80637a8c63b5146103c25780637a9e5e4b146103e95780637ecebe00146103fc5780638da5cb5b1461041b575f80fd5b806323b872dd116101a057806342966c681161017057806342966c68146103575780634b5159da1461036a57806367aff4841461037d57806370a0823114610390578063728b952b146103af575f80fd5b806323b872dd146102f0578063313ce567146103035780633644e5151461033c57806340c10f1914610344575f80fd5b8063095ea7b3116101e6578063095ea7b3146102865780630bade8a4146102a95780630ea9b75b146102cb57806318160ddd146102de578063239c70ae146102e7575f80fd5b806305f05a941461021757806306a36aee1461022c57806306fdde031461025e578063088a4ed014610273575b5f80fd5b61022a6102253660046114ae565b6105d1565b005b61024b61023a3660046114e5565b60096020525f908152604090205481565b6040519081526020015b60405180910390f35b61026661065b565b6040516102559190611500565b61022a61028136600461154c565b6106e6565b610299610294366004611563565b610742565b6040519015158152602001610255565b6102996102b73660046115a9565b600a6020525f908152604090205460ff1681565b61022a6102d93660046115d2565b6107ae565b61024b60025481565b61024b600c5481565b6102996102fe366004611616565b610883565b61032a7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610255565b61024b61095f565b61022a610352366004611563565b6109b9565b61022a61036536600461154c565b610a56565b61022a610378366004611654565b610aba565b61022a61038b36600461166e565b610b4a565b61024b61039e3660046114e5565b60036020525f908152604090205481565b61022a6103bd366004611699565b610c0f565b6102997f000000000000000000000000000000000000000000000000000000000000000081565b61022a6103f73660046114e5565b610c96565b61024b61040a3660046114e5565b60056020525f908152604090205481565b60065461042e906001600160a01b031681565b6040516001600160a01b039091168152602001610255565b610266610d7b565b61022a61045c366004611563565b610d88565b61022a61046f36600461154c565b610de9565b610299610482366004611563565b610e82565b6102996104953660046114e5565b600d6020525f908152604090205460ff1681565b6102996104b73660046116c5565b610ee5565b60075461042e906001600160a01b031681565b61042e6104dd3660046114e5565b60086020525f90815260409020546001600160a01b031681565b61022a610505366004611709565b610fde565b61024b610518366004611699565b600460209081525f928352604080842090915290825290205481565b610299610542366004611772565b6001600160e01b0319165f908152600b602052604090205460ff919091161c600116151590565b6102996105773660046117a3565b6001600160a01b03919091165f90815260096020526040902054600160ff9092161c16151590565b61024b6105ad3660046115a9565b600b6020525f908152604090205481565b61022a6105cc3660046114e5565b61121c565b7f0000000000000000000000000000000000000000000000000000000000000000156106315761060c335f356001600160e01b031916611298565b6106315760405162461bcd60e51b8152600401610628906117cd565b60405180910390fd5b6001600160a01b03919091165f908152600d60205260409020805460ff1916911515919091179055565b5f805461066790611804565b80601f016020809104026020016040519081016040528092919081815260200182805461069390611804565b80156106de5780601f106106b5576101008083540402835291602001916106de565b820191905f5260205f20905b8154815290600101906020018083116106c157829003601f168201915b505050505081565b7f00000000000000000000000000000000000000000000000000000000000000001561073d57610721335f356001600160e01b031916611298565b61073d5760405162461bcd60e51b8152600401610628906117cd565b600c55565b335f8181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061079c9086815260200190565b60405180910390a35060015b92915050565b6107c3335f356001600160e01b031916611298565b6107df5760405162461bcd60e51b81526004016106289061183c565b801561080e576001600160e01b031982165f908152600b602052604090208054600160ff86161b179055610834565b6001600160e01b031982165f908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610876911515815260200190565b60405180910390a3505050565b6001600160a01b0383165f9081526004602090815260408083203384529091528120545f1981146108dc576108b88382611876565b6001600160a01b0386165f9081526004602090815260408083203384529091529020555b6001600160a01b0385165f9081526003602052604081208054859290610903908490611876565b90915550506001600160a01b038085165f81815260036020526040908190208054870190555190918716905f805160206119c58339815191529061094a9087815260200190565b60405180910390a360019150505b9392505050565b5f7f000000000000000000000000000000000000000000000000000000000000000046146109945761098f61133f565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000015610a10576109f4335f356001600160e01b031916611298565b610a105760405162461bcd60e51b8152600401610628906117cd565b335f908152600d602052604090205460ff16610a4857600c54811115610a485760405162461bcd60e51b815260040161062890611889565b610a5282826113d7565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610aad57610a91335f356001600160e01b031916611298565b610aad5760405162461bcd60e51b8152600401610628906117cd565b610ab7338261142e565b50565b610acf335f356001600160e01b031916611298565b610aeb5760405162461bcd60e51b81526004016106289061183c565b6001600160e01b031982165f818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610b5f335f356001600160e01b031916611298565b610b7b5760405162461bcd60e51b81526004016106289061183c565b8015610ba9576001600160a01b0383165f9081526009602052604090208054600160ff85161b179055610bce565b6001600160a01b0383165f9081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610876911515815260200190565b610c24335f356001600160e01b031916611298565b610c405760405162461bcd60e51b81526004016106289061183c565b6001600160a01b038281165f8181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610d28575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610ce990339030906001600160e01b03195f3516906004016118cb565b602060405180830381865afa158015610d04573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d2891906118f8565b610d30575f80fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a350565b6001805461066790611804565b7f000000000000000000000000000000000000000000000000000000000000000015610ddf57610dc3335f356001600160e01b031916611298565b610ddf5760405162461bcd60e51b8152600401610628906117cd565b610a52828261142e565b7f000000000000000000000000000000000000000000000000000000000000000015610e4057610e24335f356001600160e01b031916611298565b610e405760405162461bcd60e51b8152600401610628906117cd565b335f908152600d602052604090205460ff16610e7857600c54811115610e785760405162461bcd60e51b815260040161062890611889565b610ab733826113d7565b335f90815260036020526040812080548391908390610ea2908490611876565b90915550506001600160a01b0383165f81815260036020526040908190208054850190555133905f805160206119c58339815191529061079c9086815260200190565b6001600160a01b038083165f908152600860205260408120549091168015610f7e5760405163b700961360e01b81526001600160a01b0382169063b700961390610f37908890889088906004016118cb565b602060405180830381865afa158015610f52573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f7691906118f8565b915050610958565b6001600160e01b031983165f908152600a602052604090205460ff1680610fd557506001600160e01b031983165f908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561102e5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610628565b5f600161103961095f565b6001600160a01b038a81165f8181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f1981840301815282825280516020918201205f84529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611141573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116158015906111775750876001600160a01b0316816001600160a01b0316145b6111b45760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610628565b6001600160a01b039081165f9081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611231335f356001600160e01b031916611298565b61124d5760405162461bcd60e51b81526004016106289061183c565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a350565b6007545f906001600160a01b0316801580159061131f575060405163b700961360e01b81526001600160a01b0382169063b7009613906112e0908790309088906004016118cb565b602060405180830381865afa1580156112fb573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061131f91906118f8565b8061133757506006546001600160a01b038581169116145b949350505050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f60405161136f9190611913565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8060025f8282546113e891906119b1565b90915550506001600160a01b0382165f818152600360209081526040808320805486019055518481525f805160206119c583398151915291015b60405180910390a35050565b6001600160a01b0382165f9081526003602052604081208054839290611455908490611876565b90915550506002805482900390556040518181525f906001600160a01b038416905f805160206119c583398151915290602001611422565b6001600160a01b0381168114610ab7575f80fd5b8015158114610ab7575f80fd5b5f80604083850312156114bf575f80fd5b82356114ca8161148d565b915060208301356114da816114a1565b809150509250929050565b5f602082840312156114f5575f80fd5b81356109588161148d565b5f602080835283518060208501525f5b8181101561152c57858101830151858201604001528201611510565b505f604082860101526040601f19601f8301168501019250505092915050565b5f6020828403121561155c575f80fd5b5035919050565b5f8060408385031215611574575f80fd5b823561157f8161148d565b946020939093013593505050565b80356001600160e01b0319811681146115a4575f80fd5b919050565b5f602082840312156115b9575f80fd5b6109588261158d565b803560ff811681146115a4575f80fd5b5f805f606084860312156115e4575f80fd5b6115ed846115c2565b92506115fb6020850161158d565b9150604084013561160b816114a1565b809150509250925092565b5f805f60608486031215611628575f80fd5b83356116338161148d565b925060208401356116438161148d565b929592945050506040919091013590565b5f8060408385031215611665575f80fd5b6114ca8361158d565b5f805f60608486031215611680575f80fd5b833561168b8161148d565b92506115fb602085016115c2565b5f80604083850312156116aa575f80fd5b82356116b58161148d565b915060208301356114da8161148d565b5f805f606084860312156116d7575f80fd5b83356116e28161148d565b925060208401356116f28161148d565b91506117006040850161158d565b90509250925092565b5f805f805f805f60e0888a03121561171f575f80fd5b873561172a8161148d565b9650602088013561173a8161148d565b95506040880135945060608801359350611756608089016115c2565b925060a0880135915060c0880135905092959891949750929550565b5f8060408385031215611783575f80fd5b61178c836115c2565b915061179a6020840161158d565b90509250929050565b5f80604083850312156117b4575f80fd5b82356117bf8161148d565b915061179a602084016115c2565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b600181811c9082168061181857607f821691505b60208210810361183657634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b818103818111156107a8576107a8611862565b60208082526022908201527f45524332304d696e7461626c653a20496e76616c6964206d696e7420616d6f756040820152611b9d60f21b606082015260800190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b5f60208284031215611908575f80fd5b8151610958816114a1565b5f8083545f60018260011c9150600183168061193057607f831692505b6020808410820361194f57634e487b7160e01b5f52602260045260245ffd5b8180156119635760018114611978576119a3565b60ff19861689528415158502890196506119a3565b5f8a8152602090205f5b8681101561199b5781548b820152908501908301611982565b505084890196505b509498975050505050505050565b808201808211156107a8576107a861186256feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220327bc91d6f09a925c146c80290bfde7f90aab0f56a72af8861f409aa3948d81964736f6c63430008160033' as `0x${string}`,
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
  "getRolesWithCapability(bytes4)": "ed0d0efb",
  "getTargetCustomAuthority(address)": "c53a3985",
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
  "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
  "setTargetCustomAuthority(address,address)": "728b952b",
  "setUnrestrictedMintStatus(address,bool)": "05f05a94",
  "setUserRole(address,uint8,bool)": "67aff484",
  "symbol()": "95d89b41",
  "totalSupply()": "18160ddd",
  "transfer(address,uint256)": "a9059cbb",
  "transferFrom(address,address,uint256)": "23b872dd",
  "transferOwnership(address)": "f2fde38b"
} as const
};
