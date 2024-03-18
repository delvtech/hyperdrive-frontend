export declare const MockAssetId: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidTimestamp";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_id";
            readonly type: "uint256";
        }];
        readonly name: "assetIdToName";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_id";
            readonly type: "uint256";
        }];
        readonly name: "assetIdToSymbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_id";
            readonly type: "uint256";
        }];
        readonly name: "decodeAssetId";
        readonly outputs: readonly [{
            readonly internalType: "enum AssetId.AssetIdPrefix";
            readonly name: "";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum AssetId.AssetIdPrefix";
            readonly name: "_prefix";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "_timestamp";
            readonly type: "uint256";
        }];
        readonly name: "encodeAssetId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506106be806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610426565b6100de565b6040516100719190610463565b60405180910390f35b61009c610088366004610426565b60f881901c916001600160f81b0390911690565b6040516100719291906104ac565b6100bd6100b83660046104d8565b6100f2565b604051908152602001610071565b6100646100d9366004610426565b610109565b606060006100eb83610116565b9392505050565b6000806100ff848461023e565b9150505b92915050565b606060006100eb83610273565b606060f882901c6001600160f81b038316600061013282610371565b9050600083600381111561014857610148610496565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610236565b600183600381111561018e5761018e610496565b036101ba57806040516020016101a49190610508565b6040516020818303038152906040529350610236565b60028360038111156101ce576101ce610496565b036101e457806040516020016101a49190610541565b60038360038111156101f8576101f8610496565b03610236576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b60006001600160f81b038211156102685760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b038316600061028f82610371565b905060008360038111156102a5576102a5610496565b036102d7576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610236565b60018360038111156102eb576102eb610496565b0361030157806040516020016101a4919061057b565b600283600381111561031557610315610496565b0361032b57806040516020016101a491906105b3565b600383600381111561033f5761033f610496565b0361023657505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b8415610418576103ac600a866105f5565b6103b790603061061f565b60f81b8260016103c78487610632565b6103d19190610632565b815181106103e1576103e1610645565b60200101906001600160f81b031916908160001a905350806104028161065b565b91506104119050600a86610674565b945061039b565b918290030190815292915050565b60006020828403121561043857600080fd5b5035919050565b60005b8381101561045a578181015183820152602001610442565b50506000910152565b602081526000825180602084015261048281604085016020870161043f565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b60408101600484106104ce57634e487b7160e01b600052602160045260246000fd5b9281526020015290565b600080604083850312156104eb57600080fd5b8235600481106104fa57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161053481601185016020870161043f565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81526000825161056e81601285016020870161043f565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105a681601085016020870161043f565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161053481601185016020870161043f565b634e487b7160e01b600052601260045260246000fd5b600082610604576106046105df565b500690565b634e487b7160e01b600052601160045260246000fd5b8082018082111561010357610103610609565b8181038181111561010357610103610609565b634e487b7160e01b600052603260045260246000fd5b60006001820161066d5761066d610609565b5060010190565b600082610683576106836105df565b50049056fea26469706673582212202cbc116f53fda704166d7fd4830bcc4b12fdba28e8de502890c842257a0563bd64736f6c63430008140033";
        readonly sourceMap: "128:859:133:-:0;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610426565b6100de565b6040516100719190610463565b60405180910390f35b61009c610088366004610426565b60f881901c916001600160f81b0390911690565b6040516100719291906104ac565b6100bd6100b83660046104d8565b6100f2565b604051908152602001610071565b6100646100d9366004610426565b610109565b606060006100eb83610116565b9392505050565b6000806100ff848461023e565b9150505b92915050565b606060006100eb83610273565b606060f882901c6001600160f81b038316600061013282610371565b9050600083600381111561014857610148610496565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610236565b600183600381111561018e5761018e610496565b036101ba57806040516020016101a49190610508565b6040516020818303038152906040529350610236565b60028360038111156101ce576101ce610496565b036101e457806040516020016101a49190610541565b60038360038111156101f8576101f8610496565b03610236576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b60006001600160f81b038211156102685760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b038316600061028f82610371565b905060008360038111156102a5576102a5610496565b036102d7576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610236565b60018360038111156102eb576102eb610496565b0361030157806040516020016101a4919061057b565b600283600381111561031557610315610496565b0361032b57806040516020016101a491906105b3565b600383600381111561033f5761033f610496565b0361023657505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b8415610418576103ac600a866105f5565b6103b790603061061f565b60f81b8260016103c78487610632565b6103d19190610632565b815181106103e1576103e1610645565b60200101906001600160f81b031916908160001a905350806104028161065b565b91506104119050600a86610674565b945061039b565b918290030190815292915050565b60006020828403121561043857600080fd5b5035919050565b60005b8381101561045a578181015183820152602001610442565b50506000910152565b602081526000825180602084015261048281604085016020870161043f565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b60408101600484106104ce57634e487b7160e01b600052602160045260246000fd5b9281526020015290565b600080604083850312156104eb57600080fd5b8235600481106104fa57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161053481601185016020870161043f565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81526000825161056e81601285016020870161043f565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105a681601085016020870161043f565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161053481601185016020870161043f565b634e487b7160e01b600052601260045260246000fd5b600082610604576106046105df565b500690565b634e487b7160e01b600052601160045260246000fd5b8082018082111561010357610103610609565b8181038181111561010357610103610609565b634e487b7160e01b600052603260045260246000fd5b60006001820161066d5761066d610609565b5060010190565b600082610683576106836105df565b50049056fea26469706673582212202cbc116f53fda704166d7fd4830bcc4b12fdba28e8de502890c842257a0563bd64736f6c63430008140033";
        readonly sourceMap: "128:859:133:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;635:161;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;380:249;;;;;;:::i;:::-;2200:4:121;2196:14;;;;-1:-1:-1;;;;;2253:120:121;;;;380:249:133;;;;;;;;;:::i;155:219::-;;;;;;:::i;:::-;;:::i;:::-;;;1904:25:235;;;1892:2;1877:18;155:219:133;1758:177:235;802:183:133;;;;;;:::i;:::-;;:::i;635:161::-;694:13;719:19;741:26;763:3;741:21;:26::i;:::-;719:48;635:161;-1:-1:-1;;;635:161:133:o;155:219::-;274:7;293:10;306:42;328:7;337:10;306:21;:42::i;:::-;293:55;-1:-1:-1;;155:219:133;;;;;:::o;802:183::-;877:13;902:21;926:28;950:3;926:23;:28::i;2533:693:121:-;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:121;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:121;2769:6;:26;;;;;;;;:::i;:::-;;2765:455;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:121;;;;;2765:455;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:369;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:369;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:239;;3084:10;3045:50;;;;;;;;:::i;2981:239::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:107;;3172:37;;;;;;;;;;;;;;;;;;;3113:107;2627:599;;;2533:693;;;:::o;1198:469::-;1309:10;-1:-1:-1;;;;;1401:10:121;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:121;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:121;1620:18;;;;1617:34;;1198:469::o;3360:689::-;3435:21;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:121;;3469:20;3567:19;2253:120;3567:8;:19::i;:::-;3540:46;-1:-1:-1;3610:16:121;3600:6;:26;;;;;;;;:::i;:::-;;3596:447;;3642:25;;;;;;;;;;;;;-1:-1:-1;;;3642:25:121;;;;;3596:447;;;3698:18;3688:6;:28;;;;;;;;:::i;:::-;;3684:359;;3786:10;3749:48;;;;;;;;:::i;3684:359::-;3829:19;3819:6;:29;;;;;;;;:::i;:::-;;3815:228;;3919:10;3881:49;;;;;;;;:::i;3815:228::-;3962:29;3952:6;:39;;;;;;;;:::i;:::-;;3948:95;;-1:-1:-1;;4007:25:121;;;;;;;;;;;;-1:-1:-1;;;4007:25:121;;;;;3360:689;-1:-1:-1;;;3360:689:121:o;4207:1065::-;4599:26;;;4562:2;4599:26;;;;;;;;;4276:20;;4562:2;4536:23;;4562:2;4599:26;;;;;;;;;;-1:-1:-1;4599:26:121;4574:51;;4790:14;4818:180;4825:9;;4818:180;;4935:9;4942:2;4935:4;:9;:::i;:::-;4934:16;;4948:2;4934:16;:::i;:::-;4904:61;;4862:9;4899:1;4872:24;4890:6;4872:15;:24;:::i;:::-;:28;;;;:::i;:::-;4862:39;;;;;;;;:::i;:::-;;;;:103;-1:-1:-1;;;;;4862:103:121;;;;;;;;-1:-1:-1;4979:8:121;;;;:::i;:::-;;-1:-1:-1;4836:10:121;;-1:-1:-1;4844:2:121;4836:10;;:::i;:::-;;;4818:180;;;5169:28;;;;5154:44;5211:22;;;5154:44;4207:1065;-1:-1:-1;;4207:1065:121:o;14:180:235:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:235;;14:180;-1:-1:-1;14:180:235:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:235;423:16;;416:27;199:250::o;454:396::-;603:2;592:9;585:21;566:4;635:6;629:13;678:6;673:2;662:9;658:18;651:34;694:79;766:6;761:2;750:9;746:18;741:2;733:6;729:15;694:79;:::i;:::-;834:2;813:15;-1:-1:-1;;809:29:235;794:45;;;;841:2;790:54;;454:396;-1:-1:-1;;454:396:235:o;855:127::-;916:10;911:3;907:20;904:1;897:31;947:4;944:1;937:15;971:4;968:1;961:15;987:418;1166:2;1151:18;;1199:1;1188:13;;1178:144;;1244:10;1239:3;1235:20;1232:1;1225:31;1279:4;1276:1;1269:15;1307:4;1304:1;1297:15;1178:144;1331:25;;;1387:2;1372:18;1365:34;987:418;:::o;1410:343::-;1497:6;1505;1558:2;1546:9;1537:7;1533:23;1529:32;1526:52;;;1574:1;1571;1564:12;1526:52;1613:9;1600:23;1652:1;1645:5;1642:12;1632:40;;1668:1;1665;1658:12;1632:40;1691:5;1743:2;1728:18;;;;1715:32;;-1:-1:-1;;;1410:343:235:o;1940:449::-;-1:-1:-1;;;2197:3:235;2190:32;2172:3;2251:6;2245:13;2267:75;2335:6;2330:2;2325:3;2321:12;2314:4;2306:6;2302:17;2267:75;:::i;:::-;2362:16;;;;2380:2;2358:25;;1940:449;-1:-1:-1;;1940:449:235:o;2394:450::-;-1:-1:-1;;;2651:3:235;2644:33;2626:3;2706:6;2700:13;2722:75;2790:6;2785:2;2780:3;2776:12;2769:4;2761:6;2757:17;2722:75;:::i;:::-;2817:16;;;;2835:2;2813:25;;2394:450;-1:-1:-1;;2394:450:235:o;2849:448::-;-1:-1:-1;;;3106:3:235;3099:31;3081:3;3159:6;3153:13;3175:75;3243:6;3238:2;3233:3;3229:12;3222:4;3214:6;3210:17;3175:75;:::i;:::-;3270:16;;;;3288:2;3266:25;;2849:448;-1:-1:-1;;2849:448:235:o;3302:449::-;-1:-1:-1;;;3559:3:235;3552:32;3534:3;3613:6;3607:13;3629:75;3697:6;3692:2;3687:3;3683:12;3676:4;3668:6;3664:17;3629:75;:::i;3888:127::-;3949:10;3944:3;3940:20;3937:1;3930:31;3980:4;3977:1;3970:15;4004:4;4001:1;3994:15;4020:112;4052:1;4078;4068:35;;4083:18;;:::i;:::-;-1:-1:-1;4117:9:235;;4020:112::o;4137:127::-;4198:10;4193:3;4189:20;4186:1;4179:31;4229:4;4226:1;4219:15;4253:4;4250:1;4243:15;4269:125;4334:9;;;4355:10;;;4352:36;;;4368:18;;:::i;4399:128::-;4466:9;;;4487:11;;;4484:37;;;4501:18;;:::i;4532:127::-;4593:10;4588:3;4584:20;4581:1;4574:31;4624:4;4621:1;4614:15;4648:4;4645:1;4638:15;4664:135;4703:3;4724:17;;;4721:43;;4744:18;;:::i;:::-;-1:-1:-1;4791:1:235;4780:13;;4664:135::o;4804:120::-;4844:1;4870;4860:35;;4875:18;;:::i;:::-;-1:-1:-1;4909:9:235;;4804:120::o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "assetIdToName(uint256)": "3c8c28ad";
        readonly "assetIdToSymbol(uint256)": "957462ac";
        readonly "decodeAssetId(uint256)": "6322c751";
        readonly "encodeAssetId(uint8,uint256)": "8a227c39";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToSymbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"decodeAssetId\",\"outputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"_prefix\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"encodeAssetId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockAssetId.sol\":\"MockAssetId\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/test/MockAssetId.sol\":{\"keccak256\":\"0x19bd2a30ab244563ce6cc5257888cad4c4e68a6f3efa47bc96729511782a8ea3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://512943e6850cc632926d507a65697c8b3222ef63343166a8b490ee826325305b\",\"dweb:/ipfs/QmWs4xELKzUTNbtm1diZsUwmJQoJDSBZrsdsckyLJhTu8Q\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidTimestamp";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_id";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "assetIdToName";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_id";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "assetIdToSymbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_id";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "decodeAssetId";
                readonly outputs: readonly [{
                    readonly internalType: "enum AssetId.AssetIdPrefix";
                    readonly name: "";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "enum AssetId.AssetIdPrefix";
                    readonly name: "_prefix";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_timestamp";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "encodeAssetId";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/test/MockAssetId.sol": "MockAssetId";
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
                readonly keccak256: "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952";
                readonly urls: readonly ["bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf", "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"];
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
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
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
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockAssetId.sol": {
                readonly keccak256: "0x19bd2a30ab244563ce6cc5257888cad4c4e68a6f3efa47bc96729511782a8ea3";
                readonly urls: readonly ["bzz-raw://512943e6850cc632926d507a65697c8b3222ef63343166a8b490ee826325305b", "dweb:/ipfs/QmWs4xELKzUTNbtm1diZsUwmJQoJDSBZrsdsckyLJhTu8Q"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockAssetId.sol";
        readonly id: 24061;
        readonly exportedSymbols: {
            readonly AssetId: readonly [18594];
            readonly MockAssetId: readonly [24060];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:949:133";
        readonly nodes: readonly [{
            readonly id: 23975;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:133";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 23977;
            readonly nodeType: "ImportDirective";
            readonly src: "64:62:133";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/AssetId.sol";
            readonly file: "contracts/src/libraries/AssetId.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 24061;
            readonly sourceUnit: 18595;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 23976;
                    readonly name: "AssetId";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18594;
                    readonly src: "73:7:133";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24060;
            readonly nodeType: "ContractDefinition";
            readonly src: "128:859:133";
            readonly nodes: readonly [{
                readonly id: 23998;
                readonly nodeType: "FunctionDefinition";
                readonly src: "155:219:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23997;
                    readonly nodeType: "Block";
                    readonly src: "283:91:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [23988];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 23988;
                            readonly mutability: "mutable";
                            readonly name: "id";
                            readonly nameLocation: "301:2:133";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 23997;
                            readonly src: "293:10:133";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 23987;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "293:7:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 23994;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 23991;
                                readonly name: "_prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23980;
                                readonly src: "328:7:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18341";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            }, {
                                readonly id: 23992;
                                readonly name: "_timestamp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23982;
                                readonly src: "337:10:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18341";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 23989;
                                    readonly name: "AssetId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18594;
                                    readonly src: "306:7:133";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18594_$";
                                        readonly typeString: "type(library AssetId)";
                                    };
                                };
                                readonly id: 23990;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "314:13:133";
                                readonly memberName: "encodeAssetId";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18364;
                                readonly src: "306:21:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_enum$_AssetIdPrefix_$18341_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 23993;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "306:42:133";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "293:55:133";
                    }, {
                        readonly expression: {
                            readonly id: 23995;
                            readonly name: "id";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 23988;
                            readonly src: "365:2:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 23986;
                        readonly id: 23996;
                        readonly nodeType: "Return";
                        readonly src: "358:9:133";
                    }];
                };
                readonly functionSelector: "8a227c39";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "encodeAssetId";
                readonly nameLocation: "164:13:133";
                readonly parameters: {
                    readonly id: 23983;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23980;
                        readonly mutability: "mutable";
                        readonly name: "_prefix";
                        readonly nameLocation: "209:7:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23998;
                        readonly src: "187:29:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18341";
                            readonly typeString: "enum AssetId.AssetIdPrefix";
                        };
                        readonly typeName: {
                            readonly id: 23979;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 23978;
                                readonly name: "AssetId.AssetIdPrefix";
                                readonly nameLocations: readonly ["187:7:133", "195:13:133"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 18341;
                                readonly src: "187:21:133";
                            };
                            readonly referencedDeclaration: 18341;
                            readonly src: "187:21:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18341";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23982;
                        readonly mutability: "mutable";
                        readonly name: "_timestamp";
                        readonly nameLocation: "234:10:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23998;
                        readonly src: "226:18:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23981;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "226:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "177:73:133";
                };
                readonly returnParameters: {
                    readonly id: 23986;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23985;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23998;
                        readonly src: "274:7:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23984;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "274:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "273:9:133";
                };
                readonly scope: 24060;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24025;
                readonly nodeType: "FunctionDefinition";
                readonly src: "380:249:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24024;
                    readonly nodeType: "Block";
                    readonly src: "485:144:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24012, 24014];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24012;
                            readonly mutability: "mutable";
                            readonly name: "prefix";
                            readonly nameLocation: "518:6:133";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24024;
                            readonly src: "496:28:133";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18341";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                            readonly typeName: {
                                readonly id: 24011;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 24010;
                                    readonly name: "AssetId.AssetIdPrefix";
                                    readonly nameLocations: readonly ["496:7:133", "504:13:133"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 18341;
                                    readonly src: "496:21:133";
                                };
                                readonly referencedDeclaration: 18341;
                                readonly src: "496:21:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18341";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 24014;
                            readonly mutability: "mutable";
                            readonly name: "timestamp";
                            readonly nameLocation: "534:9:133";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24024;
                            readonly src: "526:17:133";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24013;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "526:7:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24019;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24017;
                                readonly name: "_id";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24000;
                                readonly src: "582:3:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24015;
                                    readonly name: "AssetId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18594;
                                    readonly src: "547:7:133";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18594_$";
                                        readonly typeString: "type(library AssetId)";
                                    };
                                };
                                readonly id: 24016;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "568:13:133";
                                readonly memberName: "decodeAssetId";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18377;
                                readonly src: "547:34:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_enum$_AssetIdPrefix_$18341_$_t_uint256_$";
                                    readonly typeString: "function (uint256) pure returns (enum AssetId.AssetIdPrefix,uint256)";
                                };
                            };
                            readonly id: 24018;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "547:39:133";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_enum$_AssetIdPrefix_$18341_$_t_uint256_$";
                                readonly typeString: "tuple(enum AssetId.AssetIdPrefix,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "495:91:133";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 24020;
                                readonly name: "prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24012;
                                readonly src: "604:6:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18341";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            }, {
                                readonly id: 24021;
                                readonly name: "timestamp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24014;
                                readonly src: "612:9:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 24022;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "603:19:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_enum$_AssetIdPrefix_$18341_$_t_uint256_$";
                                readonly typeString: "tuple(enum AssetId.AssetIdPrefix,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 24007;
                        readonly id: 24023;
                        readonly nodeType: "Return";
                        readonly src: "596:26:133";
                    }];
                };
                readonly functionSelector: "6322c751";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "decodeAssetId";
                readonly nameLocation: "389:13:133";
                readonly parameters: {
                    readonly id: 24001;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24000;
                        readonly mutability: "mutable";
                        readonly name: "_id";
                        readonly nameLocation: "420:3:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24025;
                        readonly src: "412:11:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23999;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "412:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "402:27:133";
                };
                readonly returnParameters: {
                    readonly id: 24007;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24004;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24025;
                        readonly src: "453:21:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18341";
                            readonly typeString: "enum AssetId.AssetIdPrefix";
                        };
                        readonly typeName: {
                            readonly id: 24003;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24002;
                                readonly name: "AssetId.AssetIdPrefix";
                                readonly nameLocations: readonly ["453:7:133", "461:13:133"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 18341;
                                readonly src: "453:21:133";
                            };
                            readonly referencedDeclaration: 18341;
                            readonly src: "453:21:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$18341";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24006;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24025;
                        readonly src: "476:7:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24005;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "476:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "452:32:133";
                };
                readonly scope: 24060;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24042;
                readonly nodeType: "FunctionDefinition";
                readonly src: "635:161:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24041;
                    readonly nodeType: "Block";
                    readonly src: "709:87:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24033];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24033;
                            readonly mutability: "mutable";
                            readonly name: "_name";
                            readonly nameLocation: "733:5:133";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24041;
                            readonly src: "719:19:133";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 24032;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "719:6:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24038;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24036;
                                readonly name: "_id";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24027;
                                readonly src: "763:3:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24034;
                                    readonly name: "AssetId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18594;
                                    readonly src: "741:7:133";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18594_$";
                                        readonly typeString: "type(library AssetId)";
                                    };
                                };
                                readonly id: 24035;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "749:13:133";
                                readonly memberName: "assetIdToName";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18455;
                                readonly src: "741:21:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (string memory)";
                                };
                            };
                            readonly id: 24037;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "741:26:133";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "719:48:133";
                    }, {
                        readonly expression: {
                            readonly id: 24039;
                            readonly name: "_name";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24033;
                            readonly src: "784:5:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 24031;
                        readonly id: 24040;
                        readonly nodeType: "Return";
                        readonly src: "777:12:133";
                    }];
                };
                readonly functionSelector: "3c8c28ad";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "assetIdToName";
                readonly nameLocation: "644:13:133";
                readonly parameters: {
                    readonly id: 24028;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24027;
                        readonly mutability: "mutable";
                        readonly name: "_id";
                        readonly nameLocation: "666:3:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24042;
                        readonly src: "658:11:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24026;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "658:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "657:13:133";
                };
                readonly returnParameters: {
                    readonly id: 24031;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24030;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24042;
                        readonly src: "694:13:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 24029;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "694:6:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "693:15:133";
                };
                readonly scope: 24060;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24059;
                readonly nodeType: "FunctionDefinition";
                readonly src: "802:183:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24058;
                    readonly nodeType: "Block";
                    readonly src: "892:93:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24050];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24050;
                            readonly mutability: "mutable";
                            readonly name: "_symbol";
                            readonly nameLocation: "916:7:133";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24058;
                            readonly src: "902:21:133";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 24049;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "902:6:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24055;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24053;
                                readonly name: "_id";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24044;
                                readonly src: "950:3:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24051;
                                    readonly name: "AssetId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18594;
                                    readonly src: "926:7:133";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18594_$";
                                        readonly typeString: "type(library AssetId)";
                                    };
                                };
                                readonly id: 24052;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "934:15:133";
                                readonly memberName: "assetIdToSymbol";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18533;
                                readonly src: "926:23:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (string memory)";
                                };
                            };
                            readonly id: 24054;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "926:28:133";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "902:52:133";
                    }, {
                        readonly expression: {
                            readonly id: 24056;
                            readonly name: "_symbol";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24050;
                            readonly src: "971:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 24048;
                        readonly id: 24057;
                        readonly nodeType: "Return";
                        readonly src: "964:14:133";
                    }];
                };
                readonly functionSelector: "957462ac";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "assetIdToSymbol";
                readonly nameLocation: "811:15:133";
                readonly parameters: {
                    readonly id: 24045;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24044;
                        readonly mutability: "mutable";
                        readonly name: "_id";
                        readonly nameLocation: "844:3:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24059;
                        readonly src: "836:11:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24043;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "836:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "826:27:133";
                };
                readonly returnParameters: {
                    readonly id: 24048;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24047;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24059;
                        readonly src: "877:13:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 24046;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "877:6:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "876:15:133";
                };
                readonly scope: 24060;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "MockAssetId";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [24060];
            readonly name: "MockAssetId";
            readonly nameLocation: "137:11:133";
            readonly scope: 24061;
            readonly usedErrors: readonly [10932];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 133;
};
//# sourceMappingURL=MockAssetId.d.ts.map