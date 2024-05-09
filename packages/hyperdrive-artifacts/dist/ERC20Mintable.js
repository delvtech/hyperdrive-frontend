export const ERC20Mintable = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "symbol",
                    "type": "string"
                },
                {
                    "internalType": "uint8",
                    "name": "decimals",
                    "type": "uint8"
                },
                {
                    "internalType": "address",
                    "name": "admin",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "isCompetitionMode_",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "maxMintAmount_",
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
        }
    ],
    bytecode: '0x6101206040523480156200001257600080fd5b5060405162001f1b38038062001f1b833981016040819052620000359162000296565b8230818189898960006200004a8482620003e4565b506001620000598382620003e4565b5060ff81166080524660a0526200006f6200011f565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505090151560e05261010052506200052e92505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001539190620004b0565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001e357600080fd5b81516001600160401b0380821115620002005762000200620001bb565b604051601f8301601f19908116603f011681019082821181831017156200022b576200022b620001bb565b816040528381526020925086838588010111156200024857600080fd5b600091505b838210156200026c57858201830151818301840152908201906200024d565b600093810190920192909252949350505050565b805180151581146200029157600080fd5b919050565b60008060008060008060c08789031215620002b057600080fd5b86516001600160401b0380821115620002c857600080fd5b620002d68a838b01620001d1565b97506020890151915080821115620002ed57600080fd5b50620002fc89828a01620001d1565b955050604087015160ff811681146200031457600080fd5b60608801519094506001600160a01b03811681146200033257600080fd5b9250620003426080880162000280565b915060a087015190509295509295509295565b600181811c908216806200036a57607f821691505b6020821081036200038b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003df57600081815260208120601f850160051c81016020861015620003ba5750805b601f850160051c820191505b81811015620003db57828155600101620003c6565b5050505b505050565b81516001600160401b03811115620004005762000400620001bb565b620004188162000411845462000355565b8462000391565b602080601f831160018114620004505760008415620004375750858301515b600019600386901b1c1916600185901b178555620003db565b600085815260208120601f198616915b82811015620004815788860151825594840194600190910190840162000460565b5085821015620004a05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004c08162000355565b60018281168015620004db5760018114620004f15762000522565b60ff198416875282151583028701945062000522565b8760005260208060002060005b85811015620005195781548a820152908401908201620004fe565b50505082870194505b50929695505050505050565b60805160a05160c05160e0516101005161197e6200059d600039600081816102b10152818161090c0152610d830152600081816103ab015281816108b40152818161098a01528181610cc90152610d2b015260006108900152600061085b015260006102eb015261197e6000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c80637a8c63b51161011a578063b7009613116100ad578063dd62ed3e1161007c578063dd62ed3e146104ce578063e688747b146104f9578063ea7ca2761461052f578063ed0d0efb14610566578063f2fde38b1461058657600080fd5b8063b70096131461046c578063bf7e214f1461047f578063c53a398514610492578063d505accf146104bb57600080fd5b806395d89b41116100e957806395d89b411461042b5780639dc29fac14610433578063a0712d6814610446578063a9059cbb1461045957600080fd5b80637a8c63b5146103a65780637a9e5e4b146103cd5780637ecebe00146103e05780638da5cb5b1461040057600080fd5b8063313ce567116101925780634b5159da116101615780634b5159da1461034d57806367aff4841461036057806370a0823114610373578063728b952b1461039357600080fd5b8063313ce567146102e65780633644e5151461031f57806340c10f191461032757806342966c681461033a57600080fd5b80630ea9b75b116101ce5780630ea9b75b1461028e57806318160ddd146102a3578063239c70ae146102ac57806323b872dd146102d357600080fd5b806306a36aee1461020057806306fdde0314610233578063095ea7b3146102485780630bade8a41461026b575b600080fd5b61022061020e366004611436565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b61023b610599565b60405161022a9190611453565b61025b6102563660046114a1565b610627565b604051901515815260200161022a565b61025b6102793660046114ea565b600a6020526000908152604090205460ff1681565b6102a161029c366004611524565b610694565b005b61022060025481565b6102207f000000000000000000000000000000000000000000000000000000000000000081565b61025b6102e136600461156b565b610775565b61030d7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161022a565b610220610857565b6102a16103353660046114a1565b6108b2565b6102a16103483660046115ac565b610988565b6102a161035b3660046115c5565b6109ed565b6102a161036e3660046115fc565b610a7f565b610220610381366004611436565b60036020526000908152604090205481565b6102a16103a136600461162a565b610b47565b61025b7f000000000000000000000000000000000000000000000000000000000000000081565b6102a16103db366004611436565b610bd0565b6102206103ee366004611436565b60056020526000908152604090205481565b600654610413906001600160a01b031681565b6040516001600160a01b03909116815260200161022a565b61023b610cba565b6102a16104413660046114a1565b610cc7565b6102a16104543660046115ac565b610d29565b61025b6104673660046114a1565b610dfb565b61025b61047a366004611658565b610e61565b600754610413906001600160a01b031681565b6104136104a0366004611436565b6008602052600090815260409020546001600160a01b031681565b6102a16104c936600461169f565b610f5f565b6102206104dc36600461162a565b600460209081526000928352604080842090915290825290205481565b61025b61050736600461170d565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61025b61053d366004611740565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102206105743660046114ea565b600b6020526000908152604090205481565b6102a1610594366004611436565b6111a3565b600080546105a69061176c565b80601f01602080910402602001604051908101604052809291908181526020018280546105d29061176c565b801561061f5780601f106105f45761010080835404028352916020019161061f565b820191906000526020600020905b81548152906001019060200180831161060257829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106829086815260200190565b60405180910390a35060015b92915050565b6106aa336000356001600160e01b031916611221565b6106cf5760405162461bcd60e51b81526004016106c6906117a6565b60405180910390fd5b80156106ff576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610726565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610768911515815260200190565b60405180910390a3505050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146107d1576107ac83826117e2565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906107f99084906117e2565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611929833981519152906108429087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461088d576108886112cb565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f00000000000000000000000000000000000000000000000000000000000000001561090a576108ee336000356001600160e01b031916611221565b61090a5760405162461bcd60e51b81526004016106c6906117f5565b7f000000000000000000000000000000000000000000000000000000000000000081111561097a5760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e7460448201526064016106c6565b6109848282611365565b5050565b7f0000000000000000000000000000000000000000000000000000000000000000156109e0576109c4336000356001600160e01b031916611221565b6109e05760405162461bcd60e51b81526004016106c6906117f5565b6109ea33826113bf565b50565b610a03336000356001600160e01b031916611221565b610a1f5760405162461bcd60e51b81526004016106c6906117a6565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610a95336000356001600160e01b031916611221565b610ab15760405162461bcd60e51b81526004016106c6906117a6565b8015610ae0576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610b06565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610768911515815260200190565b610b5d336000356001600160e01b031916611221565b610b795760405162461bcd60e51b81526004016106c6906117a6565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610c65575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610c2490339030906001600160e01b0319600035169060040161182c565b602060405180830381865afa158015610c41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c659190611859565b610c6e57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600180546105a69061176c565b7f000000000000000000000000000000000000000000000000000000000000000015610d1f57610d03336000356001600160e01b031916611221565b610d1f5760405162461bcd60e51b81526004016106c6906117f5565b61098482826113bf565b7f000000000000000000000000000000000000000000000000000000000000000015610d8157610d65336000356001600160e01b031916611221565b610d815760405162461bcd60e51b81526004016106c6906117f5565b7f0000000000000000000000000000000000000000000000000000000000000000811115610df15760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e7460448201526064016106c6565b6109ea3382611365565b33600090815260036020526040812080548391908390610e1c9084906117e2565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611929833981519152906106829086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610efd5760405163b700961360e01b81526001600160a01b0382169063b700961390610eb49088908890889060040161182c565b602060405180830381865afa158015610ed1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef59190611859565b915050610850565b6001600160e01b031983166000908152600a602052604090205460ff1680610f5657506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610faf5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016106c6565b60006001610fbb610857565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156110c7573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906110fd5750876001600160a01b0316816001600160a01b0316145b61113a5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016106c6565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6111b9336000356001600160e01b031916611221565b6111d55760405162461bcd60e51b81526004016106c6906117a6565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b031680158015906112ab575060405163b700961360e01b81526001600160a01b0382169063b70096139061126a9087903090889060040161182c565b602060405180830381865afa158015611287573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ab9190611859565b806112c357506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516112fd9190611876565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546113779190611915565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061192983398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906113e79084906117e2565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611929833981519152906020016113b3565b6001600160a01b03811681146109ea57600080fd5b60006020828403121561144857600080fd5b813561085081611421565b600060208083528351808285015260005b8181101561148057858101830151858201604001528201611464565b506000604082860101526040601f19601f8301168501019250505092915050565b600080604083850312156114b457600080fd5b82356114bf81611421565b946020939093013593505050565b80356001600160e01b0319811681146114e557600080fd5b919050565b6000602082840312156114fc57600080fd5b610850826114cd565b803560ff811681146114e557600080fd5b80151581146109ea57600080fd5b60008060006060848603121561153957600080fd5b61154284611505565b9250611550602085016114cd565b9150604084013561156081611516565b809150509250925092565b60008060006060848603121561158057600080fd5b833561158b81611421565b9250602084013561159b81611421565b929592945050506040919091013590565b6000602082840312156115be57600080fd5b5035919050565b600080604083850312156115d857600080fd5b6115e1836114cd565b915060208301356115f181611516565b809150509250929050565b60008060006060848603121561161157600080fd5b833561161c81611421565b925061155060208501611505565b6000806040838503121561163d57600080fd5b823561164881611421565b915060208301356115f181611421565b60008060006060848603121561166d57600080fd5b833561167881611421565b9250602084013561168881611421565b9150611696604085016114cd565b90509250925092565b600080600080600080600060e0888a0312156116ba57600080fd5b87356116c581611421565b965060208801356116d581611421565b955060408801359450606088013593506116f160808901611505565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561172057600080fd5b61172983611505565b9150611737602084016114cd565b90509250929050565b6000806040838503121561175357600080fd5b823561175e81611421565b915061173760208401611505565b600181811c9082168061178057607f821691505b6020821081036117a057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561068e5761068e6117cc565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561186b57600080fd5b815161085081611516565b600080835481600182811c91508083168061189257607f831692505b602080841082036118b157634e487b7160e01b86526022600452602486fd5b8180156118c557600181146118da57611907565b60ff1986168952841515850289019650611907565b60008a81526020902060005b868110156118ff5781548b8201529085019083016118e6565b505084890196505b509498975050505050505050565b8082018082111561068e5761068e6117cc56feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220a6fc5436d2d2277bafbfe84368d6ff31fe0e9d58ed416e337d5c3bd70ab8edb964736f6c63430008140033',
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
        "maxMintAmount()": "239c70ae",
        "mint(address,uint256)": "40c10f19",
        "mint(uint256)": "a0712d68",
        "name()": "06fdde03",
        "nonces(address)": "7ecebe00",
        "owner()": "8da5cb5b",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
        "setAuthority(address)": "7a9e5e4b",
        "setPublicCapability(bytes4,bool)": "4b5159da",
        "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
        "setTargetCustomAuthority(address,address)": "728b952b",
        "setUserRole(address,uint8,bool)": "67aff484",
        "symbol()": "95d89b41",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd",
        "transferOwnership(address)": "f2fde38b"
    }
};
