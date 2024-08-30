export const LsETHHyperdriveCoreDeployer = {
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
                    "name": "",
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
    bytecode: '0x608060405234801561001057600080fd5b50611e2f806100206000396000f3fe60806040523480156200001157600080fd5b50600436106200002e5760003560e01c80638cc23ce01462000033575b600080fd5b6200004a6200004436600462000370565b62000066565b6040516001600160a01b03909116815260200160405180910390f35b604080513360208201529081018290526000908190606001604051602081830303815290604052805190602001208c8c8c8b8b8b8b8b604051620000aa90620000ef565b620000bd98979695949392919062000590565b8190604051809103906000f5905080158015620000de573d6000803e3d6000fd5b509c9b505050505050505050505050565b6117be806200063c83390190565b634e487b7160e01b600052604160045260246000fd5b604051610200810167ffffffffffffffff811182821017156200013a576200013a620000fd565b60405290565b600082601f8301126200015257600080fd5b813567ffffffffffffffff80821115620001705762000170620000fd565b604051601f8301601f19908116603f011681019082821181831017156200019b576200019b620000fd565b81604052838152866020858801011115620001b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b80356001600160a01b0381168114620001ed57600080fd5b919050565b6000608082840312156200020557600080fd5b6040516080810181811067ffffffffffffffff821117156200022b576200022b620000fd565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600061026082840312156200027057600080fd5b6200027a62000113565b90506200028782620001d5565b81526200029760208301620001d5565b6020820152620002aa60408301620001d5565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016062000315818401620001d5565b9082015261018062000329838201620001d5565b908201526101a06200033d838201620001d5565b908201526101c062000351838201620001d5565b908201526101e06200036684848301620001f2565b9082015292915050565b6000806000806000806000806000806103808b8d0312156200039157600080fd5b8a3567ffffffffffffffff80821115620003aa57600080fd5b620003b88e838f0162000140565b9b50620003c98e60208f016200025c565b9a50620003da6102808e01620001d5565b99506102a08d0135915080821115620003f257600080fd5b50620004018d828e0162000140565b975050620004136102c08c01620001d5565b9550620004246102e08c01620001d5565b9450620004356103008c01620001d5565b9350620004466103208c01620001d5565b9250620004576103408c01620001d5565b91506103608b013590509295989b9194979a5092959850565b80516001600160a01b0316825260208101516200049860208401826001600160a01b03169052565b506040810151620004b460408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015162000527828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e090810151805191830191909152602081015161020083015260408101516102208301526060015161024090910152565b60006103408083528a518082850152600091505b80821015620005c8576020828d0101516103608386010152602082019150620005a4565b6103609150600082828601015281601f19601f83011685010192505050620005f4602083018a62000470565b6001600160a01b039788166102808301529587166102a08201529386166102c08501529185166102e08401528416610300830152909216610320909201919091529291505056fe6103206040523480156200001257600080fd5b50604051620017be380380620017be833981016040819052620000359162000346565b6001600081905587516001600160a01b0390811660809081526020808b0151831660a0908152918b01516101a052908a01516101c05260c0808b01516101e090815260e0808d015161020052610120808e0151909352610100808e0151909152610140808e0151909152908c01805151909252815190920151909152805160409081015161016052905160609081015161018052908a01518216610240528901516102605287166102205288908890889088908890889088908890620000fc898262000517565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e052166103005250620005e39950505050505050505050565b634e487b7160e01b600052604160045260246000fd5b60405161020081016001600160401b038111828210171562000173576200017362000137565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620001a457620001a462000137565b604052919050565b80516001600160a01b0381168114620001c457600080fd5b919050565b600060808284031215620001dc57600080fd5b604051608081016001600160401b038111828210171562000201576200020162000137565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200024657600080fd5b620002506200014d565b90506200025d82620001ac565b81526200026d60208301620001ac565b60208201526200028060408301620001ac565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e0820152610100808301518183015250610120808301518183015250610140808301518183015250610160620002eb818401620001ac565b90820152610180620002ff838201620001ac565b908201526101a062000313838201620001ac565b908201526101c062000327838201620001ac565b908201526101e06200033c84848301620001c9565b9082015292915050565b600080600080600080600080610340898b0312156200036457600080fd5b88516001600160401b03808211156200037c57600080fd5b818b0191508b601f8301126200039157600080fd5b815181811115620003a657620003a662000137565b60209150620003be601f8201601f1916830162000179565b8181528d83838601011115620003d357600080fd5b60005b82811015620003f3578481018401518282018501528301620003d6565b506000838383010152809b5050506200040f8c828d0162000232565b98505050620004226102808a01620001ac565b9550620004336102a08a01620001ac565b9450620004446102c08a01620001ac565b9350620004556102e08a01620001ac565b9250620004666103008a01620001ac565b9150620004776103208a01620001ac565b90509295985092959890939650565b600181811c908216806200049b57607f821691505b602082108103620004bc57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000512576000816000526020600020601f850160051c81016020861015620004ed5750805b601f850160051c820191505b818110156200050e57828155600101620004f9565b5050505b505050565b81516001600160401b0381111562000533576200053362000137565b6200054b8162000544845462000486565b84620004c2565b602080601f8311600181146200058357600084156200056a5750858301515b600019600386901b1c1916600185901b1785556200050e565b600085815260208120601f198616915b82811015620005b45788860151825594840194600190910190840162000593565b5085821015620005d35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051610300516110ad62000711600039600081816105ee0152818161065a01526107530152600081816105660152818161078301526107e101526000818161051f015261097c0152600081816105ba01526106f00152600081816101ce015281816103900152818161062a0152818161068c015281816106be01528181610724015281816107b6015281816108120152818161094a01526109af0152600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506110ad6000f3fe6080604052600436106101b75760003560e01c80639032c726116100ec578063d899e1121161008a578063e44808bc11610064578063e44808bc14610588578063eac3e799146105a8578063f3f70707146105dc578063f698da2514610610576101b7565b8063d899e11214610554578063dbbe807014610541578063ded06231146103ca576101b7565b8063a6e8a859116100c6578063a6e8a8591461050d578063ab033ea9146102c7578063cba2e58d14610541578063cbc1343414610304576101b7565b80639032c726146104cd5780639cd241af146104ed578063a22cb4651461049a576101b7565b806330adf81f116101595780634c2ac1d9116101335780634c2ac1d91461046c5780634ed2d6ac1461047f5780637180c8ca1461049a57806377d05ff4146104ba576101b7565b806330adf81f146103f85780633e691db91461042c578063414f826d1461044c576101b7565b806317fad7fc1161019557806317fad7fc1461033e5780631c0f12b61461035e57806321b57d531461037e57806329b23fc1146103ca576101b7565b806301681a62146102c757806302329a29146102e9578063074a6de914610304575b3480156101c357600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610206929190610a85565b600060405180830381855af49150503d8060008114610241576040519150601f19603f3d011682016040523d82523d6000602084013e610246565b606091505b5091509150811561026a57604051638bb0a34b60e01b815260040160405180910390fd5b600061027582610a95565b90506001600160e01b03198116636e64089360e11b1461029757815160208301fd5b8151600319810160048401908152926102b891810160200190602401610b06565b80519650602001945050505050f35b3480156102d357600080fd5b506102e76102e2366004610bcb565b610625565b005b3480156102f557600080fd5b506102e76102e2366004610c04565b34801561031057600080fd5b5061032461031f366004610c31565b610652565b604080519283526020830191909152015b60405180910390f35b34801561034a57600080fd5b506102e7610359366004610ccd565b610687565b34801561036a57600080fd5b506102e7610379366004610d62565b6106b9565b34801561038a57600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610335565b3480156103d657600080fd5b506103ea6103e5366004610daa565b6106e9565b604051908152602001610335565b34801561040457600080fd5b506103ea7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561043857600080fd5b506103ea610447366004610e04565b61071d565b34801561045857600080fd5b506102e7610467366004610e41565b61074e565b6103ea61047a366004610e63565b61077c565b34801561048b57600080fd5b506102e7610379366004610ec7565b3480156104a657600080fd5b506102e76104b5366004610f11565b6107b1565b6103ea6104c8366004610c31565b6107da565b3480156104d957600080fd5b506102e76104e8366004610f46565b61080d565b3480156104f957600080fd5b506102e7610508366004610fc4565b610945565b34801561051957600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b61032461054f366004610daa565b610974565b34801561056057600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b34801561059457600080fd5b506102e76105a3366004610ffc565b6109aa565b3480156105b457600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b3480156105e857600080fd5b506103b27f000000000000000000000000000000000000000000000000000000000000000081565b34801561061c57600080fd5b506103ea6109db565b61064e7f0000000000000000000000000000000000000000000000000000000000000000610a69565b5050565b60008061067e7f0000000000000000000000000000000000000000000000000000000000000000610a69565b50935093915050565b6106b07f0000000000000000000000000000000000000000000000000000000000000000610a69565b50505050505050565b6106e27f0000000000000000000000000000000000000000000000000000000000000000610a69565b5050505050565b60006107147f0000000000000000000000000000000000000000000000000000000000000000610a69565b50949350505050565b60006107487f0000000000000000000000000000000000000000000000000000000000000000610a69565b50919050565b6107777f0000000000000000000000000000000000000000000000000000000000000000610a69565b505050565b60006107a77f0000000000000000000000000000000000000000000000000000000000000000610a69565b5095945050505050565b6107777f0000000000000000000000000000000000000000000000000000000000000000610a69565b60006108057f0000000000000000000000000000000000000000000000000000000000000000610a69565b509392505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108426109db565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516108eb919061105b565b600060405180830381855af49150503d8060008114610926576040519150601f19603f3d011682016040523d82523d6000602084013e61092b565b606091505b50915091508161093d57805160208201fd5b805160208201f35b61096e7f0000000000000000000000000000000000000000000000000000000000000000610a69565b50505050565b6000806109a07f0000000000000000000000000000000000000000000000000000000000000000610a69565b5094509492505050565b6109d37f0000000000000000000000000000000000000000000000000000000000000000610a69565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b03166000366040516108eb9291905b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015610ac45780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610afd578181015183820152602001610ae5565b50506000910152565b600060208284031215610b1857600080fd5b815167ffffffffffffffff80821115610b3057600080fd5b818401915084601f830112610b4457600080fd5b815181811115610b5657610b56610acc565b604051601f8201601f19908116603f01168101908382118183101715610b7e57610b7e610acc565b81604052828152876020848701011115610b9757600080fd5b610ba8836020830160208801610ae2565b979650505050505050565b6001600160a01b0381168114610bc857600080fd5b50565b600060208284031215610bdd57600080fd5b8135610be881610bb3565b9392505050565b80358015158114610bff57600080fd5b919050565b600060208284031215610c1657600080fd5b610be882610bef565b60006060828403121561074857600080fd5b600080600060608486031215610c4657600080fd5b8335925060208401359150604084013567ffffffffffffffff811115610c6b57600080fd5b610c7786828701610c1f565b9150509250925092565b60008083601f840112610c9357600080fd5b50813567ffffffffffffffff811115610cab57600080fd5b6020830191508360208260051b8501011115610cc657600080fd5b9250929050565b60008060008060008060808789031215610ce657600080fd5b8635610cf181610bb3565b95506020870135610d0181610bb3565b9450604087013567ffffffffffffffff80821115610d1e57600080fd5b610d2a8a838b01610c81565b90965094506060890135915080821115610d4357600080fd5b50610d5089828a01610c81565b979a9699509497509295939492505050565b60008060008060808587031215610d7857600080fd5b843593506020850135610d8a81610bb3565b92506040850135610d9a81610bb3565b9396929550929360600135925050565b60008060008060808587031215610dc057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610dec57600080fd5b610df887828801610c1f565b91505092959194509250565b600060208284031215610e1657600080fd5b813567ffffffffffffffff811115610e2d57600080fd5b610e3984828501610c1f565b949350505050565b60008060408385031215610e5457600080fd5b50508035926020909101359150565b600080600080600060a08688031215610e7b57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115610eae57600080fd5b610eba88828901610c1f565b9150509295509295909350565b60008060008060808587031215610edd57600080fd5b843593506020850135610eef81610bb3565b9250604085013591506060850135610f0681610bb3565b939692955090935050565b60008060408385031215610f2457600080fd5b8235610f2f81610bb3565b9150610f3d60208401610bef565b90509250929050565b600080600080600080600060e0888a031215610f6157600080fd5b8735610f6c81610bb3565b96506020880135610f7c81610bb3565b9550610f8a60408901610bef565b945060608801359350608088013560ff81168114610fa757600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215610fd957600080fd5b833592506020840135610feb81610bb3565b929592945050506040919091013590565b600080600080600060a0868803121561101457600080fd5b85359450602086013561102681610bb3565b9350604086013561103681610bb3565b925060608601359150608086013561104d81610bb3565b809150509295509295909350565b6000825161106d818460208701610ae2565b919091019291505056fea26469706673582212203e4f3a8481c870fb78efda3610b98045a65f9b1e4b8fa14a6eace0b4c24ce80e64736f6c63430008160033a2646970667358221220b1723061b5a6d08d36de53032c8cdaacb871749e590180c7c00ea0eaf86e2ac064736f6c63430008160033',
    methodIdentifiers: {
        "deployHyperdrive(string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),address,bytes,address,address,address,address,address,bytes32)": "8cc23ce0"
    }
};
