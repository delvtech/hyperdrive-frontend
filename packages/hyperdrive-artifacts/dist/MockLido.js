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
                },
                {
                    "internalType": "uint256",
                    "name": "_maxMintAmount",
                    "type": "uint256"
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
            "inputs": [],
            "name": "maxMintAmount",
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
        "object": "0x6101206040523480156200001257600080fd5b506040516200244538038062002445833981016040819052620000359162000224565b6040518060400160405280601781526020017f4c6971756964207374616b656420457468657220322e30000000000000000000815250604051806040016040528060058152602001640e6e88aa8960db1b8152506012858585823081818989898260009081620000a6919062000327565b506001620000b5838262000327565b5060ff81166080524660a052620000cb62000188565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505090151560e05261010052505050600c94909455505042600d5550620004719050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001bc9190620003f3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600080600080608085870312156200023b57600080fd5b845160208601519094506001600160a01b03811681146200025b57600080fd5b604086015190935080151581146200027257600080fd5b6060959095015193969295505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620002ad57607f821691505b602082108103620002ce57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200032257600081815260208120601f850160051c81016020861015620002fd5750805b601f850160051c820191505b818110156200031e5782815560010162000309565b5050505b505050565b81516001600160401b0381111562000343576200034362000282565b6200035b8162000354845462000298565b84620002d4565b602080601f8311600181146200039357600084156200037a5750858301515b600019600386901b1c1916600185901b1785556200031e565b600085815260208120601f198616915b82811015620003c457888601518255948401946001909101908401620003a3565b5085821015620003e35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004038162000298565b600182811680156200041e5760018114620004345762000465565b60ff198416875282151583028701945062000465565b8760005260208060002060005b858110156200045c5781548a82015290840190820162000441565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161010051611f5e620004e76000396000818161039801528181610ce501526111d40152600081816105b201528181610bb601528181610c8d01528181610d630152818161111a015261117c01526000610c5201526000610c1d015260006103ec0152611f5e6000f3fe6080604052600436106102675760003560e01c80637a28fb8811610144578063b7009613116100b6578063dd62ed3e1161007a578063dd62ed3e146107ac578063e688747b146107e4578063ea7ca27614610827578063ed0d0efb1461086b578063f2fde38b14610898578063f5eb42dc146108b857600080fd5b8063b700961314610701578063bf7e214f14610721578063c53a398514610741578063d5002f2e14610777578063d505accf1461078c57600080fd5b80638fcb4e5b116101085780638fcb4e5b1461065957806395d89b41146106795780639dc29fac1461068e578063a0712d68146106ae578063a1903eab146106ce578063a9059cbb146106e157600080fd5b80637a28fb88146105805780637a8c63b5146105a05780637a9e5e4b146105d45780637ecebe00146105f45780638da5cb5b1461062157600080fd5b80633644e515116101dd5780634b5159da116101a15780634b5159da146104be578063679aefce146104de57806367aff484146104f35780636d7804591461051357806370a0823114610533578063728b952b1461056057600080fd5b80633644e5151461044057806337cfdaca1461045557806340c10f191461046a57806342966c681461048a57806347b714e0146104aa57600080fd5b806318160ddd1161022f57806318160ddd146103505780631920845114610366578063239c70ae1461038657806323b872dd146103ba578063313ce567146103da57806334fcf4371461042057600080fd5b806306a36aee1461026c57806306fdde03146102ac578063095ea7b3146102ce5780630bade8a4146102fe5780630ea9b75b1461032e575b600080fd5b34801561027857600080fd5b50610299610287366004611a16565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102b857600080fd5b506102c16108d8565b6040516102a39190611a33565b3480156102da57600080fd5b506102ee6102e9366004611a81565b610966565b60405190151581526020016102a3565b34801561030a57600080fd5b506102ee610319366004611aca565b600a6020526000908152604090205460ff1681565b34801561033a57600080fd5b5061034e610349366004611b04565b6109d3565b005b34801561035c57600080fd5b5061029960025481565b34801561037257600080fd5b50610299610381366004611b4b565b610ab4565b34801561039257600080fd5b506102997f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c657600080fd5b506102ee6103d5366004611b64565b610ad2565b3480156103e657600080fd5b5061040e7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016102a3565b34801561042c57600080fd5b5061034e61043b366004611b4b565b610bb4565b34801561044c57600080fd5b50610299610c19565b34801561046157600080fd5b50610299610c74565b34801561047657600080fd5b5061034e610485366004611a81565b610c8b565b34801561049657600080fd5b5061034e6104a5366004611b4b565b610d61565b3480156104b657600080fd5b506000610299565b3480156104ca57600080fd5b5061034e6104d9366004611ba5565b610dc6565b3480156104ea57600080fd5b50600c54610299565b3480156104ff57600080fd5b5061034e61050e366004611bdc565b610e58565b34801561051f57600080fd5b5061029961052e366004611b64565b610f20565b34801561053f57600080fd5b5061029961054e366004611a16565b60036020526000908152604090205481565b34801561056c57600080fd5b5061034e61057b366004611c0a565b610f58565b34801561058c57600080fd5b5061029961059b366004611b4b565b610fe1565b3480156105ac57600080fd5b506102ee7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105e057600080fd5b5061034e6105ef366004611a16565b610ff6565b34801561060057600080fd5b5061029961060f366004611a16565b60056020526000908152604090205481565b34801561062d57600080fd5b50600654610641906001600160a01b031681565b6040516001600160a01b0390911681526020016102a3565b34801561066557600080fd5b50610299610674366004611a81565b6110e0565b34801561068557600080fd5b506102c161110b565b34801561069a57600080fd5b5061034e6106a9366004611a81565b611118565b3480156106ba57600080fd5b5061034e6106c9366004611b4b565b61117a565b6102996106dc366004611a16565b61124c565b3480156106ed57600080fd5b506102ee6106fc366004611a81565b6112d8565b34801561070d57600080fd5b506102ee61071c366004611c38565b61133e565b34801561072d57600080fd5b50600754610641906001600160a01b031681565b34801561074d57600080fd5b5061064161075c366004611a16565b6008602052600090815260409020546001600160a01b031681565b34801561078357600080fd5b50600f54610299565b34801561079857600080fd5b5061034e6107a7366004611c7f565b61143c565b3480156107b857600080fd5b506102996107c7366004611c0a565b600460209081526000928352604080842090915290825290205481565b3480156107f057600080fd5b506102ee6107ff366004611ced565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b34801561083357600080fd5b506102ee610842366004611d20565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b34801561087757600080fd5b50610299610886366004611aca565b600b6020526000908152604090205481565b3480156108a457600080fd5b5061034e6108b3366004611a16565b611680565b3480156108c457600080fd5b506102996108d3366004611a16565b6116fe565b600080546108e590611d4c565b80601f016020809104026020016040519081016040528092919081815260200182805461091190611d4c565b801561095e5780601f106109335761010080835404028352916020019161095e565b820191906000526020600020905b81548152906001019060200180831161094157829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109c19086815260200190565b60405180910390a35060015b92915050565b6109e9336000356001600160e01b031916611733565b610a0e5760405162461bcd60e51b8152600401610a0590611d86565b60405180910390fd5b8015610a3e576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a65565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610aa7911515815260200190565b60405180910390a3505050565b60006109cd610ac2600f5490565b610aca610c74565b8491906117dd565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610b2e57610b098382611dc2565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b56908490611dc2565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611f0983398151915290610b9f9087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610c0c57610bf0336000356001600160e01b031916611733565b610c0c5760405162461bcd60e51b8152600401610a0590611dd5565b610c146117fb565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c4f57610c4a61182c565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610c7e6118c6565b600e54610c4a9190611e0c565b7f000000000000000000000000000000000000000000000000000000000000000015610ce357610cc7336000356001600160e01b031916611733565b610ce35760405162461bcd60e51b8152600401610a0590611dd5565b7f0000000000000000000000000000000000000000000000000000000000000000811115610d535760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a05565b610d5d828261191b565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610db957610d9d336000356001600160e01b031916611733565b610db95760405162461bcd60e51b8152600401610a0590611dd5565b610dc33382611975565b50565b610ddc336000356001600160e01b031916611733565b610df85760405162461bcd60e51b8152600401610a0590611d86565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610e6e336000356001600160e01b031916611733565b610e8a5760405162461bcd60e51b8152600401610a0590611d86565b8015610eb9576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610edf565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610aa7911515815260200190565b6000610f2a6117fb565b6000610f42610f37610c74565b600f548591906117dd565b9050610f4f858583610ad2565b50949350505050565b610f6e336000356001600160e01b031916611733565b610f8a5760405162461bcd60e51b8152600401610a0590611d86565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b60006109cd610fee610c74565b600f54610aca565b6006546001600160a01b031633148061108b575060075460405163b700961360e01b81526001600160a01b039091169063b70096139061104a90339030906001600160e01b03196000351690600401611e1f565b602060405180830381865afa158015611067573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108b9190611e4c565b61109457600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b60006110ea6117fb565b60006110f7610f37610c74565b905061110384826112d8565b509392505050565b600180546108e590611d4c565b7f00000000000000000000000000000000000000000000000000000000000000001561117057611154336000356001600160e01b031916611733565b6111705760405162461bcd60e51b8152600401610a0590611dd5565b610d5d8282611975565b7f0000000000000000000000000000000000000000000000000000000000000000156111d2576111b6336000356001600160e01b031916611733565b6111d25760405162461bcd60e51b8152600401610a0590611dd5565b7f00000000000000000000000000000000000000000000000000000000000000008111156112425760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a05565b610dc3338261191b565b60006112566117fb565b600f5460000361127d5734600f819055600e81905561127690339061191b565b5034919050565b600061129b61128b600f5490565b611293610c74565b3491906117dd565b905034600e60008282546112af9190611e0c565b9250508190555080600f60008282546112c89190611e0c565b909155506109cd9050333461191b565b336000908152600360205260408120805483919083906112f9908490611dc2565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611f09833981519152906109c19086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156113da5760405163b700961360e01b81526001600160a01b0382169063b70096139061139190889088908890600401611e1f565b602060405180830381865afa1580156113ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d29190611e4c565b915050610bad565b6001600160e01b031983166000908152600a602052604090205460ff168061143357506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561148c5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610a05565b60006001611498610c19565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156115a4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906115da5750876001600160a01b0316816001600160a01b0316145b6116175760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610a05565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611696336000356001600160e01b031916611733565b6116b25760405162461bcd60e51b8152600401610a0590611d86565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610bad611723600f5490565b61172b610c74565b8391906117dd565b6007546000906001600160a01b031680158015906117bd575060405163b700961360e01b81526001600160a01b0382169063b70096139061177c90879030908890600401611e1f565b602060405180830381865afa158015611799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117bd9190611e4c565b806117d557506006546001600160a01b038581169116145b949350505050565b60008260001904841183021582026117f457600080fd5b5091020490565b60006118056118c6565b905080156118255780600e600082825461181f9190611e0c565b90915550505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161185e9190611e69565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600c546000036118d85750600090565b60006118f66301e13380600d54426118f09190611dc2565b906119d7565b90506000610bad61191283600c546119ec90919063ffffffff16565b600e54906119ec565b806002600082825461192d9190611e0c565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611f0983398151915291015b60405180910390a35050565b6001600160a01b0382166000908152600360205260408120805483929061199d908490611dc2565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611f0983398151915290602001611969565b6000610bad83670de0b6b3a7640000846117dd565b6000610bad8383670de0b6b3a76400006117dd565b6001600160a01b0381168114610dc357600080fd5b600060208284031215611a2857600080fd5b8135610bad81611a01565b600060208083528351808285015260005b81811015611a6057858101830151858201604001528201611a44565b506000604082860101526040601f19601f8301168501019250505092915050565b60008060408385031215611a9457600080fd5b8235611a9f81611a01565b946020939093013593505050565b80356001600160e01b031981168114611ac557600080fd5b919050565b600060208284031215611adc57600080fd5b610bad82611aad565b803560ff81168114611ac557600080fd5b8015158114610dc357600080fd5b600080600060608486031215611b1957600080fd5b611b2284611ae5565b9250611b3060208501611aad565b91506040840135611b4081611af6565b809150509250925092565b600060208284031215611b5d57600080fd5b5035919050565b600080600060608486031215611b7957600080fd5b8335611b8481611a01565b92506020840135611b9481611a01565b929592945050506040919091013590565b60008060408385031215611bb857600080fd5b611bc183611aad565b91506020830135611bd181611af6565b809150509250929050565b600080600060608486031215611bf157600080fd5b8335611bfc81611a01565b9250611b3060208501611ae5565b60008060408385031215611c1d57600080fd5b8235611c2881611a01565b91506020830135611bd181611a01565b600080600060608486031215611c4d57600080fd5b8335611c5881611a01565b92506020840135611c6881611a01565b9150611c7660408501611aad565b90509250925092565b600080600080600080600060e0888a031215611c9a57600080fd5b8735611ca581611a01565b96506020880135611cb581611a01565b95506040880135945060608801359350611cd160808901611ae5565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611d0057600080fd5b611d0983611ae5565b9150611d1760208401611aad565b90509250929050565b60008060408385031215611d3357600080fd5b8235611d3e81611a01565b9150611d1760208401611ae5565b600181811c90821680611d6057607f821691505b602082108103611d8057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b818103818111156109cd576109cd611dac565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b808201808211156109cd576109cd611dac565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611e5e57600080fd5b8151610bad81611af6565b600080835481600182811c915080831680611e8557607f831692505b60208084108203611ea457634e487b7160e01b86526022600452602486fd5b818015611eb85760018114611ecd57611efa565b60ff1986168952841515850289019650611efa565b60008a81526020902060005b86811015611ef25781548b820152908501908301611ed9565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122024b54ff7e858840aabfce8b64b8a0d6effc4a2d30deec3f424b5f0a87ae7a78f64736f6c63430008140033",
        "sourceMap": "805:4275:139:-:0;;;1066:406;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;403:395:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;403:395:129;;;1298:2:139;1314:6;1334:18;1366:14;657:5:129;690:4;1149:6:171;1157:10;605:4:129;611:6;619:8;2101:5:172;2094:4;:12;;;;;;:::i;:::-;-1:-1:-1;2116:6:172;:16;2125:7;2116:6;:16;:::i;:::-;-1:-1:-1;2142:20:172;;;;;2192:13;2173:32;;2242:24;:22;:24::i;:::-;2215:51;;-1:-1:-1;;682:5:170;:14;;-1:-1:-1;;;;;682:14:170;;;-1:-1:-1;;;;;;682:14:170;;;;;;;;706:9;:22;;;;;;;;;;;;744:40;;682:14;;-1:-1:-1;765:10:170;;744:40;;682:5;;744:40;799;;-1:-1:-1;;;;;799:40:170;;;816:10;;799:40;;;;;-1:-1:-1;;;;713:38:129;::::2;;;::::0;761:30:::2;::::0;-1:-1:-1;;;1405:5:139::1;:20:::0;;;;-1:-1:-1;;1450:15:139::1;1435:12;:30:::0;-1:-1:-1;805:4275:139;;-1:-1:-1;805:4275:139;5510:446:172;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;4423:25:234;;;;4464:18;;4457:34;;;;5833:14:172;4507:18:234;;;4500:34;5869:13:172;4550:18:234;;;4543:34;5912:4:172;4593:19:234;;;4586:61;4395:19;;5640:295:172;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;14:575:234:-;108:6;116;124;132;185:3;173:9;164:7;160:23;156:33;153:53;;;202:1;199;192:12;153:53;225:16;;284:2;269:18;;263:25;225:16;;-1:-1:-1;;;;;;317:31:234;;307:42;;297:70;;363:1;360;353:12;297:70;436:2;421:18;;415:25;386:5;;-1:-1:-1;478:15:234;;471:23;459:36;;449:64;;509:1;506;499:12;449:64;579:2;564:18;;;;558:25;14:575;;;;-1:-1:-1;;;14:575:234:o;594:127::-;655:10;650:3;646:20;643:1;636:31;686:4;683:1;676:15;710:4;707:1;700:15;726:380;805:1;801:12;;;;848;;;869:61;;923:4;915:6;911:17;901:27;;869:61;976:2;968:6;965:14;945:18;942:38;939:161;;1022:10;1017:3;1013:20;1010:1;1003:31;1057:4;1054:1;1047:15;1085:4;1082:1;1075:15;939:161;;726:380;;;:::o;1237:545::-;1339:2;1334:3;1331:11;1328:448;;;1375:1;1400:5;1396:2;1389:17;1445:4;1441:2;1431:19;1515:2;1503:10;1499:19;1496:1;1492:27;1486:4;1482:38;1551:4;1539:10;1536:20;1533:47;;;-1:-1:-1;1574:4:234;1533:47;1629:2;1624:3;1620:12;1617:1;1613:20;1607:4;1603:31;1593:41;;1684:82;1702:2;1695:5;1692:13;1684:82;;;1747:17;;;1728:1;1717:13;1684:82;;;1688:3;;;1328:448;1237:545;;;:::o;1958:1352::-;2078:10;;-1:-1:-1;;;;;2100:30:234;;2097:56;;;2133:18;;:::i;:::-;2162:97;2252:6;2212:38;2244:4;2238:11;2212:38;:::i;:::-;2206:4;2162:97;:::i;:::-;2314:4;;2378:2;2367:14;;2395:1;2390:663;;;;3097:1;3114:6;3111:89;;;-1:-1:-1;3166:19:234;;;3160:26;3111:89;-1:-1:-1;;1915:1:234;1911:11;;;1907:24;1903:29;1893:40;1939:1;1935:11;;;1890:57;3213:81;;2360:944;;2390:663;1184:1;1177:14;;;1221:4;1208:18;;-1:-1:-1;;2426:20:234;;;2544:236;2558:7;2555:1;2552:14;2544:236;;;2647:19;;;2641:26;2626:42;;2739:27;;;;2707:1;2695:14;;;;2574:19;;2544:236;;;2548:3;2808:6;2799:7;2796:19;2793:201;;;2869:19;;;2863:26;-1:-1:-1;;2952:1:234;2948:14;;;2964:3;2944:24;2940:37;2936:42;2921:58;2906:74;;2793:201;-1:-1:-1;;;;;3040:1:234;3024:14;;;3020:22;3007:36;;-1:-1:-1;1958:1352:234:o;3315:844::-;3445:3;3474:1;3507:6;3501:13;3537:36;3563:9;3537:36;:::i;:::-;3592:1;3609:18;;;3636:133;;;;3783:1;3778:356;;;;3602:532;;3636:133;-1:-1:-1;;3669:24:234;;3657:37;;3742:14;;3735:22;3723:35;;3714:45;;;-1:-1:-1;3636:133:234;;3778:356;3809:6;3806:1;3799:17;3839:4;3884:2;3881:1;3871:16;3909:1;3923:165;3937:6;3934:1;3931:13;3923:165;;;4015:14;;4002:11;;;3995:35;4058:16;;;;3952:10;;3923:165;;;3927:3;;;4117:6;4112:3;4108:16;4101:23;;3602:532;-1:-1:-1;4150:3:234;;3315:844;-1:-1:-1;;;;;;3315:844:234:o;4164:489::-;805:4275:139;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052600436106102675760003560e01c80637a28fb8811610144578063b7009613116100b6578063dd62ed3e1161007a578063dd62ed3e146107ac578063e688747b146107e4578063ea7ca27614610827578063ed0d0efb1461086b578063f2fde38b14610898578063f5eb42dc146108b857600080fd5b8063b700961314610701578063bf7e214f14610721578063c53a398514610741578063d5002f2e14610777578063d505accf1461078c57600080fd5b80638fcb4e5b116101085780638fcb4e5b1461065957806395d89b41146106795780639dc29fac1461068e578063a0712d68146106ae578063a1903eab146106ce578063a9059cbb146106e157600080fd5b80637a28fb88146105805780637a8c63b5146105a05780637a9e5e4b146105d45780637ecebe00146105f45780638da5cb5b1461062157600080fd5b80633644e515116101dd5780634b5159da116101a15780634b5159da146104be578063679aefce146104de57806367aff484146104f35780636d7804591461051357806370a0823114610533578063728b952b1461056057600080fd5b80633644e5151461044057806337cfdaca1461045557806340c10f191461046a57806342966c681461048a57806347b714e0146104aa57600080fd5b806318160ddd1161022f57806318160ddd146103505780631920845114610366578063239c70ae1461038657806323b872dd146103ba578063313ce567146103da57806334fcf4371461042057600080fd5b806306a36aee1461026c57806306fdde03146102ac578063095ea7b3146102ce5780630bade8a4146102fe5780630ea9b75b1461032e575b600080fd5b34801561027857600080fd5b50610299610287366004611a16565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102b857600080fd5b506102c16108d8565b6040516102a39190611a33565b3480156102da57600080fd5b506102ee6102e9366004611a81565b610966565b60405190151581526020016102a3565b34801561030a57600080fd5b506102ee610319366004611aca565b600a6020526000908152604090205460ff1681565b34801561033a57600080fd5b5061034e610349366004611b04565b6109d3565b005b34801561035c57600080fd5b5061029960025481565b34801561037257600080fd5b50610299610381366004611b4b565b610ab4565b34801561039257600080fd5b506102997f000000000000000000000000000000000000000000000000000000000000000081565b3480156103c657600080fd5b506102ee6103d5366004611b64565b610ad2565b3480156103e657600080fd5b5061040e7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016102a3565b34801561042c57600080fd5b5061034e61043b366004611b4b565b610bb4565b34801561044c57600080fd5b50610299610c19565b34801561046157600080fd5b50610299610c74565b34801561047657600080fd5b5061034e610485366004611a81565b610c8b565b34801561049657600080fd5b5061034e6104a5366004611b4b565b610d61565b3480156104b657600080fd5b506000610299565b3480156104ca57600080fd5b5061034e6104d9366004611ba5565b610dc6565b3480156104ea57600080fd5b50600c54610299565b3480156104ff57600080fd5b5061034e61050e366004611bdc565b610e58565b34801561051f57600080fd5b5061029961052e366004611b64565b610f20565b34801561053f57600080fd5b5061029961054e366004611a16565b60036020526000908152604090205481565b34801561056c57600080fd5b5061034e61057b366004611c0a565b610f58565b34801561058c57600080fd5b5061029961059b366004611b4b565b610fe1565b3480156105ac57600080fd5b506102ee7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105e057600080fd5b5061034e6105ef366004611a16565b610ff6565b34801561060057600080fd5b5061029961060f366004611a16565b60056020526000908152604090205481565b34801561062d57600080fd5b50600654610641906001600160a01b031681565b6040516001600160a01b0390911681526020016102a3565b34801561066557600080fd5b50610299610674366004611a81565b6110e0565b34801561068557600080fd5b506102c161110b565b34801561069a57600080fd5b5061034e6106a9366004611a81565b611118565b3480156106ba57600080fd5b5061034e6106c9366004611b4b565b61117a565b6102996106dc366004611a16565b61124c565b3480156106ed57600080fd5b506102ee6106fc366004611a81565b6112d8565b34801561070d57600080fd5b506102ee61071c366004611c38565b61133e565b34801561072d57600080fd5b50600754610641906001600160a01b031681565b34801561074d57600080fd5b5061064161075c366004611a16565b6008602052600090815260409020546001600160a01b031681565b34801561078357600080fd5b50600f54610299565b34801561079857600080fd5b5061034e6107a7366004611c7f565b61143c565b3480156107b857600080fd5b506102996107c7366004611c0a565b600460209081526000928352604080842090915290825290205481565b3480156107f057600080fd5b506102ee6107ff366004611ced565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b34801561083357600080fd5b506102ee610842366004611d20565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b34801561087757600080fd5b50610299610886366004611aca565b600b6020526000908152604090205481565b3480156108a457600080fd5b5061034e6108b3366004611a16565b611680565b3480156108c457600080fd5b506102996108d3366004611a16565b6116fe565b600080546108e590611d4c565b80601f016020809104026020016040519081016040528092919081815260200182805461091190611d4c565b801561095e5780601f106109335761010080835404028352916020019161095e565b820191906000526020600020905b81548152906001019060200180831161094157829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109c19086815260200190565b60405180910390a35060015b92915050565b6109e9336000356001600160e01b031916611733565b610a0e5760405162461bcd60e51b8152600401610a0590611d86565b60405180910390fd5b8015610a3e576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a65565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610aa7911515815260200190565b60405180910390a3505050565b60006109cd610ac2600f5490565b610aca610c74565b8491906117dd565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610b2e57610b098382611dc2565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b56908490611dc2565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611f0983398151915290610b9f9087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610c0c57610bf0336000356001600160e01b031916611733565b610c0c5760405162461bcd60e51b8152600401610a0590611dd5565b610c146117fb565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c4f57610c4a61182c565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610c7e6118c6565b600e54610c4a9190611e0c565b7f000000000000000000000000000000000000000000000000000000000000000015610ce357610cc7336000356001600160e01b031916611733565b610ce35760405162461bcd60e51b8152600401610a0590611dd5565b7f0000000000000000000000000000000000000000000000000000000000000000811115610d535760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a05565b610d5d828261191b565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610db957610d9d336000356001600160e01b031916611733565b610db95760405162461bcd60e51b8152600401610a0590611dd5565b610dc33382611975565b50565b610ddc336000356001600160e01b031916611733565b610df85760405162461bcd60e51b8152600401610a0590611d86565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610e6e336000356001600160e01b031916611733565b610e8a5760405162461bcd60e51b8152600401610a0590611d86565b8015610eb9576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610edf565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610aa7911515815260200190565b6000610f2a6117fb565b6000610f42610f37610c74565b600f548591906117dd565b9050610f4f858583610ad2565b50949350505050565b610f6e336000356001600160e01b031916611733565b610f8a5760405162461bcd60e51b8152600401610a0590611d86565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b60006109cd610fee610c74565b600f54610aca565b6006546001600160a01b031633148061108b575060075460405163b700961360e01b81526001600160a01b039091169063b70096139061104a90339030906001600160e01b03196000351690600401611e1f565b602060405180830381865afa158015611067573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108b9190611e4c565b61109457600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b60006110ea6117fb565b60006110f7610f37610c74565b905061110384826112d8565b509392505050565b600180546108e590611d4c565b7f00000000000000000000000000000000000000000000000000000000000000001561117057611154336000356001600160e01b031916611733565b6111705760405162461bcd60e51b8152600401610a0590611dd5565b610d5d8282611975565b7f0000000000000000000000000000000000000000000000000000000000000000156111d2576111b6336000356001600160e01b031916611733565b6111d25760405162461bcd60e51b8152600401610a0590611dd5565b7f00000000000000000000000000000000000000000000000000000000000000008111156112425760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e746044820152606401610a05565b610dc3338261191b565b60006112566117fb565b600f5460000361127d5734600f819055600e81905561127690339061191b565b5034919050565b600061129b61128b600f5490565b611293610c74565b3491906117dd565b905034600e60008282546112af9190611e0c565b9250508190555080600f60008282546112c89190611e0c565b909155506109cd9050333461191b565b336000908152600360205260408120805483919083906112f9908490611dc2565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611f09833981519152906109c19086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156113da5760405163b700961360e01b81526001600160a01b0382169063b70096139061139190889088908890600401611e1f565b602060405180830381865afa1580156113ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d29190611e4c565b915050610bad565b6001600160e01b031983166000908152600a602052604090205460ff168061143357506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561148c5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610a05565b60006001611498610c19565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156115a4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906115da5750876001600160a01b0316816001600160a01b0316145b6116175760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610a05565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611696336000356001600160e01b031916611733565b6116b25760405162461bcd60e51b8152600401610a0590611d86565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610bad611723600f5490565b61172b610c74565b8391906117dd565b6007546000906001600160a01b031680158015906117bd575060405163b700961360e01b81526001600160a01b0382169063b70096139061177c90879030908890600401611e1f565b602060405180830381865afa158015611799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117bd9190611e4c565b806117d557506006546001600160a01b038581169116145b949350505050565b60008260001904841183021582026117f457600080fd5b5091020490565b60006118056118c6565b905080156118255780600e600082825461181f9190611e0c565b90915550505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161185e9190611e69565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600c546000036118d85750600090565b60006118f66301e13380600d54426118f09190611dc2565b906119d7565b90506000610bad61191283600c546119ec90919063ffffffff16565b600e54906119ec565b806002600082825461192d9190611e0c565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611f0983398151915291015b60405180910390a35050565b6001600160a01b0382166000908152600360205260408120805483929061199d908490611dc2565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611f0983398151915290602001611969565b6000610bad83670de0b6b3a7640000846117dd565b6000610bad8383670de0b6b3a76400006117dd565b6001600160a01b0381168114610dc357600080fd5b600060208284031215611a2857600080fd5b8135610bad81611a01565b600060208083528351808285015260005b81811015611a6057858101830151858201604001528201611a44565b506000604082860101526040601f19601f8301168501019250505092915050565b60008060408385031215611a9457600080fd5b8235611a9f81611a01565b946020939093013593505050565b80356001600160e01b031981168114611ac557600080fd5b919050565b600060208284031215611adc57600080fd5b610bad82611aad565b803560ff81168114611ac557600080fd5b8015158114610dc357600080fd5b600080600060608486031215611b1957600080fd5b611b2284611ae5565b9250611b3060208501611aad565b91506040840135611b4081611af6565b809150509250925092565b600060208284031215611b5d57600080fd5b5035919050565b600080600060608486031215611b7957600080fd5b8335611b8481611a01565b92506020840135611b9481611a01565b929592945050506040919091013590565b60008060408385031215611bb857600080fd5b611bc183611aad565b91506020830135611bd181611af6565b809150509250929050565b600080600060608486031215611bf157600080fd5b8335611bfc81611a01565b9250611b3060208501611ae5565b60008060408385031215611c1d57600080fd5b8235611c2881611a01565b91506020830135611bd181611a01565b600080600060608486031215611c4d57600080fd5b8335611c5881611a01565b92506020840135611c6881611a01565b9150611c7660408501611aad565b90509250925092565b600080600080600080600060e0888a031215611c9a57600080fd5b8735611ca581611a01565b96506020880135611cb581611a01565b95506040880135945060608801359350611cd160808901611ae5565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611d0057600080fd5b611d0983611ae5565b9150611d1760208401611aad565b90509250929050565b60008060408385031215611d3357600080fd5b8235611d3e81611a01565b9150611d1760208401611ae5565b600181811c90821680611d6057607f821691505b602082108103611d8057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b818103818111156109cd576109cd611dac565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b808201808211156109cd576109cd611dac565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611e5e57600080fd5b8151610bad81611af6565b600080835481600182811c915080831680611e8557607f831692505b60208084108203611ea457634e487b7160e01b86526022600452602486fd5b818015611eb85760018114611ecd57611efa565b60ff1986168952841515850289019650611efa565b60008a81526020902060005b86811015611ef25781548b820152908501908301611ed9565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122024b54ff7e858840aabfce8b64b8a0d6effc4a2d30deec3f424b5f0a87ae7a78f64736f6c63430008140033",
        "sourceMap": "805:4275:139:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1622:47:171;;;;;;;;;;-1:-1:-1;1622:47:171;;;;;:::i;:::-;;;;;;;;;;;;;;;;;548:25:234;;;536:2;521:18;1622:47:171;;;;;;;;1031:18:172;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;2461:211::-;;;;;;;;;;-1:-1:-1;2461:211:172;;;;;:::i;:::-;;:::i;:::-;;;1622:14:234;;1615:22;1597:41;;1585:2;1570:18;2461:211:172;1457:187:234;1676:49:171;;;;;;;;;;-1:-1:-1;1676:49:171;;;;;:::i;:::-;;;;;;;;;;;;;;;;4390:396;;;;;;;;;;-1:-1:-1;4390:396:171;;;;;:::i;:::-;;:::i;:::-;;1304:26:172;;;;;;;;;;;;;;;;3318:182:139;;;;;;;;;;-1:-1:-1;3318:182:139;;;;;:::i;:::-;;:::i;358:38:129:-;;;;;;;;;;;;;;;3057:592:172;;;;;;;;;;-1:-1:-1;3057:592:172;;;;;:::i;:::-;;:::i;1083:31::-;;;;;;;;;;;;;;;;;;3688:4:234;3676:17;;;3658:36;;3646:2;3631:18;1083:31:172;3516:184:234;4263:122:139;;;;;;;;;;-1:-1:-1;4263:122:139;;;;;:::i;:::-;;:::i;5327:177:172:-;;;;;;;;;;;;;:::i;3803:125:139:-;;;;;;;;;;;;;:::i;1242:233:129:-;;;;;;;;;;-1:-1:-1;1242:233:129;;;;;:::i;:::-;;:::i;1481:111::-;;;;;;;;;;-1:-1:-1;1481:111:129;;;;;:::i;:::-;;:::i;3712:85:139:-;;;;;;;;;;-1:-1:-1;3763:7:139;3712:85;;3448:210:171;;;;;;;;;;-1:-1:-1;3448:210:171;;;;;:::i;:::-;;:::i;4391:80:139:-;;;;;;;;;;-1:-1:-1;4459:5:139;;4391:80;;3853:337:171;;;;;;;;;;-1:-1:-1;3853:337:171;;;;;:::i;:::-;;:::i;2781:531:139:-;;;;;;;;;;-1:-1:-1;2781:531:139;;;;;:::i;:::-;;:::i;1337:44:172:-;;;;;;;;;;-1:-1:-1;1337:44:172;;;;;:::i;:::-;;;;;;;;;;;;;;3006:241:171;;;;;;;;;;-1:-1:-1;3006:241:171;;;;;:::i;:::-;;:::i;3506:200:139:-;;;;;;;;;;-1:-1:-1;3506:200:139;;;;;:::i;:::-;;:::i;313:39:129:-;;;;;;;;;;;;;;;1523:434:170;;;;;;;;;;-1:-1:-1;1523:434:170;;;;;:::i;:::-;;:::i;1751:41:172:-;;;;;;;;;;-1:-1:-1;1751:41:172;;;;;:::i;:::-;;;;;;;;;;;;;;562:20:170;;;;;;;;;;-1:-1:-1;562:20:170;;;;-1:-1:-1;;;;;562:20:170;;;;;;-1:-1:-1;;;;;5327:32:234;;;5309:51;;5297:2;5282:18;562:20:170;5163:203:234;2286:489:139;;;;;;;;;;-1:-1:-1;2286:489:139;;;;;:::i;:::-;;:::i;1056:20:172:-;;;;;;;;;;;;;:::i;1598:155:129:-;;;;;;;;;;-1:-1:-1;1598:155:129;;;;;:::i;:::-;;:::i;1047:189::-;;;;;;;;;;-1:-1:-1;1047:189:129;;;;;:::i;:::-;;:::i;1501:779:139:-;;;;;;:::i;:::-;;:::i;2678:373:172:-;;;;;;;;;;-1:-1:-1;2678:373:172;;;;;:::i;:::-;;:::i;2336:465:171:-;;;;;;;;;;-1:-1:-1;2336:465:171;;;;;:::i;:::-;;:::i;589:26:170:-;;;;;;;;;;-1:-1:-1;589:26:170;;;;-1:-1:-1;;;;;589:26:170;;;1369:61:171;;;;;;;;;;-1:-1:-1;1369:61:171;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:171;;;3934:91:139;;;;;;;;;;-1:-1:-1;4007:11:139;;3934:91;;3838:1483:172;;;;;;;;;;-1:-1:-1;3838:1483:172;;;;;:::i;:::-;;:::i;1388:64::-;;;;;;;;;;-1:-1:-1;1388:64:172;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1958:186:171;;;;;;;;;;-1:-1:-1;1958:186:171;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:171;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;;;;;-1:-1:-1;1795:157:171;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:171;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;;;;;-1:-1:-1;1732:56:171;;;;;:::i;:::-;;;;;;;;;;;;;;1963:164:170;;;;;;;;;;-1:-1:-1;1963:164:170;;;;;:::i;:::-;;:::i;4031:208:139:-;;;;;;;;;;-1:-1:-1;4031:208:139;;;;;:::i;:::-;;:::i;1031:18:172:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2461:211::-;2561:10;2535:4;2551:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2551:30:172;;;;;;;;;;:39;;;2606:37;2535:4;;2551:30;;2606:37;;;;2584:6;548:25:234;;536:2;521:18;;402:177;2606:37:172;;;;;;;;-1:-1:-1;2661:4:172;2461:211;;;;;:::o;4390:396:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;;;;;;;;;4535:7:171::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:171;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:171;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:171::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1622:14:234::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;4730:49:171::1;;;;;;;;4390:396:::0;;;:::o;3318:182:139:-;3405:7;3431:62;3453:16;4007:11;;;3934:91;3453:16;3471:21;:19;:21::i;:::-;3431:10;;:62;:21;:62::i;3057:592:172:-;-1:-1:-1;;;;;3209:15:172;;3175:4;3209:15;;;:9;:15;;;;;;;;3225:10;3209:27;;;;;;;;-1:-1:-1;;3287:28:172;;3283:80;;3347:16;3357:6;3347:7;:16;:::i;:::-;-1:-1:-1;;;;;3317:15:172;;;;;;:9;:15;;;;;;;;3333:10;3317:27;;;;;;;:46;3283:80;-1:-1:-1;;;;;3374:15:172;;;;;;:9;:15;;;;;:25;;3393:6;;3374:15;:25;;3393:6;;3374:25;:::i;:::-;;;;-1:-1:-1;;;;;;;3545:13:172;;;;;;;:9;:13;;;;;;;:23;;;;;;3594:26;3545:13;;3594:26;;;-1:-1:-1;;;;;;;;;;;3594:26:172;;;3562:6;548:25:234;;536:2;521:18;;402:177;3594:26:172;;;;;;;;3638:4;3631:11;;;3057:592;;;;;;:::o;4263:122:139:-;859:17:129;855:169;;;917:33;930:10;942:7;;-1:-1:-1;;;;;;942:7:129;917:12;:33::i;:::-;892:121;;;;-1:-1:-1;;;892:121:129;;;;;;;:::i;:::-;4345:9:139::1;:7;:9::i;:::-;4364:5;:14:::0;4263:122::o;5327:177:172:-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;:::-;5403:94;;5327:177;:::o;5410:87::-;-1:-1:-1;5446:24:172;;5327:177::o;3803:125:139:-;3855:7;3900:21;:19;:21::i;:::-;3881:16;;:40;;;;:::i;1242:233:129:-;859:17;855:169;;;917:33;930:10;942:7;;-1:-1:-1;;;;;;942:7:129;917:12;:33::i;:::-;892:121;;;;-1:-1:-1;;;892:121:129;;;;;;;:::i;:::-;1382:13:::1;1372:6;:23;;1364:68;;;::::0;-1:-1:-1;;;1364:68:129;;9457:2:234;1364:68:129::1;::::0;::::1;9439:21:234::0;;;9476:18;;;9469:30;9535:34;9515:18;;;9508:62;9587:18;;1364:68:129::1;9255:356:234::0;1364:68:129::1;1442:26;1448:11;1461:6;1442:5;:26::i;:::-;1242:233:::0;;:::o;1481:111::-;859:17;855:169;;;917:33;930:10;942:7;;-1:-1:-1;;;;;;942:7:129;917:12;:33::i;:::-;892:121;;;;-1:-1:-1;;;892:121:129;;;;;;;:::i;:::-;1560:25:::1;1566:10;1578:6;1560:5;:25::i;:::-;1481:111:::0;:::o;3448:210:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:171;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:171::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1597:41:234;;;3606:45:171::1;::::0;1570:18:234;3606:45:171::1;;;;;;;3448:210:::0;;:::o;3853:337::-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;3986:7:171::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:171;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:171;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:171::1;;4175:7;4147:36;;;;1622:14:234::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;2781:531:139;2917:7;2964:9;:7;:9::i;:::-;3054:19;3076:99;3114:21;:19;:21::i;:::-;4007:11;;3076:13;;:99;:24;:99::i;:::-;3054:121;;3230:46;3243:7;3252:10;3264:11;3230:12;:46::i;:::-;-1:-1:-1;3294:11:139;2781:531;-1:-1:-1;;;;2781:531:139:o;3006:241:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:171;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:171::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;3506:200:139:-;3596:7;3634:65;3659:21;:19;:21::i;:::-;4007:11;;3682:16;3934:91;1523:434:170;1794:5;;-1:-1:-1;;;;;1794:5:170;1780:10;:19;;:76;;-1:-1:-1;1803:9:170;;:53;;-1:-1:-1;;;1803:53:170;;-1:-1:-1;;;;;1803:9:170;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:170;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:170;-1:-1:-1;;;;;1868:24:170;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:170;1523:434;:::o;2286:489:139:-;2393:7;2440:9;:7;:9::i;:::-;2530:19;2552:99;2590:21;:19;:21::i;2552:99::-;2530:121;;2706:33;2715:10;2727:11;2706:8;:33::i;:::-;-1:-1:-1;2757:11:139;2286:489;-1:-1:-1;;;2286:489:139:o;1056:20:172:-;;;;;;;:::i;1598:155:129:-;859:17;855:169;;;917:33;930:10;942:7;;-1:-1:-1;;;;;;942:7:129;917:12;:33::i;:::-;892:121;;;;-1:-1:-1;;;892:121:129;;;;;;;:::i;:::-;1720:26:::1;1726:11;1739:6;1720:5;:26::i;1047:189::-:0;859:17;855:169;;;917:33;930:10;942:7;;-1:-1:-1;;;;;;942:7:129;917:12;:33::i;:::-;892:121;;;;-1:-1:-1;;;892:121:129;;;;;;;:::i;:::-;1144:13:::1;1134:6;:23;;1126:68;;;::::0;-1:-1:-1;;;1126:68:129;;9457:2:234;1126:68:129::1;::::0;::::1;9439:21:234::0;;;9476:18;;;9469:30;9535:34;9515:18;;;9508:62;9587:18;;1126:68:129::1;9255:356:234::0;1126:68:129::1;1204:25;1210:10;1222:6;1204:5;:25::i;1501:779:139:-:0;1552:7;1599:9;:7;:9::i;:::-;4007:11;;1701:1;1681:21;1677:189;;1732:9;1718:11;:23;;;1755:16;:28;;;1797;;1803:10;;1797:5;:28::i;:::-;-1:-1:-1;1846:9:139;;1501:779;-1:-1:-1;1501:779:139:o;1677:189::-;1947:14;1964:95;1998:16;4007:11;;;3934:91;1998:16;2028:21;:19;:21::i;:::-;1964:9;;:95;:20;:95::i;:::-;1947:112;;2124:9;2104:16;;:29;;;;;;;:::i;:::-;;;;;;;;2158:6;2143:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;2221:28:139;;-1:-1:-1;2227:10:139;2239:9;2221:5;:28::i;2678:373:172:-;2774:10;2748:4;2764:21;;;:9;:21;;;;;:31;;2789:6;;2764:21;2748:4;;2764:31;;2789:6;;2764:31;:::i;:::-;;;;-1:-1:-1;;;;;;;2941:13:172;;;;;;:9;:13;;;;;;;:23;;;;;;2990:32;2999:10;;-1:-1:-1;;;;;;;;;;;2990:32:172;;;2958:6;548:25:234;;536:2;521:18;;402:177;2336:465:171;-1:-1:-1;;;;;2515:32:171;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:171;;-1:-1:-1;;;;;2609:23:171;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:171;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:171;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:171;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;2336:465;-1:-1:-1;;;;;2336:465:171:o;3838:1483:172:-;4057:15;4045:8;:27;;4037:63;;;;-1:-1:-1;;;4037:63:172;;10473:2:234;4037:63:172;;;10455:21:234;10512:2;10492:18;;;10485:30;10551:25;10531:18;;;10524:53;10594:18;;4037:63:172;10271:347:234;4037:63:172;4265:24;4292:805;4428:18;:16;:18::i;:::-;-1:-1:-1;;;;;4873:13:172;;;;;;;:6;:13;;;;;;;;;:15;;;;;;;;4511:449;;4555:165;4511:449;;;10910:25:234;10989:18;;;10982:43;;;;11061:15;;;11041:18;;;11034:43;11093:18;;;11086:34;;;11136:19;;;11129:35;;;;11180:19;;;;11173:35;;;4511:449:172;;;;;;;;;;10882:19:234;;;4511:449:172;;;4472:514;;;;;;;;-1:-1:-1;;;4350:658:172;;;11477:27:234;11520:11;;;11513:27;;;;11556:12;;;11549:28;;;;11593:12;;4350:658:172;;;-1:-1:-1;;4350:658:172;;;;;;;;;4319:707;;4350:658;4319:707;;;;4292:805;;;;;;;;;11843:25:234;11916:4;11904:17;;11884:18;;;11877:45;11938:18;;;11931:34;;;11981:18;;;11974:34;;;11815:19;;4292:805:172;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4292:805:172;;-1:-1:-1;;4292:805:172;;;-1:-1:-1;;;;;;;5120:30:172;;;;;;:59;;;5174:5;-1:-1:-1;;;;;5154:25:172;:16;-1:-1:-1;;;;;5154:25:172;;5120:59;5112:86;;;;-1:-1:-1;;;5112:86:172;;12221:2:234;5112:86:172;;;12203:21:234;12260:2;12240:18;;;12233:30;-1:-1:-1;;;12279:18:234;;;12272:44;12333:18;;5112:86:172;12019:338:234;5112:86:172;-1:-1:-1;;;;;5213:27:172;;;;;;;:9;:27;;;;;;;;:36;;;;;;;;;;;;;:44;;;5283:31;548:25:234;;;5213:36:172;;5283:31;;;;;521:18:234;5283:31:172;;;;;;;3838:1483;;;;;;;:::o;1963:164:170:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:170::1;-1:-1:-1::0;;;;;2046:16:170;::::1;::::0;;::::1;::::0;;;2078:42:::1;::::0;2099:10:::1;::::0;2078:42:::1;::::0;-1:-1:-1;;2078:42:170::1;1963:164:::0;:::o;4031:208:139:-;-1:-1:-1;;;;;4132:19:139;;4090:7;4132:19;;;:9;:19;;;;;;4168:64;4192:16;4007:11;;;3934:91;4192:16;4210:21;:19;:21::i;:::-;4168:12;;:64;:23;:64::i;977:540:170:-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:170;1415:27;;;;;:77;;-1:-1:-1;1446:46:170;;-1:-1:-1;;;1446:46:170;;-1:-1:-1;;;;;1446:12:170;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:170;;-1:-1:-1;;;;;1497:13:170;;;1505:5;;1497:13;1414:96;1407:103;977:540;-1:-1:-1;;;;977:540:170:o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;4477:205:139:-;4515:16;4534:21;:19;:21::i;:::-;4515:40;-1:-1:-1;4569:12:139;;4565:71;;4617:8;4597:16;;:28;;;;;;;:::i;:::-;;;;-1:-1:-1;;4565:71:139;-1:-1:-1;4660:15:139;4645:12;:30;4477:205::o;5510:446:172:-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;13888:25:234;;;;13929:18;;13922:34;;;;5833:14:172;13972:18:234;;;13965:34;5869:13:172;14015:18:234;;;14008:34;5912:4:172;14058:19:234;;;14051:61;13860:19;;5640:295:172;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;4688:390:139:-;4742:7;4765:5;;4774:1;4765:10;4761:49;;-1:-1:-1;4798:1:139;;4688:390::o;4761:49::-;4873:19;4895:72;4949:8;4914:12;;4896:15;:30;;;;:::i;:::-;4895:40;;:72::i;:::-;4873:94;;4977:15;4995:52;5020:26;5034:11;5020:5;;:13;;:26;;;;:::i;:::-;4995:16;;;:24;:52::i;6150:325:172:-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;6387:13:172;;;;;;:9;:13;;;;;;;;:23;;;;;;6436:32;548:25:234;;;-1:-1:-1;;;;;;;;;;;6436:32:172;521:18:234;6436:32:172;;;;;;;;6150:325;;:::o;6481:328::-;-1:-1:-1;;;;;6553:15:172;;;;;;:9;:15;;;;;:25;;6572:6;;6553:15;:25;;6572:6;;6553:25;:::i;:::-;;;;-1:-1:-1;;6721:11:172;:21;;;;;;;6768:34;;548:25:234;;;-1:-1:-1;;;;;;;6768:34:172;;;-1:-1:-1;;;;;;;;;;;6768:34:172;536:2:234;521:18;6768:34:172;402:177:234;1884:164:122;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;1610:118::-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;14:131:234:-;-1:-1:-1;;;;;89:31:234;;79:42;;69:70;;135:1;132;125:12;150:247;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;584:548::-;696:4;725:2;754;743:9;736:21;786:6;780:13;829:6;824:2;813:9;809:18;802:34;854:1;864:140;878:6;875:1;872:13;864:140;;;973:14;;;969:23;;963:30;939:17;;;958:2;935:26;928:66;893:10;;864:140;;;868:3;1053:1;1048:2;1039:6;1028:9;1024:22;1020:31;1013:42;1123:2;1116;1112:7;1107:2;1099:6;1095:15;1091:29;1080:9;1076:45;1072:54;1064:62;;;;584:548;;;;:::o;1137:315::-;1205:6;1213;1266:2;1254:9;1245:7;1241:23;1237:32;1234:52;;;1282:1;1279;1272:12;1234:52;1321:9;1308:23;1340:31;1365:5;1340:31;:::i;:::-;1390:5;1442:2;1427:18;;;;1414:32;;-1:-1:-1;;;1137:315:234:o;1649:173::-;1716:20;;-1:-1:-1;;;;;;1765:32:234;;1755:43;;1745:71;;1812:1;1809;1802:12;1745:71;1649:173;;;:::o;1827:184::-;1885:6;1938:2;1926:9;1917:7;1913:23;1909:32;1906:52;;;1954:1;1951;1944:12;1906:52;1977:28;1995:9;1977:28;:::i;2016:156::-;2082:20;;2142:4;2131:16;;2121:27;;2111:55;;2162:1;2159;2152:12;2177:118;2263:5;2256:13;2249:21;2242:5;2239:32;2229:60;;2285:1;2282;2275:12;2300:383;2371:6;2379;2387;2440:2;2428:9;2419:7;2415:23;2411:32;2408:52;;;2456:1;2453;2446:12;2408:52;2479:27;2496:9;2479:27;:::i;:::-;2469:37;;2525;2558:2;2547:9;2543:18;2525:37;:::i;:::-;2515:47;;2612:2;2601:9;2597:18;2584:32;2625:28;2647:5;2625:28;:::i;:::-;2672:5;2662:15;;;2300:383;;;;;:::o;2870:180::-;2929:6;2982:2;2970:9;2961:7;2957:23;2953:32;2950:52;;;2998:1;2995;2988:12;2950:52;-1:-1:-1;3021:23:234;;2870:180;-1:-1:-1;2870:180:234:o;3055:456::-;3132:6;3140;3148;3201:2;3189:9;3180:7;3176:23;3172:32;3169:52;;;3217:1;3214;3207:12;3169:52;3256:9;3243:23;3275:31;3300:5;3275:31;:::i;:::-;3325:5;-1:-1:-1;3382:2:234;3367:18;;3354:32;3395:33;3354:32;3395:33;:::i;:::-;3055:456;;3447:7;;-1:-1:-1;;;3501:2:234;3486:18;;;;3473:32;;3055:456::o;3705:313::-;3769:6;3777;3830:2;3818:9;3809:7;3805:23;3801:32;3798:52;;;3846:1;3843;3836:12;3798:52;3869:28;3887:9;3869:28;:::i;:::-;3859:38;;3947:2;3936:9;3932:18;3919:32;3960:28;3982:5;3960:28;:::i;:::-;4007:5;3997:15;;;3705:313;;;;;:::o;4023:452::-;4095:6;4103;4111;4164:2;4152:9;4143:7;4139:23;4135:32;4132:52;;;4180:1;4177;4170:12;4132:52;4219:9;4206:23;4238:31;4263:5;4238:31;:::i;:::-;4288:5;-1:-1:-1;4312:36:234;4344:2;4329:18;;4312:36;:::i;4480:407::-;4567:6;4575;4628:2;4616:9;4607:7;4603:23;4599:32;4596:52;;;4644:1;4641;4634:12;4596:52;4683:9;4670:23;4702:31;4727:5;4702:31;:::i;:::-;4752:5;-1:-1:-1;4809:2:234;4794:18;;4781:32;4822:33;4781:32;4822:33;:::i;5371:460::-;5447:6;5455;5463;5516:2;5504:9;5495:7;5491:23;5487:32;5484:52;;;5532:1;5529;5522:12;5484:52;5571:9;5558:23;5590:31;5615:5;5590:31;:::i;:::-;5640:5;-1:-1:-1;5697:2:234;5682:18;;5669:32;5710:33;5669:32;5710:33;:::i;:::-;5762:7;-1:-1:-1;5788:37:234;5821:2;5806:18;;5788:37;:::i;:::-;5778:47;;5371:460;;;;;:::o;6063:734::-;6174:6;6182;6190;6198;6206;6214;6222;6275:3;6263:9;6254:7;6250:23;6246:33;6243:53;;;6292:1;6289;6282:12;6243:53;6331:9;6318:23;6350:31;6375:5;6350:31;:::i;:::-;6400:5;-1:-1:-1;6457:2:234;6442:18;;6429:32;6470:33;6429:32;6470:33;:::i;:::-;6522:7;-1:-1:-1;6576:2:234;6561:18;;6548:32;;-1:-1:-1;6627:2:234;6612:18;;6599:32;;-1:-1:-1;6650:37:234;6682:3;6667:19;;6650:37;:::i;:::-;6640:47;;6734:3;6723:9;6719:19;6706:33;6696:43;;6786:3;6775:9;6771:19;6758:33;6748:43;;6063:734;;;;;;;;;;:::o;7195:254::-;7260:6;7268;7321:2;7309:9;7300:7;7296:23;7292:32;7289:52;;;7337:1;7334;7327:12;7289:52;7360:27;7377:9;7360:27;:::i;:::-;7350:37;;7406;7439:2;7428:9;7424:18;7406:37;:::i;:::-;7396:47;;7195:254;;;;;:::o;7454:317::-;7520:6;7528;7581:2;7569:9;7560:7;7556:23;7552:32;7549:52;;;7597:1;7594;7587:12;7549:52;7636:9;7623:23;7655:31;7680:5;7655:31;:::i;:::-;7705:5;-1:-1:-1;7729:36:234;7761:2;7746:18;;7729:36;:::i;7776:380::-;7855:1;7851:12;;;;7898;;;7919:61;;7973:4;7965:6;7961:17;7951:27;;7919:61;8026:2;8018:6;8015:14;7995:18;7992:38;7989:161;;8072:10;8067:3;8063:20;8060:1;8053:31;8107:4;8104:1;8097:15;8135:4;8132:1;8125:15;7989:161;;7776:380;;;:::o;8161:336::-;8363:2;8345:21;;;8402:2;8382:18;;;8375:30;-1:-1:-1;;;8436:2:234;8421:18;;8414:42;8488:2;8473:18;;8161:336::o;8502:127::-;8563:10;8558:3;8554:20;8551:1;8544:31;8594:4;8591:1;8584:15;8618:4;8615:1;8608:15;8634:128;8701:9;;;8722:11;;;8719:37;;;8736:18;;:::i;8767:353::-;8969:2;8951:21;;;9008:2;8988:18;;;8981:30;9047:31;9042:2;9027:18;;9020:59;9111:2;9096:18;;8767:353::o;9125:125::-;9190:9;;;9211:10;;;9208:36;;;9224:18;;:::i;9616:400::-;-1:-1:-1;;;;;9872:15:234;;;9854:34;;9924:15;;;;9919:2;9904:18;;9897:43;-1:-1:-1;;;;;;9976:33:234;;;9971:2;9956:18;;9949:61;9804:2;9789:18;;9616:400::o;10021:245::-;10088:6;10141:2;10129:9;10120:7;10116:23;10112:32;10109:52;;;10157:1;10154;10147:12;10109:52;10189:9;10183:16;10208:28;10230:5;10208:28;:::i;12491:1133::-;12621:3;12650:1;12683:6;12677:13;12713:3;12735:1;12763:9;12759:2;12755:18;12745:28;;12823:2;12812:9;12808:18;12845;12835:61;;12889:4;12881:6;12877:17;12867:27;;12835:61;12915:2;12963;12955:6;12952:14;12932:18;12929:38;12926:165;;-1:-1:-1;;;12990:33:234;;13046:4;13043:1;13036:15;13076:4;12997:3;13064:17;12926:165;13107:18;13134:133;;;;13281:1;13276:323;;;;13100:499;;13134:133;-1:-1:-1;;13167:24:234;;13155:37;;13240:14;;13233:22;13221:35;;13212:45;;;-1:-1:-1;13134:133:234;;13276:323;12438:1;12431:14;;;12475:4;12462:18;;13374:1;13388:165;13402:6;13399:1;13396:13;13388:165;;;13480:14;;13467:11;;;13460:35;13523:16;;;;13417:10;;13388:165;;;13392:3;;13582:6;13577:3;13573:16;13566:23;;13100:499;-1:-1:-1;13615:3:234;;12491:1133;-1:-1:-1;;;;;;;;12491:1133:234:o",
        "linkReferences": {},
        "immutableReferences": {
            "23357": [
                {
                    "start": 1458,
                    "length": 32
                },
                {
                    "start": 2998,
                    "length": 32
                },
                {
                    "start": 3213,
                    "length": 32
                },
                {
                    "start": 3427,
                    "length": 32
                },
                {
                    "start": 4378,
                    "length": 32
                },
                {
                    "start": 4476,
                    "length": 32
                }
            ],
            "23359": [
                {
                    "start": 920,
                    "length": 32
                },
                {
                    "start": 3301,
                    "length": 32
                },
                {
                    "start": 4564,
                    "length": 32
                }
            ],
            "72247": [
                {
                    "start": 1004,
                    "length": 32
                }
            ],
            "72261": [
                {
                    "start": 3101,
                    "length": 32
                }
            ],
            "72263": [
                {
                    "start": 3154,
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
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_initialRate\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_isCompetitionMode\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"_maxMintAmount\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBufferedEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"getPooledEthByShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ethAmount\",\"type\":\"uint256\"}],\"name\":\"getSharesByPooledEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalPooledEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isCompetitionMode\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxMintAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rate_\",\"type\":\"uint256\"}],\"name\":\"setRate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"sharesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"submit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferSharesFrom\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"MockLido\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"setRate(uint256)\":{\"notice\":\"Mock ///\"},\"submit(address)\":{\"notice\":\"Overrides ///\"}},\"notice\":\"This mock yield source will accrue interest at a specified rate         Every stateful interaction will accrue interest, so the interest         accrual will approximate continuous compounding as the contract         is called more frequently.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockLido.sol\":\"MockLido\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48\",\"dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA\"]},\"contracts/test/MockLido.sol\":{\"keccak256\":\"0x0e193c2d9de7ef2d0de4f268a2c7ea6dd389cc23c40f3dfdb93532b14c86ec82\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d65d053713f64b74c6f8cb6b2d1088867ebab06b0e68cc293fc8bbb887c349a8\",\"dweb:/ipfs/QmcvYbGSNgtGLgpYmRJCj2CC8bQEBrL57e9XZG5U4VtS4q\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}",
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
                        },
                        {
                            "internalType": "uint256",
                            "name": "_maxMintAmount",
                            "type": "uint256"
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "maxMintAmount",
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
                "keccak256": "0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5",
                "urls": [
                    "bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48",
                    "dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockLido.sol": {
                "keccak256": "0x0e193c2d9de7ef2d0de4f268a2c7ea6dd389cc23c40f3dfdb93532b14c86ec82",
                "urls": [
                    "bzz-raw://d65d053713f64b74c6f8cb6b2d1088867ebab06b0e68cc293fc8bbb887c349a8",
                    "dweb:/ipfs/QmcvYbGSNgtGLgpYmRJCj2CC8bQEBrL57e9XZG5U4VtS4q"
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
        "id": 26600,
        "exportedSymbols": {
            "ERC20Mintable": [
                23490
            ],
            "FixedPointMath": [
                18822
            ],
            "MockLido": [
                26599
            ],
            "MultiRolesAuthority": [
                72222
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:5042:139",
        "nodes": [
            {
                "id": 26253,
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
                "id": 26255,
                "nodeType": "ImportDirective",
                "src": "64:87:139",
                "nodes": [],
                "absolutePath": "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol",
                "file": "solmate/auth/authorities/MultiRolesAuthority.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26600,
                "sourceUnit": 72223,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26254,
                            "name": "MultiRolesAuthority",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 72222,
                            "src": "73:19:139",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26257,
                "nodeType": "ImportDirective",
                "src": "152:69:139",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../src/libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26600,
                "sourceUnit": 18823,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26256,
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
                "id": 26259,
                "nodeType": "ImportDirective",
                "src": "222:52:139",
                "nodes": [],
                "absolutePath": "contracts/test/ERC20Mintable.sol",
                "file": "./ERC20Mintable.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26600,
                "sourceUnit": 23491,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26258,
                            "name": "ERC20Mintable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23490,
                            "src": "231:13:139",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26599,
                "nodeType": "ContractDefinition",
                "src": "805:4275:139",
                "nodes": [
                    {
                        "id": 26267,
                        "nodeType": "UsingForDirective",
                        "src": "867:33:139",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 26265,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "873:14:139"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "873:14:139"
                        },
                        "typeName": {
                            "id": 26266,
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
                        "id": 26269,
                        "nodeType": "VariableDeclaration",
                        "src": "928:22:139",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_rate",
                        "nameLocation": "945:5:139",
                        "scope": 26599,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 26268,
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
                        "id": 26271,
                        "nodeType": "VariableDeclaration",
                        "src": "956:29:139",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_lastUpdated",
                        "nameLocation": "973:12:139",
                        "scope": 26599,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 26270,
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
                        "id": 26273,
                        "nodeType": "VariableDeclaration",
                        "src": "1010:24:139",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "totalPooledEther",
                        "nameLocation": "1018:16:139",
                        "scope": 26599,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 26272,
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
                        "id": 26275,
                        "nodeType": "VariableDeclaration",
                        "src": "1040:19:139",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "totalShares",
                        "nameLocation": "1048:11:139",
                        "scope": 26599,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 26274,
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
                        "id": 26304,
                        "nodeType": "FunctionDefinition",
                        "src": "1066:406:139",
                        "nodes": [],
                        "body": {
                            "id": 26303,
                            "nodeType": "Block",
                            "src": "1395:77:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26296,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26294,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26269,
                                            "src": "1405:5:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 26295,
                                            "name": "_initialRate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26277,
                                            "src": "1413:12:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1405:20:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26297,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1405:20:139"
                                },
                                {
                                    "expression": {
                                        "id": 26301,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26298,
                                            "name": "_lastUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26271,
                                            "src": "1435:12:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 26299,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "1450:5:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 26300,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1456:9:139",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "1450:15:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1435:30:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26302,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1435:30:139"
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
                                        "id": 26286,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1238:25:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_d0475442dbe1381d44afad818dc97da0a5b374312c7fe323cc2a3df88293e4ba",
                                            "typeString": "literal_string \"Liquid staked Ether 2.0\""
                                        },
                                        "value": "Liquid staked Ether 2.0"
                                    },
                                    {
                                        "hexValue": "7374455448",
                                        "id": 26287,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1277:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_5318b5909b20227fb38f47aa955f9f06527b0ae497ac2d344a4aacb624e26485",
                                            "typeString": "literal_string \"stETH\""
                                        },
                                        "value": "stETH"
                                    },
                                    {
                                        "hexValue": "3138",
                                        "id": 26288,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1298:2:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_18_by_1",
                                            "typeString": "int_const 18"
                                        },
                                        "value": "18"
                                    },
                                    {
                                        "id": 26289,
                                        "name": "_admin",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26279,
                                        "src": "1314:6:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "id": 26290,
                                        "name": "_isCompetitionMode",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26281,
                                        "src": "1334:18:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    {
                                        "id": 26291,
                                        "name": "_maxMintAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26283,
                                        "src": "1366:14:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    }
                                ],
                                "id": 26292,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 26285,
                                    "name": "ERC20Mintable",
                                    "nameLocations": [
                                        "1211:13:139"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 23490,
                                    "src": "1211:13:139"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1211:179:139"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 26284,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26277,
                                    "mutability": "mutable",
                                    "name": "_initialRate",
                                    "nameLocation": "1095:12:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26304,
                                    "src": "1087:20:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26276,
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
                                    "id": 26279,
                                    "mutability": "mutable",
                                    "name": "_admin",
                                    "nameLocation": "1125:6:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26304,
                                    "src": "1117:14:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26278,
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
                                    "id": 26281,
                                    "mutability": "mutable",
                                    "name": "_isCompetitionMode",
                                    "nameLocation": "1146:18:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26304,
                                    "src": "1141:23:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 26280,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1141:4:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26283,
                                    "mutability": "mutable",
                                    "name": "_maxMintAmount",
                                    "nameLocation": "1182:14:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26304,
                                    "src": "1174:22:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26282,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1174:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1077:125:139"
                        },
                        "returnParameters": {
                            "id": 26293,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1395:0:139"
                        },
                        "scope": 26599,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 26371,
                        "nodeType": "FunctionDefinition",
                        "src": "1501:779:139",
                        "nodes": [],
                        "body": {
                            "id": 26370,
                            "nodeType": "Block",
                            "src": "1561:719:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26312,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26562,
                                            "src": "1599:7:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 26313,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1599:9:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26314,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1599:9:139"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 26318,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 26315,
                                                "name": "getTotalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26493,
                                                "src": "1681:14:139",
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
                                            "src": "1681:16:139",
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
                                            "id": 26317,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1701:1:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "1681:21:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 26340,
                                    "nodeType": "IfStatement",
                                    "src": "1677:189:139",
                                    "trueBody": {
                                        "id": 26339,
                                        "nodeType": "Block",
                                        "src": "1704:162:139",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 26322,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 26319,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26275,
                                                        "src": "1718:11:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "id": 26320,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1732:3:139",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 26321,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1736:5:139",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1732:9:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1718:23:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 26323,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1718:23:139"
                                            },
                                            {
                                                "expression": {
                                                    "id": 26327,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 26324,
                                                        "name": "totalPooledEther",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26273,
                                                        "src": "1755:16:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "id": 26325,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1774:3:139",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 26326,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1778:5:139",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1774:9:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1755:28:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 26328,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1755:28:139"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "id": 26330,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1803:3:139",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 26331,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1807:6:139",
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1803:10:139",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 26332,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1815:3:139",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 26333,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1819:5:139",
                                                            "memberName": "value",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1815:9:139",
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
                                                        "id": 26329,
                                                        "name": "_mint",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72581,
                                                        "src": "1797:5:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                            "typeString": "function (address,uint256)"
                                                        }
                                                    },
                                                    "id": 26334,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1797:28:139",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 26335,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1797:28:139"
                                            },
                                            {
                                                "expression": {
                                                    "expression": {
                                                        "id": 26336,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "1846:3:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 26337,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1850:5:139",
                                                    "memberName": "value",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1846:9:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 26311,
                                                "id": 26338,
                                                "nodeType": "Return",
                                                "src": "1839:16:139"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        26342
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26342,
                                            "mutability": "mutable",
                                            "name": "shares",
                                            "nameLocation": "1955:6:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26370,
                                            "src": "1947:14:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26341,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1947:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26351,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26346,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26493,
                                                    "src": "1998:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26347,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1998:16:139",
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
                                                    "id": 26348,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26485,
                                                    "src": "2028:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26349,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2028:21:139",
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
                                                    "id": 26343,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "1964:3:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 26344,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1968:5:139",
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "src": "1964:9:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26345,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1974:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "1964:20:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26350,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1964:95:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1947:112:139"
                                },
                                {
                                    "expression": {
                                        "id": 26355,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26352,
                                            "name": "totalPooledEther",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26273,
                                            "src": "2104:16:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 26353,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "2124:3:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 26354,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2128:5:139",
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "src": "2124:9:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2104:29:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26356,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2104:29:139"
                                },
                                {
                                    "expression": {
                                        "id": 26359,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26357,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26275,
                                            "src": "2143:11:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "id": 26358,
                                            "name": "shares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26342,
                                            "src": "2158:6:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2143:21:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26360,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2143:21:139"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 26362,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2227:3:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 26363,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2231:6:139",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2227:10:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 26364,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2239:3:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 26365,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2243:5:139",
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "src": "2239:9:139",
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
                                            "id": 26361,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72581,
                                            "src": "2221:5:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 26366,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2221:28:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26367,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2221:28:139"
                                },
                                {
                                    "expression": {
                                        "id": 26368,
                                        "name": "shares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26342,
                                        "src": "2267:6:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26311,
                                    "id": 26369,
                                    "nodeType": "Return",
                                    "src": "2260:13:139"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 26305,
                            "nodeType": "StructuredDocumentation",
                            "src": "1478:18:139",
                            "text": "Overrides ///"
                        },
                        "functionSelector": "a1903eab",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "submit",
                        "nameLocation": "1510:6:139",
                        "parameters": {
                            "id": 26308,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26307,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26371,
                                    "src": "1517:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26306,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1517:7:139",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1516:9:139"
                        },
                        "returnParameters": {
                            "id": 26311,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26310,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26371,
                                    "src": "1552:7:139",
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
                                        "src": "1552:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1551:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26401,
                        "nodeType": "FunctionDefinition",
                        "src": "2286:489:139",
                        "nodes": [],
                        "body": {
                            "id": 26400,
                            "nodeType": "Block",
                            "src": "2402:373:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26380,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26562,
                                            "src": "2440:7:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 26381,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2440:9:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26382,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2440:9:139"
                                },
                                {
                                    "assignments": [
                                        26384
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26384,
                                            "mutability": "mutable",
                                            "name": "tokenAmount",
                                            "nameLocation": "2538:11:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26400,
                                            "src": "2530:19:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26383,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2530:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26392,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26387,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26485,
                                                    "src": "2590:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26388,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2590:21:139",
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
                                                    "id": 26389,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26493,
                                                    "src": "2625:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26390,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2625:16:139",
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
                                                "id": 26385,
                                                "name": "_sharesAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26375,
                                                "src": "2552:13:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26386,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2566:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "2552:24:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26391,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2552:99:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2530:121:139"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26394,
                                                "name": "_recipient",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26373,
                                                "src": "2715:10:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26395,
                                                "name": "tokenAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26384,
                                                "src": "2727:11:139",
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
                                            "id": 26393,
                                            "name": "transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72360,
                                            "src": "2706:8:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,uint256) returns (bool)"
                                            }
                                        },
                                        "id": 26396,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2706:33:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 26397,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2706:33:139"
                                },
                                {
                                    "expression": {
                                        "id": 26398,
                                        "name": "tokenAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26384,
                                        "src": "2757:11:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26379,
                                    "id": 26399,
                                    "nodeType": "Return",
                                    "src": "2750:18:139"
                                }
                            ]
                        },
                        "functionSelector": "8fcb4e5b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferShares",
                        "nameLocation": "2295:14:139",
                        "parameters": {
                            "id": 26376,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26373,
                                    "mutability": "mutable",
                                    "name": "_recipient",
                                    "nameLocation": "2327:10:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26401,
                                    "src": "2319:18:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26372,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2319:7:139",
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
                                    "id": 26375,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "2355:13:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26401,
                                    "src": "2347:21:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26374,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2347:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2309:65:139"
                        },
                        "returnParameters": {
                            "id": 26379,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26378,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26401,
                                    "src": "2393:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26377,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2393:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2392:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26434,
                        "nodeType": "FunctionDefinition",
                        "src": "2781:531:139",
                        "nodes": [],
                        "body": {
                            "id": 26433,
                            "nodeType": "Block",
                            "src": "2926:386:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26412,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26562,
                                            "src": "2964:7:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 26413,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2964:9:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26414,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2964:9:139"
                                },
                                {
                                    "assignments": [
                                        26416
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26416,
                                            "mutability": "mutable",
                                            "name": "tokenAmount",
                                            "nameLocation": "3062:11:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26433,
                                            "src": "3054:19:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26415,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3054:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26424,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26419,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26485,
                                                    "src": "3114:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26420,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3114:21:139",
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
                                                    "id": 26421,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26493,
                                                    "src": "3149:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26422,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3149:16:139",
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
                                                "id": 26417,
                                                "name": "_sharesAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26407,
                                                "src": "3076:13:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26418,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3090:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "3076:24:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26423,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3076:99:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3054:121:139"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 26426,
                                                "name": "_sender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26403,
                                                "src": "3243:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26427,
                                                "name": "_recipient",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26405,
                                                "src": "3252:10:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 26428,
                                                "name": "tokenAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26416,
                                                "src": "3264:11:139",
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
                                            "id": 26425,
                                            "name": "transferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72421,
                                            "src": "3230:12:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,address,uint256) returns (bool)"
                                            }
                                        },
                                        "id": 26429,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3230:46:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 26430,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3230:46:139"
                                },
                                {
                                    "expression": {
                                        "id": 26431,
                                        "name": "tokenAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26416,
                                        "src": "3294:11:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26411,
                                    "id": 26432,
                                    "nodeType": "Return",
                                    "src": "3287:18:139"
                                }
                            ]
                        },
                        "functionSelector": "6d780459",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferSharesFrom",
                        "nameLocation": "2790:18:139",
                        "parameters": {
                            "id": 26408,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26403,
                                    "mutability": "mutable",
                                    "name": "_sender",
                                    "nameLocation": "2826:7:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26434,
                                    "src": "2818:15:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26402,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2818:7:139",
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
                                    "id": 26405,
                                    "mutability": "mutable",
                                    "name": "_recipient",
                                    "nameLocation": "2851:10:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26434,
                                    "src": "2843:18:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26404,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2843:7:139",
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
                                    "id": 26407,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "2879:13:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26434,
                                    "src": "2871:21:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26406,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2871:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2808:90:139"
                        },
                        "returnParameters": {
                            "id": 26411,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26410,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26434,
                                    "src": "2917:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26409,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2917:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2916:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26450,
                        "nodeType": "FunctionDefinition",
                        "src": "3318:182:139",
                        "nodes": [],
                        "body": {
                            "id": 26449,
                            "nodeType": "Block",
                            "src": "3414:86:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26443,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26493,
                                                    "src": "3453:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26444,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3453:16:139",
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
                                                    "id": 26445,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26485,
                                                    "src": "3471:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26446,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3471:21:139",
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
                                                "id": 26441,
                                                "name": "_ethAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26436,
                                                "src": "3431:10:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26442,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3442:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "3431:21:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26447,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3431:62:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26440,
                                    "id": 26448,
                                    "nodeType": "Return",
                                    "src": "3424:69:139"
                                }
                            ]
                        },
                        "functionSelector": "19208451",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getSharesByPooledEth",
                        "nameLocation": "3327:20:139",
                        "parameters": {
                            "id": 26437,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26436,
                                    "mutability": "mutable",
                                    "name": "_ethAmount",
                                    "nameLocation": "3365:10:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26450,
                                    "src": "3357:18:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26435,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3357:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3347:34:139"
                        },
                        "returnParameters": {
                            "id": 26440,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26439,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26450,
                                    "src": "3405:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26438,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3405:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3404:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26466,
                        "nodeType": "FunctionDefinition",
                        "src": "3506:200:139",
                        "nodes": [],
                        "body": {
                            "id": 26465,
                            "nodeType": "Block",
                            "src": "3605:101:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26459,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26485,
                                                    "src": "3659:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26460,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3659:21:139",
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
                                                    "id": 26461,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26493,
                                                    "src": "3682:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26462,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3682:16:139",
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
                                                "id": 26457,
                                                "name": "_sharesAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26452,
                                                "src": "3634:13:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26458,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3648:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "3634:24:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26463,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3634:65:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26456,
                                    "id": 26464,
                                    "nodeType": "Return",
                                    "src": "3615:84:139"
                                }
                            ]
                        },
                        "functionSelector": "7a28fb88",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPooledEthByShares",
                        "nameLocation": "3515:20:139",
                        "parameters": {
                            "id": 26453,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26452,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "3553:13:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26466,
                                    "src": "3545:21:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26451,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3545:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3535:37:139"
                        },
                        "returnParameters": {
                            "id": 26456,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26455,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26466,
                                    "src": "3596:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26454,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3596:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3595:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26474,
                        "nodeType": "FunctionDefinition",
                        "src": "3712:85:139",
                        "nodes": [],
                        "body": {
                            "id": 26473,
                            "nodeType": "Block",
                            "src": "3772:25:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "hexValue": "30",
                                        "id": 26471,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3789:1:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "functionReturnParameters": 26470,
                                    "id": 26472,
                                    "nodeType": "Return",
                                    "src": "3782:8:139"
                                }
                            ]
                        },
                        "functionSelector": "47b714e0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBufferedEther",
                        "nameLocation": "3721:16:139",
                        "parameters": {
                            "id": 26467,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3737:2:139"
                        },
                        "returnParameters": {
                            "id": 26470,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26469,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26474,
                                    "src": "3763:7:139",
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
                                        "src": "3763:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3762:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26485,
                        "nodeType": "FunctionDefinition",
                        "src": "3803:125:139",
                        "nodes": [],
                        "body": {
                            "id": 26484,
                            "nodeType": "Block",
                            "src": "3864:64:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 26482,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 26479,
                                            "name": "totalPooledEther",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26273,
                                            "src": "3881:16:139",
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
                                                "id": 26480,
                                                "name": "_getAccruedInterest",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26598,
                                                "src": "3900:19:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view returns (uint256)"
                                                }
                                            },
                                            "id": 26481,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3900:21:139",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3881:40:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26478,
                                    "id": 26483,
                                    "nodeType": "Return",
                                    "src": "3874:47:139"
                                }
                            ]
                        },
                        "functionSelector": "37cfdaca",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalPooledEther",
                        "nameLocation": "3812:19:139",
                        "parameters": {
                            "id": 26475,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3831:2:139"
                        },
                        "returnParameters": {
                            "id": 26478,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26477,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26485,
                                    "src": "3855:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26476,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3855:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3854:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 26493,
                        "nodeType": "FunctionDefinition",
                        "src": "3934:91:139",
                        "nodes": [],
                        "body": {
                            "id": 26492,
                            "nodeType": "Block",
                            "src": "3990:35:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26490,
                                        "name": "totalShares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26275,
                                        "src": "4007:11:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26489,
                                    "id": 26491,
                                    "nodeType": "Return",
                                    "src": "4000:18:139"
                                }
                            ]
                        },
                        "functionSelector": "d5002f2e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalShares",
                        "nameLocation": "3943:14:139",
                        "parameters": {
                            "id": 26486,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3957:2:139"
                        },
                        "returnParameters": {
                            "id": 26489,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26488,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26493,
                                    "src": "3981:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26487,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3981:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3980:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 26515,
                        "nodeType": "FunctionDefinition",
                        "src": "4031:208:139",
                        "nodes": [],
                        "body": {
                            "id": 26514,
                            "nodeType": "Block",
                            "src": "4099:140:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        26501
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26501,
                                            "mutability": "mutable",
                                            "name": "tokenBalance",
                                            "nameLocation": "4117:12:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26514,
                                            "src": "4109:20:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26500,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4109:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26505,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 26502,
                                            "name": "balanceOf",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72253,
                                            "src": "4132:9:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                "typeString": "mapping(address => uint256)"
                                            }
                                        },
                                        "id": 26504,
                                        "indexExpression": {
                                            "id": 26503,
                                            "name": "_account",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26495,
                                            "src": "4142:8:139",
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
                                        "src": "4132:19:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4109:42:139"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 26508,
                                                    "name": "getTotalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26493,
                                                    "src": "4192:14:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26509,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4192:16:139",
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
                                                    "id": 26510,
                                                    "name": "getTotalPooledEther",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26485,
                                                    "src": "4210:19:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 26511,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4210:21:139",
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
                                                "id": 26506,
                                                "name": "tokenBalance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26501,
                                                "src": "4168:12:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26507,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4181:10:139",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "4168:23:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26512,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4168:64:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26499,
                                    "id": 26513,
                                    "nodeType": "Return",
                                    "src": "4161:71:139"
                                }
                            ]
                        },
                        "functionSelector": "f5eb42dc",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sharesOf",
                        "nameLocation": "4040:8:139",
                        "parameters": {
                            "id": 26496,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26495,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "4057:8:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26515,
                                    "src": "4049:16:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 26494,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4049:7:139",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4048:18:139"
                        },
                        "returnParameters": {
                            "id": 26499,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26498,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26515,
                                    "src": "4090:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26497,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4090:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4089:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26531,
                        "nodeType": "FunctionDefinition",
                        "src": "4263:122:139",
                        "nodes": [],
                        "body": {
                            "id": 26530,
                            "nodeType": "Block",
                            "src": "4335:50:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26523,
                                            "name": "_accrue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26562,
                                            "src": "4345:7:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 26524,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4345:9:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26525,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4345:9:139"
                                },
                                {
                                    "expression": {
                                        "id": 26528,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26526,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26269,
                                            "src": "4364:5:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 26527,
                                            "name": "_rate_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26518,
                                            "src": "4372:6:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4364:14:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26529,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4364:14:139"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 26516,
                            "nodeType": "StructuredDocumentation",
                            "src": "4245:13:139",
                            "text": "Mock ///"
                        },
                        "functionSelector": "34fcf437",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 26521,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 26520,
                                    "name": "requiresAuthDuringCompetition",
                                    "nameLocations": [
                                        "4305:29:139"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 23417,
                                    "src": "4305:29:139"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4305:29:139"
                            }
                        ],
                        "name": "setRate",
                        "nameLocation": "4272:7:139",
                        "parameters": {
                            "id": 26519,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26518,
                                    "mutability": "mutable",
                                    "name": "_rate_",
                                    "nameLocation": "4288:6:139",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26531,
                                    "src": "4280:14:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26517,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4280:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4279:16:139"
                        },
                        "returnParameters": {
                            "id": 26522,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4335:0:139"
                        },
                        "scope": 26599,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26539,
                        "nodeType": "FunctionDefinition",
                        "src": "4391:80:139",
                        "nodes": [],
                        "body": {
                            "id": 26538,
                            "nodeType": "Block",
                            "src": "4442:29:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26536,
                                        "name": "_rate",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26269,
                                        "src": "4459:5:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26535,
                                    "id": 26537,
                                    "nodeType": "Return",
                                    "src": "4452:12:139"
                                }
                            ]
                        },
                        "functionSelector": "679aefce",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getRate",
                        "nameLocation": "4400:7:139",
                        "parameters": {
                            "id": 26532,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4407:2:139"
                        },
                        "returnParameters": {
                            "id": 26535,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26534,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26539,
                                    "src": "4433:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26533,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4433:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4432:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26562,
                        "nodeType": "FunctionDefinition",
                        "src": "4477:205:139",
                        "nodes": [],
                        "body": {
                            "id": 26561,
                            "nodeType": "Block",
                            "src": "4505:177:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        26543
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26543,
                                            "mutability": "mutable",
                                            "name": "interest",
                                            "nameLocation": "4523:8:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26561,
                                            "src": "4515:16:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26542,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4515:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26546,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26544,
                                            "name": "_getAccruedInterest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26598,
                                            "src": "4534:19:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 26545,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4534:21:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4515:40:139"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 26549,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 26547,
                                            "name": "interest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26543,
                                            "src": "4569:8:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 26548,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4580:1:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4569:12:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 26555,
                                    "nodeType": "IfStatement",
                                    "src": "4565:71:139",
                                    "trueBody": {
                                        "id": 26554,
                                        "nodeType": "Block",
                                        "src": "4583:53:139",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 26552,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 26550,
                                                        "name": "totalPooledEther",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26273,
                                                        "src": "4597:16:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 26551,
                                                        "name": "interest",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26543,
                                                        "src": "4617:8:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4597:28:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 26553,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4597:28:139"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 26559,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26556,
                                            "name": "_lastUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26271,
                                            "src": "4645:12:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 26557,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "4660:5:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 26558,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4666:9:139",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "4660:15:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4645:30:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 26560,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4645:30:139"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_accrue",
                        "nameLocation": "4486:7:139",
                        "parameters": {
                            "id": 26540,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4493:2:139"
                        },
                        "returnParameters": {
                            "id": 26541,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4505:0:139"
                        },
                        "scope": 26599,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 26598,
                        "nodeType": "FunctionDefinition",
                        "src": "4688:390:139",
                        "nodes": [],
                        "body": {
                            "id": 26597,
                            "nodeType": "Block",
                            "src": "4751:327:139",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 26569,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 26567,
                                            "name": "_rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26269,
                                            "src": "4765:5:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 26568,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4774:1:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4765:10:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 26573,
                                    "nodeType": "IfStatement",
                                    "src": "4761:49:139",
                                    "trueBody": {
                                        "id": 26572,
                                        "nodeType": "Block",
                                        "src": "4777:33:139",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "30",
                                                    "id": 26570,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4798:1:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "functionReturnParameters": 26566,
                                                "id": 26571,
                                                "nodeType": "Return",
                                                "src": "4791:8:139"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        26575
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26575,
                                            "mutability": "mutable",
                                            "name": "timeElapsed",
                                            "nameLocation": "4881:11:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26597,
                                            "src": "4873:19:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26574,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4873:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26584,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "333635",
                                                "id": 26582,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4949:8:139",
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
                                                        "id": 26579,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 26576,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -4,
                                                                "src": "4896:5:139",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 26577,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4902:9:139",
                                                            "memberName": "timestamp",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4896:15:139",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 26578,
                                                            "name": "_lastUpdated",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 26271,
                                                            "src": "4914:12:139",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "4896:30:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 26580,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "4895:32:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26581,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4928:7:139",
                                            "memberName": "divDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18103,
                                            "src": "4895:40:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26583,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4895:72:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4873:94:139"
                                },
                                {
                                    "assignments": [
                                        26586
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26586,
                                            "mutability": "mutable",
                                            "name": "accrued",
                                            "nameLocation": "4985:7:139",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26597,
                                            "src": "4977:15:139",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 26585,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4977:7:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26594,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 26591,
                                                        "name": "timeElapsed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26575,
                                                        "src": "5034:11:139",
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
                                                        "id": 26589,
                                                        "name": "_rate",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26269,
                                                        "src": "5020:5:139",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 26590,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5026:7:139",
                                                    "memberName": "mulDown",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18085,
                                                    "src": "5020:13:139",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 26592,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5020:26:139",
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
                                                "id": 26587,
                                                "name": "totalPooledEther",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26273,
                                                "src": "4995:16:139",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 26588,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5012:7:139",
                                            "memberName": "mulDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18085,
                                            "src": "4995:24:139",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 26593,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4995:52:139",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4977:70:139"
                                },
                                {
                                    "expression": {
                                        "id": 26595,
                                        "name": "accrued",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26586,
                                        "src": "5064:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 26566,
                                    "id": 26596,
                                    "nodeType": "Return",
                                    "src": "5057:14:139"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_getAccruedInterest",
                        "nameLocation": "4697:19:139",
                        "parameters": {
                            "id": 26563,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4716:2:139"
                        },
                        "returnParameters": {
                            "id": 26566,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26565,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26598,
                                    "src": "4742:7:139",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26564,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4742:7:139",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4741:9:139"
                        },
                        "scope": 26599,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 26261,
                            "name": "MultiRolesAuthority",
                            "nameLocations": [
                                "826:19:139"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 72222,
                            "src": "826:19:139"
                        },
                        "id": 26262,
                        "nodeType": "InheritanceSpecifier",
                        "src": "826:19:139"
                    },
                    {
                        "baseName": {
                            "id": 26263,
                            "name": "ERC20Mintable",
                            "nameLocations": [
                                "847:13:139"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 23490,
                            "src": "847:13:139"
                        },
                        "id": 26264,
                        "nodeType": "InheritanceSpecifier",
                        "src": "847:13:139"
                    }
                ],
                "canonicalName": "MockLido",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 26260,
                    "nodeType": "StructuredDocumentation",
                    "src": "276:529:139",
                    "text": "@author DELV\n @title MockLido\n @notice This mock yield source will accrue interest at a specified rate\n         Every stateful interaction will accrue interest, so the interest\n         accrual will approximate continuous compounding as the contract\n         is called more frequently.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    26599,
                    23490,
                    72222,
                    71917,
                    71904,
                    72610
                ],
                "name": "MockLido",
                "nameLocation": "814:8:139",
                "scope": 26600,
                "usedErrors": [],
                "usedEvents": [
                    71754,
                    71761,
                    71935,
                    71941,
                    71949,
                    71956,
                    72233,
                    72241
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 139
};
