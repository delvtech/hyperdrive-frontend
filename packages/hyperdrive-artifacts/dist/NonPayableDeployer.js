export const NonPayableDeployer = {
    abi: [
        {
            "type": "function",
            "name": "deployAndInitialize",
            "inputs": [
                {
                    "name": "_factory",
                    "type": "address",
                    "internalType": "contract HyperdriveFactory"
                },
                {
                    "name": "_deploymentId",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_deployerCoordinator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_config",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.PoolDeployConfig",
                    "components": [
                        {
                            "name": "baseToken",
                            "type": "address",
                            "internalType": "contract IERC20"
                        },
                        {
                            "name": "vaultSharesToken",
                            "type": "address",
                            "internalType": "contract IERC20"
                        },
                        {
                            "name": "linkerFactory",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "linkerCodeHash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "minimumShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minimumTransactionAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "positionDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "checkpointDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governance",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "feeCollector",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "sweepCollector",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "fees",
                            "type": "tuple",
                            "internalType": "struct IHyperdrive.Fees",
                            "components": [
                                {
                                    "name": "curve",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "flat",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "governanceLP",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "governanceZombie",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "_extraData",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_fixedAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretchAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_options",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                },
                {
                    "name": "_salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "deployTarget",
            "inputs": [
                {
                    "name": "_factory",
                    "type": "address",
                    "internalType": "contract HyperdriveFactory"
                },
                {
                    "name": "_deploymentId",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "_deployerCoordinator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_config",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.PoolDeployConfig",
                    "components": [
                        {
                            "name": "baseToken",
                            "type": "address",
                            "internalType": "contract IERC20"
                        },
                        {
                            "name": "vaultSharesToken",
                            "type": "address",
                            "internalType": "contract IERC20"
                        },
                        {
                            "name": "linkerFactory",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "linkerCodeHash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "minimumShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minimumTransactionAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "positionDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "checkpointDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governance",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "feeCollector",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "sweepCollector",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "fees",
                            "type": "tuple",
                            "internalType": "struct IHyperdrive.Fees",
                            "components": [
                                {
                                    "name": "curve",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "flat",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "governanceLP",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "governanceZombie",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "_extraData",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "_fixedAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_timeStretchAPR",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_targetIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b5061084f806100206000396000f3fe6080604052600436106100295760003560e01c80639337dfbd1461002e5780639d46d36614610043575b600080fd5b61004161003c366004610441565b610063565b005b34801561004f57600080fd5b5061004161005e36600461050e565b6100f1565b6040516301a4092560e21b81526001600160a01b038b169063069024949034906100a1908d908d908d908d908d908d908d908d908d906004016106f3565b60206040518083038185885af11580156100bf573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906100e49190610792565b5050505050505050505050565b604051632facc51960e01b81526001600160a01b038a1690632facc5199061012b908b908b908b908b908b908b908b908b906004016107b6565b6020604051808303816000875af115801561014a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016e9190610792565b50505050505050505050565b6001600160a01b038116811461018f57600080fd5b50565b803561019d8161017a565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff811182821017156101dc576101dc6101a2565b60405290565b6000608082840312156101f457600080fd5b6040516080810181811067ffffffffffffffff82111715610217576102176101a2565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b6000610200828403121561025b57600080fd5b6102636101b8565b905061026e82610192565b815261027c60208301610192565b602082015261028d60408301610192565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101206102de818401610192565b908201526101406102f0838201610192565b90820152610160610302838201610192565b90820152610180610315848483016101e2565b9082015292915050565b600082601f83011261033057600080fd5b813567ffffffffffffffff8082111561034b5761034b6101a2565b604051601f8301601f19908116603f01168101908282118183101715610373576103736101a2565b8160405283815286602085880101111561038c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000606082840312156103be57600080fd5b6040516060810167ffffffffffffffff82821081831117156103e2576103e26101a2565b81604052829350843591506103f68261017a565b908252602084013590811515821461040d57600080fd5b816020840152604085013591508082111561042757600080fd5b506104348582860161031f565b6040830152505092915050565b6000806000806000806000806000806103208b8d03121561046157600080fd5b61046a8b610192565b995060208b0135985061047f60408c01610192565b975061048e8c60608d01610248565b96506102608b013567ffffffffffffffff808211156104ac57600080fd5b6104b88e838f0161031f565b97506102808d013596506102a08d013595506102c08d013594506102e08d01359150808211156104e757600080fd5b506104f48d828e016103ac565b9250506103008b013590509295989b9194979a5092959850565b60008060008060008060008060006103008a8c03121561052d57600080fd5b89356105388161017a565b985060208a0135975060408a013561054f8161017a565b965061055e8b60608c01610248565b95506102608a013567ffffffffffffffff81111561057b57600080fd5b6105878c828d0161031f565b999c989b50969995989761028087013597506102a0870135966102c081013596506102e00135945092505050565b80516001600160a01b0316825260208101516105dc60208401826001600160a01b03169052565b5060408101516105f760408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151610651828501826001600160a01b03169052565b5050610140818101516001600160a01b039081169184019190915261016080830151909116908301526101809081015180519183019190915260208101516101a083015260408101516101c0830152606001516101e090910152565b6000815180845260005b818110156106d3576020818501810151868301820152016106b7565b506000602082860101526020601f19601f83011685010191505092915050565b8981526001600160a01b0389811660208301526000906103009061071a604085018c6105b5565b8161024085015261072d8285018b6106ad565b91508861026085015287610280850152866102a08501528382036102c08501528086511682525060208501511515602082015260408501516060604083015261077960608301826106ad565b92505050826102e08301529a9950505050505050505050565b6000602082840312156107a457600080fd5b81516107af8161017a565b9392505050565b8881526001600160a01b038816602082015260006102e06107da604084018a6105b5565b806102408401526107ed818401896106ad565b9150508561026083015284610280830152836102a0830152826102c0830152999850505050505050505056fea2646970667358221220c38c022669fa75c8d144c9992f2f8fab8ea3fabe44e4db57770a70f80a9c8e1364736f6c63430008140033',
    methodIdentifiers: {
        "deployAndInitialize(address,bytes32,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,(address,bool,bytes),bytes32)": "9337dfbd",
        "deployTarget(address,bytes32,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,bytes32)": "9d46d366"
    }
};
