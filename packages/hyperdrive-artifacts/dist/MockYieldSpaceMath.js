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
    bytecode: '0x608060405234801561001057600080fd5b50610fc6806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806386c85e101161006657806386c85e101461012a578063a4a6f9d91461013d578063a9afa37314610150578063bc50ebe614610163578063d79d08351461017657600080fd5b80630aea7563146100a357806327d0e265146100c95780632e74108c146100dc5780633ee4114a146100ef5780635880b9fd14610117575b600080fd5b6100b66100b1366004610e1e565b610189565b6040519081526020015b60405180910390f35b6100b66100d7366004610e59565b6101a4565b6100b66100ea366004610e59565b6101c1565b6101026100fd366004610e59565b6101d2565b604080519283529015156020830152016100c0565b610102610125366004610e1e565b6101f9565b6100b6610138366004610e59565b61021e565b6100b661014b366004610e59565b61022f565b61010261015e366004610e1e565b610240565b610102610171366004610e9c565b610253565b6100b6610184366004610e1e565b61027c565b600080610199878787878761028c565b979650505050505050565b6000806101b58888888888886102cb565b98975050505050505050565b6000806101b58888888888886102f9565b6000806000806101e68a8a8a8a8a8a61030a565b909450925050505b965096945050505050565b60008060008061020c89898989896103d1565b909450925050505b9550959350505050565b6000806101b5888888888888610487565b6000806101b5888888888888610498565b60008060008061020c8989898989610559565b6000806000806102688b8b8b8b8b8b8b610602565b909450925050505b97509795505050505050565b6000806101998787878787610704565b60006102988585610729565b6102b76102af866102a9868b6107a0565b90610729565b8590856107bc565b6102c19190610efe565b9695505050505050565b6000806102dc88888888888861030a565b9092509050806102ee576102ee6107e2565b509695505050505050565b6000806102dc8888888888886107fb565b600080600061031c898988888861028c565b905061032c866102a9898b610efe565b9750878110156103435760008092509250506101ee565b8781036103518186886107bc565b9050670de0b6b3a764000081106103855761037e610377670de0b6b3a7640000896108d2565b8290610729565b905061039d565b61039a610377670de0b6b3a7640000896108e7565b90505b6103a781866108d2565b9050808a10156103bf576000809350935050506101ee565b90980398600198509650505050505050565b60008060006103e38888888888610704565b9050600061040e670de0b6b3a76400006103fd88886108d2565b6104079190610efe565b83906108e7565b9050670de0b6b3a7640000811061043b57610434610377670de0b6b3a7640000896108e7565b9050610453565b610450610377670de0b6b3a7640000896108d2565b90505b61045d81866108e7565b90508881101561047557600080935093505050610214565b97909703976001975095505050505050565b6000806102dc8888888888886108fc565b6000806104a88888878787610704565b9050858710156104ba576104ba6107e2565b95859003956104c98786610729565b9650868110156104db576104db6107e2565b8681036104e98185876109ba565b9050670de0b6b3a764000081106105165761050f610377670de0b6b3a7640000886108e7565b905061052e565b61052b610377670de0b6b3a7640000886108d2565b90505b61053881856108e7565b90508881101561054a5761054a6107e2565b97909703979650505050505050565b600080600061056b888888888861028c565b90506000610596670de0b6b3a764000061058588886108e7565b61058f9190610efe565b83906108d2565b9050670de0b6b3a764000081106105c3576105bc610377670de0b6b3a7640000896108d2565b90506105db565b6105d8610377670de0b6b3a7640000896108e7565b90505b808810156105f157600080935093505050610214565b909603976001975095505050505050565b60008060008812156106245761061788610f11565b6106219087610efe565b95505b6000806106318b8b6109d8565b915091508061064857600080935093505050610270565b6000610657838b8a8a8a610704565b9050600061067461066c8a6102a98a8e6107a0565b8990896107bc565b90508082101561068e576000809550955050505050610270565b808203670de0b6b3a764000081106106bc576106b5610377670de0b6b3a76400008c6108e7565b90506106d4565b6106d1610377670de0b6b3a76400008c6108d2565b90505b8b8110156106ed57600080965096505050505050610270565b9a909a039c60019c509a5050505050505050505050565b60006107108585610729565b6102b7610721866102a9868b610a17565b8590856109ba565b6000816000036107425750670de0b6b3a764000061079a565b826000036107525750600061079a565b600061075d83610a2c565b9050600061077261076d86610a2c565b610a5a565b9050818102610789670de0b6b3a764000082610f2d565b905061079481610c89565b93505050505b92915050565b60006107b58383670de0b6b3a76400006107bc565b9392505050565b60008260001904841183021582026107d357600080fd5b50910281810615159190040190565b60405163bb55fd2760e01b815260040160405180910390fd5b600080600061080d898988888861028c565b9050868810156108245760008092509250506101ee565b96869003966108338887610729565b97508781101561084a5760008092509250506101ee565b8781036108588186886107bc565b9050670de0b6b3a764000081106108855761087e610377670de0b6b3a7640000896108d2565b905061089d565b61089a610377670de0b6b3a7640000896108e7565b90505b6108a781866108d2565b9050898110156108bf576000809350935050506101ee565b9890980398600198509650505050505050565b60006107b583670de0b6b3a7640000846107bc565b60006107b583670de0b6b3a7640000846109ba565b600080600061090e898988888861028c565b9050610928866102a96109218a8d610efe565b8790610a17565b9850610935858a866109ba565b98508881101561094c5760008092509250506101ee565b888103670de0b6b3a7640000811061097a57610973610377670de0b6b3a7640000896108d2565b9050610992565b61098f610377670de0b6b3a7640000896108e7565b90505b808910156109a8576000809350935050506101ee565b90970398600198509650505050505050565b60008260001904841183021582026109d157600080fd5b5091020490565b6000806000836109e786610a2c565b6109f19190610f69565b90506000811215610a09576000809250925050610a10565b9150600190505b9250929050565b60006107b58383670de0b6b3a76400006109ba565b60006001600160ff1b03821115610a565760405163396ea70160e11b815260040160405180910390fd5b5090565b6000808213610a7c5760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190610b089084901c610a2c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213610ca457506000919050565b680755bf798b4a1bf1e58212610ccd576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906102c174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610a2c565b600080600080600060a08688031215610e3657600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60008060008060008060c08789031215610e7257600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080600080600080600060e0888a031215610eb757600080fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561079a5761079a610ee8565b6000600160ff1b8201610f2657610f26610ee8565b5060000390565b600082610f4a57634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615610f6457610f64610ee8565b500590565b8181036000831280158383131683831282161715610f8957610f89610ee8565b509291505056fea2646970667358221220b98259f778b77e7f4a8a53085209401c9f781ea523abbbb306ed2f47617ef52c64736f6c63430008140033',
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
