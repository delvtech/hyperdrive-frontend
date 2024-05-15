export const StETHHyperdriveCoreDeployer = {
    abi: [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "contract IERC20",
                            "name": "vaultSharesToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "circuitBreakerDelta",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "sweepCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "_config",
                    "type": "tuple"
                },
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                },
                {
                    "internalType": "address",
                    "name": "_target0",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_target1",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_target2",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_target3",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "_salt",
                    "type": "bytes32"
                }
            ],
            "name": "deployHyperdrive",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b50611a2d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063907d12e914610030575b600080fd5b61004361003e366004610233565b61005f565b6040516001600160a01b03909116815260200160405180910390f35b6040805133602082015290810182905260009060600160405160208183030381529060405280519060200120888787878760405161009c906100d7565b6100aa9594939291906103b0565b8190604051809103906000f59050801580156100ca573d6000803e3d6000fd5b5098975050505050505050565b611509806104ef83390190565b634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff8111828210171561011e5761011e6100e4565b60405290565b80356001600160a01b038116811461013b57600080fd5b919050565b60006080828403121561015257600080fd5b6040516080810181811067ffffffffffffffff82111715610175576101756100e4565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600082601f8301126101b757600080fd5b813567ffffffffffffffff808211156101d2576101d26100e4565b604051601f8301601f19908116603f011681019082821181831017156101fa576101fa6100e4565b8160405283815286602085880101111561021357600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600080600087890361030081121561025057600080fd5b6102408082121561026057600080fd5b6102686100fa565b91506102738a610124565b825261028160208b01610124565b602083015261029260408b01610124565b604083015260608a0135606083015260808a0135608083015260a08a013560a083015260c08a013560c083015260e08a013560e0830152610100808b01358184015250610120808b01358184015250610140808b013581840152506101606102fb818c01610124565b9083015261018061030d8b8201610124565b908301526101a061031f8b8201610124565b908301526101c06103328c8c8301610140565b9083015290975088013567ffffffffffffffff81111561035157600080fd5b61035d8a828b016101a6565b96505061036d6102608901610124565b945061037c6102808901610124565b935061038b6102a08901610124565b925061039a6102c08901610124565b91506102e0880135905092959891949750929550565b85516001600160a01b031681526102c0810160208701516103dc60208401826001600160a01b03169052565b5060408701516103f760408401826001600160a01b03169052565b50606087015160608301526080870151608083015260a087015160a083015260c087015160c083015260e087015160e083015261010080880151818401525061012080880151818401525061014080880151818401525061016080880151610469828501826001600160a01b03169052565b5050610180878101516001600160a01b03908116918401919091526101a0808901518216908401526101c09788015180519884019890985260208801516101e084015260408801516102008401526060909701516102208301529486166102408201529285166102608401529084166102808301529092166102a0909201919091529056fe6102e06040523480156200001257600080fd5b506040516200150938038062001509833981016040819052620000359162000206565b600160005584516001600160a01b039081166080908152602080880151831660a0908152918801516101a0908152918801516101c090815260c0808a01516101e05260e0808b015161020052610120808c0151909252610100808c0151909152610140808c0151909152918a01805151909152805190920151905280516040908101516101609081529151606090810151610180908152918a01518516610220528901516102405290880151600a80549185166001600160a01b03199283161790559088015160088054918516918316919091179055960151600980549183169190971617909555928416610260529083166102805282166102a052166102c0526200036a565b6040516101e081016001600160401b03811182821017156200016e57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018c57600080fd5b919050565b600060808284031215620001a457600080fd5b604051608081016001600160401b0381118282101715620001d557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008060008587036102c08112156200022157600080fd5b610240808212156200023257600080fd5b6200023c6200013c565b9150620002498862000174565b8252620002596020890162000174565b60208301526200026c6040890162000174565b6040830152606088015160608301526080880151608083015260a088015160a083015260c088015160c083015260e088015160e0830152610100808901518184015250610120808901518184015250610140808901518184015250610160620002d7818a0162000174565b90830152610180620002eb89820162000174565b908301526101a0620002ff89820162000174565b908301526101c0620003148a8a830162000191565b81840152508196506200032981890162000174565b955050506200033c610260870162000174565b92506200034d610280870162000174565b91506200035e6102a0870162000174565b90509295509295909350565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516110846200048560003960008181610571015281816106310152818161072a0152818161075a01526107b801526000818161052a01526109530152600081816105c501526106c70152600081816101d90152818161039b015281816106010152818161066301528181610695015281816106fb0152818161078d015281816107e901528181610921015261098601526000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506110846000f3fe6080604052600436106101c25760003560e01c80639032c726116100f7578063cbc1343411610095578063e44808bc11610064578063e44808bc14610593578063e4af29d1146102d2578063eac3e799146105b3578063f698da25146105e7576101c2565b8063cbc134341461030f578063d899e1121461055f578063dbbe80701461054c578063ded06231146103d5576101c2565b8063a42dce80116100d1578063a42dce80146102d2578063a6e8a85914610518578063ab033ea9146102d2578063cba2e58d1461054c576101c2565b80639032c726146104d85780639cd241af146104f8578063a22cb465146104a5576101c2565b806330adf81f116101645780634c2ac1d91161013e5780634c2ac1d9146104775780634ed2d6ac1461048a5780637180c8ca146104a557806377d05ff4146104c5576101c2565b806330adf81f146104035780633e691db914610437578063414f826d14610457576101c2565b806317fad7fc116101a057806317fad7fc146103495780631c0f12b61461036957806321b57d531461038957806329b23fc1146103d5576101c2565b806301681a62146102d257806302329a29146102f4578063074a6de91461030f575b3480156101ce57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610211929190610a5c565b600060405180830381855af49150503d806000811461024c576040519150601f19603f3d011682016040523d82523d6000602084013e610251565b606091505b5091509150811561027557604051638bb0a34b60e01b815260040160405180910390fd5b600061028082610a6c565b90506001600160e01b03198116636e64089360e11b146102a257815160208301fd5b8151600319810160048401908152926102c391810160200190602401610add565b80519650602001945050505050f35b3480156102de57600080fd5b506102f26102ed366004610ba2565b6105fc565b005b34801561030057600080fd5b506102f26102ed366004610bdb565b34801561031b57600080fd5b5061032f61032a366004610c08565b610629565b604080519283526020830191909152015b60405180910390f35b34801561035557600080fd5b506102f2610364366004610ca4565b61065e565b34801561037557600080fd5b506102f2610384366004610d39565b610690565b34801561039557600080fd5b506103bd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610340565b3480156103e157600080fd5b506103f56103f0366004610d81565b6106c0565b604051908152602001610340565b34801561040f57600080fd5b506103f57f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561044357600080fd5b506103f5610452366004610ddb565b6106f4565b34801561046357600080fd5b506102f2610472366004610e18565b610725565b6103f5610485366004610e3a565b610753565b34801561049657600080fd5b506102f2610384366004610e9e565b3480156104b157600080fd5b506102f26104c0366004610ee8565b610788565b6103f56104d3366004610c08565b6107b1565b3480156104e457600080fd5b506102f26104f3366004610f1d565b6107e4565b34801561050457600080fd5b506102f2610513366004610f9b565b61091c565b34801561052457600080fd5b506103bd7f000000000000000000000000000000000000000000000000000000000000000081565b61032f61055a366004610d81565b61094b565b34801561056b57600080fd5b506103bd7f000000000000000000000000000000000000000000000000000000000000000081565b34801561059f57600080fd5b506102f26105ae366004610fd3565b610981565b3480156105bf57600080fd5b506103bd7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105f357600080fd5b506103f56109b2565b6106257f0000000000000000000000000000000000000000000000000000000000000000610a40565b5050565b6000806106557f0000000000000000000000000000000000000000000000000000000000000000610a40565b50935093915050565b6106877f0000000000000000000000000000000000000000000000000000000000000000610a40565b50505050505050565b6106b97f0000000000000000000000000000000000000000000000000000000000000000610a40565b5050505050565b60006106eb7f0000000000000000000000000000000000000000000000000000000000000000610a40565b50949350505050565b600061071f7f0000000000000000000000000000000000000000000000000000000000000000610a40565b50919050565b61074e7f0000000000000000000000000000000000000000000000000000000000000000610a40565b505050565b600061077e7f0000000000000000000000000000000000000000000000000000000000000000610a40565b5095945050505050565b61074e7f0000000000000000000000000000000000000000000000000000000000000000610a40565b60006107dc7f0000000000000000000000000000000000000000000000000000000000000000610a40565b509392505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108196109b2565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516108c29190611032565b600060405180830381855af49150503d80600081146108fd576040519150601f19603f3d011682016040523d82523d6000602084013e610902565b606091505b50915091508161091457805160208201fd5b805160208201f35b6109457f0000000000000000000000000000000000000000000000000000000000000000610a40565b50505050565b6000806109777f0000000000000000000000000000000000000000000000000000000000000000610a40565b5094509492505050565b6109aa7f0000000000000000000000000000000000000000000000000000000000000000610a40565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b03166000366040516108c29291905b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015610a9b5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610ad4578181015183820152602001610abc565b50506000910152565b600060208284031215610aef57600080fd5b815167ffffffffffffffff80821115610b0757600080fd5b818401915084601f830112610b1b57600080fd5b815181811115610b2d57610b2d610aa3565b604051601f8201601f19908116603f01168101908382118183101715610b5557610b55610aa3565b81604052828152876020848701011115610b6e57600080fd5b610b7f836020830160208801610ab9565b979650505050505050565b6001600160a01b0381168114610b9f57600080fd5b50565b600060208284031215610bb457600080fd5b8135610bbf81610b8a565b9392505050565b80358015158114610bd657600080fd5b919050565b600060208284031215610bed57600080fd5b610bbf82610bc6565b60006060828403121561071f57600080fd5b600080600060608486031215610c1d57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115610c4257600080fd5b610c4e86828701610bf6565b9150509250925092565b60008083601f840112610c6a57600080fd5b50813567ffffffffffffffff811115610c8257600080fd5b6020830191508360208260051b8501011115610c9d57600080fd5b9250929050565b60008060008060008060808789031215610cbd57600080fd5b8635610cc881610b8a565b95506020870135610cd881610b8a565b9450604087013567ffffffffffffffff80821115610cf557600080fd5b610d018a838b01610c58565b90965094506060890135915080821115610d1a57600080fd5b50610d2789828a01610c58565b979a9699509497509295939492505050565b60008060008060808587031215610d4f57600080fd5b843593506020850135610d6181610b8a565b92506040850135610d7181610b8a565b9396929550929360600135925050565b60008060008060808587031215610d9757600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610dc357600080fd5b610dcf87828801610bf6565b91505092959194509250565b600060208284031215610ded57600080fd5b813567ffffffffffffffff811115610e0457600080fd5b610e1084828501610bf6565b949350505050565b60008060408385031215610e2b57600080fd5b50508035926020909101359150565b600080600080600060a08688031215610e5257600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115610e8557600080fd5b610e9188828901610bf6565b9150509295509295909350565b60008060008060808587031215610eb457600080fd5b843593506020850135610ec681610b8a565b9250604085013591506060850135610edd81610b8a565b939692955090935050565b60008060408385031215610efb57600080fd5b8235610f0681610b8a565b9150610f1460208401610bc6565b90509250929050565b600080600080600080600060e0888a031215610f3857600080fd5b8735610f4381610b8a565b96506020880135610f5381610b8a565b9550610f6160408901610bc6565b945060608801359350608088013560ff81168114610f7e57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215610fb057600080fd5b833592506020840135610fc281610b8a565b929592945050506040919091013590565b600080600080600060a08688031215610feb57600080fd5b853594506020860135610ffd81610b8a565b9350604086013561100d81610b8a565b925060608601359150608086013561102481610b8a565b809150509295509295909350565b60008251611044818460208701610ab9565b919091019291505056fea26469706673582212203b9204b50721bfd7371e2cf137b2a123625eb634d4e6b2a3467672b2d72d73a664736f6c63430008140033a2646970667358221220452c69e3753e4cbe29e8d82322aca537aab9ac53276a05cde201ecd75bb3a98064736f6c63430008140033',
    methodIdentifiers: {
        "deployHyperdrive((address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,address,address,address,address,bytes32)": "907d12e9"
    }
};
