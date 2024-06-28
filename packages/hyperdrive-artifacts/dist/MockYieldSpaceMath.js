export const MockYieldSpaceMath = {
    abi: [
        {
            "type": "function",
            "name": "calculateBondsOutGivenSharesInDown",
            "inputs": [
                {
                    "name": "ze",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "dz",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "t",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "c",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mu",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateMaxBuyBondsOutSafe",
            "inputs": [
                {
                    "name": "ze",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "t",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "c",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mu",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateMaxBuySharesInSafe",
            "inputs": [
                {
                    "name": "ze",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "t",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "c",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mu",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateMaxSellBondsInSafe",
            "inputs": [
                {
                    "name": "z",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "zeta",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "zMin",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "t",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "c",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mu",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateSharesInGivenBondsOutDown",
            "inputs": [
                {
                    "name": "ze",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "dy",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "t",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "c",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mu",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateSharesInGivenBondsOutUp",
            "inputs": [
                {
                    "name": "ze",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "dy",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "t",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "c",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mu",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateSharesOutGivenBondsInDown",
            "inputs": [
                {
                    "name": "ze",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "dy",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "t",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "c",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mu",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateSharesOutGivenBondsInDownSafe",
            "inputs": [
                {
                    "name": "ze",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "dy",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "t",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "c",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mu",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "kDown",
            "inputs": [
                {
                    "name": "ze",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "t",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "c",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mu",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "kUp",
            "inputs": [
                {
                    "name": "ze",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "t",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "c",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mu",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "error",
            "name": "ExpInvalidExponent",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "LnInvalidInput",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b50610fa0806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806386c85e101161006657806386c85e101461012a578063a4a6f9d91461013d578063a9afa37314610150578063bc50ebe614610163578063d79d08351461017657600080fd5b80630aea7563146100a357806327d0e265146100c95780632e74108c146100dc5780633ee4114a146100ef5780635880b9fd14610117575b600080fd5b6100b66100b1366004610df8565b610189565b6040519081526020015b60405180910390f35b6100b66100d7366004610e33565b6101a4565b6100b66100ea366004610e33565b6101c1565b6101026100fd366004610e33565b6101d2565b604080519283529015156020830152016100c0565b610102610125366004610df8565b6101f9565b6100b6610138366004610e33565b61021e565b6100b661014b366004610e33565b61022f565b61010261015e366004610df8565b610240565b610102610171366004610e76565b610253565b6100b6610184366004610df8565b61027c565b600080610199878787878761028c565b979650505050505050565b6000806101b58888888888886102cb565b98975050505050505050565b6000806101b58888888888886102f9565b6000806000806101e68a8a8a8a8a8a61030a565b909450925050505b965096945050505050565b60008060008061020c89898989896103d1565b909450925050505b9550959350505050565b6000806101b5888888888888610487565b6000806101b5888888888888610534565b60008060008061020c89898989896105f5565b6000806000806102688b8b8b8b8b8b8b61069e565b909450925050505b97509795505050505050565b60008061019987878787876107a0565b600061029885856107c5565b6102b76102af866102a9868b61083c565b906107c5565b859085610858565b6102c19190610ed8565b9695505050505050565b6000806102dc88888888888861030a565b9092509050806102ee576102ee61087e565b509695505050505050565b6000806102dc888888888888610897565b600080600061031c898988888861028c565b905061032c866102a9898b610ed8565b9750878110156103435760008092509250506101ee565b878103610351818688610858565b9050670de0b6b3a764000081106103855761037e610377670de0b6b3a76400008961096e565b82906107c5565b905061039d565b61039a610377670de0b6b3a764000089610983565b90505b6103a7818661096e565b9050808a10156103bf576000809350935050506101ee565b90980398600198509650505050505050565b60008060006103e388888888886107a0565b9050600061040e670de0b6b3a76400006103fd888861096e565b6104079190610ed8565b8390610983565b9050670de0b6b3a7640000811061043b57610434610377670de0b6b3a764000089610983565b9050610453565b610450610377670de0b6b3a76400008961096e565b90505b61045d8186610983565b90508881101561047557600080935093505050610214565b97909703976001975095505050505050565b600080610497888887878761028c565b90506104b1856102a96104aa898c610ed8565b8690610998565b97506104be8489856109a9565b9750878110156104d0576104d061087e565b878103670de0b6b3a764000081106104fe576104f7610377670de0b6b3a76400008861096e565b9050610516565b610513610377670de0b6b3a764000088610983565b90505b808810156105265761052661087e565b909603979650505050505050565b60008061054488888787876107a0565b9050858710156105565761055661087e565b958590039561056587866107c5565b9650868110156105775761057761087e565b8681036105858185876109a9565b9050670de0b6b3a764000081106105b2576105ab610377670de0b6b3a764000088610983565b90506105ca565b6105c7610377670de0b6b3a76400008861096e565b90505b6105d48185610983565b9050888110156105e6576105e661087e565b97909703979650505050505050565b6000806000610607888888888861028c565b90506000610632670de0b6b3a76400006106218888610983565b61062b9190610ed8565b839061096e565b9050670de0b6b3a7640000811061065f57610658610377670de0b6b3a76400008961096e565b9050610677565b610674610377670de0b6b3a764000089610983565b90505b8088101561068d57600080935093505050610214565b909603976001975095505050505050565b60008060008812156106c0576106b388610eeb565b6106bd9087610ed8565b95505b6000806106cd8b8b6109c7565b91509150806106e457600080935093505050610270565b60006106f3838b8a8a8a6107a0565b905060006107106107088a6102a98a8e61083c565b899089610858565b90508082101561072a576000809550955050505050610270565b808203670de0b6b3a7640000811061075857610751610377670de0b6b3a76400008c610983565b9050610770565b61076d610377670de0b6b3a76400008c61096e565b90505b8b81101561078957600080965096505050505050610270565b9a909a039c60019c509a5050505050505050505050565b60006107ac85856107c5565b6102b76107bd866102a9868b610998565b8590856109a9565b6000816000036107de5750670de0b6b3a7640000610836565b826000036107ee57506000610836565b60006107f983610a06565b9050600061080e61080986610a06565b610a34565b9050818102610825670de0b6b3a764000082610f07565b905061083081610c63565b93505050505b92915050565b60006108518383670de0b6b3a7640000610858565b9392505050565b600082600019048411830215820261086f57600080fd5b50910281810615159190040190565b60405163bb55fd2760e01b815260040160405180910390fd5b60008060006108a9898988888861028c565b9050868810156108c05760008092509250506101ee565b96869003966108cf88876107c5565b9750878110156108e65760008092509250506101ee565b8781036108f4818688610858565b9050670de0b6b3a764000081106109215761091a610377670de0b6b3a76400008961096e565b9050610939565b610936610377670de0b6b3a764000089610983565b90505b610943818661096e565b90508981101561095b576000809350935050506101ee565b9890980398600198509650505050505050565b600061085183670de0b6b3a764000084610858565b600061085183670de0b6b3a7640000846109a9565b60006108518383670de0b6b3a76400005b60008260001904841183021582026109c057600080fd5b5091020490565b6000806000836109d686610a06565b6109e09190610f43565b905060008112156109f85760008092509250506109ff565b9150600190505b9250929050565b60006001600160ff1b03821115610a305760405163396ea70160e11b815260040160405180910390fd5b5090565b6000808213610a565760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190610ae29084901c610a06565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213610c7e57506000919050565b680755bf798b4a1bf1e58212610ca7576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906102c174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610a06565b600080600080600060a08688031215610e1057600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60008060008060008060c08789031215610e4c57600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a031215610e9157600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561083657610836610ec2565b6000600160ff1b8201610f0057610f00610ec2565b5060000390565b600082610f2457634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615610f3e57610f3e610ec2565b500590565b8181036000831280158383131683831282161715610f6357610f63610ec2565b509291505056fea2646970667358221220ad48eaeaf156a2eab7f321061264cb533d5107a7ade5c75704d5d82b1475298364736f6c63430008140033',
    methodIdentifiers: {
        "calculateBondsOutGivenSharesInDown(uint256,uint256,uint256,uint256,uint256,uint256)": "86c85e10",
        "calculateMaxBuyBondsOutSafe(uint256,uint256,uint256,uint256,uint256)": "a9afa373",
        "calculateMaxBuySharesInSafe(uint256,uint256,uint256,uint256,uint256)": "5880b9fd",
        "calculateMaxSellBondsInSafe(uint256,int256,uint256,uint256,uint256,uint256,uint256)": "bc50ebe6",
        "calculateSharesInGivenBondsOutDown(uint256,uint256,uint256,uint256,uint256,uint256)": "a4a6f9d9",
        "calculateSharesInGivenBondsOutUp(uint256,uint256,uint256,uint256,uint256,uint256)": "2e74108c",
        "calculateSharesOutGivenBondsInDown(uint256,uint256,uint256,uint256,uint256,uint256)": "27d0e265",
        "calculateSharesOutGivenBondsInDownSafe(uint256,uint256,uint256,uint256,uint256,uint256)": "3ee4114a",
        "kDown(uint256,uint256,uint256,uint256,uint256)": "d79d0835",
        "kUp(uint256,uint256,uint256,uint256,uint256)": "0aea7563"
    }
};
