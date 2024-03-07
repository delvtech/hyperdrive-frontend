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
        readonly object: "0x6101006040523480156200001257600080fd5b5060405162001de338038062001de3833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161186c620005776000396000818161037901528181610882015281816108e801528181610c270152610c890152600061085e01526000610829015260006102b9015261186c6000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b146104c7578063ea7ca276146104fd578063ed0d0efb14610534578063f2fde38b1461055457600080fd5b8063bf7e214f1461044d578063c53a398514610460578063d505accf14610489578063dd62ed3e1461049c57600080fd5b80639dc29fac116100de5780639dc29fac14610401578063a0712d6814610414578063a9059cbb14610427578063b70096131461043a57600080fd5b80637a9e5e4b1461039b5780637ecebe00146103ae5780638da5cb5b146103ce57806395d89b41146103f957600080fd5b80633644e5151161018757806367aff4841161015657806367aff4841461032e57806370a0823114610341578063728b952b146103615780637a8c63b51461037457600080fd5b80633644e515146102ed57806340c10f19146102f557806342966c68146103085780634b5159da1461031b57600080fd5b80630ea9b75b116101c35780630ea9b75b1461028357806318160ddd1461029857806323b872dd146102a1578063313ce567146102b457600080fd5b806306a36aee146101f557806306fdde0314610228578063095ea7b31461023d5780630bade8a414610260575b600080fd5b610215610203366004611324565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610230610567565b60405161021f9190611341565b61025061024b36600461138f565b6105f5565b604051901515815260200161021f565b61025061026e3660046113d8565b600a6020526000908152604090205460ff1681565b610296610291366004611412565b610662565b005b61021560025481565b6102506102af366004611459565b610743565b6102db7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161021f565b610215610825565b61029661030336600461138f565b610880565b61029661031636600461149a565b6108e6565b6102966103293660046114b3565b61094b565b61029661033c3660046114ea565b6109dd565b61021561034f366004611324565b60036020526000908152604090205481565b61029661036f366004611518565b610aa5565b6102507f000000000000000000000000000000000000000000000000000000000000000081565b6102966103a9366004611324565b610b2e565b6102156103bc366004611324565b60056020526000908152604090205481565b6006546103e1906001600160a01b031681565b6040516001600160a01b03909116815260200161021f565b610230610c18565b61029661040f36600461138f565b610c25565b61029661042236600461149a565b610c87565b61025061043536600461138f565b610ce9565b610250610448366004611546565b610d4f565b6007546103e1906001600160a01b031681565b6103e161046e366004611324565b6008602052600090815260409020546001600160a01b031681565b61029661049736600461158d565b610e4d565b6102156104aa366004611518565b600460209081526000928352604080842090915290825290205481565b6102506104d53660046115fb565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61025061050b36600461162e565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102156105423660046113d8565b600b6020526000908152604090205481565b610296610562366004611324565b611091565b600080546105749061165a565b80601f01602080910402602001604051908101604052809291908181526020018280546105a09061165a565b80156105ed5780601f106105c2576101008083540402835291602001916105ed565b820191906000526020600020905b8154815290600101906020018083116105d057829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106509086815260200190565b60405180910390a35060015b92915050565b610678336000356001600160e01b03191661110f565b61069d5760405162461bcd60e51b815260040161069490611694565b60405180910390fd5b80156106cd576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106f4565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610736911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461079f5761077a83826116d0565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906107c79084906116d0565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611817833981519152906108109087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461085b576108566111b9565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108d8576108bc336000356001600160e01b03191661110f565b6108d85760405162461bcd60e51b8152600401610694906116e3565b6108e28282611253565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561093e57610922336000356001600160e01b03191661110f565b61093e5760405162461bcd60e51b8152600401610694906116e3565b61094833826112ad565b50565b610961336000356001600160e01b03191661110f565b61097d5760405162461bcd60e51b815260040161069490611694565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109f3336000356001600160e01b03191661110f565b610a0f5760405162461bcd60e51b815260040161069490611694565b8015610a3e576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a64565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610736911515815260200190565b610abb336000356001600160e01b03191661110f565b610ad75760405162461bcd60e51b815260040161069490611694565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610bc3575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b8290339030906001600160e01b0319600035169060040161171a565b602060405180830381865afa158015610b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc39190611747565b610bcc57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600180546105749061165a565b7f000000000000000000000000000000000000000000000000000000000000000015610c7d57610c61336000356001600160e01b03191661110f565b610c7d5760405162461bcd60e51b8152600401610694906116e3565b6108e282826112ad565b7f000000000000000000000000000000000000000000000000000000000000000015610cdf57610cc3336000356001600160e01b03191661110f565b610cdf5760405162461bcd60e51b8152600401610694906116e3565b6109483382611253565b33600090815260036020526040812080548391908390610d0a9084906116d0565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611817833981519152906106509086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610deb5760405163b700961360e01b81526001600160a01b0382169063b700961390610da29088908890889060040161171a565b602060405180830381865afa158015610dbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de39190611747565b91505061081e565b6001600160e01b031983166000908152600a602052604090205460ff1680610e4457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e9d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610694565b60006001610ea9610825565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610fb5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610feb5750876001600160a01b0316816001600160a01b0316145b6110285760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610694565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6110a7336000356001600160e01b03191661110f565b6110c35760405162461bcd60e51b815260040161069490611694565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611199575060405163b700961360e01b81526001600160a01b0382169063b7009613906111589087903090889060040161171a565b602060405180830381865afa158015611175573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111999190611747565b806111b157506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111eb9190611764565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546112659190611803565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061181783398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112d59084906116d0565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611817833981519152906020016112a1565b6001600160a01b038116811461094857600080fd5b60006020828403121561133657600080fd5b813561081e8161130f565b600060208083528351808285015260005b8181101561136e57858101830151858201604001528201611352565b506000604082860101526040601f19601f8301168501019250505092915050565b600080604083850312156113a257600080fd5b82356113ad8161130f565b946020939093013593505050565b80356001600160e01b0319811681146113d357600080fd5b919050565b6000602082840312156113ea57600080fd5b61081e826113bb565b803560ff811681146113d357600080fd5b801515811461094857600080fd5b60008060006060848603121561142757600080fd5b611430846113f3565b925061143e602085016113bb565b9150604084013561144e81611404565b809150509250925092565b60008060006060848603121561146e57600080fd5b83356114798161130f565b925060208401356114898161130f565b929592945050506040919091013590565b6000602082840312156114ac57600080fd5b5035919050565b600080604083850312156114c657600080fd5b6114cf836113bb565b915060208301356114df81611404565b809150509250929050565b6000806000606084860312156114ff57600080fd5b833561150a8161130f565b925061143e602085016113f3565b6000806040838503121561152b57600080fd5b82356115368161130f565b915060208301356114df8161130f565b60008060006060848603121561155b57600080fd5b83356115668161130f565b925060208401356115768161130f565b9150611584604085016113bb565b90509250925092565b600080600080600080600060e0888a0312156115a857600080fd5b87356115b38161130f565b965060208801356115c38161130f565b955060408801359450606088013593506115df608089016113f3565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561160e57600080fd5b611617836113f3565b9150611625602084016113bb565b90509250929050565b6000806040838503121561164157600080fd5b823561164c8161130f565b9150611625602084016113f3565b600181811c9082168061166e57607f821691505b60208210810361168e57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561065c5761065c6116ba565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561175957600080fd5b815161081e81611404565b600080835481600182811c91508083168061178057607f831692505b6020808410820361179f57634e487b7160e01b86526022600452602486fd5b8180156117b357600181146117c8576117f5565b60ff19861689528415158502890196506117f5565b60008a81526020902060005b868110156117ed5781548b8201529085019083016117d4565b505084890196505b509498975050505050505050565b8082018082111561065c5761065c6116ba56feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220a2d1f6f46fb24b25345fdf1acc534a64ef0e33dc4229779e8febdfaf662c1ed564736f6c63430008140033";
        readonly sourceMap: "254:1229:81:-:0;;;359:323;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;581:5;614:4;581:5;614:4;529;535:6;543:8;2094:4:124;:12;529:4:81;2094::124;:12;:::i;:::-;-1:-1:-1;2116:6:124;:16;2125:7;2116:6;:16;:::i;:::-;-1:-1:-1;2142:20:124;;;;;2192:13;2173:32;;2242:24;:22;:24::i;:::-;2215:51;;-1:-1:-1;;682:5:122;:14;;-1:-1:-1;;;;;682:14:122;;;-1:-1:-1;;;;;;682:14:122;;;;;;;;706:9;:22;;;;;;;;;;;;744:40;;682:14;;-1:-1:-1;765:10:122;;744:40;;682:5;;744:40;799;;-1:-1:-1;;;;;799:40:122;;;816:10;;799:40;;;;;-1:-1:-1;;;;637:38:81::2;;;::::0;-1:-1:-1;254:1229:81;;-1:-1:-1;;;254:1229:81;5510:446:124;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;5830:25:182;;;;5871:18;;5864:34;;;;5833:14:124;5914:18:182;;;5907:34;5869:13:124;5957:18:182;;;5950:34;5912:4:124;6000:19:182;;;5993:61;5802:19;;5640:295:124;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;14:127:182:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:840;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:182;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:182;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;730:3;725:2;720;712:6;708:15;704:24;701:33;698:53;;;747:1;744;737:12;698:53;769:1;760:10;;779:133;793:2;790:1;787:9;779:133;;;881:14;;;877:23;;871:30;850:14;;;846:23;;839:63;804:10;;;;779:133;;;954:1;932:15;;;928:24;;;921:35;;;;936:6;146:840;-1:-1:-1;;;;146:840:182:o;991:164::-;1067:13;;1116;;1109:21;1099:32;;1089:60;;1145:1;1142;1135:12;1089:60;991:164;;;:::o;1160:968::-;1281:6;1289;1297;1305;1313;1366:3;1354:9;1345:7;1341:23;1337:33;1334:53;;;1383:1;1380;1373:12;1334:53;1410:16;;-1:-1:-1;;;;;1475:14:182;;;1472:34;;;1502:1;1499;1492:12;1472:34;1525:61;1578:7;1569:6;1558:9;1554:22;1525:61;:::i;:::-;1515:71;;1632:2;1621:9;1617:18;1611:25;1595:41;;1661:2;1651:8;1648:16;1645:36;;;1677:1;1674;1667:12;1645:36;;1700:63;1755:7;1744:8;1733:9;1729:24;1700:63;:::i;:::-;1690:73;;;1806:2;1795:9;1791:18;1785:25;1850:4;1843:5;1839:16;1832:5;1829:27;1819:55;;1870:1;1867;1860:12;1819:55;1943:2;1928:18;;1922:25;1893:5;;-1:-1:-1;;;;;;1978:33:182;;1966:46;;1956:74;;2026:1;2023;2016:12;1956:74;2049:7;-1:-1:-1;2075:47:182;2117:3;2102:19;;2075:47;:::i;:::-;2065:57;;1160:968;;;;;;;;:::o;2133:380::-;2212:1;2208:12;;;;2255;;;2276:61;;2330:4;2322:6;2318:17;2308:27;;2276:61;2383:2;2375:6;2372:14;2352:18;2349:38;2346:161;;2429:10;2424:3;2420:20;2417:1;2410:31;2464:4;2461:1;2454:15;2492:4;2489:1;2482:15;2346:161;;2133:380;;;:::o;2644:545::-;2746:2;2741:3;2738:11;2735:448;;;2782:1;2807:5;2803:2;2796:17;2852:4;2848:2;2838:19;2922:2;2910:10;2906:19;2903:1;2899:27;2893:4;2889:38;2958:4;2946:10;2943:20;2940:47;;;-1:-1:-1;2981:4:182;2940:47;3036:2;3031:3;3027:12;3024:1;3020:20;3014:4;3010:31;3000:41;;3091:82;3109:2;3102:5;3099:13;3091:82;;;3154:17;;;3135:1;3124:13;3091:82;;;3095:3;;;2735:448;2644:545;;;:::o;3365:1352::-;3485:10;;-1:-1:-1;;;;;3507:30:182;;3504:56;;;3540:18;;:::i;:::-;3569:97;3659:6;3619:38;3651:4;3645:11;3619:38;:::i;:::-;3613:4;3569:97;:::i;:::-;3721:4;;3785:2;3774:14;;3802:1;3797:663;;;;4504:1;4521:6;4518:89;;;-1:-1:-1;4573:19:182;;;4567:26;4518:89;-1:-1:-1;;3322:1:182;3318:11;;;3314:24;3310:29;3300:40;3346:1;3342:11;;;3297:57;4620:81;;3767:944;;3797:663;2591:1;2584:14;;;2628:4;2615:18;;-1:-1:-1;;3833:20:182;;;3951:236;3965:7;3962:1;3959:14;3951:236;;;4054:19;;;4048:26;4033:42;;4146:27;;;;4114:1;4102:14;;;;3981:19;;3951:236;;;3955:3;4215:6;4206:7;4203:19;4200:201;;;4276:19;;;4270:26;-1:-1:-1;;4359:1:182;4355:14;;;4371:3;4351:24;4347:37;4343:42;4328:58;4313:74;;4200:201;-1:-1:-1;;;;;4447:1:182;4431:14;;;4427:22;4414:36;;-1:-1:-1;3365:1352:182:o;4722:844::-;4852:3;4881:1;4914:6;4908:13;4944:36;4970:9;4944:36;:::i;:::-;4999:1;5016:18;;;5043:133;;;;5190:1;5185:356;;;;5009:532;;5043:133;-1:-1:-1;;5076:24:182;;5064:37;;5149:14;;5142:22;5130:35;;5121:45;;;-1:-1:-1;5043:133:182;;5185:356;5216:6;5213:1;5206:17;5246:4;5291:2;5288:1;5278:16;5316:1;5330:165;5344:6;5341:1;5338:13;5330:165;;;5422:14;;5409:11;;;5402:35;5465:16;;;;5359:10;;5330:165;;;5334:3;;;5524:6;5519:3;5515:16;5508:23;;5009:532;-1:-1:-1;5557:3:182;;4722:844;-1:-1:-1;;;;;;4722:844:182:o;5571:489::-;254:1229:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50600436106101f05760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b146104c7578063ea7ca276146104fd578063ed0d0efb14610534578063f2fde38b1461055457600080fd5b8063bf7e214f1461044d578063c53a398514610460578063d505accf14610489578063dd62ed3e1461049c57600080fd5b80639dc29fac116100de5780639dc29fac14610401578063a0712d6814610414578063a9059cbb14610427578063b70096131461043a57600080fd5b80637a9e5e4b1461039b5780637ecebe00146103ae5780638da5cb5b146103ce57806395d89b41146103f957600080fd5b80633644e5151161018757806367aff4841161015657806367aff4841461032e57806370a0823114610341578063728b952b146103615780637a8c63b51461037457600080fd5b80633644e515146102ed57806340c10f19146102f557806342966c68146103085780634b5159da1461031b57600080fd5b80630ea9b75b116101c35780630ea9b75b1461028357806318160ddd1461029857806323b872dd146102a1578063313ce567146102b457600080fd5b806306a36aee146101f557806306fdde0314610228578063095ea7b31461023d5780630bade8a414610260575b600080fd5b610215610203366004611324565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610230610567565b60405161021f9190611341565b61025061024b36600461138f565b6105f5565b604051901515815260200161021f565b61025061026e3660046113d8565b600a6020526000908152604090205460ff1681565b610296610291366004611412565b610662565b005b61021560025481565b6102506102af366004611459565b610743565b6102db7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161021f565b610215610825565b61029661030336600461138f565b610880565b61029661031636600461149a565b6108e6565b6102966103293660046114b3565b61094b565b61029661033c3660046114ea565b6109dd565b61021561034f366004611324565b60036020526000908152604090205481565b61029661036f366004611518565b610aa5565b6102507f000000000000000000000000000000000000000000000000000000000000000081565b6102966103a9366004611324565b610b2e565b6102156103bc366004611324565b60056020526000908152604090205481565b6006546103e1906001600160a01b031681565b6040516001600160a01b03909116815260200161021f565b610230610c18565b61029661040f36600461138f565b610c25565b61029661042236600461149a565b610c87565b61025061043536600461138f565b610ce9565b610250610448366004611546565b610d4f565b6007546103e1906001600160a01b031681565b6103e161046e366004611324565b6008602052600090815260409020546001600160a01b031681565b61029661049736600461158d565b610e4d565b6102156104aa366004611518565b600460209081526000928352604080842090915290825290205481565b6102506104d53660046115fb565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61025061050b36600461162e565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102156105423660046113d8565b600b6020526000908152604090205481565b610296610562366004611324565b611091565b600080546105749061165a565b80601f01602080910402602001604051908101604052809291908181526020018280546105a09061165a565b80156105ed5780601f106105c2576101008083540402835291602001916105ed565b820191906000526020600020905b8154815290600101906020018083116105d057829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106509086815260200190565b60405180910390a35060015b92915050565b610678336000356001600160e01b03191661110f565b61069d5760405162461bcd60e51b815260040161069490611694565b60405180910390fd5b80156106cd576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106f4565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610736911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461079f5761077a83826116d0565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906107c79084906116d0565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611817833981519152906108109087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461085b576108566111b9565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108d8576108bc336000356001600160e01b03191661110f565b6108d85760405162461bcd60e51b8152600401610694906116e3565b6108e28282611253565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561093e57610922336000356001600160e01b03191661110f565b61093e5760405162461bcd60e51b8152600401610694906116e3565b61094833826112ad565b50565b610961336000356001600160e01b03191661110f565b61097d5760405162461bcd60e51b815260040161069490611694565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109f3336000356001600160e01b03191661110f565b610a0f5760405162461bcd60e51b815260040161069490611694565b8015610a3e576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a64565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610736911515815260200190565b610abb336000356001600160e01b03191661110f565b610ad75760405162461bcd60e51b815260040161069490611694565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610bc3575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b8290339030906001600160e01b0319600035169060040161171a565b602060405180830381865afa158015610b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc39190611747565b610bcc57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b600180546105749061165a565b7f000000000000000000000000000000000000000000000000000000000000000015610c7d57610c61336000356001600160e01b03191661110f565b610c7d5760405162461bcd60e51b8152600401610694906116e3565b6108e282826112ad565b7f000000000000000000000000000000000000000000000000000000000000000015610cdf57610cc3336000356001600160e01b03191661110f565b610cdf5760405162461bcd60e51b8152600401610694906116e3565b6109483382611253565b33600090815260036020526040812080548391908390610d0a9084906116d0565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611817833981519152906106509086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610deb5760405163b700961360e01b81526001600160a01b0382169063b700961390610da29088908890889060040161171a565b602060405180830381865afa158015610dbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de39190611747565b91505061081e565b6001600160e01b031983166000908152600a602052604090205460ff1680610e4457506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e9d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610694565b60006001610ea9610825565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610fb5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610feb5750876001600160a01b0316816001600160a01b0316145b6110285760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610694565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6110a7336000356001600160e01b03191661110f565b6110c35760405162461bcd60e51b815260040161069490611694565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611199575060405163b700961360e01b81526001600160a01b0382169063b7009613906111589087903090889060040161171a565b602060405180830381865afa158015611175573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111999190611747565b806111b157506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111eb9190611764565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546112659190611803565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061181783398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112d59084906116d0565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611817833981519152906020016112a1565b6001600160a01b038116811461094857600080fd5b60006020828403121561133657600080fd5b813561081e8161130f565b600060208083528351808285015260005b8181101561136e57858101830151858201604001528201611352565b506000604082860101526040601f19601f8301168501019250505092915050565b600080604083850312156113a257600080fd5b82356113ad8161130f565b946020939093013593505050565b80356001600160e01b0319811681146113d357600080fd5b919050565b6000602082840312156113ea57600080fd5b61081e826113bb565b803560ff811681146113d357600080fd5b801515811461094857600080fd5b60008060006060848603121561142757600080fd5b611430846113f3565b925061143e602085016113bb565b9150604084013561144e81611404565b809150509250925092565b60008060006060848603121561146e57600080fd5b83356114798161130f565b925060208401356114898161130f565b929592945050506040919091013590565b6000602082840312156114ac57600080fd5b5035919050565b600080604083850312156114c657600080fd5b6114cf836113bb565b915060208301356114df81611404565b809150509250929050565b6000806000606084860312156114ff57600080fd5b833561150a8161130f565b925061143e602085016113f3565b6000806040838503121561152b57600080fd5b82356115368161130f565b915060208301356114df8161130f565b60008060006060848603121561155b57600080fd5b83356115668161130f565b925060208401356115768161130f565b9150611584604085016113bb565b90509250925092565b600080600080600080600060e0888a0312156115a857600080fd5b87356115b38161130f565b965060208801356115c38161130f565b955060408801359450606088013593506115df608089016113f3565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561160e57600080fd5b611617836113f3565b9150611625602084016113bb565b90509250929050565b6000806040838503121561164157600080fd5b823561164c8161130f565b9150611625602084016113f3565b600181811c9082168061166e57607f821691505b60208210810361168e57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561065c5761065c6116ba565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561175957600080fd5b815161081e81611404565b600080835481600182811c91508083168061178057607f831692505b6020808410820361179f57634e487b7160e01b86526022600452602486fd5b8180156117b357600181146117c8576117f5565b60ff19861689528415158502890196506117f5565b60008a81526020902060005b868110156117ed5781548b8201529085019083016117d4565b505084890196505b509498975050505050505050565b8082018082111561065c5761065c6116ba56feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220a2d1f6f46fb24b25345fdf1acc534a64ef0e33dc4229779e8febdfaf662c1ed564736f6c63430008140033";
        readonly sourceMap: "254:1229:81:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1622:47:123;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;548:25:182;;;536:2;521:18;1622:47:123;;;;;;;;1031:18:124;;;:::i;:::-;;;;;;;:::i;2461:211::-;;;;;;:::i;:::-;;:::i;:::-;;;1622:14:182;;1615:22;1597:41;;1585:2;1570:18;2461:211:124;1457:187:182;1676:49:123;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4390:396;;;;;;:::i;:::-;;:::i;:::-;;1304:26:124;;;;;;3057:592;;;;;;:::i;:::-;;:::i;1083:31::-;;;;;;;;3503:4:182;3491:17;;;3473:36;;3461:2;3446:18;1083:31:124;3331:184:182;5327:177:124;;;:::i;1048:155:81:-;;;;;;:::i;:::-;;:::i;1209:111::-;;;;;;:::i;:::-;;:::i;3448:210:123:-;;;;;;:::i;:::-;;:::i;3853:337::-;;;;;;:::i;:::-;;:::i;1337:44:124:-;;;;;;:::i;:::-;;;;;;;;;;;;;;3006:241:123;;;;;;:::i;:::-;;:::i;313:39:81:-;;;;;1523:434:122;;;;;;:::i;:::-;;:::i;1751:41:124:-;;;;;;:::i;:::-;;;;;;;;;;;;;;562:20:122;;;;;-1:-1:-1;;;;;562:20:122;;;;;;-1:-1:-1;;;;;5327:32:182;;;5309:51;;5297:2;5282:18;562:20:122;5163:203:182;1056:20:124;;;:::i;1326:155:81:-;;;;;;:::i;:::-;;:::i;931:111::-;;;;;;:::i;:::-;;:::i;2678:373:124:-;;;;;;:::i;:::-;;:::i;2336:465:123:-;;;;;;:::i;:::-;;:::i;589:26:122:-;;;;;-1:-1:-1;;;;;589:26:122;;;1369:61:123;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:123;;;3838:1483:124;;;;;;:::i;:::-;;:::i;1388:64::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1958:186:123;;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:123;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:123;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;:::i;:::-;;;;;;;;;;;;;;1963:164:122;;;;;;:::i;:::-;;:::i;1031:18:124:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2461:211::-;2561:10;2535:4;2551:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2551:30:124;;;;;;;;;;:39;;;2606:37;2535:4;;2551:30;;2606:37;;;;2584:6;548:25:182;;536:2;521:18;;402:177;2606:37:124;;;;;;;;-1:-1:-1;2661:4:124;2461:211;;;;;:::o;4390:396:123:-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;;;;;;;;;4535:7:123::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:123;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:123;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:123::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1622:14:182::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;4730:49:123::1;;;;;;;;4390:396:::0;;;:::o;3057:592:124:-;-1:-1:-1;;;;;3209:15:124;;3175:4;3209:15;;;:9;:15;;;;;;;;3225:10;3209:27;;;;;;;;-1:-1:-1;;3287:28:124;;3283:80;;3347:16;3357:6;3347:7;:16;:::i;:::-;-1:-1:-1;;;;;3317:15:124;;;;;;:9;:15;;;;;;;;3333:10;3317:27;;;;;;;:46;3283:80;-1:-1:-1;;;;;3374:15:124;;;;;;:9;:15;;;;;:25;;3393:6;;3374:15;:25;;3393:6;;3374:25;:::i;:::-;;;;-1:-1:-1;;;;;;;3545:13:124;;;;;;;:9;:13;;;;;;;:23;;;;;;3594:26;3545:13;;3594:26;;;-1:-1:-1;;;;;;;;;;;3594:26:124;;;3562:6;548:25:182;;536:2;521:18;;402:177;3594:26:124;;;;;;;;3638:4;3631:11;;;3057:592;;;;;;:::o;5327:177::-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;:::-;5403:94;;5327:177;:::o;5410:87::-;-1:-1:-1;5446:24:124;;5327:177::o;1048:155:81:-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:81;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:81;;;;;;;:::i;:::-;1170:26:::1;1176:11;1189:6;1170:5;:26::i;:::-;1048:155:::0;;:::o;1209:111::-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:81;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:81;;;;;;;:::i;:::-;1288:25:::1;1294:10;1306:6;1288:5;:25::i;:::-;1209:111:::0;:::o;3448:210:123:-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:123;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:123::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1597:41:182;;;3606:45:123::1;::::0;1570:18:182;3606:45:123::1;;;;;;;3448:210:::0;;:::o;3853:337::-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;3986:7:123::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:123;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:123;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:123::1;;4175:7;4147:36;;;;1622:14:182::0;1615:22;1597:41;;1585:2;1570:18;;1457:187;3006:241:123;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:123;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:123::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;1523:434:122:-;1794:5;;-1:-1:-1;;;;;1794:5:122;1780:10;:19;;:76;;-1:-1:-1;1803:9:122;;:53;;-1:-1:-1;;;1803:53:122;;-1:-1:-1;;;;;1803:9:122;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:122;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:122;-1:-1:-1;;;;;1868:24:122;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:122;1523:434;:::o;1056:20:124:-;;;;;;;:::i;1326:155:81:-;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:81;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:81;;;;;;;:::i;:::-;1448:26:::1;1454:11;1467:6;1448:5;:26::i;931:111::-:0;743:17;739:169;;;801:33;814:10;826:7;;-1:-1:-1;;;;;;826:7:81;801:12;:33::i;:::-;776:121;;;;-1:-1:-1;;;776:121:81;;;;;;;:::i;:::-;1010:25:::1;1016:10;1028:6;1010:5;:25::i;2678:373:124:-:0;2774:10;2748:4;2764:21;;;:9;:21;;;;;:31;;2789:6;;2764:21;2748:4;;2764:31;;2789:6;;2764:31;:::i;:::-;;;;-1:-1:-1;;;;;;;2941:13:124;;;;;;:9;:13;;;;;;;:23;;;;;;2990:32;2999:10;;-1:-1:-1;;;;;;;;;;;2990:32:124;;;2958:6;548:25:182;;536:2;521:18;;402:177;2336:465:123;-1:-1:-1;;;;;2515:32:123;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:123;;-1:-1:-1;;;;;2609:23:123;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:123;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:123;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:123;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;2336:465;-1:-1:-1;;;;;2336:465:123:o;3838:1483:124:-;4057:15;4045:8;:27;;4037:63;;;;-1:-1:-1;;;4037:63:124;;9982:2:182;4037:63:124;;;9964:21:182;10021:2;10001:18;;;9994:30;10060:25;10040:18;;;10033:53;10103:18;;4037:63:124;9780:347:182;4037:63:124;4265:24;4292:805;4428:18;:16;:18::i;:::-;-1:-1:-1;;;;;4873:13:124;;;;;;;:6;:13;;;;;;;;;:15;;;;;;;;4511:449;;4555:165;4511:449;;;10419:25:182;10498:18;;;10491:43;;;;10570:15;;;10550:18;;;10543:43;10602:18;;;10595:34;;;10645:19;;;10638:35;;;;10689:19;;;;10682:35;;;4511:449:124;;;;;;;;;;10391:19:182;;;4511:449:124;;;4472:514;;;;;;;;-1:-1:-1;;;4350:658:124;;;10986:27:182;11029:11;;;11022:27;;;;11065:12;;;11058:28;;;;11102:12;;4350:658:124;;;-1:-1:-1;;4350:658:124;;;;;;;;;4319:707;;4350:658;4319:707;;;;4292:805;;;;;;;;;11352:25:182;11425:4;11413:17;;11393:18;;;11386:45;11447:18;;;11440:34;;;11490:18;;;11483:34;;;11324:19;;4292:805:124;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4292:805:124;;-1:-1:-1;;4292:805:124;;;-1:-1:-1;;;;;;;5120:30:124;;;;;;:59;;;5174:5;-1:-1:-1;;;;;5154:25:124;:16;-1:-1:-1;;;;;5154:25:124;;5120:59;5112:86;;;;-1:-1:-1;;;5112:86:124;;11730:2:182;5112:86:124;;;11712:21:182;11769:2;11749:18;;;11742:30;-1:-1:-1;;;11788:18:182;;;11781:44;11842:18;;5112:86:124;11528:338:182;5112:86:124;-1:-1:-1;;;;;5213:27:124;;;;;;;:9;:27;;;;;;;;:36;;;;;;;;;;;;;:44;;;5283:31;548:25:182;;;5213:36:124;;5283:31;;;;;521:18:182;5283:31:124;;;;;;;3838:1483;;;;;;;:::o;1963:164:122:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:122::1;-1:-1:-1::0;;;;;2046:16:122;::::1;::::0;;::::1;::::0;;;2078:42:::1;::::0;2099:10:::1;::::0;2078:42:::1;::::0;-1:-1:-1;;2078:42:122::1;1963:164:::0;:::o;977:540::-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:122;1415:27;;;;;:77;;-1:-1:-1;1446:46:122;;-1:-1:-1;;;1446:46:122;;-1:-1:-1;;;;;1446:12:122;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:122;;-1:-1:-1;;;;;1497:13:122;;;1505:5;;1497:13;1414:96;1407:103;977:540;-1:-1:-1;;;;977:540:122:o;5510:446:124:-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;13397:25:182;;;;13438:18;;13431:34;;;;5833:14:124;13481:18:182;;;13474:34;5869:13:124;13524:18:182;;;13517:34;5912:4:124;13567:19:182;;;13560:61;13369:19;;5640:295:124;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;6150:325::-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;6387:13:124;;;;;;:9;:13;;;;;;;;:23;;;;;;6436:32;548:25:182;;;-1:-1:-1;;;;;;;;;;;6436:32:124;521:18:182;6436:32:124;;;;;;;;6150:325;;:::o;6481:328::-;-1:-1:-1;;;;;6553:15:124;;;;;;:9;:15;;;;;:25;;6572:6;;6553:15;:25;;6572:6;;6553:25;:::i;:::-;;;;-1:-1:-1;;6721:11:124;:21;;;;;;;6768:34;;548:25:182;;;-1:-1:-1;;;;;;;6768:34:124;;;-1:-1:-1;;;;;;;;;;;6768:34:124;536:2:182;521:18;6768:34:124;402:177:182;14:131;-1:-1:-1;;;;;89:31:182;;79:42;;69:70;;135:1;132;125:12;150:247;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;584:548::-;696:4;725:2;754;743:9;736:21;786:6;780:13;829:6;824:2;813:9;809:18;802:34;854:1;864:140;878:6;875:1;872:13;864:140;;;973:14;;;969:23;;963:30;939:17;;;958:2;935:26;928:66;893:10;;864:140;;;868:3;1053:1;1048:2;1039:6;1028:9;1024:22;1020:31;1013:42;1123:2;1116;1112:7;1107:2;1099:6;1095:15;1091:29;1080:9;1076:45;1072:54;1064:62;;;;584:548;;;;:::o;1137:315::-;1205:6;1213;1266:2;1254:9;1245:7;1241:23;1237:32;1234:52;;;1282:1;1279;1272:12;1234:52;1321:9;1308:23;1340:31;1365:5;1340:31;:::i;:::-;1390:5;1442:2;1427:18;;;;1414:32;;-1:-1:-1;;;1137:315:182:o;1649:173::-;1716:20;;-1:-1:-1;;;;;;1765:32:182;;1755:43;;1745:71;;1812:1;1809;1802:12;1745:71;1649:173;;;:::o;1827:184::-;1885:6;1938:2;1926:9;1917:7;1913:23;1909:32;1906:52;;;1954:1;1951;1944:12;1906:52;1977:28;1995:9;1977:28;:::i;2016:156::-;2082:20;;2142:4;2131:16;;2121:27;;2111:55;;2162:1;2159;2152:12;2177:118;2263:5;2256:13;2249:21;2242:5;2239:32;2229:60;;2285:1;2282;2275:12;2300:383;2371:6;2379;2387;2440:2;2428:9;2419:7;2415:23;2411:32;2408:52;;;2456:1;2453;2446:12;2408:52;2479:27;2496:9;2479:27;:::i;:::-;2469:37;;2525;2558:2;2547:9;2543:18;2525:37;:::i;:::-;2515:47;;2612:2;2601:9;2597:18;2584:32;2625:28;2647:5;2625:28;:::i;:::-;2672:5;2662:15;;;2300:383;;;;;:::o;2870:456::-;2947:6;2955;2963;3016:2;3004:9;2995:7;2991:23;2987:32;2984:52;;;3032:1;3029;3022:12;2984:52;3071:9;3058:23;3090:31;3115:5;3090:31;:::i;:::-;3140:5;-1:-1:-1;3197:2:182;3182:18;;3169:32;3210:33;3169:32;3210:33;:::i;:::-;2870:456;;3262:7;;-1:-1:-1;;;3316:2:182;3301:18;;;;3288:32;;2870:456::o;3520:180::-;3579:6;3632:2;3620:9;3611:7;3607:23;3603:32;3600:52;;;3648:1;3645;3638:12;3600:52;-1:-1:-1;3671:23:182;;3520:180;-1:-1:-1;3520:180:182:o;3705:313::-;3769:6;3777;3830:2;3818:9;3809:7;3805:23;3801:32;3798:52;;;3846:1;3843;3836:12;3798:52;3869:28;3887:9;3869:28;:::i;:::-;3859:38;;3947:2;3936:9;3932:18;3919:32;3960:28;3982:5;3960:28;:::i;:::-;4007:5;3997:15;;;3705:313;;;;;:::o;4023:452::-;4095:6;4103;4111;4164:2;4152:9;4143:7;4139:23;4135:32;4132:52;;;4180:1;4177;4170:12;4132:52;4219:9;4206:23;4238:31;4263:5;4238:31;:::i;:::-;4288:5;-1:-1:-1;4312:36:182;4344:2;4329:18;;4312:36;:::i;4480:407::-;4567:6;4575;4628:2;4616:9;4607:7;4603:23;4599:32;4596:52;;;4644:1;4641;4634:12;4596:52;4683:9;4670:23;4702:31;4727:5;4702:31;:::i;:::-;4752:5;-1:-1:-1;4809:2:182;4794:18;;4781:32;4822:33;4781:32;4822:33;:::i;5371:460::-;5447:6;5455;5463;5516:2;5504:9;5495:7;5491:23;5487:32;5484:52;;;5532:1;5529;5522:12;5484:52;5571:9;5558:23;5590:31;5615:5;5590:31;:::i;:::-;5640:5;-1:-1:-1;5697:2:182;5682:18;;5669:32;5710:33;5669:32;5710:33;:::i;:::-;5762:7;-1:-1:-1;5788:37:182;5821:2;5806:18;;5788:37;:::i;:::-;5778:47;;5371:460;;;;;:::o;6063:734::-;6174:6;6182;6190;6198;6206;6214;6222;6275:3;6263:9;6254:7;6250:23;6246:33;6243:53;;;6292:1;6289;6282:12;6243:53;6331:9;6318:23;6350:31;6375:5;6350:31;:::i;:::-;6400:5;-1:-1:-1;6457:2:182;6442:18;;6429:32;6470:33;6429:32;6470:33;:::i;:::-;6522:7;-1:-1:-1;6576:2:182;6561:18;;6548:32;;-1:-1:-1;6627:2:182;6612:18;;6599:32;;-1:-1:-1;6650:37:182;6682:3;6667:19;;6650:37;:::i;:::-;6640:47;;6734:3;6723:9;6719:19;6706:33;6696:43;;6786:3;6775:9;6771:19;6758:33;6748:43;;6063:734;;;;;;;;;;:::o;7195:254::-;7260:6;7268;7321:2;7309:9;7300:7;7296:23;7292:32;7289:52;;;7337:1;7334;7327:12;7289:52;7360:27;7377:9;7360:27;:::i;:::-;7350:37;;7406;7439:2;7428:9;7424:18;7406:37;:::i;:::-;7396:47;;7195:254;;;;;:::o;7454:317::-;7520:6;7528;7581:2;7569:9;7560:7;7556:23;7552:32;7549:52;;;7597:1;7594;7587:12;7549:52;7636:9;7623:23;7655:31;7680:5;7655:31;:::i;:::-;7705:5;-1:-1:-1;7729:36:182;7761:2;7746:18;;7729:36;:::i;7776:380::-;7855:1;7851:12;;;;7898;;;7919:61;;7973:4;7965:6;7961:17;7951:27;;7919:61;8026:2;8018:6;8015:14;7995:18;7992:38;7989:161;;8072:10;8067:3;8063:20;8060:1;8053:31;8107:4;8104:1;8097:15;8135:4;8132:1;8125:15;7989:161;;7776:380;;;:::o;8161:336::-;8363:2;8345:21;;;8402:2;8382:18;;;8375:30;-1:-1:-1;;;8436:2:182;8421:18;;8414:42;8488:2;8473:18;;8161:336::o;8502:127::-;8563:10;8558:3;8554:20;8551:1;8544:31;8594:4;8591:1;8584:15;8618:4;8615:1;8608:15;8634:128;8701:9;;;8722:11;;;8719:37;;;8736:18;;:::i;8767:353::-;8969:2;8951:21;;;9008:2;8988:18;;;8981:30;9047:31;9042:2;9027:18;;9020:59;9111:2;9096:18;;8767:353::o;9125:400::-;-1:-1:-1;;;;;9381:15:182;;;9363:34;;9433:15;;;;9428:2;9413:18;;9406:43;-1:-1:-1;;;;;;9485:33:182;;;9480:2;9465:18;;9458:61;9313:2;9298:18;;9125:400::o;9530:245::-;9597:6;9650:2;9638:9;9629:7;9625:23;9621:32;9618:52;;;9666:1;9663;9656:12;9618:52;9698:9;9692:16;9717:28;9739:5;9717:28;:::i;12000:1133::-;12130:3;12159:1;12192:6;12186:13;12222:3;12244:1;12272:9;12268:2;12264:18;12254:28;;12332:2;12321:9;12317:18;12354;12344:61;;12398:4;12390:6;12386:17;12376:27;;12344:61;12424:2;12472;12464:6;12461:14;12441:18;12438:38;12435:165;;-1:-1:-1;;;12499:33:182;;12555:4;12552:1;12545:15;12585:4;12506:3;12573:17;12435:165;12616:18;12643:133;;;;12790:1;12785:323;;;;12609:499;;12643:133;-1:-1:-1;;12676:24:182;;12664:37;;12749:14;;12742:22;12730:35;;12721:45;;;-1:-1:-1;12643:133:182;;12785:323;11947:1;11940:14;;;11984:4;11971:18;;12883:1;12897:165;12911:6;12908:1;12905:13;12897:165;;;12989:14;;12976:11;;;12969:35;13032:16;;;;12926:10;;12897:165;;;12901:3;;13091:6;13086:3;13082:16;13075:23;;12609:499;-1:-1:-1;13124:3:182;;12000:1133;-1:-1:-1;;;;;;;;12000:1133:182:o;13632:125::-;13697:9;;;13718:10;;;13715:36;;;13731:18;;:::i";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "19130": readonly [{
                readonly start: 889;
                readonly length: 32;
            }, {
                readonly start: 2178;
                readonly length: 32;
            }, {
                readonly start: 2280;
                readonly length: 32;
            }, {
                readonly start: 3111;
                readonly length: 32;
            }, {
                readonly start: 3209;
                readonly length: 32;
            }];
            readonly "67560": readonly [{
                readonly start: 697;
                readonly length: 32;
            }];
            readonly "67574": readonly [{
                readonly start: 2089;
                readonly length: 32;
            }];
            readonly "67576": readonly [{
                readonly start: 2142;
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"decimals\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"admin\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"isCompetitionMode_\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isCompetitionMode\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/ERC20Mintable.sol\":\"ERC20Mintable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d";
                readonly urls: readonly ["bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df", "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"];
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
        readonly id: 19242;
        readonly exportedSymbols: {
            readonly Authority: readonly [67230];
            readonly ERC20: readonly [67923];
            readonly ERC20Mintable: readonly [19241];
            readonly MultiRolesAuthority: readonly [67535];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1445:81";
        readonly nodes: readonly [{
            readonly id: 19118;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:81";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 19120;
            readonly nodeType: "ImportDirective";
            readonly src: "64:50:81";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/auth/Auth.sol";
            readonly file: "solmate/auth/Auth.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19242;
            readonly sourceUnit: 67231;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19119;
                    readonly name: "Authority";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 67230;
                    readonly src: "73:9:81";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19122;
            readonly nodeType: "ImportDirective";
            readonly src: "115:87:81";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol";
            readonly file: "solmate/auth/authorities/MultiRolesAuthority.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19242;
            readonly sourceUnit: 67536;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19121;
                    readonly name: "MultiRolesAuthority";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 67535;
                    readonly src: "124:19:81";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19124;
            readonly nodeType: "ImportDirective";
            readonly src: "203:49:81";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/tokens/ERC20.sol";
            readonly file: "solmate/tokens/ERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19242;
            readonly sourceUnit: 67924;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19123;
                    readonly name: "ERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 67923;
                    readonly src: "212:5:81";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19241;
            readonly nodeType: "ContractDefinition";
            readonly src: "254:1229:81";
            readonly nodes: readonly [{
                readonly id: 19130;
                readonly nodeType: "VariableDeclaration";
                readonly src: "313:39:81";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "7a8c63b5";
                readonly mutability: "immutable";
                readonly name: "isCompetitionMode";
                readonly nameLocation: "335:17:81";
                readonly scope: 19241;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bool";
                    readonly typeString: "bool";
                };
                readonly typeName: {
                    readonly id: 19129;
                    readonly name: "bool";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "313:4:81";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 19165;
                readonly nodeType: "FunctionDefinition";
                readonly src: "359:323:81";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19164;
                    readonly nodeType: "Block";
                    readonly src: "627:55:81";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 19162;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19160;
                                readonly name: "isCompetitionMode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19130;
                                readonly src: "637:17:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 19161;
                                readonly name: "isCompetitionMode_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19140;
                                readonly src: "657:18:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "637:38:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19163;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "637:38:81";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 19143;
                        readonly name: "name";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19132;
                        readonly src: "529:4:81";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string memory";
                        };
                    }, {
                        readonly id: 19144;
                        readonly name: "symbol";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19134;
                        readonly src: "535:6:81";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string memory";
                        };
                    }, {
                        readonly id: 19145;
                        readonly name: "decimals";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19136;
                        readonly src: "543:8:81";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                    }];
                    readonly id: 19146;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 19142;
                        readonly name: "ERC20";
                        readonly nameLocations: readonly ["523:5:81"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 67923;
                        readonly src: "523:5:81";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "523:29:81";
                }, {
                    readonly arguments: readonly [{
                        readonly id: 19148;
                        readonly name: "admin";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19138;
                        readonly src: "581:5:81";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 19154;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "614:4:81";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC20Mintable_$19241";
                                        readonly typeString: "contract ERC20Mintable";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_ERC20Mintable_$19241";
                                        readonly typeString: "contract ERC20Mintable";
                                    }];
                                    readonly id: 19153;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "606:7:81";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 19152;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "606:7:81";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 19155;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "606:13:81";
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
                                readonly id: 19151;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "598:7:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 19150;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "598:7:81";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 19156;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "598:22:81";
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
                            readonly id: 19149;
                            readonly name: "Authority";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 67230;
                            readonly src: "588:9:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_contract$_Authority_$67230_$";
                                readonly typeString: "type(contract Authority)";
                            };
                        };
                        readonly id: 19157;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "588:33:81";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$67230";
                            readonly typeString: "contract Authority";
                        };
                    }];
                    readonly id: 19158;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 19147;
                        readonly name: "MultiRolesAuthority";
                        readonly nameLocations: readonly ["561:19:81"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 67535;
                        readonly src: "561:19:81";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "561:61:81";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 19141;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19132;
                        readonly mutability: "mutable";
                        readonly name: "name";
                        readonly nameLocation: "394:4:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19165;
                        readonly src: "380:18:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 19131;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "380:6:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19134;
                        readonly mutability: "mutable";
                        readonly name: "symbol";
                        readonly nameLocation: "422:6:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19165;
                        readonly src: "408:20:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 19133;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "408:6:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19136;
                        readonly mutability: "mutable";
                        readonly name: "decimals";
                        readonly nameLocation: "444:8:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19165;
                        readonly src: "438:14:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 19135;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "438:5:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19138;
                        readonly mutability: "mutable";
                        readonly name: "admin";
                        readonly nameLocation: "470:5:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19165;
                        readonly src: "462:13:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19137;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "462:7:81";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19140;
                        readonly mutability: "mutable";
                        readonly name: "isCompetitionMode_";
                        readonly nameLocation: "490:18:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19165;
                        readonly src: "485:23:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 19139;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "485:4:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "370:144:81";
                };
                readonly returnParameters: {
                    readonly id: 19159;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "627:0:81";
                };
                readonly scope: 19241;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 19182;
                readonly nodeType: "ModifierDefinition";
                readonly src: "688:237:81";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19181;
                    readonly nodeType: "Block";
                    readonly src: "729:196:81";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 19167;
                            readonly name: "isCompetitionMode";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19130;
                            readonly src: "743:17:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19179;
                        readonly nodeType: "IfStatement";
                        readonly src: "739:169:81";
                        readonly trueBody: {
                            readonly id: 19178;
                            readonly nodeType: "Block";
                            readonly src: "762:146:81";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 19170;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "814:3:81";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 19171;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "818:6:81";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "814:10:81";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly expression: {
                                                readonly id: 19172;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "826:3:81";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 19173;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "830:3:81";
                                            readonly memberName: "sig";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "826:7:81";
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
                                            readonly id: 19169;
                                            readonly name: "isAuthorized";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 67162;
                                            readonly src: "801:12:81";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                                readonly typeString: "function (address,bytes4) view returns (bool)";
                                            };
                                        };
                                        readonly id: 19174;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "801:33:81";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }, {
                                        readonly hexValue: "45524332304d696e7461626c653a206e6f7420617574686f72697a6564";
                                        readonly id: 19175;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "852:31:81";
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
                                        readonly id: 19168;
                                        readonly name: "require";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [-18, -18];
                                        readonly referencedDeclaration: -18;
                                        readonly src: "776:7:81";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                            readonly typeString: "function (bool,string memory) pure";
                                        };
                                    };
                                    readonly id: 19176;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "776:121:81";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 19177;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "776:121:81";
                            }];
                        };
                    }, {
                        readonly id: 19180;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "917:1:81";
                    }];
                };
                readonly name: "requiresAuthDuringCompetition";
                readonly nameLocation: "697:29:81";
                readonly parameters: {
                    readonly id: 19166;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "726:2:81";
                };
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19196;
                readonly nodeType: "FunctionDefinition";
                readonly src: "931:111:81";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19195;
                    readonly nodeType: "Block";
                    readonly src: "1000:42:81";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 19190;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "1016:3:81";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 19191;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1020:6:81";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1016:10:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 19192;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19184;
                                readonly src: "1028:6:81";
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
                                readonly id: 19189;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 67894;
                                readonly src: "1010:5:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 19193;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1010:25:81";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 19194;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1010:25:81";
                    }];
                };
                readonly functionSelector: "a0712d68";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 19187;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 19186;
                        readonly name: "requiresAuthDuringCompetition";
                        readonly nameLocations: readonly ["970:29:81"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 19182;
                        readonly src: "970:29:81";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "970:29:81";
                }];
                readonly name: "mint";
                readonly nameLocation: "940:4:81";
                readonly parameters: {
                    readonly id: 19185;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19184;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "953:6:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19196;
                        readonly src: "945:14:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19183;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "945:7:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "944:16:81";
                };
                readonly returnParameters: {
                    readonly id: 19188;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1000:0:81";
                };
                readonly scope: 19241;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 19211;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1048:155:81";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19210;
                    readonly nodeType: "Block";
                    readonly src: "1160:43:81";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19206;
                                readonly name: "destination";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19198;
                                readonly src: "1176:11:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 19207;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19200;
                                readonly src: "1189:6:81";
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
                                readonly id: 19205;
                                readonly name: "_mint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 67894;
                                readonly src: "1170:5:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 19208;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1170:26:81";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 19209;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1170:26:81";
                    }];
                };
                readonly functionSelector: "40c10f19";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 19203;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 19202;
                        readonly name: "requiresAuthDuringCompetition";
                        readonly nameLocations: readonly ["1130:29:81"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 19182;
                        readonly src: "1130:29:81";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1130:29:81";
                }];
                readonly name: "mint";
                readonly nameLocation: "1057:4:81";
                readonly parameters: {
                    readonly id: 19201;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19198;
                        readonly mutability: "mutable";
                        readonly name: "destination";
                        readonly nameLocation: "1079:11:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19211;
                        readonly src: "1071:19:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19197;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1071:7:81";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19200;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1108:6:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19211;
                        readonly src: "1100:14:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19199;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1100:7:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1061:59:81";
                };
                readonly returnParameters: {
                    readonly id: 19204;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1160:0:81";
                };
                readonly scope: 19241;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 19225;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1209:111:81";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19224;
                    readonly nodeType: "Block";
                    readonly src: "1278:42:81";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 19219;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "1294:3:81";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 19220;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1298:6:81";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1294:10:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 19221;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19213;
                                readonly src: "1306:6:81";
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
                                readonly id: 19218;
                                readonly name: "_burn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 67922;
                                readonly src: "1288:5:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 19222;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1288:25:81";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 19223;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1288:25:81";
                    }];
                };
                readonly functionSelector: "42966c68";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 19216;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 19215;
                        readonly name: "requiresAuthDuringCompetition";
                        readonly nameLocations: readonly ["1248:29:81"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 19182;
                        readonly src: "1248:29:81";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1248:29:81";
                }];
                readonly name: "burn";
                readonly nameLocation: "1218:4:81";
                readonly parameters: {
                    readonly id: 19214;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19213;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1231:6:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19225;
                        readonly src: "1223:14:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19212;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1223:7:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1222:16:81";
                };
                readonly returnParameters: {
                    readonly id: 19217;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1278:0:81";
                };
                readonly scope: 19241;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 19240;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1326:155:81";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19239;
                    readonly nodeType: "Block";
                    readonly src: "1438:43:81";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19235;
                                readonly name: "destination";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19227;
                                readonly src: "1454:11:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 19236;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19229;
                                readonly src: "1467:6:81";
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
                                readonly id: 19234;
                                readonly name: "_burn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 67922;
                                readonly src: "1448:5:81";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 19237;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1448:26:81";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 19238;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1448:26:81";
                    }];
                };
                readonly functionSelector: "9dc29fac";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 19232;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 19231;
                        readonly name: "requiresAuthDuringCompetition";
                        readonly nameLocations: readonly ["1408:29:81"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 19182;
                        readonly src: "1408:29:81";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1408:29:81";
                }];
                readonly name: "burn";
                readonly nameLocation: "1335:4:81";
                readonly parameters: {
                    readonly id: 19230;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19227;
                        readonly mutability: "mutable";
                        readonly name: "destination";
                        readonly nameLocation: "1357:11:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19240;
                        readonly src: "1349:19:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19226;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1349:7:81";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19229;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1386:6:81";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19240;
                        readonly src: "1378:14:81";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19228;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1378:7:81";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1339:59:81";
                };
                readonly returnParameters: {
                    readonly id: 19233;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1438:0:81";
                };
                readonly scope: 19241;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 19125;
                    readonly name: "ERC20";
                    readonly nameLocations: readonly ["280:5:81"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 67923;
                    readonly src: "280:5:81";
                };
                readonly id: 19126;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "280:5:81";
            }, {
                readonly baseName: {
                    readonly id: 19127;
                    readonly name: "MultiRolesAuthority";
                    readonly nameLocations: readonly ["287:19:81"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 67535;
                    readonly src: "287:19:81";
                };
                readonly id: 19128;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "287:19:81";
            }];
            readonly canonicalName: "ERC20Mintable";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [19241, 67535, 67230, 67217, 67923];
            readonly name: "ERC20Mintable";
            readonly nameLocation: "263:13:81";
            readonly scope: 19242;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [67067, 67074, 67248, 67254, 67262, 67269, 67546, 67554];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 81;
};
//# sourceMappingURL=ERC20Mintable.d.ts.map