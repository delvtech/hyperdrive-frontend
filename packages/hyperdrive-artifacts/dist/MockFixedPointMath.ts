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
    "object": "0x608060405234801561001057600080fd5b506108c5806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b136600461075e565b610173565b60405190815260200160405180910390f35b6100b66100d6366004610780565b61018a565b6100b66100e936600461075e565b6101a1565b6100b66100fc3660046107ac565b6101ae565b6100b661010f3660046107fe565b6101c9565b6100b661012236600461075e565b6101dc565b6100b6610135366004610780565b6101e9565b6100b661014836600461075e565b6101f7565b6100b661015b3660046107fe565b610204565b6100b661016e36600461075e565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102b9565b979650505050505050565b6000806101d583610333565b9392505050565b600080610180848461035e565b60008061019885858561036f565b600080610180848461038d565b6000806101d5836103a2565b600080610180848461052d565b60006101d58383670de0b6b3a764000061036f565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b81600061028d85610542565b90508181026102a4670de0b6b3a76400008261082d565b90506102af816103a2565b9695505050505050565b600081156102f9576102f26102ce8487610869565b6102d8858761021d565b6102e2888a61021d565b6102ec9190610869565b9061038d565b9050610198565b82850361030857506000610198565b6102af610315848761087c565b61031f858761021d565b610329888a61021d565b6102ec919061087c565b60008082136103555760405163562f8dc760e11b815260040160405180910390fd5b61018482610542565b60006101d583670de0b6b3a7640000845b600082600019048411830215820261038657600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e1982136103bd57506000919050565b680755bf798b4a1bf1e582126103e65760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006101d58383670de0b6b3a7640000610232565b600080821361056457604051636838feed60e11b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000806040838503121561077157600080fd5b50508035926020909101359150565b60008060006060848603121561079557600080fd5b505081359360208301359350604090920135919050565b600080600080600060a086880312156107c457600080fd5b85359450602086013593506040860135925060608601359150608086013580151581146107f057600080fd5b809150509295509295909350565b60006020828403121561081057600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008261084a57634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561086457610864610817565b500590565b8082018082111561018457610184610817565b818103818111156101845761018461081756fea2646970667358221220f182c46634681ada21fca2fb2e7612c5513cf37ba20dcf19aaa057bc5adcc1d564736f6c63430008130033",
    "sourceMap": "136:1998:49:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b136600461075e565b610173565b60405190815260200160405180910390f35b6100b66100d6366004610780565b61018a565b6100b66100e936600461075e565b6101a1565b6100b66100fc3660046107ac565b6101ae565b6100b661010f3660046107fe565b6101c9565b6100b661012236600461075e565b6101dc565b6100b6610135366004610780565b6101e9565b6100b661014836600461075e565b6101f7565b6100b661015b3660046107fe565b610204565b6100b661016e36600461075e565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102b9565b979650505050505050565b6000806101d583610333565b9392505050565b600080610180848461035e565b60008061019885858561036f565b600080610180848461038d565b6000806101d5836103a2565b600080610180848461052d565b60006101d58383670de0b6b3a764000061036f565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b81600061028d85610542565b90508181026102a4670de0b6b3a76400008261082d565b90506102af816103a2565b9695505050505050565b600081156102f9576102f26102ce8487610869565b6102d8858761021d565b6102e2888a61021d565b6102ec9190610869565b9061038d565b9050610198565b82850361030857506000610198565b6102af610315848761087c565b61031f858761021d565b610329888a61021d565b6102ec919061087c565b60008082136103555760405163562f8dc760e11b815260040160405180910390fd5b61018482610542565b60006101d583670de0b6b3a7640000845b600082600019048411830215820261038657600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e1982136103bd57506000919050565b680755bf798b4a1bf1e582126103e65760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006101d58383670de0b6b3a7640000610232565b600080821361056457604051636838feed60e11b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000806040838503121561077157600080fd5b50508035926020909101359150565b60008060006060848603121561079557600080fd5b505081359360208301359350604090920135919050565b600080600080600060a086880312156107c457600080fd5b85359450602086013593506040860135925060608601359150608086013580151581146107f057600080fd5b809150509295509295909350565b60006020828403121561081057600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008261084a57634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561086457610864610817565b500590565b8082018082111561018457610184610817565b818103818111156101845761018461081756fea2646970667358221220f182c46634681ada21fca2fb2e7612c5513cf37ba20dcf19aaa057bc5adcc1d564736f6c63430008130033",
    "sourceMap": "136:1998:49:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;423:156;;;;;;:::i;:::-;;:::i;:::-;;;413:25:167;;;401:2;386:18;423:156:49;;;;;;;747:204;;;;;;:::i;:::-;;:::i;1273:148::-;;;;;;:::i;:::-;;:::i;1701:431::-;;;;;;:::i;:::-;;:::i;1566:129::-;;;;;;:::i;:::-;;:::i;585:156::-;;;;;;:::i;:::-;;:::i;209:208::-;;;;;;:::i;:::-;;:::i;1115:152::-;;;;;;:::i;:::-;;:::i;1427:133::-;;;;;;:::i;:::-;;:::i;957:152::-;;;;;;:::i;:::-;;:::i;423:156::-;485:7;504:14;521:28;544:1;547;521:22;:28::i;:::-;504:45;-1:-1:-1;;423:156:49;;;;;:::o;747:204::-;851:9;872:14;889:32;913:1;916;919;889:23;:32::i;:::-;872:49;747:204;-1:-1:-1;;;;;747:204:49:o;1273:148::-;1331:7;1350:14;1367:24;1386:1;1389;1367:18;:24::i;1701:431::-;1895:15;1922:14;1939:163;1989:8;2011:12;2037:6;2057:12;2083:9;1939:36;:163::i;:::-;1922:180;1701:431;-1:-1:-1;;;;;;;1701:431:49:o;1566:129::-;1611:6;1629:13;1645:20;1663:1;1645:17;:20::i;:::-;1629:36;1566:129;-1:-1:-1;;;1566:129:49:o;585:156::-;647:7;666:14;683:28;706:1;709;683:22;:28::i;209:208::-;315:9;336:14;353:34;379:1;382;385;353:25;:34::i;1115:152::-;1175:7;1194:14;1211:26;1232:1;1235;1211:20;:26::i;1427:133::-;1473:8;1493:13;1509:21;1528:1;1509:18;:21::i;957:152::-;1017:7;1036:14;1053:26;1074:1;1077;1053:20;:26::i;1814:119:33:-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;2726:748::-;2840:9;3105:1;-1:-1:-1;;3088:19:33;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:33;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;4671:846::-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:33;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:33;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:33;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;:::-;5485:25;4671:846;-1:-1:-1;;;;;;4671:846:33:o;13582:678::-;13776:15;13807:9;13803:451;;;13842:152;13949:27;13964:12;13949;:27;:::i;:::-;13892:28;:12;13913:6;13892:20;:28::i;:::-;13843:30;:12;13864:8;13843:20;:30::i;:::-;:77;;;;:::i;:::-;13842:85;;:152::i;:::-;13832:162;;13803:451;;;14045:12;14029;:28;14025:42;;-1:-1:-1;14066:1:33;14059:8;;14025:42;14091:152;14198:27;14213:12;14198;:27;:::i;:::-;14141:28;:12;14162:6;14141:20;:28::i;:::-;14092:30;:12;14113:8;14092:20;:30::i;:::-;:77;;;;:::i;9412:160::-;9457:6;9484:1;9479;:6;9475:67;;9494:48;;-1:-1:-1;;;9494:48:33;;;;;;;;;;;9475:67;9559:6;9563:1;9559:3;:6::i;2207:165::-;2269:7;2296:22;2307:1;2310:4;2316:1;984:556;1100:9;1365:1;-1:-1:-1;;1348:19:33;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:33;;1497:27;;984:556::o;4141:115::-;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;5773:3347::-;5819:8;-1:-1:-1;;5996:1:33;:26;5992:40;;-1:-1:-1;6031:1:33;;5773:3347;-1:-1:-1;5773:3347:33:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:33;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:33;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:33;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:33;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:33;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:33;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:33;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:33;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:33:o;3750:115::-;3810:7;3837:20;3846:1;3849;3852:4;3837:8;:20::i;9632:3592::-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:33;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:33;10164:34;-1:-1:-1;;10158:1:33;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:33;11255:5;;11254:13;;-1:-1:-1;;11253:50:33;11323:5;;11322:13;;;-1:-1:-1;;11321:50:33;11389:5;-1:-1:-1;;11389:46:33;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:33;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;14:248:167:-;82:6;90;143:2;131:9;122:7;118:23;114:32;111:52;;;159:1;156;149:12;111:52;-1:-1:-1;;182:23:167;;;252:2;237:18;;;224:32;;-1:-1:-1;14:248:167:o;449:316::-;526:6;534;542;595:2;583:9;574:7;570:23;566:32;563:52;;;611:1;608;601:12;563:52;-1:-1:-1;;634:23:167;;;704:2;689:18;;676:32;;-1:-1:-1;755:2:167;740:18;;;727:32;;449:316;-1:-1:-1;449:316:167:o;770:547::-;862:6;870;878;886;894;947:3;935:9;926:7;922:23;918:33;915:53;;;964:1;961;954:12;915:53;1000:9;987:23;977:33;;1057:2;1046:9;1042:18;1029:32;1019:42;;1108:2;1097:9;1093:18;1080:32;1070:42;;1159:2;1148:9;1144:18;1131:32;1121:42;;1213:3;1202:9;1198:19;1185:33;1261:5;1254:13;1247:21;1240:5;1237:32;1227:60;;1283:1;1280;1273:12;1227:60;1306:5;1296:15;;;770:547;;;;;;;;:::o;1322:179::-;1380:6;1433:2;1421:9;1412:7;1408:23;1404:32;1401:52;;;1449:1;1446;1439:12;1401:52;-1:-1:-1;1472:23:167;;1322:179;-1:-1:-1;1322:179:167:o;1818:127::-;1879:10;1874:3;1870:20;1867:1;1860:31;1910:4;1907:1;1900:15;1934:4;1931:1;1924:15;1950:290;1989:1;2015;2005:132;;2059:10;2054:3;2050:20;2047:1;2040:31;2094:4;2091:1;2084:15;2122:4;2119:1;2112:15;2005:132;-1:-1:-1;;;2153:18:167;;-1:-1:-1;;2173:13:167;;2149:38;2146:64;;;2190:18;;:::i;:::-;-1:-1:-1;2224:10:167;;1950:290::o;2245:125::-;2310:9;;;2331:10;;;2328:36;;;2344:18;;:::i;2375:128::-;2442:9;;;2463:11;;;2460:37;;;2477:18;;:::i",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_NegativeOrZeroInput\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"exp\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"r\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"ln\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"}],\"name\":\"pow\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_average\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalWeight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_delta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_deltaWeight\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isAdding\",\"type\":\"bool\"}],\"name\":\"updateWeightedAverage\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"average\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockFixedPointMath.sol\":\"MockFixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/test/MockFixedPointMath.sol\":{\"keccak256\":\"0x5e82986f7623b7ebfefb3c2ac049880084b606dc0fe46e7182140360c6543026\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c6c6467ea0d201fbd0b98b8d65251cc4e9e79cfa88a1f697f1828b999b74dfcd\",\"dweb:/ipfs/QmYFNTqLhBNuBg37qMTh6nRPmnZ2h6DJkLkWHw7TuqgVMD\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
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
      "contracts/src/interfaces/IDataProvider.sol": {
        "keccak256": "0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843",
        "urls": [
          "bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15",
          "dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc",
        "urls": [
          "bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206",
          "dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        "urls": [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"
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
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockFixedPointMath.sol",
    "id": 13513,
    "exportedSymbols": {
      "FixedPointMath": [
        9066
      ],
      "MockFixedPointMath": [
        13512
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:2095:49",
    "nodes": [
      {
        "id": 13297,
        "nodeType": "PragmaDirective",
        "src": "40:23:49",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 13299,
        "nodeType": "ImportDirective",
        "src": "65:69:49",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13513,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13298,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "74:14:49",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13512,
        "nodeType": "ContractDefinition",
        "src": "136:1998:49",
        "nodes": [
          {
            "id": 13302,
            "nodeType": "UsingForDirective",
            "src": "170:33:49",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 13300,
              "name": "FixedPointMath",
              "nameLocations": [
                "176:14:49"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "176:14:49"
            },
            "typeName": {
              "id": 13301,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "195:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 13325,
            "nodeType": "FunctionDefinition",
            "src": "209:208:49",
            "nodes": [],
            "body": {
              "id": 13324,
              "nodeType": "Block",
              "src": "326:91:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13314
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13314,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "344:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 13324,
                      "src": "336:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13313,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "336:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13321,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13317,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13304,
                        "src": "379:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13318,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13306,
                        "src": "382:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13319,
                        "name": "d",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13308,
                        "src": "385:1:49",
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
                        "id": 13315,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9066,
                        "src": "353:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 13316,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "368:10:49",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8346,
                      "src": "353:25:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "353:34:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "336:51:49"
                },
                {
                  "expression": {
                    "id": 13322,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13314,
                    "src": "404:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13312,
                  "id": 13323,
                  "nodeType": "Return",
                  "src": "397:13:49"
                }
              ]
            },
            "functionSelector": "b67bee04",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivDown",
            "nameLocation": "218:10:49",
            "parameters": {
              "id": 13309,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13304,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "246:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13325,
                  "src": "238:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13303,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13306,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "265:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13325,
                  "src": "257:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13305,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "257:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13308,
                  "mutability": "mutable",
                  "name": "d",
                  "nameLocation": "284:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13325,
                  "src": "276:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13307,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "276:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "228:63:49"
            },
            "returnParameters": {
              "id": 13312,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13311,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "323:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13325,
                  "src": "315:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13310,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "315:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "314:11:49"
            },
            "scope": 13512,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13345,
            "nodeType": "FunctionDefinition",
            "src": "423:156:49",
            "nodes": [],
            "body": {
              "id": 13344,
              "nodeType": "Block",
              "src": "494:85:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13335
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13335,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "512:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 13344,
                      "src": "504:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13334,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "504:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13341,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13338,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13327,
                        "src": "544:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13339,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13329,
                        "src": "547:1:49",
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
                        "id": 13336,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9066,
                        "src": "521:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 13337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "536:7:49",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8364,
                      "src": "521:22:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "521:28:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "504:45:49"
                },
                {
                  "expression": {
                    "id": 13342,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13335,
                    "src": "566:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13333,
                  "id": 13343,
                  "nodeType": "Return",
                  "src": "559:13:49"
                }
              ]
            },
            "functionSelector": "0c9b9881",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDown",
            "nameLocation": "432:7:49",
            "parameters": {
              "id": 13330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13327,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "448:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13345,
                  "src": "440:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13326,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13329,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "459:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13345,
                  "src": "451:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13328,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "451:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "439:22:49"
            },
            "returnParameters": {
              "id": 13333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13332,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13345,
                  "src": "485:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13331,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "485:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "484:9:49"
            },
            "scope": 13512,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13365,
            "nodeType": "FunctionDefinition",
            "src": "585:156:49",
            "nodes": [],
            "body": {
              "id": 13364,
              "nodeType": "Block",
              "src": "656:85:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13355
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13355,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "674:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 13364,
                      "src": "666:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13354,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "666:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13361,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13358,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13347,
                        "src": "706:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13359,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13349,
                        "src": "709:1:49",
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
                        "id": 13356,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9066,
                        "src": "683:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 13357,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "698:7:49",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8382,
                      "src": "683:22:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13360,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "683:28:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "666:45:49"
                },
                {
                  "expression": {
                    "id": 13362,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13355,
                    "src": "728:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13353,
                  "id": 13363,
                  "nodeType": "Return",
                  "src": "721:13:49"
                }
              ]
            },
            "functionSelector": "9ba5f52e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divDown",
            "nameLocation": "594:7:49",
            "parameters": {
              "id": 13350,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13347,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "610:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13365,
                  "src": "602:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13346,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "602:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13349,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "621:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13365,
                  "src": "613:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13348,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "613:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "601:22:49"
            },
            "returnParameters": {
              "id": 13353,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13352,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13365,
                  "src": "647:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13351,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "647:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "646:9:49"
            },
            "scope": 13512,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13388,
            "nodeType": "FunctionDefinition",
            "src": "747:204:49",
            "nodes": [],
            "body": {
              "id": 13387,
              "nodeType": "Block",
              "src": "862:89:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13377
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13377,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "880:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 13387,
                      "src": "872:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13376,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "872:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13384,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13380,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13367,
                        "src": "913:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13381,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13369,
                        "src": "916:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13382,
                        "name": "d",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13371,
                        "src": "919:1:49",
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
                        "id": 13378,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9066,
                        "src": "889:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 13379,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "904:8:49",
                      "memberName": "mulDivUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8396,
                      "src": "889:23:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "889:32:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "872:49:49"
                },
                {
                  "expression": {
                    "id": 13385,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13377,
                    "src": "938:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13375,
                  "id": 13386,
                  "nodeType": "Return",
                  "src": "931:13:49"
                }
              ]
            },
            "functionSelector": "12bd6ac0",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivUp",
            "nameLocation": "756:8:49",
            "parameters": {
              "id": 13372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13367,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "782:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13388,
                  "src": "774:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13366,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "774:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13369,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "801:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13388,
                  "src": "793:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13368,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "793:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13371,
                  "mutability": "mutable",
                  "name": "d",
                  "nameLocation": "820:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13388,
                  "src": "812:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13370,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "812:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "764:63:49"
            },
            "returnParameters": {
              "id": 13375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13374,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "859:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13388,
                  "src": "851:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13373,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "850:11:49"
            },
            "scope": 13512,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13408,
            "nodeType": "FunctionDefinition",
            "src": "957:152:49",
            "nodes": [],
            "body": {
              "id": 13407,
              "nodeType": "Block",
              "src": "1026:83:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13398
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13398,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1044:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 13407,
                      "src": "1036:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13397,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1036:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13404,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13401,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13390,
                        "src": "1074:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13402,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13392,
                        "src": "1077:1:49",
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
                        "id": 13399,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9066,
                        "src": "1053:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 13400,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1068:5:49",
                      "memberName": "mulUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8414,
                      "src": "1053:20:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1053:26:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1036:43:49"
                },
                {
                  "expression": {
                    "id": 13405,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13398,
                    "src": "1096:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13396,
                  "id": 13406,
                  "nodeType": "Return",
                  "src": "1089:13:49"
                }
              ]
            },
            "functionSelector": "f3e4f87c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulUp",
            "nameLocation": "966:5:49",
            "parameters": {
              "id": 13393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13390,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "980:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13408,
                  "src": "972:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13389,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "972:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13392,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "991:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13408,
                  "src": "983:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13391,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "983:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "971:22:49"
            },
            "returnParameters": {
              "id": 13396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13395,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13408,
                  "src": "1017:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13394,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1017:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1016:9:49"
            },
            "scope": 13512,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13428,
            "nodeType": "FunctionDefinition",
            "src": "1115:152:49",
            "nodes": [],
            "body": {
              "id": 13427,
              "nodeType": "Block",
              "src": "1184:83:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13418
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13418,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1202:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 13427,
                      "src": "1194:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13417,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1194:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13424,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13421,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13410,
                        "src": "1232:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13422,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13412,
                        "src": "1235:1:49",
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
                        "id": 13419,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9066,
                        "src": "1211:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 13420,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1226:5:49",
                      "memberName": "divUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8432,
                      "src": "1211:20:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13423,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1211:26:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1194:43:49"
                },
                {
                  "expression": {
                    "id": 13425,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13418,
                    "src": "1254:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13416,
                  "id": 13426,
                  "nodeType": "Return",
                  "src": "1247:13:49"
                }
              ]
            },
            "functionSelector": "cbe8623f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divUp",
            "nameLocation": "1124:5:49",
            "parameters": {
              "id": 13413,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13410,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1138:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13428,
                  "src": "1130:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13409,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1130:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13412,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1149:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13428,
                  "src": "1141:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13411,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1141:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1129:22:49"
            },
            "returnParameters": {
              "id": 13416,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13415,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13428,
                  "src": "1175:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13414,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1175:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1174:9:49"
            },
            "scope": 13512,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13448,
            "nodeType": "FunctionDefinition",
            "src": "1273:148:49",
            "nodes": [],
            "body": {
              "id": 13447,
              "nodeType": "Block",
              "src": "1340:81:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13438
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13438,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1358:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 13447,
                      "src": "1350:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13437,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1350:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13444,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13441,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13430,
                        "src": "1386:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13442,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13432,
                        "src": "1389:1:49",
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
                        "id": 13439,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9066,
                        "src": "1367:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 13440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1382:3:49",
                      "memberName": "pow",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8491,
                      "src": "1367:18:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13443,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1367:24:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1350:41:49"
                },
                {
                  "expression": {
                    "id": 13445,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13438,
                    "src": "1408:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13436,
                  "id": 13446,
                  "nodeType": "Return",
                  "src": "1401:13:49"
                }
              ]
            },
            "functionSelector": "2e4c697f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pow",
            "nameLocation": "1282:3:49",
            "parameters": {
              "id": 13433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13430,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1294:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13448,
                  "src": "1286:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13429,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13432,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1305:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13448,
                  "src": "1297:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13431,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1297:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1285:22:49"
            },
            "returnParameters": {
              "id": 13436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13435,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13448,
                  "src": "1331:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13434,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1331:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1330:9:49"
            },
            "scope": 13512,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13465,
            "nodeType": "FunctionDefinition",
            "src": "1427:133:49",
            "nodes": [],
            "body": {
              "id": 13464,
              "nodeType": "Block",
              "src": "1483:77:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13456
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13456,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1500:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 13464,
                      "src": "1493:13:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 13455,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1493:6:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13461,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13459,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13450,
                        "src": "1528:1:49",
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
                        "id": 13457,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9066,
                        "src": "1509:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 13458,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1524:3:49",
                      "memberName": "exp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8688,
                      "src": "1509:18:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 13460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1509:21:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1493:37:49"
                },
                {
                  "expression": {
                    "id": 13462,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13456,
                    "src": "1547:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 13454,
                  "id": 13463,
                  "nodeType": "Return",
                  "src": "1540:13:49"
                }
              ]
            },
            "functionSelector": "e46751e3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exp",
            "nameLocation": "1436:3:49",
            "parameters": {
              "id": 13451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13450,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1447:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13465,
                  "src": "1440:8:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 13449,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1440:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1439:10:49"
            },
            "returnParameters": {
              "id": 13454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13453,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1480:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13465,
                  "src": "1473:8:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 13452,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1473:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1472:10:49"
            },
            "scope": 13512,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13482,
            "nodeType": "FunctionDefinition",
            "src": "1566:129:49",
            "nodes": [],
            "body": {
              "id": 13481,
              "nodeType": "Block",
              "src": "1619:76:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13473
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13473,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1636:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 13481,
                      "src": "1629:13:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 13472,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1629:6:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13478,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13476,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13467,
                        "src": "1663:1:49",
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
                        "id": 13474,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9066,
                        "src": "1645:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 13475,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1660:2:49",
                      "memberName": "ln",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8710,
                      "src": "1645:17:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 13477,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1645:20:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1629:36:49"
                },
                {
                  "expression": {
                    "id": 13479,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13473,
                    "src": "1682:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 13471,
                  "id": 13480,
                  "nodeType": "Return",
                  "src": "1675:13:49"
                }
              ]
            },
            "functionSelector": "8e6f2353",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ln",
            "nameLocation": "1575:2:49",
            "parameters": {
              "id": 13468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13467,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1585:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13482,
                  "src": "1578:8:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 13466,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1578:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1577:10:49"
            },
            "returnParameters": {
              "id": 13471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13470,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13482,
                  "src": "1611:6:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 13469,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1611:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1610:8:49"
            },
            "scope": 13512,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13511,
            "nodeType": "FunctionDefinition",
            "src": "1701:431:49",
            "nodes": [],
            "body": {
              "id": 13510,
              "nodeType": "Block",
              "src": "1912:220:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13498
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13498,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1930:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 13510,
                      "src": "1922:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13497,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1922:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13507,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13501,
                        "name": "_average",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13484,
                        "src": "1989:8:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13502,
                        "name": "_totalWeight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13486,
                        "src": "2011:12:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13503,
                        "name": "_delta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13488,
                        "src": "2037:6:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13504,
                        "name": "_deltaWeight",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13490,
                        "src": "2057:12:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13505,
                        "name": "_isAdding",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13492,
                        "src": "2083:9:49",
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
                        "id": 13499,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9066,
                        "src": "1939:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 13500,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1954:21:49",
                      "memberName": "updateWeightedAverage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8993,
                      "src": "1939:36:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                      }
                    },
                    "id": 13506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1939:163:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1922:180:49"
                },
                {
                  "expression": {
                    "id": 13508,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13498,
                    "src": "2119:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13496,
                  "id": 13509,
                  "nodeType": "Return",
                  "src": "2112:13:49"
                }
              ]
            },
            "functionSelector": "81e5f7c9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateWeightedAverage",
            "nameLocation": "1710:21:49",
            "parameters": {
              "id": 13493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13484,
                  "mutability": "mutable",
                  "name": "_average",
                  "nameLocation": "1749:8:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13511,
                  "src": "1741:16:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13483,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1741:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13486,
                  "mutability": "mutable",
                  "name": "_totalWeight",
                  "nameLocation": "1775:12:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13511,
                  "src": "1767:20:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13485,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1767:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13488,
                  "mutability": "mutable",
                  "name": "_delta",
                  "nameLocation": "1805:6:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13511,
                  "src": "1797:14:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13487,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1797:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13490,
                  "mutability": "mutable",
                  "name": "_deltaWeight",
                  "nameLocation": "1829:12:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13511,
                  "src": "1821:20:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13489,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1821:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13492,
                  "mutability": "mutable",
                  "name": "_isAdding",
                  "nameLocation": "1856:9:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13511,
                  "src": "1851:14:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13491,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1851:4:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1731:140:49"
            },
            "returnParameters": {
              "id": 13496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13495,
                  "mutability": "mutable",
                  "name": "average",
                  "nameLocation": "1903:7:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 13511,
                  "src": "1895:15:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13494,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1895:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1894:17:49"
            },
            "scope": 13512,
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
          13512
        ],
        "name": "MockFixedPointMath",
        "nameLocation": "145:18:49",
        "scope": 13513,
        "usedErrors": [
          7416,
          7418,
          7420
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 49
} as const;
