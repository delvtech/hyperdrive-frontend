export const MockFixedPointMath = {
    abi: [
        {
            "type": "function",
            "name": "divDown",
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "b",
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
            "name": "divUp",
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "b",
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
            "name": "exp",
            "inputs": [
                {
                    "name": "x",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [
                {
                    "name": "r",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "ln",
            "inputs": [
                {
                    "name": "x",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "mulDivDown",
            "inputs": [
                {
                    "name": "x",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "d",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "z",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "mulDivUp",
            "inputs": [
                {
                    "name": "x",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "d",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "z",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "mulDown",
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "b",
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
            "name": "mulUp",
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "b",
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
            "name": "pow",
            "inputs": [
                {
                    "name": "x",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "y",
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
            "name": "updateWeightedAverage",
            "inputs": [
                {
                    "name": "_average",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_totalWeight",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_delta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_deltaWeight",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_isAdding",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [
                {
                    "name": "average",
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
            "name": "LnInvalidInput",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b50610938806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b13660046107d1565b610173565b60405190815260200160405180910390f35b6100b66100d63660046107f3565b61018a565b6100b66100e93660046107d1565b6101a1565b6100b66100fc36600461081f565b6101ae565b6100b661010f366004610871565b6101c9565b6100b66101223660046107d1565b6101dc565b6100b66101353660046107f3565b6101e9565b6100b66101483660046107d1565b6101f7565b6100b661015b366004610871565b610204565b6100b661016e3660046107d1565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102cd565b979650505050505050565b6000806101d583610371565b9392505050565b60008061018084846105a0565b6000806101988585856105b1565b60008061018084846105cf565b6000806101d5836105e4565b6000806101808484610779565b60006101d58383670de0b6b3a76400006105b1565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b600061028c8361078e565b905060006102a161029c8661078e565b610371565b90508181026102b8670de0b6b3a7640000826108a0565b90506102c3816105e4565b9695505050505050565b6000826000036102de575084610198565b8115610337576103156102f184876108dc565b6102fb858761021d565b610305888a61021d565b61030f91906108dc565b906105a0565b9050600061032385886107bc565b905080821015610331578091505b50610198565b82850361034657506000610198565b6102c361035384876108ef565b61035d8587610779565b610367888a61021d565b61030f91906108ef565b60008082136103935760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061041f9084901c61078e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60006101d583670de0b6b3a7640000845b60008260001904841183021582026105c857600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e1982136105ff57506000919050565b680755bf798b4a1bf1e58212610628576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906102c374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61078e565b60006101d58383670de0b6b3a7640000610232565b60006001600160ff1b038211156107b85760405163396ea70160e11b815260040160405180910390fd5b5090565b60008183116107cb57826101d5565b50919050565b600080604083850312156107e457600080fd5b50508035926020909101359150565b60008060006060848603121561080857600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561083757600080fd5b853594506020860135935060408601359250606086013591506080860135801515811461086357600080fd5b809150509295509295909350565b60006020828403121561088357600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b6000826108bd57634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156108d7576108d761088a565b500590565b808201808211156101845761018461088a565b818103818111156101845761018461088a56fea2646970667358221220781394a6765561d243f4643f1cc785922538aa352f5e0e1d452aba2c38601b1b64736f6c63430008140033',
    methodIdentifiers: {
        "divDown(uint256,uint256)": "9ba5f52e",
        "divUp(uint256,uint256)": "cbe8623f",
        "exp(int256)": "e46751e3",
        "ln(int256)": "8e6f2353",
        "mulDivDown(uint256,uint256,uint256)": "b67bee04",
        "mulDivUp(uint256,uint256,uint256)": "12bd6ac0",
        "mulDown(uint256,uint256)": "0c9b9881",
        "mulUp(uint256,uint256)": "f3e4f87c",
        "pow(uint256,uint256)": "2e4c697f",
        "updateWeightedAverage(uint256,uint256,uint256,uint256,bool)": "81e5f7c9"
    }
};
