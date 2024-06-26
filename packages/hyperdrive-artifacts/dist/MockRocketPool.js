export const MockRocketPool = {
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
    ],
    bytecode: '0x6101006040523480156200001257600080fd5b50604051620024ff380380620024ff833981016040819052620000359162000213565b6040518060400160405280600e81526020016d0a4dec6d6cae8a0deded8408aa8960931b815250604051806040016040528060048152602001630a48aa8960e31b815250601285858582308181898989826000908162000096919062000316565b506001620000a5838262000316565b5060ff81166080524660a052620000bb62000177565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505090151560e052600c55505050600e94909455505042600f5550620004609050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001ab9190620003e2565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600080600080608085870312156200022a57600080fd5b845160208601519094506001600160a01b03811681146200024a57600080fd5b604086015190935080151581146200026157600080fd5b6060959095015193969295505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200029c57607f821691505b602082108103620002bd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200031157600081815260208120601f850160051c81016020861015620002ec5750805b601f850160051c820191505b818110156200030d57828155600101620002f8565b5050505b505050565b81516001600160401b0381111562000332576200033262000271565b6200034a8162000343845462000287565b84620002c3565b602080601f831160018114620003825760008415620003695750858301515b600019600386901b1c1916600185901b1785556200030d565b600085815260208120601f198616915b82811015620003b35788860151825594840194600190910190840162000392565b5085821015620003d25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620003f28162000287565b600182811680156200040d5760018114620004235762000454565b60ff198416875282151583028701945062000454565b8760005260208060002060005b858110156200044b5781548a82015290840190820162000430565b50505082870194505b50929695505050505050565b60805160a05160c05160e051612034620004cb600039600081816105ab0152818161090301528181610a1d01528181610ca101528181610d7801528181610e17015281816111ec015261124e01526000610d3d01526000610d08015260006103f901526120346000f3fe6080604052600436106102725760003560e01c8063728b952b1161014f578063a9059cbb116100c1578063d505accf1161007a578063d505accf146107d5578063dd62ed3e146107f5578063e688747b1461082d578063ea7ca27614610870578063ed0d0efb146108b4578063f2fde38b146108e157600080fd5b8063a9059cbb146106fa578063aed307771461071a578063b70096131461074a578063bf7e214f1461076a578063c53a39851461078a578063d5002f2e146107c057600080fd5b80638da5cb5b116101135780638da5cb5b1461063a5780638fcb4e5b1461067257806395d89b41146106925780639dc29fac146106a7578063a0712d68146106c7578063a1903eab146106e757600080fd5b8063728b952b146105795780637a8c63b5146105995780637a9e5e4b146105cd5780637ecebe00146105ed5780638b32fa231461061a57600080fd5b806334fcf437116101e85780634346f03e116101ac5780634346f03e146104b75780634b5159da146104d7578063679aefce146104f757806367aff4841461050c5780636d7804591461052c57806370a082311461054c57600080fd5b806334fcf4371461042d5780633644e5151461044d57806337cfdaca1461046257806340c10f191461047757806342966c681461049757600080fd5b80630bade8a41161023a5780630bade8a41461034b5780630ea9b75b1461037b57806318160ddd1461039b578063239c70ae146103b157806323b872dd146103c7578063313ce567146103e757600080fd5b806305f05a941461027757806306a36aee1461029957806306fdde03146102d9578063088a4ed0146102fb578063095ea7b31461031b575b600080fd5b34801561028357600080fd5b50610297610292366004611a9a565b610901565b005b3480156102a557600080fd5b506102c66102b4366004611ad3565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102e557600080fd5b506102ee61098d565b6040516102d09190611af0565b34801561030757600080fd5b50610297610316366004611b3e565b610a1b565b34801561032757600080fd5b5061033b610336366004611b57565b610a78565b60405190151581526020016102d0565b34801561035757600080fd5b5061033b610366366004611ba0565b600a6020526000908152604090205460ff1681565b34801561038757600080fd5b50610297610396366004611bcc565b610ae5565b3480156103a757600080fd5b506102c660025481565b3480156103bd57600080fd5b506102c6600c5481565b3480156103d357600080fd5b5061033b6103e2366004611c13565b610bbd565b3480156103f357600080fd5b5061041b7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016102d0565b34801561043957600080fd5b50610297610448366004611b3e565b610c9f565b34801561045957600080fd5b506102c6610d04565b34801561046e57600080fd5b506102c6610d5f565b34801561048357600080fd5b50610297610492366004611b57565b610d76565b3480156104a357600080fd5b506102976104b2366004611b3e565b610e15565b3480156104c357600080fd5b506102c66104d2366004611b3e565b610e7a565b3480156104e357600080fd5b506102976104f2366004611c54565b610e98565b34801561050357600080fd5b50600e546102c6565b34801561051857600080fd5b50610297610527366004611c70565b610f2a565b34801561053857600080fd5b506102c6610547366004611c13565b610ff2565b34801561055857600080fd5b506102c6610567366004611ad3565b60036020526000908152604090205481565b34801561058557600080fd5b50610297610594366004611c9e565b61102a565b3480156105a557600080fd5b5061033b7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105d957600080fd5b506102976105e8366004611ad3565b6110b3565b3480156105f957600080fd5b506102c6610608366004611ad3565b60056020526000908152604090205481565b34801561062657600080fd5b506102c6610635366004611b3e565b61119d565b34801561064657600080fd5b5060065461065a906001600160a01b031681565b6040516001600160a01b0390911681526020016102d0565b34801561067e57600080fd5b506102c661068d366004611b57565b6111b2565b34801561069e57600080fd5b506102ee6111dd565b3480156106b357600080fd5b506102976106c2366004611b57565b6111ea565b3480156106d357600080fd5b506102976106e2366004611b3e565b61124c565b6102c66106f5366004611ad3565b6112e7565b34801561070657600080fd5b5061033b610715366004611b57565b611373565b34801561072657600080fd5b5061033b610735366004611ad3565b600d6020526000908152604090205460ff1681565b34801561075657600080fd5b5061033b610765366004611ccc565b6113d9565b34801561077657600080fd5b5060075461065a906001600160a01b031681565b34801561079657600080fd5b5061065a6107a5366004611ad3565b6008602052600090815260409020546001600160a01b031681565b3480156107cc57600080fd5b506011546102c6565b3480156107e157600080fd5b506102976107f0366004611d13565b6114d7565b34801561080157600080fd5b506102c6610810366004611c9e565b600460209081526000928352604080842090915290825290205481565b34801561083957600080fd5b5061033b610848366004611d81565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b34801561087c57600080fd5b5061033b61088b366004611db4565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b3480156108c057600080fd5b506102c66108cf366004611ba0565b600b6020526000908152604090205481565b3480156108ed57600080fd5b506102976108fc366004611ad3565b61171b565b7f0000000000000000000000000000000000000000000000000000000000000000156109625761093d336000356001600160e01b031916611799565b6109625760405162461bcd60e51b815260040161095990611de0565b60405180910390fd5b6001600160a01b03919091166000908152600d60205260409020805460ff1916911515919091179055565b6000805461099a90611e17565b80601f01602080910402602001604051908101604052809291908181526020018280546109c690611e17565b8015610a135780601f106109e857610100808354040283529160200191610a13565b820191906000526020600020905b8154815290600101906020018083116109f657829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000015610a7357610a57336000356001600160e01b031916611799565b610a735760405162461bcd60e51b815260040161095990611de0565b600c55565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610ad39086815260200190565b60405180910390a35060015b92915050565b610afb336000356001600160e01b031916611799565b610b175760405162461bcd60e51b815260040161095990611e51565b8015610b47576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610b6e565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610bb0911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610c1957610bf48382611e8d565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610c41908490611e8d565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611fdf83398151915290610c8a9087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610cf757610cdb336000356001600160e01b031916611799565b610cf75760405162461bcd60e51b815260040161095990611de0565b610cff611843565b600e55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610d3a57610d35611874565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610d6961190e565b601054610d359190611ea0565b7f000000000000000000000000000000000000000000000000000000000000000015610dce57610db2336000356001600160e01b031916611799565b610dce5760405162461bcd60e51b815260040161095990611de0565b336000908152600d602052604090205460ff16610e0757600c54811115610e075760405162461bcd60e51b815260040161095990611eb3565b610e118282611973565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610e6d57610e51336000356001600160e01b031916611799565b610e6d5760405162461bcd60e51b815260040161095990611de0565b610e7733826119cd565b50565b6000610adf610e8860115490565b610e90610d5f565b849190611a2f565b610eae336000356001600160e01b031916611799565b610eca5760405162461bcd60e51b815260040161095990611e51565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610f40336000356001600160e01b031916611799565b610f5c5760405162461bcd60e51b815260040161095990611e51565b8015610f8b576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610fb1565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610bb0911515815260200190565b6000610ffc611843565b6000611014611009610d5f565b601154859190611a2f565b9050611021858583610bbd565b50949350505050565b611040336000356001600160e01b031916611799565b61105c5760405162461bcd60e51b815260040161095990611e51565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480611148575060075460405163b700961360e01b81526001600160a01b039091169063b70096139061110790339030906001600160e01b03196000351690600401611ef5565b602060405180830381865afa158015611124573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111489190611f22565b61115157600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6000610adf6111aa610d5f565b601154610e90565b60006111bc611843565b60006111c9611009610d5f565b90506111d58482611373565b509392505050565b6001805461099a90611e17565b7f00000000000000000000000000000000000000000000000000000000000000001561124257611226336000356001600160e01b031916611799565b6112425760405162461bcd60e51b815260040161095990611de0565b610e1182826119cd565b7f0000000000000000000000000000000000000000000000000000000000000000156112a457611288336000356001600160e01b031916611799565b6112a45760405162461bcd60e51b815260040161095990611de0565b336000908152600d602052604090205460ff166112dd57600c548111156112dd5760405162461bcd60e51b815260040161095990611eb3565b610e773382611973565b60006112f1611843565b601154600003611318573460118190556010819055611311903390611973565b5034919050565b600061133661132660115490565b61132e610d5f565b349190611a2f565b9050346010600082825461134a9190611ea0565b9250508190555080601160008282546113639190611ea0565b90915550610adf90503334611973565b33600090815260036020526040812080548391908390611394908490611e8d565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611fdf83398151915290610ad39086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156114755760405163b700961360e01b81526001600160a01b0382169063b70096139061142c90889088908890600401611ef5565b602060405180830381865afa158015611449573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146d9190611f22565b915050610c98565b6001600160e01b031983166000908152600a602052604090205460ff16806114ce57506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b428410156115275760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610959565b60006001611533610d04565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561163f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116755750876001600160a01b0316816001600160a01b0316145b6116b25760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610959565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611731336000356001600160e01b031916611799565b61174d5760405162461bcd60e51b815260040161095990611e51565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611823575060405163b700961360e01b81526001600160a01b0382169063b7009613906117e290879030908890600401611ef5565b602060405180830381865afa1580156117ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118239190611f22565b8061183b57506006546001600160a01b038581169116145b949350505050565b600061184d61190e565b9050801561186d5780601060008282546118679190611ea0565b90915550505b5042600f55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516118a69190611f3f565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600e546000036119205750600090565b600f544210156119305750600090565b600061194e6301e13380600f54426119489190611e8d565b90611a4d565b90506000610c9861196a83600e54611a6290919063ffffffff16565b60105490611a62565b80600260008282546119859190611ea0565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611fdf83398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906119f5908490611e8d565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611fdf833981519152906020016119c1565b6000826000190484118302158202611a4657600080fd5b5091020490565b6000610c9883670de0b6b3a764000084611a2f565b6000610c988383670de0b6b3a7640000611a2f565b6001600160a01b0381168114610e7757600080fd5b8015158114610e7757600080fd5b60008060408385031215611aad57600080fd5b8235611ab881611a77565b91506020830135611ac881611a8c565b809150509250929050565b600060208284031215611ae557600080fd5b8135610c9881611a77565b600060208083528351808285015260005b81811015611b1d57858101830151858201604001528201611b01565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611b5057600080fd5b5035919050565b60008060408385031215611b6a57600080fd5b8235611b7581611a77565b946020939093013593505050565b80356001600160e01b031981168114611b9b57600080fd5b919050565b600060208284031215611bb257600080fd5b610c9882611b83565b803560ff81168114611b9b57600080fd5b600080600060608486031215611be157600080fd5b611bea84611bbb565b9250611bf860208501611b83565b91506040840135611c0881611a8c565b809150509250925092565b600080600060608486031215611c2857600080fd5b8335611c3381611a77565b92506020840135611c4381611a77565b929592945050506040919091013590565b60008060408385031215611c6757600080fd5b611ab883611b83565b600080600060608486031215611c8557600080fd5b8335611c9081611a77565b9250611bf860208501611bbb565b60008060408385031215611cb157600080fd5b8235611cbc81611a77565b91506020830135611ac881611a77565b600080600060608486031215611ce157600080fd5b8335611cec81611a77565b92506020840135611cfc81611a77565b9150611d0a60408501611b83565b90509250925092565b600080600080600080600060e0888a031215611d2e57600080fd5b8735611d3981611a77565b96506020880135611d4981611a77565b95506040880135945060608801359350611d6560808901611bbb565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611d9457600080fd5b611d9d83611bbb565b9150611dab60208401611b83565b90509250929050565b60008060408385031215611dc757600080fd5b8235611dd281611a77565b9150611dab60208401611bbb565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b600181811c90821680611e2b57607f821691505b602082108103611e4b57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b81810381811115610adf57610adf611e77565b80820180821115610adf57610adf611e77565b60208082526022908201527f45524332304d696e7461626c653a20496e76616c6964206d696e7420616d6f756040820152611b9d60f21b606082015260800190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611f3457600080fd5b8151610c9881611a8c565b600080835481600182811c915080831680611f5b57607f831692505b60208084108203611f7a57634e487b7160e01b86526022600452602486fd5b818015611f8e5760018114611fa357611fd0565b60ff1986168952841515850289019650611fd0565b60008a81526020902060005b86811015611fc85781548b820152908501908301611faf565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220a68e247b85da149ecfb937b0199ddceb68dde073588e6df00752ef1a70f383ed64736f6c63430008140033',
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
    }
};
