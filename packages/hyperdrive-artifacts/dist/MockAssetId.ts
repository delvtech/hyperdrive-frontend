export const MockAssetId = 
{
  "abi": [
    {
      "inputs": [],
      "name": "InvalidTimestamp",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "assetIdToName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "assetIdToSymbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "decodeAssetId",
      "outputs": [
        {
          "internalType": "enum AssetId.AssetIdPrefix",
          "name": "",
          "type": "uint8"
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
          "internalType": "enum AssetId.AssetIdPrefix",
          "name": "_prefix",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "encodeAssetId",
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
    "object": "0x608060405234801561001057600080fd5b50610710806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610478565b6100de565b60405161007191906104b5565b60405180910390f35b61009c610088366004610478565b60f881901c916001600160f81b0390911690565b6040516100719291906104fe565b6100bd6100b836600461052a565b6100f2565b604051908152602001610071565b6100646100d9366004610478565b610109565b606060006100eb83610116565b9392505050565b6000806100ff8484610244565b9150505b92915050565b606060006100eb83610279565b606060f882901c6001600160f81b03831660006101328261036b565b90506000836003811115610148576101486104e8565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061023c565b600183600381111561018e5761018e6104e8565b036101ba57806040516020016101a4919061055a565b604051602081830303815290604052935061023c565b60028360038111156101ce576101ce6104e8565b036101e457806040516020016101a49190610593565b60038360038111156101f8576101f86104e8565b0361023c576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b60006001600160f81b0382111561026e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b03831660006102958261036b565b905060008360038111156102ab576102ab6104e8565b036102dd576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061023c565b60018360038111156102f1576102f16104e8565b0361030757806040516020016101a491906105cd565b600283600381111561031b5761031b6104e8565b0361033157806040516020016101a49190610605565b6003836003811115610345576103456104e8565b0361023c576040516c485950455244524956452d575360981b6020820152602d0161022a565b60408051604d80825260808201909252606091906000908260208201818036833701905050905061039d600a85610647565b6103a8906030610671565b60f81b816103b7600185610684565b815181106103c7576103c7610697565b60200101906001600160f81b031916908160001a9053506103e9600a856106ad565b935060015b841561046a576103ff600a86610647565b61040a906030610671565b60f81b82600161041a8487610684565b6104249190610684565b8151811061043457610434610697565b60200101906001600160f81b031916908160001a905350610456600a866106ad565b945080610462816106c1565b9150506103ee565b918290030190815292915050565b60006020828403121561048a57600080fd5b5035919050565b60005b838110156104ac578181015183820152602001610494565b50506000910152565b60208152600082518060208401526104d4816040850160208701610491565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b604081016004841061052057634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561053d57600080fd5b82356004811061054c57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b815260008251610586816011850160208701610491565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516105c0816012850160208701610491565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105f8816010850160208701610491565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251610586816011850160208701610491565b634e487b7160e01b600052601260045260246000fd5b60008261065657610656610631565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156101035761010361065b565b818103818111156101035761010361065b565b634e487b7160e01b600052603260045260246000fd5b6000826106bc576106bc610631565b500490565b6000600182016106d3576106d361065b565b506001019056fea2646970667358221220759a8f99e01be518a996a64c7f85569a2f446b4194947c679f512a725a660cd564736f6c63430008130033",
    "sourceMap": "128:859:61:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610478565b6100de565b60405161007191906104b5565b60405180910390f35b61009c610088366004610478565b60f881901c916001600160f81b0390911690565b6040516100719291906104fe565b6100bd6100b836600461052a565b6100f2565b604051908152602001610071565b6100646100d9366004610478565b610109565b606060006100eb83610116565b9392505050565b6000806100ff8484610244565b9150505b92915050565b606060006100eb83610279565b606060f882901c6001600160f81b03831660006101328261036b565b90506000836003811115610148576101486104e8565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061023c565b600183600381111561018e5761018e6104e8565b036101ba57806040516020016101a4919061055a565b604051602081830303815290604052935061023c565b60028360038111156101ce576101ce6104e8565b036101e457806040516020016101a49190610593565b60038360038111156101f8576101f86104e8565b0361023c576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b60006001600160f81b0382111561026e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b03831660006102958261036b565b905060008360038111156102ab576102ab6104e8565b036102dd576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061023c565b60018360038111156102f1576102f16104e8565b0361030757806040516020016101a491906105cd565b600283600381111561031b5761031b6104e8565b0361033157806040516020016101a49190610605565b6003836003811115610345576103456104e8565b0361023c576040516c485950455244524956452d575360981b6020820152602d0161022a565b60408051604d80825260808201909252606091906000908260208201818036833701905050905061039d600a85610647565b6103a8906030610671565b60f81b816103b7600185610684565b815181106103c7576103c7610697565b60200101906001600160f81b031916908160001a9053506103e9600a856106ad565b935060015b841561046a576103ff600a86610647565b61040a906030610671565b60f81b82600161041a8487610684565b6104249190610684565b8151811061043457610434610697565b60200101906001600160f81b031916908160001a905350610456600a866106ad565b945080610462816106c1565b9150506103ee565b918290030190815292915050565b60006020828403121561048a57600080fd5b5035919050565b60005b838110156104ac578181015183820152602001610494565b50506000910152565b60208152600082518060208401526104d4816040850160208701610491565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b604081016004841061052057634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561053d57600080fd5b82356004811061054c57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b815260008251610586816011850160208701610491565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516105c0816012850160208701610491565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105f8816010850160208701610491565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251610586816011850160208701610491565b634e487b7160e01b600052601260045260246000fd5b60008261065657610656610631565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156101035761010361065b565b818103818111156101035761010361065b565b634e487b7160e01b600052603260045260246000fd5b6000826106bc576106bc610631565b500490565b6000600182016106d3576106d361065b565b506001019056fea2646970667358221220759a8f99e01be518a996a64c7f85569a2f446b4194947c679f512a725a660cd564736f6c63430008130033",
    "sourceMap": "128:859:61:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;635:161;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;380:249;;;;;;:::i;:::-;2200:4:50;2196:14;;;;-1:-1:-1;;;;;2253:120:50;;;;380:249:61;;;;;;;;;:::i;155:219::-;;;;;;:::i;:::-;;:::i;:::-;;;1904:25:161;;;1892:2;1877:18;155:219:61;1758:177:161;802:183:61;;;;;;:::i;:::-;;:::i;635:161::-;694:13;719:19;741:26;763:3;741:21;:26::i;:::-;719:48;635:161;-1:-1:-1;;;635:161:61:o;155:219::-;274:7;293:10;306:42;328:7;337:10;306:21;:42::i;:::-;293:55;-1:-1:-1;;155:219:61;;;;;:::o;802:183::-;877:13;902:21;926:28;950:3;926:23;:28::i;2533:719:50:-;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:50;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:50;2769:6;:26;;;;;;;;:::i;:::-;;2765:481;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:50;;;;;2765:481;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:395;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:395;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:265;;3084:10;3045:50;;;;;;;;:::i;2981:265::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:133;;3187:47;;3063:29:161;3187:47:50;;;3051:42:161;3109:12;;3187:47:50;;;;;;;;;;;;;3172:63;;3113:133;2627:625;;;2533:719;;;:::o;1198:469::-;1309:10;-1:-1:-1;;;;;1401:10:50;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:50;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:50;1620:18;;;;1617:34;;1198:469::o;3384:705::-;3459:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:50;;3491:20;3589:19;2253:120;3589:8;:19::i;:::-;3562:46;-1:-1:-1;3632:16:50;3622:6;:26;;;;;;;;:::i;:::-;;3618:465;;3664:23;;;;;;;;;;;;;-1:-1:-1;;;3664:23:50;;;;;3618:465;;;3718:18;3708:6;:28;;;;;;;;:::i;:::-;;3704:379;;3804:10;3767:48;;;;;;;;:::i;3704:379::-;3847:19;3837:6;:29;;;;;;;;:::i;:::-;;3833:250;;3935:10;3897:49;;;;;;;;:::i;3833:250::-;3978:29;3968:6;:39;;;;;;;;:::i;:::-;;3964:119;;4038:33;;-1:-1:-1;;;4038:33:50;;;4241:28:161;4285:12;;4038:33:50;4039:264:161;4247:1154:50;4582:26;;;4545:2;4582:26;;;;;;;;;4316:20;;4545:2;4519:23;;4545:2;4582:26;;;;;;;;;;-1:-1:-1;;4557:51:50;-1:-1:-1;4841:9:50;4848:2;4841:4;:9;:::i;:::-;4840:16;;4854:2;4840:16;:::i;:::-;4806:62;;4773:9;4783:19;4801:1;4783:15;:19;:::i;:::-;4773:30;;;;;;;;:::i;:::-;;;;:95;-1:-1:-1;;;;;4773:95:50;;;;;;;;-1:-1:-1;4878:10:50;4886:2;4878:10;;:::i;:::-;;-1:-1:-1;4915:1:50;4926:201;4933:9;;4926:201;;5039:9;5046:2;5039:4;:9;:::i;:::-;5038:16;;5052:2;5038:16;:::i;:::-;5000:70;;4958:9;4995:1;4968:24;4986:6;4968:15;:24;:::i;:::-;:28;;;;:::i;:::-;4958:39;;;;;;;;:::i;:::-;;;;:112;-1:-1:-1;;;;;4958:112:50;;;;;;;;-1:-1:-1;5084:10:50;5092:2;5084:10;;:::i;:::-;;-1:-1:-1;5108:8:50;;;;:::i;:::-;;;;4926:201;;;5298:28;;;;5283:44;5340:22;;;5283:44;4247:1154;-1:-1:-1;;4247:1154:50:o;14:180:161:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:161;;14:180;-1:-1:-1;14:180:161:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:161;423:16;;416:27;199:250::o;454:396::-;603:2;592:9;585:21;566:4;635:6;629:13;678:6;673:2;662:9;658:18;651:34;694:79;766:6;761:2;750:9;746:18;741:2;733:6;729:15;694:79;:::i;:::-;834:2;813:15;-1:-1:-1;;809:29:161;794:45;;;;841:2;790:54;;454:396;-1:-1:-1;;454:396:161:o;855:127::-;916:10;911:3;907:20;904:1;897:31;947:4;944:1;937:15;971:4;968:1;961:15;987:418;1166:2;1151:18;;1199:1;1188:13;;1178:144;;1244:10;1239:3;1235:20;1232:1;1225:31;1279:4;1276:1;1269:15;1307:4;1304:1;1297:15;1178:144;1331:25;;;1387:2;1372:18;1365:34;987:418;:::o;1410:343::-;1497:6;1505;1558:2;1546:9;1537:7;1533:23;1529:32;1526:52;;;1574:1;1571;1564:12;1526:52;1613:9;1600:23;1652:1;1645:5;1642:12;1632:40;;1668:1;1665;1658:12;1632:40;1691:5;1743:2;1728:18;;;;1715:32;;-1:-1:-1;;;1410:343:161:o;1940:449::-;-1:-1:-1;;;2197:3:161;2190:32;2172:3;2251:6;2245:13;2267:75;2335:6;2330:2;2325:3;2321:12;2314:4;2306:6;2302:17;2267:75;:::i;:::-;2362:16;;;;2380:2;2358:25;;1940:449;-1:-1:-1;;1940:449:161:o;2394:450::-;-1:-1:-1;;;2651:3:161;2644:33;2626:3;2706:6;2700:13;2722:75;2790:6;2785:2;2780:3;2776:12;2769:4;2761:6;2757:17;2722:75;:::i;:::-;2817:16;;;;2835:2;2813:25;;2394:450;-1:-1:-1;;2394:450:161:o;3132:448::-;-1:-1:-1;;;3389:3:161;3382:31;3364:3;3442:6;3436:13;3458:75;3526:6;3521:2;3516:3;3512:12;3505:4;3497:6;3493:17;3458:75;:::i;:::-;3553:16;;;;3571:2;3549:25;;3132:448;-1:-1:-1;;3132:448:161:o;3585:449::-;-1:-1:-1;;;3842:3:161;3835:32;3817:3;3896:6;3890:13;3912:75;3980:6;3975:2;3970:3;3966:12;3959:4;3951:6;3947:17;3912:75;:::i;4440:127::-;4501:10;4496:3;4492:20;4489:1;4482:31;4532:4;4529:1;4522:15;4556:4;4553:1;4546:15;4572:112;4604:1;4630;4620:35;;4635:18;;:::i;:::-;-1:-1:-1;4669:9:161;;4572:112::o;4689:127::-;4750:10;4745:3;4741:20;4738:1;4731:31;4781:4;4778:1;4771:15;4805:4;4802:1;4795:15;4821:125;4886:9;;;4907:10;;;4904:36;;;4920:18;;:::i;4951:128::-;5018:9;;;5039:11;;;5036:37;;;5053:18;;:::i;5084:127::-;5145:10;5140:3;5136:20;5133:1;5126:31;5176:4;5173:1;5166:15;5200:4;5197:1;5190:15;5216:120;5256:1;5282;5272:35;;5287:18;;:::i;:::-;-1:-1:-1;5321:9:161;;5216:120::o;5341:135::-;5380:3;5401:17;;;5398:43;;5421:18;;:::i;:::-;-1:-1:-1;5468:1:161;5457:13;;5341:135::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "assetIdToName(uint256)": "3c8c28ad",
    "assetIdToSymbol(uint256)": "957462ac",
    "decodeAssetId(uint256)": "6322c751",
    "encodeAssetId(uint8,uint256)": "8a227c39"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToSymbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"decodeAssetId\",\"outputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"_prefix\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"encodeAssetId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockAssetId.sol\":\"MockAssetId\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/test/MockAssetId.sol\":{\"keccak256\":\"0xed0dc7539d62e6578f9b65a76496ae38ea1c3694b8c763929d026da2aacc3b31\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9fd3d858f3829be2413709cedaa078d0778354fd9e211f5c22a3ed7b8c0c4d07\",\"dweb:/ipfs/QmWkRKdZ1ZjZV8JS4yZMR4XVqpgrGWAEYobYmvc4Gjp6Md\"]}},\"version\":1}",
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
          "name": "InvalidTimestamp"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "assetIdToName",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "assetIdToSymbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "decodeAssetId",
          "outputs": [
            {
              "internalType": "enum AssetId.AssetIdPrefix",
              "name": "",
              "type": "uint8"
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
              "internalType": "enum AssetId.AssetIdPrefix",
              "name": "_prefix",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "_timestamp",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "encodeAssetId",
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
        "contracts/test/MockAssetId.sol": "MockAssetId"
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
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a",
        "urls": [
          "bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a",
          "dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockAssetId.sol": {
        "keccak256": "0xed0dc7539d62e6578f9b65a76496ae38ea1c3694b8c763929d026da2aacc3b31",
        "urls": [
          "bzz-raw://9fd3d858f3829be2413709cedaa078d0778354fd9e211f5c22a3ed7b8c0c4d07",
          "dweb:/ipfs/QmWkRKdZ1ZjZV8JS4yZMR4XVqpgrGWAEYobYmvc4Gjp6Md"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockAssetId.sol",
    "id": 16390,
    "exportedSymbols": {
      "AssetId": [
        10382
      ],
      "MockAssetId": [
        16389
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:949:61",
    "nodes": [
      {
        "id": 16304,
        "nodeType": "PragmaDirective",
        "src": "39:23:61",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 16306,
        "nodeType": "ImportDirective",
        "src": "64:62:61",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "contracts/src/libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 16390,
        "sourceUnit": 10383,
        "symbolAliases": [
          {
            "foreign": {
              "id": 16305,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10382,
              "src": "73:7:61",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 16389,
        "nodeType": "ContractDefinition",
        "src": "128:859:61",
        "nodes": [
          {
            "id": 16327,
            "nodeType": "FunctionDefinition",
            "src": "155:219:61",
            "nodes": [],
            "body": {
              "id": 16326,
              "nodeType": "Block",
              "src": "283:91:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    16317
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16317,
                      "mutability": "mutable",
                      "name": "id",
                      "nameLocation": "301:2:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 16326,
                      "src": "293:10:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16316,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "293:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 16323,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 16320,
                        "name": "_prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16309,
                        "src": "328:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 16321,
                        "name": "_timestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16311,
                        "src": "337:10:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 16318,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10382,
                        "src": "306:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 16319,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "314:13:61",
                      "memberName": "encodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10111,
                      "src": "306:21:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$10088_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "306:42:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "293:55:61"
                },
                {
                  "expression": {
                    "id": 16324,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16317,
                    "src": "365:2:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16315,
                  "id": 16325,
                  "nodeType": "Return",
                  "src": "358:9:61"
                }
              ]
            },
            "functionSelector": "8a227c39",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "encodeAssetId",
            "nameLocation": "164:13:61",
            "parameters": {
              "id": 16312,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16309,
                  "mutability": "mutable",
                  "name": "_prefix",
                  "nameLocation": "209:7:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 16327,
                  "src": "187:29:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                    "typeString": "enum AssetId.AssetIdPrefix"
                  },
                  "typeName": {
                    "id": 16308,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 16307,
                      "name": "AssetId.AssetIdPrefix",
                      "nameLocations": [
                        "187:7:61",
                        "195:13:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 10088,
                      "src": "187:21:61"
                    },
                    "referencedDeclaration": 10088,
                    "src": "187:21:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                      "typeString": "enum AssetId.AssetIdPrefix"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16311,
                  "mutability": "mutable",
                  "name": "_timestamp",
                  "nameLocation": "234:10:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 16327,
                  "src": "226:18:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16310,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "177:73:61"
            },
            "returnParameters": {
              "id": 16315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16314,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16327,
                  "src": "274:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16313,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "273:9:61"
            },
            "scope": 16389,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 16354,
            "nodeType": "FunctionDefinition",
            "src": "380:249:61",
            "nodes": [],
            "body": {
              "id": 16353,
              "nodeType": "Block",
              "src": "485:144:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    16341,
                    16343
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16341,
                      "mutability": "mutable",
                      "name": "prefix",
                      "nameLocation": "518:6:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 16353,
                      "src": "496:28:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                        "typeString": "enum AssetId.AssetIdPrefix"
                      },
                      "typeName": {
                        "id": 16340,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 16339,
                          "name": "AssetId.AssetIdPrefix",
                          "nameLocations": [
                            "496:7:61",
                            "504:13:61"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 10088,
                          "src": "496:21:61"
                        },
                        "referencedDeclaration": 10088,
                        "src": "496:21:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 16343,
                      "mutability": "mutable",
                      "name": "timestamp",
                      "nameLocation": "534:9:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 16353,
                      "src": "526:17:61",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16342,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "526:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 16348,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 16346,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16329,
                        "src": "582:3:61",
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
                        }
                      ],
                      "expression": {
                        "id": 16344,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10382,
                        "src": "547:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 16345,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "568:13:61",
                      "memberName": "decodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10124,
                      "src": "547:34:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_enum$_AssetIdPrefix_$10088_$_t_uint256_$",
                        "typeString": "function (uint256) pure returns (enum AssetId.AssetIdPrefix,uint256)"
                      }
                    },
                    "id": 16347,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "547:39:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_enum$_AssetIdPrefix_$10088_$_t_uint256_$",
                      "typeString": "tuple(enum AssetId.AssetIdPrefix,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "495:91:61"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 16349,
                        "name": "prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16341,
                        "src": "604:6:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 16350,
                        "name": "timestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16343,
                        "src": "612:9:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 16351,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "603:19:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_enum$_AssetIdPrefix_$10088_$_t_uint256_$",
                      "typeString": "tuple(enum AssetId.AssetIdPrefix,uint256)"
                    }
                  },
                  "functionReturnParameters": 16336,
                  "id": 16352,
                  "nodeType": "Return",
                  "src": "596:26:61"
                }
              ]
            },
            "functionSelector": "6322c751",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decodeAssetId",
            "nameLocation": "389:13:61",
            "parameters": {
              "id": 16330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16329,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "420:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 16354,
                  "src": "412:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16328,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "412:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "402:27:61"
            },
            "returnParameters": {
              "id": 16336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16333,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16354,
                  "src": "453:21:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                    "typeString": "enum AssetId.AssetIdPrefix"
                  },
                  "typeName": {
                    "id": 16332,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 16331,
                      "name": "AssetId.AssetIdPrefix",
                      "nameLocations": [
                        "453:7:61",
                        "461:13:61"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 10088,
                      "src": "453:21:61"
                    },
                    "referencedDeclaration": 10088,
                    "src": "453:21:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                      "typeString": "enum AssetId.AssetIdPrefix"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16335,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16354,
                  "src": "476:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16334,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "452:32:61"
            },
            "scope": 16389,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 16371,
            "nodeType": "FunctionDefinition",
            "src": "635:161:61",
            "nodes": [],
            "body": {
              "id": 16370,
              "nodeType": "Block",
              "src": "709:87:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    16362
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16362,
                      "mutability": "mutable",
                      "name": "_name",
                      "nameLocation": "733:5:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 16370,
                      "src": "719:19:61",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 16361,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "719:6:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 16367,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 16365,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16356,
                        "src": "763:3:61",
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
                        }
                      ],
                      "expression": {
                        "id": 16363,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10382,
                        "src": "741:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 16364,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "749:13:61",
                      "memberName": "assetIdToName",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10208,
                      "src": "741:21:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 16366,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "741:26:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "719:48:61"
                },
                {
                  "expression": {
                    "id": 16368,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16362,
                    "src": "784:5:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 16360,
                  "id": 16369,
                  "nodeType": "Return",
                  "src": "777:12:61"
                }
              ]
            },
            "functionSelector": "3c8c28ad",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assetIdToName",
            "nameLocation": "644:13:61",
            "parameters": {
              "id": 16357,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16356,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "666:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 16371,
                  "src": "658:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16355,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "657:13:61"
            },
            "returnParameters": {
              "id": 16360,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16359,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16371,
                  "src": "694:13:61",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16358,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "694:6:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "693:15:61"
            },
            "scope": 16389,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 16388,
            "nodeType": "FunctionDefinition",
            "src": "802:183:61",
            "nodes": [],
            "body": {
              "id": 16387,
              "nodeType": "Block",
              "src": "892:93:61",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    16379
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16379,
                      "mutability": "mutable",
                      "name": "_symbol",
                      "nameLocation": "916:7:61",
                      "nodeType": "VariableDeclaration",
                      "scope": 16387,
                      "src": "902:21:61",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 16378,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "902:6:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 16384,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 16382,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16373,
                        "src": "950:3:61",
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
                        }
                      ],
                      "expression": {
                        "id": 16380,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10382,
                        "src": "926:7:61",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 16381,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "934:15:61",
                      "memberName": "assetIdToSymbol",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10292,
                      "src": "926:23:61",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 16383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "926:28:61",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "902:52:61"
                },
                {
                  "expression": {
                    "id": 16385,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16379,
                    "src": "971:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 16377,
                  "id": 16386,
                  "nodeType": "Return",
                  "src": "964:14:61"
                }
              ]
            },
            "functionSelector": "957462ac",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assetIdToSymbol",
            "nameLocation": "811:15:61",
            "parameters": {
              "id": 16374,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16373,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "844:3:61",
                  "nodeType": "VariableDeclaration",
                  "scope": 16388,
                  "src": "836:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16372,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "836:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "826:27:61"
            },
            "returnParameters": {
              "id": 16377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16376,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16388,
                  "src": "877:13:61",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16375,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "877:6:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "876:15:61"
            },
            "scope": 16389,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "MockAssetId",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          16389
        ],
        "name": "MockAssetId",
        "nameLocation": "137:11:61",
        "scope": 16390,
        "usedErrors": [
          4646
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 61
} as const;
