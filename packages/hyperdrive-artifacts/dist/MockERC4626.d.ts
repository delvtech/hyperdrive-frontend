export declare const MockERC4626: {
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "contract ERC20Mintable";
        }, {
            readonly name: "_name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_symbol";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_initialRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_admin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_isCompetitionMode";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "DOMAIN_SEPARATOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "allowance";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "asset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "authority";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "canCall";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "functionSig";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToAssets";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToShares";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "_assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "doesRoleHaveCapability";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "functionSig";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "doesUserHaveRole";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "role";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getRate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getRolesWithCapability";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getTargetCustomAuthority";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getUserRoles";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isCapabilityPublic";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isCompetitionMode";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxDeposit";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxMint";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxRedeem";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxWithdraw";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "mint";
        readonly inputs: readonly [{
            readonly name: "_shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "permit";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "previewDeposit";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewMint";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewRedeem";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewWithdraw";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "redeem";
        readonly inputs: readonly [{
            readonly name: "_shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setAuthority";
        readonly inputs: readonly [{
            readonly name: "newAuthority";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setPublicCapability";
        readonly inputs: readonly [{
            readonly name: "functionSig";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }, {
            readonly name: "enabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setRate";
        readonly inputs: readonly [{
            readonly name: "_rate_";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setRoleCapability";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "functionSig";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }, {
            readonly name: "enabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setTargetCustomAuthority";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "customAuthority";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setUserRole";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "role";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "enabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalAssets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "_assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AuthorityUpdated";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAuthority";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract Authority";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Deposit";
        readonly inputs: readonly [{
            readonly name: "caller";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PublicCapabilityUpdated";
        readonly inputs: readonly [{
            readonly name: "functionSig";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }, {
            readonly name: "enabled";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RoleCapabilityUpdated";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "uint8";
            readonly indexed: true;
            readonly internalType: "uint8";
        }, {
            readonly name: "functionSig";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }, {
            readonly name: "enabled";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TargetCustomAuthorityUpdated";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "authority";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract Authority";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "UserRoleUpdated";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "role";
            readonly type: "uint8";
            readonly indexed: true;
            readonly internalType: "uint8";
        }, {
            readonly name: "enabled";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Withdraw";
        readonly inputs: readonly [{
            readonly name: "caller";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    readonly bytecode: {
        readonly object: "0x6101206040523480156200001257600080fd5b506040516200280538038062002805833981016040819052620000359162000310565b813081818989898181846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200007d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000a39190620003c8565b6000620000b1848262000483565b506001620000c0838262000483565b5060ff81166080524660a052620000d662000196565b60c0525050506001600160a01b0392831660e0525050600680548483166001600160a01b0319918216811790925560078054938516939091169290921790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a3505050600c9390935542600d5515156101005250620005cd9350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001ca91906200054f565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b03811681146200024857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200027357600080fd5b81516001600160401b03808211156200029057620002906200024b565b604051601f8301601f19908116603f01168101908282118183101715620002bb57620002bb6200024b565b81604052838152602092508683858801011115620002d857600080fd5b600091505b83821015620002fc5785820183015181830184015290820190620002dd565b600093810190920192909252949350505050565b60008060008060008060c087890312156200032a57600080fd5b8651620003378162000232565b60208801519096506001600160401b03808211156200035557600080fd5b620003638a838b0162000261565b965060408901519150808211156200037a57600080fd5b506200038989828a0162000261565b945050606087015192506080870151620003a38162000232565b60a08801519092508015158114620003ba57600080fd5b809150509295509295509295565b600060208284031215620003db57600080fd5b815160ff81168114620003ed57600080fd5b9392505050565b600181811c908216806200040957607f821691505b6020821081036200042a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200047e57600081815260208120601f850160051c81016020861015620004595750805b601f850160051c820191505b818110156200047a5782815560010162000465565b5050505b505050565b81516001600160401b038111156200049f576200049f6200024b565b620004b781620004b08454620003f4565b8462000430565b602080601f831160018114620004ef5760008415620004d65750858301515b600019600386901b1c1916600185901b1785556200047a565b600085815260208120601f198616915b828110156200052057888601518255948401946001909101908401620004ff565b50858210156200053f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008083546200055f81620003f4565b600182811680156200057a57600181146200059057620005c1565b60ff1984168752821515830287019450620005c1565b8760005260208060002060005b85811015620005b85781548a8201529084019082016200059d565b50505082870194505b50929695505050505050565b60805160a05160c05160e051610100516121bb6200064a600039600081816104b00152610aba0152600081816103d50152818161072d015281816113d501528181611563015281816116c101528181611759015281816118ab01526119ed01526000610b8101526000610b510152600061038101526121bb6000f3fe608060405234801561001057600080fd5b506004361061028a5760003560e01c80637a9e5e4b1161015c578063c53a3985116100ce578063dd62ed3e11610087578063dd62ed3e14610630578063e688747b1461065b578063ea7ca27614610691578063ed0d0efb146106c8578063ef8b30f7146106e8578063f2fde38b146106fb57600080fd5b8063c53a3985146105a5578063c63d75b61461040f578063c6e6f592146105ce578063ce96cb77146105e1578063d505accf146105f4578063d905777e1461060757600080fd5b8063a9059cbb11610120578063a9059cbb14610533578063b3d7f6b914610546578063b460af9414610559578063b70096131461056c578063ba0876521461057f578063bf7e214f1461059257600080fd5b80637a9e5e4b146104d25780637ecebe00146104e55780638da5cb5b1461050557806394bf804d1461051857806395d89b411461052b57600080fd5b806334fcf43711610200578063679aefce116101b9578063679aefce1461044a57806367aff484146104525780636e553f651461046557806370a0823114610478578063728b952b146104985780637a8c63b5146104ab57600080fd5b806334fcf437146103b55780633644e515146103c857806338d52e0f146103d0578063402d267d1461040f5780634b5159da146104245780634cdad5061461043757600080fd5b80630a28a477116102525780630a28a477146103155780630bade8a4146103285780630ea9b75b1461034b57806318160ddd1461036057806323b872dd14610369578063313ce5671461037c57600080fd5b806301e1d1141461028f57806306a36aee146102aa57806306fdde03146102ca57806307a2d13a146102df578063095ea7b3146102f2575b600080fd5b61029761070e565b6040519081526020015b60405180910390f35b6102976102b8366004611c35565b60096020526000908152604090205481565b6102d26107af565b6040516102a19190611c52565b6102976102ed366004611ca0565b61083d565b610305610300366004611cb9565b61086a565b60405190151581526020016102a1565b610297610323366004611ca0565b6108d7565b610305610336366004611d02565b600a6020526000908152604090205460ff1681565b61035e610359366004611d3c565b6108f7565b005b61029760025481565b610305610377366004611d83565b6109d8565b6103a37f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016102a1565b61035e6103c3366004611ca0565b610ab8565b610297610b4d565b6103f77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102a1565b61029761041d366004611c35565b5060001990565b61035e610432366004611dc4565b610ba3565b610297610445366004611ca0565b610c35565b600c54610297565b61035e610460366004611dfb565b610c40565b610297610473366004611e29565b610d08565b610297610486366004611c35565b60036020526000908152604090205481565b61035e6104a6366004611e4e565b610d1c565b6103057f000000000000000000000000000000000000000000000000000000000000000081565b61035e6104e0366004611c35565b610da5565b6102976104f3366004611c35565b60056020526000908152604090205481565b6006546103f7906001600160a01b031681565b610297610526366004611e29565b610e8f565b6102d2610ea3565b610305610541366004611cb9565b610eb0565b610297610554366004611ca0565b610f16565b610297610567366004611e7c565b610f35565b61030561057a366004611eb3565b610f52565b61029761058d366004611e7c565b611050565b6007546103f7906001600160a01b031681565b6103f76105b3366004611c35565b6008602052600090815260409020546001600160a01b031681565b6102976105dc366004611ca0565b611065565b6102976105ef366004611c35565b611085565b61035e610602366004611efa565b6110a7565b610297610615366004611c35565b6001600160a01b031660009081526003602052604090205490565b61029761063e366004611e4e565b600460209081526000928352604080842090915290825290205481565b610305610669366004611f68565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61030561069f366004611f9b565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102976106d6366004611d02565b600b6020526000908152604090205481565b6102976106f6366004611ca0565b6112eb565b61035e610709366004611c35565b6112f6565b6000610718611374565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561077c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a09190611fc7565b6107aa9190611ff6565b905090565b600080546107bc90612009565b80601f01602080910402602001604051908101604052809291908181526020018280546107e890612009565b80156108355780601f1061080a57610100808354040283529160200191610835565b820191906000526020600020905b81548152906001019060200180831161081857829003601f168201915b505050505081565b60025460009080156108615761085c61085461070e565b84908361144e565b610863565b825b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906108c59086815260200190565b60405180910390a35060015b92915050565b60025460009080156108615761085c816108ef61070e565b85919061146c565b61090d336000356001600160e01b031916611492565b6109325760405162461bcd60e51b815260040161092990612043565b60405180910390fd5b8015610962576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610989565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516109cb911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610a3457610a0f8382612069565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610a5c908490612069565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061216683398151915290610aa59087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610b4057610af4336000356001600160e01b031916611492565b610b405760405162461bcd60e51b815260206004820152601b60248201527f4d6f636b455243343632363a206e6f7420617574686f72697a656400000000006044820152606401610929565b610b4861153b565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610b7e576107aa6115cf565b507f000000000000000000000000000000000000000000000000000000000000000090565b610bb9336000356001600160e01b031916611492565b610bd55760405162461bcd60e51b815260040161092990612043565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b60006108d18261083d565b610c56336000356001600160e01b031916611492565b610c725760405162461bcd60e51b815260040161092990612043565b8015610ca1576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610cc7565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516109cb911515815260200190565b6000610d1261153b565b6108638383611669565b610d32336000356001600160e01b031916611492565b610d4e5760405162461bcd60e51b815260040161092990612043565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610e3a575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610df990339030906001600160e01b0319600035169060040161207c565b602060405180830381865afa158015610e16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3a91906120a9565b610e4357600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6000610e9961153b565b610863838361173f565b600180546107bc90612009565b33600090815260036020526040812080548391908390610ed1908490612069565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020612166833981519152906108c59086815260200190565b60025460009080156108615761085c610f2d61070e565b84908361146c565b6000610f3f61153b565b610f4a8484846117ce565b949350505050565b6001600160a01b038083166000908152600860205260408120549091168015610fee5760405163b700961360e01b81526001600160a01b0382169063b700961390610fa59088908890889060040161207c565b602060405180830381865afa158015610fc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe691906120a9565b915050610863565b6001600160e01b031983166000908152600a602052604090205460ff168061104757506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b600061105a61153b565b610f4a8484846118d2565b60025460009080156108615761085c8161107d61070e565b85919061144e565b6001600160a01b0381166000908152600360205260408120546108d19061083d565b428410156110f75760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610929565b60006001611103610b4d565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561120f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906112455750876001600160a01b0316816001600160a01b0316145b6112825760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610929565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60006108d182611065565b61130c336000356001600160e01b031916611492565b6113285760405162461bcd60e51b815260040161092990612043565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000600c546000036113865750600090565b60006113a46301e13380600d544261139e9190612069565b90611a14565b905060006108636113c083600c54611a2990919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611424573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114489190611fc7565b90611a29565b600082600019048411830215820261146557600080fd5b5091020490565b600082600019048411830215820261148357600080fd5b50910281810615159190040190565b6007546000906001600160a01b0316801580159061151c575060405163b700961360e01b81526001600160a01b0382169063b7009613906114db9087903090889060040161207c565b602060405180830381865afa1580156114f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151c91906120a9565b80610f4a57506006546001600160a01b03858116911614949350505050565b6000611545611374565b905080156115c85760405163140e25ad60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156115af57600080fd5b505af11580156115c3573d6000803e3d6000fd5b505050505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161160191906120c6565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000611674836112eb565b9050806000036116b45760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b6044820152606401610929565b6116e96001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611a3e565b6116f38282611ada565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a36108d1565b600061174a83610f16565b90506117816001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611a3e565b61178b8284611ada565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d79101611732565b60006117d9846108d7565b9050336001600160a01b03831614611849576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114611847576118228282612069565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b6118538282611b34565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108636001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611b96565b6000336001600160a01b03831614611942576001600160a01b038216600090815260046020908152604080832033845290915290205460001981146119405761191b8582612069565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b61194b84610c35565b90508060000361198b5760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b6044820152606401610929565b6119958285611b34565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108636001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483611b96565b600061086383670de0b6b3a76400008461144e565b60006108638383670de0b6b3a764000061144e565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b03841660248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611ad35760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610929565b5050505050565b8060026000828254611aec9190611ff6565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061216683398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611b5c908490612069565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061216683398151915290602001611b28565b600060405163a9059cbb60e01b81526001600160a01b0384166004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611c175760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610929565b50505050565b6001600160a01b0381168114611c3257600080fd5b50565b600060208284031215611c4757600080fd5b813561086381611c1d565b600060208083528351808285015260005b81811015611c7f57858101830151858201604001528201611c63565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611cb257600080fd5b5035919050565b60008060408385031215611ccc57600080fd5b8235611cd781611c1d565b946020939093013593505050565b80356001600160e01b031981168114611cfd57600080fd5b919050565b600060208284031215611d1457600080fd5b61086382611ce5565b803560ff81168114611cfd57600080fd5b8015158114611c3257600080fd5b600080600060608486031215611d5157600080fd5b611d5a84611d1d565b9250611d6860208501611ce5565b91506040840135611d7881611d2e565b809150509250925092565b600080600060608486031215611d9857600080fd5b8335611da381611c1d565b92506020840135611db381611c1d565b929592945050506040919091013590565b60008060408385031215611dd757600080fd5b611de083611ce5565b91506020830135611df081611d2e565b809150509250929050565b600080600060608486031215611e1057600080fd5b8335611e1b81611c1d565b9250611d6860208501611d1d565b60008060408385031215611e3c57600080fd5b823591506020830135611df081611c1d565b60008060408385031215611e6157600080fd5b8235611e6c81611c1d565b91506020830135611df081611c1d565b600080600060608486031215611e9157600080fd5b833592506020840135611ea381611c1d565b91506040840135611d7881611c1d565b600080600060608486031215611ec857600080fd5b8335611ed381611c1d565b92506020840135611ee381611c1d565b9150611ef160408501611ce5565b90509250925092565b600080600080600080600060e0888a031215611f1557600080fd5b8735611f2081611c1d565b96506020880135611f3081611c1d565b95506040880135945060608801359350611f4c60808901611d1d565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611f7b57600080fd5b611f8483611d1d565b9150611f9260208401611ce5565b90509250929050565b60008060408385031215611fae57600080fd5b8235611fb981611c1d565b9150611f9260208401611d1d565b600060208284031215611fd957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108d1576108d1611fe0565b600181811c9082168061201d57607f821691505b60208210810361203d57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b818103818111156108d1576108d1611fe0565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b6000602082840312156120bb57600080fd5b815161086381611d2e565b600080835481600182811c9150808316806120e257607f831692505b6020808410820361210157634e487b7160e01b86526022600452602486fd5b818015612115576001811461212a57612157565b60ff1986168952841515850289019650612157565b60008a81526020902060005b8681101561214f5781548b820152908501908301612136565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212202d9f92890417746f1450a5303cd9f80eb269b730b1b14030ea3ab96c158a80f164736f6c63430008140033";
        readonly sourceMap: "963:2775:83:-:0;;;1171:442;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1450:6;1476:4;1149:6:123;1157:10;1396:6:83;1406:5;1413:7;1290:5:125;1297:7;1306:6;-1:-1:-1;;;;;1306:15:125;;:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2094:4:124;:12;2101:5;2094:4;:12;:::i;:::-;-1:-1:-1;2116:6:124;:16;2125:7;2116:6;:16;:::i;:::-;-1:-1:-1;2142:20:124;;;;;2192:13;2173:32;;2242:24;:22;:24::i;:::-;2215:51;;-1:-1:-1;;;;;;;;1335:14:125;;::::1;;::::0;-1:-1:-1;;682:5:122;:14;;;;;-1:-1:-1;;;;;;682:14:122;;;;;;;;706:9;:22;;;;;;;;;;;;;;;;744:40;;765:10;;744:40;;682:5;;744:40;799;;-1:-1:-1;;;;;799:40:122;;;816:10;;799:40;;;;;-1:-1:-1;;;1498:5:83::2;:20:::0;;;;1543:15:::2;1528:12;:30:::0;1568:38:::2;;;::::0;-1:-1:-1;963:2775:83;;-1:-1:-1;;;;963:2775:83;5510:446:124;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;6225:25:184;;;;6266:18;;6259:34;;;;5833:14:124;6309:18:184;;;6302:34;5869:13:124;6352:18:184;;;6345:34;5912:4:124;6395:19:184;;;6388:61;6197:19;;5640:295:124;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;14:146:184:-;-1:-1:-1;;;;;104:31:184;;94:42;;84:70;;150:1;147;140:12;84:70;14:146;:::o;165:127::-;226:10;221:3;217:20;214:1;207:31;257:4;254:1;247:15;281:4;278:1;271:15;297:840;351:5;404:3;397:4;389:6;385:17;381:27;371:55;;422:1;419;412:12;371:55;445:13;;-1:-1:-1;;;;;507:10:184;;;504:36;;;520:18;;:::i;:::-;595:2;589:9;563:2;649:13;;-1:-1:-1;;645:22:184;;;669:2;641:31;637:40;625:53;;;693:18;;;713:22;;;690:46;687:72;;;739:18;;:::i;:::-;779:10;775:2;768:22;814:2;806:6;799:18;836:4;826:14;;881:3;876:2;871;863:6;859:15;855:24;852:33;849:53;;;898:1;895;888:12;849:53;920:1;911:10;;930:133;944:2;941:1;938:9;930:133;;;1032:14;;;1028:23;;1022:30;1001:14;;;997:23;;990:63;955:10;;;;930:133;;;1105:1;1083:15;;;1079:24;;;1072:35;;;;1087:6;297:840;-1:-1:-1;;;;297:840:184:o;1142:1103::-;1297:6;1305;1313;1321;1329;1337;1390:3;1378:9;1369:7;1365:23;1361:33;1358:53;;;1407:1;1404;1397:12;1358:53;1439:9;1433:16;1458:46;1498:5;1458:46;:::i;:::-;1572:2;1557:18;;1551:25;1523:5;;-1:-1:-1;;;;;;1625:14:184;;;1622:34;;;1652:1;1649;1642:12;1622:34;1675:61;1728:7;1719:6;1708:9;1704:22;1675:61;:::i;:::-;1665:71;;1782:2;1771:9;1767:18;1761:25;1745:41;;1811:2;1801:8;1798:16;1795:36;;;1827:1;1824;1817:12;1795:36;;1850:63;1905:7;1894:8;1883:9;1879:24;1850:63;:::i;:::-;1840:73;;;1953:2;1942:9;1938:18;1932:25;1922:35;;2002:3;1991:9;1987:19;1981:26;2016:48;2056:7;2016:48;:::i;:::-;2135:3;2120:19;;2114:26;2083:7;;-1:-1:-1;2178:15:184;;2171:23;2159:36;;2149:64;;2209:1;2206;2199:12;2149:64;2232:7;2222:17;;;1142:1103;;;;;;;;:::o;2250:273::-;2318:6;2371:2;2359:9;2350:7;2346:23;2342:32;2339:52;;;2387:1;2384;2377:12;2339:52;2419:9;2413:16;2469:4;2462:5;2458:16;2451:5;2448:27;2438:55;;2489:1;2486;2479:12;2438:55;2512:5;2250:273;-1:-1:-1;;;2250:273:184:o;2528:380::-;2607:1;2603:12;;;;2650;;;2671:61;;2725:4;2717:6;2713:17;2703:27;;2671:61;2778:2;2770:6;2767:14;2747:18;2744:38;2741:161;;2824:10;2819:3;2815:20;2812:1;2805:31;2859:4;2856:1;2849:15;2887:4;2884:1;2877:15;2741:161;;2528:380;;;:::o;3039:545::-;3141:2;3136:3;3133:11;3130:448;;;3177:1;3202:5;3198:2;3191:17;3247:4;3243:2;3233:19;3317:2;3305:10;3301:19;3298:1;3294:27;3288:4;3284:38;3353:4;3341:10;3338:20;3335:47;;;-1:-1:-1;3376:4:184;3335:47;3431:2;3426:3;3422:12;3419:1;3415:20;3409:4;3405:31;3395:41;;3486:82;3504:2;3497:5;3494:13;3486:82;;;3549:17;;;3530:1;3519:13;3486:82;;;3490:3;;;3130:448;3039:545;;;:::o;3760:1352::-;3880:10;;-1:-1:-1;;;;;3902:30:184;;3899:56;;;3935:18;;:::i;:::-;3964:97;4054:6;4014:38;4046:4;4040:11;4014:38;:::i;:::-;4008:4;3964:97;:::i;:::-;4116:4;;4180:2;4169:14;;4197:1;4192:663;;;;4899:1;4916:6;4913:89;;;-1:-1:-1;4968:19:184;;;4962:26;4913:89;-1:-1:-1;;3717:1:184;3713:11;;;3709:24;3705:29;3695:40;3741:1;3737:11;;;3692:57;5015:81;;4162:944;;4192:663;2986:1;2979:14;;;3023:4;3010:18;;-1:-1:-1;;4228:20:184;;;4346:236;4360:7;4357:1;4354:14;4346:236;;;4449:19;;;4443:26;4428:42;;4541:27;;;;4509:1;4497:14;;;;4376:19;;4346:236;;;4350:3;4610:6;4601:7;4598:19;4595:201;;;4671:19;;;4665:26;-1:-1:-1;;4754:1:184;4750:14;;;4766:3;4746:24;4742:37;4738:42;4723:58;4708:74;;4595:201;-1:-1:-1;;;;;4842:1:184;4826:14;;;4822:22;4809:36;;-1:-1:-1;3760:1352:184:o;5117:844::-;5247:3;5276:1;5309:6;5303:13;5339:36;5365:9;5339:36;:::i;:::-;5394:1;5411:18;;;5438:133;;;;5585:1;5580:356;;;;5404:532;;5438:133;-1:-1:-1;;5471:24:184;;5459:37;;5544:14;;5537:22;5525:35;;5516:45;;;-1:-1:-1;5438:133:184;;5580:356;5611:6;5608:1;5601:17;5641:4;5686:2;5683:1;5673:16;5711:1;5725:165;5739:6;5736:1;5733:13;5725:165;;;5817:14;;5804:11;;;5797:35;5860:16;;;;5754:10;;5725:165;;;5729:3;;;5919:6;5914:3;5910:16;5903:23;;5404:532;-1:-1:-1;5952:3:184;;5117:844;-1:-1:-1;;;;;;5117:844:184:o;5966:489::-;963:2775:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061028a5760003560e01c80637a9e5e4b1161015c578063c53a3985116100ce578063dd62ed3e11610087578063dd62ed3e14610630578063e688747b1461065b578063ea7ca27614610691578063ed0d0efb146106c8578063ef8b30f7146106e8578063f2fde38b146106fb57600080fd5b8063c53a3985146105a5578063c63d75b61461040f578063c6e6f592146105ce578063ce96cb77146105e1578063d505accf146105f4578063d905777e1461060757600080fd5b8063a9059cbb11610120578063a9059cbb14610533578063b3d7f6b914610546578063b460af9414610559578063b70096131461056c578063ba0876521461057f578063bf7e214f1461059257600080fd5b80637a9e5e4b146104d25780637ecebe00146104e55780638da5cb5b1461050557806394bf804d1461051857806395d89b411461052b57600080fd5b806334fcf43711610200578063679aefce116101b9578063679aefce1461044a57806367aff484146104525780636e553f651461046557806370a0823114610478578063728b952b146104985780637a8c63b5146104ab57600080fd5b806334fcf437146103b55780633644e515146103c857806338d52e0f146103d0578063402d267d1461040f5780634b5159da146104245780634cdad5061461043757600080fd5b80630a28a477116102525780630a28a477146103155780630bade8a4146103285780630ea9b75b1461034b57806318160ddd1461036057806323b872dd14610369578063313ce5671461037c57600080fd5b806301e1d1141461028f57806306a36aee146102aa57806306fdde03146102ca57806307a2d13a146102df578063095ea7b3146102f2575b600080fd5b61029761070e565b6040519081526020015b60405180910390f35b6102976102b8366004611c35565b60096020526000908152604090205481565b6102d26107af565b6040516102a19190611c52565b6102976102ed366004611ca0565b61083d565b610305610300366004611cb9565b61086a565b60405190151581526020016102a1565b610297610323366004611ca0565b6108d7565b610305610336366004611d02565b600a6020526000908152604090205460ff1681565b61035e610359366004611d3c565b6108f7565b005b61029760025481565b610305610377366004611d83565b6109d8565b6103a37f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016102a1565b61035e6103c3366004611ca0565b610ab8565b610297610b4d565b6103f77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102a1565b61029761041d366004611c35565b5060001990565b61035e610432366004611dc4565b610ba3565b610297610445366004611ca0565b610c35565b600c54610297565b61035e610460366004611dfb565b610c40565b610297610473366004611e29565b610d08565b610297610486366004611c35565b60036020526000908152604090205481565b61035e6104a6366004611e4e565b610d1c565b6103057f000000000000000000000000000000000000000000000000000000000000000081565b61035e6104e0366004611c35565b610da5565b6102976104f3366004611c35565b60056020526000908152604090205481565b6006546103f7906001600160a01b031681565b610297610526366004611e29565b610e8f565b6102d2610ea3565b610305610541366004611cb9565b610eb0565b610297610554366004611ca0565b610f16565b610297610567366004611e7c565b610f35565b61030561057a366004611eb3565b610f52565b61029761058d366004611e7c565b611050565b6007546103f7906001600160a01b031681565b6103f76105b3366004611c35565b6008602052600090815260409020546001600160a01b031681565b6102976105dc366004611ca0565b611065565b6102976105ef366004611c35565b611085565b61035e610602366004611efa565b6110a7565b610297610615366004611c35565b6001600160a01b031660009081526003602052604090205490565b61029761063e366004611e4e565b600460209081526000928352604080842090915290825290205481565b610305610669366004611f68565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61030561069f366004611f9b565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102976106d6366004611d02565b600b6020526000908152604090205481565b6102976106f6366004611ca0565b6112eb565b61035e610709366004611c35565b6112f6565b6000610718611374565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561077c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a09190611fc7565b6107aa9190611ff6565b905090565b600080546107bc90612009565b80601f01602080910402602001604051908101604052809291908181526020018280546107e890612009565b80156108355780601f1061080a57610100808354040283529160200191610835565b820191906000526020600020905b81548152906001019060200180831161081857829003601f168201915b505050505081565b60025460009080156108615761085c61085461070e565b84908361144e565b610863565b825b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906108c59086815260200190565b60405180910390a35060015b92915050565b60025460009080156108615761085c816108ef61070e565b85919061146c565b61090d336000356001600160e01b031916611492565b6109325760405162461bcd60e51b815260040161092990612043565b60405180910390fd5b8015610962576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610989565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516109cb911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610a3457610a0f8382612069565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610a5c908490612069565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061216683398151915290610aa59087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610b4057610af4336000356001600160e01b031916611492565b610b405760405162461bcd60e51b815260206004820152601b60248201527f4d6f636b455243343632363a206e6f7420617574686f72697a656400000000006044820152606401610929565b610b4861153b565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610b7e576107aa6115cf565b507f000000000000000000000000000000000000000000000000000000000000000090565b610bb9336000356001600160e01b031916611492565b610bd55760405162461bcd60e51b815260040161092990612043565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b60006108d18261083d565b610c56336000356001600160e01b031916611492565b610c725760405162461bcd60e51b815260040161092990612043565b8015610ca1576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610cc7565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516109cb911515815260200190565b6000610d1261153b565b6108638383611669565b610d32336000356001600160e01b031916611492565b610d4e5760405162461bcd60e51b815260040161092990612043565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610e3a575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610df990339030906001600160e01b0319600035169060040161207c565b602060405180830381865afa158015610e16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3a91906120a9565b610e4357600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6000610e9961153b565b610863838361173f565b600180546107bc90612009565b33600090815260036020526040812080548391908390610ed1908490612069565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020612166833981519152906108c59086815260200190565b60025460009080156108615761085c610f2d61070e565b84908361146c565b6000610f3f61153b565b610f4a8484846117ce565b949350505050565b6001600160a01b038083166000908152600860205260408120549091168015610fee5760405163b700961360e01b81526001600160a01b0382169063b700961390610fa59088908890889060040161207c565b602060405180830381865afa158015610fc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe691906120a9565b915050610863565b6001600160e01b031983166000908152600a602052604090205460ff168061104757506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b600061105a61153b565b610f4a8484846118d2565b60025460009080156108615761085c8161107d61070e565b85919061144e565b6001600160a01b0381166000908152600360205260408120546108d19061083d565b428410156110f75760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610929565b60006001611103610b4d565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561120f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906112455750876001600160a01b0316816001600160a01b0316145b6112825760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610929565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60006108d182611065565b61130c336000356001600160e01b031916611492565b6113285760405162461bcd60e51b815260040161092990612043565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000600c546000036113865750600090565b60006113a46301e13380600d544261139e9190612069565b90611a14565b905060006108636113c083600c54611a2990919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611424573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114489190611fc7565b90611a29565b600082600019048411830215820261146557600080fd5b5091020490565b600082600019048411830215820261148357600080fd5b50910281810615159190040190565b6007546000906001600160a01b0316801580159061151c575060405163b700961360e01b81526001600160a01b0382169063b7009613906114db9087903090889060040161207c565b602060405180830381865afa1580156114f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151c91906120a9565b80610f4a57506006546001600160a01b03858116911614949350505050565b6000611545611374565b905080156115c85760405163140e25ad60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156115af57600080fd5b505af11580156115c3573d6000803e3d6000fd5b505050505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161160191906120c6565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000611674836112eb565b9050806000036116b45760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b6044820152606401610929565b6116e96001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611a3e565b6116f38282611ada565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a36108d1565b600061174a83610f16565b90506117816001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611a3e565b61178b8284611ada565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d79101611732565b60006117d9846108d7565b9050336001600160a01b03831614611849576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114611847576118228282612069565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b6118538282611b34565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108636001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611b96565b6000336001600160a01b03831614611942576001600160a01b038216600090815260046020908152604080832033845290915290205460001981146119405761191b8582612069565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b61194b84610c35565b90508060000361198b5760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b6044820152606401610929565b6119958285611b34565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108636001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483611b96565b600061086383670de0b6b3a76400008461144e565b60006108638383670de0b6b3a764000061144e565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b03841660248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611ad35760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610929565b5050505050565b8060026000828254611aec9190611ff6565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061216683398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611b5c908490612069565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061216683398151915290602001611b28565b600060405163a9059cbb60e01b81526001600160a01b0384166004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611c175760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610929565b50505050565b6001600160a01b0381168114611c3257600080fd5b50565b600060208284031215611c4757600080fd5b813561086381611c1d565b600060208083528351808285015260005b81811015611c7f57858101830151858201604001528201611c63565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611cb257600080fd5b5035919050565b60008060408385031215611ccc57600080fd5b8235611cd781611c1d565b946020939093013593505050565b80356001600160e01b031981168114611cfd57600080fd5b919050565b600060208284031215611d1457600080fd5b61086382611ce5565b803560ff81168114611cfd57600080fd5b8015158114611c3257600080fd5b600080600060608486031215611d5157600080fd5b611d5a84611d1d565b9250611d6860208501611ce5565b91506040840135611d7881611d2e565b809150509250925092565b600080600060608486031215611d9857600080fd5b8335611da381611c1d565b92506020840135611db381611c1d565b929592945050506040919091013590565b60008060408385031215611dd757600080fd5b611de083611ce5565b91506020830135611df081611d2e565b809150509250929050565b600080600060608486031215611e1057600080fd5b8335611e1b81611c1d565b9250611d6860208501611d1d565b60008060408385031215611e3c57600080fd5b823591506020830135611df081611c1d565b60008060408385031215611e6157600080fd5b8235611e6c81611c1d565b91506020830135611df081611c1d565b600080600060608486031215611e9157600080fd5b833592506020840135611ea381611c1d565b91506040840135611d7881611c1d565b600080600060608486031215611ec857600080fd5b8335611ed381611c1d565b92506020840135611ee381611c1d565b9150611ef160408501611ce5565b90509250925092565b600080600080600080600060e0888a031215611f1557600080fd5b8735611f2081611c1d565b96506020880135611f3081611c1d565b95506040880135945060608801359350611f4c60808901611d1d565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611f7b57600080fd5b611f8483611d1d565b9150611f9260208401611ce5565b90509250929050565b60008060408385031215611fae57600080fd5b8235611fb981611c1d565b9150611f9260208401611d1d565b600060208284031215611fd957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108d1576108d1611fe0565b600181811c9082168061201d57607f821691505b60208210810361203d57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b818103818111156108d1576108d1611fe0565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b6000602082840312156120bb57600080fd5b815161086381611d2e565b600080835481600182811c9150808316806120e257607f831692505b6020808410820361210157634e487b7160e01b86526022600452602486fd5b818015612115576001811461212a57612157565b60ff1986168952841515850289019650612157565b60008a81526020902060005b8681101561214f5781548b820152908501908301612136565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212202d9f92890417746f1450a5303cd9f80eb269b730b1b14030ea3ab96c158a80f164736f6c63430008140033";
        readonly sourceMap: "963:2775:83:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2705:140;;;:::i;:::-;;;160:25:184;;;148:2;133:18;2705:140:83;;;;;;;;1622:47:123;;;;;;:::i;:::-;;;;;;;;;;;;;;1031:18:124;;;:::i;:::-;;;;;;;:::i;4463:257:125:-;;;;;;:::i;:::-;;:::i;2461:211:124:-;;;;;;:::i;:::-;;:::i;:::-;;;1989:14:184;;1982:22;1964:41;;1952:2;1937:18;2461:211:124;1824:187:184;5114:255:125;;;;;;:::i;:::-;;:::i;1676:49:123:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4390:396;;;;;;:::i;:::-;;:::i;:::-;;1304:26:124;;;;;;3057:592;;;;;;:::i;:::-;;:::i;1083:31::-;;;;;;;;3688:4:184;3676:17;;;3658:36;;3646:2;3631:18;1083:31:124;3516:184:184;2869:122:83;;;;;;:::i;:::-;;:::i;5327:177:124:-;;;:::i;1149:28:125:-;;;;;;;;-1:-1:-1;;;;;3884:32:184;;;3866:51;;3854:2;3839:18;1149:28:125;3705:218:184;5696:108:125;;;;;;:::i;:::-;-1:-1:-1;;;5780:17:125;5696:108;3448:210:123;;;;;;:::i;:::-;;:::i;5375:124:125:-;;;;;;:::i;:::-;;:::i;2997:80:83:-;3065:5;;2997:80;;3853:337:123;;;;;;:::i;:::-;;:::i;1883:185:83:-;;;;;;:::i;:::-;;:::i;1337:44:124:-;;;;;;:::i;:::-;;;;;;;;;;;;;;3006:241:123;;;;;;:::i;:::-;;:::i;1125:39:83:-;;;;;1523:434:122;;;;;;:::i;:::-;;:::i;1751:41:124:-;;;;;;:::i;:::-;;;;;;;;;;;;;;562:20:122;;;;;-1:-1:-1;;;;;562:20:122;;;2074:179:83;;;;;;:::i;:::-;;:::i;1056:20:124:-;;;:::i;2678:373::-;;;;;;:::i;:::-;;:::i;4857:251:125:-;;;;;;:::i;:::-;;:::i;2259:219:83:-;;;;;;:::i;:::-;;:::i;2336:465:123:-;;;;;;:::i;:::-;;:::i;2484:215:83:-;;;;;;:::i;:::-;;:::i;589:26:122:-;;;;;-1:-1:-1;;;;;589:26:122;;;1369:61:123;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:123;;;4200:257:125;;;;;;:::i;:::-;;:::i;5921:131::-;;;;;;:::i;:::-;;:::i;3838:1483:124:-;;;;;;:::i;:::-;;:::i;6058:112:125:-;;;;;;:::i;:::-;-1:-1:-1;;;;;6147:16:125;6121:7;6147:16;;;:9;:16;;;;;;;6058:112;1388:64:124;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1958:186:123;;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:123;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:123;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;:::i;:::-;;;;;;;;;;;;;;4726:125:125;;;;;;:::i;:::-;;:::i;1963:164:122:-;;;;;;:::i;:::-;;:::i;2705:140:83:-;2758:7;2817:21;:19;:21::i;:::-;2784:30;;-1:-1:-1;;;2784:30:83;;2808:4;2784:30;;;3866:51:184;2784:5:83;-1:-1:-1;;;;;2784:15:83;;;;3839:18:184;;2784:30:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:54;;;;:::i;:::-;2777:61;;2705:140;:::o;1031:18:124:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4463:257:125:-;4569:11;;4533:7;;4650:11;;:63;;4673:40;4691:13;:11;:13::i;:::-;4673:6;;4706;4673:17;:40::i;:::-;4650:63;;;4664:6;4650:63;4643:70;4463:257;-1:-1:-1;;;4463:257:125:o;2461:211:124:-;2561:10;2535:4;2551:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2551:30:124;;;;;;;;;;:39;;;2606:37;2535:4;;2551:30;;2606:37;;;;2584:6;160:25:184;;148:2;133:18;;14:177;2606:37:124;;;;;;;;-1:-1:-1;2661:4:124;2461:211;;;;;:::o;5114:255:125:-;5220:11;;5184:7;;5301:11;;:61;;5324:38;5340:6;5348:13;:11;:13::i;:::-;5324:6;;:38;:15;:38::i;4390:396:123:-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;;;;;;;;;4535:7:123::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:123;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:123;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:123::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1989:14:184::0;1982:22;1964:41;;1952:2;1937:18;;1824:187;4730:49:123::1;;;;;;;;4390:396:::0;;;:::o;3057:592:124:-;-1:-1:-1;;;;;3209:15:124;;3175:4;3209:15;;;:9;:15;;;;;;;;3225:10;3209:27;;;;;;;;-1:-1:-1;;3287:28:124;;3283:80;;3347:16;3357:6;3347:7;:16;:::i;:::-;-1:-1:-1;;;;;3317:15:124;;;;;;:9;:15;;;;;;;;3333:10;3317:27;;;;;;;:46;3283:80;-1:-1:-1;;;;;3374:15:124;;;;;;:9;:15;;;;;:25;;3393:6;;3374:15;:25;;3393:6;;3374:25;:::i;:::-;;;;-1:-1:-1;;;;;;;3545:13:124;;;;;;;:9;:13;;;;;;;:23;;;;;;3594:26;3545:13;;3594:26;;;-1:-1:-1;;;;;;;;;;;3594:26:124;;;3562:6;160:25:184;;148:2;133:18;;14:177;3594:26:124;;;;;;;;-1:-1:-1;3638:4:124;;3057:592;-1:-1:-1;;;;3057:592:124:o;2869:122:83:-;1674:17;1670:167;;;1732:33;1745:10;1757:7;;-1:-1:-1;;;;;;1757:7:83;1732:12;:33::i;:::-;1707:119;;;;-1:-1:-1;;;1707:119:83;;10292:2:184;1707:119:83;;;10274:21:184;10331:2;10311:18;;;10304:30;10370:29;10350:18;;;10343:57;10417:18;;1707:119:83;10090:351:184;1707:119:83;2951:9:::1;:7;:9::i;:::-;2970:5;:14:::0;2869:122::o;5327:177:124:-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;5410:87::-;-1:-1:-1;5446:24:124;;5327:177::o;3448:210:123:-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:123;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:123::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1964:41:184;;;3606:45:123::1;::::0;1937:18:184;3606:45:123::1;;;;;;;3448:210:::0;;:::o;5375:124:125:-;5443:7;5469:23;5485:6;5469:15;:23::i;3853:337:123:-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;3986:7:123::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:123;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:123;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:123::1;;4175:7;4147:36;;;;1989:14:184::0;1982:22;1964:41;;1952:2;1937:18;;1824:187;1883:185:83;1983:7;2002:9;:7;:9::i;:::-;2028:33;2042:7;2051:9;2028:13;:33::i;3006:241:123:-;902:33:122;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:123;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:123::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;1523:434:122:-;1794:5;;-1:-1:-1;;;;;1794:5:122;1780:10;:19;;:76;;-1:-1:-1;1803:9:122;;:53;;-1:-1:-1;;;1803:53:122;;-1:-1:-1;;;;;1803:9:122;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:122;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:122;-1:-1:-1;;;;;1868:24:122;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:122;1523:434;:::o;2074:179:83:-;2171:7;2190:9;:7;:9::i;:::-;2216:30;2227:7;2236:9;2216:10;:30::i;1056:20:124:-;;;;;;;:::i;2678:373::-;2774:10;2748:4;2764:21;;;:9;:21;;;;;:31;;2789:6;;2764:21;2748:4;;2764:31;;2789:6;;2764:31;:::i;:::-;;;;-1:-1:-1;;;;;;;2941:13:124;;;;;;:9;:13;;;;;;;:23;;;;;;2990:32;2999:10;;-1:-1:-1;;;;;;;;;;;2990:32:124;;;2958:6;160:25:184;;148:2;133:18;;14:177;4857:251:125;4959:11;;4923:7;;5040:11;;:61;;5063:38;5079:13;:11;:13::i;:::-;5063:6;;5094;5063:15;:38::i;2259:219:83:-;2384:7;2403:9;:7;:9::i;:::-;2429:42;2444:7;2453:9;2464:6;2429:14;:42::i;:::-;2422:49;2259:219;-1:-1:-1;;;;2259:219:83:o;2336:465:123:-;-1:-1:-1;;;;;2515:32:123;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:123;;-1:-1:-1;;;;;2609:23:123;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:123;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:123;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:123;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;2336:465;-1:-1:-1;;;;;2336:465:123:o;2484:215:83:-;2607:7;2626:9;:7;:9::i;:::-;2652:40;2665:7;2674:9;2685:6;2652:12;:40::i;4200:257:125:-;4306:11;;4270:7;;4387:11;;:63;;4410:40;4428:6;4436:13;:11;:13::i;:::-;4410:6;;:40;:17;:40::i;5921:131::-;-1:-1:-1;;;;;6028:16:125;;5986:7;6028:16;;;:9;:16;;;;;;6012:33;;:15;:33::i;3838:1483:124:-;4057:15;4045:8;:27;;4037:63;;;;-1:-1:-1;;;4037:63:124;;11303:2:184;4037:63:124;;;11285:21:184;11342:2;11322:18;;;11315:30;11381:25;11361:18;;;11354:53;11424:18;;4037:63:124;11101:347:184;4037:63:124;4265:24;4292:805;4428:18;:16;:18::i;:::-;-1:-1:-1;;;;;4873:13:124;;;;;;;:6;:13;;;;;;;;;:15;;;;;;;;4511:449;;4555:165;4511:449;;;11740:25:184;11819:18;;;11812:43;;;;11891:15;;;11871:18;;;11864:43;11923:18;;;11916:34;;;11966:19;;;11959:35;;;;12010:19;;;;12003:35;;;4511:449:124;;;;;;;;;;11712:19:184;;;4511:449:124;;;4472:514;;;;;;;;-1:-1:-1;;;4350:658:124;;;12307:27:184;12350:11;;;12343:27;;;;12386:12;;;12379:28;;;;12423:12;;4350:658:124;;;-1:-1:-1;;4350:658:124;;;;;;;;;4319:707;;4350:658;4319:707;;;;4292:805;;;;;;;;;12673:25:184;12746:4;12734:17;;12714:18;;;12707:45;12768:18;;;12761:34;;;12811:18;;;12804:34;;;12645:19;;4292:805:124;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4292:805:124;;-1:-1:-1;;4292:805:124;;;-1:-1:-1;;;;;;;5120:30:124;;;;;;:59;;;5174:5;-1:-1:-1;;;;;5154:25:124;:16;-1:-1:-1;;;;;5154:25:124;;5120:59;5112:86;;;;-1:-1:-1;;;5112:86:124;;13051:2:184;5112:86:124;;;13033:21:184;13090:2;13070:18;;;13063:30;-1:-1:-1;;;13109:18:184;;;13102:44;13163:18;;5112:86:124;12849:338:184;5112:86:124;-1:-1:-1;;;;;5213:27:124;;;;;;;:9;:27;;;;;;;;:36;;;;;;;;;;;;;:44;;;5283:31;160:25:184;;;5213:36:124;;5283:31;;;;;133:18:184;5283:31:124;;;;;;;3838:1483;;;;;;;:::o;4726:125:125:-;4795:7;4821:23;4837:6;4821:15;:23::i;1963:164:122:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:122;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:122;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:122::1;-1:-1:-1::0;;;;;2046:16:122;::::1;::::0;;::::1;::::0;;;2078:42:::1;::::0;2099:10:::1;::::0;2078:42:::1;::::0;-1:-1:-1;;2078:42:122::1;1963:164:::0;:::o;3310:426:83:-;3364:7;3387:5;;3396:1;3387:10;3383:49;;-1:-1:-1;3420:1:83;;3310:426::o;3383:49::-;3495:19;3517:72;3571:8;3536:12;;3518:15;:30;;;;:::i;:::-;3517:40;;:72::i;:::-;3495:94;;3599:15;3617:88;3669:26;3683:11;3669:5;;:13;;:26;;;;:::i;:::-;3617:30;;-1:-1:-1;;;3617:30:83;;3641:4;3617:30;;;3866:51:184;3617:5:83;-1:-1:-1;;;;;3617:15:83;;;;3839:18:184;;3617:30:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:38;;:88::i;1564:526:126:-;1680:9;1928:1;-1:-1:-1;;1911:19:126;1908:1;1905:26;1902:1;1898:34;1891:42;1878:11;1874:60;1864:116;;1964:1;1961;1954:12;1864:116;-1:-1:-1;2051:9:126;;2047:27;;1564:526::o;2096:672::-;2210:9;2458:1;-1:-1:-1;;2441:19:126;2438:1;2435:26;2432:1;2428:34;2421:42;2408:11;2404:60;2394:116;;2494:1;2491;2484:12;2394:116;-1:-1:-1;2728:9:126;;2691:27;;;2688:34;;2724:27;;;2684:68;;2096:672::o;977:540:122:-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:122;1415:27;;;;;:77;;-1:-1:-1;1446:46:122;;-1:-1:-1;;;1446:46:122;;-1:-1:-1;;;;;1446:12:122;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:122;;-1:-1:-1;;;;;1497:13:122;;;1505:5;;1497:13;1407:103;977:540;-1:-1:-1;;;;977:540:122:o;3083:221:83:-;3121:16;3140:21;:19;:21::i;:::-;3121:40;-1:-1:-1;3175:12:83;;3171:87;;3203:44;;-1:-1:-1;;;3203:44:83;;;;;160:25:184;;;3225:5:83;-1:-1:-1;;;;;3203:34:83;;;;133:18:184;;3203:44:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3171:87;-1:-1:-1;3282:15:83;3267:12;:30;3083:221::o;5510:446:124:-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;14718:25:184;;;;14759:18;;14752:34;;;;5833:14:124;14802:18:184;;;14795:34;5869:13:124;14845:18:184;;;14838:34;5912:4:124;14888:19:184;;;14881:61;14690:19;;5640:295:124;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;1550:516:125:-;1625:14;1744:22;1759:6;1744:14;:22::i;:::-;1735:31;;;1771:1;1734:38;1726:62;;;;-1:-1:-1;;;1726:62:125;;15155:2:184;1726:62:125;;;15137:21:184;15194:2;15174:18;;;15167:30;-1:-1:-1;;;15213:18:184;;;15206:41;15264:18;;1726:62:125;14953:335:184;1726:62:125;1868:57;-1:-1:-1;;;;;1868:5:125;:22;1891:10;1911:4;1918:6;1868:22;:57::i;:::-;1936:23;1942:8;1952:6;1936:5;:23::i;:::-;1975:45;;;15467:25:184;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;1975:45:125;;;1983:10;;1975:45;;15440:18:184;1975:45:125;;;;;;;;2031:28;6443:73;2072:467;2144:14;2179:19;2191:6;2179:11;:19::i;:::-;2170:28;-1:-1:-1;2341:57:125;-1:-1:-1;;;;;2341:5:125;:22;2364:10;2384:4;2170:28;2341:22;:57::i;:::-;2409:23;2415:8;2425:6;2409:5;:23::i;:::-;2448:45;;;15467:25:184;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;2448:45:125;;;2456:10;;2448:45;;15440:18:184;2448:45:125;15293:248:184;2545:679:125;2666:14;2701:23;2717:6;2701:15;:23::i;:::-;2692:32;-1:-1:-1;2806:10:125;-1:-1:-1;;;;;2806:19:125;;;2802:228;;-1:-1:-1;;;;;2859:16:125;;2841:15;2859:16;;;:9;:16;;;;;;;;2876:10;2859:28;;;;;;;;-1:-1:-1;;2942:28:125;;2938:81;;3003:16;3013:6;3003:7;:16;:::i;:::-;-1:-1:-1;;;;;2972:16:125;;;;;;:9;:16;;;;;;;;2989:10;2972:28;;;;;;;:47;2938:81;2827:203;2802:228;3081:20;3087:5;3094:6;3081:5;:20::i;:::-;3117:53;;;15467:25:184;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;3117:53:125;;;;;;;;3126:10;;3117:53;;15440:18:184;3117:53:125;;;;;;;3181:36;-1:-1:-1;;;;;3181:5:125;:18;3200:8;3210:6;3181:18;:36::i;3230:713::-;3349:14;3379:10;-1:-1:-1;;;;;3379:19:125;;;3375:228;;-1:-1:-1;;;;;3432:16:125;;3414:15;3432:16;;;:9;:16;;;;;;;;3449:10;3432:28;;;;;;;;-1:-1:-1;;3515:28:125;;3511:81;;3576:16;3586:6;3576:7;:16;:::i;:::-;-1:-1:-1;;;;;3545:16:125;;;;;;:9;:16;;;;;;;;3562:10;3545:28;;;;;;;:47;3511:81;3400:203;3375:228;3705:21;3719:6;3705:13;:21::i;:::-;3696:30;;;3731:1;3695:37;3687:61;;;;-1:-1:-1;;;3687:61:125;;15748:2:184;3687:61:125;;;15730:21:184;15787:2;15767:18;;;15760:30;-1:-1:-1;;;15806:18:184;;;15799:41;15857:18;;3687:61:125;15546:335:184;3687:61:125;3800:20;3806:5;3813:6;3800:5;:20::i;:::-;3836:53;;;15467:25:184;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;3836:53:125;;;;;;;;3845:10;;3836:53;;15440:18:184;3836:53:125;;;;;;;3900:36;-1:-1:-1;;;;;3900:5:125;:18;3919:8;3929:6;3900:18;:36::i;1810:165:73:-;1872:7;1899:22;1910:1;1913:4;1919:1;1899:10;:22::i;1535:119::-;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;1328:1782:127:-;1466:12;1636:4;1630:11;-1:-1:-1;;;1759:17:127;1752:93;-1:-1:-1;;;;;1896:4:127;1892:53;1888:1;1869:17;1865:25;1858:88;-1:-1:-1;;;;;2038:2:127;2034:51;2029:2;2010:17;2006:26;1999:87;2172:6;2167:2;2148:17;2144:26;2137:42;3026:2;3023:1;3018:3;2999:17;2996:1;2989:5;2982;2977:52;2545:16;2538:24;2532:2;2514:16;2511:24;2507:1;2503;2497:8;2494:15;2490:46;2487:76;2287:756;2276:767;;;3071:7;3063:40;;;;-1:-1:-1;;;3063:40:127;;16088:2:184;3063:40:127;;;16070:21:184;16127:2;16107:18;;;16100:30;-1:-1:-1;;;16146:18:184;;;16139:50;16206:18;;3063:40:127;15886:344:184;3063:40:127;1456:1654;1328:1782;;;;:::o;6150:325:124:-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;6387:13:124;;;;;;:9;:13;;;;;;;;:23;;;;;;6436:32;160:25:184;;;-1:-1:-1;;;;;;;;;;;6436:32:124;133:18:184;6436:32:124;;;;;;;;6150:325;;:::o;6481:328::-;-1:-1:-1;;;;;6553:15:124;;;;;;:9;:15;;;;;:25;;6572:6;;6553:15;:25;;6572:6;;6553:25;:::i;:::-;;;;-1:-1:-1;;6721:11:124;:21;;;;;;;6768:34;;160:25:184;;;-1:-1:-1;;;;;;;6768:34:124;;;-1:-1:-1;;;;;;;;;;;6768:34:124;148:2:184;133:18;6768:34:124;14:177:184;3116:1607:127;3228:12;3398:4;3392:11;-1:-1:-1;;;3521:17:127;3514:93;-1:-1:-1;;;;;3658:2:127;3654:51;3650:1;3631:17;3627:25;3620:86;3792:6;3787:2;3768:17;3764:26;3757:42;4644:2;4641:1;4637:2;4618:17;4615:1;4608:5;4601;4596:51;4165:16;4158:24;4152:2;4134:16;4131:24;4127:1;4123;4117:8;4114:15;4110:46;4107:76;3907:754;3896:765;;;4689:7;4681:35;;;;-1:-1:-1;;;4681:35:127;;16437:2:184;4681:35:127;;;16419:21:184;16476:2;16456:18;;;16449:30;-1:-1:-1;;;16495:18:184;;;16488:45;16550:18;;4681:35:127;16235:339:184;4681:35:127;3218:1505;3116:1607;;;:::o;196:131:184:-;-1:-1:-1;;;;;271:31:184;;261:42;;251:70;;317:1;314;307:12;251:70;196:131;:::o;332:247::-;391:6;444:2;432:9;423:7;419:23;415:32;412:52;;;460:1;457;450:12;412:52;499:9;486:23;518:31;543:5;518:31;:::i;766:548::-;878:4;907:2;936;925:9;918:21;968:6;962:13;1011:6;1006:2;995:9;991:18;984:34;1036:1;1046:140;1060:6;1057:1;1054:13;1046:140;;;1155:14;;;1151:23;;1145:30;1121:17;;;1140:2;1117:26;1110:66;1075:10;;1046:140;;;1050:3;1235:1;1230:2;1221:6;1210:9;1206:22;1202:31;1195:42;1305:2;1298;1294:7;1289:2;1281:6;1277:15;1273:29;1262:9;1258:45;1254:54;1246:62;;;;766:548;;;;:::o;1319:180::-;1378:6;1431:2;1419:9;1410:7;1406:23;1402:32;1399:52;;;1447:1;1444;1437:12;1399:52;-1:-1:-1;1470:23:184;;1319:180;-1:-1:-1;1319:180:184:o;1504:315::-;1572:6;1580;1633:2;1621:9;1612:7;1608:23;1604:32;1601:52;;;1649:1;1646;1639:12;1601:52;1688:9;1675:23;1707:31;1732:5;1707:31;:::i;:::-;1757:5;1809:2;1794:18;;;;1781:32;;-1:-1:-1;;;1504:315:184:o;2016:173::-;2083:20;;-1:-1:-1;;;;;;2132:32:184;;2122:43;;2112:71;;2179:1;2176;2169:12;2112:71;2016:173;;;:::o;2194:184::-;2252:6;2305:2;2293:9;2284:7;2280:23;2276:32;2273:52;;;2321:1;2318;2311:12;2273:52;2344:28;2362:9;2344:28;:::i;2383:156::-;2449:20;;2509:4;2498:16;;2488:27;;2478:55;;2529:1;2526;2519:12;2544:118;2630:5;2623:13;2616:21;2609:5;2606:32;2596:60;;2652:1;2649;2642:12;2667:383;2738:6;2746;2754;2807:2;2795:9;2786:7;2782:23;2778:32;2775:52;;;2823:1;2820;2813:12;2775:52;2846:27;2863:9;2846:27;:::i;:::-;2836:37;;2892;2925:2;2914:9;2910:18;2892:37;:::i;:::-;2882:47;;2979:2;2968:9;2964:18;2951:32;2992:28;3014:5;2992:28;:::i;:::-;3039:5;3029:15;;;2667:383;;;;;:::o;3055:456::-;3132:6;3140;3148;3201:2;3189:9;3180:7;3176:23;3172:32;3169:52;;;3217:1;3214;3207:12;3169:52;3256:9;3243:23;3275:31;3300:5;3275:31;:::i;:::-;3325:5;-1:-1:-1;3382:2:184;3367:18;;3354:32;3395:33;3354:32;3395:33;:::i;:::-;3055:456;;3447:7;;-1:-1:-1;;;3501:2:184;3486:18;;;;3473:32;;3055:456::o;3928:313::-;3992:6;4000;4053:2;4041:9;4032:7;4028:23;4024:32;4021:52;;;4069:1;4066;4059:12;4021:52;4092:28;4110:9;4092:28;:::i;:::-;4082:38;;4170:2;4159:9;4155:18;4142:32;4183:28;4205:5;4183:28;:::i;:::-;4230:5;4220:15;;;3928:313;;;;;:::o;4246:452::-;4318:6;4326;4334;4387:2;4375:9;4366:7;4362:23;4358:32;4355:52;;;4403:1;4400;4393:12;4355:52;4442:9;4429:23;4461:31;4486:5;4461:31;:::i;:::-;4511:5;-1:-1:-1;4535:36:184;4567:2;4552:18;;4535:36;:::i;4703:315::-;4771:6;4779;4832:2;4820:9;4811:7;4807:23;4803:32;4800:52;;;4848:1;4845;4838:12;4800:52;4884:9;4871:23;4861:33;;4944:2;4933:9;4929:18;4916:32;4957:31;4982:5;4957:31;:::i;5023:407::-;5110:6;5118;5171:2;5159:9;5150:7;5146:23;5142:32;5139:52;;;5187:1;5184;5177:12;5139:52;5226:9;5213:23;5245:31;5270:5;5245:31;:::i;:::-;5295:5;-1:-1:-1;5352:2:184;5337:18;;5324:32;5365:33;5324:32;5365:33;:::i;5914:456::-;5991:6;5999;6007;6060:2;6048:9;6039:7;6035:23;6031:32;6028:52;;;6076:1;6073;6066:12;6028:52;6112:9;6099:23;6089:33;;6172:2;6161:9;6157:18;6144:32;6185:31;6210:5;6185:31;:::i;:::-;6235:5;-1:-1:-1;6292:2:184;6277:18;;6264:32;6305:33;6264:32;6305:33;:::i;6375:460::-;6451:6;6459;6467;6520:2;6508:9;6499:7;6495:23;6491:32;6488:52;;;6536:1;6533;6526:12;6488:52;6575:9;6562:23;6594:31;6619:5;6594:31;:::i;:::-;6644:5;-1:-1:-1;6701:2:184;6686:18;;6673:32;6714:33;6673:32;6714:33;:::i;:::-;6766:7;-1:-1:-1;6792:37:184;6825:2;6810:18;;6792:37;:::i;:::-;6782:47;;6375:460;;;;;:::o;7067:734::-;7178:6;7186;7194;7202;7210;7218;7226;7279:3;7267:9;7258:7;7254:23;7250:33;7247:53;;;7296:1;7293;7286:12;7247:53;7335:9;7322:23;7354:31;7379:5;7354:31;:::i;:::-;7404:5;-1:-1:-1;7461:2:184;7446:18;;7433:32;7474:33;7433:32;7474:33;:::i;:::-;7526:7;-1:-1:-1;7580:2:184;7565:18;;7552:32;;-1:-1:-1;7631:2:184;7616:18;;7603:32;;-1:-1:-1;7654:37:184;7686:3;7671:19;;7654:37;:::i;:::-;7644:47;;7738:3;7727:9;7723:19;7710:33;7700:43;;7790:3;7779:9;7775:19;7762:33;7752:43;;7067:734;;;;;;;;;;:::o;8199:254::-;8264:6;8272;8325:2;8313:9;8304:7;8300:23;8296:32;8293:52;;;8341:1;8338;8331:12;8293:52;8364:27;8381:9;8364:27;:::i;:::-;8354:37;;8410;8443:2;8432:9;8428:18;8410:37;:::i;:::-;8400:47;;8199:254;;;;;:::o;8458:317::-;8524:6;8532;8585:2;8573:9;8564:7;8560:23;8556:32;8553:52;;;8601:1;8598;8591:12;8553:52;8640:9;8627:23;8659:31;8684:5;8659:31;:::i;:::-;8709:5;-1:-1:-1;8733:36:184;8765:2;8750:18;;8733:36;:::i;8780:184::-;8850:6;8903:2;8891:9;8882:7;8878:23;8874:32;8871:52;;;8919:1;8916;8909:12;8871:52;-1:-1:-1;8942:16:184;;8780:184;-1:-1:-1;8780:184:184:o;8969:127::-;9030:10;9025:3;9021:20;9018:1;9011:31;9061:4;9058:1;9051:15;9085:4;9082:1;9075:15;9101:125;9166:9;;;9187:10;;;9184:36;;;9200:18;;:::i;9231:380::-;9310:1;9306:12;;;;9353;;;9374:61;;9428:4;9420:6;9416:17;9406:27;;9374:61;9481:2;9473:6;9470:14;9450:18;9447:38;9444:161;;9527:10;9522:3;9518:20;9515:1;9508:31;9562:4;9559:1;9552:15;9590:4;9587:1;9580:15;9444:161;;9231:380;;;:::o;9616:336::-;9818:2;9800:21;;;9857:2;9837:18;;;9830:30;-1:-1:-1;;;9891:2:184;9876:18;;9869:42;9943:2;9928:18;;9616:336::o;9957:128::-;10024:9;;;10045:11;;;10042:37;;;10059:18;;:::i;10446:400::-;-1:-1:-1;;;;;10702:15:184;;;10684:34;;10754:15;;;;10749:2;10734:18;;10727:43;-1:-1:-1;;;;;;10806:33:184;;;10801:2;10786:18;;10779:61;10634:2;10619:18;;10446:400::o;10851:245::-;10918:6;10971:2;10959:9;10950:7;10946:23;10942:32;10939:52;;;10987:1;10984;10977:12;10939:52;11019:9;11013:16;11038:28;11060:5;11038:28;:::i;13321:1133::-;13451:3;13480:1;13513:6;13507:13;13543:3;13565:1;13593:9;13589:2;13585:18;13575:28;;13653:2;13642:9;13638:18;13675;13665:61;;13719:4;13711:6;13707:17;13697:27;;13665:61;13745:2;13793;13785:6;13782:14;13762:18;13759:38;13756:165;;-1:-1:-1;;;13820:33:184;;13876:4;13873:1;13866:15;13906:4;13827:3;13894:17;13756:165;13937:18;13964:133;;;;14111:1;14106:323;;;;13930:499;;13964:133;-1:-1:-1;;13997:24:184;;13985:37;;14070:14;;14063:22;14051:35;;14042:45;;;-1:-1:-1;13964:133:184;;14106:323;13268:1;13261:14;;;13305:4;13292:18;;14204:1;14218:165;14232:6;14229:1;14226:13;14218:165;;;14310:14;;14297:11;;;14290:35;14353:16;;;;14247:10;;14218:165;;;14222:3;;14412:6;14407:3;14403:16;14396:23;;13930:499;-1:-1:-1;14445:3:184;;13321:1133;-1:-1:-1;;;;;;;;13321:1133:184:o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "19421": readonly [{
                readonly start: 1200;
                readonly length: 32;
            }, {
                readonly start: 2746;
                readonly length: 32;
            }];
            readonly "67608": readonly [{
                readonly start: 897;
                readonly length: 32;
            }];
            readonly "67622": readonly [{
                readonly start: 2897;
                readonly length: 32;
            }];
            readonly "67624": readonly [{
                readonly start: 2945;
                readonly length: 32;
            }];
            readonly "68014": readonly [{
                readonly start: 981;
                readonly length: 32;
            }, {
                readonly start: 1837;
                readonly length: 32;
            }, {
                readonly start: 5077;
                readonly length: 32;
            }, {
                readonly start: 5475;
                readonly length: 32;
            }, {
                readonly start: 5825;
                readonly length: 32;
            }, {
                readonly start: 5977;
                readonly length: 32;
            }, {
                readonly start: 6315;
                readonly length: 32;
            }, {
                readonly start: 6637;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "DOMAIN_SEPARATOR()": "3644e515";
        readonly "allowance(address,address)": "dd62ed3e";
        readonly "approve(address,uint256)": "095ea7b3";
        readonly "asset()": "38d52e0f";
        readonly "authority()": "bf7e214f";
        readonly "balanceOf(address)": "70a08231";
        readonly "canCall(address,address,bytes4)": "b7009613";
        readonly "convertToAssets(uint256)": "07a2d13a";
        readonly "convertToShares(uint256)": "c6e6f592";
        readonly "decimals()": "313ce567";
        readonly "deposit(uint256,address)": "6e553f65";
        readonly "doesRoleHaveCapability(uint8,bytes4)": "e688747b";
        readonly "doesUserHaveRole(address,uint8)": "ea7ca276";
        readonly "getRate()": "679aefce";
        readonly "getRolesWithCapability(bytes4)": "ed0d0efb";
        readonly "getTargetCustomAuthority(address)": "c53a3985";
        readonly "getUserRoles(address)": "06a36aee";
        readonly "isCapabilityPublic(bytes4)": "0bade8a4";
        readonly "isCompetitionMode()": "7a8c63b5";
        readonly "maxDeposit(address)": "402d267d";
        readonly "maxMint(address)": "c63d75b6";
        readonly "maxRedeem(address)": "d905777e";
        readonly "maxWithdraw(address)": "ce96cb77";
        readonly "mint(uint256,address)": "94bf804d";
        readonly "name()": "06fdde03";
        readonly "nonces(address)": "7ecebe00";
        readonly "owner()": "8da5cb5b";
        readonly "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf";
        readonly "previewDeposit(uint256)": "ef8b30f7";
        readonly "previewMint(uint256)": "b3d7f6b9";
        readonly "previewRedeem(uint256)": "4cdad506";
        readonly "previewWithdraw(uint256)": "0a28a477";
        readonly "redeem(uint256,address,address)": "ba087652";
        readonly "setAuthority(address)": "7a9e5e4b";
        readonly "setPublicCapability(bytes4,bool)": "4b5159da";
        readonly "setRate(uint256)": "34fcf437";
        readonly "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b";
        readonly "setTargetCustomAuthority(address,address)": "728b952b";
        readonly "setUserRole(address,uint8,bool)": "67aff484";
        readonly "symbol()": "95d89b41";
        readonly "totalAssets()": "01e1d114";
        readonly "totalSupply()": "18160ddd";
        readonly "transfer(address,uint256)": "a9059cbb";
        readonly "transferFrom(address,address,uint256)": "23b872dd";
        readonly "transferOwnership(address)": "f2fde38b";
        readonly "withdraw(uint256,address,address)": "b460af94";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract ERC20Mintable\",\"name\":\"_asset\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_initialRate\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_isCompetitionMode\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isCompetitionMode\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rate_\",\"type\":\"uint256\"}],\"name\":\"setRate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"MockERC4626\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"deposit(uint256,address)\":{\"notice\":\"Overrides ///\"},\"setRate(uint256)\":{\"notice\":\"Mock ///\"}},\"notice\":\"This mock yield source will accrue interest at a specified rate         Every stateful interaction will accrue interest, so the interest         accrual will approximate continuous compounding as the contract         is called more frequently.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockERC4626.sol\":\"MockERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockERC4626.sol\":{\"keccak256\":\"0x9603c1ce28c2573f6f7b7e099697490f2692a6e8efd075761e87d7bd9e0d730a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0624c56d24400b2dd8fdc556280c9b2bf48c4c65dae30c205f7b7e778a0c767\",\"dweb:/ipfs/QmUuk6oXBkCoX7f1VDG6r1wbfFmU893QP8sZRGLvDkToKe\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/tokens/ERC4626.sol\":{\"keccak256\":\"0xbc0fbc5200d17334a98ce69b49d4c5eb95f5716995679b0bab2562e924fba483\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://6069b0b4b8b6d75f0fcc15b521ac92f80ba4648b22ebccef78727f3472e55431\",\"dweb:/ipfs/Qmer8KABno4MvAZ7uawPpEKyU5mpSBqtTaBBK5Yf1kZPtZ\"]},\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060\",\"dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "contract ERC20Mintable";
                    readonly name: "_asset";
                    readonly type: "address";
                }, {
                    readonly internalType: "string";
                    readonly name: "_name";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "_symbol";
                    readonly type: "string";
                }, {
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
                    readonly name: "caller";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Deposit";
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
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "caller";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Withdraw";
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
                readonly name: "asset";
                readonly outputs: readonly [{
                    readonly internalType: "contract ERC20";
                    readonly name: "";
                    readonly type: "address";
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
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "convertToAssets";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "convertToShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                    readonly internalType: "uint256";
                    readonly name: "_assets";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_receiver";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deposit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxDeposit";
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
                readonly name: "maxMint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxRedeem";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "maxWithdraw";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shares";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_receiver";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "mint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
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
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewDeposit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewMint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shares";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewRedeem";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "assets";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "previewWithdraw";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shares";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_receiver";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "redeem";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
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
                readonly name: "totalAssets";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                    readonly internalType: "uint256";
                    readonly name: "_assets";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "_receiver";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "withdraw";
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
                    readonly "deposit(uint256,address)": {
                        readonly notice: "Overrides ///";
                    };
                    readonly "setRate(uint256)": {
                        readonly notice: "Mock ///";
                    };
                };
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
                readonly "contracts/test/MockERC4626.sol": "MockERC4626";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3";
                readonly urls: readonly ["bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398", "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16";
                readonly urls: readonly ["bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240", "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97";
                readonly urls: readonly ["bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1", "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd";
                readonly urls: readonly ["bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f", "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597";
                readonly urls: readonly ["bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477", "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a";
                readonly urls: readonly ["bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3", "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002";
                readonly urls: readonly ["bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3", "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191";
                readonly urls: readonly ["bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd", "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868";
                readonly urls: readonly ["bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb", "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf";
                readonly urls: readonly ["bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d", "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/ERC20Mintable.sol": {
                readonly keccak256: "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d";
                readonly urls: readonly ["bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df", "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockERC4626.sol": {
                readonly keccak256: "0x9603c1ce28c2573f6f7b7e099697490f2692a6e8efd075761e87d7bd9e0d730a";
                readonly urls: readonly ["bzz-raw://f0624c56d24400b2dd8fdc556280c9b2bf48c4c65dae30c205f7b7e778a0c767", "dweb:/ipfs/QmUuk6oXBkCoX7f1VDG6r1wbfFmU893QP8sZRGLvDkToKe"];
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
            readonly "lib/solmate/src/tokens/ERC4626.sol": {
                readonly keccak256: "0xbc0fbc5200d17334a98ce69b49d4c5eb95f5716995679b0bab2562e924fba483";
                readonly urls: readonly ["bzz-raw://6069b0b4b8b6d75f0fcc15b521ac92f80ba4648b22ebccef78727f3472e55431", "dweb:/ipfs/Qmer8KABno4MvAZ7uawPpEKyU5mpSBqtTaBBK5Yf1kZPtZ"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/utils/FixedPointMathLib.sol": {
                readonly keccak256: "0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843";
                readonly urls: readonly ["bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9", "dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/utils/SafeTransferLib.sol": {
                readonly keccak256: "0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b";
                readonly urls: readonly ["bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060", "dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv"];
                readonly license: "AGPL-3.0-only";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockERC4626.sol";
        readonly id: 19689;
        readonly exportedSymbols: {
            readonly Authority: readonly [67278];
            readonly ERC20: readonly [67971];
            readonly ERC20Mintable: readonly [19264];
            readonly ERC4626: readonly [68492];
            readonly FixedPointMath: readonly [14294];
            readonly MockERC4626: readonly [19688];
            readonly MultiRolesAuthority: readonly [67583];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:3700:83";
        readonly nodes: readonly [{
            readonly id: 19395;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:83";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 19397;
            readonly nodeType: "ImportDirective";
            readonly src: "64:50:83";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/auth/Auth.sol";
            readonly file: "solmate/auth/Auth.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19689;
            readonly sourceUnit: 67279;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19396;
                    readonly name: "Authority";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 67278;
                    readonly src: "73:9:83";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19399;
            readonly nodeType: "ImportDirective";
            readonly src: "115:87:83";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol";
            readonly file: "solmate/auth/authorities/MultiRolesAuthority.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19689;
            readonly sourceUnit: 67584;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19398;
                    readonly name: "MultiRolesAuthority";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 67583;
                    readonly src: "124:19:83";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19401;
            readonly nodeType: "ImportDirective";
            readonly src: "203:49:83";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/tokens/ERC20.sol";
            readonly file: "solmate/tokens/ERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19689;
            readonly sourceUnit: 67972;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19400;
                    readonly name: "ERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 67971;
                    readonly src: "212:5:83";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19403;
            readonly nodeType: "ImportDirective";
            readonly src: "253:53:83";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/tokens/ERC4626.sol";
            readonly file: "solmate/tokens/ERC4626.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19689;
            readonly sourceUnit: 68493;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19402;
                    readonly name: "ERC4626";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 68492;
                    readonly src: "262:7:83";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19405;
            readonly nodeType: "ImportDirective";
            readonly src: "307:69:83";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../src/libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19689;
            readonly sourceUnit: 14295;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19404;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14294;
                    readonly src: "316:14:83";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19407;
            readonly nodeType: "ImportDirective";
            readonly src: "377:52:83";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/test/ERC20Mintable.sol";
            readonly file: "./ERC20Mintable.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19689;
            readonly sourceUnit: 19265;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19406;
                    readonly name: "ERC20Mintable";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19264;
                    readonly src: "386:13:83";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19688;
            readonly nodeType: "ContractDefinition";
            readonly src: "963:2775:83";
            readonly nodes: readonly [{
                readonly id: 19415;
                readonly nodeType: "UsingForDirective";
                readonly src: "1022:33:83";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 19413;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1028:14:83"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 14294;
                    readonly src: "1028:14:83";
                };
                readonly typeName: {
                    readonly id: 19414;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1047:7:83";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 19417;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1061:22:83";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_rate";
                readonly nameLocation: "1078:5:83";
                readonly scope: 19688;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 19416;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1061:7:83";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 19419;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1089:29:83";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_lastUpdated";
                readonly nameLocation: "1106:12:83";
                readonly scope: 19688;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 19418;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1089:7:83";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 19421;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1125:39:83";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "7a8c63b5";
                readonly mutability: "immutable";
                readonly name: "isCompetitionMode";
                readonly nameLocation: "1147:17:83";
                readonly scope: 19688;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bool";
                    readonly typeString: "bool";
                };
                readonly typeName: {
                    readonly id: 19420;
                    readonly name: "bool";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1125:4:83";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 19470;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1171:442:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19469;
                    readonly nodeType: "Block";
                    readonly src: "1488:125:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 19458;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19456;
                                readonly name: "_rate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19417;
                                readonly src: "1498:5:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 19457;
                                readonly name: "_initialRate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19430;
                                readonly src: "1506:12:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1498:20:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19459;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1498:20:83";
                    }, {
                        readonly expression: {
                            readonly id: 19463;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19460;
                                readonly name: "_lastUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19419;
                                readonly src: "1528:12:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 19461;
                                    readonly name: "block";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -4;
                                    readonly src: "1543:5:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_block";
                                        readonly typeString: "block";
                                    };
                                };
                                readonly id: 19462;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1549:9:83";
                                readonly memberName: "timestamp";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1543:15:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1528:30:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19464;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1528:30:83";
                    }, {
                        readonly expression: {
                            readonly id: 19467;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19465;
                                readonly name: "isCompetitionMode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19421;
                                readonly src: "1568:17:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 19466;
                                readonly name: "_isCompetitionMode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19434;
                                readonly src: "1588:18:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "1568:38:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19468;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1568:38:83";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 19440;
                                readonly name: "_asset";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19424;
                                readonly src: "1396:6:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_ERC20Mintable_$19264";
                                    readonly typeString: "contract ERC20Mintable";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_ERC20Mintable_$19264";
                                    readonly typeString: "contract ERC20Mintable";
                                }];
                                readonly id: 19439;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "1388:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 19438;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1388:7:83";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 19441;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1388:15:83";
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
                            readonly id: 19437;
                            readonly name: "ERC20";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 67971;
                            readonly src: "1382:5:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_contract$_ERC20_$67971_$";
                                readonly typeString: "type(contract ERC20)";
                            };
                        };
                        readonly id: 19442;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1382:22:83";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$67971";
                            readonly typeString: "contract ERC20";
                        };
                    }, {
                        readonly id: 19443;
                        readonly name: "_name";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19426;
                        readonly src: "1406:5:83";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string memory";
                        };
                    }, {
                        readonly id: 19444;
                        readonly name: "_symbol";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19428;
                        readonly src: "1413:7:83";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string memory";
                        };
                    }];
                    readonly id: 19445;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 19436;
                        readonly name: "ERC4626";
                        readonly nameLocations: readonly ["1374:7:83"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 68492;
                        readonly src: "1374:7:83";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1374:47:83";
                }, {
                    readonly arguments: readonly [{
                        readonly id: 19447;
                        readonly name: "_admin";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19432;
                        readonly src: "1450:6:83";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 19451;
                                readonly name: "this";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: -28;
                                readonly src: "1476:4:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_MockERC4626_$19688";
                                    readonly typeString: "contract MockERC4626";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_MockERC4626_$19688";
                                    readonly typeString: "contract MockERC4626";
                                }];
                                readonly id: 19450;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "1468:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 19449;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1468:7:83";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 19452;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1468:13:83";
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
                            readonly id: 19448;
                            readonly name: "Authority";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 67278;
                            readonly src: "1458:9:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_contract$_Authority_$67278_$";
                                readonly typeString: "type(contract Authority)";
                            };
                        };
                        readonly id: 19453;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1458:24:83";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$67278";
                            readonly typeString: "contract Authority";
                        };
                    }];
                    readonly id: 19454;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 19446;
                        readonly name: "MultiRolesAuthority";
                        readonly nameLocations: readonly ["1430:19:83"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 67583;
                        readonly src: "1430:19:83";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1430:53:83";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 19435;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19424;
                        readonly mutability: "mutable";
                        readonly name: "_asset";
                        readonly nameLocation: "1206:6:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19470;
                        readonly src: "1192:20:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20Mintable_$19264";
                            readonly typeString: "contract ERC20Mintable";
                        };
                        readonly typeName: {
                            readonly id: 19423;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 19422;
                                readonly name: "ERC20Mintable";
                                readonly nameLocations: readonly ["1192:13:83"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 19264;
                                readonly src: "1192:13:83";
                            };
                            readonly referencedDeclaration: 19264;
                            readonly src: "1192:13:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20Mintable_$19264";
                                readonly typeString: "contract ERC20Mintable";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19426;
                        readonly mutability: "mutable";
                        readonly name: "_name";
                        readonly nameLocation: "1236:5:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19470;
                        readonly src: "1222:19:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 19425;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1222:6:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19428;
                        readonly mutability: "mutable";
                        readonly name: "_symbol";
                        readonly nameLocation: "1265:7:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19470;
                        readonly src: "1251:21:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 19427;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1251:6:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19430;
                        readonly mutability: "mutable";
                        readonly name: "_initialRate";
                        readonly nameLocation: "1290:12:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19470;
                        readonly src: "1282:20:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19429;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1282:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19432;
                        readonly mutability: "mutable";
                        readonly name: "_admin";
                        readonly nameLocation: "1320:6:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19470;
                        readonly src: "1312:14:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19431;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1312:7:83";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19434;
                        readonly mutability: "mutable";
                        readonly name: "_isCompetitionMode";
                        readonly nameLocation: "1341:18:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19470;
                        readonly src: "1336:23:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 19433;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1336:4:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1182:183:83";
                };
                readonly returnParameters: {
                    readonly id: 19455;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1488:0:83";
                };
                readonly scope: 19688;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 19487;
                readonly nodeType: "ModifierDefinition";
                readonly src: "1619:235:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19486;
                    readonly nodeType: "Block";
                    readonly src: "1660:194:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 19472;
                            readonly name: "isCompetitionMode";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19421;
                            readonly src: "1674:17:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19484;
                        readonly nodeType: "IfStatement";
                        readonly src: "1670:167:83";
                        readonly trueBody: {
                            readonly id: 19483;
                            readonly nodeType: "Block";
                            readonly src: "1693:144:83";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 19475;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "1745:3:83";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 19476;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "1749:6:83";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "1745:10:83";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly expression: {
                                                readonly id: 19477;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "1757:3:83";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 19478;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "1761:3:83";
                                            readonly memberName: "sig";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "1757:7:83";
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
                                            readonly id: 19474;
                                            readonly name: "isAuthorized";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 67210;
                                            readonly src: "1732:12:83";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                                readonly typeString: "function (address,bytes4) view returns (bool)";
                                            };
                                        };
                                        readonly id: 19479;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1732:33:83";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }, {
                                        readonly hexValue: "4d6f636b455243343632363a206e6f7420617574686f72697a6564";
                                        readonly id: 19480;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "1783:29:83";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_a7626d0608fc151c96b381abf9f1ef1d92bb12f776fb43bcd63a3eefd31ed019";
                                            readonly typeString: "literal_string \"MockERC4626: not authorized\"";
                                        };
                                        readonly value: "MockERC4626: not authorized";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        }, {
                                            readonly typeIdentifier: "t_stringliteral_a7626d0608fc151c96b381abf9f1ef1d92bb12f776fb43bcd63a3eefd31ed019";
                                            readonly typeString: "literal_string \"MockERC4626: not authorized\"";
                                        }];
                                        readonly id: 19473;
                                        readonly name: "require";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [-18, -18];
                                        readonly referencedDeclaration: -18;
                                        readonly src: "1707:7:83";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                            readonly typeString: "function (bool,string memory) pure";
                                        };
                                    };
                                    readonly id: 19481;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1707:119:83";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 19482;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "1707:119:83";
                            }];
                        };
                    }, {
                        readonly id: 19485;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "1846:1:83";
                    }];
                };
                readonly name: "requiresAuthDuringCompetition";
                readonly nameLocation: "1628:29:83";
                readonly parameters: {
                    readonly id: 19471;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1657:2:83";
                };
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19508;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1883:185:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19507;
                    readonly nodeType: "Block";
                    readonly src: "1992:76:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 19498;
                                readonly name: "_accrue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19645;
                                readonly src: "2002:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 19499;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2002:9:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 19500;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2002:9:83";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19503;
                                readonly name: "_assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19490;
                                readonly src: "2042:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19504;
                                readonly name: "_receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19492;
                                readonly src: "2051:9:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 19501;
                                    readonly name: "super";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -25;
                                    readonly src: "2028:5:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_super$_MockERC4626_$19688_$";
                                        readonly typeString: "type(contract super MockERC4626)";
                                    };
                                };
                                readonly id: 19502;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2034:7:83";
                                readonly memberName: "deposit";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 68088;
                                readonly src: "2028:13:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,address) returns (uint256)";
                                };
                            };
                            readonly id: 19505;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2028:33:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19497;
                        readonly id: 19506;
                        readonly nodeType: "Return";
                        readonly src: "2021:40:83";
                    }];
                };
                readonly baseFunctions: readonly [68088];
                readonly documentation: {
                    readonly id: 19488;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1860:18:83";
                    readonly text: "Overrides ///";
                };
                readonly functionSelector: "6e553f65";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deposit";
                readonly nameLocation: "1892:7:83";
                readonly overrides: {
                    readonly id: 19494;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "1965:8:83";
                };
                readonly parameters: {
                    readonly id: 19493;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19490;
                        readonly mutability: "mutable";
                        readonly name: "_assets";
                        readonly nameLocation: "1917:7:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19508;
                        readonly src: "1909:15:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19489;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1909:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19492;
                        readonly mutability: "mutable";
                        readonly name: "_receiver";
                        readonly nameLocation: "1942:9:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19508;
                        readonly src: "1934:17:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19491;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1934:7:83";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1899:58:83";
                };
                readonly returnParameters: {
                    readonly id: 19497;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19496;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19508;
                        readonly src: "1983:7:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19495;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1983:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1982:9:83";
                };
                readonly scope: 19688;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 19528;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2074:179:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19527;
                    readonly nodeType: "Block";
                    readonly src: "2180:73:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 19518;
                                readonly name: "_accrue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19645;
                                readonly src: "2190:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 19519;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2190:9:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 19520;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2190:9:83";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19523;
                                readonly name: "_shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19510;
                                readonly src: "2227:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19524;
                                readonly name: "_receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19512;
                                readonly src: "2236:9:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 19521;
                                    readonly name: "super";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -25;
                                    readonly src: "2216:5:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_super$_MockERC4626_$19688_$";
                                        readonly typeString: "type(contract super MockERC4626)";
                                    };
                                };
                                readonly id: 19522;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2222:4:83";
                                readonly memberName: "mint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 68134;
                                readonly src: "2216:10:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,address) returns (uint256)";
                                };
                            };
                            readonly id: 19525;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2216:30:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19517;
                        readonly id: 19526;
                        readonly nodeType: "Return";
                        readonly src: "2209:37:83";
                    }];
                };
                readonly baseFunctions: readonly [68134];
                readonly functionSelector: "94bf804d";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mint";
                readonly nameLocation: "2083:4:83";
                readonly overrides: {
                    readonly id: 19514;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2153:8:83";
                };
                readonly parameters: {
                    readonly id: 19513;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19510;
                        readonly mutability: "mutable";
                        readonly name: "_shares";
                        readonly nameLocation: "2105:7:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19528;
                        readonly src: "2097:15:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19509;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2097:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19512;
                        readonly mutability: "mutable";
                        readonly name: "_receiver";
                        readonly nameLocation: "2130:9:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19528;
                        readonly src: "2122:17:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19511;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2122:7:83";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2087:58:83";
                };
                readonly returnParameters: {
                    readonly id: 19517;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19516;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19528;
                        readonly src: "2171:7:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19515;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2171:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2170:9:83";
                };
                readonly scope: 19688;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 19551;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2259:219:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19550;
                    readonly nodeType: "Block";
                    readonly src: "2393:85:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 19540;
                                readonly name: "_accrue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19645;
                                readonly src: "2403:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 19541;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2403:9:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 19542;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2403:9:83";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19545;
                                readonly name: "_assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19530;
                                readonly src: "2444:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19546;
                                readonly name: "_receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19532;
                                readonly src: "2453:9:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 19547;
                                readonly name: "_owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19534;
                                readonly src: "2464:6:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 19543;
                                    readonly name: "super";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -25;
                                    readonly src: "2429:5:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_super$_MockERC4626_$19688_$";
                                        readonly typeString: "type(contract super MockERC4626)";
                                    };
                                };
                                readonly id: 19544;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2435:8:83";
                                readonly memberName: "withdraw";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 68212;
                                readonly src: "2429:14:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,address,address) returns (uint256)";
                                };
                            };
                            readonly id: 19548;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2429:42:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19539;
                        readonly id: 19549;
                        readonly nodeType: "Return";
                        readonly src: "2422:49:83";
                    }];
                };
                readonly baseFunctions: readonly [68212];
                readonly functionSelector: "b460af94";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "withdraw";
                readonly nameLocation: "2268:8:83";
                readonly overrides: {
                    readonly id: 19536;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2366:8:83";
                };
                readonly parameters: {
                    readonly id: 19535;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19530;
                        readonly mutability: "mutable";
                        readonly name: "_assets";
                        readonly nameLocation: "2294:7:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19551;
                        readonly src: "2286:15:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19529;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2286:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19532;
                        readonly mutability: "mutable";
                        readonly name: "_receiver";
                        readonly nameLocation: "2319:9:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19551;
                        readonly src: "2311:17:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19531;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2311:7:83";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19534;
                        readonly mutability: "mutable";
                        readonly name: "_owner";
                        readonly nameLocation: "2346:6:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19551;
                        readonly src: "2338:14:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19533;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2338:7:83";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2276:82:83";
                };
                readonly returnParameters: {
                    readonly id: 19539;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19538;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19551;
                        readonly src: "2384:7:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19537;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2384:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2383:9:83";
                };
                readonly scope: 19688;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 19574;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2484:215:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19573;
                    readonly nodeType: "Block";
                    readonly src: "2616:83:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 19563;
                                readonly name: "_accrue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19645;
                                readonly src: "2626:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 19564;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2626:9:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 19565;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2626:9:83";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19568;
                                readonly name: "_shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19553;
                                readonly src: "2665:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19569;
                                readonly name: "_receiver";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19555;
                                readonly src: "2674:9:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 19570;
                                readonly name: "_owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19557;
                                readonly src: "2685:6:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 19566;
                                    readonly name: "super";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -25;
                                    readonly src: "2652:5:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_super$_MockERC4626_$19688_$";
                                        readonly typeString: "type(contract super MockERC4626)";
                                    };
                                };
                                readonly id: 19567;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2658:6:83";
                                readonly memberName: "redeem";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 68296;
                                readonly src: "2652:12:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,address,address) returns (uint256)";
                                };
                            };
                            readonly id: 19571;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2652:40:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19562;
                        readonly id: 19572;
                        readonly nodeType: "Return";
                        readonly src: "2645:47:83";
                    }];
                };
                readonly baseFunctions: readonly [68296];
                readonly functionSelector: "ba087652";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "redeem";
                readonly nameLocation: "2493:6:83";
                readonly overrides: {
                    readonly id: 19559;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2589:8:83";
                };
                readonly parameters: {
                    readonly id: 19558;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19553;
                        readonly mutability: "mutable";
                        readonly name: "_shares";
                        readonly nameLocation: "2517:7:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19574;
                        readonly src: "2509:15:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19552;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2509:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19555;
                        readonly mutability: "mutable";
                        readonly name: "_receiver";
                        readonly nameLocation: "2542:9:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19574;
                        readonly src: "2534:17:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19554;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2534:7:83";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19557;
                        readonly mutability: "mutable";
                        readonly name: "_owner";
                        readonly nameLocation: "2569:6:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19574;
                        readonly src: "2561:14:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19556;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2561:7:83";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2499:82:83";
                };
                readonly returnParameters: {
                    readonly id: 19562;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19561;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19574;
                        readonly src: "2607:7:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19560;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2607:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2606:9:83";
                };
                readonly scope: 19688;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 19592;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2705:140:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19591;
                    readonly nodeType: "Block";
                    readonly src: "2767:78:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19589;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 19584;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "2808:4:83";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_MockERC4626_$19688";
                                            readonly typeString: "contract MockERC4626";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_MockERC4626_$19688";
                                            readonly typeString: "contract MockERC4626";
                                        }];
                                        readonly id: 19583;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2800:7:83";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 19582;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2800:7:83";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 19585;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2800:13:83";
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
                                    readonly expression: {
                                        readonly id: 19580;
                                        readonly name: "asset";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 68014;
                                        readonly src: "2784:5:83";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_ERC20_$67971";
                                            readonly typeString: "contract ERC20";
                                        };
                                    };
                                    readonly id: 19581;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2790:9:83";
                                    readonly memberName: "balanceOf";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 67614;
                                    readonly src: "2784:15:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 19586;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2784:30:83";
                                readonly tryCall: false;
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
                                    readonly id: 19587;
                                    readonly name: "_getAccruedInterest";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19687;
                                    readonly src: "2817:19:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 19588;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2817:21:83";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2784:54:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19579;
                        readonly id: 19590;
                        readonly nodeType: "Return";
                        readonly src: "2777:61:83";
                    }];
                };
                readonly baseFunctions: readonly [68301];
                readonly functionSelector: "01e1d114";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalAssets";
                readonly nameLocation: "2714:11:83";
                readonly overrides: {
                    readonly id: 19576;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2740:8:83";
                };
                readonly parameters: {
                    readonly id: 19575;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2725:2:83";
                };
                readonly returnParameters: {
                    readonly id: 19579;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19578;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19592;
                        readonly src: "2758:7:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19577;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2758:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2757:9:83";
                };
                readonly scope: 19688;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 19608;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2869:122:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19607;
                    readonly nodeType: "Block";
                    readonly src: "2941:50:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 19600;
                                readonly name: "_accrue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19645;
                                readonly src: "2951:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 19601;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2951:9:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 19602;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2951:9:83";
                    }, {
                        readonly expression: {
                            readonly id: 19605;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19603;
                                readonly name: "_rate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19417;
                                readonly src: "2970:5:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 19604;
                                readonly name: "_rate_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19595;
                                readonly src: "2978:6:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2970:14:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19606;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2970:14:83";
                    }];
                };
                readonly documentation: {
                    readonly id: 19593;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2851:13:83";
                    readonly text: "Mock ///";
                };
                readonly functionSelector: "34fcf437";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 19598;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 19597;
                        readonly name: "requiresAuthDuringCompetition";
                        readonly nameLocations: readonly ["2911:29:83"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 19487;
                        readonly src: "2911:29:83";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "2911:29:83";
                }];
                readonly name: "setRate";
                readonly nameLocation: "2878:7:83";
                readonly parameters: {
                    readonly id: 19596;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19595;
                        readonly mutability: "mutable";
                        readonly name: "_rate_";
                        readonly nameLocation: "2894:6:83";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19608;
                        readonly src: "2886:14:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19594;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2886:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2885:16:83";
                };
                readonly returnParameters: {
                    readonly id: 19599;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2941:0:83";
                };
                readonly scope: 19688;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 19616;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2997:80:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19615;
                    readonly nodeType: "Block";
                    readonly src: "3048:29:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 19613;
                            readonly name: "_rate";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19417;
                            readonly src: "3065:5:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19612;
                        readonly id: 19614;
                        readonly nodeType: "Return";
                        readonly src: "3058:12:83";
                    }];
                };
                readonly functionSelector: "679aefce";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getRate";
                readonly nameLocation: "3006:7:83";
                readonly parameters: {
                    readonly id: 19609;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3013:2:83";
                };
                readonly returnParameters: {
                    readonly id: 19612;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19611;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19616;
                        readonly src: "3039:7:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19610;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3039:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3038:9:83";
                };
                readonly scope: 19688;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 19645;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3083:221:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19644;
                    readonly nodeType: "Block";
                    readonly src: "3111:193:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19620];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19620;
                            readonly mutability: "mutable";
                            readonly name: "interest";
                            readonly nameLocation: "3129:8:83";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19644;
                            readonly src: "3121:16:83";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19619;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3121:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19623;
                        readonly initialValue: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 19621;
                                readonly name: "_getAccruedInterest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19687;
                                readonly src: "3140:19:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 19622;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3140:21:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3121:40:83";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19626;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19624;
                                readonly name: "interest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19620;
                                readonly src: "3175:8:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 19625;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3186:1:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "3175:12:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19638;
                        readonly nodeType: "IfStatement";
                        readonly src: "3171:87:83";
                        readonly trueBody: {
                            readonly id: 19637;
                            readonly nodeType: "Block";
                            readonly src: "3189:69:83";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 19634;
                                        readonly name: "interest";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19620;
                                        readonly src: "3238:8:83";
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
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly id: 19630;
                                                    readonly name: "asset";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68014;
                                                    readonly src: "3225:5:83";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_ERC20_$67971";
                                                        readonly typeString: "contract ERC20";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_contract$_ERC20_$67971";
                                                        readonly typeString: "contract ERC20";
                                                    }];
                                                    readonly id: 19629;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3217:7:83";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 19628;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3217:7:83";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 19631;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3217:14:83";
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
                                                readonly id: 19627;
                                                readonly name: "ERC20Mintable";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19264;
                                                readonly src: "3203:13:83";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$19264_$";
                                                    readonly typeString: "type(contract ERC20Mintable)";
                                                };
                                            };
                                            readonly id: 19632;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3203:29:83";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_ERC20Mintable_$19264";
                                                readonly typeString: "contract ERC20Mintable";
                                            };
                                        };
                                        readonly id: 19633;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3233:4:83";
                                        readonly memberName: "mint";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 19219;
                                        readonly src: "3203:34:83";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_uint256_$returns$__$";
                                            readonly typeString: "function (uint256) external";
                                        };
                                    };
                                    readonly id: 19635;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3203:44:83";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 19636;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3203:44:83";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 19642;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19639;
                                readonly name: "_lastUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19419;
                                readonly src: "3267:12:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 19640;
                                    readonly name: "block";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -4;
                                    readonly src: "3282:5:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_block";
                                        readonly typeString: "block";
                                    };
                                };
                                readonly id: 19641;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3288:9:83";
                                readonly memberName: "timestamp";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3282:15:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3267:30:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19643;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3267:30:83";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_accrue";
                readonly nameLocation: "3092:7:83";
                readonly parameters: {
                    readonly id: 19617;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3099:2:83";
                };
                readonly returnParameters: {
                    readonly id: 19618;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3111:0:83";
                };
                readonly scope: 19688;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19687;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3310:426:83";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19686;
                    readonly nodeType: "Block";
                    readonly src: "3373:363:83";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19652;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19650;
                                readonly name: "_rate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19417;
                                readonly src: "3387:5:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 19651;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3396:1:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "3387:10:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19656;
                        readonly nodeType: "IfStatement";
                        readonly src: "3383:49:83";
                        readonly trueBody: {
                            readonly id: 19655;
                            readonly nodeType: "Block";
                            readonly src: "3399:33:83";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly hexValue: "30";
                                    readonly id: 19653;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3420:1:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly functionReturnParameters: 19649;
                                readonly id: 19654;
                                readonly nodeType: "Return";
                                readonly src: "3413:8:83";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [19658];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19658;
                            readonly mutability: "mutable";
                            readonly name: "timeElapsed";
                            readonly nameLocation: "3503:11:83";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19686;
                            readonly src: "3495:19:83";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19657;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3495:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19667;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly hexValue: "333635";
                                readonly id: 19665;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3571:8:83";
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
                                        readonly id: 19662;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 19659;
                                                readonly name: "block";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -4;
                                                readonly src: "3518:5:83";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_block";
                                                    readonly typeString: "block";
                                                };
                                            };
                                            readonly id: 19660;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3524:9:83";
                                            readonly memberName: "timestamp";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "3518:15:83";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 19661;
                                            readonly name: "_lastUpdated";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19419;
                                            readonly src: "3536:12:83";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "3518:30:83";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 19663;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "3517:32:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19664;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3550:7:83";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 13590;
                                readonly src: "3517:40:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19666;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3517:72:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3495:94:83";
                    }, {
                        readonly assignments: readonly [19669];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19669;
                            readonly mutability: "mutable";
                            readonly name: "accrued";
                            readonly nameLocation: "3607:7:83";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19686;
                            readonly src: "3599:15:83";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19668;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3599:7:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19683;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 19680;
                                    readonly name: "timeElapsed";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19658;
                                    readonly src: "3683:11:83";
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
                                        readonly id: 19678;
                                        readonly name: "_rate";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19417;
                                        readonly src: "3669:5:83";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19679;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3675:7:83";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 13572;
                                    readonly src: "3669:13:83";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19681;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3669:26:83";
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
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 19674;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "3641:4:83";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockERC4626_$19688";
                                                readonly typeString: "contract MockERC4626";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_MockERC4626_$19688";
                                                readonly typeString: "contract MockERC4626";
                                            }];
                                            readonly id: 19673;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3633:7:83";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 19672;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3633:7:83";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 19675;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3633:13:83";
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
                                        readonly expression: {
                                            readonly id: 19670;
                                            readonly name: "asset";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 68014;
                                            readonly src: "3617:5:83";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_ERC20_$67971";
                                                readonly typeString: "contract ERC20";
                                            };
                                        };
                                        readonly id: 19671;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3623:9:83";
                                        readonly memberName: "balanceOf";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 67614;
                                        readonly src: "3617:15:83";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                            readonly typeString: "function (address) view external returns (uint256)";
                                        };
                                    };
                                    readonly id: 19676;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3617:30:83";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19677;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3648:7:83";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 13572;
                                readonly src: "3617:38:83";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19682;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3617:88:83";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3599:106:83";
                    }, {
                        readonly expression: {
                            readonly id: 19684;
                            readonly name: "accrued";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19669;
                            readonly src: "3722:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19649;
                        readonly id: 19685;
                        readonly nodeType: "Return";
                        readonly src: "3715:14:83";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getAccruedInterest";
                readonly nameLocation: "3319:19:83";
                readonly parameters: {
                    readonly id: 19646;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3338:2:83";
                };
                readonly returnParameters: {
                    readonly id: 19649;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19648;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19687;
                        readonly src: "3364:7:83";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19647;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3364:7:83";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3363:9:83";
                };
                readonly scope: 19688;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 19409;
                    readonly name: "ERC4626";
                    readonly nameLocations: readonly ["987:7:83"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 68492;
                    readonly src: "987:7:83";
                };
                readonly id: 19410;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "987:7:83";
            }, {
                readonly baseName: {
                    readonly id: 19411;
                    readonly name: "MultiRolesAuthority";
                    readonly nameLocations: readonly ["996:19:83"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 67583;
                    readonly src: "996:19:83";
                };
                readonly id: 19412;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "996:19:83";
            }];
            readonly canonicalName: "MockERC4626";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 19408;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "431:532:83";
                readonly text: "@author DELV\n @title MockERC4626\n @notice This mock yield source will accrue interest at a specified rate\n         Every stateful interaction will accrue interest, so the interest\n         accrual will approximate continuous compounding as the contract\n         is called more frequently.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [19688, 67583, 67278, 67265, 68492, 67971];
            readonly name: "MockERC4626";
            readonly nameLocation: "972:11:83";
            readonly scope: 19689;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [67115, 67122, 67296, 67302, 67310, 67317, 67594, 67602, 67999, 68011];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 83;
};
//# sourceMappingURL=MockERC4626.d.ts.map