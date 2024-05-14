export const MockFixedPointMath = {
    abi: [
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LnInvalidInput",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "a",
                    "type": "int256"
                }
            ],
            "name": "abs",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "divDown",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "divUp",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "x",
                    "type": "int256"
                }
            ],
            "name": "exp",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "r",
                    "type": "int256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "x",
                    "type": "int256"
                }
            ],
            "name": "ln",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "d",
                    "type": "uint256"
                }
            ],
            "name": "mulDivDown",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "z",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "d",
                    "type": "uint256"
                }
            ],
            "name": "mulDivUp",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "z",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "mulDown",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "mulUp",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "y",
                    "type": "uint256"
                }
            ],
            "name": "pow",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_average",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalWeight",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_delta",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deltaWeight",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_isAdding",
                    "type": "bool"
                }
            ],
            "name": "updateWeightedAverage",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "average",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b50610996806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638e6f2353116100715780638e6f23531461011f5780639ba5f52e14610132578063b67bee0414610145578063cbe8623f14610158578063e46751e31461016b578063f3e4f87c1461017e57600080fd5b80630c9b9881146100ae57806312bd6ac0146100d35780631b5ac4b5146100e65780632e4c697f146100f957806381e5f7c91461010c575b600080fd5b6100c16100bc366004610813565b610191565b60405190815260200160405180910390f35b6100c16100e1366004610835565b6101a8565b6100c16100f4366004610861565b6101bf565b6100c1610107366004610813565b6101d2565b6100c161011a36600461087a565b6101df565b6100c161012d366004610861565b6101fa565b6100c1610140366004610813565b610206565b6100c1610153366004610835565b610213565b6100c1610166366004610813565b610221565b6100c1610179366004610861565b61022e565b6100c161018c366004610813565b61023a565b60008061019e8484610247565b9150505b92915050565b6000806101b685858561025c565b95945050505050565b6000806101cb83610282565b9392505050565b60008061019e848461029a565b6000806101ef878787878761030f565b979650505050505050565b6000806101cb836103b3565b60008061019e84846105e2565b6000806101b68585856105f3565b60008061019e8484610611565b6000806101cb83610626565b60008061019e84846107bb565b60006101cb8383670de0b6b3a76400006105f3565b600082600019048411830215820261027357600080fd5b50910281810615159190040190565b600080821261029157816101a2565b6101a2826108e2565b6000816000036102b35750670de0b6b3a76400006101a2565b826000036102c3575060006101a2565b60006102ce836107d0565b905060006102e36102de866107d0565b6103b3565b90508181026102fa670de0b6b3a7640000826108fe565b905061030581610626565b9695505050505050565b6000826000036103205750846101b6565b811561037957610357610333848761093a565b61033d8587610247565b610347888a610247565b610351919061093a565b906105e2565b9050600061036585886107fe565b905080821015610373578091505b506101b6565b828503610388575060006101b6565b610305610395848761094d565b61039f85876107bb565b6103a9888a610247565b610351919061094d565b60008082136103d55760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906104619084901c6107d0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60006101cb83670de0b6b3a7640000845b600082600019048411830215820261060a57600080fd5b5091020490565b60006101cb83670de0b6b3a76400008461025c565b6000680248ce36a70cb26b3e19821361064157506000919050565b680755bf798b4a1bf1e5821261066a576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061030574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6107d0565b60006101cb8383670de0b6b3a764000061025c565b60006001600160ff1b038211156107fa5760405163396ea70160e11b815260040160405180910390fd5b5090565b600081831161080d57826101cb565b50919050565b6000806040838503121561082657600080fd5b50508035926020909101359150565b60008060006060848603121561084a57600080fd5b505081359360208301359350604090920135919050565b60006020828403121561087357600080fd5b5035919050565b600080600080600060a0868803121561089257600080fd5b85359450602086013593506040860135925060608601359150608086013580151581146108be57600080fd5b809150509295509295909350565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b82016108f7576108f76108cc565b5060000390565b60008261091b57634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615610935576109356108cc565b500590565b808201808211156101a2576101a26108cc565b818103818111156101a2576101a26108cc56fea2646970667358221220795fad586f45812f66e3a2877aae3e293fdc66badada42b0253f64fd1e5c1b7f64736f6c63430008140033',
    methodIdentifiers: {
        "abs(int256)": "1b5ac4b5",
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
