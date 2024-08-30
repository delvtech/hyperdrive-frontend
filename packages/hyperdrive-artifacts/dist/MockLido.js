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
    ],
    bytecode: '0x60a06040523480156200001157600080fd5b50604051620021fc380380620021fc83398101604081905262000034916200015c565b604080518082018252601781527f4c6971756964207374616b656420457468657220322e300000000000000000006020808301919091528251808401845260058152640e6e88aa8960db1b91810191909152600080546001600160a01b03199081166001600160a01b038916908117835560018054309316831790559451939492938893919284928492909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050816009908162000131919062000261565b50600a62000140828262000261565b505050600d9390935542600e55151560805250600b556200032d565b600080600080608085870312156200017357600080fd5b845160208601519094506001600160a01b03811681146200019357600080fd5b60408601519093508015158114620001aa57600080fd5b6060959095015193969295505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001e557607f821691505b6020821081036200020657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200025c576000816000526020600020601f850160051c81016020861015620002375750805b601f850160051c820191505b81811015620002585782815560010162000243565b5050505b505050565b81516001600160401b038111156200027d576200027d620001ba565b62000295816200028e8454620001d0565b846200020c565b602080601f831160018114620002cd5760008415620002b45750858301515b600019600386901b1c1916600185901b17855562000258565b600085815260208120601f198616915b82811015620002fe57888601518255948401946001909101908401620002dd565b50858210156200031d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051611e826200037a60003960008181610587015281816108ad015281816109cb01528181610bc401528181610c4501528181610cab0152818161114c01526111ae0152611e826000f3fe6080604052600436106102675760003560e01c8063728b952b11610144578063aed30777116100b6578063dd62ed3e1161007a578063dd62ed3e14610764578063e688747b146107aa578063ea7ca276146107ed578063ed0d0efb14610831578063f2fde38b1461085e578063f5eb42dc1461087e57600080fd5b8063aed30777146106a9578063b7009613146106d9578063bf7e214f146106f9578063c53a398514610719578063d5002f2e1461074f57600080fd5b80638fcb4e5b116101085780638fcb4e5b1461060157806395d89b41146106215780639dc29fac14610636578063a0712d6814610656578063a1903eab14610676578063a9059cbb1461068957600080fd5b8063728b952b146105355780637a28fb88146105555780637a8c63b5146105755780637a9e5e4b146105a95780638da5cb5b146105c957600080fd5b8063313ce567116101dd57806347b714e0116101a157806347b714e01461048c5780634b5159da146104a0578063679aefce146104c057806367aff484146104d55780636d780459146104f557806370a082311461051557600080fd5b8063313ce567146103fb57806334fcf4371461041757806337cfdaca1461043757806340c10f191461044c57806342966c681461046c57600080fd5b80630bade8a41161022f5780630bade8a4146103405780630ea9b75b1461037057806318160ddd1461039057806319208451146103a5578063239c70ae146103c557806323b872dd146103db57600080fd5b806305f05a941461026c57806306a36aee1461028e57806306fdde03146102ce578063088a4ed0146102f0578063095ea7b314610310575b600080fd5b34801561027857600080fd5b5061028c610287366004611a16565b6108ab565b005b34801561029a57600080fd5b506102bb6102a9366004611a4f565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102da57600080fd5b506102e3610937565b6040516102c59190611a6c565b3480156102fc57600080fd5b5061028c61030b366004611abb565b6109c9565b34801561031c57600080fd5b5061033061032b366004611ad4565b610a26565b60405190151581526020016102c5565b34801561034c57600080fd5b5061033061035b366004611b1d565b60046020526000908152604090205460ff1681565b34801561037c57600080fd5b5061028c61038b366004611b49565b610a40565b34801561039c57600080fd5b506008546102bb565b3480156103b157600080fd5b506102bb6103c0366004611abb565b610b18565b3480156103d157600080fd5b506102bb600b5481565b3480156103e757600080fd5b506103306103f6366004611b90565b610b36565b34801561040757600080fd5b50604051601281526020016102c5565b34801561042357600080fd5b5061028c610432366004611abb565b610bc2565b34801561044357600080fd5b506102bb610c27565b34801561045857600080fd5b5061028c610467366004611ad4565b610c43565b34801561047857600080fd5b5061028c610487366004611abb565b610ca9565b34801561049857600080fd5b5060006102bb565b3480156104ac57600080fd5b5061028c6104bb366004611bd1565b610d0e565b3480156104cc57600080fd5b50600d546102bb565b3480156104e157600080fd5b5061028c6104f0366004611bed565b610da0565b34801561050157600080fd5b506102bb610510366004611b90565b610e68565b34801561052157600080fd5b506102bb610530366004611a4f565b610eff565b34801561054157600080fd5b5061028c610550366004611c1b565b610f21565b34801561056157600080fd5b506102bb610570366004611abb565b610faa565b34801561058157600080fd5b506103307f000000000000000000000000000000000000000000000000000000000000000081565b3480156105b557600080fd5b5061028c6105c4366004611a4f565b610fbf565b3480156105d557600080fd5b506000546105e9906001600160a01b031681565b6040516001600160a01b0390911681526020016102c5565b34801561060d57600080fd5b506102bb61061c366004611ad4565b6110a9565b34801561062d57600080fd5b506102e361113b565b34801561064257600080fd5b5061028c610651366004611ad4565b61114a565b34801561066257600080fd5b5061028c610671366004611abb565b6111ac565b6102bb610684366004611a4f565b61120e565b34801561069557600080fd5b506103306106a4366004611ad4565b6112d3565b3480156106b557600080fd5b506103306106c4366004611a4f565b600c6020526000908152604090205460ff1681565b3480156106e557600080fd5b506103306106f4366004611c49565b61135b565b34801561070557600080fd5b506001546105e9906001600160a01b031681565b34801561072557600080fd5b506105e9610734366004611a4f565b6002602052600090815260409020546001600160a01b031681565b34801561075b57600080fd5b506010546102bb565b34801561077057600080fd5b506102bb61077f366004611c1b565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205490565b3480156107b657600080fd5b506103306107c5366004611c90565b6001600160e01b03191660009081526005602052604090205460ff919091161c600116151590565b3480156107f957600080fd5b50610330610808366004611cc3565b6001600160a01b0391909116600090815260036020526040902054600160ff9092161c16151590565b34801561083d57600080fd5b506102bb61084c366004611b1d565b60056020526000908152604090205481565b34801561086a57600080fd5b5061028c610879366004611a4f565b611459565b34801561088a57600080fd5b506102bb610899366004611a4f565b60116020526000908152604090205481565b7f00000000000000000000000000000000000000000000000000000000000000001561090c576108e7336000356001600160e01b0319166114d6565b61090c5760405162461bcd60e51b815260040161090390611cef565b60405180910390fd5b6001600160a01b03919091166000908152600c60205260409020805460ff1916911515919091179055565b60606009805461094690611d26565b80601f016020809104026020016040519081016040528092919081815260200182805461097290611d26565b80156109bf5780601f10610994576101008083540402835291602001916109bf565b820191906000526020600020905b8154815290600101906020018083116109a257829003601f168201915b5050505050905090565b7f000000000000000000000000000000000000000000000000000000000000000015610a2157610a05336000356001600160e01b0319166114d6565b610a215760405162461bcd60e51b815260040161090390611cef565b600b55565b600033610a34818585611580565b60019150505b92915050565b610a56336000356001600160e01b0319166114d6565b610a725760405162461bcd60e51b815260040161090390611d60565b8015610aa2576001600160e01b0319821660009081526005602052604090208054600160ff86161b179055610ac9565b6001600160e01b0319821660009081526005602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610b0b911515815260200190565b60405180910390a3505050565b6000610a3a610b2660105490565b610b2e610c27565b849190611592565b6000610b406115b0565b6000610b4b83610b18565b9050610b588585836115e1565b506040518381526001600160a01b038516903390600080516020611e2d8339815191529060200160405180910390a36040518181526001600160a01b038516903390600080516020611e0d8339815191529060200160405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610c1a57610bfe336000356001600160e01b0319166114d6565b610c1a5760405162461bcd60e51b815260040161090390611cef565b610c226115b0565b600d55565b6000610c3161165d565b600f54610c3e9190611d9c565b905090565b7f000000000000000000000000000000000000000000000000000000000000000015610c9b57610c7f336000356001600160e01b0319166114d6565b610c9b5760405162461bcd60e51b815260040161090390611cef565b610ca582826116c2565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610d0157610ce5336000356001600160e01b0319166114d6565b610d015760405162461bcd60e51b815260040161090390611cef565b610d0b33826117b4565b50565b610d24336000356001600160e01b0319166114d6565b610d405760405162461bcd60e51b815260040161090390611d60565b6001600160e01b03198216600081815260046020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610db6336000356001600160e01b0319166114d6565b610dd25760405162461bcd60e51b815260040161090390611d60565b8015610e01576001600160a01b03831660009081526003602052604090208054600160ff85161b179055610e27565b6001600160a01b03831660009081526003602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610b0b911515815260200190565b6000610e726115b0565b6000610e7f8585856115e1565b9050836001600160a01b0316856001600160a01b0316600080516020611e2d83398151915283604051610eb491815260200190565b60405180910390a3836001600160a01b0316856001600160a01b0316600080516020611e0d83398151915285604051610eef91815260200190565b60405180910390a3949350505050565b6001600160a01b038116600090815260116020526040812054610a3a90610faa565b610f37336000356001600160e01b0319166114d6565b610f535760405162461bcd60e51b815260040161090390611d60565b6001600160a01b0382811660008181526002602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6000610a3a610fb7610c27565b601054610b2e565b6000546001600160a01b0316331480611054575060015460405163b700961360e01b81526001600160a01b039091169063b70096139061101390339030906001600160e01b03196000351690600401611daf565b602060405180830381865afa158015611030573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110549190611ddc565b61105d57600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b60006110b36115b0565b60006110bf848461181e565b9050836001600160a01b0316336001600160a01b0316600080516020611e2d833981519152836040516110f491815260200190565b60405180910390a36040518381526001600160a01b038516903390600080516020611e0d8339815191529060200160405180910390a361113383610faa565b949350505050565b6060600a805461094690611d26565b7f0000000000000000000000000000000000000000000000000000000000000000156111a257611186336000356001600160e01b0319166114d6565b6111a25760405162461bcd60e51b815260040161090390611cef565b610ca582826117b4565b7f000000000000000000000000000000000000000000000000000000000000000015611204576111e8336000356001600160e01b0319166114d6565b6112045760405162461bcd60e51b815260040161090390611cef565b610d0b33826116c2565b60006112186115b0565b60105460000361125857346010819055600f819055336000908152601160205260408120805490919061124c908490611d9c565b90915550349392505050565b600061127661126660105490565b61126e610c27565b349190611592565b905034600f600082825461128a9190611d9c565b9250508190555080601060008282546112a39190611d9c565b909155505033600090815260116020526040812080548392906112c7908490611d9c565b90915550909392505050565b60006112dd6115b0565b60006112e883610b18565b90506112f4848261181e565b506040518381526001600160a01b038516903390600080516020611e2d8339815191529060200160405180910390a36040518181526001600160a01b038516903390600080516020611e0d8339815191529060200160405180910390a35060019392505050565b6001600160a01b0380831660009081526002602052604081205490911680156113f75760405163b700961360e01b81526001600160a01b0382169063b7009613906113ae90889088908890600401611daf565b602060405180830381865afa1580156113cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ef9190611ddc565b915050610bbb565b6001600160e01b0319831660009081526004602052604090205460ff168061145057506001600160e01b031983166000908152600560209081526040808320546001600160a01b03891684526003909252909120541615155b95945050505050565b61146f336000356001600160e01b0319166114d6565b61148b5760405162461bcd60e51b815260040161090390611d60565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001546000906001600160a01b03168015801590611560575060405163b700961360e01b81526001600160a01b0382169063b70096139061151f90879030908890600401611daf565b602060405180830381865afa15801561153c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115609190611ddc565b8061113357506000546001600160a01b0385811691161491505092915050565b61158d838383600161187b565b505050565b60008260001904841183021582026115a957600080fd5b5091020490565b60006115ba61165d565b905080156115da5780600f60008282546115d49190611d9c565b90915550505b5042600e55565b6000806115ed83610faa565b90506115fa853383611951565b6001600160a01b03851660009081526011602052604081208054859290611622908490611df9565b90915550506001600160a01b0384166000908152601160205260408120805485929061164f908490611d9c565b909155509095945050505050565b6000600d5460000361166f5750600090565b600e5442101561167f5750600090565b600061169d6301e13380600e54426116979190611df9565b906119c9565b90506000610bbb6116b983600d546119de90919063ffffffff16565b600f54906119de565b336000908152600c602052604090205460ff1661172b57600b5481111561172b5760405162461bcd60e51b815260206004820152601d60248201527f4d6f636b4c69646f3a20496e76616c6964206d696e7420616d6f756e740000006044820152606401610903565b600061173660105490565b600003611744575080611750565b61174d82610b18565b90505b6001600160a01b03831660009081526011602052604081208054839290611778908490611d9c565b9250508190555081600f60008282546117919190611d9c565b9250508190555080601060008282546117aa9190611d9c565b9091555050505050565b60006117bf82610b18565b6001600160a01b0384166000908152601160205260408120805492935083929091906117ec908490611df9565b9250508190555081600f60008282546118059190611df9565b9250508190555080601060008282546117aa9190611df9565b3360009081526011602052604081208054839190839061183f908490611df9565b90915550506001600160a01b0383166000908152601160205260408120805484929061186c908490611d9c565b90915550610bbb905082610faa565b6001600160a01b0384166118a55760405163e602df0560e01b815260006004820152602401610903565b6001600160a01b0383166118cf57604051634a1406b160e11b815260006004820152602401610903565b6001600160a01b038085166000908152600760209081526040808320938716835292905220829055801561194b57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161194291815260200190565b60405180910390a35b50505050565b6001600160a01b03838116600090815260076020908152604080832093861683529290522054600019811461194b57818110156119ba57604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610903565b61194b8484848403600061187b565b6000610bbb83670de0b6b3a764000084611592565b6000610bbb8383670de0b6b3a7640000611592565b6001600160a01b0381168114610d0b57600080fd5b8015158114610d0b57600080fd5b60008060408385031215611a2957600080fd5b8235611a34816119f3565b91506020830135611a4481611a08565b809150509250929050565b600060208284031215611a6157600080fd5b8135610bbb816119f3565b60006020808352835180602085015260005b81811015611a9a57858101830151858201604001528201611a7e565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611acd57600080fd5b5035919050565b60008060408385031215611ae757600080fd5b8235611af2816119f3565b946020939093013593505050565b80356001600160e01b031981168114611b1857600080fd5b919050565b600060208284031215611b2f57600080fd5b610bbb82611b00565b803560ff81168114611b1857600080fd5b600080600060608486031215611b5e57600080fd5b611b6784611b38565b9250611b7560208501611b00565b91506040840135611b8581611a08565b809150509250925092565b600080600060608486031215611ba557600080fd5b8335611bb0816119f3565b92506020840135611bc0816119f3565b929592945050506040919091013590565b60008060408385031215611be457600080fd5b611a3483611b00565b600080600060608486031215611c0257600080fd5b8335611c0d816119f3565b9250611b7560208501611b38565b60008060408385031215611c2e57600080fd5b8235611c39816119f3565b91506020830135611a44816119f3565b600080600060608486031215611c5e57600080fd5b8335611c69816119f3565b92506020840135611c79816119f3565b9150611c8760408501611b00565b90509250925092565b60008060408385031215611ca357600080fd5b611cac83611b38565b9150611cba60208401611b00565b90509250929050565b60008060408385031215611cd657600080fd5b8235611ce1816119f3565b9150611cba60208401611b38565b60208082526018908201527f4d6f636b4c69646f3a206e6f7420617574686f72697a65640000000000000000604082015260600190565b600181811c90821680611d3a57607f821691505b602082108103611d5a57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b80820180821115610a3a57610a3a611d86565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611dee57600080fd5b8151610bbb81611a08565b81810381811115610a3a57610a3a611d8656fe9d9c909296d9c674451c0c24f02cb64981eb3b727f99865939192f880a755dcbddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220d1d09d660a0eaee36f52373c80f15f99580883c077fc002b9eff929815db7dc764736f6c63430008160033',
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
    }
};
