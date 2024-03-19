export declare const MultiRolesAuthority: {
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_authority";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly stateMutability: "nonpayable";
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
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50604051610c8c380380610c8c83398101604081905261002f916100e1565b600080546001600160a01b03199081166001600160a01b0385811691821784556001805490931690851617909155604051849284929133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505061011b565b6001600160a01b03811681146100de57600080fd5b50565b600080604083850312156100f457600080fd5b82516100ff816100c9565b6020840151909250610110816100c9565b809150509250929050565b610b628061012a6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063e688747b11610066578063e688747b1461023b578063ea7ca27614610271578063ed0d0efb146102a8578063f2fde38b146102c857600080fd5b80638da5cb5b146101c1578063b7009613146101ec578063bf7e214f146101ff578063c53a39851461021257600080fd5b80634b5159da116100d35780634b5159da1461017557806367aff48414610188578063728b952b1461019b5780637a9e5e4b146101ae57600080fd5b806306a36aee146100fa5780630bade8a41461012d5780630ea9b75b14610160575b600080fd5b61011a6101083660046108c8565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b61015061013b366004610902565b60046020526000908152604090205460ff1681565b6040519015158152602001610124565b61017361016e36600461093c565b6102db565b005b610173610183366004610983565b6103bc565b6101736101963660046109ba565b61044e565b6101736101a93660046109e8565b610516565b6101736101bc3660046108c8565b61059f565b6000546101d4906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b6101506101fa366004610a16565b610689565b6001546101d4906001600160a01b031681565b6101d46102203660046108c8565b6002602052600090815260409020546001600160a01b031681565b610150610249366004610a5d565b6001600160e01b03191660009081526005602052604090205460ff919091161c600116151590565b61015061027f366004610a90565b6001600160a01b0391909116600090815260036020526040902054600160ff9092161c16151590565b61011a6102b6366004610902565b60056020526000908152604090205481565b6101736102d63660046108c8565b610789565b6102f1336000356001600160e01b031916610806565b6103165760405162461bcd60e51b815260040161030d90610abc565b60405180910390fd5b8015610346576001600160e01b0319821660009081526005602052604090208054600160ff86161b17905561036d565b6001600160e01b0319821660009081526005602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516103af911515815260200190565b60405180910390a3505050565b6103d2336000356001600160e01b031916610806565b6103ee5760405162461bcd60e51b815260040161030d90610abc565b6001600160e01b03198216600081815260046020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610464336000356001600160e01b031916610806565b6104805760405162461bcd60e51b815260040161030d90610abc565b80156104af576001600160a01b03831660009081526003602052604090208054600160ff85161b1790556104d5565b6001600160a01b03831660009081526003602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516103af911515815260200190565b61052c336000356001600160e01b031916610806565b6105485760405162461bcd60e51b815260040161030d90610abc565b6001600160a01b0382811660008181526002602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6000546001600160a01b0316331480610634575060015460405163b700961360e01b81526001600160a01b039091169063b7009613906105f390339030906001600160e01b03196000351690600401610ae2565b602060405180830381865afa158015610610573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106349190610b0f565b61063d57600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001600160a01b0380831660009081526002602052604081205490911680156107255760405163b700961360e01b81526001600160a01b0382169063b7009613906106dc90889088908890600401610ae2565b602060405180830381865afa1580156106f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071d9190610b0f565b915050610782565b6001600160e01b0319831660009081526004602052604090205460ff168061077e57506001600160e01b031983166000908152600560209081526040808320546001600160a01b03891684526003909252909120541615155b9150505b9392505050565b61079f336000356001600160e01b031916610806565b6107bb5760405162461bcd60e51b815260040161030d90610abc565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001546000906001600160a01b03168015801590610890575060405163b700961360e01b81526001600160a01b0382169063b70096139061084f90879030908890600401610ae2565b602060405180830381865afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190610b0f565b806108a857506000546001600160a01b038581169116145b949350505050565b6001600160a01b03811681146108c557600080fd5b50565b6000602082840312156108da57600080fd5b8135610782816108b0565b80356001600160e01b0319811681146108fd57600080fd5b919050565b60006020828403121561091457600080fd5b610782826108e5565b803560ff811681146108fd57600080fd5b80151581146108c557600080fd5b60008060006060848603121561095157600080fd5b61095a8461091d565b9250610968602085016108e5565b915060408401356109788161092e565b809150509250925092565b6000806040838503121561099657600080fd5b61099f836108e5565b915060208301356109af8161092e565b809150509250929050565b6000806000606084860312156109cf57600080fd5b83356109da816108b0565b92506109686020850161091d565b600080604083850312156109fb57600080fd5b8235610a06816108b0565b915060208301356109af816108b0565b600080600060608486031215610a2b57600080fd5b8335610a36816108b0565b92506020840135610a46816108b0565b9150610a54604085016108e5565b90509250925092565b60008060408385031215610a7057600080fd5b610a798361091d565b9150610a87602084016108e5565b90509250929050565b60008060408385031215610aa357600080fd5b8235610aae816108b0565b9150610a876020840161091d565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215610b2157600080fd5b81516107828161092e56fea2646970667358221220954953fe2bd851fc2326caca9528d023b1200629cc0872f35f12fafd78c198cd64736f6c63430008140033";
        readonly sourceMap: "327:4461:173:-:0;;;1094:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;682:5:172;:14;;-1:-1:-1;;;;;;682:14:172;;;-1:-1:-1;;;;;682:14:172;;;;;;;;-1:-1:-1;706:22:172;;;;;;;;;;;;744:40;;682:14;;706:22;;682:14;765:10;;744:40;;;799;;-1:-1:-1;;;;;799:40:172;;;816:10;;799:40;;;;;622:224;;1094:77:173;;327:4461;;14:131:235;-1:-1:-1;;;;;89:31:235;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:404::-;248:6;256;309:2;297:9;288:7;284:23;280:32;277:52;;;325:1;322;315:12;277:52;357:9;351:16;376:31;401:5;376:31;:::i;:::-;476:2;461:18;;455:25;426:5;;-1:-1:-1;489:33:235;455:25;489:33;:::i;:::-;541:7;531:17;;;150:404;;;;;:::o;:::-;327:4461:173;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063e688747b11610066578063e688747b1461023b578063ea7ca27614610271578063ed0d0efb146102a8578063f2fde38b146102c857600080fd5b80638da5cb5b146101c1578063b7009613146101ec578063bf7e214f146101ff578063c53a39851461021257600080fd5b80634b5159da116100d35780634b5159da1461017557806367aff48414610188578063728b952b1461019b5780637a9e5e4b146101ae57600080fd5b806306a36aee146100fa5780630bade8a41461012d5780630ea9b75b14610160575b600080fd5b61011a6101083660046108c8565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b61015061013b366004610902565b60046020526000908152604090205460ff1681565b6040519015158152602001610124565b61017361016e36600461093c565b6102db565b005b610173610183366004610983565b6103bc565b6101736101963660046109ba565b61044e565b6101736101a93660046109e8565b610516565b6101736101bc3660046108c8565b61059f565b6000546101d4906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b6101506101fa366004610a16565b610689565b6001546101d4906001600160a01b031681565b6101d46102203660046108c8565b6002602052600090815260409020546001600160a01b031681565b610150610249366004610a5d565b6001600160e01b03191660009081526005602052604090205460ff919091161c600116151590565b61015061027f366004610a90565b6001600160a01b0391909116600090815260036020526040902054600160ff9092161c16151590565b61011a6102b6366004610902565b60056020526000908152604090205481565b6101736102d63660046108c8565b610789565b6102f1336000356001600160e01b031916610806565b6103165760405162461bcd60e51b815260040161030d90610abc565b60405180910390fd5b8015610346576001600160e01b0319821660009081526005602052604090208054600160ff86161b17905561036d565b6001600160e01b0319821660009081526005602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516103af911515815260200190565b60405180910390a3505050565b6103d2336000356001600160e01b031916610806565b6103ee5760405162461bcd60e51b815260040161030d90610abc565b6001600160e01b03198216600081815260046020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610464336000356001600160e01b031916610806565b6104805760405162461bcd60e51b815260040161030d90610abc565b80156104af576001600160a01b03831660009081526003602052604090208054600160ff85161b1790556104d5565b6001600160a01b03831660009081526003602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516103af911515815260200190565b61052c336000356001600160e01b031916610806565b6105485760405162461bcd60e51b815260040161030d90610abc565b6001600160a01b0382811660008181526002602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6000546001600160a01b0316331480610634575060015460405163b700961360e01b81526001600160a01b039091169063b7009613906105f390339030906001600160e01b03196000351690600401610ae2565b602060405180830381865afa158015610610573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106349190610b0f565b61063d57600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001600160a01b0380831660009081526002602052604081205490911680156107255760405163b700961360e01b81526001600160a01b0382169063b7009613906106dc90889088908890600401610ae2565b602060405180830381865afa1580156106f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071d9190610b0f565b915050610782565b6001600160e01b0319831660009081526004602052604090205460ff168061077e57506001600160e01b031983166000908152600560209081526040808320546001600160a01b03891684526003909252909120541615155b9150505b9392505050565b61079f336000356001600160e01b031916610806565b6107bb5760405162461bcd60e51b815260040161030d90610abc565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001546000906001600160a01b03168015801590610890575060405163b700961360e01b81526001600160a01b0382169063b70096139061084f90879030908890600401610ae2565b602060405180830381865afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190610b0f565b806108a857506000546001600160a01b038581169116145b949350505050565b6001600160a01b03811681146108c557600080fd5b50565b6000602082840312156108da57600080fd5b8135610782816108b0565b80356001600160e01b0319811681146108fd57600080fd5b919050565b60006020828403121561091457600080fd5b610782826108e5565b803560ff811681146108fd57600080fd5b80151581146108c557600080fd5b60008060006060848603121561095157600080fd5b61095a8461091d565b9250610968602085016108e5565b915060408401356109788161092e565b809150509250925092565b6000806040838503121561099657600080fd5b61099f836108e5565b915060208301356109af8161092e565b809150509250929050565b6000806000606084860312156109cf57600080fd5b83356109da816108b0565b92506109686020850161091d565b600080604083850312156109fb57600080fd5b8235610a06816108b0565b915060208301356109af816108b0565b600080600060608486031215610a2b57600080fd5b8335610a36816108b0565b92506020840135610a46816108b0565b9150610a54604085016108e5565b90509250925092565b60008060408385031215610a7057600080fd5b610a798361091d565b9150610a87602084016108e5565b90509250929050565b60008060408385031215610aa357600080fd5b8235610aae816108b0565b9150610a876020840161091d565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215610b2157600080fd5b81516107828161092e56fea2646970667358221220954953fe2bd851fc2326caca9528d023b1200629cc0872f35f12fafd78c198cd64736f6c63430008140033";
        readonly sourceMap: "327:4461:173:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1622:47;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;548:25:235;;;536:2;521:18;1622:47:173;;;;;;;;1676:49;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1116:14:235;;1109:22;1091:41;;1079:2;1064:18;1676:49:173;951:187:235;4390:396:173;;;;;;:::i;:::-;;:::i;:::-;;3448:210;;;;;;:::i;:::-;;:::i;3853:337::-;;;;;;:::i;:::-;;:::i;3006:241::-;;;;;;:::i;:::-;;:::i;1523:434:172:-;;;;;;:::i;:::-;;:::i;562:20::-;;;;;-1:-1:-1;;;;;562:20:172;;;;;;-1:-1:-1;;;;;3437:32:235;;;3419:51;;3407:2;3392:18;562:20:172;3273:203:235;2336:465:173;;;;;;:::i;:::-;;:::i;589:26:172:-;;;;;-1:-1:-1;;;;;589:26:172;;;1369:61:173;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:173;;;1958:186;;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:173;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:173;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;:::i;:::-;;;;;;;;;;;;;;1963:164:172;;;;;;:::i;:::-;;:::i;4390:396:173:-;902:33:172;915:10;927:7;;-1:-1:-1;;;;;;927:7:172;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:172;;;;;;;:::i;:::-;;;;;;;;;4535:7:173::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:173;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:173;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:173::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1116:14:235::0;1109:22;1091:41;;1079:2;1064:18;;951:187;4730:49:173::1;;;;;;;;4390:396:::0;;;:::o;3448:210::-;902:33:172;915:10;927:7;;-1:-1:-1;;;;;;927:7:172;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:172;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:173;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:173::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1091:41:235;;;3606:45:173::1;::::0;1064:18:235;3606:45:173::1;;;;;;;3448:210:::0;;:::o;3853:337::-;902:33:172;915:10;927:7;;-1:-1:-1;;;;;;927:7:172;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:172;;;;;;;:::i;:::-;3986:7:173::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:173;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:173;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:173::1;;4175:7;4147:36;;;;1116:14:235::0;1109:22;1091:41;;1079:2;1064:18;;951:187;3006:241:173;902:33:172;915:10;927:7;;-1:-1:-1;;;;;;927:7:172;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:172;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:173;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:173::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;1523:434:172:-;1794:5;;-1:-1:-1;;;;;1794:5:172;1780:10;:19;;:76;;-1:-1:-1;1803:9:172;;:53;;-1:-1:-1;;;1803:53:172;;-1:-1:-1;;;;;1803:9:172;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:172;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:172;-1:-1:-1;;;;;1868:24:172;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:172;1523:434;:::o;2336:465:173:-;-1:-1:-1;;;;;2515:32:173;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:173;;-1:-1:-1;;;;;2609:23:173;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:173;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:173;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:173;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;;;2336:465;;;;;;:::o;1963:164:172:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:172;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:172;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:172::1;-1:-1:-1::0;;;;;2046:16:172;::::1;::::0;;::::1;::::0;;2078:42:::1;::::0;2046:16;;2099:10:::1;::::0;2078:42:::1;::::0;2046:5;2078:42:::1;1963:164:::0;:::o;977:540::-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:172;1415:27;;;;;:77;;-1:-1:-1;1446:46:172;;-1:-1:-1;;;1446:46:172;;-1:-1:-1;;;;;1446:12:172;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:172;;-1:-1:-1;;;;;1497:13:172;;;1505:5;;1497:13;1414:96;1407:103;977:540;-1:-1:-1;;;;977:540:172:o;14:131:235:-;-1:-1:-1;;;;;89:31:235;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:247::-;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;584:173::-;651:20;;-1:-1:-1;;;;;;700:32:235;;690:43;;680:71;;747:1;744;737:12;680:71;584:173;;;:::o;762:184::-;820:6;873:2;861:9;852:7;848:23;844:32;841:52;;;889:1;886;879:12;841:52;912:28;930:9;912:28;:::i;1143:156::-;1209:20;;1269:4;1258:16;;1248:27;;1238:55;;1289:1;1286;1279:12;1304:118;1390:5;1383:13;1376:21;1369:5;1366:32;1356:60;;1412:1;1409;1402:12;1427:383;1498:6;1506;1514;1567:2;1555:9;1546:7;1542:23;1538:32;1535:52;;;1583:1;1580;1573:12;1535:52;1606:27;1623:9;1606:27;:::i;:::-;1596:37;;1652;1685:2;1674:9;1670:18;1652:37;:::i;:::-;1642:47;;1739:2;1728:9;1724:18;1711:32;1752:28;1774:5;1752:28;:::i;:::-;1799:5;1789:15;;;1427:383;;;;;:::o;1815:313::-;1879:6;1887;1940:2;1928:9;1919:7;1915:23;1911:32;1908:52;;;1956:1;1953;1946:12;1908:52;1979:28;1997:9;1979:28;:::i;:::-;1969:38;;2057:2;2046:9;2042:18;2029:32;2070:28;2092:5;2070:28;:::i;:::-;2117:5;2107:15;;;1815:313;;;;;:::o;2133:452::-;2205:6;2213;2221;2274:2;2262:9;2253:7;2249:23;2245:32;2242:52;;;2290:1;2287;2280:12;2242:52;2329:9;2316:23;2348:31;2373:5;2348:31;:::i;:::-;2398:5;-1:-1:-1;2422:36:235;2454:2;2439:18;;2422:36;:::i;2590:407::-;2677:6;2685;2738:2;2726:9;2717:7;2713:23;2709:32;2706:52;;;2754:1;2751;2744:12;2706:52;2793:9;2780:23;2812:31;2837:5;2812:31;:::i;:::-;2862:5;-1:-1:-1;2919:2:235;2904:18;;2891:32;2932:33;2891:32;2932:33;:::i;3481:460::-;3557:6;3565;3573;3626:2;3614:9;3605:7;3601:23;3597:32;3594:52;;;3642:1;3639;3632:12;3594:52;3681:9;3668:23;3700:31;3725:5;3700:31;:::i;:::-;3750:5;-1:-1:-1;3807:2:235;3792:18;;3779:32;3820:33;3779:32;3820:33;:::i;:::-;3872:7;-1:-1:-1;3898:37:235;3931:2;3916:18;;3898:37;:::i;:::-;3888:47;;3481:460;;;;;:::o;4173:254::-;4238:6;4246;4299:2;4287:9;4278:7;4274:23;4270:32;4267:52;;;4315:1;4312;4305:12;4267:52;4338:27;4355:9;4338:27;:::i;:::-;4328:37;;4384;4417:2;4406:9;4402:18;4384:37;:::i;:::-;4374:47;;4173:254;;;;;:::o;4432:317::-;4498:6;4506;4559:2;4547:9;4538:7;4534:23;4530:32;4527:52;;;4575:1;4572;4565:12;4527:52;4614:9;4601:23;4633:31;4658:5;4633:31;:::i;:::-;4683:5;-1:-1:-1;4707:36:235;4739:2;4724:18;;4707:36;:::i;4754:336::-;4956:2;4938:21;;;4995:2;4975:18;;;4968:30;-1:-1:-1;;;5029:2:235;5014:18;;5007:42;5081:2;5066:18;;4754:336::o;5095:400::-;-1:-1:-1;;;;;5351:15:235;;;5333:34;;5403:15;;;;5398:2;5383:18;;5376:43;-1:-1:-1;;;;;;5455:33:235;;;5450:2;5435:18;;5428:61;5283:2;5268:18;;5095:400::o;5500:245::-;5567:6;5620:2;5608:9;5599:7;5595:23;5591:32;5588:52;;;5636:1;5633;5626:12;5588:52;5668:9;5662:16;5687:28;5709:5;5687:28;:::i";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "authority()": "bf7e214f";
        readonly "canCall(address,address,bytes4)": "b7009613";
        readonly "doesRoleHaveCapability(uint8,bytes4)": "e688747b";
        readonly "doesUserHaveRole(address,uint8)": "ea7ca276";
        readonly "getRolesWithCapability(bytes4)": "ed0d0efb";
        readonly "getTargetCustomAuthority(address)": "c53a3985";
        readonly "getUserRoles(address)": "06a36aee";
        readonly "isCapabilityPublic(bytes4)": "0bade8a4";
        readonly "owner()": "8da5cb5b";
        readonly "setAuthority(address)": "7a9e5e4b";
        readonly "setPublicCapability(bytes4,bool)": "4b5159da";
        readonly "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b";
        readonly "setTargetCustomAuthority(address,address)": "728b952b";
        readonly "setUserRole(address,uint8,bool)": "67aff484";
        readonly "transferOwnership(address)": "f2fde38b";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"_authority\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/authorities/MultiRolesAuthority.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Flexible and target agnostic role based Authority that supports up to 256 roles.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":\"MultiRolesAuthority\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract Authority";
                    readonly name: "_authority";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
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
                readonly name: "authority";
                readonly outputs: readonly [{
                    readonly internalType: "contract Authority";
                    readonly name: "";
                    readonly type: "address";
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
                readonly name: "owner";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
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
                readonly "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": "MultiRolesAuthority";
            };
            readonly libraries: {};
        };
        readonly sources: {
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
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol";
        readonly id: 72521;
        readonly exportedSymbols: {
            readonly Auth: readonly [72202];
            readonly Authority: readonly [72215];
            readonly MultiRolesAuthority: readonly [72520];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:4747:173";
        readonly nodes: readonly [{
            readonly id: 72217;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:173";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 72220;
            readonly nodeType: "ImportDirective";
            readonly src: "68:44:173";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/auth/Auth.sol";
            readonly file: "../Auth.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 72521;
            readonly sourceUnit: 72216;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 72218;
                    readonly name: "Auth";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 72202;
                    readonly src: "76:4:173";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 72219;
                    readonly name: "Authority";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 72215;
                    readonly src: "82:9:173";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 72520;
            readonly nodeType: "ContractDefinition";
            readonly src: "327:4461:173";
            readonly nodes: readonly [{
                readonly id: 72233;
                readonly nodeType: "EventDefinition";
                readonly src: "560:78:173";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2";
                readonly name: "UserRoleUpdated";
                readonly nameLocation: "566:15:173";
                readonly parameters: {
                    readonly id: 72232;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72227;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "598:4:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72233;
                        readonly src: "582:20:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72226;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "582:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72229;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "role";
                        readonly nameLocation: "618:4:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72233;
                        readonly src: "604:18:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 72228;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "604:5:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72231;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "enabled";
                        readonly nameLocation: "629:7:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72233;
                        readonly src: "624:12:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72230;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "624:4:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "581:56:173";
                };
            }, {
                readonly id: 72239;
                readonly nodeType: "EventDefinition";
                readonly src: "644:72:173";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103";
                readonly name: "PublicCapabilityUpdated";
                readonly nameLocation: "650:23:173";
                readonly parameters: {
                    readonly id: 72238;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72235;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "689:11:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72239;
                        readonly src: "674:26:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 72234;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "674:6:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72237;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "enabled";
                        readonly nameLocation: "707:7:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72239;
                        readonly src: "702:12:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72236;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "702:4:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "673:42:173";
                };
            }, {
                readonly id: 72247;
                readonly nodeType: "EventDefinition";
                readonly src: "722:90:173";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "bfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151";
                readonly name: "RoleCapabilityUpdated";
                readonly nameLocation: "728:21:173";
                readonly parameters: {
                    readonly id: 72246;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72241;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "role";
                        readonly nameLocation: "764:4:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72247;
                        readonly src: "750:18:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 72240;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "750:5:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72243;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "785:11:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72247;
                        readonly src: "770:26:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 72242;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "770:6:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72245;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "enabled";
                        readonly nameLocation: "803:7:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72247;
                        readonly src: "798:12:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72244;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "798:4:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "749:62:173";
                };
            }, {
                readonly id: 72254;
                readonly nodeType: "EventDefinition";
                readonly src: "818:88:173";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "a4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff2065";
                readonly name: "TargetCustomAuthorityUpdated";
                readonly nameLocation: "824:28:173";
                readonly parameters: {
                    readonly id: 72253;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72249;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "869:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72254;
                        readonly src: "853:22:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72248;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "853:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72252;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "authority";
                        readonly nameLocation: "895:9:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72254;
                        readonly src: "877:27:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72215";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 72251;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 72250;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["877:9:173"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72215;
                                readonly src: "877:9:173";
                            };
                            readonly referencedDeclaration: 72215;
                            readonly src: "877:9:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "852:53:173";
                };
            }, {
                readonly id: 72267;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1094:77:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72266;
                    readonly nodeType: "Block";
                    readonly src: "1169:2:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 72262;
                        readonly name: "_owner";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 72256;
                        readonly src: "1149:6:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 72263;
                        readonly name: "_authority";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 72259;
                        readonly src: "1157:10:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72215";
                            readonly typeString: "contract Authority";
                        };
                    }];
                    readonly id: 72264;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 72261;
                        readonly name: "Auth";
                        readonly nameLocations: readonly ["1144:4:173"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72202;
                        readonly src: "1144:4:173";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1144:24:173";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 72260;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72256;
                        readonly mutability: "mutable";
                        readonly name: "_owner";
                        readonly nameLocation: "1114:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72267;
                        readonly src: "1106:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72255;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1106:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72259;
                        readonly mutability: "mutable";
                        readonly name: "_authority";
                        readonly nameLocation: "1132:10:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72267;
                        readonly src: "1122:20:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72215";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 72258;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 72257;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["1122:9:173"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72215;
                                readonly src: "1122:9:173";
                            };
                            readonly referencedDeclaration: 72215;
                            readonly src: "1122:9:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1105:38:173";
                };
                readonly returnParameters: {
                    readonly id: 72265;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1169:0:173";
                };
                readonly scope: 72520;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 72272;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1369:61:173";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "c53a3985";
                readonly mutability: "mutable";
                readonly name: "getTargetCustomAuthority";
                readonly nameLocation: "1406:24:173";
                readonly scope: 72520;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_contract$_Authority_$72215_$";
                    readonly typeString: "mapping(address => contract Authority)";
                };
                readonly typeName: {
                    readonly id: 72271;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 72268;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1377:7:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "1369:29:173";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_contract$_Authority_$72215_$";
                        readonly typeString: "mapping(address => contract Authority)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 72270;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 72269;
                            readonly name: "Authority";
                            readonly nameLocations: readonly ["1388:9:173"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 72215;
                            readonly src: "1388:9:173";
                        };
                        readonly referencedDeclaration: 72215;
                        readonly src: "1388:9:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72215";
                            readonly typeString: "contract Authority";
                        };
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72276;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1622:47:173";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "06a36aee";
                readonly mutability: "mutable";
                readonly name: "getUserRoles";
                readonly nameLocation: "1657:12:173";
                readonly scope: 72520;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_bytes32_$";
                    readonly typeString: "mapping(address => bytes32)";
                };
                readonly typeName: {
                    readonly id: 72275;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 72273;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1630:7:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "1622:27:173";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_bytes32_$";
                        readonly typeString: "mapping(address => bytes32)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 72274;
                        readonly name: "bytes32";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1641:7:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72280;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1676:49:173";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "0bade8a4";
                readonly mutability: "mutable";
                readonly name: "isCapabilityPublic";
                readonly nameLocation: "1707:18:173";
                readonly scope: 72520;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_bytes4_$_t_bool_$";
                    readonly typeString: "mapping(bytes4 => bool)";
                };
                readonly typeName: {
                    readonly id: 72279;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 72277;
                        readonly name: "bytes4";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1684:6:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "1676:23:173";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_bytes4_$_t_bool_$";
                        readonly typeString: "mapping(bytes4 => bool)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 72278;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1694:4:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72284;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1732:56:173";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "ed0d0efb";
                readonly mutability: "mutable";
                readonly name: "getRolesWithCapability";
                readonly nameLocation: "1766:22:173";
                readonly scope: 72520;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_bytes4_$_t_bytes32_$";
                    readonly typeString: "mapping(bytes4 => bytes32)";
                };
                readonly typeName: {
                    readonly id: 72283;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 72281;
                        readonly name: "bytes4";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1740:6:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "1732:26:173";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_bytes4_$_t_bytes32_$";
                        readonly typeString: "mapping(bytes4 => bytes32)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 72282;
                        readonly name: "bytes32";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1750:7:173";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72308;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1795:157:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72307;
                    readonly nodeType: "Block";
                    readonly src: "1882:70:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 72305;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 72303;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly components: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 72300;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [{
                                                readonly baseExpression: {
                                                    readonly id: 72295;
                                                    readonly name: "getUserRoles";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72276;
                                                    readonly src: "1908:12:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_bytes32_$";
                                                        readonly typeString: "mapping(address => bytes32)";
                                                    };
                                                };
                                                readonly id: 72297;
                                                readonly indexExpression: {
                                                    readonly id: 72296;
                                                    readonly name: "user";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72286;
                                                    readonly src: "1921:4:173";
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
                                                readonly src: "1908:18:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                }];
                                                readonly id: 72294;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "1900:7:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72293;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "1900:7:173";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72298;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1900:27:173";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">>";
                                        readonly rightExpression: {
                                            readonly id: 72299;
                                            readonly name: "role";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72288;
                                            readonly src: "1931:4:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint8";
                                                readonly typeString: "uint8";
                                            };
                                        };
                                        readonly src: "1900:35:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 72301;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1899:37:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "&";
                                readonly rightExpression: {
                                    readonly hexValue: "31";
                                    readonly id: 72302;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "1939:1:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                };
                                readonly src: "1899:41:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 72304;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1944:1:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "1899:46:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 72292;
                        readonly id: 72306;
                        readonly nodeType: "Return";
                        readonly src: "1892:53:173";
                    }];
                };
                readonly functionSelector: "ea7ca276";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "doesUserHaveRole";
                readonly nameLocation: "1804:16:173";
                readonly parameters: {
                    readonly id: 72289;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72286;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "1829:4:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72308;
                        readonly src: "1821:12:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72285;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1821:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72288;
                        readonly mutability: "mutable";
                        readonly name: "role";
                        readonly nameLocation: "1841:4:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72308;
                        readonly src: "1835:10:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 72287;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1835:5:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1820:26:173";
                };
                readonly returnParameters: {
                    readonly id: 72292;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72291;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72308;
                        readonly src: "1876:4:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72290;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1876:4:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1875:6:173";
                };
                readonly scope: 72520;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72332;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1958:186:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72331;
                    readonly nodeType: "Block";
                    readonly src: "2057:87:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 72329;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 72327;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly components: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 72324;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [{
                                                readonly baseExpression: {
                                                    readonly id: 72319;
                                                    readonly name: "getRolesWithCapability";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72284;
                                                    readonly src: "2083:22:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_bytes4_$_t_bytes32_$";
                                                        readonly typeString: "mapping(bytes4 => bytes32)";
                                                    };
                                                };
                                                readonly id: 72321;
                                                readonly indexExpression: {
                                                    readonly id: 72320;
                                                    readonly name: "functionSig";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72312;
                                                    readonly src: "2106:11:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes4";
                                                        readonly typeString: "bytes4";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "2083:35:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                }];
                                                readonly id: 72318;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2075:7:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72317;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2075:7:173";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72322;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2075:44:173";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">>";
                                        readonly rightExpression: {
                                            readonly id: 72323;
                                            readonly name: "role";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72310;
                                            readonly src: "2123:4:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint8";
                                                readonly typeString: "uint8";
                                            };
                                        };
                                        readonly src: "2075:52:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 72325;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "2074:54:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "&";
                                readonly rightExpression: {
                                    readonly hexValue: "31";
                                    readonly id: 72326;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "2131:1:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                };
                                readonly src: "2074:58:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 72328;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2136:1:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "2074:63:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 72316;
                        readonly id: 72330;
                        readonly nodeType: "Return";
                        readonly src: "2067:70:173";
                    }];
                };
                readonly functionSelector: "e688747b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "doesRoleHaveCapability";
                readonly nameLocation: "1967:22:173";
                readonly parameters: {
                    readonly id: 72313;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72310;
                        readonly mutability: "mutable";
                        readonly name: "role";
                        readonly nameLocation: "1996:4:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72332;
                        readonly src: "1990:10:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 72309;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1990:5:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72312;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "2009:11:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72332;
                        readonly src: "2002:18:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 72311;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2002:6:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1989:32:173";
                };
                readonly returnParameters: {
                    readonly id: 72316;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72315;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72332;
                        readonly src: "2051:4:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72314;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2051:4:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2050:6:173";
                };
                readonly scope: 72520;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72386;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2336:465:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72385;
                    readonly nodeType: "Block";
                    readonly src: "2477:324:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [72346];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 72346;
                            readonly mutability: "mutable";
                            readonly name: "customAuthority";
                            readonly nameLocation: "2497:15:173";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 72385;
                            readonly src: "2487:25:173";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                            readonly typeName: {
                                readonly id: 72345;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 72344;
                                    readonly name: "Authority";
                                    readonly nameLocations: readonly ["2487:9:173"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 72215;
                                    readonly src: "2487:9:173";
                                };
                                readonly referencedDeclaration: 72215;
                                readonly src: "2487:9:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 72350;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly id: 72347;
                                readonly name: "getTargetCustomAuthority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72272;
                                readonly src: "2515:24:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_contract$_Authority_$72215_$";
                                    readonly typeString: "mapping(address => contract Authority)";
                                };
                            };
                            readonly id: 72349;
                            readonly indexExpression: {
                                readonly id: 72348;
                                readonly name: "target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72336;
                                readonly src: "2540:6:173";
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
                            readonly src: "2515:32:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2487:60:173";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 72359;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 72353;
                                    readonly name: "customAuthority";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72346;
                                    readonly src: "2570:15:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_Authority_$72215";
                                        readonly typeString: "contract Authority";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_Authority_$72215";
                                        readonly typeString: "contract Authority";
                                    }];
                                    readonly id: 72352;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2562:7:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 72351;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2562:7:173";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 72354;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2562:24:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 72357;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "2598:1:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    }];
                                    readonly id: 72356;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2590:7:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 72355;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2590:7:173";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 72358;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2590:10:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2562:38:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 72367;
                        readonly nodeType: "IfStatement";
                        readonly src: "2558:101:173";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly id: 72362;
                                    readonly name: "user";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72334;
                                    readonly src: "2633:4:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 72363;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72336;
                                    readonly src: "2639:6:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 72364;
                                    readonly name: "functionSig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72338;
                                    readonly src: "2647:11:173";
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
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }, {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    }];
                                    readonly expression: {
                                        readonly id: 72360;
                                        readonly name: "customAuthority";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72346;
                                        readonly src: "2609:15:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_Authority_$72215";
                                            readonly typeString: "contract Authority";
                                        };
                                    };
                                    readonly id: 72361;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2625:7:173";
                                    readonly memberName: "canCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 72214;
                                    readonly src: "2609:23:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                        readonly typeString: "function (address,address,bytes4) view external returns (bool)";
                                    };
                                };
                                readonly id: 72365;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2609:50:173";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly functionReturnParameters: 72343;
                            readonly id: 72366;
                            readonly nodeType: "Return";
                            readonly src: "2602:57:173";
                        };
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 72383;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly baseExpression: {
                                    readonly id: 72368;
                                    readonly name: "isCapabilityPublic";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72280;
                                    readonly src: "2689:18:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_bytes4_$_t_bool_$";
                                        readonly typeString: "mapping(bytes4 => bool)";
                                    };
                                };
                                readonly id: 72370;
                                readonly indexExpression: {
                                    readonly id: 72369;
                                    readonly name: "functionSig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72338;
                                    readonly src: "2708:11:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "IndexAccess";
                                readonly src: "2689:31:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                                readonly id: 72382;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly hexValue: "30";
                                        readonly id: 72373;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2732:1:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        }];
                                        readonly id: 72372;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2724:7:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_bytes32_$";
                                            readonly typeString: "type(bytes32)";
                                        };
                                        readonly typeName: {
                                            readonly id: 72371;
                                            readonly name: "bytes32";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2724:7:173";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 72374;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2724:10:173";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly id: 72381;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly baseExpression: {
                                            readonly id: 72375;
                                            readonly name: "getUserRoles";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72276;
                                            readonly src: "2738:12:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_bytes32_$";
                                                readonly typeString: "mapping(address => bytes32)";
                                            };
                                        };
                                        readonly id: 72377;
                                        readonly indexExpression: {
                                            readonly id: 72376;
                                            readonly name: "user";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72334;
                                            readonly src: "2751:4:173";
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
                                        readonly src: "2738:18:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "&";
                                    readonly rightExpression: {
                                        readonly baseExpression: {
                                            readonly id: 72378;
                                            readonly name: "getRolesWithCapability";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72284;
                                            readonly src: "2759:22:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_bytes4_$_t_bytes32_$";
                                                readonly typeString: "mapping(bytes4 => bytes32)";
                                            };
                                        };
                                        readonly id: 72380;
                                        readonly indexExpression: {
                                            readonly id: 72379;
                                            readonly name: "functionSig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72338;
                                            readonly src: "2782:11:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes4";
                                                readonly typeString: "bytes4";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "2759:35:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "2738:56:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly src: "2724:70:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "2689:105:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 72343;
                        readonly id: 72384;
                        readonly nodeType: "Return";
                        readonly src: "2670:124:173";
                    }];
                };
                readonly baseFunctions: readonly [72214];
                readonly functionSelector: "b7009613";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "canCall";
                readonly nameLocation: "2345:7:173";
                readonly overrides: {
                    readonly id: 72340;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2453:8:173";
                };
                readonly parameters: {
                    readonly id: 72339;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72334;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "2370:4:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72386;
                        readonly src: "2362:12:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72333;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2362:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72336;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "2392:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72386;
                        readonly src: "2384:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72335;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2384:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72338;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "2415:11:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72386;
                        readonly src: "2408:18:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 72337;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2408:6:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2352:80:173";
                };
                readonly returnParameters: {
                    readonly id: 72343;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72342;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72386;
                        readonly src: "2471:4:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72341;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2471:4:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2470:6:173";
                };
                readonly scope: 72520;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72408;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3006:241:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72407;
                    readonly nodeType: "Block";
                    readonly src: "3111:136:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72400;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 72396;
                                    readonly name: "getTargetCustomAuthority";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72272;
                                    readonly src: "3121:24:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_contract$_Authority_$72215_$";
                                        readonly typeString: "mapping(address => contract Authority)";
                                    };
                                };
                                readonly id: 72398;
                                readonly indexExpression: {
                                    readonly id: 72397;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72388;
                                    readonly src: "3146:6:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "3121:32:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72399;
                                readonly name: "customAuthority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72391;
                                readonly src: "3156:15:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly src: "3121:50:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly id: 72401;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3121:50:173";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 72403;
                                readonly name: "target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72388;
                                readonly src: "3216:6:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72404;
                                readonly name: "customAuthority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72391;
                                readonly src: "3224:15:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                }];
                                readonly id: 72402;
                                readonly name: "TargetCustomAuthorityUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72254;
                                readonly src: "3187:28:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$72215_$returns$__$";
                                    readonly typeString: "function (address,contract Authority)";
                                };
                            };
                            readonly id: 72405;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3187:53:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72406;
                        readonly nodeType: "EmitStatement";
                        readonly src: "3182:58:173";
                    }];
                };
                readonly functionSelector: "728b952b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 72394;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 72393;
                        readonly name: "requiresAuth";
                        readonly nameLocations: readonly ["3098:12:173"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72107;
                        readonly src: "3098:12:173";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "3098:12:173";
                }];
                readonly name: "setTargetCustomAuthority";
                readonly nameLocation: "3015:24:173";
                readonly parameters: {
                    readonly id: 72392;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72388;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "3048:6:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72408;
                        readonly src: "3040:14:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72387;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3040:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72391;
                        readonly mutability: "mutable";
                        readonly name: "customAuthority";
                        readonly nameLocation: "3066:15:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72408;
                        readonly src: "3056:25:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72215";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 72390;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 72389;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["3056:9:173"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72215;
                                readonly src: "3056:9:173";
                            };
                            readonly referencedDeclaration: 72215;
                            readonly src: "3056:9:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3039:43:173";
                };
                readonly returnParameters: {
                    readonly id: 72395;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3111:0:173";
                };
                readonly scope: 72520;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72429;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3448:210:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72428;
                    readonly nodeType: "Block";
                    readonly src: "3539:119:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72421;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 72417;
                                    readonly name: "isCapabilityPublic";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72280;
                                    readonly src: "3549:18:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_bytes4_$_t_bool_$";
                                        readonly typeString: "mapping(bytes4 => bool)";
                                    };
                                };
                                readonly id: 72419;
                                readonly indexExpression: {
                                    readonly id: 72418;
                                    readonly name: "functionSig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72410;
                                    readonly src: "3568:11:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "3549:31:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72420;
                                readonly name: "enabled";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72412;
                                readonly src: "3583:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "3549:41:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 72422;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3549:41:173";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 72424;
                                readonly name: "functionSig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72410;
                                readonly src: "3630:11:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes4";
                                    readonly typeString: "bytes4";
                                };
                            }, {
                                readonly id: 72425;
                                readonly name: "enabled";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72412;
                                readonly src: "3643:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes4";
                                    readonly typeString: "bytes4";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly id: 72423;
                                readonly name: "PublicCapabilityUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72239;
                                readonly src: "3606:23:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_bytes4_$_t_bool_$returns$__$";
                                    readonly typeString: "function (bytes4,bool)";
                                };
                            };
                            readonly id: 72426;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3606:45:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72427;
                        readonly nodeType: "EmitStatement";
                        readonly src: "3601:50:173";
                    }];
                };
                readonly functionSelector: "4b5159da";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 72415;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 72414;
                        readonly name: "requiresAuth";
                        readonly nameLocations: readonly ["3526:12:173"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72107;
                        readonly src: "3526:12:173";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "3526:12:173";
                }];
                readonly name: "setPublicCapability";
                readonly nameLocation: "3457:19:173";
                readonly parameters: {
                    readonly id: 72413;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72410;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "3484:11:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72429;
                        readonly src: "3477:18:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 72409;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3477:6:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72412;
                        readonly mutability: "mutable";
                        readonly name: "enabled";
                        readonly nameLocation: "3502:7:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72429;
                        readonly src: "3497:12:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72411;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3497:4:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3476:34:173";
                };
                readonly returnParameters: {
                    readonly id: 72416;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3539:0:173";
                };
                readonly scope: 72520;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72474;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3853:337:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72473;
                    readonly nodeType: "Block";
                    readonly src: "3972:218:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 72440;
                            readonly name: "enabled";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 72435;
                            readonly src: "3986:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 72465;
                            readonly nodeType: "Block";
                            readonly src: "4066:66:173";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 72463;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 72453;
                                            readonly name: "getUserRoles";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72276;
                                            readonly src: "4080:12:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_bytes32_$";
                                                readonly typeString: "mapping(address => bytes32)";
                                            };
                                        };
                                        readonly id: 72455;
                                        readonly indexExpression: {
                                            readonly id: 72454;
                                            readonly name: "user";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72431;
                                            readonly src: "4093:4:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "4080:18:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "&=";
                                    readonly rightHandSide: {
                                        readonly id: 72462;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "UnaryOperation";
                                        readonly operator: "~";
                                        readonly prefix: true;
                                        readonly src: "4102:19:173";
                                        readonly subExpression: {
                                            readonly arguments: readonly [{
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 72460;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly hexValue: "31";
                                                    readonly id: 72458;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "4111:1:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_1_by_1";
                                                        readonly typeString: "int_const 1";
                                                    };
                                                    readonly value: "1";
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "<<";
                                                readonly rightExpression: {
                                                    readonly id: 72459;
                                                    readonly name: "role";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72433;
                                                    readonly src: "4116:4:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint8";
                                                        readonly typeString: "uint8";
                                                    };
                                                };
                                                readonly src: "4111:9:173";
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
                                                readonly id: 72457;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4103:7:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes32_$";
                                                    readonly typeString: "type(bytes32)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72456;
                                                    readonly name: "bytes32";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4103:7:173";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72461;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4103:18:173";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        };
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "4080:41:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 72464;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4080:41:173";
                            }];
                        };
                        readonly id: 72466;
                        readonly nodeType: "IfStatement";
                        readonly src: "3982:150:173";
                        readonly trueBody: {
                            readonly id: 72452;
                            readonly nodeType: "Block";
                            readonly src: "3995:65:173";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 72450;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 72441;
                                            readonly name: "getUserRoles";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72276;
                                            readonly src: "4009:12:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_bytes32_$";
                                                readonly typeString: "mapping(address => bytes32)";
                                            };
                                        };
                                        readonly id: 72443;
                                        readonly indexExpression: {
                                            readonly id: 72442;
                                            readonly name: "user";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72431;
                                            readonly src: "4022:4:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "4009:18:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "|=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 72448;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly hexValue: "31";
                                                readonly id: 72446;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "4039:1:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_1_by_1";
                                                    readonly typeString: "int_const 1";
                                                };
                                                readonly value: "1";
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "<<";
                                            readonly rightExpression: {
                                                readonly id: 72447;
                                                readonly name: "role";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72433;
                                                readonly src: "4044:4:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint8";
                                                    readonly typeString: "uint8";
                                                };
                                            };
                                            readonly src: "4039:9:173";
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
                                            readonly id: 72445;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4031:7:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes32_$";
                                                readonly typeString: "type(bytes32)";
                                            };
                                            readonly typeName: {
                                                readonly id: 72444;
                                                readonly name: "bytes32";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4031:7:173";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 72449;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4031:18:173";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "4009:40:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 72451;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4009:40:173";
                            }];
                        };
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 72468;
                                readonly name: "user";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72431;
                                readonly src: "4163:4:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72469;
                                readonly name: "role";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72433;
                                readonly src: "4169:4:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint8";
                                    readonly typeString: "uint8";
                                };
                            }, {
                                readonly id: 72470;
                                readonly name: "enabled";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72435;
                                readonly src: "4175:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint8";
                                    readonly typeString: "uint8";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly id: 72467;
                                readonly name: "UserRoleUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72233;
                                readonly src: "4147:15:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_uint8_$_t_bool_$returns$__$";
                                    readonly typeString: "function (address,uint8,bool)";
                                };
                            };
                            readonly id: 72471;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4147:36:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72472;
                        readonly nodeType: "EmitStatement";
                        readonly src: "4142:41:173";
                    }];
                };
                readonly functionSelector: "67aff484";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 72438;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 72437;
                        readonly name: "requiresAuth";
                        readonly nameLocations: readonly ["3959:12:173"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72107;
                        readonly src: "3959:12:173";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "3959:12:173";
                }];
                readonly name: "setUserRole";
                readonly nameLocation: "3862:11:173";
                readonly parameters: {
                    readonly id: 72436;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72431;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "3891:4:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72474;
                        readonly src: "3883:12:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72430;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3883:7:173";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72433;
                        readonly mutability: "mutable";
                        readonly name: "role";
                        readonly nameLocation: "3911:4:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72474;
                        readonly src: "3905:10:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 72432;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3905:5:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72435;
                        readonly mutability: "mutable";
                        readonly name: "enabled";
                        readonly nameLocation: "3930:7:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72474;
                        readonly src: "3925:12:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72434;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3925:4:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3873:70:173";
                };
                readonly returnParameters: {
                    readonly id: 72439;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3972:0:173";
                };
                readonly scope: 72520;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72519;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4390:396:173";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72518;
                    readonly nodeType: "Block";
                    readonly src: "4521:265:173";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 72485;
                            readonly name: "enabled";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 72480;
                            readonly src: "4535:7:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 72510;
                            readonly nodeType: "Block";
                            readonly src: "4632:83:173";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 72508;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 72498;
                                            readonly name: "getRolesWithCapability";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72284;
                                            readonly src: "4646:22:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_bytes4_$_t_bytes32_$";
                                                readonly typeString: "mapping(bytes4 => bytes32)";
                                            };
                                        };
                                        readonly id: 72500;
                                        readonly indexExpression: {
                                            readonly id: 72499;
                                            readonly name: "functionSig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72478;
                                            readonly src: "4669:11:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes4";
                                                readonly typeString: "bytes4";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "4646:35:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "&=";
                                    readonly rightHandSide: {
                                        readonly id: 72507;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "UnaryOperation";
                                        readonly operator: "~";
                                        readonly prefix: true;
                                        readonly src: "4685:19:173";
                                        readonly subExpression: {
                                            readonly arguments: readonly [{
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 72505;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly hexValue: "31";
                                                    readonly id: 72503;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "4694:1:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_1_by_1";
                                                        readonly typeString: "int_const 1";
                                                    };
                                                    readonly value: "1";
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "<<";
                                                readonly rightExpression: {
                                                    readonly id: 72504;
                                                    readonly name: "role";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 72476;
                                                    readonly src: "4699:4:173";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint8";
                                                        readonly typeString: "uint8";
                                                    };
                                                };
                                                readonly src: "4694:9:173";
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
                                                readonly id: 72502;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4686:7:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes32_$";
                                                    readonly typeString: "type(bytes32)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72501;
                                                    readonly name: "bytes32";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4686:7:173";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72506;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4686:18:173";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        };
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "4646:58:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 72509;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4646:58:173";
                            }];
                        };
                        readonly id: 72511;
                        readonly nodeType: "IfStatement";
                        readonly src: "4531:184:173";
                        readonly trueBody: {
                            readonly id: 72497;
                            readonly nodeType: "Block";
                            readonly src: "4544:82:173";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 72495;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 72486;
                                            readonly name: "getRolesWithCapability";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72284;
                                            readonly src: "4558:22:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_bytes4_$_t_bytes32_$";
                                                readonly typeString: "mapping(bytes4 => bytes32)";
                                            };
                                        };
                                        readonly id: 72488;
                                        readonly indexExpression: {
                                            readonly id: 72487;
                                            readonly name: "functionSig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72478;
                                            readonly src: "4581:11:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes4";
                                                readonly typeString: "bytes4";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "4558:35:173";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "|=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 72493;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly hexValue: "31";
                                                readonly id: 72491;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "4605:1:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_1_by_1";
                                                    readonly typeString: "int_const 1";
                                                };
                                                readonly value: "1";
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "<<";
                                            readonly rightExpression: {
                                                readonly id: 72492;
                                                readonly name: "role";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72476;
                                                readonly src: "4610:4:173";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint8";
                                                    readonly typeString: "uint8";
                                                };
                                            };
                                            readonly src: "4605:9:173";
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
                                            readonly id: 72490;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4597:7:173";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes32_$";
                                                readonly typeString: "type(bytes32)";
                                            };
                                            readonly typeName: {
                                                readonly id: 72489;
                                                readonly name: "bytes32";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4597:7:173";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 72494;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4597:18:173";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "4558:57:173";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 72496;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4558:57:173";
                            }];
                        };
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 72513;
                                readonly name: "role";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72476;
                                readonly src: "4752:4:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint8";
                                    readonly typeString: "uint8";
                                };
                            }, {
                                readonly id: 72514;
                                readonly name: "functionSig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72478;
                                readonly src: "4758:11:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes4";
                                    readonly typeString: "bytes4";
                                };
                            }, {
                                readonly id: 72515;
                                readonly name: "enabled";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72480;
                                readonly src: "4771:7:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint8";
                                    readonly typeString: "uint8";
                                }, {
                                    readonly typeIdentifier: "t_bytes4";
                                    readonly typeString: "bytes4";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly id: 72512;
                                readonly name: "RoleCapabilityUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72247;
                                readonly src: "4730:21:173";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_uint8_$_t_bytes4_$_t_bool_$returns$__$";
                                    readonly typeString: "function (uint8,bytes4,bool)";
                                };
                            };
                            readonly id: 72516;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4730:49:173";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72517;
                        readonly nodeType: "EmitStatement";
                        readonly src: "4725:54:173";
                    }];
                };
                readonly functionSelector: "0ea9b75b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 72483;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 72482;
                        readonly name: "requiresAuth";
                        readonly nameLocations: readonly ["4508:12:173"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72107;
                        readonly src: "4508:12:173";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "4508:12:173";
                }];
                readonly name: "setRoleCapability";
                readonly nameLocation: "4399:17:173";
                readonly parameters: {
                    readonly id: 72481;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72476;
                        readonly mutability: "mutable";
                        readonly name: "role";
                        readonly nameLocation: "4432:4:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72519;
                        readonly src: "4426:10:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 72475;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4426:5:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72478;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "4453:11:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72519;
                        readonly src: "4446:18:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 72477;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4446:6:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72480;
                        readonly mutability: "mutable";
                        readonly name: "enabled";
                        readonly nameLocation: "4479:7:173";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72519;
                        readonly src: "4474:12:173";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72479;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4474:4:173";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4416:76:173";
                };
                readonly returnParameters: {
                    readonly id: 72484;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4521:0:173";
                };
                readonly scope: 72520;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 72222;
                    readonly name: "Auth";
                    readonly nameLocations: readonly ["359:4:173"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 72202;
                    readonly src: "359:4:173";
                };
                readonly id: 72223;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "359:4:173";
            }, {
                readonly baseName: {
                    readonly id: 72224;
                    readonly name: "Authority";
                    readonly nameLocations: readonly ["365:9:173"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 72215;
                    readonly src: "365:9:173";
                };
                readonly id: 72225;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "365:9:173";
            }];
            readonly canonicalName: "MultiRolesAuthority";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 72221;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "114:213:173";
                readonly text: "@notice Flexible and target agnostic role based Authority that supports up to 256 roles.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/authorities/MultiRolesAuthority.sol)";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [72520, 72215, 72202];
            readonly name: "MultiRolesAuthority";
            readonly nameLocation: "336:19:173";
            readonly scope: 72521;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [72052, 72059, 72233, 72239, 72247, 72254];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 173;
};
//# sourceMappingURL=MultiRolesAuthority.d.ts.map