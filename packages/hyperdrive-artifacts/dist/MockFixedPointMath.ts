export const MockFixedPointMath = 
{
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
    "object": "0x608060405234801561001057600080fd5b5061090e806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b13660046107a7565b610173565b60405190815260200160405180910390f35b6100b66100d63660046107c9565b61018a565b6100b66100e93660046107a7565b6101a1565b6100b66100fc3660046107f5565b6101ae565b6100b661010f366004610847565b6101c9565b6100b66101223660046107a7565b6101dc565b6100b66101353660046107c9565b6101e9565b6100b66101483660046107a7565b6101f7565b6100b661015b366004610847565b610204565b6100b661016e3660046107a7565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102b9565b979650505050505050565b6000806101d58361037c565b9392505050565b6000806101808484610598565b6000806101988585856105a9565b60008061018084846105c7565b6000806101d5836105dc565b6000806101808484610767565b60006101d58383670de0b6b3a76400006105a9565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b81600061028d8561037c565b90508181026102a4670de0b6b3a764000082610876565b90506102af816105dc565b9695505050505050565b6000826000036102ca575084610198565b8115610342576103016102dd84876108b2565b6102e7858761021d565b6102f1888a61021d565b6102fb91906108b2565b90610598565b9050600061030f858861077c565b9050600061031d8689610791565b90508183101561032f5781925061033b565b8083111561033b578092505b5050610198565b82850361035157506000610198565b6102af61035e84876108c5565b6103688587610767565b610372888a61021d565b6102fb91906108c5565b600080821361039e5760405163e61b497560e01b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b60006101d583670de0b6b3a7640000845b60008260001904841183021582026105c057600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e1982136105f757506000919050565b680755bf798b4a1bf1e58212610620576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006101d58383670de0b6b3a7640000610232565b600081831161078b57826101d5565b50919050565b60008183116107a057816101d5565b5090919050565b600080604083850312156107ba57600080fd5b50508035926020909101359150565b6000806000606084860312156107de57600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561080d57600080fd5b853594506020860135935060408601359250606086013591506080860135801515811461083957600080fd5b809150509295509295909350565b60006020828403121561085957600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008261089357634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156108ad576108ad610860565b500590565b8082018082111561018457610184610860565b818103818111156101845761018461086056fea2646970667358221220b8d38cb791ce556dd63c55638f386636369e15b42a2b58fd113c26eb532e958864736f6c63430008140033",
    "sourceMap": "136:1998:85:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b13660046107a7565b610173565b60405190815260200160405180910390f35b6100b66100d63660046107c9565b61018a565b6100b66100e93660046107a7565b6101a1565b6100b66100fc3660046107f5565b6101ae565b6100b661010f366004610847565b6101c9565b6100b66101223660046107a7565b6101dc565b6100b66101353660046107c9565b6101e9565b6100b66101483660046107a7565b6101f7565b6100b661015b366004610847565b610204565b6100b661016e3660046107a7565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102b9565b979650505050505050565b6000806101d58361037c565b9392505050565b6000806101808484610598565b6000806101988585856105a9565b60008061018084846105c7565b6000806101d5836105dc565b6000806101808484610767565b60006101d58383670de0b6b3a76400006105a9565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b81600061028d8561037c565b90508181026102a4670de0b6b3a764000082610876565b90506102af816105dc565b9695505050505050565b6000826000036102ca575084610198565b8115610342576103016102dd84876108b2565b6102e7858761021d565b6102f1888a61021d565b6102fb91906108b2565b90610598565b9050600061030f858861077c565b9050600061031d8689610791565b90508183101561032f5781925061033b565b8083111561033b578092505b5050610198565b82850361035157506000610198565b6102af61035e84876108c5565b6103688587610767565b610372888a61021d565b6102fb91906108c5565b600080821361039e5760405163e61b497560e01b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b60006101d583670de0b6b3a7640000845b60008260001904841183021582026105c057600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e1982136105f757506000919050565b680755bf798b4a1bf1e58212610620576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006101d58383670de0b6b3a7640000610232565b600081831161078b57826101d5565b50919050565b60008183116107a057816101d5565b5090919050565b600080604083850312156107ba57600080fd5b50508035926020909101359150565b6000806000606084860312156107de57600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561080d57600080fd5b853594506020860135935060408601359250606086013591506080860135801515811461083957600080fd5b809150509295509295909350565b60006020828403121561085957600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008261089357634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156108ad576108ad610860565b500590565b8082018082111561018457610184610860565b818103818111156101845761018461086056fea2646970667358221220b8d38cb791ce556dd63c55638f386636369e15b42a2b58fd113c26eb532e958864736f6c63430008140033",
    "sourceMap": "136:1998:85:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;423:156;;;;;;:::i;:::-;;:::i;:::-;;;413:25:184;;;401:2;386:18;423:156:85;;;;;;;747:204;;;;;;:::i;:::-;;:::i;1273:148::-;;;;;;:::i;:::-;;:::i;1701:431::-;;;;;;:::i;:::-;;:::i;1566:129::-;;;;;;:::i;:::-;;:::i;585:156::-;;;;;;:::i;:::-;;:::i;209:208::-;;;;;;:::i;:::-;;:::i;1115:152::-;;;;;;:::i;:::-;;:::i;1427:133::-;;;;;;:::i;:::-;;:::i;957:152::-;;;;;;:::i;:::-;;:::i;423:156::-;485:7;504:14;521:28;544:1;547;521:22;:28::i;:::-;504:45;-1:-1:-1;;423:156:85;;;;;:::o;747:204::-;851:9;872:14;889:32;913:1;916;919;889:23;:32::i;:::-;872:49;747:204;-1:-1:-1;;;;;747:204:85:o;1273:148::-;1331:7;1350:14;1367:24;1386:1;1389;1367:18;:24::i;1701:431::-;1895:15;1922:14;1939:163;1989:8;2011:12;2037:6;2057:12;2083:9;1939:36;:163::i;:::-;1922:180;1701:431;-1:-1:-1;;;;;;;1701:431:85:o;1566:129::-;1611:6;1629:13;1645:20;1663:1;1645:17;:20::i;:::-;1629:36;1566:129;-1:-1:-1;;;1566:129:85:o;585:156::-;647:7;666:14;683:28;706:1;709;683:22;:28::i;209:208::-;315:9;336:14;353:34;379:1;382;385;353:25;:34::i;1115:152::-;1175:7;1194:14;1211:26;1232:1;1235;1211:20;:26::i;1427:133::-;1473:8;1493:13;1509:21;1528:1;1509:18;:21::i;957:152::-;1017:7;1036:14;1053:26;1074:1;1077;1053:20;:26::i;1535:119:73:-;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;2211:748::-;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;3740:838::-;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;;4561:9;4565:4;4561:3;:9::i;:::-;4546:25;3740:838;-1:-1:-1;;;;;;3740:838:73:o;12314:2102::-;12508:15;12608:12;12624:1;12608:17;12604:63;;-1:-1:-1;12648:8:73;12641:15;;12604:63;12925:9;12921:1489;;;13022:154;13131:27;13146:12;13131;:27;:::i;:::-;13072:28;:12;13093:6;13072:20;:28::i;:::-;13023:30;:12;13044:8;13023:20;:30::i;:::-;:77;;;;:::i;:::-;13022:87;;:154::i;:::-;13012:164;-1:-1:-1;13523:18:73;13544:20;:6;13555:8;13544:10;:20::i;:::-;13523:41;-1:-1:-1;13578:18:73;13599:20;:6;13610:8;13599:10;:20::i;:::-;13578:41;;13647:10;13637:7;:20;13633:164;;;13687:10;13677:20;;13633:164;;;13732:10;13722:7;:20;13718:79;;;13772:10;13762:20;;13718:79;12936:871;;12921:1489;;;14106:12;14090;:28;14086:75;;-1:-1:-1;14145:1:73;14138:8;;14086:75;14247:152;14354:27;14369:12;14354;:27;:::i;:::-;14297:26;:12;14316:6;14297:18;:26::i;:::-;14248:30;:12;14269:8;14248:20;:30::i;:::-;:75;;;;:::i;8345:3611::-;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;8896:34;-1:-1:-1;;8890:1:73;8886:49;8993:9;;;8973:18;8970:33;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;1810:165::-;1872:7;1899:22;1910:1;1913:4;1919:1;823:556;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;3390:115::-;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;4830:3335::-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;-1:-1:-1;;;5987:51:73;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;-1:-1:-1;;;6585:50:73;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;3117:115::-;3177:7;3204:20;3213:1;3216;3219:4;3204:8;:20::i;14589:104::-;14647:7;14677:1;14673;:5;:13;;14685:1;14673:13;;;-1:-1:-1;14681:1:73;14589:104;-1:-1:-1;14589:104:73:o;14866:::-;14924:7;14954:1;14950;:5;:13;;14962:1;14950:13;;;-1:-1:-1;14958:1:73;;14866:104;-1:-1:-1;14866:104:73:o;14:248:184:-;82:6;90;143:2;131:9;122:7;118:23;114:32;111:52;;;159:1;156;149:12;111:52;-1:-1:-1;;182:23:184;;;252:2;237:18;;;224:32;;-1:-1:-1;14:248:184:o;449:316::-;526:6;534;542;595:2;583:9;574:7;570:23;566:32;563:52;;;611:1;608;601:12;563:52;-1:-1:-1;;634:23:184;;;704:2;689:18;;676:32;;-1:-1:-1;755:2:184;740:18;;;727:32;;449:316;-1:-1:-1;449:316:184:o;770:547::-;862:6;870;878;886;894;947:3;935:9;926:7;922:23;918:33;915:53;;;964:1;961;954:12;915:53;1000:9;987:23;977:33;;1057:2;1046:9;1042:18;1029:32;1019:42;;1108:2;1097:9;1093:18;1080:32;1070:42;;1159:2;1148:9;1144:18;1131:32;1121:42;;1213:3;1202:9;1198:19;1185:33;1261:5;1254:13;1247:21;1240:5;1237:32;1227:60;;1283:1;1280;1273:12;1227:60;1306:5;1296:15;;;770:547;;;;;;;;:::o;1322:179::-;1380:6;1433:2;1421:9;1412:7;1408:23;1404:32;1401:52;;;1449:1;1446;1439:12;1401:52;-1:-1:-1;1472:23:184;;1322:179;-1:-1:-1;1322:179:184:o;1818:127::-;1879:10;1874:3;1870:20;1867:1;1860:31;1910:4;1907:1;1900:15;1934:4;1931:1;1924:15;1950:290;1989:1;2015;2005:132;;2059:10;2054:3;2050:20;2047:1;2040:31;2094:4;2091:1;2084:15;2122:4;2119:1;2112:15;2005:132;-1:-1:-1;;;2153:18:184;;-1:-1:-1;;2173:13:184;;2149:38;2146:64;;;2190:18;;:::i;:::-;-1:-1:-1;2224:10:184;;1950:290::o;2245:125::-;2310:9;;;2331:10;;;2328:36;;;2344:18;;:::i;2375:128::-;2442:9;;;2463:11;;;2460:37;;;2477:18;;:::i",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"exp\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"r\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"ln\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"}],\"name\":\"pow\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_average\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalWeight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_delta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_deltaWeight\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isAdding\",\"type\":\"bool\"}],\"name\":\"updateWeightedAverage\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"average\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockFixedPointMath.sol\":\"MockFixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/test/MockFixedPointMath.sol\":{\"keccak256\":\"0x8e8281499c59aa389be47edae8284a2f15a588937228b99f2e3ba429f9144c36\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://082845489937efb8302bc18011a97d8cc738309a1b0c654a7d3761a331e4a0f1\",\"dweb:/ipfs/QmbLms4PCHGtGdosyKPagQkquLt7jHVRKSJBjdvD2Jt3Ne\"]}},\"version\":1}",
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
        "keccak256": "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3",
        "urls": [
          "bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398",
          "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16",
        "urls": [
          "bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240",
          "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97",
        "urls": [
          "bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1",
          "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveEvents.sol": {
        "keccak256": "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd",
        "urls": [
          "bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f",
          "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597",
        "urls": [
          "bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477",
          "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"
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
        "keccak256": "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a",
        "urls": [
          "bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3",
          "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenEvents.sol": {
        "keccak256": "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002",
        "urls": [
          "bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3",
          "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191",
        "urls": [
          "bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd",
          "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868",
        "urls": [
          "bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb",
          "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"
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
    "id": 19993,
    "exportedSymbols": {
      "FixedPointMath": [
        14294
      ],
      "MockFixedPointMath": [
        19992
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:2095:85",
    "nodes": [
      {
        "id": 19777,
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
        "id": 19779,
        "nodeType": "ImportDirective",
        "src": "65:69:85",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 19993,
        "sourceUnit": 14295,
        "symbolAliases": [
          {
            "foreign": {
              "id": 19778,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14294,
              "src": "74:14:85",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 19992,
        "nodeType": "ContractDefinition",
        "src": "136:1998:85",
        "nodes": [
          {
            "id": 19782,
            "nodeType": "UsingForDirective",
            "src": "170:33:85",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 19780,
              "name": "FixedPointMath",
              "nameLocations": [
                "176:14:85"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14294,
              "src": "176:14:85"
            },
            "typeName": {
              "id": 19781,
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
            "id": 19805,
            "nodeType": "FunctionDefinition",
            "src": "209:208:85",
            "nodes": [],
            "body": {
              "id": 19804,
              "nodeType": "Block",
              "src": "326:91:85",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19794
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19794,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "344:6:85",
                      "nodeType": "VariableDeclaration",
                      "scope": 19804,
                      "src": "336:14:85",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19793,
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
                  "id": 19801,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19797,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19784,
                        "src": "379:1:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19798,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19786,
                        "src": "382:1:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19799,
                        "name": "d",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19788,
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
                        "id": 19795,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14294,
                        "src": "353:14:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14294_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 19796,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "368:10:85",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13554,
                      "src": "353:25:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19800,
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
                    "id": 19802,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19794,
                    "src": "404:6:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 19792,
                  "id": 19803,
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
              "id": 19789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19784,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "246:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19805,
                  "src": "238:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19783,
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
                  "id": 19786,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "265:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19805,
                  "src": "257:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19785,
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
                  "id": 19788,
                  "mutability": "mutable",
                  "name": "d",
                  "nameLocation": "284:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19805,
                  "src": "276:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19787,
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
              "id": 19792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19791,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "323:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19805,
                  "src": "315:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19790,
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
            "scope": 19992,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 19825,
            "nodeType": "FunctionDefinition",
            "src": "423:156:85",
            "nodes": [],
            "body": {
              "id": 19824,
              "nodeType": "Block",
              "src": "494:85:85",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19815
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19815,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "512:6:85",
                      "nodeType": "VariableDeclaration",
                      "scope": 19824,
                      "src": "504:14:85",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19814,
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
                  "id": 19821,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19818,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19807,
                        "src": "544:1:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19819,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19809,
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
                        "id": 19816,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14294,
                        "src": "521:14:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14294_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 19817,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "536:7:85",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13572,
                      "src": "521:22:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19820,
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
                    "id": 19822,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19815,
                    "src": "566:6:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 19813,
                  "id": 19823,
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
              "id": 19810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19807,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "448:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19825,
                  "src": "440:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19806,
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
                  "id": 19809,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "459:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19825,
                  "src": "451:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19808,
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
              "id": 19813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19812,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 19825,
                  "src": "485:7:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19811,
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
            "scope": 19992,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 19845,
            "nodeType": "FunctionDefinition",
            "src": "585:156:85",
            "nodes": [],
            "body": {
              "id": 19844,
              "nodeType": "Block",
              "src": "656:85:85",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19835
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19835,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "674:6:85",
                      "nodeType": "VariableDeclaration",
                      "scope": 19844,
                      "src": "666:14:85",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19834,
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
                  "id": 19841,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19838,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19827,
                        "src": "706:1:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19839,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19829,
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
                        "id": 19836,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14294,
                        "src": "683:14:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14294_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 19837,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "698:7:85",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13590,
                      "src": "683:22:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19840,
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
                    "id": 19842,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19835,
                    "src": "728:6:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 19833,
                  "id": 19843,
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
              "id": 19830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19827,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "610:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19845,
                  "src": "602:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19826,
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
                  "id": 19829,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "621:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19845,
                  "src": "613:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19828,
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
              "id": 19833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19832,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 19845,
                  "src": "647:7:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19831,
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
            "scope": 19992,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 19868,
            "nodeType": "FunctionDefinition",
            "src": "747:204:85",
            "nodes": [],
            "body": {
              "id": 19867,
              "nodeType": "Block",
              "src": "862:89:85",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19857
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19857,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "880:6:85",
                      "nodeType": "VariableDeclaration",
                      "scope": 19867,
                      "src": "872:14:85",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19856,
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
                  "id": 19864,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19860,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19847,
                        "src": "913:1:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19861,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19849,
                        "src": "916:1:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19862,
                        "name": "d",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19851,
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
                        "id": 19858,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14294,
                        "src": "889:14:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14294_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 19859,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "904:8:85",
                      "memberName": "mulDivUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13604,
                      "src": "889:23:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19863,
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
                    "id": 19865,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19857,
                    "src": "938:6:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 19855,
                  "id": 19866,
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
              "id": 19852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19847,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "782:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19868,
                  "src": "774:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19846,
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
                  "id": 19849,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "801:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19868,
                  "src": "793:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19848,
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
                  "id": 19851,
                  "mutability": "mutable",
                  "name": "d",
                  "nameLocation": "820:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19868,
                  "src": "812:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19850,
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
              "id": 19855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19854,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "859:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19868,
                  "src": "851:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19853,
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
            "scope": 19992,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 19888,
            "nodeType": "FunctionDefinition",
            "src": "957:152:85",
            "nodes": [],
            "body": {
              "id": 19887,
              "nodeType": "Block",
              "src": "1026:83:85",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19878
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19878,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1044:6:85",
                      "nodeType": "VariableDeclaration",
                      "scope": 19887,
                      "src": "1036:14:85",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19877,
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
                  "id": 19884,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19881,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19870,
                        "src": "1074:1:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19882,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19872,
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
                        "id": 19879,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14294,
                        "src": "1053:14:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14294_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 19880,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1068:5:85",
                      "memberName": "mulUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13622,
                      "src": "1053:20:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19883,
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
                    "id": 19885,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19878,
                    "src": "1096:6:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 19876,
                  "id": 19886,
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
              "id": 19873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19870,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "980:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19888,
                  "src": "972:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19869,
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
                  "id": 19872,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "991:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19888,
                  "src": "983:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19871,
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
              "id": 19876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19875,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 19888,
                  "src": "1017:7:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19874,
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
            "scope": 19992,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 19908,
            "nodeType": "FunctionDefinition",
            "src": "1115:152:85",
            "nodes": [],
            "body": {
              "id": 19907,
              "nodeType": "Block",
              "src": "1184:83:85",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19898
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19898,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1202:6:85",
                      "nodeType": "VariableDeclaration",
                      "scope": 19907,
                      "src": "1194:14:85",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19897,
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
                  "id": 19904,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19901,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19890,
                        "src": "1232:1:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19902,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19892,
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
                        "id": 19899,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14294,
                        "src": "1211:14:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14294_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 19900,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1226:5:85",
                      "memberName": "divUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13640,
                      "src": "1211:20:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19903,
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
                    "id": 19905,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19898,
                    "src": "1254:6:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 19896,
                  "id": 19906,
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
              "id": 19893,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19890,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1138:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19908,
                  "src": "1130:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19889,
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
                  "id": 19892,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1149:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19908,
                  "src": "1141:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19891,
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
              "id": 19896,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19895,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 19908,
                  "src": "1175:7:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19894,
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
            "scope": 19992,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 19928,
            "nodeType": "FunctionDefinition",
            "src": "1273:148:85",
            "nodes": [],
            "body": {
              "id": 19927,
              "nodeType": "Block",
              "src": "1340:81:85",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19918
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19918,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1358:6:85",
                      "nodeType": "VariableDeclaration",
                      "scope": 19927,
                      "src": "1350:14:85",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19917,
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
                  "id": 19924,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19921,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19910,
                        "src": "1386:1:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19922,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19912,
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
                        "id": 19919,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14294,
                        "src": "1367:14:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14294_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 19920,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1382:3:85",
                      "memberName": "pow",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13699,
                      "src": "1367:18:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 19923,
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
                    "id": 19925,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19918,
                    "src": "1408:6:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 19916,
                  "id": 19926,
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
              "id": 19913,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19910,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1294:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19928,
                  "src": "1286:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19909,
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
                  "id": 19912,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1305:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19928,
                  "src": "1297:9:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19911,
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
              "id": 19916,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19915,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 19928,
                  "src": "1331:7:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19914,
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
            "scope": 19992,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 19945,
            "nodeType": "FunctionDefinition",
            "src": "1427:133:85",
            "nodes": [],
            "body": {
              "id": 19944,
              "nodeType": "Block",
              "src": "1483:77:85",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19936
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19936,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1500:6:85",
                      "nodeType": "VariableDeclaration",
                      "scope": 19944,
                      "src": "1493:13:85",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 19935,
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
                  "id": 19941,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19939,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19930,
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
                        "id": 19937,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14294,
                        "src": "1509:14:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14294_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 19938,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1524:3:85",
                      "memberName": "exp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13896,
                      "src": "1509:18:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 19940,
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
                    "id": 19942,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19936,
                    "src": "1547:6:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 19934,
                  "id": 19943,
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
              "id": 19931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19930,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1447:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19945,
                  "src": "1440:8:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19929,
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
              "id": 19934,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19933,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1480:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19945,
                  "src": "1473:8:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19932,
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
            "scope": 19992,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 19962,
            "nodeType": "FunctionDefinition",
            "src": "1566:129:85",
            "nodes": [],
            "body": {
              "id": 19961,
              "nodeType": "Block",
              "src": "1619:76:85",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19953
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19953,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1636:6:85",
                      "nodeType": "VariableDeclaration",
                      "scope": 19961,
                      "src": "1629:13:85",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 19952,
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
                  "id": 19958,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19956,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19947,
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
                        "id": 19954,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14294,
                        "src": "1645:14:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14294_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 19955,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1660:2:85",
                      "memberName": "ln",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14118,
                      "src": "1645:17:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 19957,
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
                    "id": 19959,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19953,
                    "src": "1682:6:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 19951,
                  "id": 19960,
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
              "id": 19948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19947,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1585:1:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19962,
                  "src": "1578:8:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19946,
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
              "id": 19951,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19950,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 19962,
                  "src": "1611:6:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 19949,
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
            "scope": 19992,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 19991,
            "nodeType": "FunctionDefinition",
            "src": "1701:431:85",
            "nodes": [],
            "body": {
              "id": 19990,
              "nodeType": "Block",
              "src": "1912:220:85",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    19978
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 19978,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1930:6:85",
                      "nodeType": "VariableDeclaration",
                      "scope": 19990,
                      "src": "1922:14:85",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 19977,
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
                  "id": 19987,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 19981,
                        "name": "_average",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19964,
                        "src": "1989:8:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19982,
                        "name": "_totalWeight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19966,
                        "src": "2011:12:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19983,
                        "name": "_delta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19968,
                        "src": "2037:6:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19984,
                        "name": "_deltaWeight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19970,
                        "src": "2057:12:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 19985,
                        "name": "_isAdding",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19972,
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
                        "id": 19979,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14294,
                        "src": "1939:14:85",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$14294_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 19980,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1954:21:85",
                      "memberName": "updateWeightedAverage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14221,
                      "src": "1939:36:85",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                      }
                    },
                    "id": 19986,
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
                    "id": 19988,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19978,
                    "src": "2119:6:85",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 19976,
                  "id": 19989,
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
              "id": 19973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19964,
                  "mutability": "mutable",
                  "name": "_average",
                  "nameLocation": "1749:8:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19991,
                  "src": "1741:16:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19963,
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
                  "id": 19966,
                  "mutability": "mutable",
                  "name": "_totalWeight",
                  "nameLocation": "1775:12:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19991,
                  "src": "1767:20:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19965,
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
                  "id": 19968,
                  "mutability": "mutable",
                  "name": "_delta",
                  "nameLocation": "1805:6:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19991,
                  "src": "1797:14:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19967,
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
                  "id": 19970,
                  "mutability": "mutable",
                  "name": "_deltaWeight",
                  "nameLocation": "1829:12:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19991,
                  "src": "1821:20:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19969,
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
                  "id": 19972,
                  "mutability": "mutable",
                  "name": "_isAdding",
                  "nameLocation": "1856:9:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19991,
                  "src": "1851:14:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19971,
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
              "id": 19976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19975,
                  "mutability": "mutable",
                  "name": "average",
                  "nameLocation": "1903:7:85",
                  "nodeType": "VariableDeclaration",
                  "scope": 19991,
                  "src": "1895:15:85",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19974,
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
            "scope": 19992,
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
          19992
        ],
        "name": "MockFixedPointMath",
        "nameLocation": "145:18:85",
        "scope": 19993,
        "usedErrors": [
          7286,
          7328
        ],
        "usedEvents": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 85
} as const;
