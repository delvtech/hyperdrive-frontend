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
        "object": "0x608060405234801561001057600080fd5b5061090e806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b13660046107a7565b610173565b60405190815260200160405180910390f35b6100b66100d63660046107c9565b61018a565b6100b66100e93660046107a7565b6101a1565b6100b66100fc3660046107f5565b6101ae565b6100b661010f366004610847565b6101c9565b6100b66101223660046107a7565b6101dc565b6100b66101353660046107c9565b6101e9565b6100b66101483660046107a7565b6101f7565b6100b661015b366004610847565b610204565b6100b661016e3660046107a7565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102b9565b979650505050505050565b6000806101d58361037c565b9392505050565b6000806101808484610598565b6000806101988585856105a9565b60008061018084846105c7565b6000806101d5836105dc565b6000806101808484610767565b60006101d58383670de0b6b3a76400006105a9565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b81600061028d8561037c565b90508181026102a4670de0b6b3a764000082610876565b90506102af816105dc565b9695505050505050565b6000826000036102ca575084610198565b8115610342576103016102dd84876108b2565b6102e7858761021d565b6102f1888a61021d565b6102fb91906108b2565b90610598565b9050600061030f858861077c565b9050600061031d8689610791565b90508183101561032f5781925061033b565b8083111561033b578092505b5050610198565b82850361035157506000610198565b6102af61035e84876108c5565b6103688587610767565b610372888a61021d565b6102fb91906108c5565b600080821361039e5760405163e61b497560e01b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b60006101d583670de0b6b3a7640000845b60008260001904841183021582026105c057600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e1982136105f757506000919050565b680755bf798b4a1bf1e58212610620576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006101d58383670de0b6b3a7640000610232565b600081831161078b57826101d5565b50919050565b60008183116107a057816101d5565b5090919050565b600080604083850312156107ba57600080fd5b50508035926020909101359150565b6000806000606084860312156107de57600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561080d57600080fd5b853594506020860135935060408601359250606086013591506080860135801515811461083957600080fd5b809150509295509295909350565b60006020828403121561085957600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008261089357634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156108ad576108ad610860565b500590565b8082018082111561018457610184610860565b818103818111156101845761018461086056fea2646970667358221220a78d30db2fad7ce920d84fea0031c68db4237e17a52ac6a9b326121134dad82864736f6c63430008140033",
        "sourceMap": "136:1998:85:-:0;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b13660046107a7565b610173565b60405190815260200160405180910390f35b6100b66100d63660046107c9565b61018a565b6100b66100e93660046107a7565b6101a1565b6100b66100fc3660046107f5565b6101ae565b6100b661010f366004610847565b6101c9565b6100b66101223660046107a7565b6101dc565b6100b66101353660046107c9565b6101e9565b6100b66101483660046107a7565b6101f7565b6100b661015b366004610847565b610204565b6100b661016e3660046107a7565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102b9565b979650505050505050565b6000806101d58361037c565b9392505050565b6000806101808484610598565b6000806101988585856105a9565b60008061018084846105c7565b6000806101d5836105dc565b6000806101808484610767565b60006101d58383670de0b6b3a76400006105a9565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b81600061028d8561037c565b90508181026102a4670de0b6b3a764000082610876565b90506102af816105dc565b9695505050505050565b6000826000036102ca575084610198565b8115610342576103016102dd84876108b2565b6102e7858761021d565b6102f1888a61021d565b6102fb91906108b2565b90610598565b9050600061030f858861077c565b9050600061031d8689610791565b90508183101561032f5781925061033b565b8083111561033b578092505b5050610198565b82850361035157506000610198565b6102af61035e84876108c5565b6103688587610767565b610372888a61021d565b6102fb91906108c5565b600080821361039e5760405163e61b497560e01b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b60006101d583670de0b6b3a7640000845b60008260001904841183021582026105c057600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e1982136105f757506000919050565b680755bf798b4a1bf1e58212610620576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006101d58383670de0b6b3a7640000610232565b600081831161078b57826101d5565b50919050565b60008183116107a057816101d5565b5090919050565b600080604083850312156107ba57600080fd5b50508035926020909101359150565b6000806000606084860312156107de57600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561080d57600080fd5b853594506020860135935060408601359250606086013591506080860135801515811461083957600080fd5b809150509295509295909350565b60006020828403121561085957600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008261089357634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156108ad576108ad610860565b500590565b8082018082111561018457610184610860565b818103818111156101845761018461086056fea2646970667358221220a78d30db2fad7ce920d84fea0031c68db4237e17a52ac6a9b326121134dad82864736f6c63430008140033",
        "sourceMap": "136:1998:85:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;423:156;;;;;;:::i;:::-;;:::i;:::-;;;413:25:182;;;401:2;386:18;423:156:85;;;;;;;747:204;;;;;;:::i;:::-;;:::i;1273:148::-;;;;;;:::i;:::-;;:::i;1701:431::-;;;;;;:::i;:::-;;:::i;1566:129::-;;;;;;:::i;:::-;;:::i;585:156::-;;;;;;:::i;:::-;;:::i;209:208::-;;;;;;:::i;:::-;;:::i;1115:152::-;;;;;;:::i;:::-;;:::i;1427:133::-;;;;;;:::i;:::-;;:::i;957:152::-;;;;;;:::i;:::-;;:::i;423:156::-;485:7;504:14;521:28;544:1;547;521:22;:28::i;:::-;504:45;-1:-1:-1;;423:156:85;;;;;:::o;747:204::-;851:9;872:14;889:32;913:1;916;919;889:23;:32::i;:::-;872:49;747:204;-1:-1:-1;;;;;747:204:85:o;1273:148::-;1331:7;1350:14;1367:24;1386:1;1389;1367:18;:24::i;1701:431::-;1895:15;1922:14;1939:163;1989:8;2011:12;2037:6;2057:12;2083:9;1939:36;:163::i;:::-;1922:180;1701:431;-1:-1:-1;;;;;;;1701:431:85:o;1566:129::-;1611:6;1629:13;1645:20;1663:1;1645:17;:20::i;:::-;1629:36;1566:129;-1:-1:-1;;;1566:129:85:o;585:156::-;647:7;666:14;683:28;706:1;709;683:22;:28::i;209:208::-;315:9;336:14;353:34;379:1;382;385;353:25;:34::i;1115:152::-;1175:7;1194:14;1211:26;1232:1;1235;1211:20;:26::i;1427:133::-;1473:8;1493:13;1509:21;1528:1;1509:18;:21::i;957:152::-;1017:7;1036:14;1053:26;1074:1;1077;1053:20;:26::i;1535:119:73:-;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;2211:748::-;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;3740:838::-;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;;4561:9;4565:4;4561:3;:9::i;:::-;4546:25;3740:838;-1:-1:-1;;;;;;3740:838:73:o;12314:2102::-;12508:15;12608:12;12624:1;12608:17;12604:63;;-1:-1:-1;12648:8:73;12641:15;;12604:63;12925:9;12921:1489;;;13022:154;13131:27;13146:12;13131;:27;:::i;:::-;13072:28;:12;13093:6;13072:20;:28::i;:::-;13023:30;:12;13044:8;13023:20;:30::i;:::-;:77;;;;:::i;:::-;13022:87;;:154::i;:::-;13012:164;-1:-1:-1;13523:18:73;13544:20;:6;13555:8;13544:10;:20::i;:::-;13523:41;-1:-1:-1;13578:18:73;13599:20;:6;13610:8;13599:10;:20::i;:::-;13578:41;;13647:10;13637:7;:20;13633:164;;;13687:10;13677:20;;13633:164;;;13732:10;13722:7;:20;13718:79;;;13772:10;13762:20;;13718:79;12936:871;;12921:1489;;;14106:12;14090;:28;14086:75;;-1:-1:-1;14145:1:73;14138:8;;14086:75;14247:152;14354:27;14369:12;14354;:27;:::i;:::-;14297:26;:12;14316:6;14297:18;:26::i;:::-;14248:30;:12;14269:8;14248:20;:30::i;:::-;:75;;;;:::i;8345:3611::-;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;8896:34;-1:-1:-1;;8890:1:73;8886:49;8993:9;;;8973:18;8970:33;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;1810:165::-;1872:7;1899:22;1910:1;1913:4;1919:1;823:556;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;3390:115::-;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;4830:3335::-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;-1:-1:-1;;;5987:51:73;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;-1:-1:-1;;;6585:50:73;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;3117:115::-;3177:7;3204:20;3213:1;3216;3219:4;3204:8;:20::i;14589:104::-;14647:7;14677:1;14673;:5;:13;;14685:1;14673:13;;;-1:-1:-1;14681:1:73;14589:104;-1:-1:-1;14589:104:73:o;14866:::-;14924:7;14954:1;14950;:5;:13;;14962:1;14950:13;;;-1:-1:-1;14958:1:73;;14866:104;-1:-1:-1;14866:104:73:o;14:248:182:-;82:6;90;143:2;131:9;122:7;118:23;114:32;111:52;;;159:1;156;149:12;111:52;-1:-1:-1;;182:23:182;;;252:2;237:18;;;224:32;;-1:-1:-1;14:248:182:o;449:316::-;526:6;534;542;595:2;583:9;574:7;570:23;566:32;563:52;;;611:1;608;601:12;563:52;-1:-1:-1;;634:23:182;;;704:2;689:18;;676:32;;-1:-1:-1;755:2:182;740:18;;;727:32;;449:316;-1:-1:-1;449:316:182:o;770:547::-;862:6;870;878;886;894;947:3;935:9;926:7;922:23;918:33;915:53;;;964:1;961;954:12;915:53;1000:9;987:23;977:33;;1057:2;1046:9;1042:18;1029:32;1019:42;;1108:2;1097:9;1093:18;1080:32;1070:42;;1159:2;1148:9;1144:18;1131:32;1121:42;;1213:3;1202:9;1198:19;1185:33;1261:5;1254:13;1247:21;1240:5;1237:32;1227:60;;1283:1;1280;1273:12;1227:60;1306:5;1296:15;;;770:547;;;;;;;;:::o;1322:179::-;1380:6;1433:2;1421:9;1412:7;1408:23;1404:32;1401:52;;;1449:1;1446;1439:12;1401:52;-1:-1:-1;1472:23:182;;1322:179;-1:-1:-1;1322:179:182:o;1818:127::-;1879:10;1874:3;1870:20;1867:1;1860:31;1910:4;1907:1;1900:15;1934:4;1931:1;1924:15;1950:290;1989:1;2015;2005:132;;2059:10;2054:3;2050:20;2047:1;2040:31;2094:4;2091:1;2084:15;2122:4;2119:1;2112:15;2005:132;-1:-1:-1;;;2153:18:182;;-1:-1:-1;;2173:13:182;;2149:38;2146:64;;;2190:18;;:::i;:::-;-1:-1:-1;2224:10:182;;1950:290::o;2245:125::-;2310:9;;;2331:10;;;2328:36;;;2344:18;;:::i;2375:128::-;2442:9;;;2463:11;;;2460:37;;;2477:18;;:::i",
        "linkReferences": {}
    },
    "methodIdentifiers": {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"exp\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"r\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"ln\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"}],\"name\":\"pow\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_average\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalWeight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_delta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_deltaWeight\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isAdding\",\"type\":\"bool\"}],\"name\":\"updateWeightedAverage\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"average\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockFixedPointMath.sol\":\"MockFixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/test/MockFixedPointMath.sol\":{\"keccak256\":\"0x8e8281499c59aa389be47edae8284a2f15a588937228b99f2e3ba429f9144c36\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://082845489937efb8302bc18011a97d8cc738309a1b0c654a7d3761a331e4a0f1\",\"dweb:/ipfs/QmbLms4PCHGtGdosyKPagQkquLt7jHVRKSJBjdvD2Jt3Ne\"]}},\"version\":1}",
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
                "aave-v3-core/=lib/aave-v3-core/",
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
                "keccak256": "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94",
                "urls": [
                    "bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb",
                    "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3",
                "urls": [
                    "bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660",
                    "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5",
                "urls": [
                    "bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171",
                    "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
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
                "keccak256": "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28",
                "urls": [
                    "bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2",
                    "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"
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
                "keccak256": "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862",
                "urls": [
                    "bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355",
                    "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec",
                "urls": [
                    "bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c",
                    "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf",
                "urls": [
                    "bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d",
                    "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockFixedPointMath.sol": {
                "keccak256": "0x8e8281499c59aa389be47edae8284a2f15a588937228b99f2e3ba429f9144c36",
                "urls": [
                    "bzz-raw://082845489937efb8302bc18011a97d8cc738309a1b0c654a7d3761a331e4a0f1",
                    "dweb:/ipfs/QmbLms4PCHGtGdosyKPagQkquLt7jHVRKSJBjdvD2Jt3Ne"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockFixedPointMath.sol",
        "id": 20284,
        "exportedSymbols": {
            "FixedPointMath": [
                14585
            ],
            "MockFixedPointMath": [
                20283
            ]
        },
        "nodeType": "SourceUnit",
        "src": "40:2095:85",
        "nodes": [
            {
                "id": 20068,
                "nodeType": "PragmaDirective",
                "src": "40:23:85",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 20070,
                "nodeType": "ImportDirective",
                "src": "65:69:85",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../src/libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 20284,
                "sourceUnit": 14586,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 20069,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14585,
                            "src": "74:14:85",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 20283,
                "nodeType": "ContractDefinition",
                "src": "136:1998:85",
                "nodes": [
                    {
                        "id": 20073,
                        "nodeType": "UsingForDirective",
                        "src": "170:33:85",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 20071,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "176:14:85"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14585,
                            "src": "176:14:85"
                        },
                        "typeName": {
                            "id": 20072,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "195:7:85",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 20096,
                        "nodeType": "FunctionDefinition",
                        "src": "209:208:85",
                        "nodes": [],
                        "body": {
                            "id": 20095,
                            "nodeType": "Block",
                            "src": "326:91:85",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        20085
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 20085,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "344:6:85",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 20095,
                                            "src": "336:14:85",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 20084,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "336:7:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 20092,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 20088,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20075,
                                                "src": "379:1:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20089,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20077,
                                                "src": "382:1:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20090,
                                                "name": "d",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20079,
                                                "src": "385:1:85",
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
                                                "id": 20086,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14585,
                                                "src": "353:14:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14585_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 20087,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "368:10:85",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13845,
                                            "src": "353:25:85",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 20091,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "353:34:85",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "336:51:85"
                                },
                                {
                                    "expression": {
                                        "id": 20093,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20085,
                                        "src": "404:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 20083,
                                    "id": 20094,
                                    "nodeType": "Return",
                                    "src": "397:13:85"
                                }
                            ]
                        },
                        "functionSelector": "b67bee04",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivDown",
                        "nameLocation": "218:10:85",
                        "parameters": {
                            "id": 20080,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20075,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "246:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20096,
                                    "src": "238:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20074,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "238:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20077,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "265:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20096,
                                    "src": "257:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20076,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "257:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20079,
                                    "mutability": "mutable",
                                    "name": "d",
                                    "nameLocation": "284:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20096,
                                    "src": "276:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20078,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "276:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "228:63:85"
                        },
                        "returnParameters": {
                            "id": 20083,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20082,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "323:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20096,
                                    "src": "315:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20081,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "315:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "314:11:85"
                        },
                        "scope": 20283,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 20116,
                        "nodeType": "FunctionDefinition",
                        "src": "423:156:85",
                        "nodes": [],
                        "body": {
                            "id": 20115,
                            "nodeType": "Block",
                            "src": "494:85:85",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        20106
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 20106,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "512:6:85",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 20115,
                                            "src": "504:14:85",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 20105,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "504:7:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 20112,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 20109,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20098,
                                                "src": "544:1:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20110,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20100,
                                                "src": "547:1:85",
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
                                                "id": 20107,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14585,
                                                "src": "521:14:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14585_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 20108,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "536:7:85",
                                            "memberName": "mulDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13863,
                                            "src": "521:22:85",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 20111,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "521:28:85",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "504:45:85"
                                },
                                {
                                    "expression": {
                                        "id": 20113,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20106,
                                        "src": "566:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 20104,
                                    "id": 20114,
                                    "nodeType": "Return",
                                    "src": "559:13:85"
                                }
                            ]
                        },
                        "functionSelector": "0c9b9881",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDown",
                        "nameLocation": "432:7:85",
                        "parameters": {
                            "id": 20101,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20098,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "448:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20116,
                                    "src": "440:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20097,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "440:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20100,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "459:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20116,
                                    "src": "451:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20099,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "451:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "439:22:85"
                        },
                        "returnParameters": {
                            "id": 20104,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20103,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20116,
                                    "src": "485:7:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20102,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "485:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "484:9:85"
                        },
                        "scope": 20283,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 20136,
                        "nodeType": "FunctionDefinition",
                        "src": "585:156:85",
                        "nodes": [],
                        "body": {
                            "id": 20135,
                            "nodeType": "Block",
                            "src": "656:85:85",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        20126
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 20126,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "674:6:85",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 20135,
                                            "src": "666:14:85",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 20125,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "666:7:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 20132,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 20129,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20118,
                                                "src": "706:1:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20130,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20120,
                                                "src": "709:1:85",
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
                                                "id": 20127,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14585,
                                                "src": "683:14:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14585_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 20128,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "698:7:85",
                                            "memberName": "divDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13881,
                                            "src": "683:22:85",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 20131,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "683:28:85",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "666:45:85"
                                },
                                {
                                    "expression": {
                                        "id": 20133,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20126,
                                        "src": "728:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 20124,
                                    "id": 20134,
                                    "nodeType": "Return",
                                    "src": "721:13:85"
                                }
                            ]
                        },
                        "functionSelector": "9ba5f52e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divDown",
                        "nameLocation": "594:7:85",
                        "parameters": {
                            "id": 20121,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20118,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "610:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20136,
                                    "src": "602:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20117,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "602:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20120,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "621:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20136,
                                    "src": "613:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20119,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "613:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "601:22:85"
                        },
                        "returnParameters": {
                            "id": 20124,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20123,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20136,
                                    "src": "647:7:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20122,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "647:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "646:9:85"
                        },
                        "scope": 20283,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 20159,
                        "nodeType": "FunctionDefinition",
                        "src": "747:204:85",
                        "nodes": [],
                        "body": {
                            "id": 20158,
                            "nodeType": "Block",
                            "src": "862:89:85",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        20148
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 20148,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "880:6:85",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 20158,
                                            "src": "872:14:85",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 20147,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "872:7:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 20155,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 20151,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20138,
                                                "src": "913:1:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20152,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20140,
                                                "src": "916:1:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20153,
                                                "name": "d",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20142,
                                                "src": "919:1:85",
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
                                                "id": 20149,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14585,
                                                "src": "889:14:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14585_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 20150,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "904:8:85",
                                            "memberName": "mulDivUp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13895,
                                            "src": "889:23:85",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 20154,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "889:32:85",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "872:49:85"
                                },
                                {
                                    "expression": {
                                        "id": 20156,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20148,
                                        "src": "938:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 20146,
                                    "id": 20157,
                                    "nodeType": "Return",
                                    "src": "931:13:85"
                                }
                            ]
                        },
                        "functionSelector": "12bd6ac0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivUp",
                        "nameLocation": "756:8:85",
                        "parameters": {
                            "id": 20143,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20138,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "782:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20159,
                                    "src": "774:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20137,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "774:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20140,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "801:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20159,
                                    "src": "793:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20139,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "793:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20142,
                                    "mutability": "mutable",
                                    "name": "d",
                                    "nameLocation": "820:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20159,
                                    "src": "812:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20141,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "812:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "764:63:85"
                        },
                        "returnParameters": {
                            "id": 20146,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20145,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "859:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20159,
                                    "src": "851:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20144,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "851:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "850:11:85"
                        },
                        "scope": 20283,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 20179,
                        "nodeType": "FunctionDefinition",
                        "src": "957:152:85",
                        "nodes": [],
                        "body": {
                            "id": 20178,
                            "nodeType": "Block",
                            "src": "1026:83:85",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        20169
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 20169,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1044:6:85",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 20178,
                                            "src": "1036:14:85",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 20168,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1036:7:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 20175,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 20172,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20161,
                                                "src": "1074:1:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20173,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20163,
                                                "src": "1077:1:85",
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
                                                "id": 20170,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14585,
                                                "src": "1053:14:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14585_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 20171,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1068:5:85",
                                            "memberName": "mulUp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13913,
                                            "src": "1053:20:85",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 20174,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1053:26:85",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1036:43:85"
                                },
                                {
                                    "expression": {
                                        "id": 20176,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20169,
                                        "src": "1096:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 20167,
                                    "id": 20177,
                                    "nodeType": "Return",
                                    "src": "1089:13:85"
                                }
                            ]
                        },
                        "functionSelector": "f3e4f87c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulUp",
                        "nameLocation": "966:5:85",
                        "parameters": {
                            "id": 20164,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20161,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "980:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20179,
                                    "src": "972:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20160,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "972:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20163,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "991:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20179,
                                    "src": "983:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20162,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "983:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "971:22:85"
                        },
                        "returnParameters": {
                            "id": 20167,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20166,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20179,
                                    "src": "1017:7:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20165,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1017:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1016:9:85"
                        },
                        "scope": 20283,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 20199,
                        "nodeType": "FunctionDefinition",
                        "src": "1115:152:85",
                        "nodes": [],
                        "body": {
                            "id": 20198,
                            "nodeType": "Block",
                            "src": "1184:83:85",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        20189
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 20189,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1202:6:85",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 20198,
                                            "src": "1194:14:85",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 20188,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1194:7:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 20195,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 20192,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20181,
                                                "src": "1232:1:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20193,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20183,
                                                "src": "1235:1:85",
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
                                                "id": 20190,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14585,
                                                "src": "1211:14:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14585_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 20191,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1226:5:85",
                                            "memberName": "divUp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13931,
                                            "src": "1211:20:85",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 20194,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1211:26:85",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1194:43:85"
                                },
                                {
                                    "expression": {
                                        "id": 20196,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20189,
                                        "src": "1254:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 20187,
                                    "id": 20197,
                                    "nodeType": "Return",
                                    "src": "1247:13:85"
                                }
                            ]
                        },
                        "functionSelector": "cbe8623f",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divUp",
                        "nameLocation": "1124:5:85",
                        "parameters": {
                            "id": 20184,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20181,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "1138:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20199,
                                    "src": "1130:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20180,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1130:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20183,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "1149:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20199,
                                    "src": "1141:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20182,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1141:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1129:22:85"
                        },
                        "returnParameters": {
                            "id": 20187,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20186,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20199,
                                    "src": "1175:7:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20185,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1175:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1174:9:85"
                        },
                        "scope": 20283,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 20219,
                        "nodeType": "FunctionDefinition",
                        "src": "1273:148:85",
                        "nodes": [],
                        "body": {
                            "id": 20218,
                            "nodeType": "Block",
                            "src": "1340:81:85",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        20209
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 20209,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1358:6:85",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 20218,
                                            "src": "1350:14:85",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 20208,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1350:7:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 20215,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 20212,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20201,
                                                "src": "1386:1:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20213,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20203,
                                                "src": "1389:1:85",
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
                                                "id": 20210,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14585,
                                                "src": "1367:14:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14585_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 20211,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1382:3:85",
                                            "memberName": "pow",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13990,
                                            "src": "1367:18:85",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 20214,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1367:24:85",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1350:41:85"
                                },
                                {
                                    "expression": {
                                        "id": 20216,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20209,
                                        "src": "1408:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 20207,
                                    "id": 20217,
                                    "nodeType": "Return",
                                    "src": "1401:13:85"
                                }
                            ]
                        },
                        "functionSelector": "2e4c697f",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "pow",
                        "nameLocation": "1282:3:85",
                        "parameters": {
                            "id": 20204,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20201,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1294:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20219,
                                    "src": "1286:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20200,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1286:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20203,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1305:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20219,
                                    "src": "1297:9:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20202,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1297:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1285:22:85"
                        },
                        "returnParameters": {
                            "id": 20207,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20206,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20219,
                                    "src": "1331:7:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20205,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1331:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1330:9:85"
                        },
                        "scope": 20283,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 20236,
                        "nodeType": "FunctionDefinition",
                        "src": "1427:133:85",
                        "nodes": [],
                        "body": {
                            "id": 20235,
                            "nodeType": "Block",
                            "src": "1483:77:85",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        20227
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 20227,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1500:6:85",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 20235,
                                            "src": "1493:13:85",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 20226,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1493:6:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 20232,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 20230,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20221,
                                                "src": "1528:1:85",
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
                                                "id": 20228,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14585,
                                                "src": "1509:14:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14585_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 20229,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1524:3:85",
                                            "memberName": "exp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14187,
                                            "src": "1509:18:85",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                                "typeString": "function (int256) pure returns (int256)"
                                            }
                                        },
                                        "id": 20231,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1509:21:85",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1493:37:85"
                                },
                                {
                                    "expression": {
                                        "id": 20233,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20227,
                                        "src": "1547:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 20225,
                                    "id": 20234,
                                    "nodeType": "Return",
                                    "src": "1540:13:85"
                                }
                            ]
                        },
                        "functionSelector": "e46751e3",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "exp",
                        "nameLocation": "1436:3:85",
                        "parameters": {
                            "id": 20222,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20221,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1447:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20236,
                                    "src": "1440:8:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 20220,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1440:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1439:10:85"
                        },
                        "returnParameters": {
                            "id": 20225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20224,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "1480:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20236,
                                    "src": "1473:8:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 20223,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1473:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1472:10:85"
                        },
                        "scope": 20283,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 20253,
                        "nodeType": "FunctionDefinition",
                        "src": "1566:129:85",
                        "nodes": [],
                        "body": {
                            "id": 20252,
                            "nodeType": "Block",
                            "src": "1619:76:85",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        20244
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 20244,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1636:6:85",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 20252,
                                            "src": "1629:13:85",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 20243,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1629:6:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 20249,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 20247,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20238,
                                                "src": "1663:1:85",
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
                                                "id": 20245,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14585,
                                                "src": "1645:14:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14585_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 20246,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1660:2:85",
                                            "memberName": "ln",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14409,
                                            "src": "1645:17:85",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                                "typeString": "function (int256) pure returns (int256)"
                                            }
                                        },
                                        "id": 20248,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1645:20:85",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1629:36:85"
                                },
                                {
                                    "expression": {
                                        "id": 20250,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20244,
                                        "src": "1682:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 20242,
                                    "id": 20251,
                                    "nodeType": "Return",
                                    "src": "1675:13:85"
                                }
                            ]
                        },
                        "functionSelector": "8e6f2353",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "ln",
                        "nameLocation": "1575:2:85",
                        "parameters": {
                            "id": 20239,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20238,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1585:1:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20253,
                                    "src": "1578:8:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 20237,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1578:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1577:10:85"
                        },
                        "returnParameters": {
                            "id": 20242,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20241,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20253,
                                    "src": "1611:6:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 20240,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1611:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1610:8:85"
                        },
                        "scope": 20283,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 20282,
                        "nodeType": "FunctionDefinition",
                        "src": "1701:431:85",
                        "nodes": [],
                        "body": {
                            "id": 20281,
                            "nodeType": "Block",
                            "src": "1912:220:85",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        20269
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 20269,
                                            "mutability": "mutable",
                                            "name": "result",
                                            "nameLocation": "1930:6:85",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 20281,
                                            "src": "1922:14:85",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 20268,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1922:7:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 20278,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 20272,
                                                "name": "_average",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20255,
                                                "src": "1989:8:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20273,
                                                "name": "_totalWeight",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20257,
                                                "src": "2011:12:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20274,
                                                "name": "_delta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20259,
                                                "src": "2037:6:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20275,
                                                "name": "_deltaWeight",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20261,
                                                "src": "2057:12:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 20276,
                                                "name": "_isAdding",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20263,
                                                "src": "2083:9:85",
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
                                                "id": 20270,
                                                "name": "FixedPointMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14585,
                                                "src": "1939:14:85",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14585_$",
                                                    "typeString": "type(library FixedPointMath)"
                                                }
                                            },
                                            "id": 20271,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1954:21:85",
                                            "memberName": "updateWeightedAverage",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14512,
                                            "src": "1939:36:85",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                                            }
                                        },
                                        "id": 20277,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1939:163:85",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1922:180:85"
                                },
                                {
                                    "expression": {
                                        "id": 20279,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20269,
                                        "src": "2119:6:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 20267,
                                    "id": 20280,
                                    "nodeType": "Return",
                                    "src": "2112:13:85"
                                }
                            ]
                        },
                        "functionSelector": "81e5f7c9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateWeightedAverage",
                        "nameLocation": "1710:21:85",
                        "parameters": {
                            "id": 20264,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20255,
                                    "mutability": "mutable",
                                    "name": "_average",
                                    "nameLocation": "1749:8:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20282,
                                    "src": "1741:16:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20254,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1741:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20257,
                                    "mutability": "mutable",
                                    "name": "_totalWeight",
                                    "nameLocation": "1775:12:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20282,
                                    "src": "1767:20:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20256,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1767:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20259,
                                    "mutability": "mutable",
                                    "name": "_delta",
                                    "nameLocation": "1805:6:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20282,
                                    "src": "1797:14:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20258,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1797:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20261,
                                    "mutability": "mutable",
                                    "name": "_deltaWeight",
                                    "nameLocation": "1829:12:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20282,
                                    "src": "1821:20:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20260,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1821:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 20263,
                                    "mutability": "mutable",
                                    "name": "_isAdding",
                                    "nameLocation": "1856:9:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20282,
                                    "src": "1851:14:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 20262,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1851:4:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1731:140:85"
                        },
                        "returnParameters": {
                            "id": 20267,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20266,
                                    "mutability": "mutable",
                                    "name": "average",
                                    "nameLocation": "1903:7:85",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 20282,
                                    "src": "1895:15:85",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 20265,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1895:7:85",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1894:17:85"
                        },
                        "scope": 20283,
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
                    20283
                ],
                "name": "MockFixedPointMath",
                "nameLocation": "145:18:85",
                "scope": 20284,
                "usedErrors": [
                    7351,
                    7393
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 85
};
