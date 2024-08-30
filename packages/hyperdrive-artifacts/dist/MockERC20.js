export const MockERC20 = {
    abi: [
        {
            "type": "function",
            "name": "DOMAIN_SEPARATOR",
            "inputs": [],
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
            "name": "allowance",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "approve",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "decimals",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "name_",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "symbol_",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "decimals_",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "name": "nonces",
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "permit",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "deadline",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "symbol",
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
            "name": "totalSupply",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transfer",
            "inputs": [
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b50610e78806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b41146101b5578063a9059cbb146101bd578063d505accf146101d0578063dd62ed3e146101e357600080fd5b80633644e5151461016457806370a082311461016c5780637ecebe001461019557600080fd5b806306fdde03146100d4578063095ea7b3146100f25780631624f6c61461011557806318160ddd1461012a57806323b872dd1461013c578063313ce5671461014f575b600080fd5b6100dc61021c565b6040516100e9919061097b565b60405180910390f35b6101056101003660046109e6565b6102ae565b60405190151581526020016100e9565b610128610123366004610ac4565b61031b565b005b6003545b6040519081526020016100e9565b61010561014a366004610b38565b6103ba565b60025460405160ff90911681526020016100e9565b61012e6104cf565b61012e61017a366004610b74565b6001600160a01b031660009081526004602052604090205490565b61012e6101a3366004610b74565b60086020526000908152604090205481565b6100dc6104f5565b6101056101cb3660046109e6565b610504565b6101286101de366004610b8f565b61059b565b61012e6101f1366004610bf9565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205490565b60606000805461022b90610c2c565b80601f016020809104026020016040519081016040528092919081815260200182805461025790610c2c565b80156102a45780601f10610279576101008083540402835291602001916102a4565b820191906000526020600020905b81548152906001019060200180831161028757829003601f168201915b5050505050905090565b3360008181526005602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103099086815260200190565b60405180910390a35060015b92915050565b60095460ff16156103695760405162461bcd60e51b81526020600482015260136024820152721053149150511657d253925512505312569151606a1b60448201526064015b60405180910390fd5b60006103758482610cb7565b5060016103828382610cb7565b506002805460ff191660ff831617905561039a6107f9565b6006556103a5610812565b60075550506009805460ff1916600117905550565b6001600160a01b03831660009081526005602090815260408083203384529091528120546000198114610416576103f181846108b5565b6001600160a01b03861660009081526005602090815260408083203384529091529020555b6001600160a01b03851660009081526004602052604090205461043990846108b5565b6001600160a01b0380871660009081526004602052604080822093909355908616815220546104689084610918565b6001600160a01b0380861660008181526004602052604090819020939093559151908716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104bc9087815260200190565b60405180910390a3506001949350505050565b60006006546104dc6107f9565b146104ee576104e9610812565b905090565b5060075490565b60606001805461022b90610c2c565b3360009081526004602052604081205461051e90836108b5565b33600090815260046020526040808220929092556001600160a01b0385168152205461054a9083610918565b6001600160a01b0384166000818152600460205260409081902092909255905133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906103099086815260200190565b428410156105eb5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610360565b600060016105f76104cf565b6001600160a01b038a16600090815260086020526040812080547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d9290919061064583610d8d565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e001604051602081830303815290604052805190602001206040516020016106be92919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561071c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906107525750876001600160a01b0316816001600160a01b0316145b61078f5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610360565b6001600160a01b0381811660009081526005602090815260408083208b8516808552908352928190208a90555189815291928b16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a35050505050505050565b60006109778061080b63ffffffff8216565b9250505090565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516108449190610da6565b60405180910390207fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66108756107f9565b604080516020810195909552840192909252606083015260808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000818310156109075760405162461bcd60e51b815260206004820152601c60248201527f45524332303a207375627472616374696f6e20756e646572666c6f77000000006044820152606401610360565b6109118284610e1c565b9392505050565b6000806109258385610e2f565b9050838110156109115760405162461bcd60e51b815260206004820152601860248201527f45524332303a206164646974696f6e206f766572666c6f7700000000000000006044820152606401610360565b4690565b60006020808352835180602085015260005b818110156109a95785810183015185820160400152820161098d565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146109e157600080fd5b919050565b600080604083850312156109f957600080fd5b610a02836109ca565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610a3757600080fd5b813567ffffffffffffffff80821115610a5257610a52610a10565b604051601f8301601f19908116603f01168101908282118183101715610a7a57610a7a610a10565b81604052838152866020858801011115610a9357600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560ff811681146109e157600080fd5b600080600060608486031215610ad957600080fd5b833567ffffffffffffffff80821115610af157600080fd5b610afd87838801610a26565b94506020860135915080821115610b1357600080fd5b50610b2086828701610a26565b925050610b2f60408501610ab3565b90509250925092565b600080600060608486031215610b4d57600080fd5b610b56846109ca565b9250610b64602085016109ca565b9150604084013590509250925092565b600060208284031215610b8657600080fd5b610911826109ca565b600080600080600080600060e0888a031215610baa57600080fd5b610bb3886109ca565b9650610bc1602089016109ca565b95506040880135945060608801359350610bdd60808901610ab3565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215610c0c57600080fd5b610c15836109ca565b9150610c23602084016109ca565b90509250929050565b600181811c90821680610c4057607f821691505b602082108103610c6057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610cb2576000816000526020600020601f850160051c81016020861015610c8f5750805b601f850160051c820191505b81811015610cae57828155600101610c9b565b5050505b505050565b815167ffffffffffffffff811115610cd157610cd1610a10565b610ce581610cdf8454610c2c565b84610c66565b602080601f831160018114610d1a5760008415610d025750858301515b600019600386901b1c1916600185901b178555610cae565b600085815260208120601f198616915b82811015610d4957888601518255948401946001909101908401610d2a565b5085821015610d675787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600060018201610d9f57610d9f610d77565b5060010190565b6000808354610db481610c2c565b60018281168015610dcc5760018114610de157610e10565b60ff1984168752821515830287019450610e10565b8760005260208060002060005b85811015610e075781548a820152908401908201610dee565b50505082870194505b50929695505050505050565b8181038181111561031557610315610d77565b8082018082111561031557610315610d7756fea2646970667358221220a35fd874c7cdf5981beaf11281d2b1cbd7d93fe37a0fa80cea5bb068bf7725ed64736f6c63430008160033',
    methodIdentifiers: {
        "DOMAIN_SEPARATOR()": "3644e515",
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "decimals()": "313ce567",
        "initialize(string,string,uint8)": "1624f6c6",
        "name()": "06fdde03",
        "nonces(address)": "7ecebe00",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
        "symbol()": "95d89b41",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd"
    }
};
