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
    bytecode: '0x608060405234801561000f575f80fd5b5061089a8061001d5f395ff3fe608060405260043610610028575f3560e01c8063606b55631461002c57806373c871b314610041575b5f80fd5b61003f61003a36600461044b565b610060565b005b34801561004c575f80fd5b5061003f61005b366004610539565b6100ef565b604051632e7cd97160e01b81526001600160a01b038c1690632e7cd9719034906100a0908e908d908f908e908e908e908e908e908e908e9060040161072d565b60206040518083038185885af11580156100bc573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906100e191906107e0565b505050505050505050505050565b6040516349f13de760e01b81526001600160a01b038a16906349f13de790610129908b908b908b908b908b908b908b908b90600401610802565b6020604051808303815f875af1158015610145573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061016991906107e0565b50505050505050505050565b6001600160a01b0381168114610189575f80fd5b50565b803561019781610175565b919050565b634e487b7160e01b5f52604160045260245ffd5b6040516101e0810167ffffffffffffffff811182821017156101d4576101d461019c565b60405290565b5f82601f8301126101e9575f80fd5b813567ffffffffffffffff808211156102045761020461019c565b604051601f8301601f19908116603f0116810190828211818310171561022c5761022c61019c565b81604052838152866020858801011115610244575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f60808284031215610273575f80fd5b6040516080810181811067ffffffffffffffff821117156102965761029661019c565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f61024082840312156102d8575f80fd5b6102e06101b0565b90506102eb8261018c565b81526102f96020830161018c565b602082015261030a6040830161018c565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014061036781840161018c565b9082015261016061037983820161018c565b9082015261018061038b83820161018c565b908201526101a061039d83820161018c565b908201526101c06103b084848301610263565b9082015292915050565b5f606082840312156103ca575f80fd5b6040516060810167ffffffffffffffff82821081831117156103ee576103ee61019c565b816040528293508435915061040282610175565b9082526020840135908115158214610418575f80fd5b8160208401526040850135915080821115610431575f80fd5b5061043e858286016101da565b6040830152505092915050565b5f805f805f805f805f805f6103808c8e031215610466575f80fd5b61046f8c61018c565b9a5060208c0135995067ffffffffffffffff8060408e01351115610491575f80fd5b6104a18e60408f01358f016101da565b99506104af60608e0161018c565b98506104be8e60808f016102c7565b9750806102c08e013511156104d1575f80fd5b6104e28e6102c08f01358f016101da565b96506102e08d013595506103008d013594506103208d01359350806103408e0135111561050d575f80fd5b5061051f8d6103408e01358e016103ba565b91506103608c013590509295989b509295989b9093969950565b5f805f805f805f805f6103408a8c031215610552575f80fd5b893561055d81610175565b985060208a0135975060408a013561057481610175565b96506105838b60608c016102c7565b95506102a08a013567ffffffffffffffff81111561059f575f80fd5b6105ab8c828d016101da565b999c989b5096999598976102c087013597506102e08701359661030081013596506103200135945092505050565b5f81518084525f5b818110156105fd576020818501810151868301820152016105e1565b505f602082860101526020601f19601f83011685010191505092915050565b80516001600160a01b03168252602081015161064360208401826001600160a01b03169052565b50604081015161065e60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201516106c4828501826001600160a01b03169052565b5050610160818101516001600160a01b0390811691840191909152610180808301518216908401526101a080830151909116908301526101c09081015180519183019190915260208101516101e083015260408101516102008301526060015161022090910152565b8a81526001600160a01b038a81166020830152610360604083018190525f916107588483018d6105d9565b9150610767606085018c61061c565b8382036102a085015261077a828b6105d9565b9150886102c0850152876102e085015286610300850152838203610320850152808651168252506020850151151560208201526040850151606060408301526107c660608301826105d9565b92505050826103408301529b9a5050505050505050505050565b5f602082840312156107f0575f80fd5b81516107fb81610175565b9392505050565b8881526001600160a01b03881660208201525f610320610825604084018a61061c565b80610280840152610838818401896105d9565b915050856102a0830152846102c0830152836102e083015282610300830152999850505050505050505056fea2646970667358221220ca9a91b70e77f5739668d14b7df089956c09daaee911ca1196963d5e9a4afa0e64736f6c63430008160033',
    methodIdentifiers: {
        "deployAndInitialize(address,bytes32,string,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,(address,bool,bytes),bytes32)": "606b5563",
        "deployTarget(address,bytes32,address,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,uint256,uint256,bytes32)": "73c871b3"
    }
};
