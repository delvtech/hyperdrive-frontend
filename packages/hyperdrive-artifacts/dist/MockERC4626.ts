export const MockERC4626 = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract ERC20Mintable",
          "name": "_asset",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_initialRate",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_admin",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isCompetitionMode_",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
          "name": "amount",
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
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract Authority",
          "name": "newAuthority",
          "type": "address"
        }
      ],
      "name": "AuthorityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "PublicCapabilityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "indexed": true,
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "RoleCapabilityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract Authority",
          "name": "authority",
          "type": "address"
        }
      ],
      "name": "TargetCustomAuthorityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "UserRoleUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "type": "event"
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
        }
      ],
      "name": "allowance",
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
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "asset",
      "outputs": [
        {
          "internalType": "contract ERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "authority",
      "outputs": [
        {
          "internalType": "contract Authority",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        }
      ],
      "name": "canCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "convertToAssets",
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
          "name": "assets",
          "type": "uint256"
        }
      ],
      "name": "convertToShares",
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
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_assets",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "deposit",
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
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        }
      ],
      "name": "doesRoleHaveCapability",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "doesUserHaveRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRate",
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
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "name": "getRolesWithCapability",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "getTargetCustomAuthority",
      "outputs": [
        {
          "internalType": "contract Authority",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "getUserRoles",
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
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "name": "isCapabilityPublic",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
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
      "name": "maxDeposit",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "maxMint",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "maxRedeem",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "maxWithdraw",
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
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "mint",
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
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
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
      "name": "nonces",
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
      "inputs": [],
      "name": "owner",
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
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
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
      "name": "permit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        }
      ],
      "name": "previewDeposit",
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
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "previewMint",
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
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "previewRedeem",
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
          "name": "assets",
          "type": "uint256"
        }
      ],
      "name": "previewWithdraw",
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
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "redeem",
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
          "internalType": "contract Authority",
          "name": "newAuthority",
          "type": "address"
        }
      ],
      "name": "setAuthority",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setPublicCapability",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_rate_",
          "type": "uint256"
        }
      ],
      "name": "setRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setRoleCapability",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "contract Authority",
          "name": "customAuthority",
          "type": "address"
        }
      ],
      "name": "setTargetCustomAuthority",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setUserRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalAssets",
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
      "inputs": [],
      "name": "totalSupply",
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
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
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
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_assets",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x6101206040523480156200001257600080fd5b506040516200279938038062002799833981016040819052620000359162000310565b813081818989898181846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200007d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000a39190620003c8565b6000620000b1848262000483565b506001620000c0838262000483565b5060ff81166080524660a052620000d662000196565b60c0525050506001600160a01b0392831660e0525050600680548483166001600160a01b0319918216811790925560078054938516939091169290921790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a3505050600c9390935542600d5515156101005250620005cd9350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001ca91906200054f565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b03811681146200024857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200027357600080fd5b81516001600160401b03808211156200029057620002906200024b565b604051601f8301601f19908116603f01168101908282118183101715620002bb57620002bb6200024b565b81604052838152602092508683858801011115620002d857600080fd5b600091505b83821015620002fc5785820183015181830184015290820190620002dd565b600093810190920192909252949350505050565b60008060008060008060c087890312156200032a57600080fd5b8651620003378162000232565b60208801519096506001600160401b03808211156200035557600080fd5b620003638a838b0162000261565b965060408901519150808211156200037a57600080fd5b506200038989828a0162000261565b945050606087015192506080870151620003a38162000232565b60a08801519092508015158114620003ba57600080fd5b809150509295509295509295565b600060208284031215620003db57600080fd5b815160ff81168114620003ed57600080fd5b9392505050565b600181811c908216806200040957607f821691505b6020821081036200042a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200047e57600081815260208120601f850160051c81016020861015620004595750805b601f850160051c820191505b818110156200047a5782815560010162000465565b5050505b505050565b81516001600160401b038111156200049f576200049f6200024b565b620004b781620004b08454620003f4565b8462000430565b602080601f831160018114620004ef5760008415620004d65750858301515b600019600386901b1c1916600185901b1785556200047a565b600085815260208120601f198616915b828110156200052057888601518255948401946001909101908401620004ff565b50858210156200053f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008083546200055f81620003f4565b600182811680156200057a57600181146200059057620005c1565b60ff1984168752821515830287019450620005c1565b8760005260208060002060005b85811015620005b85781548a8201529084019082016200059d565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161010051612156620006436000396000610a880152600081816103ca015281816106fb01528181611392015281816114fa015281816116770152818161170f0152818161186101526119a301526000610b4f01526000610b1f0152600061037601526121566000f3fe608060405234801561001057600080fd5b506004361061027f5760003560e01c80637a9e5e4b1161015c578063c53a3985116100ce578063dd62ed3e11610087578063dd62ed3e146105fe578063e688747b14610629578063ea7ca2761461065f578063ed0d0efb14610696578063ef8b30f7146106b6578063f2fde38b146106c957600080fd5b8063c53a398514610573578063c63d75b614610404578063c6e6f5921461059c578063ce96cb77146105af578063d505accf146105c2578063d905777e146105d557600080fd5b8063a9059cbb11610120578063a9059cbb14610501578063b3d7f6b914610514578063b460af9414610527578063b70096131461053a578063ba0876521461054d578063bf7e214f1461056057600080fd5b80637a9e5e4b146104a05780637ecebe00146104b35780638da5cb5b146104d357806394bf804d146104e657806395d89b41146104f957600080fd5b806334fcf437116101f55780634cdad506116101b95780634cdad5061461042c578063679aefce1461043f57806367aff484146104475780636e553f651461045a57806370a082311461046d578063728b952b1461048d57600080fd5b806334fcf437146103aa5780633644e515146103bd57806338d52e0f146103c5578063402d267d146104045780634b5159da1461041957600080fd5b80630a28a477116102475780630a28a4771461030a5780630bade8a41461031d5780630ea9b75b1461034057806318160ddd1461035557806323b872dd1461035e578063313ce5671461037157600080fd5b806301e1d1141461028457806306a36aee1461029f57806306fdde03146102bf57806307a2d13a146102d4578063095ea7b3146102e7575b600080fd5b61028c6106dc565b6040519081526020015b60405180910390f35b61028c6102ad366004611bd0565b60096020526000908152604090205481565b6102c761077d565b6040516102969190611bed565b61028c6102e2366004611c3b565b61080b565b6102fa6102f5366004611c54565b610838565b6040519015158152602001610296565b61028c610318366004611c3b565b6108a5565b6102fa61032b366004611c9d565b600a6020526000908152604090205460ff1681565b61035361034e366004611cd7565b6108c5565b005b61028c60025481565b6102fa61036c366004611d1e565b6109a6565b6103987f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610296565b6103536103b8366004611c3b565b610a86565b61028c610b1b565b6103ec7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610296565b61028c610412366004611bd0565b5060001990565b610353610427366004611d5f565b610b71565b61028c61043a366004611c3b565b610c03565b600c5461028c565b610353610455366004611d96565b610c0e565b61028c610468366004611dc4565b610cd6565b61028c61047b366004611bd0565b60036020526000908152604090205481565b61035361049b366004611de9565b610cea565b6103536104ae366004611bd0565b610d73565b61028c6104c1366004611bd0565b60056020526000908152604090205481565b6006546103ec906001600160a01b031681565b61028c6104f4366004611dc4565b610e5d565b6102c7610e71565b6102fa61050f366004611c54565b610e7e565b61028c610522366004611c3b565b610ee4565b61028c610535366004611e17565b610f03565b6102fa610548366004611e4e565b610f20565b61028c61055b366004611e17565b61101e565b6007546103ec906001600160a01b031681565b6103ec610581366004611bd0565b6008602052600090815260409020546001600160a01b031681565b61028c6105aa366004611c3b565b611033565b61028c6105bd366004611bd0565b611053565b6103536105d0366004611e95565b611075565b61028c6105e3366004611bd0565b6001600160a01b031660009081526003602052604090205490565b61028c61060c366004611de9565b600460209081526000928352604080842090915290825290205481565b6102fa610637366004611f03565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102fa61066d366004611f36565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61028c6106a4366004611c9d565b600b6020526000908152604090205481565b61028c6106c4366004611c3b565b6112b9565b6103536106d7366004611bd0565b6112c4565b60006106e6611342565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561074a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076e9190611f62565b6107789190611f91565b905090565b6000805461078a90611fa4565b80601f01602080910402602001604051908101604052809291908181526020018280546107b690611fa4565b80156108035780601f106107d857610100808354040283529160200191610803565b820191906000526020600020905b8154815290600101906020018083116107e657829003601f168201915b505050505081565b600254600090801561082f5761082a6108226106dc565b84908361140b565b610831565b825b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906108939086815260200190565b60405180910390a35060015b92915050565b600254600090801561082f5761082a816108bd6106dc565b859190611429565b6108db336000356001600160e01b03191661144f565b6109005760405162461bcd60e51b81526004016108f790611fde565b60405180910390fd5b8015610930576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610957565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610999911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610a02576109dd8382612004565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610a2a908490612004565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061210183398151915290610a739087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610b0e57610ac2336000356001600160e01b03191661144f565b610b0e5760405162461bcd60e51b815260206004820152601b60248201527f4d6f636b455243343632363a206e6f7420617574686f72697a6564000000000060448201526064016108f7565b610b166114f8565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610b4c57610778611585565b507f000000000000000000000000000000000000000000000000000000000000000090565b610b87336000356001600160e01b03191661144f565b610ba35760405162461bcd60e51b81526004016108f790611fde565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b600061089f8261080b565b610c24336000356001600160e01b03191661144f565b610c405760405162461bcd60e51b81526004016108f790611fde565b8015610c6f576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610c95565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610999911515815260200190565b6000610ce06114f8565b610831838361161f565b610d00336000356001600160e01b03191661144f565b610d1c5760405162461bcd60e51b81526004016108f790611fde565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610e08575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610dc790339030906001600160e01b03196000351690600401612017565b602060405180830381865afa158015610de4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e089190612044565b610e1157600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6000610e676114f8565b61083183836116f5565b6001805461078a90611fa4565b33600090815260036020526040812080548391908390610e9f908490612004565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020612101833981519152906108939086815260200190565b600254600090801561082f5761082a610efb6106dc565b849083611429565b6000610f0d6114f8565b610f18848484611784565b949350505050565b6001600160a01b038083166000908152600860205260408120549091168015610fbc5760405163b700961360e01b81526001600160a01b0382169063b700961390610f7390889088908890600401612017565b602060405180830381865afa158015610f90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb49190612044565b915050610831565b6001600160e01b031983166000908152600a602052604090205460ff168061101557506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b60006110286114f8565b610f18848484611888565b600254600090801561082f5761082a8161104b6106dc565b85919061140b565b6001600160a01b03811660009081526003602052604081205461089f9061080b565b428410156110c55760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016108f7565b600060016110d1610b1b565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156111dd573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906112135750876001600160a01b0316816001600160a01b0316145b6112505760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016108f7565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b600061089f82611033565b6112da336000356001600160e01b03191661144f565b6112f65760405162461bcd60e51b81526004016108f790611fde565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000806113616301e13380600d544261135b9190612004565b906119ca565b9050600061083161137d83600c546119df90919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156113e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114059190611f62565b906119df565b600082600019048411830215820261142257600080fd5b5091020490565b600082600019048411830215820261144057600080fd5b50910281810615159190040190565b6007546000906001600160a01b031680158015906114d9575060405163b700961360e01b81526001600160a01b0382169063b70096139061149890879030908890600401612017565b602060405180830381865afa1580156114b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d99190612044565b80610f1857506006546001600160a01b03858116911614949350505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a0712d6861152f611342565b6040518263ffffffff1660e01b815260040161154d91815260200190565b600060405180830381600087803b15801561156757600080fd5b505af115801561157b573d6000803e3d6000fd5b505042600d555050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516115b79190612061565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600061162a836112b9565b90508060000361166a5760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b60448201526064016108f7565b61169f6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866119f4565b6116a98282611a7e565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a361089f565b600061170083610ee4565b90506117376001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330846119f4565b6117418284611a7e565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791016116e8565b600061178f846108a5565b9050336001600160a01b038316146117ff576001600160a01b038216600090815260046020908152604080832033845290915290205460001981146117fd576117d88282612004565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b6118098282611ad8565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108316001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611b3a565b6000336001600160a01b038316146118f8576001600160a01b038216600090815260046020908152604080832033845290915290205460001981146118f6576118d18582612004565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b61190184610c03565b9050806000036119415760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b60448201526064016108f7565b61194b8285611ad8565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108316001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483611b3a565b600061083183670de0b6b3a76400008461140b565b60006108318383670de0b6b3a764000061140b565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611a775760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b60448201526064016108f7565b5050505050565b8060026000828254611a909190611f91565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061210183398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611b00908490612004565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061210183398151915290602001611acc565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611bb25760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b60448201526064016108f7565b50505050565b6001600160a01b0381168114611bcd57600080fd5b50565b600060208284031215611be257600080fd5b813561083181611bb8565b600060208083528351808285015260005b81811015611c1a57858101830151858201604001528201611bfe565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611c4d57600080fd5b5035919050565b60008060408385031215611c6757600080fd5b8235611c7281611bb8565b946020939093013593505050565b80356001600160e01b031981168114611c9857600080fd5b919050565b600060208284031215611caf57600080fd5b61083182611c80565b803560ff81168114611c9857600080fd5b8015158114611bcd57600080fd5b600080600060608486031215611cec57600080fd5b611cf584611cb8565b9250611d0360208501611c80565b91506040840135611d1381611cc9565b809150509250925092565b600080600060608486031215611d3357600080fd5b8335611d3e81611bb8565b92506020840135611d4e81611bb8565b929592945050506040919091013590565b60008060408385031215611d7257600080fd5b611d7b83611c80565b91506020830135611d8b81611cc9565b809150509250929050565b600080600060608486031215611dab57600080fd5b8335611db681611bb8565b9250611d0360208501611cb8565b60008060408385031215611dd757600080fd5b823591506020830135611d8b81611bb8565b60008060408385031215611dfc57600080fd5b8235611e0781611bb8565b91506020830135611d8b81611bb8565b600080600060608486031215611e2c57600080fd5b833592506020840135611e3e81611bb8565b91506040840135611d1381611bb8565b600080600060608486031215611e6357600080fd5b8335611e6e81611bb8565b92506020840135611e7e81611bb8565b9150611e8c60408501611c80565b90509250925092565b600080600080600080600060e0888a031215611eb057600080fd5b8735611ebb81611bb8565b96506020880135611ecb81611bb8565b95506040880135945060608801359350611ee760808901611cb8565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611f1657600080fd5b611f1f83611cb8565b9150611f2d60208401611c80565b90509250929050565b60008060408385031215611f4957600080fd5b8235611f5481611bb8565b9150611f2d60208401611cb8565b600060208284031215611f7457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561089f5761089f611f7b565b600181811c90821680611fb857607f821691505b602082108103611fd857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b8181038181111561089f5761089f611f7b565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561205657600080fd5b815161083181611cc9565b600080835481600182811c91508083168061207d57607f831692505b6020808410820361209c57634e487b7160e01b86526022600452602486fd5b8180156120b057600181146120c5576120f2565b60ff19861689528415158502890196506120f2565b60008a81526020902060005b868110156120ea5781548b8201529085019083016120d1565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220743b25a584932d307647cfa9135a71f1d844a0b00807d7c63602e820a0ab22ec64736f6c63430008130033",
    "sourceMap": "963:2644:44:-:0;;;1174:445;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1454:6;1480:4;1149:6:92;1157:10;1400:6:44;1410:5;1417:7;1290:5:93;1297:7;1306:6;-1:-1:-1;;;;;1306:15:93;;:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2094:4:94;:12;2101:5;2094:4;:12;:::i;:::-;-1:-1:-1;2116:6:94;:16;2125:7;2116:6;:16;:::i;:::-;-1:-1:-1;2142:20:94;;;;;2192:13;2173:32;;2242:24;:22;:24::i;:::-;2215:51;;-1:-1:-1;;;;;;;;1335:14:93;;::::1;;::::0;-1:-1:-1;;682:5:91;:14;;;;;-1:-1:-1;;;;;;682:14:91;;;;;;;;706:9;:22;;;;;;;;;;;;;;;;744:40;;765:10;;744:40;;682:5;;744:40;799;;-1:-1:-1;;;;;799:40:91;;;816:10;;799:40;;;;;-1:-1:-1;;;1502:5:44::2;:20:::0;;;;1547:15:::2;1532:12;:30:::0;1572:40:::2;;;::::0;-1:-1:-1;963:2644:44;;-1:-1:-1;;;;963:2644:44;5510:446:94;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;6225:25:165;;;;6266:18;;6259:34;;;;5833:14:94;6309:18:165;;;6302:34;5869:13:94;6352:18:165;;;6345:34;5912:4:94;6395:19:165;;;6388:61;6197:19;;5640:295:94;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;14:146:165:-;-1:-1:-1;;;;;104:31:165;;94:42;;84:70;;150:1;147;140:12;84:70;14:146;:::o;165:127::-;226:10;221:3;217:20;214:1;207:31;257:4;254:1;247:15;281:4;278:1;271:15;297:840;351:5;404:3;397:4;389:6;385:17;381:27;371:55;;422:1;419;412:12;371:55;445:13;;-1:-1:-1;;;;;507:10:165;;;504:36;;;520:18;;:::i;:::-;595:2;589:9;563:2;649:13;;-1:-1:-1;;645:22:165;;;669:2;641:31;637:40;625:53;;;693:18;;;713:22;;;690:46;687:72;;;739:18;;:::i;:::-;779:10;775:2;768:22;814:2;806:6;799:18;836:4;826:14;;881:3;876:2;871;863:6;859:15;855:24;852:33;849:53;;;898:1;895;888:12;849:53;920:1;911:10;;930:133;944:2;941:1;938:9;930:133;;;1032:14;;;1028:23;;1022:30;1001:14;;;997:23;;990:63;955:10;;;;930:133;;;1105:1;1083:15;;;1079:24;;;1072:35;;;;1087:6;297:840;-1:-1:-1;;;;297:840:165:o;1142:1103::-;1297:6;1305;1313;1321;1329;1337;1390:3;1378:9;1369:7;1365:23;1361:33;1358:53;;;1407:1;1404;1397:12;1358:53;1439:9;1433:16;1458:46;1498:5;1458:46;:::i;:::-;1572:2;1557:18;;1551:25;1523:5;;-1:-1:-1;;;;;;1625:14:165;;;1622:34;;;1652:1;1649;1642:12;1622:34;1675:61;1728:7;1719:6;1708:9;1704:22;1675:61;:::i;:::-;1665:71;;1782:2;1771:9;1767:18;1761:25;1745:41;;1811:2;1801:8;1798:16;1795:36;;;1827:1;1824;1817:12;1795:36;;1850:63;1905:7;1894:8;1883:9;1879:24;1850:63;:::i;:::-;1840:73;;;1953:2;1942:9;1938:18;1932:25;1922:35;;2002:3;1991:9;1987:19;1981:26;2016:48;2056:7;2016:48;:::i;:::-;2135:3;2120:19;;2114:26;2083:7;;-1:-1:-1;2178:15:165;;2171:23;2159:36;;2149:64;;2209:1;2206;2199:12;2149:64;2232:7;2222:17;;;1142:1103;;;;;;;;:::o;2250:273::-;2318:6;2371:2;2359:9;2350:7;2346:23;2342:32;2339:52;;;2387:1;2384;2377:12;2339:52;2419:9;2413:16;2469:4;2462:5;2458:16;2451:5;2448:27;2438:55;;2489:1;2486;2479:12;2438:55;2512:5;2250:273;-1:-1:-1;;;2250:273:165:o;2528:380::-;2607:1;2603:12;;;;2650;;;2671:61;;2725:4;2717:6;2713:17;2703:27;;2671:61;2778:2;2770:6;2767:14;2747:18;2744:38;2741:161;;2824:10;2819:3;2815:20;2812:1;2805:31;2859:4;2856:1;2849:15;2887:4;2884:1;2877:15;2741:161;;2528:380;;;:::o;3039:545::-;3141:2;3136:3;3133:11;3130:448;;;3177:1;3202:5;3198:2;3191:17;3247:4;3243:2;3233:19;3317:2;3305:10;3301:19;3298:1;3294:27;3288:4;3284:38;3353:4;3341:10;3338:20;3335:47;;;-1:-1:-1;3376:4:165;3335:47;3431:2;3426:3;3422:12;3419:1;3415:20;3409:4;3405:31;3395:41;;3486:82;3504:2;3497:5;3494:13;3486:82;;;3549:17;;;3530:1;3519:13;3486:82;;;3490:3;;;3130:448;3039:545;;;:::o;3760:1352::-;3880:10;;-1:-1:-1;;;;;3902:30:165;;3899:56;;;3935:18;;:::i;:::-;3964:97;4054:6;4014:38;4046:4;4040:11;4014:38;:::i;:::-;4008:4;3964:97;:::i;:::-;4116:4;;4180:2;4169:14;;4197:1;4192:663;;;;4899:1;4916:6;4913:89;;;-1:-1:-1;4968:19:165;;;4962:26;4913:89;-1:-1:-1;;3717:1:165;3713:11;;;3709:24;3705:29;3695:40;3741:1;3737:11;;;3692:57;5015:81;;4162:944;;4192:663;2986:1;2979:14;;;3023:4;3010:18;;-1:-1:-1;;4228:20:165;;;4346:236;4360:7;4357:1;4354:14;4346:236;;;4449:19;;;4443:26;4428:42;;4541:27;;;;4509:1;4497:14;;;;4376:19;;4346:236;;;4350:3;4610:6;4601:7;4598:19;4595:201;;;4671:19;;;4665:26;-1:-1:-1;;4754:1:165;4750:14;;;4766:3;4746:24;4742:37;4738:42;4723:58;4708:74;;4595:201;-1:-1:-1;;;;;4842:1:165;4826:14;;;4822:22;4809:36;;-1:-1:-1;3760:1352:165:o;5117:844::-;5247:3;5276:1;5309:6;5303:13;5339:36;5365:9;5339:36;:::i;:::-;5394:1;5411:18;;;5438:133;;;;5585:1;5580:356;;;;5404:532;;5438:133;-1:-1:-1;;5471:24:165;;5459:37;;5544:14;;5537:22;5525:35;;5516:45;;;-1:-1:-1;5438:133:165;;5580:356;5611:6;5608:1;5601:17;5641:4;5686:2;5683:1;5673:16;5711:1;5725:165;5739:6;5736:1;5733:13;5725:165;;;5817:14;;5804:11;;;5797:35;5860:16;;;;5754:10;;5725:165;;;5729:3;;;5919:6;5914:3;5910:16;5903:23;;5404:532;-1:-1:-1;5952:3:165;;5117:844;-1:-1:-1;;;;;;5117:844:165:o;5966:489::-;963:2644:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061027f5760003560e01c80637a9e5e4b1161015c578063c53a3985116100ce578063dd62ed3e11610087578063dd62ed3e146105fe578063e688747b14610629578063ea7ca2761461065f578063ed0d0efb14610696578063ef8b30f7146106b6578063f2fde38b146106c957600080fd5b8063c53a398514610573578063c63d75b614610404578063c6e6f5921461059c578063ce96cb77146105af578063d505accf146105c2578063d905777e146105d557600080fd5b8063a9059cbb11610120578063a9059cbb14610501578063b3d7f6b914610514578063b460af9414610527578063b70096131461053a578063ba0876521461054d578063bf7e214f1461056057600080fd5b80637a9e5e4b146104a05780637ecebe00146104b35780638da5cb5b146104d357806394bf804d146104e657806395d89b41146104f957600080fd5b806334fcf437116101f55780634cdad506116101b95780634cdad5061461042c578063679aefce1461043f57806367aff484146104475780636e553f651461045a57806370a082311461046d578063728b952b1461048d57600080fd5b806334fcf437146103aa5780633644e515146103bd57806338d52e0f146103c5578063402d267d146104045780634b5159da1461041957600080fd5b80630a28a477116102475780630a28a4771461030a5780630bade8a41461031d5780630ea9b75b1461034057806318160ddd1461035557806323b872dd1461035e578063313ce5671461037157600080fd5b806301e1d1141461028457806306a36aee1461029f57806306fdde03146102bf57806307a2d13a146102d4578063095ea7b3146102e7575b600080fd5b61028c6106dc565b6040519081526020015b60405180910390f35b61028c6102ad366004611bd0565b60096020526000908152604090205481565b6102c761077d565b6040516102969190611bed565b61028c6102e2366004611c3b565b61080b565b6102fa6102f5366004611c54565b610838565b6040519015158152602001610296565b61028c610318366004611c3b565b6108a5565b6102fa61032b366004611c9d565b600a6020526000908152604090205460ff1681565b61035361034e366004611cd7565b6108c5565b005b61028c60025481565b6102fa61036c366004611d1e565b6109a6565b6103987f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610296565b6103536103b8366004611c3b565b610a86565b61028c610b1b565b6103ec7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610296565b61028c610412366004611bd0565b5060001990565b610353610427366004611d5f565b610b71565b61028c61043a366004611c3b565b610c03565b600c5461028c565b610353610455366004611d96565b610c0e565b61028c610468366004611dc4565b610cd6565b61028c61047b366004611bd0565b60036020526000908152604090205481565b61035361049b366004611de9565b610cea565b6103536104ae366004611bd0565b610d73565b61028c6104c1366004611bd0565b60056020526000908152604090205481565b6006546103ec906001600160a01b031681565b61028c6104f4366004611dc4565b610e5d565b6102c7610e71565b6102fa61050f366004611c54565b610e7e565b61028c610522366004611c3b565b610ee4565b61028c610535366004611e17565b610f03565b6102fa610548366004611e4e565b610f20565b61028c61055b366004611e17565b61101e565b6007546103ec906001600160a01b031681565b6103ec610581366004611bd0565b6008602052600090815260409020546001600160a01b031681565b61028c6105aa366004611c3b565b611033565b61028c6105bd366004611bd0565b611053565b6103536105d0366004611e95565b611075565b61028c6105e3366004611bd0565b6001600160a01b031660009081526003602052604090205490565b61028c61060c366004611de9565b600460209081526000928352604080842090915290825290205481565b6102fa610637366004611f03565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102fa61066d366004611f36565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61028c6106a4366004611c9d565b600b6020526000908152604090205481565b61028c6106c4366004611c3b565b6112b9565b6103536106d7366004611bd0565b6112c4565b60006106e6611342565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561074a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076e9190611f62565b6107789190611f91565b905090565b6000805461078a90611fa4565b80601f01602080910402602001604051908101604052809291908181526020018280546107b690611fa4565b80156108035780601f106107d857610100808354040283529160200191610803565b820191906000526020600020905b8154815290600101906020018083116107e657829003601f168201915b505050505081565b600254600090801561082f5761082a6108226106dc565b84908361140b565b610831565b825b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906108939086815260200190565b60405180910390a35060015b92915050565b600254600090801561082f5761082a816108bd6106dc565b859190611429565b6108db336000356001600160e01b03191661144f565b6109005760405162461bcd60e51b81526004016108f790611fde565b60405180910390fd5b8015610930576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610957565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610999911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610a02576109dd8382612004565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610a2a908490612004565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061210183398151915290610a739087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610b0e57610ac2336000356001600160e01b03191661144f565b610b0e5760405162461bcd60e51b815260206004820152601b60248201527f4d6f636b455243343632363a206e6f7420617574686f72697a6564000000000060448201526064016108f7565b610b166114f8565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610b4c57610778611585565b507f000000000000000000000000000000000000000000000000000000000000000090565b610b87336000356001600160e01b03191661144f565b610ba35760405162461bcd60e51b81526004016108f790611fde565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b600061089f8261080b565b610c24336000356001600160e01b03191661144f565b610c405760405162461bcd60e51b81526004016108f790611fde565b8015610c6f576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610c95565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610999911515815260200190565b6000610ce06114f8565b610831838361161f565b610d00336000356001600160e01b03191661144f565b610d1c5760405162461bcd60e51b81526004016108f790611fde565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610e08575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610dc790339030906001600160e01b03196000351690600401612017565b602060405180830381865afa158015610de4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e089190612044565b610e1157600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6000610e676114f8565b61083183836116f5565b6001805461078a90611fa4565b33600090815260036020526040812080548391908390610e9f908490612004565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020612101833981519152906108939086815260200190565b600254600090801561082f5761082a610efb6106dc565b849083611429565b6000610f0d6114f8565b610f18848484611784565b949350505050565b6001600160a01b038083166000908152600860205260408120549091168015610fbc5760405163b700961360e01b81526001600160a01b0382169063b700961390610f7390889088908890600401612017565b602060405180830381865afa158015610f90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb49190612044565b915050610831565b6001600160e01b031983166000908152600a602052604090205460ff168061101557506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b60006110286114f8565b610f18848484611888565b600254600090801561082f5761082a8161104b6106dc565b85919061140b565b6001600160a01b03811660009081526003602052604081205461089f9061080b565b428410156110c55760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016108f7565b600060016110d1610b1b565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156111dd573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906112135750876001600160a01b0316816001600160a01b0316145b6112505760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016108f7565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b600061089f82611033565b6112da336000356001600160e01b03191661144f565b6112f65760405162461bcd60e51b81526004016108f790611fde565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000806113616301e13380600d544261135b9190612004565b906119ca565b9050600061083161137d83600c546119df90919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156113e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114059190611f62565b906119df565b600082600019048411830215820261142257600080fd5b5091020490565b600082600019048411830215820261144057600080fd5b50910281810615159190040190565b6007546000906001600160a01b031680158015906114d9575060405163b700961360e01b81526001600160a01b0382169063b70096139061149890879030908890600401612017565b602060405180830381865afa1580156114b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d99190612044565b80610f1857506006546001600160a01b03858116911614949350505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a0712d6861152f611342565b6040518263ffffffff1660e01b815260040161154d91815260200190565b600060405180830381600087803b15801561156757600080fd5b505af115801561157b573d6000803e3d6000fd5b505042600d555050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516115b79190612061565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600061162a836112b9565b90508060000361166a5760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b60448201526064016108f7565b61169f6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866119f4565b6116a98282611a7e565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a361089f565b600061170083610ee4565b90506117376001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330846119f4565b6117418284611a7e565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791016116e8565b600061178f846108a5565b9050336001600160a01b038316146117ff576001600160a01b038216600090815260046020908152604080832033845290915290205460001981146117fd576117d88282612004565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b6118098282611ad8565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108316001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611b3a565b6000336001600160a01b038316146118f8576001600160a01b038216600090815260046020908152604080832033845290915290205460001981146118f6576118d18582612004565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b61190184610c03565b9050806000036119415760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b60448201526064016108f7565b61194b8285611ad8565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108316001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483611b3a565b600061083183670de0b6b3a76400008461140b565b60006108318383670de0b6b3a764000061140b565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611a775760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b60448201526064016108f7565b5050505050565b8060026000828254611a909190611f91565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061210183398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611b00908490612004565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061210183398151915290602001611acc565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611bb25760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b60448201526064016108f7565b50505050565b6001600160a01b0381168114611bcd57600080fd5b50565b600060208284031215611be257600080fd5b813561083181611bb8565b600060208083528351808285015260005b81811015611c1a57858101830151858201604001528201611bfe565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611c4d57600080fd5b5035919050565b60008060408385031215611c6757600080fd5b8235611c7281611bb8565b946020939093013593505050565b80356001600160e01b031981168114611c9857600080fd5b919050565b600060208284031215611caf57600080fd5b61083182611c80565b803560ff81168114611c9857600080fd5b8015158114611bcd57600080fd5b600080600060608486031215611cec57600080fd5b611cf584611cb8565b9250611d0360208501611c80565b91506040840135611d1381611cc9565b809150509250925092565b600080600060608486031215611d3357600080fd5b8335611d3e81611bb8565b92506020840135611d4e81611bb8565b929592945050506040919091013590565b60008060408385031215611d7257600080fd5b611d7b83611c80565b91506020830135611d8b81611cc9565b809150509250929050565b600080600060608486031215611dab57600080fd5b8335611db681611bb8565b9250611d0360208501611cb8565b60008060408385031215611dd757600080fd5b823591506020830135611d8b81611bb8565b60008060408385031215611dfc57600080fd5b8235611e0781611bb8565b91506020830135611d8b81611bb8565b600080600060608486031215611e2c57600080fd5b833592506020840135611e3e81611bb8565b91506040840135611d1381611bb8565b600080600060608486031215611e6357600080fd5b8335611e6e81611bb8565b92506020840135611e7e81611bb8565b9150611e8c60408501611c80565b90509250925092565b600080600080600080600060e0888a031215611eb057600080fd5b8735611ebb81611bb8565b96506020880135611ecb81611bb8565b95506040880135945060608801359350611ee760808901611cb8565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611f1657600080fd5b611f1f83611cb8565b9150611f2d60208401611c80565b90509250929050565b60008060408385031215611f4957600080fd5b8235611f5481611bb8565b9150611f2d60208401611cb8565b600060208284031215611f7457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561089f5761089f611f7b565b600181811c90821680611fb857607f821691505b602082108103611fd857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b8181038181111561089f5761089f611f7b565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561205657600080fd5b815161083181611cc9565b600080835481600182811c91508083168061207d57607f831692505b6020808410820361209c57634e487b7160e01b86526022600452602486fd5b8180156120b057600181146120c5576120f2565b60ff19861689528415158502890196506120f2565b60008a81526020902060005b868110156120ea5781548b8201529085019083016120d1565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220743b25a584932d307647cfa9135a71f1d844a0b00807d7c63602e820a0ab22ec64736f6c63430008130033",
    "sourceMap": "963:2644:44:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2712:140;;;:::i;:::-;;;160:25:165;;;148:2;133:18;2712:140:44;;;;;;;;1622:47:92;;;;;;:::i;:::-;;;;;;;;;;;;;;1031:18:94;;;:::i;:::-;;;;;;;:::i;4463:257:93:-;;;;;;:::i;:::-;;:::i;2461:211:94:-;;;;;;:::i;:::-;;:::i;:::-;;;1989:14:165;;1982:22;1964:41;;1952:2;1937:18;2461:211:94;1824:187:165;5114:255:93;;;;;;:::i;:::-;;:::i;1676:49:92:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4390:396;;;;;;:::i;:::-;;:::i;:::-;;1304:26:94;;;;;;3057:592;;;;;;:::i;:::-;;:::i;1083:31::-;;;;;;;;3688:4:165;3676:17;;;3658:36;;3646:2;3631:18;1083:31:94;3516:184:165;2876:122:44;;;;;;:::i;:::-;;:::i;5327:177:94:-;;;:::i;1149:28:93:-;;;;;;;;-1:-1:-1;;;;;3884:32:165;;;3866:51;;3854:2;3839:18;1149:28:93;3705:218:165;5696:108:93;;;;;;:::i;:::-;-1:-1:-1;;;5780:17:93;5696:108;3448:210:92;;;;;;:::i;:::-;;:::i;5375:124:93:-;;;;;;:::i;:::-;;:::i;3004:80:44:-;3072:5;;3004:80;;3853:337:92;;;;;;:::i;:::-;;:::i;1890:185:44:-;;;;;;:::i;:::-;;:::i;1337:44:94:-;;;;;;:::i;:::-;;;;;;;;;;;;;;3006:241:92;;;;;;:::i;:::-;;:::i;1523:434:91:-;;;;;;:::i;:::-;;:::i;1751:41:94:-;;;;;;:::i;:::-;;;;;;;;;;;;;;562:20:91;;;;;-1:-1:-1;;;;;562:20:91;;;2081:179:44;;;;;;:::i;:::-;;:::i;1056:20:94:-;;;:::i;2678:373::-;;;;;;:::i;:::-;;:::i;4857:251:93:-;;;;;;:::i;:::-;;:::i;2266:219:44:-;;;;;;:::i;:::-;;:::i;2336:465:92:-;;;;;;:::i;:::-;;:::i;2491:215:44:-;;;;;;:::i;:::-;;:::i;589:26:91:-;;;;;-1:-1:-1;;;;;589:26:91;;;1369:61:92;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:92;;;4200:257:93;;;;;;:::i;:::-;;:::i;5921:131::-;;;;;;:::i;:::-;;:::i;3838:1483:94:-;;;;;;:::i;:::-;;:::i;6058:112:93:-;;;;;;:::i;:::-;-1:-1:-1;;;;;6147:16:93;6121:7;6147:16;;;:9;:16;;;;;;;6058:112;1388:64:94;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1958:186:92;;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:92;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:92;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;:::i;:::-;;;;;;;;;;;;;;4726:125:93;;;;;;:::i;:::-;;:::i;1963:164:91:-;;;;;;:::i;:::-;;:::i;2712:140:44:-;2765:7;2824:21;:19;:21::i;:::-;2791:30;;-1:-1:-1;;;2791:30:44;;2815:4;2791:30;;;3866:51:165;2791:5:44;-1:-1:-1;;;;;2791:15:44;;;;3839:18:165;;2791:30:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:54;;;;:::i;:::-;2784:61;;2712:140;:::o;1031:18:94:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4463:257:93:-;4569:11;;4533:7;;4650:11;;:63;;4673:40;4691:13;:11;:13::i;:::-;4673:6;;4706;4673:17;:40::i;:::-;4650:63;;;4664:6;4650:63;4643:70;4463:257;-1:-1:-1;;;4463:257:93:o;2461:211:94:-;2561:10;2535:4;2551:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2551:30:94;;;;;;;;;;:39;;;2606:37;2535:4;;2551:30;;2606:37;;;;2584:6;160:25:165;;148:2;133:18;;14:177;2606:37:94;;;;;;;;-1:-1:-1;2661:4:94;2461:211;;;;;:::o;5114:255:93:-;5220:11;;5184:7;;5301:11;;:61;;5324:38;5340:6;5348:13;:11;:13::i;:::-;5324:6;;:38;:15;:38::i;4390:396:92:-;902:33:91;915:10;927:7;;-1:-1:-1;;;;;;927:7:91;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:91;;;;;;;:::i;:::-;;;;;;;;;4535:7:92::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:92;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:92;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:92::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1989:14:165::0;1982:22;1964:41;;1952:2;1937:18;;1824:187;4730:49:92::1;;;;;;;;4390:396:::0;;;:::o;3057:592:94:-;-1:-1:-1;;;;;3209:15:94;;3175:4;3209:15;;;:9;:15;;;;;;;;3225:10;3209:27;;;;;;;;-1:-1:-1;;3287:28:94;;3283:80;;3347:16;3357:6;3347:7;:16;:::i;:::-;-1:-1:-1;;;;;3317:15:94;;;;;;:9;:15;;;;;;;;3333:10;3317:27;;;;;;;:46;3283:80;-1:-1:-1;;;;;3374:15:94;;;;;;:9;:15;;;;;:25;;3393:6;;3374:15;:25;;3393:6;;3374:25;:::i;:::-;;;;-1:-1:-1;;;;;;;3545:13:94;;;;;;;:9;:13;;;;;;;:23;;;;;;3594:26;3545:13;;3594:26;;;-1:-1:-1;;;;;;;;;;;3594:26:94;;;3562:6;160:25:165;;148:2;133:18;;14:177;3594:26:94;;;;;;;;-1:-1:-1;3638:4:94;;3057:592;-1:-1:-1;;;;3057:592:94:o;2876:122:44:-;1680:18;1676:168;;;1739:33;1752:10;1764:7;;-1:-1:-1;;;;;;1764:7:44;1739:12;:33::i;:::-;1714:119;;;;-1:-1:-1;;;1714:119:44;;10292:2:165;1714:119:44;;;10274:21:165;10331:2;10311:18;;;10304:30;10370:29;10350:18;;;10343:57;10417:18;;1714:119:44;10090:351:165;1714:119:44;2958:9:::1;:7;:9::i;:::-;2977:5;:14:::0;2876:122::o;5327:177:94:-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;5410:87::-;-1:-1:-1;5446:24:94;;5327:177::o;3448:210:92:-;902:33:91;915:10;927:7;;-1:-1:-1;;;;;;927:7:91;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:91;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:92;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:92::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1964:41:165;;;3606:45:92::1;::::0;1937:18:165;3606:45:92::1;;;;;;;3448:210:::0;;:::o;5375:124:93:-;5443:7;5469:23;5485:6;5469:15;:23::i;3853:337:92:-;902:33:91;915:10;927:7;;-1:-1:-1;;;;;;927:7:91;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:91;;;;;;;:::i;:::-;3986:7:92::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:92;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:92;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:92::1;;4175:7;4147:36;;;;1989:14:165::0;1982:22;1964:41;;1952:2;1937:18;;1824:187;1890:185:44;1990:7;2009:9;:7;:9::i;:::-;2035:33;2049:7;2058:9;2035:13;:33::i;3006:241:92:-;902:33:91;915:10;927:7;;-1:-1:-1;;;;;;927:7:91;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:91;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:92;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:92::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;1523:434:91:-;1794:5;;-1:-1:-1;;;;;1794:5:91;1780:10;:19;;:76;;-1:-1:-1;1803:9:91;;:53;;-1:-1:-1;;;1803:53:91;;-1:-1:-1;;;;;1803:9:91;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:91;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:91;-1:-1:-1;;;;;1868:24:91;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:91;1523:434;:::o;2081:179:44:-;2178:7;2197:9;:7;:9::i;:::-;2223:30;2234:7;2243:9;2223:10;:30::i;1056:20:94:-;;;;;;;:::i;2678:373::-;2774:10;2748:4;2764:21;;;:9;:21;;;;;:31;;2789:6;;2764:21;2748:4;;2764:31;;2789:6;;2764:31;:::i;:::-;;;;-1:-1:-1;;;;;;;2941:13:94;;;;;;:9;:13;;;;;;;:23;;;;;;2990:32;2999:10;;-1:-1:-1;;;;;;;;;;;2990:32:94;;;2958:6;160:25:165;;148:2;133:18;;14:177;4857:251:93;4959:11;;4923:7;;5040:11;;:61;;5063:38;5079:13;:11;:13::i;:::-;5063:6;;5094;5063:15;:38::i;2266:219:44:-;2391:7;2410:9;:7;:9::i;:::-;2436:42;2451:7;2460:9;2471:6;2436:14;:42::i;:::-;2429:49;2266:219;-1:-1:-1;;;;2266:219:44:o;2336:465:92:-;-1:-1:-1;;;;;2515:32:92;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:92;;-1:-1:-1;;;;;2609:23:92;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:92;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:92;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:92;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;2336:465;-1:-1:-1;;;;;2336:465:92:o;2491:215:44:-;2614:7;2633:9;:7;:9::i;:::-;2659:40;2672:7;2681:9;2692:6;2659:12;:40::i;4200:257:93:-;4306:11;;4270:7;;4387:11;;:63;;4410:40;4428:6;4436:13;:11;:13::i;:::-;4410:6;;:40;:17;:40::i;5921:131::-;-1:-1:-1;;;;;6028:16:93;;5986:7;6028:16;;;:9;:16;;;;;;6012:33;;:15;:33::i;3838:1483:94:-;4057:15;4045:8;:27;;4037:63;;;;-1:-1:-1;;;4037:63:94;;11303:2:165;4037:63:94;;;11285:21:165;11342:2;11322:18;;;11315:30;11381:25;11361:18;;;11354:53;11424:18;;4037:63:94;11101:347:165;4037:63:94;4265:24;4292:805;4428:18;:16;:18::i;:::-;-1:-1:-1;;;;;4873:13:94;;;;;;;:6;:13;;;;;;;;;:15;;;;;;;;4511:449;;4555:165;4511:449;;;11740:25:165;11819:18;;;11812:43;;;;11891:15;;;11871:18;;;11864:43;11923:18;;;11916:34;;;11966:19;;;11959:35;;;;12010:19;;;;12003:35;;;4511:449:94;;;;;;;;;;11712:19:165;;;4511:449:94;;;4472:514;;;;;;;;-1:-1:-1;;;4350:658:94;;;12307:27:165;12350:11;;;12343:27;;;;12386:12;;;12379:28;;;;12423:12;;4350:658:94;;;-1:-1:-1;;4350:658:94;;;;;;;;;4319:707;;4350:658;4319:707;;;;4292:805;;;;;;;;;12673:25:165;12746:4;12734:17;;12714:18;;;12707:45;12768:18;;;12761:34;;;12811:18;;;12804:34;;;12645:19;;4292:805:94;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4292:805:94;;-1:-1:-1;;4292:805:94;;;-1:-1:-1;;;;;;;5120:30:94;;;;;;:59;;;5174:5;-1:-1:-1;;;;;5154:25:94;:16;-1:-1:-1;;;;;5154:25:94;;5120:59;5112:86;;;;-1:-1:-1;;;5112:86:94;;13051:2:165;5112:86:94;;;13033:21:165;13090:2;13070:18;;;13063:30;-1:-1:-1;;;13109:18:165;;;13102:44;13163:18;;5112:86:94;12849:338:165;5112:86:94;-1:-1:-1;;;;;5213:27:94;;;;;;;:9;:27;;;;;;;;:36;;;;;;;;;;;;;:44;;;5283:31;160:25:165;;;5213:36:94;;5283:31;;;;;133:18:165;5283:31:94;;;;;;;3838:1483;;;;;;;:::o;4726:125:93:-;4795:7;4821:23;4837:6;4821:15;:23::i;1963:164:91:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:91;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:91;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:91::1;-1:-1:-1::0;;;;;2046:16:91;::::1;::::0;;::::1;::::0;;;2078:42:::1;::::0;2099:10:::1;::::0;2078:42:::1;::::0;-1:-1:-1;;2078:42:91::1;1963:164:::0;:::o;3238:367:44:-;3292:7;3364:19;3386:72;3440:8;3405:12;;3387:15;:30;;;;:::i;:::-;3386:40;;:72::i;:::-;3364:94;;3468:15;3486:88;3538:26;3552:11;3538:5;;:13;;:26;;;;:::i;:::-;3486:30;;-1:-1:-1;;;3486:30:44;;3510:4;3486:30;;;3866:51:165;3486:5:44;-1:-1:-1;;;;;3486:15:44;;;;3839:18:165;;3486:30:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:38;;:88::i;1564:526:96:-;1680:9;1928:1;-1:-1:-1;;1911:19:96;1908:1;1905:26;1902:1;1898:34;1891:42;1878:11;1874:60;1864:116;;1964:1;1961;1954:12;1864:116;-1:-1:-1;2051:9:96;;2047:27;;1564:526::o;2096:672::-;2210:9;2458:1;-1:-1:-1;;2441:19:96;2438:1;2435:26;2432:1;2428:34;2421:42;2408:11;2404:60;2394:116;;2494:1;2491;2484:12;2394:116;-1:-1:-1;2728:9:96;;2691:27;;;2688:34;;2724:27;;;2684:68;;2096:672::o;977:540:91:-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:91;1415:27;;;;;:77;;-1:-1:-1;1446:46:91;;-1:-1:-1;;;1446:46:91;;-1:-1:-1;;;;;1446:12:91;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:91;;-1:-1:-1;;;;;1497:13:91;;;1505:5;;1497:13;1407:103;977:540;-1:-1:-1;;;;977:540:91:o;3090:142:44:-;3150:5;-1:-1:-1;;;;;3128:34:44;;3163:21;:19;:21::i;:::-;3128:57;;;;;;;;;;;;;160:25:165;;148:2;133:18;;14:177;3128:57:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3210:15:44;3195:12;:30;-1:-1:-1;;3090:142:44:o;5510:446:94:-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;14718:25:165;;;;14759:18;;14752:34;;;;5833:14:94;14802:18:165;;;14795:34;5869:13:94;14845:18:165;;;14838:34;5912:4:94;14888:19:165;;;14881:61;14690:19;;5640:295:94;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;1550:516:93:-;1625:14;1744:22;1759:6;1744:14;:22::i;:::-;1735:31;;;1771:1;1734:38;1726:62;;;;-1:-1:-1;;;1726:62:93;;15155:2:165;1726:62:93;;;15137:21:165;15194:2;15174:18;;;15167:30;-1:-1:-1;;;15213:18:165;;;15206:41;15264:18;;1726:62:93;14953:335:165;1726:62:93;1868:57;-1:-1:-1;;;;;1868:5:93;:22;1891:10;1911:4;1918:6;1868:22;:57::i;:::-;1936:23;1942:8;1952:6;1936:5;:23::i;:::-;1975:45;;;15467:25:165;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;1975:45:93;;;1983:10;;1975:45;;15440:18:165;1975:45:93;;;;;;;;2031:28;6443:73;2072:467;2144:14;2179:19;2191:6;2179:11;:19::i;:::-;2170:28;-1:-1:-1;2341:57:93;-1:-1:-1;;;;;2341:5:93;:22;2364:10;2384:4;2170:28;2341:22;:57::i;:::-;2409:23;2415:8;2425:6;2409:5;:23::i;:::-;2448:45;;;15467:25:165;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;2448:45:93;;;2456:10;;2448:45;;15440:18:165;2448:45:93;15293:248:165;2545:679:93;2666:14;2701:23;2717:6;2701:15;:23::i;:::-;2692:32;-1:-1:-1;2806:10:93;-1:-1:-1;;;;;2806:19:93;;;2802:228;;-1:-1:-1;;;;;2859:16:93;;2841:15;2859:16;;;:9;:16;;;;;;;;2876:10;2859:28;;;;;;;;-1:-1:-1;;2942:28:93;;2938:81;;3003:16;3013:6;3003:7;:16;:::i;:::-;-1:-1:-1;;;;;2972:16:93;;;;;;:9;:16;;;;;;;;2989:10;2972:28;;;;;;;:47;2938:81;2827:203;2802:228;3081:20;3087:5;3094:6;3081:5;:20::i;:::-;3117:53;;;15467:25:165;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;3117:53:93;;;;;;;;3126:10;;3117:53;;15440:18:165;3117:53:93;;;;;;;3181:36;-1:-1:-1;;;;;3181:5:93;:18;3200:8;3210:6;3181:18;:36::i;3230:713::-;3349:14;3379:10;-1:-1:-1;;;;;3379:19:93;;;3375:228;;-1:-1:-1;;;;;3432:16:93;;3414:15;3432:16;;;:9;:16;;;;;;;;3449:10;3432:28;;;;;;;;-1:-1:-1;;3515:28:93;;3511:81;;3576:16;3586:6;3576:7;:16;:::i;:::-;-1:-1:-1;;;;;3545:16:93;;;;;;:9;:16;;;;;;;;3562:10;3545:28;;;;;;;:47;3511:81;3400:203;3375:228;3705:21;3719:6;3705:13;:21::i;:::-;3696:30;;;3731:1;3695:37;3687:61;;;;-1:-1:-1;;;3687:61:93;;15748:2:165;3687:61:93;;;15730:21:165;15787:2;15767:18;;;15760:30;-1:-1:-1;;;15806:18:165;;;15799:41;15857:18;;3687:61:93;15546:335:165;3687:61:93;3800:20;3806:5;3813:6;3800:5;:20::i;:::-;3836:53;;;15467:25:165;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;3836:53:93;;;;;;;;3845:10;;3836:53;;15440:18:165;3836:53:93;;;;;;;3900:36;-1:-1:-1;;;;;3900:5:93;:18;3919:8;3929:6;3900:18;:36::i;2207:165:32:-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;1814:119::-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;1328:1616:98:-;1466:12;1636:4;1630:11;-1:-1:-1;;;1759:17:98;1752:93;1892:4;1888:1;1869:17;1865:25;1858:39;1976:2;1971;1952:17;1948:26;1941:38;2056:6;2051:2;2032:17;2028:26;2021:42;2860:2;2857:1;2852:3;2833:17;2830:1;2823:5;2816;2811:52;2379:16;2372:24;2366:2;2348:16;2345:24;2341:1;2337;2331:8;2328:15;2324:46;2321:76;2121:756;2110:767;;;2905:7;2897:40;;;;-1:-1:-1;;;2897:40:98;;16088:2:165;2897:40:98;;;16070:21:165;16127:2;16107:18;;;16100:30;-1:-1:-1;;;16146:18:165;;;16139:50;16206:18;;2897:40:98;15886:344:165;2897:40:98;1456:1488;1328:1616;;;;:::o;6150:325:94:-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;6387:13:94;;;;;;:9;:13;;;;;;;;:23;;;;;;6436:32;160:25:165;;;-1:-1:-1;;;;;;;;;;;6436:32:94;133:18:165;6436:32:94;;;;;;;;6150:325;;:::o;6481:328::-;-1:-1:-1;;;;;6553:15:94;;;;;;:9;:15;;;;;:25;;6572:6;;6553:15;:25;;6572:6;;6553:25;:::i;:::-;;;;-1:-1:-1;;6721:11:94;:21;;;;;;;6768:34;;160:25:165;;;-1:-1:-1;;;;;;;6768:34:94;;;-1:-1:-1;;;;;;;;;;;6768:34:94;148:2:165;133:18;6768:34:94;14:177:165;2950:1499:98;3062:12;3232:4;3226:11;-1:-1:-1;;;3355:17:98;3348:93;3488:2;3484:1;3465:17;3461:25;3454:37;3568:6;3563:2;3544:17;3540:26;3533:42;4370:2;4367:1;4363:2;4344:17;4341:1;4334:5;4327;4322:51;3891:16;3884:24;3878:2;3860:16;3857:24;3853:1;3849;3843:8;3840:15;3836:46;3833:76;3633:754;3622:765;;;4415:7;4407:35;;;;-1:-1:-1;;;4407:35:98;;16437:2:165;4407:35:98;;;16419:21:165;16476:2;16456:18;;;16449:30;-1:-1:-1;;;16495:18:165;;;16488:45;16550:18;;4407:35:98;16235:339:165;4407:35:98;3052:1397;2950:1499;;;:::o;196:131:165:-;-1:-1:-1;;;;;271:31:165;;261:42;;251:70;;317:1;314;307:12;251:70;196:131;:::o;332:247::-;391:6;444:2;432:9;423:7;419:23;415:32;412:52;;;460:1;457;450:12;412:52;499:9;486:23;518:31;543:5;518:31;:::i;766:548::-;878:4;907:2;936;925:9;918:21;968:6;962:13;1011:6;1006:2;995:9;991:18;984:34;1036:1;1046:140;1060:6;1057:1;1054:13;1046:140;;;1155:14;;;1151:23;;1145:30;1121:17;;;1140:2;1117:26;1110:66;1075:10;;1046:140;;;1050:3;1235:1;1230:2;1221:6;1210:9;1206:22;1202:31;1195:42;1305:2;1298;1294:7;1289:2;1281:6;1277:15;1273:29;1262:9;1258:45;1254:54;1246:62;;;;766:548;;;;:::o;1319:180::-;1378:6;1431:2;1419:9;1410:7;1406:23;1402:32;1399:52;;;1447:1;1444;1437:12;1399:52;-1:-1:-1;1470:23:165;;1319:180;-1:-1:-1;1319:180:165:o;1504:315::-;1572:6;1580;1633:2;1621:9;1612:7;1608:23;1604:32;1601:52;;;1649:1;1646;1639:12;1601:52;1688:9;1675:23;1707:31;1732:5;1707:31;:::i;:::-;1757:5;1809:2;1794:18;;;;1781:32;;-1:-1:-1;;;1504:315:165:o;2016:173::-;2083:20;;-1:-1:-1;;;;;;2132:32:165;;2122:43;;2112:71;;2179:1;2176;2169:12;2112:71;2016:173;;;:::o;2194:184::-;2252:6;2305:2;2293:9;2284:7;2280:23;2276:32;2273:52;;;2321:1;2318;2311:12;2273:52;2344:28;2362:9;2344:28;:::i;2383:156::-;2449:20;;2509:4;2498:16;;2488:27;;2478:55;;2529:1;2526;2519:12;2544:118;2630:5;2623:13;2616:21;2609:5;2606:32;2596:60;;2652:1;2649;2642:12;2667:383;2738:6;2746;2754;2807:2;2795:9;2786:7;2782:23;2778:32;2775:52;;;2823:1;2820;2813:12;2775:52;2846:27;2863:9;2846:27;:::i;:::-;2836:37;;2892;2925:2;2914:9;2910:18;2892:37;:::i;:::-;2882:47;;2979:2;2968:9;2964:18;2951:32;2992:28;3014:5;2992:28;:::i;:::-;3039:5;3029:15;;;2667:383;;;;;:::o;3055:456::-;3132:6;3140;3148;3201:2;3189:9;3180:7;3176:23;3172:32;3169:52;;;3217:1;3214;3207:12;3169:52;3256:9;3243:23;3275:31;3300:5;3275:31;:::i;:::-;3325:5;-1:-1:-1;3382:2:165;3367:18;;3354:32;3395:33;3354:32;3395:33;:::i;:::-;3055:456;;3447:7;;-1:-1:-1;;;3501:2:165;3486:18;;;;3473:32;;3055:456::o;3928:313::-;3992:6;4000;4053:2;4041:9;4032:7;4028:23;4024:32;4021:52;;;4069:1;4066;4059:12;4021:52;4092:28;4110:9;4092:28;:::i;:::-;4082:38;;4170:2;4159:9;4155:18;4142:32;4183:28;4205:5;4183:28;:::i;:::-;4230:5;4220:15;;;3928:313;;;;;:::o;4246:452::-;4318:6;4326;4334;4387:2;4375:9;4366:7;4362:23;4358:32;4355:52;;;4403:1;4400;4393:12;4355:52;4442:9;4429:23;4461:31;4486:5;4461:31;:::i;:::-;4511:5;-1:-1:-1;4535:36:165;4567:2;4552:18;;4535:36;:::i;4703:315::-;4771:6;4779;4832:2;4820:9;4811:7;4807:23;4803:32;4800:52;;;4848:1;4845;4838:12;4800:52;4884:9;4871:23;4861:33;;4944:2;4933:9;4929:18;4916:32;4957:31;4982:5;4957:31;:::i;5023:407::-;5110:6;5118;5171:2;5159:9;5150:7;5146:23;5142:32;5139:52;;;5187:1;5184;5177:12;5139:52;5226:9;5213:23;5245:31;5270:5;5245:31;:::i;:::-;5295:5;-1:-1:-1;5352:2:165;5337:18;;5324:32;5365:33;5324:32;5365:33;:::i;5914:456::-;5991:6;5999;6007;6060:2;6048:9;6039:7;6035:23;6031:32;6028:52;;;6076:1;6073;6066:12;6028:52;6112:9;6099:23;6089:33;;6172:2;6161:9;6157:18;6144:32;6185:31;6210:5;6185:31;:::i;:::-;6235:5;-1:-1:-1;6292:2:165;6277:18;;6264:32;6305:33;6264:32;6305:33;:::i;6375:460::-;6451:6;6459;6467;6520:2;6508:9;6499:7;6495:23;6491:32;6488:52;;;6536:1;6533;6526:12;6488:52;6575:9;6562:23;6594:31;6619:5;6594:31;:::i;:::-;6644:5;-1:-1:-1;6701:2:165;6686:18;;6673:32;6714:33;6673:32;6714:33;:::i;:::-;6766:7;-1:-1:-1;6792:37:165;6825:2;6810:18;;6792:37;:::i;:::-;6782:47;;6375:460;;;;;:::o;7067:734::-;7178:6;7186;7194;7202;7210;7218;7226;7279:3;7267:9;7258:7;7254:23;7250:33;7247:53;;;7296:1;7293;7286:12;7247:53;7335:9;7322:23;7354:31;7379:5;7354:31;:::i;:::-;7404:5;-1:-1:-1;7461:2:165;7446:18;;7433:32;7474:33;7433:32;7474:33;:::i;:::-;7526:7;-1:-1:-1;7580:2:165;7565:18;;7552:32;;-1:-1:-1;7631:2:165;7616:18;;7603:32;;-1:-1:-1;7654:37:165;7686:3;7671:19;;7654:37;:::i;:::-;7644:47;;7738:3;7727:9;7723:19;7710:33;7700:43;;7790:3;7779:9;7775:19;7762:33;7752:43;;7067:734;;;;;;;;;;:::o;8199:254::-;8264:6;8272;8325:2;8313:9;8304:7;8300:23;8296:32;8293:52;;;8341:1;8338;8331:12;8293:52;8364:27;8381:9;8364:27;:::i;:::-;8354:37;;8410;8443:2;8432:9;8428:18;8410:37;:::i;:::-;8400:47;;8199:254;;;;;:::o;8458:317::-;8524:6;8532;8585:2;8573:9;8564:7;8560:23;8556:32;8553:52;;;8601:1;8598;8591:12;8553:52;8640:9;8627:23;8659:31;8684:5;8659:31;:::i;:::-;8709:5;-1:-1:-1;8733:36:165;8765:2;8750:18;;8733:36;:::i;8780:184::-;8850:6;8903:2;8891:9;8882:7;8878:23;8874:32;8871:52;;;8919:1;8916;8909:12;8871:52;-1:-1:-1;8942:16:165;;8780:184;-1:-1:-1;8780:184:165:o;8969:127::-;9030:10;9025:3;9021:20;9018:1;9011:31;9061:4;9058:1;9051:15;9085:4;9082:1;9075:15;9101:125;9166:9;;;9187:10;;;9184:36;;;9200:18;;:::i;9231:380::-;9310:1;9306:12;;;;9353;;;9374:61;;9428:4;9420:6;9416:17;9406:27;;9374:61;9481:2;9473:6;9470:14;9450:18;9447:38;9444:161;;9527:10;9522:3;9518:20;9515:1;9508:31;9562:4;9559:1;9552:15;9590:4;9587:1;9580:15;9444:161;;9231:380;;;:::o;9616:336::-;9818:2;9800:21;;;9857:2;9837:18;;;9830:30;-1:-1:-1;;;9891:2:165;9876:18;;9869:42;9943:2;9928:18;;9616:336::o;9957:128::-;10024:9;;;10045:11;;;10042:37;;;10059:18;;:::i;10446:400::-;-1:-1:-1;;;;;10702:15:165;;;10684:34;;10754:15;;;;10749:2;10734:18;;10727:43;-1:-1:-1;;;;;;10806:33:165;;;10801:2;10786:18;;10779:61;10634:2;10619:18;;10446:400::o;10851:245::-;10918:6;10971:2;10959:9;10950:7;10946:23;10942:32;10939:52;;;10987:1;10984;10977:12;10939:52;11019:9;11013:16;11038:28;11060:5;11038:28;:::i;13321:1133::-;13451:3;13480:1;13513:6;13507:13;13543:3;13565:1;13593:9;13589:2;13585:18;13575:28;;13653:2;13642:9;13638:18;13675;13665:61;;13719:4;13711:6;13707:17;13697:27;;13665:61;13745:2;13793;13785:6;13782:14;13762:18;13759:38;13756:165;;-1:-1:-1;;;13820:33:165;;13876:4;13873:1;13866:15;13906:4;13827:3;13894:17;13756:165;13937:18;13964:133;;;;14111:1;14106:323;;;;13930:499;;13964:133;-1:-1:-1;;13997:24:165;;13985:37;;14070:14;;14063:22;14051:35;;14042:45;;;-1:-1:-1;13964:133:165;;14106:323;13268:1;13261:14;;;13305:4;13292:18;;14204:1;14218:165;14232:6;14229:1;14226:13;14218:165;;;14310:14;;14297:11;;;14290:35;14353:16;;;;14247:10;;14218:165;;;14222:3;;14412:6;14407:3;14403:16;14396:23;;13930:499;-1:-1:-1;14445:3:165;;13321:1133;-1:-1:-1;;;;;;;;13321:1133:165:o",
    "linkReferences": {},
    "immutableReferences": {
      "13469": [
        {
          "start": 2696,
          "length": 32
        }
      ],
      "62384": [
        {
          "start": 970,
          "length": 32
        },
        {
          "start": 1787,
          "length": 32
        },
        {
          "start": 5010,
          "length": 32
        },
        {
          "start": 5370,
          "length": 32
        },
        {
          "start": 5751,
          "length": 32
        },
        {
          "start": 5903,
          "length": 32
        },
        {
          "start": 6241,
          "length": 32
        },
        {
          "start": 6563,
          "length": 32
        }
      ],
      "62887": [
        {
          "start": 886,
          "length": 32
        }
      ],
      "62901": [
        {
          "start": 2847,
          "length": 32
        }
      ],
      "62903": [
        {
          "start": 2895,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "asset()": "38d52e0f",
    "authority()": "bf7e214f",
    "balanceOf(address)": "70a08231",
    "canCall(address,address,bytes4)": "b7009613",
    "convertToAssets(uint256)": "07a2d13a",
    "convertToShares(uint256)": "c6e6f592",
    "decimals()": "313ce567",
    "deposit(uint256,address)": "6e553f65",
    "doesRoleHaveCapability(uint8,bytes4)": "e688747b",
    "doesUserHaveRole(address,uint8)": "ea7ca276",
    "getRate()": "679aefce",
    "getRolesWithCapability(bytes4)": "ed0d0efb",
    "getTargetCustomAuthority(address)": "c53a3985",
    "getUserRoles(address)": "06a36aee",
    "isCapabilityPublic(bytes4)": "0bade8a4",
    "maxDeposit(address)": "402d267d",
    "maxMint(address)": "c63d75b6",
    "maxRedeem(address)": "d905777e",
    "maxWithdraw(address)": "ce96cb77",
    "mint(uint256,address)": "94bf804d",
    "name()": "06fdde03",
    "nonces(address)": "7ecebe00",
    "owner()": "8da5cb5b",
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
    "previewDeposit(uint256)": "ef8b30f7",
    "previewMint(uint256)": "b3d7f6b9",
    "previewRedeem(uint256)": "4cdad506",
    "previewWithdraw(uint256)": "0a28a477",
    "redeem(uint256,address,address)": "ba087652",
    "setAuthority(address)": "7a9e5e4b",
    "setPublicCapability(bytes4,bool)": "4b5159da",
    "setRate(uint256)": "34fcf437",
    "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
    "setTargetCustomAuthority(address,address)": "728b952b",
    "setUserRole(address,uint8,bool)": "67aff484",
    "symbol()": "95d89b41",
    "totalAssets()": "01e1d114",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd",
    "transferOwnership(address)": "f2fde38b",
    "withdraw(uint256,address,address)": "b460af94"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract ERC20Mintable\",\"name\":\"_asset\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_initialRate\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_isCompetitionMode_\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rate_\",\"type\":\"uint256\"}],\"name\":\"setRate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"MockERC4626\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"deposit(uint256,address)\":{\"notice\":\"Overrides ///\"},\"setRate(uint256)\":{\"notice\":\"Mock ///\"}},\"notice\":\"This mock yield source will accrue interest at a specified rate         Every stateful interaction will accrue interest, so the interest         accrual will approximate continuous compounding as the contract         is called more frequently.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockERC4626.sol\":\"MockERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65\",\"dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui\"]},\"contracts/test/MockERC4626.sol\":{\"keccak256\":\"0xf4ceae2e2441dc6d1c10240c4287b745a298b6a49a65766d65fd4f2475135028\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://22410fb1c994f8533280da6f17aa7f28431d05af92d7c1dea1e4aaf1ac6b34d1\",\"dweb:/ipfs/QmU6iUyYn9obmDxVqkydXtYJUNuMHTtoef5EzoKgWpghXA\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/mixins/ERC4626.sol\":{\"keccak256\":\"0xa404f6f45bd53f24a90cc5ffe95e16b52e3f2dfd88f0d7a1edcb35f815919a7b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://9f01e32d713e05cc58c1563e9938a1c5e096b1da9f52c7ea8424f2317b94adc1\",\"dweb:/ipfs/QmVt5SsbA3kezM5pyovupN7iZLy6QVqY5qQRZKLFqxKJUs\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
              "internalType": "contract ERC20Mintable",
              "name": "_asset",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbol",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_initialRate",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_admin",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_isCompetitionMode_",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
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
              "name": "amount",
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
              "name": "user",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "contract Authority",
              "name": "newAuthority",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "AuthorityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "caller",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Deposit",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "PublicCapabilityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8",
              "indexed": true
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RoleCapabilityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "contract Authority",
              "name": "authority",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "TargetCustomAuthorityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
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
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "UserRoleUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "caller",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Withdraw",
          "anonymous": false
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
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
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
              "name": "spender",
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
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "asset",
          "outputs": [
            {
              "internalType": "contract ERC20",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "authority",
          "outputs": [
            {
              "internalType": "contract Authority",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
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
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "canCall",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "convertToAssets",
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
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "convertToShares",
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
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_assets",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deposit",
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
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "doesRoleHaveCapability",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "doesUserHaveRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getRate",
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
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getRolesWithCapability",
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
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getTargetCustomAuthority",
          "outputs": [
            {
              "internalType": "contract Authority",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getUserRoles",
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
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isCapabilityPublic",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxDeposit",
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
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxMint",
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
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxRedeem",
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
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxWithdraw",
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
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mint",
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
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
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
          "name": "owner",
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
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
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
          "name": "permit"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewDeposit",
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
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewMint",
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
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewRedeem",
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
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewWithdraw",
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
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeem",
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
              "internalType": "contract Authority",
              "name": "newAuthority",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setAuthority"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setPublicCapability"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_rate_",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setRate"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setRoleCapability"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "contract Authority",
              "name": "customAuthority",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setTargetCustomAuthority"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setUserRole"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalAssets",
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
          "name": "totalSupply",
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
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
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
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_assets",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "withdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "deposit(uint256,address)": {
            "notice": "Overrides ///"
          },
          "setRate(uint256)": {
            "notice": "Mock ///"
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
        "contracts/test/MockERC4626.sol": "MockERC4626"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
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
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        "urls": [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/ERC20Mintable.sol": {
        "keccak256": "0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389",
        "urls": [
          "bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65",
          "dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockERC4626.sol": {
        "keccak256": "0xf4ceae2e2441dc6d1c10240c4287b745a298b6a49a65766d65fd4f2475135028",
        "urls": [
          "bzz-raw://22410fb1c994f8533280da6f17aa7f28431d05af92d7c1dea1e4aaf1ac6b34d1",
          "dweb:/ipfs/QmU6iUyYn9obmDxVqkydXtYJUNuMHTtoef5EzoKgWpghXA"
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
      "lib/solmate/src/mixins/ERC4626.sol": {
        "keccak256": "0xa404f6f45bd53f24a90cc5ffe95e16b52e3f2dfd88f0d7a1edcb35f815919a7b",
        "urls": [
          "bzz-raw://9f01e32d713e05cc58c1563e9938a1c5e096b1da9f52c7ea8424f2317b94adc1",
          "dweb:/ipfs/QmVt5SsbA3kezM5pyovupN7iZLy6QVqY5qQRZKLFqxKJUs"
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
      "lib/solmate/src/utils/FixedPointMathLib.sol": {
        "keccak256": "0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843",
        "urls": [
          "bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9",
          "dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi"
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
    "absolutePath": "contracts/test/MockERC4626.sol",
    "id": 13721,
    "exportedSymbols": {
      "Authority": [
        62036
      ],
      "ERC20": [
        63250
      ],
      "ERC20Mintable": [
        13321
      ],
      "ERC4626": [
        62862
      ],
      "FixedPointMath": [
        8486
      ],
      "MockERC4626": [
        13720
      ],
      "MultiRolesAuthority": [
        62341
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:3569:44",
    "nodes": [
      {
        "id": 13443,
        "nodeType": "PragmaDirective",
        "src": "39:23:44",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 13445,
        "nodeType": "ImportDirective",
        "src": "64:50:44",
        "nodes": [],
        "absolutePath": "lib/solmate/src/auth/Auth.sol",
        "file": "solmate/auth/Auth.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13721,
        "sourceUnit": 62037,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13444,
              "name": "Authority",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62036,
              "src": "73:9:44",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13447,
        "nodeType": "ImportDirective",
        "src": "115:87:44",
        "nodes": [],
        "absolutePath": "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol",
        "file": "solmate/auth/authorities/MultiRolesAuthority.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13721,
        "sourceUnit": 62342,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13446,
              "name": "MultiRolesAuthority",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62341,
              "src": "124:19:44",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13449,
        "nodeType": "ImportDirective",
        "src": "203:49:44",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "solmate/tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13721,
        "sourceUnit": 63251,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13448,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63250,
              "src": "212:5:44",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13451,
        "nodeType": "ImportDirective",
        "src": "253:53:44",
        "nodes": [],
        "absolutePath": "lib/solmate/src/mixins/ERC4626.sol",
        "file": "solmate/mixins/ERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13721,
        "sourceUnit": 62863,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13450,
              "name": "ERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62862,
              "src": "262:7:44",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13453,
        "nodeType": "ImportDirective",
        "src": "307:69:44",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13721,
        "sourceUnit": 8487,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13452,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8486,
              "src": "316:14:44",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13455,
        "nodeType": "ImportDirective",
        "src": "377:52:44",
        "nodes": [],
        "absolutePath": "contracts/test/ERC20Mintable.sol",
        "file": "./ERC20Mintable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13721,
        "sourceUnit": 13322,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13454,
              "name": "ERC20Mintable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13321,
              "src": "386:13:44",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13720,
        "nodeType": "ContractDefinition",
        "src": "963:2644:44",
        "nodes": [
          {
            "id": 13463,
            "nodeType": "UsingForDirective",
            "src": "1022:33:44",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 13461,
              "name": "FixedPointMath",
              "nameLocations": [
                "1028:14:44"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "1028:14:44"
            },
            "typeName": {
              "id": 13462,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1047:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 13465,
            "nodeType": "VariableDeclaration",
            "src": "1061:22:44",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_rate",
            "nameLocation": "1078:5:44",
            "scope": 13720,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13464,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1061:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13467,
            "nodeType": "VariableDeclaration",
            "src": "1089:29:44",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_lastUpdated",
            "nameLocation": "1106:12:44",
            "scope": 13720,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13466,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1089:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13469,
            "nodeType": "VariableDeclaration",
            "src": "1125:42:44",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "_isCompetitionMode",
            "nameLocation": "1149:18:44",
            "scope": 13720,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 13468,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "1125:4:44",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13518,
            "nodeType": "FunctionDefinition",
            "src": "1174:445:44",
            "nodes": [],
            "body": {
              "id": 13517,
              "nodeType": "Block",
              "src": "1492:127:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13504,
                      "name": "_rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13465,
                      "src": "1502:5:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13505,
                      "name": "_initialRate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13478,
                      "src": "1510:12:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1502:20:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13507,
                  "nodeType": "ExpressionStatement",
                  "src": "1502:20:44"
                },
                {
                  "expression": {
                    "id": 13511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13508,
                      "name": "_lastUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13467,
                      "src": "1532:12:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13509,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "1547:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 13510,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1553:9:44",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "1547:15:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1532:30:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13512,
                  "nodeType": "ExpressionStatement",
                  "src": "1532:30:44"
                },
                {
                  "expression": {
                    "id": 13515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13513,
                      "name": "_isCompetitionMode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13469,
                      "src": "1572:18:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13514,
                      "name": "_isCompetitionMode_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13482,
                      "src": "1593:19:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1572:40:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 13516,
                  "nodeType": "ExpressionStatement",
                  "src": "1572:40:44"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 13488,
                            "name": "_asset",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13472,
                            "src": "1400:6:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Mintable_$13321",
                              "typeString": "contract ERC20Mintable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC20Mintable_$13321",
                              "typeString": "contract ERC20Mintable"
                            }
                          ],
                          "id": 13487,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1392:7:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 13486,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1392:7:44",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 13489,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1392:15:44",
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
                      "id": 13485,
                      "name": "ERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63250,
                      "src": "1386:5:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_ERC20_$63250_$",
                        "typeString": "type(contract ERC20)"
                      }
                    },
                    "id": 13490,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1386:22:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63250",
                      "typeString": "contract ERC20"
                    }
                  },
                  {
                    "id": 13491,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13474,
                    "src": "1410:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "id": 13492,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13476,
                    "src": "1417:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 13493,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 13484,
                  "name": "ERC4626",
                  "nameLocations": [
                    "1378:7:44"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62862,
                  "src": "1378:7:44"
                },
                "nodeType": "ModifierInvocation",
                "src": "1378:47:44"
              },
              {
                "arguments": [
                  {
                    "id": 13495,
                    "name": "_admin",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13480,
                    "src": "1454:6:44",
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
                            "id": 13499,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "1480:4:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockERC4626_$13720",
                              "typeString": "contract MockERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MockERC4626_$13720",
                              "typeString": "contract MockERC4626"
                            }
                          ],
                          "id": 13498,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1472:7:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 13497,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1472:7:44",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 13500,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1472:13:44",
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
                      "id": 13496,
                      "name": "Authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62036,
                      "src": "1462:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Authority_$62036_$",
                        "typeString": "type(contract Authority)"
                      }
                    },
                    "id": 13501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1462:24:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  }
                ],
                "id": 13502,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 13494,
                  "name": "MultiRolesAuthority",
                  "nameLocations": [
                    "1434:19:44"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62341,
                  "src": "1434:19:44"
                },
                "nodeType": "ModifierInvocation",
                "src": "1434:53:44"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 13483,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13472,
                  "mutability": "mutable",
                  "name": "_asset",
                  "nameLocation": "1209:6:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13518,
                  "src": "1195:20:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20Mintable_$13321",
                    "typeString": "contract ERC20Mintable"
                  },
                  "typeName": {
                    "id": 13471,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 13470,
                      "name": "ERC20Mintable",
                      "nameLocations": [
                        "1195:13:44"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 13321,
                      "src": "1195:13:44"
                    },
                    "referencedDeclaration": 13321,
                    "src": "1195:13:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20Mintable_$13321",
                      "typeString": "contract ERC20Mintable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13474,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "1239:5:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13518,
                  "src": "1225:19:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13473,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1225:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13476,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "1268:7:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13518,
                  "src": "1254:21:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13475,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1254:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13478,
                  "mutability": "mutable",
                  "name": "_initialRate",
                  "nameLocation": "1293:12:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13518,
                  "src": "1285:20:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13477,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1285:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13480,
                  "mutability": "mutable",
                  "name": "_admin",
                  "nameLocation": "1323:6:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13518,
                  "src": "1315:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13479,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1315:7:44",
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
                  "id": 13482,
                  "mutability": "mutable",
                  "name": "_isCompetitionMode_",
                  "nameLocation": "1344:19:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13518,
                  "src": "1339:24:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13481,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1339:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1185:184:44"
            },
            "returnParameters": {
              "id": 13503,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1492:0:44"
            },
            "scope": 13720,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13535,
            "nodeType": "ModifierDefinition",
            "src": "1625:236:44",
            "nodes": [],
            "body": {
              "id": 13534,
              "nodeType": "Block",
              "src": "1666:195:44",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 13520,
                    "name": "_isCompetitionMode",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13469,
                    "src": "1680:18:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 13532,
                  "nodeType": "IfStatement",
                  "src": "1676:168:44",
                  "trueBody": {
                    "id": 13531,
                    "nodeType": "Block",
                    "src": "1700:144:44",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 13523,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "1752:3:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 13524,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "1756:6:44",
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "1752:10:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "expression": {
                                    "id": 13525,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "1764:3:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 13526,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "1768:3:44",
                                  "memberName": "sig",
                                  "nodeType": "MemberAccess",
                                  "src": "1764:7:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes4",
                                    "typeString": "bytes4"
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
                                    "typeIdentifier": "t_bytes4",
                                    "typeString": "bytes4"
                                  }
                                ],
                                "id": 13522,
                                "name": "isAuthorized",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61968,
                                "src": "1739:12:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                  "typeString": "function (address,bytes4) view returns (bool)"
                                }
                              },
                              "id": 13527,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1739:33:44",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "hexValue": "4d6f636b455243343632363a206e6f7420617574686f72697a6564",
                              "id": 13528,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1790:29:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_a7626d0608fc151c96b381abf9f1ef1d92bb12f776fb43bcd63a3eefd31ed019",
                                "typeString": "literal_string \"MockERC4626: not authorized\""
                              },
                              "value": "MockERC4626: not authorized"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_a7626d0608fc151c96b381abf9f1ef1d92bb12f776fb43bcd63a3eefd31ed019",
                                "typeString": "literal_string \"MockERC4626: not authorized\""
                              }
                            ],
                            "id": 13521,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "1714:7:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 13529,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1714:119:44",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 13530,
                        "nodeType": "ExpressionStatement",
                        "src": "1714:119:44"
                      }
                    ]
                  }
                },
                {
                  "id": 13533,
                  "nodeType": "PlaceholderStatement",
                  "src": "1853:1:44"
                }
              ]
            },
            "name": "requiresAuthDuringCompetition",
            "nameLocation": "1634:29:44",
            "parameters": {
              "id": 13519,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1663:2:44"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 13556,
            "nodeType": "FunctionDefinition",
            "src": "1890:185:44",
            "nodes": [],
            "body": {
              "id": 13555,
              "nodeType": "Block",
              "src": "1999:76:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13546,
                      "name": "_accrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13684,
                      "src": "2009:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 13547,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2009:9:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13548,
                  "nodeType": "ExpressionStatement",
                  "src": "2009:9:44"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13551,
                        "name": "_assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13538,
                        "src": "2049:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13552,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13540,
                        "src": "2058:9:44",
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
                        "id": 13549,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2035:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MockERC4626_$13720_$",
                          "typeString": "type(contract super MockERC4626)"
                        }
                      },
                      "id": 13550,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2041:7:44",
                      "memberName": "deposit",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62458,
                      "src": "2035:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address) returns (uint256)"
                      }
                    },
                    "id": 13553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2035:33:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13545,
                  "id": 13554,
                  "nodeType": "Return",
                  "src": "2028:40:44"
                }
              ]
            },
            "baseFunctions": [
              62458
            ],
            "documentation": {
              "id": 13536,
              "nodeType": "StructuredDocumentation",
              "src": "1867:18:44",
              "text": "Overrides ///"
            },
            "functionSelector": "6e553f65",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "1899:7:44",
            "overrides": {
              "id": 13542,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1972:8:44"
            },
            "parameters": {
              "id": 13541,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13538,
                  "mutability": "mutable",
                  "name": "_assets",
                  "nameLocation": "1924:7:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13556,
                  "src": "1916:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13537,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1916:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13540,
                  "mutability": "mutable",
                  "name": "_receiver",
                  "nameLocation": "1949:9:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13556,
                  "src": "1941:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13539,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1941:7:44",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1906:58:44"
            },
            "returnParameters": {
              "id": 13545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13544,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13556,
                  "src": "1990:7:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13543,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1990:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1989:9:44"
            },
            "scope": 13720,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13576,
            "nodeType": "FunctionDefinition",
            "src": "2081:179:44",
            "nodes": [],
            "body": {
              "id": 13575,
              "nodeType": "Block",
              "src": "2187:73:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13566,
                      "name": "_accrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13684,
                      "src": "2197:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 13567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2197:9:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13568,
                  "nodeType": "ExpressionStatement",
                  "src": "2197:9:44"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13571,
                        "name": "_shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13558,
                        "src": "2234:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13572,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13560,
                        "src": "2243:9:44",
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
                        "id": 13569,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2223:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MockERC4626_$13720_$",
                          "typeString": "type(contract super MockERC4626)"
                        }
                      },
                      "id": 13570,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2229:4:44",
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62504,
                      "src": "2223:10:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address) returns (uint256)"
                      }
                    },
                    "id": 13573,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2223:30:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13565,
                  "id": 13574,
                  "nodeType": "Return",
                  "src": "2216:37:44"
                }
              ]
            },
            "baseFunctions": [
              62504
            ],
            "functionSelector": "94bf804d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "2090:4:44",
            "overrides": {
              "id": 13562,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2160:8:44"
            },
            "parameters": {
              "id": 13561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13558,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "2112:7:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13576,
                  "src": "2104:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13557,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2104:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13560,
                  "mutability": "mutable",
                  "name": "_receiver",
                  "nameLocation": "2137:9:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13576,
                  "src": "2129:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13559,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2129:7:44",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2094:58:44"
            },
            "returnParameters": {
              "id": 13565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13564,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13576,
                  "src": "2178:7:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2178:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2177:9:44"
            },
            "scope": 13720,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13599,
            "nodeType": "FunctionDefinition",
            "src": "2266:219:44",
            "nodes": [],
            "body": {
              "id": 13598,
              "nodeType": "Block",
              "src": "2400:85:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13588,
                      "name": "_accrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13684,
                      "src": "2410:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 13589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2410:9:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13590,
                  "nodeType": "ExpressionStatement",
                  "src": "2410:9:44"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13593,
                        "name": "_assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13578,
                        "src": "2451:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13594,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13580,
                        "src": "2460:9:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 13595,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13582,
                        "src": "2471:6:44",
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
                        "id": 13591,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2436:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MockERC4626_$13720_$",
                          "typeString": "type(contract super MockERC4626)"
                        }
                      },
                      "id": 13592,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2442:8:44",
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62582,
                      "src": "2436:14:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address,address) returns (uint256)"
                      }
                    },
                    "id": 13596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2436:42:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13587,
                  "id": 13597,
                  "nodeType": "Return",
                  "src": "2429:49:44"
                }
              ]
            },
            "baseFunctions": [
              62582
            ],
            "functionSelector": "b460af94",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "2275:8:44",
            "overrides": {
              "id": 13584,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2373:8:44"
            },
            "parameters": {
              "id": 13583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13578,
                  "mutability": "mutable",
                  "name": "_assets",
                  "nameLocation": "2301:7:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13599,
                  "src": "2293:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13577,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2293:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13580,
                  "mutability": "mutable",
                  "name": "_receiver",
                  "nameLocation": "2326:9:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13599,
                  "src": "2318:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13579,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2318:7:44",
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
                  "id": 13582,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "2353:6:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13599,
                  "src": "2345:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13581,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2345:7:44",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2283:82:44"
            },
            "returnParameters": {
              "id": 13587,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13586,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13599,
                  "src": "2391:7:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13585,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2391:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2390:9:44"
            },
            "scope": 13720,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13622,
            "nodeType": "FunctionDefinition",
            "src": "2491:215:44",
            "nodes": [],
            "body": {
              "id": 13621,
              "nodeType": "Block",
              "src": "2623:83:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13611,
                      "name": "_accrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13684,
                      "src": "2633:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 13612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2633:9:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13613,
                  "nodeType": "ExpressionStatement",
                  "src": "2633:9:44"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13616,
                        "name": "_shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13601,
                        "src": "2672:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13617,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13603,
                        "src": "2681:9:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 13618,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13605,
                        "src": "2692:6:44",
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
                        "id": 13614,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2659:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MockERC4626_$13720_$",
                          "typeString": "type(contract super MockERC4626)"
                        }
                      },
                      "id": 13615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2665:6:44",
                      "memberName": "redeem",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 62666,
                      "src": "2659:12:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address,address) returns (uint256)"
                      }
                    },
                    "id": 13619,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2659:40:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13610,
                  "id": 13620,
                  "nodeType": "Return",
                  "src": "2652:47:44"
                }
              ]
            },
            "baseFunctions": [
              62666
            ],
            "functionSelector": "ba087652",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "2500:6:44",
            "overrides": {
              "id": 13607,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2596:8:44"
            },
            "parameters": {
              "id": 13606,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13601,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "2524:7:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13622,
                  "src": "2516:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13600,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2516:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13603,
                  "mutability": "mutable",
                  "name": "_receiver",
                  "nameLocation": "2549:9:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13622,
                  "src": "2541:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13602,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2541:7:44",
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
                  "id": 13605,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "2576:6:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13622,
                  "src": "2568:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13604,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2568:7:44",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2506:82:44"
            },
            "returnParameters": {
              "id": 13610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13609,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13622,
                  "src": "2614:7:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13608,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2614:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2613:9:44"
            },
            "scope": 13720,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13640,
            "nodeType": "FunctionDefinition",
            "src": "2712:140:44",
            "nodes": [],
            "body": {
              "id": 13639,
              "nodeType": "Block",
              "src": "2774:78:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 13637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 13632,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "2815:4:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MockERC4626_$13720",
                                "typeString": "contract MockERC4626"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_MockERC4626_$13720",
                                "typeString": "contract MockERC4626"
                              }
                            ],
                            "id": 13631,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2807:7:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 13630,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2807:7:44",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 13633,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2807:13:44",
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
                          "id": 13628,
                          "name": "asset",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62384,
                          "src": "2791:5:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$63250",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 13629,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2797:9:44",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62893,
                        "src": "2791:15:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 13634,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2791:30:44",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 13635,
                        "name": "_getAccruedInterest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13719,
                        "src": "2824:19:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 13636,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2824:21:44",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2791:54:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13627,
                  "id": 13638,
                  "nodeType": "Return",
                  "src": "2784:61:44"
                }
              ]
            },
            "baseFunctions": [
              62671
            ],
            "functionSelector": "01e1d114",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "2721:11:44",
            "overrides": {
              "id": 13624,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2747:8:44"
            },
            "parameters": {
              "id": 13623,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2732:2:44"
            },
            "returnParameters": {
              "id": 13627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13626,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13640,
                  "src": "2765:7:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13625,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2765:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2764:9:44"
            },
            "scope": 13720,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13656,
            "nodeType": "FunctionDefinition",
            "src": "2876:122:44",
            "nodes": [],
            "body": {
              "id": 13655,
              "nodeType": "Block",
              "src": "2948:50:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13648,
                      "name": "_accrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13684,
                      "src": "2958:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 13649,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2958:9:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13650,
                  "nodeType": "ExpressionStatement",
                  "src": "2958:9:44"
                },
                {
                  "expression": {
                    "id": 13653,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13651,
                      "name": "_rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13465,
                      "src": "2977:5:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13652,
                      "name": "_rate_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13643,
                      "src": "2985:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2977:14:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13654,
                  "nodeType": "ExpressionStatement",
                  "src": "2977:14:44"
                }
              ]
            },
            "documentation": {
              "id": 13641,
              "nodeType": "StructuredDocumentation",
              "src": "2858:13:44",
              "text": "Mock ///"
            },
            "functionSelector": "34fcf437",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 13646,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 13645,
                  "name": "requiresAuthDuringCompetition",
                  "nameLocations": [
                    "2918:29:44"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 13535,
                  "src": "2918:29:44"
                },
                "nodeType": "ModifierInvocation",
                "src": "2918:29:44"
              }
            ],
            "name": "setRate",
            "nameLocation": "2885:7:44",
            "parameters": {
              "id": 13644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13643,
                  "mutability": "mutable",
                  "name": "_rate_",
                  "nameLocation": "2901:6:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 13656,
                  "src": "2893:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13642,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2893:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2892:16:44"
            },
            "returnParameters": {
              "id": 13647,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2948:0:44"
            },
            "scope": 13720,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13664,
            "nodeType": "FunctionDefinition",
            "src": "3004:80:44",
            "nodes": [],
            "body": {
              "id": 13663,
              "nodeType": "Block",
              "src": "3055:29:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13661,
                    "name": "_rate",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13465,
                    "src": "3072:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13660,
                  "id": 13662,
                  "nodeType": "Return",
                  "src": "3065:12:44"
                }
              ]
            },
            "functionSelector": "679aefce",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getRate",
            "nameLocation": "3013:7:44",
            "parameters": {
              "id": 13657,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3020:2:44"
            },
            "returnParameters": {
              "id": 13660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13659,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13664,
                  "src": "3046:7:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13658,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3046:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3045:9:44"
            },
            "scope": 13720,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13684,
            "nodeType": "FunctionDefinition",
            "src": "3090:142:44",
            "nodes": [],
            "body": {
              "id": 13683,
              "nodeType": "Block",
              "src": "3118:114:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 13674,
                          "name": "_getAccruedInterest",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13719,
                          "src": "3163:19:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                            "typeString": "function () view returns (uint256)"
                          }
                        },
                        "id": 13675,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3163:21:44",
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
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 13670,
                                "name": "asset",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62384,
                                "src": "3150:5:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20_$63250",
                                  "typeString": "contract ERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ERC20_$63250",
                                  "typeString": "contract ERC20"
                                }
                              ],
                              "id": 13669,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3142:7:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 13668,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3142:7:44",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 13671,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3142:14:44",
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
                          "id": 13667,
                          "name": "ERC20Mintable",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13321,
                          "src": "3128:13:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$13321_$",
                            "typeString": "type(contract ERC20Mintable)"
                          }
                        },
                        "id": 13672,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3128:29:44",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20Mintable_$13321",
                          "typeString": "contract ERC20Mintable"
                        }
                      },
                      "id": 13673,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3158:4:44",
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13276,
                      "src": "3128:34:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 13676,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3128:57:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13677,
                  "nodeType": "ExpressionStatement",
                  "src": "3128:57:44"
                },
                {
                  "expression": {
                    "id": 13681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13678,
                      "name": "_lastUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13467,
                      "src": "3195:12:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13679,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "3210:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 13680,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3216:9:44",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "3210:15:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3195:30:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13682,
                  "nodeType": "ExpressionStatement",
                  "src": "3195:30:44"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_accrue",
            "nameLocation": "3099:7:44",
            "parameters": {
              "id": 13665,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3106:2:44"
            },
            "returnParameters": {
              "id": 13666,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3118:0:44"
            },
            "scope": 13720,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 13719,
            "nodeType": "FunctionDefinition",
            "src": "3238:367:44",
            "nodes": [],
            "body": {
              "id": 13718,
              "nodeType": "Block",
              "src": "3301:304:44",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13690
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13690,
                      "mutability": "mutable",
                      "name": "timeElapsed",
                      "nameLocation": "3372:11:44",
                      "nodeType": "VariableDeclaration",
                      "scope": 13718,
                      "src": "3364:19:44",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13689,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3364:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13699,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "333635",
                        "id": 13697,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3440:8:44",
                        "subdenomination": "days",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        },
                        "value": "365"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        }
                      ],
                      "expression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 13694,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 13691,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -4,
                                "src": "3387:5:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 13692,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3393:9:44",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "3387:15:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 13693,
                              "name": "_lastUpdated",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13467,
                              "src": "3405:12:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3387:30:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 13695,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "3386:32:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 13696,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3419:7:44",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7802,
                      "src": "3386:40:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13698,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3386:72:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3364:94:44"
                },
                {
                  "assignments": [
                    13701
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13701,
                      "mutability": "mutable",
                      "name": "accrued",
                      "nameLocation": "3476:7:44",
                      "nodeType": "VariableDeclaration",
                      "scope": 13718,
                      "src": "3468:15:44",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13700,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3468:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13715,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 13712,
                            "name": "timeElapsed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13690,
                            "src": "3552:11:44",
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
                            "id": 13710,
                            "name": "_rate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13465,
                            "src": "3538:5:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 13711,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3544:7:44",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7784,
                          "src": "3538:13:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 13713,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3538:26:44",
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
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 13706,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3510:4:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MockERC4626_$13720",
                                  "typeString": "contract MockERC4626"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MockERC4626_$13720",
                                  "typeString": "contract MockERC4626"
                                }
                              ],
                              "id": 13705,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3502:7:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 13704,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3502:7:44",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 13707,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3502:13:44",
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
                            "id": 13702,
                            "name": "asset",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62384,
                            "src": "3486:5:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$63250",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 13703,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3492:9:44",
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 62893,
                          "src": "3486:15:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 13708,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3486:30:44",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 13709,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3517:7:44",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7784,
                      "src": "3486:38:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13714,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3486:88:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3468:106:44"
                },
                {
                  "expression": {
                    "id": 13716,
                    "name": "accrued",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13701,
                    "src": "3591:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13688,
                  "id": 13717,
                  "nodeType": "Return",
                  "src": "3584:14:44"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getAccruedInterest",
            "nameLocation": "3247:19:44",
            "parameters": {
              "id": 13685,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3266:2:44"
            },
            "returnParameters": {
              "id": 13688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13687,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13719,
                  "src": "3292:7:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13686,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3292:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3291:9:44"
            },
            "scope": 13720,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 13457,
              "name": "ERC4626",
              "nameLocations": [
                "987:7:44"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62862,
              "src": "987:7:44"
            },
            "id": 13458,
            "nodeType": "InheritanceSpecifier",
            "src": "987:7:44"
          },
          {
            "baseName": {
              "id": 13459,
              "name": "MultiRolesAuthority",
              "nameLocations": [
                "996:19:44"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62341,
              "src": "996:19:44"
            },
            "id": 13460,
            "nodeType": "InheritanceSpecifier",
            "src": "996:19:44"
          }
        ],
        "canonicalName": "MockERC4626",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 13456,
          "nodeType": "StructuredDocumentation",
          "src": "431:532:44",
          "text": "@author DELV\n @title MockERC4626\n @notice This mock yield source will accrue interest at a specified rate\n         Every stateful interaction will accrue interest, so the interest\n         accrual will approximate continuous compounding as the contract\n         is called more frequently.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          13720,
          62341,
          62036,
          62023,
          62862,
          63250
        ],
        "name": "MockERC4626",
        "nameLocation": "972:11:44",
        "scope": 13721,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 44
} as const;
