export const MockERC721 = {
    abi: [
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
                    "name": "id",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "payable"
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
            "name": "getApproved",
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
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
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "isApprovedForAll",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
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
            "name": "ownerOf",
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
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
                    "name": "id",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
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
                    "name": "id",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "setApprovalForAll",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "inputs": [
                {
                    "name": "interfaceId",
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
            "name": "tokenURI",
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
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
                    "name": "id",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "_approved",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ApprovalForAll",
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "_operator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "_approved",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                {
                    "name": "_from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "_to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b50610f7a806100206000396000f3fe6080604052600436106100dd5760003560e01c80636352211e1161007f578063a22cb46511610059578063a22cb46514610245578063b88d4fde14610265578063c87b56dd14610278578063e985e9c51461029957600080fd5b80636352211e146101e257806370a082311461020257806395d89b411461023057600080fd5b8063095ea7b3116100bb578063095ea7b31461018757806323b872dd1461019c57806342842e0e146101af5780634cd88b76146101c257600080fd5b806301ffc9a7146100e257806306fdde0314610117578063081812fc14610139575b600080fd5b3480156100ee57600080fd5b506101026100fd366004610a33565b6102e2565b60405190151581526020015b60405180910390f35b34801561012357600080fd5b5061012c610334565b60405161010e9190610a9d565b34801561014557600080fd5b5061016f610154366004610ab0565b6000908152600460205260409020546001600160a01b031690565b6040516001600160a01b03909116815260200161010e565b61019a610195366004610ae0565b6103c6565b005b61019a6101aa366004610b0a565b6104ad565b61019a6101bd366004610b0a565b6106a6565b3480156101ce57600080fd5b5061019a6101dd366004610bf2565b610795565b3480156101ee57600080fd5b5061016f6101fd366004610ab0565b610809565b34801561020e57600080fd5b5061022261021d366004610c56565b610860565b60405190815260200161010e565b34801561023c57600080fd5b5061012c6108c3565b34801561025157600080fd5b5061019a610260366004610c71565b6108d2565b61019a610273366004610cad565b61093e565b34801561028457600080fd5b5061012c610293366004610ab0565b50606090565b3480156102a557600080fd5b506101026102b4366004610d29565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006301ffc9a760e01b6001600160e01b03198316148061031357506380ac58cd60e01b6001600160e01b03198316145b8061032e5750635b5e139f60e01b6001600160e01b03198316145b92915050565b60606000805461034390610d5c565b80601f016020809104026020016040519081016040528092919081815260200182805461036f90610d5c565b80156103bc5780601f10610391576101008083540402835291602001916103bc565b820191906000526020600020905b81548152906001019060200180831161039f57829003601f168201915b5050505050905090565b6000818152600260205260409020546001600160a01b03163381148061040f57506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b6104515760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064015b60405180910390fd5b60008281526004602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000818152600260205260409020546001600160a01b038481169116146105035760405162461bcd60e51b815260206004820152600a60248201526957524f4e475f46524f4d60b01b6044820152606401610448565b6001600160a01b03821661054d5760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b6044820152606401610448565b336001600160a01b038416148061058757506001600160a01b038316600090815260056020908152604080832033845290915290205460ff165b806105a857506000818152600460205260409020546001600160a01b031633145b6105e55760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b6044820152606401610448565b6001600160a01b038316600090815260036020526040812080549161060983610dac565b90915550506001600160a01b038216600090815260036020526040812080549161063283610dc3565b9091555050600081815260026020908152604080832080546001600160a01b038088166001600160a01b031992831681179093556004909452828520805490911690559051849391928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6106b18383836104ad565b813b15806107515750604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401526000608484015290919084169063150b7a029060a4016020604051808303816000875af1158015610721573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107459190610ddc565b6001600160e01b031916145b6107905760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b6044820152606401610448565b505050565b60065460ff16156107de5760405162461bcd60e51b81526020600482015260136024820152721053149150511657d253925512505312569151606a1b6044820152606401610448565b60006107ea8382610e47565b5060016107f78282610e47565b50506006805460ff1916600117905550565b6000818152600260205260409020546001600160a01b03168061085b5760405162461bcd60e51b815260206004820152600a6024820152691393d517d3525395115160b21b6044820152606401610448565b919050565b60006001600160a01b0382166108a75760405162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b6044820152606401610448565b506001600160a01b031660009081526003602052604090205490565b60606001805461034390610d5c565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6109498484846104ad565b823b15806109d55750604051630a85bd0160e11b808252906001600160a01b0385169063150b7a0290610986903390899088908890600401610f07565b6020604051808303816000875af11580156109a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c99190610ddc565b6001600160e01b031916145b610a145760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b6044820152606401610448565b50505050565b6001600160e01b031981168114610a3057600080fd5b50565b600060208284031215610a4557600080fd5b8135610a5081610a1a565b9392505050565b6000815180845260005b81811015610a7d57602081850181015186830182015201610a61565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610a506020830184610a57565b600060208284031215610ac257600080fd5b5035919050565b80356001600160a01b038116811461085b57600080fd5b60008060408385031215610af357600080fd5b610afc83610ac9565b946020939093013593505050565b600080600060608486031215610b1f57600080fd5b610b2884610ac9565b9250610b3660208501610ac9565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610b7757610b77610b46565b604051601f8501601f19908116603f01168101908282118183101715610b9f57610b9f610b46565b81604052809350858152868686011115610bb857600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112610be357600080fd5b610a5083833560208501610b5c565b60008060408385031215610c0557600080fd5b823567ffffffffffffffff80821115610c1d57600080fd5b610c2986838701610bd2565b93506020850135915080821115610c3f57600080fd5b50610c4c85828601610bd2565b9150509250929050565b600060208284031215610c6857600080fd5b610a5082610ac9565b60008060408385031215610c8457600080fd5b610c8d83610ac9565b915060208301358015158114610ca257600080fd5b809150509250929050565b60008060008060808587031215610cc357600080fd5b610ccc85610ac9565b9350610cda60208601610ac9565b925060408501359150606085013567ffffffffffffffff811115610cfd57600080fd5b8501601f81018713610d0e57600080fd5b610d1d87823560208401610b5c565b91505092959194509250565b60008060408385031215610d3c57600080fd5b610d4583610ac9565b9150610d5360208401610ac9565b90509250929050565b600181811c90821680610d7057607f821691505b602082108103610d9057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600081610dbb57610dbb610d96565b506000190190565b600060018201610dd557610dd5610d96565b5060010190565b600060208284031215610dee57600080fd5b8151610a5081610a1a565b601f82111561079057600081815260208120601f850160051c81016020861015610e205750805b601f850160051c820191505b81811015610e3f57828155600101610e2c565b505050505050565b815167ffffffffffffffff811115610e6157610e61610b46565b610e7581610e6f8454610d5c565b84610df9565b602080601f831160018114610eaa5760008415610e925750858301515b600019600386901b1c1916600185901b178555610e3f565b600085815260208120601f198616915b82811015610ed957888601518255948401946001909101908401610eba565b5085821015610ef75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610f3a90830184610a57565b969550505050505056fea26469706673582212205e13c166ade9f613edd368ec3a65eb2431764f68e9a509b4b2894e8c6a790dbe64736f6c63430008140033',
    methodIdentifiers: {
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "getApproved(uint256)": "081812fc",
        "initialize(string,string)": "4cd88b76",
        "isApprovedForAll(address,address)": "e985e9c5",
        "name()": "06fdde03",
        "ownerOf(uint256)": "6352211e",
        "safeTransferFrom(address,address,uint256)": "42842e0e",
        "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
        "setApprovalForAll(address,bool)": "a22cb465",
        "supportsInterface(bytes4)": "01ffc9a7",
        "symbol()": "95d89b41",
        "tokenURI(uint256)": "c87b56dd",
        "transferFrom(address,address,uint256)": "23b872dd"
    }
};
