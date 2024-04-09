export declare const ERC20Mintable: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint8";
            readonly name: "decimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "admin";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isCompetitionMode_";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxMintAmount_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract Authority";
            readonly name: "newAuthority";
            readonly type: "address";
        }];
        readonly name: "AuthorityUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes4";
            readonly name: "functionSig";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "PublicCapabilityUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "role";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes4";
            readonly name: "functionSig";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "RoleCapabilityUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "contract Authority";
            readonly name: "authority";
            readonly type: "address";
        }];
        readonly name: "TargetCustomAuthorityUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "role";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "UserRoleUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "authority";
        readonly outputs: readonly [{
            readonly internalType: "contract Authority";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes4";
            readonly name: "functionSig";
            readonly type: "bytes4";
        }];
        readonly name: "canCall";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "role";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes4";
            readonly name: "functionSig";
            readonly type: "bytes4";
        }];
        readonly name: "doesRoleHaveCapability";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "role";
            readonly type: "uint8";
        }];
        readonly name: "doesUserHaveRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly name: "getRolesWithCapability";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "getTargetCustomAuthority";
        readonly outputs: readonly [{
            readonly internalType: "contract Authority";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "getUserRoles";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly name: "isCapabilityPublic";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isCompetitionMode";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxMintAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract Authority";
            readonly name: "newAuthority";
            readonly type: "address";
        }];
        readonly name: "setAuthority";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "functionSig";
            readonly type: "bytes4";
        }, {
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "setPublicCapability";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "role";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes4";
            readonly name: "functionSig";
            readonly type: "bytes4";
        }, {
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "setRoleCapability";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "contract Authority";
            readonly name: "customAuthority";
            readonly type: "address";
        }];
        readonly name: "setTargetCustomAuthority";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "role";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "setUserRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x6101206040523480156200001257600080fd5b5060405162001f1b38038062001f1b833981016040819052620000359162000296565b8230818189898960006200004a8482620003e4565b506001620000598382620003e4565b5060ff81166080524660a0526200006f6200011f565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505090151560e05261010052506200052e92505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001539190620004b0565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001e357600080fd5b81516001600160401b0380821115620002005762000200620001bb565b604051601f8301601f19908116603f011681019082821181831017156200022b576200022b620001bb565b816040528381526020925086838588010111156200024857600080fd5b600091505b838210156200026c57858201830151818301840152908201906200024d565b600093810190920192909252949350505050565b805180151581146200029157600080fd5b919050565b60008060008060008060c08789031215620002b057600080fd5b86516001600160401b0380821115620002c857600080fd5b620002d68a838b01620001d1565b97506020890151915080821115620002ed57600080fd5b50620002fc89828a01620001d1565b955050604087015160ff811681146200031457600080fd5b60608801519094506001600160a01b03811681146200033257600080fd5b9250620003426080880162000280565b915060a087015190509295509295509295565b600181811c908216806200036a57607f821691505b6020821081036200038b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003df57600081815260208120601f850160051c81016020861015620003ba5750805b601f850160051c820191505b81811015620003db57828155600101620003c6565b5050505b505050565b81516001600160401b03811115620004005762000400620001bb565b620004188162000411845462000355565b8462000391565b602080601f831160018114620004505760008415620004375750858301515b600019600386901b1c1916600185901b178555620003db565b600085815260208120601f198616915b82811015620004815788860151825594840194600190910190840162000460565b5085821015620004a05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004c08162000355565b60018281168015620004db5760018114620004f15762000522565b60ff198416875282151583028701945062000522565b8760005260208060002060005b85811015620005195781548a820152908401908201620004fe565b50505082870194505b50929695505050505050565b60805160a05160c05160e0516101005161197e6200059d600039600081816102b10152818161090c0152610d830152600081816103ab015281816108b40152818161098a01528181610cc90152610d2b015260006108900152600061085b015260006102eb015261197e6000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c80637a8c63b51161011a578063b7009613116100ad578063dd62ed3e1161007c578063dd62ed3e146104ce578063e688747b146104f9578063ea7ca2761461052f578063ed0d0efb14610566578063f2fde38b1461058657600080fd5b8063b70096131461046c578063bf7e214f1461047f578063c53a398514610492578063d505accf146104bb57600080fd5b806395d89b41116100e957806395d89b411461042b5780639dc29fac14610433578063a0712d6814610446578063a9059cbb1461045957600080fd5b80637a8c63b5146103a65780637a9e5e4b146103cd5780637ecebe00146103e05780638da5cb5b1461040057600080fd5b8063313ce567116101925780634b5159da116101615780634b5159da1461034d57806367aff4841461036057806370a0823114610373578063728b952b1461039357600080fd5b8063313ce567146102e65780633644e5151461031f57806340c10f191461032757806342966c681461033a57600080fd5b80630ea9b75b116101ce5780630ea9b75b1461028e57806318160ddd146102a3578063239c70ae146102ac57806323b872dd146102d357600080fd5b806306a36aee1461020057806306fdde0314610233578063095ea7b3146102485780630bade8a41461026b575b600080fd5b61022061020e366004611436565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b61023b610599565b60405161022a9190611453565b61025b6102563660046114a1565b610627565b604051901515815260200161022a565b61025b6102793660046114ea565b600a6020526000908152604090205460ff1681565b6102a161029c366004611524565b610694565b005b61022060025481565b6102207f000000000000000000000000000000000000000000000000000000000000000081565b61025b6102e136600461156b565b610775565b61030d7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161022a565b610220610857565b6102a16103353660046114a1565b6108b2565b6102a16103483660046115ac565b610988565b6102a161035b3660046115c5565b6109ed565b6102a161036e3660046115fc565b610a7f565b610220610381366004611436565b60036020526000908152604090205481565b6102a16103a136600461162a565b610b47565b61025b7f000000000000000000000000000000000000000000000000000000000000000081565b6102a16103db366004611436565b610bd0565b6102206103ee366004611436565b60056020526000908152604090205481565b600654610413906001600160a01b031681565b6040516001600160a01b03909116815260200161022a565b61023b610cba565b6102a16104413660046114a1565b610cc7565b6102a16104543660046115ac565b610d29565b61025b6104673660046114a1565b610dfb565b61025b61047a366004611658565b610e61565b600754610413906001600160a01b031681565b6104136104a0366004611436565b6008602052600090815260409020546001600160a01b031681565b6102a16104c936600461169f565b610f5f565b6102206104dc36600461162a565b600460209081526000928352604080842090915290825290205481565b61025b61050736600461170d565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61025b61053d366004611740565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102206105743660046114ea565b600b6020526000908152604090205481565b6102a1610594366004611436565b6111a3565b600080546105a69061176c565b80601f01602080910402602001604051908101604052809291908181526020018280546105d29061176c565b801561061f5780601f106105f45761010080835404028352916020019161061f565b820191906000526020600020905b81548152906001019060200180831161060257829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106829086815260200190565b60405180910390a35060015b92915050565b6106aa336000356001600160e01b031916611221565b6106cf5760405162461bcd60e51b81526004016106c6906117a6565b60405180910390fd5b80156106ff576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610726565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610768911515815260200190565b60405180910390a3505050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146107d1576107ac83826117e2565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906107f99084906117e2565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611929833981519152906108429087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461088d576108886112cb565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f00000000000000000000000000000000000000000000000000000000000000001561090a576108ee336000356001600160e01b031916611221565b61090a5760405162461bcd60e51b81526004016106c6906117f5565b7f000000000000000000000000000000000000000000000000000000000000000081111561097a5760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e7460448201526064016106c6565b6109848282611365565b5050565b7f0000000000000000000000000000000000000000000000000000000000000000156109e0576109c4336000356001600160e01b031916611221565b6109e05760405162461bcd60e51b81526004016106c6906117f5565b6109ea33826113bf565b50565b610a03336000356001600160e01b031916611221565b610a1f5760405162461bcd60e51b81526004016106c6906117a6565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610a95336000356001600160e01b031916611221565b610ab15760405162461bcd60e51b81526004016106c6906117a6565b8015610ae0576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610b06565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610768911515815260200190565b610b5d336000356001600160e01b031916611221565b610b795760405162461bcd60e51b81526004016106c6906117a6565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610c65575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610c2490339030906001600160e01b0319600035169060040161182c565b602060405180830381865afa158015610c41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c659190611859565b610c6e57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600180546105a69061176c565b7f000000000000000000000000000000000000000000000000000000000000000015610d1f57610d03336000356001600160e01b031916611221565b610d1f5760405162461bcd60e51b81526004016106c6906117f5565b61098482826113bf565b7f000000000000000000000000000000000000000000000000000000000000000015610d8157610d65336000356001600160e01b031916611221565b610d815760405162461bcd60e51b81526004016106c6906117f5565b7f0000000000000000000000000000000000000000000000000000000000000000811115610df15760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e7460448201526064016106c6565b6109ea3382611365565b33600090815260036020526040812080548391908390610e1c9084906117e2565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611929833981519152906106829086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610efd5760405163b700961360e01b81526001600160a01b0382169063b700961390610eb49088908890889060040161182c565b602060405180830381865afa158015610ed1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef59190611859565b915050610850565b6001600160e01b031983166000908152600a602052604090205460ff1680610f5657506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610faf5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016106c6565b60006001610fbb610857565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156110c7573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906110fd5750876001600160a01b0316816001600160a01b0316145b61113a5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016106c6565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6111b9336000356001600160e01b031916611221565b6111d55760405162461bcd60e51b81526004016106c6906117a6565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b031680158015906112ab575060405163b700961360e01b81526001600160a01b0382169063b70096139061126a9087903090889060040161182c565b602060405180830381865afa158015611287573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ab9190611859565b806112c357506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516112fd9190611876565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546113779190611915565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061192983398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906113e79084906117e2565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611929833981519152906020016113b3565b6001600160a01b03811681146109ea57600080fd5b60006020828403121561144857600080fd5b813561085081611421565b600060208083528351808285015260005b8181101561148057858101830151858201604001528201611464565b506000604082860101526040601f19601f8301168501019250505092915050565b600080604083850312156114b457600080fd5b82356114bf81611421565b946020939093013593505050565b80356001600160e01b0319811681146114e557600080fd5b919050565b6000602082840312156114fc57600080fd5b610850826114cd565b803560ff811681146114e557600080fd5b80151581146109ea57600080fd5b60008060006060848603121561153957600080fd5b61154284611505565b9250611550602085016114cd565b9150604084013561156081611516565b809150509250925092565b60008060006060848603121561158057600080fd5b833561158b81611421565b9250602084013561159b81611421565b929592945050506040919091013590565b6000602082840312156115be57600080fd5b5035919050565b600080604083850312156115d857600080fd5b6115e1836114cd565b915060208301356115f181611516565b809150509250929050565b60008060006060848603121561161157600080fd5b833561161c81611421565b925061155060208501611505565b6000806040838503121561163d57600080fd5b823561164881611421565b915060208301356115f181611421565b60008060006060848603121561166d57600080fd5b833561167881611421565b9250602084013561168881611421565b9150611696604085016114cd565b90509250925092565b600080600080600080600060e0888a0312156116ba57600080fd5b87356116c581611421565b965060208801356116d581611421565b955060408801359450606088013593506116f160808901611505565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561172057600080fd5b61172983611505565b9150611737602084016114cd565b90509250929050565b6000806040838503121561175357600080fd5b823561175e81611421565b915061173760208401611505565b600181811c9082168061178057607f821691505b6020821081036117a057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561068e5761068e6117cc565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561186b57600080fd5b815161085081611516565b600080835481600182811c91508083168061189257607f831692505b602080841082036118b157634e487b7160e01b86526022600452602486fd5b8180156118c557600181146118da57611907565b60ff1986168952841515850289019650611907565b60008a81526020902060005b868110156118ff5781548b8201529085019083016118e6565b505084890196505b509498975050505050505050565b8082018082111561068e5761068e6117cc56feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220a6fc5436d2d2277bafbfe84368d6ff31fe0e9d58ed416e337d5c3bd70ab8edb964736f6c63430008140033";
        readonly sourceMap: "254:1501:129:-:0;;;403:395;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;657:5;690:4;657:5;690:4;605;611:6;619:8;2094:4:172;:12;605:4:129;2094::172;:12;:::i;:::-;-1:-1:-1;2116:6:172;:16;2125:7;2116:6;:16;:::i;:::-;-1:-1:-1;2142:20:172;;;;;2192:13;2173:32;;2242:24;:22;:24::i;:::-;2215:51;;-1:-1:-1;;682:5:170;:14;;-1:-1:-1;;;;;682:14:170;;;-1:-1:-1;;;;;;682:14:170;;;;;;;;706:9;:22;;;;;;;;;;;;744:40;;682:14;;-1:-1:-1;765:10:170;;744:40;;682:5;;744:40;799;;-1:-1:-1;;;;;799:40:170;;;816:10;;799:40;;;;;-1:-1:-1;;;;713:38:129;::::2;;;::::0;761:30:::2;::::0;-1:-1:-1;254:1501:129;;-1:-1:-1;;;254:1501:129;5510:446:172;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;5892:25:234;;;;5933:18;;5926:34;;;;5833:14:172;5976:18:234;;;5969:34;5869:13:172;6019:18:234;;;6012:34;5912:4:172;6062:19:234;;;6055:61;5864:19;;5640:295:172;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;14:127:234:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:840;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:234;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:234;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;730:3;725:2;720;712:6;708:15;704:24;701:33;698:53;;;747:1;744;737:12;698:53;769:1;760:10;;779:133;793:2;790:1;787:9;779:133;;;881:14;;;877:23;;871:30;850:14;;;846:23;;839:63;804:10;;;;779:133;;;954:1;932:15;;;928:24;;;921:35;;;;936:6;146:840;-1:-1:-1;;;;146:840:234:o;991:164::-;1067:13;;1116;;1109:21;1099:32;;1089:60;;1145:1;1142;1135:12;1089:60;991:164;;;:::o;1160:1030::-;1290:6;1298;1306;1314;1322;1330;1383:3;1371:9;1362:7;1358:23;1354:33;1351:53;;;1400:1;1397;1390:12;1351:53;1427:16;;-1:-1:-1;;;;;1492:14:234;;;1489:34;;;1519:1;1516;1509:12;1489:34;1542:61;1595:7;1586:6;1575:9;1571:22;1542:61;:::i;:::-;1532:71;;1649:2;1638:9;1634:18;1628:25;1612:41;;1678:2;1668:8;1665:16;1662:36;;;1694:1;1691;1684:12;1662:36;;1717:63;1772:7;1761:8;1750:9;1746:24;1717:63;:::i;:::-;1707:73;;;1823:2;1812:9;1808:18;1802:25;1867:4;1860:5;1856:16;1849:5;1846:27;1836:55;;1887:1;1884;1877:12;1836:55;1960:2;1945:18;;1939:25;1910:5;;-1:-1:-1;;;;;;1995:33:234;;1983:46;;1973:74;;2043:1;2040;2033:12;1973:74;2066:7;-1:-1:-1;2092:47:234;2134:3;2119:19;;2092:47;:::i;:::-;2082:57;;2179:3;2168:9;2164:19;2158:26;2148:36;;1160:1030;;;;;;;;:::o;2195:380::-;2274:1;2270:12;;;;2317;;;2338:61;;2392:4;2384:6;2380:17;2370:27;;2338:61;2445:2;2437:6;2434:14;2414:18;2411:38;2408:161;;2491:10;2486:3;2482:20;2479:1;2472:31;2526:4;2523:1;2516:15;2554:4;2551:1;2544:15;2408:161;;2195:380;;;:::o;2706:545::-;2808:2;2803:3;2800:11;2797:448;;;2844:1;2869:5;2865:2;2858:17;2914:4;2910:2;2900:19;2984:2;2972:10;2968:19;2965:1;2961:27;2955:4;2951:38;3020:4;3008:10;3005:20;3002:47;;;-1:-1:-1;3043:4:234;3002:47;3098:2;3093:3;3089:12;3086:1;3082:20;3076:4;3072:31;3062:41;;3153:82;3171:2;3164:5;3161:13;3153:82;;;3216:17;;;3197:1;3186:13;3153:82;;;3157:3;;;2797:448;2706:545;;;:::o;3427:1352::-;3547:10;;-1:-1:-1;;;;;3569:30:234;;3566:56;;;3602:18;;:::i;:::-;3631:97;3721:6;3681:38;3713:4;3707:11;3681:38;:::i;:::-;3675:4;3631:97;:::i;:::-;3783:4;;3847:2;3836:14;;3864:1;3859:663;;;;4566:1;4583:6;4580:89;;;-1:-1:-1;4635:19:234;;;4629:26;4580:89;-1:-1:-1;;3384:1:234;3380:11;;;3376:24;3372:29;3362:40;3408:1;3404:11;;;3359:57;4682:81;;3829:944;;3859:663;2653:1;2646:14;;;2690:4;2677:18;;-1:-1:-1;;3895:20:234;;;4013:236;4027:7;4024:1;4021:14;4013:236;;;4116:19;;;4110:26;4095:42;;4208:27;;;;4176:1;4164:14;;;;4043:19;;4013:236;;;4017:3;4277:6;4268:7;4265:19;4262:201;;;4338:19;;;4332:26;-1:-1:-1;;4421:1:234;4417:14;;;4433:3;4413:24;4409:37;4405:42;4390:58;4375:74;;4262:201;-1:-1:-1;;;;;4509:1:234;4493:14;;;4489:22;4476:36;;-1:-1:-1;3427:1352:234:o;4784:844::-;4914:3;4943:1;4976:6;4970:13;5006:36;5032:9;5006:36;:::i;:::-;5061:1;5078:18;;;5105:133;;;;5252:1;5247:356;;;;5071:532;;5105:133;-1:-1:-1;;5138:24:234;;5126:37;;5211:14;;5204:22;5192:35;;5183:45;;;-1:-1:-1;5105:133:234;;5247:356;5278:6;5275:1;5268:17;5308:4;5353:2;5350:1;5340:16;5378:1;5392:165;5406:6;5403:1;5400:13;5392:165;;;5484:14;;5471:11;;;5464:35;5527:16;;;;5421:10;;5392:165;;;5396:3;;;5586:6;5581:3;5577:16;5570:23;;5071:532;-1:-1:-1;5619:3:234;;4784:844;-1:-1:-1;;;;;;4784:844:234:o;5633:489::-;254:1501:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50600436106101fb5760003560e01c80637a8c63b51161011a578063b7009613116100ad578063dd62ed3e1161007c578063dd62ed3e146104ce578063e688747b146104f9578063ea7ca2761461052f578063ed0d0efb14610566578063f2fde38b1461058657600080fd5b8063b70096131461046c578063bf7e214f1461047f578063c53a398514610492578063d505accf146104bb57600080fd5b806395d89b41116100e957806395d89b411461042b5780639dc29fac14610433578063a0712d6814610446578063a9059cbb1461045957600080fd5b80637a8c63b5146103a65780637a9e5e4b146103cd5780637ecebe00146103e05780638da5cb5b1461040057600080fd5b8063313ce567116101925780634b5159da116101615780634b5159da1461034d57806367aff4841461036057806370a0823114610373578063728b952b1461039357600080fd5b8063313ce567146102e65780633644e5151461031f57806340c10f191461032757806342966c681461033a57600080fd5b80630ea9b75b116101ce5780630ea9b75b1461028e57806318160ddd146102a3578063239c70ae146102ac57806323b872dd146102d357600080fd5b806306a36aee1461020057806306fdde0314610233578063095ea7b3146102485780630bade8a41461026b575b600080fd5b61022061020e366004611436565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b61023b610599565b60405161022a9190611453565b61025b6102563660046114a1565b610627565b604051901515815260200161022a565b61025b6102793660046114ea565b600a6020526000908152604090205460ff1681565b6102a161029c366004611524565b610694565b005b61022060025481565b6102207f000000000000000000000000000000000000000000000000000000000000000081565b61025b6102e136600461156b565b610775565b61030d7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161022a565b610220610857565b6102a16103353660046114a1565b6108b2565b6102a16103483660046115ac565b610988565b6102a161035b3660046115c5565b6109ed565b6102a161036e3660046115fc565b610a7f565b610220610381366004611436565b60036020526000908152604090205481565b6102a16103a136600461162a565b610b47565b61025b7f000000000000000000000000000000000000000000000000000000000000000081565b6102a16103db366004611436565b610bd0565b6102206103ee366004611436565b60056020526000908152604090205481565b600654610413906001600160a01b031681565b6040516001600160a01b03909116815260200161022a565b61023b610cba565b6102a16104413660046114a1565b610cc7565b6102a16104543660046115ac565b610d29565b61025b6104673660046114a1565b610dfb565b61025b61047a366004611658565b610e61565b600754610413906001600160a01b031681565b6104136104a0366004611436565b6008602052600090815260409020546001600160a01b031681565b6102a16104c936600461169f565b610f5f565b6102206104dc36600461162a565b600460209081526000928352604080842090915290825290205481565b61025b61050736600461170d565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61025b61053d366004611740565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102206105743660046114ea565b600b6020526000908152604090205481565b6102a1610594366004611436565b6111a3565b600080546105a69061176c565b80601f01602080910402602001604051908101604052809291908181526020018280546105d29061176c565b801561061f5780601f106105f45761010080835404028352916020019161061f565b820191906000526020600020905b81548152906001019060200180831161060257829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106829086815260200190565b60405180910390a35060015b92915050565b6106aa336000356001600160e01b031916611221565b6106cf5760405162461bcd60e51b81526004016106c6906117a6565b60405180910390fd5b80156106ff576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610726565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610768911515815260200190565b60405180910390a3505050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146107d1576107ac83826117e2565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906107f99084906117e2565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611929833981519152906108429087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461088d576108886112cb565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f00000000000000000000000000000000000000000000000000000000000000001561090a576108ee336000356001600160e01b031916611221565b61090a5760405162461bcd60e51b81526004016106c6906117f5565b7f000000000000000000000000000000000000000000000000000000000000000081111561097a5760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e7460448201526064016106c6565b6109848282611365565b5050565b7f0000000000000000000000000000000000000000000000000000000000000000156109e0576109c4336000356001600160e01b031916611221565b6109e05760405162461bcd60e51b81526004016106c6906117f5565b6109ea33826113bf565b50565b610a03336000356001600160e01b031916611221565b610a1f5760405162461bcd60e51b81526004016106c6906117a6565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610a95336000356001600160e01b031916611221565b610ab15760405162461bcd60e51b81526004016106c6906117a6565b8015610ae0576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610b06565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610768911515815260200190565b610b5d336000356001600160e01b031916611221565b610b795760405162461bcd60e51b81526004016106c6906117a6565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610c65575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610c2490339030906001600160e01b0319600035169060040161182c565b602060405180830381865afa158015610c41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c659190611859565b610c6e57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600180546105a69061176c565b7f000000000000000000000000000000000000000000000000000000000000000015610d1f57610d03336000356001600160e01b031916611221565b610d1f5760405162461bcd60e51b81526004016106c6906117f5565b61098482826113bf565b7f000000000000000000000000000000000000000000000000000000000000000015610d8157610d65336000356001600160e01b031916611221565b610d815760405162461bcd60e51b81526004016106c6906117f5565b7f0000000000000000000000000000000000000000000000000000000000000000811115610df15760405162461bcd60e51b815260206004820181905260248201527f4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e7460448201526064016106c6565b6109ea3382611365565b33600090815260036020526040812080548391908390610e1c9084906117e2565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611929833981519152906106829086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610efd5760405163b700961360e01b81526001600160a01b0382169063b700961390610eb49088908890889060040161182c565b602060405180830381865afa158015610ed1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef59190611859565b915050610850565b6001600160e01b031983166000908152600a602052604090205460ff1680610f5657506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610faf5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016106c6565b60006001610fbb610857565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156110c7573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906110fd5750876001600160a01b0316816001600160a01b0316145b61113a5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016106c6565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6111b9336000356001600160e01b031916611221565b6111d55760405162461bcd60e51b81526004016106c6906117a6565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b031680158015906112ab575060405163b700961360e01b81526001600160a01b0382169063b70096139061126a9087903090889060040161182c565b602060405180830381865afa158015611287573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ab9190611859565b806112c357506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516112fd9190611876565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546113779190611915565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061192983398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906113e79084906117e2565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611929833981519152906020016113b3565b6001600160a01b03811681146109ea57600080fd5b60006020828403121561144857600080fd5b813561085081611421565b600060208083528351808285015260005b8181101561148057858101830151858201604001528201611464565b506000604082860101526040601f19601f8301168501019250505092915050565b600080604083850312156114b457600080fd5b82356114bf81611421565b946020939093013593505050565b80356001600160e01b0319811681146114e557600080fd5b919050565b6000602082840312156114fc57600080fd5b610850826114cd565b803560ff811681146114e557600080fd5b80151581146109ea57600080fd5b60008060006060848603121561153957600080fd5b61154284611505565b9250611550602085016114cd565b9150604084013561156081611516565b809150509250925092565b60008060006060848603121561158057600080fd5b833561158b81611421565b9250602084013561159b81611421565b929592945050506040919091013590565b6000602082840312156115be57600080fd5b5035919050565b600080604083850312156115d857600080fd5b6115e1836114cd565b915060208301356115f181611516565b809150509250929050565b60008060006060848603121561161157600080fd5b833561161c81611421565b925061155060208501611505565b6000806040838503121561163d57600080fd5b823561164881611421565b915060208301356115f181611421565b60008060006060848603121561166d57600080fd5b833561167881611421565b9250602084013561168881611421565b9150611696604085016114cd565b90509250925092565b600080600080600080600060e0888a0312156116ba57600080fd5b87356116c581611421565b965060208801356116d581611421565b955060408801359450606088013593506116f160808901611505565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561172057600080fd5b61172983611505565b9150611737602084016114cd565b90509250929050565b6000806040838503121561175357600080fd5b823561175e81611421565b915061173760208401611505565b600181811c9082168061178057607f821691505b6020821081036117a057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561068e5761068e6117cc565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561186b57600080fd5b815161085081611516565b600080835481600182811c91508083168061189257607f831692505b602080841082036118b157634e487b7160e01b86526022600452602486fd5b8180156118c557600181146118da57611907565b60ff1986168952841515850289019650611907565b60008a81526020902060005b868110156118ff5781548b8201529085019083016118e6565b505084890196505b509498975050505050505050565b8082018082111561068e5761068e6117cc56feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220a6fc5436d2d2277bafbfe84368d6ff31fe0e9d58ed416e337d5c3bd70ab8edb964736f6c63430008140033";
        readonly sourceMap: "254:1501:129:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1622:47:171;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;548:25:234;;;536:2;521:18;1622:47:171;;;;;;;;1031:18:172;;;:::i;:::-;;;;;;;:::i;2461:211::-;;;;;;:::i;:::-;;:::i;:::-;;;1622:14:234;;1615:22;1597:41;;1585:2;1570:18;2461:211:172;1457:187:234;1676:49:171;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4390:396;;;;;;:::i;:::-;;:::i;:::-;;1304:26:172;;;;;;358:38:129;;;;;3057:592:172;;;;;;:::i;:::-;;:::i;1083:31::-;;;;;;;;3503:4:234;3491:17;;;3473:36;;3461:2;3446:18;1083:31:172;3331:184:234;5327:177:172;;;:::i;1242:233:129:-;;;;;;:::i;:::-;;:::i;1481:111::-;;;;;;:::i;:::-;;:::i;3448:210:171:-;;;;;;:::i;:::-;;:::i;3853:337::-;;;;;;:::i;:::-;;:::i;1337:44:172:-;;;;;;:::i;:::-;;;;;;;;;;;;;;3006:241:171;;;;;;:::i;:::-;;:::i;313:39:129:-;;;;;1523:434:170;;;;;;:::i;:::-;;:::i;1751:41:172:-;;;;;;:::i;:::-;;;;;;;;;;;;;;562:20:170;;;;;-1:-1:-1;;;;;562:20:170;;;;;;-1:-1:-1;;;;;5327:32:234;;;5309:51;;5297:2;5282:18;562:20:170;5163:203:234;1056:20:172;;;:::i;1598:155:129:-;;;;;;:::i;:::-;;:::i;1047:189::-;;;;;;:::i;:::-;;:::i;2678:373:172:-;;;;;;:::i;:::-;;:::i;2336:465:171:-;;;;;;:::i;:::-;;:::i;589:26:170:-;;;;;-1:-1:-1;;;;;589:26:170;;;1369:61:171;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:171;;;3838:1483:172;;;;;;:::i;:::-;;:::i;1388:64::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1958:186:171;;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:171;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:171;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;:::i;:::-;;;;;;;;;;;;;;1963:164:170;;;;;;:::i;:::-;;:::i;1031:18:172:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2461:211::-;2561:10;2535:4;2551:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2551:30:172;;;;;;;;;;:39;;;2606:37;2535:4;;2551:30;;2606:37;;;;2584:6;548:25:234;;536:2;521:18;;402:177;2606:37:172;;;;;;;;-1:-1:-1;2661:4:172;2461:211;;;;;:::o;4390:396:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;;;;;;;;;4535:7:171::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:171;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:171;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:171::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1622:14:234::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;4730:49:171::1;;;;;;;;4390:396:::0;;;:::o;3057:592:172:-;-1:-1:-1;;;;;3209:15:172;;3175:4;3209:15;;;:9;:15;;;;;;;;3225:10;3209:27;;;;;;;;-1:-1:-1;;3287:28:172;;3283:80;;3347:16;3357:6;3347:7;:16;:::i;:::-;-1:-1:-1;;;;;3317:15:172;;;;;;:9;:15;;;;;;;;3333:10;3317:27;;;;;;;:46;3283:80;-1:-1:-1;;;;;3374:15:172;;;;;;:9;:15;;;;;:25;;3393:6;;3374:15;:25;;3393:6;;3374:25;:::i;:::-;;;;-1:-1:-1;;;;;;;3545:13:172;;;;;;;:9;:13;;;;;;;:23;;;;;;3594:26;3545:13;;3594:26;;;-1:-1:-1;;;;;;;;;;;3594:26:172;;;3562:6;548:25:234;;536:2;521:18;;402:177;3594:26:172;;;;;;;;3638:4;3631:11;;;3057:592;;;;;;:::o;5327:177::-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;:::-;5403:94;;5327:177;:::o;5410:87::-;-1:-1:-1;5446:24:172;;5327:177::o;1242:233:129:-;859:17;855:169;;;917:33;930:10;942:7;;-1:-1:-1;;;;;;942:7:129;917:12;:33::i;:::-;892:121;;;;-1:-1:-1;;;892:121:129;;;;;;;:::i;:::-;1382:13:::1;1372:6;:23;;1364:68;;;::::0;-1:-1:-1;;;1364:68:129;;9327:2:234;1364:68:129::1;::::0;::::1;9309:21:234::0;;;9346:18;;;9339:30;9405:34;9385:18;;;9378:62;9457:18;;1364:68:129::1;9125:356:234::0;1364:68:129::1;1442:26;1448:11;1461:6;1442:5;:26::i;:::-;1242:233:::0;;:::o;1481:111::-;859:17;855:169;;;917:33;930:10;942:7;;-1:-1:-1;;;;;;942:7:129;917:12;:33::i;:::-;892:121;;;;-1:-1:-1;;;892:121:129;;;;;;;:::i;:::-;1560:25:::1;1566:10;1578:6;1560:5;:25::i;:::-;1481:111:::0;:::o;3448:210:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:171;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:171::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1597:41:234;;;3606:45:171::1;::::0;1570:18:234;3606:45:171::1;;;;;;;3448:210:::0;;:::o;3853:337::-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;3986:7:171::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:171;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:171;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:171::1;;4175:7;4147:36;;;;1622:14:234::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;3006:241:171;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:171;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:171::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;1523:434:170:-;1794:5;;-1:-1:-1;;;;;1794:5:170;1780:10;:19;;:76;;-1:-1:-1;1803:9:170;;:53;;-1:-1:-1;;;1803:53:170;;-1:-1:-1;;;;;1803:9:170;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:170;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:170;-1:-1:-1;;;;;1868:24:170;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:170;1523:434;:::o;1056:20:172:-;;;;;;;:::i;1598:155:129:-;859:17;855:169;;;917:33;930:10;942:7;;-1:-1:-1;;;;;;942:7:129;917:12;:33::i;:::-;892:121;;;;-1:-1:-1;;;892:121:129;;;;;;;:::i;:::-;1720:26:::1;1726:11;1739:6;1720:5;:26::i;1047:189::-:0;859:17;855:169;;;917:33;930:10;942:7;;-1:-1:-1;;;;;;942:7:129;917:12;:33::i;:::-;892:121;;;;-1:-1:-1;;;892:121:129;;;;;;;:::i;:::-;1144:13:::1;1134:6;:23;;1126:68;;;::::0;-1:-1:-1;;;1126:68:129;;9327:2:234;1126:68:129::1;::::0;::::1;9309:21:234::0;;;9346:18;;;9339:30;9405:34;9385:18;;;9378:62;9457:18;;1126:68:129::1;9125:356:234::0;1126:68:129::1;1204:25;1210:10;1222:6;1204:5;:25::i;2678:373:172:-:0;2774:10;2748:4;2764:21;;;:9;:21;;;;;:31;;2789:6;;2764:21;2748:4;;2764:31;;2789:6;;2764:31;:::i;:::-;;;;-1:-1:-1;;;;;;;2941:13:172;;;;;;:9;:13;;;;;;;:23;;;;;;2990:32;2999:10;;-1:-1:-1;;;;;;;;;;;2990:32:172;;;2958:6;548:25:234;;536:2;521:18;;402:177;2336:465:171;-1:-1:-1;;;;;2515:32:171;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:171;;-1:-1:-1;;;;;2609:23:171;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:171;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:171;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:171;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;2336:465;-1:-1:-1;;;;;2336:465:171:o;3838:1483:172:-;4057:15;4045:8;:27;;4037:63;;;;-1:-1:-1;;;4037:63:172;;10343:2:234;4037:63:172;;;10325:21:234;10382:2;10362:18;;;10355:30;10421:25;10401:18;;;10394:53;10464:18;;4037:63:172;10141:347:234;4037:63:172;4265:24;4292:805;4428:18;:16;:18::i;:::-;-1:-1:-1;;;;;4873:13:172;;;;;;;:6;:13;;;;;;;;;:15;;;;;;;;4511:449;;4555:165;4511:449;;;10780:25:234;10859:18;;;10852:43;;;;10931:15;;;10911:18;;;10904:43;10963:18;;;10956:34;;;11006:19;;;10999:35;;;;11050:19;;;;11043:35;;;4511:449:172;;;;;;;;;;10752:19:234;;;4511:449:172;;;4472:514;;;;;;;;-1:-1:-1;;;4350:658:172;;;11347:27:234;11390:11;;;11383:27;;;;11426:12;;;11419:28;;;;11463:12;;4350:658:172;;;-1:-1:-1;;4350:658:172;;;;;;;;;4319:707;;4350:658;4319:707;;;;4292:805;;;;;;;;;11713:25:234;11786:4;11774:17;;11754:18;;;11747:45;11808:18;;;11801:34;;;11851:18;;;11844:34;;;11685:19;;4292:805:172;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4292:805:172;;-1:-1:-1;;4292:805:172;;;-1:-1:-1;;;;;;;5120:30:172;;;;;;:59;;;5174:5;-1:-1:-1;;;;;5154:25:172;:16;-1:-1:-1;;;;;5154:25:172;;5120:59;5112:86;;;;-1:-1:-1;;;5112:86:172;;12091:2:234;5112:86:172;;;12073:21:234;12130:2;12110:18;;;12103:30;-1:-1:-1;;;12149:18:234;;;12142:44;12203:18;;5112:86:172;11889:338:234;5112:86:172;-1:-1:-1;;;;;5213:27:172;;;;;;;:9;:27;;;;;;;;:36;;;;;;;;;;;;;:44;;;5283:31;548:25:234;;;5213:36:172;;5283:31;;;;;521:18:234;5283:31:172;;;;;;;3838:1483;;;;;;;:::o;1963:164:170:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:170::1;-1:-1:-1::0;;;;;2046:16:170;::::1;::::0;;::::1;::::0;;;2078:42:::1;::::0;2099:10:::1;::::0;2078:42:::1;::::0;-1:-1:-1;;2078:42:170::1;1963:164:::0;:::o;977:540::-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:170;1415:27;;;;;:77;;-1:-1:-1;1446:46:170;;-1:-1:-1;;;1446:46:170;;-1:-1:-1;;;;;1446:12:170;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:170;;-1:-1:-1;;;;;1497:13:170;;;1505:5;;1497:13;1414:96;1407:103;977:540;-1:-1:-1;;;;977:540:170:o;5510:446:172:-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;13758:25:234;;;;13799:18;;13792:34;;;;5833:14:172;13842:18:234;;;13835:34;5869:13:172;13885:18:234;;;13878:34;5912:4:172;13928:19:234;;;13921:61;13730:19;;5640:295:172;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;6150:325::-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;6387:13:172;;;;;;:9;:13;;;;;;;;:23;;;;;;6436:32;548:25:234;;;-1:-1:-1;;;;;;;;;;;6436:32:172;521:18:234;6436:32:172;;;;;;;;6150:325;;:::o;6481:328::-;-1:-1:-1;;;;;6553:15:172;;;;;;:9;:15;;;;;:25;;6572:6;;6553:15;:25;;6572:6;;6553:25;:::i;:::-;;;;-1:-1:-1;;6721:11:172;:21;;;;;;;6768:34;;548:25:234;;;-1:-1:-1;;;;;;;6768:34:172;;;-1:-1:-1;;;;;;;;;;;6768:34:172;536:2:234;521:18;6768:34:172;402:177:234;14:131;-1:-1:-1;;;;;89:31:234;;79:42;;69:70;;135:1;132;125:12;150:247;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;584:548::-;696:4;725:2;754;743:9;736:21;786:6;780:13;829:6;824:2;813:9;809:18;802:34;854:1;864:140;878:6;875:1;872:13;864:140;;;973:14;;;969:23;;963:30;939:17;;;958:2;935:26;928:66;893:10;;864:140;;;868:3;1053:1;1048:2;1039:6;1028:9;1024:22;1020:31;1013:42;1123:2;1116;1112:7;1107:2;1099:6;1095:15;1091:29;1080:9;1076:45;1072:54;1064:62;;;;584:548;;;;:::o;1137:315::-;1205:6;1213;1266:2;1254:9;1245:7;1241:23;1237:32;1234:52;;;1282:1;1279;1272:12;1234:52;1321:9;1308:23;1340:31;1365:5;1340:31;:::i;:::-;1390:5;1442:2;1427:18;;;;1414:32;;-1:-1:-1;;;1137:315:234:o;1649:173::-;1716:20;;-1:-1:-1;;;;;;1765:32:234;;1755:43;;1745:71;;1812:1;1809;1802:12;1745:71;1649:173;;;:::o;1827:184::-;1885:6;1938:2;1926:9;1917:7;1913:23;1909:32;1906:52;;;1954:1;1951;1944:12;1906:52;1977:28;1995:9;1977:28;:::i;2016:156::-;2082:20;;2142:4;2131:16;;2121:27;;2111:55;;2162:1;2159;2152:12;2177:118;2263:5;2256:13;2249:21;2242:5;2239:32;2229:60;;2285:1;2282;2275:12;2300:383;2371:6;2379;2387;2440:2;2428:9;2419:7;2415:23;2411:32;2408:52;;;2456:1;2453;2446:12;2408:52;2479:27;2496:9;2479:27;:::i;:::-;2469:37;;2525;2558:2;2547:9;2543:18;2525:37;:::i;:::-;2515:47;;2612:2;2601:9;2597:18;2584:32;2625:28;2647:5;2625:28;:::i;:::-;2672:5;2662:15;;;2300:383;;;;;:::o;2870:456::-;2947:6;2955;2963;3016:2;3004:9;2995:7;2991:23;2987:32;2984:52;;;3032:1;3029;3022:12;2984:52;3071:9;3058:23;3090:31;3115:5;3090:31;:::i;:::-;3140:5;-1:-1:-1;3197:2:234;3182:18;;3169:32;3210:33;3169:32;3210:33;:::i;:::-;2870:456;;3262:7;;-1:-1:-1;;;3316:2:234;3301:18;;;;3288:32;;2870:456::o;3520:180::-;3579:6;3632:2;3620:9;3611:7;3607:23;3603:32;3600:52;;;3648:1;3645;3638:12;3600:52;-1:-1:-1;3671:23:234;;3520:180;-1:-1:-1;3520:180:234:o;3705:313::-;3769:6;3777;3830:2;3818:9;3809:7;3805:23;3801:32;3798:52;;;3846:1;3843;3836:12;3798:52;3869:28;3887:9;3869:28;:::i;:::-;3859:38;;3947:2;3936:9;3932:18;3919:32;3960:28;3982:5;3960:28;:::i;:::-;4007:5;3997:15;;;3705:313;;;;;:::o;4023:452::-;4095:6;4103;4111;4164:2;4152:9;4143:7;4139:23;4135:32;4132:52;;;4180:1;4177;4170:12;4132:52;4219:9;4206:23;4238:31;4263:5;4238:31;:::i;:::-;4288:5;-1:-1:-1;4312:36:234;4344:2;4329:18;;4312:36;:::i;4480:407::-;4567:6;4575;4628:2;4616:9;4607:7;4603:23;4599:32;4596:52;;;4644:1;4641;4634:12;4596:52;4683:9;4670:23;4702:31;4727:5;4702:31;:::i;:::-;4752:5;-1:-1:-1;4809:2:234;4794:18;;4781:32;4822:33;4781:32;4822:33;:::i;5371:460::-;5447:6;5455;5463;5516:2;5504:9;5495:7;5491:23;5487:32;5484:52;;;5532:1;5529;5522:12;5484:52;5571:9;5558:23;5590:31;5615:5;5590:31;:::i;:::-;5640:5;-1:-1:-1;5697:2:234;5682:18;;5669:32;5710:33;5669:32;5710:33;:::i;:::-;5762:7;-1:-1:-1;5788:37:234;5821:2;5806:18;;5788:37;:::i;:::-;5778:47;;5371:460;;;;;:::o;6063:734::-;6174:6;6182;6190;6198;6206;6214;6222;6275:3;6263:9;6254:7;6250:23;6246:33;6243:53;;;6292:1;6289;6282:12;6243:53;6331:9;6318:23;6350:31;6375:5;6350:31;:::i;:::-;6400:5;-1:-1:-1;6457:2:234;6442:18;;6429:32;6470:33;6429:32;6470:33;:::i;:::-;6522:7;-1:-1:-1;6576:2:234;6561:18;;6548:32;;-1:-1:-1;6627:2:234;6612:18;;6599:32;;-1:-1:-1;6650:37:234;6682:3;6667:19;;6650:37;:::i;:::-;6640:47;;6734:3;6723:9;6719:19;6706:33;6696:43;;6786:3;6775:9;6771:19;6758:33;6748:43;;6063:734;;;;;;;;;;:::o;7195:254::-;7260:6;7268;7321:2;7309:9;7300:7;7296:23;7292:32;7289:52;;;7337:1;7334;7327:12;7289:52;7360:27;7377:9;7360:27;:::i;:::-;7350:37;;7406;7439:2;7428:9;7424:18;7406:37;:::i;:::-;7396:47;;7195:254;;;;;:::o;7454:317::-;7520:6;7528;7581:2;7569:9;7560:7;7556:23;7552:32;7549:52;;;7597:1;7594;7587:12;7549:52;7636:9;7623:23;7655:31;7680:5;7655:31;:::i;:::-;7705:5;-1:-1:-1;7729:36:234;7761:2;7746:18;;7729:36;:::i;7776:380::-;7855:1;7851:12;;;;7898;;;7919:61;;7973:4;7965:6;7961:17;7951:27;;7919:61;8026:2;8018:6;8015:14;7995:18;7992:38;7989:161;;8072:10;8067:3;8063:20;8060:1;8053:31;8107:4;8104:1;8097:15;8135:4;8132:1;8125:15;7989:161;;7776:380;;;:::o;8161:336::-;8363:2;8345:21;;;8402:2;8382:18;;;8375:30;-1:-1:-1;;;8436:2:234;8421:18;;8414:42;8488:2;8473:18;;8161:336::o;8502:127::-;8563:10;8558:3;8554:20;8551:1;8544:31;8594:4;8591:1;8584:15;8618:4;8615:1;8608:15;8634:128;8701:9;;;8722:11;;;8719:37;;;8736:18;;:::i;8767:353::-;8969:2;8951:21;;;9008:2;8988:18;;;8981:30;9047:31;9042:2;9027:18;;9020:59;9111:2;9096:18;;8767:353::o;9486:400::-;-1:-1:-1;;;;;9742:15:234;;;9724:34;;9794:15;;;;9789:2;9774:18;;9767:43;-1:-1:-1;;;;;;9846:33:234;;;9841:2;9826:18;;9819:61;9674:2;9659:18;;9486:400::o;9891:245::-;9958:6;10011:2;9999:9;9990:7;9986:23;9982:32;9979:52;;;10027:1;10024;10017:12;9979:52;10059:9;10053:16;10078:28;10100:5;10078:28;:::i;12361:1133::-;12491:3;12520:1;12553:6;12547:13;12583:3;12605:1;12633:9;12629:2;12625:18;12615:28;;12693:2;12682:9;12678:18;12715;12705:61;;12759:4;12751:6;12747:17;12737:27;;12705:61;12785:2;12833;12825:6;12822:14;12802:18;12799:38;12796:165;;-1:-1:-1;;;12860:33:234;;12916:4;12913:1;12906:15;12946:4;12867:3;12934:17;12796:165;12977:18;13004:133;;;;13151:1;13146:323;;;;12970:499;;13004:133;-1:-1:-1;;13037:24:234;;13025:37;;13110:14;;13103:22;13091:35;;13082:45;;;-1:-1:-1;13004:133:234;;13146:323;12308:1;12301:14;;;12345:4;12332:18;;13244:1;13258:165;13272:6;13269:1;13266:13;13258:165;;;13350:14;;13337:11;;;13330:35;13393:16;;;;13287:10;;13258:165;;;13262:3;;13452:6;13447:3;13443:16;13436:23;;12970:499;-1:-1:-1;13485:3:234;;12361:1133;-1:-1:-1;;;;;;;;12361:1133:234:o;13993:125::-;14058:9;;;14079:10;;;14076:36;;;14092:18;;:::i";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "23357": readonly [{
                readonly start: 939;
                readonly length: 32;
            }, {
                readonly start: 2228;
                readonly length: 32;
            }, {
                readonly start: 2442;
                readonly length: 32;
            }, {
                readonly start: 3273;
                readonly length: 32;
            }, {
                readonly start: 3371;
                readonly length: 32;
            }];
            readonly "23359": readonly [{
                readonly start: 689;
                readonly length: 32;
            }, {
                readonly start: 2316;
                readonly length: 32;
            }, {
                readonly start: 3459;
                readonly length: 32;
            }];
            readonly "72247": readonly [{
                readonly start: 747;
                readonly length: 32;
            }];
            readonly "72261": readonly [{
                readonly start: 2139;
                readonly length: 32;
            }];
            readonly "72263": readonly [{
                readonly start: 2192;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "DOMAIN_SEPARATOR()": "3644e515";
        readonly "allowance(address,address)": "dd62ed3e";
        readonly "approve(address,uint256)": "095ea7b3";
        readonly "authority()": "bf7e214f";
        readonly "balanceOf(address)": "70a08231";
        readonly "burn(address,uint256)": "9dc29fac";
        readonly "burn(uint256)": "42966c68";
        readonly "canCall(address,address,bytes4)": "b7009613";
        readonly "decimals()": "313ce567";
        readonly "doesRoleHaveCapability(uint8,bytes4)": "e688747b";
        readonly "doesUserHaveRole(address,uint8)": "ea7ca276";
        readonly "getRolesWithCapability(bytes4)": "ed0d0efb";
        readonly "getTargetCustomAuthority(address)": "c53a3985";
        readonly "getUserRoles(address)": "06a36aee";
        readonly "isCapabilityPublic(bytes4)": "0bade8a4";
        readonly "isCompetitionMode()": "7a8c63b5";
        readonly "maxMintAmount()": "239c70ae";
        readonly "mint(address,uint256)": "40c10f19";
        readonly "mint(uint256)": "a0712d68";
        readonly "name()": "06fdde03";
        readonly "nonces(address)": "7ecebe00";
        readonly "owner()": "8da5cb5b";
        readonly "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf";
        readonly "setAuthority(address)": "7a9e5e4b";
        readonly "setPublicCapability(bytes4,bool)": "4b5159da";
        readonly "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b";
        readonly "setTargetCustomAuthority(address,address)": "728b952b";
        readonly "setUserRole(address,uint8,bool)": "67aff484";
        readonly "symbol()": "95d89b41";
        readonly "totalSupply()": "18160ddd";
        readonly "transfer(address,uint256)": "a9059cbb";
        readonly "transferFrom(address,address,uint256)": "23b872dd";
        readonly "transferOwnership(address)": "f2fde38b";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"decimals\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"isCompetitionMode_\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"maxMintAmount_\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isCompetitionMode\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxMintAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/ERC20Mintable.sol\":\"ERC20Mintable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48\",\"dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "name";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "symbol";
                    readonly type: "string";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "decimals";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "address";
                    readonly name: "admin";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isCompetitionMode_";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxMintAmount_";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Approval";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "contract Authority";
                    readonly name: "newAuthority";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "AuthorityUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "newOwner";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "OwnershipTransferred";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes4";
                    readonly name: "functionSig";
                    readonly type: "bytes4";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "enabled";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "PublicCapabilityUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "role";
                    readonly type: "uint8";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bytes4";
                    readonly name: "functionSig";
                    readonly type: "bytes4";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "enabled";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "RoleCapabilityUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "contract Authority";
                    readonly name: "authority";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "TargetCustomAuthorityUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Transfer";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint8";
                    readonly name: "role";
                    readonly type: "uint8";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "enabled";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "UserRoleUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "DOMAIN_SEPARATOR";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "allowance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "approve";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "authority";
                readonly outputs: readonly [{
                    readonly internalType: "contract Authority";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "burn";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "destination";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "burn";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes4";
                    readonly name: "functionSig";
                    readonly type: "bytes4";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "canCall";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "decimals";
                readonly outputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "";
                    readonly type: "uint8";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "role";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes4";
                    readonly name: "functionSig";
                    readonly type: "bytes4";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "doesRoleHaveCapability";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "role";
                    readonly type: "uint8";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "doesUserHaveRole";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes4";
                    readonly name: "";
                    readonly type: "bytes4";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getRolesWithCapability";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getTargetCustomAuthority";
                readonly outputs: readonly [{
                    readonly internalType: "contract Authority";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getUserRoles";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes4";
                    readonly name: "";
                    readonly type: "bytes4";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "isCapabilityPublic";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "isCompetitionMode";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxMintAmount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "destination";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "mint";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "mint";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "nonces";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "owner";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "permit";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract Authority";
                    readonly name: "newAuthority";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setAuthority";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes4";
                    readonly name: "functionSig";
                    readonly type: "bytes4";
                }, {
                    readonly internalType: "bool";
                    readonly name: "enabled";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setPublicCapability";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "role";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes4";
                    readonly name: "functionSig";
                    readonly type: "bytes4";
                }, {
                    readonly internalType: "bool";
                    readonly name: "enabled";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setRoleCapability";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract Authority";
                    readonly name: "customAuthority";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setTargetCustomAuthority";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "role";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bool";
                    readonly name: "enabled";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setUserRole";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transfer";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferFrom";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newOwner";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferOwnership";
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/test/ERC20Mintable.sol": "ERC20Mintable";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/test/ERC20Mintable.sol": {
                readonly keccak256: "0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5";
                readonly urls: readonly ["bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48", "dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA"];
                readonly license: "Apache-2.0";
            };
            readonly "lib/solmate/src/auth/Auth.sol": {
                readonly keccak256: "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c";
                readonly urls: readonly ["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac", "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                readonly keccak256: "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3";
                readonly urls: readonly ["bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef", "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/tokens/ERC20.sol": {
                readonly keccak256: "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10";
                readonly urls: readonly ["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35", "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"];
                readonly license: "AGPL-3.0-only";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/ERC20Mintable.sol";
        readonly id: 23491;
        readonly exportedSymbols: {
            readonly Authority: readonly [71917];
            readonly ERC20: readonly [72610];
            readonly ERC20Mintable: readonly [23490];
            readonly MultiRolesAuthority: readonly [72222];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1717:129";
        readonly nodes: readonly [{
            readonly id: 23345;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:129";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 23347;
            readonly nodeType: "ImportDirective";
            readonly src: "64:50:129";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/auth/Auth.sol";
            readonly file: "solmate/auth/Auth.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 23491;
            readonly sourceUnit: 71918;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 23346;
                    readonly name: "Authority";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 71917;
                    readonly src: "73:9:129";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 23349;
            readonly nodeType: "ImportDirective";
            readonly src: "115:87:129";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol";
            readonly file: "solmate/auth/authorities/MultiRolesAuthority.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 23491;
            readonly sourceUnit: 72223;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 23348;
                    readonly name: "MultiRolesAuthority";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 72222;
                    readonly src: "124:19:129";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 23351;
            readonly nodeType: "ImportDirective";
            readonly src: "203:49:129";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/tokens/ERC20.sol";
            readonly file: "solmate/tokens/ERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 23491;
            readonly sourceUnit: 72611;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 23350;
                    readonly name: "ERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 72610;
                    readonly src: "212:5:129";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 23490;
            readonly nodeType: "ContractDefinition";
            readonly src: "254:1501:129";
            readonly nodes: readonly [{
                readonly id: 23357;
                readonly nodeType: "VariableDeclaration";
                readonly src: "313:39:129";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "7a8c63b5";
                readonly mutability: "immutable";
                readonly name: "isCompetitionMode";
                readonly nameLocation: "335:17:129";
                readonly scope: 23490;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bool";
                    readonly typeString: "bool";
                };
                readonly typeName: {
                    readonly id: 23356;
                    readonly name: "bool";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "313:4:129";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 23359;
                readonly nodeType: "VariableDeclaration";
                readonly src: "358:38:129";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "239c70ae";
                readonly mutability: "immutable";
                readonly name: "maxMintAmount";
                readonly nameLocation: "383:13:129";
                readonly scope: 23490;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 23358;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "358:7:129";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 23400;
                readonly nodeType: "FunctionDefinition";
                readonly src: "403:395:129";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23399;
                    readonly nodeType: "Block";
                    readonly src: "703:95:129";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 23393;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 23391;
                                readonly name: "isCompetitionMode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23357;
                                readonly src: "713:17:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 23392;
                                readonly name: "isCompetitionMode_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23369;
                                readonly src: "733:18:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "713:38:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 23394;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "713:38:129";
                    }, {
                        readonly expression: {
                            readonly id: 23397;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 23395;
                                readonly name: "maxMintAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23359;
                                readonly src: "761:13:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 23396;
                                readonly name: "maxMintAmount_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23371;
                                readonly src: "777:14:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "761:30:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 23398;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "761:30:129";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 23374;
                        readonly name: "name";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 23361;
                        readonly src: "605:4:129";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string memory";
                        };
                    }, {
                        readonly id: 23375;
                        readonly name: "symbol";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 23363;
                        readonly src: "611:6:129";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string memory";
                        };
                    }, {
                        readonly id: 23376;
                        readonly name: "decimals";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 23365;
                        readonly src: "619:8:129";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                    }];
                    readonly id: 23377;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 23373;
                        readonly name: "ERC20";
                        readonly nameLocations: readonly ["599:5:129"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72610;
                        readonly src: "599:5:129";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "599:29:129";
                }, {
                    readonly arguments: readonly [{
                        readonly id: 23379;
                        readonly name: "admin";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 23367;
                        readonly src: "657:5:129";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 23385;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "690:4:129";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC20Mintable_$23490";
                                        readonly typeString: "contract ERC20Mintable";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_ERC20Mintable_$23490";
                                        readonly typeString: "contract ERC20Mintable";
                                    }];
                                    readonly id: 23384;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "682:7:129";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 23383;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "682:7:129";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 23386;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "682:13:129";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 23382;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "674:7:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 23381;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "674:7:129";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 23387;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "674:22:129";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            }];
                            readonly id: 23380;
                            readonly name: "Authority";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 71917;
                            readonly src: "664:9:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_contract$_Authority_$71917_$";
                                readonly typeString: "type(contract Authority)";
                            };
                        };
                        readonly id: 23388;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "664:33:129";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$71917";
                            readonly typeString: "contract Authority";
                        };
                    }];
                    readonly id: 23389;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 23378;
                        readonly name: "MultiRolesAuthority";
                        readonly nameLocations: readonly ["637:19:129"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72222;
                        readonly src: "637:19:129";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "637:61:129";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 23372;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23361;
                        readonly mutability: "mutable";
                        readonly name: "name";
                        readonly nameLocation: "438:4:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23400;
                        readonly src: "424:18:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 23360;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "424:6:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23363;
                        readonly mutability: "mutable";
                        readonly name: "symbol";
                        readonly nameLocation: "466:6:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23400;
                        readonly src: "452:20:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 23362;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "452:6:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23365;
                        readonly mutability: "mutable";
                        readonly name: "decimals";
                        readonly nameLocation: "488:8:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23400;
                        readonly src: "482:14:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 23364;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "482:5:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23367;
                        readonly mutability: "mutable";
                        readonly name: "admin";
                        readonly nameLocation: "514:5:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23400;
                        readonly src: "506:13:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 23366;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "506:7:129";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23369;
                        readonly mutability: "mutable";
                        readonly name: "isCompetitionMode_";
                        readonly nameLocation: "534:18:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23400;
                        readonly src: "529:23:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 23368;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "529:4:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23371;
                        readonly mutability: "mutable";
                        readonly name: "maxMintAmount_";
                        readonly nameLocation: "570:14:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23400;
                        readonly src: "562:22:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23370;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "562:7:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "414:176:129";
                };
                readonly returnParameters: {
                    readonly id: 23390;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "703:0:129";
                };
                readonly scope: 23490;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 23417;
                readonly nodeType: "ModifierDefinition";
                readonly src: "804:237:129";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23416;
                    readonly nodeType: "Block";
                    readonly src: "845:196:129";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 23402;
                            readonly name: "isCompetitionMode";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 23357;
                            readonly src: "859:17:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 23414;
                        readonly nodeType: "IfStatement";
                        readonly src: "855:169:129";
                        readonly trueBody: {
                            readonly id: 23413;
                            readonly nodeType: "Block";
                            readonly src: "878:146:129";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 23405;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "930:3:129";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 23406;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "934:6:129";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "930:10:129";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly expression: {
                                                readonly id: 23407;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "942:3:129";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 23408;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "946:3:129";
                                            readonly memberName: "sig";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "942:7:129";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes4";
                                                readonly typeString: "bytes4";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes4";
                                                readonly typeString: "bytes4";
                                            }];
                                            readonly id: 23404;
                                            readonly name: "isAuthorized";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71849;
                                            readonly src: "917:12:129";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                                readonly typeString: "function (address,bytes4) view returns (bool)";
                                            };
                                        };
                                        readonly id: 23409;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "917:33:129";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }, {
                                        readonly hexValue: "45524332304d696e7461626c653a206e6f7420617574686f72697a6564";
                                        readonly id: 23410;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "968:31:129";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_42a18f8e269f112c172999b74d139a2658536f1cd904b7baf70214b5f3a50457";
                                            readonly typeString: "literal_string \"ERC20Mintable: not authorized\"";
                                        };
                                        readonly value: "ERC20Mintable: not authorized";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        }, {
                                            readonly typeIdentifier: "t_stringliteral_42a18f8e269f112c172999b74d139a2658536f1cd904b7baf70214b5f3a50457";
                                            readonly typeString: "literal_string \"ERC20Mintable: not authorized\"";
                                        }];
                                        readonly id: 23403;
                                        readonly name: "require";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [-18, -18];
                                        readonly referencedDeclaration: -18;
                                        readonly src: "892:7:129";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                            readonly typeString: "function (bool,string memory) pure";
                                        };
                                    };
                                    readonly id: 23411;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "892:121:129";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 23412;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "892:121:129";
                            }];
                        };
                    }, {
                        readonly id: 23415;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "1033:1:129";
                    }];
                };
                readonly name: "requiresAuthDuringCompetition";
                readonly nameLocation: "813:29:129";
                readonly parameters: {
                    readonly id: 23401;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "842:2:129";
                };
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 23438;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1047:189:129";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23437;
                    readonly nodeType: "Block";
                    readonly src: "1116:120:129";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 23427;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 23425;
                                    readonly name: "amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 23419;
                                    readonly src: "1134:6:129";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 23426;
                                    readonly name: "maxMintAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 23359;
                                    readonly src: "1144:13:129";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "1134:23:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e74";
                                readonly id: 23428;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1159:34:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_7af70cfceba3f2cf2c1ebf8c90b83f2e2d3de077eae7a7c31c23b738649013cc";
                                    readonly typeString: "literal_string \"MockERC4626: Invalid mint amount\"";
                                };
                                readonly value: "MockERC4626: Invalid mint amount";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_7af70cfceba3f2cf2c1ebf8c90b83f2e2d3de077eae7a7c31c23b738649013cc";
                                    readonly typeString: "literal_string \"MockERC4626: Invalid mint amount\"";
                                }];
                                readonly id: 23424;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1126:7:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 23429;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1126:68:129";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 23430;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1126:68:129";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 23432;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "1210:3:129";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 23433;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1214:6:129";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1210:10:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 23434;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23419;
                                readonly src: "1222:6:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 23431;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72581;
                                readonly src: "1204:5:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 23435;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1204:25:129";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 23436;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1204:25:129";
                    }];
                };
                readonly functionSelector: "a0712d68";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 23422;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 23421;
                        readonly name: "requiresAuthDuringCompetition";
                        readonly nameLocations: readonly ["1086:29:129"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 23417;
                        readonly src: "1086:29:129";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1086:29:129";
                }];
                readonly name: "mint";
                readonly nameLocation: "1056:4:129";
                readonly parameters: {
                    readonly id: 23420;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23419;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1069:6:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23438;
                        readonly src: "1061:14:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23418;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1061:7:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1060:16:129";
                };
                readonly returnParameters: {
                    readonly id: 23423;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1116:0:129";
                };
                readonly scope: 23490;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 23460;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1242:233:129";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23459;
                    readonly nodeType: "Block";
                    readonly src: "1354:121:129";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 23450;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 23448;
                                    readonly name: "amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 23442;
                                    readonly src: "1372:6:129";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 23449;
                                    readonly name: "maxMintAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 23359;
                                    readonly src: "1382:13:129";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "1372:23:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4d6f636b455243343632363a20496e76616c6964206d696e7420616d6f756e74";
                                readonly id: 23451;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1397:34:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_7af70cfceba3f2cf2c1ebf8c90b83f2e2d3de077eae7a7c31c23b738649013cc";
                                    readonly typeString: "literal_string \"MockERC4626: Invalid mint amount\"";
                                };
                                readonly value: "MockERC4626: Invalid mint amount";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_7af70cfceba3f2cf2c1ebf8c90b83f2e2d3de077eae7a7c31c23b738649013cc";
                                    readonly typeString: "literal_string \"MockERC4626: Invalid mint amount\"";
                                }];
                                readonly id: 23447;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1364:7:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 23452;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1364:68:129";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 23453;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1364:68:129";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 23455;
                                readonly name: "destination";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23440;
                                readonly src: "1448:11:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 23456;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23442;
                                readonly src: "1461:6:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 23454;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72581;
                                readonly src: "1442:5:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 23457;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1442:26:129";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 23458;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1442:26:129";
                    }];
                };
                readonly functionSelector: "40c10f19";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 23445;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 23444;
                        readonly name: "requiresAuthDuringCompetition";
                        readonly nameLocations: readonly ["1324:29:129"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 23417;
                        readonly src: "1324:29:129";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1324:29:129";
                }];
                readonly name: "mint";
                readonly nameLocation: "1251:4:129";
                readonly parameters: {
                    readonly id: 23443;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23440;
                        readonly mutability: "mutable";
                        readonly name: "destination";
                        readonly nameLocation: "1273:11:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23460;
                        readonly src: "1265:19:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 23439;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1265:7:129";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23442;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1302:6:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23460;
                        readonly src: "1294:14:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23441;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1294:7:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1255:59:129";
                };
                readonly returnParameters: {
                    readonly id: 23446;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1354:0:129";
                };
                readonly scope: 23490;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 23474;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1481:111:129";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23473;
                    readonly nodeType: "Block";
                    readonly src: "1550:42:129";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 23468;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "1566:3:129";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 23469;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1570:6:129";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1566:10:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 23470;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23462;
                                readonly src: "1578:6:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 23467;
                                readonly name: "_burn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72609;
                                readonly src: "1560:5:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 23471;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1560:25:129";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 23472;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1560:25:129";
                    }];
                };
                readonly functionSelector: "42966c68";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 23465;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 23464;
                        readonly name: "requiresAuthDuringCompetition";
                        readonly nameLocations: readonly ["1520:29:129"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 23417;
                        readonly src: "1520:29:129";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1520:29:129";
                }];
                readonly name: "burn";
                readonly nameLocation: "1490:4:129";
                readonly parameters: {
                    readonly id: 23463;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23462;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1503:6:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23474;
                        readonly src: "1495:14:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23461;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1495:7:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1494:16:129";
                };
                readonly returnParameters: {
                    readonly id: 23466;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1550:0:129";
                };
                readonly scope: 23490;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 23489;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1598:155:129";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23488;
                    readonly nodeType: "Block";
                    readonly src: "1710:43:129";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 23484;
                                readonly name: "destination";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23476;
                                readonly src: "1726:11:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 23485;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23478;
                                readonly src: "1739:6:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 23483;
                                readonly name: "_burn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72609;
                                readonly src: "1720:5:129";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 23486;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1720:26:129";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 23487;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1720:26:129";
                    }];
                };
                readonly functionSelector: "9dc29fac";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 23481;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 23480;
                        readonly name: "requiresAuthDuringCompetition";
                        readonly nameLocations: readonly ["1680:29:129"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 23417;
                        readonly src: "1680:29:129";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1680:29:129";
                }];
                readonly name: "burn";
                readonly nameLocation: "1607:4:129";
                readonly parameters: {
                    readonly id: 23479;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23476;
                        readonly mutability: "mutable";
                        readonly name: "destination";
                        readonly nameLocation: "1629:11:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23489;
                        readonly src: "1621:19:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 23475;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1621:7:129";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23478;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1658:6:129";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23489;
                        readonly src: "1650:14:129";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23477;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1650:7:129";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1611:59:129";
                };
                readonly returnParameters: {
                    readonly id: 23482;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1710:0:129";
                };
                readonly scope: 23490;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 23352;
                    readonly name: "ERC20";
                    readonly nameLocations: readonly ["280:5:129"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 72610;
                    readonly src: "280:5:129";
                };
                readonly id: 23353;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "280:5:129";
            }, {
                readonly baseName: {
                    readonly id: 23354;
                    readonly name: "MultiRolesAuthority";
                    readonly nameLocations: readonly ["287:19:129"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 72222;
                    readonly src: "287:19:129";
                };
                readonly id: 23355;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "287:19:129";
            }];
            readonly canonicalName: "ERC20Mintable";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [23490, 72222, 71917, 71904, 72610];
            readonly name: "ERC20Mintable";
            readonly nameLocation: "263:13:129";
            readonly scope: 23491;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [71754, 71761, 71935, 71941, 71949, 71956, 72233, 72241];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 129;
};
//# sourceMappingURL=ERC20Mintable.d.ts.map