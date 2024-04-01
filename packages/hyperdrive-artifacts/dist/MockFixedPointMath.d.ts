export declare const MockFixedPointMath: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LnInvalidInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt256";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "a";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "b";
            readonly type: "uint256";
        }];
        readonly name: "divDown";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "a";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "b";
            readonly type: "uint256";
        }];
        readonly name: "divUp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "x";
            readonly type: "int256";
        }];
        readonly name: "exp";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "r";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "x";
            readonly type: "int256";
        }];
        readonly name: "ln";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "d";
            readonly type: "uint256";
        }];
        readonly name: "mulDivDown";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "z";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "d";
            readonly type: "uint256";
        }];
        readonly name: "mulDivUp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "z";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "a";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "b";
            readonly type: "uint256";
        }];
        readonly name: "mulDown";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "a";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "b";
            readonly type: "uint256";
        }];
        readonly name: "mulUp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "y";
            readonly type: "uint256";
        }];
        readonly name: "pow";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_average";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_totalWeight";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_delta";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_deltaWeight";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_isAdding";
            readonly type: "bool";
        }];
        readonly name: "updateWeightedAverage";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "average";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b5061096d806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b1366004610806565b610173565b60405190815260200160405180910390f35b6100b66100d6366004610828565b61018a565b6100b66100e9366004610806565b6101a1565b6100b66100fc366004610854565b6101ae565b6100b661010f3660046108a6565b6101c9565b6100b6610122366004610806565b6101dc565b6100b6610135366004610828565b6101e9565b6100b6610148366004610806565b6101f7565b6100b661015b3660046108a6565b610204565b6100b661016e366004610806565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102cd565b979650505050505050565b6000806101d583610390565b9392505050565b60008061018084846105bf565b6000806101988585856105d0565b60008061018084846105ee565b6000806101d583610603565b6000806101808484610798565b60006101d58383670de0b6b3a76400006105d0565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b600061028c836107ad565b905060006102a161029c866107ad565b610390565b90508181026102b8670de0b6b3a7640000826108d5565b90506102c381610603565b9695505050505050565b6000826000036102de575084610198565b8115610356576103156102f18487610911565b6102fb858761021d565b610305888a61021d565b61030f9190610911565b906105bf565b9050600061032385886107db565b9050600061033186896107f0565b9050818310156103435781925061034f565b8083111561034f578092505b5050610198565b82850361036557506000610198565b6102c36103728487610924565b61037c8587610798565b610386888a61021d565b61030f9190610924565b60008082136103b25760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061043e9084901c6107ad565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60006101d583670de0b6b3a7640000845b60008260001904841183021582026105e757600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e19821361061e57506000919050565b680755bf798b4a1bf1e58212610647576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906102c374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6107ad565b60006101d58383670de0b6b3a7640000610232565b60006001600160ff1b038211156107d75760405163396ea70160e11b815260040160405180910390fd5b5090565b60008183116107ea57826101d5565b50919050565b60008183116107ff57816101d5565b5090919050565b6000806040838503121561081957600080fd5b50508035926020909101359150565b60008060006060848603121561083d57600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561086c57600080fd5b853594506020860135935060408601359250606086013591506080860135801515811461089857600080fd5b809150509295509295909350565b6000602082840312156108b857600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b6000826108f257634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561090c5761090c6108bf565b500590565b80820180821115610184576101846108bf565b81810381811115610184576101846108bf56fea26469706673582212202c858060acd9e79f6c956e46cd14a82d5d2abaab1ab87b2eb709724cc0bdb2c864736f6c63430008140033";
        readonly sourceMap: "136:1998:134:-:0;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ba5f52e116100665780639ba5f52e14610114578063b67bee0414610127578063cbe8623f1461013a578063e46751e31461014d578063f3e4f87c1461016057600080fd5b80630c9b9881146100a357806312bd6ac0146100c85780632e4c697f146100db57806381e5f7c9146100ee5780638e6f235314610101575b600080fd5b6100b66100b1366004610806565b610173565b60405190815260200160405180910390f35b6100b66100d6366004610828565b61018a565b6100b66100e9366004610806565b6101a1565b6100b66100fc366004610854565b6101ae565b6100b661010f3660046108a6565b6101c9565b6100b6610122366004610806565b6101dc565b6100b6610135366004610828565b6101e9565b6100b6610148366004610806565b6101f7565b6100b661015b3660046108a6565b610204565b6100b661016e366004610806565b610210565b600080610180848461021d565b9150505b92915050565b600080610198858585610232565b95945050505050565b6000806101808484610258565b6000806101be87878787876102cd565b979650505050505050565b6000806101d583610390565b9392505050565b60008061018084846105bf565b6000806101988585856105d0565b60008061018084846105ee565b6000806101d583610603565b6000806101808484610798565b60006101d58383670de0b6b3a76400006105d0565b600082600019048411830215820261024957600080fd5b50910281810615159190040190565b6000816000036102715750670de0b6b3a7640000610184565b8260000361028157506000610184565b600061028c836107ad565b905060006102a161029c866107ad565b610390565b90508181026102b8670de0b6b3a7640000826108d5565b90506102c381610603565b9695505050505050565b6000826000036102de575084610198565b8115610356576103156102f18487610911565b6102fb858761021d565b610305888a61021d565b61030f9190610911565b906105bf565b9050600061032385886107db565b9050600061033186896107f0565b9050818310156103435781925061034f565b8083111561034f578092505b5050610198565b82850361036557506000610198565b6102c36103728487610924565b61037c8587610798565b610386888a61021d565b61030f9190610924565b60008082136103b25760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061043e9084901c6107ad565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b60006101d583670de0b6b3a7640000845b60008260001904841183021582026105e757600080fd5b5091020490565b60006101d583670de0b6b3a764000084610232565b6000680248ce36a70cb26b3e19821361061e57506000919050565b680755bf798b4a1bf1e58212610647576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906102c374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6107ad565b60006101d58383670de0b6b3a7640000610232565b60006001600160ff1b038211156107d75760405163396ea70160e11b815260040160405180910390fd5b5090565b60008183116107ea57826101d5565b50919050565b60008183116107ff57816101d5565b5090919050565b6000806040838503121561081957600080fd5b50508035926020909101359150565b60008060006060848603121561083d57600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561086c57600080fd5b853594506020860135935060408601359250606086013591506080860135801515811461089857600080fd5b809150509295509295909350565b6000602082840312156108b857600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b6000826108f257634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561090c5761090c6108bf565b500590565b80820180821115610184576101846108bf565b81810381811115610184576101846108bf56fea26469706673582212202c858060acd9e79f6c956e46cd14a82d5d2abaab1ab87b2eb709724cc0bdb2c864736f6c63430008140033";
        readonly sourceMap: "136:1998:134:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;423:156;;;;;;:::i;:::-;;:::i;:::-;;;413:25:234;;;401:2;386:18;423:156:134;;;;;;;747:204;;;;;;:::i;:::-;;:::i;1273:148::-;;;;;;:::i;:::-;;:::i;1701:431::-;;;;;;:::i;:::-;;:::i;1566:129::-;;;;;;:::i;:::-;;:::i;585:156::-;;;;;;:::i;:::-;;:::i;209:208::-;;;;;;:::i;:::-;;:::i;1115:152::-;;;;;;:::i;:::-;;:::i;1427:133::-;;;;;;:::i;:::-;;:::i;957:152::-;;;;;;:::i;:::-;;:::i;423:156::-;485:7;504:14;521:28;544:1;547;521:22;:28::i;:::-;504:45;-1:-1:-1;;423:156:134;;;;;:::o;747:204::-;851:9;872:14;889:32;913:1;916;919;889:23;:32::i;:::-;872:49;747:204;-1:-1:-1;;;;;747:204:134:o;1273:148::-;1331:7;1350:14;1367:24;1386:1;1389;1367:18;:24::i;1701:431::-;1895:15;1922:14;1939:163;1989:8;2011:12;2037:6;2057:12;2083:9;1939:36;:163::i;:::-;1922:180;1701:431;-1:-1:-1;;;;;;;1701:431:134:o;1566:129::-;1611:6;1629:13;1645:20;1663:1;1645:17;:20::i;:::-;1629:36;1566:129;-1:-1:-1;;;1566:129:134:o;585:156::-;647:7;666:14;683:28;706:1;709;683:22;:28::i;209:208::-;315:9;336:14;353:34;379:1;382;385;353:25;:34::i;1115:152::-;1175:7;1194:14;1211:26;1232:1;1235;1211:20;:26::i;1427:133::-;1473:8;1493:13;1509:21;1528:1;1509:18;:21::i;957:152::-;1017:7;1036:14;1053:26;1074:1;1077;1053:20;:26::i;1610:118:122:-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;2284:748::-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;:::-;4623:25;3811:844;-1:-1:-1;;;;;;3811:844:122:o;12712:2102::-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:122;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;:::-;13420:87;;:154::i;:::-;13410:164;-1:-1:-1;13921:18:122;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:122;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:122;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;8508:3846::-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;9289:34:122;9286:41;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;898:556;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;3190:114::-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;2001:204:125:-;2053:8;-1:-1:-1;;;;;2079:1:125;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:125;;;;;;;;;;;2073:103;-1:-1:-1;2196:1:125;2001:204::o;14987:104:122:-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;;-1:-1:-1;15079:1:122;14987:104;-1:-1:-1;14987:104:122:o;15264:::-;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;;-1:-1:-1;15356:1:122;;15264:104;-1:-1:-1;15264:104:122:o;14:248:234:-;82:6;90;143:2;131:9;122:7;118:23;114:32;111:52;;;159:1;156;149:12;111:52;-1:-1:-1;;182:23:234;;;252:2;237:18;;;224:32;;-1:-1:-1;14:248:234:o;449:316::-;526:6;534;542;595:2;583:9;574:7;570:23;566:32;563:52;;;611:1;608;601:12;563:52;-1:-1:-1;;634:23:234;;;704:2;689:18;;676:32;;-1:-1:-1;755:2:234;740:18;;;727:32;;449:316;-1:-1:-1;449:316:234:o;770:547::-;862:6;870;878;886;894;947:3;935:9;926:7;922:23;918:33;915:53;;;964:1;961;954:12;915:53;1000:9;987:23;977:33;;1057:2;1046:9;1042:18;1029:32;1019:42;;1108:2;1097:9;1093:18;1080:32;1070:42;;1159:2;1148:9;1144:18;1131:32;1121:42;;1213:3;1202:9;1198:19;1185:33;1261:5;1254:13;1247:21;1240:5;1237:32;1227:60;;1283:1;1280;1273:12;1227:60;1306:5;1296:15;;;770:547;;;;;;;;:::o;1322:179::-;1380:6;1433:2;1421:9;1412:7;1408:23;1404:32;1401:52;;;1449:1;1446;1439:12;1401:52;-1:-1:-1;1472:23:234;;1322:179;-1:-1:-1;1322:179:234:o;1818:127::-;1879:10;1874:3;1870:20;1867:1;1860:31;1910:4;1907:1;1900:15;1934:4;1931:1;1924:15;1950:290;1989:1;2015;2005:132;;2059:10;2054:3;2050:20;2047:1;2040:31;2094:4;2091:1;2084:15;2122:4;2119:1;2112:15;2005:132;-1:-1:-1;;;2153:18:234;;-1:-1:-1;;2173:13:234;;2149:38;2146:64;;;2190:18;;:::i;:::-;-1:-1:-1;2224:10:234;;1950:290::o;2245:125::-;2310:9;;;2331:10;;;2328:36;;;2344:18;;:::i;2375:128::-;2442:9;;;2463:11;;;2460:37;;;2477:18;;:::i";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "divDown(uint256,uint256)": "9ba5f52e";
        readonly "divUp(uint256,uint256)": "cbe8623f";
        readonly "exp(int256)": "e46751e3";
        readonly "ln(int256)": "8e6f2353";
        readonly "mulDivDown(uint256,uint256,uint256)": "b67bee04";
        readonly "mulDivUp(uint256,uint256,uint256)": "12bd6ac0";
        readonly "mulDown(uint256,uint256)": "0c9b9881";
        readonly "mulUp(uint256,uint256)": "f3e4f87c";
        readonly "pow(uint256,uint256)": "2e4c697f";
        readonly "updateWeightedAverage(uint256,uint256,uint256,uint256,bool)": "81e5f7c9";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"divUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"exp\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"r\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"ln\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"mulDivUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"z\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulDown\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"mulUp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"y\",\"type\":\"uint256\"}],\"name\":\"pow\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_average\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalWeight\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_delta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_deltaWeight\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isAdding\",\"type\":\"bool\"}],\"name\":\"updateWeightedAverage\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"average\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockFixedPointMath.sol\":\"MockFixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/test/MockFixedPointMath.sol\":{\"keccak256\":\"0x8e8281499c59aa389be47edae8284a2f15a588937228b99f2e3ba429f9144c36\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://082845489937efb8302bc18011a97d8cc738309a1b0c654a7d3761a331e4a0f1\",\"dweb:/ipfs/QmbLms4PCHGtGdosyKPagQkquLt7jHVRKSJBjdvD2Jt3Ne\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ExpInvalidExponent";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "LnInvalidInput";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt256";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "a";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "b";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "divDown";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "a";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "b";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "divUp";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "x";
                    readonly type: "int256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "exp";
                readonly outputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "r";
                    readonly type: "int256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "x";
                    readonly type: "int256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "ln";
                readonly outputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "x";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "y";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "d";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "mulDivDown";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "z";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "x";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "y";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "d";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "mulDivUp";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "z";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "a";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "b";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "mulDown";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "a";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "b";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "mulUp";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "x";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "y";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "pow";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_average";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_totalWeight";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_delta";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_deltaWeight";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_isAdding";
                    readonly type: "bool";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "updateWeightedAverage";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "average";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/test/MockFixedPointMath.sol": "MockFixedPointMath";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71";
                readonly urls: readonly ["bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf", "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0";
                readonly urls: readonly ["bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c", "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockFixedPointMath.sol": {
                readonly keccak256: "0x8e8281499c59aa389be47edae8284a2f15a588937228b99f2e3ba429f9144c36";
                readonly urls: readonly ["bzz-raw://082845489937efb8302bc18011a97d8cc738309a1b0c654a7d3761a331e4a0f1", "dweb:/ipfs/QmbLms4PCHGtGdosyKPagQkquLt7jHVRKSJBjdvD2Jt3Ne"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockFixedPointMath.sol";
        readonly id: 24327;
        readonly exportedSymbols: {
            readonly FixedPointMath: readonly [19065];
            readonly MockFixedPointMath: readonly [24326];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "40:2095:134";
        readonly nodes: readonly [{
            readonly id: 24111;
            readonly nodeType: "PragmaDirective";
            readonly src: "40:23:134";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 24113;
            readonly nodeType: "ImportDirective";
            readonly src: "65:69:134";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../src/libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 24327;
            readonly sourceUnit: 19066;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24112;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19065;
                    readonly src: "74:14:134";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24326;
            readonly nodeType: "ContractDefinition";
            readonly src: "136:1998:134";
            readonly nodes: readonly [{
                readonly id: 24116;
                readonly nodeType: "UsingForDirective";
                readonly src: "170:33:134";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 24114;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["176:14:134"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19065;
                    readonly src: "176:14:134";
                };
                readonly typeName: {
                    readonly id: 24115;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "195:7:134";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 24139;
                readonly nodeType: "FunctionDefinition";
                readonly src: "209:208:134";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24138;
                    readonly nodeType: "Block";
                    readonly src: "326:91:134";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24128];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24128;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "344:6:134";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24138;
                            readonly src: "336:14:134";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24127;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "336:7:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24135;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24131;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24118;
                                readonly src: "379:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24132;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24120;
                                readonly src: "382:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24133;
                                readonly name: "d";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24122;
                                readonly src: "385:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24129;
                                    readonly name: "FixedPointMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19065;
                                    readonly src: "353:14:134";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_FixedPointMath_$19065_$";
                                        readonly typeString: "type(library FixedPointMath)";
                                    };
                                };
                                readonly id: 24130;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "368:10:134";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18327;
                                readonly src: "353:25:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 24134;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "353:34:134";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "336:51:134";
                    }, {
                        readonly expression: {
                            readonly id: 24136;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24128;
                            readonly src: "404:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24126;
                        readonly id: 24137;
                        readonly nodeType: "Return";
                        readonly src: "397:13:134";
                    }];
                };
                readonly functionSelector: "b67bee04";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivDown";
                readonly nameLocation: "218:10:134";
                readonly parameters: {
                    readonly id: 24123;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24118;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "246:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24139;
                        readonly src: "238:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24117;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "238:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24120;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "265:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24139;
                        readonly src: "257:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24119;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "257:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24122;
                        readonly mutability: "mutable";
                        readonly name: "d";
                        readonly nameLocation: "284:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24139;
                        readonly src: "276:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24121;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "276:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "228:63:134";
                };
                readonly returnParameters: {
                    readonly id: 24126;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24125;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "323:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24139;
                        readonly src: "315:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24124;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "315:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "314:11:134";
                };
                readonly scope: 24326;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24159;
                readonly nodeType: "FunctionDefinition";
                readonly src: "423:156:134";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24158;
                    readonly nodeType: "Block";
                    readonly src: "494:85:134";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24149];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24149;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "512:6:134";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24158;
                            readonly src: "504:14:134";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24148;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "504:7:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24155;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24152;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24141;
                                readonly src: "544:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24153;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24143;
                                readonly src: "547:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24150;
                                    readonly name: "FixedPointMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19065;
                                    readonly src: "521:14:134";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_FixedPointMath_$19065_$";
                                        readonly typeString: "type(library FixedPointMath)";
                                    };
                                };
                                readonly id: 24151;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "536:7:134";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18345;
                                readonly src: "521:22:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 24154;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "521:28:134";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "504:45:134";
                    }, {
                        readonly expression: {
                            readonly id: 24156;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24149;
                            readonly src: "566:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24147;
                        readonly id: 24157;
                        readonly nodeType: "Return";
                        readonly src: "559:13:134";
                    }];
                };
                readonly functionSelector: "0c9b9881";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDown";
                readonly nameLocation: "432:7:134";
                readonly parameters: {
                    readonly id: 24144;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24141;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "448:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24159;
                        readonly src: "440:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24140;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "440:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24143;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "459:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24159;
                        readonly src: "451:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24142;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "451:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "439:22:134";
                };
                readonly returnParameters: {
                    readonly id: 24147;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24146;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24159;
                        readonly src: "485:7:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24145;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "485:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "484:9:134";
                };
                readonly scope: 24326;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24179;
                readonly nodeType: "FunctionDefinition";
                readonly src: "585:156:134";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24178;
                    readonly nodeType: "Block";
                    readonly src: "656:85:134";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24169];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24169;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "674:6:134";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24178;
                            readonly src: "666:14:134";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24168;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "666:7:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24175;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24172;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24161;
                                readonly src: "706:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24173;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24163;
                                readonly src: "709:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24170;
                                    readonly name: "FixedPointMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19065;
                                    readonly src: "683:14:134";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_FixedPointMath_$19065_$";
                                        readonly typeString: "type(library FixedPointMath)";
                                    };
                                };
                                readonly id: 24171;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "698:7:134";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18363;
                                readonly src: "683:22:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 24174;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "683:28:134";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "666:45:134";
                    }, {
                        readonly expression: {
                            readonly id: 24176;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24169;
                            readonly src: "728:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24167;
                        readonly id: 24177;
                        readonly nodeType: "Return";
                        readonly src: "721:13:134";
                    }];
                };
                readonly functionSelector: "9ba5f52e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divDown";
                readonly nameLocation: "594:7:134";
                readonly parameters: {
                    readonly id: 24164;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24161;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "610:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24179;
                        readonly src: "602:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24160;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "602:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24163;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "621:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24179;
                        readonly src: "613:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24162;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "613:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "601:22:134";
                };
                readonly returnParameters: {
                    readonly id: 24167;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24166;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24179;
                        readonly src: "647:7:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24165;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "647:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "646:9:134";
                };
                readonly scope: 24326;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24202;
                readonly nodeType: "FunctionDefinition";
                readonly src: "747:204:134";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24201;
                    readonly nodeType: "Block";
                    readonly src: "862:89:134";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24191];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24191;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "880:6:134";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24201;
                            readonly src: "872:14:134";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24190;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "872:7:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24198;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24194;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24181;
                                readonly src: "913:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24195;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24183;
                                readonly src: "916:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24196;
                                readonly name: "d";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24185;
                                readonly src: "919:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24192;
                                    readonly name: "FixedPointMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19065;
                                    readonly src: "889:14:134";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_FixedPointMath_$19065_$";
                                        readonly typeString: "type(library FixedPointMath)";
                                    };
                                };
                                readonly id: 24193;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "904:8:134";
                                readonly memberName: "mulDivUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18377;
                                readonly src: "889:23:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 24197;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "889:32:134";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "872:49:134";
                    }, {
                        readonly expression: {
                            readonly id: 24199;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24191;
                            readonly src: "938:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24189;
                        readonly id: 24200;
                        readonly nodeType: "Return";
                        readonly src: "931:13:134";
                    }];
                };
                readonly functionSelector: "12bd6ac0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivUp";
                readonly nameLocation: "756:8:134";
                readonly parameters: {
                    readonly id: 24186;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24181;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "782:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24202;
                        readonly src: "774:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24180;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "774:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24183;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "801:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24202;
                        readonly src: "793:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24182;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "793:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24185;
                        readonly mutability: "mutable";
                        readonly name: "d";
                        readonly nameLocation: "820:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24202;
                        readonly src: "812:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24184;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "812:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "764:63:134";
                };
                readonly returnParameters: {
                    readonly id: 24189;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24188;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "859:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24202;
                        readonly src: "851:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24187;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "851:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "850:11:134";
                };
                readonly scope: 24326;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24222;
                readonly nodeType: "FunctionDefinition";
                readonly src: "957:152:134";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24221;
                    readonly nodeType: "Block";
                    readonly src: "1026:83:134";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24212];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24212;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1044:6:134";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24221;
                            readonly src: "1036:14:134";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24211;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1036:7:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24218;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24215;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24204;
                                readonly src: "1074:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24216;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24206;
                                readonly src: "1077:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24213;
                                    readonly name: "FixedPointMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19065;
                                    readonly src: "1053:14:134";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_FixedPointMath_$19065_$";
                                        readonly typeString: "type(library FixedPointMath)";
                                    };
                                };
                                readonly id: 24214;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1068:5:134";
                                readonly memberName: "mulUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18395;
                                readonly src: "1053:20:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 24217;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1053:26:134";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1036:43:134";
                    }, {
                        readonly expression: {
                            readonly id: 24219;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24212;
                            readonly src: "1096:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24210;
                        readonly id: 24220;
                        readonly nodeType: "Return";
                        readonly src: "1089:13:134";
                    }];
                };
                readonly functionSelector: "f3e4f87c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulUp";
                readonly nameLocation: "966:5:134";
                readonly parameters: {
                    readonly id: 24207;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24204;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "980:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24222;
                        readonly src: "972:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24203;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "972:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24206;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "991:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24222;
                        readonly src: "983:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24205;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "983:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "971:22:134";
                };
                readonly returnParameters: {
                    readonly id: 24210;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24209;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24222;
                        readonly src: "1017:7:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24208;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1017:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1016:9:134";
                };
                readonly scope: 24326;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24242;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1115:152:134";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24241;
                    readonly nodeType: "Block";
                    readonly src: "1184:83:134";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24232];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24232;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1202:6:134";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24241;
                            readonly src: "1194:14:134";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24231;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1194:7:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24238;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24235;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24224;
                                readonly src: "1232:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24236;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24226;
                                readonly src: "1235:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24233;
                                    readonly name: "FixedPointMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19065;
                                    readonly src: "1211:14:134";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_FixedPointMath_$19065_$";
                                        readonly typeString: "type(library FixedPointMath)";
                                    };
                                };
                                readonly id: 24234;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1226:5:134";
                                readonly memberName: "divUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18413;
                                readonly src: "1211:20:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 24237;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1211:26:134";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1194:43:134";
                    }, {
                        readonly expression: {
                            readonly id: 24239;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24232;
                            readonly src: "1254:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24230;
                        readonly id: 24240;
                        readonly nodeType: "Return";
                        readonly src: "1247:13:134";
                    }];
                };
                readonly functionSelector: "cbe8623f";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divUp";
                readonly nameLocation: "1124:5:134";
                readonly parameters: {
                    readonly id: 24227;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24224;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "1138:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24242;
                        readonly src: "1130:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24223;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1130:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24226;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "1149:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24242;
                        readonly src: "1141:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24225;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1141:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1129:22:134";
                };
                readonly returnParameters: {
                    readonly id: 24230;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24229;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24242;
                        readonly src: "1175:7:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24228;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1175:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1174:9:134";
                };
                readonly scope: 24326;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24262;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1273:148:134";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24261;
                    readonly nodeType: "Block";
                    readonly src: "1340:81:134";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24252];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24252;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1358:6:134";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24261;
                            readonly src: "1350:14:134";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24251;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1350:7:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24258;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24255;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24244;
                                readonly src: "1386:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24256;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24246;
                                readonly src: "1389:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24253;
                                    readonly name: "FixedPointMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19065;
                                    readonly src: "1367:14:134";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_FixedPointMath_$19065_$";
                                        readonly typeString: "type(library FixedPointMath)";
                                    };
                                };
                                readonly id: 24254;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1382:3:134";
                                readonly memberName: "pow";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18470;
                                readonly src: "1367:18:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 24257;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1367:24:134";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1350:41:134";
                    }, {
                        readonly expression: {
                            readonly id: 24259;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24252;
                            readonly src: "1408:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24250;
                        readonly id: 24260;
                        readonly nodeType: "Return";
                        readonly src: "1401:13:134";
                    }];
                };
                readonly functionSelector: "2e4c697f";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "pow";
                readonly nameLocation: "1282:3:134";
                readonly parameters: {
                    readonly id: 24247;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24244;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1294:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24262;
                        readonly src: "1286:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24243;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1286:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24246;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1305:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24262;
                        readonly src: "1297:9:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24245;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1297:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1285:22:134";
                };
                readonly returnParameters: {
                    readonly id: 24250;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24249;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24262;
                        readonly src: "1331:7:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24248;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1331:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1330:9:134";
                };
                readonly scope: 24326;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24279;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1427:133:134";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24278;
                    readonly nodeType: "Block";
                    readonly src: "1483:77:134";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24270];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24270;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1500:6:134";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24278;
                            readonly src: "1493:13:134";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 24269;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1493:6:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24275;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24273;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24264;
                                readonly src: "1528:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly expression: {
                                    readonly id: 24271;
                                    readonly name: "FixedPointMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19065;
                                    readonly src: "1509:14:134";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_FixedPointMath_$19065_$";
                                        readonly typeString: "type(library FixedPointMath)";
                                    };
                                };
                                readonly id: 24272;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1524:3:134";
                                readonly memberName: "exp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18667;
                                readonly src: "1509:18:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int256_$";
                                    readonly typeString: "function (int256) pure returns (int256)";
                                };
                            };
                            readonly id: 24274;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1509:21:134";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1493:37:134";
                    }, {
                        readonly expression: {
                            readonly id: 24276;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24270;
                            readonly src: "1547:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 24268;
                        readonly id: 24277;
                        readonly nodeType: "Return";
                        readonly src: "1540:13:134";
                    }];
                };
                readonly functionSelector: "e46751e3";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "exp";
                readonly nameLocation: "1436:3:134";
                readonly parameters: {
                    readonly id: 24265;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24264;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1447:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24279;
                        readonly src: "1440:8:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24263;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1440:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1439:10:134";
                };
                readonly returnParameters: {
                    readonly id: 24268;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24267;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "1480:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24279;
                        readonly src: "1473:8:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24266;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1473:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1472:10:134";
                };
                readonly scope: 24326;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24296;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1566:129:134";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24295;
                    readonly nodeType: "Block";
                    readonly src: "1619:76:134";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24287];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24287;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1636:6:134";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24295;
                            readonly src: "1629:13:134";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 24286;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1629:6:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24292;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24290;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24281;
                                readonly src: "1663:1:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly expression: {
                                    readonly id: 24288;
                                    readonly name: "FixedPointMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19065;
                                    readonly src: "1645:14:134";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_FixedPointMath_$19065_$";
                                        readonly typeString: "type(library FixedPointMath)";
                                    };
                                };
                                readonly id: 24289;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1660:2:134";
                                readonly memberName: "ln";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18889;
                                readonly src: "1645:17:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int256_$";
                                    readonly typeString: "function (int256) pure returns (int256)";
                                };
                            };
                            readonly id: 24291;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1645:20:134";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1629:36:134";
                    }, {
                        readonly expression: {
                            readonly id: 24293;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24287;
                            readonly src: "1682:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 24285;
                        readonly id: 24294;
                        readonly nodeType: "Return";
                        readonly src: "1675:13:134";
                    }];
                };
                readonly functionSelector: "8e6f2353";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "ln";
                readonly nameLocation: "1575:2:134";
                readonly parameters: {
                    readonly id: 24282;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24281;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1585:1:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24296;
                        readonly src: "1578:8:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24280;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1578:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1577:10:134";
                };
                readonly returnParameters: {
                    readonly id: 24285;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24284;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24296;
                        readonly src: "1611:6:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24283;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1611:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1610:8:134";
                };
                readonly scope: 24326;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24325;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1701:431:134";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24324;
                    readonly nodeType: "Block";
                    readonly src: "1912:220:134";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24312];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24312;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "1930:6:134";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24324;
                            readonly src: "1922:14:134";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24311;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1922:7:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24321;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24315;
                                readonly name: "_average";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24298;
                                readonly src: "1989:8:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24316;
                                readonly name: "_totalWeight";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24300;
                                readonly src: "2011:12:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24317;
                                readonly name: "_delta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24302;
                                readonly src: "2037:6:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24318;
                                readonly name: "_deltaWeight";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24304;
                                readonly src: "2057:12:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24319;
                                readonly name: "_isAdding";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24306;
                                readonly src: "2083:9:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly expression: {
                                    readonly id: 24313;
                                    readonly name: "FixedPointMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19065;
                                    readonly src: "1939:14:134";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_FixedPointMath_$19065_$";
                                        readonly typeString: "type(library FixedPointMath)";
                                    };
                                };
                                readonly id: 24314;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1954:21:134";
                                readonly memberName: "updateWeightedAverage";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18992;
                                readonly src: "1939:36:134";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)";
                                };
                            };
                            readonly id: 24320;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1939:163:134";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1922:180:134";
                    }, {
                        readonly expression: {
                            readonly id: 24322;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24312;
                            readonly src: "2119:6:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24310;
                        readonly id: 24323;
                        readonly nodeType: "Return";
                        readonly src: "2112:13:134";
                    }];
                };
                readonly functionSelector: "81e5f7c9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateWeightedAverage";
                readonly nameLocation: "1710:21:134";
                readonly parameters: {
                    readonly id: 24307;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24298;
                        readonly mutability: "mutable";
                        readonly name: "_average";
                        readonly nameLocation: "1749:8:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24325;
                        readonly src: "1741:16:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24297;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1741:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24300;
                        readonly mutability: "mutable";
                        readonly name: "_totalWeight";
                        readonly nameLocation: "1775:12:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24325;
                        readonly src: "1767:20:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24299;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1767:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24302;
                        readonly mutability: "mutable";
                        readonly name: "_delta";
                        readonly nameLocation: "1805:6:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24325;
                        readonly src: "1797:14:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24301;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1797:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24304;
                        readonly mutability: "mutable";
                        readonly name: "_deltaWeight";
                        readonly nameLocation: "1829:12:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24325;
                        readonly src: "1821:20:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24303;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1821:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24306;
                        readonly mutability: "mutable";
                        readonly name: "_isAdding";
                        readonly nameLocation: "1856:9:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24325;
                        readonly src: "1851:14:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 24305;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1851:4:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1731:140:134";
                };
                readonly returnParameters: {
                    readonly id: 24310;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24309;
                        readonly mutability: "mutable";
                        readonly name: "average";
                        readonly nameLocation: "1903:7:134";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24325;
                        readonly src: "1895:15:134";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24308;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1895:7:134";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1894:17:134";
                };
                readonly scope: 24326;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "MockFixedPointMath";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [24326];
            readonly name: "MockFixedPointMath";
            readonly nameLocation: "145:18:134";
            readonly scope: 24327;
            readonly usedErrors: readonly [10541, 10583, 10639];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 134;
};
//# sourceMappingURL=MockFixedPointMath.d.ts.map