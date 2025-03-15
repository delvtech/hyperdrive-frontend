export const MultiRolesAuthority = {
  name: 'MultiRolesAuthority' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_owner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_authority",
        "type": "address",
        "internalType": "contract Authority"
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
] as const,
  bytecode: '0x608060405234801561000f575f80fd5b50604051610c41380380610c4183398101604081905261002e916100dd565b5f80546001600160a01b03199081166001600160a01b0385811691821784556001805490931690851617909155604051849284929133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a350505050610115565b6001600160a01b03811681146100da575f80fd5b50565b5f80604083850312156100ee575f80fd5b82516100f9816100c6565b602084015190925061010a816100c6565b809150509250929050565b610b1f806101225f395ff3fe608060405234801561000f575f80fd5b50600436106100f0575f3560e01c80638da5cb5b11610093578063e688747b11610063578063e688747b14610231578063ea7ca27614610266578063ed0d0efb1461029c578063f2fde38b146102bb575f80fd5b80638da5cb5b146101b9578063b7009613146101e3578063bf7e214f146101f6578063c53a398514610209575f80fd5b80634b5159da116100ce5780634b5159da1461016d57806367aff48414610180578063728b952b146101935780637a9e5e4b146101a6575f80fd5b806306a36aee146100f45780630bade8a4146101265780630ea9b75b14610158575b5f80fd5b61011361010236600461089f565b60036020525f908152604090205481565b6040519081526020015b60405180910390f35b6101486101343660046108d6565b60046020525f908152604090205460ff1681565b604051901515815260200161011d565b61016b61016636600461090c565b6102ce565b005b61016b61017b366004610950565b6103ac565b61016b61018e366004610985565b61043c565b61016b6101a13660046109b0565b610501565b61016b6101b436600461089f565b610588565b5f546101cb906001600160a01b031681565b6040516001600160a01b03909116815260200161011d565b6101486101f13660046109dc565b61066c565b6001546101cb906001600160a01b031681565b6101cb61021736600461089f565b60026020525f90815260409020546001600160a01b031681565b61014861023f366004610a20565b6001600160e01b0319165f9081526005602052604090205460ff919091161c600116151590565b610148610274366004610a51565b6001600160a01b03919091165f90815260036020526040902054600160ff9092161c16151590565b6101136102aa3660046108d6565b60056020525f908152604090205481565b61016b6102c936600461089f565b610767565b6102e3335f356001600160e01b0319166107e2565b6103085760405162461bcd60e51b81526004016102ff90610a7b565b60405180910390fd5b8015610337576001600160e01b031982165f9081526005602052604090208054600160ff86161b17905561035d565b6001600160e01b031982165f9081526005602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b1518360405161039f911515815260200190565b60405180910390a3505050565b6103c1335f356001600160e01b0319166107e2565b6103dd5760405162461bcd60e51b81526004016102ff90610a7b565b6001600160e01b031982165f81815260046020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b610451335f356001600160e01b0319166107e2565b61046d5760405162461bcd60e51b81526004016102ff90610a7b565b801561049b576001600160a01b0383165f9081526003602052604090208054600160ff85161b1790556104c0565b6001600160a01b0383165f9081526003602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf28360405161039f911515815260200190565b610516335f356001600160e01b0319166107e2565b6105325760405162461bcd60e51b81526004016102ff90610a7b565b6001600160a01b038281165f8181526002602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b5f546001600160a01b0316331480610619575060015460405163b700961360e01b81526001600160a01b039091169063b7009613906105da90339030906001600160e01b03195f351690600401610aa1565b602060405180830381865afa1580156105f5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106199190610ace565b610621575f80fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198905f90a350565b6001600160a01b038083165f9081526002602052604081205490911680156107055760405163b700961360e01b81526001600160a01b0382169063b7009613906106be90889088908890600401610aa1565b602060405180830381865afa1580156106d9573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106fd9190610ace565b915050610760565b6001600160e01b031983165f9081526004602052604090205460ff168061075c57506001600160e01b031983165f908152600560209081526040808320546001600160a01b03891684526003909252909120541615155b9150505b9392505050565b61077c335f356001600160e01b0319166107e2565b6107985760405162461bcd60e51b81526004016102ff90610a7b565b5f80546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001545f906001600160a01b03168015801590610869575060405163b700961360e01b81526001600160a01b0382169063b70096139061082a90879030908890600401610aa1565b602060405180830381865afa158015610845573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108699190610ace565b8061088057505f546001600160a01b038581169116145b949350505050565b6001600160a01b038116811461089c575f80fd5b50565b5f602082840312156108af575f80fd5b813561076081610888565b80356001600160e01b0319811681146108d1575f80fd5b919050565b5f602082840312156108e6575f80fd5b610760826108ba565b803560ff811681146108d1575f80fd5b801515811461089c575f80fd5b5f805f6060848603121561091e575f80fd5b610927846108ef565b9250610935602085016108ba565b91506040840135610945816108ff565b809150509250925092565b5f8060408385031215610961575f80fd5b61096a836108ba565b9150602083013561097a816108ff565b809150509250929050565b5f805f60608486031215610997575f80fd5b83356109a281610888565b9250610935602085016108ef565b5f80604083850312156109c1575f80fd5b82356109cc81610888565b9150602083013561097a81610888565b5f805f606084860312156109ee575f80fd5b83356109f981610888565b92506020840135610a0981610888565b9150610a17604085016108ba565b90509250925092565b5f8060408385031215610a31575f80fd5b610a3a836108ef565b9150610a48602084016108ba565b90509250929050565b5f8060408385031215610a62575f80fd5b8235610a6d81610888565b9150610a48602084016108ef565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b5f60208284031215610ade575f80fd5b8151610760816108ff56fea26469706673582212201f9fcb2e91ae2b59a6844cb685bf251770d615c60cfc9612aa76d28eafda347464736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
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
} as const
};
