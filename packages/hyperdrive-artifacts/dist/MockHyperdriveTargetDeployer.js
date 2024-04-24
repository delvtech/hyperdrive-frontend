export const MockHyperdriveTargetDeployer = {
    abi: [
        {
            "type": "function",
            "name": "deploy",
            "inputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.PoolConfig",
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
                            "name": "initialVaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
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
                    "name": "",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "pure"
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b50610312806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063195d4bfc14610030575b600080fd5b61004761003e3660046101b2565b60009392505050565b6040516001600160a01b03909116815260200160405180910390f35b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561009d5761009d610063565b60405290565b80356001600160a01b03811681146100ba57600080fd5b919050565b6000608082840312156100d157600080fd5b6040516080810181811067ffffffffffffffff821117156100f4576100f4610063565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600082601f83011261013657600080fd5b813567ffffffffffffffff8082111561015157610151610063565b604051601f8301601f19908116603f0116810190828211818310171561017957610179610063565b8160405283815286602085880101111561019257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008385036102608112156101c957600080fd5b610220808212156101d957600080fd5b6101e1610079565b91506101ec866100a3565b82526101fa602087016100a3565b602083015261020b604087016100a3565b6040830152606086013560608301526080860135608083015260a086013560a083015260c086013560c083015260e086013560e08301526101008087013581840152506101208087013581840152506101406102688188016100a3565b9083015261016061027a8782016100a3565b9083015261018061028c8782016100a3565b908301526101a061029f888883016100bf565b9083015290935084013567ffffffffffffffff8111156102be57600080fd5b6102ca86828701610125565b9250506102408401359050925092509256fea26469706673582212209702061f8478156208a73b811decff7a8c548db112e716d6342a24f89d699d4464736f6c63430008140033',
    methodIdentifiers: {
        "deploy((address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "195d4bfc"
    }
};
