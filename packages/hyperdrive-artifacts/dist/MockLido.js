export const MockLido = {
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
            "name": "sharesOf",
            "inputs": [
                {
                    "name": "_account",
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
    bytecode: '0x6101006040523480156200001257600080fd5b506040516200258e3803806200258e833981016040819052620000359162000223565b6040518060400160405280601781526020017f4c6971756964207374616b656420457468657220322e30000000000000000000815250604051806040016040528060058152602001640e6e88aa8960db1b8152506012858585823081818989898260009081620000a6919062000326565b506001620000b5838262000326565b5060ff81166080524660a052620000cb62000187565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505090151560e052600c55505050600e94909455505042600f5550620004709050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001bb9190620003f2565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600080600080608085870312156200023a57600080fd5b845160208601519094506001600160a01b03811681146200025a57600080fd5b604086015190935080151581146200027157600080fd5b6060959095015193969295505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620002ac57607f821691505b602082108103620002cd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200032157600081815260208120601f850160051c81016020861015620002fc5750805b601f850160051c820191505b818110156200031d5782815560010162000308565b5050505b505050565b81516001600160401b0381111562000342576200034262000281565b6200035a8162000353845462000297565b84620002d3565b602080601f831160018114620003925760008415620003795750858301515b600019600386901b1c1916600185901b1785556200031d565b600085815260208120601f198616915b82811015620003c357888601518255948401946001909101908401620003a2565b5085821015620003e25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004028162000297565b600182811680156200041d5760018114620004335762000464565b60ff198416875282151583028701945062000464565b8760005260208060002060005b858110156200045b5781548a82015290840190820162000440565b50505082870194505b50929695505050505050565b60805160a05160c05160e0516120b3620004db600039600081816105f50152818161094d01528181610a6701528181610d0901528181610de001528181610e7f01528181611236015261129801526000610da501526000610d700152600061042f01526120b36000f3fe6080604052600436106102885760003560e01c8063728b952b1161015a578063aed30777116100c1578063dd62ed3e1161007a578063dd62ed3e1461081f578063e688747b14610857578063ea7ca2761461089a578063ed0d0efb146108de578063f2fde38b1461090b578063f5eb42dc1461092b57600080fd5b8063aed3077714610744578063b700961314610774578063bf7e214f14610794578063c53a3985146107b4578063d5002f2e146107ea578063d505accf146107ff57600080fd5b80638fcb4e5b116101135780638fcb4e5b1461069c57806395d89b41146106bc5780639dc29fac146106d1578063a0712d68146106f1578063a1903eab14610711578063a9059cbb1461072457600080fd5b8063728b952b146105a35780637a28fb88146105c35780637a8c63b5146105e35780637a9e5e4b146106175780637ecebe00146106375780638da5cb5b1461066457600080fd5b8063313ce567116101fe57806347b714e0116101b757806347b714e0146104ed5780634b5159da14610501578063679aefce1461052157806367aff484146105365780636d7804591461055657806370a082311461057657600080fd5b8063313ce5671461041d57806334fcf437146104635780633644e5151461048357806337cfdaca1461049857806340c10f19146104ad57806342966c68146104cd57600080fd5b80630bade8a4116102505780630bade8a4146103615780630ea9b75b1461039157806318160ddd146103b157806319208451146103c7578063239c70ae146103e757806323b872dd146103fd57600080fd5b806305f05a941461028d57806306a36aee146102af57806306fdde03146102ef578063088a4ed014610311578063095ea7b314610331575b600080fd5b34801561029957600080fd5b506102ad6102a8366004611b19565b61094b565b005b3480156102bb57600080fd5b506102dc6102ca366004611b52565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102fb57600080fd5b506103046109d7565b6040516102e69190611b6f565b34801561031d57600080fd5b506102ad61032c366004611bbd565b610a65565b34801561033d57600080fd5b5061035161034c366004611bd6565b610ac2565b60405190151581526020016102e6565b34801561036d57600080fd5b5061035161037c366004611c1f565b600a6020526000908152604090205460ff1681565b34801561039d57600080fd5b506102ad6103ac366004611c4b565b610b2f565b3480156103bd57600080fd5b506102dc60025481565b3480156103d357600080fd5b506102dc6103e2366004611bbd565b610c07565b3480156103f357600080fd5b506102dc600c5481565b34801561040957600080fd5b50610351610418366004611c92565b610c25565b34801561042957600080fd5b506104517f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016102e6565b34801561046f57600080fd5b506102ad61047e366004611bbd565b610d07565b34801561048f57600080fd5b506102dc610d6c565b3480156104a457600080fd5b506102dc610dc7565b3480156104b957600080fd5b506102ad6104c8366004611bd6565b610dde565b3480156104d957600080fd5b506102ad6104e8366004611bbd565b610e7d565b3480156104f957600080fd5b5060006102dc565b34801561050d57600080fd5b506102ad61051c366004611cd3565b610ee2565b34801561052d57600080fd5b50600e546102dc565b34801561054257600080fd5b506102ad610551366004611cef565b610f74565b34801561056257600080fd5b506102dc610571366004611c92565b61103c565b34801561058257600080fd5b506102dc610591366004611b52565b60036020526000908152604090205481565b3480156105af57600080fd5b506102ad6105be366004611d1d565b611074565b3480156105cf57600080fd5b506102dc6105de366004611bbd565b6110fd565b3480156105ef57600080fd5b506103517f000000000000000000000000000000000000000000000000000000000000000081565b34801561062357600080fd5b506102ad610632366004611b52565b611112565b34801561064357600080fd5b506102dc610652366004611b52565b60056020526000908152604090205481565b34801561067057600080fd5b50600654610684906001600160a01b031681565b6040516001600160a01b0390911681526020016102e6565b3480156106a857600080fd5b506102dc6106b7366004611bd6565b6111fc565b3480156106c857600080fd5b50610304611227565b3480156106dd57600080fd5b506102ad6106ec366004611bd6565b611234565b3480156106fd57600080fd5b506102ad61070c366004611bbd565b611296565b6102dc61071f366004611b52565b611331565b34801561073057600080fd5b5061035161073f366004611bd6565b6113bd565b34801561075057600080fd5b5061035161075f366004611b52565b600d6020526000908152604090205460ff1681565b34801561078057600080fd5b5061035161078f366004611d4b565b611423565b3480156107a057600080fd5b50600754610684906001600160a01b031681565b3480156107c057600080fd5b506106846107cf366004611b52565b6008602052600090815260409020546001600160a01b031681565b3480156107f657600080fd5b506011546102dc565b34801561080b57600080fd5b506102ad61081a366004611d92565b611521565b34801561082b57600080fd5b506102dc61083a366004611d1d565b600460209081526000928352604080842090915290825290205481565b34801561086357600080fd5b50610351610872366004611e00565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b3480156108a657600080fd5b506103516108b5366004611e33565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b3480156108ea57600080fd5b506102dc6108f9366004611c1f565b600b6020526000908152604090205481565b34801561091757600080fd5b506102ad610926366004611b52565b611765565b34801561093757600080fd5b506102dc610946366004611b52565b6117e3565b7f0000000000000000000000000000000000000000000000000000000000000000156109ac57610987336000356001600160e01b031916611818565b6109ac5760405162461bcd60e51b81526004016109a390611e5f565b60405180910390fd5b6001600160a01b03919091166000908152600d60205260409020805460ff1916911515919091179055565b600080546109e490611e96565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1090611e96565b8015610a5d5780601f10610a3257610100808354040283529160200191610a5d565b820191906000526020600020905b815481529060010190602001808311610a4057829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000015610abd57610aa1336000356001600160e01b031916611818565b610abd5760405162461bcd60e51b81526004016109a390611e5f565b600c55565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610b1d9086815260200190565b60405180910390a35060015b92915050565b610b45336000356001600160e01b031916611818565b610b615760405162461bcd60e51b81526004016109a390611ed0565b8015610b91576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610bb8565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610bfa911515815260200190565b60405180910390a3505050565b6000610b29610c1560115490565b610c1d610dc7565b8491906118c2565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610c8157610c5c8382611f0c565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610ca9908490611f0c565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061205e83398151915290610cf29087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610d5f57610d43336000356001600160e01b031916611818565b610d5f5760405162461bcd60e51b81526004016109a390611e5f565b610d676118e0565b600e55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610da257610d9d611911565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610dd16119ab565b601054610d9d9190611f1f565b7f000000000000000000000000000000000000000000000000000000000000000015610e3657610e1a336000356001600160e01b031916611818565b610e365760405162461bcd60e51b81526004016109a390611e5f565b336000908152600d602052604090205460ff16610e6f57600c54811115610e6f5760405162461bcd60e51b81526004016109a390611f32565b610e798282611a10565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610ed557610eb9336000356001600160e01b031916611818565b610ed55760405162461bcd60e51b81526004016109a390611e5f565b610edf3382611a6a565b50565b610ef8336000356001600160e01b031916611818565b610f145760405162461bcd60e51b81526004016109a390611ed0565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610f8a336000356001600160e01b031916611818565b610fa65760405162461bcd60e51b81526004016109a390611ed0565b8015610fd5576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610ffb565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610bfa911515815260200190565b60006110466118e0565b600061105e611053610dc7565b6011548591906118c2565b905061106b858583610c25565b50949350505050565b61108a336000356001600160e01b031916611818565b6110a65760405162461bcd60e51b81526004016109a390611ed0565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6000610b2961110a610dc7565b601154610c1d565b6006546001600160a01b03163314806111a7575060075460405163b700961360e01b81526001600160a01b039091169063b70096139061116690339030906001600160e01b03196000351690600401611f74565b602060405180830381865afa158015611183573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a79190611fa1565b6111b057600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b60006112066118e0565b6000611213611053610dc7565b905061121f84826113bd565b509392505050565b600180546109e490611e96565b7f00000000000000000000000000000000000000000000000000000000000000001561128c57611270336000356001600160e01b031916611818565b61128c5760405162461bcd60e51b81526004016109a390611e5f565b610e798282611a6a565b7f0000000000000000000000000000000000000000000000000000000000000000156112ee576112d2336000356001600160e01b031916611818565b6112ee5760405162461bcd60e51b81526004016109a390611e5f565b336000908152600d602052604090205460ff1661132757600c548111156113275760405162461bcd60e51b81526004016109a390611f32565b610edf3382611a10565b600061133b6118e0565b60115460000361136257346011819055601081905561135b903390611a10565b5034919050565b600061138061137060115490565b611378610dc7565b3491906118c2565b905034601060008282546113949190611f1f565b9250508190555080601160008282546113ad9190611f1f565b90915550610b2990503334611a10565b336000908152600360205260408120805483919083906113de908490611f0c565b90915550506001600160a01b0383166000818152600360205260409081902080548501905551339060008051602061205e83398151915290610b1d9086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156114bf5760405163b700961360e01b81526001600160a01b0382169063b70096139061147690889088908890600401611f74565b602060405180830381865afa158015611493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b79190611fa1565b915050610d00565b6001600160e01b031983166000908152600a602052604090205460ff168061151857506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b428410156115715760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016109a3565b6000600161157d610d6c565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611689573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116bf5750876001600160a01b0316816001600160a01b0316145b6116fc5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016109a3565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b61177b336000356001600160e01b031916611818565b6117975760405162461bcd60e51b81526004016109a390611ed0565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610d0061180860115490565b611810610dc7565b8391906118c2565b6007546000906001600160a01b031680158015906118a2575060405163b700961360e01b81526001600160a01b0382169063b70096139061186190879030908890600401611f74565b602060405180830381865afa15801561187e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118a29190611fa1565b806118ba57506006546001600160a01b038581169116145b949350505050565b60008260001904841183021582026118d957600080fd5b5091020490565b60006118ea6119ab565b9050801561190a5780601060008282546119049190611f1f565b90915550505b5042600f55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516119439190611fbe565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600e546000036119bd5750600090565b600f544210156119cd5750600090565b60006119eb6301e13380600f54426119e59190611f0c565b90611acc565b90506000610d00611a0783600e54611ae190919063ffffffff16565b60105490611ae1565b8060026000828254611a229190611f1f565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061205e83398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611a92908490611f0c565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061205e83398151915290602001611a5e565b6000610d0083670de0b6b3a7640000846118c2565b6000610d008383670de0b6b3a76400006118c2565b6001600160a01b0381168114610edf57600080fd5b8015158114610edf57600080fd5b60008060408385031215611b2c57600080fd5b8235611b3781611af6565b91506020830135611b4781611b0b565b809150509250929050565b600060208284031215611b6457600080fd5b8135610d0081611af6565b600060208083528351808285015260005b81811015611b9c57858101830151858201604001528201611b80565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611bcf57600080fd5b5035919050565b60008060408385031215611be957600080fd5b8235611bf481611af6565b946020939093013593505050565b80356001600160e01b031981168114611c1a57600080fd5b919050565b600060208284031215611c3157600080fd5b610d0082611c02565b803560ff81168114611c1a57600080fd5b600080600060608486031215611c6057600080fd5b611c6984611c3a565b9250611c7760208501611c02565b91506040840135611c8781611b0b565b809150509250925092565b600080600060608486031215611ca757600080fd5b8335611cb281611af6565b92506020840135611cc281611af6565b929592945050506040919091013590565b60008060408385031215611ce657600080fd5b611b3783611c02565b600080600060608486031215611d0457600080fd5b8335611d0f81611af6565b9250611c7760208501611c3a565b60008060408385031215611d3057600080fd5b8235611d3b81611af6565b91506020830135611b4781611af6565b600080600060608486031215611d6057600080fd5b8335611d6b81611af6565b92506020840135611d7b81611af6565b9150611d8960408501611c02565b90509250925092565b600080600080600080600060e0888a031215611dad57600080fd5b8735611db881611af6565b96506020880135611dc881611af6565b95506040880135945060608801359350611de460808901611c3a565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611e1357600080fd5b611e1c83611c3a565b9150611e2a60208401611c02565b90509250929050565b60008060408385031215611e4657600080fd5b8235611e5181611af6565b9150611e2a60208401611c3a565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b600181811c90821680611eaa57607f821691505b602082108103611eca57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b81810381811115610b2957610b29611ef6565b80820180821115610b2957610b29611ef6565b60208082526022908201527f45524332304d696e7461626c653a20496e76616c6964206d696e7420616d6f756040820152611b9d60f21b606082015260800190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611fb357600080fd5b8151610d0081611b0b565b600080835481600182811c915080831680611fda57607f831692505b60208084108203611ff957634e487b7160e01b86526022600452602486fd5b81801561200d57600181146120225761204f565b60ff198616895284151585028901965061204f565b60008a81526020902060005b868110156120475781548b82015290850190830161202e565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220fec1e06423ab91662cdae43fe52bff0b983f4c6d960e6bca908f1436c6a2fdc464736f6c63430008140033',
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
        "sharesOf(address)": "f5eb42dc",
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
