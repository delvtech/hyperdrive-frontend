export const DSTest = {
    abi: [
        {
            "type": "function",
            "name": "IS_TEST",
            "inputs": [],
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
            "name": "failed",
            "inputs": [],
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
            "name": "log",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_address",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_bytes",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_bytes32",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_int",
            "inputs": [
                {
                    "name": "",
                    "type": "int256",
                    "indexed": false,
                    "internalType": "int256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_address",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_bytes",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_bytes32",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_decimal_int",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "int256",
                    "indexed": false,
                    "internalType": "int256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_decimal_uint",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "decimals",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_int",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "int256",
                    "indexed": false,
                    "internalType": "int256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_string",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_named_uint",
            "inputs": [
                {
                    "name": "key",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "val",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_string",
            "inputs": [
                {
                    "name": "",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "log_uint",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "logs",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        }
    ],
    bytecode: '0x60806040526000805460ff1916600117905534801561001d57600080fd5b5061024e8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063ba414fa61461003b578063fa7626d414610057575b600080fd5b610043610064565b604051901515815260200160405180910390f35b6000546100439060ff1681565b60008054610100900460ff16156100845750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b1561018a5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b82840152825180830384018152606083019093526000929091610112917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc4916080016101bf565b60408051601f198184030181529082905261012c916101e3565b6000604051808303816000865af19150503d8060008114610169576040519150601f19603f3d011682016040523d82523d6000602084013e61016e565b606091505b509150508080602001905181019061018691906101f6565b9150505b919050565b6000815160005b818110156101b05760208185018101518683015201610196565b50600093019283525090919050565b6001600160e01b03198316815260006101db600483018461018f565b949350505050565b60006101ef828461018f565b9392505050565b60006020828403121561020857600080fd5b815180151581146101ef57600080fdfea26469706673582212201910e54726241eb41a74b2ddf4a47ed52619f3985fab625b3df5c8a7e60b9f6564736f6c63430008140033',
    methodIdentifiers: {
        "IS_TEST()": "fa7626d4",
        "failed()": "ba414fa6"
    }
};