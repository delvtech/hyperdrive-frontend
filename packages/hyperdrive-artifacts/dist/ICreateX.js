export const ICreateX = {
    abi: [
        {
            "type": "function",
            "name": "computeCreate2Address",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "initCodeHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "computedAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "computeCreate2Address",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "initCodeHash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "deployer",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "computedAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "computeCreate3Address",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "deployer",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "computedAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "computeCreate3Address",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "computedAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "computeCreateAddress",
            "inputs": [
                {
                    "name": "nonce",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "computedAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "computeCreateAddress",
            "inputs": [
                {
                    "name": "deployer",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "nonce",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "computedAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "deployCreate",
            "inputs": [
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate2",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate2",
            "inputs": [
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate2AndInit",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "values",
                    "type": "tuple",
                    "internalType": "struct ICreateX.Values",
                    "components": [
                        {
                            "name": "constructorAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initCallAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "refundAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate2AndInit",
            "inputs": [
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "values",
                    "type": "tuple",
                    "internalType": "struct ICreateX.Values",
                    "components": [
                        {
                            "name": "constructorAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initCallAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate2AndInit",
            "inputs": [
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "values",
                    "type": "tuple",
                    "internalType": "struct ICreateX.Values",
                    "components": [
                        {
                            "name": "constructorAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initCallAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "refundAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate2AndInit",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "values",
                    "type": "tuple",
                    "internalType": "struct ICreateX.Values",
                    "components": [
                        {
                            "name": "constructorAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initCallAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate2Clone",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "implementation",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "proxy",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate2Clone",
            "inputs": [
                {
                    "name": "implementation",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "proxy",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate3",
            "inputs": [
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate3",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate3AndInit",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "values",
                    "type": "tuple",
                    "internalType": "struct ICreateX.Values",
                    "components": [
                        {
                            "name": "constructorAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initCallAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate3AndInit",
            "inputs": [
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "values",
                    "type": "tuple",
                    "internalType": "struct ICreateX.Values",
                    "components": [
                        {
                            "name": "constructorAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initCallAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate3AndInit",
            "inputs": [
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "values",
                    "type": "tuple",
                    "internalType": "struct ICreateX.Values",
                    "components": [
                        {
                            "name": "constructorAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initCallAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "refundAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreate3AndInit",
            "inputs": [
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "values",
                    "type": "tuple",
                    "internalType": "struct ICreateX.Values",
                    "components": [
                        {
                            "name": "constructorAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initCallAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "refundAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreateAndInit",
            "inputs": [
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "values",
                    "type": "tuple",
                    "internalType": "struct ICreateX.Values",
                    "components": [
                        {
                            "name": "constructorAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initCallAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreateAndInit",
            "inputs": [
                {
                    "name": "initCode",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "values",
                    "type": "tuple",
                    "internalType": "struct ICreateX.Values",
                    "components": [
                        {
                            "name": "constructorAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "initCallAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "refundAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployCreateClone",
            "inputs": [
                {
                    "name": "implementation",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "proxy",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "event",
            "name": "ContractCreation",
            "inputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "salt",
                    "type": "bytes32",
                    "indexed": true,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ContractCreation",
            "inputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Create3ProxyContractCreation",
            "inputs": [
                {
                    "name": "newContract",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "salt",
                    "type": "bytes32",
                    "indexed": true,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "FailedContractCreation",
            "inputs": [
                {
                    "name": "emitter",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "FailedContractInitialisation",
            "inputs": [
                {
                    "name": "emitter",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "revertData",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ]
        },
        {
            "type": "error",
            "name": "FailedEtherTransfer",
            "inputs": [
                {
                    "name": "emitter",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "revertData",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidNonceValue",
            "inputs": [
                {
                    "name": "emitter",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidSalt",
            "inputs": [
                {
                    "name": "emitter",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "computeCreate2Address(bytes32,bytes32)": "890c283b",
        "computeCreate2Address(bytes32,bytes32,address)": "d323826a",
        "computeCreate3Address(bytes32)": "6cec2536",
        "computeCreate3Address(bytes32,address)": "42d654fc",
        "computeCreateAddress(address,uint256)": "74637a7a",
        "computeCreateAddress(uint256)": "28ddd046",
        "deployCreate(bytes)": "27fe1822",
        "deployCreate2(bytes)": "26a32fc7",
        "deployCreate2(bytes32,bytes)": "26307668",
        "deployCreate2AndInit(bytes,bytes,(uint256,uint256))": "c3fe107b",
        "deployCreate2AndInit(bytes,bytes,(uint256,uint256),address)": "e437252a",
        "deployCreate2AndInit(bytes32,bytes,bytes,(uint256,uint256))": "e96deee4",
        "deployCreate2AndInit(bytes32,bytes,bytes,(uint256,uint256),address)": "a7db93f2",
        "deployCreate2Clone(address,bytes)": "81503da1",
        "deployCreate2Clone(bytes32,address,bytes)": "2852527a",
        "deployCreate3(bytes)": "7f565360",
        "deployCreate3(bytes32,bytes)": "9c36a286",
        "deployCreate3AndInit(bytes,bytes,(uint256,uint256))": "2f990e3f",
        "deployCreate3AndInit(bytes,bytes,(uint256,uint256),address)": "f5745aba",
        "deployCreate3AndInit(bytes32,bytes,bytes,(uint256,uint256))": "00d84acb",
        "deployCreate3AndInit(bytes32,bytes,bytes,(uint256,uint256),address)": "ddda0acb",
        "deployCreateAndInit(bytes,bytes,(uint256,uint256))": "31a7c8c8",
        "deployCreateAndInit(bytes,bytes,(uint256,uint256),address)": "98e81077",
        "deployCreateClone(address,bytes)": "f9664498"
    }
};
