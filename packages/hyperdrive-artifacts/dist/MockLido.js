export const MockLido = {
    "abi": [
        {
            "inputs": [
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
                    "name": "_isCompetitionMode",
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
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "burn",
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
            "name": "getBufferedEther",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_sharesAmount",
                    "type": "uint256"
                }
            ],
            "name": "getPooledEthByShares",
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
                    "internalType": "uint256",
                    "name": "_ethAmount",
                    "type": "uint256"
                }
            ],
            "name": "getSharesByPooledEth",
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
            "inputs": [],
            "name": "getTotalPooledEther",
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
            "inputs": [],
            "name": "isCompetitionMode",
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
                    "name": "destination",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "sharesOf",
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
            "name": "submit",
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
                    "internalType": "address",
                    "name": "_recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_sharesAmount",
                    "type": "uint256"
                }
            ],
            "name": "transferShares",
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
                    "internalType": "address",
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_sharesAmount",
                    "type": "uint256"
                }
            ],
            "name": "transferSharesFrom",
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
        "object": "0x6101006040523480156200001257600080fd5b50604051620022ff380380620022ff83398101604081905262000035916200021c565b6040518060400160405280601781526020017f4c6971756964207374616b656420457468657220322e30000000000000000000815250604051806040016040528060058152602001640e6e88aa8960db1b81525060128484813081818888888260009081620000a5919062000319565b506001620000b4838262000319565b5060ff81166080524660a052620000ca62000180565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052505050600c93909355505042600d555062000463565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001b49190620003e5565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000806000606084860312156200023257600080fd5b835160208501519093506001600160a01b03811681146200025257600080fd5b604085015190925080151581146200026957600080fd5b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200029f57607f821691505b602082108103620002c057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200031457600081815260208120601f850160051c81016020861015620002ef5750805b601f850160051c820191505b818110156200031057828155600101620002fb565b5050505b505050565b81516001600160401b0381111562000335576200033562000274565b6200034d816200034684546200028a565b84620002c6565b602080601f8311600181146200038557600084156200036c5750858301515b600019600386901b1c1916600185901b17855562000310565b600085815260208120601f198616915b82811015620003b65788860151825594840194600190910190840162000395565b5085821015620003d55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620003f5816200028a565b60018281168015620004105760018114620004265762000457565b60ff198416875282151583028701945062000457565b8760005260208060002060005b858110156200044e5781548a82015290840190820162000433565b50505082870194505b50929695505050505050565b60805160a05160c05160e051611e3f620004c06000396000818161057301528181610b7701528181610c4e01528181610cb40152818161106b01526110cd01526000610c1301526000610bde015260006103ad0152611e3f6000f3fe60806040526004361061025c5760003560e01c80637a28fb8811610144578063b7009613116100b6578063dd62ed3e1161007a578063dd62ed3e1461076d578063e688747b146107a5578063ea7ca276146107e8578063ed0d0efb1461082c578063f2fde38b14610859578063f5eb42dc1461087957600080fd5b8063b7009613146106c2578063bf7e214f146106e2578063c53a398514610702578063d5002f2e14610738578063d505accf1461074d57600080fd5b80638fcb4e5b116101085780638fcb4e5b1461061a57806395d89b411461063a5780639dc29fac1461064f578063a0712d681461066f578063a1903eab1461068f578063a9059cbb146106a257600080fd5b80637a28fb88146105415780637a8c63b5146105615780637a9e5e4b146105955780637ecebe00146105b55780638da5cb5b146105e257600080fd5b80633644e515116101dd5780634b5159da116101a15780634b5159da1461047f578063679aefce1461049f57806367aff484146104b45780636d780459146104d457806370a08231146104f4578063728b952b1461052157600080fd5b80633644e5151461040157806337cfdaca1461041657806340c10f191461042b57806342966c681461044b57806347b714e01461046b57600080fd5b806318160ddd1161022457806318160ddd14610345578063192084511461035b57806323b872dd1461037b578063313ce5671461039b57806334fcf437146103e157600080fd5b806306a36aee1461026157806306fdde03146102a1578063095ea7b3146102c35780630bade8a4146102f35780630ea9b75b14610323575b600080fd5b34801561026d57600080fd5b5061028e61027c3660046118f7565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102ad57600080fd5b506102b6610899565b6040516102989190611914565b3480156102cf57600080fd5b506102e36102de366004611962565b610927565b6040519015158152602001610298565b3480156102ff57600080fd5b506102e361030e3660046119ab565b600a6020526000908152604090205460ff1681565b34801561032f57600080fd5b5061034361033e3660046119e5565b610994565b005b34801561035157600080fd5b5061028e60025481565b34801561036757600080fd5b5061028e610376366004611a2c565b610a75565b34801561038757600080fd5b506102e3610396366004611a45565b610a93565b3480156103a757600080fd5b506103cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610298565b3480156103ed57600080fd5b506103436103fc366004611a2c565b610b75565b34801561040d57600080fd5b5061028e610bda565b34801561042257600080fd5b5061028e610c35565b34801561043757600080fd5b50610343610446366004611962565b610c4c565b34801561045757600080fd5b50610343610466366004611a2c565b610cb2565b34801561047757600080fd5b50600061028e565b34801561048b57600080fd5b5061034361049a366004611a86565b610d17565b3480156104ab57600080fd5b50600c5461028e565b3480156104c057600080fd5b506103436104cf366004611abd565b610da9565b3480156104e057600080fd5b5061028e6104ef366004611a45565b610e71565b34801561050057600080fd5b5061028e61050f3660046118f7565b60036020526000908152604090205481565b34801561052d57600080fd5b5061034361053c366004611aeb565b610ea9565b34801561054d57600080fd5b5061028e61055c366004611a2c565b610f32565b34801561056d57600080fd5b506102e37f000000000000000000000000000000000000000000000000000000000000000081565b3480156105a157600080fd5b506103436105b03660046118f7565b610f47565b3480156105c157600080fd5b5061028e6105d03660046118f7565b60056020526000908152604090205481565b3480156105ee57600080fd5b50600654610602906001600160a01b031681565b6040516001600160a01b039091168152602001610298565b34801561062657600080fd5b5061028e610635366004611962565b611031565b34801561064657600080fd5b506102b661105c565b34801561065b57600080fd5b5061034361066a366004611962565b611069565b34801561067b57600080fd5b5061034361068a366004611a2c565b6110cb565b61028e61069d3660046118f7565b61112d565b3480156106ae57600080fd5b506102e36106bd366004611962565b6111b9565b3480156106ce57600080fd5b506102e36106dd366004611b19565b61121f565b3480156106ee57600080fd5b50600754610602906001600160a01b031681565b34801561070e57600080fd5b5061060261071d3660046118f7565b6008602052600090815260409020546001600160a01b031681565b34801561074457600080fd5b50600f5461028e565b34801561075957600080fd5b50610343610768366004611b60565b61131d565b34801561077957600080fd5b5061028e610788366004611aeb565b600460209081526000928352604080842090915290825290205481565b3480156107b157600080fd5b506102e36107c0366004611bce565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b3480156107f457600080fd5b506102e3610803366004611c01565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b34801561083857600080fd5b5061028e6108473660046119ab565b600b6020526000908152604090205481565b34801561086557600080fd5b506103436108743660046118f7565b611561565b34801561088557600080fd5b5061028e6108943660046118f7565b6115df565b600080546108a690611c2d565b80601f01602080910402602001604051908101604052809291908181526020018280546108d290611c2d565b801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109829086815260200190565b60405180910390a35060015b92915050565b6109aa336000356001600160e01b031916611614565b6109cf5760405162461bcd60e51b81526004016109c690611c67565b60405180910390fd5b80156109ff576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a26565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610a68911515815260200190565b60405180910390a3505050565b600061098e610a83600f5490565b610a8b610c35565b8491906116be565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610aef57610aca8382611ca3565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b17908490611ca3565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611dea83398151915290610b609087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610bcd57610bb1336000356001600160e01b031916611614565b610bcd5760405162461bcd60e51b81526004016109c690611cb6565b610bd56116dc565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c1057610c0b61170d565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610c3f6117a7565b600e54610c0b9190611ced565b7f000000000000000000000000000000000000000000000000000000000000000015610ca457610c88336000356001600160e01b031916611614565b610ca45760405162461bcd60e51b81526004016109c690611cb6565b610cae82826117fc565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610d0a57610cee336000356001600160e01b031916611614565b610d0a5760405162461bcd60e51b81526004016109c690611cb6565b610d143382611856565b50565b610d2d336000356001600160e01b031916611614565b610d495760405162461bcd60e51b81526004016109c690611c67565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610dbf336000356001600160e01b031916611614565b610ddb5760405162461bcd60e51b81526004016109c690611c67565b8015610e0a576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610e30565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610a68911515815260200190565b6000610e7b6116dc565b6000610e93610e88610c35565b600f548591906116be565b9050610ea0858583610a93565b50949350505050565b610ebf336000356001600160e01b031916611614565b610edb5760405162461bcd60e51b81526004016109c690611c67565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b600061098e610f3f610c35565b600f54610a8b565b6006546001600160a01b0316331480610fdc575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610f9b90339030906001600160e01b03196000351690600401611d00565b602060405180830381865afa158015610fb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdc9190611d2d565b610fe557600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600061103b6116dc565b6000611048610e88610c35565b905061105484826111b9565b509392505050565b600180546108a690611c2d565b7f0000000000000000000000000000000000000000000000000000000000000000156110c1576110a5336000356001600160e01b031916611614565b6110c15760405162461bcd60e51b81526004016109c690611cb6565b610cae8282611856565b7f00000000000000000000000000000000000000000000000000000000000000001561112357611107336000356001600160e01b031916611614565b6111235760405162461bcd60e51b81526004016109c690611cb6565b610d1433826117fc565b60006111376116dc565b600f5460000361115e5734600f819055600e8190556111579033906117fc565b5034919050565b600061117c61116c600f5490565b611174610c35565b3491906116be565b905034600e60008282546111909190611ced565b9250508190555080600f60008282546111a99190611ced565b9091555061098e905033346117fc565b336000908152600360205260408120805483919083906111da908490611ca3565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611dea833981519152906109829086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156112bb5760405163b700961360e01b81526001600160a01b0382169063b70096139061127290889088908890600401611d00565b602060405180830381865afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b39190611d2d565b915050610b6e565b6001600160e01b031983166000908152600a602052604090205460ff168061131457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561136d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016109c6565b60006001611379610bda565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611485573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906114bb5750876001600160a01b0316816001600160a01b0316145b6114f85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016109c6565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611577336000356001600160e01b031916611614565b6115935760405162461bcd60e51b81526004016109c690611c67565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610b6e611604600f5490565b61160c610c35565b8391906116be565b6007546000906001600160a01b0316801580159061169e575060405163b700961360e01b81526001600160a01b0382169063b70096139061165d90879030908890600401611d00565b602060405180830381865afa15801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e9190611d2d565b806116b657506006546001600160a01b038581169116145b949350505050565b60008260001904841183021582026116d557600080fd5b5091020490565b60006116e66117a7565b905080156117065780600e60008282546117009190611ced565b90915550505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161173f9190611d4a565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600c546000036117b95750600090565b60006117d76301e13380600d54426117d19190611ca3565b906118b8565b90506000610b6e6117f383600c546118cd90919063ffffffff16565b600e54906118cd565b806002600082825461180e9190611ced565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611dea83398151915291015b60405180910390a35050565b6001600160a01b0382166000908152600360205260408120805483929061187e908490611ca3565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611dea8339815191529060200161184a565b6000610b6e83670de0b6b3a7640000846116be565b6000610b6e8383670de0b6b3a76400006116be565b6001600160a01b0381168114610d1457600080fd5b60006020828403121561190957600080fd5b8135610b6e816118e2565b600060208083528351808285015260005b8181101561194157858101830151858201604001528201611925565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561197557600080fd5b8235611980816118e2565b946020939093013593505050565b80356001600160e01b0319811681146119a657600080fd5b919050565b6000602082840312156119bd57600080fd5b610b6e8261198e565b803560ff811681146119a657600080fd5b8015158114610d1457600080fd5b6000806000606084860312156119fa57600080fd5b611a03846119c6565b9250611a116020850161198e565b91506040840135611a21816119d7565b809150509250925092565b600060208284031215611a3e57600080fd5b5035919050565b600080600060608486031215611a5a57600080fd5b8335611a65816118e2565b92506020840135611a75816118e2565b929592945050506040919091013590565b60008060408385031215611a9957600080fd5b611aa28361198e565b91506020830135611ab2816119d7565b809150509250929050565b600080600060608486031215611ad257600080fd5b8335611add816118e2565b9250611a11602085016119c6565b60008060408385031215611afe57600080fd5b8235611b09816118e2565b91506020830135611ab2816118e2565b600080600060608486031215611b2e57600080fd5b8335611b39816118e2565b92506020840135611b49816118e2565b9150611b576040850161198e565b90509250925092565b600080600080600080600060e0888a031215611b7b57600080fd5b8735611b86816118e2565b96506020880135611b96816118e2565b95506040880135945060608801359350611bb2608089016119c6565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611be157600080fd5b611bea836119c6565b9150611bf86020840161198e565b90509250929050565b60008060408385031215611c1457600080fd5b8235611c1f816118e2565b9150611bf8602084016119c6565b600181811c90821680611c4157607f821691505b602082108103611c6157634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561098e5761098e611c8d565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b8082018082111561098e5761098e611c8d565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611d3f57600080fd5b8151610b6e816119d7565b600080835481600182811c915080831680611d6657607f831692505b60208084108203611d8557634e487b7160e01b86526022600452602486fd5b818015611d995760018114611dae57611ddb565b60ff1986168952841515850289019650611ddb565b60008a81526020902060005b86811015611dd35781548b820152908501908301611dba565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220069a477a7259dd256a022ab4d5d72660bf1324ac9bbd57f983bef6e4d0f02f6864736f6c63430008140033",
        "sourceMap": "805:4215:139:-:0;;;1066:346;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;359:323:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;359:323:129;;;1266:2:139;1282:6;1302:18;581:5:129;614:4;1149:6:171;1157:10;529:4:129;535:6;543:8;2101:5:172;2094:4;:12;;;;;;:::i;:::-;-1:-1:-1;2116:6:172;:16;2125:7;2116:6;:16;:::i;:::-;-1:-1:-1;2142:20:172;;;;;2192:13;2173:32;;2242:24;:22;:24::i;:::-;2215:51;;-1:-1:-1;;682:5:170;:14;;-1:-1:-1;;;;;682:14:170;;;-1:-1:-1;;;;;;682:14:170;;;;;;;;706:9;:22;;;;;;;;;;;;744:40;;682:14;;-1:-1:-1;765:10:170;;744:40;;682:5;;744:40;799;;-1:-1:-1;;;;;799:40:170;;;816:10;;799:40;;;;;-1:-1:-1;;;;637:38:129::2;;;::::0;-1:-1:-1;;;1345:5:139::1;:20:::0;;;;-1:-1:-1;;1390:15:139::1;1375:12;:30:::0;-1:-1:-1;805:4215:139;;5510:446:172;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;4361:25:234;;;;4402:18;;4395:34;;;;5833:14:172;4445:18:234;;;4438:34;5869:13:172;4488:18:234;;;4481:34;5912:4:172;4531:19:234;;;4524:61;4333:19;;5640:295:172;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;14:513:234:-;99:6;107;115;168:2;156:9;147:7;143:23;139:32;136:52;;;184:1;181;174:12;136:52;207:16;;266:2;251:18;;245:25;207:16;;-1:-1:-1;;;;;;299:31:234;;289:42;;279:70;;345:1;342;335:12;279:70;418:2;403:18;;397:25;368:5;;-1:-1:-1;460:15:234;;453:23;441:36;;431:64;;491:1;488;481:12;431:64;514:7;504:17;;;14:513;;;;;:::o;532:127::-;593:10;588:3;584:20;581:1;574:31;624:4;621:1;614:15;648:4;645:1;638:15;664:380;743:1;739:12;;;;786;;;807:61;;861:4;853:6;849:17;839:27;;807:61;914:2;906:6;903:14;883:18;880:38;877:161;;960:10;955:3;951:20;948:1;941:31;995:4;992:1;985:15;1023:4;1020:1;1013:15;877:161;;664:380;;;:::o;1175:545::-;1277:2;1272:3;1269:11;1266:448;;;1313:1;1338:5;1334:2;1327:17;1383:4;1379:2;1369:19;1453:2;1441:10;1437:19;1434:1;1430:27;1424:4;1420:38;1489:4;1477:10;1474:20;1471:47;;;-1:-1:-1;1512:4:234;1471:47;1567:2;1562:3;1558:12;1555:1;1551:20;1545:4;1541:31;1531:41;;1622:82;1640:2;1633:5;1630:13;1622:82;;;1685:17;;;1666:1;1655:13;1622:82;;;1626:3;;;1266:448;1175:545;;;:::o;1896:1352::-;2016:10;;-1:-1:-1;;;;;2038:30:234;;2035:56;;;2071:18;;:::i;:::-;2100:97;2190:6;2150:38;2182:4;2176:11;2150:38;:::i;:::-;2144:4;2100:97;:::i;:::-;2252:4;;2316:2;2305:14;;2333:1;2328:663;;;;3035:1;3052:6;3049:89;;;-1:-1:-1;3104:19:234;;;3098:26;3049:89;-1:-1:-1;;1853:1:234;1849:11;;;1845:24;1841:29;1831:40;1877:1;1873:11;;;1828:57;3151:81;;2298:944;;2328:663;1122:1;1115:14;;;1159:4;1146:18;;-1:-1:-1;;2364:20:234;;;2482:236;2496:7;2493:1;2490:14;2482:236;;;2585:19;;;2579:26;2564:42;;2677:27;;;;2645:1;2633:14;;;;2512:19;;2482:236;;;2486:3;2746:6;2737:7;2734:19;2731:201;;;2807:19;;;2801:26;-1:-1:-1;;2890:1:234;2886:14;;;2902:3;2882:24;2878:37;2874:42;2859:58;2844:74;;2731:201;-1:-1:-1;;;;;2978:1:234;2962:14;;;2958:22;2945:36;;-1:-1:-1;1896:1352:234:o;3253:844::-;3383:3;3412:1;3445:6;3439:13;3475:36;3501:9;3475:36;:::i;:::-;3530:1;3547:18;;;3574:133;;;;3721:1;3716:356;;;;3540:532;;3574:133;-1:-1:-1;;3607:24:234;;3595:37;;3680:14;;3673:22;3661:35;;3652:45;;;-1:-1:-1;3574:133:234;;3716:356;3747:6;3744:1;3737:17;3777:4;3822:2;3819:1;3809:16;3847:1;3861:165;3875:6;3872:1;3869:13;3861:165;;;3953:14;;3940:11;;;3933:35;3996:16;;;;3890:10;;3861:165;;;3865:3;;;4055:6;4050:3;4046:16;4039:23;;3540:532;-1:-1:-1;4088:3:234;;3253:844;-1:-1:-1;;;;;;3253:844:234:o;4102:489::-;805:4215:139;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x60806040526004361061025c5760003560e01c80637a28fb8811610144578063b7009613116100b6578063dd62ed3e1161007a578063dd62ed3e1461076d578063e688747b146107a5578063ea7ca276146107e8578063ed0d0efb1461082c578063f2fde38b14610859578063f5eb42dc1461087957600080fd5b8063b7009613146106c2578063bf7e214f146106e2578063c53a398514610702578063d5002f2e14610738578063d505accf1461074d57600080fd5b80638fcb4e5b116101085780638fcb4e5b1461061a57806395d89b411461063a5780639dc29fac1461064f578063a0712d681461066f578063a1903eab1461068f578063a9059cbb146106a257600080fd5b80637a28fb88146105415780637a8c63b5146105615780637a9e5e4b146105955780637ecebe00146105b55780638da5cb5b146105e257600080fd5b80633644e515116101dd5780634b5159da116101a15780634b5159da1461047f578063679aefce1461049f57806367aff484146104b45780636d780459146104d457806370a08231146104f4578063728b952b1461052157600080fd5b80633644e5151461040157806337cfdaca1461041657806340c10f191461042b57806342966c681461044b57806347b714e01461046b57600080fd5b806318160ddd1161022457806318160ddd14610345578063192084511461035b57806323b872dd1461037b578063313ce5671461039b57806334fcf437146103e157600080fd5b806306a36aee1461026157806306fdde03146102a1578063095ea7b3146102c35780630bade8a4146102f35780630ea9b75b14610323575b600080fd5b34801561026d57600080fd5b5061028e61027c3660046118f7565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102ad57600080fd5b506102b6610899565b6040516102989190611914565b3480156102cf57600080fd5b506102e36102de366004611962565b610927565b6040519015158152602001610298565b3480156102ff57600080fd5b506102e361030e3660046119ab565b600a6020526000908152604090205460ff1681565b34801561032f57600080fd5b5061034361033e3660046119e5565b610994565b005b34801561035157600080fd5b5061028e60025481565b34801561036757600080fd5b5061028e610376366004611a2c565b610a75565b34801561038757600080fd5b506102e3610396366004611a45565b610a93565b3480156103a757600080fd5b506103cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610298565b3480156103ed57600080fd5b506103436103fc366004611a2c565b610b75565b34801561040d57600080fd5b5061028e610bda565b34801561042257600080fd5b5061028e610c35565b34801561043757600080fd5b50610343610446366004611962565b610c4c565b34801561045757600080fd5b50610343610466366004611a2c565b610cb2565b34801561047757600080fd5b50600061028e565b34801561048b57600080fd5b5061034361049a366004611a86565b610d17565b3480156104ab57600080fd5b50600c5461028e565b3480156104c057600080fd5b506103436104cf366004611abd565b610da9565b3480156104e057600080fd5b5061028e6104ef366004611a45565b610e71565b34801561050057600080fd5b5061028e61050f3660046118f7565b60036020526000908152604090205481565b34801561052d57600080fd5b5061034361053c366004611aeb565b610ea9565b34801561054d57600080fd5b5061028e61055c366004611a2c565b610f32565b34801561056d57600080fd5b506102e37f000000000000000000000000000000000000000000000000000000000000000081565b3480156105a157600080fd5b506103436105b03660046118f7565b610f47565b3480156105c157600080fd5b5061028e6105d03660046118f7565b60056020526000908152604090205481565b3480156105ee57600080fd5b50600654610602906001600160a01b031681565b6040516001600160a01b039091168152602001610298565b34801561062657600080fd5b5061028e610635366004611962565b611031565b34801561064657600080fd5b506102b661105c565b34801561065b57600080fd5b5061034361066a366004611962565b611069565b34801561067b57600080fd5b5061034361068a366004611a2c565b6110cb565b61028e61069d3660046118f7565b61112d565b3480156106ae57600080fd5b506102e36106bd366004611962565b6111b9565b3480156106ce57600080fd5b506102e36106dd366004611b19565b61121f565b3480156106ee57600080fd5b50600754610602906001600160a01b031681565b34801561070e57600080fd5b5061060261071d3660046118f7565b6008602052600090815260409020546001600160a01b031681565b34801561074457600080fd5b50600f5461028e565b34801561075957600080fd5b50610343610768366004611b60565b61131d565b34801561077957600080fd5b5061028e610788366004611aeb565b600460209081526000928352604080842090915290825290205481565b3480156107b157600080fd5b506102e36107c0366004611bce565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b3480156107f457600080fd5b506102e3610803366004611c01565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b34801561083857600080fd5b5061028e6108473660046119ab565b600b6020526000908152604090205481565b34801561086557600080fd5b506103436108743660046118f7565b611561565b34801561088557600080fd5b5061028e6108943660046118f7565b6115df565b600080546108a690611c2d565b80601f01602080910402602001604051908101604052809291908181526020018280546108d290611c2d565b801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109829086815260200190565b60405180910390a35060015b92915050565b6109aa336000356001600160e01b031916611614565b6109cf5760405162461bcd60e51b81526004016109c690611c67565b60405180910390fd5b80156109ff576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a26565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610a68911515815260200190565b60405180910390a3505050565b600061098e610a83600f5490565b610a8b610c35565b8491906116be565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610aef57610aca8382611ca3565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b17908490611ca3565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611dea83398151915290610b609087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610bcd57610bb1336000356001600160e01b031916611614565b610bcd5760405162461bcd60e51b81526004016109c690611cb6565b610bd56116dc565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c1057610c0b61170d565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610c3f6117a7565b600e54610c0b9190611ced565b7f000000000000000000000000000000000000000000000000000000000000000015610ca457610c88336000356001600160e01b031916611614565b610ca45760405162461bcd60e51b81526004016109c690611cb6565b610cae82826117fc565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610d0a57610cee336000356001600160e01b031916611614565b610d0a5760405162461bcd60e51b81526004016109c690611cb6565b610d143382611856565b50565b610d2d336000356001600160e01b031916611614565b610d495760405162461bcd60e51b81526004016109c690611c67565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610dbf336000356001600160e01b031916611614565b610ddb5760405162461bcd60e51b81526004016109c690611c67565b8015610e0a576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610e30565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610a68911515815260200190565b6000610e7b6116dc565b6000610e93610e88610c35565b600f548591906116be565b9050610ea0858583610a93565b50949350505050565b610ebf336000356001600160e01b031916611614565b610edb5760405162461bcd60e51b81526004016109c690611c67565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b600061098e610f3f610c35565b600f54610a8b565b6006546001600160a01b0316331480610fdc575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610f9b90339030906001600160e01b03196000351690600401611d00565b602060405180830381865afa158015610fb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdc9190611d2d565b610fe557600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600061103b6116dc565b6000611048610e88610c35565b905061105484826111b9565b509392505050565b600180546108a690611c2d565b7f0000000000000000000000000000000000000000000000000000000000000000156110c1576110a5336000356001600160e01b031916611614565b6110c15760405162461bcd60e51b81526004016109c690611cb6565b610cae8282611856565b7f00000000000000000000000000000000000000000000000000000000000000001561112357611107336000356001600160e01b031916611614565b6111235760405162461bcd60e51b81526004016109c690611cb6565b610d1433826117fc565b60006111376116dc565b600f5460000361115e5734600f819055600e8190556111579033906117fc565b5034919050565b600061117c61116c600f5490565b611174610c35565b3491906116be565b905034600e60008282546111909190611ced565b9250508190555080600f60008282546111a99190611ced565b9091555061098e905033346117fc565b336000908152600360205260408120805483919083906111da908490611ca3565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611dea833981519152906109829086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156112bb5760405163b700961360e01b81526001600160a01b0382169063b70096139061127290889088908890600401611d00565b602060405180830381865afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b39190611d2d565b915050610b6e565b6001600160e01b031983166000908152600a602052604090205460ff168061131457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561136d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016109c6565b60006001611379610bda565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611485573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906114bb5750876001600160a01b0316816001600160a01b0316145b6114f85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016109c6565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611577336000356001600160e01b031916611614565b6115935760405162461bcd60e51b81526004016109c690611c67565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610b6e611604600f5490565b61160c610c35565b8391906116be565b6007546000906001600160a01b0316801580159061169e575060405163b700961360e01b81526001600160a01b0382169063b70096139061165d90879030908890600401611d00565b602060405180830381865afa15801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e9190611d2d565b806116b657506006546001600160a01b038581169116145b949350505050565b60008260001904841183021582026116d557600080fd5b5091020490565b60006116e66117a7565b905080156117065780600e60008282546117009190611ced565b90915550505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161173f9190611d4a565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600c546000036117b95750600090565b60006117d76301e13380600d54426117d19190611ca3565b906118b8565b90506000610b6e6117f383600c546118cd90919063ffffffff16565b600e54906118cd565b806002600082825461180e9190611ced565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611dea83398151915291015b60405180910390a35050565b6001600160a01b0382166000908152600360205260408120805483929061187e908490611ca3565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611dea8339815191529060200161184a565b6000610b6e83670de0b6b3a7640000846116be565b6000610b6e8383670de0b6b3a76400006116be565b6001600160a01b0381168114610d1457600080fd5b60006020828403121561190957600080fd5b8135610b6e816118e2565b600060208083528351808285015260005b8181101561194157858101830151858201604001528201611925565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561197557600080fd5b8235611980816118e2565b946020939093013593505050565b80356001600160e01b0319811681146119a657600080fd5b919050565b6000602082840312156119bd57600080fd5b610b6e8261198e565b803560ff811681146119a657600080fd5b8015158114610d1457600080fd5b6000806000606084860312156119fa57600080fd5b611a03846119c6565b9250611a116020850161198e565b91506040840135611a21816119d7565b809150509250925092565b600060208284031215611a3e57600080fd5b5035919050565b600080600060608486031215611a5a57600080fd5b8335611a65816118e2565b92506020840135611a75816118e2565b929592945050506040919091013590565b60008060408385031215611a9957600080fd5b611aa28361198e565b91506020830135611ab2816119d7565b809150509250929050565b600080600060608486031215611ad257600080fd5b8335611add816118e2565b9250611a11602085016119c6565b60008060408385031215611afe57600080fd5b8235611b09816118e2565b91506020830135611ab2816118e2565b600080600060608486031215611b2e57600080fd5b8335611b39816118e2565b92506020840135611b49816118e2565b9150611b576040850161198e565b90509250925092565b600080600080600080600060e0888a031215611b7b57600080fd5b8735611b86816118e2565b96506020880135611b96816118e2565b95506040880135945060608801359350611bb2608089016119c6565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611be157600080fd5b611bea836119c6565b9150611bf86020840161198e565b90509250929050565b60008060408385031215611c1457600080fd5b8235611c1f816118e2565b9150611bf8602084016119c6565b600181811c90821680611c4157607f821691505b602082108103611c6157634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561098e5761098e611c8d565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b8082018082111561098e5761098e611c8d565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611d3f57600080fd5b8151610b6e816119d7565b600080835481600182811c915080831680611d6657607f831692505b60208084108203611d8557634e487b7160e01b86526022600452602486fd5b818015611d995760018114611dae57611ddb565b60ff1986168952841515850289019650611ddb565b60008a81526020902060005b86811015611dd35781548b820152908501908301611dba565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220069a477a7259dd256a022ab4d5d72660bf1324ac9bbd57f983bef6e4d0f02f6864736f6c63430008140033",
        "sourceMap": "805:4215:139:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1622:47:171;;;;;;;;;;-1:-1:-1;1622:47:171;;;;;:::i;:::-;;;;;;;;;;;;;;;;;548:25:234;;;536:2;521:18;1622:47:171;;;;;;;;1031:18:172;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;2461:211::-;;;;;;;;;;-1:-1:-1;2461:211:172;;;;;:::i;:::-;;:::i;:::-;;;1622:14:234;;1615:22;1597:41;;1585:2;1570:18;2461:211:172;1457:187:234;1676:49:171;;;;;;;;;;-1:-1:-1;1676:49:171;;;;;:::i;:::-;;;;;;;;;;;;;;;;4390:396;;;;;;;;;;-1:-1:-1;4390:396:171;;;;;:::i;:::-;;:::i;:::-;;1304:26:172;;;;;;;;;;;;;;;;3258:182:139;;;;;;;;;;-1:-1:-1;3258:182:139;;;;;:::i;:::-;;:::i;3057:592:172:-;;;;;;;;;;-1:-1:-1;3057:592:172;;;;;:::i;:::-;;:::i;1083:31::-;;;;;;;;;;;;;;;;;;3688:4:234;3676:17;;;3658:36;;3646:2;3631:18;1083:31:172;3516:184:234;4203:122:139;;;;;;;;;;-1:-1:-1;4203:122:139;;;;;:::i;:::-;;:::i;5327:177:172:-;;;;;;;;;;;;;:::i;3743:125:139:-;;;;;;;;;;;;;:::i;1048:155:129:-;;;;;;;;;;-1:-1:-1;1048:155:129;;;;;:::i;:::-;;:::i;1209:111::-;;;;;;;;;;-1:-1:-1;1209:111:129;;;;;:::i;:::-;;:::i;3652:85:139:-;;;;;;;;;;-1:-1:-1;3703:7:139;3652:85;;3448:210:171;;;;;;;;;;-1:-1:-1;3448:210:171;;;;;:::i;:::-;;:::i;4331:80:139:-;;;;;;;;;;-1:-1:-1;4399:5:139;;4331:80;;3853:337:171;;;;;;;;;;-1:-1:-1;3853:337:171;;;;;:::i;:::-;;:::i;2721:531:139:-;;;;;;;;;;-1:-1:-1;2721:531:139;;;;;:::i;:::-;;:::i;1337:44:172:-;;;;;;;;;;-1:-1:-1;1337:44:172;;;;;:::i;:::-;;;;;;;;;;;;;;3006:241:171;;;;;;;;;;-1:-1:-1;3006:241:171;;;;;:::i;:::-;;:::i;3446:200:139:-;;;;;;;;;;-1:-1:-1;3446:200:139;;;;;:::i;:::-;;:::i;313:39:129:-;;;;;;;;;;;;;;;1523:434:170;;;;;;;;;;-1:-1:-1;1523:434:170;;;;;:::i;:::-;;:::i;1751:41:172:-;;;;;;;;;;-1:-1:-1;1751:41:172;;;;;:::i;:::-;;;;;;;;;;;;;;562:20:170;;;;;;;;;;-1:-1:-1;562:20:170;;;;-1:-1:-1;;;;;562:20:170;;;;;;-1:-1:-1;;;;;5327:32:234;;;5309:51;;5297:2;5282:18;562:20:170;5163:203:234;2226:489:139;;;;;;;;;;-1:-1:-1;2226:489:139;;;;;:::i;:::-;;:::i;1056:20:172:-;;;;;;;;;;;;;:::i;1326:155:129:-;;;;;;;;;;-1:-1:-1;1326:155:129;;;;;:::i;:::-;;:::i;931:111::-;;;;;;;;;;-1:-1:-1;931:111:129;;;;;:::i;:::-;;:::i;1441:779:139:-;;;;;;:::i;:::-;;:::i;2678:373:172:-;;;;;;;;;;-1:-1:-1;2678:373:172;;;;;:::i;:::-;;:::i;2336:465:171:-;;;;;;;;;;-1:-1:-1;2336:465:171;;;;;:::i;:::-;;:::i;589:26:170:-;;;;;;;;;;-1:-1:-1;589:26:170;;;;-1:-1:-1;;;;;589:26:170;;;1369:61:171;;;;;;;;;;-1:-1:-1;1369:61:171;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:171;;;3874:91:139;;;;;;;;;;-1:-1:-1;3947:11:139;;3874:91;;3838:1483:172;;;;;;;;;;-1:-1:-1;3838:1483:172;;;;;:::i;:::-;;:::i;1388:64::-;;;;;;;;;;-1:-1:-1;1388:64:172;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1958:186:171;;;;;;;;;;-1:-1:-1;1958:186:171;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:171;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;;;;;-1:-1:-1;1795:157:171;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:171;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;;;;;-1:-1:-1;1732:56:171;;;;;:::i;:::-;;;;;;;;;;;;;;1963:164:170;;;;;;;;;;-1:-1:-1;1963:164:170;;;;;:::i;:::-;;:::i;3971:208:139:-;;;;;;;;;;-1:-1:-1;3971:208:139;;;;;:::i;:::-;;:::i;1031:18:172:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2461:211::-;2561:10;2535:4;2551:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2551:30:172;;;;;;;;;;:39;;;2606:37;2535:4;;2551:30;;2606:37;;;;2584:6;548:25:234;;536:2;521:18;;402:177;2606:37:172;;;;;;;;-1:-1:-1;2661:4:172;2461:211;;;;;:::o;4390:396:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;;;;;;;;;4535:7:171::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:171;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:171;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:171::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1622:14:234::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;4730:49:171::1;;;;;;;;4390:396:::0;;;:::o;3258:182:139:-;3345:7;3371:62;3393:16;3947:11;;;3874:91;3393:16;3411:21;:19;:21::i;:::-;3371:10;;:62;:21;:62::i;3057:592:172:-;-1:-1:-1;;;;;3209:15:172;;3175:4;3209:15;;;:9;:15;;;;;;;;3225:10;3209:27;;;;;;;;-1:-1:-1;;3287:28:172;;3283:80;;3347:16;3357:6;3347:7;:16;:::i;:::-;-1:-1:-1;;;;;3317:15:172;;;;;;:9;:15;;;;;;;;3333:10;3317:27;;;;;;;:46;3283:80;-1:-1:-1;;;;;3374:15:172;;;;;;:9;:15;;;;;:25;;3393:6;;3374:15;:25;;3393:6;;3374:25;:::i;:::-;;;;-1:-1:-1;;;;;;;3545:13:172;;;;;;;:9;:13;;;;;;;:23;;;;;;3594:26;3545:13;;3594:26;;;-1:-1:-1;;;;;;;;;;;3594:26:172;;;3562:6;548:25:234;;536:2;521:18;;402:177;3594:26:172;;;;;;;;3638:4;3631:11;;;3057:592;;;;;;:::o;4203:122:139:-;743:17:129;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:129;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:129;;;;;;;:::i;:::-;4285:9:139::1;:7;:9::i;:::-;4304:5;:14:::0;4203:122::o;5327:177:172:-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;:::-;5403:94;;5327:177;:::o;5410:87::-;-1:-1:-1;5446:24:172;;5327:177::o;3743:125:139:-;3795:7;3840:21;:19;:21::i;:::-;3821:16;;:40;;;;:::i;1048:155:129:-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:129;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:129;;;;;;;:::i;:::-;1170:26:::1;1176:11;1189:6;1170:5;:26::i;:::-;1048:155:::0;;:::o;1209:111::-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:129;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:129;;;;;;;:::i;:::-;1288:25:::1;1294:10;1306:6;1288:5;:25::i;:::-;1209:111:::0;:::o;3448:210:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:171;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:171::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1597:41:234;;;3606:45:171::1;::::0;1570:18:234;3606:45:171::1;;;;;;;3448:210:::0;;:::o;3853:337::-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;3986:7:171::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:171;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:171;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:171::1;;4175:7;4147:36;;;;1622:14:234::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;2721:531:139;2857:7;2904:9;:7;:9::i;:::-;2994:19;3016:99;3054:21;:19;:21::i;:::-;3947:11;;3016:13;;:99;:24;:99::i;:::-;2994:121;;3170:46;3183:7;3192:10;3204:11;3170:12;:46::i;:::-;-1:-1:-1;3234:11:139;2721:531;-1:-1:-1;;;;2721:531:139:o;3006:241:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:171;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:171::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;3446:200:139:-;3536:7;3574:65;3599:21;:19;:21::i;:::-;3947:11;;3622:16;3874:91;1523:434:170;1794:5;;-1:-1:-1;;;;;1794:5:170;1780:10;:19;;:76;;-1:-1:-1;1803:9:170;;:53;;-1:-1:-1;;;1803:53:170;;-1:-1:-1;;;;;1803:9:170;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:170;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:170;-1:-1:-1;;;;;1868:24:170;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:170;1523:434;:::o;2226:489:139:-;2333:7;2380:9;:7;:9::i;:::-;2470:19;2492:99;2530:21;:19;:21::i;2492:99::-;2470:121;;2646:33;2655:10;2667:11;2646:8;:33::i;:::-;-1:-1:-1;2697:11:139;2226:489;-1:-1:-1;;;2226:489:139:o;1056:20:172:-;;;;;;;:::i;1326:155:129:-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:129;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:129;;;;;;;:::i;:::-;1448:26:::1;1454:11;1467:6;1448:5;:26::i;931:111::-:0;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:129;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:129;;;;;;;:::i;:::-;1010:25:::1;1016:10;1028:6;1010:5;:25::i;1441:779:139:-:0;1492:7;1539:9;:7;:9::i;:::-;3947:11;;1641:1;1621:21;1617:189;;1672:9;1658:11;:23;;;1695:16;:28;;;1737;;1743:10;;1737:5;:28::i;:::-;-1:-1:-1;1786:9:139;;1441:779;-1:-1:-1;1441:779:139:o;1617:189::-;1887:14;1904:95;1938:16;3947:11;;;3874:91;1938:16;1968:21;:19;:21::i;:::-;1904:9;;:95;:20;:95::i;:::-;1887:112;;2064:9;2044:16;;:29;;;;;;;:::i;:::-;;;;;;;;2098:6;2083:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;2161:28:139;;-1:-1:-1;2167:10:139;2179:9;2161:5;:28::i;2678:373:172:-;2774:10;2748:4;2764:21;;;:9;:21;;;;;:31;;2789:6;;2764:21;2748:4;;2764:31;;2789:6;;2764:31;:::i;:::-;;;;-1:-1:-1;;;;;;;2941:13:172;;;;;;:9;:13;;;;;;;:23;;;;;;2990:32;2999:10;;-1:-1:-1;;;;;;;;;;;2990:32:172;;;2958:6;548:25:234;;536:2;521:18;;402:177;2336:465:171;-1:-1:-1;;;;;2515:32:171;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:171;;-1:-1:-1;;;;;2609:23:171;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:171;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:171;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:171;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;2336:465;-1:-1:-1;;;;;2336:465:171:o;3838:1483:172:-;4057:15;4045:8;:27;;4037:63;;;;-1:-1:-1;;;4037:63:172;;10112:2:234;4037:63:172;;;10094:21:234;10151:2;10131:18;;;10124:30;10190:25;10170:18;;;10163:53;10233:18;;4037:63:172;9910:347:234;4037:63:172;4265:24;4292:805;4428:18;:16;:18::i;:::-;-1:-1:-1;;;;;4873:13:172;;;;;;;:6;:13;;;;;;;;;:15;;;;;;;;4511:449;;4555:165;4511:449;;;10549:25:234;10628:18;;;10621:43;;;;10700:15;;;10680:18;;;10673:43;10732:18;;;10725:34;;;10775:19;;;10768:35;;;;10819:19;;;;10812:35;;;4511:449:172;;;;;;;;;;10521:19:234;;;4511:449:172;;;4472:514;;;;;;;;-1:-1:-1;;;4350:658:172;;;11116:27:234;11159:11;;;11152:27;;;;11195:12;;;11188:28;;;;11232:12;;4350:658:172;;;-1:-1:-1;;4350:658:172;;;;;;;;;4319:707;;4350:658;4319:707;;;;4292:805;;;;;;;;;11482:25:234;11555:4;11543:17;;11523:18;;;11516:45;11577:18;;;11570:34;;;11620:18;;;11613:34;;;11454:19;;4292:805:172;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4292:805:172;;-1:-1:-1;;4292:805:172;;;-1:-1:-1;;;;;;;5120:30:172;;;;;;:59;;;5174:5;-1:-1:-1;;;;;5154:25:172;:16;-1:-1:-1;;;;;5154:25:172;;5120:59;5112:86;;;;-1:-1:-1;;;5112:86:172;;11860:2:234;5112:86:172;;;11842:21:234;11899:2;11879:18;;;11872:30;-1:-1:-1;;;11918:18:234;;;11911:44;11972:18;;5112:86:172;11658:338:234;5112:86:172;-1:-1:-1;;;;;5213:27:172;;;;;;;:9;:27;;;;;;;;:36;;;;;;;;;;;;;:44;;;5283:31;548:25:234;;;5213:36:172;;5283:31;;;;;521:18:234;5283:31:172;;;;;;;3838:1483;;;;;;;:::o;1963:164:170:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:170::1;-1:-1:-1::0;;;;;2046:16:170;::::1;::::0;;::::1;::::0;;;2078:42:::1;::::0;2099:10:::1;::::0;2078:42:::1;::::0;-1:-1:-1;;2078:42:170::1;1963:164:::0;:::o;3971:208:139:-;-1:-1:-1;;;;;4072:19:139;;4030:7;4072:19;;;:9;:19;;;;;;4108:64;4132:16;3947:11;;;3874:91;4132:16;4150:21;:19;:21::i;:::-;4108:12;;:64;:23;:64::i;977:540:170:-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:170;1415:27;;;;;:77;;-1:-1:-1;1446:46:170;;-1:-1:-1;;;1446:46:170;;-1:-1:-1;;;;;1446:12:170;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:170;;-1:-1:-1;;;;;1497:13:170;;;1505:5;;1497:13;1414:96;1407:103;977:540;-1:-1:-1;;;;977:540:170:o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;4417:205:139:-;4455:16;4474:21;:19;:21::i;:::-;4455:40;-1:-1:-1;4509:12:139;;4505:71;;4557:8;4537:16;;:28;;;;;;;:::i;:::-;;;;-1:-1:-1;;4505:71:139;-1:-1:-1;4600:15:139;4585:12;:30;4417:205::o;5510:446:172:-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;13527:25:234;;;;13568:18;;13561:34;;;;5833:14:172;13611:18:234;;;13604:34;5869:13:172;13654:18:234;;;13647:34;5912:4:172;13697:19:234;;;13690:61;13499:19;;5640:295:172;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;4628:390:139:-;4682:7;4705:5;;4714:1;4705:10;4701:49;;-1:-1:-1;4738:1:139;;4628:390::o;4701:49::-;4813:19;4835:72;4889:8;4854:12;;4836:15;:30;;;;:::i;:::-;4835:40;;:72::i;:::-;4813:94;;4917:15;4935:52;4960:26;4974:11;4960:5;;:13;;:26;;;;:::i;:::-;4935:16;;;:24;:52::i;6150:325:172:-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;6387:13:172;;;;;;:9;:13;;;;;;;;:23;;;;;;6436:32;548:25:234;;;-1:-1:-1;;;;;;;;;;;6436:32:172;521:18:234;6436:32:172;;;;;;;;6150:325;;:::o;6481:328::-;-1:-1:-1;;;;;6553:15:172;;;;;;:9;:15;;;;;:25;;6572:6;;6553:15;:25;;6572:6;;6553:25;:::i;:::-;;;;-1:-1:-1;;6721:11:172;:21;;;;;;;6768:34;;548:25:234;;;-1:-1:-1;;;;;;;6768:34:172;;;-1:-1:-1;;;;;;;;;;;6768:34:172;536:2:234;521:18;6768:34:172;402:177:234;1884:164:122;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;1610:118::-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;14:131:234:-;-1:-1:-1;;;;;89:31:234;;79:42;;69:70;;135:1;132;125:12;150:247;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;584:548::-;696:4;725:2;754;743:9;736:21;786:6;780:13;829:6;824:2;813:9;809:18;802:34;854:1;864:140;878:6;875:1;872:13;864:140;;;973:14;;;969:23;;963:30;939:17;;;958:2;935:26;928:66;893:10;;864:140;;;868:3;1053:1;1048:2;1039:6;1028:9;1024:22;1020:31;1013:42;1123:2;1116;1112:7;1107:2;1099:6;1095:15;1091:29;1080:9;1076:45;1072:54;1064:62;;;;584:548;;;;:::o;1137:315::-;1205:6;1213;1266:2;1254:9;1245:7;1241:23;1237:32;1234:52;;;1282:1;1279;1272:12;1234:52;1321:9;1308:23;1340:31;1365:5;1340:31;:::i;:::-;1390:5;1442:2;1427:18;;;;1414:32;;-1:-1:-1;;;1137:315:234:o;1649:173::-;1716:20;;-1:-1:-1;;;;;;1765:32:234;;1755:43;;1745:71;;1812:1;1809;1802:12;1745:71;1649:173;;;:::o;1827:184::-;1885:6;1938:2;1926:9;1917:7;1913:23;1909:32;1906:52;;;1954:1;1951;1944:12;1906:52;1977:28;1995:9;1977:28;:::i;2016:156::-;2082:20;;2142:4;2131:16;;2121:27;;2111:55;;2162:1;2159;2152:12;2177:118;2263:5;2256:13;2249:21;2242:5;2239:32;2229:60;;2285:1;2282;2275:12;2300:383;2371:6;2379;2387;2440:2;2428:9;2419:7;2415:23;2411:32;2408:52;;;2456:1;2453;2446:12;2408:52;2479:27;2496:9;2479:27;:::i;:::-;2469:37;;2525;2558:2;2547:9;2543:18;2525:37;:::i;:::-;2515:47;;2612:2;2601:9;2597:18;2584:32;2625:28;2647:5;2625:28;:::i;:::-;2672:5;2662:15;;;2300:383;;;;;:::o;2870:180::-;2929:6;2982:2;2970:9;2961:7;2957:23;2953:32;2950:52;;;2998:1;2995;2988:12;2950:52;-1:-1:-1;3021:23:234;;2870:180;-1:-1:-1;2870:180:234:o;3055:456::-;3132:6;3140;3148;3201:2;3189:9;3180:7;3176:23;3172:32;3169:52;;;3217:1;3214;3207:12;3169:52;3256:9;3243:23;3275:31;3300:5;3275:31;:::i;:::-;3325:5;-1:-1:-1;3382:2:234;3367:18;;3354:32;3395:33;3354:32;3395:33;:::i;:::-;3055:456;;3447:7;;-1:-1:-1;;;3501:2:234;3486:18;;;;3473:32;;3055:456::o;3705:313::-;3769:6;3777;3830:2;3818:9;3809:7;3805:23;3801:32;3798:52;;;3846:1;3843;3836:12;3798:52;3869:28;3887:9;3869:28;:::i;:::-;3859:38;;3947:2;3936:9;3932:18;3919:32;3960:28;3982:5;3960:28;:::i;:::-;4007:5;3997:15;;;3705:313;;;;;:::o;4023:452::-;4095:6;4103;4111;4164:2;4152:9;4143:7;4139:23;4135:32;4132:52;;;4180:1;4177;4170:12;4132:52;4219:9;4206:23;4238:31;4263:5;4238:31;:::i;:::-;4288:5;-1:-1:-1;4312:36:234;4344:2;4329:18;;4312:36;:::i;4480:407::-;4567:6;4575;4628:2;4616:9;4607:7;4603:23;4599:32;4596:52;;;4644:1;4641;4634:12;4596:52;4683:9;4670:23;4702:31;4727:5;4702:31;:::i;:::-;4752:5;-1:-1:-1;4809:2:234;4794:18;;4781:32;4822:33;4781:32;4822:33;:::i;5371:460::-;5447:6;5455;5463;5516:2;5504:9;5495:7;5491:23;5487:32;5484:52;;;5532:1;5529;5522:12;5484:52;5571:9;5558:23;5590:31;5615:5;5590:31;:::i;:::-;5640:5;-1:-1:-1;5697:2:234;5682:18;;5669:32;5710:33;5669:32;5710:33;:::i;:::-;5762:7;-1:-1:-1;5788:37:234;5821:2;5806:18;;5788:37;:::i;:::-;5778:47;;5371:460;;;;;:::o;6063:734::-;6174:6;6182;6190;6198;6206;6214;6222;6275:3;6263:9;6254:7;6250:23;6246:33;6243:53;;;6292:1;6289;6282:12;6243:53;6331:9;6318:23;6350:31;6375:5;6350:31;:::i;:::-;6400:5;-1:-1:-1;6457:2:234;6442:18;;6429:32;6470:33;6429:32;6470:33;:::i;:::-;6522:7;-1:-1:-1;6576:2:234;6561:18;;6548:32;;-1:-1:-1;6627:2:234;6612:18;;6599:32;;-1:-1:-1;6650:37:234;6682:3;6667:19;;6650:37;:::i;:::-;6640:47;;6734:3;6723:9;6719:19;6706:33;6696:43;;6786:3;6775:9;6771:19;6758:33;6748:43;;6063:734;;;;;;;;;;:::o;7195:254::-;7260:6;7268;7321:2;7309:9;7300:7;7296:23;7292:32;7289:52;;;7337:1;7334;7327:12;7289:52;7360:27;7377:9;7360:27;:::i;:::-;7350:37;;7406;7439:2;7428:9;7424:18;7406:37;:::i;:::-;7396:47;;7195:254;;;;;:::o;7454:317::-;7520:6;7528;7581:2;7569:9;7560:7;7556:23;7552:32;7549:52;;;7597:1;7594;7587:12;7549:52;7636:9;7623:23;7655:31;7680:5;7655:31;:::i;:::-;7705:5;-1:-1:-1;7729:36:234;7761:2;7746:18;;7729:36;:::i;7776:380::-;7855:1;7851:12;;;;7898;;;7919:61;;7973:4;7965:6;7961:17;7951:27;;7919:61;8026:2;8018:6;8015:14;7995:18;7992:38;7989:161;;8072:10;8067:3;8063:20;8060:1;8053:31;8107:4;8104:1;8097:15;8135:4;8132:1;8125:15;7989:161;;7776:380;;;:::o;8161:336::-;8363:2;8345:21;;;8402:2;8382:18;;;8375:30;-1:-1:-1;;;8436:2:234;8421:18;;8414:42;8488:2;8473:18;;8161:336::o;8502:127::-;8563:10;8558:3;8554:20;8551:1;8544:31;8594:4;8591:1;8584:15;8618:4;8615:1;8608:15;8634:128;8701:9;;;8722:11;;;8719:37;;;8736:18;;:::i;8767:353::-;8969:2;8951:21;;;9008:2;8988:18;;;8981:30;9047:31;9042:2;9027:18;;9020:59;9111:2;9096:18;;8767:353::o;9125:125::-;9190:9;;;9211:10;;;9208:36;;;9224:18;;:::i;9255:400::-;-1:-1:-1;;;;;9511:15:234;;;9493:34;;9563:15;;;;9558:2;9543:18;;9536:43;-1:-1:-1;;;;;;9615:33:234;;;9610:2;9595:18;;9588:61;9443:2;9428:18;;9255:400::o;9660:245::-;9727:6;9780:2;9768:9;9759:7;9755:23;9751:32;9748:52;;;9796:1;9793;9786:12;9748:52;9828:9;9822:16;9847:28;9869:5;9847:28;:::i;12130:1133::-;12260:3;12289:1;12322:6;12316:13;12352:3;12374:1;12402:9;12398:2;12394:18;12384:28;;12462:2;12451:9;12447:18;12484;12474:61;;12528:4;12520:6;12516:17;12506:27;;12474:61;12554:2;12602;12594:6;12591:14;12571:18;12568:38;12565:165;;-1:-1:-1;;;12629:33:234;;12685:4;12682:1;12675:15;12715:4;12636:3;12703:17;12565:165;12746:18;12773:133;;;;12920:1;12915:323;;;;12739:499;;12773:133;-1:-1:-1;;12806:24:234;;12794:37;;12879:14;;12872:22;12860:35;;12851:45;;;-1:-1:-1;12773:133:234;;12915:323;12077:1;12070:14;;;12114:4;12101:18;;13013:1;13027:165;13041:6;13038:1;13035:13;13027:165;;;13119:14;;13106:11;;;13099:35;13162:16;;;;13056:10;;13027:165;;;13031:3;;13221:6;13216:3;13212:16;13205:23;;12739:499;-1:-1:-1;13254:3:234;;12130:1133;-1:-1:-1;;;;;;;;12130:1133:234:o",
        "linkReferences": {},
        "immutableReferences": {
            "23357": [
                {
                    "start": 1395,
                    "length": 32
                },
                {
                    "start": 2935,
                    "length": 32
                },
                {
                    "start": 3150,
                    "length": 32
                },
                {
                    "start": 3252,
                    "length": 32
                },
                {
                    "start": 4203,
                    "length": 32
                },
                {
                    "start": 4301,
                    "length": 32
                }
            ],
            "72141": [
                {
                    "start": 941,
                    "length": 32
                }
            ],
            "72155": [
                {
                    "start": 3038,
                    "length": 32
                }
            ],
            "72157": [
                {
                    "start": 3091,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
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
        "mint(address,uint256)": "40c10f19",
        "mint(uint256)": "a0712d68",
        "name()": "06fdde03",
        "nonces(address)": "7ecebe00",
        "owner()": "8da5cb5b",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
        "setAuthority(address)": "7a9e5e4b",
        "setPublicCapability(bytes4,bool)": "4b5159da",
        "setRate(uint256)": "34fcf437",
        "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
        "setTargetCustomAuthority(address,address)": "728b952b",
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
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_initialRate\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_isCompetitionMode\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBufferedEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"getPooledEthByShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ethAmount\",\"type\":\"uint256\"}],\"name\":\"getSharesByPooledEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalPooledEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isCompetitionMode\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rate_\",\"type\":\"uint256\"}],\"name\":\"setRate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"sharesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"submit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferSharesFrom\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"MockLido\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"setRate(uint256)\":{\"notice\":\"Mock ///\"},\"submit(address)\":{\"notice\":\"Overrides ///\"}},\"notice\":\"This mock yield source will accrue interest at a specified rate         Every stateful interaction will accrue interest, so the interest         accrual will approximate continuous compounding as the contract         is called more frequently.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockLido.sol\":\"MockLido\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockLido.sol\":{\"keccak256\":\"0xcaa2e03813fd62a1d418d5aaf423d1ece22804f6eeb4f44a0451545ebb538779\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://15a0e5251d43dfda38b1fafb44eb02556c147a5d5ae19fb7a9e846e33fc48d31\",\"dweb:/ipfs/QmdkVsy2RSCE24uP426EypV6xKNtbyhbEgKuBQrw5UnBu8\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}",
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
                            "name": "_isCompetitionMode",
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
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "burn"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "destination",
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
                    "name": "burn"
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
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "getBufferedEther",
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
                            "name": "_sharesAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getPooledEthByShares",
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
                            "internalType": "uint256",
                            "name": "_ethAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getSharesByPooledEth",
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getTotalPooledEther",
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isCompetitionMode",
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
                            "name": "destination",
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
                    "name": "mint"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "mint"
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
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "sharesOf",
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
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "submit",
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
                            "internalType": "address",
                            "name": "_recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_sharesAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferShares",
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
                            "name": "_sender",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_sharesAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferSharesFrom",
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
                    "setRate(uint256)": {
                        "notice": "Mock ///"
                    },
                    "submit(address)": {
                        "notice": "Overrides ///"
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
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
                "contracts/test/MockLido.sol": "MockLido"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5",
                "urls": [
                    "bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339",
                    "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f",
                "urls": [
                    "bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19",
                    "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
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
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a",
                "urls": [
                    "bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d",
                    "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c",
                "urls": [
                    "bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4",
                    "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"
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
            "contracts/test/MockLido.sol": {
                "keccak256": "0xcaa2e03813fd62a1d418d5aaf423d1ece22804f6eeb4f44a0451545ebb538779",
                "urls": [
                    "bzz-raw://15a0e5251d43dfda38b1fafb44eb02556c147a5d5ae19fb7a9e846e33fc48d31",
                    "dweb:/ipfs/QmdkVsy2RSCE24uP426EypV6xKNtbyhbEgKuBQrw5UnBu8"
                ],
                "license": "Apache-2.0"
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
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockLido.sol",
        "id": 26494,
        "exportedSymbols": {
            "ERC20Mintable": [
                23468
            ],
            "FixedPointMath": [
                18822
            ],
            "MockLido": [
                26493
            ],
            "MultiRolesAuthority": [
                72116
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:4982:139",
        "nodes": [
            {
                "id": 26150,
                "nodeType": "PragmaDirective",
                "src": "39:23:139",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 26152,
                "nodeType": "ImportDirective",
                "src": "64:87:139",
                "nodes": [],
                "absolutePath": "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol",
                "file": "solmate/auth/authorities/MultiRolesAuthority.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26494,
                "sourceUnit": 72117,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26151,
                            "name": "MultiRolesAuthority",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 72116,
                            "src": "73:19:139",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26154,
                "nodeType": "ImportDirective",
                "src": "152:69:139",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../src/libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26494,
                "sourceUnit": 18823,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26153,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18822,
                            "src": "161:14:139",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26156,
                "nodeType": "ImportDirective",
                "src": "222:52:139",
                "nodes": [],
                "absolutePath": "contracts/test/ERC20Mintable.sol",
                "file": "./ERC20Mintable.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26494,
                "sourceUnit": 23469,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26155,
                            "name": "ERC20Mintable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23468,
                            "src": "231:13:139",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26493,
                "nodeType": "ContractDefinition",
                "src": "805:4215:139",
                "nodes": [
                    {
                        "id": 26164,
                        "nodeType": "UsingForDirective",
                        "src": "867:33:139",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 26162,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "873:14:139"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "873:14:139"
                        },
                        "typeName": {
                            "id": 26163,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "892:7:139",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 26166,
                        "nodeType": "VariableDeclaration",
                        "src": "928:22:139",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_rate",
                        "nameLocation": "945:5:139",
                        "scope": 26493,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 26165,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "928:7:139",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 26168,
                        "nodeType": "VariableDeclaration",
                        "src": "956:29:139",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_lastUpdated",
                        "nameLocation": "973:12:139",
                        "scope": 26493,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 26167,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "956:7:139",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 26170,
                        "nodeType": "VariableDeclaration",
                        "src": "1010:24:139",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "totalPooledEther",
                        "nameLocation": "1018:16:139",
                        "scope": 26493,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 26169,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1010:7:139",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 26172,
                        "nodeType": "VariableDeclaration",
                        "src": "1040:19:139",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "totalShares",
                        "nameLocation": "1048:11:139",
                        "scope": 26493,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 26171,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1040:7:139",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 26198,
                        "nodeType": "FunctionDefinition",
                        "src": "1066:346:139",
                        "nodes": [],
                        "body": {
                            "id": 26197,
                            "nodeType": "Block",
                            "src": "1335:77:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26190,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26188,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26166,
                                            "src": "1345:5:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 26189,
                                            "name": "_initialRate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26174,
                                            "src": "1353:12:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1345:20:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26191,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1345:20:139"
                                },
                                {
                                    "expression": {
                                        "id": 26195,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26192,
                                            "name": "_lastUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26168,
                                            "src": "1375:12:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 26193,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "1390:5:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 26194,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1396:9:139",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "1390:15:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1375:30:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26196,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1375:30:139"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "hexValue": "4c6971756964207374616b656420457468657220322e30",
                                        "id": 26181,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1206:25:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_d0475442dbe1381d44afad818dc97da0a5b374312c7fe323cc2a3df88293e4ba",
                                            "typeString": "literal_string \"Liquid staked Ether 2.0\""
                                        },
                                        "value": "Liquid staked Ether 2.0"
                                    },
                                    {
                                        "hexValue": "7374455448",
                                        "id": 26182,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1245:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_5318b5909b20227fb38f47aa955f9f06527b0ae497ac2d344a4aacb624e26485",
                                            "typeString": "literal_string \"stETH\""
                                        },
                                        "value": "stETH"
                                    },
                                    {
                                        "hexValue": "3138",
                                        "id": 26183,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1266:2:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_18_by_1",
                                            "typeString": "int_const 18"
                                        },
                                        "value": "18"
                                    },
                                    {
                                        "id": 26184,
                                        "name": "_admin",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26176,
                                        "src": "1282:6:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "id": 26185,
                                        "name": "_isCompetitionMode",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26178,
                                        "src": "1302:18:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    }
                                ],
                                "id": 26186,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 26180,
                                    "name": "ERC20Mintable",
                                    "nameLocations": [
                                        "1179:13:139"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 23468,
                                    "src": "1179:13:139"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1179:151:139"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 26179,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26174,
                                    "mutability": "mutable",
                                    "name": "_initialRate",
                                    "nameLocation": "1095:12:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26198,
                                    "src": "1087:20:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26173,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1087:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26176,
                                    "mutability": "mutable",
                                    "name": "_admin",
                                    "nameLocation": "1125:6:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26198,
                                    "src": "1117:14:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26175,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1117:7:139",
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
                                    "id": 26178,
                                    "mutability": "mutable",
                                    "name": "_isCompetitionMode",
                                    "nameLocation": "1146:18:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26198,
                                    "src": "1141:23:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 26177,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1141:4:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1077:93:139"
                        },
                        "returnParameters": {
                            "id": 26187,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1335:0:139"
                        },
                        "scope": 26493,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 26265,
                        "nodeType": "FunctionDefinition",
                        "src": "1441:779:139",
                        "nodes": [],
                        "body": {
                            "id": 26264,
                            "nodeType": "Block",
                            "src": "1501:719:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26206,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26456,
                                            "src": "1539:7:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 26207,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1539:9:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26208,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1539:9:139"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 26212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 26209,
                                                "name": "getTotalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26387,
                                                "src": "1621:14:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view returns (uint256)"
                                                }
                                            },
                                            "id": 26210,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1621:16:139",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 26211,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1641:1:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "1621:21:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 26234,
                                    "nodeType": "IfStatement",
                                    "src": "1617:189:139",
                                    "trueBody": {
                                        "id": 26233,
                                        "nodeType": "Block",
                                        "src": "1644:162:139",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 26216,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 26213,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26172,
                                                        "src": "1658:11:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "id": 26214,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1672:3:139",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 26215,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1676:5:139",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1672:9:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1658:23:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 26217,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1658:23:139"
                                            },
                                            {
                                                "expression": {
                                                    "id": 26221,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 26218,
                                                        "name": "totalPooledEther",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26170,
                                                        "src": "1695:16:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "id": 26219,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1714:3:139",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 26220,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1718:5:139",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1714:9:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1695:28:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 26222,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1695:28:139"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "id": 26224,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1743:3:139",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 26225,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1747:6:139",
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1743:10:139",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 26226,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1755:3:139",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 26227,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1759:5:139",
                                                            "memberName": "value",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1755:9:139",
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
                                                        "id": 26223,
                                                        "name": "_mint",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72475,
                                                        "src": "1737:5:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                            "typeString": "function (address,uint256)"
                                                        }
                                                    },
                                                    "id": 26228,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1737:28:139",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 26229,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1737:28:139"
                                            },
                                            {
                                                "expression": {
                                                    "expression": {
                                                        "id": 26230,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "1786:3:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 26231,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1790:5:139",
                                                    "memberName": "value",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1786:9:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 26205,
                                                "id": 26232,
                                                "nodeType": "Return",
                                                "src": "1779:16:139"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        26236
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26236,
                                            "mutability": "mutable",
                                            "name": "shares",
                                            "nameLocation": "1895:6:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26264,
                                            "src": "1887:14:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26235,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1887:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26245,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26240,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26387,
                                                    "src": "1938:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26241,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1938:16:139",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26242,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26379,
                                                    "src": "1968:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26243,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1968:21:139",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "expression": {
                                                    "id": 26237,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "1904:3:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 26238,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1908:5:139",
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "src": "1904:9:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26239,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1914:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "1904:20:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26244,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1904:95:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1887:112:139"
                                },
                                {
                                    "expression": {
                                        "id": 26249,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26246,
                                            "name": "totalPooledEther",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26170,
                                            "src": "2044:16:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 26247,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "2064:3:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 26248,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2068:5:139",
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "src": "2064:9:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2044:29:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26250,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2044:29:139"
                                },
                                {
                                    "expression": {
                                        "id": 26253,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26251,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26172,
                                            "src": "2083:11:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "id": 26252,
                                            "name": "shares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26236,
                                            "src": "2098:6:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2083:21:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26254,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2083:21:139"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 26256,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2167:3:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 26257,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2171:6:139",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2167:10:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 26258,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2179:3:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 26259,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2183:5:139",
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "src": "2179:9:139",
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
                                            "id": 26255,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72475,
                                            "src": "2161:5:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 26260,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2161:28:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26261,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2161:28:139"
                                },
                                {
                                    "expression": {
                                        "id": 26262,
                                        "name": "shares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26236,
                                        "src": "2207:6:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26205,
                                    "id": 26263,
                                    "nodeType": "Return",
                                    "src": "2200:13:139"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 26199,
                            "nodeType": "StructuredDocumentation",
                            "src": "1418:18:139",
                            "text": "Overrides ///"
                        },
                        "functionSelector": "a1903eab",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "submit",
                        "nameLocation": "1450:6:139",
                        "parameters": {
                            "id": 26202,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26201,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26265,
                                    "src": "1457:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26200,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1457:7:139",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1456:9:139"
                        },
                        "returnParameters": {
                            "id": 26205,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26204,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26265,
                                    "src": "1492:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26203,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1492:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1491:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26295,
                        "nodeType": "FunctionDefinition",
                        "src": "2226:489:139",
                        "nodes": [],
                        "body": {
                            "id": 26294,
                            "nodeType": "Block",
                            "src": "2342:373:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26274,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26456,
                                            "src": "2380:7:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 26275,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2380:9:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26276,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2380:9:139"
                                },
                                {
                                    "assignments": [
                                        26278
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26278,
                                            "mutability": "mutable",
                                            "name": "tokenAmount",
                                            "nameLocation": "2478:11:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26294,
                                            "src": "2470:19:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26277,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2470:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26286,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26281,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26379,
                                                    "src": "2530:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26282,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2530:21:139",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26283,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26387,
                                                    "src": "2565:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26284,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2565:16:139",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26279,
                                                "name": "_sharesAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26269,
                                                "src": "2492:13:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26280,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2506:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "2492:24:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26285,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2492:99:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2470:121:139"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26288,
                                                "name": "_recipient",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26267,
                                                "src": "2655:10:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26289,
                                                "name": "tokenAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26278,
                                                "src": "2667:11:139",
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
                                            "id": 26287,
                                            "name": "transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72254,
                                            "src": "2646:8:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,uint256) returns (bool)"
                                            }
                                        },
                                        "id": 26290,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2646:33:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 26291,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2646:33:139"
                                },
                                {
                                    "expression": {
                                        "id": 26292,
                                        "name": "tokenAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26278,
                                        "src": "2697:11:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26273,
                                    "id": 26293,
                                    "nodeType": "Return",
                                    "src": "2690:18:139"
                                }
                            ]
                        },
                        "functionSelector": "8fcb4e5b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferShares",
                        "nameLocation": "2235:14:139",
                        "parameters": {
                            "id": 26270,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26267,
                                    "mutability": "mutable",
                                    "name": "_recipient",
                                    "nameLocation": "2267:10:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26295,
                                    "src": "2259:18:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26266,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2259:7:139",
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
                                    "id": 26269,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "2295:13:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26295,
                                    "src": "2287:21:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26268,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2287:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2249:65:139"
                        },
                        "returnParameters": {
                            "id": 26273,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26272,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26295,
                                    "src": "2333:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26271,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2333:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2332:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26328,
                        "nodeType": "FunctionDefinition",
                        "src": "2721:531:139",
                        "nodes": [],
                        "body": {
                            "id": 26327,
                            "nodeType": "Block",
                            "src": "2866:386:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26306,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26456,
                                            "src": "2904:7:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 26307,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2904:9:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26308,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2904:9:139"
                                },
                                {
                                    "assignments": [
                                        26310
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26310,
                                            "mutability": "mutable",
                                            "name": "tokenAmount",
                                            "nameLocation": "3002:11:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26327,
                                            "src": "2994:19:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26309,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2994:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26318,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26313,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26379,
                                                    "src": "3054:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26314,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3054:21:139",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26315,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26387,
                                                    "src": "3089:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26316,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3089:16:139",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26311,
                                                "name": "_sharesAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26301,
                                                "src": "3016:13:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26312,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3030:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "3016:24:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26317,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3016:99:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2994:121:139"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26320,
                                                "name": "_sender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26297,
                                                "src": "3183:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26321,
                                                "name": "_recipient",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26299,
                                                "src": "3192:10:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26322,
                                                "name": "tokenAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26310,
                                                "src": "3204:11:139",
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
                                            "id": 26319,
                                            "name": "transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72315,
                                            "src": "3170:12:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,address,uint256) returns (bool)"
                                            }
                                        },
                                        "id": 26323,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3170:46:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 26324,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3170:46:139"
                                },
                                {
                                    "expression": {
                                        "id": 26325,
                                        "name": "tokenAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26310,
                                        "src": "3234:11:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26305,
                                    "id": 26326,
                                    "nodeType": "Return",
                                    "src": "3227:18:139"
                                }
                            ]
                        },
                        "functionSelector": "6d780459",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferSharesFrom",
                        "nameLocation": "2730:18:139",
                        "parameters": {
                            "id": 26302,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26297,
                                    "mutability": "mutable",
                                    "name": "_sender",
                                    "nameLocation": "2766:7:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26328,
                                    "src": "2758:15:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26296,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2758:7:139",
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
                                    "id": 26299,
                                    "mutability": "mutable",
                                    "name": "_recipient",
                                    "nameLocation": "2791:10:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26328,
                                    "src": "2783:18:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26298,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2783:7:139",
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
                                    "id": 26301,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "2819:13:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26328,
                                    "src": "2811:21:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26300,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2811:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2748:90:139"
                        },
                        "returnParameters": {
                            "id": 26305,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26304,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26328,
                                    "src": "2857:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26303,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2857:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2856:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26344,
                        "nodeType": "FunctionDefinition",
                        "src": "3258:182:139",
                        "nodes": [],
                        "body": {
                            "id": 26343,
                            "nodeType": "Block",
                            "src": "3354:86:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26337,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26387,
                                                    "src": "3393:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26338,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3393:16:139",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26339,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26379,
                                                    "src": "3411:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26340,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3411:21:139",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26335,
                                                "name": "_ethAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26330,
                                                "src": "3371:10:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26336,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3382:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "3371:21:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26341,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3371:62:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26334,
                                    "id": 26342,
                                    "nodeType": "Return",
                                    "src": "3364:69:139"
                                }
                            ]
                        },
                        "functionSelector": "19208451",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getSharesByPooledEth",
                        "nameLocation": "3267:20:139",
                        "parameters": {
                            "id": 26331,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26330,
                                    "mutability": "mutable",
                                    "name": "_ethAmount",
                                    "nameLocation": "3305:10:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26344,
                                    "src": "3297:18:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26329,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3297:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3287:34:139"
                        },
                        "returnParameters": {
                            "id": 26334,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26333,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26344,
                                    "src": "3345:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26332,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3345:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3344:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26360,
                        "nodeType": "FunctionDefinition",
                        "src": "3446:200:139",
                        "nodes": [],
                        "body": {
                            "id": 26359,
                            "nodeType": "Block",
                            "src": "3545:101:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26353,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26379,
                                                    "src": "3599:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26354,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3599:21:139",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26355,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26387,
                                                    "src": "3622:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26356,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3622:16:139",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26351,
                                                "name": "_sharesAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26346,
                                                "src": "3574:13:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26352,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3588:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "3574:24:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26357,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3574:65:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26350,
                                    "id": 26358,
                                    "nodeType": "Return",
                                    "src": "3555:84:139"
                                }
                            ]
                        },
                        "functionSelector": "7a28fb88",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPooledEthByShares",
                        "nameLocation": "3455:20:139",
                        "parameters": {
                            "id": 26347,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26346,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "3493:13:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26360,
                                    "src": "3485:21:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26345,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3485:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3475:37:139"
                        },
                        "returnParameters": {
                            "id": 26350,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26349,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26360,
                                    "src": "3536:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26348,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3536:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3535:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26368,
                        "nodeType": "FunctionDefinition",
                        "src": "3652:85:139",
                        "nodes": [],
                        "body": {
                            "id": 26367,
                            "nodeType": "Block",
                            "src": "3712:25:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "hexValue": "30",
                                        "id": 26365,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3729:1:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "functionReturnParameters": 26364,
                                    "id": 26366,
                                    "nodeType": "Return",
                                    "src": "3722:8:139"
                                }
                            ]
                        },
                        "functionSelector": "47b714e0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBufferedEther",
                        "nameLocation": "3661:16:139",
                        "parameters": {
                            "id": 26361,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3677:2:139"
                        },
                        "returnParameters": {
                            "id": 26364,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26363,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26368,
                                    "src": "3703:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26362,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3703:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3702:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26379,
                        "nodeType": "FunctionDefinition",
                        "src": "3743:125:139",
                        "nodes": [],
                        "body": {
                            "id": 26378,
                            "nodeType": "Block",
                            "src": "3804:64:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 26376,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 26373,
                                            "name": "totalPooledEther",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26170,
                                            "src": "3821:16:139",
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
                                                "id": 26374,
                                                "name": "_getAccruedInterest",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26492,
                                                "src": "3840:19:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view returns (uint256)"
                                                }
                                            },
                                            "id": 26375,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3840:21:139",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3821:40:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26372,
                                    "id": 26377,
                                    "nodeType": "Return",
                                    "src": "3814:47:139"
                                }
                            ]
                        },
                        "functionSelector": "37cfdaca",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalPooledEther",
                        "nameLocation": "3752:19:139",
                        "parameters": {
                            "id": 26369,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3771:2:139"
                        },
                        "returnParameters": {
                            "id": 26372,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26371,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26379,
                                    "src": "3795:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26370,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3795:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3794:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 26387,
                        "nodeType": "FunctionDefinition",
                        "src": "3874:91:139",
                        "nodes": [],
                        "body": {
                            "id": 26386,
                            "nodeType": "Block",
                            "src": "3930:35:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26384,
                                        "name": "totalShares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26172,
                                        "src": "3947:11:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26383,
                                    "id": 26385,
                                    "nodeType": "Return",
                                    "src": "3940:18:139"
                                }
                            ]
                        },
                        "functionSelector": "d5002f2e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalShares",
                        "nameLocation": "3883:14:139",
                        "parameters": {
                            "id": 26380,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3897:2:139"
                        },
                        "returnParameters": {
                            "id": 26383,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26382,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26387,
                                    "src": "3921:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26381,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3921:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3920:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 26409,
                        "nodeType": "FunctionDefinition",
                        "src": "3971:208:139",
                        "nodes": [],
                        "body": {
                            "id": 26408,
                            "nodeType": "Block",
                            "src": "4039:140:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        26395
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26395,
                                            "mutability": "mutable",
                                            "name": "tokenBalance",
                                            "nameLocation": "4057:12:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26408,
                                            "src": "4049:20:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26394,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4049:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26399,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 26396,
                                            "name": "balanceOf",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72147,
                                            "src": "4072:9:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                "typeString": "mapping(address => uint256)"
                                            }
                                        },
                                        "id": 26398,
                                        "indexExpression": {
                                            "id": 26397,
                                            "name": "_account",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26389,
                                            "src": "4082:8:139",
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
                                        "src": "4072:19:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4049:42:139"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26402,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26387,
                                                    "src": "4132:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26403,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4132:16:139",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26404,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26379,
                                                    "src": "4150:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26405,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4150:21:139",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 26400,
                                                "name": "tokenBalance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26395,
                                                "src": "4108:12:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26401,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4121:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "4108:23:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26406,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4108:64:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26393,
                                    "id": 26407,
                                    "nodeType": "Return",
                                    "src": "4101:71:139"
                                }
                            ]
                        },
                        "functionSelector": "f5eb42dc",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sharesOf",
                        "nameLocation": "3980:8:139",
                        "parameters": {
                            "id": 26390,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26389,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "3997:8:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26409,
                                    "src": "3989:16:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26388,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3989:7:139",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3988:18:139"
                        },
                        "returnParameters": {
                            "id": 26393,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26392,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26409,
                                    "src": "4030:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26391,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4030:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4029:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26425,
                        "nodeType": "FunctionDefinition",
                        "src": "4203:122:139",
                        "nodes": [],
                        "body": {
                            "id": 26424,
                            "nodeType": "Block",
                            "src": "4275:50:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26417,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26456,
                                            "src": "4285:7:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 26418,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4285:9:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26419,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4285:9:139"
                                },
                                {
                                    "expression": {
                                        "id": 26422,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26420,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26166,
                                            "src": "4304:5:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 26421,
                                            "name": "_rate_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26412,
                                            "src": "4312:6:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4304:14:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26423,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4304:14:139"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 26410,
                            "nodeType": "StructuredDocumentation",
                            "src": "4185:13:139",
                            "text": "Mock ///"
                        },
                        "functionSelector": "34fcf437",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 26415,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 26414,
                                    "name": "requiresAuthDuringCompetition",
                                    "nameLocations": [
                                        "4245:29:139"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 23409,
                                    "src": "4245:29:139"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4245:29:139"
                            }
                        ],
                        "name": "setRate",
                        "nameLocation": "4212:7:139",
                        "parameters": {
                            "id": 26413,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26412,
                                    "mutability": "mutable",
                                    "name": "_rate_",
                                    "nameLocation": "4228:6:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26425,
                                    "src": "4220:14:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26411,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4220:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4219:16:139"
                        },
                        "returnParameters": {
                            "id": 26416,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4275:0:139"
                        },
                        "scope": 26493,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26433,
                        "nodeType": "FunctionDefinition",
                        "src": "4331:80:139",
                        "nodes": [],
                        "body": {
                            "id": 26432,
                            "nodeType": "Block",
                            "src": "4382:29:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26430,
                                        "name": "_rate",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26166,
                                        "src": "4399:5:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26429,
                                    "id": 26431,
                                    "nodeType": "Return",
                                    "src": "4392:12:139"
                                }
                            ]
                        },
                        "functionSelector": "679aefce",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getRate",
                        "nameLocation": "4340:7:139",
                        "parameters": {
                            "id": 26426,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4347:2:139"
                        },
                        "returnParameters": {
                            "id": 26429,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26428,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26433,
                                    "src": "4373:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26427,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4373:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4372:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26456,
                        "nodeType": "FunctionDefinition",
                        "src": "4417:205:139",
                        "nodes": [],
                        "body": {
                            "id": 26455,
                            "nodeType": "Block",
                            "src": "4445:177:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        26437
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26437,
                                            "mutability": "mutable",
                                            "name": "interest",
                                            "nameLocation": "4463:8:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26455,
                                            "src": "4455:16:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26436,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4455:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26440,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26438,
                                            "name": "_getAccruedInterest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26492,
                                            "src": "4474:19:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 26439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4474:21:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4455:40:139"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 26443,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 26441,
                                            "name": "interest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26437,
                                            "src": "4509:8:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 26442,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4520:1:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4509:12:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 26449,
                                    "nodeType": "IfStatement",
                                    "src": "4505:71:139",
                                    "trueBody": {
                                        "id": 26448,
                                        "nodeType": "Block",
                                        "src": "4523:53:139",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 26446,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 26444,
                                                        "name": "totalPooledEther",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26170,
                                                        "src": "4537:16:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 26445,
                                                        "name": "interest",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26437,
                                                        "src": "4557:8:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4537:28:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 26447,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4537:28:139"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 26453,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26450,
                                            "name": "_lastUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26168,
                                            "src": "4585:12:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 26451,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "4600:5:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 26452,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4606:9:139",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "4600:15:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4585:30:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26454,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4585:30:139"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_accrue",
                        "nameLocation": "4426:7:139",
                        "parameters": {
                            "id": 26434,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4433:2:139"
                        },
                        "returnParameters": {
                            "id": 26435,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4445:0:139"
                        },
                        "scope": 26493,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 26492,
                        "nodeType": "FunctionDefinition",
                        "src": "4628:390:139",
                        "nodes": [],
                        "body": {
                            "id": 26491,
                            "nodeType": "Block",
                            "src": "4691:327:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 26463,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 26461,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26166,
                                            "src": "4705:5:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 26462,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4714:1:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4705:10:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 26467,
                                    "nodeType": "IfStatement",
                                    "src": "4701:49:139",
                                    "trueBody": {
                                        "id": 26466,
                                        "nodeType": "Block",
                                        "src": "4717:33:139",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "30",
                                                    "id": 26464,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4738:1:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "functionReturnParameters": 26460,
                                                "id": 26465,
                                                "nodeType": "Return",
                                                "src": "4731:8:139"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        26469
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26469,
                                            "mutability": "mutable",
                                            "name": "timeElapsed",
                                            "nameLocation": "4821:11:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26491,
                                            "src": "4813:19:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26468,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4813:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26478,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "333635",
                                                "id": 26476,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4889:8:139",
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
                                                        "id": 26473,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 26470,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -4,
                                                                "src": "4836:5:139",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 26471,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4842:9:139",
                                                            "memberName": "timestamp",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4836:15:139",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 26472,
                                                            "name": "_lastUpdated",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 26168,
                                                            "src": "4854:12:139",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "4836:30:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 26474,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "4835:32:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26475,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4868:7:139",
                                            "memberName": "divDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18103,
                                            "src": "4835:40:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26477,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4835:72:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4813:94:139"
                                },
                                {
                                    "assignments": [
                                        26480
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26480,
                                            "mutability": "mutable",
                                            "name": "accrued",
                                            "nameLocation": "4925:7:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26491,
                                            "src": "4917:15:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26479,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4917:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26488,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 26485,
                                                        "name": "timeElapsed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26469,
                                                        "src": "4974:11:139",
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
                                                        "id": 26483,
                                                        "name": "_rate",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26166,
                                                        "src": "4960:5:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 26484,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4966:7:139",
                                                    "memberName": "mulDown",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18085,
                                                    "src": "4960:13:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 26486,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4960:26:139",
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
                                                "id": 26481,
                                                "name": "totalPooledEther",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26170,
                                                "src": "4935:16:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26482,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4952:7:139",
                                            "memberName": "mulDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18085,
                                            "src": "4935:24:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26487,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4935:52:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4917:70:139"
                                },
                                {
                                    "expression": {
                                        "id": 26489,
                                        "name": "accrued",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26480,
                                        "src": "5004:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26460,
                                    "id": 26490,
                                    "nodeType": "Return",
                                    "src": "4997:14:139"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_getAccruedInterest",
                        "nameLocation": "4637:19:139",
                        "parameters": {
                            "id": 26457,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4656:2:139"
                        },
                        "returnParameters": {
                            "id": 26460,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26459,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26492,
                                    "src": "4682:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26458,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4682:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4681:9:139"
                        },
                        "scope": 26493,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 26158,
                            "name": "MultiRolesAuthority",
                            "nameLocations": [
                                "826:19:139"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 72116,
                            "src": "826:19:139"
                        },
                        "id": 26159,
                        "nodeType": "InheritanceSpecifier",
                        "src": "826:19:139"
                    },
                    {
                        "baseName": {
                            "id": 26160,
                            "name": "ERC20Mintable",
                            "nameLocations": [
                                "847:13:139"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 23468,
                            "src": "847:13:139"
                        },
                        "id": 26161,
                        "nodeType": "InheritanceSpecifier",
                        "src": "847:13:139"
                    }
                ],
                "canonicalName": "MockLido",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 26157,
                    "nodeType": "StructuredDocumentation",
                    "src": "276:529:139",
                    "text": "@author DELV\n @title MockLido\n @notice This mock yield source will accrue interest at a specified rate\n         Every stateful interaction will accrue interest, so the interest\n         accrual will approximate continuous compounding as the contract\n         is called more frequently.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    26493,
                    23468,
                    72116,
                    71811,
                    71798,
                    72504
                ],
                "name": "MockLido",
                "nameLocation": "814:8:139",
                "scope": 26494,
                "usedErrors": [],
                "usedEvents": [
                    71648,
                    71655,
                    71829,
                    71835,
                    71843,
                    71850,
                    72127,
                    72135
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 139
};
