export const MultiRolesAuthority = 
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
    "sourceMap": "327:4461:98:-:0;;;1094:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;682:5:97;:14;;-1:-1:-1;;;;;;682:14:97;;;-1:-1:-1;;;;;682:14:97;;;;;;;;-1:-1:-1;706:22:97;;;;;;;;;;;;744:40;;682:14;;706:22;;682:14;765:10;;744:40;;;799;;-1:-1:-1;;;;;799:40:97;;;816:10;;799:40;;;;;622:224;;1094:77:98;;327:4461;;14:131:167;-1:-1:-1;;;;;89:31:167;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:404::-;248:6;256;309:2;297:9;288:7;284:23;280:32;277:52;;;325:1;322;315:12;277:52;357:9;351:16;376:31;401:5;376:31;:::i;:::-;476:2;461:18;;455:25;426:5;;-1:-1:-1;489:33:167;455:25;489:33;:::i;:::-;541:7;531:17;;;150:404;;;;;:::o;:::-;327:4461:98;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063e688747b11610066578063e688747b1461023b578063ea7ca27614610271578063ed0d0efb146102a8578063f2fde38b146102c857600080fd5b80638da5cb5b146101c1578063b7009613146101ec578063bf7e214f146101ff578063c53a39851461021257600080fd5b80634b5159da116100d35780634b5159da1461017557806367aff48414610188578063728b952b1461019b5780637a9e5e4b146101ae57600080fd5b806306a36aee146100fa5780630bade8a41461012d5780630ea9b75b14610160575b600080fd5b61011a6101083660046108c8565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b61015061013b366004610902565b60046020526000908152604090205460ff1681565b6040519015158152602001610124565b61017361016e36600461093c565b6102db565b005b610173610183366004610983565b6103bc565b6101736101963660046109ba565b61044e565b6101736101a93660046109e8565b610516565b6101736101bc3660046108c8565b61059f565b6000546101d4906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b6101506101fa366004610a16565b610689565b6001546101d4906001600160a01b031681565b6101d46102203660046108c8565b6002602052600090815260409020546001600160a01b031681565b610150610249366004610a5d565b6001600160e01b03191660009081526005602052604090205460ff919091161c600116151590565b61015061027f366004610a90565b6001600160a01b0391909116600090815260036020526040902054600160ff9092161c16151590565b61011a6102b6366004610902565b60056020526000908152604090205481565b6101736102d63660046108c8565b610789565b6102f1336000356001600160e01b031916610806565b6103165760405162461bcd60e51b815260040161030d90610abc565b60405180910390fd5b8015610346576001600160e01b0319821660009081526005602052604090208054600160ff86161b17905561036d565b6001600160e01b0319821660009081526005602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516103af911515815260200190565b60405180910390a3505050565b6103d2336000356001600160e01b031916610806565b6103ee5760405162461bcd60e51b815260040161030d90610abc565b6001600160e01b03198216600081815260046020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610464336000356001600160e01b031916610806565b6104805760405162461bcd60e51b815260040161030d90610abc565b80156104af576001600160a01b03831660009081526003602052604090208054600160ff85161b1790556104d5565b6001600160a01b03831660009081526003602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516103af911515815260200190565b61052c336000356001600160e01b031916610806565b6105485760405162461bcd60e51b815260040161030d90610abc565b6001600160a01b0382811660008181526002602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6000546001600160a01b0316331480610634575060015460405163b700961360e01b81526001600160a01b039091169063b7009613906105f390339030906001600160e01b03196000351690600401610ae2565b602060405180830381865afa158015610610573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106349190610b0f565b61063d57600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001600160a01b0380831660009081526002602052604081205490911680156107255760405163b700961360e01b81526001600160a01b0382169063b7009613906106dc90889088908890600401610ae2565b602060405180830381865afa1580156106f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071d9190610b0f565b915050610782565b6001600160e01b0319831660009081526004602052604090205460ff168061077e57506001600160e01b031983166000908152600560209081526040808320546001600160a01b03891684526003909252909120541615155b9150505b9392505050565b61079f336000356001600160e01b031916610806565b6107bb5760405162461bcd60e51b815260040161030d90610abc565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001546000906001600160a01b03168015801590610890575060405163b700961360e01b81526001600160a01b0382169063b70096139061084f90879030908890600401610ae2565b602060405180830381865afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190610b0f565b806108a857506000546001600160a01b038581169116145b949350505050565b6001600160a01b03811681146108c557600080fd5b50565b6000602082840312156108da57600080fd5b8135610782816108b0565b80356001600160e01b0319811681146108fd57600080fd5b919050565b60006020828403121561091457600080fd5b610782826108e5565b803560ff811681146108fd57600080fd5b80151581146108c557600080fd5b60008060006060848603121561095157600080fd5b61095a8461091d565b9250610968602085016108e5565b915060408401356109788161092e565b809150509250925092565b6000806040838503121561099657600080fd5b61099f836108e5565b915060208301356109af8161092e565b809150509250929050565b6000806000606084860312156109cf57600080fd5b83356109da816108b0565b92506109686020850161091d565b600080604083850312156109fb57600080fd5b8235610a06816108b0565b915060208301356109af816108b0565b600080600060608486031215610a2b57600080fd5b8335610a36816108b0565b92506020840135610a46816108b0565b9150610a54604085016108e5565b90509250925092565b60008060408385031215610a7057600080fd5b610a798361091d565b9150610a87602084016108e5565b90509250929050565b60008060408385031215610aa357600080fd5b8235610aae816108b0565b9150610a876020840161091d565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215610b2157600080fd5b81516107828161092e56fea26469706673582212209a28b3ad7b6adc672b1e2952372ac47cc0cea6d59afd6cd9889faa80e24834e864736f6c63430008130033",
    "sourceMap": "327:4461:98:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1622:47;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;548:25:167;;;536:2;521:18;1622:47:98;;;;;;;;1676:49;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1116:14:167;;1109:22;1091:41;;1079:2;1064:18;1676:49:98;951:187:167;4390:396:98;;;;;;:::i;:::-;;:::i;:::-;;3448:210;;;;;;:::i;:::-;;:::i;3853:337::-;;;;;;:::i;:::-;;:::i;3006:241::-;;;;;;:::i;:::-;;:::i;1523:434:97:-;;;;;;:::i;:::-;;:::i;562:20::-;;;;;-1:-1:-1;;;;;562:20:97;;;;;;-1:-1:-1;;;;;3437:32:167;;;3419:51;;3407:2;3392:18;562:20:97;3273:203:167;2336:465:98;;;;;;:::i;:::-;;:::i;589:26:97:-;;;;;-1:-1:-1;;;;;589:26:97;;;1369:61:98;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:98;;;1958:186;;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:98;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:98;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;:::i;:::-;;;;;;;;;;;;;;1963:164:97;;;;;;:::i;:::-;;:::i;4390:396:98:-;902:33:97;915:10;927:7;;-1:-1:-1;;;;;;927:7:97;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:97;;;;;;;:::i;:::-;;;;;;;;;4535:7:98::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:98;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:98;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:98::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1116:14:167::0;1109:22;1091:41;;1079:2;1064:18;;951:187;4730:49:98::1;;;;;;;;4390:396:::0;;;:::o;3448:210::-;902:33:97;915:10;927:7;;-1:-1:-1;;;;;;927:7:97;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:97;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:98;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:98::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1091:41:167;;;3606:45:98::1;::::0;1064:18:167;3606:45:98::1;;;;;;;3448:210:::0;;:::o;3853:337::-;902:33:97;915:10;927:7;;-1:-1:-1;;;;;;927:7:97;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:97;;;;;;;:::i;:::-;3986:7:98::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:98;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:98;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:98::1;;4175:7;4147:36;;;;1116:14:167::0;1109:22;1091:41;;1079:2;1064:18;;951:187;3006:241:98;902:33:97;915:10;927:7;;-1:-1:-1;;;;;;927:7:97;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:97;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:98;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:98::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;1523:434:97:-;1794:5;;-1:-1:-1;;;;;1794:5:97;1780:10;:19;;:76;;-1:-1:-1;1803:9:97;;:53;;-1:-1:-1;;;1803:53:97;;-1:-1:-1;;;;;1803:9:97;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:97;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:97;-1:-1:-1;;;;;1868:24:97;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:97;1523:434;:::o;2336:465:98:-;-1:-1:-1;;;;;2515:32:98;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:98;;-1:-1:-1;;;;;2609:23:98;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:98;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:98;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:98;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;;;2336:465;;;;;;:::o;1963:164:97:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:97;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:97;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:97::1;-1:-1:-1::0;;;;;2046:16:97;::::1;::::0;;::::1;::::0;;2078:42:::1;::::0;2046:16;;2099:10:::1;::::0;2078:42:::1;::::0;2046:5;2078:42:::1;1963:164:::0;:::o;977:540::-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:97;1415:27;;;;;:77;;-1:-1:-1;1446:46:97;;-1:-1:-1;;;1446:46:97;;-1:-1:-1;;;;;1446:12:97;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:97;;-1:-1:-1;;;;;1497:13:97;;;1505:5;;1497:13;1414:96;1407:103;977:540;-1:-1:-1;;;;977:540:97:o;14:131:167:-;-1:-1:-1;;;;;89:31:167;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:247::-;209:6;262:2;250:9;241:7;237:23;233:32;230:52;;;278:1;275;268:12;230:52;317:9;304:23;336:31;361:5;336:31;:::i;584:173::-;651:20;;-1:-1:-1;;;;;;700:32:167;;690:43;;680:71;;747:1;744;737:12;680:71;584:173;;;:::o;762:184::-;820:6;873:2;861:9;852:7;848:23;844:32;841:52;;;889:1;886;879:12;841:52;912:28;930:9;912:28;:::i;1143:156::-;1209:20;;1269:4;1258:16;;1248:27;;1238:55;;1289:1;1286;1279:12;1304:118;1390:5;1383:13;1376:21;1369:5;1366:32;1356:60;;1412:1;1409;1402:12;1427:383;1498:6;1506;1514;1567:2;1555:9;1546:7;1542:23;1538:32;1535:52;;;1583:1;1580;1573:12;1535:52;1606:27;1623:9;1606:27;:::i;:::-;1596:37;;1652;1685:2;1674:9;1670:18;1652:37;:::i;:::-;1642:47;;1739:2;1728:9;1724:18;1711:32;1752:28;1774:5;1752:28;:::i;:::-;1799:5;1789:15;;;1427:383;;;;;:::o;1815:313::-;1879:6;1887;1940:2;1928:9;1919:7;1915:23;1911:32;1908:52;;;1956:1;1953;1946:12;1908:52;1979:28;1997:9;1979:28;:::i;:::-;1969:38;;2057:2;2046:9;2042:18;2029:32;2070:28;2092:5;2070:28;:::i;:::-;2117:5;2107:15;;;1815:313;;;;;:::o;2133:452::-;2205:6;2213;2221;2274:2;2262:9;2253:7;2249:23;2245:32;2242:52;;;2290:1;2287;2280:12;2242:52;2329:9;2316:23;2348:31;2373:5;2348:31;:::i;:::-;2398:5;-1:-1:-1;2422:36:167;2454:2;2439:18;;2422:36;:::i;2590:407::-;2677:6;2685;2738:2;2726:9;2717:7;2713:23;2709:32;2706:52;;;2754:1;2751;2744:12;2706:52;2793:9;2780:23;2812:31;2837:5;2812:31;:::i;:::-;2862:5;-1:-1:-1;2919:2:167;2904:18;;2891:32;2932:33;2891:32;2932:33;:::i;3481:460::-;3557:6;3565;3573;3626:2;3614:9;3605:7;3601:23;3597:32;3594:52;;;3642:1;3639;3632:12;3594:52;3681:9;3668:23;3700:31;3725:5;3700:31;:::i;:::-;3750:5;-1:-1:-1;3807:2:167;3792:18;;3779:32;3820:33;3779:32;3820:33;:::i;:::-;3872:7;-1:-1:-1;3898:37:167;3931:2;3916:18;;3898:37;:::i;:::-;3888:47;;3481:460;;;;;:::o;4173:254::-;4238:6;4246;4299:2;4287:9;4278:7;4274:23;4270:32;4267:52;;;4315:1;4312;4305:12;4267:52;4338:27;4355:9;4338:27;:::i;:::-;4328:37;;4384;4417:2;4406:9;4402:18;4384:37;:::i;:::-;4374:47;;4173:254;;;;;:::o;4432:317::-;4498:6;4506;4559:2;4547:9;4538:7;4534:23;4530:32;4527:52;;;4575:1;4572;4565:12;4527:52;4614:9;4601:23;4633:31;4658:5;4633:31;:::i;:::-;4683:5;-1:-1:-1;4707:36:167;4739:2;4724:18;;4707:36;:::i;4754:336::-;4956:2;4938:21;;;4995:2;4975:18;;;4968:30;-1:-1:-1;;;5029:2:167;5014:18;;5007:42;5081:2;5066:18;;4754:336::o;5095:400::-;-1:-1:-1;;;;;5351:15:167;;;5333:34;;5403:15;;;;5398:2;5383:18;;5376:43;-1:-1:-1;;;;;;5455:33:167;;;5450:2;5435:18;;5428:61;5283:2;5268:18;;5095:400::o;5500:245::-;5567:6;5620:2;5608:9;5599:7;5595:23;5591:32;5588:52;;;5636:1;5633;5626:12;5588:52;5668:9;5662:16;5687:28;5709:5;5687:28;:::i",
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
    "id": 63048,
    "exportedSymbols": {
      "Auth": [
        62729
      ],
      "Authority": [
        62742
      ],
      "MultiRolesAuthority": [
        63047
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:4747:98",
    "nodes": [
      {
        "id": 62744,
        "nodeType": "PragmaDirective",
        "src": "42:24:98",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 62747,
        "nodeType": "ImportDirective",
        "src": "68:44:98",
        "nodes": [],
        "absolutePath": "lib/solmate/src/auth/Auth.sol",
        "file": "../Auth.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63048,
        "sourceUnit": 62743,
        "symbolAliases": [
          {
            "foreign": {
              "id": 62745,
              "name": "Auth",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62729,
              "src": "76:4:98",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 62746,
              "name": "Authority",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62742,
              "src": "82:9:98",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63047,
        "nodeType": "ContractDefinition",
        "src": "327:4461:98",
        "nodes": [
          {
            "id": 62760,
            "nodeType": "EventDefinition",
            "src": "560:78:98",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2",
            "name": "UserRoleUpdated",
            "nameLocation": "566:15:98",
            "parameters": {
              "id": 62759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62754,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "598:4:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62760,
                  "src": "582:20:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62753,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:7:98",
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
                  "id": 62756,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "618:4:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62760,
                  "src": "604:18:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62755,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "604:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62758,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "629:7:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62760,
                  "src": "624:12:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62757,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "581:56:98"
            }
          },
          {
            "id": 62766,
            "nodeType": "EventDefinition",
            "src": "644:72:98",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103",
            "name": "PublicCapabilityUpdated",
            "nameLocation": "650:23:98",
            "parameters": {
              "id": 62765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62762,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "689:11:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62766,
                  "src": "674:26:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62761,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62764,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "707:7:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62766,
                  "src": "702:12:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62763,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "702:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "673:42:98"
            }
          },
          {
            "id": 62774,
            "nodeType": "EventDefinition",
            "src": "722:90:98",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "bfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151",
            "name": "RoleCapabilityUpdated",
            "nameLocation": "728:21:98",
            "parameters": {
              "id": 62773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62768,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "764:4:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62774,
                  "src": "750:18:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62767,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "750:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62770,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "785:11:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62774,
                  "src": "770:26:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62769,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "770:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62772,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "803:7:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62774,
                  "src": "798:12:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62771,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "798:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "749:62:98"
            }
          },
          {
            "id": 62781,
            "nodeType": "EventDefinition",
            "src": "818:88:98",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff2065",
            "name": "TargetCustomAuthorityUpdated",
            "nameLocation": "824:28:98",
            "parameters": {
              "id": 62780,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62776,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "869:6:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62781,
                  "src": "853:22:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62775,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "853:7:98",
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
                  "id": 62779,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "authority",
                  "nameLocation": "895:9:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62781,
                  "src": "877:27:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62742",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62778,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62777,
                      "name": "Authority",
                      "nameLocations": [
                        "877:9:98"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62742,
                      "src": "877:9:98"
                    },
                    "referencedDeclaration": 62742,
                    "src": "877:9:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "852:53:98"
            }
          },
          {
            "id": 62794,
            "nodeType": "FunctionDefinition",
            "src": "1094:77:98",
            "nodes": [],
            "body": {
              "id": 62793,
              "nodeType": "Block",
              "src": "1169:2:98",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 62789,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62783,
                    "src": "1149:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 62790,
                    "name": "_authority",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62786,
                    "src": "1157:10:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  }
                ],
                "id": 62791,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 62788,
                  "name": "Auth",
                  "nameLocations": [
                    "1144:4:98"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62729,
                  "src": "1144:4:98"
                },
                "nodeType": "ModifierInvocation",
                "src": "1144:24:98"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 62787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62783,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "1114:6:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62794,
                  "src": "1106:14:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62782,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1106:7:98",
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
                  "id": 62786,
                  "mutability": "mutable",
                  "name": "_authority",
                  "nameLocation": "1132:10:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62794,
                  "src": "1122:20:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62742",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62785,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62784,
                      "name": "Authority",
                      "nameLocations": [
                        "1122:9:98"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62742,
                      "src": "1122:9:98"
                    },
                    "referencedDeclaration": 62742,
                    "src": "1122:9:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1105:38:98"
            },
            "returnParameters": {
              "id": 62792,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1169:0:98"
            },
            "scope": 63047,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 62799,
            "nodeType": "VariableDeclaration",
            "src": "1369:61:98",
            "nodes": [],
            "constant": false,
            "functionSelector": "c53a3985",
            "mutability": "mutable",
            "name": "getTargetCustomAuthority",
            "nameLocation": "1406:24:98",
            "scope": 63047,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$62742_$",
              "typeString": "mapping(address => contract Authority)"
            },
            "typeName": {
              "id": 62798,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62795,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1377:7:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1369:29:98",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$62742_$",
                "typeString": "mapping(address => contract Authority)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62797,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 62796,
                  "name": "Authority",
                  "nameLocations": [
                    "1388:9:98"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62742,
                  "src": "1388:9:98"
                },
                "referencedDeclaration": 62742,
                "src": "1388:9:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Authority_$62742",
                  "typeString": "contract Authority"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62803,
            "nodeType": "VariableDeclaration",
            "src": "1622:47:98",
            "nodes": [],
            "constant": false,
            "functionSelector": "06a36aee",
            "mutability": "mutable",
            "name": "getUserRoles",
            "nameLocation": "1657:12:98",
            "scope": 63047,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
              "typeString": "mapping(address => bytes32)"
            },
            "typeName": {
              "id": 62802,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62800,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1630:7:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1622:27:98",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                "typeString": "mapping(address => bytes32)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62801,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1641:7:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62807,
            "nodeType": "VariableDeclaration",
            "src": "1676:49:98",
            "nodes": [],
            "constant": false,
            "functionSelector": "0bade8a4",
            "mutability": "mutable",
            "name": "isCapabilityPublic",
            "nameLocation": "1707:18:98",
            "scope": 63047,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
              "typeString": "mapping(bytes4 => bool)"
            },
            "typeName": {
              "id": 62806,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62804,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "1684:6:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "nodeType": "Mapping",
              "src": "1676:23:98",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                "typeString": "mapping(bytes4 => bool)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62805,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1694:4:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62811,
            "nodeType": "VariableDeclaration",
            "src": "1732:56:98",
            "nodes": [],
            "constant": false,
            "functionSelector": "ed0d0efb",
            "mutability": "mutable",
            "name": "getRolesWithCapability",
            "nameLocation": "1766:22:98",
            "scope": 63047,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
              "typeString": "mapping(bytes4 => bytes32)"
            },
            "typeName": {
              "id": 62810,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 62808,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "1740:6:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "nodeType": "Mapping",
              "src": "1732:26:98",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                "typeString": "mapping(bytes4 => bytes32)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 62809,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1750:7:98",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 62835,
            "nodeType": "FunctionDefinition",
            "src": "1795:157:98",
            "nodes": [],
            "body": {
              "id": 62834,
              "nodeType": "Block",
              "src": "1882:70:98",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 62830,
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
                            "id": 62827,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 62822,
                                    "name": "getUserRoles",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62803,
                                    "src": "1908:12:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                      "typeString": "mapping(address => bytes32)"
                                    }
                                  },
                                  "id": 62824,
                                  "indexExpression": {
                                    "id": 62823,
                                    "name": "user",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62813,
                                    "src": "1921:4:98",
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
                                  "src": "1908:18:98",
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
                                "id": 62821,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1900:7:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 62820,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1900:7:98",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62825,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1900:27:98",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "id": 62826,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62815,
                              "src": "1931:4:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "src": "1900:35:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 62828,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1899:37:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 62829,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1939:1:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1899:41:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 62831,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1944:1:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1899:46:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62819,
                  "id": 62833,
                  "nodeType": "Return",
                  "src": "1892:53:98"
                }
              ]
            },
            "functionSelector": "ea7ca276",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "doesUserHaveRole",
            "nameLocation": "1804:16:98",
            "parameters": {
              "id": 62816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62813,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1829:4:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62835,
                  "src": "1821:12:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62812,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1821:7:98",
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
                  "id": 62815,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1841:4:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62835,
                  "src": "1835:10:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62814,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1835:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1820:26:98"
            },
            "returnParameters": {
              "id": 62819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62818,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62835,
                  "src": "1876:4:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62817,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1876:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1875:6:98"
            },
            "scope": 63047,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62859,
            "nodeType": "FunctionDefinition",
            "src": "1958:186:98",
            "nodes": [],
            "body": {
              "id": 62858,
              "nodeType": "Block",
              "src": "2057:87:98",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 62856,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 62854,
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
                            "id": 62851,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 62846,
                                    "name": "getRolesWithCapability",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62811,
                                    "src": "2083:22:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                                      "typeString": "mapping(bytes4 => bytes32)"
                                    }
                                  },
                                  "id": 62848,
                                  "indexExpression": {
                                    "id": 62847,
                                    "name": "functionSig",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62839,
                                    "src": "2106:11:98",
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
                                  "src": "2083:35:98",
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
                                "id": 62845,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2075:7:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 62844,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2075:7:98",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62849,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2075:44:98",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "id": 62850,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62837,
                              "src": "2123:4:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "src": "2075:52:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 62852,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2074:54:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 62853,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2131:1:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2074:58:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 62855,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2136:1:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2074:63:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62843,
                  "id": 62857,
                  "nodeType": "Return",
                  "src": "2067:70:98"
                }
              ]
            },
            "functionSelector": "e688747b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "doesRoleHaveCapability",
            "nameLocation": "1967:22:98",
            "parameters": {
              "id": 62840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62837,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "1996:4:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62859,
                  "src": "1990:10:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62836,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1990:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62839,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "2009:11:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62859,
                  "src": "2002:18:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62838,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2002:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1989:32:98"
            },
            "returnParameters": {
              "id": 62843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62842,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62859,
                  "src": "2051:4:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62841,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2051:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2050:6:98"
            },
            "scope": 63047,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62913,
            "nodeType": "FunctionDefinition",
            "src": "2336:465:98",
            "nodes": [],
            "body": {
              "id": 62912,
              "nodeType": "Block",
              "src": "2477:324:98",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62873
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62873,
                      "mutability": "mutable",
                      "name": "customAuthority",
                      "nameLocation": "2497:15:98",
                      "nodeType": "VariableDeclaration",
                      "scope": 62912,
                      "src": "2487:25:98",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62742",
                        "typeString": "contract Authority"
                      },
                      "typeName": {
                        "id": 62872,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 62871,
                          "name": "Authority",
                          "nameLocations": [
                            "2487:9:98"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62742,
                          "src": "2487:9:98"
                        },
                        "referencedDeclaration": 62742,
                        "src": "2487:9:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62742",
                          "typeString": "contract Authority"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62877,
                  "initialValue": {
                    "baseExpression": {
                      "id": 62874,
                      "name": "getTargetCustomAuthority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62799,
                      "src": "2515:24:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$62742_$",
                        "typeString": "mapping(address => contract Authority)"
                      }
                    },
                    "id": 62876,
                    "indexExpression": {
                      "id": 62875,
                      "name": "target",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62863,
                      "src": "2540:6:98",
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
                    "src": "2515:32:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2487:60:98"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 62886,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 62880,
                          "name": "customAuthority",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62873,
                          "src": "2570:15:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$62742",
                            "typeString": "contract Authority"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_Authority_$62742",
                            "typeString": "contract Authority"
                          }
                        ],
                        "id": 62879,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2562:7:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 62878,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2562:7:98",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 62881,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2562:24:98",
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
                          "id": 62884,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2598:1:98",
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
                        "id": 62883,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2590:7:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 62882,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2590:7:98",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 62885,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2590:10:98",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2562:38:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62894,
                  "nodeType": "IfStatement",
                  "src": "2558:101:98",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 62889,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62861,
                          "src": "2633:4:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 62890,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62863,
                          "src": "2639:6:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 62891,
                          "name": "functionSig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62865,
                          "src": "2647:11:98",
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
                          "id": 62887,
                          "name": "customAuthority",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62873,
                          "src": "2609:15:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$62742",
                            "typeString": "contract Authority"
                          }
                        },
                        "id": 62888,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2625:7:98",
                        "memberName": "canCall",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62741,
                        "src": "2609:23:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (address,address,bytes4) view external returns (bool)"
                        }
                      },
                      "id": 62892,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2609:50:98",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 62870,
                    "id": 62893,
                    "nodeType": "Return",
                    "src": "2602:57:98"
                  }
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 62910,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "id": 62895,
                        "name": "isCapabilityPublic",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62807,
                        "src": "2689:18:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                          "typeString": "mapping(bytes4 => bool)"
                        }
                      },
                      "id": 62897,
                      "indexExpression": {
                        "id": 62896,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62865,
                        "src": "2708:11:98",
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
                      "src": "2689:31:98",
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
                      "id": 62909,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 62900,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2732:1:98",
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
                          "id": 62899,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2724:7:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 62898,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "2724:7:98",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 62901,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2724:10:98",
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
                        "id": 62908,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 62902,
                            "name": "getUserRoles",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62803,
                            "src": "2738:12:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                              "typeString": "mapping(address => bytes32)"
                            }
                          },
                          "id": 62904,
                          "indexExpression": {
                            "id": 62903,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62861,
                            "src": "2751:4:98",
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
                          "src": "2738:18:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 62905,
                            "name": "getRolesWithCapability",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62811,
                            "src": "2759:22:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                              "typeString": "mapping(bytes4 => bytes32)"
                            }
                          },
                          "id": 62907,
                          "indexExpression": {
                            "id": 62906,
                            "name": "functionSig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62865,
                            "src": "2782:11:98",
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
                          "src": "2759:35:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "2738:56:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "2724:70:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2689:105:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62870,
                  "id": 62911,
                  "nodeType": "Return",
                  "src": "2670:124:98"
                }
              ]
            },
            "baseFunctions": [
              62741
            ],
            "functionSelector": "b7009613",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "canCall",
            "nameLocation": "2345:7:98",
            "overrides": {
              "id": 62867,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2453:8:98"
            },
            "parameters": {
              "id": 62866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62861,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "2370:4:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62913,
                  "src": "2362:12:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62860,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:7:98",
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
                  "id": 62863,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "2392:6:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62913,
                  "src": "2384:14:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62862,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2384:7:98",
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
                  "id": 62865,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "2415:11:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62913,
                  "src": "2408:18:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62864,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2408:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2352:80:98"
            },
            "returnParameters": {
              "id": 62870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62869,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62913,
                  "src": "2471:4:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62868,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2471:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2470:6:98"
            },
            "scope": 63047,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62935,
            "nodeType": "FunctionDefinition",
            "src": "3006:241:98",
            "nodes": [],
            "body": {
              "id": 62934,
              "nodeType": "Block",
              "src": "3111:136:98",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62927,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 62923,
                        "name": "getTargetCustomAuthority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62799,
                        "src": "3121:24:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Authority_$62742_$",
                          "typeString": "mapping(address => contract Authority)"
                        }
                      },
                      "id": 62925,
                      "indexExpression": {
                        "id": 62924,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62915,
                        "src": "3146:6:98",
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
                      "src": "3121:32:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62742",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62926,
                      "name": "customAuthority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62918,
                      "src": "3156:15:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62742",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "3121:50:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 62928,
                  "nodeType": "ExpressionStatement",
                  "src": "3121:50:98"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 62930,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62915,
                        "src": "3216:6:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62931,
                        "name": "customAuthority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62918,
                        "src": "3224:15:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62742",
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
                          "typeIdentifier": "t_contract$_Authority_$62742",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 62929,
                      "name": "TargetCustomAuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62781,
                      "src": "3187:28:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$62742_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 62932,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3187:53:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62933,
                  "nodeType": "EmitStatement",
                  "src": "3182:58:98"
                }
              ]
            },
            "functionSelector": "728b952b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62921,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62920,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "3098:12:98"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62634,
                  "src": "3098:12:98"
                },
                "nodeType": "ModifierInvocation",
                "src": "3098:12:98"
              }
            ],
            "name": "setTargetCustomAuthority",
            "nameLocation": "3015:24:98",
            "parameters": {
              "id": 62919,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62915,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "3048:6:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62935,
                  "src": "3040:14:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62914,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3040:7:98",
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
                  "id": 62918,
                  "mutability": "mutable",
                  "name": "customAuthority",
                  "nameLocation": "3066:15:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62935,
                  "src": "3056:25:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62742",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62917,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62916,
                      "name": "Authority",
                      "nameLocations": [
                        "3056:9:98"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62742,
                      "src": "3056:9:98"
                    },
                    "referencedDeclaration": 62742,
                    "src": "3056:9:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3039:43:98"
            },
            "returnParameters": {
              "id": 62922,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3111:0:98"
            },
            "scope": 63047,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62956,
            "nodeType": "FunctionDefinition",
            "src": "3448:210:98",
            "nodes": [],
            "body": {
              "id": 62955,
              "nodeType": "Block",
              "src": "3539:119:98",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 62944,
                        "name": "isCapabilityPublic",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62807,
                        "src": "3549:18:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                          "typeString": "mapping(bytes4 => bool)"
                        }
                      },
                      "id": 62946,
                      "indexExpression": {
                        "id": 62945,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62937,
                        "src": "3568:11:98",
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
                      "src": "3549:31:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62947,
                      "name": "enabled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62939,
                      "src": "3583:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3549:41:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 62949,
                  "nodeType": "ExpressionStatement",
                  "src": "3549:41:98"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 62951,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62937,
                        "src": "3630:11:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 62952,
                        "name": "enabled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62939,
                        "src": "3643:7:98",
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
                      "id": 62950,
                      "name": "PublicCapabilityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62766,
                      "src": "3606:23:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes4_$_t_bool_$returns$__$",
                        "typeString": "function (bytes4,bool)"
                      }
                    },
                    "id": 62953,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3606:45:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62954,
                  "nodeType": "EmitStatement",
                  "src": "3601:50:98"
                }
              ]
            },
            "functionSelector": "4b5159da",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62942,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62941,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "3526:12:98"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62634,
                  "src": "3526:12:98"
                },
                "nodeType": "ModifierInvocation",
                "src": "3526:12:98"
              }
            ],
            "name": "setPublicCapability",
            "nameLocation": "3457:19:98",
            "parameters": {
              "id": 62940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62937,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "3484:11:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62956,
                  "src": "3477:18:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62936,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "3477:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62939,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "3502:7:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 62956,
                  "src": "3497:12:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62938,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3497:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3476:34:98"
            },
            "returnParameters": {
              "id": 62943,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3539:0:98"
            },
            "scope": 63047,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63001,
            "nodeType": "FunctionDefinition",
            "src": "3853:337:98",
            "nodes": [],
            "body": {
              "id": 63000,
              "nodeType": "Block",
              "src": "3972:218:98",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 62967,
                    "name": "enabled",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62962,
                    "src": "3986:7:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 62992,
                    "nodeType": "Block",
                    "src": "4066:66:98",
                    "statements": [
                      {
                        "expression": {
                          "id": 62990,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 62980,
                              "name": "getUserRoles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62803,
                              "src": "4080:12:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 62982,
                            "indexExpression": {
                              "id": 62981,
                              "name": "user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62958,
                              "src": "4093:4:98",
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
                            "src": "4080:18:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "&=",
                          "rightHandSide": {
                            "id": 62989,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "~",
                            "prefix": true,
                            "src": "4102:19:98",
                            "subExpression": {
                              "arguments": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 62987,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "hexValue": "31",
                                    "id": 62985,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4111:1:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<<",
                                  "rightExpression": {
                                    "id": 62986,
                                    "name": "role",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 62960,
                                    "src": "4116:4:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  },
                                  "src": "4111:9:98",
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
                                "id": 62984,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4103:7:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 62983,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4103:7:98",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62988,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4103:18:98",
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
                          "src": "4080:41:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 62991,
                        "nodeType": "ExpressionStatement",
                        "src": "4080:41:98"
                      }
                    ]
                  },
                  "id": 62993,
                  "nodeType": "IfStatement",
                  "src": "3982:150:98",
                  "trueBody": {
                    "id": 62979,
                    "nodeType": "Block",
                    "src": "3995:65:98",
                    "statements": [
                      {
                        "expression": {
                          "id": 62977,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 62968,
                              "name": "getUserRoles",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62803,
                              "src": "4009:12:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                              }
                            },
                            "id": 62970,
                            "indexExpression": {
                              "id": 62969,
                              "name": "user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62958,
                              "src": "4022:4:98",
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
                            "src": "4009:18:98",
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
                                "id": 62975,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "31",
                                  "id": 62973,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4039:1:98",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "id": 62974,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62960,
                                  "src": "4044:4:98",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "src": "4039:9:98",
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
                              "id": 62972,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4031:7:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 62971,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "4031:7:98",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 62976,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4031:18:98",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4009:40:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 62978,
                        "nodeType": "ExpressionStatement",
                        "src": "4009:40:98"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 62995,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62958,
                        "src": "4163:4:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62996,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62960,
                        "src": "4169:4:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 62997,
                        "name": "enabled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62962,
                        "src": "4175:7:98",
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
                      "id": 62994,
                      "name": "UserRoleUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62760,
                      "src": "4147:15:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint8_$_t_bool_$returns$__$",
                        "typeString": "function (address,uint8,bool)"
                      }
                    },
                    "id": 62998,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4147:36:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62999,
                  "nodeType": "EmitStatement",
                  "src": "4142:41:98"
                }
              ]
            },
            "functionSelector": "67aff484",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62965,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62964,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "3959:12:98"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62634,
                  "src": "3959:12:98"
                },
                "nodeType": "ModifierInvocation",
                "src": "3959:12:98"
              }
            ],
            "name": "setUserRole",
            "nameLocation": "3862:11:98",
            "parameters": {
              "id": 62963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62958,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "3891:4:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 63001,
                  "src": "3883:12:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62957,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3883:7:98",
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
                  "id": 62960,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3911:4:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 63001,
                  "src": "3905:10:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 62959,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "3905:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62962,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "3930:7:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 63001,
                  "src": "3925:12:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62961,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3925:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3873:70:98"
            },
            "returnParameters": {
              "id": 62966,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3972:0:98"
            },
            "scope": 63047,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63046,
            "nodeType": "FunctionDefinition",
            "src": "4390:396:98",
            "nodes": [],
            "body": {
              "id": 63045,
              "nodeType": "Block",
              "src": "4521:265:98",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 63012,
                    "name": "enabled",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 63007,
                    "src": "4535:7:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 63037,
                    "nodeType": "Block",
                    "src": "4632:83:98",
                    "statements": [
                      {
                        "expression": {
                          "id": 63035,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 63025,
                              "name": "getRolesWithCapability",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62811,
                              "src": "4646:22:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                                "typeString": "mapping(bytes4 => bytes32)"
                              }
                            },
                            "id": 63027,
                            "indexExpression": {
                              "id": 63026,
                              "name": "functionSig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63005,
                              "src": "4669:11:98",
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
                            "src": "4646:35:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "&=",
                          "rightHandSide": {
                            "id": 63034,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "~",
                            "prefix": true,
                            "src": "4685:19:98",
                            "subExpression": {
                              "arguments": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 63032,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "hexValue": "31",
                                    "id": 63030,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4694:1:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<<",
                                  "rightExpression": {
                                    "id": 63031,
                                    "name": "role",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 63003,
                                    "src": "4699:4:98",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  },
                                  "src": "4694:9:98",
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
                                "id": 63029,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4686:7:98",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 63028,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4686:7:98",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 63033,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4686:18:98",
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
                          "src": "4646:58:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 63036,
                        "nodeType": "ExpressionStatement",
                        "src": "4646:58:98"
                      }
                    ]
                  },
                  "id": 63038,
                  "nodeType": "IfStatement",
                  "src": "4531:184:98",
                  "trueBody": {
                    "id": 63024,
                    "nodeType": "Block",
                    "src": "4544:82:98",
                    "statements": [
                      {
                        "expression": {
                          "id": 63022,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 63013,
                              "name": "getRolesWithCapability",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62811,
                              "src": "4558:22:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bytes32_$",
                                "typeString": "mapping(bytes4 => bytes32)"
                              }
                            },
                            "id": 63015,
                            "indexExpression": {
                              "id": 63014,
                              "name": "functionSig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63005,
                              "src": "4581:11:98",
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
                            "src": "4558:35:98",
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
                                "id": 63020,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "31",
                                  "id": 63018,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4605:1:98",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "id": 63019,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 63003,
                                  "src": "4610:4:98",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "src": "4605:9:98",
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
                              "id": 63017,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4597:7:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 63016,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "4597:7:98",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 63021,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4597:18:98",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "4558:57:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 63023,
                        "nodeType": "ExpressionStatement",
                        "src": "4558:57:98"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 63040,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63003,
                        "src": "4752:4:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 63041,
                        "name": "functionSig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63005,
                        "src": "4758:11:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 63042,
                        "name": "enabled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63007,
                        "src": "4771:7:98",
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
                      "id": 63039,
                      "name": "RoleCapabilityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62774,
                      "src": "4730:21:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes4_$_t_bool_$returns$__$",
                        "typeString": "function (uint8,bytes4,bool)"
                      }
                    },
                    "id": 63043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4730:49:98",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63044,
                  "nodeType": "EmitStatement",
                  "src": "4725:54:98"
                }
              ]
            },
            "functionSelector": "0ea9b75b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 63010,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 63009,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "4508:12:98"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62634,
                  "src": "4508:12:98"
                },
                "nodeType": "ModifierInvocation",
                "src": "4508:12:98"
              }
            ],
            "name": "setRoleCapability",
            "nameLocation": "4399:17:98",
            "parameters": {
              "id": 63008,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63003,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "4432:4:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 63046,
                  "src": "4426:10:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 63002,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "4426:5:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63005,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "4453:11:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 63046,
                  "src": "4446:18:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 63004,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4446:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63007,
                  "mutability": "mutable",
                  "name": "enabled",
                  "nameLocation": "4479:7:98",
                  "nodeType": "VariableDeclaration",
                  "scope": 63046,
                  "src": "4474:12:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 63006,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4474:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4416:76:98"
            },
            "returnParameters": {
              "id": 63011,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4521:0:98"
            },
            "scope": 63047,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 62749,
              "name": "Auth",
              "nameLocations": [
                "359:4:98"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62729,
              "src": "359:4:98"
            },
            "id": 62750,
            "nodeType": "InheritanceSpecifier",
            "src": "359:4:98"
          },
          {
            "baseName": {
              "id": 62751,
              "name": "Authority",
              "nameLocations": [
                "365:9:98"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 62742,
              "src": "365:9:98"
            },
            "id": 62752,
            "nodeType": "InheritanceSpecifier",
            "src": "365:9:98"
          }
        ],
        "canonicalName": "MultiRolesAuthority",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 62748,
          "nodeType": "StructuredDocumentation",
          "src": "114:213:98",
          "text": "@notice Flexible and target agnostic role based Authority that supports up to 256 roles.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/authorities/MultiRolesAuthority.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          63047,
          62742,
          62729
        ],
        "name": "MultiRolesAuthority",
        "nameLocation": "336:19:98",
        "scope": 63048,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 98
} as const;
