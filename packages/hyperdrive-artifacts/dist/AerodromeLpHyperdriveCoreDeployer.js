export const AerodromeLpHyperdriveCoreDeployer = {
    abi: [
        {
            "type": "function",
            "name": "deployHyperdrive",
            "inputs": [
                {
                    "name": "__name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_config",
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
                    "name": "_adminController",
                    "type": "address",
                    "internalType": "contract IHyperdriveAdminController"
                },
                {
                    "name": "_extraData",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "_target0",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target1",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target2",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target3",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_target4",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_salt",
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
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x608060405234801561000f575f80fd5b506122888061001d5f395ff3fe608060405234801562000010575f80fd5b50600436106200002c575f3560e01c80638cc23ce01462000030575b5f80fd5b6200004762000041366004620003de565b62000063565b6040516001600160a01b03909116815260200160405180910390f35b5f601488511015620000bb5760405162461bcd60e51b815260206004820152601960248201527f496e76616c6964205f657874726144617461206c656e67746800000000000000604482015260640160405180910390fd5b5f88806020019051810190620000d29190620004d6565b60408051336020820152908101859052909150606001604051602081830303815290604052805190602001208c8c8c8b8b8b8b8b8960405162000115906200015a565b62000129999897969594939291906200061b565b8190604051809103905ff590508015801562000147573d5f803e3d5ffd5b509150505b9a9950505050505050505050565b611b6080620006f383390190565b634e487b7160e01b5f52604160045260245ffd5b604051610200810167ffffffffffffffff81118282101715620001a357620001a362000168565b60405290565b5f82601f830112620001b9575f80fd5b813567ffffffffffffffff80821115620001d757620001d762000168565b604051601f8301601f19908116603f0116810190828211818310171562000202576200020262000168565b816040528381528660208588010111156200021b575f80fd5b836020870160208301375f602085830101528094505050505092915050565b6001600160a01b03811681146200024f575f80fd5b50565b80356200025f816200023a565b919050565b5f6080828403121562000275575f80fd5b6040516080810181811067ffffffffffffffff821117156200029b576200029b62000168565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102608284031215620002de575f80fd5b620002e86200017c565b9050620002f58262000252565b8152620003056020830162000252565b6020820152620003186040830162000252565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101606200038381840162000252565b908201526101806200039783820162000252565b908201526101a0620003ab83820162000252565b908201526101c0620003bf83820162000252565b908201526101e0620003d48484830162000264565b9082015292915050565b5f805f805f805f805f806103808b8d031215620003f9575f80fd5b8a3567ffffffffffffffff8082111562000411575f80fd5b6200041f8e838f01620001a9565b9b50620004308e60208f01620002cc565b9a50620004416102808e0162000252565b99506102a08d013591508082111562000458575f80fd5b50620004678d828e01620001a9565b975050620004796102c08c0162000252565b95506200048a6102e08c0162000252565b94506200049b6103008c0162000252565b9350620004ac6103208c0162000252565b9250620004bd6103408c0162000252565b91506103608b013590509295989b9194979a5092959850565b5f60208284031215620004e7575f80fd5b8151620004f4816200023a565b9392505050565b80516001600160a01b0316825260208101516200052360208401826001600160a01b03169052565b5060408101516200053f60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080820151818401525061012080820151818401525061014080820151818401525061016080820151620005b2828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e090810151805191830191909152602081015161020083015260408101516102208301526060015161024090910152565b5f6103608083528b5180828501525f91505b8082101562000651576020828e01015161038083860101526020820191506200062d565b61038091505f82828601015281601f19601f830116850101925050506200067c602083018b620004fb565b6001600160a01b0389166102808301526001600160a01b0388166102a08301526001600160a01b0387166102c08301526001600160a01b0386166102e08301526001600160a01b0385166103008301526001600160a01b0384166103208301526001600160a01b0383166103408301526200014c56fe61034060405234801562000011575f80fd5b5060405162001b6038038062001b608339810160408190526200003491620006a9565b60015f81905588516001600160a01b0390811660809081526020808c0151831660a0908152918c01516101a052908b01516101c05260c0808c01516101e090815260e0808e015161020052610120808f0151909352610100808f0151909152610140808f0151909152908d01805151909252815190920151909152805160409081015161016052905160609081015161018052908b01518216610240528a01516102605288166102205281908a908a908a908a908a908a908a908a90620000fc898262000865565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e0528116610300529384166103205250508951620001429216905030600162000151565b5050505050505050506200096f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001ab90859083906200021c16565b6200021657604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200020a918691620002c616565b620002168482620002c6565b50505050565b5f805f846001600160a01b03168460405162000239919062000931565b5f604051808303815f865af19150503d805f811462000274576040519150601f19603f3d011682016040523d82523d5f602084013e62000279565b606091505b5091509150818015620002a7575080511580620002a7575080806020019051810190620002a791906200094e565b8015620002bd57505f856001600160a01b03163b115b95945050505050565b5f620002dc6001600160a01b0384168362000337565b905080515f14158015620003035750808060200190518101906200030191906200094e565b155b156200033257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200034683835f6200034d565b9392505050565b606081471015620003745760405163cd78605960e01b815230600482015260240162000329565b5f80856001600160a01b0316848660405162000391919062000931565b5f6040518083038185875af1925050503d805f8114620003cd576040519150601f19603f3d011682016040523d82523d5f602084013e620003d2565b606091505b509092509050620003e5868383620003ef565b9695505050505050565b6060826200040857620004028262000453565b62000346565b81511580156200042057506001600160a01b0384163b155b156200044b57604051639996b31560e01b81526001600160a01b038516600482015260240162000329565b508062000346565b805115620004645780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b5f52604160045260245ffd5b60405161020081016001600160401b0381118282101715620004b757620004b76200047d565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620004e857620004e86200047d565b604052919050565b5f5b838110156200050c578181015183820152602001620004f2565b50505f910152565b80516001600160a01b03811681146200052b575f80fd5b919050565b5f6080828403121562000541575f80fd5b604051608081016001600160401b03811182821017156200056657620005666200047d565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f6102608284031215620005a9575f80fd5b620005b362000491565b9050620005c08262000514565b8152620005d06020830162000514565b6020820152620005e36040830162000514565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101606200064e81840162000514565b908201526101806200066283820162000514565b908201526101a06200067683820162000514565b908201526101c06200068a83820162000514565b908201526101e06200069f8484830162000530565b9082015292915050565b5f805f805f805f805f6103608a8c031215620006c3575f80fd5b89516001600160401b0380821115620006da575f80fd5b818c0191508c601f830112620006ee575f80fd5b8151818111156200070357620007036200047d565b62000718601f8201601f1916602001620004bd565b91508082528d60208285010111156200072f575f80fd5b62000742816020840160208601620004f0565b5099506200075690508b60208c0162000597565b9750620007676102808b0162000514565b9650620007786102a08b0162000514565b9550620007896102c08b0162000514565b94506200079a6102e08b0162000514565b9350620007ab6103008b0162000514565b9250620007bc6103208b0162000514565b9150620007cd6103408b0162000514565b90509295985092959850929598565b600181811c90821680620007f157607f821691505b6020821081036200081057634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200033257805f5260205f20601f840160051c810160208510156200083d5750805b601f840160051c820191505b818110156200085e575f815560010162000849565b5050505050565b81516001600160401b038111156200088157620008816200047d565b6200089981620008928454620007dc565b8462000816565b602080601f831160018114620008cf575f8415620008b75750858301515b5f19600386901b1c1916600185901b17855562000929565b5f85815260208120601f198616915b82811015620008ff57888601518255948401946001909101908401620008de565b50858210156200091d57878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f825162000944818460208701620004f0565b9190910192915050565b5f602082840312156200095f575f80fd5b8151801515811462000346575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051610320516110d062000a905f395f61073301525f81816105f20152818161065c01526107c901525f818161056d015281816107f8015261085501525f818161052701526109e501525f81816105bf01526106f101525f81816101d50152818161038d0152818161062d0152818161068e015281816106c00152818161079a0152818161082b01528181610885015281816109ba0152610a1801525f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50506110d05ff3fe6080604052600436106101c1575f3560e01c806377d05ff4116100f6578063cbc1343411610094578063e44808bc11610063578063e44808bc1461058f578063eac3e799146105ae578063f3f70707146105e1578063f698da2514610614576101c1565b8063cbc1343414610305578063d899e1121461055c578063dbbe807014610549578063ded06231146103c7576101c1565b8063a22cb465116100d0578063a22cb465146104a6578063a6e8a85914610516578063ab033ea9146102ca578063cba2e58d14610549576101c1565b806377d05ff4146104c55780639032c726146104d85780639cd241af146104f7576101c1565b806330adf81f11610163578063414f826d1161013d578063414f826d1461045a5780634c2ac1d9146104795780634ed2d6ac1461048c5780637180c8ca146104a6576101c1565b806330adf81f146103f45780633d18b912146104275780633e691db91461043b576101c1565b806317fad7fc1161019f57806317fad7fc1461033e5780631c0f12b61461035d57806321b57d531461037c57806329b23fc1146103c7576101c1565b806301681a62146102ca57806302329a29146102eb578063074a6de914610305575b3480156101cc575f80fd5b505f3660605f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161020d929190610aec565b5f60405180830381855af49150503d805f8114610245576040519150601f19603f3d011682016040523d82523d5f602084013e61024a565b606091505b5091509150811561026e57604051638bb0a34b60e01b815260040160405180910390fd5b5f61027882610afb565b90506001600160e01b03198116636e64089360e11b1461029a57815160208301fd5b8151600319810160048401908152926102bb91810160200190602401610b68565b80519650602001945050505050f35b3480156102d5575f80fd5b506102e96102e4366004610c27565b610628565b005b3480156102f6575f80fd5b506102e96102e4366004610c5d565b348015610310575f80fd5b5061032461031f366004610c86565b610655565b604080519283526020830191909152015b60405180910390f35b348015610349575f80fd5b506102e9610358366004610d1a565b610689565b348015610368575f80fd5b506102e9610377366004610da9565b6106bb565b348015610387575f80fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610335565b3480156103d2575f80fd5b506103e66103e1366004610dee565b6106eb565b604051908152602001610335565b3480156103ff575f80fd5b506103e67f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b348015610432575f80fd5b506102e961071e565b348015610446575f80fd5b506103e6610455366004610e44565b610794565b348015610465575f80fd5b506102e9610474366004610e7e565b6107c4565b6103e6610487366004610e9e565b6107f2565b348015610497575f80fd5b506102e9610377366004610efd565b3480156104b1575f80fd5b506102e96104c0366004610f44565b610826565b6103e66104d3366004610c86565b61084f565b3480156104e3575f80fd5b506102e96104f2366004610f77565b610881565b348015610502575f80fd5b506102e9610511366004610fef565b6109b5565b348015610521575f80fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b610324610557366004610dee565b6109de565b348015610567575f80fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b34801561059a575f80fd5b506102e96105a9366004611024565b610a13565b3480156105b9575f80fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105ec575f80fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b34801561061f575f80fd5b506103e6610a44565b6106517f0000000000000000000000000000000000000000000000000000000000000000610ad2565b5050565b5f806106807f0000000000000000000000000000000000000000000000000000000000000000610ad2565b50935093915050565b6106b27f0000000000000000000000000000000000000000000000000000000000000000610ad2565b50505050505050565b6106e47f0000000000000000000000000000000000000000000000000000000000000000610ad2565b5050505050565b5f6107157f0000000000000000000000000000000000000000000000000000000000000000610ad2565b50949350505050565b604051630c00007b60e41b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c00007b0906024015f604051808303815f87803b15801561077c575f80fd5b505af115801561078e573d5f803e3d5ffd5b50505050565b5f6107be7f0000000000000000000000000000000000000000000000000000000000000000610ad2565b50919050565b6107ed7f0000000000000000000000000000000000000000000000000000000000000000610ad2565b505050565b5f61081c7f0000000000000000000000000000000000000000000000000000000000000000610ad2565b5095945050505050565b6107ed7f0000000000000000000000000000000000000000000000000000000000000000610ad2565b5f6108797f0000000000000000000000000000000000000000000000000000000000000000610ad2565b509392505050565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108b5610a44565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161095e919061107f565b5f60405180830381855af49150503d805f8114610996576040519150601f19603f3d011682016040523d82523d5f602084013e61099b565b606091505b5091509150816109ad57805160208201fd5b805160208201f35b61078e7f0000000000000000000000000000000000000000000000000000000000000000610ad2565b5f80610a097f0000000000000000000000000000000000000000000000000000000000000000610ad2565b5094509492505050565b610a3c7f0000000000000000000000000000000000000000000000000000000000000000610ad2565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b60605f80836001600160a01b03165f3660405161095e9291905b818382375f9101908152919050565b805160208201516001600160e01b03198082169291906004831015610b2a5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015610b60578181015183820152602001610b48565b50505f910152565b5f60208284031215610b78575f80fd5b815167ffffffffffffffff80821115610b8f575f80fd5b818401915084601f830112610ba2575f80fd5b815181811115610bb457610bb4610b32565b604051601f8201601f19908116603f01168101908382118183101715610bdc57610bdc610b32565b81604052828152876020848701011115610bf4575f80fd5b610c05836020830160208801610b46565b979650505050505050565b6001600160a01b0381168114610c24575f80fd5b50565b5f60208284031215610c37575f80fd5b8135610c4281610c10565b9392505050565b80358015158114610c58575f80fd5b919050565b5f60208284031215610c6d575f80fd5b610c4282610c49565b5f606082840312156107be575f80fd5b5f805f60608486031215610c98575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115610cbc575f80fd5b610cc886828701610c76565b9150509250925092565b5f8083601f840112610ce2575f80fd5b50813567ffffffffffffffff811115610cf9575f80fd5b6020830191508360208260051b8501011115610d13575f80fd5b9250929050565b5f805f805f8060808789031215610d2f575f80fd5b8635610d3a81610c10565b95506020870135610d4a81610c10565b9450604087013567ffffffffffffffff80821115610d66575f80fd5b610d728a838b01610cd2565b90965094506060890135915080821115610d8a575f80fd5b50610d9789828a01610cd2565b979a9699509497509295939492505050565b5f805f8060808587031215610dbc575f80fd5b843593506020850135610dce81610c10565b92506040850135610dde81610c10565b9396929550929360600135925050565b5f805f8060808587031215610e01575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610e2c575f80fd5b610e3887828801610c76565b91505092959194509250565b5f60208284031215610e54575f80fd5b813567ffffffffffffffff811115610e6a575f80fd5b610e7684828501610c76565b949350505050565b5f8060408385031215610e8f575f80fd5b50508035926020909101359150565b5f805f805f60a08688031215610eb2575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115610ee4575f80fd5b610ef088828901610c76565b9150509295509295909350565b5f805f8060808587031215610f10575f80fd5b843593506020850135610f2281610c10565b9250604085013591506060850135610f3981610c10565b939692955090935050565b5f8060408385031215610f55575f80fd5b8235610f6081610c10565b9150610f6e60208401610c49565b90509250929050565b5f805f805f805f60e0888a031215610f8d575f80fd5b8735610f9881610c10565b96506020880135610fa881610c10565b9550610fb660408901610c49565b945060608801359350608088013560ff81168114610fd2575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f805f60608486031215611001575f80fd5b83359250602084013561101381610c10565b929592945050506040919091013590565b5f805f805f60a08688031215611038575f80fd5b85359450602086013561104a81610c10565b9350604086013561105a81610c10565b925060608601359150608086013561107181610c10565b809150509295509295909350565b5f8251611090818460208701610b46565b919091019291505056fea2646970667358221220d60b636ac94363dedd017ff626d9a9186630b94114fff8e77c0f28fa3fccabc464736f6c63430008160033a2646970667358221220c2acf6be12024b0ebfd7d1005f6f8f9dd79a685937636087a5d9318d432eafea64736f6c63430008160033',
    methodIdentifiers: {
        "deployHyperdrive(string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),address,bytes,address,address,address,address,address,bytes32)": "8cc23ce0"
    }
};
