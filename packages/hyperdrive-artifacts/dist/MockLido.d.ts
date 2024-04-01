export declare const MockLido: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_initialRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_admin";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "_isCompetitionMode";
            readonly type: "bool";
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
        readonly inputs: readonly [];
        readonly name: "getBufferedEther";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_sharesAmount";
            readonly type: "uint256";
        }];
        readonly name: "getPooledEthByShares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
            readonly internalType: "uint256";
            readonly name: "_ethAmount";
            readonly type: "uint256";
        }];
        readonly name: "getSharesByPooledEth";
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
        readonly inputs: readonly [];
        readonly name: "getTotalPooledEther";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalShares";
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
            readonly internalType: "uint256";
            readonly name: "_rate_";
            readonly type: "uint256";
        }];
        readonly name: "setRate";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }];
        readonly name: "sharesOf";
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
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "submit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_sharesAmount";
            readonly type: "uint256";
        }];
        readonly name: "transferShares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_sharesAmount";
            readonly type: "uint256";
        }];
        readonly name: "transferSharesFrom";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x6101006040523480156200001257600080fd5b50604051620022ff380380620022ff83398101604081905262000035916200021c565b6040518060400160405280601781526020017f4c6971756964207374616b656420457468657220322e30000000000000000000815250604051806040016040528060058152602001640e6e88aa8960db1b81525060128484813081818888888260009081620000a5919062000319565b506001620000b4838262000319565b5060ff81166080524660a052620000ca62000180565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052505050600c93909355505042600d555062000463565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001b49190620003e5565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000806000606084860312156200023257600080fd5b835160208501519093506001600160a01b03811681146200025257600080fd5b604085015190925080151581146200026957600080fd5b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200029f57607f821691505b602082108103620002c057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200031457600081815260208120601f850160051c81016020861015620002ef5750805b601f850160051c820191505b818110156200031057828155600101620002fb565b5050505b505050565b81516001600160401b0381111562000335576200033562000274565b6200034d816200034684546200028a565b84620002c6565b602080601f8311600181146200038557600084156200036c5750858301515b600019600386901b1c1916600185901b17855562000310565b600085815260208120601f198616915b82811015620003b65788860151825594840194600190910190840162000395565b5085821015620003d55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620003f5816200028a565b60018281168015620004105760018114620004265762000457565b60ff198416875282151583028701945062000457565b8760005260208060002060005b858110156200044e5781548a82015290840190820162000433565b50505082870194505b50929695505050505050565b60805160a05160c05160e051611e3f620004c06000396000818161057301528181610b7701528181610c4e01528181610cb40152818161106b01526110cd01526000610c1301526000610bde015260006103ad0152611e3f6000f3fe60806040526004361061025c5760003560e01c80637a28fb8811610144578063b7009613116100b6578063dd62ed3e1161007a578063dd62ed3e1461076d578063e688747b146107a5578063ea7ca276146107e8578063ed0d0efb1461082c578063f2fde38b14610859578063f5eb42dc1461087957600080fd5b8063b7009613146106c2578063bf7e214f146106e2578063c53a398514610702578063d5002f2e14610738578063d505accf1461074d57600080fd5b80638fcb4e5b116101085780638fcb4e5b1461061a57806395d89b411461063a5780639dc29fac1461064f578063a0712d681461066f578063a1903eab1461068f578063a9059cbb146106a257600080fd5b80637a28fb88146105415780637a8c63b5146105615780637a9e5e4b146105955780637ecebe00146105b55780638da5cb5b146105e257600080fd5b80633644e515116101dd5780634b5159da116101a15780634b5159da1461047f578063679aefce1461049f57806367aff484146104b45780636d780459146104d457806370a08231146104f4578063728b952b1461052157600080fd5b80633644e5151461040157806337cfdaca1461041657806340c10f191461042b57806342966c681461044b57806347b714e01461046b57600080fd5b806318160ddd1161022457806318160ddd14610345578063192084511461035b57806323b872dd1461037b578063313ce5671461039b57806334fcf437146103e157600080fd5b806306a36aee1461026157806306fdde03146102a1578063095ea7b3146102c35780630bade8a4146102f35780630ea9b75b14610323575b600080fd5b34801561026d57600080fd5b5061028e61027c3660046118f7565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102ad57600080fd5b506102b6610899565b6040516102989190611914565b3480156102cf57600080fd5b506102e36102de366004611962565b610927565b6040519015158152602001610298565b3480156102ff57600080fd5b506102e361030e3660046119ab565b600a6020526000908152604090205460ff1681565b34801561032f57600080fd5b5061034361033e3660046119e5565b610994565b005b34801561035157600080fd5b5061028e60025481565b34801561036757600080fd5b5061028e610376366004611a2c565b610a75565b34801561038757600080fd5b506102e3610396366004611a45565b610a93565b3480156103a757600080fd5b506103cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610298565b3480156103ed57600080fd5b506103436103fc366004611a2c565b610b75565b34801561040d57600080fd5b5061028e610bda565b34801561042257600080fd5b5061028e610c35565b34801561043757600080fd5b50610343610446366004611962565b610c4c565b34801561045757600080fd5b50610343610466366004611a2c565b610cb2565b34801561047757600080fd5b50600061028e565b34801561048b57600080fd5b5061034361049a366004611a86565b610d17565b3480156104ab57600080fd5b50600c5461028e565b3480156104c057600080fd5b506103436104cf366004611abd565b610da9565b3480156104e057600080fd5b5061028e6104ef366004611a45565b610e71565b34801561050057600080fd5b5061028e61050f3660046118f7565b60036020526000908152604090205481565b34801561052d57600080fd5b5061034361053c366004611aeb565b610ea9565b34801561054d57600080fd5b5061028e61055c366004611a2c565b610f32565b34801561056d57600080fd5b506102e37f000000000000000000000000000000000000000000000000000000000000000081565b3480156105a157600080fd5b506103436105b03660046118f7565b610f47565b3480156105c157600080fd5b5061028e6105d03660046118f7565b60056020526000908152604090205481565b3480156105ee57600080fd5b50600654610602906001600160a01b031681565b6040516001600160a01b039091168152602001610298565b34801561062657600080fd5b5061028e610635366004611962565b611031565b34801561064657600080fd5b506102b661105c565b34801561065b57600080fd5b5061034361066a366004611962565b611069565b34801561067b57600080fd5b5061034361068a366004611a2c565b6110cb565b61028e61069d3660046118f7565b61112d565b3480156106ae57600080fd5b506102e36106bd366004611962565b6111b9565b3480156106ce57600080fd5b506102e36106dd366004611b19565b61121f565b3480156106ee57600080fd5b50600754610602906001600160a01b031681565b34801561070e57600080fd5b5061060261071d3660046118f7565b6008602052600090815260409020546001600160a01b031681565b34801561074457600080fd5b50600f5461028e565b34801561075957600080fd5b50610343610768366004611b60565b61131d565b34801561077957600080fd5b5061028e610788366004611aeb565b600460209081526000928352604080842090915290825290205481565b3480156107b157600080fd5b506102e36107c0366004611bce565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b3480156107f457600080fd5b506102e3610803366004611c01565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b34801561083857600080fd5b5061028e6108473660046119ab565b600b6020526000908152604090205481565b34801561086557600080fd5b506103436108743660046118f7565b611561565b34801561088557600080fd5b5061028e6108943660046118f7565b6115df565b600080546108a690611c2d565b80601f01602080910402602001604051908101604052809291908181526020018280546108d290611c2d565b801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109829086815260200190565b60405180910390a35060015b92915050565b6109aa336000356001600160e01b031916611614565b6109cf5760405162461bcd60e51b81526004016109c690611c67565b60405180910390fd5b80156109ff576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a26565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610a68911515815260200190565b60405180910390a3505050565b600061098e610a83600f5490565b610a8b610c35565b8491906116be565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610aef57610aca8382611ca3565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b17908490611ca3565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611dea83398151915290610b609087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610bcd57610bb1336000356001600160e01b031916611614565b610bcd5760405162461bcd60e51b81526004016109c690611cb6565b610bd56116dc565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c1057610c0b61170d565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610c3f6117a7565b600e54610c0b9190611ced565b7f000000000000000000000000000000000000000000000000000000000000000015610ca457610c88336000356001600160e01b031916611614565b610ca45760405162461bcd60e51b81526004016109c690611cb6565b610cae82826117fc565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610d0a57610cee336000356001600160e01b031916611614565b610d0a5760405162461bcd60e51b81526004016109c690611cb6565b610d143382611856565b50565b610d2d336000356001600160e01b031916611614565b610d495760405162461bcd60e51b81526004016109c690611c67565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610dbf336000356001600160e01b031916611614565b610ddb5760405162461bcd60e51b81526004016109c690611c67565b8015610e0a576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610e30565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610a68911515815260200190565b6000610e7b6116dc565b6000610e93610e88610c35565b600f548591906116be565b9050610ea0858583610a93565b50949350505050565b610ebf336000356001600160e01b031916611614565b610edb5760405162461bcd60e51b81526004016109c690611c67565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b600061098e610f3f610c35565b600f54610a8b565b6006546001600160a01b0316331480610fdc575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610f9b90339030906001600160e01b03196000351690600401611d00565b602060405180830381865afa158015610fb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdc9190611d2d565b610fe557600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600061103b6116dc565b6000611048610e88610c35565b905061105484826111b9565b509392505050565b600180546108a690611c2d565b7f0000000000000000000000000000000000000000000000000000000000000000156110c1576110a5336000356001600160e01b031916611614565b6110c15760405162461bcd60e51b81526004016109c690611cb6565b610cae8282611856565b7f00000000000000000000000000000000000000000000000000000000000000001561112357611107336000356001600160e01b031916611614565b6111235760405162461bcd60e51b81526004016109c690611cb6565b610d1433826117fc565b60006111376116dc565b600f5460000361115e5734600f819055600e8190556111579033906117fc565b5034919050565b600061117c61116c600f5490565b611174610c35565b3491906116be565b905034600e60008282546111909190611ced565b9250508190555080600f60008282546111a99190611ced565b9091555061098e905033346117fc565b336000908152600360205260408120805483919083906111da908490611ca3565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611dea833981519152906109829086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156112bb5760405163b700961360e01b81526001600160a01b0382169063b70096139061127290889088908890600401611d00565b602060405180830381865afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b39190611d2d565b915050610b6e565b6001600160e01b031983166000908152600a602052604090205460ff168061131457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561136d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016109c6565b60006001611379610bda565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611485573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906114bb5750876001600160a01b0316816001600160a01b0316145b6114f85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016109c6565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611577336000356001600160e01b031916611614565b6115935760405162461bcd60e51b81526004016109c690611c67565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610b6e611604600f5490565b61160c610c35565b8391906116be565b6007546000906001600160a01b0316801580159061169e575060405163b700961360e01b81526001600160a01b0382169063b70096139061165d90879030908890600401611d00565b602060405180830381865afa15801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e9190611d2d565b806116b657506006546001600160a01b038581169116145b949350505050565b60008260001904841183021582026116d557600080fd5b5091020490565b60006116e66117a7565b905080156117065780600e60008282546117009190611ced565b90915550505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161173f9190611d4a565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600c546000036117b95750600090565b60006117d76301e13380600d54426117d19190611ca3565b906118b8565b90506000610b6e6117f383600c546118cd90919063ffffffff16565b600e54906118cd565b806002600082825461180e9190611ced565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611dea83398151915291015b60405180910390a35050565b6001600160a01b0382166000908152600360205260408120805483929061187e908490611ca3565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611dea8339815191529060200161184a565b6000610b6e83670de0b6b3a7640000846116be565b6000610b6e8383670de0b6b3a76400006116be565b6001600160a01b0381168114610d1457600080fd5b60006020828403121561190957600080fd5b8135610b6e816118e2565b600060208083528351808285015260005b8181101561194157858101830151858201604001528201611925565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561197557600080fd5b8235611980816118e2565b946020939093013593505050565b80356001600160e01b0319811681146119a657600080fd5b919050565b6000602082840312156119bd57600080fd5b610b6e8261198e565b803560ff811681146119a657600080fd5b8015158114610d1457600080fd5b6000806000606084860312156119fa57600080fd5b611a03846119c6565b9250611a116020850161198e565b91506040840135611a21816119d7565b809150509250925092565b600060208284031215611a3e57600080fd5b5035919050565b600080600060608486031215611a5a57600080fd5b8335611a65816118e2565b92506020840135611a75816118e2565b929592945050506040919091013590565b60008060408385031215611a9957600080fd5b611aa28361198e565b91506020830135611ab2816119d7565b809150509250929050565b600080600060608486031215611ad257600080fd5b8335611add816118e2565b9250611a11602085016119c6565b60008060408385031215611afe57600080fd5b8235611b09816118e2565b91506020830135611ab2816118e2565b600080600060608486031215611b2e57600080fd5b8335611b39816118e2565b92506020840135611b49816118e2565b9150611b576040850161198e565b90509250925092565b600080600080600080600060e0888a031215611b7b57600080fd5b8735611b86816118e2565b96506020880135611b96816118e2565b95506040880135945060608801359350611bb2608089016119c6565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611be157600080fd5b611bea836119c6565b9150611bf86020840161198e565b90509250929050565b60008060408385031215611c1457600080fd5b8235611c1f816118e2565b9150611bf8602084016119c6565b600181811c90821680611c4157607f821691505b602082108103611c6157634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561098e5761098e611c8d565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b8082018082111561098e5761098e611c8d565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611d3f57600080fd5b8151610b6e816119d7565b600080835481600182811c915080831680611d6657607f831692505b60208084108203611d8557634e487b7160e01b86526022600452602486fd5b818015611d995760018114611dae57611ddb565b60ff1986168952841515850289019650611ddb565b60008a81526020902060005b86811015611dd35781548b820152908501908301611dba565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220d774951429e18163666ac092e8f910497b01f938e80c1eaad62df8622cfe136264736f6c63430008140033";
        readonly sourceMap: "909:4215:139:-:0;;;1170:346;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;359:323:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;359:323:129;;;1370:2:139;1386:6;1406:18;581:5:129;614:4;1149:6:171;1157:10;529:4:129;535:6;543:8;2101:5:172;2094:4;:12;;;;;;:::i;:::-;-1:-1:-1;2116:6:172;:16;2125:7;2116:6;:16;:::i;:::-;-1:-1:-1;2142:20:172;;;;;2192:13;2173:32;;2242:24;:22;:24::i;:::-;2215:51;;-1:-1:-1;;682:5:170;:14;;-1:-1:-1;;;;;682:14:170;;;-1:-1:-1;;;;;;682:14:170;;;;;;;;706:9;:22;;;;;;;;;;;;744:40;;682:14;;-1:-1:-1;765:10:170;;744:40;;682:5;;744:40;799;;-1:-1:-1;;;;;799:40:170;;;816:10;;799:40;;;;;-1:-1:-1;;;;637:38:129::2;;;::::0;-1:-1:-1;;;1449:5:139::1;:20:::0;;;;-1:-1:-1;;1494:15:139::1;1479:12;:30:::0;-1:-1:-1;909:4215:139;;5510:446:172;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;4361:25:234;;;;4402:18;;4395:34;;;;5833:14:172;4445:18:234;;;4438:34;5869:13:172;4488:18:234;;;4481:34;5912:4:172;4531:19:234;;;4524:61;4333:19;;5640:295:172;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;14:513:234:-;99:6;107;115;168:2;156:9;147:7;143:23;139:32;136:52;;;184:1;181;174:12;136:52;207:16;;266:2;251:18;;245:25;207:16;;-1:-1:-1;;;;;;299:31:234;;289:42;;279:70;;345:1;342;335:12;279:70;418:2;403:18;;397:25;368:5;;-1:-1:-1;460:15:234;;453:23;441:36;;431:64;;491:1;488;481:12;431:64;514:7;504:17;;;14:513;;;;;:::o;532:127::-;593:10;588:3;584:20;581:1;574:31;624:4;621:1;614:15;648:4;645:1;638:15;664:380;743:1;739:12;;;;786;;;807:61;;861:4;853:6;849:17;839:27;;807:61;914:2;906:6;903:14;883:18;880:38;877:161;;960:10;955:3;951:20;948:1;941:31;995:4;992:1;985:15;1023:4;1020:1;1013:15;877:161;;664:380;;;:::o;1175:545::-;1277:2;1272:3;1269:11;1266:448;;;1313:1;1338:5;1334:2;1327:17;1383:4;1379:2;1369:19;1453:2;1441:10;1437:19;1434:1;1430:27;1424:4;1420:38;1489:4;1477:10;1474:20;1471:47;;;-1:-1:-1;1512:4:234;1471:47;1567:2;1562:3;1558:12;1555:1;1551:20;1545:4;1541:31;1531:41;;1622:82;1640:2;1633:5;1630:13;1622:82;;;1685:17;;;1666:1;1655:13;1622:82;;;1626:3;;;1266:448;1175:545;;;:::o;1896:1352::-;2016:10;;-1:-1:-1;;;;;2038:30:234;;2035:56;;;2071:18;;:::i;:::-;2100:97;2190:6;2150:38;2182:4;2176:11;2150:38;:::i;:::-;2144:4;2100:97;:::i;:::-;2252:4;;2316:2;2305:14;;2333:1;2328:663;;;;3035:1;3052:6;3049:89;;;-1:-1:-1;3104:19:234;;;3098:26;3049:89;-1:-1:-1;;1853:1:234;1849:11;;;1845:24;1841:29;1831:40;1877:1;1873:11;;;1828:57;3151:81;;2298:944;;2328:663;1122:1;1115:14;;;1159:4;1146:18;;-1:-1:-1;;2364:20:234;;;2482:236;2496:7;2493:1;2490:14;2482:236;;;2585:19;;;2579:26;2564:42;;2677:27;;;;2645:1;2633:14;;;;2512:19;;2482:236;;;2486:3;2746:6;2737:7;2734:19;2731:201;;;2807:19;;;2801:26;-1:-1:-1;;2890:1:234;2886:14;;;2902:3;2882:24;2878:37;2874:42;2859:58;2844:74;;2731:201;-1:-1:-1;;;;;2978:1:234;2962:14;;;2958:22;2945:36;;-1:-1:-1;1896:1352:234:o;3253:844::-;3383:3;3412:1;3445:6;3439:13;3475:36;3501:9;3475:36;:::i;:::-;3530:1;3547:18;;;3574:133;;;;3721:1;3716:356;;;;3540:532;;3574:133;-1:-1:-1;;3607:24:234;;3595:37;;3680:14;;3673:22;3661:35;;3652:45;;;-1:-1:-1;3574:133:234;;3716:356;3747:6;3744:1;3737:17;3777:4;3822:2;3819:1;3809:16;3847:1;3861:165;3875:6;3872:1;3869:13;3861:165;;;3953:14;;3940:11;;;3933:35;3996:16;;;;3890:10;;3861:165;;;3865:3;;;4055:6;4050:3;4046:16;4039:23;;3540:532;-1:-1:-1;4088:3:234;;3253:844;-1:-1:-1;;;;;;3253:844:234:o;4102:489::-;909:4215:139;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x60806040526004361061025c5760003560e01c80637a28fb8811610144578063b7009613116100b6578063dd62ed3e1161007a578063dd62ed3e1461076d578063e688747b146107a5578063ea7ca276146107e8578063ed0d0efb1461082c578063f2fde38b14610859578063f5eb42dc1461087957600080fd5b8063b7009613146106c2578063bf7e214f146106e2578063c53a398514610702578063d5002f2e14610738578063d505accf1461074d57600080fd5b80638fcb4e5b116101085780638fcb4e5b1461061a57806395d89b411461063a5780639dc29fac1461064f578063a0712d681461066f578063a1903eab1461068f578063a9059cbb146106a257600080fd5b80637a28fb88146105415780637a8c63b5146105615780637a9e5e4b146105955780637ecebe00146105b55780638da5cb5b146105e257600080fd5b80633644e515116101dd5780634b5159da116101a15780634b5159da1461047f578063679aefce1461049f57806367aff484146104b45780636d780459146104d457806370a08231146104f4578063728b952b1461052157600080fd5b80633644e5151461040157806337cfdaca1461041657806340c10f191461042b57806342966c681461044b57806347b714e01461046b57600080fd5b806318160ddd1161022457806318160ddd14610345578063192084511461035b57806323b872dd1461037b578063313ce5671461039b57806334fcf437146103e157600080fd5b806306a36aee1461026157806306fdde03146102a1578063095ea7b3146102c35780630bade8a4146102f35780630ea9b75b14610323575b600080fd5b34801561026d57600080fd5b5061028e61027c3660046118f7565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156102ad57600080fd5b506102b6610899565b6040516102989190611914565b3480156102cf57600080fd5b506102e36102de366004611962565b610927565b6040519015158152602001610298565b3480156102ff57600080fd5b506102e361030e3660046119ab565b600a6020526000908152604090205460ff1681565b34801561032f57600080fd5b5061034361033e3660046119e5565b610994565b005b34801561035157600080fd5b5061028e60025481565b34801561036757600080fd5b5061028e610376366004611a2c565b610a75565b34801561038757600080fd5b506102e3610396366004611a45565b610a93565b3480156103a757600080fd5b506103cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610298565b3480156103ed57600080fd5b506103436103fc366004611a2c565b610b75565b34801561040d57600080fd5b5061028e610bda565b34801561042257600080fd5b5061028e610c35565b34801561043757600080fd5b50610343610446366004611962565b610c4c565b34801561045757600080fd5b50610343610466366004611a2c565b610cb2565b34801561047757600080fd5b50600061028e565b34801561048b57600080fd5b5061034361049a366004611a86565b610d17565b3480156104ab57600080fd5b50600c5461028e565b3480156104c057600080fd5b506103436104cf366004611abd565b610da9565b3480156104e057600080fd5b5061028e6104ef366004611a45565b610e71565b34801561050057600080fd5b5061028e61050f3660046118f7565b60036020526000908152604090205481565b34801561052d57600080fd5b5061034361053c366004611aeb565b610ea9565b34801561054d57600080fd5b5061028e61055c366004611a2c565b610f32565b34801561056d57600080fd5b506102e37f000000000000000000000000000000000000000000000000000000000000000081565b3480156105a157600080fd5b506103436105b03660046118f7565b610f47565b3480156105c157600080fd5b5061028e6105d03660046118f7565b60056020526000908152604090205481565b3480156105ee57600080fd5b50600654610602906001600160a01b031681565b6040516001600160a01b039091168152602001610298565b34801561062657600080fd5b5061028e610635366004611962565b611031565b34801561064657600080fd5b506102b661105c565b34801561065b57600080fd5b5061034361066a366004611962565b611069565b34801561067b57600080fd5b5061034361068a366004611a2c565b6110cb565b61028e61069d3660046118f7565b61112d565b3480156106ae57600080fd5b506102e36106bd366004611962565b6111b9565b3480156106ce57600080fd5b506102e36106dd366004611b19565b61121f565b3480156106ee57600080fd5b50600754610602906001600160a01b031681565b34801561070e57600080fd5b5061060261071d3660046118f7565b6008602052600090815260409020546001600160a01b031681565b34801561074457600080fd5b50600f5461028e565b34801561075957600080fd5b50610343610768366004611b60565b61131d565b34801561077957600080fd5b5061028e610788366004611aeb565b600460209081526000928352604080842090915290825290205481565b3480156107b157600080fd5b506102e36107c0366004611bce565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b3480156107f457600080fd5b506102e3610803366004611c01565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b34801561083857600080fd5b5061028e6108473660046119ab565b600b6020526000908152604090205481565b34801561086557600080fd5b506103436108743660046118f7565b611561565b34801561088557600080fd5b5061028e6108943660046118f7565b6115df565b600080546108a690611c2d565b80601f01602080910402602001604051908101604052809291908181526020018280546108d290611c2d565b801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906109829086815260200190565b60405180910390a35060015b92915050565b6109aa336000356001600160e01b031916611614565b6109cf5760405162461bcd60e51b81526004016109c690611c67565b60405180910390fd5b80156109ff576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610a26565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610a68911515815260200190565b60405180910390a3505050565b600061098e610a83600f5490565b610a8b610c35565b8491906116be565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610aef57610aca8382611ca3565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610b17908490611ca3565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611dea83398151915290610b609087815260200190565b60405180910390a360019150505b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000015610bcd57610bb1336000356001600160e01b031916611614565b610bcd5760405162461bcd60e51b81526004016109c690611cb6565b610bd56116dc565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610c1057610c0b61170d565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610c3f6117a7565b600e54610c0b9190611ced565b7f000000000000000000000000000000000000000000000000000000000000000015610ca457610c88336000356001600160e01b031916611614565b610ca45760405162461bcd60e51b81526004016109c690611cb6565b610cae82826117fc565b5050565b7f000000000000000000000000000000000000000000000000000000000000000015610d0a57610cee336000356001600160e01b031916611614565b610d0a5760405162461bcd60e51b81526004016109c690611cb6565b610d143382611856565b50565b610d2d336000356001600160e01b031916611614565b610d495760405162461bcd60e51b81526004016109c690611c67565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610dbf336000356001600160e01b031916611614565b610ddb5760405162461bcd60e51b81526004016109c690611c67565b8015610e0a576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610e30565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610a68911515815260200190565b6000610e7b6116dc565b6000610e93610e88610c35565b600f548591906116be565b9050610ea0858583610a93565b50949350505050565b610ebf336000356001600160e01b031916611614565b610edb5760405162461bcd60e51b81526004016109c690611c67565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b600061098e610f3f610c35565b600f54610a8b565b6006546001600160a01b0316331480610fdc575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610f9b90339030906001600160e01b03196000351690600401611d00565b602060405180830381865afa158015610fb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdc9190611d2d565b610fe557600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600061103b6116dc565b6000611048610e88610c35565b905061105484826111b9565b509392505050565b600180546108a690611c2d565b7f0000000000000000000000000000000000000000000000000000000000000000156110c1576110a5336000356001600160e01b031916611614565b6110c15760405162461bcd60e51b81526004016109c690611cb6565b610cae8282611856565b7f00000000000000000000000000000000000000000000000000000000000000001561112357611107336000356001600160e01b031916611614565b6111235760405162461bcd60e51b81526004016109c690611cb6565b610d1433826117fc565b60006111376116dc565b600f5460000361115e5734600f819055600e8190556111579033906117fc565b5034919050565b600061117c61116c600f5490565b611174610c35565b3491906116be565b905034600e60008282546111909190611ced565b9250508190555080600f60008282546111a99190611ced565b9091555061098e905033346117fc565b336000908152600360205260408120805483919083906111da908490611ca3565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611dea833981519152906109829086815260200190565b6001600160a01b0380831660009081526008602052604081205490911680156112bb5760405163b700961360e01b81526001600160a01b0382169063b70096139061127290889088908890600401611d00565b602060405180830381865afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b39190611d2d565b915050610b6e565b6001600160e01b031983166000908152600a602052604090205460ff168061131457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b4284101561136d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016109c6565b60006001611379610bda565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611485573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906114bb5750876001600160a01b0316816001600160a01b0316145b6114f85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016109c6565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611577336000356001600160e01b031916611614565b6115935760405162461bcd60e51b81526004016109c690611c67565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6001600160a01b038116600090815260036020526040812054610b6e611604600f5490565b61160c610c35565b8391906116be565b6007546000906001600160a01b0316801580159061169e575060405163b700961360e01b81526001600160a01b0382169063b70096139061165d90879030908890600401611d00565b602060405180830381865afa15801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e9190611d2d565b806116b657506006546001600160a01b038581169116145b949350505050565b60008260001904841183021582026116d557600080fd5b5091020490565b60006116e66117a7565b905080156117065780600e60008282546117009190611ced565b90915550505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161173f9190611d4a565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000600c546000036117b95750600090565b60006117d76301e13380600d54426117d19190611ca3565b906118b8565b90506000610b6e6117f383600c546118cd90919063ffffffff16565b600e54906118cd565b806002600082825461180e9190611ced565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611dea83398151915291015b60405180910390a35050565b6001600160a01b0382166000908152600360205260408120805483929061187e908490611ca3565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611dea8339815191529060200161184a565b6000610b6e83670de0b6b3a7640000846116be565b6000610b6e8383670de0b6b3a76400006116be565b6001600160a01b0381168114610d1457600080fd5b60006020828403121561190957600080fd5b8135610b6e816118e2565b600060208083528351808285015260005b8181101561194157858101830151858201604001528201611925565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561197557600080fd5b8235611980816118e2565b946020939093013593505050565b80356001600160e01b0319811681146119a657600080fd5b919050565b6000602082840312156119bd57600080fd5b610b6e8261198e565b803560ff811681146119a657600080fd5b8015158114610d1457600080fd5b6000806000606084860312156119fa57600080fd5b611a03846119c6565b9250611a116020850161198e565b91506040840135611a21816119d7565b809150509250925092565b600060208284031215611a3e57600080fd5b5035919050565b600080600060608486031215611a5a57600080fd5b8335611a65816118e2565b92506020840135611a75816118e2565b929592945050506040919091013590565b60008060408385031215611a9957600080fd5b611aa28361198e565b91506020830135611ab2816119d7565b809150509250929050565b600080600060608486031215611ad257600080fd5b8335611add816118e2565b9250611a11602085016119c6565b60008060408385031215611afe57600080fd5b8235611b09816118e2565b91506020830135611ab2816118e2565b600080600060608486031215611b2e57600080fd5b8335611b39816118e2565b92506020840135611b49816118e2565b9150611b576040850161198e565b90509250925092565b600080600080600080600060e0888a031215611b7b57600080fd5b8735611b86816118e2565b96506020880135611b96816118e2565b95506040880135945060608801359350611bb2608089016119c6565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611be157600080fd5b611bea836119c6565b9150611bf86020840161198e565b90509250929050565b60008060408385031215611c1457600080fd5b8235611c1f816118e2565b9150611bf8602084016119c6565b600181811c90821680611c4157607f821691505b602082108103611c6157634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561098e5761098e611c8d565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b8082018082111561098e5761098e611c8d565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611d3f57600080fd5b8151610b6e816119d7565b600080835481600182811c915080831680611d6657607f831692505b60208084108203611d8557634e487b7160e01b86526022600452602486fd5b818015611d995760018114611dae57611ddb565b60ff1986168952841515850289019650611ddb565b60008a81526020902060005b86811015611dd35781548b820152908501908301611dba565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220d774951429e18163666ac092e8f910497b01f938e80c1eaad62df8622cfe136264736f6c63430008140033";
        readonly sourceMap: "909:4215:139:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1622:47:171;;;;;;;;;;-1:-1:-1;1622:47:171;;;;;:::i;:::-;;;;;;;;;;;;;;;;;548:25:234;;;536:2;521:18;1622:47:171;;;;;;;;1031:18:172;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;2461:211::-;;;;;;;;;;-1:-1:-1;2461:211:172;;;;;:::i;:::-;;:::i;:::-;;;1622:14:234;;1615:22;1597:41;;1585:2;1570:18;2461:211:172;1457:187:234;1676:49:171;;;;;;;;;;-1:-1:-1;1676:49:171;;;;;:::i;:::-;;;;;;;;;;;;;;;;4390:396;;;;;;;;;;-1:-1:-1;4390:396:171;;;;;:::i;:::-;;:::i;:::-;;1304:26:172;;;;;;;;;;;;;;;;3362:182:139;;;;;;;;;;-1:-1:-1;3362:182:139;;;;;:::i;:::-;;:::i;3057:592:172:-;;;;;;;;;;-1:-1:-1;3057:592:172;;;;;:::i;:::-;;:::i;1083:31::-;;;;;;;;;;;;;;;;;;3688:4:234;3676:17;;;3658:36;;3646:2;3631:18;1083:31:172;3516:184:234;4307:122:139;;;;;;;;;;-1:-1:-1;4307:122:139;;;;;:::i;:::-;;:::i;5327:177:172:-;;;;;;;;;;;;;:::i;3847:125:139:-;;;;;;;;;;;;;:::i;1048:155:129:-;;;;;;;;;;-1:-1:-1;1048:155:129;;;;;:::i;:::-;;:::i;1209:111::-;;;;;;;;;;-1:-1:-1;1209:111:129;;;;;:::i;:::-;;:::i;3756:85:139:-;;;;;;;;;;-1:-1:-1;3807:7:139;3756:85;;3448:210:171;;;;;;;;;;-1:-1:-1;3448:210:171;;;;;:::i;:::-;;:::i;4435:80:139:-;;;;;;;;;;-1:-1:-1;4503:5:139;;4435:80;;3853:337:171;;;;;;;;;;-1:-1:-1;3853:337:171;;;;;:::i;:::-;;:::i;2825:531:139:-;;;;;;;;;;-1:-1:-1;2825:531:139;;;;;:::i;:::-;;:::i;1337:44:172:-;;;;;;;;;;-1:-1:-1;1337:44:172;;;;;:::i;:::-;;;;;;;;;;;;;;3006:241:171;;;;;;;;;;-1:-1:-1;3006:241:171;;;;;:::i;:::-;;:::i;3550:200:139:-;;;;;;;;;;-1:-1:-1;3550:200:139;;;;;:::i;:::-;;:::i;313:39:129:-;;;;;;;;;;;;;;;1523:434:170;;;;;;;;;;-1:-1:-1;1523:434:170;;;;;:::i;:::-;;:::i;1751:41:172:-;;;;;;;;;;-1:-1:-1;1751:41:172;;;;;:::i;:::-;;;;;;;;;;;;;;562:20:170;;;;;;;;;;-1:-1:-1;562:20:170;;;;-1:-1:-1;;;;;562:20:170;;;;;;-1:-1:-1;;;;;5327:32:234;;;5309:51;;5297:2;5282:18;562:20:170;5163:203:234;2330:489:139;;;;;;;;;;-1:-1:-1;2330:489:139;;;;;:::i;:::-;;:::i;1056:20:172:-;;;;;;;;;;;;;:::i;1326:155:129:-;;;;;;;;;;-1:-1:-1;1326:155:129;;;;;:::i;:::-;;:::i;931:111::-;;;;;;;;;;-1:-1:-1;931:111:129;;;;;:::i;:::-;;:::i;1545:779:139:-;;;;;;:::i;:::-;;:::i;2678:373:172:-;;;;;;;;;;-1:-1:-1;2678:373:172;;;;;:::i;:::-;;:::i;2336:465:171:-;;;;;;;;;;-1:-1:-1;2336:465:171;;;;;:::i;:::-;;:::i;589:26:170:-;;;;;;;;;;-1:-1:-1;589:26:170;;;;-1:-1:-1;;;;;589:26:170;;;1369:61:171;;;;;;;;;;-1:-1:-1;1369:61:171;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:171;;;3978:91:139;;;;;;;;;;-1:-1:-1;4051:11:139;;3978:91;;3838:1483:172;;;;;;;;;;-1:-1:-1;3838:1483:172;;;;;:::i;:::-;;:::i;1388:64::-;;;;;;;;;;-1:-1:-1;1388:64:172;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1958:186:171;;;;;;;;;;-1:-1:-1;1958:186:171;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:171;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;;;;;-1:-1:-1;1795:157:171;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:171;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;;;;;-1:-1:-1;1732:56:171;;;;;:::i;:::-;;;;;;;;;;;;;;1963:164:170;;;;;;;;;;-1:-1:-1;1963:164:170;;;;;:::i;:::-;;:::i;4075:208:139:-;;;;;;;;;;-1:-1:-1;4075:208:139;;;;;:::i;:::-;;:::i;1031:18:172:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2461:211::-;2561:10;2535:4;2551:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2551:30:172;;;;;;;;;;:39;;;2606:37;2535:4;;2551:30;;2606:37;;;;2584:6;548:25:234;;536:2;521:18;;402:177;2606:37:172;;;;;;;;-1:-1:-1;2661:4:172;2461:211;;;;;:::o;4390:396:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;;;;;;;;;4535:7:171::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:171;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:171;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:171::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1622:14:234::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;4730:49:171::1;;;;;;;;4390:396:::0;;;:::o;3362:182:139:-;3449:7;3475:62;3497:16;4051:11;;;3978:91;3497:16;3515:21;:19;:21::i;:::-;3475:10;;:62;:21;:62::i;3057:592:172:-;-1:-1:-1;;;;;3209:15:172;;3175:4;3209:15;;;:9;:15;;;;;;;;3225:10;3209:27;;;;;;;;-1:-1:-1;;3287:28:172;;3283:80;;3347:16;3357:6;3347:7;:16;:::i;:::-;-1:-1:-1;;;;;3317:15:172;;;;;;:9;:15;;;;;;;;3333:10;3317:27;;;;;;;:46;3283:80;-1:-1:-1;;;;;3374:15:172;;;;;;:9;:15;;;;;:25;;3393:6;;3374:15;:25;;3393:6;;3374:25;:::i;:::-;;;;-1:-1:-1;;;;;;;3545:13:172;;;;;;;:9;:13;;;;;;;:23;;;;;;3594:26;3545:13;;3594:26;;;-1:-1:-1;;;;;;;;;;;3594:26:172;;;3562:6;548:25:234;;536:2;521:18;;402:177;3594:26:172;;;;;;;;3638:4;3631:11;;;3057:592;;;;;;:::o;4307:122:139:-;743:17:129;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:129;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:129;;;;;;;:::i;:::-;4389:9:139::1;:7;:9::i;:::-;4408:5;:14:::0;4307:122::o;5327:177:172:-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;:::-;5403:94;;5327:177;:::o;5410:87::-;-1:-1:-1;5446:24:172;;5327:177::o;3847:125:139:-;3899:7;3944:21;:19;:21::i;:::-;3925:16;;:40;;;;:::i;1048:155:129:-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:129;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:129;;;;;;;:::i;:::-;1170:26:::1;1176:11;1189:6;1170:5;:26::i;:::-;1048:155:::0;;:::o;1209:111::-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:129;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:129;;;;;;;:::i;:::-;1288:25:::1;1294:10;1306:6;1288:5;:25::i;:::-;1209:111:::0;:::o;3448:210:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:171;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:171::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1597:41:234;;;3606:45:171::1;::::0;1570:18:234;3606:45:171::1;;;;;;;3448:210:::0;;:::o;3853:337::-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;3986:7:171::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:171;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:171;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:171::1;;4175:7;4147:36;;;;1622:14:234::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;2825:531:139;2961:7;3008:9;:7;:9::i;:::-;3098:19;3120:99;3158:21;:19;:21::i;:::-;4051:11;;3120:13;;:99;:24;:99::i;:::-;3098:121;;3274:46;3287:7;3296:10;3308:11;3274:12;:46::i;:::-;-1:-1:-1;3338:11:139;2825:531;-1:-1:-1;;;;2825:531:139:o;3006:241:171:-;902:33:170;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:171;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:171::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;3550:200:139:-;3640:7;3678:65;3703:21;:19;:21::i;:::-;4051:11;;3726:16;3978:91;1523:434:170;1794:5;;-1:-1:-1;;;;;1794:5:170;1780:10;:19;;:76;;-1:-1:-1;1803:9:170;;:53;;-1:-1:-1;;;1803:53:170;;-1:-1:-1;;;;;1803:9:170;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:170;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:170;-1:-1:-1;;;;;1868:24:170;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:170;1523:434;:::o;2330:489:139:-;2437:7;2484:9;:7;:9::i;:::-;2574:19;2596:99;2634:21;:19;:21::i;2596:99::-;2574:121;;2750:33;2759:10;2771:11;2750:8;:33::i;:::-;-1:-1:-1;2801:11:139;2330:489;-1:-1:-1;;;2330:489:139:o;1056:20:172:-;;;;;;;:::i;1326:155:129:-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:129;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:129;;;;;;;:::i;:::-;1448:26:::1;1454:11;1467:6;1448:5;:26::i;931:111::-:0;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:129;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:129;;;;;;;:::i;:::-;1010:25:::1;1016:10;1028:6;1010:5;:25::i;1545:779:139:-:0;1596:7;1643:9;:7;:9::i;:::-;4051:11;;1745:1;1725:21;1721:189;;1776:9;1762:11;:23;;;1799:16;:28;;;1841;;1847:10;;1841:5;:28::i;:::-;-1:-1:-1;1890:9:139;;1545:779;-1:-1:-1;1545:779:139:o;1721:189::-;1991:14;2008:95;2042:16;4051:11;;;3978:91;2042:16;2072:21;:19;:21::i;:::-;2008:9;;:95;:20;:95::i;:::-;1991:112;;2168:9;2148:16;;:29;;;;;;;:::i;:::-;;;;;;;;2202:6;2187:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;2265:28:139;;-1:-1:-1;2271:10:139;2283:9;2265:5;:28::i;2678:373:172:-;2774:10;2748:4;2764:21;;;:9;:21;;;;;:31;;2789:6;;2764:21;2748:4;;2764:31;;2789:6;;2764:31;:::i;:::-;;;;-1:-1:-1;;;;;;;2941:13:172;;;;;;:9;:13;;;;;;;:23;;;;;;2990:32;2999:10;;-1:-1:-1;;;;;;;;;;;2990:32:172;;;2958:6;548:25:234;;536:2;521:18;;402:177;2336:465:171;-1:-1:-1;;;;;2515:32:171;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:171;;-1:-1:-1;;;;;2609:23:171;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:171;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:171;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:171;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;2336:465;-1:-1:-1;;;;;2336:465:171:o;3838:1483:172:-;4057:15;4045:8;:27;;4037:63;;;;-1:-1:-1;;;4037:63:172;;10112:2:234;4037:63:172;;;10094:21:234;10151:2;10131:18;;;10124:30;10190:25;10170:18;;;10163:53;10233:18;;4037:63:172;9910:347:234;4037:63:172;4265:24;4292:805;4428:18;:16;:18::i;:::-;-1:-1:-1;;;;;4873:13:172;;;;;;;:6;:13;;;;;;;;;:15;;;;;;;;4511:449;;4555:165;4511:449;;;10549:25:234;10628:18;;;10621:43;;;;10700:15;;;10680:18;;;10673:43;10732:18;;;10725:34;;;10775:19;;;10768:35;;;;10819:19;;;;10812:35;;;4511:449:172;;;;;;;;;;10521:19:234;;;4511:449:172;;;4472:514;;;;;;;;-1:-1:-1;;;4350:658:172;;;11116:27:234;11159:11;;;11152:27;;;;11195:12;;;11188:28;;;;11232:12;;4350:658:172;;;-1:-1:-1;;4350:658:172;;;;;;;;;4319:707;;4350:658;4319:707;;;;4292:805;;;;;;;;;11482:25:234;11555:4;11543:17;;11523:18;;;11516:45;11577:18;;;11570:34;;;11620:18;;;11613:34;;;11454:19;;4292:805:172;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4292:805:172;;-1:-1:-1;;4292:805:172;;;-1:-1:-1;;;;;;;5120:30:172;;;;;;:59;;;5174:5;-1:-1:-1;;;;;5154:25:172;:16;-1:-1:-1;;;;;5154:25:172;;5120:59;5112:86;;;;-1:-1:-1;;;5112:86:172;;11860:2:234;5112:86:172;;;11842:21:234;11899:2;11879:18;;;11872:30;-1:-1:-1;;;11918:18:234;;;11911:44;11972:18;;5112:86:172;11658:338:234;5112:86:172;-1:-1:-1;;;;;5213:27:172;;;;;;;:9;:27;;;;;;;;:36;;;;;;;;;;;;;:44;;;5283:31;548:25:234;;;5213:36:172;;5283:31;;;;;521:18:234;5283:31:172;;;;;;;3838:1483;;;;;;;:::o;1963:164:170:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:170;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:170;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:170::1;-1:-1:-1::0;;;;;2046:16:170;::::1;::::0;;::::1;::::0;;;2078:42:::1;::::0;2099:10:::1;::::0;2078:42:::1;::::0;-1:-1:-1;;2078:42:170::1;1963:164:::0;:::o;4075:208:139:-;-1:-1:-1;;;;;4176:19:139;;4134:7;4176:19;;;:9;:19;;;;;;4212:64;4236:16;4051:11;;;3978:91;4236:16;4254:21;:19;:21::i;:::-;4212:12;;:64;:23;:64::i;977:540:170:-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:170;1415:27;;;;;:77;;-1:-1:-1;1446:46:170;;-1:-1:-1;;;1446:46:170;;-1:-1:-1;;;;;1446:12:170;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:170;;-1:-1:-1;;;;;1497:13:170;;;1505:5;;1497:13;1414:96;1407:103;977:540;-1:-1:-1;;;;977:540:170:o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;4521:205:139:-;4559:16;4578:21;:19;:21::i;:::-;4559:40;-1:-1:-1;4613:12:139;;4609:71;;4661:8;4641:16;;:28;;;;;;;:::i;:::-;;;;-1:-1:-1;;4609:71:139;-1:-1:-1;4704:15:139;4689:12;:30;4521:205::o;5510:446:172:-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;13527:25:234;;;;13568:18;;13561:34;;;;5833:14:172;13611:18:234;;;13604:34;5869:13:172;13654:18:234;;;13647:34;5912:4:172;13697:19:234;;;13690:61;13499:19;;5640:295:172;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;4732:390:139:-;4786:7;4809:5;;4818:1;4809:10;4805:49;;-1:-1:-1;4842:1:139;;4732:390::o;4805:49::-;4917:19;4939:72;4993:8;4958:12;;4940:15;:30;;;;:::i;:::-;4939:40;;:72::i;:::-;4917:94;;5021:15;5039:52;5064:26;5078:11;5064:5;;:13;;:26;;;;:::i;:::-;5039:16;;;:24;:52::i;6150:325:172:-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;6387:13:172;;;;;;:9;:13;;;;;;;;:23;;;;;;6436:32;548:25:234;;;-1:-1:-1;;;;;;;;;;;6436:32:172;521:18:234;6436:32:172;;;;;;;;6150:325;;:::o;6481:328::-;-1:-1:-1;;;;;6553:15:172;;;;;;:9;:15;;;;;:25;;6572:6;;6553:15;:25;;6572:6;;6553:25;:::i;:::-;;;;-1:-1:-1;;6721:11:172;:21;;;;;;;6768:34;;548:25:234;;;-1:-1:-1;;;;;;;6768:34:172;;;-1:-1:-1;;;;;;;;;;;6768:34:172;536:2:234;521:18;6768:34:172;402:177:234;1884:164:122;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;1610:118::-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;14:131:234:-;-1:-1:-1;;;;;89:31:234;;79:42;;69:70;;135:1;132;125:12;150:247;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;584:548::-;696:4;725:2;754;743:9;736:21;786:6;780:13;829:6;824:2;813:9;809:18;802:34;854:1;864:140;878:6;875:1;872:13;864:140;;;973:14;;;969:23;;963:30;939:17;;;958:2;935:26;928:66;893:10;;864:140;;;868:3;1053:1;1048:2;1039:6;1028:9;1024:22;1020:31;1013:42;1123:2;1116;1112:7;1107:2;1099:6;1095:15;1091:29;1080:9;1076:45;1072:54;1064:62;;;;584:548;;;;:::o;1137:315::-;1205:6;1213;1266:2;1254:9;1245:7;1241:23;1237:32;1234:52;;;1282:1;1279;1272:12;1234:52;1321:9;1308:23;1340:31;1365:5;1340:31;:::i;:::-;1390:5;1442:2;1427:18;;;;1414:32;;-1:-1:-1;;;1137:315:234:o;1649:173::-;1716:20;;-1:-1:-1;;;;;;1765:32:234;;1755:43;;1745:71;;1812:1;1809;1802:12;1745:71;1649:173;;;:::o;1827:184::-;1885:6;1938:2;1926:9;1917:7;1913:23;1909:32;1906:52;;;1954:1;1951;1944:12;1906:52;1977:28;1995:9;1977:28;:::i;2016:156::-;2082:20;;2142:4;2131:16;;2121:27;;2111:55;;2162:1;2159;2152:12;2177:118;2263:5;2256:13;2249:21;2242:5;2239:32;2229:60;;2285:1;2282;2275:12;2300:383;2371:6;2379;2387;2440:2;2428:9;2419:7;2415:23;2411:32;2408:52;;;2456:1;2453;2446:12;2408:52;2479:27;2496:9;2479:27;:::i;:::-;2469:37;;2525;2558:2;2547:9;2543:18;2525:37;:::i;:::-;2515:47;;2612:2;2601:9;2597:18;2584:32;2625:28;2647:5;2625:28;:::i;:::-;2672:5;2662:15;;;2300:383;;;;;:::o;2870:180::-;2929:6;2982:2;2970:9;2961:7;2957:23;2953:32;2950:52;;;2998:1;2995;2988:12;2950:52;-1:-1:-1;3021:23:234;;2870:180;-1:-1:-1;2870:180:234:o;3055:456::-;3132:6;3140;3148;3201:2;3189:9;3180:7;3176:23;3172:32;3169:52;;;3217:1;3214;3207:12;3169:52;3256:9;3243:23;3275:31;3300:5;3275:31;:::i;:::-;3325:5;-1:-1:-1;3382:2:234;3367:18;;3354:32;3395:33;3354:32;3395:33;:::i;:::-;3055:456;;3447:7;;-1:-1:-1;;;3501:2:234;3486:18;;;;3473:32;;3055:456::o;3705:313::-;3769:6;3777;3830:2;3818:9;3809:7;3805:23;3801:32;3798:52;;;3846:1;3843;3836:12;3798:52;3869:28;3887:9;3869:28;:::i;:::-;3859:38;;3947:2;3936:9;3932:18;3919:32;3960:28;3982:5;3960:28;:::i;:::-;4007:5;3997:15;;;3705:313;;;;;:::o;4023:452::-;4095:6;4103;4111;4164:2;4152:9;4143:7;4139:23;4135:32;4132:52;;;4180:1;4177;4170:12;4132:52;4219:9;4206:23;4238:31;4263:5;4238:31;:::i;:::-;4288:5;-1:-1:-1;4312:36:234;4344:2;4329:18;;4312:36;:::i;4480:407::-;4567:6;4575;4628:2;4616:9;4607:7;4603:23;4599:32;4596:52;;;4644:1;4641;4634:12;4596:52;4683:9;4670:23;4702:31;4727:5;4702:31;:::i;:::-;4752:5;-1:-1:-1;4809:2:234;4794:18;;4781:32;4822:33;4781:32;4822:33;:::i;5371:460::-;5447:6;5455;5463;5516:2;5504:9;5495:7;5491:23;5487:32;5484:52;;;5532:1;5529;5522:12;5484:52;5571:9;5558:23;5590:31;5615:5;5590:31;:::i;:::-;5640:5;-1:-1:-1;5697:2:234;5682:18;;5669:32;5710:33;5669:32;5710:33;:::i;:::-;5762:7;-1:-1:-1;5788:37:234;5821:2;5806:18;;5788:37;:::i;:::-;5778:47;;5371:460;;;;;:::o;6063:734::-;6174:6;6182;6190;6198;6206;6214;6222;6275:3;6263:9;6254:7;6250:23;6246:33;6243:53;;;6292:1;6289;6282:12;6243:53;6331:9;6318:23;6350:31;6375:5;6350:31;:::i;:::-;6400:5;-1:-1:-1;6457:2:234;6442:18;;6429:32;6470:33;6429:32;6470:33;:::i;:::-;6522:7;-1:-1:-1;6576:2:234;6561:18;;6548:32;;-1:-1:-1;6627:2:234;6612:18;;6599:32;;-1:-1:-1;6650:37:234;6682:3;6667:19;;6650:37;:::i;:::-;6640:47;;6734:3;6723:9;6719:19;6706:33;6696:43;;6786:3;6775:9;6771:19;6758:33;6748:43;;6063:734;;;;;;;;;;:::o;7195:254::-;7260:6;7268;7321:2;7309:9;7300:7;7296:23;7292:32;7289:52;;;7337:1;7334;7327:12;7289:52;7360:27;7377:9;7360:27;:::i;:::-;7350:37;;7406;7439:2;7428:9;7424:18;7406:37;:::i;:::-;7396:47;;7195:254;;;;;:::o;7454:317::-;7520:6;7528;7581:2;7569:9;7560:7;7556:23;7552:32;7549:52;;;7597:1;7594;7587:12;7549:52;7636:9;7623:23;7655:31;7680:5;7655:31;:::i;:::-;7705:5;-1:-1:-1;7729:36:234;7761:2;7746:18;;7729:36;:::i;7776:380::-;7855:1;7851:12;;;;7898;;;7919:61;;7973:4;7965:6;7961:17;7951:27;;7919:61;8026:2;8018:6;8015:14;7995:18;7992:38;7989:161;;8072:10;8067:3;8063:20;8060:1;8053:31;8107:4;8104:1;8097:15;8135:4;8132:1;8125:15;7989:161;;7776:380;;;:::o;8161:336::-;8363:2;8345:21;;;8402:2;8382:18;;;8375:30;-1:-1:-1;;;8436:2:234;8421:18;;8414:42;8488:2;8473:18;;8161:336::o;8502:127::-;8563:10;8558:3;8554:20;8551:1;8544:31;8594:4;8591:1;8584:15;8618:4;8615:1;8608:15;8634:128;8701:9;;;8722:11;;;8719:37;;;8736:18;;:::i;8767:353::-;8969:2;8951:21;;;9008:2;8988:18;;;8981:30;9047:31;9042:2;9027:18;;9020:59;9111:2;9096:18;;8767:353::o;9125:125::-;9190:9;;;9211:10;;;9208:36;;;9224:18;;:::i;9255:400::-;-1:-1:-1;;;;;9511:15:234;;;9493:34;;9563:15;;;;9558:2;9543:18;;9536:43;-1:-1:-1;;;;;;9615:33:234;;;9610:2;9595:18;;9588:61;9443:2;9428:18;;9255:400::o;9660:245::-;9727:6;9780:2;9768:9;9759:7;9755:23;9751:32;9748:52;;;9796:1;9793;9786:12;9748:52;9828:9;9822:16;9847:28;9869:5;9847:28;:::i;12130:1133::-;12260:3;12289:1;12322:6;12316:13;12352:3;12374:1;12402:9;12398:2;12394:18;12384:28;;12462:2;12451:9;12447:18;12484;12474:61;;12528:4;12520:6;12516:17;12506:27;;12474:61;12554:2;12602;12594:6;12591:14;12571:18;12568:38;12565:165;;-1:-1:-1;;;12629:33:234;;12685:4;12682:1;12675:15;12715:4;12636:3;12703:17;12565:165;12746:18;12773:133;;;;12920:1;12915:323;;;;12739:499;;12773:133;-1:-1:-1;;12806:24:234;;12794:37;;12879:14;;12872:22;12860:35;;12851:45;;;-1:-1:-1;12773:133:234;;12915:323;12077:1;12070:14;;;12114:4;12101:18;;13013:1;13027:165;13041:6;13038:1;13035:13;13027:165;;;13119:14;;13106:11;;;13099:35;13162:16;;;;13056:10;;13027:165;;;13031:3;;13221:6;13216:3;13212:16;13205:23;;12739:499;-1:-1:-1;13254:3:234;;12130:1133;-1:-1:-1;;;;;;;;12130:1133:234:o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "23491": readonly [{
                readonly start: 1395;
                readonly length: 32;
            }, {
                readonly start: 2935;
                readonly length: 32;
            }, {
                readonly start: 3150;
                readonly length: 32;
            }, {
                readonly start: 3252;
                readonly length: 32;
            }, {
                readonly start: 4203;
                readonly length: 32;
            }, {
                readonly start: 4301;
                readonly length: 32;
            }];
            readonly "72176": readonly [{
                readonly start: 941;
                readonly length: 32;
            }];
            readonly "72190": readonly [{
                readonly start: 3038;
                readonly length: 32;
            }];
            readonly "72192": readonly [{
                readonly start: 3091;
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
        readonly "getBufferedEther()": "47b714e0";
        readonly "getPooledEthByShares(uint256)": "7a28fb88";
        readonly "getRate()": "679aefce";
        readonly "getRolesWithCapability(bytes4)": "ed0d0efb";
        readonly "getSharesByPooledEth(uint256)": "19208451";
        readonly "getTargetCustomAuthority(address)": "c53a3985";
        readonly "getTotalPooledEther()": "37cfdaca";
        readonly "getTotalShares()": "d5002f2e";
        readonly "getUserRoles(address)": "06a36aee";
        readonly "isCapabilityPublic(bytes4)": "0bade8a4";
        readonly "isCompetitionMode()": "7a8c63b5";
        readonly "mint(address,uint256)": "40c10f19";
        readonly "mint(uint256)": "a0712d68";
        readonly "name()": "06fdde03";
        readonly "nonces(address)": "7ecebe00";
        readonly "owner()": "8da5cb5b";
        readonly "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf";
        readonly "setAuthority(address)": "7a9e5e4b";
        readonly "setPublicCapability(bytes4,bool)": "4b5159da";
        readonly "setRate(uint256)": "34fcf437";
        readonly "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b";
        readonly "setTargetCustomAuthority(address,address)": "728b952b";
        readonly "setUserRole(address,uint8,bool)": "67aff484";
        readonly "sharesOf(address)": "f5eb42dc";
        readonly "submit(address)": "a1903eab";
        readonly "symbol()": "95d89b41";
        readonly "totalSupply()": "18160ddd";
        readonly "transfer(address,uint256)": "a9059cbb";
        readonly "transferFrom(address,address,uint256)": "23b872dd";
        readonly "transferOwnership(address)": "f2fde38b";
        readonly "transferShares(address,uint256)": "8fcb4e5b";
        readonly "transferSharesFrom(address,address,uint256)": "6d780459";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_initialRate\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_isCompetitionMode\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBufferedEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"getPooledEthByShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ethAmount\",\"type\":\"uint256\"}],\"name\":\"getSharesByPooledEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalPooledEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isCompetitionMode\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rate_\",\"type\":\"uint256\"}],\"name\":\"setRate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"sharesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"submit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferSharesFrom\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"MockLido\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"setRate(uint256)\":{\"notice\":\"Mock ///\"},\"submit(address)\":{\"notice\":\"Overrides ///\"}},\"notice\":\"This mock yield source will accrue interest at a specified rate         Every stateful interaction will accrue interest, so the interest         accrual will approximate continuous compounding as the contract         is called more frequently.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockLido.sol\":\"MockLido\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3\",\"dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockLido.sol\":{\"keccak256\":\"0x085e82f9e03f2ab93ae5e3755b96f58ef88974d51bfb84ae5fbce57985abf5fd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4eeabb681db8fe6a7600cce991e0a86015fcfaee4723ffbc4ef54acc8400708d\",\"dweb:/ipfs/QmYMqssiuPGrvGtjvx4c91zzH6Ffte9i2X9D3nvvrnoEhr\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_initialRate";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_admin";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_isCompetitionMode";
                    readonly type: "bool";
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
                readonly inputs: readonly [];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "getBufferedEther";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_sharesAmount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getPooledEthByShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getRate";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                    readonly internalType: "uint256";
                    readonly name: "_ethAmount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getSharesByPooledEth";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getTotalPooledEther";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getTotalShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                    readonly internalType: "uint256";
                    readonly name: "_rate_";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setRate";
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
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "sharesOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "submit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
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
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_sharesAmount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_sender";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_sharesAmount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferSharesFrom";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "setRate(uint256)": {
                        readonly notice: "Mock ///";
                    };
                    readonly "submit(address)": {
                        readonly notice: "Overrides ///";
                    };
                };
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
                readonly "contracts/test/MockLido.sol": "MockLido";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71";
                readonly urls: readonly ["bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf", "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0";
                readonly urls: readonly ["bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c", "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/ILido.sol": {
                readonly keccak256: "0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6";
                readonly urls: readonly ["bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3", "dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/ERC20Mintable.sol": {
                readonly keccak256: "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d";
                readonly urls: readonly ["bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df", "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockLido.sol": {
                readonly keccak256: "0x085e82f9e03f2ab93ae5e3755b96f58ef88974d51bfb84ae5fbce57985abf5fd";
                readonly urls: readonly ["bzz-raw://4eeabb681db8fe6a7600cce991e0a86015fcfaee4723ffbc4ef54acc8400708d", "dweb:/ipfs/QmYMqssiuPGrvGtjvx4c91zzH6Ffte9i2X9D3nvvrnoEhr"];
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
        readonly absolutePath: "contracts/test/MockLido.sol";
        readonly id: 26590;
        readonly exportedSymbols: {
            readonly Authority: readonly [71846];
            readonly ERC20Mintable: readonly [23602];
            readonly FixedPointMath: readonly [19065];
            readonly ILido: readonly [11633];
            readonly MockLido: readonly [26589];
            readonly MultiRolesAuthority: readonly [72151];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:5086:139";
        readonly nodes: readonly [{
            readonly id: 26242;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:139";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 26244;
            readonly nodeType: "ImportDirective";
            readonly src: "64:50:139";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/auth/Auth.sol";
            readonly file: "solmate/auth/Auth.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26590;
            readonly sourceUnit: 71847;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26243;
                    readonly name: "Authority";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 71846;
                    readonly src: "73:9:139";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26246;
            readonly nodeType: "ImportDirective";
            readonly src: "115:87:139";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol";
            readonly file: "solmate/auth/authorities/MultiRolesAuthority.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26590;
            readonly sourceUnit: 72152;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26245;
                    readonly name: "MultiRolesAuthority";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 72151;
                    readonly src: "124:19:139";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26248;
            readonly nodeType: "ImportDirective";
            readonly src: "203:52:139";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/ILido.sol";
            readonly file: "../src/interfaces/ILido.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26590;
            readonly sourceUnit: 11634;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26247;
                    readonly name: "ILido";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11633;
                    readonly src: "212:5:139";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26250;
            readonly nodeType: "ImportDirective";
            readonly src: "256:69:139";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../src/libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26590;
            readonly sourceUnit: 19066;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26249;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19065;
                    readonly src: "265:14:139";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26252;
            readonly nodeType: "ImportDirective";
            readonly src: "326:52:139";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/test/ERC20Mintable.sol";
            readonly file: "./ERC20Mintable.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26590;
            readonly sourceUnit: 23603;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26251;
                    readonly name: "ERC20Mintable";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 23602;
                    readonly src: "335:13:139";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26589;
            readonly nodeType: "ContractDefinition";
            readonly src: "909:4215:139";
            readonly nodes: readonly [{
                readonly id: 26260;
                readonly nodeType: "UsingForDirective";
                readonly src: "971:33:139";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 26258;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["977:14:139"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19065;
                    readonly src: "977:14:139";
                };
                readonly typeName: {
                    readonly id: 26259;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "996:7:139";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 26262;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1032:22:139";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_rate";
                readonly nameLocation: "1049:5:139";
                readonly scope: 26589;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 26261;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1032:7:139";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 26264;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1060:29:139";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_lastUpdated";
                readonly nameLocation: "1077:12:139";
                readonly scope: 26589;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 26263;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1060:7:139";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 26266;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1114:24:139";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "totalPooledEther";
                readonly nameLocation: "1122:16:139";
                readonly scope: 26589;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 26265;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1114:7:139";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 26268;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1144:19:139";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "totalShares";
                readonly nameLocation: "1152:11:139";
                readonly scope: 26589;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 26267;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1144:7:139";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 26294;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1170:346:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26293;
                    readonly nodeType: "Block";
                    readonly src: "1439:77:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26286;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26284;
                                readonly name: "_rate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26262;
                                readonly src: "1449:5:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 26285;
                                readonly name: "_initialRate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26270;
                                readonly src: "1457:12:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1449:20:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 26287;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1449:20:139";
                    }, {
                        readonly expression: {
                            readonly id: 26291;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26288;
                                readonly name: "_lastUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26264;
                                readonly src: "1479:12:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 26289;
                                    readonly name: "block";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -4;
                                    readonly src: "1494:5:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_block";
                                        readonly typeString: "block";
                                    };
                                };
                                readonly id: 26290;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1500:9:139";
                                readonly memberName: "timestamp";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1494:15:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1479:30:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 26292;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1479:30:139";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly hexValue: "4c6971756964207374616b656420457468657220322e30";
                        readonly id: 26277;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "string";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "1310:25:139";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_stringliteral_d0475442dbe1381d44afad818dc97da0a5b374312c7fe323cc2a3df88293e4ba";
                            readonly typeString: "literal_string \"Liquid staked Ether 2.0\"";
                        };
                        readonly value: "Liquid staked Ether 2.0";
                    }, {
                        readonly hexValue: "7374455448";
                        readonly id: 26278;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "string";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "1349:7:139";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_stringliteral_5318b5909b20227fb38f47aa955f9f06527b0ae497ac2d344a4aacb624e26485";
                            readonly typeString: "literal_string \"stETH\"";
                        };
                        readonly value: "stETH";
                    }, {
                        readonly hexValue: "3138";
                        readonly id: 26279;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "number";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "1370:2:139";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_18_by_1";
                            readonly typeString: "int_const 18";
                        };
                        readonly value: "18";
                    }, {
                        readonly id: 26280;
                        readonly name: "_admin";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 26272;
                        readonly src: "1386:6:139";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 26281;
                        readonly name: "_isCompetitionMode";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 26274;
                        readonly src: "1406:18:139";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    }];
                    readonly id: 26282;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 26276;
                        readonly name: "ERC20Mintable";
                        readonly nameLocations: readonly ["1283:13:139"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 23602;
                        readonly src: "1283:13:139";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1283:151:139";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 26275;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26270;
                        readonly mutability: "mutable";
                        readonly name: "_initialRate";
                        readonly nameLocation: "1199:12:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26294;
                        readonly src: "1191:20:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26269;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1191:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26272;
                        readonly mutability: "mutable";
                        readonly name: "_admin";
                        readonly nameLocation: "1229:6:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26294;
                        readonly src: "1221:14:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26271;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1221:7:139";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26274;
                        readonly mutability: "mutable";
                        readonly name: "_isCompetitionMode";
                        readonly nameLocation: "1250:18:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26294;
                        readonly src: "1245:23:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 26273;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1245:4:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1181:93:139";
                };
                readonly returnParameters: {
                    readonly id: 26283;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1439:0:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 26361;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1545:779:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26360;
                    readonly nodeType: "Block";
                    readonly src: "1605:719:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 26302;
                                readonly name: "_accrue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26552;
                                readonly src: "1643:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 26303;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1643:9:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26304;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1643:9:139";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 26308;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26305;
                                    readonly name: "getTotalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26483;
                                    readonly src: "1725:14:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26306;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1725:16:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 26307;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1745:1:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "1725:21:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 26330;
                        readonly nodeType: "IfStatement";
                        readonly src: "1721:189:139";
                        readonly trueBody: {
                            readonly id: 26329;
                            readonly nodeType: "Block";
                            readonly src: "1748:162:139";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 26312;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 26309;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26268;
                                        readonly src: "1762:11:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly id: 26310;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1776:3:139";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 26311;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1780:5:139";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1776:9:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "1762:23:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26313;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "1762:23:139";
                            }, {
                                readonly expression: {
                                    readonly id: 26317;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 26314;
                                        readonly name: "totalPooledEther";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26266;
                                        readonly src: "1799:16:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly id: 26315;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1818:3:139";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 26316;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1822:5:139";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1818:9:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "1799:28:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26318;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "1799:28:139";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 26320;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1847:3:139";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 26321;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1851:6:139";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1847:10:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 26322;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1859:3:139";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 26323;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1863:5:139";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1859:9:139";
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
                                        readonly id: 26319;
                                        readonly name: "_mint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72510;
                                        readonly src: "1841:5:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                            readonly typeString: "function (address,uint256)";
                                        };
                                    };
                                    readonly id: 26324;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1841:28:139";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 26325;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "1841:28:139";
                            }, {
                                readonly expression: {
                                    readonly expression: {
                                        readonly id: 26326;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "1890:3:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 26327;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1894:5:139";
                                    readonly memberName: "value";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1890:9:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 26301;
                                readonly id: 26328;
                                readonly nodeType: "Return";
                                readonly src: "1883:16:139";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [26332];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26332;
                            readonly mutability: "mutable";
                            readonly name: "shares";
                            readonly nameLocation: "1999:6:139";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26360;
                            readonly src: "1991:14:139";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 26331;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1991:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26341;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26336;
                                    readonly name: "getTotalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26483;
                                    readonly src: "2042:14:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26337;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2042:16:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26338;
                                    readonly name: "getTotalPooledEther";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26475;
                                    readonly src: "2072:19:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26339;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2072:21:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly expression: {
                                        readonly id: 26333;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "2008:3:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 26334;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2012:5:139";
                                    readonly memberName: "value";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "2008:9:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26335;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2018:10:139";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18327;
                                readonly src: "2008:20:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26340;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2008:95:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1991:112:139";
                    }, {
                        readonly expression: {
                            readonly id: 26345;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26342;
                                readonly name: "totalPooledEther";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26266;
                                readonly src: "2148:16:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 26343;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2168:3:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 26344;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2172:5:139";
                                readonly memberName: "value";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2168:9:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2148:29:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 26346;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2148:29:139";
                    }, {
                        readonly expression: {
                            readonly id: 26349;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26347;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26268;
                                readonly src: "2187:11:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly id: 26348;
                                readonly name: "shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26332;
                                readonly src: "2202:6:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2187:21:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 26350;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2187:21:139";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 26352;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2271:3:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 26353;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2275:6:139";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2271:10:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 26354;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2283:3:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 26355;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2287:5:139";
                                readonly memberName: "value";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2283:9:139";
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
                                readonly id: 26351;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72510;
                                readonly src: "2265:5:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 26356;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2265:28:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26357;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2265:28:139";
                    }, {
                        readonly expression: {
                            readonly id: 26358;
                            readonly name: "shares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26332;
                            readonly src: "2311:6:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26301;
                        readonly id: 26359;
                        readonly nodeType: "Return";
                        readonly src: "2304:13:139";
                    }];
                };
                readonly documentation: {
                    readonly id: 26295;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1522:18:139";
                    readonly text: "Overrides ///";
                };
                readonly functionSelector: "a1903eab";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "submit";
                readonly nameLocation: "1554:6:139";
                readonly parameters: {
                    readonly id: 26298;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26297;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26361;
                        readonly src: "1561:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26296;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1561:7:139";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1560:9:139";
                };
                readonly returnParameters: {
                    readonly id: 26301;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26300;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26361;
                        readonly src: "1596:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26299;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1596:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1595:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26391;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2330:489:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26390;
                    readonly nodeType: "Block";
                    readonly src: "2446:373:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 26370;
                                readonly name: "_accrue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26552;
                                readonly src: "2484:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 26371;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2484:9:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26372;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2484:9:139";
                    }, {
                        readonly assignments: readonly [26374];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26374;
                            readonly mutability: "mutable";
                            readonly name: "tokenAmount";
                            readonly nameLocation: "2582:11:139";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26390;
                            readonly src: "2574:19:139";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 26373;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2574:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26382;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26377;
                                    readonly name: "getTotalPooledEther";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26475;
                                    readonly src: "2634:19:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26378;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2634:21:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26379;
                                    readonly name: "getTotalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26483;
                                    readonly src: "2669:14:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26380;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2669:16:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26375;
                                    readonly name: "_sharesAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26365;
                                    readonly src: "2596:13:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26376;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2610:10:139";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18327;
                                readonly src: "2596:24:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26381;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2596:99:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2574:121:139";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26384;
                                readonly name: "_recipient";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26363;
                                readonly src: "2759:10:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26385;
                                readonly name: "tokenAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26374;
                                readonly src: "2771:11:139";
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
                                readonly id: 26383;
                                readonly name: "transfer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72289;
                                readonly src: "2750:8:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (address,uint256) returns (bool)";
                                };
                            };
                            readonly id: 26386;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2750:33:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 26387;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2750:33:139";
                    }, {
                        readonly expression: {
                            readonly id: 26388;
                            readonly name: "tokenAmount";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26374;
                            readonly src: "2801:11:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26369;
                        readonly id: 26389;
                        readonly nodeType: "Return";
                        readonly src: "2794:18:139";
                    }];
                };
                readonly functionSelector: "8fcb4e5b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferShares";
                readonly nameLocation: "2339:14:139";
                readonly parameters: {
                    readonly id: 26366;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26363;
                        readonly mutability: "mutable";
                        readonly name: "_recipient";
                        readonly nameLocation: "2371:10:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26391;
                        readonly src: "2363:18:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26362;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2363:7:139";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26365;
                        readonly mutability: "mutable";
                        readonly name: "_sharesAmount";
                        readonly nameLocation: "2399:13:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26391;
                        readonly src: "2391:21:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26364;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2391:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2353:65:139";
                };
                readonly returnParameters: {
                    readonly id: 26369;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26368;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26391;
                        readonly src: "2437:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26367;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2437:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2436:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26424;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2825:531:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26423;
                    readonly nodeType: "Block";
                    readonly src: "2970:386:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 26402;
                                readonly name: "_accrue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26552;
                                readonly src: "3008:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 26403;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3008:9:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26404;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3008:9:139";
                    }, {
                        readonly assignments: readonly [26406];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26406;
                            readonly mutability: "mutable";
                            readonly name: "tokenAmount";
                            readonly nameLocation: "3106:11:139";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26423;
                            readonly src: "3098:19:139";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 26405;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3098:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26414;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26409;
                                    readonly name: "getTotalPooledEther";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26475;
                                    readonly src: "3158:19:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26410;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3158:21:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26411;
                                    readonly name: "getTotalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26483;
                                    readonly src: "3193:14:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26412;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3193:16:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26407;
                                    readonly name: "_sharesAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26397;
                                    readonly src: "3120:13:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26408;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3134:10:139";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18327;
                                readonly src: "3120:24:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26413;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3120:99:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3098:121:139";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26416;
                                readonly name: "_sender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26393;
                                readonly src: "3287:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26417;
                                readonly name: "_recipient";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26395;
                                readonly src: "3296:10:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 26418;
                                readonly name: "tokenAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26406;
                                readonly src: "3308:11:139";
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
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 26415;
                                readonly name: "transferFrom";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72350;
                                readonly src: "3274:12:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (address,address,uint256) returns (bool)";
                                };
                            };
                            readonly id: 26419;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3274:46:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 26420;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3274:46:139";
                    }, {
                        readonly expression: {
                            readonly id: 26421;
                            readonly name: "tokenAmount";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26406;
                            readonly src: "3338:11:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26401;
                        readonly id: 26422;
                        readonly nodeType: "Return";
                        readonly src: "3331:18:139";
                    }];
                };
                readonly functionSelector: "6d780459";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferSharesFrom";
                readonly nameLocation: "2834:18:139";
                readonly parameters: {
                    readonly id: 26398;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26393;
                        readonly mutability: "mutable";
                        readonly name: "_sender";
                        readonly nameLocation: "2870:7:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26424;
                        readonly src: "2862:15:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26392;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2862:7:139";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26395;
                        readonly mutability: "mutable";
                        readonly name: "_recipient";
                        readonly nameLocation: "2895:10:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26424;
                        readonly src: "2887:18:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26394;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2887:7:139";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26397;
                        readonly mutability: "mutable";
                        readonly name: "_sharesAmount";
                        readonly nameLocation: "2923:13:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26424;
                        readonly src: "2915:21:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26396;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2915:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2852:90:139";
                };
                readonly returnParameters: {
                    readonly id: 26401;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26400;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26424;
                        readonly src: "2961:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26399;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2961:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2960:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26440;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3362:182:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26439;
                    readonly nodeType: "Block";
                    readonly src: "3458:86:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26433;
                                    readonly name: "getTotalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26483;
                                    readonly src: "3497:14:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26434;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3497:16:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26435;
                                    readonly name: "getTotalPooledEther";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26475;
                                    readonly src: "3515:19:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26436;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3515:21:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26431;
                                    readonly name: "_ethAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26426;
                                    readonly src: "3475:10:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26432;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3486:10:139";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18327;
                                readonly src: "3475:21:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26437;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3475:62:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26430;
                        readonly id: 26438;
                        readonly nodeType: "Return";
                        readonly src: "3468:69:139";
                    }];
                };
                readonly functionSelector: "19208451";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getSharesByPooledEth";
                readonly nameLocation: "3371:20:139";
                readonly parameters: {
                    readonly id: 26427;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26426;
                        readonly mutability: "mutable";
                        readonly name: "_ethAmount";
                        readonly nameLocation: "3409:10:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26440;
                        readonly src: "3401:18:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26425;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3401:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3391:34:139";
                };
                readonly returnParameters: {
                    readonly id: 26430;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26429;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26440;
                        readonly src: "3449:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26428;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3449:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3448:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26456;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3550:200:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26455;
                    readonly nodeType: "Block";
                    readonly src: "3649:101:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26449;
                                    readonly name: "getTotalPooledEther";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26475;
                                    readonly src: "3703:19:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26450;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3703:21:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26451;
                                    readonly name: "getTotalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26483;
                                    readonly src: "3726:14:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26452;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3726:16:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26447;
                                    readonly name: "_sharesAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26442;
                                    readonly src: "3678:13:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26448;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3692:10:139";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18327;
                                readonly src: "3678:24:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26453;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3678:65:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26446;
                        readonly id: 26454;
                        readonly nodeType: "Return";
                        readonly src: "3659:84:139";
                    }];
                };
                readonly functionSelector: "7a28fb88";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getPooledEthByShares";
                readonly nameLocation: "3559:20:139";
                readonly parameters: {
                    readonly id: 26443;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26442;
                        readonly mutability: "mutable";
                        readonly name: "_sharesAmount";
                        readonly nameLocation: "3597:13:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26456;
                        readonly src: "3589:21:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26441;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3589:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3579:37:139";
                };
                readonly returnParameters: {
                    readonly id: 26446;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26445;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26456;
                        readonly src: "3640:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26444;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3640:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3639:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26464;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3756:85:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26463;
                    readonly nodeType: "Block";
                    readonly src: "3816:25:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly hexValue: "30";
                            readonly id: 26461;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "3833:1:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_0_by_1";
                                readonly typeString: "int_const 0";
                            };
                            readonly value: "0";
                        };
                        readonly functionReturnParameters: 26460;
                        readonly id: 26462;
                        readonly nodeType: "Return";
                        readonly src: "3826:8:139";
                    }];
                };
                readonly functionSelector: "47b714e0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBufferedEther";
                readonly nameLocation: "3765:16:139";
                readonly parameters: {
                    readonly id: 26457;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3781:2:139";
                };
                readonly returnParameters: {
                    readonly id: 26460;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26459;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26464;
                        readonly src: "3807:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26458;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3807:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3806:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26475;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3847:125:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26474;
                    readonly nodeType: "Block";
                    readonly src: "3908:64:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 26472;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 26469;
                                readonly name: "totalPooledEther";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26266;
                                readonly src: "3925:16:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26470;
                                    readonly name: "_getAccruedInterest";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26588;
                                    readonly src: "3944:19:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26471;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3944:21:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3925:40:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26468;
                        readonly id: 26473;
                        readonly nodeType: "Return";
                        readonly src: "3918:47:139";
                    }];
                };
                readonly functionSelector: "37cfdaca";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalPooledEther";
                readonly nameLocation: "3856:19:139";
                readonly parameters: {
                    readonly id: 26465;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3875:2:139";
                };
                readonly returnParameters: {
                    readonly id: 26468;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26467;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26475;
                        readonly src: "3899:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26466;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3899:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3898:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 26483;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3978:91:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26482;
                    readonly nodeType: "Block";
                    readonly src: "4034:35:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26480;
                            readonly name: "totalShares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26268;
                            readonly src: "4051:11:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26479;
                        readonly id: 26481;
                        readonly nodeType: "Return";
                        readonly src: "4044:18:139";
                    }];
                };
                readonly functionSelector: "d5002f2e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalShares";
                readonly nameLocation: "3987:14:139";
                readonly parameters: {
                    readonly id: 26476;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4001:2:139";
                };
                readonly returnParameters: {
                    readonly id: 26479;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26478;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26483;
                        readonly src: "4025:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26477;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4025:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4024:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 26505;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4075:208:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26504;
                    readonly nodeType: "Block";
                    readonly src: "4143:140:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26491];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26491;
                            readonly mutability: "mutable";
                            readonly name: "tokenBalance";
                            readonly nameLocation: "4161:12:139";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26504;
                            readonly src: "4153:20:139";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 26490;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4153:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26495;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly id: 26492;
                                readonly name: "balanceOf";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72182;
                                readonly src: "4176:9:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                    readonly typeString: "mapping(address => uint256)";
                                };
                            };
                            readonly id: 26494;
                            readonly indexExpression: {
                                readonly id: 26493;
                                readonly name: "_account";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26485;
                                readonly src: "4186:8:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "IndexAccess";
                            readonly src: "4176:19:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4153:42:139";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26498;
                                    readonly name: "getTotalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26483;
                                    readonly src: "4236:14:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26499;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4236:16:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 26500;
                                    readonly name: "getTotalPooledEther";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26475;
                                    readonly src: "4254:19:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 26501;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4254:21:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26496;
                                    readonly name: "tokenBalance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26491;
                                    readonly src: "4212:12:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26497;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4225:10:139";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18327;
                                readonly src: "4212:23:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26502;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4212:64:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26489;
                        readonly id: 26503;
                        readonly nodeType: "Return";
                        readonly src: "4205:71:139";
                    }];
                };
                readonly functionSelector: "f5eb42dc";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sharesOf";
                readonly nameLocation: "4084:8:139";
                readonly parameters: {
                    readonly id: 26486;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26485;
                        readonly mutability: "mutable";
                        readonly name: "_account";
                        readonly nameLocation: "4101:8:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26505;
                        readonly src: "4093:16:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 26484;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4093:7:139";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4092:18:139";
                };
                readonly returnParameters: {
                    readonly id: 26489;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26488;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26505;
                        readonly src: "4134:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26487;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4134:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4133:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26521;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4307:122:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26520;
                    readonly nodeType: "Block";
                    readonly src: "4379:50:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 26513;
                                readonly name: "_accrue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26552;
                                readonly src: "4389:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 26514;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4389:9:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26515;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4389:9:139";
                    }, {
                        readonly expression: {
                            readonly id: 26518;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26516;
                                readonly name: "_rate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26262;
                                readonly src: "4408:5:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 26517;
                                readonly name: "_rate_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26508;
                                readonly src: "4416:6:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "4408:14:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 26519;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4408:14:139";
                    }];
                };
                readonly documentation: {
                    readonly id: 26506;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4289:13:139";
                    readonly text: "Mock ///";
                };
                readonly functionSelector: "34fcf437";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 26511;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 26510;
                        readonly name: "requiresAuthDuringCompetition";
                        readonly nameLocations: readonly ["4349:29:139"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 23543;
                        readonly src: "4349:29:139";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "4349:29:139";
                }];
                readonly name: "setRate";
                readonly nameLocation: "4316:7:139";
                readonly parameters: {
                    readonly id: 26509;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26508;
                        readonly mutability: "mutable";
                        readonly name: "_rate_";
                        readonly nameLocation: "4332:6:139";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26521;
                        readonly src: "4324:14:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26507;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4324:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4323:16:139";
                };
                readonly returnParameters: {
                    readonly id: 26512;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4379:0:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26529;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4435:80:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26528;
                    readonly nodeType: "Block";
                    readonly src: "4486:29:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26526;
                            readonly name: "_rate";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26262;
                            readonly src: "4503:5:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26525;
                        readonly id: 26527;
                        readonly nodeType: "Return";
                        readonly src: "4496:12:139";
                    }];
                };
                readonly functionSelector: "679aefce";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getRate";
                readonly nameLocation: "4444:7:139";
                readonly parameters: {
                    readonly id: 26522;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4451:2:139";
                };
                readonly returnParameters: {
                    readonly id: 26525;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26524;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26529;
                        readonly src: "4477:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26523;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4477:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4476:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26552;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4521:205:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26551;
                    readonly nodeType: "Block";
                    readonly src: "4549:177:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26533];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26533;
                            readonly mutability: "mutable";
                            readonly name: "interest";
                            readonly nameLocation: "4567:8:139";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26551;
                            readonly src: "4559:16:139";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 26532;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4559:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26536;
                        readonly initialValue: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 26534;
                                readonly name: "_getAccruedInterest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26588;
                                readonly src: "4578:19:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 26535;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4578:21:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4559:40:139";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 26539;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 26537;
                                readonly name: "interest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26533;
                                readonly src: "4613:8:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 26538;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4624:1:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "4613:12:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 26545;
                        readonly nodeType: "IfStatement";
                        readonly src: "4609:71:139";
                        readonly trueBody: {
                            readonly id: 26544;
                            readonly nodeType: "Block";
                            readonly src: "4627:53:139";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 26542;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 26540;
                                        readonly name: "totalPooledEther";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26266;
                                        readonly src: "4641:16:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 26541;
                                        readonly name: "interest";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26533;
                                        readonly src: "4661:8:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4641:28:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26543;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4641:28:139";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 26549;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26546;
                                readonly name: "_lastUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26264;
                                readonly src: "4689:12:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 26547;
                                    readonly name: "block";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -4;
                                    readonly src: "4704:5:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_block";
                                        readonly typeString: "block";
                                    };
                                };
                                readonly id: 26548;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4710:9:139";
                                readonly memberName: "timestamp";
                                readonly nodeType: "MemberAccess";
                                readonly src: "4704:15:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "4689:30:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 26550;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4689:30:139";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_accrue";
                readonly nameLocation: "4530:7:139";
                readonly parameters: {
                    readonly id: 26530;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4537:2:139";
                };
                readonly returnParameters: {
                    readonly id: 26531;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4549:0:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 26588;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4732:390:139";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26587;
                    readonly nodeType: "Block";
                    readonly src: "4795:327:139";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 26559;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 26557;
                                readonly name: "_rate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26262;
                                readonly src: "4809:5:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 26558;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4818:1:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "4809:10:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 26563;
                        readonly nodeType: "IfStatement";
                        readonly src: "4805:49:139";
                        readonly trueBody: {
                            readonly id: 26562;
                            readonly nodeType: "Block";
                            readonly src: "4821:33:139";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly hexValue: "30";
                                    readonly id: 26560;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4842:1:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly functionReturnParameters: 26556;
                                readonly id: 26561;
                                readonly nodeType: "Return";
                                readonly src: "4835:8:139";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [26565];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26565;
                            readonly mutability: "mutable";
                            readonly name: "timeElapsed";
                            readonly nameLocation: "4925:11:139";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26587;
                            readonly src: "4917:19:139";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 26564;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4917:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26574;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly hexValue: "333635";
                                readonly id: 26572;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4993:8:139";
                                readonly subdenomination: "days";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                    readonly typeString: "int_const 31536000";
                                };
                                readonly value: "365";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                    readonly typeString: "int_const 31536000";
                                }];
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 26569;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 26566;
                                                readonly name: "block";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -4;
                                                readonly src: "4940:5:139";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_block";
                                                    readonly typeString: "block";
                                                };
                                            };
                                            readonly id: 26567;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4946:9:139";
                                            readonly memberName: "timestamp";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4940:15:139";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 26568;
                                            readonly name: "_lastUpdated";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26264;
                                            readonly src: "4958:12:139";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "4940:30:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 26570;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "4939:32:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26571;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4972:7:139";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18363;
                                readonly src: "4939:40:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26573;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4939:72:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4917:94:139";
                    }, {
                        readonly assignments: readonly [26576];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26576;
                            readonly mutability: "mutable";
                            readonly name: "accrued";
                            readonly nameLocation: "5029:7:139";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26587;
                            readonly src: "5021:15:139";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 26575;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5021:7:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26584;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 26581;
                                    readonly name: "timeElapsed";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26565;
                                    readonly src: "5078:11:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 26579;
                                        readonly name: "_rate";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26262;
                                        readonly src: "5064:5:139";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 26580;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5070:7:139";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18345;
                                    readonly src: "5064:13:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 26582;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5064:26:139";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 26577;
                                    readonly name: "totalPooledEther";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26266;
                                    readonly src: "5039:16:139";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 26578;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5056:7:139";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18345;
                                readonly src: "5039:24:139";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 26583;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5039:52:139";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5021:70:139";
                    }, {
                        readonly expression: {
                            readonly id: 26585;
                            readonly name: "accrued";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26576;
                            readonly src: "5108:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 26556;
                        readonly id: 26586;
                        readonly nodeType: "Return";
                        readonly src: "5101:14:139";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getAccruedInterest";
                readonly nameLocation: "4741:19:139";
                readonly parameters: {
                    readonly id: 26553;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4760:2:139";
                };
                readonly returnParameters: {
                    readonly id: 26556;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26555;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26588;
                        readonly src: "4786:7:139";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26554;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4786:7:139";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4785:9:139";
                };
                readonly scope: 26589;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 26254;
                    readonly name: "MultiRolesAuthority";
                    readonly nameLocations: readonly ["930:19:139"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 72151;
                    readonly src: "930:19:139";
                };
                readonly id: 26255;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "930:19:139";
            }, {
                readonly baseName: {
                    readonly id: 26256;
                    readonly name: "ERC20Mintable";
                    readonly nameLocations: readonly ["951:13:139"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 23602;
                    readonly src: "951:13:139";
                };
                readonly id: 26257;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "951:13:139";
            }];
            readonly canonicalName: "MockLido";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 26253;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "380:529:139";
                readonly text: "@author DELV\n @title MockLido\n @notice This mock yield source will accrue interest at a specified rate\n         Every stateful interaction will accrue interest, so the interest\n         accrual will approximate continuous compounding as the contract\n         is called more frequently.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [26589, 23602, 72151, 71846, 71833, 72539];
            readonly name: "MockLido";
            readonly nameLocation: "918:8:139";
            readonly scope: 26590;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [71683, 71690, 71864, 71870, 71878, 71885, 72162, 72170];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 139;
};
//# sourceMappingURL=MockLido.d.ts.map