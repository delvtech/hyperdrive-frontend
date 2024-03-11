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
        "object": "0x6101006040523480156200001257600080fd5b50604051620022ff380380620022ff83398101604081905262000035916200021c565b6040518060400160405280601781526020017f4c6971756964207374616b656420457468657220322e30000000000000000000815250604051806040016040528060058152602001640e6e88aa8960db1b81525060128484813081818888888260009081620000a5919062000319565b506001620000b4838262000319565b5060ff81166080524660a052620000ca62000180565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052505050600c93909355505042600d555062000463565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001b49190620003e5565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000806000606084860312156200023257600080fd5b835160208501519093506001600160a01b03811681146200025257600080fd5b604085015190925080151581146200026957600080fd5b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200029f57607f821691505b602082108103620002c057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200031457600081815260208120601f850160051c81016020861015620002ef5750805b601f850160051c820191505b818110156200031057828155600101620002fb565b5050505b505050565b81516001600160401b0381111562000335576200033562000274565b6200034d816200034684546200028a565b84620002c6565b602080601f8311600181146200038557600084156200036c5750858301515b600019600386901b1c1916600185901b17855562000310565b600085815260208120601f198616915b82811015620003b65788860151825594840194600190910190840162000395565b5085821015620003d55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620003f5816200028a565b60018281168015620004105760018114620004265762000457565b60ff198416875282151583028701945062000457565b8760005260208060002060005b858110156200044e5781548a82015290840190820162000433565b50505082870194505b50929695505050505050565b60805160a05160c05160e051611e3f620004c06000396000818161057301528181610b7701528181610c4e01528181610cb40152818161106b01526110cd01526000610c1301526000610bde015260006103ad0152611e3f6000f3fe60806040526004361061025c5760003560e01c80637a28fb8811610144578063b7009613116100b6578063dd62ed3e1161007a578063dd62ed3e1461076d578063e688747b146107a5578063ea7ca276146107e8578063ed0d0efb1461082c578063f2fde38b14610859578063f5eb42dc1461087957600080fd5b8063b7009613146106c2578063bf7e214f146106e2578063c53a398514610702578063d5002f2e14610738578063d505accf1461074d57600080fd5b80638fcb4e5b116101085780638fcb4e5b1461061a57806395d89b411461063a5780639dc29fac1461064f578063a0712d681461066f578063a1903eab1461068f578063a9059cbb146106a257600080fd5b80637a28fb88146105415780637a8c63b5146105615780637a9e5e4b146105955780637ecebe00146105b55780638da5cb5b146105e257600080fd5b80633644e515116101dd5780634b5159da116101a15780634b5159da1461047f578063679aefce1461049f57806367aff484146104b45780636d780459146104d457806370a08231146104f4578063728b952b1461052157600080fd5b80633644e5151461040157806337cfdaca1461041657806340c10f191461042b57806342966c681461044b57806347b714e01461046b57600080fd5b806318160ddd1161022457806318160ddd14610345578063192084511461035b57806323b872dd1461037b578063313ce5671461039b57806334fcf437146103e157600080fd5b806306a36aee1461026157806306fdde03146102a1578063095ea7b3146102c35780630bade8a4146102f35780630ea9b75b14610323575b600080fd5b34801561026d57600080fd5b5061028e61027c3660046118f7565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102ad57600080fd5b506102b6610899565b6040516102989190611914565b3480156102cf57600080fd5b506102e36102de366004611962565b610927565b6040519015158152602001610298565b3480156102ff57600080fd5b506102e361030e3660046119ab565b600a6020526000908152604090205460ff1681565b34801561032f57600080fd5b5061034361033e3660046119e5565b610994565b005b34801561035157600080fd5b5061028e60025481565b34801561036757600080fd5b5061028e610376366004611a2c565b610a75565b34801561038757600080fd5b506102e3610396366004611a45565b610a93565b3480156103a757600080fd5b506103cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610298565b3480156103ed57600080fd5b506103436103fc366004611a2c565b610b75565b34801561040d57600080fd5b5061028e610bda565b34801561042257600080fd5b5061028e610c35565b34801561043757600080fd5b50610343610446366004611962565b610c4c565b34801561045757600080fd5b50610343610466366004611a2c565b610cb2565b34801561047757600080fd5b50600061028e565b34801561048b57600080fd5b5061034361049a366004611a86565b610d17565b3480156104ab57600080fd5b50600c5461028e565b3480156104c057600080fd5b506103436104cf366004611abd565b610da9565b3480156104e057600080fd5b5061028e6104ef366004611a45565b610e71565b34801561050057600080fd5b5061028e61050f3660046118f7565b60036020526000908152604090205481565b34801561052d57600080fd5b5061034361053c366004611aeb565b610ea9565b34801561054d57600080fd5b5061028e61055c366004611a2c565b610f32565b34801561056d57600080fd5b506102e37f000000000000000000000000000000000000000000000000000000000000000081565b3480156105a157600080fd5b506103436105b03660046118f7565b610f47565b3480156105c157600080fd5b5061028e6105d03660046118f7565b60056020526000908152604090205481565b3480156105ee57600080fd5b50600654610602906001600160a01b031681565b6040516001600160a01b039091168152602001610298565b34801561062657600080fd5b5061028e610635366004611962565b611031565b34801561064657600080fd5b506102b661105c565b34801561065b57600080fd5b5061034361066a366004611962565b611069565b34801561067b57600080fd5b5061034361068a366004611a2c565b6110cb565b61028e61069d3660046118f7565b61112d565b3480156106ae57600080fd5b506102e36106bd366004611962565b6111b9565b3480156106ce57600080fd5b506102e36106dd366004611b19565b61121f565b3480156106ee57600080fd5b50600754610602906001600160a01b031681565b34801561070e57600080fd5b5061060261071d3660046118f7565b6008602052600090815260409020546001600160a01b031681565b34801561074457600080fd5b50600f5461028e565b34801561075957600080fd5b50610343610768366004611b60565b61131d565b34801561077957600080fd5b5061028e610788366004611aeb565b600460209081526000928352604080842090915290825290205481565b3480156107b157600080fd5b506102e36107c0366004611bce565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b3480156107f457600080fd5b506102e3610803366004611c01565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b34801561083857600080fd5b5061028e6108473660046119ab565b600b6020526000908152604090205481565b34801561086557600080fd5b506103436108743660046118f7565b611561565b34801561088557600080fd5b5061028e6108943660046118f7565b6115df565b600080546108a690611c2d565b80601f01602080910402602001604051908101604052809291908181526020018280546108d290611c2d565b801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109829086815260200190565b60405180910390a35060015b92915050565b6109aa336000356001600160e01b031916611614565b6109cf5760405162461bcd60e51b81526004016109c690611c67565b60405180910390fd5b80156109ff576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a26565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610a68911515815260200190565b60405180910390a3505050565b600061098e610a83600f5490565b610a8b610c35565b8491906116be565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610aef57610aca8382611ca3565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b17908490611ca3565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611dea83398151915290610b609087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610bcd57610bb1336000356001600160e01b031916611614565b610bcd5760405162461bcd60e51b81526004016109c690611cb6565b610bd56116dc565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c1057610c0b61170d565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610c3f6117a7565b600e54610c0b9190611ced565b7f000000000000000000000000000000000000000000000000000000000000000015610ca457610c88336000356001600160e01b031916611614565b610ca45760405162461bcd60e51b81526004016109c690611cb6565b610cae82826117fc565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610d0a57610cee336000356001600160e01b031916611614565b610d0a5760405162461bcd60e51b81526004016109c690611cb6565b610d143382611856565b50565b610d2d336000356001600160e01b031916611614565b610d495760405162461bcd60e51b81526004016109c690611c67565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610dbf336000356001600160e01b031916611614565b610ddb5760405162461bcd60e51b81526004016109c690611c67565b8015610e0a576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610e30565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610a68911515815260200190565b6000610e7b6116dc565b6000610e93610e88610c35565b600f548591906116be565b9050610ea0858583610a93565b50949350505050565b610ebf336000356001600160e01b031916611614565b610edb5760405162461bcd60e51b81526004016109c690611c67565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b600061098e610f3f610c35565b600f54610a8b565b6006546001600160a01b0316331480610fdc575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610f9b90339030906001600160e01b03196000351690600401611d00565b602060405180830381865afa158015610fb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdc9190611d2d565b610fe557600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600061103b6116dc565b6000611048610e88610c35565b905061105484826111b9565b509392505050565b600180546108a690611c2d565b7f0000000000000000000000000000000000000000000000000000000000000000156110c1576110a5336000356001600160e01b031916611614565b6110c15760405162461bcd60e51b81526004016109c690611cb6565b610cae8282611856565b7f00000000000000000000000000000000000000000000000000000000000000001561112357611107336000356001600160e01b031916611614565b6111235760405162461bcd60e51b81526004016109c690611cb6565b610d1433826117fc565b60006111376116dc565b600f5460000361115e5734600f819055600e8190556111579033906117fc565b5034919050565b600061117c61116c600f5490565b611174610c35565b3491906116be565b905034600e60008282546111909190611ced565b9250508190555080600f60008282546111a99190611ced565b9091555061098e905033346117fc565b336000908152600360205260408120805483919083906111da908490611ca3565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611dea833981519152906109829086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156112bb5760405163b700961360e01b81526001600160a01b0382169063b70096139061127290889088908890600401611d00565b602060405180830381865afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b39190611d2d565b915050610b6e565b6001600160e01b031983166000908152600a602052604090205460ff168061131457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561136d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016109c6565b60006001611379610bda565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611485573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906114bb5750876001600160a01b0316816001600160a01b0316145b6114f85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016109c6565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611577336000356001600160e01b031916611614565b6115935760405162461bcd60e51b81526004016109c690611c67565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610b6e611604600f5490565b61160c610c35565b8391906116be565b6007546000906001600160a01b0316801580159061169e575060405163b700961360e01b81526001600160a01b0382169063b70096139061165d90879030908890600401611d00565b602060405180830381865afa15801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e9190611d2d565b806116b657506006546001600160a01b038581169116145b949350505050565b60008260001904841183021582026116d557600080fd5b5091020490565b60006116e66117a7565b905080156117065780600e60008282546117009190611ced565b90915550505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161173f9190611d4a565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600c546000036117b95750600090565b60006117d76301e13380600d54426117d19190611ca3565b906118b8565b90506000610b6e6117f383600c546118cd90919063ffffffff16565b600e54906118cd565b806002600082825461180e9190611ced565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611dea83398151915291015b60405180910390a35050565b6001600160a01b0382166000908152600360205260408120805483929061187e908490611ca3565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611dea8339815191529060200161184a565b6000610b6e83670de0b6b3a7640000846116be565b6000610b6e8383670de0b6b3a76400006116be565b6001600160a01b0381168114610d1457600080fd5b60006020828403121561190957600080fd5b8135610b6e816118e2565b600060208083528351808285015260005b8181101561194157858101830151858201604001528201611925565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561197557600080fd5b8235611980816118e2565b946020939093013593505050565b80356001600160e01b0319811681146119a657600080fd5b919050565b6000602082840312156119bd57600080fd5b610b6e8261198e565b803560ff811681146119a657600080fd5b8015158114610d1457600080fd5b6000806000606084860312156119fa57600080fd5b611a03846119c6565b9250611a116020850161198e565b91506040840135611a21816119d7565b809150509250925092565b600060208284031215611a3e57600080fd5b5035919050565b600080600060608486031215611a5a57600080fd5b8335611a65816118e2565b92506020840135611a75816118e2565b929592945050506040919091013590565b60008060408385031215611a9957600080fd5b611aa28361198e565b91506020830135611ab2816119d7565b809150509250929050565b600080600060608486031215611ad257600080fd5b8335611add816118e2565b9250611a11602085016119c6565b60008060408385031215611afe57600080fd5b8235611b09816118e2565b91506020830135611ab2816118e2565b600080600060608486031215611b2e57600080fd5b8335611b39816118e2565b92506020840135611b49816118e2565b9150611b576040850161198e565b90509250925092565b600080600080600080600060e0888a031215611b7b57600080fd5b8735611b86816118e2565b96506020880135611b96816118e2565b95506040880135945060608801359350611bb2608089016119c6565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611be157600080fd5b611bea836119c6565b9150611bf86020840161198e565b90509250929050565b60008060408385031215611c1457600080fd5b8235611c1f816118e2565b9150611bf8602084016119c6565b600181811c90821680611c4157607f821691505b602082108103611c6157634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561098e5761098e611c8d565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b8082018082111561098e5761098e611c8d565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611d3f57600080fd5b8151610b6e816119d7565b600080835481600182811c915080831680611d6657607f831692505b60208084108203611d8557634e487b7160e01b86526022600452602486fd5b818015611d995760018114611dae57611ddb565b60ff1986168952841515850289019650611ddb565b60008a81526020902060005b86811015611dd35781548b820152908501908301611dba565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212204a2aac7d17e54722c4695294b6c034d0d22eb3541eefb7d55bfcafa0d2d395df64736f6c63430008140033",
        "sourceMap": "909:4215:91:-:0;;;1170:346;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;359:323:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;359:323:81;;;1370:2:91;1386:6;1406:18;581:5:81;614:4;1149:6:123;1157:10;529:4:81;535:6;543:8;2101:5:124;2094:4;:12;;;;;;:::i;:::-;-1:-1:-1;2116:6:124;:16;2125:7;2116:6;:16;:::i;:::-;-1:-1:-1;2142:20:124;;;;;2192:13;2173:32;;2242:24;:22;:24::i;:::-;2215:51;;-1:-1:-1;;682:5:122;:14;;-1:-1:-1;;;;;682:14:122;;;-1:-1:-1;;;;;;682:14:122;;;;;;;;706:9;:22;;;;;;;;;;;;744:40;;682:14;;-1:-1:-1;765:10:122;;744:40;;682:5;;744:40;799;;-1:-1:-1;;;;;799:40:122;;;816:10;;799:40;;;;;-1:-1:-1;;;;637:38:81::2;;;::::0;-1:-1:-1;;;1449:5:91::1;:20:::0;;;;-1:-1:-1;;1494:15:91::1;1479:12;:30:::0;-1:-1:-1;909:4215:91;;5510:446:124;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;4361:25:182;;;;4402:18;;4395:34;;;;5833:14:124;4445:18:182;;;4438:34;5869:13:124;4488:18:182;;;4481:34;5912:4:124;4531:19:182;;;4524:61;4333:19;;5640:295:124;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;14:513:182:-;99:6;107;115;168:2;156:9;147:7;143:23;139:32;136:52;;;184:1;181;174:12;136:52;207:16;;266:2;251:18;;245:25;207:16;;-1:-1:-1;;;;;;299:31:182;;289:42;;279:70;;345:1;342;335:12;279:70;418:2;403:18;;397:25;368:5;;-1:-1:-1;460:15:182;;453:23;441:36;;431:64;;491:1;488;481:12;431:64;514:7;504:17;;;14:513;;;;;:::o;532:127::-;593:10;588:3;584:20;581:1;574:31;624:4;621:1;614:15;648:4;645:1;638:15;664:380;743:1;739:12;;;;786;;;807:61;;861:4;853:6;849:17;839:27;;807:61;914:2;906:6;903:14;883:18;880:38;877:161;;960:10;955:3;951:20;948:1;941:31;995:4;992:1;985:15;1023:4;1020:1;1013:15;877:161;;664:380;;;:::o;1175:545::-;1277:2;1272:3;1269:11;1266:448;;;1313:1;1338:5;1334:2;1327:17;1383:4;1379:2;1369:19;1453:2;1441:10;1437:19;1434:1;1430:27;1424:4;1420:38;1489:4;1477:10;1474:20;1471:47;;;-1:-1:-1;1512:4:182;1471:47;1567:2;1562:3;1558:12;1555:1;1551:20;1545:4;1541:31;1531:41;;1622:82;1640:2;1633:5;1630:13;1622:82;;;1685:17;;;1666:1;1655:13;1622:82;;;1626:3;;;1266:448;1175:545;;;:::o;1896:1352::-;2016:10;;-1:-1:-1;;;;;2038:30:182;;2035:56;;;2071:18;;:::i;:::-;2100:97;2190:6;2150:38;2182:4;2176:11;2150:38;:::i;:::-;2144:4;2100:97;:::i;:::-;2252:4;;2316:2;2305:14;;2333:1;2328:663;;;;3035:1;3052:6;3049:89;;;-1:-1:-1;3104:19:182;;;3098:26;3049:89;-1:-1:-1;;1853:1:182;1849:11;;;1845:24;1841:29;1831:40;1877:1;1873:11;;;1828:57;3151:81;;2298:944;;2328:663;1122:1;1115:14;;;1159:4;1146:18;;-1:-1:-1;;2364:20:182;;;2482:236;2496:7;2493:1;2490:14;2482:236;;;2585:19;;;2579:26;2564:42;;2677:27;;;;2645:1;2633:14;;;;2512:19;;2482:236;;;2486:3;2746:6;2737:7;2734:19;2731:201;;;2807:19;;;2801:26;-1:-1:-1;;2890:1:182;2886:14;;;2902:3;2882:24;2878:37;2874:42;2859:58;2844:74;;2731:201;-1:-1:-1;;;;;2978:1:182;2962:14;;;2958:22;2945:36;;-1:-1:-1;1896:1352:182:o;3253:844::-;3383:3;3412:1;3445:6;3439:13;3475:36;3501:9;3475:36;:::i;:::-;3530:1;3547:18;;;3574:133;;;;3721:1;3716:356;;;;3540:532;;3574:133;-1:-1:-1;;3607:24:182;;3595:37;;3680:14;;3673:22;3661:35;;3652:45;;;-1:-1:-1;3574:133:182;;3716:356;3747:6;3744:1;3737:17;3777:4;3822:2;3819:1;3809:16;3847:1;3861:165;3875:6;3872:1;3869:13;3861:165;;;3953:14;;3940:11;;;3933:35;3996:16;;;;3890:10;;3861:165;;;3865:3;;;4055:6;4050:3;4046:16;4039:23;;3540:532;-1:-1:-1;4088:3:182;;3253:844;-1:-1:-1;;;;;;3253:844:182:o;4102:489::-;909:4215:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x60806040526004361061025c5760003560e01c80637a28fb8811610144578063b7009613116100b6578063dd62ed3e1161007a578063dd62ed3e1461076d578063e688747b146107a5578063ea7ca276146107e8578063ed0d0efb1461082c578063f2fde38b14610859578063f5eb42dc1461087957600080fd5b8063b7009613146106c2578063bf7e214f146106e2578063c53a398514610702578063d5002f2e14610738578063d505accf1461074d57600080fd5b80638fcb4e5b116101085780638fcb4e5b1461061a57806395d89b411461063a5780639dc29fac1461064f578063a0712d681461066f578063a1903eab1461068f578063a9059cbb146106a257600080fd5b80637a28fb88146105415780637a8c63b5146105615780637a9e5e4b146105955780637ecebe00146105b55780638da5cb5b146105e257600080fd5b80633644e515116101dd5780634b5159da116101a15780634b5159da1461047f578063679aefce1461049f57806367aff484146104b45780636d780459146104d457806370a08231146104f4578063728b952b1461052157600080fd5b80633644e5151461040157806337cfdaca1461041657806340c10f191461042b57806342966c681461044b57806347b714e01461046b57600080fd5b806318160ddd1161022457806318160ddd14610345578063192084511461035b57806323b872dd1461037b578063313ce5671461039b57806334fcf437146103e157600080fd5b806306a36aee1461026157806306fdde03146102a1578063095ea7b3146102c35780630bade8a4146102f35780630ea9b75b14610323575b600080fd5b34801561026d57600080fd5b5061028e61027c3660046118f7565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102ad57600080fd5b506102b6610899565b6040516102989190611914565b3480156102cf57600080fd5b506102e36102de366004611962565b610927565b6040519015158152602001610298565b3480156102ff57600080fd5b506102e361030e3660046119ab565b600a6020526000908152604090205460ff1681565b34801561032f57600080fd5b5061034361033e3660046119e5565b610994565b005b34801561035157600080fd5b5061028e60025481565b34801561036757600080fd5b5061028e610376366004611a2c565b610a75565b34801561038757600080fd5b506102e3610396366004611a45565b610a93565b3480156103a757600080fd5b506103cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610298565b3480156103ed57600080fd5b506103436103fc366004611a2c565b610b75565b34801561040d57600080fd5b5061028e610bda565b34801561042257600080fd5b5061028e610c35565b34801561043757600080fd5b50610343610446366004611962565b610c4c565b34801561045757600080fd5b50610343610466366004611a2c565b610cb2565b34801561047757600080fd5b50600061028e565b34801561048b57600080fd5b5061034361049a366004611a86565b610d17565b3480156104ab57600080fd5b50600c5461028e565b3480156104c057600080fd5b506103436104cf366004611abd565b610da9565b3480156104e057600080fd5b5061028e6104ef366004611a45565b610e71565b34801561050057600080fd5b5061028e61050f3660046118f7565b60036020526000908152604090205481565b34801561052d57600080fd5b5061034361053c366004611aeb565b610ea9565b34801561054d57600080fd5b5061028e61055c366004611a2c565b610f32565b34801561056d57600080fd5b506102e37f000000000000000000000000000000000000000000000000000000000000000081565b3480156105a157600080fd5b506103436105b03660046118f7565b610f47565b3480156105c157600080fd5b5061028e6105d03660046118f7565b60056020526000908152604090205481565b3480156105ee57600080fd5b50600654610602906001600160a01b031681565b6040516001600160a01b039091168152602001610298565b34801561062657600080fd5b5061028e610635366004611962565b611031565b34801561064657600080fd5b506102b661105c565b34801561065b57600080fd5b5061034361066a366004611962565b611069565b34801561067b57600080fd5b5061034361068a366004611a2c565b6110cb565b61028e61069d3660046118f7565b61112d565b3480156106ae57600080fd5b506102e36106bd366004611962565b6111b9565b3480156106ce57600080fd5b506102e36106dd366004611b19565b61121f565b3480156106ee57600080fd5b50600754610602906001600160a01b031681565b34801561070e57600080fd5b5061060261071d3660046118f7565b6008602052600090815260409020546001600160a01b031681565b34801561074457600080fd5b50600f5461028e565b34801561075957600080fd5b50610343610768366004611b60565b61131d565b34801561077957600080fd5b5061028e610788366004611aeb565b600460209081526000928352604080842090915290825290205481565b3480156107b157600080fd5b506102e36107c0366004611bce565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b3480156107f457600080fd5b506102e3610803366004611c01565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b34801561083857600080fd5b5061028e6108473660046119ab565b600b6020526000908152604090205481565b34801561086557600080fd5b506103436108743660046118f7565b611561565b34801561088557600080fd5b5061028e6108943660046118f7565b6115df565b600080546108a690611c2d565b80601f01602080910402602001604051908101604052809291908181526020018280546108d290611c2d565b801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109829086815260200190565b60405180910390a35060015b92915050565b6109aa336000356001600160e01b031916611614565b6109cf5760405162461bcd60e51b81526004016109c690611c67565b60405180910390fd5b80156109ff576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a26565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610a68911515815260200190565b60405180910390a3505050565b600061098e610a83600f5490565b610a8b610c35565b8491906116be565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610aef57610aca8382611ca3565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b17908490611ca3565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611dea83398151915290610b609087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610bcd57610bb1336000356001600160e01b031916611614565b610bcd5760405162461bcd60e51b81526004016109c690611cb6565b610bd56116dc565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c1057610c0b61170d565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610c3f6117a7565b600e54610c0b9190611ced565b7f000000000000000000000000000000000000000000000000000000000000000015610ca457610c88336000356001600160e01b031916611614565b610ca45760405162461bcd60e51b81526004016109c690611cb6565b610cae82826117fc565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610d0a57610cee336000356001600160e01b031916611614565b610d0a5760405162461bcd60e51b81526004016109c690611cb6565b610d143382611856565b50565b610d2d336000356001600160e01b031916611614565b610d495760405162461bcd60e51b81526004016109c690611c67565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610dbf336000356001600160e01b031916611614565b610ddb5760405162461bcd60e51b81526004016109c690611c67565b8015610e0a576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610e30565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610a68911515815260200190565b6000610e7b6116dc565b6000610e93610e88610c35565b600f548591906116be565b9050610ea0858583610a93565b50949350505050565b610ebf336000356001600160e01b031916611614565b610edb5760405162461bcd60e51b81526004016109c690611c67565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b600061098e610f3f610c35565b600f54610a8b565b6006546001600160a01b0316331480610fdc575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610f9b90339030906001600160e01b03196000351690600401611d00565b602060405180830381865afa158015610fb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdc9190611d2d565b610fe557600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600061103b6116dc565b6000611048610e88610c35565b905061105484826111b9565b509392505050565b600180546108a690611c2d565b7f0000000000000000000000000000000000000000000000000000000000000000156110c1576110a5336000356001600160e01b031916611614565b6110c15760405162461bcd60e51b81526004016109c690611cb6565b610cae8282611856565b7f00000000000000000000000000000000000000000000000000000000000000001561112357611107336000356001600160e01b031916611614565b6111235760405162461bcd60e51b81526004016109c690611cb6565b610d1433826117fc565b60006111376116dc565b600f5460000361115e5734600f819055600e8190556111579033906117fc565b5034919050565b600061117c61116c600f5490565b611174610c35565b3491906116be565b905034600e60008282546111909190611ced565b9250508190555080600f60008282546111a99190611ced565b9091555061098e905033346117fc565b336000908152600360205260408120805483919083906111da908490611ca3565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611dea833981519152906109829086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156112bb5760405163b700961360e01b81526001600160a01b0382169063b70096139061127290889088908890600401611d00565b602060405180830381865afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b39190611d2d565b915050610b6e565b6001600160e01b031983166000908152600a602052604090205460ff168061131457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561136d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016109c6565b60006001611379610bda565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611485573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906114bb5750876001600160a01b0316816001600160a01b0316145b6114f85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016109c6565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611577336000356001600160e01b031916611614565b6115935760405162461bcd60e51b81526004016109c690611c67565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610b6e611604600f5490565b61160c610c35565b8391906116be565b6007546000906001600160a01b0316801580159061169e575060405163b700961360e01b81526001600160a01b0382169063b70096139061165d90879030908890600401611d00565b602060405180830381865afa15801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e9190611d2d565b806116b657506006546001600160a01b038581169116145b949350505050565b60008260001904841183021582026116d557600080fd5b5091020490565b60006116e66117a7565b905080156117065780600e60008282546117009190611ced565b90915550505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161173f9190611d4a565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600c546000036117b95750600090565b60006117d76301e13380600d54426117d19190611ca3565b906118b8565b90506000610b6e6117f383600c546118cd90919063ffffffff16565b600e54906118cd565b806002600082825461180e9190611ced565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611dea83398151915291015b60405180910390a35050565b6001600160a01b0382166000908152600360205260408120805483929061187e908490611ca3565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611dea8339815191529060200161184a565b6000610b6e83670de0b6b3a7640000846116be565b6000610b6e8383670de0b6b3a76400006116be565b6001600160a01b0381168114610d1457600080fd5b60006020828403121561190957600080fd5b8135610b6e816118e2565b600060208083528351808285015260005b8181101561194157858101830151858201604001528201611925565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561197557600080fd5b8235611980816118e2565b946020939093013593505050565b80356001600160e01b0319811681146119a657600080fd5b919050565b6000602082840312156119bd57600080fd5b610b6e8261198e565b803560ff811681146119a657600080fd5b8015158114610d1457600080fd5b6000806000606084860312156119fa57600080fd5b611a03846119c6565b9250611a116020850161198e565b91506040840135611a21816119d7565b809150509250925092565b600060208284031215611a3e57600080fd5b5035919050565b600080600060608486031215611a5a57600080fd5b8335611a65816118e2565b92506020840135611a75816118e2565b929592945050506040919091013590565b60008060408385031215611a9957600080fd5b611aa28361198e565b91506020830135611ab2816119d7565b809150509250929050565b600080600060608486031215611ad257600080fd5b8335611add816118e2565b9250611a11602085016119c6565b60008060408385031215611afe57600080fd5b8235611b09816118e2565b91506020830135611ab2816118e2565b600080600060608486031215611b2e57600080fd5b8335611b39816118e2565b92506020840135611b49816118e2565b9150611b576040850161198e565b90509250925092565b600080600080600080600060e0888a031215611b7b57600080fd5b8735611b86816118e2565b96506020880135611b96816118e2565b95506040880135945060608801359350611bb2608089016119c6565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611be157600080fd5b611bea836119c6565b9150611bf86020840161198e565b90509250929050565b60008060408385031215611c1457600080fd5b8235611c1f816118e2565b9150611bf8602084016119c6565b600181811c90821680611c4157607f821691505b602082108103611c6157634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561098e5761098e611c8d565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b8082018082111561098e5761098e611c8d565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611d3f57600080fd5b8151610b6e816119d7565b600080835481600182811c915080831680611d6657607f831692505b60208084108203611d8557634e487b7160e01b86526022600452602486fd5b818015611d995760018114611dae57611ddb565b60ff1986168952841515850289019650611ddb565b60008a81526020902060005b86811015611dd35781548b820152908501908301611dba565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212204a2aac7d17e54722c4695294b6c034d0d22eb3541eefb7d55bfcafa0d2d395df64736f6c63430008140033",
        "sourceMap": "909:4215:91:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1622:47:123;;;;;;;;;;-1:-1:-1;1622:47:123;;;;;:::i;:::-;;;;;;;;;;;;;;;;;548:25:182;;;536:2;521:18;1622:47:123;;;;;;;;1031:18:124;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;2461:211::-;;;;;;;;;;-1:-1:-1;2461:211:124;;;;;:::i;:::-;;:::i;:::-;;;1622:14:182;;1615:22;1597:41;;1585:2;1570:18;2461:211:124;1457:187:182;1676:49:123;;;;;;;;;;-1:-1:-1;1676:49:123;;;;;:::i;:::-;;;;;;;;;;;;;;;;4390:396;;;;;;;;;;-1:-1:-1;4390:396:123;;;;;:::i;:::-;;:::i;:::-;;1304:26:124;;;;;;;;;;;;;;;;3362:182:91;;;;;;;;;;-1:-1:-1;3362:182:91;;;;;:::i;:::-;;:::i;3057:592:124:-;;;;;;;;;;-1:-1:-1;3057:592:124;;;;;:::i;:::-;;:::i;1083:31::-;;;;;;;;;;;;;;;;;;3688:4:182;3676:17;;;3658:36;;3646:2;3631:18;1083:31:124;3516:184:182;4307:122:91;;;;;;;;;;-1:-1:-1;4307:122:91;;;;;:::i;:::-;;:::i;5327:177:124:-;;;;;;;;;;;;;:::i;3847:125:91:-;;;;;;;;;;;;;:::i;1048:155:81:-;;;;;;;;;;-1:-1:-1;1048:155:81;;;;;:::i;:::-;;:::i;1209:111::-;;;;;;;;;;-1:-1:-1;1209:111:81;;;;;:::i;:::-;;:::i;3756:85:91:-;;;;;;;;;;-1:-1:-1;3807:7:91;3756:85;;3448:210:123;;;;;;;;;;-1:-1:-1;3448:210:123;;;;;:::i;:::-;;:::i;4435:80:91:-;;;;;;;;;;-1:-1:-1;4503:5:91;;4435:80;;3853:337:123;;;;;;;;;;-1:-1:-1;3853:337:123;;;;;:::i;:::-;;:::i;2825:531:91:-;;;;;;;;;;-1:-1:-1;2825:531:91;;;;;:::i;:::-;;:::i;1337:44:124:-;;;;;;;;;;-1:-1:-1;1337:44:124;;;;;:::i;:::-;;;;;;;;;;;;;;3006:241:123;;;;;;;;;;-1:-1:-1;3006:241:123;;;;;:::i;:::-;;:::i;3550:200:91:-;;;;;;;;;;-1:-1:-1;3550:200:91;;;;;:::i;:::-;;:::i;313:39:81:-;;;;;;;;;;;;;;;1523:434:122;;;;;;;;;;-1:-1:-1;1523:434:122;;;;;:::i;:::-;;:::i;1751:41:124:-;;;;;;;;;;-1:-1:-1;1751:41:124;;;;;:::i;:::-;;;;;;;;;;;;;;562:20:122;;;;;;;;;;-1:-1:-1;562:20:122;;;;-1:-1:-1;;;;;562:20:122;;;;;;-1:-1:-1;;;;;5327:32:182;;;5309:51;;5297:2;5282:18;562:20:122;5163:203:182;2330:489:91;;;;;;;;;;-1:-1:-1;2330:489:91;;;;;:::i;:::-;;:::i;1056:20:124:-;;;;;;;;;;;;;:::i;1326:155:81:-;;;;;;;;;;-1:-1:-1;1326:155:81;;;;;:::i;:::-;;:::i;931:111::-;;;;;;;;;;-1:-1:-1;931:111:81;;;;;:::i;:::-;;:::i;1545:779:91:-;;;;;;:::i;:::-;;:::i;2678:373:124:-;;;;;;;;;;-1:-1:-1;2678:373:124;;;;;:::i;:::-;;:::i;2336:465:123:-;;;;;;;;;;-1:-1:-1;2336:465:123;;;;;:::i;:::-;;:::i;589:26:122:-;;;;;;;;;;-1:-1:-1;589:26:122;;;;-1:-1:-1;;;;;589:26:122;;;1369:61:123;;;;;;;;;;-1:-1:-1;1369:61:123;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:123;;;3978:91:91;;;;;;;;;;-1:-1:-1;4051:11:91;;3978:91;;3838:1483:124;;;;;;;;;;-1:-1:-1;3838:1483:124;;;;;:::i;:::-;;:::i;1388:64::-;;;;;;;;;;-1:-1:-1;1388:64:124;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1958:186:123;;;;;;;;;;-1:-1:-1;1958:186:123;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:123;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;;;;;-1:-1:-1;1795:157:123;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:123;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;;;;;-1:-1:-1;1732:56:123;;;;;:::i;:::-;;;;;;;;;;;;;;1963:164:122;;;;;;;;;;-1:-1:-1;1963:164:122;;;;;:::i;:::-;;:::i;4075:208:91:-;;;;;;;;;;-1:-1:-1;4075:208:91;;;;;:::i;:::-;;:::i;1031:18:124:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2461:211::-;2561:10;2535:4;2551:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2551:30:124;;;;;;;;;;:39;;;2606:37;2535:4;;2551:30;;2606:37;;;;2584:6;548:25:182;;536:2;521:18;;402:177;2606:37:124;;;;;;;;-1:-1:-1;2661:4:124;2461:211;;;;;:::o;4390:396:123:-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;;;;;;;;;4535:7:123::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:123;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:123;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:123::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1622:14:182::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;4730:49:123::1;;;;;;;;4390:396:::0;;;:::o;3362:182:91:-;3449:7;3475:62;3497:16;4051:11;;;3978:91;3497:16;3515:21;:19;:21::i;:::-;3475:10;;:62;:21;:62::i;3057:592:124:-;-1:-1:-1;;;;;3209:15:124;;3175:4;3209:15;;;:9;:15;;;;;;;;3225:10;3209:27;;;;;;;;-1:-1:-1;;3287:28:124;;3283:80;;3347:16;3357:6;3347:7;:16;:::i;:::-;-1:-1:-1;;;;;3317:15:124;;;;;;:9;:15;;;;;;;;3333:10;3317:27;;;;;;;:46;3283:80;-1:-1:-1;;;;;3374:15:124;;;;;;:9;:15;;;;;:25;;3393:6;;3374:15;:25;;3393:6;;3374:25;:::i;:::-;;;;-1:-1:-1;;;;;;;3545:13:124;;;;;;;:9;:13;;;;;;;:23;;;;;;3594:26;3545:13;;3594:26;;;-1:-1:-1;;;;;;;;;;;3594:26:124;;;3562:6;548:25:182;;536:2;521:18;;402:177;3594:26:124;;;;;;;;3638:4;3631:11;;;3057:592;;;;;;:::o;4307:122:91:-;743:17:81;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:81;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:81;;;;;;;:::i;:::-;4389:9:91::1;:7;:9::i;:::-;4408:5;:14:::0;4307:122::o;5327:177:124:-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;:::-;5403:94;;5327:177;:::o;5410:87::-;-1:-1:-1;5446:24:124;;5327:177::o;3847:125:91:-;3899:7;3944:21;:19;:21::i;:::-;3925:16;;:40;;;;:::i;1048:155:81:-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:81;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:81;;;;;;;:::i;:::-;1170:26:::1;1176:11;1189:6;1170:5;:26::i;:::-;1048:155:::0;;:::o;1209:111::-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:81;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:81;;;;;;;:::i;:::-;1288:25:::1;1294:10;1306:6;1288:5;:25::i;:::-;1209:111:::0;:::o;3448:210:123:-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:123;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:123::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1597:41:182;;;3606:45:123::1;::::0;1570:18:182;3606:45:123::1;;;;;;;3448:210:::0;;:::o;3853:337::-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;3986:7:123::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:123;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:123;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:123::1;;4175:7;4147:36;;;;1622:14:182::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;2825:531:91;2961:7;3008:9;:7;:9::i;:::-;3098:19;3120:99;3158:21;:19;:21::i;:::-;4051:11;;3120:13;;:99;:24;:99::i;:::-;3098:121;;3274:46;3287:7;3296:10;3308:11;3274:12;:46::i;:::-;-1:-1:-1;3338:11:91;2825:531;-1:-1:-1;;;;2825:531:91:o;3006:241:123:-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:123;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:123::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;3550:200:91:-;3640:7;3678:65;3703:21;:19;:21::i;:::-;4051:11;;3726:16;3978:91;1523:434:122;1794:5;;-1:-1:-1;;;;;1794:5:122;1780:10;:19;;:76;;-1:-1:-1;1803:9:122;;:53;;-1:-1:-1;;;1803:53:122;;-1:-1:-1;;;;;1803:9:122;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:122;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:122;-1:-1:-1;;;;;1868:24:122;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:122;1523:434;:::o;2330:489:91:-;2437:7;2484:9;:7;:9::i;:::-;2574:19;2596:99;2634:21;:19;:21::i;2596:99::-;2574:121;;2750:33;2759:10;2771:11;2750:8;:33::i;:::-;-1:-1:-1;2801:11:91;2330:489;-1:-1:-1;;;2330:489:91:o;1056:20:124:-;;;;;;;:::i;1326:155:81:-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:81;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:81;;;;;;;:::i;:::-;1448:26:::1;1454:11;1467:6;1448:5;:26::i;931:111::-:0;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:81;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:81;;;;;;;:::i;:::-;1010:25:::1;1016:10;1028:6;1010:5;:25::i;1545:779:91:-:0;1596:7;1643:9;:7;:9::i;:::-;4051:11;;1745:1;1725:21;1721:189;;1776:9;1762:11;:23;;;1799:16;:28;;;1841;;1847:10;;1841:5;:28::i;:::-;-1:-1:-1;1890:9:91;;1545:779;-1:-1:-1;1545:779:91:o;1721:189::-;1991:14;2008:95;2042:16;4051:11;;;3978:91;2042:16;2072:21;:19;:21::i;:::-;2008:9;;:95;:20;:95::i;:::-;1991:112;;2168:9;2148:16;;:29;;;;;;;:::i;:::-;;;;;;;;2202:6;2187:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;2265:28:91;;-1:-1:-1;2271:10:91;2283:9;2265:5;:28::i;2678:373:124:-;2774:10;2748:4;2764:21;;;:9;:21;;;;;:31;;2789:6;;2764:21;2748:4;;2764:31;;2789:6;;2764:31;:::i;:::-;;;;-1:-1:-1;;;;;;;2941:13:124;;;;;;:9;:13;;;;;;;:23;;;;;;2990:32;2999:10;;-1:-1:-1;;;;;;;;;;;2990:32:124;;;2958:6;548:25:182;;536:2;521:18;;402:177;2336:465:123;-1:-1:-1;;;;;2515:32:123;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:123;;-1:-1:-1;;;;;2609:23:123;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:123;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:123;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:123;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;2336:465;-1:-1:-1;;;;;2336:465:123:o;3838:1483:124:-;4057:15;4045:8;:27;;4037:63;;;;-1:-1:-1;;;4037:63:124;;10112:2:182;4037:63:124;;;10094:21:182;10151:2;10131:18;;;10124:30;10190:25;10170:18;;;10163:53;10233:18;;4037:63:124;9910:347:182;4037:63:124;4265:24;4292:805;4428:18;:16;:18::i;:::-;-1:-1:-1;;;;;4873:13:124;;;;;;;:6;:13;;;;;;;;;:15;;;;;;;;4511:449;;4555:165;4511:449;;;10549:25:182;10628:18;;;10621:43;;;;10700:15;;;10680:18;;;10673:43;10732:18;;;10725:34;;;10775:19;;;10768:35;;;;10819:19;;;;10812:35;;;4511:449:124;;;;;;;;;;10521:19:182;;;4511:449:124;;;4472:514;;;;;;;;-1:-1:-1;;;4350:658:124;;;11116:27:182;11159:11;;;11152:27;;;;11195:12;;;11188:28;;;;11232:12;;4350:658:124;;;-1:-1:-1;;4350:658:124;;;;;;;;;4319:707;;4350:658;4319:707;;;;4292:805;;;;;;;;;11482:25:182;11555:4;11543:17;;11523:18;;;11516:45;11577:18;;;11570:34;;;11620:18;;;11613:34;;;11454:19;;4292:805:124;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4292:805:124;;-1:-1:-1;;4292:805:124;;;-1:-1:-1;;;;;;;5120:30:124;;;;;;:59;;;5174:5;-1:-1:-1;;;;;5154:25:124;:16;-1:-1:-1;;;;;5154:25:124;;5120:59;5112:86;;;;-1:-1:-1;;;5112:86:124;;11860:2:182;5112:86:124;;;11842:21:182;11899:2;11879:18;;;11872:30;-1:-1:-1;;;11918:18:182;;;11911:44;11972:18;;5112:86:124;11658:338:182;5112:86:124;-1:-1:-1;;;;;5213:27:124;;;;;;;:9;:27;;;;;;;;:36;;;;;;;;;;;;;:44;;;5283:31;548:25:182;;;5213:36:124;;5283:31;;;;;521:18:182;5283:31:124;;;;;;;3838:1483;;;;;;;:::o;1963:164:122:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:122::1;-1:-1:-1::0;;;;;2046:16:122;::::1;::::0;;::::1;::::0;;;2078:42:::1;::::0;2099:10:::1;::::0;2078:42:::1;::::0;-1:-1:-1;;2078:42:122::1;1963:164:::0;:::o;4075:208:91:-;-1:-1:-1;;;;;4176:19:91;;4134:7;4176:19;;;:9;:19;;;;;;4212:64;4236:16;4051:11;;;3978:91;4236:16;4254:21;:19;:21::i;:::-;4212:12;;:64;:23;:64::i;977:540:122:-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:122;1415:27;;;;;:77;;-1:-1:-1;1446:46:122;;-1:-1:-1;;;1446:46:122;;-1:-1:-1;;;;;1446:12:122;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:122;;-1:-1:-1;;;;;1497:13:122;;;1505:5;;1497:13;1414:96;1407:103;977:540;-1:-1:-1;;;;977:540:122:o;898:556:74:-;1014:9;1279:1;-1:-1:-1;;1262:19:74;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:74;;1411:27;;898:556::o;4521:205:91:-;4559:16;4578:21;:19;:21::i;:::-;4559:40;-1:-1:-1;4613:12:91;;4609:71;;4661:8;4641:16;;:28;;;;;;;:::i;:::-;;;;-1:-1:-1;;4609:71:91;-1:-1:-1;4704:15:91;4689:12;:30;4521:205::o;5510:446:124:-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;13527:25:182;;;;13568:18;;13561:34;;;;5833:14:124;13611:18:182;;;13604:34;5869:13:124;13654:18:182;;;13647:34;5912:4:124;13697:19:182;;;13690:61;13499:19;;5640:295:124;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;4732:390:91:-;4786:7;4809:5;;4818:1;4809:10;4805:49;;-1:-1:-1;4842:1:91;;4732:390::o;4805:49::-;4917:19;4939:72;4993:8;4958:12;;4940:15;:30;;;;:::i;:::-;4939:40;;:72::i;:::-;4917:94;;5021:15;5039:52;5064:26;5078:11;5064:5;;:13;;:26;;;;:::i;:::-;5039:16;;;:24;:52::i;6150:325:124:-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;6387:13:124;;;;;;:9;:13;;;;;;;;:23;;;;;;6436:32;548:25:182;;;-1:-1:-1;;;;;;;;;;;6436:32:124;521:18:182;6436:32:124;;;;;;;;6150:325;;:::o;6481:328::-;-1:-1:-1;;;;;6553:15:124;;;;;;:9;:15;;;;;:25;;6572:6;;6553:15;:25;;6572:6;;6553:25;:::i;:::-;;;;-1:-1:-1;;6721:11:124;:21;;;;;;;6768:34;;548:25:182;;;-1:-1:-1;;;;;;;6768:34:124;;;-1:-1:-1;;;;;;;;;;;6768:34:124;536:2:182;521:18;6768:34:124;402:177:182;1884:164:74;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;1610:118::-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;14:131:182:-;-1:-1:-1;;;;;89:31:182;;79:42;;69:70;;135:1;132;125:12;150:247;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;584:548::-;696:4;725:2;754;743:9;736:21;786:6;780:13;829:6;824:2;813:9;809:18;802:34;854:1;864:140;878:6;875:1;872:13;864:140;;;973:14;;;969:23;;963:30;939:17;;;958:2;935:26;928:66;893:10;;864:140;;;868:3;1053:1;1048:2;1039:6;1028:9;1024:22;1020:31;1013:42;1123:2;1116;1112:7;1107:2;1099:6;1095:15;1091:29;1080:9;1076:45;1072:54;1064:62;;;;584:548;;;;:::o;1137:315::-;1205:6;1213;1266:2;1254:9;1245:7;1241:23;1237:32;1234:52;;;1282:1;1279;1272:12;1234:52;1321:9;1308:23;1340:31;1365:5;1340:31;:::i;:::-;1390:5;1442:2;1427:18;;;;1414:32;;-1:-1:-1;;;1137:315:182:o;1649:173::-;1716:20;;-1:-1:-1;;;;;;1765:32:182;;1755:43;;1745:71;;1812:1;1809;1802:12;1745:71;1649:173;;;:::o;1827:184::-;1885:6;1938:2;1926:9;1917:7;1913:23;1909:32;1906:52;;;1954:1;1951;1944:12;1906:52;1977:28;1995:9;1977:28;:::i;2016:156::-;2082:20;;2142:4;2131:16;;2121:27;;2111:55;;2162:1;2159;2152:12;2177:118;2263:5;2256:13;2249:21;2242:5;2239:32;2229:60;;2285:1;2282;2275:12;2300:383;2371:6;2379;2387;2440:2;2428:9;2419:7;2415:23;2411:32;2408:52;;;2456:1;2453;2446:12;2408:52;2479:27;2496:9;2479:27;:::i;:::-;2469:37;;2525;2558:2;2547:9;2543:18;2525:37;:::i;:::-;2515:47;;2612:2;2601:9;2597:18;2584:32;2625:28;2647:5;2625:28;:::i;:::-;2672:5;2662:15;;;2300:383;;;;;:::o;2870:180::-;2929:6;2982:2;2970:9;2961:7;2957:23;2953:32;2950:52;;;2998:1;2995;2988:12;2950:52;-1:-1:-1;3021:23:182;;2870:180;-1:-1:-1;2870:180:182:o;3055:456::-;3132:6;3140;3148;3201:2;3189:9;3180:7;3176:23;3172:32;3169:52;;;3217:1;3214;3207:12;3169:52;3256:9;3243:23;3275:31;3300:5;3275:31;:::i;:::-;3325:5;-1:-1:-1;3382:2:182;3367:18;;3354:32;3395:33;3354:32;3395:33;:::i;:::-;3055:456;;3447:7;;-1:-1:-1;;;3501:2:182;3486:18;;;;3473:32;;3055:456::o;3705:313::-;3769:6;3777;3830:2;3818:9;3809:7;3805:23;3801:32;3798:52;;;3846:1;3843;3836:12;3798:52;3869:28;3887:9;3869:28;:::i;:::-;3859:38;;3947:2;3936:9;3932:18;3919:32;3960:28;3982:5;3960:28;:::i;:::-;4007:5;3997:15;;;3705:313;;;;;:::o;4023:452::-;4095:6;4103;4111;4164:2;4152:9;4143:7;4139:23;4135:32;4132:52;;;4180:1;4177;4170:12;4132:52;4219:9;4206:23;4238:31;4263:5;4238:31;:::i;:::-;4288:5;-1:-1:-1;4312:36:182;4344:2;4329:18;;4312:36;:::i;4480:407::-;4567:6;4575;4628:2;4616:9;4607:7;4603:23;4599:32;4596:52;;;4644:1;4641;4634:12;4596:52;4683:9;4670:23;4702:31;4727:5;4702:31;:::i;:::-;4752:5;-1:-1:-1;4809:2:182;4794:18;;4781:32;4822:33;4781:32;4822:33;:::i;5371:460::-;5447:6;5455;5463;5516:2;5504:9;5495:7;5491:23;5487:32;5484:52;;;5532:1;5529;5522:12;5484:52;5571:9;5558:23;5590:31;5615:5;5590:31;:::i;:::-;5640:5;-1:-1:-1;5697:2:182;5682:18;;5669:32;5710:33;5669:32;5710:33;:::i;:::-;5762:7;-1:-1:-1;5788:37:182;5821:2;5806:18;;5788:37;:::i;:::-;5778:47;;5371:460;;;;;:::o;6063:734::-;6174:6;6182;6190;6198;6206;6214;6222;6275:3;6263:9;6254:7;6250:23;6246:33;6243:53;;;6292:1;6289;6282:12;6243:53;6331:9;6318:23;6350:31;6375:5;6350:31;:::i;:::-;6400:5;-1:-1:-1;6457:2:182;6442:18;;6429:32;6470:33;6429:32;6470:33;:::i;:::-;6522:7;-1:-1:-1;6576:2:182;6561:18;;6548:32;;-1:-1:-1;6627:2:182;6612:18;;6599:32;;-1:-1:-1;6650:37:182;6682:3;6667:19;;6650:37;:::i;:::-;6640:47;;6734:3;6723:9;6719:19;6706:33;6696:43;;6786:3;6775:9;6771:19;6758:33;6748:43;;6063:734;;;;;;;;;;:::o;7195:254::-;7260:6;7268;7321:2;7309:9;7300:7;7296:23;7292:32;7289:52;;;7337:1;7334;7327:12;7289:52;7360:27;7377:9;7360:27;:::i;:::-;7350:37;;7406;7439:2;7428:9;7424:18;7406:37;:::i;:::-;7396:47;;7195:254;;;;;:::o;7454:317::-;7520:6;7528;7581:2;7569:9;7560:7;7556:23;7552:32;7549:52;;;7597:1;7594;7587:12;7549:52;7636:9;7623:23;7655:31;7680:5;7655:31;:::i;:::-;7705:5;-1:-1:-1;7729:36:182;7761:2;7746:18;;7729:36;:::i;7776:380::-;7855:1;7851:12;;;;7898;;;7919:61;;7973:4;7965:6;7961:17;7951:27;;7919:61;8026:2;8018:6;8015:14;7995:18;7992:38;7989:161;;8072:10;8067:3;8063:20;8060:1;8053:31;8107:4;8104:1;8097:15;8135:4;8132:1;8125:15;7989:161;;7776:380;;;:::o;8161:336::-;8363:2;8345:21;;;8402:2;8382:18;;;8375:30;-1:-1:-1;;;8436:2:182;8421:18;;8414:42;8488:2;8473:18;;8161:336::o;8502:127::-;8563:10;8558:3;8554:20;8551:1;8544:31;8594:4;8591:1;8584:15;8618:4;8615:1;8608:15;8634:128;8701:9;;;8722:11;;;8719:37;;;8736:18;;:::i;8767:353::-;8969:2;8951:21;;;9008:2;8988:18;;;8981:30;9047:31;9042:2;9027:18;;9020:59;9111:2;9096:18;;8767:353::o;9125:125::-;9190:9;;;9211:10;;;9208:36;;;9224:18;;:::i;9255:400::-;-1:-1:-1;;;;;9511:15:182;;;9493:34;;9563:15;;;;9558:2;9543:18;;9536:43;-1:-1:-1;;;;;;9615:33:182;;;9610:2;9595:18;;9588:61;9443:2;9428:18;;9255:400::o;9660:245::-;9727:6;9780:2;9768:9;9759:7;9755:23;9751:32;9748:52;;;9796:1;9793;9786:12;9748:52;9828:9;9822:16;9847:28;9869:5;9847:28;:::i;12130:1133::-;12260:3;12289:1;12322:6;12316:13;12352:3;12374:1;12402:9;12398:2;12394:18;12384:28;;12462:2;12451:9;12447:18;12484;12474:61;;12528:4;12520:6;12516:17;12506:27;;12474:61;12554:2;12602;12594:6;12591:14;12571:18;12568:38;12565:165;;-1:-1:-1;;;12629:33:182;;12685:4;12682:1;12675:15;12715:4;12636:3;12703:17;12565:165;12746:18;12773:133;;;;12920:1;12915:323;;;;12739:499;;12773:133;-1:-1:-1;;12806:24:182;;12794:37;;12879:14;;12872:22;12860:35;;12851:45;;;-1:-1:-1;12773:133:182;;12915:323;12077:1;12070:14;;;12114:4;12101:18;;13013:1;13027:165;13041:6;13038:1;13035:13;13027:165;;;13119:14;;13106:11;;;13099:35;13162:16;;;;13056:10;;13027:165;;;13031:3;;13221:6;13216:3;13212:16;13205:23;;12739:499;-1:-1:-1;13254:3:182;;12130:1133;-1:-1:-1;;;;;;;;12130:1133:182:o",
        "linkReferences": {},
        "immutableReferences": {
            "19130": [
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
            "67560": [
                {
                    "start": 941,
                    "length": 32
                }
            ],
            "67574": [
                {
                    "start": 3038,
                    "length": 32
                }
            ],
            "67576": [
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_initialRate\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_isCompetitionMode\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBufferedEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"getPooledEthByShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ethAmount\",\"type\":\"uint256\"}],\"name\":\"getSharesByPooledEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalPooledEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isCompetitionMode\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rate_\",\"type\":\"uint256\"}],\"name\":\"setRate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"sharesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"submit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferSharesFrom\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"MockLido\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"setRate(uint256)\":{\"notice\":\"Mock ///\"},\"submit(address)\":{\"notice\":\"Overrides ///\"}},\"notice\":\"This mock yield source will accrue interest at a specified rate         Every stateful interaction will accrue interest, so the interest         accrual will approximate continuous compounding as the contract         is called more frequently.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockLido.sol\":\"MockLido\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x5942f8acaa122bd9f40cc0c6c4a5d489de3537efef6f7e744a89dae8a616ecc9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://629e5370ec6464f25f476b20635d67b06919f37aac7b8decba0756ab3ccbc8e3\",\"dweb:/ipfs/QmdZi8CygBNpvd1oX2GMReYRffbYirNJqnnEGxTkHoWqrw\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockLido.sol\":{\"keccak256\":\"0x085e82f9e03f2ab93ae5e3755b96f58ef88974d51bfb84ae5fbce57985abf5fd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4eeabb681db8fe6a7600cce991e0a86015fcfaee4723ffbc4ef54acc8400708d\",\"dweb:/ipfs/QmYMqssiuPGrvGtjvx4c91zzH6Ffte9i2X9D3nvvrnoEhr\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}",
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
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/ILido.sol": {
                "keccak256": "0x5942f8acaa122bd9f40cc0c6c4a5d489de3537efef6f7e744a89dae8a616ecc9",
                "urls": [
                    "bzz-raw://629e5370ec6464f25f476b20635d67b06919f37aac7b8decba0756ab3ccbc8e3",
                    "dweb:/ipfs/QmdZi8CygBNpvd1oX2GMReYRffbYirNJqnnEGxTkHoWqrw"
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
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
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
                "keccak256": "0x085e82f9e03f2ab93ae5e3755b96f58ef88974d51bfb84ae5fbce57985abf5fd",
                "urls": [
                    "bzz-raw://4eeabb681db8fe6a7600cce991e0a86015fcfaee4723ffbc4ef54acc8400708d",
                    "dweb:/ipfs/QmYMqssiuPGrvGtjvx4c91zzH6Ffte9i2X9D3nvvrnoEhr"
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
        "id": 21994,
        "exportedSymbols": {
            "Authority": [
                67230
            ],
            "ERC20Mintable": [
                19241
            ],
            "FixedPointMath": [
                14917
            ],
            "ILido": [
                8479
            ],
            "MockLido": [
                21993
            ],
            "MultiRolesAuthority": [
                67535
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:5086:91",
        "nodes": [
            {
                "id": 21646,
                "nodeType": "PragmaDirective",
                "src": "39:23:91",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 21648,
                "nodeType": "ImportDirective",
                "src": "64:50:91",
                "nodes": [],
                "absolutePath": "lib/solmate/src/auth/Auth.sol",
                "file": "solmate/auth/Auth.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 21994,
                "sourceUnit": 67231,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 21647,
                            "name": "Authority",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67230,
                            "src": "73:9:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 21650,
                "nodeType": "ImportDirective",
                "src": "115:87:91",
                "nodes": [],
                "absolutePath": "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol",
                "file": "solmate/auth/authorities/MultiRolesAuthority.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 21994,
                "sourceUnit": 67536,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 21649,
                            "name": "MultiRolesAuthority",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67535,
                            "src": "124:19:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 21652,
                "nodeType": "ImportDirective",
                "src": "203:52:91",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/ILido.sol",
                "file": "../src/interfaces/ILido.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 21994,
                "sourceUnit": 8480,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 21651,
                            "name": "ILido",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8479,
                            "src": "212:5:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 21654,
                "nodeType": "ImportDirective",
                "src": "256:69:91",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../src/libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 21994,
                "sourceUnit": 14918,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 21653,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14917,
                            "src": "265:14:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 21656,
                "nodeType": "ImportDirective",
                "src": "326:52:91",
                "nodes": [],
                "absolutePath": "contracts/test/ERC20Mintable.sol",
                "file": "./ERC20Mintable.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 21994,
                "sourceUnit": 19242,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 21655,
                            "name": "ERC20Mintable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19241,
                            "src": "335:13:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 21993,
                "nodeType": "ContractDefinition",
                "src": "909:4215:91",
                "nodes": [
                    {
                        "id": 21664,
                        "nodeType": "UsingForDirective",
                        "src": "971:33:91",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 21662,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "977:14:91"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14917,
                            "src": "977:14:91"
                        },
                        "typeName": {
                            "id": 21663,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "996:7:91",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 21666,
                        "nodeType": "VariableDeclaration",
                        "src": "1032:22:91",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_rate",
                        "nameLocation": "1049:5:91",
                        "scope": 21993,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 21665,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1032:7:91",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 21668,
                        "nodeType": "VariableDeclaration",
                        "src": "1060:29:91",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_lastUpdated",
                        "nameLocation": "1077:12:91",
                        "scope": 21993,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 21667,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1060:7:91",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 21670,
                        "nodeType": "VariableDeclaration",
                        "src": "1114:24:91",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "totalPooledEther",
                        "nameLocation": "1122:16:91",
                        "scope": 21993,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 21669,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1114:7:91",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 21672,
                        "nodeType": "VariableDeclaration",
                        "src": "1144:19:91",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "totalShares",
                        "nameLocation": "1152:11:91",
                        "scope": 21993,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 21671,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1144:7:91",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 21698,
                        "nodeType": "FunctionDefinition",
                        "src": "1170:346:91",
                        "nodes": [],
                        "body": {
                            "id": 21697,
                            "nodeType": "Block",
                            "src": "1439:77:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 21690,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21688,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21666,
                                            "src": "1449:5:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 21689,
                                            "name": "_initialRate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21674,
                                            "src": "1457:12:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1449:20:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 21691,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1449:20:91"
                                },
                                {
                                    "expression": {
                                        "id": 21695,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21692,
                                            "name": "_lastUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21668,
                                            "src": "1479:12:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 21693,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "1494:5:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 21694,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1500:9:91",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "1494:15:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1479:30:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 21696,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1479:30:91"
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
                                        "id": 21681,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1310:25:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_d0475442dbe1381d44afad818dc97da0a5b374312c7fe323cc2a3df88293e4ba",
                                            "typeString": "literal_string \"Liquid staked Ether 2.0\""
                                        },
                                        "value": "Liquid staked Ether 2.0"
                                    },
                                    {
                                        "hexValue": "7374455448",
                                        "id": 21682,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1349:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_5318b5909b20227fb38f47aa955f9f06527b0ae497ac2d344a4aacb624e26485",
                                            "typeString": "literal_string \"stETH\""
                                        },
                                        "value": "stETH"
                                    },
                                    {
                                        "hexValue": "3138",
                                        "id": 21683,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1370:2:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_18_by_1",
                                            "typeString": "int_const 18"
                                        },
                                        "value": "18"
                                    },
                                    {
                                        "id": 21684,
                                        "name": "_admin",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21676,
                                        "src": "1386:6:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "id": 21685,
                                        "name": "_isCompetitionMode",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21678,
                                        "src": "1406:18:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    }
                                ],
                                "id": 21686,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 21680,
                                    "name": "ERC20Mintable",
                                    "nameLocations": [
                                        "1283:13:91"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 19241,
                                    "src": "1283:13:91"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1283:151:91"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 21679,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21674,
                                    "mutability": "mutable",
                                    "name": "_initialRate",
                                    "nameLocation": "1199:12:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21698,
                                    "src": "1191:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21673,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1191:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 21676,
                                    "mutability": "mutable",
                                    "name": "_admin",
                                    "nameLocation": "1229:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21698,
                                    "src": "1221:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 21675,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1221:7:91",
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
                                    "id": 21678,
                                    "mutability": "mutable",
                                    "name": "_isCompetitionMode",
                                    "nameLocation": "1250:18:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21698,
                                    "src": "1245:23:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 21677,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1245:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1181:93:91"
                        },
                        "returnParameters": {
                            "id": 21687,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1439:0:91"
                        },
                        "scope": 21993,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 21765,
                        "nodeType": "FunctionDefinition",
                        "src": "1545:779:91",
                        "nodes": [],
                        "body": {
                            "id": 21764,
                            "nodeType": "Block",
                            "src": "1605:719:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 21706,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21956,
                                            "src": "1643:7:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 21707,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1643:9:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 21708,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1643:9:91"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 21712,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 21709,
                                                "name": "getTotalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21887,
                                                "src": "1725:14:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view returns (uint256)"
                                                }
                                            },
                                            "id": 21710,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1725:16:91",
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
                                            "id": 21711,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1745:1:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "1725:21:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 21734,
                                    "nodeType": "IfStatement",
                                    "src": "1721:189:91",
                                    "trueBody": {
                                        "id": 21733,
                                        "nodeType": "Block",
                                        "src": "1748:162:91",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 21716,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 21713,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 21672,
                                                        "src": "1762:11:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "id": 21714,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1776:3:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 21715,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1780:5:91",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1776:9:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1762:23:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 21717,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1762:23:91"
                                            },
                                            {
                                                "expression": {
                                                    "id": 21721,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 21718,
                                                        "name": "totalPooledEther",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 21670,
                                                        "src": "1799:16:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "id": 21719,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1818:3:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 21720,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1822:5:91",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1818:9:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1799:28:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 21722,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1799:28:91"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "id": 21724,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1847:3:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 21725,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1851:6:91",
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1847:10:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 21726,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1859:3:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 21727,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1863:5:91",
                                                            "memberName": "value",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1859:9:91",
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
                                                        "id": 21723,
                                                        "name": "_mint",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67894,
                                                        "src": "1841:5:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                            "typeString": "function (address,uint256)"
                                                        }
                                                    },
                                                    "id": 21728,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1841:28:91",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 21729,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1841:28:91"
                                            },
                                            {
                                                "expression": {
                                                    "expression": {
                                                        "id": 21730,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "1890:3:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 21731,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1894:5:91",
                                                    "memberName": "value",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1890:9:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 21705,
                                                "id": 21732,
                                                "nodeType": "Return",
                                                "src": "1883:16:91"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        21736
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 21736,
                                            "mutability": "mutable",
                                            "name": "shares",
                                            "nameLocation": "1999:6:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 21764,
                                            "src": "1991:14:91",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 21735,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1991:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 21745,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 21740,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21887,
                                                    "src": "2042:14:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21741,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2042:16:91",
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
                                                    "id": 21742,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21879,
                                                    "src": "2072:19:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21743,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2072:21:91",
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
                                                    "id": 21737,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2008:3:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 21738,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2012:5:91",
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "src": "2008:9:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 21739,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2018:10:91",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14179,
                                            "src": "2008:20:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21744,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2008:95:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1991:112:91"
                                },
                                {
                                    "expression": {
                                        "id": 21749,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21746,
                                            "name": "totalPooledEther",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21670,
                                            "src": "2148:16:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 21747,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "2168:3:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 21748,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2172:5:91",
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "src": "2168:9:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2148:29:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 21750,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2148:29:91"
                                },
                                {
                                    "expression": {
                                        "id": 21753,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21751,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21672,
                                            "src": "2187:11:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "id": 21752,
                                            "name": "shares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21736,
                                            "src": "2202:6:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2187:21:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 21754,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2187:21:91"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 21756,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2271:3:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 21757,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2275:6:91",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2271:10:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 21758,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2283:3:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 21759,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2287:5:91",
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "src": "2283:9:91",
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
                                            "id": 21755,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67894,
                                            "src": "2265:5:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 21760,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2265:28:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 21761,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2265:28:91"
                                },
                                {
                                    "expression": {
                                        "id": 21762,
                                        "name": "shares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21736,
                                        "src": "2311:6:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21705,
                                    "id": 21763,
                                    "nodeType": "Return",
                                    "src": "2304:13:91"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 21699,
                            "nodeType": "StructuredDocumentation",
                            "src": "1522:18:91",
                            "text": "Overrides ///"
                        },
                        "functionSelector": "a1903eab",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "submit",
                        "nameLocation": "1554:6:91",
                        "parameters": {
                            "id": 21702,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21701,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21765,
                                    "src": "1561:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 21700,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1561:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1560:9:91"
                        },
                        "returnParameters": {
                            "id": 21705,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21704,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21765,
                                    "src": "1596:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21703,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1596:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1595:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21795,
                        "nodeType": "FunctionDefinition",
                        "src": "2330:489:91",
                        "nodes": [],
                        "body": {
                            "id": 21794,
                            "nodeType": "Block",
                            "src": "2446:373:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 21774,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21956,
                                            "src": "2484:7:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 21775,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2484:9:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 21776,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2484:9:91"
                                },
                                {
                                    "assignments": [
                                        21778
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 21778,
                                            "mutability": "mutable",
                                            "name": "tokenAmount",
                                            "nameLocation": "2582:11:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 21794,
                                            "src": "2574:19:91",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 21777,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2574:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 21786,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 21781,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21879,
                                                    "src": "2634:19:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21782,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2634:21:91",
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
                                                    "id": 21783,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21887,
                                                    "src": "2669:14:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21784,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2669:16:91",
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
                                                "id": 21779,
                                                "name": "_sharesAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21769,
                                                "src": "2596:13:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 21780,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2610:10:91",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14179,
                                            "src": "2596:24:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21785,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2596:99:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2574:121:91"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 21788,
                                                "name": "_recipient",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21767,
                                                "src": "2759:10:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 21789,
                                                "name": "tokenAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21778,
                                                "src": "2771:11:91",
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
                                            "id": 21787,
                                            "name": "transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67673,
                                            "src": "2750:8:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,uint256) returns (bool)"
                                            }
                                        },
                                        "id": 21790,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2750:33:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 21791,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2750:33:91"
                                },
                                {
                                    "expression": {
                                        "id": 21792,
                                        "name": "tokenAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21778,
                                        "src": "2801:11:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21773,
                                    "id": 21793,
                                    "nodeType": "Return",
                                    "src": "2794:18:91"
                                }
                            ]
                        },
                        "functionSelector": "8fcb4e5b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferShares",
                        "nameLocation": "2339:14:91",
                        "parameters": {
                            "id": 21770,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21767,
                                    "mutability": "mutable",
                                    "name": "_recipient",
                                    "nameLocation": "2371:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21795,
                                    "src": "2363:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 21766,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2363:7:91",
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
                                    "id": 21769,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "2399:13:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21795,
                                    "src": "2391:21:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21768,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2391:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2353:65:91"
                        },
                        "returnParameters": {
                            "id": 21773,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21772,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21795,
                                    "src": "2437:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21771,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2437:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2436:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21828,
                        "nodeType": "FunctionDefinition",
                        "src": "2825:531:91",
                        "nodes": [],
                        "body": {
                            "id": 21827,
                            "nodeType": "Block",
                            "src": "2970:386:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 21806,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21956,
                                            "src": "3008:7:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 21807,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3008:9:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 21808,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3008:9:91"
                                },
                                {
                                    "assignments": [
                                        21810
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 21810,
                                            "mutability": "mutable",
                                            "name": "tokenAmount",
                                            "nameLocation": "3106:11:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 21827,
                                            "src": "3098:19:91",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 21809,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3098:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 21818,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 21813,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21879,
                                                    "src": "3158:19:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21814,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3158:21:91",
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
                                                    "id": 21815,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21887,
                                                    "src": "3193:14:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21816,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3193:16:91",
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
                                                "id": 21811,
                                                "name": "_sharesAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21801,
                                                "src": "3120:13:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 21812,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3134:10:91",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14179,
                                            "src": "3120:24:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21817,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3120:99:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3098:121:91"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 21820,
                                                "name": "_sender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21797,
                                                "src": "3287:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 21821,
                                                "name": "_recipient",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21799,
                                                "src": "3296:10:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 21822,
                                                "name": "tokenAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21810,
                                                "src": "3308:11:91",
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
                                            "id": 21819,
                                            "name": "transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67734,
                                            "src": "3274:12:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,address,uint256) returns (bool)"
                                            }
                                        },
                                        "id": 21823,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3274:46:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 21824,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3274:46:91"
                                },
                                {
                                    "expression": {
                                        "id": 21825,
                                        "name": "tokenAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21810,
                                        "src": "3338:11:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21805,
                                    "id": 21826,
                                    "nodeType": "Return",
                                    "src": "3331:18:91"
                                }
                            ]
                        },
                        "functionSelector": "6d780459",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferSharesFrom",
                        "nameLocation": "2834:18:91",
                        "parameters": {
                            "id": 21802,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21797,
                                    "mutability": "mutable",
                                    "name": "_sender",
                                    "nameLocation": "2870:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21828,
                                    "src": "2862:15:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 21796,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2862:7:91",
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
                                    "id": 21799,
                                    "mutability": "mutable",
                                    "name": "_recipient",
                                    "nameLocation": "2895:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21828,
                                    "src": "2887:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 21798,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2887:7:91",
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
                                    "id": 21801,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "2923:13:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21828,
                                    "src": "2915:21:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21800,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2915:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2852:90:91"
                        },
                        "returnParameters": {
                            "id": 21805,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21804,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21828,
                                    "src": "2961:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21803,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2961:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2960:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21844,
                        "nodeType": "FunctionDefinition",
                        "src": "3362:182:91",
                        "nodes": [],
                        "body": {
                            "id": 21843,
                            "nodeType": "Block",
                            "src": "3458:86:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 21837,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21887,
                                                    "src": "3497:14:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21838,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3497:16:91",
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
                                                    "id": 21839,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21879,
                                                    "src": "3515:19:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21840,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3515:21:91",
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
                                                "id": 21835,
                                                "name": "_ethAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21830,
                                                "src": "3475:10:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 21836,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3486:10:91",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14179,
                                            "src": "3475:21:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21841,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3475:62:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21834,
                                    "id": 21842,
                                    "nodeType": "Return",
                                    "src": "3468:69:91"
                                }
                            ]
                        },
                        "functionSelector": "19208451",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getSharesByPooledEth",
                        "nameLocation": "3371:20:91",
                        "parameters": {
                            "id": 21831,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21830,
                                    "mutability": "mutable",
                                    "name": "_ethAmount",
                                    "nameLocation": "3409:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21844,
                                    "src": "3401:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21829,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3401:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3391:34:91"
                        },
                        "returnParameters": {
                            "id": 21834,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21833,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21844,
                                    "src": "3449:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21832,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3449:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3448:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21860,
                        "nodeType": "FunctionDefinition",
                        "src": "3550:200:91",
                        "nodes": [],
                        "body": {
                            "id": 21859,
                            "nodeType": "Block",
                            "src": "3649:101:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 21853,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21879,
                                                    "src": "3703:19:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21854,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3703:21:91",
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
                                                    "id": 21855,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21887,
                                                    "src": "3726:14:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21856,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3726:16:91",
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
                                                "id": 21851,
                                                "name": "_sharesAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21846,
                                                "src": "3678:13:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 21852,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3692:10:91",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14179,
                                            "src": "3678:24:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21857,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3678:65:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21850,
                                    "id": 21858,
                                    "nodeType": "Return",
                                    "src": "3659:84:91"
                                }
                            ]
                        },
                        "functionSelector": "7a28fb88",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPooledEthByShares",
                        "nameLocation": "3559:20:91",
                        "parameters": {
                            "id": 21847,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21846,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "3597:13:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21860,
                                    "src": "3589:21:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21845,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3589:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3579:37:91"
                        },
                        "returnParameters": {
                            "id": 21850,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21849,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21860,
                                    "src": "3640:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21848,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3640:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3639:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21868,
                        "nodeType": "FunctionDefinition",
                        "src": "3756:85:91",
                        "nodes": [],
                        "body": {
                            "id": 21867,
                            "nodeType": "Block",
                            "src": "3816:25:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "hexValue": "30",
                                        "id": 21865,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3833:1:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "functionReturnParameters": 21864,
                                    "id": 21866,
                                    "nodeType": "Return",
                                    "src": "3826:8:91"
                                }
                            ]
                        },
                        "functionSelector": "47b714e0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBufferedEther",
                        "nameLocation": "3765:16:91",
                        "parameters": {
                            "id": 21861,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3781:2:91"
                        },
                        "returnParameters": {
                            "id": 21864,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21863,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21868,
                                    "src": "3807:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21862,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3807:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3806:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21879,
                        "nodeType": "FunctionDefinition",
                        "src": "3847:125:91",
                        "nodes": [],
                        "body": {
                            "id": 21878,
                            "nodeType": "Block",
                            "src": "3908:64:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 21876,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 21873,
                                            "name": "totalPooledEther",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21670,
                                            "src": "3925:16:91",
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
                                                "id": 21874,
                                                "name": "_getAccruedInterest",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21992,
                                                "src": "3944:19:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view returns (uint256)"
                                                }
                                            },
                                            "id": 21875,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3944:21:91",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3925:40:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21872,
                                    "id": 21877,
                                    "nodeType": "Return",
                                    "src": "3918:47:91"
                                }
                            ]
                        },
                        "functionSelector": "37cfdaca",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalPooledEther",
                        "nameLocation": "3856:19:91",
                        "parameters": {
                            "id": 21869,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3875:2:91"
                        },
                        "returnParameters": {
                            "id": 21872,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21871,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21879,
                                    "src": "3899:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21870,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3899:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3898:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 21887,
                        "nodeType": "FunctionDefinition",
                        "src": "3978:91:91",
                        "nodes": [],
                        "body": {
                            "id": 21886,
                            "nodeType": "Block",
                            "src": "4034:35:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 21884,
                                        "name": "totalShares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21672,
                                        "src": "4051:11:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21883,
                                    "id": 21885,
                                    "nodeType": "Return",
                                    "src": "4044:18:91"
                                }
                            ]
                        },
                        "functionSelector": "d5002f2e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalShares",
                        "nameLocation": "3987:14:91",
                        "parameters": {
                            "id": 21880,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4001:2:91"
                        },
                        "returnParameters": {
                            "id": 21883,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21882,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21887,
                                    "src": "4025:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21881,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4025:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4024:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 21909,
                        "nodeType": "FunctionDefinition",
                        "src": "4075:208:91",
                        "nodes": [],
                        "body": {
                            "id": 21908,
                            "nodeType": "Block",
                            "src": "4143:140:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        21895
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 21895,
                                            "mutability": "mutable",
                                            "name": "tokenBalance",
                                            "nameLocation": "4161:12:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 21908,
                                            "src": "4153:20:91",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 21894,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4153:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 21899,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 21896,
                                            "name": "balanceOf",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67566,
                                            "src": "4176:9:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                "typeString": "mapping(address => uint256)"
                                            }
                                        },
                                        "id": 21898,
                                        "indexExpression": {
                                            "id": 21897,
                                            "name": "_account",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21889,
                                            "src": "4186:8:91",
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
                                        "src": "4176:19:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4153:42:91"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 21902,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21887,
                                                    "src": "4236:14:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21903,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4236:16:91",
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
                                                    "id": 21904,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21879,
                                                    "src": "4254:19:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 21905,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4254:21:91",
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
                                                "id": 21900,
                                                "name": "tokenBalance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21895,
                                                "src": "4212:12:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 21901,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4225:10:91",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14179,
                                            "src": "4212:23:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21906,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4212:64:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21893,
                                    "id": 21907,
                                    "nodeType": "Return",
                                    "src": "4205:71:91"
                                }
                            ]
                        },
                        "functionSelector": "f5eb42dc",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sharesOf",
                        "nameLocation": "4084:8:91",
                        "parameters": {
                            "id": 21890,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21889,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "4101:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21909,
                                    "src": "4093:16:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 21888,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4093:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4092:18:91"
                        },
                        "returnParameters": {
                            "id": 21893,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21892,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21909,
                                    "src": "4134:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21891,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4134:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4133:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21925,
                        "nodeType": "FunctionDefinition",
                        "src": "4307:122:91",
                        "nodes": [],
                        "body": {
                            "id": 21924,
                            "nodeType": "Block",
                            "src": "4379:50:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 21917,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21956,
                                            "src": "4389:7:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 21918,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4389:9:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 21919,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4389:9:91"
                                },
                                {
                                    "expression": {
                                        "id": 21922,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21920,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21666,
                                            "src": "4408:5:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 21921,
                                            "name": "_rate_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21912,
                                            "src": "4416:6:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4408:14:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 21923,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4408:14:91"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 21910,
                            "nodeType": "StructuredDocumentation",
                            "src": "4289:13:91",
                            "text": "Mock ///"
                        },
                        "functionSelector": "34fcf437",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 21915,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 21914,
                                    "name": "requiresAuthDuringCompetition",
                                    "nameLocations": [
                                        "4349:29:91"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 19182,
                                    "src": "4349:29:91"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4349:29:91"
                            }
                        ],
                        "name": "setRate",
                        "nameLocation": "4316:7:91",
                        "parameters": {
                            "id": 21913,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21912,
                                    "mutability": "mutable",
                                    "name": "_rate_",
                                    "nameLocation": "4332:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21925,
                                    "src": "4324:14:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21911,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4324:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4323:16:91"
                        },
                        "returnParameters": {
                            "id": 21916,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4379:0:91"
                        },
                        "scope": 21993,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21933,
                        "nodeType": "FunctionDefinition",
                        "src": "4435:80:91",
                        "nodes": [],
                        "body": {
                            "id": 21932,
                            "nodeType": "Block",
                            "src": "4486:29:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 21930,
                                        "name": "_rate",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21666,
                                        "src": "4503:5:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21929,
                                    "id": 21931,
                                    "nodeType": "Return",
                                    "src": "4496:12:91"
                                }
                            ]
                        },
                        "functionSelector": "679aefce",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getRate",
                        "nameLocation": "4444:7:91",
                        "parameters": {
                            "id": 21926,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4451:2:91"
                        },
                        "returnParameters": {
                            "id": 21929,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21928,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21933,
                                    "src": "4477:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21927,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4477:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4476:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 21956,
                        "nodeType": "FunctionDefinition",
                        "src": "4521:205:91",
                        "nodes": [],
                        "body": {
                            "id": 21955,
                            "nodeType": "Block",
                            "src": "4549:177:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        21937
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 21937,
                                            "mutability": "mutable",
                                            "name": "interest",
                                            "nameLocation": "4567:8:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 21955,
                                            "src": "4559:16:91",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 21936,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4559:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 21940,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 21938,
                                            "name": "_getAccruedInterest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21992,
                                            "src": "4578:19:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 21939,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4578:21:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4559:40:91"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 21943,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 21941,
                                            "name": "interest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21937,
                                            "src": "4613:8:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 21942,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4624:1:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4613:12:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 21949,
                                    "nodeType": "IfStatement",
                                    "src": "4609:71:91",
                                    "trueBody": {
                                        "id": 21948,
                                        "nodeType": "Block",
                                        "src": "4627:53:91",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 21946,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 21944,
                                                        "name": "totalPooledEther",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 21670,
                                                        "src": "4641:16:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 21945,
                                                        "name": "interest",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 21937,
                                                        "src": "4661:8:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4641:28:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 21947,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4641:28:91"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 21953,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21950,
                                            "name": "_lastUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21668,
                                            "src": "4689:12:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 21951,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "4704:5:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 21952,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4710:9:91",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "4704:15:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4689:30:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 21954,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4689:30:91"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_accrue",
                        "nameLocation": "4530:7:91",
                        "parameters": {
                            "id": 21934,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4537:2:91"
                        },
                        "returnParameters": {
                            "id": 21935,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4549:0:91"
                        },
                        "scope": 21993,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 21992,
                        "nodeType": "FunctionDefinition",
                        "src": "4732:390:91",
                        "nodes": [],
                        "body": {
                            "id": 21991,
                            "nodeType": "Block",
                            "src": "4795:327:91",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 21963,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 21961,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21666,
                                            "src": "4809:5:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 21962,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4818:1:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4809:10:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 21967,
                                    "nodeType": "IfStatement",
                                    "src": "4805:49:91",
                                    "trueBody": {
                                        "id": 21966,
                                        "nodeType": "Block",
                                        "src": "4821:33:91",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "30",
                                                    "id": 21964,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4842:1:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "functionReturnParameters": 21960,
                                                "id": 21965,
                                                "nodeType": "Return",
                                                "src": "4835:8:91"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        21969
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 21969,
                                            "mutability": "mutable",
                                            "name": "timeElapsed",
                                            "nameLocation": "4925:11:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 21991,
                                            "src": "4917:19:91",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 21968,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4917:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 21978,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "333635",
                                                "id": 21976,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4993:8:91",
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
                                                        "id": 21973,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 21970,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -4,
                                                                "src": "4940:5:91",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 21971,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4946:9:91",
                                                            "memberName": "timestamp",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4940:15:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 21972,
                                                            "name": "_lastUpdated",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 21668,
                                                            "src": "4958:12:91",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "4940:30:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 21974,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "4939:32:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 21975,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4972:7:91",
                                            "memberName": "divDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14215,
                                            "src": "4939:40:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21977,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4939:72:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4917:94:91"
                                },
                                {
                                    "assignments": [
                                        21980
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 21980,
                                            "mutability": "mutable",
                                            "name": "accrued",
                                            "nameLocation": "5029:7:91",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 21991,
                                            "src": "5021:15:91",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 21979,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5021:7:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 21988,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 21985,
                                                        "name": "timeElapsed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 21969,
                                                        "src": "5078:11:91",
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
                                                        "id": 21983,
                                                        "name": "_rate",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 21666,
                                                        "src": "5064:5:91",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 21984,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5070:7:91",
                                                    "memberName": "mulDown",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 14197,
                                                    "src": "5064:13:91",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 21986,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5064:26:91",
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
                                                "id": 21981,
                                                "name": "totalPooledEther",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 21670,
                                                "src": "5039:16:91",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 21982,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5056:7:91",
                                            "memberName": "mulDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14197,
                                            "src": "5039:24:91",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 21987,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5039:52:91",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5021:70:91"
                                },
                                {
                                    "expression": {
                                        "id": 21989,
                                        "name": "accrued",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21980,
                                        "src": "5108:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 21960,
                                    "id": 21990,
                                    "nodeType": "Return",
                                    "src": "5101:14:91"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_getAccruedInterest",
                        "nameLocation": "4741:19:91",
                        "parameters": {
                            "id": 21957,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4760:2:91"
                        },
                        "returnParameters": {
                            "id": 21960,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21959,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21992,
                                    "src": "4786:7:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21958,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4786:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4785:9:91"
                        },
                        "scope": 21993,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 21658,
                            "name": "MultiRolesAuthority",
                            "nameLocations": [
                                "930:19:91"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 67535,
                            "src": "930:19:91"
                        },
                        "id": 21659,
                        "nodeType": "InheritanceSpecifier",
                        "src": "930:19:91"
                    },
                    {
                        "baseName": {
                            "id": 21660,
                            "name": "ERC20Mintable",
                            "nameLocations": [
                                "951:13:91"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 19241,
                            "src": "951:13:91"
                        },
                        "id": 21661,
                        "nodeType": "InheritanceSpecifier",
                        "src": "951:13:91"
                    }
                ],
                "canonicalName": "MockLido",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 21657,
                    "nodeType": "StructuredDocumentation",
                    "src": "380:529:91",
                    "text": "@author DELV\n @title MockLido\n @notice This mock yield source will accrue interest at a specified rate\n         Every stateful interaction will accrue interest, so the interest\n         accrual will approximate continuous compounding as the contract\n         is called more frequently.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    21993,
                    19241,
                    67535,
                    67230,
                    67217,
                    67923
                ],
                "name": "MockLido",
                "nameLocation": "918:8:91",
                "scope": 21994,
                "usedErrors": [],
                "usedEvents": [
                    67067,
                    67074,
                    67248,
                    67254,
                    67262,
                    67269,
                    67546,
                    67554
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 91
};
