export const MockYieldSpaceMath = 
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
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "z",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "y",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "dz",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "t",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "c",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "mu",
          "type": "uint256"
        }
      ],
      "name": "calculateBondsOutGivenSharesIn",
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
          "name": "z",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "y",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "t",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "c",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "mu",
          "type": "uint256"
        }
      ],
      "name": "calculateMaxBuy",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
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
          "name": "z",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "y",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "dy",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "t",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "c",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "mu",
          "type": "uint256"
        }
      ],
      "name": "calculateSharesInGivenBondsOut",
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
          "name": "z",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "y",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "dy",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "t",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "c",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "mu",
          "type": "uint256"
        }
      ],
      "name": "calculateSharesOutGivenBondsIn",
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
          "name": "cDivMu",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "mu",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "z",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "t",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "y",
          "type": "uint256"
        }
      ],
      "name": "modifiedYieldSpaceConstant",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b506109bd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633646521e1461005c57806371464b051461008257806372c0672b14610095578063a33d1b7e146100a8578063c500b741146100d0575b600080fd5b61006f61006a366004610891565b6100e3565b6040519081526020015b60405180910390f35b61006f6100903660046108cc565b6100fe565b61006f6100a33660046108cc565b61011b565b6100bb6100b6366004610891565b61012c565b60408051928352602083019190915201610079565b61006f6100de3660046108cc565b61014f565b6000806100f38787878787610160565b979650505050505050565b60008061010f88888888888861019e565b98975050505050505050565b60008061010f8888888888886101dd565b60008060008061013f898989898961025e565b909a909950975050505050505050565b60008061010f8888888888886102e8565b600061016c828461035b565b61018a6101838561017d89896103be565b9061035b565b88906103be565b6101949190610925565b9695505050505050565b6000806101af8888888888886103da565b9092509050806101d257604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000806101ea848461047c565b905060006101fb82858b898c610160565b90506102158661017d61020e8a8d610925565b87906103be565b9850610221828a6103be565b9850600061024461023a670de0b6b3a764000089610491565b61017d8c85610938565b9050610250818a610938565b9a9950505050505050505050565b6000808061026c858561047c565b9050600061027d82868b8a8c610160565b905060006102b2610296670de0b6b3a76400008a61047c565b61017d6102ab670de0b6b3a764000087610925565b859061047c565b905060006102c0828861047c565b90506102cc8b82610938565b6102d6838c610938565b95509550505050509550959350505050565b6000806102f5848461047c565b9050600061030682858b898c610160565b90506103168661017d898b610938565b9750600061034361032f670de0b6b3a764000089610491565b61017d8561033d8d87610938565b9061047c565b905061034f818661047c565b90506102508a82610938565b6000816000036103745750670de0b6b3a76400006103b8565b82600003610384575060006103b8565b816000610390856104a6565b90508181026103a7670de0b6b3a76400008261094b565b90506103b2816106c2565b93505050505b92915050565b60006103d38383670de0b6b3a764000061084d565b9392505050565b600080806103e8858561047c565b905060006103f982868c8a8d610160565b90506104098761017d8a8c610925565b98508881101561042157600080935093505050610471565b6000610446610438670de0b6b3a76400008a610491565b61017d8561033d8e87610938565b9050610452818761047c565b9050808b111561046957610466818c610938565b94505b600193505050505b965096945050505050565b60006103d383670de0b6b3a76400008461084d565b60006103d383670de0b6b3a76400008461086b565b60008082136104c857604051636838feed60e11b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136106dd57506000919050565b680755bf798b4a1bf1e582126107065760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600082600019048411830215820261086457600080fd5b5091020490565b600082600019048411830215820261088257600080fd5b50910281810615159190040190565b600080600080600060a086880312156108a957600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60008060008060008060c087890312156108e557600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103b8576103b861090f565b818103818111156103b8576103b861090f565b60008261096857634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156109825761098261090f565b50059056fea26469706673582212207b26dfdceb5dbd91c3ec1adc83497cc376509dbea61182bf1be9ab36a1c2cd9c64736f6c63430008130033",
    "sourceMap": "135:1991:49:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80633646521e1461005c57806371464b051461008257806372c0672b14610095578063a33d1b7e146100a8578063c500b741146100d0575b600080fd5b61006f61006a366004610891565b6100e3565b6040519081526020015b60405180910390f35b61006f6100903660046108cc565b6100fe565b61006f6100a33660046108cc565b61011b565b6100bb6100b6366004610891565b61012c565b60408051928352602083019190915201610079565b61006f6100de3660046108cc565b61014f565b6000806100f38787878787610160565b979650505050505050565b60008061010f88888888888861019e565b98975050505050505050565b60008061010f8888888888886101dd565b60008060008061013f898989898961025e565b909a909950975050505050505050565b60008061010f8888888888886102e8565b600061016c828461035b565b61018a6101838561017d89896103be565b9061035b565b88906103be565b6101949190610925565b9695505050505050565b6000806101af8888888888886103da565b9092509050806101d257604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000806101ea848461047c565b905060006101fb82858b898c610160565b90506102158661017d61020e8a8d610925565b87906103be565b9850610221828a6103be565b9850600061024461023a670de0b6b3a764000089610491565b61017d8c85610938565b9050610250818a610938565b9a9950505050505050505050565b6000808061026c858561047c565b9050600061027d82868b8a8c610160565b905060006102b2610296670de0b6b3a76400008a61047c565b61017d6102ab670de0b6b3a764000087610925565b859061047c565b905060006102c0828861047c565b90506102cc8b82610938565b6102d6838c610938565b95509550505050509550959350505050565b6000806102f5848461047c565b9050600061030682858b898c610160565b90506103168661017d898b610938565b9750600061034361032f670de0b6b3a764000089610491565b61017d8561033d8d87610938565b9061047c565b905061034f818661047c565b90506102508a82610938565b6000816000036103745750670de0b6b3a76400006103b8565b82600003610384575060006103b8565b816000610390856104a6565b90508181026103a7670de0b6b3a76400008261094b565b90506103b2816106c2565b93505050505b92915050565b60006103d38383670de0b6b3a764000061084d565b9392505050565b600080806103e8858561047c565b905060006103f982868c8a8d610160565b90506104098761017d8a8c610925565b98508881101561042157600080935093505050610471565b6000610446610438670de0b6b3a76400008a610491565b61017d8561033d8e87610938565b9050610452818761047c565b9050808b111561046957610466818c610938565b94505b600193505050505b965096945050505050565b60006103d383670de0b6b3a76400008461084d565b60006103d383670de0b6b3a76400008461086b565b60008082136104c857604051636838feed60e11b815260040160405180910390fd5b5060606fffffffffffffffffffffffffffffffff821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136106dd57506000919050565b680755bf798b4a1bf1e582126107065760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600082600019048411830215820261086457600080fd5b5091020490565b600082600019048411830215820261088257600080fd5b50910281810615159190040190565b600080600080600060a086880312156108a957600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60008060008060008060c087890312156108e557600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103b8576103b861090f565b818103818111156103b8576103b861090f565b60008261096857634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156109825761098261090f565b50059056fea26469706673582212207b26dfdceb5dbd91c3ec1adc83497cc376509dbea61182bf1be9ab36a1c2cd9c64736f6c63430008130033",
    "sourceMap": "135:1991:49:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1760:364;;;;;;:::i;:::-;;:::i;:::-;;;619:25:165;;;607:2;592:18;1760:364:49;;;;;;;;977:398;;;;;;:::i;:::-;;:::i;169:::-;;;;;;:::i;:::-;;:::i;1381:373::-;;;;;;:::i;:::-;;:::i;:::-;;;;1357:25:165;;;1413:2;1398:18;;1391:34;;;;1330:18;1381:373:49;1183:248:165;573:398:49;;;;;;:::i;:::-;;:::i;1760:364::-;1926:7;1945:14;1962:132;2017:6;2037:2;2053:1;2068;2083;1962:41;:132::i;:::-;1945:149;1760:364;-1:-1:-1;;;;;;;1760:364:49:o;977:398::-;1162:7;1181:14;1198:147;1257:1;1272;1287:2;1303:1;1318;1333:2;1198:45;:147::i;:::-;1181:164;977:398;-1:-1:-1;;;;;;;;977:398:49:o;169:::-;354:7;373:14;390:147;449:1;464;479:2;495:1;510;525:2;390:45;:147::i;1381:373::-;1531:7;1540;1560:15;1577;1596:116;1640:1;1655;1670;1685;1700:2;1596:30;:116::i;:::-;1559:153;;;;-1:-1:-1;1381:373:49;-1:-1:-1;;;;;;;;1381:373:49:o;573:398::-;758:7;777:14;794:147;853:1;868;883:2;899:1;914;929:2;794:45;:147::i;10669:302:35:-;10835:7;10956:8;:1;10962;10956:5;:8::i;:::-;10917:36;10932:20;10950:1;10932:13;:2;10943:1;10932:10;:13::i;:::-;:17;;:20::i;:::-;10917:6;;:14;:36::i;:::-;:47;;;;:::i;:::-;10910:54;10669:302;-1:-1:-1;;;;;;10669:302:35:o;4871:481::-;5056:14;5082:12;5124:136;5172:1;5187;5202:2;5218:1;5233;5248:2;5124:34;:136::i;:::-;5104:156;;-1:-1:-1;5104:156:35;-1:-1:-1;5104:156:35;5270:76;;5305:30;;-1:-1:-1;;;5305:30:35;;;;;;;;;;;5270:76;5072:280;4871:481;;;;;;;;:::o;2008:837::-;2193:7;;2245:13;:1;2255:2;2245:9;:13::i;:::-;2228:30;;2319:9;2331:47;2358:6;2366:2;2370:1;2373;2376;2331:26;:47::i;:::-;2319:59;-1:-1:-1;2427:25:35;2450:1;2427:18;2438:6;2442:2;2438:1;:6;:::i;:::-;2427:2;;:10;:18::i;:25::-;2423:29;-1:-1:-1;2512:17:35;:6;2423:29;2512:14;:17::i;:::-;2508:21;-1:-1:-1;2644:10:35;2657:43;2669:30;565:4:32;2697:1:35;2669:27;:30::i;:::-;2658:5;2662:1;2658;:5;:::i;2657:43::-;2644:56;-1:-1:-1;2832:6:35;2644:56;2832:1;:6;:::i;:::-;2825:13;2008:837;-1:-1:-1;;;;;;;;;;2008:837:35:o;7623:1046::-;7773:7;;;8276:13;:1;8286:2;8276:9;:13::i;:::-;8259:30;;8299:9;8311:47;8338:6;8346:2;8350:1;8353;8356;8311:26;:47::i;:::-;8299:59;-1:-1:-1;8368:16:35;8387:103;8448:32;565:4:32;8478:1:35;8448:29;:32::i;:::-;8388:41;8398:30;565:4:32;8398:6:35;:30;:::i;:::-;8388:1;;:9;:41::i;8387:103::-;8368:122;-1:-1:-1;8500:16:35;8519:20;8368:122;8536:2;8519:16;:20::i;:::-;8500:39;-1:-1:-1;8635:12:35;8646:1;8500:39;8635:12;:::i;:::-;8649;8653:8;8649:1;:12;:::i;:::-;8627:35;;;;;;;;7623:1046;;;;;;;;:::o;3358:892::-;3543:7;;3595:13;:1;3605:2;3595:9;:13::i;:::-;3578:30;;3669:9;3681:47;3708:6;3716:2;3720:1;3723;3726;3681:26;:47::i;:::-;3669:59;-1:-1:-1;3770:15:35;3783:1;3771:6;3775:2;3771:1;:6;:::i;3770:15::-;3766:19;-1:-1:-1;3884:10:35;3897:81;3938:30;565:4:32;3966:1:35;3938:27;:30::i;:::-;3897:23;3913:6;3898:5;3902:1;3898;:5;:::i;:::-;3897:15;;:23::i;:81::-;3884:94;-1:-1:-1;4088:14:35;3884:94;4099:2;4088:10;:14::i;:::-;4083:19;-1:-1:-1;4237:6:35;4242:1;4083:19;4237:6;:::i;4671:846:32:-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:32;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:32;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:32;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;:::-;5485:25;;;;;4671:846;;;;;:::o;1814:119::-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;:::-;1895:31;1814:119;-1:-1:-1;;;1814:119:32:o;6050:1039:35:-;6239:14;;;6312:13;:1;6322:2;6312:9;:13::i;:::-;6295:30;;6386:9;6398:47;6425:6;6433:2;6437:1;6440;6443;6398:26;:47::i;:::-;6386:59;-1:-1:-1;6487:15:35;6500:1;6488:6;6492:2;6488:1;:6;:::i;6487:15::-;6483:19;;6520:1;6516;:5;6512:53;;;6545:1;6548:5;6537:17;;;;;;;;6512:53;6663:10;6676:81;6717:30;565:4:32;6745:1:35;6717:27;:30::i;:::-;6676:23;6692:6;6677:5;6681:1;6677;:5;:::i;6676:81::-;6663:94;-1:-1:-1;6867:14:35;6663:94;6878:2;6867:10;:14::i;:::-;6862:19;;7015:2;7011:1;:6;7007:52;;;7042:6;7046:2;7042:1;:6;:::i;:::-;7033:15;;7007:52;7078:4;7068:14;;6269:820;;;6050:1039;;;;;;;;;;:::o;2207:165:32:-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;4141:115::-;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;9632:3592::-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:32;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:32;10164:34;-1:-1:-1;;10158:1:32;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:32;11255:5;;11254:13;;-1:-1:-1;;11253:50:32;11323:5;;11322:13;;;-1:-1:-1;;11321:50:32;11389:5;-1:-1:-1;;11389:46:32;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:32;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;5773:3347::-;5819:8;-1:-1:-1;;5996:1:32;:26;5992:40;;-1:-1:-1;6031:1:32;;5773:3347;-1:-1:-1;5773:3347:32:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:32;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:32;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:32;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:32;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:32;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:32;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:32;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:32;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:32:o;984:556::-;1100:9;1365:1;-1:-1:-1;;1348:19:32;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:32;;1497:27;;984:556::o;2726:748::-;2840:9;3105:1;-1:-1:-1;;3088:19:32;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:32;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;14:454:165:-;109:6;117;125;133;141;194:3;182:9;173:7;169:23;165:33;162:53;;;211:1;208;201:12;162:53;-1:-1:-1;;234:23:165;;;304:2;289:18;;276:32;;-1:-1:-1;355:2:165;340:18;;327:32;;406:2;391:18;;378:32;;-1:-1:-1;457:3:165;442:19;429:33;;-1:-1:-1;14:454:165;-1:-1:-1;14:454:165:o;655:523::-;759:6;767;775;783;791;799;852:3;840:9;831:7;827:23;823:33;820:53;;;869:1;866;859:12;820:53;-1:-1:-1;;892:23:165;;;962:2;947:18;;934:32;;-1:-1:-1;1013:2:165;998:18;;985:32;;1064:2;1049:18;;1036:32;;-1:-1:-1;1115:3:165;1100:19;;1087:33;;-1:-1:-1;1167:3:165;1152:19;1139:33;;-1:-1:-1;655:523:165;-1:-1:-1;655:523:165:o;1436:127::-;1497:10;1492:3;1488:20;1485:1;1478:31;1528:4;1525:1;1518:15;1552:4;1549:1;1542:15;1568:125;1633:9;;;1654:10;;;1651:36;;;1667:18;;:::i;1698:128::-;1765:9;;;1786:11;;;1783:37;;;1800:18;;:::i;1963:290::-;2002:1;2028;2018:132;;2072:10;2067:3;2063:20;2060:1;2053:31;2107:4;2104:1;2097:15;2135:4;2132:1;2125:15;2018:132;-1:-1:-1;;;2166:18:165;;-1:-1:-1;;2186:13:165;;2162:38;2159:64;;;2203:18;;:::i;:::-;-1:-1:-1;2237:10:165;;1963:290::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "calculateBondsOutGivenSharesIn(uint256,uint256,uint256,uint256,uint256,uint256)": "72c0672b",
    "calculateMaxBuy(uint256,uint256,uint256,uint256,uint256)": "a33d1b7e",
    "calculateSharesInGivenBondsOut(uint256,uint256,uint256,uint256,uint256,uint256)": "c500b741",
    "calculateSharesOutGivenBondsIn(uint256,uint256,uint256,uint256,uint256,uint256)": "71464b05",
    "modifiedYieldSpaceConstant(uint256,uint256,uint256,uint256,uint256)": "3646521e"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"dz\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"t\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"c\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"mu\",\"type\":\"uint256\"}],\"name\":\"calculateBondsOutGivenSharesIn\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"t\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"c\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"mu\",\"type\":\"uint256\"}],\"name\":\"calculateMaxBuy\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"dy\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"t\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"c\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"mu\",\"type\":\"uint256\"}],\"name\":\"calculateSharesInGivenBondsOut\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"dy\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"t\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"c\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"mu\",\"type\":\"uint256\"}],\"name\":\"calculateSharesOutGivenBondsIn\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"cDivMu\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"mu\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"t\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"}],\"name\":\"modifiedYieldSpaceConstant\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockYieldSpaceMath.sol\":\"MockYieldSpaceMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75\",\"dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef\",\"dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr\"]},\"contracts/test/MockYieldSpaceMath.sol\":{\"keccak256\":\"0x5203739f34954807103c8556482573cb000dad3f620a5037b4cfa8f41dc84cfc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://822cd417cc7fd9bcd35d65f7d76ab846986e4d8e10e64797e4471e8d68064df5\",\"dweb:/ipfs/QmNiNNBvtkqkW7HxmFHqLVuPLxGz4dMqsLXYwZ7p85XYYd\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "z",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "y",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dz",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "t",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "c",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "mu",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateBondsOutGivenSharesIn",
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
              "name": "z",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "y",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "t",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "c",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "mu",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateMaxBuy",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
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
              "name": "z",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "y",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dy",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "t",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "c",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "mu",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateSharesInGivenBondsOut",
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
              "name": "z",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "y",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dy",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "t",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "c",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "mu",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "calculateSharesOutGivenBondsIn",
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
              "name": "cDivMu",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "mu",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "z",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "t",
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
          "name": "modifiedYieldSpaceConstant",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
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
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/test/MockYieldSpaceMath.sol": "MockYieldSpaceMath"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        "urls": [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"
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
        "keccak256": "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        "urls": [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"
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
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2",
        "urls": [
          "bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75",
          "dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        "urls": [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04",
        "urls": [
          "bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef",
          "dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockYieldSpaceMath.sol": {
        "keccak256": "0x5203739f34954807103c8556482573cb000dad3f620a5037b4cfa8f41dc84cfc",
        "urls": [
          "bzz-raw://822cd417cc7fd9bcd35d65f7d76ab846986e4d8e10e64797e4471e8d68064df5",
          "dweb:/ipfs/QmNiNNBvtkqkW7HxmFHqLVuPLxGz4dMqsLXYwZ7p85XYYd"
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
    "absolutePath": "contracts/test/MockYieldSpaceMath.sol",
    "id": 14740,
    "exportedSymbols": {
      "MockYieldSpaceMath": [
        14739
      ],
      "YieldSpaceMath": [
        11319
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:2088:49",
    "nodes": [
      {
        "id": 14576,
        "nodeType": "PragmaDirective",
        "src": "39:23:49",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 14578,
        "nodeType": "ImportDirective",
        "src": "64:69:49",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/YieldSpaceMath.sol",
        "file": "../src/libraries/YieldSpaceMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14740,
        "sourceUnit": 11320,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14577,
              "name": "YieldSpaceMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11319,
              "src": "73:14:49",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14739,
        "nodeType": "ContractDefinition",
        "src": "135:1991:49",
        "nodes": [
          {
            "id": 14610,
            "nodeType": "FunctionDefinition",
            "src": "169:398:49",
            "nodes": [],
            "body": {
              "id": 14609,
              "nodeType": "Block",
              "src": "363:204:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14596
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14596,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "381:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 14609,
                      "src": "373:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14595,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "373:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14606,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14599,
                        "name": "z",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14580,
                        "src": "449:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14600,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14582,
                        "src": "464:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14601,
                        "name": "dz",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14584,
                        "src": "479:2:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14602,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14586,
                        "src": "495:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14603,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14588,
                        "src": "510:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14604,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14590,
                        "src": "525:2:49",
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
                        }
                      ],
                      "expression": {
                        "id": 14597,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11319,
                        "src": "390:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$11319_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 14598,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "405:30:49",
                      "memberName": "calculateBondsOutGivenSharesIn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10933,
                      "src": "390:45:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "390:147:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "373:164:49"
                },
                {
                  "expression": {
                    "id": 14607,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14596,
                    "src": "554:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14594,
                  "id": 14608,
                  "nodeType": "Return",
                  "src": "547:13:49"
                }
              ]
            },
            "functionSelector": "72c0672b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateBondsOutGivenSharesIn",
            "nameLocation": "178:30:49",
            "parameters": {
              "id": 14591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14580,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "226:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14610,
                  "src": "218:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14579,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "218:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14582,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "245:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14610,
                  "src": "237:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "237:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14584,
                  "mutability": "mutable",
                  "name": "dz",
                  "nameLocation": "264:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14610,
                  "src": "256:10:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14583,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14586,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "284:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14610,
                  "src": "276:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14585,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "276:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14588,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "303:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14610,
                  "src": "295:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14587,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "295:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14590,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "322:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14610,
                  "src": "314:10:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14589,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "208:122:49"
            },
            "returnParameters": {
              "id": 14594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14593,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14610,
                  "src": "354:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14592,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "354:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "353:9:49"
            },
            "scope": 14739,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14642,
            "nodeType": "FunctionDefinition",
            "src": "573:398:49",
            "nodes": [],
            "body": {
              "id": 14641,
              "nodeType": "Block",
              "src": "767:204:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14628
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14628,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "785:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 14641,
                      "src": "777:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14627,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "777:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14638,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14631,
                        "name": "z",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14612,
                        "src": "853:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14632,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14614,
                        "src": "868:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14633,
                        "name": "dy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14616,
                        "src": "883:2:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14634,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14618,
                        "src": "899:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14635,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14620,
                        "src": "914:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14636,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14622,
                        "src": "929:2:49",
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
                        }
                      ],
                      "expression": {
                        "id": 14629,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11319,
                        "src": "794:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$11319_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 14630,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "809:30:49",
                      "memberName": "calculateSharesInGivenBondsOut",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11007,
                      "src": "794:45:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "794:147:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "777:164:49"
                },
                {
                  "expression": {
                    "id": 14639,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14628,
                    "src": "958:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14626,
                  "id": 14640,
                  "nodeType": "Return",
                  "src": "951:13:49"
                }
              ]
            },
            "functionSelector": "c500b741",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSharesInGivenBondsOut",
            "nameLocation": "582:30:49",
            "parameters": {
              "id": 14623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14612,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "630:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14642,
                  "src": "622:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14611,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "622:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14614,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "649:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14642,
                  "src": "641:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14613,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14616,
                  "mutability": "mutable",
                  "name": "dy",
                  "nameLocation": "668:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14642,
                  "src": "660:10:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14615,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "660:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14618,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "688:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14642,
                  "src": "680:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14617,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "680:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14620,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "707:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14642,
                  "src": "699:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14619,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14622,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "726:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14642,
                  "src": "718:10:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14621,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "718:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "612:122:49"
            },
            "returnParameters": {
              "id": 14626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14625,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14642,
                  "src": "758:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14624,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "758:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "757:9:49"
            },
            "scope": 14739,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14674,
            "nodeType": "FunctionDefinition",
            "src": "977:398:49",
            "nodes": [],
            "body": {
              "id": 14673,
              "nodeType": "Block",
              "src": "1171:204:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14660
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14660,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1189:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 14673,
                      "src": "1181:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14659,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1181:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14670,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14663,
                        "name": "z",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14644,
                        "src": "1257:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14664,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14646,
                        "src": "1272:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14665,
                        "name": "dy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14648,
                        "src": "1287:2:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14666,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14650,
                        "src": "1303:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14667,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14652,
                        "src": "1318:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14668,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14654,
                        "src": "1333:2:49",
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
                        }
                      ],
                      "expression": {
                        "id": 14661,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11319,
                        "src": "1198:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$11319_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 14662,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1213:30:49",
                      "memberName": "calculateSharesOutGivenBondsIn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11051,
                      "src": "1198:45:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1198:147:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1181:164:49"
                },
                {
                  "expression": {
                    "id": 14671,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14660,
                    "src": "1362:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14658,
                  "id": 14672,
                  "nodeType": "Return",
                  "src": "1355:13:49"
                }
              ]
            },
            "functionSelector": "71464b05",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSharesOutGivenBondsIn",
            "nameLocation": "986:30:49",
            "parameters": {
              "id": 14655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14644,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "1034:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14674,
                  "src": "1026:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14643,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14646,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1053:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14674,
                  "src": "1045:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14645,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1045:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14648,
                  "mutability": "mutable",
                  "name": "dy",
                  "nameLocation": "1072:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14674,
                  "src": "1064:10:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14647,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1064:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14650,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "1092:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14674,
                  "src": "1084:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14649,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1084:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14652,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "1111:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14674,
                  "src": "1103:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14651,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14654,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "1130:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14674,
                  "src": "1122:10:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14653,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1122:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1016:122:49"
            },
            "returnParameters": {
              "id": 14658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14657,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14674,
                  "src": "1162:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14656,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1161:9:49"
            },
            "scope": 14739,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14709,
            "nodeType": "FunctionDefinition",
            "src": "1381:373:49",
            "nodes": [],
            "body": {
              "id": 14708,
              "nodeType": "Block",
              "src": "1549:205:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14692,
                    14694
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14692,
                      "mutability": "mutable",
                      "name": "result1",
                      "nameLocation": "1568:7:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 14708,
                      "src": "1560:15:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14691,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1560:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 14694,
                      "mutability": "mutable",
                      "name": "result2",
                      "nameLocation": "1585:7:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 14708,
                      "src": "1577:15:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14693,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1577:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14703,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14697,
                        "name": "z",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14676,
                        "src": "1640:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14698,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14678,
                        "src": "1655:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14699,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14680,
                        "src": "1670:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14700,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14682,
                        "src": "1685:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14701,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14684,
                        "src": "1700:2:49",
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
                        "id": 14695,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11319,
                        "src": "1596:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$11319_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 14696,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1611:15:49",
                      "memberName": "calculateMaxBuy",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11216,
                      "src": "1596:30:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256)"
                      }
                    },
                    "id": 14702,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1596:116:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1559:153:49"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 14704,
                        "name": "result1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14692,
                        "src": "1730:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14705,
                        "name": "result2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14694,
                        "src": "1739:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 14706,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1729:18:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 14690,
                  "id": 14707,
                  "nodeType": "Return",
                  "src": "1722:25:49"
                }
              ]
            },
            "functionSelector": "a33d1b7e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateMaxBuy",
            "nameLocation": "1390:15:49",
            "parameters": {
              "id": 14685,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14676,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "1423:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14709,
                  "src": "1415:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1415:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14678,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1442:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14709,
                  "src": "1434:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1434:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14680,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "1461:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14709,
                  "src": "1453:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14679,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1453:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14682,
                  "mutability": "mutable",
                  "name": "c",
                  "nameLocation": "1480:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14709,
                  "src": "1472:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14681,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1472:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14684,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "1499:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14709,
                  "src": "1491:10:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14683,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1491:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1405:102:49"
            },
            "returnParameters": {
              "id": 14690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14687,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14709,
                  "src": "1531:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14686,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1531:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14689,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14709,
                  "src": "1540:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14688,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1540:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1530:18:49"
            },
            "scope": 14739,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14738,
            "nodeType": "FunctionDefinition",
            "src": "1760:364:49",
            "nodes": [],
            "body": {
              "id": 14737,
              "nodeType": "Block",
              "src": "1935:189:49",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14725
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14725,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1953:6:49",
                      "nodeType": "VariableDeclaration",
                      "scope": 14737,
                      "src": "1945:14:49",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14724,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1945:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14734,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14728,
                        "name": "cDivMu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14711,
                        "src": "2017:6:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14729,
                        "name": "mu",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14713,
                        "src": "2037:2:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14730,
                        "name": "z",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14715,
                        "src": "2053:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14731,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14717,
                        "src": "2068:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14732,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14719,
                        "src": "2083:1:49",
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
                        "id": 14726,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11319,
                        "src": "1962:14:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$11319_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 14727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1977:26:49",
                      "memberName": "modifiedYieldSpaceConstant",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11318,
                      "src": "1962:41:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1962:132:49",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1945:149:49"
                },
                {
                  "expression": {
                    "id": 14735,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14725,
                    "src": "2111:6:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14723,
                  "id": 14736,
                  "nodeType": "Return",
                  "src": "2104:13:49"
                }
              ]
            },
            "functionSelector": "3646521e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "modifiedYieldSpaceConstant",
            "nameLocation": "1769:26:49",
            "parameters": {
              "id": 14720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14711,
                  "mutability": "mutable",
                  "name": "cDivMu",
                  "nameLocation": "1813:6:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14738,
                  "src": "1805:14:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1805:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14713,
                  "mutability": "mutable",
                  "name": "mu",
                  "nameLocation": "1837:2:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14738,
                  "src": "1829:10:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1829:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14715,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "1857:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14738,
                  "src": "1849:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14714,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1849:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14717,
                  "mutability": "mutable",
                  "name": "t",
                  "nameLocation": "1876:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14738,
                  "src": "1868:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14716,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1868:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14719,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1895:1:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 14738,
                  "src": "1887:9:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14718,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1887:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1795:107:49"
            },
            "returnParameters": {
              "id": 14723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14722,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14738,
                  "src": "1926:7:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1926:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1925:9:49"
            },
            "scope": 14739,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "MockYieldSpaceMath",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          14739
        ],
        "name": "MockYieldSpaceMath",
        "nameLocation": "144:18:49",
        "scope": 14740,
        "usedErrors": [
          7088,
          7090,
          7097
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 49
} as const;
