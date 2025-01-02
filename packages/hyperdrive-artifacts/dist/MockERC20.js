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
    bytecode: '0x608060405234801561000f575f80fd5b50610e2a8061001d5f395ff3fe608060405234801561000f575f80fd5b50600436106100cb575f3560e01c80633644e5151161008857806395d89b411161006357806395d89b41146101ae578063a9059cbb146101b6578063d505accf146101c9578063dd62ed3e146101dc575f80fd5b80633644e5151461015f57806370a08231146101675780637ecebe001461018f575f80fd5b806306fdde03146100cf578063095ea7b3146100ed5780631624f6c61461011057806318160ddd1461012557806323b872dd14610137578063313ce5671461014a575b5f80fd5b6100d7610214565b6040516100e49190610959565b60405180910390f35b6101006100fb3660046109c0565b6102a3565b60405190151581526020016100e4565b61012361011e366004610a95565b61030f565b005b6003545b6040519081526020016100e4565b610100610145366004610b04565b6103ad565b60025460405160ff90911681526020016100e4565b6101296104bc565b610129610175366004610b3d565b6001600160a01b03165f9081526004602052604090205490565b61012961019d366004610b3d565b60086020525f908152604090205481565b6100d76104e1565b6101006101c43660046109c0565b6104f0565b6101236101d7366004610b56565b610584565b6101296101ea366004610bbb565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205490565b60605f805461022290610bec565b80601f016020809104026020016040519081016040528092919081815260200182805461024e90610bec565b80156102995780601f1061027057610100808354040283529160200191610299565b820191905f5260205f20905b81548152906001019060200180831161027c57829003601f168201915b5050505050905090565b335f8181526005602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906102fd9086815260200190565b60405180910390a35060015b92915050565b60095460ff161561035d5760405162461bcd60e51b81526020600482015260136024820152721053149150511657d253925512505312569151606a1b60448201526064015b60405180910390fd5b5f6103688482610c70565b5060016103758382610c70565b506002805460ff191660ff831617905561038d6107dc565b6006556103986107f4565b60075550506009805460ff1916600117905550565b6001600160a01b0383165f9081526005602090815260408083203384529091528120545f198114610406576103e28184610895565b6001600160a01b0386165f9081526005602090815260408083203384529091529020555b6001600160a01b0385165f908152600460205260409020546104289084610895565b6001600160a01b038087165f90815260046020526040808220939093559086168152205461045690846108f7565b6001600160a01b038086165f8181526004602052604090819020939093559151908716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104a99087815260200190565b60405180910390a3506001949350505050565b5f6006546104c86107dc565b146104da576104d56107f4565b905090565b5060075490565b60606001805461022290610bec565b335f908152600460205260408120546105099083610895565b335f90815260046020526040808220929092556001600160a01b0385168152205461053490836108f7565b6001600160a01b0384165f818152600460205260409081902092909255905133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906102fd9086815260200190565b428410156105d45760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610354565b5f60016105df6104bc565b6001600160a01b038a165f90815260086020526040812080547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d9290919061062c83610d44565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e001604051602081830303815290604052805190602001206040516020016106a592919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201205f84529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610700573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116158015906107365750876001600160a01b0316816001600160a01b0316145b6107735760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610354565b6001600160a01b038181165f9081526005602090815260408083208b8516808552908352928190208a90555189815291928b16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a35050505050505050565b5f610955806107ed63ffffffff8216565b9250505090565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f6040516108249190610d5c565b60405180910390207fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66108556107dc565b604080516020810195909552840192909252606083015260808201523060a082015260c00160405160208183030381529060405280519060200120905090565b5f818310156108e65760405162461bcd60e51b815260206004820152601c60248201527f45524332303a207375627472616374696f6e20756e646572666c6f77000000006044820152606401610354565b6108f08284610dce565b9392505050565b5f806109038385610de1565b9050838110156108f05760405162461bcd60e51b815260206004820152601860248201527f45524332303a206164646974696f6e206f766572666c6f7700000000000000006044820152606401610354565b4690565b5f602080835283518060208501525f5b8181101561098557858101830151858201604001528201610969565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146109bb575f80fd5b919050565b5f80604083850312156109d1575f80fd5b6109da836109a5565b946020939093013593505050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f830112610a0b575f80fd5b813567ffffffffffffffff80821115610a2657610a266109e8565b604051601f8301601f19908116603f01168101908282118183101715610a4e57610a4e6109e8565b81604052838152866020858801011115610a66575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803560ff811681146109bb575f80fd5b5f805f60608486031215610aa7575f80fd5b833567ffffffffffffffff80821115610abe575f80fd5b610aca878388016109fc565b94506020860135915080821115610adf575f80fd5b50610aec868287016109fc565b925050610afb60408501610a85565b90509250925092565b5f805f60608486031215610b16575f80fd5b610b1f846109a5565b9250610b2d602085016109a5565b9150604084013590509250925092565b5f60208284031215610b4d575f80fd5b6108f0826109a5565b5f805f805f805f60e0888a031215610b6c575f80fd5b610b75886109a5565b9650610b83602089016109a5565b95506040880135945060608801359350610b9f60808901610a85565b925060a0880135915060c0880135905092959891949750929550565b5f8060408385031215610bcc575f80fd5b610bd5836109a5565b9150610be3602084016109a5565b90509250929050565b600181811c90821680610c0057607f821691505b602082108103610c1e57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115610c6b57805f5260205f20601f840160051c81016020851015610c495750805b601f840160051c820191505b81811015610c68575f8155600101610c55565b50505b505050565b815167ffffffffffffffff811115610c8a57610c8a6109e8565b610c9e81610c988454610bec565b84610c24565b602080601f831160018114610cd1575f8415610cba5750858301515b5f19600386901b1c1916600185901b178555610d28565b5f85815260208120601f198616915b82811015610cff57888601518255948401946001909101908401610ce0565b5085821015610d1c57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b634e487b7160e01b5f52601160045260245ffd5b5f60018201610d5557610d55610d30565b5060010190565b5f808354610d6981610bec565b60018281168015610d815760018114610d9657610dc2565b60ff1984168752821515830287019450610dc2565b875f526020805f205f5b85811015610db95781548a820152908401908201610da0565b50505082870194505b50929695505050505050565b8181038181111561030957610309610d30565b8082018082111561030957610309610d3056fea2646970667358221220295056d0f2f98f7eb1cdc696155c64cd99bd469bddf81f68980e7d4003d74a1664736f6c63430008160033',
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
