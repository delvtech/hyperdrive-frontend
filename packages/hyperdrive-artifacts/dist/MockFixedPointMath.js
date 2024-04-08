export const MockFixedPointMath = {
    "abi": [
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
    "bytecode": {
        "object": "0x608060405234801561001057600080fd5b506109cb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638e6f2353116100715780638e6f23531461011f5780639ba5f52e14610132578063b67bee0414610145578063cbe8623f14610158578063e46751e31461016b578063f3e4f87c1461017e57600080fd5b80630c9b9881146100ae57806312bd6ac0146100d35780631b5ac4b5146100e65780632e4c697f146100f957806381e5f7c91461010c575b600080fd5b6100c16100bc366004610848565b610191565b60405190815260200160405180910390f35b6100c16100e136600461086a565b6101a8565b6100c16100f4366004610896565b6101bf565b6100c1610107366004610848565b6101d2565b6100c161011a3660046108af565b6101df565b6100c161012d366004610896565b6101fa565b6100c1610140366004610848565b610206565b6100c161015336600461086a565b610213565b6100c1610166366004610848565b610221565b6100c1610179366004610896565b61022e565b6100c161018c366004610848565b61023a565b60008061019e8484610247565b9150505b92915050565b6000806101b685858561025c565b95945050505050565b6000806101cb83610282565b9392505050565b60008061019e848461029a565b6000806101ef878787878761030f565b979650505050505050565b6000806101cb836103d2565b60008061019e8484610601565b6000806101b6858585610612565b60008061019e8484610630565b6000806101cb83610645565b60008061019e84846107da565b60006101cb8383670de0b6b3a7640000610612565b600082600019048411830215820261027357600080fd5b50910281810615159190040190565b600080821261029157816101a2565b6101a282610917565b6000816000036102b35750670de0b6b3a76400006101a2565b826000036102c3575060006101a2565b60006102ce836107ef565b905060006102e36102de866107ef565b6103d2565b90508181026102fa670de0b6b3a764000082610933565b905061030581610645565b9695505050505050565b6000826000036103205750846101b6565b811561039857610357610333848761096f565b61033d8587610247565b610347888a610247565b610351919061096f565b90610601565b90506000610365858861081d565b905060006103738689610832565b90508183101561038557819250610391565b80831115610391578092505b50506101b6565b8285036103a7575060006101b6565b6103056103b48487610982565b6103be85876107da565b6103c8888a610247565b6103519190610982565b60008082136103f45760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906104809084901c6107ef565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60006101cb83670de0b6b3a7640000845b600082600019048411830215820261062957600080fd5b5091020490565b60006101cb83670de0b6b3a76400008461025c565b6000680248ce36a70cb26b3e19821361066057506000919050565b680755bf798b4a1bf1e58212610689576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061030574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6107ef565b60006101cb8383670de0b6b3a764000061025c565b60006001600160ff1b038211156108195760405163396ea70160e11b815260040160405180910390fd5b5090565b600081831161082c57826101cb565b50919050565b600081831161084157816101cb565b5090919050565b6000806040838503121561085b57600080fd5b50508035926020909101359150565b60008060006060848603121561087f57600080fd5b505081359360208301359350604090920135919050565b6000602082840312156108a857600080fd5b5035919050565b600080600080600060a086880312156108c757600080fd5b85359450602086013593506040860135925060608601359150608086013580151581146108f357600080fd5b809150509295509295909350565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b820161092c5761092c610901565b5060000390565b60008261095057634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561096a5761096a610901565b500590565b808201808211156101a2576101a2610901565b818103818111156101a2576101a261090156fea26469706673582212202fc59d08e2a99c09d80f196325b7753637b98ad8cfaf4a1403f7f55e136040c664736f6c63430008140033",
        "sourceMap": "136:2135:134:-:0;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106100a95760003560e01c80638e6f2353116100715780638e6f23531461011f5780639ba5f52e14610132578063b67bee0414610145578063cbe8623f14610158578063e46751e31461016b578063f3e4f87c1461017e57600080fd5b80630c9b9881146100ae57806312bd6ac0146100d35780631b5ac4b5146100e65780632e4c697f146100f957806381e5f7c91461010c575b600080fd5b6100c16100bc366004610848565b610191565b60405190815260200160405180910390f35b6100c16100e136600461086a565b6101a8565b6100c16100f4366004610896565b6101bf565b6100c1610107366004610848565b6101d2565b6100c161011a3660046108af565b6101df565b6100c161012d366004610896565b6101fa565b6100c1610140366004610848565b610206565b6100c161015336600461086a565b610213565b6100c1610166366004610848565b610221565b6100c1610179366004610896565b61022e565b6100c161018c366004610848565b61023a565b60008061019e8484610247565b9150505b92915050565b6000806101b685858561025c565b95945050505050565b6000806101cb83610282565b9392505050565b60008061019e848461029a565b6000806101ef878787878761030f565b979650505050505050565b6000806101cb836103d2565b60008061019e8484610601565b6000806101b6858585610612565b60008061019e8484610630565b6000806101cb83610645565b60008061019e84846107da565b60006101cb8383670de0b6b3a7640000610612565b600082600019048411830215820261027357600080fd5b50910281810615159190040190565b600080821261029157816101a2565b6101a282610917565b6000816000036102b35750670de0b6b3a76400006101a2565b826000036102c3575060006101a2565b60006102ce836107ef565b905060006102e36102de866107ef565b6103d2565b90508181026102fa670de0b6b3a764000082610933565b905061030581610645565b9695505050505050565b6000826000036103205750846101b6565b811561039857610357610333848761096f565b61033d8587610247565b610347888a610247565b610351919061096f565b90610601565b90506000610365858861081d565b905060006103738689610832565b90508183101561038557819250610391565b80831115610391578092505b50506101b6565b8285036103a7575060006101b6565b6103056103b48487610982565b6103be85876107da565b6103c8888a610247565b6103519190610982565b60008082136103f45760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906104809084901c6107ef565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60006101cb83670de0b6b3a7640000845b600082600019048411830215820261062957600080fd5b5091020490565b60006101cb83670de0b6b3a76400008461025c565b6000680248ce36a70cb26b3e19821361066057506000919050565b680755bf798b4a1bf1e58212610689576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061030574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6107ef565b60006101cb8383670de0b6b3a764000061025c565b60006001600160ff1b038211156108195760405163396ea70160e11b815260040160405180910390fd5b5090565b600081831161082c57826101cb565b50919050565b600081831161084157816101cb565b5090919050565b6000806040838503121561085b57600080fd5b50508035926020909101359150565b60008060006060848603121561087f57600080fd5b505081359360208301359350604090920135919050565b6000602082840312156108a857600080fd5b5035919050565b600080600080600060a086880312156108c757600080fd5b85359450602086013593506040860135925060608601359150608086013580151581146108f357600080fd5b809150509295509295909350565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b820161092c5761092c610901565b5060000390565b60008261095057634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561096a5761096a610901565b500590565b808201808211156101a2576101a2610901565b818103818111156101a2576101a261090156fea26469706673582212202fc59d08e2a99c09d80f196325b7753637b98ad8cfaf4a1403f7f55e136040c664736f6c63430008140033",
        "sourceMap": "136:2135:134:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;423:156;;;;;;:::i;:::-;;:::i;:::-;;;413:25:234;;;401:2;386:18;423:156:134;;;;;;;747:204;;;;;;:::i;:::-;;:::i;2138:131::-;;;;;;:::i;:::-;;:::i;1273:148::-;;;;;;:::i;:::-;;:::i;1701:431::-;;;;;;:::i;:::-;;:::i;1566:129::-;;;;;;:::i;:::-;;:::i;585:156::-;;;;;;:::i;:::-;;:::i;209:208::-;;;;;;:::i;:::-;;:::i;1115:152::-;;;;;;:::i;:::-;;:::i;1427:133::-;;;;;;:::i;:::-;;:::i;957:152::-;;;;;;:::i;:::-;;:::i;423:156::-;485:7;504:14;521:28;544:1;547;521:22;:28::i;:::-;504:45;-1:-1:-1;;423:156:134;;;;;:::o;747:204::-;851:9;872:14;889:32;913:1;916;919;889:23;:32::i;:::-;872:49;747:204;-1:-1:-1;;;;;747:204:134:o;2138:131::-;2184:6;2202:13;2218:21;2237:1;2218:18;:21::i;:::-;2202:37;2138:131;-1:-1:-1;;;2138:131:134:o;1273:148::-;1331:7;1350:14;1367:24;1386:1;1389;1367:18;:24::i;1701:431::-;1895:15;1922:14;1939:163;1989:8;2011:12;2037:6;2057:12;2083:9;1939:36;:163::i;:::-;1922:180;1701:431;-1:-1:-1;;;;;;;1701:431:134:o;1566:129::-;1611:6;1629:13;1645:20;1663:1;1645:17;:20::i;585:156::-;647:7;666:14;683:28;706:1;709;683:22;:28::i;209:208::-;315:9;336:14;353:34;379:1;382;385;353:25;:34::i;1115:152::-;1175:7;1194:14;1211:26;1232:1;1235;1211:20;:26::i;1427:133::-;1473:8;1493:13;1509:21;1528:1;1509:18;:21::i;957:152::-;1017:7;1036:14;1053:26;1074:1;1077;1053:20;:26::i;1610:118:122:-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;2284:748::-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;16056:92::-;16102:6;16131:1;16127;:5;:14;;16140:1;16127:14;;;16135:2;16136:1;16135:2;:::i;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;:::-;4623:25;3811:844;-1:-1:-1;;;;;;3811:844:122:o;12712:2102::-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:122;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;:::-;13420:87;;:154::i;:::-;13410:164;-1:-1:-1;13921:18:122;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:122;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:122;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;8508:3846::-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;9289:34:122;9286:41;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;898:556;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;3190:114::-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;2004:200:125:-;2056:8;-1:-1:-1;;;;;2080:1:125;:29;2076:99;;;2132:32;;-1:-1:-1;;;2132:32:125;;;;;;;;;;;2076:99;-1:-1:-1;2195:1:125;2004:200::o;14987:104:122:-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;;-1:-1:-1;15079:1:122;14987:104;-1:-1:-1;14987:104:122:o;15264:::-;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;;-1:-1:-1;15356:1:122;;15264:104;-1:-1:-1;15264:104:122:o;14:248:234:-;82:6;90;143:2;131:9;122:7;118:23;114:32;111:52;;;159:1;156;149:12;111:52;-1:-1:-1;;182:23:234;;;252:2;237:18;;;224:32;;-1:-1:-1;14:248:234:o;449:316::-;526:6;534;542;595:2;583:9;574:7;570:23;566:32;563:52;;;611:1;608;601:12;563:52;-1:-1:-1;;634:23:234;;;704:2;689:18;;676:32;;-1:-1:-1;755:2:234;740:18;;;727:32;;449:316;-1:-1:-1;449:316:234:o;770:179::-;828:6;881:2;869:9;860:7;856:23;852:32;849:52;;;897:1;894;887:12;849:52;-1:-1:-1;920:23:234;;770:179;-1:-1:-1;770:179:234:o;1134:547::-;1226:6;1234;1242;1250;1258;1311:3;1299:9;1290:7;1286:23;1282:33;1279:53;;;1328:1;1325;1318:12;1279:53;1364:9;1351:23;1341:33;;1421:2;1410:9;1406:18;1393:32;1383:42;;1472:2;1461:9;1457:18;1444:32;1434:42;;1523:2;1512:9;1508:18;1495:32;1485:42;;1577:3;1566:9;1562:19;1549:33;1625:5;1618:13;1611:21;1604:5;1601:32;1591:60;;1647:1;1644;1637:12;1591:60;1670:5;1660:15;;;1134:547;;;;;;;;:::o;1686:127::-;1747:10;1742:3;1738:20;1735:1;1728:31;1778:4;1775:1;1768:15;1802:4;1799:1;1792:15;1818:136;1853:3;-1:-1:-1;;;1874:22:234;;1871:48;;1899:18;;:::i;:::-;-1:-1:-1;1939:1:234;1935:13;;1818:136::o;2091:290::-;2130:1;2156;2146:132;;2200:10;2195:3;2191:20;2188:1;2181:31;2235:4;2232:1;2225:15;2263:4;2260:1;2253:15;2146:132;-1:-1:-1;;;2294:18:234;;-1:-1:-1;;2314:13:234;;2290:38;2287:64;;;2331:18;;:::i;:::-;-1:-1:-1;2365:10:234;;2091:290::o;2386:125::-;2451:9;;;2472:10;;;2469:36;;;2485:18;;:::i;2516:128::-;2583:9;;;2604:11;;;2601:37;;;2618:18;;:::i",
        "linkReferences": {}
    },
    "methodIdentifiers": {
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
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"a\",\"type\":\"int256\"}],\"name\":\"abs\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"exp\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"r\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"ln\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"}],\"name\":\"pow\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_average\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalWeight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_delta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_deltaWeight\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isAdding\",\"type\":\"bool\"}],\"name\":\"updateWeightedAverage\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"average\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockFixedPointMath.sol\":\"MockFixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/test/MockFixedPointMath.sol\":{\"keccak256\":\"0x7cb4c6889b8f1836f518fba64a084e46cfc34039451bc3249e40b3bc4d14ff62\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://dc7f819e78f455816ce2d0493a6c10b51cbdb8aec0e37e51b191476b185be0f2\",\"dweb:/ipfs/QmSY9gitR5XpgEG6W11ptvYvuHgp7R9MAHt718QGZe2Khn\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ExpInvalidExponent"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "LnInvalidInput"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt256"
                },
                {
                    "inputs": [
                        {
                            "internalType": "int256",
                            "name": "a",
                            "type": "int256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "abs",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "",
                            "type": "int256"
                        }
                    ]
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
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "divDown",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
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
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "divUp",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "int256",
                            "name": "x",
                            "type": "int256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "exp",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "r",
                            "type": "int256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "int256",
                            "name": "x",
                            "type": "int256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "ln",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "",
                            "type": "int256"
                        }
                    ]
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
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "mulDivDown",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "z",
                            "type": "uint256"
                        }
                    ]
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
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "mulDivUp",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "z",
                            "type": "uint256"
                        }
                    ]
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
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "mulDown",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
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
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "mulUp",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
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
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "pow",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
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
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "updateWeightedAverage",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "average",
                            "type": "uint256"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {},
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/test/MockFixedPointMath.sol": "MockFixedPointMath"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5",
                "urls": [
                    "bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339",
                    "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f",
                "urls": [
                    "bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19",
                    "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a",
                "urls": [
                    "bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d",
                    "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c",
                "urls": [
                    "bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4",
                    "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockFixedPointMath.sol": {
                "keccak256": "0x7cb4c6889b8f1836f518fba64a084e46cfc34039451bc3249e40b3bc4d14ff62",
                "urls": [
                    "bzz-raw://dc7f819e78f455816ce2d0493a6c10b51cbdb8aec0e37e51b191476b185be0f2",
                    "dweb:/ipfs/QmSY9gitR5XpgEG6W11ptvYvuHgp7R9MAHt718QGZe2Khn"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockFixedPointMath.sol",
        "id": 24208,
        "exportedSymbols": {
            "FixedPointMath": [
                18822
            ],
            "MockFixedPointMath": [
                24207
            ]
        },
        "nodeType": "SourceUnit",
        "src": "40:2232:134",
        "nodes": [
            {
                "id": 23975,
                "nodeType": "PragmaDirective",
                "src": "40:23:134",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 23977,
                "nodeType": "ImportDirective",
                "src": "65:69:134",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../src/libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 24208,
                "sourceUnit": 18823,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 23976,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18822,
                            "src": "74:14:134",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24207,
                "nodeType": "ContractDefinition",
                "src": "136:2135:134",
                "nodes": [
                    {
                        "id": 23980,
                        "nodeType": "UsingForDirective",
                        "src": "170:33:134",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 23978,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "176:14:134"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "176:14:134"
                        },
                        "typeName": {
                            "id": 23979,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "195:7:134",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 24003,
                        "nodeType": "FunctionDefinition",
                        "src": "209:208:134",
                        "nodes": [],
                        "body": {
                            "id": 24002,
                            "nodeType": "Block",
                            "src": "326:91:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        23992
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23992,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "344:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24002,
                                            "src": "336:14:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23991,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "336:7:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23999,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 23995,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23982,
                                                "src": "379:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23996,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23984,
                                                "src": "382:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23997,
                                                "name": "d",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23986,
                                                "src": "385:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 23993,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "353:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 23994,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "368:10:134",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "353:25:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 23998,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "353:34:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "336:51:134"
                                },
                                {
                                    "expression": {
                                        "id": 24000,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23992,
                                        "src": "404:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23990,
                                    "id": 24001,
                                    "nodeType": "Return",
                                    "src": "397:13:134"
                                }
                            ]
                        },
                        "functionSelector": "b67bee04",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivDown",
                        "nameLocation": "218:10:134",
                        "parameters": {
                            "id": 23987,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23982,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "246:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24003,
                                    "src": "238:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23981,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "238:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23984,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "265:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24003,
                                    "src": "257:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23983,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "257:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23986,
                                    "mutability": "mutable",
                                    "name": "d",
                                    "nameLocation": "284:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24003,
                                    "src": "276:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23985,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "276:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "228:63:134"
                        },
                        "returnParameters": {
                            "id": 23990,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23989,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "323:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24003,
                                    "src": "315:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23988,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "315:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "314:11:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24023,
                        "nodeType": "FunctionDefinition",
                        "src": "423:156:134",
                        "nodes": [],
                        "body": {
                            "id": 24022,
                            "nodeType": "Block",
                            "src": "494:85:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24013
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24013,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "512:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24022,
                                            "src": "504:14:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24012,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "504:7:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24019,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24016,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24005,
                                                "src": "544:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24017,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24007,
                                                "src": "547:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24014,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "521:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 24015,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "536:7:134",
                                            "memberName": "mulDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18085,
                                            "src": "521:22:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 24018,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "521:28:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "504:45:134"
                                },
                                {
                                    "expression": {
                                        "id": 24020,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24013,
                                        "src": "566:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24011,
                                    "id": 24021,
                                    "nodeType": "Return",
                                    "src": "559:13:134"
                                }
                            ]
                        },
                        "functionSelector": "0c9b9881",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDown",
                        "nameLocation": "432:7:134",
                        "parameters": {
                            "id": 24008,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24005,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "448:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24023,
                                    "src": "440:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24004,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "440:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24007,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "459:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24023,
                                    "src": "451:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24006,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "451:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "439:22:134"
                        },
                        "returnParameters": {
                            "id": 24011,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24010,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24023,
                                    "src": "485:7:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24009,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "485:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "484:9:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24043,
                        "nodeType": "FunctionDefinition",
                        "src": "585:156:134",
                        "nodes": [],
                        "body": {
                            "id": 24042,
                            "nodeType": "Block",
                            "src": "656:85:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24033
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24033,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "674:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24042,
                                            "src": "666:14:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24032,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "666:7:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24039,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24036,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24025,
                                                "src": "706:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24037,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24027,
                                                "src": "709:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24034,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "683:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 24035,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "698:7:134",
                                            "memberName": "divDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18103,
                                            "src": "683:22:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 24038,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "683:28:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "666:45:134"
                                },
                                {
                                    "expression": {
                                        "id": 24040,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24033,
                                        "src": "728:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24031,
                                    "id": 24041,
                                    "nodeType": "Return",
                                    "src": "721:13:134"
                                }
                            ]
                        },
                        "functionSelector": "9ba5f52e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divDown",
                        "nameLocation": "594:7:134",
                        "parameters": {
                            "id": 24028,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24025,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "610:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24043,
                                    "src": "602:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24024,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "602:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24027,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "621:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24043,
                                    "src": "613:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24026,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "613:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "601:22:134"
                        },
                        "returnParameters": {
                            "id": 24031,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24030,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24043,
                                    "src": "647:7:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24029,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "647:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "646:9:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24066,
                        "nodeType": "FunctionDefinition",
                        "src": "747:204:134",
                        "nodes": [],
                        "body": {
                            "id": 24065,
                            "nodeType": "Block",
                            "src": "862:89:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24055
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24055,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "880:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24065,
                                            "src": "872:14:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24054,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "872:7:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24062,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24058,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24045,
                                                "src": "913:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24059,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24047,
                                                "src": "916:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24060,
                                                "name": "d",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24049,
                                                "src": "919:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24056,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "889:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 24057,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "904:8:134",
                                            "memberName": "mulDivUp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18117,
                                            "src": "889:23:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 24061,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "889:32:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "872:49:134"
                                },
                                {
                                    "expression": {
                                        "id": 24063,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24055,
                                        "src": "938:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24053,
                                    "id": 24064,
                                    "nodeType": "Return",
                                    "src": "931:13:134"
                                }
                            ]
                        },
                        "functionSelector": "12bd6ac0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivUp",
                        "nameLocation": "756:8:134",
                        "parameters": {
                            "id": 24050,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24045,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "782:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24066,
                                    "src": "774:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24044,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "774:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24047,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "801:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24066,
                                    "src": "793:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24046,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "793:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24049,
                                    "mutability": "mutable",
                                    "name": "d",
                                    "nameLocation": "820:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24066,
                                    "src": "812:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24048,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "812:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "764:63:134"
                        },
                        "returnParameters": {
                            "id": 24053,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24052,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "859:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24066,
                                    "src": "851:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24051,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "851:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "850:11:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24086,
                        "nodeType": "FunctionDefinition",
                        "src": "957:152:134",
                        "nodes": [],
                        "body": {
                            "id": 24085,
                            "nodeType": "Block",
                            "src": "1026:83:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24076
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24076,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1044:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24085,
                                            "src": "1036:14:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24075,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1036:7:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24082,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24079,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24068,
                                                "src": "1074:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24080,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24070,
                                                "src": "1077:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24077,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "1053:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 24078,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1068:5:134",
                                            "memberName": "mulUp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18135,
                                            "src": "1053:20:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 24081,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1053:26:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1036:43:134"
                                },
                                {
                                    "expression": {
                                        "id": 24083,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24076,
                                        "src": "1096:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24074,
                                    "id": 24084,
                                    "nodeType": "Return",
                                    "src": "1089:13:134"
                                }
                            ]
                        },
                        "functionSelector": "f3e4f87c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulUp",
                        "nameLocation": "966:5:134",
                        "parameters": {
                            "id": 24071,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24068,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "980:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24086,
                                    "src": "972:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24067,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "972:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24070,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "991:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24086,
                                    "src": "983:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24069,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "983:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "971:22:134"
                        },
                        "returnParameters": {
                            "id": 24074,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24073,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24086,
                                    "src": "1017:7:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24072,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1017:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1016:9:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24106,
                        "nodeType": "FunctionDefinition",
                        "src": "1115:152:134",
                        "nodes": [],
                        "body": {
                            "id": 24105,
                            "nodeType": "Block",
                            "src": "1184:83:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24096
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24096,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1202:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24105,
                                            "src": "1194:14:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24095,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1194:7:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24102,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24099,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24088,
                                                "src": "1232:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24100,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24090,
                                                "src": "1235:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24097,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "1211:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 24098,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1226:5:134",
                                            "memberName": "divUp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18153,
                                            "src": "1211:20:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 24101,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1211:26:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1194:43:134"
                                },
                                {
                                    "expression": {
                                        "id": 24103,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24096,
                                        "src": "1254:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24094,
                                    "id": 24104,
                                    "nodeType": "Return",
                                    "src": "1247:13:134"
                                }
                            ]
                        },
                        "functionSelector": "cbe8623f",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divUp",
                        "nameLocation": "1124:5:134",
                        "parameters": {
                            "id": 24091,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24088,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "1138:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24106,
                                    "src": "1130:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24087,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1130:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24090,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "1149:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24106,
                                    "src": "1141:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24089,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1141:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1129:22:134"
                        },
                        "returnParameters": {
                            "id": 24094,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24093,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24106,
                                    "src": "1175:7:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24092,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1175:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1174:9:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24126,
                        "nodeType": "FunctionDefinition",
                        "src": "1273:148:134",
                        "nodes": [],
                        "body": {
                            "id": 24125,
                            "nodeType": "Block",
                            "src": "1340:81:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24116
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24116,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1358:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24125,
                                            "src": "1350:14:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24115,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1350:7:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24122,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24119,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24108,
                                                "src": "1386:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24120,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24110,
                                                "src": "1389:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24117,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "1367:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 24118,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1382:3:134",
                                            "memberName": "pow",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18210,
                                            "src": "1367:18:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 24121,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1367:24:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1350:41:134"
                                },
                                {
                                    "expression": {
                                        "id": 24123,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24116,
                                        "src": "1408:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24114,
                                    "id": 24124,
                                    "nodeType": "Return",
                                    "src": "1401:13:134"
                                }
                            ]
                        },
                        "functionSelector": "2e4c697f",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "pow",
                        "nameLocation": "1282:3:134",
                        "parameters": {
                            "id": 24111,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24108,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1294:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24126,
                                    "src": "1286:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24107,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1286:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24110,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1305:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24126,
                                    "src": "1297:9:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24109,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1297:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1285:22:134"
                        },
                        "returnParameters": {
                            "id": 24114,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24113,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24126,
                                    "src": "1331:7:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24112,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1331:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1330:9:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24143,
                        "nodeType": "FunctionDefinition",
                        "src": "1427:133:134",
                        "nodes": [],
                        "body": {
                            "id": 24142,
                            "nodeType": "Block",
                            "src": "1483:77:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24134
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24134,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1500:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24142,
                                            "src": "1493:13:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 24133,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1493:6:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24139,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24137,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24128,
                                                "src": "1528:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24135,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "1509:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 24136,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1524:3:134",
                                            "memberName": "exp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18407,
                                            "src": "1509:18:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                                "typeString": "function (int256) pure returns (int256)"
                                            }
                                        },
                                        "id": 24138,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1509:21:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1493:37:134"
                                },
                                {
                                    "expression": {
                                        "id": 24140,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24134,
                                        "src": "1547:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 24132,
                                    "id": 24141,
                                    "nodeType": "Return",
                                    "src": "1540:13:134"
                                }
                            ]
                        },
                        "functionSelector": "e46751e3",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "exp",
                        "nameLocation": "1436:3:134",
                        "parameters": {
                            "id": 24129,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24128,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1447:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24143,
                                    "src": "1440:8:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 24127,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1440:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1439:10:134"
                        },
                        "returnParameters": {
                            "id": 24132,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24131,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "1480:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24143,
                                    "src": "1473:8:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 24130,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1473:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1472:10:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24160,
                        "nodeType": "FunctionDefinition",
                        "src": "1566:129:134",
                        "nodes": [],
                        "body": {
                            "id": 24159,
                            "nodeType": "Block",
                            "src": "1619:76:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24151
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24151,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1636:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24159,
                                            "src": "1629:13:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 24150,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1629:6:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24156,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24154,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24145,
                                                "src": "1663:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24152,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "1645:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 24153,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1660:2:134",
                                            "memberName": "ln",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18629,
                                            "src": "1645:17:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                                "typeString": "function (int256) pure returns (int256)"
                                            }
                                        },
                                        "id": 24155,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1645:20:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1629:36:134"
                                },
                                {
                                    "expression": {
                                        "id": 24157,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24151,
                                        "src": "1682:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 24149,
                                    "id": 24158,
                                    "nodeType": "Return",
                                    "src": "1675:13:134"
                                }
                            ]
                        },
                        "functionSelector": "8e6f2353",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "ln",
                        "nameLocation": "1575:2:134",
                        "parameters": {
                            "id": 24146,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24145,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1585:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24160,
                                    "src": "1578:8:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 24144,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1578:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1577:10:134"
                        },
                        "returnParameters": {
                            "id": 24149,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24148,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24160,
                                    "src": "1611:6:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 24147,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1611:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1610:8:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24189,
                        "nodeType": "FunctionDefinition",
                        "src": "1701:431:134",
                        "nodes": [],
                        "body": {
                            "id": 24188,
                            "nodeType": "Block",
                            "src": "1912:220:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24176
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24176,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1930:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24188,
                                            "src": "1922:14:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24175,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1922:7:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24185,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24179,
                                                "name": "_average",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24162,
                                                "src": "1989:8:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24180,
                                                "name": "_totalWeight",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24164,
                                                "src": "2011:12:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24181,
                                                "name": "_delta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24166,
                                                "src": "2037:6:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24182,
                                                "name": "_deltaWeight",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24168,
                                                "src": "2057:12:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24183,
                                                "name": "_isAdding",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24170,
                                                "src": "2083:9:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24177,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "1939:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 24178,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1954:21:134",
                                            "memberName": "updateWeightedAverage",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18732,
                                            "src": "1939:36:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                                            }
                                        },
                                        "id": 24184,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1939:163:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1922:180:134"
                                },
                                {
                                    "expression": {
                                        "id": 24186,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24176,
                                        "src": "2119:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24174,
                                    "id": 24187,
                                    "nodeType": "Return",
                                    "src": "2112:13:134"
                                }
                            ]
                        },
                        "functionSelector": "81e5f7c9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateWeightedAverage",
                        "nameLocation": "1710:21:134",
                        "parameters": {
                            "id": 24171,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24162,
                                    "mutability": "mutable",
                                    "name": "_average",
                                    "nameLocation": "1749:8:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24189,
                                    "src": "1741:16:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24161,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1741:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24164,
                                    "mutability": "mutable",
                                    "name": "_totalWeight",
                                    "nameLocation": "1775:12:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24189,
                                    "src": "1767:20:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24163,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1767:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24166,
                                    "mutability": "mutable",
                                    "name": "_delta",
                                    "nameLocation": "1805:6:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24189,
                                    "src": "1797:14:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24165,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1797:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24168,
                                    "mutability": "mutable",
                                    "name": "_deltaWeight",
                                    "nameLocation": "1829:12:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24189,
                                    "src": "1821:20:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24167,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1821:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24170,
                                    "mutability": "mutable",
                                    "name": "_isAdding",
                                    "nameLocation": "1856:9:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24189,
                                    "src": "1851:14:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 24169,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1851:4:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1731:140:134"
                        },
                        "returnParameters": {
                            "id": 24174,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24173,
                                    "mutability": "mutable",
                                    "name": "average",
                                    "nameLocation": "1903:7:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24189,
                                    "src": "1895:15:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24172,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1895:7:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1894:17:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24206,
                        "nodeType": "FunctionDefinition",
                        "src": "2138:131:134",
                        "nodes": [],
                        "body": {
                            "id": 24205,
                            "nodeType": "Block",
                            "src": "2192:77:134",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24197
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24197,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "2209:6:134",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24205,
                                            "src": "2202:13:134",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 24196,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2202:6:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24202,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24200,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24191,
                                                "src": "2237:1:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24198,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18822,
                                                "src": "2218:14:134",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$18822_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 24199,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2233:3:134",
                                            "memberName": "abs",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18821,
                                            "src": "2218:18:134",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                                "typeString": "function (int256) pure returns (int256)"
                                            }
                                        },
                                        "id": 24201,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2218:21:134",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2202:37:134"
                                },
                                {
                                    "expression": {
                                        "id": 24203,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24197,
                                        "src": "2256:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 24195,
                                    "id": 24204,
                                    "nodeType": "Return",
                                    "src": "2249:13:134"
                                }
                            ]
                        },
                        "functionSelector": "1b5ac4b5",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "abs",
                        "nameLocation": "2147:3:134",
                        "parameters": {
                            "id": 24192,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24191,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "2158:1:134",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24206,
                                    "src": "2151:8:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 24190,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2151:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2150:10:134"
                        },
                        "returnParameters": {
                            "id": 24195,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24194,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24206,
                                    "src": "2184:6:134",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 24193,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2184:6:134",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2183:8:134"
                        },
                        "scope": 24207,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "MockFixedPointMath",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    24207
                ],
                "name": "MockFixedPointMath",
                "nameLocation": "145:18:134",
                "scope": 24208,
                "usedErrors": [
                    10219,
                    10258,
                    10314
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 134
};
