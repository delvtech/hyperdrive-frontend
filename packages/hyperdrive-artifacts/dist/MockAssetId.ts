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
    "object": "0x608060405234801561001057600080fd5b50610710806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610478565b6100de565b60405161007191906104b5565b60405180910390f35b61009c610088366004610478565b60f881901c916001600160f81b0390911690565b6040516100719291906104fe565b6100bd6100b836600461052a565b6100f2565b604051908152602001610071565b6100646100d9366004610478565b610109565b606060006100eb83610116565b9392505050565b6000806100ff8484610244565b9150505b92915050565b606060006100eb83610279565b606060f882901c6001600160f81b03831660006101328261036b565b90506000836003811115610148576101486104e8565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061023c565b600183600381111561018e5761018e6104e8565b036101ba57806040516020016101a4919061055a565b604051602081830303815290604052935061023c565b60028360038111156101ce576101ce6104e8565b036101e457806040516020016101a49190610593565b60038360038111156101f8576101f86104e8565b0361023c576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b60006001600160f81b0382111561026e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b03831660006102958261036b565b905060008360038111156102ab576102ab6104e8565b036102dd576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061023c565b60018360038111156102f1576102f16104e8565b0361030757806040516020016101a491906105cd565b600283600381111561031b5761031b6104e8565b0361033157806040516020016101a49190610605565b6003836003811115610345576103456104e8565b0361023c576040516c485950455244524956452d575360981b6020820152602d0161022a565b60408051604d80825260808201909252606091906000908260208201818036833701905050905061039d600a85610647565b6103a8906030610671565b60f81b816103b7600185610684565b815181106103c7576103c7610697565b60200101906001600160f81b031916908160001a9053506103e9600a856106ad565b935060015b841561046a576103ff600a86610647565b61040a906030610671565b60f81b82600161041a8487610684565b6104249190610684565b8151811061043457610434610697565b60200101906001600160f81b031916908160001a905350610456600a866106ad565b945080610462816106c1565b9150506103ee565b918290030190815292915050565b60006020828403121561048a57600080fd5b5035919050565b60005b838110156104ac578181015183820152602001610494565b50506000910152565b60208152600082518060208401526104d4816040850160208701610491565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b604081016004841061052057634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561053d57600080fd5b82356004811061054c57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b815260008251610586816011850160208701610491565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516105c0816012850160208701610491565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105f8816010850160208701610491565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251610586816011850160208701610491565b634e487b7160e01b600052601260045260246000fd5b60008261065657610656610631565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156101035761010361065b565b818103818111156101035761010361065b565b634e487b7160e01b600052603260045260246000fd5b6000826106bc576106bc610631565b500490565b6000600182016106d3576106d361065b565b506001019056fea26469706673582212203f13ee1b797a873f495b009cd5f99e2dbf6865cbf648149aa3724c8913767aef64736f6c63430008130033",
    "sourceMap": "128:859:51:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610478565b6100de565b60405161007191906104b5565b60405180910390f35b61009c610088366004610478565b60f881901c916001600160f81b0390911690565b6040516100719291906104fe565b6100bd6100b836600461052a565b6100f2565b604051908152602001610071565b6100646100d9366004610478565b610109565b606060006100eb83610116565b9392505050565b6000806100ff8484610244565b9150505b92915050565b606060006100eb83610279565b606060f882901c6001600160f81b03831660006101328261036b565b90506000836003811115610148576101486104e8565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061023c565b600183600381111561018e5761018e6104e8565b036101ba57806040516020016101a4919061055a565b604051602081830303815290604052935061023c565b60028360038111156101ce576101ce6104e8565b036101e457806040516020016101a49190610593565b60038360038111156101f8576101f86104e8565b0361023c576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b60006001600160f81b0382111561026e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b03831660006102958261036b565b905060008360038111156102ab576102ab6104e8565b036102dd576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061023c565b60018360038111156102f1576102f16104e8565b0361030757806040516020016101a491906105cd565b600283600381111561031b5761031b6104e8565b0361033157806040516020016101a49190610605565b6003836003811115610345576103456104e8565b0361023c576040516c485950455244524956452d575360981b6020820152602d0161022a565b60408051604d80825260808201909252606091906000908260208201818036833701905050905061039d600a85610647565b6103a8906030610671565b60f81b816103b7600185610684565b815181106103c7576103c7610697565b60200101906001600160f81b031916908160001a9053506103e9600a856106ad565b935060015b841561046a576103ff600a86610647565b61040a906030610671565b60f81b82600161041a8487610684565b6104249190610684565b8151811061043457610434610697565b60200101906001600160f81b031916908160001a905350610456600a866106ad565b945080610462816106c1565b9150506103ee565b918290030190815292915050565b60006020828403121561048a57600080fd5b5035919050565b60005b838110156104ac578181015183820152602001610494565b50506000910152565b60208152600082518060208401526104d4816040850160208701610491565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b604081016004841061052057634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561053d57600080fd5b82356004811061054c57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b815260008251610586816011850160208701610491565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516105c0816012850160208701610491565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105f8816010850160208701610491565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251610586816011850160208701610491565b634e487b7160e01b600052601260045260246000fd5b60008261065657610656610631565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156101035761010361065b565b818103818111156101035761010361065b565b634e487b7160e01b600052603260045260246000fd5b6000826106bc576106bc610631565b500490565b6000600182016106d3576106d361065b565b506001019056fea26469706673582212203f13ee1b797a873f495b009cd5f99e2dbf6865cbf648149aa3724c8913767aef64736f6c63430008130033",
    "sourceMap": "128:859:51:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;635:161;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;380:249;;;;;;:::i;:::-;2200:4:41;2196:14;;;;-1:-1:-1;;;;;2253:120:41;;;;380:249:51;;;;;;;;;:::i;155:219::-;;;;;;:::i;:::-;;:::i;:::-;;;1902:25:149;;;1890:2;1875:18;155:219:51;1756:177:149;802:183:51;;;;;;:::i;:::-;;:::i;635:161::-;694:13;719:19;741:26;763:3;741:21;:26::i;:::-;719:48;635:161;-1:-1:-1;;;635:161:51:o;155:219::-;274:7;293:10;306:42;328:7;337:10;306:21;:42::i;:::-;293:55;-1:-1:-1;;155:219:51;;;;;:::o;802:183::-;877:13;902:21;926:28;950:3;926:23;:28::i;2533:719:41:-;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:41;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:41;2769:6;:26;;;;;;;;:::i;:::-;;2765:481;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:41;;;;;2765:481;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:395;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:395;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:265;;3084:10;3045:50;;;;;;;;:::i;2981:265::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:133;;3187:47;;3061:29:149;3187:47:41;;;3049:42:149;3107:12;;3187:47:41;;;;;;;;;;;;;3172:63;;3113:133;2627:625;;;2533:719;;;:::o;1198:469::-;1309:10;-1:-1:-1;;;;;1401:10:41;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:41;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:41;1620:18;;;;1617:34;;1198:469::o;3384:705::-;3459:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:41;;3491:20;3589:19;2253:120;3589:8;:19::i;:::-;3562:46;-1:-1:-1;3632:16:41;3622:6;:26;;;;;;;;:::i;:::-;;3618:465;;3664:23;;;;;;;;;;;;;-1:-1:-1;;;3664:23:41;;;;;3618:465;;;3718:18;3708:6;:28;;;;;;;;:::i;:::-;;3704:379;;3804:10;3767:48;;;;;;;;:::i;3704:379::-;3847:19;3837:6;:29;;;;;;;;:::i;:::-;;3833:250;;3935:10;3897:49;;;;;;;;:::i;3833:250::-;3978:29;3968:6;:39;;;;;;;;:::i;:::-;;3964:119;;4038:33;;-1:-1:-1;;;4038:33:41;;;4239:28:149;4283:12;;4038:33:41;4037:264:149;4247:1154:41;4582:26;;;4545:2;4582:26;;;;;;;;;4316:20;;4545:2;4519:23;;4545:2;4582:26;;;;;;;;;;-1:-1:-1;;4557:51:41;-1:-1:-1;4841:9:41;4848:2;4841:4;:9;:::i;:::-;4840:16;;4854:2;4840:16;:::i;:::-;4806:62;;4773:9;4783:19;4801:1;4783:15;:19;:::i;:::-;4773:30;;;;;;;;:::i;:::-;;;;:95;-1:-1:-1;;;;;4773:95:41;;;;;;;;-1:-1:-1;4878:10:41;4886:2;4878:10;;:::i;:::-;;-1:-1:-1;4915:1:41;4926:201;4933:9;;4926:201;;5039:9;5046:2;5039:4;:9;:::i;:::-;5038:16;;5052:2;5038:16;:::i;:::-;5000:70;;4958:9;4995:1;4968:24;4986:6;4968:15;:24;:::i;:::-;:28;;;;:::i;:::-;4958:39;;;;;;;;:::i;:::-;;;;:112;-1:-1:-1;;;;;4958:112:41;;;;;;;;-1:-1:-1;5084:10:41;5092:2;5084:10;;:::i;:::-;;-1:-1:-1;5108:8:41;;;;:::i;:::-;;;;4926:201;;;5298:28;;;;5283:44;5340:22;;;5283:44;4247:1154;-1:-1:-1;;4247:1154:41:o;14:180:149:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:149;;14:180;-1:-1:-1;14:180:149:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:149;423:16;;416:27;199:250::o;454:396::-;603:2;592:9;585:21;566:4;635:6;629:13;678:6;673:2;662:9;658:18;651:34;694:79;766:6;761:2;750:9;746:18;741:2;733:6;729:15;694:79;:::i;:::-;834:2;813:15;-1:-1:-1;;809:29:149;794:45;;;;841:2;790:54;;454:396;-1:-1:-1;;454:396:149:o;855:127::-;916:10;911:3;907:20;904:1;897:31;947:4;944:1;937:15;971:4;968:1;961:15;987:417;1165:2;1150:18;;1198:1;1187:13;;1177:144;;1243:10;1238:3;1234:20;1231:1;1224:31;1278:4;1275:1;1268:15;1306:4;1303:1;1296:15;1177:144;1330:25;;;1386:2;1371:18;1364:34;987:417;:::o;1409:342::-;1495:6;1503;1556:2;1544:9;1535:7;1531:23;1527:32;1524:52;;;1572:1;1569;1562:12;1524:52;1611:9;1598:23;1650:1;1643:5;1640:12;1630:40;;1666:1;1663;1656:12;1630:40;1689:5;1741:2;1726:18;;;;1713:32;;-1:-1:-1;;;1409:342:149:o;1938:449::-;-1:-1:-1;;;2195:3:149;2188:32;2170:3;2249:6;2243:13;2265:75;2333:6;2328:2;2323:3;2319:12;2312:4;2304:6;2300:17;2265:75;:::i;:::-;2360:16;;;;2378:2;2356:25;;1938:449;-1:-1:-1;;1938:449:149:o;2392:450::-;-1:-1:-1;;;2649:3:149;2642:33;2624:3;2704:6;2698:13;2720:75;2788:6;2783:2;2778:3;2774:12;2767:4;2759:6;2755:17;2720:75;:::i;:::-;2815:16;;;;2833:2;2811:25;;2392:450;-1:-1:-1;;2392:450:149:o;3130:448::-;-1:-1:-1;;;3387:3:149;3380:31;3362:3;3440:6;3434:13;3456:75;3524:6;3519:2;3514:3;3510:12;3503:4;3495:6;3491:17;3456:75;:::i;:::-;3551:16;;;;3569:2;3547:25;;3130:448;-1:-1:-1;;3130:448:149:o;3583:449::-;-1:-1:-1;;;3840:3:149;3833:32;3815:3;3894:6;3888:13;3910:75;3978:6;3973:2;3968:3;3964:12;3957:4;3949:6;3945:17;3910:75;:::i;4438:127::-;4499:10;4494:3;4490:20;4487:1;4480:31;4530:4;4527:1;4520:15;4554:4;4551:1;4544:15;4570:112;4602:1;4628;4618:35;;4633:18;;:::i;:::-;-1:-1:-1;4667:9:149;;4570:112::o;4687:127::-;4748:10;4743:3;4739:20;4736:1;4729:31;4779:4;4776:1;4769:15;4803:4;4800:1;4793:15;4819:125;4884:9;;;4905:10;;;4902:36;;;4918:18;;:::i;4949:128::-;5016:9;;;5037:11;;;5034:37;;;5051:18;;:::i;5082:127::-;5143:10;5138:3;5134:20;5131:1;5124:31;5174:4;5171:1;5164:15;5198:4;5195:1;5188:15;5214:120;5254:1;5280;5270:35;;5285:18;;:::i;:::-;-1:-1:-1;5319:9:149;;5214:120::o;5339:135::-;5378:3;5399:17;;;5396:43;;5419:18;;:::i;:::-;-1:-1:-1;5466:1:149;5455:13;;5339:135::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "assetIdToName(uint256)": "3c8c28ad",
    "assetIdToSymbol(uint256)": "957462ac",
    "decodeAssetId(uint256)": "6322c751",
    "encodeAssetId(uint8,uint256)": "8a227c39"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToSymbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"decodeAssetId\",\"outputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"_prefix\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"encodeAssetId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockAssetId.sol\":\"MockAssetId\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/test/MockAssetId.sol\":{\"keccak256\":\"0xed0dc7539d62e6578f9b65a76496ae38ea1c3694b8c763929d026da2aacc3b31\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9fd3d858f3829be2413709cedaa078d0778354fd9e211f5c22a3ed7b8c0c4d07\",\"dweb:/ipfs/QmWkRKdZ1ZjZV8JS4yZMR4XVqpgrGWAEYobYmvc4Gjp6Md\"]}},\"version\":1}",
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
        "keccak256": "0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5",
        "urls": [
          "bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70",
          "dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3"
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
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
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
    "id": 13324,
    "exportedSymbols": {
      "AssetId": [
        9781
      ],
      "MockAssetId": [
        13323
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:949:51",
    "nodes": [
      {
        "id": 13238,
        "nodeType": "PragmaDirective",
        "src": "39:23:51",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 13240,
        "nodeType": "ImportDirective",
        "src": "64:62:51",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "contracts/src/libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13324,
        "sourceUnit": 9782,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13239,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9781,
              "src": "73:7:51",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13323,
        "nodeType": "ContractDefinition",
        "src": "128:859:51",
        "nodes": [
          {
            "id": 13261,
            "nodeType": "FunctionDefinition",
            "src": "155:219:51",
            "nodes": [],
            "body": {
              "id": 13260,
              "nodeType": "Block",
              "src": "283:91:51",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13251
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13251,
                      "mutability": "mutable",
                      "name": "id",
                      "nameLocation": "301:2:51",
                      "nodeType": "VariableDeclaration",
                      "scope": 13260,
                      "src": "293:10:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13250,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "293:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13257,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13254,
                        "name": "_prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13243,
                        "src": "328:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 13255,
                        "name": "_timestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13245,
                        "src": "337:10:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 13252,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9781,
                        "src": "306:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 13253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "314:13:51",
                      "memberName": "encodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9510,
                      "src": "306:21:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$9487_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "306:42:51",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "293:55:51"
                },
                {
                  "expression": {
                    "id": 13258,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13251,
                    "src": "365:2:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13249,
                  "id": 13259,
                  "nodeType": "Return",
                  "src": "358:9:51"
                }
              ]
            },
            "functionSelector": "8a227c39",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "encodeAssetId",
            "nameLocation": "164:13:51",
            "parameters": {
              "id": 13246,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13243,
                  "mutability": "mutable",
                  "name": "_prefix",
                  "nameLocation": "209:7:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 13261,
                  "src": "187:29:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                    "typeString": "enum AssetId.AssetIdPrefix"
                  },
                  "typeName": {
                    "id": 13242,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 13241,
                      "name": "AssetId.AssetIdPrefix",
                      "nameLocations": [
                        "187:7:51",
                        "195:13:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 9487,
                      "src": "187:21:51"
                    },
                    "referencedDeclaration": 9487,
                    "src": "187:21:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                      "typeString": "enum AssetId.AssetIdPrefix"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13245,
                  "mutability": "mutable",
                  "name": "_timestamp",
                  "nameLocation": "234:10:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 13261,
                  "src": "226:18:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13244,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "177:73:51"
            },
            "returnParameters": {
              "id": 13249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13248,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13261,
                  "src": "274:7:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13247,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "273:9:51"
            },
            "scope": 13323,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13288,
            "nodeType": "FunctionDefinition",
            "src": "380:249:51",
            "nodes": [],
            "body": {
              "id": 13287,
              "nodeType": "Block",
              "src": "485:144:51",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13275,
                    13277
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13275,
                      "mutability": "mutable",
                      "name": "prefix",
                      "nameLocation": "518:6:51",
                      "nodeType": "VariableDeclaration",
                      "scope": 13287,
                      "src": "496:28:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                        "typeString": "enum AssetId.AssetIdPrefix"
                      },
                      "typeName": {
                        "id": 13274,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 13273,
                          "name": "AssetId.AssetIdPrefix",
                          "nameLocations": [
                            "496:7:51",
                            "504:13:51"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 9487,
                          "src": "496:21:51"
                        },
                        "referencedDeclaration": 9487,
                        "src": "496:21:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 13277,
                      "mutability": "mutable",
                      "name": "timestamp",
                      "nameLocation": "534:9:51",
                      "nodeType": "VariableDeclaration",
                      "scope": 13287,
                      "src": "526:17:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13276,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "526:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13282,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13280,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13263,
                        "src": "582:3:51",
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
                        "id": 13278,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9781,
                        "src": "547:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 13279,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "568:13:51",
                      "memberName": "decodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9523,
                      "src": "547:34:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_enum$_AssetIdPrefix_$9487_$_t_uint256_$",
                        "typeString": "function (uint256) pure returns (enum AssetId.AssetIdPrefix,uint256)"
                      }
                    },
                    "id": 13281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "547:39:51",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_enum$_AssetIdPrefix_$9487_$_t_uint256_$",
                      "typeString": "tuple(enum AssetId.AssetIdPrefix,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "495:91:51"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 13283,
                        "name": "prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13275,
                        "src": "604:6:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 13284,
                        "name": "timestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13277,
                        "src": "612:9:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 13285,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "603:19:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_enum$_AssetIdPrefix_$9487_$_t_uint256_$",
                      "typeString": "tuple(enum AssetId.AssetIdPrefix,uint256)"
                    }
                  },
                  "functionReturnParameters": 13270,
                  "id": 13286,
                  "nodeType": "Return",
                  "src": "596:26:51"
                }
              ]
            },
            "functionSelector": "6322c751",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decodeAssetId",
            "nameLocation": "389:13:51",
            "parameters": {
              "id": 13264,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13263,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "420:3:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 13288,
                  "src": "412:11:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13262,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "412:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "402:27:51"
            },
            "returnParameters": {
              "id": 13270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13267,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13288,
                  "src": "453:21:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                    "typeString": "enum AssetId.AssetIdPrefix"
                  },
                  "typeName": {
                    "id": 13266,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 13265,
                      "name": "AssetId.AssetIdPrefix",
                      "nameLocations": [
                        "453:7:51",
                        "461:13:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 9487,
                      "src": "453:21:51"
                    },
                    "referencedDeclaration": 9487,
                    "src": "453:21:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                      "typeString": "enum AssetId.AssetIdPrefix"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13269,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13288,
                  "src": "476:7:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13268,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "452:32:51"
            },
            "scope": 13323,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13305,
            "nodeType": "FunctionDefinition",
            "src": "635:161:51",
            "nodes": [],
            "body": {
              "id": 13304,
              "nodeType": "Block",
              "src": "709:87:51",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13296
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13296,
                      "mutability": "mutable",
                      "name": "_name",
                      "nameLocation": "733:5:51",
                      "nodeType": "VariableDeclaration",
                      "scope": 13304,
                      "src": "719:19:51",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 13295,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "719:6:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13301,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13299,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13290,
                        "src": "763:3:51",
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
                        "id": 13297,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9781,
                        "src": "741:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 13298,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "749:13:51",
                      "memberName": "assetIdToName",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9607,
                      "src": "741:21:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 13300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "741:26:51",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "719:48:51"
                },
                {
                  "expression": {
                    "id": 13302,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13296,
                    "src": "784:5:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 13294,
                  "id": 13303,
                  "nodeType": "Return",
                  "src": "777:12:51"
                }
              ]
            },
            "functionSelector": "3c8c28ad",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assetIdToName",
            "nameLocation": "644:13:51",
            "parameters": {
              "id": 13291,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13290,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "666:3:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 13305,
                  "src": "658:11:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13289,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "657:13:51"
            },
            "returnParameters": {
              "id": 13294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13293,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13305,
                  "src": "694:13:51",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13292,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "694:6:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "693:15:51"
            },
            "scope": 13323,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13322,
            "nodeType": "FunctionDefinition",
            "src": "802:183:51",
            "nodes": [],
            "body": {
              "id": 13321,
              "nodeType": "Block",
              "src": "892:93:51",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13313
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13313,
                      "mutability": "mutable",
                      "name": "_symbol",
                      "nameLocation": "916:7:51",
                      "nodeType": "VariableDeclaration",
                      "scope": 13321,
                      "src": "902:21:51",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 13312,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "902:6:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13318,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 13316,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13307,
                        "src": "950:3:51",
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
                        "id": 13314,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9781,
                        "src": "926:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 13315,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "934:15:51",
                      "memberName": "assetIdToSymbol",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9691,
                      "src": "926:23:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 13317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "926:28:51",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "902:52:51"
                },
                {
                  "expression": {
                    "id": 13319,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13313,
                    "src": "971:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 13311,
                  "id": 13320,
                  "nodeType": "Return",
                  "src": "964:14:51"
                }
              ]
            },
            "functionSelector": "957462ac",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assetIdToSymbol",
            "nameLocation": "811:15:51",
            "parameters": {
              "id": 13308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13307,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "844:3:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 13322,
                  "src": "836:11:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13306,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "836:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "826:27:51"
            },
            "returnParameters": {
              "id": 13311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13310,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13322,
                  "src": "877:13:51",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13309,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "877:6:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "876:15:51"
            },
            "scope": 13323,
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
          13323
        ],
        "name": "MockAssetId",
        "nameLocation": "137:11:51",
        "scope": 13324,
        "usedErrors": [
          3730
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 51
} as const;
