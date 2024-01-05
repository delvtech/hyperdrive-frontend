export const MockFixedPointMath = 
{
  "abi": [
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidExponent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_NegativeOrZeroInput",
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
    "object": "0x608060405234801561001057600080fd5b506108c5806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b136600461075e565b610173565b60405190815260200160405180910390f35b6100b66100d6366004610780565b61018a565b6100b66100e936600461075e565b6101a1565b6100b66100fc3660046107ac565b6101ae565b6100b661010f3660046107fe565b6101c9565b6100b661012236600461075e565b6101dc565b6100b6610135366004610780565b6101e9565b6100b661014836600461075e565b6101f7565b6100b661015b3660046107fe565b610204565b6100b661016e36600461075e565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102b9565b979650505050505050565b6000806101d583610333565b9392505050565b600080610180848461035e565b60008061019885858561036f565b600080610180848461038d565b6000806101d5836103a2565b600080610180848461052d565b60006101d58383670de0b6b3a764000061036f565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b81600061028d85610542565b90508181026102a4670de0b6b3a76400008261082d565b90506102af816103a2565b9695505050505050565b600081156102f9576102f26102ce8487610869565b6102d8858761021d565b6102e2888a61021d565b6102ec9190610869565b9061038d565b9050610198565b82850361030857506000610198565b6102af610315848761087c565b61031f858761021d565b610329888a61021d565b6102ec919061087c565b60008082136103555760405163562f8dc760e11b815260040160405180910390fd5b61018482610542565b60006101d583670de0b6b3a7640000845b600082600019048411830215820261038657600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e1982136103bd57506000919050565b680755bf798b4a1bf1e582126103e65760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006101d58383670de0b6b3a7640000610232565b600080821361056457604051636838feed60e11b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000806040838503121561077157600080fd5b50508035926020909101359150565b60008060006060848603121561079557600080fd5b505081359360208301359350604090920135919050565b600080600080600060a086880312156107c457600080fd5b85359450602086013593506040860135925060608601359150608086013580151581146107f057600080fd5b809150509295509295909350565b60006020828403121561081057600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008261084a57634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561086457610864610817565b500590565b8082018082111561018457610184610817565b818103818111156101845761018461081756fea2646970667358221220ae87994b647e04fb93e4865ddc3fbebf6cc153cf82d9ca8a86166a0c60c1380364736f6c63430008130033",
    "sourceMap": "136:1998:65:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b136600461075e565b610173565b60405190815260200160405180910390f35b6100b66100d6366004610780565b61018a565b6100b66100e936600461075e565b6101a1565b6100b66100fc3660046107ac565b6101ae565b6100b661010f3660046107fe565b6101c9565b6100b661012236600461075e565b6101dc565b6100b6610135366004610780565b6101e9565b6100b661014836600461075e565b6101f7565b6100b661015b3660046107fe565b610204565b6100b661016e36600461075e565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102b9565b979650505050505050565b6000806101d583610333565b9392505050565b600080610180848461035e565b60008061019885858561036f565b600080610180848461038d565b6000806101d5836103a2565b600080610180848461052d565b60006101d58383670de0b6b3a764000061036f565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b81600061028d85610542565b90508181026102a4670de0b6b3a76400008261082d565b90506102af816103a2565b9695505050505050565b600081156102f9576102f26102ce8487610869565b6102d8858761021d565b6102e2888a61021d565b6102ec9190610869565b9061038d565b9050610198565b82850361030857506000610198565b6102af610315848761087c565b61031f858761021d565b610329888a61021d565b6102ec919061087c565b60008082136103555760405163562f8dc760e11b815260040160405180910390fd5b61018482610542565b60006101d583670de0b6b3a7640000845b600082600019048411830215820261038657600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e1982136103bd57506000919050565b680755bf798b4a1bf1e582126103e65760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006101d58383670de0b6b3a7640000610232565b600080821361056457604051636838feed60e11b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000806040838503121561077157600080fd5b50508035926020909101359150565b60008060006060848603121561079557600080fd5b505081359360208301359350604090920135919050565b600080600080600060a086880312156107c457600080fd5b85359450602086013593506040860135925060608601359150608086013580151581146107f057600080fd5b809150509295509295909350565b60006020828403121561081057600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008261084a57634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561086457610864610817565b500590565b8082018082111561018457610184610817565b818103818111156101845761018461081756fea2646970667358221220ae87994b647e04fb93e4865ddc3fbebf6cc153cf82d9ca8a86166a0c60c1380364736f6c63430008130033",
    "sourceMap": "136:1998:65:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;423:156;;;;;;:::i;:::-;;:::i;:::-;;;413:25:161;;;401:2;386:18;423:156:65;;;;;;;747:204;;;;;;:::i;:::-;;:::i;1273:148::-;;;;;;:::i;:::-;;:::i;1701:431::-;;;;;;:::i;:::-;;:::i;1566:129::-;;;;;;:::i;:::-;;:::i;585:156::-;;;;;;:::i;:::-;;:::i;209:208::-;;;;;;:::i;:::-;;:::i;1115:152::-;;;;;;:::i;:::-;;:::i;1427:133::-;;;;;;:::i;:::-;;:::i;957:152::-;;;;;;:::i;:::-;;:::i;423:156::-;485:7;504:14;521:28;544:1;547;521:22;:28::i;:::-;504:45;-1:-1:-1;;423:156:65;;;;;:::o;747:204::-;851:9;872:14;889:32;913:1;916;919;889:23;:32::i;:::-;872:49;747:204;-1:-1:-1;;;;;747:204:65:o;1273:148::-;1331:7;1350:14;1367:24;1386:1;1389;1367:18;:24::i;1701:431::-;1895:15;1922:14;1939:163;1989:8;2011:12;2037:6;2057:12;2083:9;1939:36;:163::i;:::-;1922:180;1701:431;-1:-1:-1;;;;;;;1701:431:65:o;1566:129::-;1611:6;1629:13;1645:20;1663:1;1645:17;:20::i;:::-;1629:36;1566:129;-1:-1:-1;;;1566:129:65:o;585:156::-;647:7;666:14;683:28;706:1;709;683:22;:28::i;209:208::-;315:9;336:14;353:34;379:1;382;385;353:25;:34::i;1115:152::-;1175:7;1194:14;1211:26;1232:1;1235;1211:20;:26::i;1427:133::-;1473:8;1493:13;1509:21;1528:1;1509:18;:21::i;957:152::-;1017:7;1036:14;1053:26;1074:1;1077;1053:20;:26::i;1771:119:51:-;1833:7;1860:22;1871:1;1874;1877:4;1860:10;:22::i;2683:748::-;2797:9;3062:1;-1:-1:-1;;3045:19:51;3042:1;3039:26;3036:1;3032:34;3025:42;3012:11;3008:60;2981:146;;3111:1;3108;3101:12;2981:146;-1:-1:-1;3378:9:51;;3325:27;;;3322:34;;3374:27;;;3301:114;;2683:748::o;4628:840::-;4686:7;4752:1;4757;4752:6;4748:47;;-1:-1:-1;150:4:51;4774:10;;4748:47;4848:1;4853;4848:6;4844:45;;-1:-1:-1;4877:1:51;4870:8;;4844:45;5052:1;5027:15;5230:14;5241:1;5230:3;:14::i;:::-;5217:27;-1:-1:-1;5322:18:51;;;5359:19;150:4;5322:18;5359:19;:::i;:::-;;;5451:9;5455:4;5451:3;:9::i;:::-;5436:25;4628:840;-1:-1:-1;;;;;;4628:840:51:o;13533:678::-;13727:15;13758:9;13754:451;;;13793:152;13900:27;13915:12;13900;:27;:::i;:::-;13843:28;:12;13864:6;13843:20;:28::i;:::-;13794:30;:12;13815:8;13794:20;:30::i;:::-;:77;;;;:::i;:::-;13793:85;;:152::i;:::-;13783:162;;13754:451;;;13996:12;13980;:28;13976:42;;-1:-1:-1;14017:1:51;14010:8;;13976:42;14042:152;14149:27;14164:12;14149;:27;:::i;:::-;14092:28;:12;14113:6;14092:20;:28::i;:::-;14043:30;:12;14064:8;14043:20;:30::i;:::-;:77;;;;:::i;9363:160::-;9408:6;9435:1;9430;:6;9426:67;;9445:48;;-1:-1:-1;;;9445:48:51;;;;;;;;;;;9426:67;9510:6;9514:1;9510:3;:6::i;2164:165::-;2226:7;2253:22;2264:1;2267:4;2273:1;941:556;1057:9;1322:1;-1:-1:-1;;1305:19:51;1302:1;1299:26;1296:1;1292:34;1285:42;1272:11;1268:60;1241:146;;1371:1;1368;1361:12;1241:146;-1:-1:-1;1458:9:51;;1454:27;;941:556::o;4098:115::-;4158:7;4185:20;4194:1;4197:4;4203:1;4185:8;:20::i;5724:3347::-;5770:8;-1:-1:-1;;5947:1:51;:26;5943:40;;-1:-1:-1;5982:1:51;;5724:3347;-1:-1:-1;5724:3347:51:o;5943:40::-;6182:21;6177:1;:26;6173:99;;6228:44;;-1:-1:-1;;;6228:44:51;;;;;;;;;;;6173:99;6545:7;6539:2;6534:7;;;6533:19;;-1:-1:-1;6881:8:51;6965:2;6905:29;6894:7;;;6893:41;-1:-1:-1;;;6893:51:51;6892:75;;6993:29;6989:33;;6985:37;;;-1:-1:-1;;7664:35:51;;7719:5;;7299:2;7718:13;;;7735:32;7717:50;7787:5;;7786:13;;-1:-1:-1;;7785:51:51;7856:5;;7855:13;;7872:34;7854:52;7926:5;;7925:13;;-1:-1:-1;;7924:53:51;7997:5;;7996:13;;8013:35;7995:53;7305:32;7238:31;7234:35;;7289:5;;7288:13;;7287:50;;;7362:5;;;-1:-1:-1;;7362:40:51;7422:5;7421:13;;;7438:35;7420:53;7491:5;;;-1:-1:-1;;;7491:50:51;8413:10;8950:49;8917:82;9032:3;:7;;;;8916:124;;;;;;-1:-1:-1;;5724:3347:51:o;3707:115::-;3767:7;3794:20;3803:1;3806;3809:4;3794:8;:20::i;9583:3592::-;9628:8;9681:1;9676;:6;9672:60;;9691:41;;-1:-1:-1;;;9691:41:51;;;;;;;;;;;9672:60;-1:-1:-1;10698:2:51;10115:34;-1:-1:-1;;10109:1:51;10105:49;10212:9;;;10192:18;10189:33;10186:1;10182:41;10176:48;10274:9;;;10262:10;10259:25;10256:1;10252:33;10246:40;10332:9;;;10324:6;10321:21;10318:1;10314:29;10308:36;10388:9;;;10382:4;10379:19;10376:1;10372:27;;;10366:34;;;10443:9;;;10438:3;10435:18;10432:1;10428:26;10422:33;10498:9;;;10490:18;;;10487:1;10483:26;;;10477:33;;;10546:9;;;10538:18;;;10532:25;10728:3;:7;;;;;10714:22;;;;10761:17;;;11554:31;11550:35;;11605:5;;11604:13;;11621:32;11603:50;11673:5;;11672:13;;11689:33;11671:51;11742:5;;11741:13;;11758:33;11740:51;11811:5;;11810:13;;11827:33;11809:51;11880:5;;11879:13;;11896:32;11878:50;11948:5;;11947:13;;11964:30;11946:48;10951:31;10947:35;;11002:5;;11001:13;;11018:32;11000:50;11070:5;;11069:13;;11086:32;11068:50;11138:5;;11137:13;;-1:-1:-1;;11136:50:51;11206:5;;11205:13;;-1:-1:-1;;11204:50:51;11274:5;;11273:13;;;-1:-1:-1;;11272:50:51;11340:5;-1:-1:-1;;11340:46:51;12335:10;12725:43;12720:48;-1:-1:-1;;10694:6:51;;;;12848:71;:91;12827:112;13012:72;13007:77;13155:3;13149:9;;9583:3592::o;14:248:161:-;82:6;90;143:2;131:9;122:7;118:23;114:32;111:52;;;159:1;156;149:12;111:52;-1:-1:-1;;182:23:161;;;252:2;237:18;;;224:32;;-1:-1:-1;14:248:161:o;449:316::-;526:6;534;542;595:2;583:9;574:7;570:23;566:32;563:52;;;611:1;608;601:12;563:52;-1:-1:-1;;634:23:161;;;704:2;689:18;;676:32;;-1:-1:-1;755:2:161;740:18;;;727:32;;449:316;-1:-1:-1;449:316:161:o;770:547::-;862:6;870;878;886;894;947:3;935:9;926:7;922:23;918:33;915:53;;;964:1;961;954:12;915:53;1000:9;987:23;977:33;;1057:2;1046:9;1042:18;1029:32;1019:42;;1108:2;1097:9;1093:18;1080:32;1070:42;;1159:2;1148:9;1144:18;1131:32;1121:42;;1213:3;1202:9;1198:19;1185:33;1261:5;1254:13;1247:21;1240:5;1237:32;1227:60;;1283:1;1280;1273:12;1227:60;1306:5;1296:15;;;770:547;;;;;;;;:::o;1322:179::-;1380:6;1433:2;1421:9;1412:7;1408:23;1404:32;1401:52;;;1449:1;1446;1439:12;1401:52;-1:-1:-1;1472:23:161;;1322:179;-1:-1:-1;1322:179:161:o;1818:127::-;1879:10;1874:3;1870:20;1867:1;1860:31;1910:4;1907:1;1900:15;1934:4;1931:1;1924:15;1950:290;1989:1;2015;2005:132;;2059:10;2054:3;2050:20;2047:1;2040:31;2094:4;2091:1;2084:15;2122:4;2119:1;2112:15;2005:132;-1:-1:-1;;;2153:18:161;;-1:-1:-1;;2173:13:161;;2149:38;2146:64;;;2190:18;;:::i;:::-;-1:-1:-1;2224:10:161;;1950:290::o;2245:125::-;2310:9;;;2331:10;;;2328:36;;;2344:18;;:::i;2375:128::-;2442:9;;;2463:11;;;2460:37;;;2477:18;;:::i",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_NegativeOrZeroInput\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"exp\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"r\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"ln\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"}],\"name\":\"pow\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_average\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalWeight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_delta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_deltaWeight\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isAdding\",\"type\":\"bool\"}],\"name\":\"updateWeightedAverage\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"average\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockFixedPointMath.sol\":\"MockFixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/test/MockFixedPointMath.sol\":{\"keccak256\":\"0x5e82986f7623b7ebfefb3c2ac049880084b606dc0fe46e7182140360c6543026\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c6c6467ea0d201fbd0b98b8d65251cc4e9e79cfa88a1f697f1828b999b74dfcd\",\"dweb:/ipfs/QmYFNTqLhBNuBg37qMTh6nRPmnZ2h6DJkLkWHw7TuqgVMD\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidExponent"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_NegativeOrZeroInput"
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
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
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
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787",
        "urls": [
          "bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8",
          "dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d",
        "urls": [
          "bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85",
          "dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b",
        "urls": [
          "bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17",
          "dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad",
        "urls": [
          "bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6",
          "dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d",
        "urls": [
          "bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8",
          "dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb",
        "urls": [
          "bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f",
          "dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4",
        "urls": [
          "bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6",
          "dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639",
        "urls": [
          "bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d",
          "dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockFixedPointMath.sol": {
        "keccak256": "0x5e82986f7623b7ebfefb3c2ac049880084b606dc0fe46e7182140360c6543026",
        "urls": [
          "bzz-raw://c6c6467ea0d201fbd0b98b8d65251cc4e9e79cfa88a1f697f1828b999b74dfcd",
          "dweb:/ipfs/QmYFNTqLhBNuBg37qMTh6nRPmnZ2h6DJkLkWHw7TuqgVMD"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockFixedPointMath.sol",
    "id": 17105,
    "exportedSymbols": {
      "FixedPointMath": [
        11134
      ],
      "MockFixedPointMath": [
        17104
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:2095:65",
    "nodes": [
      {
        "id": 16889,
        "nodeType": "PragmaDirective",
        "src": "40:23:65",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 16891,
        "nodeType": "ImportDirective",
        "src": "65:69:65",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17105,
        "sourceUnit": 11135,
        "symbolAliases": [
          {
            "foreign": {
              "id": 16890,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11134,
              "src": "74:14:65",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17104,
        "nodeType": "ContractDefinition",
        "src": "136:1998:65",
        "nodes": [
          {
            "id": 16894,
            "nodeType": "UsingForDirective",
            "src": "170:33:65",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 16892,
              "name": "FixedPointMath",
              "nameLocations": [
                "176:14:65"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "176:14:65"
            },
            "typeName": {
              "id": 16893,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "195:7:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 16917,
            "nodeType": "FunctionDefinition",
            "src": "209:208:65",
            "nodes": [],
            "body": {
              "id": 16916,
              "nodeType": "Block",
              "src": "326:91:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    16906
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16906,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "344:6:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 16916,
                      "src": "336:14:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16905,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "336:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 16913,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 16909,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16896,
                        "src": "379:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 16910,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16898,
                        "src": "382:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 16911,
                        "name": "d",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16900,
                        "src": "385:1:65",
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
                        "id": 16907,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11134,
                        "src": "353:14:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$11134_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 16908,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "368:10:65",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10414,
                      "src": "353:25:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16912,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "353:34:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "336:51:65"
                },
                {
                  "expression": {
                    "id": 16914,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16906,
                    "src": "404:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16904,
                  "id": 16915,
                  "nodeType": "Return",
                  "src": "397:13:65"
                }
              ]
            },
            "functionSelector": "b67bee04",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivDown",
            "nameLocation": "218:10:65",
            "parameters": {
              "id": 16901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16896,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "246:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16917,
                  "src": "238:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16895,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16898,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "265:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16917,
                  "src": "257:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16897,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "257:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16900,
                  "mutability": "mutable",
                  "name": "d",
                  "nameLocation": "284:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16917,
                  "src": "276:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16899,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "276:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "228:63:65"
            },
            "returnParameters": {
              "id": 16904,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16903,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "323:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16917,
                  "src": "315:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16902,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "315:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "314:11:65"
            },
            "scope": 17104,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 16937,
            "nodeType": "FunctionDefinition",
            "src": "423:156:65",
            "nodes": [],
            "body": {
              "id": 16936,
              "nodeType": "Block",
              "src": "494:85:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    16927
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16927,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "512:6:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 16936,
                      "src": "504:14:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16926,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "504:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 16933,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 16930,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16919,
                        "src": "544:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 16931,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16921,
                        "src": "547:1:65",
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
                        "id": 16928,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11134,
                        "src": "521:14:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$11134_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 16929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "536:7:65",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10432,
                      "src": "521:22:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16932,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "521:28:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "504:45:65"
                },
                {
                  "expression": {
                    "id": 16934,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16927,
                    "src": "566:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16925,
                  "id": 16935,
                  "nodeType": "Return",
                  "src": "559:13:65"
                }
              ]
            },
            "functionSelector": "0c9b9881",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDown",
            "nameLocation": "432:7:65",
            "parameters": {
              "id": 16922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16919,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "448:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16937,
                  "src": "440:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16918,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16921,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "459:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16937,
                  "src": "451:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16920,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "451:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "439:22:65"
            },
            "returnParameters": {
              "id": 16925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16924,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16937,
                  "src": "485:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16923,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "485:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "484:9:65"
            },
            "scope": 17104,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 16957,
            "nodeType": "FunctionDefinition",
            "src": "585:156:65",
            "nodes": [],
            "body": {
              "id": 16956,
              "nodeType": "Block",
              "src": "656:85:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    16947
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16947,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "674:6:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 16956,
                      "src": "666:14:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16946,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "666:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 16953,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 16950,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16939,
                        "src": "706:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 16951,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16941,
                        "src": "709:1:65",
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
                        "id": 16948,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11134,
                        "src": "683:14:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$11134_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 16949,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "698:7:65",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10450,
                      "src": "683:22:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16952,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "683:28:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "666:45:65"
                },
                {
                  "expression": {
                    "id": 16954,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16947,
                    "src": "728:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16945,
                  "id": 16955,
                  "nodeType": "Return",
                  "src": "721:13:65"
                }
              ]
            },
            "functionSelector": "9ba5f52e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divDown",
            "nameLocation": "594:7:65",
            "parameters": {
              "id": 16942,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16939,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "610:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16957,
                  "src": "602:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16938,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "602:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16941,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "621:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16957,
                  "src": "613:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16940,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "613:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "601:22:65"
            },
            "returnParameters": {
              "id": 16945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16944,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16957,
                  "src": "647:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16943,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "647:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "646:9:65"
            },
            "scope": 17104,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 16980,
            "nodeType": "FunctionDefinition",
            "src": "747:204:65",
            "nodes": [],
            "body": {
              "id": 16979,
              "nodeType": "Block",
              "src": "862:89:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    16969
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16969,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "880:6:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 16979,
                      "src": "872:14:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16968,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "872:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 16976,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 16972,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16959,
                        "src": "913:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 16973,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16961,
                        "src": "916:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 16974,
                        "name": "d",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16963,
                        "src": "919:1:65",
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
                        "id": 16970,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11134,
                        "src": "889:14:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$11134_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 16971,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "904:8:65",
                      "memberName": "mulDivUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10464,
                      "src": "889:23:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16975,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "889:32:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "872:49:65"
                },
                {
                  "expression": {
                    "id": 16977,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16969,
                    "src": "938:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16967,
                  "id": 16978,
                  "nodeType": "Return",
                  "src": "931:13:65"
                }
              ]
            },
            "functionSelector": "12bd6ac0",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivUp",
            "nameLocation": "756:8:65",
            "parameters": {
              "id": 16964,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16959,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "782:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16980,
                  "src": "774:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16958,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "774:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16961,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "801:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16980,
                  "src": "793:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16960,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "793:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16963,
                  "mutability": "mutable",
                  "name": "d",
                  "nameLocation": "820:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16980,
                  "src": "812:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16962,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "812:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "764:63:65"
            },
            "returnParameters": {
              "id": 16967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16966,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "859:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 16980,
                  "src": "851:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16965,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "850:11:65"
            },
            "scope": 17104,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17000,
            "nodeType": "FunctionDefinition",
            "src": "957:152:65",
            "nodes": [],
            "body": {
              "id": 16999,
              "nodeType": "Block",
              "src": "1026:83:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    16990
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16990,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1044:6:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 16999,
                      "src": "1036:14:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16989,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1036:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 16996,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 16993,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16982,
                        "src": "1074:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 16994,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16984,
                        "src": "1077:1:65",
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
                        "id": 16991,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11134,
                        "src": "1053:14:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$11134_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 16992,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1068:5:65",
                      "memberName": "mulUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10482,
                      "src": "1053:20:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1053:26:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1036:43:65"
                },
                {
                  "expression": {
                    "id": 16997,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16990,
                    "src": "1096:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16988,
                  "id": 16998,
                  "nodeType": "Return",
                  "src": "1089:13:65"
                }
              ]
            },
            "functionSelector": "f3e4f87c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulUp",
            "nameLocation": "966:5:65",
            "parameters": {
              "id": 16985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16982,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "980:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17000,
                  "src": "972:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16981,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "972:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16984,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "991:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17000,
                  "src": "983:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16983,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "983:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "971:22:65"
            },
            "returnParameters": {
              "id": 16988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16987,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17000,
                  "src": "1017:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16986,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1017:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1016:9:65"
            },
            "scope": 17104,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17020,
            "nodeType": "FunctionDefinition",
            "src": "1115:152:65",
            "nodes": [],
            "body": {
              "id": 17019,
              "nodeType": "Block",
              "src": "1184:83:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    17010
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17010,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1202:6:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 17019,
                      "src": "1194:14:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17009,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1194:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17016,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 17013,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17002,
                        "src": "1232:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17014,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17004,
                        "src": "1235:1:65",
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
                        "id": 17011,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11134,
                        "src": "1211:14:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$11134_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 17012,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1226:5:65",
                      "memberName": "divUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10500,
                      "src": "1211:20:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17015,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1211:26:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1194:43:65"
                },
                {
                  "expression": {
                    "id": 17017,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17010,
                    "src": "1254:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17008,
                  "id": 17018,
                  "nodeType": "Return",
                  "src": "1247:13:65"
                }
              ]
            },
            "functionSelector": "cbe8623f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divUp",
            "nameLocation": "1124:5:65",
            "parameters": {
              "id": 17005,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17002,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1138:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17020,
                  "src": "1130:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17001,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1130:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17004,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1149:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17020,
                  "src": "1141:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17003,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1141:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1129:22:65"
            },
            "returnParameters": {
              "id": 17008,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17007,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17020,
                  "src": "1175:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17006,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1175:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1174:9:65"
            },
            "scope": 17104,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17040,
            "nodeType": "FunctionDefinition",
            "src": "1273:148:65",
            "nodes": [],
            "body": {
              "id": 17039,
              "nodeType": "Block",
              "src": "1340:81:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    17030
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17030,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1358:6:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 17039,
                      "src": "1350:14:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17029,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1350:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17036,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 17033,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17022,
                        "src": "1386:1:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17034,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17024,
                        "src": "1389:1:65",
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
                        "id": 17031,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11134,
                        "src": "1367:14:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$11134_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 17032,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1382:3:65",
                      "memberName": "pow",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10559,
                      "src": "1367:18:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1367:24:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1350:41:65"
                },
                {
                  "expression": {
                    "id": 17037,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17030,
                    "src": "1408:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17028,
                  "id": 17038,
                  "nodeType": "Return",
                  "src": "1401:13:65"
                }
              ]
            },
            "functionSelector": "2e4c697f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pow",
            "nameLocation": "1282:3:65",
            "parameters": {
              "id": 17025,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17022,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1294:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17040,
                  "src": "1286:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17021,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17024,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1305:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17040,
                  "src": "1297:9:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17023,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1297:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1285:22:65"
            },
            "returnParameters": {
              "id": 17028,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17027,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17040,
                  "src": "1331:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17026,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1331:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1330:9:65"
            },
            "scope": 17104,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17057,
            "nodeType": "FunctionDefinition",
            "src": "1427:133:65",
            "nodes": [],
            "body": {
              "id": 17056,
              "nodeType": "Block",
              "src": "1483:77:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    17048
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17048,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1500:6:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 17056,
                      "src": "1493:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 17047,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1493:6:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17053,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 17051,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17042,
                        "src": "1528:1:65",
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
                        "id": 17049,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11134,
                        "src": "1509:14:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$11134_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 17050,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1524:3:65",
                      "memberName": "exp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10756,
                      "src": "1509:18:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 17052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1509:21:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1493:37:65"
                },
                {
                  "expression": {
                    "id": 17054,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17048,
                    "src": "1547:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 17046,
                  "id": 17055,
                  "nodeType": "Return",
                  "src": "1540:13:65"
                }
              ]
            },
            "functionSelector": "e46751e3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exp",
            "nameLocation": "1436:3:65",
            "parameters": {
              "id": 17043,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17042,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1447:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17057,
                  "src": "1440:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 17041,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1440:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1439:10:65"
            },
            "returnParameters": {
              "id": 17046,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17045,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1480:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17057,
                  "src": "1473:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 17044,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1473:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1472:10:65"
            },
            "scope": 17104,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17074,
            "nodeType": "FunctionDefinition",
            "src": "1566:129:65",
            "nodes": [],
            "body": {
              "id": 17073,
              "nodeType": "Block",
              "src": "1619:76:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    17065
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17065,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1636:6:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 17073,
                      "src": "1629:13:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 17064,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1629:6:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17070,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 17068,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17059,
                        "src": "1663:1:65",
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
                        "id": 17066,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11134,
                        "src": "1645:14:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$11134_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 17067,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1660:2:65",
                      "memberName": "ln",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10778,
                      "src": "1645:17:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 17069,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1645:20:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1629:36:65"
                },
                {
                  "expression": {
                    "id": 17071,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17065,
                    "src": "1682:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 17063,
                  "id": 17072,
                  "nodeType": "Return",
                  "src": "1675:13:65"
                }
              ]
            },
            "functionSelector": "8e6f2353",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ln",
            "nameLocation": "1575:2:65",
            "parameters": {
              "id": 17060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17059,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1585:1:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17074,
                  "src": "1578:8:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 17058,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1578:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1577:10:65"
            },
            "returnParameters": {
              "id": 17063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17062,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17074,
                  "src": "1611:6:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 17061,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1611:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1610:8:65"
            },
            "scope": 17104,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17103,
            "nodeType": "FunctionDefinition",
            "src": "1701:431:65",
            "nodes": [],
            "body": {
              "id": 17102,
              "nodeType": "Block",
              "src": "1912:220:65",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    17090
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17090,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1930:6:65",
                      "nodeType": "VariableDeclaration",
                      "scope": 17102,
                      "src": "1922:14:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17089,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1922:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17099,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 17093,
                        "name": "_average",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17076,
                        "src": "1989:8:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17094,
                        "name": "_totalWeight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17078,
                        "src": "2011:12:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17095,
                        "name": "_delta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17080,
                        "src": "2037:6:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17096,
                        "name": "_deltaWeight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17082,
                        "src": "2057:12:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17097,
                        "name": "_isAdding",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17084,
                        "src": "2083:9:65",
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
                        "id": 17091,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11134,
                        "src": "1939:14:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$11134_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 17092,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1954:21:65",
                      "memberName": "updateWeightedAverage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11061,
                      "src": "1939:36:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                      }
                    },
                    "id": 17098,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1939:163:65",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1922:180:65"
                },
                {
                  "expression": {
                    "id": 17100,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17090,
                    "src": "2119:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17088,
                  "id": 17101,
                  "nodeType": "Return",
                  "src": "2112:13:65"
                }
              ]
            },
            "functionSelector": "81e5f7c9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateWeightedAverage",
            "nameLocation": "1710:21:65",
            "parameters": {
              "id": 17085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17076,
                  "mutability": "mutable",
                  "name": "_average",
                  "nameLocation": "1749:8:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17103,
                  "src": "1741:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17075,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1741:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17078,
                  "mutability": "mutable",
                  "name": "_totalWeight",
                  "nameLocation": "1775:12:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17103,
                  "src": "1767:20:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1767:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17080,
                  "mutability": "mutable",
                  "name": "_delta",
                  "nameLocation": "1805:6:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17103,
                  "src": "1797:14:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17079,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1797:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17082,
                  "mutability": "mutable",
                  "name": "_deltaWeight",
                  "nameLocation": "1829:12:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17103,
                  "src": "1821:20:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1821:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17084,
                  "mutability": "mutable",
                  "name": "_isAdding",
                  "nameLocation": "1856:9:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17103,
                  "src": "1851:14:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17083,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1851:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1731:140:65"
            },
            "returnParameters": {
              "id": 17088,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17087,
                  "mutability": "mutable",
                  "name": "average",
                  "nameLocation": "1903:7:65",
                  "nodeType": "VariableDeclaration",
                  "scope": 17103,
                  "src": "1895:15:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17086,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1895:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1894:17:65"
            },
            "scope": 17104,
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
          17104
        ],
        "name": "MockFixedPointMath",
        "nameLocation": "145:18:65",
        "scope": 17105,
        "usedErrors": [
          4649,
          4651,
          4653
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 65
} as const;
