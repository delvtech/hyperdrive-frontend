export const HyperdriveCheckpointRewarder = {
  name: 'HyperdriveCheckpointRewarder' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_subrewarder",
        "type": "address",
        "internalType": "contract IHyperdriveCheckpointSubrewarder"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "admin",
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
    "name": "claimCheckpointReward",
    "inputs": [
      {
        "name": "_claimant",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_checkpointTime",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_isTrader",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "kind",
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
    "name": "subrewarder",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IHyperdriveCheckpointSubrewarder"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "updateAdmin",
    "inputs": [
      {
        "name": "_admin",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateSubrewarder",
    "inputs": [
      {
        "name": "_subrewarder",
        "type": "address",
        "internalType": "contract IHyperdriveCheckpointSubrewarder"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "version",
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
    "type": "event",
    "name": "AdminUpdated",
    "inputs": [
      {
        "name": "admin",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CheckpointRewardClaimed",
    "inputs": [
      {
        "name": "instance",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "claimant",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "isTrader",
        "type": "bool",
        "indexed": true,
        "internalType": "bool"
      },
      {
        "name": "checkpointTime",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "rewardToken",
        "type": "address",
        "indexed": false,
        "internalType": "contract IERC20"
      },
      {
        "name": "rewardAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SubrewarderUpdated",
    "inputs": [
      {
        "name": "subrewarder",
        "type": "address",
        "indexed": true,
        "internalType": "contract IHyperdriveCheckpointSubrewarder"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "Unauthorized",
    "inputs": []
  }
] as const,
  bytecode: '0x608060405234801561000f575f80fd5b506040516107fb3803806107fb83398101604081905261002e91610099565b60018054336001600160a01b031991821617909155600280549091166001600160a01b0383161790555f61006283826101f0565b5050506102af565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114610094575f80fd5b919050565b5f80604083850312156100aa575f80fd5b82516001600160401b03808211156100c0575f80fd5b818501915085601f8301126100d3575f80fd5b8151818111156100e5576100e561006a565b604051601f8201601f19908116603f0116810190838211818310171561010d5761010d61006a565b81604052828152602093508884848701011115610128575f80fd5b5f91505b82821015610149578482018401518183018501529083019061012c565b5f84848301015280965050505061016181860161007e565b925050509250929050565b600181811c9082168061018057607f821691505b60208210810361019e57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156101eb57805f5260205f20601f840160051c810160208510156101c95750805b601f840160051c820191505b818110156101e8575f81556001016101d5565b50505b505050565b81516001600160401b038111156102095761020961006a565b61021d81610217845461016c565b846101a4565b602080601f831160018114610250575f84156102395750858301515b5f19600386901b1c1916600185901b1785556102a7565b5f85815260208120601f198616915b8281101561027e5788860151825594840194600190910190840161025f565b508582101561029b57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b61053f806102bc5f395ff3fe608060405234801561000f575f80fd5b5060043610610085575f3560e01c806369114d4e1161005857806369114d4e146101345780639b06ae4914610149578063e2f273bd1461015c578063f851a4401461016f575f80fd5b806304baa00b1461008957806306fdde03146100db5780633d7f7b24146100e357806354fd4d501461010e575b5f80fd5b6100c56040518060400160405280601c81526020017f48797065726472697665436865636b706f696e7452657761726465720000000081525081565b6040516100d291906103dd565b60405180910390f35b6100c5610182565b6002546100f6906001600160a01b031681565b6040516001600160a01b0390911681526020016100d2565b6100c560405180604001604052806007815260200166076312e302e32360cc1b81525081565b610147610142366004610440565b61020d565b005b610147610157366004610483565b6102f7565b61014761016a366004610483565b61036a565b6001546100f6906001600160a01b031681565b5f805461018e906104a5565b80601f01602080910402602001604051908101604052809291908181526020018280546101ba906104a5565b80156102055780601f106101dc57610100808354040283529160200191610205565b820191905f5260205f20905b8154815290600101906020018083116101e857829003601f168201915b505050505081565b60025460405163e9f4604160e01b81523360048201526001600160a01b0385811660248301526044820185905283151560648301525f92839291169063e9f460419060840160408051808303815f875af115801561026d573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061029191906104dd565b909250905080156102f057604080518581526001600160a01b0384811660208301529181018390528415159187169033907f458cb4864d237cf3ef21835340aeec96759e685bd06793180e8cf7a7cd69cd5e9060600160405180910390a45b5050505050565b6001546001600160a01b03163314610321576040516282b42960e81b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517f4a847489062ccada272e291a747bfecff5d74ded500da0a156faca0bd8394dc6905f90a250565b6001546001600160a01b03163314610394576040516282b42960e81b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040517f54e4612788f90384e6843298d7854436f3a585b2c3831ab66abf1de63bfa6c2d905f90a250565b5f602080835283518060208501525f5b81811015610409578581018301518582016040015282016103ed565b505f604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b038116811461043d575f80fd5b50565b5f805f60608486031215610452575f80fd5b833561045d81610429565b92506020840135915060408401358015158114610478575f80fd5b809150509250925092565b5f60208284031215610493575f80fd5b813561049e81610429565b9392505050565b600181811c908216806104b957607f821691505b6020821081036104d757634e487b7160e01b5f52602260045260245ffd5b50919050565b5f80604083850312156104ee575f80fd5b82516104f981610429565b602093909301519294929350505056fea26469706673582212209883b177773d0f7ac2191c2fef31721ffed01848dae9984a91967ab2106bb24764736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "admin()": "f851a440",
  "claimCheckpointReward(address,uint256,bool)": "69114d4e",
  "kind()": "04baa00b",
  "name()": "06fdde03",
  "subrewarder()": "3d7f7b24",
  "updateAdmin(address)": "e2f273bd",
  "updateSubrewarder(address)": "9b06ae49",
  "version()": "54fd4d50"
} as const
};
