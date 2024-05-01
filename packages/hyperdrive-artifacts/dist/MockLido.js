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
    bytecode: '0x6101206040523480156200001257600080fd5b506040516200244538038062002445833981016040819052620000359162000224565b6040518060400160405280601781526020017f4c6971756964207374616b656420457468657220322e30000000000000000000815250604051806040016040528060058152602001640e6e88aa8960db1b8152506012858585823081818989898260009081620000a6919062000327565b506001620000b5838262000327565b5060ff81166080524660a052620000cb62000188565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505090151560e05261010052505050600c94909455505042600d5550620004719050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001bc9190620003f3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600080600080608085870312156200023b57600080fd5b845160208601519094506001600160a01b03811681146200025b57600080fd5b604086015190935080151581146200027257600080fd5b6060959095015193969295505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620002ad57607f821691505b602082108103620002ce57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200032257600081815260208120601f850160051c81016020861015620002fd5750805b601f850160051c820191505b818110156200031e5782815560010162000309565b5050505b505050565b81516001600160401b0381111562000343576200034362000282565b6200035b8162000354845462000298565b84620002d4565b602080601f8311600181146200039357600084156200037a5750858301515b600019600386901b1c1916600185901b1785556200031e565b600085815260208120601f198616915b82811015620003c457888601518255948401946001909101908401620003a3565b5085821015620003e35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004038162000298565b600182811680156200041e5760018114620004345762000465565b60ff198416875282151583028701945062000465565b8760005260208060002060005b858110156200045c5781548a82015290840190820162000441565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161010051611f5e620004e76000396000818161039801528181610ce501526111d40152600081816105b201528181610bb601528181610c8d01528181610d630152818161111a015261117c01526000610c5201526000610c1d015260006103ec0152611f5e6000f3fe6080604052600436106102675760003560e01c80637a28fb8811610144578063b7009613116100b6578063dd62ed3e1161007a578063dd62ed3e146107ac578063e688747b146107e4578063ea7ca27614610827578063ed0d0efb1461086b578063f2fde38b14610898578063f5eb42dc146108b857600080fd5b8063b700961314610701578063bf7e214f14610721578063c53a398514610741578063d5002f2e14610777578063d505accf1461078c57600080fd5b80638fcb4e5b116101085780638fcb4e5b1461065957806395d89b41146106795780639dc29fac1461068e578063a0712d68146106ae578063a1903eab146106ce578063a9059cbb146106e157600080fd5b80637a28fb88146105805780637a8c63b5146105a05780637a9e5e4b146105d45780637ecebe00146105f45780638da5cb5b1461062157600080fd5b80633644e515116101dd5780634b5159da116101a15780634b5159da146104be578063679aefce146104de57806367aff484146104f35780636d7804591461051357806370a0823114610533578063728b952b1461056057600080fd5b80633644e5151461044057806337cfdaca1461045557806340c10f191461046a57806342966c681461048a57806347b714e0146104aa57600080fd5b806318160ddd1161022f57806318160ddd146103505780631920845114610366578063239c70ae1461038657806323b872dd146103ba578063313ce567146103da57806334fcf4371461042057600080fd5b806306a36aee1461026c57806306fdde03146102ac578063095ea7b3146102ce5780630bade8a4146102fe5780630ea9b75b1461032e575b600080fd5b34801561027857600080fd5b50610299610287366004611a16565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102b857600080fd5b506102c16108d8565b6040516102a39190611a33565b3480156102da57600080fd5b506102ee6102e9366004611a81565b610966565b60405190151581526020016102a3565b34801561030a57600080fd5b506102ee610319366004611aca565b600a6020526000908152604090205460ff1681565b34801561033a57600080fd5b5061034e610349366004611b04565b6109d3565b005b34801561035c57600080fd5b5061029960025481565b34801561037257600080fd5b50610299610381366004611b4b565b610ab4565b34801561039257600080fd5b506102997f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c657600080fd5b506102ee6103d5366004611b64565b610ad2565b3480156103e657600080fd5b5061040e7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016102a3565b34801561042c57600080fd5b5061034e61043b366004611b4b565b610bb4565b34801561044c57600080fd5b50610299610c19565b34801561046157600080fd5b50610299610c74565b34801561047657600080fd5b5061034e610485366004611a81565b610c8b565b34801561049657600080fd5b5061034e6104a5366004611b4b565b610d61565b3480156104b657600080fd5b506000610299565b3480156104ca57600080fd5b5061034e6104d9366004611ba5565b610dc6565b3480156104ea57600080fd5b50600c54610299565b3480156104ff57600080fd5b5061034e61050e366004611bdc565b610e58565b34801561051f57600080fd5b5061029961052e366004611b64565b610f20565b34801561053f57600080fd5b5061029961054e366004611a16565b60036020526000908152604090205481565b34801561056c57600080fd5b5061034e61057b366004611c0a565b610f58565b34801561058c57600080fd5b5061029961059b366004611b4b565b610fe1565b3480156105ac57600080fd5b506102ee7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105e057600080fd5b5061034e6105ef366004611a16565b610ff6565b34801561060057600080fd5b5061029961060f366004611a16565b60056020526000908152604090205481565b34801561062d57600080fd5b50600654610641906001600160a01b031681565b6040516001600160a01b0390911681526020016102a3565b34801561066557600080fd5b50610299610674366004611a81565b6110e0565b34801561068557600080fd5b506102c161110b565b34801561069a57600080fd5b5061034e6106a9366004611a81565b611118565b3480156106ba57600080fd5b5061034e6106c9366004611b4b565b61117a565b6102996106dc366004611a16565b61124c565b3480156106ed57600080fd5b506102ee6106fc366004611a81565b6112d8565b34801561070d57600080fd5b506102ee61071c366004611c38565b61133e565b34801561072d57600080fd5b50600754610641906001600160a01b031681565b34801561074d57600080fd5b5061064161075c366004611a16565b6008602052600090815260409020546001600160a01b031681565b34801561078357600080fd5b50600f54610299565b34801561079857600080fd5b5061034e6107a7366004611c7f565b61143c565b3480156107b857600080fd5b506102996107c7366004611c0a565b600460209081526000928352604080842090915290825290205481565b3480156107f057600080fd5b506102ee6107ff366004611ced565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b34801561083357600080fd5b506102ee610842366004611d20565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b34801561087757600080fd5b50610299610886366004611aca565b600b6020526000908152604090205481565b3480156108a457600080fd5b5061034e6108b3366004611a16565b611680565b3480156108c457600080fd5b506102996108d3366004611a16565b6116fe565b600080546108e590611d4c565b80601f016020809104026020016040519081016040528092919081815260200182805461091190611d4c565b801561095e5780601f106109335761010080835404028352916020019161095e565b820191906000526020600020905b81548152906001019060200180831161094157829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109c19086815260200190565b60405180910390a35060015b92915050565b6109e9336000356001600160e01b031916611733565b610a0e5760405162461bcd60e51b8152600401610a0590611d86565b60405180910390fd5b8015610a3e576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a65565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610aa7911515815260200190565b60405180910390a3505050565b60006109cd610ac2600f5490565b610aca610c74565b8491906117dd565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610b2e57610b098382611dc2565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b56908490611dc2565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611f0983398151915290610b9f9087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610c0c57610bf0336000356001600160e01b031916611733565b610c0c5760405162461bcd60e51b8152600401610a0590611dd5565b610c146117fb565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c4f57610c4a61182c565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610c7e6118c6565b600e54610c4a9190611e0c565b7f000000000000000000000000000000000000000000000000000000000000000015610ce357610cc7336000356001600160e01b031916611733565b610ce35760405162461bcd60e51b8152600401610a0590611dd5565b7f0000000000000000000000000000000000000000000000000000000000000000811115610d535760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a05565b610d5d828261191b565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610db957610d9d336000356001600160e01b031916611733565b610db95760405162461bcd60e51b8152600401610a0590611dd5565b610dc33382611975565b50565b610ddc336000356001600160e01b031916611733565b610df85760405162461bcd60e51b8152600401610a0590611d86565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610e6e336000356001600160e01b031916611733565b610e8a5760405162461bcd60e51b8152600401610a0590611d86565b8015610eb9576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610edf565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610aa7911515815260200190565b6000610f2a6117fb565b6000610f42610f37610c74565b600f548591906117dd565b9050610f4f858583610ad2565b50949350505050565b610f6e336000356001600160e01b031916611733565b610f8a5760405162461bcd60e51b8152600401610a0590611d86565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b60006109cd610fee610c74565b600f54610aca565b6006546001600160a01b031633148061108b575060075460405163b700961360e01b81526001600160a01b039091169063b70096139061104a90339030906001600160e01b03196000351690600401611e1f565b602060405180830381865afa158015611067573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108b9190611e4c565b61109457600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b60006110ea6117fb565b60006110f7610f37610c74565b905061110384826112d8565b509392505050565b600180546108e590611d4c565b7f00000000000000000000000000000000000000000000000000000000000000001561117057611154336000356001600160e01b031916611733565b6111705760405162461bcd60e51b8152600401610a0590611dd5565b610d5d8282611975565b7f0000000000000000000000000000000000000000000000000000000000000000156111d2576111b6336000356001600160e01b031916611733565b6111d25760405162461bcd60e51b8152600401610a0590611dd5565b7f00000000000000000000000000000000000000000000000000000000000000008111156112425760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a05565b610dc3338261191b565b60006112566117fb565b600f5460000361127d5734600f819055600e81905561127690339061191b565b5034919050565b600061129b61128b600f5490565b611293610c74565b3491906117dd565b905034600e60008282546112af9190611e0c565b9250508190555080600f60008282546112c89190611e0c565b909155506109cd9050333461191b565b336000908152600360205260408120805483919083906112f9908490611dc2565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611f09833981519152906109c19086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156113da5760405163b700961360e01b81526001600160a01b0382169063b70096139061139190889088908890600401611e1f565b602060405180830381865afa1580156113ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d29190611e4c565b915050610bad565b6001600160e01b031983166000908152600a602052604090205460ff168061143357506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561148c5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610a05565b60006001611498610c19565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156115a4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906115da5750876001600160a01b0316816001600160a01b0316145b6116175760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610a05565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611696336000356001600160e01b031916611733565b6116b25760405162461bcd60e51b8152600401610a0590611d86565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610bad611723600f5490565b61172b610c74565b8391906117dd565b6007546000906001600160a01b031680158015906117bd575060405163b700961360e01b81526001600160a01b0382169063b70096139061177c90879030908890600401611e1f565b602060405180830381865afa158015611799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117bd9190611e4c565b806117d557506006546001600160a01b038581169116145b949350505050565b60008260001904841183021582026117f457600080fd5b5091020490565b60006118056118c6565b905080156118255780600e600082825461181f9190611e0c565b90915550505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161185e9190611e69565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600c546000036118d85750600090565b60006118f66301e13380600d54426118f09190611dc2565b906119d7565b90506000610bad61191283600c546119ec90919063ffffffff16565b600e54906119ec565b806002600082825461192d9190611e0c565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611f0983398151915291015b60405180910390a35050565b6001600160a01b0382166000908152600360205260408120805483929061199d908490611dc2565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611f0983398151915290602001611969565b6000610bad83670de0b6b3a7640000846117dd565b6000610bad8383670de0b6b3a76400006117dd565b6001600160a01b0381168114610dc357600080fd5b600060208284031215611a2857600080fd5b8135610bad81611a01565b600060208083528351808285015260005b81811015611a6057858101830151858201604001528201611a44565b506000604082860101526040601f19601f8301168501019250505092915050565b60008060408385031215611a9457600080fd5b8235611a9f81611a01565b946020939093013593505050565b80356001600160e01b031981168114611ac557600080fd5b919050565b600060208284031215611adc57600080fd5b610bad82611aad565b803560ff81168114611ac557600080fd5b8015158114610dc357600080fd5b600080600060608486031215611b1957600080fd5b611b2284611ae5565b9250611b3060208501611aad565b91506040840135611b4081611af6565b809150509250925092565b600060208284031215611b5d57600080fd5b5035919050565b600080600060608486031215611b7957600080fd5b8335611b8481611a01565b92506020840135611b9481611a01565b929592945050506040919091013590565b60008060408385031215611bb857600080fd5b611bc183611aad565b91506020830135611bd181611af6565b809150509250929050565b600080600060608486031215611bf157600080fd5b8335611bfc81611a01565b9250611b3060208501611ae5565b60008060408385031215611c1d57600080fd5b8235611c2881611a01565b91506020830135611bd181611a01565b600080600060608486031215611c4d57600080fd5b8335611c5881611a01565b92506020840135611c6881611a01565b9150611c7660408501611aad565b90509250925092565b600080600080600080600060e0888a031215611c9a57600080fd5b8735611ca581611a01565b96506020880135611cb581611a01565b95506040880135945060608801359350611cd160808901611ae5565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611d0057600080fd5b611d0983611ae5565b9150611d1760208401611aad565b90509250929050565b60008060408385031215611d3357600080fd5b8235611d3e81611a01565b9150611d1760208401611ae5565b600181811c90821680611d6057607f821691505b602082108103611d8057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b818103818111156109cd576109cd611dac565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b808201808211156109cd576109cd611dac565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611e5e57600080fd5b8151610bad81611af6565b600080835481600182811c915080831680611e8557607f831692505b60208084108203611ea457634e487b7160e01b86526022600452602486fd5b818015611eb85760018114611ecd57611efa565b60ff1986168952841515850289019650611efa565b60008a81526020902060005b86811015611ef25781548b820152908501908301611ed9565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122024b54ff7e858840aabfce8b64b8a0d6effc4a2d30deec3f424b5f0a87ae7a78f64736f6c63430008140033',
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
        "maxMintAmount()": "239c70ae",
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
    }
};
