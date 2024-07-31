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
                    "name": "__name",
                    "type": "string",
                    "internalType": "string"
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
                            "name": "circuitBreakerDelta",
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
                            "name": "checkpointRewarder",
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
                            "name": "circuitBreakerDelta",
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
                            "name": "checkpointRewarder",
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
    bytecode: '0x608060405234801561001057600080fd5b506108c9806100206000396000f3fe6080604052600436106100295760003560e01c8063606b55631461002e57806373c871b314610043575b600080fd5b61004161003c366004610462565b610063565b005b34801561004f57600080fd5b5061004161005e36600461055a565b6100f4565b604051632e7cd97160e01b81526001600160a01b038c1690632e7cd9719034906100a3908e908d908f908e908e908e908e908e908e908e90600401610758565b60206040518083038185885af11580156100c1573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906100e6919061080c565b505050505050505050505050565b6040516349f13de760e01b81526001600160a01b038a16906349f13de79061012e908b908b908b908b908b908b908b908b90600401610830565b6020604051808303816000875af115801561014d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610171919061080c565b50505050505050505050565b6001600160a01b038116811461019257600080fd5b50565b80356101a08161017d565b919050565b634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff811182821017156101df576101df6101a5565b60405290565b600082601f8301126101f657600080fd5b813567ffffffffffffffff80821115610211576102116101a5565b604051601f8301601f19908116603f01168101908282118183101715610239576102396101a5565b8160405283815286602085880101111561025257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006080828403121561028457600080fd5b6040516080810181811067ffffffffffffffff821117156102a7576102a76101a5565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600061024082840312156102eb57600080fd5b6102f36101bb565b90506102fe82610195565b815261030c60208301610195565b602082015261031d60408301610195565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014061037a818401610195565b9082015261016061038c838201610195565b9082015261018061039e838201610195565b908201526101a06103b0838201610195565b908201526101c06103c384848301610272565b9082015292915050565b6000606082840312156103df57600080fd5b6040516060810167ffffffffffffffff8282108183111715610403576104036101a5565b81604052829350843591506104178261017d565b908252602084013590811515821461042e57600080fd5b816020840152604085013591508082111561044857600080fd5b50610455858286016101e5565b6040830152505092915050565b60008060008060008060008060008060006103808c8e03121561048457600080fd5b61048d8c610195565b9a5060208c0135995067ffffffffffffffff8060408e013511156104b057600080fd5b6104c08e60408f01358f016101e5565b99506104ce60608e01610195565b98506104dd8e60808f016102d8565b9750806102c08e013511156104f157600080fd5b6105028e6102c08f01358f016101e5565b96506102e08d013595506103008d013594506103208d01359350806103408e0135111561052e57600080fd5b506105408d6103408e01358e016103cd565b91506103608c013590509295989b509295989b9093969950565b60008060008060008060008060006103408a8c03121561057957600080fd5b89356105848161017d565b985060208a0135975060408a013561059b8161017d565b96506105aa8b60608c016102d8565b95506102a08a013567ffffffffffffffff8111156105c757600080fd5b6105d38c828d016101e5565b999c989b5096999598976102c087013597506102e08701359661030081013596506103200135945092505050565b6000815180845260005b818110156106275760208185018101518683018201520161060b565b506000602082860101526020601f19601f83011685010191505092915050565b80516001600160a01b03168252602081015161066e60208401826001600160a01b03169052565b50604081015161068960408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201516106ef828501826001600160a01b03169052565b5050610160818101516001600160a01b0390811691840191909152610180808301518216908401526101a080830151909116908301526101c09081015180519183019190915260208101516101e083015260408101516102008301526060015161022090910152565b8a81526001600160a01b038a81166020830152610360604083018190526000916107848483018d610601565b9150610793606085018c610647565b8382036102a08501526107a6828b610601565b9150886102c0850152876102e085015286610300850152838203610320850152808651168252506020850151151560208201526040850151606060408301526107f26060830182610601565b92505050826103408301529b9a5050505050505050505050565b60006020828403121561081e57600080fd5b81516108298161017d565b9392505050565b8881526001600160a01b03881660208201526000610320610854604084018a610647565b8061028084015261086781840189610601565b915050856102a0830152846102c0830152836102e083015282610300830152999850505050505050505056fea2646970667358221220518a053f15b3b9a9e6da91865d98f771ba6b0d40e90afa187115b1f9b89bc1e564736f6c63430008140033',
    methodIdentifiers: {
        "deployAndInitialize(address,bytes32,string,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,(address,bool,bytes),bytes32)": "606b5563",
        "deployTarget(address,bytes32,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,bytes32)": "73c871b3"
    }
};
