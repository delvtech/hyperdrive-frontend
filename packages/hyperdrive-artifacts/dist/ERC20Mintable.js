export const ERC20Mintable = {
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
    ],
    bytecode: '0x6101006040523480156200001257600080fd5b506040516200203538038062002035833981016040819052620000359162000298565b8230818189898960006200004a8482620003e8565b506001620000598382620003e8565b5060ff81166080524660a0526200006f6200011e565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505090151560e052600c55506200053292505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001529190620004b4565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001e257600080fd5b81516001600160401b0380821115620001ff57620001ff620001ba565b604051601f8301601f19908116603f011681019082821181831017156200022a576200022a620001ba565b81604052838152602092508660208588010111156200024857600080fd5b600091505b838210156200026c57858201830151818301840152908201906200024d565b6000602085830101528094505050505092915050565b805180151581146200029357600080fd5b919050565b60008060008060008060c08789031215620002b257600080fd5b86516001600160401b0380821115620002ca57600080fd5b620002d88a838b01620001d0565b97506020890151915080821115620002ef57600080fd5b50620002fe89828a01620001d0565b955050604087015160ff811681146200031657600080fd5b60608801519094506001600160a01b03811681146200033457600080fd5b9250620003446080880162000282565b915060a087015190509295509295509295565b600181811c908216806200036c57607f821691505b6020821081036200038d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003e3576000816000526020600020601f850160051c81016020861015620003be5750805b601f850160051c820191505b81811015620003df57828155600101620003ca565b5050505b505050565b81516001600160401b03811115620004045762000404620001ba565b6200041c8162000415845462000357565b8462000393565b602080601f8311600181146200045457600084156200043b5750858301515b600019600386901b1c1916600185901b178555620003df565b600085815260208120601f198616915b82811015620004855788860151825594840194600190910190840162000464565b5085821015620004a45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004c48162000357565b60018281168015620004df5760018114620004f55762000526565b60ff198416875282151583028701945062000526565b8760005260208060002060005b858110156200051d5781548a82015290840190820162000502565b50505082870194505b50929695505050505050565b60805160a05160c05160e051611a9f62000596600039600081816103d4015281816105e701528181610701015281816109e001528181610a7f01528181610dbe0152610e20015260006109bc01526000610987015260006103140152611a9f6000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c80637a8c63b511610125578063b7009613116100ad578063dd62ed3e1161007c578063dd62ed3e1461051a578063e688747b14610545578063ea7ca2761461057b578063ed0d0efb146105b2578063f2fde38b146105d257600080fd5b8063b7009613146104b8578063bf7e214f146104cb578063c53a3985146104de578063d505accf1461050757600080fd5b806395d89b41116100f457806395d89b41146104545780639dc29fac1461045c578063a0712d681461046f578063a9059cbb14610482578063aed307771461049557600080fd5b80637a8c63b5146103cf5780637a9e5e4b146103f65780637ecebe00146104095780638da5cb5b1461042957600080fd5b806323b872dd116101a857806342966c681161017757806342966c68146103635780634b5159da1461037657806367aff4841461038957806370a082311461039c578063728b952b146103bc57600080fd5b806323b872dd146102fc578063313ce5671461030f5780633644e5151461034857806340c10f191461035057600080fd5b8063095ea7b3116101ef578063095ea7b3146102915780630bade8a4146102b45780630ea9b75b146102d757806318160ddd146102ea578063239c70ae146102f357600080fd5b806305f05a941461022157806306a36aee1461023657806306fdde0314610269578063088a4ed01461027e575b600080fd5b61023461022f366004611502565b6105e5565b005b61025661024436600461153b565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610271610671565b6040516102609190611558565b61023461028c3660046115a7565b6106ff565b6102a461029f3660046115c0565b61075c565b6040519015158152602001610260565b6102a46102c2366004611609565b600a6020526000908152604090205460ff1681565b6102346102e5366004611635565b6107c9565b61025660025481565b610256600c5481565b6102a461030a36600461167c565b6108a1565b6103367f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610260565b610256610983565b61023461035e3660046115c0565b6109de565b6102346103713660046115a7565b610a7d565b6102346103843660046116bd565b610ae2565b6102346103973660046116d9565b610b74565b6102566103aa36600461153b565b60036020526000908152604090205481565b6102346103ca366004611707565b610c3c565b6102a47f000000000000000000000000000000000000000000000000000000000000000081565b61023461040436600461153b565b610cc5565b61025661041736600461153b565b60056020526000908152604090205481565b60065461043c906001600160a01b031681565b6040516001600160a01b039091168152602001610260565b610271610daf565b61023461046a3660046115c0565b610dbc565b61023461047d3660046115a7565b610e1e565b6102a46104903660046115c0565b610eb9565b6102a46104a336600461153b565b600d6020526000908152604090205460ff1681565b6102a46104c6366004611735565b610f1f565b60075461043c906001600160a01b031681565b61043c6104ec36600461153b565b6008602052600090815260409020546001600160a01b031681565b61023461051536600461177c565b61101d565b610256610528366004611707565b600460209081526000928352604080842090915290825290205481565b6102a46105533660046117ea565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102a461058936600461181d565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102566105c0366004611609565b600b6020526000908152604090205481565b6102346105e036600461153b565b611261565b7f00000000000000000000000000000000000000000000000000000000000000001561064657610621336000356001600160e01b0319166112df565b6106465760405162461bcd60e51b815260040161063d90611849565b60405180910390fd5b6001600160a01b03919091166000908152600d60205260409020805460ff1916911515919091179055565b6000805461067e90611880565b80601f01602080910402602001604051908101604052809291908181526020018280546106aa90611880565b80156106f75780601f106106cc576101008083540402835291602001916106f7565b820191906000526020600020905b8154815290600101906020018083116106da57829003601f168201915b505050505081565b7f0000000000000000000000000000000000000000000000000000000000000000156107575761073b336000356001600160e01b0319166112df565b6107575760405162461bcd60e51b815260040161063d90611849565b600c55565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906107b79086815260200190565b60405180910390a35060015b92915050565b6107df336000356001600160e01b0319166112df565b6107fb5760405162461bcd60e51b815260040161063d906118ba565b801561082b576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610852565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610894911515815260200190565b60405180910390a3505050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146108fd576108d883826118f6565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906109259084906118f6565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611a4a8339815191529061096e9087815260200190565b60405180910390a360019150505b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146109b9576109b4611389565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000015610a3657610a1a336000356001600160e01b0319166112df565b610a365760405162461bcd60e51b815260040161063d90611849565b336000908152600d602052604090205460ff16610a6f57600c54811115610a6f5760405162461bcd60e51b815260040161063d90611909565b610a798282611423565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610ad557610ab9336000356001600160e01b0319166112df565b610ad55760405162461bcd60e51b815260040161063d90611849565b610adf338261147d565b50565b610af8336000356001600160e01b0319166112df565b610b145760405162461bcd60e51b815260040161063d906118ba565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610b8a336000356001600160e01b0319166112df565b610ba65760405162461bcd60e51b815260040161063d906118ba565b8015610bd5576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610bfb565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610894911515815260200190565b610c52336000356001600160e01b0319166112df565b610c6e5760405162461bcd60e51b815260040161063d906118ba565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610d5a575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610d1990339030906001600160e01b0319600035169060040161194b565b602060405180830381865afa158015610d36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5a9190611978565b610d6357600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001805461067e90611880565b7f000000000000000000000000000000000000000000000000000000000000000015610e1457610df8336000356001600160e01b0319166112df565b610e145760405162461bcd60e51b815260040161063d90611849565b610a79828261147d565b7f000000000000000000000000000000000000000000000000000000000000000015610e7657610e5a336000356001600160e01b0319166112df565b610e765760405162461bcd60e51b815260040161063d90611849565b336000908152600d602052604090205460ff16610eaf57600c54811115610eaf5760405162461bcd60e51b815260040161063d90611909565b610adf3382611423565b33600090815260036020526040812080548391908390610eda9084906118f6565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611a4a833981519152906107b79086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610fbb5760405163b700961360e01b81526001600160a01b0382169063b700961390610f729088908890889060040161194b565b602060405180830381865afa158015610f8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb39190611978565b91505061097c565b6001600160e01b031983166000908152600a602052604090205460ff168061101457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561106d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f45585049524544000000000000000000604482015260640161063d565b60006001611079610983565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611185573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906111bb5750876001600160a01b0316816001600160a01b0316145b6111f85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b604482015260640161063d565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611277336000356001600160e01b0319166112df565b6112935760405162461bcd60e51b815260040161063d906118ba565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611369575060405163b700961360e01b81526001600160a01b0382169063b7009613906113289087903090889060040161194b565b602060405180830381865afa158015611345573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113699190611978565b8061138157506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516113bb9190611995565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546114359190611a36565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611a4a83398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906114a59084906118f6565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611a4a83398151915290602001611471565b6001600160a01b0381168114610adf57600080fd5b8015158114610adf57600080fd5b6000806040838503121561151557600080fd5b8235611520816114df565b91506020830135611530816114f4565b809150509250929050565b60006020828403121561154d57600080fd5b813561097c816114df565b60006020808352835180602085015260005b818110156115865785810183015185820160400152820161156a565b506000604082860101526040601f19601f8301168501019250505092915050565b6000602082840312156115b957600080fd5b5035919050565b600080604083850312156115d357600080fd5b82356115de816114df565b946020939093013593505050565b80356001600160e01b03198116811461160457600080fd5b919050565b60006020828403121561161b57600080fd5b61097c826115ec565b803560ff8116811461160457600080fd5b60008060006060848603121561164a57600080fd5b61165384611624565b9250611661602085016115ec565b91506040840135611671816114f4565b809150509250925092565b60008060006060848603121561169157600080fd5b833561169c816114df565b925060208401356116ac816114df565b929592945050506040919091013590565b600080604083850312156116d057600080fd5b611520836115ec565b6000806000606084860312156116ee57600080fd5b83356116f9816114df565b925061166160208501611624565b6000806040838503121561171a57600080fd5b8235611725816114df565b91506020830135611530816114df565b60008060006060848603121561174a57600080fd5b8335611755816114df565b92506020840135611765816114df565b9150611773604085016115ec565b90509250925092565b600080600080600080600060e0888a03121561179757600080fd5b87356117a2816114df565b965060208801356117b2816114df565b955060408801359450606088013593506117ce60808901611624565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156117fd57600080fd5b61180683611624565b9150611814602084016115ec565b90509250929050565b6000806040838503121561183057600080fd5b823561183b816114df565b915061181460208401611624565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b600181811c9082168061189457607f821691505b6020821081036118b457634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b818103818111156107c3576107c36118e0565b60208082526022908201527f45524332304d696e7461626c653a20496e76616c6964206d696e7420616d6f756040820152611b9d60f21b606082015260800190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561198a57600080fd5b815161097c816114f4565b60008083548160018260011c915060018316806119b357607f831692505b602080841082036119d257634e487b7160e01b86526022600452602486fd5b8180156119e657600181146119fb57611a28565b60ff1986168952841515850289019650611a28565b60008a81526020902060005b86811015611a205781548b820152908501908301611a07565b505084890196505b509498975050505050505050565b808201808211156107c3576107c36118e056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122053cc667f1f4f200f6dc5a3d39c1e3a102b73eaa14ec83181a1c904069fc31a3f64736f6c63430008160033',
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
    }
};
