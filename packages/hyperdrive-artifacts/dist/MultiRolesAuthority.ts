{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "contract Authority",
          "name": "_authority",
          "type": "address"
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
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b50604051610c8c380380610c8c83398101604081905261002f916100e1565b600080546001600160a01b03199081166001600160a01b0385811691821784556001805490931690851617909155604051849284929133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050505061011b565b6001600160a01b03811681146100de57600080fd5b50565b600080604083850312156100f457600080fd5b82516100ff816100c9565b6020840151909250610110816100c9565b809150509250929050565b610b628061012a6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063e688747b11610066578063e688747b1461023b578063ea7ca27614610271578063ed0d0efb146102a8578063f2fde38b146102c857600080fd5b80638da5cb5b146101c1578063b7009613146101ec578063bf7e214f146101ff578063c53a39851461021257600080fd5b80634b5159da116100d35780634b5159da1461017557806367aff48414610188578063728b952b1461019b5780637a9e5e4b146101ae57600080fd5b806306a36aee146100fa5780630bade8a41461012d5780630ea9b75b14610160575b600080fd5b61011a6101083660046108c8565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b61015061013b366004610902565b60046020526000908152604090205460ff1681565b6040519015158152602001610124565b61017361016e36600461093c565b6102db565b005b610173610183366004610983565b6103bc565b6101736101963660046109ba565b61044e565b6101736101a93660046109e8565b610516565b6101736101bc3660046108c8565b61059f565b6000546101d4906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b6101506101fa366004610a16565b610689565b6001546101d4906001600160a01b031681565b6101d46102203660046108c8565b6002602052600090815260409020546001600160a01b031681565b610150610249366004610a5d565b6001600160e01b03191660009081526005602052604090205460ff919091161c600116151590565b61015061027f366004610a90565b6001600160a01b0391909116600090815260036020526040902054600160ff9092161c16151590565b61011a6102b6366004610902565b60056020526000908152604090205481565b6101736102d63660046108c8565b610789565b6102f1336000356001600160e01b031916610806565b6103165760405162461bcd60e51b815260040161030d90610abc565b60405180910390fd5b8015610346576001600160e01b0319821660009081526005602052604090208054600160ff86161b17905561036d565b6001600160e01b0319821660009081526005602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516103af911515815260200190565b60405180910390a3505050565b6103d2336000356001600160e01b031916610806565b6103ee5760405162461bcd60e51b815260040161030d90610abc565b6001600160e01b03198216600081815260046020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610464336000356001600160e01b031916610806565b6104805760405162461bcd60e51b815260040161030d90610abc565b80156104af576001600160a01b03831660009081526003602052604090208054600160ff85161b1790556104d5565b6001600160a01b03831660009081526003602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516103af911515815260200190565b61052c336000356001600160e01b031916610806565b6105485760405162461bcd60e51b815260040161030d90610abc565b6001600160a01b0382811660008181526002602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6000546001600160a01b0316331480610634575060015460405163b700961360e01b81526001600160a01b039091169063b7009613906105f390339030906001600160e01b03196000351690600401610ae2565b602060405180830381865afa158015610610573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106349190610b0f565b61063d57600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001600160a01b0380831660009081526002602052604081205490911680156107255760405163b700961360e01b81526001600160a01b0382169063b7009613906106dc90889088908890600401610ae2565b602060405180830381865afa1580156106f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071d9190610b0f565b915050610782565b6001600160e01b0319831660009081526004602052604090205460ff168061077e57506001600160e01b031983166000908152600560209081526040808320546001600160a01b03891684526003909252909120541615155b9150505b9392505050565b61079f336000356001600160e01b031916610806565b6107bb5760405162461bcd60e51b815260040161030d90610abc565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001546000906001600160a01b03168015801590610890575060405163b700961360e01b81526001600160a01b0382169063b70096139061084f90879030908890600401610ae2565b602060405180830381865afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190610b0f565b806108a857506000546001600160a01b038581169116145b949350505050565b6001600160a01b03811681146108c557600080fd5b50565b6000602082840312156108da57600080fd5b8135610782816108b0565b80356001600160e01b0319811681146108fd57600080fd5b919050565b60006020828403121561091457600080fd5b610782826108e5565b803560ff811681146108fd57600080fd5b80151581146108c557600080fd5b60008060006060848603121561095157600080fd5b61095a8461091d565b9250610968602085016108e5565b915060408401356109788161092e565b809150509250925092565b6000806040838503121561099657600080fd5b61099f836108e5565b915060208301356109af8161092e565b809150509250929050565b6000806000606084860312156109cf57600080fd5b83356109da816108b0565b92506109686020850161091d565b600080604083850312156109fb57600080fd5b8235610a06816108b0565b915060208301356109af816108b0565b600080600060608486031215610a2b57600080fd5b8335610a36816108b0565b92506020840135610a46816108b0565b9150610a54604085016108e5565b90509250925092565b60008060408385031215610a7057600080fd5b610a798361091d565b9150610a87602084016108e5565b90509250929050565b60008060408385031215610aa357600080fd5b8235610aae816108b0565b9150610a876020840161091d565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215610b2157600080fd5b81516107828161092e56fea26469706673582212209a28b3ad7b6adc672b1e2952372ac47cc0cea6d59afd6cd9889faa80e24834e864736f6c63430008130033",
    "sourceMap": "327:4461:92:-:0;;;1094:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;682:5:91;:14;;-1:-1:-1;;;;;;682:14:91;;;-1:-1:-1;;;;;682:14:91;;;;;;;;-1:-1:-1;706:22:91;;;;;;;;;;;;744:40;;682:14;;706:22;;682:14;765:10;;744:40;;;799;;-1:-1:-1;;;;;799:40:91;;;816:10;;799:40;;;;;622:224;;1094:77:92;;327:4461;;14:131:165;-1:-1:-1;;;;;89:31:165;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:404::-;248:6;256;309:2;297:9;288:7;284:23;280:32;277:52;;;325:1;322;315:12;277:52;357:9;351:16;376:31;401:5;376:31;:::i;:::-;476:2;461:18;;455:25;426:5;;-1:-1:-1;489:33:165;455:25;489:33;:::i;:::-;541:7;531:17;;;150:404;;;;;:::o;:::-;327:4461:92;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063e688747b11610066578063e688747b1461023b578063ea7ca27614610271578063ed0d0efb146102a8578063f2fde38b146102c857600080fd5b80638da5cb5b146101c1578063b7009613146101ec578063bf7e214f146101ff578063c53a39851461021257600080fd5b80634b5159da116100d35780634b5159da1461017557806367aff48414610188578063728b952b1461019b5780637a9e5e4b146101ae57600080fd5b806306a36aee146100fa5780630bade8a41461012d5780630ea9b75b14610160575b600080fd5b61011a6101083660046108c8565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b61015061013b366004610902565b60046020526000908152604090205460ff1681565b6040519015158152602001610124565b61017361016e36600461093c565b6102db565b005b610173610183366004610983565b6103bc565b6101736101963660046109ba565b61044e565b6101736101a93660046109e8565b610516565b6101736101bc3660046108c8565b61059f565b6000546101d4906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b6101506101fa366004610a16565b610689565b6001546101d4906001600160a01b031681565b6101d46102203660046108c8565b6002602052600090815260409020546001600160a01b031681565b610150610249366004610a5d565b6001600160e01b03191660009081526005602052604090205460ff919091161c600116151590565b61015061027f366004610a90565b6001600160a01b0391909116600090815260036020526040902054600160ff9092161c16151590565b61011a6102b6366004610902565b60056020526000908152604090205481565b6101736102d63660046108c8565b610789565b6102f1336000356001600160e01b031916610806565b6103165760405162461bcd60e51b815260040161030d90610abc565b60405180910390fd5b8015610346576001600160e01b0319821660009081526005602052604090208054600160ff86161b17905561036d565b6001600160e01b0319821660009081526005602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516103af911515815260200190565b60405180910390a3505050565b6103d2336000356001600160e01b031916610806565b6103ee5760405162461bcd60e51b815260040161030d90610abc565b6001600160e01b03198216600081815260046020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610464336000356001600160e01b031916610806565b6104805760405162461bcd60e51b815260040161030d90610abc565b80156104af576001600160a01b03831660009081526003602052604090208054600160ff85161b1790556104d5565b6001600160a01b03831660009081526003602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516103af911515815260200190565b61052c336000356001600160e01b031916610806565b6105485760405162461bcd60e51b815260040161030d90610abc565b6001600160a01b0382811660008181526002602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6000546001600160a01b0316331480610634575060015460405163b700961360e01b81526001600160a01b039091169063b7009613906105f390339030906001600160e01b03196000351690600401610ae2565b602060405180830381865afa158015610610573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106349190610b0f565b61063d57600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001600160a01b0380831660009081526002602052604081205490911680156107255760405163b700961360e01b81526001600160a01b0382169063b7009613906106dc90889088908890600401610ae2565b602060405180830381865afa1580156106f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071d9190610b0f565b915050610782565b6001600160e01b0319831660009081526004602052604090205460ff168061077e57506001600160e01b031983166000908152600560209081526040808320546001600160a01b03891684526003909252909120541615155b9150505b9392505050565b61079f336000356001600160e01b031916610806565b6107bb5760405162461bcd60e51b815260040161030d90610abc565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001546000906001600160a01b03168015801590610890575060405163b700961360e01b81526001600160a01b0382169063b70096139061084f90879030908890600401610ae2565b602060405180830381865afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190610b0f565b806108a857506000546001600160a01b038581169116145b949350505050565b6001600160a01b03811681146108c557600080fd5b50565b6000602082840312156108da57600080fd5b8135610782816108b0565b80356001600160e01b0319811681146108fd57600080fd5b919050565b60006020828403121561091457600080fd5b610782826108e5565b803560ff811681146108fd57600080fd5b80151581146108c557600080fd5b60008060006060848603121561095157600080fd5b61095a8461091d565b9250610968602085016108e5565b915060408401356109788161092e565b809150509250925092565b6000806040838503121561099657600080fd5b61099f836108e5565b915060208301356109af8161092e565b809150509250929050565b6000806000606084860312156109cf57600080fd5b83356109da816108b0565b92506109686020850161091d565b600080604083850312156109fb57600080fd5b8235610a06816108b0565b915060208301356109af816108b0565b600080600060608486031215610a2b57600080fd5b8335610a36816108b0565b92506020840135610a46816108b0565b9150610a54604085016108e5565b90509250925092565b60008060408385031215610a7057600080fd5b610a798361091d565b9150610a87602084016108e5565b90509250929050565b60008060408385031215610aa357600080fd5b8235610aae816108b0565b9150610a876020840161091d565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215610b2157600080fd5b81516107828161092e56fea26469706673582212209a28b3ad7b6adc672b1e2952372ac47cc0cea6d59afd6cd9889faa80e24834e864736f6c63430008130033",
    "sourceMap": "327:4461:92:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1622:47;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;548:25:165;;;536:2;521:18;1622:47:92;;;;;;;;1676:49;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1116:14:165;;1109:22;1091:41;;1079:2;1064:18;1676:49:92;951:187:165;4390:396:92;;;;;;:::i;:::-;;:::i;:::-;;3448:210;;;;;;:::i;:::-;;:::i;3853:337::-;;;;;;:::i;:::-;;:::i;3006:241::-;;;;;;:::i;:::-;;:::i;1523:434:91:-;;;;;;:::i;:::-;;:::i;562:20::-;;;;;-1:-1:-1;;;;;562:20:91;;;;;;-1:-1:-1;;;;;3437:32:165;;;3419:51;;3407:2;3392:18;562:20:91;3273:203:165;2336:465:92;;;;;;:::i;:::-;;:::i;589:26:91:-;;;;;-1:-1:-1;;;;;589:26:91;;;1369:61:92;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:92;;;1958:186;;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:92;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:92;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;:::i;:::-;;;;;;;;;;;;;;1963:164:91;;;;;;:::i;:::-;;:::i;4390:396:92:-;902:33:91;915:10;927:7;;-1:-1:-1;;;;;;927:7:91;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:91;;;;;;;:::i;:::-;;;;;;;;;4535:7:92::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:92;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:92;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:92::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1116:14:165::0;1109:22;1091:41;;1079:2;1064:18;;951:187;4730:49:92::1;;;;;;;;4390:396:::0;;;:::o;3448:210::-;902:33:91;915:10;927:7;;-1:-1:-1;;;;;;927:7:91;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:91;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:92;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:92::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1091:41:165;;;3606:45:92::1;::::0;1064:18:165;3606:45:92::1;;;;;;;3448:210:::0;;:::o;3853:337::-;902:33:91;915:10;927:7;;-1:-1:-1;;;;;;927:7:91;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:91;;;;;;;:::i;:::-;3986:7:92::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:92;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:92;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:92::1;;4175:7;4147:36;;;;1116:14:165::0;1109:22;1091:41;;1079:2;1064:18;;951:187;3006:241:92;902:33:91;915:10;927:7;;-1:-1:-1;;;;;;927:7:91;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:91;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:92;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:92::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;1523:434:91:-;1794:5;;-1:-1:-1;;;;;1794:5:91;1780:10;:19;;:76;;-1:-1:-1;1803:9:91;;:53;;-1:-1:-1;;;1803:53:91;;-1:-1:-1;;;;;1803:9:91;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:91;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:91;-1:-1:-1;;;;;1868:24:91;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:91;1523:434;:::o;2336:465:92:-;-1:-1:-1;;;;;2515:32:92;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:92;;-1:-1:-1;;;;;2609:23:92;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:92;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:92;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:92;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;;;2336:465;;;;;;:::o;1963:164:91:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:91;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:91;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:91::1;-1:-1:-1::0;;;;;2046:16:91;::::1;::::0;;::::1;::::0;;2078:42:::1;::::0;2046:16;;2099:10:::1;::::0;2078:42:::1;::::0;2046:5;2078:42:::1;1963:164:::0;:::o;977:540::-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:91;1415:27;;;;;:77;;-1:-1:-1;1446:46:91;;-1:-1:-1;;;1446:46:91;;-1:-1:-1;;;;;1446:12:91;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:91;;-1:-1:-1;;;;;1497:13:91;;;1505:5;;1497:13;1414:96;1407:103;977:540;-1:-1:-1;;;;977:540:91:o;14:131:165:-;-1:-1:-1;;;;;89:31:165;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:247::-;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;584:173::-;651:20;;-1:-1:-1;;;;;;700:32:165;;690:43;;680:71;;747:1;744;737:12;680:71;584:173;;;:::o;762:184::-;820:6;873:2;861:9;852:7;848:23;844:32;841:52;;;889:1;886;879:12;841:52;912:28;930:9;912:28;:::i;1143:156::-;1209:20;;1269:4;1258:16;;1248:27;;1238:55;;1289:1;1286;1279:12;1304:118;1390:5;1383:13;1376:21;1369:5;1366:32;1356:60;;1412:1;1409;1402:12;1427:383;1498:6;1506;1514;1567:2;1555:9;1546:7;1542:23;1538:32;1535:52;;;1583:1;1580;1573:12;1535:52;1606:27;1623:9;1606:27;:::i;:::-;1596:37;;1652;1685:2;1674:9;1670:18;1652:37;:::i;:::-;1642:47;;1739:2;1728:9;1724:18;1711:32;1752:28;1774:5;1752:28;:::i;:::-;1799:5;1789:15;;;1427:383;;;;;:::o;1815:313::-;1879:6;1887;1940:2;1928:9;1919:7;1915:23;1911:32;1908:52;;;1956:1;1953;1946:12;1908:52;1979:28;1997:9;1979:28;:::i;:::-;1969:38;;2057:2;2046:9;2042:18;2029:32;2070:28;2092:5;2070:28;:::i;:::-;2117:5;2107:15;;;1815:313;;;;;:::o;2133:452::-;2205:6;2213;2221;2274:2;2262:9;2253:7;2249:23;2245:32;2242:52;;;2290:1;2287;2280:12;2242:52;2329:9;2316:23;2348:31;2373:5;2348:31;:::i;:::-;2398:5;-1:-1:-1;2422:36:165;2454:2;2439:18;;2422:36;:::i;2590:407::-;2677:6;2685;2738:2;2726:9;2717:7;2713:23;2709:32;2706:52;;;2754:1;2751;2744:12;2706:52;2793:9;2780:23;2812:31;2837:5;2812:31;:::i;:::-;2862:5;-1:-1:-1;2919:2:165;2904:18;;2891:32;2932:33;2891:32;2932:33;:::i;3481:460::-;3557:6;3565;3573;3626:2;3614:9;3605:7;3601:23;3597:32;3594:52;;;3642:1;3639;3632:12;3594:52;3681:9;3668:23;3700:31;3725:5;3700:31;:::i;:::-;3750:5;-1:-1:-1;3807:2:165;3792:18;;3779:32;3820:33;3779:32;3820:33;:::i;:::-;3872:7;-1:-1:-1;3898:37:165;3931:2;3916:18;;3898:37;:::i;:::-;3888:47;;3481:460;;;;;:::o;4173:254::-;4238:6;4246;4299:2;4287:9;4278:7;4274:23;4270:32;4267:52;;;4315:1;4312;4305:12;4267:52;4338:27;4355:9;4338:27;:::i;:::-;4328:37;;4384;4417:2;4406:9;4402:18;4384:37;:::i;:::-;4374:47;;4173:254;;;;;:::o;4432:317::-;4498:6;4506;4559:2;4547:9;4538:7;4534:23;4530:32;4527:52;;;4575:1;4572;4565:12;4527:52;4614:9;4601:23;4633:31;4658:5;4633:31;:::i;:::-;4683:5;-1:-1:-1;4707:36:165;4739:2;4724:18;;4707:36;:::i;4754:336::-;4956:2;4938:21;;;4995:2;4975:18;;;4968:30;-1:-1:-1;;;5029:2:165;5014:18;;5007:42;5081:2;5066:18;;4754:336::o;5095:400::-;-1:-1:-1;;;;;5351:15:165;;;5333:34;;5403:15;;;;5398:2;5383:18;;5376:43;-1:-1:-1;;;;;;5455:33:165;;;5450:2;5435:18;;5428:61;5283:2;5268:18;;5095:400::o;5500:245::-;5567:6;5620:2;5608:9;5599:7;5595:23;5591:32;5588:52;;;5636:1;5633;5626:12;5588:52;5668:9;5662:16;5687:28;5709:5;5687:28;:::i",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "authority()": "bf7e214f",
    "canCall(address,address,bytes4)": "b7009613",
    "doesRoleHaveCapability(uint8,bytes4)": "e688747b",
    "doesUserHaveRole(address,uint8)": "ea7ca276",
    "getRolesWithCapability(bytes4)": "ed0d0efb",
    "getTargetCustomAuthority(address)": "c53a3985",
    "getUserRoles(address)": "06a36aee",
    "isCapabilityPublic(bytes4)": "0bade8a4",
    "owner()": "8da5cb5b",
    "setAuthority(address)": "7a9e5e4b",
    "setPublicCapability(bytes4,bool)": "4b5159da",
    "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
    "setTargetCustomAuthority(address,address)": "728b952b",
    "setUserRole(address,uint8,bool)": "67aff484",
    "transferOwnership(address)": "f2fde38b"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"_authority\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/authorities/MultiRolesAuthority.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Flexible and target agnostic role based Authority that supports up to 256 roles.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":\"MultiRolesAuthority\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "contract Authority",
              "name": "_authority",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
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
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": "MultiRolesAuthority"
      },
      "libraries": {}
    },
    "sources": {
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol",
    "id": 62342,
    "exportedSymbols": {
      "Auth": [
        62023
      ],
      "Authority": [
        62036
      ],
      "MultiRolesAuthority": [
        62341
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:4747:92",
    "nodes": [
      {
        "id": 62038,
        "nodeType": "PragmaDirective",
        "src": "42:24:92",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 62041,
        "nodeType": "ImportDirective",
        "src": "68:44:92",
        "nodes": [],
        "absolutePath": "lib/solmate/src/auth/Auth.sol",
        "file": "../Auth.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 62342,
        "sourceUnit": 62037,
        "symbolAliases": [
          {
            "foreign": {
              "id": 62039,
              "name": "Auth",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62023,
              "src": "76:4:92",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 62040,
              "name": "Authority",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62036,
              "src": "82:9:92",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 62341,
        "nodeType": "ContractDefinition",
        "src": "327:4461:92",
        "nodes": [
          {
            "id": 62054,
            "nodeType": "EventDefinition",
            "src": "560:78:92",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2",
            "name": "UserRoleUpdated",
            "nameLocation": "566:15:92",
            "parameters": {
              "id": 62053,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62048,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "598:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62054,
                  "src": "582:20:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62047,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:7:92",
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
                  "id": 62050,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "618:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62054,
                  "src": "604:18:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62049,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "604:5:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62052,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "629:7:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62054,
                  "src": "624:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62051,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "581:56:92"
            }
          },
          {
            "id": 62060,
            "nodeType": "EventDefinition",
            "src": "644:72:92",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103",
            "name": "PublicCapabilityUpdated",
            "nameLocation": "650:23:92",
            "parameters": {
              "id": 62059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62056,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "689:11:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62060,
                  "src": "674:26:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62055,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:6:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62058,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "707:7:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62060,
                  "src": "702:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62057,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "702:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "673:42:92"
            }
          },
          {
            "id": 62068,
            "nodeType": "EventDefinition",
            "src": "722:90:92",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "bfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151",
            "name": "RoleCapabilityUpdated",
            "nameLocation": "728:21:92",
            "parameters": {
              "id": 62067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62062,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "764:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62068,
                  "src": "750:18:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62061,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "750:5:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62064,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "785:11:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62068,
                  "src": "770:26:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62063,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "770:6:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62066,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "803:7:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62068,
                  "src": "798:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62065,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "798:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "749:62:92"
            }
          },
          {
            "id": 62075,
            "nodeType": "EventDefinition",
            "src": "818:88:92",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff2065",
            "name": "TargetCustomAuthorityUpdated",
            "nameLocation": "824:28:92",
            "parameters": {
              "id": 62074,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62070,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "869:6:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62075,
                  "src": "853:22:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62069,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "853:7:92",
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
                  "id": 62073,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "authority",
                  "nameLocation": "895:9:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62075,
                  "src": "877:27:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62036",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62072,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62071,
                      "name": "Authority",
                      "nameLocations": [
                        "877:9:92"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62036,
                      "src": "877:9:92"
                    },
                    "referencedDeclaration": 62036,
                    "src": "877:9:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "852:53:92"
            }
          },
          {
            "id": 62088,
            "nodeType": "FunctionDefinition",
            "src": "1094:77:92",
            "nodes": [],
            "body": {
              "id": 62087,
              "nodeType": "Block",
              "src": "1169:2:92",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 62083,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62077,
                    "src": "1149:6:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 62084,
                    "name": "_authority",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62080,
                    "src": "1157:10:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  }
                ],
                "id": 62085,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 62082,
                  "name": "Auth",
                  "nameLocations": [
                    "1144:4:92"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62023,
                  "src": "1144:4:92"
                },
                "nodeType": "ModifierInvocation",
                "src": "1144:24:92"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 62081,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62077,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "1114:6:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62088,
                  "src": "1106:14:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62076,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1106:7:92",
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
                  "id": 62080,
                  "mutability": "mutable",
                  "name": "_authority",
                  "nameLocation": "1132:10:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62088,
                  "src": "1122:20:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62036",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62079,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62078,
                      "name": "Authority",
                      "nameLocations": [
                        "1122:9:92"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62036,
                      "src": "1122:9:92"
                    },
                    "referencedDeclaration": 62036,
                    "src": "1122:9:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1105:38:92"
            },
            "returnParameters": {
              "id": 62086,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1169:0:92"
            },
            "scope": 62341,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 62093,
            "nodeType": "VariableDeclaration",
            "src": "1369:61:92",
            "nodes": [],
            "constant": false,
            "functionSelector": "c53a3985",
            "mutability": "mutable",
            "name": "getTargetCustomAuthority",
            "nameLocation": "1406:24:92",
            "scope": 62341,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$62036_$",
              "typeString": "mapping(address => contract Authority)"
            },
            "typeName": {
              "id": 62092,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62089,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1377:7:92",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1369:29:92",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$62036_$",
                "typeString": "mapping(address => contract Authority)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62091,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 62090,
                  "name": "Authority",
                  "nameLocations": [
                    "1388:9:92"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62036,
                  "src": "1388:9:92"
                },
                "referencedDeclaration": 62036,
                "src": "1388:9:92",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Authority_$62036",
                  "typeString": "contract Authority"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62097,
            "nodeType": "VariableDeclaration",
            "src": "1622:47:92",
            "nodes": [],
            "constant": false,
            "functionSelector": "06a36aee",
            "mutability": "mutable",
            "name": "getUserRoles",
            "nameLocation": "1657:12:92",
            "scope": 62341,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
              "typeString": "mapping(address => bytes32)"
            },
            "typeName": {
              "id": 62096,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62094,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1630:7:92",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1622:27:92",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                "typeString": "mapping(address => bytes32)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62095,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1641:7:92",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62101,
            "nodeType": "VariableDeclaration",
            "src": "1676:49:92",
            "nodes": [],
            "constant": false,
            "functionSelector": "0bade8a4",
            "mutability": "mutable",
            "name": "isCapabilityPublic",
            "nameLocation": "1707:18:92",
            "scope": 62341,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
              "typeString": "mapping(bytes4 => bool)"
            },
            "typeName": {
              "id": 62100,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62098,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "1684:6:92",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "nodeType": "Mapping",
              "src": "1676:23:92",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                "typeString": "mapping(bytes4 => bool)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62099,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1694:4:92",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62105,
            "nodeType": "VariableDeclaration",
            "src": "1732:56:92",
            "nodes": [],
            "constant": false,
            "functionSelector": "ed0d0efb",
            "mutability": "mutable",
            "name": "getRolesWithCapability",
            "nameLocation": "1766:22:92",
            "scope": 62341,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
              "typeString": "mapping(bytes4 => bytes32)"
            },
            "typeName": {
              "id": 62104,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62102,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "1740:6:92",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "nodeType": "Mapping",
              "src": "1732:26:92",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                "typeString": "mapping(bytes4 => bytes32)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62103,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1750:7:92",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62129,
            "nodeType": "FunctionDefinition",
            "src": "1795:157:92",
            "nodes": [],
            "body": {
              "id": 62128,
              "nodeType": "Block",
              "src": "1882:70:92",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 62124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 62121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 62116,
                                    "name": "getUserRoles",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62097,
                                    "src": "1908:12:92",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                      "typeString": "mapping(address => bytes32)"
                                    }
                                  },
                                  "id": 62118,
                                  "indexExpression": {
                                    "id": 62117,
                                    "name": "user",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62107,
                                    "src": "1921:4:92",
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
                                  "src": "1908:18:92",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 62115,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1900:7:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 62114,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1900:7:92",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62119,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1900:27:92",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "id": 62120,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62109,
                              "src": "1931:4:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "src": "1900:35:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 62122,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1899:37:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 62123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1939:1:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1899:41:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 62125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1944:1:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1899:46:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62113,
                  "id": 62127,
                  "nodeType": "Return",
                  "src": "1892:53:92"
                }
              ]
            },
            "functionSelector": "ea7ca276",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "doesUserHaveRole",
            "nameLocation": "1804:16:92",
            "parameters": {
              "id": 62110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62107,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1829:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62129,
                  "src": "1821:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62106,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1821:7:92",
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
                  "id": 62109,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1841:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62129,
                  "src": "1835:10:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62108,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1835:5:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1820:26:92"
            },
            "returnParameters": {
              "id": 62113,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62112,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62129,
                  "src": "1876:4:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62111,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1876:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1875:6:92"
            },
            "scope": 62341,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62153,
            "nodeType": "FunctionDefinition",
            "src": "1958:186:92",
            "nodes": [],
            "body": {
              "id": 62152,
              "nodeType": "Block",
              "src": "2057:87:92",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 62148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 62145,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 62140,
                                    "name": "getRolesWithCapability",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62105,
                                    "src": "2083:22:92",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                                      "typeString": "mapping(bytes4 => bytes32)"
                                    }
                                  },
                                  "id": 62142,
                                  "indexExpression": {
                                    "id": 62141,
                                    "name": "functionSig",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62133,
                                    "src": "2106:11:92",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes4",
                                      "typeString": "bytes4"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2083:35:92",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 62139,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2075:7:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 62138,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2075:7:92",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62143,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2075:44:92",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "id": 62144,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62131,
                              "src": "2123:4:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "src": "2075:52:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 62146,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2074:54:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 62147,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2131:1:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2074:58:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 62149,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2136:1:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2074:63:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62137,
                  "id": 62151,
                  "nodeType": "Return",
                  "src": "2067:70:92"
                }
              ]
            },
            "functionSelector": "e688747b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "doesRoleHaveCapability",
            "nameLocation": "1967:22:92",
            "parameters": {
              "id": 62134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62131,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1996:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62153,
                  "src": "1990:10:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62130,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1990:5:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62133,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "2009:11:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62153,
                  "src": "2002:18:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62132,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2002:6:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1989:32:92"
            },
            "returnParameters": {
              "id": 62137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62136,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62153,
                  "src": "2051:4:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62135,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2051:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2050:6:92"
            },
            "scope": 62341,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62207,
            "nodeType": "FunctionDefinition",
            "src": "2336:465:92",
            "nodes": [],
            "body": {
              "id": 62206,
              "nodeType": "Block",
              "src": "2477:324:92",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62167
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62167,
                      "mutability": "mutable",
                      "name": "customAuthority",
                      "nameLocation": "2497:15:92",
                      "nodeType": "VariableDeclaration",
                      "scope": 62206,
                      "src": "2487:25:92",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62036",
                        "typeString": "contract Authority"
                      },
                      "typeName": {
                        "id": 62166,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 62165,
                          "name": "Authority",
                          "nameLocations": [
                            "2487:9:92"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62036,
                          "src": "2487:9:92"
                        },
                        "referencedDeclaration": 62036,
                        "src": "2487:9:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62036",
                          "typeString": "contract Authority"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62171,
                  "initialValue": {
                    "baseExpression": {
                      "id": 62168,
                      "name": "getTargetCustomAuthority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62093,
                      "src": "2515:24:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$62036_$",
                        "typeString": "mapping(address => contract Authority)"
                      }
                    },
                    "id": 62170,
                    "indexExpression": {
                      "id": 62169,
                      "name": "target",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62157,
                      "src": "2540:6:92",
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
                    "src": "2515:32:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2487:60:92"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 62180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 62174,
                          "name": "customAuthority",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62167,
                          "src": "2570:15:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$62036",
                            "typeString": "contract Authority"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_Authority_$62036",
                            "typeString": "contract Authority"
                          }
                        ],
                        "id": 62173,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2562:7:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 62172,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2562:7:92",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 62175,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2562:24:92",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 62178,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2598:1:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 62177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2590:7:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 62176,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2590:7:92",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 62179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2590:10:92",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2562:38:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62188,
                  "nodeType": "IfStatement",
                  "src": "2558:101:92",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 62183,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62155,
                          "src": "2633:4:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 62184,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62157,
                          "src": "2639:6:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 62185,
                          "name": "functionSig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62159,
                          "src": "2647:11:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
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
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "expression": {
                          "id": 62181,
                          "name": "customAuthority",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62167,
                          "src": "2609:15:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$62036",
                            "typeString": "contract Authority"
                          }
                        },
                        "id": 62182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2625:7:92",
                        "memberName": "canCall",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62035,
                        "src": "2609:23:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (address,address,bytes4) view external returns (bool)"
                        }
                      },
                      "id": 62186,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2609:50:92",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 62164,
                    "id": 62187,
                    "nodeType": "Return",
                    "src": "2602:57:92"
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 62204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "id": 62189,
                        "name": "isCapabilityPublic",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62101,
                        "src": "2689:18:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                          "typeString": "mapping(bytes4 => bool)"
                        }
                      },
                      "id": 62191,
                      "indexExpression": {
                        "id": 62190,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62159,
                        "src": "2708:11:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2689:31:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "id": 62203,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 62194,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2732:1:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 62193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2724:7:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 62192,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "2724:7:92",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2724:10:92",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 62202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 62196,
                            "name": "getUserRoles",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62097,
                            "src": "2738:12:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                              "typeString": "mapping(address => bytes32)"
                            }
                          },
                          "id": 62198,
                          "indexExpression": {
                            "id": 62197,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62155,
                            "src": "2751:4:92",
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
                          "src": "2738:18:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 62199,
                            "name": "getRolesWithCapability",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62105,
                            "src": "2759:22:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                              "typeString": "mapping(bytes4 => bytes32)"
                            }
                          },
                          "id": 62201,
                          "indexExpression": {
                            "id": 62200,
                            "name": "functionSig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62159,
                            "src": "2782:11:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2759:35:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "2738:56:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "2724:70:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2689:105:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62164,
                  "id": 62205,
                  "nodeType": "Return",
                  "src": "2670:124:92"
                }
              ]
            },
            "baseFunctions": [
              62035
            ],
            "functionSelector": "b7009613",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "canCall",
            "nameLocation": "2345:7:92",
            "overrides": {
              "id": 62161,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2453:8:92"
            },
            "parameters": {
              "id": 62160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62155,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "2370:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62207,
                  "src": "2362:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:7:92",
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
                  "id": 62157,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "2392:6:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62207,
                  "src": "2384:14:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2384:7:92",
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
                  "id": 62159,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "2415:11:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62207,
                  "src": "2408:18:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62158,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2408:6:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2352:80:92"
            },
            "returnParameters": {
              "id": 62164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62163,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62207,
                  "src": "2471:4:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62162,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2471:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2470:6:92"
            },
            "scope": 62341,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62229,
            "nodeType": "FunctionDefinition",
            "src": "3006:241:92",
            "nodes": [],
            "body": {
              "id": 62228,
              "nodeType": "Block",
              "src": "3111:136:92",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 62217,
                        "name": "getTargetCustomAuthority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62093,
                        "src": "3121:24:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$62036_$",
                          "typeString": "mapping(address => contract Authority)"
                        }
                      },
                      "id": 62219,
                      "indexExpression": {
                        "id": 62218,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62209,
                        "src": "3146:6:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3121:32:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62036",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62220,
                      "name": "customAuthority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62212,
                      "src": "3156:15:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62036",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "3121:50:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 62222,
                  "nodeType": "ExpressionStatement",
                  "src": "3121:50:92"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 62224,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62209,
                        "src": "3216:6:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62225,
                        "name": "customAuthority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62212,
                        "src": "3224:15:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62036",
                          "typeString": "contract Authority"
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
                          "typeIdentifier": "t_contract$_Authority_$62036",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 62223,
                      "name": "TargetCustomAuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62075,
                      "src": "3187:28:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$62036_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 62226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3187:53:92",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62227,
                  "nodeType": "EmitStatement",
                  "src": "3182:58:92"
                }
              ]
            },
            "functionSelector": "728b952b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62215,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62214,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "3098:12:92"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 61928,
                  "src": "3098:12:92"
                },
                "nodeType": "ModifierInvocation",
                "src": "3098:12:92"
              }
            ],
            "name": "setTargetCustomAuthority",
            "nameLocation": "3015:24:92",
            "parameters": {
              "id": 62213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62209,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "3048:6:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62229,
                  "src": "3040:14:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62208,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3040:7:92",
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
                  "id": 62212,
                  "mutability": "mutable",
                  "name": "customAuthority",
                  "nameLocation": "3066:15:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62229,
                  "src": "3056:25:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62036",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62211,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62210,
                      "name": "Authority",
                      "nameLocations": [
                        "3056:9:92"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62036,
                      "src": "3056:9:92"
                    },
                    "referencedDeclaration": 62036,
                    "src": "3056:9:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3039:43:92"
            },
            "returnParameters": {
              "id": 62216,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3111:0:92"
            },
            "scope": 62341,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62250,
            "nodeType": "FunctionDefinition",
            "src": "3448:210:92",
            "nodes": [],
            "body": {
              "id": 62249,
              "nodeType": "Block",
              "src": "3539:119:92",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 62238,
                        "name": "isCapabilityPublic",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62101,
                        "src": "3549:18:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                          "typeString": "mapping(bytes4 => bool)"
                        }
                      },
                      "id": 62240,
                      "indexExpression": {
                        "id": 62239,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62231,
                        "src": "3568:11:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3549:31:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62241,
                      "name": "enabled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62233,
                      "src": "3583:7:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3549:41:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62243,
                  "nodeType": "ExpressionStatement",
                  "src": "3549:41:92"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 62245,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62231,
                        "src": "3630:11:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 62246,
                        "name": "enabled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62233,
                        "src": "3643:7:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 62244,
                      "name": "PublicCapabilityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62060,
                      "src": "3606:23:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes4_$_t_bool_$returns$__$",
                        "typeString": "function (bytes4,bool)"
                      }
                    },
                    "id": 62247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3606:45:92",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62248,
                  "nodeType": "EmitStatement",
                  "src": "3601:50:92"
                }
              ]
            },
            "functionSelector": "4b5159da",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62236,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62235,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "3526:12:92"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 61928,
                  "src": "3526:12:92"
                },
                "nodeType": "ModifierInvocation",
                "src": "3526:12:92"
              }
            ],
            "name": "setPublicCapability",
            "nameLocation": "3457:19:92",
            "parameters": {
              "id": 62234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62231,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "3484:11:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62250,
                  "src": "3477:18:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62230,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "3477:6:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62233,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "3502:7:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62250,
                  "src": "3497:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62232,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3497:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3476:34:92"
            },
            "returnParameters": {
              "id": 62237,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3539:0:92"
            },
            "scope": 62341,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62295,
            "nodeType": "FunctionDefinition",
            "src": "3853:337:92",
            "nodes": [],
            "body": {
              "id": 62294,
              "nodeType": "Block",
              "src": "3972:218:92",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 62261,
                    "name": "enabled",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62256,
                    "src": "3986:7:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 62286,
                    "nodeType": "Block",
                    "src": "4066:66:92",
                    "statements": [
                      {
                        "expression": {
                          "id": 62284,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 62274,
                              "name": "getUserRoles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62097,
                              "src": "4080:12:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 62276,
                            "indexExpression": {
                              "id": 62275,
                              "name": "user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62252,
                              "src": "4093:4:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4080:18:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "&=",
                          "rightHandSide": {
                            "id": 62283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "~",
                            "prefix": true,
                            "src": "4102:19:92",
                            "subExpression": {
                              "arguments": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 62281,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "hexValue": "31",
                                    "id": 62279,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4111:1:92",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<<",
                                  "rightExpression": {
                                    "id": 62280,
                                    "name": "role",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62254,
                                    "src": "4116:4:92",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  },
                                  "src": "4111:9:92",
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
                                "id": 62278,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4103:7:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 62277,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4103:7:92",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62282,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4103:18:92",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4080:41:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 62285,
                        "nodeType": "ExpressionStatement",
                        "src": "4080:41:92"
                      }
                    ]
                  },
                  "id": 62287,
                  "nodeType": "IfStatement",
                  "src": "3982:150:92",
                  "trueBody": {
                    "id": 62273,
                    "nodeType": "Block",
                    "src": "3995:65:92",
                    "statements": [
                      {
                        "expression": {
                          "id": 62271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 62262,
                              "name": "getUserRoles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62097,
                              "src": "4009:12:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 62264,
                            "indexExpression": {
                              "id": 62263,
                              "name": "user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62252,
                              "src": "4022:4:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4009:18:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "|=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 62269,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "31",
                                  "id": 62267,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4039:1:92",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "id": 62268,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62254,
                                  "src": "4044:4:92",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "src": "4039:9:92",
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
                              "id": 62266,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4031:7:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 62265,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "4031:7:92",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 62270,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4031:18:92",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4009:40:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 62272,
                        "nodeType": "ExpressionStatement",
                        "src": "4009:40:92"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 62289,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62252,
                        "src": "4163:4:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62290,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62254,
                        "src": "4169:4:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 62291,
                        "name": "enabled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62256,
                        "src": "4175:7:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
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
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 62288,
                      "name": "UserRoleUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62054,
                      "src": "4147:15:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint8_$_t_bool_$returns$__$",
                        "typeString": "function (address,uint8,bool)"
                      }
                    },
                    "id": 62292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4147:36:92",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62293,
                  "nodeType": "EmitStatement",
                  "src": "4142:41:92"
                }
              ]
            },
            "functionSelector": "67aff484",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62259,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62258,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "3959:12:92"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 61928,
                  "src": "3959:12:92"
                },
                "nodeType": "ModifierInvocation",
                "src": "3959:12:92"
              }
            ],
            "name": "setUserRole",
            "nameLocation": "3862:11:92",
            "parameters": {
              "id": 62257,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62252,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "3891:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62295,
                  "src": "3883:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62251,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3883:7:92",
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
                  "id": 62254,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3911:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62295,
                  "src": "3905:10:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62253,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "3905:5:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62256,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "3930:7:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62295,
                  "src": "3925:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62255,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3925:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3873:70:92"
            },
            "returnParameters": {
              "id": 62260,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3972:0:92"
            },
            "scope": 62341,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62340,
            "nodeType": "FunctionDefinition",
            "src": "4390:396:92",
            "nodes": [],
            "body": {
              "id": 62339,
              "nodeType": "Block",
              "src": "4521:265:92",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 62306,
                    "name": "enabled",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62301,
                    "src": "4535:7:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 62331,
                    "nodeType": "Block",
                    "src": "4632:83:92",
                    "statements": [
                      {
                        "expression": {
                          "id": 62329,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 62319,
                              "name": "getRolesWithCapability",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62105,
                              "src": "4646:22:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                                "typeString": "mapping(bytes4 => bytes32)"
                              }
                            },
                            "id": 62321,
                            "indexExpression": {
                              "id": 62320,
                              "name": "functionSig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62299,
                              "src": "4669:11:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4646:35:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "&=",
                          "rightHandSide": {
                            "id": 62328,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "~",
                            "prefix": true,
                            "src": "4685:19:92",
                            "subExpression": {
                              "arguments": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 62326,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "hexValue": "31",
                                    "id": 62324,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4694:1:92",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<<",
                                  "rightExpression": {
                                    "id": 62325,
                                    "name": "role",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62297,
                                    "src": "4699:4:92",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  },
                                  "src": "4694:9:92",
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
                                "id": 62323,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4686:7:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 62322,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4686:7:92",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62327,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4686:18:92",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4646:58:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 62330,
                        "nodeType": "ExpressionStatement",
                        "src": "4646:58:92"
                      }
                    ]
                  },
                  "id": 62332,
                  "nodeType": "IfStatement",
                  "src": "4531:184:92",
                  "trueBody": {
                    "id": 62318,
                    "nodeType": "Block",
                    "src": "4544:82:92",
                    "statements": [
                      {
                        "expression": {
                          "id": 62316,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 62307,
                              "name": "getRolesWithCapability",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62105,
                              "src": "4558:22:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                                "typeString": "mapping(bytes4 => bytes32)"
                              }
                            },
                            "id": 62309,
                            "indexExpression": {
                              "id": 62308,
                              "name": "functionSig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62299,
                              "src": "4581:11:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes4",
                                "typeString": "bytes4"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4558:35:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "|=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 62314,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "31",
                                  "id": 62312,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4605:1:92",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "id": 62313,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62297,
                                  "src": "4610:4:92",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "src": "4605:9:92",
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
                              "id": 62311,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4597:7:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 62310,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "4597:7:92",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 62315,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4597:18:92",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4558:57:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 62317,
                        "nodeType": "ExpressionStatement",
                        "src": "4558:57:92"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 62334,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62297,
                        "src": "4752:4:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 62335,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62299,
                        "src": "4758:11:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 62336,
                        "name": "enabled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62301,
                        "src": "4771:7:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 62333,
                      "name": "RoleCapabilityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62068,
                      "src": "4730:21:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes4_$_t_bool_$returns$__$",
                        "typeString": "function (uint8,bytes4,bool)"
                      }
                    },
                    "id": 62337,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4730:49:92",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62338,
                  "nodeType": "EmitStatement",
                  "src": "4725:54:92"
                }
              ]
            },
            "functionSelector": "0ea9b75b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62304,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62303,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "4508:12:92"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 61928,
                  "src": "4508:12:92"
                },
                "nodeType": "ModifierInvocation",
                "src": "4508:12:92"
              }
            ],
            "name": "setRoleCapability",
            "nameLocation": "4399:17:92",
            "parameters": {
              "id": 62302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62297,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "4432:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62340,
                  "src": "4426:10:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62296,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "4426:5:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62299,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "4453:11:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62340,
                  "src": "4446:18:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62298,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4446:6:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62301,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "4479:7:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62340,
                  "src": "4474:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62300,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4474:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4416:76:92"
            },
            "returnParameters": {
              "id": 62305,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4521:0:92"
            },
            "scope": 62341,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 62043,
              "name": "Auth",
              "nameLocations": [
                "359:4:92"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62023,
              "src": "359:4:92"
            },
            "id": 62044,
            "nodeType": "InheritanceSpecifier",
            "src": "359:4:92"
          },
          {
            "baseName": {
              "id": 62045,
              "name": "Authority",
              "nameLocations": [
                "365:9:92"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62036,
              "src": "365:9:92"
            },
            "id": 62046,
            "nodeType": "InheritanceSpecifier",
            "src": "365:9:92"
          }
        ],
        "canonicalName": "MultiRolesAuthority",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 62042,
          "nodeType": "StructuredDocumentation",
          "src": "114:213:92",
          "text": "@notice Flexible and target agnostic role based Authority that supports up to 256 roles.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/authorities/MultiRolesAuthority.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          62341,
          62036,
          62023
        ],
        "name": "MultiRolesAuthority",
        "nameLocation": "336:19:92",
        "scope": 62342,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 92
}