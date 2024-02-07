export declare const MockAssetId: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "assetIdToName";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assetIdToSymbol";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decodeAssetId";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum AssetId.AssetIdPrefix";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encodeAssetId";
        readonly inputs: readonly [{
            readonly name: "_prefix";
            readonly type: "uint8";
            readonly internalType: "enum AssetId.AssetIdPrefix";
        }, {
            readonly name: "_timestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "error";
        readonly name: "InvalidTimestamp";
        readonly inputs: readonly [];
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50610710806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610478565b6100de565b60405161007191906104b5565b60405180910390f35b61009c610088366004610478565b60f881901c916001600160f81b0390911690565b6040516100719291906104fe565b6100bd6100b836600461052a565b6100f2565b604051908152602001610071565b6100646100d9366004610478565b610109565b606060006100eb83610116565b9392505050565b6000806100ff8484610244565b9150505b92915050565b606060006100eb83610279565b606060f882901c6001600160f81b03831660006101328261036b565b90506000836003811115610148576101486104e8565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061023c565b600183600381111561018e5761018e6104e8565b036101ba57806040516020016101a4919061055a565b604051602081830303815290604052935061023c565b60028360038111156101ce576101ce6104e8565b036101e457806040516020016101a49190610593565b60038360038111156101f8576101f86104e8565b0361023c576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b60006001600160f81b0382111561026e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b03831660006102958261036b565b905060008360038111156102ab576102ab6104e8565b036102dd576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061023c565b60018360038111156102f1576102f16104e8565b0361030757806040516020016101a491906105cd565b600283600381111561031b5761031b6104e8565b0361033157806040516020016101a49190610605565b6003836003811115610345576103456104e8565b0361023c576040516c485950455244524956452d575360981b6020820152602d0161022a565b60408051604d80825260808201909252606091906000908260208201818036833701905050905061039d600a85610647565b6103a8906030610671565b60f81b816103b7600185610684565b815181106103c7576103c7610697565b60200101906001600160f81b031916908160001a9053506103e9600a856106ad565b935060015b841561046a576103ff600a86610647565b61040a906030610671565b60f81b82600161041a8487610684565b6104249190610684565b8151811061043457610434610697565b60200101906001600160f81b031916908160001a905350610456600a866106ad565b945080610462816106c1565b9150506103ee565b918290030190815292915050565b60006020828403121561048a57600080fd5b5035919050565b60005b838110156104ac578181015183820152602001610494565b50506000910152565b60208152600082518060208401526104d4816040850160208701610491565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b604081016004841061052057634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561053d57600080fd5b82356004811061054c57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b815260008251610586816011850160208701610491565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516105c0816012850160208701610491565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105f8816010850160208701610491565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251610586816011850160208701610491565b634e487b7160e01b600052601260045260246000fd5b60008261065657610656610631565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156101035761010361065b565b818103818111156101035761010361065b565b634e487b7160e01b600052603260045260246000fd5b6000826106bc576106bc610631565b500490565b6000600182016106d3576106d361065b565b506001019056fea26469706673582212204632916dbdff7a7eccdabac5164d617aed7250181214391ab98a815ea320433064736f6c63430008140033";
        readonly sourceMap: "128:859:82:-:0;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610478565b6100de565b60405161007191906104b5565b60405180910390f35b61009c610088366004610478565b60f881901c916001600160f81b0390911690565b6040516100719291906104fe565b6100bd6100b836600461052a565b6100f2565b604051908152602001610071565b6100646100d9366004610478565b610109565b606060006100eb83610116565b9392505050565b6000806100ff8484610244565b9150505b92915050565b606060006100eb83610279565b606060f882901c6001600160f81b03831660006101328261036b565b90506000836003811115610148576101486104e8565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061023c565b600183600381111561018e5761018e6104e8565b036101ba57806040516020016101a4919061055a565b604051602081830303815290604052935061023c565b60028360038111156101ce576101ce6104e8565b036101e457806040516020016101a49190610593565b60038360038111156101f8576101f86104e8565b0361023c576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b60006001600160f81b0382111561026e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b03831660006102958261036b565b905060008360038111156102ab576102ab6104e8565b036102dd576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061023c565b60018360038111156102f1576102f16104e8565b0361030757806040516020016101a491906105cd565b600283600381111561031b5761031b6104e8565b0361033157806040516020016101a49190610605565b6003836003811115610345576103456104e8565b0361023c576040516c485950455244524956452d575360981b6020820152602d0161022a565b60408051604d80825260808201909252606091906000908260208201818036833701905050905061039d600a85610647565b6103a8906030610671565b60f81b816103b7600185610684565b815181106103c7576103c7610697565b60200101906001600160f81b031916908160001a9053506103e9600a856106ad565b935060015b841561046a576103ff600a86610647565b61040a906030610671565b60f81b82600161041a8487610684565b6104249190610684565b8151811061043457610434610697565b60200101906001600160f81b031916908160001a905350610456600a866106ad565b945080610462816106c1565b9150506103ee565b918290030190815292915050565b60006020828403121561048a57600080fd5b5035919050565b60005b838110156104ac578181015183820152602001610494565b50506000910152565b60208152600082518060208401526104d4816040850160208701610491565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b604081016004841061052057634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561053d57600080fd5b82356004811061054c57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b815260008251610586816011850160208701610491565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516105c0816012850160208701610491565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105f8816010850160208701610491565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251610586816011850160208701610491565b634e487b7160e01b600052601260045260246000fd5b60008261065657610656610631565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156101035761010361065b565b818103818111156101035761010361065b565b634e487b7160e01b600052603260045260246000fd5b6000826106bc576106bc610631565b500490565b6000600182016106d3576106d361065b565b506001019056fea26469706673582212204632916dbdff7a7eccdabac5164d617aed7250181214391ab98a815ea320433064736f6c63430008140033";
        readonly sourceMap: "128:859:82:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;635:161;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;380:249;;;;;;:::i;:::-;2200:4:71;2196:14;;;;-1:-1:-1;;;;;2253:120:71;;;;380:249:82;;;;;;;;;:::i;155:219::-;;;;;;:::i;:::-;;:::i;:::-;;;1904:25:184;;;1892:2;1877:18;155:219:82;1758:177:184;802:183:82;;;;;;:::i;:::-;;:::i;635:161::-;694:13;719:19;741:26;763:3;741:21;:26::i;:::-;719:48;635:161;-1:-1:-1;;;635:161:82:o;155:219::-;274:7;293:10;306:42;328:7;337:10;306:21;:42::i;:::-;293:55;-1:-1:-1;;155:219:82;;;;;:::o;802:183::-;877:13;902:21;926:28;950:3;926:23;:28::i;2533:719:71:-;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:71;2769:6;:26;;;;;;;;:::i;:::-;;2765:481;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:71;;;;;2765:481;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:395;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:395;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:265;;3084:10;3045:50;;;;;;;;:::i;2981:265::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:133;;3187:47;;3063:29:184;3187:47:71;;;3051:42:184;3109:12;;3187:47:71;;;;;;;;;;;;;3172:63;;3113:133;2627:625;;;2533:719;;;:::o;1198:469::-;1309:10;-1:-1:-1;;;;;1401:10:71;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:71;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:71;1620:18;;;;1617:34;;1198:469::o;3384:705::-;3459:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;3491:20;3589:19;2253:120;3589:8;:19::i;:::-;3562:46;-1:-1:-1;3632:16:71;3622:6;:26;;;;;;;;:::i;:::-;;3618:465;;3664:23;;;;;;;;;;;;;-1:-1:-1;;;3664:23:71;;;;;3618:465;;;3718:18;3708:6;:28;;;;;;;;:::i;:::-;;3704:379;;3804:10;3767:48;;;;;;;;:::i;3704:379::-;3847:19;3837:6;:29;;;;;;;;:::i;:::-;;3833:250;;3935:10;3897:49;;;;;;;;:::i;3833:250::-;3978:29;3968:6;:39;;;;;;;;:::i;:::-;;3964:119;;4038:33;;-1:-1:-1;;;4038:33:71;;;4241:28:184;4285:12;;4038:33:71;4039:264:184;4247:1154:71;4582:26;;;4545:2;4582:26;;;;;;;;;4316:20;;4545:2;4519:23;;4545:2;4582:26;;;;;;;;;;-1:-1:-1;;4557:51:71;-1:-1:-1;4841:9:71;4848:2;4841:4;:9;:::i;:::-;4840:16;;4854:2;4840:16;:::i;:::-;4806:62;;4773:9;4783:19;4801:1;4783:15;:19;:::i;:::-;4773:30;;;;;;;;:::i;:::-;;;;:95;-1:-1:-1;;;;;4773:95:71;;;;;;;;-1:-1:-1;4878:10:71;4886:2;4878:10;;:::i;:::-;;-1:-1:-1;4915:1:71;4926:201;4933:9;;4926:201;;5039:9;5046:2;5039:4;:9;:::i;:::-;5038:16;;5052:2;5038:16;:::i;:::-;5000:70;;4958:9;4995:1;4968:24;4986:6;4968:15;:24;:::i;:::-;:28;;;;:::i;:::-;4958:39;;;;;;;;:::i;:::-;;;;:112;-1:-1:-1;;;;;4958:112:71;;;;;;;;-1:-1:-1;5084:10:71;5092:2;5084:10;;:::i;:::-;;-1:-1:-1;5108:8:71;;;;:::i;:::-;;;;4926:201;;;5298:28;;;;5283:44;5340:22;;;5283:44;4247:1154;-1:-1:-1;;4247:1154:71:o;14:180:184:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:184;;14:180;-1:-1:-1;14:180:184:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:184;423:16;;416:27;199:250::o;454:396::-;603:2;592:9;585:21;566:4;635:6;629:13;678:6;673:2;662:9;658:18;651:34;694:79;766:6;761:2;750:9;746:18;741:2;733:6;729:15;694:79;:::i;:::-;834:2;813:15;-1:-1:-1;;809:29:184;794:45;;;;841:2;790:54;;454:396;-1:-1:-1;;454:396:184:o;855:127::-;916:10;911:3;907:20;904:1;897:31;947:4;944:1;937:15;971:4;968:1;961:15;987:418;1166:2;1151:18;;1199:1;1188:13;;1178:144;;1244:10;1239:3;1235:20;1232:1;1225:31;1279:4;1276:1;1269:15;1307:4;1304:1;1297:15;1178:144;1331:25;;;1387:2;1372:18;1365:34;987:418;:::o;1410:343::-;1497:6;1505;1558:2;1546:9;1537:7;1533:23;1529:32;1526:52;;;1574:1;1571;1564:12;1526:52;1613:9;1600:23;1652:1;1645:5;1642:12;1632:40;;1668:1;1665;1658:12;1632:40;1691:5;1743:2;1728:18;;;;1715:32;;-1:-1:-1;;;1410:343:184:o;1940:449::-;-1:-1:-1;;;2197:3:184;2190:32;2172:3;2251:6;2245:13;2267:75;2335:6;2330:2;2325:3;2321:12;2314:4;2306:6;2302:17;2267:75;:::i;:::-;2362:16;;;;2380:2;2358:25;;1940:449;-1:-1:-1;;1940:449:184:o;2394:450::-;-1:-1:-1;;;2651:3:184;2644:33;2626:3;2706:6;2700:13;2722:75;2790:6;2785:2;2780:3;2776:12;2769:4;2761:6;2757:17;2722:75;:::i;:::-;2817:16;;;;2835:2;2813:25;;2394:450;-1:-1:-1;;2394:450:184:o;3132:448::-;-1:-1:-1;;;3389:3:184;3382:31;3364:3;3442:6;3436:13;3458:75;3526:6;3521:2;3516:3;3512:12;3505:4;3497:6;3493:17;3458:75;:::i;:::-;3553:16;;;;3571:2;3549:25;;3132:448;-1:-1:-1;;3132:448:184:o;3585:449::-;-1:-1:-1;;;3842:3:184;3835:32;3817:3;3896:6;3890:13;3912:75;3980:6;3975:2;3970:3;3966:12;3959:4;3951:6;3947:17;3912:75;:::i;4440:127::-;4501:10;4496:3;4492:20;4489:1;4482:31;4532:4;4529:1;4522:15;4556:4;4553:1;4546:15;4572:112;4604:1;4630;4620:35;;4635:18;;:::i;:::-;-1:-1:-1;4669:9:184;;4572:112::o;4689:127::-;4750:10;4745:3;4741:20;4738:1;4731:31;4781:4;4778:1;4771:15;4805:4;4802:1;4795:15;4821:125;4886:9;;;4907:10;;;4904:36;;;4920:18;;:::i;4951:128::-;5018:9;;;5039:11;;;5036:37;;;5053:18;;:::i;5084:127::-;5145:10;5140:3;5136:20;5133:1;5126:31;5176:4;5173:1;5166:15;5200:4;5197:1;5190:15;5216:120;5256:1;5282;5272:35;;5287:18;;:::i;:::-;-1:-1:-1;5321:9:184;;5216:120::o;5341:135::-;5380:3;5401:17;;;5398:43;;5421:18;;:::i;:::-;-1:-1:-1;5468:1:184;5457:13;;5341:135::o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "assetIdToName(uint256)": "3c8c28ad";
        readonly "assetIdToSymbol(uint256)": "957462ac";
        readonly "decodeAssetId(uint256)": "6322c751";
        readonly "encodeAssetId(uint8,uint256)": "8a227c39";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToSymbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"decodeAssetId\",\"outputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"_prefix\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"encodeAssetId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockAssetId.sol\":\"MockAssetId\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/test/MockAssetId.sol\":{\"keccak256\":\"0x19bd2a30ab244563ce6cc5257888cad4c4e68a6f3efa47bc96729511782a8ea3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://512943e6850cc632926d507a65697c8b3222ef63343166a8b490ee826325305b\",\"dweb:/ipfs/QmWs4xELKzUTNbtm1diZsUwmJQoJDSBZrsdsckyLJhTu8Q\"]}},\"version\":1}";
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
                readonly keccak256: "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3";
                readonly urls: readonly ["bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398", "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16";
                readonly urls: readonly ["bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240", "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97";
                readonly urls: readonly ["bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1", "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd";
                readonly urls: readonly ["bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f", "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597";
                readonly urls: readonly ["bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477", "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a";
                readonly urls: readonly ["bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3", "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002";
                readonly urls: readonly ["bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3", "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191";
                readonly urls: readonly ["bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd", "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868";
                readonly urls: readonly ["bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb", "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2";
                readonly urls: readonly ["bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b", "dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst"];
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
        readonly id: 19394;
        readonly exportedSymbols: {
            readonly AssetId: readonly [13503];
            readonly MockAssetId: readonly [19393];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:949:82";
        readonly nodes: readonly [{
            readonly id: 19308;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:82";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 19310;
            readonly nodeType: "ImportDirective";
            readonly src: "64:62:82";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/AssetId.sol";
            readonly file: "contracts/src/libraries/AssetId.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19394;
            readonly sourceUnit: 13504;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19309;
                    readonly name: "AssetId";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 13503;
                    readonly src: "73:7:82";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19393;
            readonly nodeType: "ContractDefinition";
            readonly src: "128:859:82";
            readonly nodes: readonly [{
                readonly id: 19331;
                readonly nodeType: "FunctionDefinition";
                readonly src: "155:219:82";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19330;
                    readonly nodeType: "Block";
                    readonly src: "283:91:82";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19321];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19321;
                            readonly mutability: "mutable";
                            readonly name: "id";
                            readonly nameLocation: "301:2:82";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19330;
                            readonly src: "293:10:82";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19320;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "293:7:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19327;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 19324;
                                readonly name: "_prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19313;
                                readonly src: "328:7:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13209";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            }, {
                                readonly id: 19325;
                                readonly name: "_timestamp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19315;
                                readonly src: "337:10:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13209";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 19322;
                                    readonly name: "AssetId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13503;
                                    readonly src: "306:7:82";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$13503_$";
                                        readonly typeString: "type(library AssetId)";
                                    };
                                };
                                readonly id: 19323;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "314:13:82";
                                readonly memberName: "encodeAssetId";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 13232;
                                readonly src: "306:21:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_enum$_AssetIdPrefix_$13209_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19326;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "306:42:82";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "293:55:82";
                    }, {
                        readonly expression: {
                            readonly id: 19328;
                            readonly name: "id";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19321;
                            readonly src: "365:2:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19319;
                        readonly id: 19329;
                        readonly nodeType: "Return";
                        readonly src: "358:9:82";
                    }];
                };
                readonly functionSelector: "8a227c39";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "encodeAssetId";
                readonly nameLocation: "164:13:82";
                readonly parameters: {
                    readonly id: 19316;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19313;
                        readonly mutability: "mutable";
                        readonly name: "_prefix";
                        readonly nameLocation: "209:7:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19331;
                        readonly src: "187:29:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13209";
                            readonly typeString: "enum AssetId.AssetIdPrefix";
                        };
                        readonly typeName: {
                            readonly id: 19312;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 19311;
                                readonly name: "AssetId.AssetIdPrefix";
                                readonly nameLocations: readonly ["187:7:82", "195:13:82"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 13209;
                                readonly src: "187:21:82";
                            };
                            readonly referencedDeclaration: 13209;
                            readonly src: "187:21:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13209";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19315;
                        readonly mutability: "mutable";
                        readonly name: "_timestamp";
                        readonly nameLocation: "234:10:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19331;
                        readonly src: "226:18:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19314;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "226:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "177:73:82";
                };
                readonly returnParameters: {
                    readonly id: 19319;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19318;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19331;
                        readonly src: "274:7:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19317;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "274:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "273:9:82";
                };
                readonly scope: 19393;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 19358;
                readonly nodeType: "FunctionDefinition";
                readonly src: "380:249:82";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19357;
                    readonly nodeType: "Block";
                    readonly src: "485:144:82";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19345, 19347];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19345;
                            readonly mutability: "mutable";
                            readonly name: "prefix";
                            readonly nameLocation: "518:6:82";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19357;
                            readonly src: "496:28:82";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13209";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                            readonly typeName: {
                                readonly id: 19344;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 19343;
                                    readonly name: "AssetId.AssetIdPrefix";
                                    readonly nameLocations: readonly ["496:7:82", "504:13:82"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 13209;
                                    readonly src: "496:21:82";
                                };
                                readonly referencedDeclaration: 13209;
                                readonly src: "496:21:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13209";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 19347;
                            readonly mutability: "mutable";
                            readonly name: "timestamp";
                            readonly nameLocation: "534:9:82";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19357;
                            readonly src: "526:17:82";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19346;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "526:7:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19352;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 19350;
                                readonly name: "_id";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19333;
                                readonly src: "582:3:82";
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
                                    readonly id: 19348;
                                    readonly name: "AssetId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13503;
                                    readonly src: "547:7:82";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$13503_$";
                                        readonly typeString: "type(library AssetId)";
                                    };
                                };
                                readonly id: 19349;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "568:13:82";
                                readonly memberName: "decodeAssetId";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 13245;
                                readonly src: "547:34:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_enum$_AssetIdPrefix_$13209_$_t_uint256_$";
                                    readonly typeString: "function (uint256) pure returns (enum AssetId.AssetIdPrefix,uint256)";
                                };
                            };
                            readonly id: 19351;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "547:39:82";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_enum$_AssetIdPrefix_$13209_$_t_uint256_$";
                                readonly typeString: "tuple(enum AssetId.AssetIdPrefix,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "495:91:82";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 19353;
                                readonly name: "prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19345;
                                readonly src: "604:6:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13209";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            }, {
                                readonly id: 19354;
                                readonly name: "timestamp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19347;
                                readonly src: "612:9:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 19355;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "603:19:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_enum$_AssetIdPrefix_$13209_$_t_uint256_$";
                                readonly typeString: "tuple(enum AssetId.AssetIdPrefix,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 19340;
                        readonly id: 19356;
                        readonly nodeType: "Return";
                        readonly src: "596:26:82";
                    }];
                };
                readonly functionSelector: "6322c751";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "decodeAssetId";
                readonly nameLocation: "389:13:82";
                readonly parameters: {
                    readonly id: 19334;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19333;
                        readonly mutability: "mutable";
                        readonly name: "_id";
                        readonly nameLocation: "420:3:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19358;
                        readonly src: "412:11:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19332;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "412:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "402:27:82";
                };
                readonly returnParameters: {
                    readonly id: 19340;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19337;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19358;
                        readonly src: "453:21:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13209";
                            readonly typeString: "enum AssetId.AssetIdPrefix";
                        };
                        readonly typeName: {
                            readonly id: 19336;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 19335;
                                readonly name: "AssetId.AssetIdPrefix";
                                readonly nameLocations: readonly ["453:7:82", "461:13:82"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 13209;
                                readonly src: "453:21:82";
                            };
                            readonly referencedDeclaration: 13209;
                            readonly src: "453:21:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13209";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19339;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19358;
                        readonly src: "476:7:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19338;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "476:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "452:32:82";
                };
                readonly scope: 19393;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 19375;
                readonly nodeType: "FunctionDefinition";
                readonly src: "635:161:82";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19374;
                    readonly nodeType: "Block";
                    readonly src: "709:87:82";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19366];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19366;
                            readonly mutability: "mutable";
                            readonly name: "_name";
                            readonly nameLocation: "733:5:82";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19374;
                            readonly src: "719:19:82";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 19365;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "719:6:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19371;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 19369;
                                readonly name: "_id";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19360;
                                readonly src: "763:3:82";
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
                                    readonly id: 19367;
                                    readonly name: "AssetId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13503;
                                    readonly src: "741:7:82";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$13503_$";
                                        readonly typeString: "type(library AssetId)";
                                    };
                                };
                                readonly id: 19368;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "749:13:82";
                                readonly memberName: "assetIdToName";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 13329;
                                readonly src: "741:21:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (string memory)";
                                };
                            };
                            readonly id: 19370;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "741:26:82";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "719:48:82";
                    }, {
                        readonly expression: {
                            readonly id: 19372;
                            readonly name: "_name";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19366;
                            readonly src: "784:5:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 19364;
                        readonly id: 19373;
                        readonly nodeType: "Return";
                        readonly src: "777:12:82";
                    }];
                };
                readonly functionSelector: "3c8c28ad";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "assetIdToName";
                readonly nameLocation: "644:13:82";
                readonly parameters: {
                    readonly id: 19361;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19360;
                        readonly mutability: "mutable";
                        readonly name: "_id";
                        readonly nameLocation: "666:3:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19375;
                        readonly src: "658:11:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19359;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "658:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "657:13:82";
                };
                readonly returnParameters: {
                    readonly id: 19364;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19363;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19375;
                        readonly src: "694:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 19362;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "694:6:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "693:15:82";
                };
                readonly scope: 19393;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 19392;
                readonly nodeType: "FunctionDefinition";
                readonly src: "802:183:82";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19391;
                    readonly nodeType: "Block";
                    readonly src: "892:93:82";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19383];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19383;
                            readonly mutability: "mutable";
                            readonly name: "_symbol";
                            readonly nameLocation: "916:7:82";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19391;
                            readonly src: "902:21:82";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 19382;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "902:6:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19388;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 19386;
                                readonly name: "_id";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19377;
                                readonly src: "950:3:82";
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
                                    readonly id: 19384;
                                    readonly name: "AssetId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13503;
                                    readonly src: "926:7:82";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$13503_$";
                                        readonly typeString: "type(library AssetId)";
                                    };
                                };
                                readonly id: 19385;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "934:15:82";
                                readonly memberName: "assetIdToSymbol";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 13413;
                                readonly src: "926:23:82";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (string memory)";
                                };
                            };
                            readonly id: 19387;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "926:28:82";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "902:52:82";
                    }, {
                        readonly expression: {
                            readonly id: 19389;
                            readonly name: "_symbol";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19383;
                            readonly src: "971:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 19381;
                        readonly id: 19390;
                        readonly nodeType: "Return";
                        readonly src: "964:14:82";
                    }];
                };
                readonly functionSelector: "957462ac";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "assetIdToSymbol";
                readonly nameLocation: "811:15:82";
                readonly parameters: {
                    readonly id: 19378;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19377;
                        readonly mutability: "mutable";
                        readonly name: "_id";
                        readonly nameLocation: "844:3:82";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19392;
                        readonly src: "836:11:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19376;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "836:7:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "826:27:82";
                };
                readonly returnParameters: {
                    readonly id: 19381;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19380;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19392;
                        readonly src: "877:13:82";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 19379;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "877:6:82";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "876:15:82";
                };
                readonly scope: 19393;
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
            readonly linearizedBaseContracts: readonly [19393];
            readonly name: "MockAssetId";
            readonly nameLocation: "137:11:82";
            readonly scope: 19394;
            readonly usedErrors: readonly [7325];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 82;
};
//# sourceMappingURL=MockAssetId.d.ts.map